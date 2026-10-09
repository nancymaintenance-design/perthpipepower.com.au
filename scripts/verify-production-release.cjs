const fs=require('node:fs'),assert=require('node:assert/strict');
const {chromium}=require('C:/Users/UFTR/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const base='https://perthpipepower.com.au/';
(async()=>{
 const sitemap=await fetch(base+'sitemap.xml');assert.equal(sitemap.status,200);
 const urls=[...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);assert.equal(urls.length,35);
 const responses=await Promise.all(urls.map(async url=>{const r=await fetch(url);assert.equal(r.status,200,url);const html=await r.text();assert(html.includes('field-design.css'),url+' release stylesheet');assert.equal((html.match(/<h1\b/g)||[]).length,1);return {url,status:r.status};}));
 const copy=require('../data/service-commercial-copy.cjs');
 const metadata=require('../data/seo-service-metadata.cjs');
 for(const [file,data] of Object.entries(copy)){
  const html=await (await fetch(base+file)).text();const main=html.match(/<main\b[\s\S]*?<\/main>/)[0];
  assert(main.includes('data-commercial-service'),file+' released commercial structure');
  assert.equal((main.match(/<section\b/g)||[]).length,5);
  assert.equal((main.match(/class="[^"]*\bfaq\b/g)||[]).length,1);
  assert(main.includes((metadata[file].headline||data.headline).replace(/&/g,'&amp;')),file+' service headline');
  assert(!html.includes('src="service-page-depth.js"'));
 }
 const browser=await chromium.launch({channel:'msedge',headless:true});const views=[];
 try{const page=await browser.newPage();
 await page.route('**/www.googletagmanager.com/**',r=>r.abort());await page.route('**/www.google.com/maps**',r=>r.abort());await page.route('**/_vercel/**',r=>r.fulfill({body:''}));await page.route('**/api/enquiry',r=>r.abort());
 for(const width of [390,1440])for(const file of ['','service-areas.html','contact.html','renewables-smart-home-perth.html']){
 await page.setViewportSize({width,height:950});await page.goto(base+file);
 await page.evaluate(async()=>{for(const i of document.images)i.loading='eager';await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));});
 const result=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth+1,broken:[...document.images].filter(i=>!i.naturalWidth).map(i=>i.src),social:[...document.querySelectorAll('footer img,footer svg')].map(i=>({width:i.getBoundingClientRect().width,height:i.getBoundingClientRect().height})),depth:document.querySelectorAll('[data-static-service-depth]').length}));
 assert(!result.overflow,file+' overflow');assert.equal(result.broken.length,0,file+' broken image');
 if(file==='renewables-smart-home-perth.html')assert.equal(result.depth,0);
 views.push({file,width,...result});
 }
 await page.goto(base+'contact.html?suburb=Subiaco#enquiry');await page.waitForFunction(()=>document.querySelector('#address').value==='Subiaco');
 }finally{await browser.close();}
 const commit=require('node:child_process').execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();
 fs.writeFileSync('docs/seo/production-service-release-20261009.json',JSON.stringify({commit,checkedAt:new Date().toISOString(),base,responses,views,commercialServices:12,suburbPrefill:true,realEmailSent:false,ga4IngestionVerified:false},null,2));
 console.log('PASS production: 35 pages HTTP 200; 8 responsive browser checks; new static content, decoded imagery and suburb prefill. No real form submission.');
})().catch(e=>{console.error(e);process.exit(1)});
