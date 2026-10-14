const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('./support/public-paths.cjs');
const {test}=require('node:test');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=resolvePublicRoot();
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const main=f=>read(f).match(/<main\b[\s\S]*?<\/main>/)[0];
const plain=s=>s.replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();
const expectedEducation={
 'power-faults-perth.html':['Why does only one part of a house lose power?','Can you investigate an intermittent power fault?'],
 'safety-switch-tripping-perth.html':['What is the difference between an RCD and a circuit breaker?','Does a tripping safety switch mean the switch itself is faulty?'],
 'blocked-drains-perth.html':['Why do drains keep blocking after they have been cleared?','Is a slow-flushing toilet always caused by a blocked drain?','Why does my kitchen sink gurgle and drain slowly?'],
 'water-leak-detection-perth.html':['Can a hidden water leak cause a high bill without visible water damage?','Why is my water meter moving when no water is being used?'],
 'burst-pipe-repair-perth.html':['What are the signs of a burst or leaking pipe inside a wall?'],
 'tap-mixer-repairs-perth.html':['Why does a tap keep dripping after it is turned off?','Can a dripping tap waste water over time?','Can I supply my own replacement mixer tap?'],
 'toilet-repairs-perth.html':['What is the difference between a running toilet and a leaking toilet base?','Why does my toilet keep refilling on its own?'],
 'hot-water-problems-perth.html':['Why has my hot water suddenly stopped working?','Why is there hot water at some taps but not at the shower?','Why might an electric hot water system trip a safety switch?'],
 'fixtures-appliances-perth.html':['Why does the laundry drain overflow when the washing machine empties?','Can you replace leaking washing machine taps?'],
 'smoke-alarm-maintenance-perth.html':['Why can a hardwired smoke alarm keep chirping?','What smoke alarm requirements apply to rental homes in WA?'],
 'property-management.html':['Who should a tenant contact first about plumbing or electrical repairs?'],
 'plumbing.html':['What jobs should I call a licensed plumber for?'],
 'electrical.html':['What household electrical work requires a licensed electrician in WA?'],
};
function assertEducationQuestions(file,questions){assert.deepEqual(questions,expectedEducation[file],file+': every required education question retained');}
test('education coverage rejects omission of any of the 25 required questions',()=>{
 assert.equal(Object.values(expectedEducation).flat().length,25);
 for(const [file,questions]of Object.entries(expectedEducation)){
  assertEducationQuestions(file,questions);
  for(let i=0;i<questions.length;i++)assert.throws(()=>assertEducationQuestions(file,questions.filter((_,n)=>n!==i)),/every required education question retained/);
 }
});
test('education explanations retain descriptive topic headings outside the FAQ',()=>{
 for(const [file,questions]of Object.entries(expectedEducation)){
  const id='learn-about-'+file.replace('.html','');
  const body=main(file).match(new RegExp('<div class="keyword-gap-part" id="'+id+'">([\\s\\S]*?)</div>'))[1];
  const topics=[...body.matchAll(/<h3>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/g)];
  assert.equal(topics.length,questions.length,file+': each explanation needs its own context');
  for(const topic of topics)assert(plain(topic[1]).length>10,file+': descriptive topic');
  if(file==='tap-mixer-repairs-perth.html')assert.match(plain(topics[2][1]),/customer.supplied replacement mixer/i);
 }
});
test('primary intent is unique after case folding and overview routes readers to the dedicated owners',()=>{
 const {pages}=require('../data/site-content-intent.cjs');
 const seen=new Map();
 for(const [file,p] of Object.entries(pages)){const key=p.primary.toLowerCase().trim();assert(!seen.has(key),`${file} duplicates ${seen.get(key)}: ${key}`);seen.set(key,file);}
 const h=main('lighting-power-points-perth.html');
 assert.doesNotMatch(plain(h),/That page owns/i);
 assert.match(plain(h.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)[1]),/overview/i);
 for(const file of ['lighting-installation-perth.html','power-points-perth.html'])assert(h.includes('href="'+file+'"'));
 const feed=JSON.parse(read('ai-content.json')).servicePages.find(p=>p.url.endsWith('/lighting-power-points-perth.html'));
 assert.match(feed.title||feed.name,/overview/i);
 assert.match(read('llms.txt').split('\n').find(l=>l.includes('/lighting-power-points-perth.html')),/overview/i);
 const graph=JSON.parse(read('lighting-power-points-perth.html').match(/type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
 assert.match(graph.find(n=>n['@type']==='Service').serviceType,/overview/i);
 assert.match(graph.find(n=>n['@type']==='WebPage').description,/dedicated/i);
});
test('educational subjects remain in full chapters without repeated short-answer walls, with FAQ schema parity',()=>{
 const {pages}=require('../data/site-content-intent.cjs');let count=0;
 for(const [file,p]of Object.entries(pages)){
  const section=p.sections?.find(s=>s.id==='learn-about-'+file.replace('.html',''));if(!section)continue;count++;
  const h=main(file),body=h.match(new RegExp('<div class="keyword-gap-part" id="'+section.id+'">([\\s\\S]*?)</div>'))[1];
  const details=[...h.matchAll(/<details><summary>([\s\S]*?)<\/summary><p>([\s\S]*?)<\/p><\/details>/g)];
  const statements=[...h.matchAll(/<div class="service-information"><h3>([\s\S]*?)<\/h3>([\s\S]*?)<\/div>/g)];
  const educational=[...details,...statements].filter(d=>d[2].includes('href="#'+section.id+'"'));
  assert.equal(educational.length,0,file+': no duplicate short-answer/explanation-link block');
  assert.equal(statements.length,0,file+': no fragmented statement wall');
  const original=require('./fixtures/ts-migration/baseline.json').pages[file].faq;
  for(const question of expectedEducation[file]){
   const answer=original.find(q=>q.question===question)?.answer;
   assert(answer,file+': independent original education answer');
   const edit=require('./fixtures/content-navigation-repair/statement-answer-edits.json').find(e=>e.file===file&&e.question===question);
   if(edit)assert.equal(plain(edit.before),answer,file+': approved complete-sentence edit preserves original source');
   assert(plain(body).length>80*expectedEducation[file].length,file+': substantive full explanations retained');
  }
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
 for(const g of regionGuides){for(const h of [main(g.route),applyGuide(read(g.route),g)]){assert.equal((h.match(/<figure class="electrical-work-gallery__card">/g)||[]).length,8,g.route);assert.match(h,/Company electrical work photographs illustrate installation and repair stages/);assert.doesNotMatch(h,/nearby cases|local projects|regional cases/i);}}
 let writes=0;const target={querySelector:()=>({}),set innerHTML(value){writes++;}};
 assert.equal(gallery.mountElectricalWorkGalleries({querySelectorAll:()=>[target]}),1);assert.equal(writes,0,'prerendered gallery must retain DOM nodes');
});
