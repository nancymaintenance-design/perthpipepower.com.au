const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('./support/public-paths.cjs');
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=resolvePublicRoot();
const {hasLocalLink}=require('../scripts/lib/link-assertions.cjs');
const files=['lighting-installation-perth.html','power-points-perth.html','dishwasher-installation-perth.html','toilet-installation-perth.html','shower-plumbing-repairs-perth.html','water-pressure-perth.html','ceiling-fans-perth.html','exhaust-fans-perth.html','switchboard-upgrades-perth.html','rcd-testing-perth.html','emergency-plumber-perth.html','emergency-electrician-perth.html'];
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
test('confirmed services are reachable, distinct native pages with matching FAQ and connected provider',()=>{
 for(const file of files){
  assert(fs.existsSync(path.join(root,file)),file+': confirmed service has no dedicated page');
  const h=read(file),main=h.match(/<main\b[\s\S]*?<\/main>/)[0];
  assert.equal((main.match(/<h1\b/g)||[]).length,1);
  assert(h.includes('href="https://perthpipepower.com.au/'+file+'"'));
  assert(read('sitemap.xml').includes('<loc>https://perthpipepower.com.au/'+file+'</loc>'));
  const incoming=fs.readdirSync(root).filter(f=>f.endsWith('.html')&&f!==file).filter(f=>read(f).match(/<main\b[\s\S]*?<\/main>/)?.[0].includes('href="'+file+'"'));
  assert(incoming.length>=3,file+': fewer than three relevant main-area routes');
  const graph=JSON.parse(h.match(/type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
  assert.equal(graph.find(x=>x['@type']==='Service').provider['@id'],'https://perthpipepower.com.au/#business');
  const clean=s=>s.replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();
  const visible=[...main.matchAll(/<details><summary>([\s\S]*?)<\/summary><p>([\s\S]*?)<\/p><\/details>/g)].map(x=>[clean(x[1]),clean(x[2])]);
  assert(visible.length>=4,file+': needs service and educational answers');
  assert.deepEqual(graph.find(x=>x['@type']==='FAQPage').mainEntity.map(x=>[x.name,x.acceptedAnswer.text]),visible);
  assert(main.includes('href="tel:0413477667"')&&hasLocalLink(main,'contact.html'));
 }
});
test('routine hours and emergency availability remain separate in customer copy and entity data',()=>{
 for(const file of ['index.html','contact.html','faq.html',...files]){
  const h=read(file);assert(h.includes('09:00–21:00'),file+': missing routine hours');assert(/24-hour emergency repairs/.test(h),file+': missing emergency service');
  const graph=JSON.parse(h.match(/type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
  const hours=graph.find(x=>x['@type']==='LocalBusiness').openingHoursSpecification;
  assert.equal(hours.opens,'09:00');assert.equal(hours.closes,'21:00');assert.equal(hours.dayOfWeek.length,7);
 }
 const emergency=read('emergency-electrician-perth.html').match(/<main\b[\s\S]*?<\/main>/)[0];
 assert(emergency.includes('tel:131351'),'official emergency contact must be present, not index -1');
 assert(emergency.indexOf('tel:131351')<emergency.indexOf('tel:0413477667'),'utility safety route precedes repair call');
 const plumbing=read('emergency-plumber-perth.html').match(/<main\b[\s\S]*?<\/main>/)[0];
 assert(plumbing.includes('tel:131375'),'wastewater reporting must remain on the emergency plumbing page');
 assert(plumbing.indexOf('tel:131375')<plumbing.indexOf('tel:0413477667'));
 assert(/quoted|quote/.test(emergency));assert(!/within 30 minutes|we guarantee arrival|free call-out/i.test(emergency));
});
test('expanded page generation is repeatable and preserves existing canonical pages',()=>{
 assert(fs.existsSync(path.join(SOURCE_ROOT,'scripts/build-expanded-services.cjs')),'missing reproducible generator');
 const {buildExpandedServices}=require('../scripts/build-expanded-services.cjs');
 const temp=createFixture('expanded-builder-test-');
 try{
  for(const file of ['lighting-power-points-perth.html','index.html','sitemap.xml','ai-content.json'])fs.copyFileSync(path.join(root,file),path.join(temp,file));
  const original=fs.readFileSync(path.join(temp,'lighting-power-points-perth.html'),'utf8');
  fs.writeFileSync(path.join(temp,'about.html'),'UNRELATED FIXTURE CONTENT');
  buildExpandedServices(temp);const once=files.map(f=>fs.readFileSync(path.join(temp,f),'utf8'));
  buildExpandedServices(temp);assert.deepEqual(files.map(f=>fs.readFileSync(path.join(temp,f),'utf8')),once);
  assert.equal(fs.readFileSync(path.join(temp,'lighting-power-points-perth.html'),'utf8'),original);
  assert.equal(fs.readFileSync(path.join(temp,'about.html'),'utf8'),'UNRELATED FIXTURE CONTENT');
 }finally{fs.rmSync(temp,{recursive:true,force:true});}
});
test('the complete confirmed-content rebuild keeps native menus, dates and FAQ stable',()=>{
 assert(fs.existsSync(path.join(SOURCE_ROOT,'scripts/build-confirmed-content.cjs')),'missing single reproducible confirmed-content workflow');
 const {buildConfirmedContent}=require('../scripts/build-confirmed-content.cjs');
 const temp=createFixture('confirmed-workflow-test-');
 try{
  fs.mkdirSync(path.join(temp,'data'));
  for(const file of fs.readdirSync(root).filter(f=>f.endsWith('.html')).concat(['sitemap.xml','ai-content.json','llms.txt']))fs.copyFileSync(path.join(root,file),path.join(temp,file));
  fs.copyFileSync(path.join(SOURCE_ROOT,'data/sitemap-content-dates.json'),path.join(temp,'data/sitemap-content-dates.json'));
  buildConfirmedContent(temp,'2026-10-12');
  for(const [file,number]of [['emergency-electrician-perth.html','131351'],['emergency-plumber-perth.html','131375'],['switchboard-upgrades-perth.html','131351']]){
   const main=fs.readFileSync(path.join(temp,file),'utf8').match(/<main\b[\s\S]*?<\/main>/)[0];
   assert(main.includes('tel:'+number),file+': rebuild discarded official safety route');
   assert(main.indexOf('tel:'+number)<main.indexOf('tel:0413477667'));
  }
  const before=fs.readdirSync(temp).filter(f=>f.endsWith('.html')).map(f=>fs.readFileSync(path.join(temp,f),'utf8'));
  const home=fs.readFileSync(path.join(temp,'index.html'),'utf8');
  for(const file of files)assert(home.match(/<header\b[\s\S]*?<\/header>/)[0].includes('href="'+file+'"'),file+': native menu route missing');
  buildConfirmedContent(temp,'2026-10-12');
  assert.deepEqual(fs.readdirSync(temp).filter(f=>f.endsWith('.html')).map(f=>fs.readFileSync(path.join(temp,f),'utf8')),before);
 }finally{fs.rmSync(temp,{recursive:true,force:true});}
});
