const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {spawnSync} = require('node:child_process');
const source = path.resolve(__dirname, '..');
const report = path.resolve(source, '../reports/content-navigation-repair-2026-10-14/compat-tests');
fs.mkdirSync(report, {recursive:true});
function fixture() { return fs.mkdtempSync(path.join(report, 'case-')); }
function compat() { return require('../scripts/lib/ts-compat.cjs'); }

test('hard_links_in_fixture_pages_fail_before_writes', () => {
  const root=fixture(),targetRoot=path.join(root,'selected');
  fs.mkdirSync(targetRoot);
  try {
    const outside=path.join(root,'outside-page.txt'),target=path.join(targetRoot,'power-points-perth.html');
    fs.writeFileSync(outside,'OUTSIDE PAGE');fs.linkSync(outside,target);
    assert.equal(fs.lstatSync(target).nlink,2);
    const {buildExpandedServices}=require('../scripts/build-expanded-services.cjs');
    assert.throws(()=>buildExpandedServices(targetRoot),/hard.link/i);
    assert.equal(fs.readFileSync(outside,'utf8'),'OUTSIDE PAGE');
    assert.deepEqual(fs.readdirSync(targetRoot),['power-points-perth.html'],'no earlier generated file may be written');
  } finally {
    assert.ok(path.relative(report,root)&&!path.relative(report,root).startsWith('..'));
    fs.rmSync(root,{recursive:true,force:true});
  }
});

test('hard_links_in_locality_sitemaps_preserve_outside_fixture_bytes', () => {
  const root=fixture(),targetRoot=path.join(root,'selected');fs.mkdirSync(targetRoot);
  try {
    const outsideMap=path.join(root,'outside-sitemap.xml'),map=path.join(targetRoot,'sitemap.xml');
    const original='<urlset><url><loc>https://perthpipepower.com.au/service-areas/test.html</loc></url></urlset>';
    fs.writeFileSync(outsideMap,original);fs.linkSync(outsideMap,map);
    const {updateSitemap}=require('../scripts/build-perth-service-areas.js');
    assert.throws(()=>updateSitemap([],map),/hard.link/i);
    assert.equal(fs.readFileSync(outsideMap,'utf8'),original);
    assert.equal(fs.readFileSync(map,'utf8'),original);
  } finally {
    assert.ok(path.relative(report,root)&&!path.relative(report,root).startsWith('..'));
    fs.rmSync(root,{recursive:true,force:true});
  }
});

test('controlled synchronous compiled loading and readonly legacy readers', () => {
  const {loadCompiledModule} = compat();
  assert.equal(typeof loadCompiledModule('site/content/pages.mjs').loadSiteData, 'function');
  for(const p of ['../package.json','site/../../package.json','/site/content/pages.mjs','site\\content\\pages.mjs']) assert.throws(()=>loadCompiledModule(p), /controlled|invalid/i);
  assert.throws(()=>loadCompiledModule('site/missing.mjs'), /npm run compile/);
  const data = require('../data/site-content-intent.cjs');
  assert.throws(()=>{data.metadata['contact.html'].title='stale';}, /canonical|read.only/i);
});

test('legacy_entrypoints_cannot_restore_old_content', () => {
  const root = fixture();
  try {
    fs.cpSync(path.join(source,'dist'), root, {recursive:true});
    const {buildConfirmedContent}=require('../scripts/build-confirmed-content.cjs');
    const {buildExpandedServices}=require('../scripts/build-expanded-services.cjs');
    const {applySiteContent}=require('../scripts/apply-site-content-intent.cjs');
    const {applyGuide,regionGuides}=require('../scripts/build-region-guides.js');
    for(let i=0;i<2;i++) {
      buildExpandedServices(root); buildConfirmedContent(root,'2099-01-01'); applySiteContent(root);
      for(const guide of regionGuides) {
        const file=path.join(root,guide.route);
        fs.writeFileSync(file,applyGuide(fs.readFileSync(file,'utf8'),guide));
      }
      const {comparePublicOutput}={comparePublicOutput:require('./support/approved-content.cjs').compareApprovedOutput};
      assert.deepEqual(comparePublicOutput(root,require('./support/approved-content.cjs').approved),[]);
    }
    assert.throws(()=>buildConfirmedContent(source),/fixture|npm run build/i);
  } finally {fs.rmSync(root,{recursive:true,force:true});}
});

