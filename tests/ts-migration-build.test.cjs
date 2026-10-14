const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');
const { spawnSync } = require('node:child_process');
const { syncBuiltinESMExports } = require('node:module');
const { fileURLToPath } = require('node:url');
const baseline = require('./support/approved-content.cjs').approved;
const root = path.resolve(__dirname, '..');
const report = path.resolve(root, '../reports/content-navigation-repair-2026-10-14');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
function modules() {
  assert.ok(fs.existsSync(path.join(root, '.build/site/build/write-output.mjs')), 'safe build implementation must exist');
  return { ...require('../.build/site/build/write-output.mjs'), ...require('../.build/site/build/render-site.mjs'),
    ...require('../.build/site/build/copy-assets.mjs'), ...require('../.build/site/content/pages.mjs'),
    ...require('../.build/site/baseline.mjs'), comparePublicOutput:require('./support/approved-content.cjs').compareApprovedOutput };
}
function fixture(t) {
  const dir = fs.mkdtempSync(path.join(report, 'build-test-'));
  assert.ok(path.relative(report, dir) && !path.relative(report, dir).startsWith('..'));
  t.after(() => {
    assert.ok(path.resolve(dir).startsWith(`${report}${path.sep}`));
    fs.rmSync(dir, { recursive: true, force: true });
  });
  const sourceRoot = path.join(dir, 'assets'), outDir = path.join(dir, 'output');
  fs.mkdirSync(sourceRoot);
  for (const file of Object.keys(baseline.assets)) {
    fs.mkdirSync(path.dirname(path.join(sourceRoot, file)), { recursive: true });
    fs.copyFileSync(path.join(root, file), path.join(sourceRoot, file));
  }
  return { dir, sourceRoot, outDir };
}
function inventory(dir, prefix = '') {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const file = `${prefix}${e.name}`;
    return e.isDirectory() ? inventory(path.join(dir, e.name), `${file}/`) : [file];
  }).sort();
}
function hashes(dir) { return Object.fromEntries(inventory(dir).map(file => [file, hash(fs.readFileSync(path.join(dir, file)))])); }
const expectedFiles = [...Object.keys(baseline.pages), ...Object.keys(baseline.assets), ...Object.keys(baseline.artifacts)].sort();


// A root-HTML, old-dist, or CommonJS-data fallback must fail even when the real
// checkout happens to contain those files. Sync ESM bindings exercise the reader
// used by production modules; the guard is installed before loading the builder.
test('cold_build_does_not_depend_on_old_html', t => {
  const f = fixture(t);
  const original = fs.readFileSync, blocked = [];
  fs.readFileSync = function(file, ...args) {
    const target = file instanceof URL ? fileURLToPath(file) : typeof file === 'string' ? path.resolve(file) : '';
    const rel = path.relative(root, target).replaceAll('\\', '/');
    const fixtureRel = path.relative(f.sourceRoot, target).replaceAll('\\', '/');
    if (/^[^/]+\.html$/.test(rel) || rel.startsWith('dist/') || /^data\/.*\.cjs$/.test(rel)
      || /^[^/]+\.html$/.test(fixtureRel) || fixtureRel.startsWith('dist/') || /^data\/.*\.cjs$/.test(fixtureRel)) {
      blocked.push(target); throw new Error('Forbidden old content read');
    }
    return original.call(this, file, ...args);
  };
  syncBuiltinESMExports();
  let result, comparePublicOutput;
  try { const loaded = modules(); comparePublicOutput = loaded.comparePublicOutput; result = loaded.buildSite(f); }
  finally { fs.readFileSync = original; syncBuiltinESMExports(); }
  assert.deepEqual(blocked, []);
  assert.equal(result.pages, 48);
  assert.equal(result.sitemapUrls, 47);
  assert.deepEqual(result.written, expectedFiles);
  assert.deepEqual(result.differences, []);
  assert.deepEqual(comparePublicOutput(f.outDir, baseline), []);
  assert.deepEqual(inventory(f.outDir), expectedFiles);
});

