const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'blocked-drains-perth.html'),'utf8');
const graph=JSON.parse(html.match(/type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
assert.equal(graph.find(n=>n['@type']==='BreadcrumbList').itemListElement[1].item,'https://perthpipepower.com.au/plumbing.html','service breadcrumb retains visible parent');
const manifestPath=path.join(root,'data/editorial-content-dates.json');
assert(fs.existsSync(manifestPath),'article dates are persisted with content hashes');
const {contentDate}=require('../scripts/lib/content-dates.cjs');
const previous={sha256:'same',lastmod:'2026-10-10'};
assert.deepEqual(contentDate(previous,'same','2026-10-12'),previous,'unchanged content retains original date');
assert.throws(()=>contentDate(previous,'changed'),/actual modification date/i,'changed content requires a real date');
assert.deepEqual(contentDate(previous,'changed','2026-10-12'),{sha256:'changed',lastmod:'2026-10-12'});
assert.throws(()=>contentDate(previous,'changed','2026-02-30'),/date/i);
assert.throws(()=>contentDate(previous,'changed','2026-10-09'),/earlier/i);
const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));
for(const file of Object.keys(require('../data/editorial-summaries.cjs'))){
  const page=fs.readFileSync(path.join(root,file),'utf8');
  assert(page.includes(`datetime="${manifest[file].lastmod}"`));
  assert.match(manifest[file].sha256,/^[a-f0-9]{64}$/);
}
console.log('PASS: visible breadcrumb hierarchy and content-backed article dates.');
