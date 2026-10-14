const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {spawnSync} = require('node:child_process');
const source = path.resolve(__dirname, '..');
const report = path.resolve(source, '../reports/typescript-migration-2026-10-13/compat-tests');
fs.mkdirSync(report, {recursive:true});
function fixture() { return fs.mkdtempSync(path.join(report, 'case-')); }
function compat() { return require('../scripts/lib/ts-compat.cjs'); }

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
      const {comparePublicOutput}=compat().loadCompiledModule('site/baseline.mjs');
      assert.deepEqual(comparePublicOutput(root,require('./fixtures/ts-migration/baseline.json')),[]);
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
    assert.ok(comparePublicOutput(path.join(root,'dist'),require('./fixtures/ts-migration/baseline.json')).length);
    for(const selected of [path.join(root,'dist'),path.join(root,'missing')]) {
      const run=spawnSync(process.execPath,['scripts/validate-seo.js','--root',selected],{cwd:source,encoding:'utf8'});
      assert.notEqual(run.status,0,run.stdout);
    }
  } finally {fs.rmSync(root,{recursive:true,force:true});}
});

test('every legacy writing CLI exits with the canonical build guidance', () => {
  for(const file of ['build-confirmed-content.cjs','build-expanded-services.cjs','apply-site-content-intent.cjs','build-region-guides.js','build-perth-service-areas.js','build-content-quality.cjs','build-entity-graph.cjs','build-seo-plan-20261009.cjs','build-crawl-performance.cjs','consolidate-service-pages.cjs','apply-confirmed-hours.cjs','apply-booking-context.cjs','apply-keyword-heading-policy.cjs']) {
    const result=spawnSync(process.execPath,['scripts/'+file],{cwd:source,encoding:'utf8'});
    assert.notEqual(result.status,0,file);
    assert.match(result.stderr,/npm run build/,file);
  }
});

test('local deployment config preserves routing and keeps cold build inputs', () => {
  const current=JSON.parse(fs.readFileSync(path.join(source,'vercel.json'),'utf8'));
  const before=JSON.parse(spawnSync('git',['show','0df39a4797f4d04c36c5ba6634f1506d7f7b2456:vercel.json'],{cwd:source,encoding:'utf8'}).stdout);
  assert.equal(current.buildCommand,'npm run build'); assert.equal(current.outputDirectory,'dist');
  const {buildCommand,outputDirectory,...rest}=current;
  assert.deepEqual(rest,before);
  const ignores=fs.readFileSync(path.join(source,'.vercelignore'),'utf8').split(/\r?\n/).map(s=>s.trim());
  for(const input of ['site','tools','scripts','data','package.json','package-lock.json','tsconfig.json','api']) assert(!ignores.includes(input),'required cold build input '+input);
  assert.equal(require('../package.json').type,undefined);
});