test('output_is_stable_and_scoped', t => {
  const { buildSite } = modules(), f = fixture(t);
  buildSite(f); const before = hashes(f.outDir);
  buildSite(f); assert.deepEqual(hashes(f.outDir), before);
  for (const outDir of [root, path.dirname(root), report, path.dirname(report), f.dir, f.sourceRoot, path.parse(root).root, path.join(root, 'tests/output')]) {
    assert.throws(() => buildSite({ ...f, outDir }), /unsafe|output|scope|directory/i, outDir);
  }
  assert.throws(() => buildSite({ ...f, mirrorRoot: root }), /mirror|compatibility/i);
  assert.deepEqual(hashes(f.outDir), before);
});

test('private_files_never_enter_public_output', t => {
  const { buildSite, copyPublicAssets } = modules(), f = fixture(t);
  for (const file of ['.env', 'credentials.json', 'site/private.mts', 'tests/private.js', 'reports/private.txt', 'node_modules/private.js', 'site.js.map', 'api/enquiry.js', '.vercel/project.json']) {
    fs.mkdirSync(path.dirname(path.join(f.sourceRoot, file)), { recursive: true });
    fs.writeFileSync(path.join(f.sourceRoot, file), 'PRIVATE_SENTINEL');
    assert.throws(() => copyPublicAssets(f.sourceRoot, f.outDir, [file]), /asset|public|path|allow/i);
  }
  buildSite(f);
  assert.deepEqual(inventory(f.outDir), expectedFiles);
  for (const [file, expected] of Object.entries(baseline.assets)) assert.equal(hash(fs.readFileSync(path.join(f.outDir, file))), expected, file);
});

test('missing_assets_fail_before_touching_valid_output', t => {
  const { buildSite } = modules(), f = fixture(t);
  buildSite(f); const before = hashes(f.outDir);
  fs.unlinkSync(path.join(f.sourceRoot, 'site.css'));
  assert.throws(() => buildSite(f), /asset|missing|ENOENT/i);
  assert.deepEqual(hashes(f.outDir), before);
});

test('missing_canonical_page_fails_with_stale_output_present', t => {
  const { buildSite } = modules(), f = fixture(t);
  buildSite(f); const before = hashes(f.outDir);
  // Separate module graph: remove one actual canonical record, keeping the stale
  // valid output and every old root HTML file available to catch fallback reads.
  const runtime = path.join(f.dir, 'runtime');
  fs.cpSync(path.join(root, '.build/site'), path.join(runtime, '.build/site'), { recursive: true });
  fs.mkdirSync(path.join(runtime, 'data'));
  for (const file of ['perth-suburbs.json', 'editorial-content-dates.json', 'sitemap-content-dates.json']) fs.copyFileSync(path.join(root, 'data', file), path.join(runtime, 'data', file));
  fs.symlinkSync(path.join(root, 'node_modules'), path.join(runtime, 'node_modules'), 'junction');
  const records = path.join(runtime, '.build/site/content/records.mjs');
  fs.appendFileSync(records, '\ncanonicalPages.pop();\n');
  const code = `const {buildSite}=require(${JSON.stringify(path.join(runtime, '.build/site/build/write-output.mjs'))});buildSite(${JSON.stringify({sourceRoot:f.sourceRoot,outDir:f.outDir})});`;
  const child = spawnSync(process.execPath, ['-e', code], { encoding: 'utf8' });
  assert.notEqual(child.status, 0);
  assert.match(child.stderr, /missing|invalid site content/i);
  assert.deepEqual(hashes(f.outDir), before);
});

test('unexpected_existing_public_files_are_rejected_and_preserved', t => {
  const { buildSite } = modules(), f = fixture(t);
  buildSite(f); const before = hashes(f.outDir);
  fs.writeFileSync(path.join(f.outDir, 'credentials.json'), 'PRIVATE_EXISTING');
  assert.throws(() => buildSite(f), /unexpected|unowned|public/i);
  assert.equal(fs.readFileSync(path.join(f.outDir, 'credentials.json'), 'utf8'), 'PRIVATE_EXISTING');
  fs.unlinkSync(path.join(f.outDir, 'credentials.json'));
  assert.deepEqual(hashes(f.outDir), before);
});

