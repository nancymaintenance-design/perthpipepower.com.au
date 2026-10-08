const {chromium}=require('C:/Users/UFTR/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try{
  const page=await browser.newPage({reducedMotion:'reduce'});
  await page.route('**/www.googletagmanager.com/**',r=>r.abort());
  for(const width of [390,1440]){
   await page.setViewportSize({width,height:950});
   await page.goto('http://127.0.0.1:4184/hot-water-problems-perth.html');
   await page.evaluate(async()=>{await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));});
   const image=await page.locator('.service-editorial-image').boundingBox();assert(image.width<=480 && image.height<=240);
   await page.locator('.service-jump-links a[href="#service-quote"]').click();
   await page.waitForFunction(()=>location.hash==='#service-quote');
   await page.waitForFunction(()=>{const y=document.querySelector('#service-quote').getBoundingClientRect().y;return y>=0 && y<260;});
   const quote=await page.locator('#service-quote').boundingBox();assert(quote.y>=0 && quote.y<260,'Quote anchor stays below sticky header');
   const summary=page.locator('#service-faq summary').first();await summary.focus();await page.keyboard.press('Enter');assert(await summary.evaluate(e=>e.parentElement.open));
   await page.evaluate(()=>{document.documentElement.style.scrollBehavior='auto';window.scrollTo(0,0);});
   await page.screenshot({path:`docs/seo/screenshots/service-clean-${width}.png`,fullPage:true});
  }
  for(const file of ['fixtures-appliances-perth.html','renewables-smart-home-perth.html']){
   await page.goto('http://127.0.0.1:4184/'+file);
   assert.equal(await page.locator('[data-enquiry-form]').count(),1);
  }
  console.log('PASS: compact imagery, visible quote anchors, keyboard FAQ, retained enquiry forms and desktop/mobile screenshots.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
