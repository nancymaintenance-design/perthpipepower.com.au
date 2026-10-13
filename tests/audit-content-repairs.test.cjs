const {test}=require('node:test');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const main=f=>read(f).match(/<main\b[\s\S]*?<\/main>/)[0];
const plain=s=>s.replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();
test('primary intent is unique after case folding and overview routes readers to the dedicated owners',()=>{
 const {pages}=require('../data/site-content-intent.cjs');
 const seen=new Map();
 for(const [file,p] of Object.entries(pages)){const key=p.primary.toLowerCase().trim();assert(!seen.has(key),`${file} duplicates ${seen.get(key)}: ${key}`);seen.set(key,file);}
 const h=main('lighting-power-points-perth.html');
 assert.match(plain(h.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)[1]),/overview/i);
 for(const file of ['lighting-installation-perth.html','power-points-perth.html'])assert(h.includes('href="'+file+'"'));
 const feed=JSON.parse(read('ai-content.json')).servicePages.find(p=>p.url.endsWith('/lighting-power-points-perth.html'));
 assert.match(feed.title||feed.name,/overview/i);
 assert.match(read('llms.txt').split('\n').find(l=>l.includes('/lighting-power-points-perth.html')),/overview/i);
 const graph=JSON.parse(read('lighting-power-points-perth.html').match(/type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
 assert.match(graph.find(n=>n['@type']==='Service').serviceType,/overview/i);
 assert.match(graph.find(n=>n['@type']==='WebPage').description,/dedicated/i);
});
test('educational FAQs give concise answers and native links to distinct explanatory service prose with schema parity',()=>{
 const {pages}=require('../data/site-content-intent.cjs');let count=0;
 for(const [file,p]of Object.entries(pages)){
  const section=p.sections?.find(s=>s.id==='learn-about-'+file.replace('.html',''));if(!section)continue;count++;
  const h=main(file),body=h.match(new RegExp('<div class="keyword-gap-part" id="'+section.id+'">([\\s\\S]*?)</div>'))[1];
  const details=[...h.matchAll(/<details><summary>([\s\S]*?)<\/summary><p>([\s\S]*?)<\/p><\/details>/g)];
  const educational=details.filter(d=>d[2].includes('href="#'+section.id+'"'));
  assert(educational.length>=1,file+': education FAQ needs section link');
  for(const d of educational){const answer=plain(d[2]).replace(' Read the explanation.','');assert(!plain(body).includes(answer),file+': full answer repeated');assert(answer.length>25,file+': useful direct answer');}
  assert(section.links.length>0,file+': explanatory source or related guidance missing');
  const graph=JSON.parse(read(file).match(/type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
  assert.deepEqual(graph.find(n=>n['@type']==='FAQPage').mainEntity.map(n=>[n.name,n.acceptedAnswer.text]),details.map(d=>[plain(d[1]),plain(d[2])]));
 }
 assert.equal(count,13,'all existing educational groups retained');
});
test('regional titles fit 60 characters and social titles stay aligned through the builder',()=>{
 const {applyGuide,regionGuides}=require('../scripts/build-region-guides.js');
 for(const g of regionGuides)for(const h of [read(g.route),applyGuide(read(g.route),g)]){const title=plain(h.match(/<title>([\s\S]*?)<\/title>/)[1]);assert(title.length<=60,g.route+': '+title.length);for(const tag of ['og:title','twitter:title'])assert.equal(plain(h.match(new RegExp('(?:property|name)="'+tag+'" content="([^"]+)"'))[1]),title);}
});
test('electrical photos are discoverable in native regional HTML and hydration preserves prerendered nodes',()=>{
 const {regionGuides,applyGuide}=require('../scripts/build-region-guides.js');const gallery=require('../electrical-work-gallery.js');
 for(const g of regionGuides){for(const h of [main(g.route),applyGuide(read(g.route),g)]){assert.equal((h.match(/<figure class="electrical-work-gallery__card">/g)||[]).length,8,g.route);assert.match(h,/not assigned to a particular suburb/);}}
 let writes=0;const target={querySelector:()=>({}),set innerHTML(value){writes++;}};
 assert.equal(gallery.mountElectricalWorkGalleries({querySelectorAll:()=>[target]}),1);assert.equal(writes,0,'prerendered gallery must retain DOM nodes');
});