test('unowned_or_edited_output_is_never_overwritten', t => {
  const { buildSite } = modules(), f = fixture(t);
  fs.mkdirSync(f.outDir); fs.writeFileSync(path.join(f.outDir, 'index.html'), 'USER_FILE');
  assert.throws(() => buildSite(f), /owner|unowned|manifest/i);
  assert.equal(fs.readFileSync(path.join(f.outDir, 'index.html'), 'utf8'), 'USER_FILE');
  fs.unlinkSync(path.join(f.outDir, 'index.html'));
  buildSite(f);
  fs.writeFileSync(path.join(f.outDir, 'index.html'), 'USER_EDIT');
  assert.throws(() => buildSite(f), /edited|hash|modified|owner/i);
  assert.equal(fs.readFileSync(path.join(f.outDir, 'index.html'), 'utf8'), 'USER_EDIT');
});

test('output_file_directory_conflicts_fail_before_any_write', t => {
  const { buildSite } = modules(), f = fixture(t);
  buildSite(f);
  fs.unlinkSync(path.join(f.outDir, 'site.css'));
  fs.mkdirSync(path.join(f.outDir, 'site.css'));
  const before = fs.statSync(path.join(f.outDir, 'index.html')).mtimeMs;
  assert.throws(() => buildSite(f), /directory|regular file|unexpected/i);
  assert.equal(fs.statSync(path.join(f.outDir, 'index.html')).mtimeMs, before);
});

test('occupied_manifest_parent_fails_before_public_or_mirror_writes', t => {
  modules(); const f = fixture(t);
  fs.writeFileSync(path.join(f.sourceRoot, 'index.html'), 'EXISTING_MIRROR');
  // Simulate only the manifest parent type conflict, in a separate process.
  // Every mutation API used by the builder is intercepted: the real source's
  // .build directory and all public/mirror paths remain untouched.
  const code = `
    const fs = require('node:fs'), path = require('node:path');
    const { syncBuiltinESMExports } = require('node:module');
    const { buildSite } = require(${JSON.stringify(path.join(root, '.build/site/build/write-output.mjs'))});
    const occupied = ${JSON.stringify(path.join(root, '.build/output-manifests'))}.toLowerCase();
    const originalStat = fs.lstatSync, originalExists = fs.existsSync;
    fs.lstatSync = function(file, ...args) {
      const target = path.resolve(file).toLowerCase();
      if (target === occupied) return { isSymbolicLink:()=>false, isDirectory:()=>false, isFile:()=>true };
      if (target.startsWith(occupied + path.sep)) return undefined;
      return originalStat.call(this, file, ...args);
    };
    fs.existsSync = function(file) {
      if (path.resolve(file).toLowerCase().startsWith(occupied + path.sep)) return false;
      return originalExists.call(this, file);
    };
    const writes = [];
    fs.mkdirSync = function(file) { writes.push(['mkdir', String(file)]); if(path.resolve(file).toLowerCase() === occupied) throw Error('ENOTDIR simulated occupied manifest parent'); };
    fs.writeFileSync = function(file) { writes.push(['write', String(file)]); };
    fs.unlinkSync = function(file) { writes.push(['unlink', String(file)]); };
    syncBuiltinESMExports();
    let error = null;
    try { buildSite(${JSON.stringify({sourceRoot:f.sourceRoot,outDir:f.outDir,mirrorRoot:f.sourceRoot})}); }
    catch(e) { error = e.message; }
    console.log(JSON.stringify({error,writes}));
  `;
  const child = spawnSync(process.execPath, ['-e', code], { encoding: 'utf8' });
  assert.equal(child.status, 0, child.stderr);
  const result = JSON.parse(child.stdout);
  assert.match(result.error, /ancestor.*directory|parent.*directory|manifest.*regular|ENOTDIR/i);
  assert.equal(result.writes.length, 0, 'manifest preflight must happen before every public/mirror mutation');
  assert.equal(fs.existsSync(f.outDir), false);
  assert.equal(fs.readFileSync(path.join(f.sourceRoot, 'index.html'), 'utf8'), 'EXISTING_MIRROR');
});

