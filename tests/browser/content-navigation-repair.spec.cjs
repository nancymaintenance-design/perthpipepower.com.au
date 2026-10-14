const {test,expect}=require('@playwright/test');
const fs=require('node:fs'),path=require('node:path');
const report=path.resolve(__dirname,'../../../reports/content-navigation-repair-2026-10-14');
test.beforeEach(async({context,baseURL})=>context.route('**/*',r=>new URL(r.request().url()).origin===baseURL&&!new URL(r.request().url()).pathname.startsWith('/api/')?r.continue():r.abort()));
for(const width of [1440,320])test('native no-JS keyboard service menu clears the header and follows its link '+width,async({browser,baseURL})=>{
 const context=await browser.newContext({javaScriptEnabled:false,viewport:{width,height:900}});
 await context.route('**/*',r=>new URL(r.request().url()).origin===baseURL&&!new URL(r.request().url()).pathname.startsWith('/api/')?r.continue():r.abort());
 try{
  const page=await context.newPage();await page.goto(baseURL+'/electrical.html');
  if(width===1440)await expect(page.locator('.utility')).toBeVisible();
  const button=page.locator('[aria-controls="plumbing-menu"]');
  // Reach the native control with the keyboard, without focus/evaluate helpers.
  for(let i=0;i<12&&!await button.evaluate(n=>n===document.activeElement);i++)await page.keyboard.press('Tab');
  await expect(button).toBeFocused();await expect(page.locator('#plumbing-menu')).toBeVisible();
  await page.keyboard.press('Tab');const link=page.locator('#plumbing-menu a').first();await expect(link).toBeFocused();
  // Wait for the existing CSS reveal transition, without disabling native CSS.
  await expect.poll(async()=>{const h=await page.locator('.site-header').boundingBox(),m=await page.locator('#plumbing-menu').boundingBox();return m.y-h.y-h.height;}).toBeGreaterThanOrEqual(-1);
  const header=await page.locator('.site-header').boundingBox(),menu=await page.locator('#plumbing-menu').boundingBox(),focus=await link.boundingBox();
  expect(menu.y,'native menu clears the actual header').toBeGreaterThanOrEqual(header.y+header.height-1);
  expect(focus.y,'native focused link clears the actual header').toBeGreaterThanOrEqual(header.y+header.height-1);
  expect(menu.x).toBeGreaterThanOrEqual(0);expect(menu.x+menu.width).toBeLessThanOrEqual(width+1);
  await page.screenshot({path:path.join(report,'screenshots','native-menu-'+width+'.png')});
  await page.keyboard.press('Enter');await expect(page).toHaveURL(/contact\.html\?service=plumbing\.html$/);
  await expect(page.locator('h1')).toBeVisible();await expect(page.locator('a[href="tel:0413477667"]').first()).toBeAttached();
 }finally{await context.close();}
});
test('office map and native Maps link remain visible without appended filler',async({page})=>{
 await page.goto('/index.html');
 const office=page.locator('.office-location');
 expect(await office.locator('[data-site-intent]').count()).toBe(0);
 await expect(page.locator('#home-service-pathways')).toHaveCount(0);
 await expect(page.locator('.home-company-advantages')).toHaveCount(0);
 await expect(office.locator('iframe')).toBeVisible();
 await expect(office.locator('a[href^="https://www.google.com/maps/place/"]')).toBeVisible();
 await expect(page.locator('.office-map-fallback')).toHaveCount(0);
});
test('long translated menu labels wrap without obscuring focused anchors',async({page})=>{
 await page.setViewportSize({width:320,height:900});await page.goto('/electrical.html');
 await page.locator('[aria-controls="plumbing-menu"]').evaluate(n=>n.textContent='Plumbing repairs and maintenance — 水管维修与物业服务');
 await page.locator('[aria-controls="electrical-menu"]').evaluate(n=>n.textContent='Electrical repairs and installations — 电气维修与安装');
 await page.locator('main .section').last().scrollIntoViewIfNeeded();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
 const button=page.locator('[aria-controls="electrical-menu"]');await button.click();await expect(page.locator('#electrical-menu')).toBeVisible();await page.keyboard.press('Escape');await expect(button).toBeFocused();
});
test('all HTTP pages are the exact built bodies with local-only protections',async({request})=>{
 const root=path.resolve(__dirname,'../../dist');
 for(const file of fs.readdirSync(root).filter(f=>f.endsWith('.html'))){const r=await request.get('/'+file);expect(r.status(),file).toBe(200);expect(Buffer.compare(await r.body(),fs.readFileSync(path.join(root,file))),file).toBe(0);expect(r.headers()['x-robots-tag']).toContain('noindex');expect(r.headers()['cache-control']).toBe('no-store');}
 for(const file of ['.env','site/content/pages.mts','api/enquiry.js','tests/browser/x.js','vercel.json'])expect((await request.get('/'+file)).status()).toBe(404);
 expect((await request.post('/api/enquiry',{data:{}})).status()).toBe(403);
});
const pages=['index.html','about.html','plumbing.html','electrical.html','service-areas.html','northern-suburbs.html','contact.html'];
for(const width of [320,390,1440])test('privacy uses the same sticky service menus '+width,async({page})=>{
 await page.setViewportSize({width,height:900});await page.goto('/privacy.html');
 expect(await page.locator('.site-header').evaluate(n=>getComputedStyle(n).position)).toBe('sticky');
 await page.locator('[aria-controls="electrical-menu"]').click();await expect(page.locator('#electrical-menu')).toBeVisible();
 await page.locator('#electrical-menu a').first().focus();await page.keyboard.press('Escape');await expect(page.locator('[aria-controls="electrical-menu"]')).toBeFocused();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
});
for(const width of [320,390,1440])for(const file of pages)test('approved visual structure '+file+' '+width,async({page})=>{
 await page.setViewportSize({width,height:900});
 await page.addInitScript(()=>{const interval=window.setInterval;window.setInterval=(fn,delay,...args)=>delay===6500?0:interval(fn,delay,...args);});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/'+file);
 await expect(page.locator('h1')).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
 const header=await page.locator('.site-header').boundingBox(),h1=await page.locator('h1').boundingBox();expect(h1.y).toBeGreaterThanOrEqual(header.y+header.height-1);
 await page.evaluate(async()=>{await Promise.all([...document.images].map(async i=>{i.loading='eager';await i.decode();}));});
 expect(await page.locator('img').evaluateAll(images=>images.every(i=>i.complete&&i.naturalWidth>0))).toBe(true);expect(errors).toEqual([]);
 await page.addStyleTag({content:'*,*::before,*::after{animation-play-state:paused!important;transition:none!important}'});
 const dir=path.join(report,'screenshots');fs.mkdirSync(dir,{recursive:true});
 await page.screenshot({path:path.join(dir,file.replace('.html','')+'-'+width+'.png'),fullPage:true});
 await page.screenshot({path:path.join(dir,file.replace('.html','')+'-'+width+'-viewport.png')});
 if(file==='index.html'&&width===1440)await page.locator('.office-location').screenshot({path:path.join(dir,'home-office-desktop.png')});
 if(file==='about.html'&&width===1440)await page.locator('main>.section').first().screenshot({path:path.join(dir,'about-core-services-desktop.png')});
 if(file==='service-areas.html'){
  await page.locator('[aria-controls="plumbing-menu"]').click();await expect(page.locator('#plumbing-menu')).toBeVisible();
  const menu=await page.locator('#plumbing-menu').boundingBox();expect(menu.x).toBeGreaterThanOrEqual(0);expect(menu.x+menu.width).toBeLessThanOrEqual(width+1);
  await page.screenshot({path:path.join(dir,'areas-menu-'+width+'.png')});
 }
});
for(const width of [320,390,1440])test('sticky header and menu clear content and anchors '+width,async({page})=>{
 await page.setViewportSize({width,height:900});await page.goto('/service-areas.html');
 const button=page.locator('[aria-controls="plumbing-menu"]');await button.click();
 await expect(page.locator('#plumbing-menu')).toBeVisible();
 await expect.poll(async()=>{const header=await page.locator('.site-header').boundingBox(),menu=await page.locator('#plumbing-menu').boundingBox();return menu.y-header.y-header.height;}).toBeGreaterThanOrEqual(-1);
 await page.locator('#plumbing-menu a').first().focus();await page.keyboard.press('Escape');
 await expect(button).toBeFocused();await expect(button).toHaveAttribute('aria-expanded','false');
 await page.goto('/water-pressure-perth.html#service-quote');
 const header=await page.locator('.site-header').boundingBox(),target=await page.locator('h2#service-quote').boundingBox();
 expect(target.y).toBeGreaterThanOrEqual(header.y+header.height-1);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
});