test('public_tests_exercise_dist_not_root', () => {
  const {resolvePublicRoot}=require('./support/public-paths.cjs');
  assert.equal(resolvePublicRoot(),path.join(source,'dist'));
  assert.throws(()=>resolvePublicRoot(path.join(report,'missing')));
  const root=fixture();
  try {
    fs.cpSync(path.join(source,'dist'),path.join(root,'dist'),{recursive:true});
    fs.copyFileSync(path.join(source,'electrical.html'),path.join(root,'electrical.html'));
    const file=path.join(root,'dist/electrical.html');
    fs.writeFileSync(file,fs.readFileSync(file,'utf8').replace(/<title>.*?<\/title>/,'<title>Wrong title</title>'));
    const {comparePublicOutput}=compat().loadCompiledModule('site/baseline.mjs');
    assert.ok(comparePublicOutput(path.join(root,'dist'),require('./support/approved-content.cjs').approved).length);
    for(const selected of [path.join(root,'dist'),path.join(root,'missing')]) {
      const run=spawnSync(process.execPath,['scripts/validate-seo.js','--root',selected],{cwd:source,encoding:'utf8'});
      assert.notEqual(run.status,0,run.stdout);
    }
  } finally {fs.rmSync(root,{recursive:true,force:true});}
});

test('every legacy writing CLI exits with the canonical build guidance', () => {
  for(const file of ['build-confirmed-content.cjs','build-expanded-services.cjs','apply-site-content-intent.cjs','build-region-guides.js','build-perth-service-areas.js','build-content-quality.cjs','build-entity-graph.cjs','build-seo-plan-20261009.cjs','build-crawl-performance.cjs','consolidate-service-pages.cjs','apply-confirmed-hours.cjs','apply-booking-context.cjs','apply-keyword-heading-policy.cjs','apply-responsive-media.cjs','update-sitemap-content-dates.cjs']) {
    const result=spawnSync(process.execPath,['scripts/'+file],{cwd:source,encoding:'utf8'});
    assert.notEqual(result.status,0,file);
    assert.match(result.stderr,/npm run build/,file);
  }
});

test('local deployment config preserves routing and keeps cold build inputs', () => {
  const current=JSON.parse(fs.readFileSync(path.join(source,'vercel.json'),'utf8'));
  const before=require('./fixtures/ts-migration/historical-public-expectations.json').config;
  assert.equal(current.buildCommand,'npm run build'); assert.equal(current.outputDirectory,'dist');
  const {buildCommand,outputDirectory,...rest}=current;
  const feedHeaders=['/feed.json','/zh/feed.json','/feed.xml','/zh/feed.xml'].map(source=>({source,headers:[{key:'Content-Type',value:source.endsWith('.json')?'application/feed+json; charset=utf-8':'application/rss+xml; charset=utf-8'}]}));
  assert.deepEqual(rest.headers.slice(0,4),feedHeaders,'only the four approved feed response types are added');
  rest.headers=rest.headers.slice(4);
  const suburbRules=require('../data/perth-suburbs.json').map(s=>({source:'/service-areas/'+s.slug+'.html',destination:'/contact.html?suburb='+encodeURIComponent(s.name),permanent:true}));
  assert.deepEqual(rest,{...before,redirects:[...suburbRules,...before.redirects]});
  const ignores=fs.readFileSync(path.join(source,'.vercelignore'),'utf8').split(/\r?\n/).map(s=>s.trim());
  for(const input of ['site','tools','scripts','data','package.json','package-lock.json','tsconfig.json','api']) assert(!ignores.includes(input),'required cold build input '+input);
  assert.equal(require('../package.json').type,undefined);
});