test('standalone_asset_copy_preserves_unowned_and_edited_matching_paths', t => {
  const { copyPublicAssets } = modules(), f = fixture(t);
  fs.mkdirSync(f.outDir);
  const target = path.join(f.outDir, 'site.css');
  fs.writeFileSync(target, 'UNOWNED_USER_FILE');
  assert.throws(() => copyPublicAssets(f.sourceRoot, f.outDir, ['site.css']), /different|existing|modified|conflict/i);
  assert.equal(fs.readFileSync(target, 'utf8'), 'UNOWNED_USER_FILE');
  fs.unlinkSync(target);
  copyPublicAssets(f.sourceRoot, f.outDir, ['site.css']);
  fs.appendFileSync(target, '\nUSER_EDIT');
  const edited = fs.readFileSync(target);
  assert.throws(() => copyPublicAssets(f.sourceRoot, f.outDir, ['site.css']), /different|existing|modified|conflict/i);
  assert.deepEqual(fs.readFileSync(target), edited);
});

test('standalone_asset_copy_leaves_identical_files_unmodified', t => {
  const { copyPublicAssets } = modules(), f = fixture(t);
  fs.mkdirSync(f.outDir);
  const target = path.join(f.outDir, 'site.css');
  fs.copyFileSync(path.join(f.sourceRoot, 'site.css'), target);
  fs.utimesSync(target, new Date('2020-01-02T00:00:00Z'), new Date('2020-01-02T00:00:00Z'));
  const before = fs.statSync(target).mtimeMs;
  copyPublicAssets(f.sourceRoot, f.outDir, ['site.css']);
  assert.equal(fs.statSync(target).mtimeMs, before);
  assert.deepEqual(fs.readFileSync(target), fs.readFileSync(path.join(f.sourceRoot, 'site.css')));
});

test('standalone_asset_copy_preflights_later_conflicts_before_any_write', t => {
  const { copyPublicAssets } = modules(), f = fixture(t);
  fs.mkdirSync(f.outDir);
  fs.writeFileSync(path.join(f.outDir, 'site.css'), 'LATER_USER_FILE');
  assert.throws(() => copyPublicAssets(f.sourceRoot, f.outDir, ['navigation.css', 'site.css']), /different|existing|modified|conflict/i);
  assert.equal(fs.existsSync(path.join(f.outDir, 'navigation.css')), false);
  assert.equal(fs.readFileSync(path.join(f.outDir, 'site.css'), 'utf8'), 'LATER_USER_FILE');
});

test('unsafe_and_case_colliding_public_paths_never_write', t => {
  const { copyPublicAssets, renderSite, loadSiteData } = modules(), f = fixture(t);
  for (const file of ['../site.css', '/site.css', 'C:/site.css', 'images\\x.png', 'images/%2e%2e/site.css', 'site.css.', 'CON', 'Site.css']) {
    assert.throws(() => copyPublicAssets(f.sourceRoot, f.outDir, [file]), /asset|path|allow|public/i, file);
  }
  assert.throws(() => copyPublicAssets(f.sourceRoot, f.outDir, ['site.css', 'site.css']), /duplicate|collision/i);
  for (const mutate of [s => s.pages.pop(), s => s.pages[0].file = '../escape.html', s => s.assets.push('Site.css'), s => s.assets.push('.env')]) {
    const site = loadSiteData(); mutate(site);
    assert.throws(() => renderSite(site), /invalid|asset|path|content|allow/i);
  }
  assert.equal(fs.existsSync(f.outDir), false);
});

