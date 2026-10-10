const {chromium}=require('C:/Users/UFTR/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('node:fs'),assert=require('node:assert/strict');
const base=process.env.PERTH_PREVIEW_URL||'http://127.0.0.1:4184';
const report=process.env.PERTH_VERIFICATION_REPORT||'docs/seo/full-site-verification-20261008.json';
const pages=[...fs.readFileSync('sitemap.xml','utf8').matchAll(/<loc>https:\/\/perthpipepower\.com\.au\/([^<]*)<\/loc>/g)].map(m=>m[1]||'index.html');
const topics=require('../data/service-presentation.cjs');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true}),results=[];
 try{
  const page=await browser.newPage({reducedMotion:'reduce'});
  await page.route('**/www.googletagmanager.com/**',r=>r.abort());await page.route('**/www.google.com/maps**',r=>r.abort());await page.route('**/_vercel/**',r=>r.fulfill({body:''}));
  for(const width of [390,1440])for(const file of pages){
   await page.setViewportSize({width,height:950});const response=await page.goto(base+'/'+file);assert.equal(response.status(),200);
   await page.evaluate(async()=>{for(const img of document.images)img.loading='eager';await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));});
   const result=await page.evaluate(()=>{
    const flat=s=>s.replace(/\s+/g,' ').trim();const text=flat(document.querySelector('main').textContent);
    const faqs=[];const walk=v=>{if(!v||typeof v!=='object')return;if(v['@type']==='FAQPage')for(const q of v.mainEntity||[])faqs.push({question:flat(q.name),answer:flat(q.acceptedAnswer?.text||'')});for(const x of Object.values(v))if(typeof x==='object')Array.isArray(x)?x.forEach(walk):walk(x);};
    let invalidJson=0;for(const s of document.querySelectorAll('script[type="application/ld+json"]')){try{walk(JSON.parse(s.textContent));}catch{invalidJson++;}}
    return{overflow:document.documentElement.scrollWidth>innerWidth+1,broken:[...document.images].filter(i=>!i.naturalWidth).map(i=>i.src),h1:document.querySelectorAll('h1').length,invalidJson,faqCount:faqs.length,missingFaq:faqs.filter(q=>!text.includes(q.question)||!text.includes(q.answer)),commercial:!!document.querySelector('[data-commercial-service]'),sections:document.querySelectorAll('main>section').length,faqGroups:document.querySelectorAll('main .faq').length,depthSections:document.querySelectorAll('[data-static-service-depth]').length,quotes:document.querySelectorAll('.service-scope').length};
   });
   assert(!result.overflow,file+' overflow');assert.equal(result.broken.length,0,file+' broken imagery');assert.equal(result.h1,1);assert.equal(result.invalidJson,0,file+' invalid schema');assert.equal(result.missingFaq.length,0,file+' FAQ differs from schema');
   if(topics[file]){assert(result.commercial,file+' native commercial copy');assert.equal(result.sections,5,file+' five coherent sections');assert.equal(result.faqGroups,1,file+' one FAQ group');assert.equal(result.depthSections,0,file+' no duplicated legacy content');}
   const firstFaq=page.locator('main details summary').first();if(await firstFaq.count()){await firstFaq.click();assert.equal(await firstFaq.evaluate(e=>e.parentElement.open),true);}
   results.push({file,width,...result});
  }
  // Every desktop dropdown opens within the viewport and Escape closes it.
  for(const width of [390,768,980,1440]){
   await page.setViewportSize({width,height:950});await page.goto(base+'/');const toggle=page.locator('.nav-toggle');if(await toggle.isVisible())await toggle.click();
   for(const id of ['plumbing-menu','electrical-menu']){const button=page.locator(`[aria-controls="${id}"]`);await button.click();const menu=page.locator('#'+id);assert(await menu.isVisible());const bounds=await menu.boundingBox();assert(bounds.x>=-1&&bounds.x+bounds.width<=width+1,id+' outside screen');await page.keyboard.press('Escape');assert.equal(await button.getAttribute('aria-expanded'),'false');}
  }
  // No personal data in custom conversion parameters; only successful requests count.
  await page.goto(base+'/contact.html');await page.evaluate(()=>{window.previewEvents=[];window.gtag=(...args)=>window.previewEvents.push(args);document.addEventListener('click',e=>{if(e.target.closest('a[href^="tel:"]'))e.preventDefault();});});
  await page.locator('a[href^="tel:"]').first().click();assert.equal(await page.evaluate(()=>previewEvents.filter(e=>e[1]==='phone_click').length),1);
  for(const [id,value] of Object.entries({name:'Preview Only',phone:'0400000000',email:'preview@example.test',address:'Subiaco',message:'Test only'}))await page.locator('#'+id).fill(value);
  await page.route('**/api/enquiry',r=>r.fulfill({status:500,contentType:'application/json',body:'{"error":"Preview error"}'}));await page.locator('button[type=submit]').click();await page.waitForFunction(()=>document.querySelector('#form-status').textContent==='Preview error');assert.equal(await page.evaluate(()=>previewEvents.filter(e=>e[1]==='generate_lead').length),0);
  await page.unroute('**/api/enquiry');await page.route('**/api/enquiry',r=>r.fulfill({status:200,contentType:'application/json',body:'{"ok":true}'}));await page.locator('button[type=submit]').click();await page.waitForFunction(()=>document.querySelector('#form-status').textContent.includes('has been sent'));
  const events=await page.evaluate(()=>previewEvents);assert.equal(events.filter(e=>e[1]==='generate_lead').length,1);assert(!/preview@example|0400000000|Subiaco|Test only/.test(JSON.stringify(events)));
  fs.writeFileSync(report,JSON.stringify({checkedAt:new Date().toISOString(),base,results,menus:true,conversionEvents:events,formRequests:'mocked only'},null,2));console.log(`PASS ${results.length} full-site viewport checks; FAQ/schema, decoded images, menus and conversion events.`);
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
