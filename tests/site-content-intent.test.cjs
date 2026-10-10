const fs=require('node:fs'),cp=require('node:child_process'),assert=require('node:assert/strict'),{test}=require('node:test');
const base='f03bd81f03b89d2fb688e7e612646f497122b83e';
const files=[...fs.readFileSync('sitemap.xml','utf8').matchAll(/<loc>[^<]*\.au\/([^<]*)<\/loc>/g)].map(m=>m[1]||'index.html');
const read=f=>fs.readFileSync(f,'utf8');
const clean=s=>s.replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();
test('every live page has an explicit distinct search-intent owner, without creating workbook proposal URLs',()=>{
 assert(fs.existsSync('data/site-content-intent.cjs'),'Missing approved keyword-to-live-page mapping');
 const map=require('../data/site-content-intent.cjs').pages;
 assert.deepEqual(Object.keys(map).sort(),[...files].sort());
 assert.equal(new Set(Object.values(map).map(p=>p.primary)).size,35);
 assert.equal(files.length,35);
 for(const [f,p] of Object.entries(map)){assert(p.intent&&p.primary&&p.links.length>=2,f+': meaningful topic and next paths');for(const [href]of p.links)assert(fs.existsSync(href),f+': dead mapped owner '+href);}
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
  assert(visible.length>=1,f+': useful customer FAQ missing');
  assert.equal(new Set(visible.map(q=>q[0])).size,visible.length,f+': repeated FAQ');
  const graph=JSON.parse(h.match(/type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
  const faqs=graph.filter(n=>n['@type']==='FAQPage');assert.equal(faqs.length,1,f+': one FAQ graph');
  assert.deepEqual(faqs[0].mainEntity.map(q=>[clean(q.name),clean(q.acceptedAnswer.text)]),visible,f+': FAQ drift');
 }
});
test('safety-sensitive queries have utility routing before an ordinary enquiry, not an emergency sales promise',()=>{
 for(const f of ['electrical.html','power-faults-perth.html','safety-switch-tripping-perth.html','insights-safety-switch-keeps-tripping.html']){
  const m=read(f).match(/<main\b[\s\S]*?<\/main>/)[0];assert(m.includes('tel:131351'),f+': missing Western Power emergency routing');assert(m.includes('westernpower.com.au/issues-enquiries/reporting-incidents-and-emergencies/'),f+': missing official source');
 }
 const drain=read('blocked-drains-perth.html');assert(drain.includes('tel:131375'),'wastewater overflow needs Water Corporation routing');
});
test('content editing preserves approved prices, existing canonical URLs, original hero and private personnel',()=>{
 for(const f of [...files,'privacy.html']){
  const h=read(f),old=cp.execFileSync('git',['show',base+':'+f],{encoding:'utf8'});
  const prices=s=>[...s.matchAll(/<p class="price-guide__range">([\s\S]*?)<\/p>/g)].map(m=>clean(m[1]));
  assert.deepEqual(prices(h),prices(old),f+': price changed');
  const canonical=s=>s.match(/<link\b[^>]*rel="canonical"[^>]*>/)[0].replace(/\s+/g,' ');
  assert.equal(canonical(h),canonical(old),f+': URL changed');assert(!/"@type":\s*"Person"/.test(h),f+': private personnel');
 }
 const hero=s=>s.match(/<section class="hero"[\s\S]*?<\/section>/)[0].replace(/\r\n/g,'\n');
 assert.equal(hero(read('index.html')),hero(cp.execFileSync('git',['show',base+':index.html'],{encoding:'utf8'})));
 assert.equal(read('privacy.html').replace(/\r\n/g,'\n'),cp.execFileSync('git',['show',base+':privacy.html'],{encoding:'utf8'}).replace(/\r\n/g,'\n'));
});