test('symlinks_and_junctions_never_escape_source_or_output', t => {
  const { buildSite } = modules(), f = fixture(t);
  const outside = path.join(f.dir, 'outside'); fs.mkdirSync(outside);
  fs.copyFileSync(path.join(f.sourceRoot, 'site.css'), path.join(outside, 'site.css'));
  fs.unlinkSync(path.join(f.sourceRoot, 'site.css'));
  try { fs.symlinkSync(path.join(outside, 'site.css'), path.join(f.sourceRoot, 'site.css')); }
  catch (error) { if (error.code !== 'EPERM') throw error; fs.symlinkSync(outside, path.join(f.sourceRoot, 'images-linked'), 'junction'); }
  if (fs.lstatSync(path.join(f.sourceRoot, 'site.css'), { throwIfNoEntry: false })?.isSymbolicLink()) {
    assert.throws(() => buildSite(f), /symlink|link|asset/i);
    fs.unlinkSync(path.join(f.sourceRoot, 'site.css'));
  }
  fs.copyFileSync(path.join(outside, 'site.css'), path.join(f.sourceRoot, 'site.css'));
  // Junctions are supported on Windows without symlink privileges. Always test
  // an actually allowlisted asset directory, even when file symlinks get EPERM.
  fs.renameSync(path.join(f.sourceRoot, 'images'), path.join(outside, 'images'));
  fs.symlinkSync(path.join(outside, 'images'), path.join(f.sourceRoot, 'images'), 'junction');
  assert.throws(() => buildSite(f), /symlink|link|asset/i);
  fs.unlinkSync(path.join(f.sourceRoot, 'images'));
  fs.renameSync(path.join(outside, 'images'), path.join(f.sourceRoot, 'images'));
  fs.symlinkSync(outside, f.outDir, 'junction');
  assert.throws(() => buildSite(f), /symlink|link|output/i);
  assert.equal(fs.existsSync(path.join(outside, 'index.html')), false);
});

test('render_site_is_pure_and_keeps_artifact_dates_and_privacy', () => {
  const { renderSite, loadSiteData } = modules(), site = loadSiteData(), before = structuredClone(site);
  const output = renderSite(site);
  assert.equal(output.size, 48 + Object.keys(baseline.artifacts).length);
  assert.deepEqual(site, before);
  for (const [file, expected] of Object.entries(baseline.artifacts)) assert.equal(output.get(file).replaceAll('\r\n', '\n'), expected.replaceAll('\r\n', '\n'), file);
  assert.match(output.get('privacy.html'), /noindex/);
  assert.ok(!output.get('sitemap.xml').includes('/privacy.html'));
});

test('required_artifacts_and_sitemap_membership_fail_closed', () => {
  const { renderSite, loadSiteData } = modules();
  for (const mutate of [s => delete s.artifacts['robots.txt'], s => delete s.artifacts['sitemap.xml'],
    s => s.artifacts['sitemap.xml'] = s.artifacts['sitemap.xml'].replace(/<url>[\s\S]*?<\/url>/, ''),
    s => s.artifacts['sitemap.xml'] = s.artifacts['sitemap.xml'].replace('western-suburbs.html', 'privacy.html')]) {
    const site = loadSiteData(); mutate(site);
    assert.throws(() => renderSite(site), /artifact|sitemap/i);
  }
});

test('explicit_compatibility_mirror_only_updates_registered_rendered_files', t => {
  const { buildSite, comparePublicOutput } = modules(), f = fixture(t);
  fs.writeFileSync(path.join(f.sourceRoot, 'index.html'), 'OLD_GENERATED_HTML');
  fs.writeFileSync(path.join(f.sourceRoot, '.env'), 'PRIVATE_SOURCE_FILE');
  fs.mkdirSync(path.join(f.sourceRoot, 'unrelated'));
  fs.writeFileSync(path.join(f.sourceRoot, 'unrelated/keep.txt'), 'USER_DATA');
  buildSite({ ...f, mirrorRoot: f.sourceRoot });
  assert.deepEqual(comparePublicOutput(f.sourceRoot, baseline), []);
  assert.equal(fs.readFileSync(path.join(f.sourceRoot, '.env'), 'utf8'), 'PRIVATE_SOURCE_FILE');
  assert.equal(fs.readFileSync(path.join(f.sourceRoot, 'unrelated/keep.txt'), 'utf8'), 'USER_DATA');
  assert.equal(fs.readFileSync(path.join(f.sourceRoot, 'site.css')).equals(fs.readFileSync(path.join(root, 'site.css'))), true);
  const before = hashes(f.outDir);
  fs.unlinkSync(path.join(f.sourceRoot, 'privacy.html'));
  fs.mkdirSync(path.join(f.sourceRoot, 'privacy.html'));
  assert.throws(() => buildSite({ ...f, mirrorRoot: f.sourceRoot }), /mirror|regular file/i);
  assert.deepEqual(hashes(f.outDir), before);
});

