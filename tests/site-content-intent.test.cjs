const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('./support/public-paths.cjs');
const fs=require('node:fs'),assert=require('node:assert/strict'),{test}=require('node:test');
// Independent historical public expectations keep source archives verifiable.
const historical=require('./fixtures/ts-migration/historical-public-expectations.json');
const files=[...fs.readFileSync(require('node:path').join(resolvePublicRoot(),'sitemap.xml'),'utf8').matchAll(/<loc>[^<]*\.au\/([^<]*)<\/loc>/g)].map(m=>m[1]||'index.html');
const read=f=>fs.readFileSync(require('node:path').join(resolvePublicRoot(),f),'utf8');
const clean=s=>s.replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();
test('every live page has an explicit distinct search-intent owner, without creating workbook proposal URLs',()=>{
 assert(fs.existsSync(require('node:path').join(SOURCE_ROOT,'data/site-content-intent.cjs')),'Missing approved keyword-to-live-page mapping');
 const map=require('../data/site-content-intent.cjs').pages;
 assert.deepEqual(Object.keys(map).sort(),[...files].sort());
 assert.equal(new Set(Object.values(map).map(p=>p.primary)).size,47);
 assert.equal(files.length,47);
 for(const [f,p] of Object.entries(map)){assert(p.intent&&p.primary&&p.links.length>=2,f+': meaningful topic and next paths');for(const [href]of p.links)assert(fs.existsSync(require('node:path').join(resolvePublicRoot(),href.split('#')[0])),f+': dead mapped owner '+href);}
});
test('trade overviews, managed-property and contact pages answer booking decisions with native FAQ links',()=>{
 for(const f of ['plumbing.html','electrical.html','property-management.html','contact.html']){
  const main=read(f).match(/<main\b[\s\S]*?<\/main>/)[0];
  assert((main.match(/<details\b/g)||[]).length>=2,f+': unanswered booking questions');
  assert(/<a\b[^>]*href="(?:plumbing|electrical|water-leak-detection-perth|power-faults-perth|property-management)\.html"/.test(main),f+': no relevant service route');
 }
});
test('all visible FAQ answers agree with structured data and have unique questions',()=>{
 for(const f of files){
  const h=read(f),m=h.match(/<main\b[\s\S]*?<\/main>/)[0];
  const visible=[...m.matchAll(/<details\b[^>]*>\s*<summary[^>]*>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g)].map(x=>[clean(x[1]),clean(x[2])]);
  if(['index.html','about.html'].includes(f)){assert.equal(visible.length,0,f+': informative company/service narrative without redundant FAQ');assert(!/"@type":\s*"FAQPage"/.test(h),f+': makes no FAQPage claim');continue;}
  assert(visible.length>=1,f+': useful customer FAQ missing');
  assert.equal(new Set(visible.map(q=>q[0])).size,visible.length,f+': repeated FAQ');
  const graph=JSON.parse(h.match(/type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
  const faqs=graph.filter(n=>n['@type']==='FAQPage');assert.equal(faqs.length,1,f+': one FAQ graph');
  const byQuestion=(a,b)=>a[0].localeCompare(b[0]);
  assert.deepEqual(faqs[0].mainEntity.map(q=>[clean(q.name),clean(q.acceptedAnswer.text)]).sort(byQuestion),visible.sort(byQuestion),f+': FAQ drift');
 }
});
test('safety-sensitive queries have utility routing before an ordinary enquiry, not an emergency sales promise',()=>{
 for(const f of ['electrical.html','power-faults-perth.html','safety-switch-tripping-perth.html','insights-safety-switch-keeps-tripping.html']){
  const m=read(f).match(/<main\b[\s\S]*?<\/main>/)[0];assert(m.includes('tel:131351'),f+': missing Western Power emergency routing');assert(m.includes('westernpower.com.au/issues-enquiries/reporting-incidents-and-emergencies/'),f+': missing official source');
 }
 const drain=read('blocked-drains-perth.html');assert(drain.includes('tel:131375'),'wastewater overflow needs Water Corporation routing');
});
test('content editing preserves approved prices, existing canonical URLs, original hero and private personnel',()=>{
 const originalFiles=Object.keys(historical.pages);
 for(const f of [...files,'privacy.html'].filter(f=>originalFiles.includes(f))){
  const h=read(f),old=historical.pages[f];
  const prices=s=>[...s.matchAll(/<p class="price-guide__range">([\s\S]*?)<\/p>/g)].map(m=>clean(m[1]));
  assert.deepEqual(prices(h),old.prices,f+': price changed');
  const canonical=s=>s.match(/<link\b[^>]*rel="canonical"[^>]*>/)[0].match(/href="([^"]+)"/)[1];
  assert.equal(canonical(h),old.canonical,f+': URL changed');assert(!/"@type":\s*"Person"/.test(h),f+': private personnel');
 }
 const hero=s=>s.match(/<section class="hero"[\s\S]*?<\/section>/)[0].replace(/\r\n/g,'\n');
 let expectedHero=historical.hero;
 for(const edit of require('./fixtures/fullsite-refinement/editorial-copy-edits.json').edits.filter(e=>e.file==='index.html'&&e.field==='hero')){
  assert.equal(expectedHero.split(edit.before).length-1,1,'exact historical hero copy fragment');
  expectedHero=expectedHero.replace(edit.before,edit.after);
 }
 const resources=require('./fixtures/fullsite-refinement/resource-maintenance-edits.json');
 for(const edit of resources.carousel){const before='data-background-image="'+edit.fallback+'"';assert.equal(expectedHero.split(before).length-1,1);expectedHero=expectedHero.replace(before,before+' data-background-srcset="'+edit.srcset+'"');}
 const next='aria-label="Next slide">→</button>';assert.equal(expectedHero.split(next).length-1,1);expectedHero=expectedHero.replace(next,next+'\n          '+resources.pause);
 assert.equal(hero(read('index.html')),expectedHero);
 const {parse,serialize}=require('parse5');
 const normalized=s=>{const document=parse(s.replace(/\r\n/g,'\n'));const sort=n=>{if(n.attrs)n.attrs.sort((a,b)=>a.name.localeCompare(b.name));for(const child of n.childNodes??[])sort(child);};sort(document);return serialize(document);};
 const main=s=>s.match(/<main\b[\s\S]*?<\/main>/)[0];
 assert.equal(normalized(main(read('privacy.html'))),normalized(main(historical.privacy)),'legal privacy content is unchanged; shared header explicitly approved');
});