for(const mirror of [false,true]) test(`hard_linked_${mirror?'mirror':'public_output'}_fails_before_any_write`, t => {
  const {buildSite}=modules();
    const f=fixture(t);buildSite(f);
    const before=hashes(f.outDir),early=path.join(f.outDir,'about.html');
    fs.utimesSync(early,new Date('2020-01-01'),new Date('2020-01-01'));
    const mtime=fs.statSync(early).mtimeMs;
    const target=path.join(mirror?f.sourceRoot:f.outDir,'western-suburbs.html');
    const outside=path.join(f.dir,'outside-page.txt');
    const original=mirror?'OUTSIDE MIRROR':fs.readFileSync(target);
    fs.writeFileSync(outside,original);
    if(fs.existsSync(target))fs.unlinkSync(target);
    fs.linkSync(outside,target);assert.equal(fs.lstatSync(target).nlink,2);
    assert.throws(()=>buildSite({...f,...(mirror?{mirrorRoot:f.sourceRoot}:{})}),/hard.link/i);
    assert.deepEqual(fs.readFileSync(outside),Buffer.from(original));
    assert.deepEqual(hashes(f.outDir),before);
    assert.equal(fs.statSync(early).mtimeMs,mtime,'later linked target must fail before any earlier write');
});

test('hard_link_guard_accepts_normal_directory_link_counts', t => {
  const f=fixture(t),{assertNoLinks}=modules(),original=fs.lstatSync;
  fs.lstatSync=function(...args){const stat=original(...args);if(stat?.isDirectory())stat.nlink=3;return stat;};
  syncBuiltinESMExports();
  try {assert.doesNotThrow(()=>assertNoLinks(f.sourceRoot));}
  finally {fs.lstatSync=original;syncBuiltinESMExports();}
});

test('hard_linked_owner_manifest_fails_before_output_or_mirror_write', t => {
  const f=fixture(t),runtime=f.sourceRoot;
  // All physical links, compiled fixture modules and outputs remain under REPORT.
  fs.cpSync(path.join(root,'.build/site'),path.join(runtime,'.build/site'),{recursive:true});
  fs.mkdirSync(path.join(runtime,'data'));
  for(const file of ['perth-suburbs.json','editorial-content-dates.json','sitemap-content-dates.json'])fs.copyFileSync(path.join(root,'data',file),path.join(runtime,'data',file));
  fs.symlinkSync(path.join(root,'node_modules'),path.join(runtime,'node_modules'),'junction');
  const outDir=path.join(runtime,'dist');
  const code=`const {buildSite}=require(${JSON.stringify(path.join(runtime,'.build/site/build/write-output.mjs'))});buildSite(${JSON.stringify({sourceRoot:runtime,outDir,mirrorRoot:runtime})});`;
  const first=spawnSync(process.execPath,['-e',code],{encoding:'utf8'});
  assert.equal(first.status,0,first.stderr);
  const manifest=path.join(runtime,'.build/output-manifests',hash(outDir.toLowerCase())+'.json');
  const outside=path.join(f.dir,'outside-manifest.json'),original=fs.readFileSync(manifest);
  fs.writeFileSync(outside,original);fs.unlinkSync(manifest);fs.linkSync(outside,manifest);
  assert.equal(fs.lstatSync(manifest).nlink,2);
  const targets=[path.join(outDir,'about.html'),path.join(runtime,'about.html')];
  for(const file of targets)fs.utimesSync(file,new Date('2020-01-01'),new Date('2020-01-01'));
  const mtimes=targets.map(file=>fs.statSync(file).mtimeMs),before=hashes(outDir);
  const second=spawnSync(process.execPath,['-e',code],{encoding:'utf8'});
  assert.notEqual(second.status,0,'hard-linked owner manifest must fail');
  assert.match(second.stderr,/hard.link/i);
  assert.deepEqual(fs.readFileSync(outside),original);
  assert.deepEqual(hashes(outDir),before);
  assert.deepEqual(targets.map(file=>fs.statSync(file).mtimeMs),mtimes);
});

test('hard_linked_standalone_asset_destination_is_refused_before_pending_copy', t => {
  const {copyPublicAssets}=modules(),f=fixture(t);fs.mkdirSync(f.outDir);
  const outside=path.join(f.dir,'outside.css'),target=path.join(f.outDir,'site.css');
  fs.copyFileSync(path.join(f.sourceRoot,'site.css'),outside);fs.linkSync(outside,target);
  const original=fs.readFileSync(outside);
  assert.throws(()=>copyPublicAssets(f.sourceRoot,f.outDir,['navigation.css','site.css']),/hard.link/i);
  assert.deepEqual(fs.readFileSync(outside),original);
  assert.deepEqual(fs.readdirSync(f.outDir),['site.css']);
});

// Directly exercises deletion ownership rather than merely rejecting an extra
// path. feed.xml is an allowed optional artifact absent from current output.
for(const state of ['owned','changed','unowned','out-of-universe','invalid-digest','wrong-outdir'])test(`stale_optional_artifact_${state}_respects_preflight_ownership`,t=>{
  const {buildSite}=modules(),f=fixture(t);
  buildSite({...f,mirrorRoot:f.sourceRoot});
  const owner=path.join(root,'.build/output-manifests',hash(f.outDir.toLowerCase())+'.json');
  t.after(()=>fs.rmSync(owner,{force:true}));
  const manifest=JSON.parse(fs.readFileSync(owner,'utf8'));
  const stale=path.join(f.outDir,'feed.xml'),original='<feed>PREVIOUS OWNED OPTIONAL ARTIFACT</feed>';
  fs.writeFileSync(stale,original);
  if(state!=='unowned')manifest.files['feed.xml']=hash(original);
  if(state==='changed')fs.writeFileSync(stale,'USER MODIFIED OPTIONAL ARTIFACT');
  if(state==='out-of-universe')manifest.files['../outside.txt']=hash('OUTSIDE');
  if(state==='invalid-digest')manifest.files['feed.xml']='NOT_A_SHA256';
  if(state==='wrong-outdir')manifest.outDir=f.sourceRoot;
  fs.writeFileSync(owner,JSON.stringify(manifest));
  const outside=path.join(f.dir,'outside.txt');fs.writeFileSync(outside,'OUTSIDE');
  const sentinels=[path.join(f.outDir,'about.html'),path.join(f.sourceRoot,'about.html'),stale,owner,outside];
  for(const file of sentinels)fs.utimesSync(file,new Date('2020-01-01'),new Date('2020-01-01'));
  const beforeOutput=hashes(f.outDir),beforeMirror=hashes(f.sourceRoot);
  const before=sentinels.map(file=>[fs.readFileSync(file),fs.statSync(file).mtimeMs]);
  if(state==='owned'){
    buildSite({...f,mirrorRoot:f.sourceRoot});
    assert.equal(fs.existsSync(stale),false,'only hash-matching registered stale artifact is deleted');
    delete beforeOutput['feed.xml'];
    assert.deepEqual(hashes(f.outDir),beforeOutput);
    assert.deepEqual(hashes(f.sourceRoot),beforeMirror);
    assert.ok(!Object.hasOwn(JSON.parse(fs.readFileSync(owner,'utf8')).files,'feed.xml'));
    assert.deepEqual([fs.readFileSync(outside),fs.statSync(outside).mtimeMs],before[4]);
  }else{
    assert.throws(()=>buildSite({...f,mirrorRoot:f.sourceRoot}),/unexpected|unowned|modified|hash|Invalid build owner manifest/i);
    assert.deepEqual(hashes(f.outDir),beforeOutput);
    assert.deepEqual(hashes(f.sourceRoot),beforeMirror);
    assert.deepEqual(sentinels.map(file=>[fs.readFileSync(file),fs.statSync(file).mtimeMs]),before,'failure must precede every output/mirror/owner write or unlink');
  }
});
