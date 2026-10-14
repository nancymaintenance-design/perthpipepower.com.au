const {test,expect}=require('@playwright/test');
const fs=require('node:fs'),path=require('node:path');
const source=path.resolve(__dirname,'../..'),report=path.resolve(source,'../reports/typescript-migration-2026-10-13');
const baseline=require('../fixtures/ts-migration/baseline.json');
const {services}=require('../../booking-context.js');
test.beforeEach(async({context,baseURL})=>{
 await context.route('**/*',route=>{
  const url=new URL(route.request().url());
  return url.origin===baseURL&&!(url.pathname.startsWith('/api/'))?route.continue():route.abort();
 });
});
test('all 48 pages and 239 resources are served with frozen content and local-only protections',async({request,baseURL})=>{
 const {comparePublicOutput}=require('../../.build/site/baseline.mjs');
 expect(comparePublicOutput(path.join(source,'dist'),baseline)).toEqual([]);
 for(const file of Object.keys(baseline.pages)){
  const response=await request.get('/'+file);expect(response.status(),file).toBe(200);
  const body=await response.text();expect(body).toContain('<main');expect(body).toContain('<title>'+baseline.pages[file].title.replaceAll('&','&amp;')+'</title>');
  expect(response.headers()['x-robots-tag']).toContain('noindex');expect(response.headers()['cache-control']).toBe('no-store');
 }
 const {createHash}=require('node:crypto');
 for(const [file,hash] of Object.entries(baseline.assets)){const r=await request.get('/'+file);expect(r.status(),file).toBe(200);expect(createHash('sha256').update(await r.body()).digest('hex'),file).toBe(hash);}
 expect((await request.post('/api/enquiry',{data:{}})).status()).toBe(403);
 for(const file of ['.env','vercel.json','data/business-entity.cjs','scripts/validate-seo.js','site/content/pages.mts','tests/x.js','site.js.map'])expect((await request.get('/'+file)).status()).toBe(404);
});
for(const [file,[type,label]] of Object.entries(services))test('service booking '+file,async({page})=>{
 await page.goto('/'+file);
 const link=page.locator('main a[href*="contact.html?service="]').first();
 const href=await link.getAttribute('href');expect(new URL(href,'http://local').searchParams.get('service')).toBe(file);
 await link.click();await expect(page.locator('[name=type]')).toHaveValue(type);await expect(page.locator('[name=message]')).toHaveValue('Service requested: '+label+'\n\n');
});
for(const file of ['northern-suburbs.html','southern-suburbs.html','eastern-suburbs.html','western-suburbs.html','perth-cbd-inner-suburbs.html','perth-hills-swan-valley.html'])test('region prefill and unique gallery '+file,async({page})=>{
 await page.goto('/'+file);
 const images=await page.locator('.electrical-work-gallery__image').evaluateAll(nodes=>nodes.map(n=>n.getAttribute('src')));expect(images).toHaveLength(8);expect(new Set(images).size).toBe(8);
 const link=page.locator('main a[href*="contact.html?suburb="]').first(),href=await link.getAttribute('href');await link.click();
 await expect(page.locator('[name=address]')).toHaveValue(new URL(href,'http://local').searchParams.get('suburb'));
});
test('cross-category menu supplies destination booking context',async({page})=>{
 await page.goto('/electrical.html');await page.locator('[aria-controls="plumbing-menu"]').click();await page.locator('#plumbing-menu a[href="blocked-drains-perth.html"]').click();
 await page.locator('main a[href*="contact.html?service="]').first().click();await expect(page.locator('[name=type]')).toHaveValue('Plumbing');await expect(page.locator('[name=message]')).toHaveValue('Service requested: Blocked Drain Repairs Perth\n\n');
});
test('editing, clearing, repeat prefill and restored values stay user-owned',async({page})=>{
 await page.goto('/contact.html?service=ceiling-fans-perth.html&suburb=Joondalup');
 for(const name of ['address','message']){await page.locator(`[name=${name}]`).fill('User edit');await page.evaluate(()=>window.prefillContactSuburb());await expect(page.locator(`[name=${name}]`)).toHaveValue('User edit');await page.locator(`[name=${name}]`).fill('');await page.evaluate(()=>window.prefillContactSuburb());await expect(page.locator(`[name=${name}]`)).toHaveValue('');}
 await page.locator('[name=type]').selectOption('Plumbing');await page.evaluate(()=>window.prefillContactSuburb());await expect(page.locator('[name=type]')).toHaveValue('Plumbing');
 await page.addInitScript(()=>document.addEventListener('DOMContentLoaded',()=>{document.querySelector('[name=address]').value='Restored address';document.querySelector('[name=message]').value='Restored request';document.querySelector('[name=type]').value='Not sure';},{once:true}));
 await page.goto('/contact.html?service=ceiling-fans-perth.html&suburb=Joondalup');await expect(page.locator('[name=address]')).toHaveValue('Restored address');await expect(page.locator('[name=message]')).toHaveValue('Restored request');await expect(page.locator('[name=type]')).toHaveValue('Not sure');
});
test('mobile CTA clears hero, menu and in-flow booking controls',async({page})=>{
 await page.setViewportSize({width:390,height:900});await page.goto('/ceiling-fans-perth.html');const cta=page.locator('.mobile-ctas');await expect(cta).toBeHidden();
 await page.locator('main .section').nth(2).scrollIntoViewIfNeeded();await expect(cta).toBeVisible();
 await page.locator('[aria-controls="plumbing-menu"]').click();await expect(cta).toBeHidden();await page.keyboard.press('Escape');
 await page.locator('main a.button[href*="contact.html"]').last().scrollIntoViewIfNeeded();await expect(cta).toBeHidden();
});
test('no-JS public content, navigation, gallery and contact fallback remain native',async({browser,baseURL})=>{
 const context=await browser.newContext({javaScriptEnabled:false});await context.route('**/*',r=>new URL(r.request().url()).origin===baseURL?r.continue():r.abort());
 try{const page=await context.newPage();for(const file of ['index.html','electrical.html','plumbing.html','ceiling-fans-perth.html','northern-suburbs.html','contact.html']){await page.goto(baseURL+'/'+file);await expect(page.locator('h1')).toBeVisible();expect(await page.locator('main').innerText()).not.toBe('');await expect(page.locator('a[href^="tel:"]').first()).toBeAttached();expect(await page.locator('details').count()).toBeGreaterThan(0);if(file==='northern-suburbs.html')expect(await page.locator('.electrical-work-gallery__image').count()).toBe(8);}await expect(page.locator('main a[href^="mailto:"]').first()).toBeVisible();await expect(page.locator('main a[href^="tel:"]').first()).toBeVisible();}finally{await context.close();}
});
test('CSP blocks real browser fetch, analytics, maps and native form submission',async({page})=>{
 const posts=[];page.on('request',r=>{if(r.method()==='POST')posts.push(r.url());});await page.goto('/contact.html');
 const result=await page.evaluate(async()=>{try{await fetch('/api/enquiry',{method:'POST',body:'{}'});return 'unexpected';}catch{return 'blocked';}});expect(result).toBe('blocked');
 const response=await page.request.get('/contact.html'),csp=response.headers()['content-security-policy'];for(const rule of ["connect-src 'none'","frame-src 'none'","form-action 'none'"])expect(csp).toContain(rule);
 await page.evaluate(()=>{const form=document.createElement('form');form.method='POST';form.action='/api/enquiry';document.body.append(form);form.submit();});await page.waitForTimeout(100);expect(posts).toEqual([]);
});
for(const success of [true,false])test('intercepted local form '+(success?'success':'failure'),async({page,context,baseURL})=>{
 // Only this isolated test document relaxes connect-src to self. The actual
 // server remains deny-all, and the only allowed POST is fulfilled in memory.
 const calls=[];
 await context.route('**/contact.html',async route=>{const response=await route.fetch();const headers={...response.headers()};headers['content-security-policy']=headers['content-security-policy'].replace("connect-src 'none'","connect-src 'self'");await route.fulfill({response,headers});});
 await context.route('**/api/enquiry',async route=>{expect(route.request().url()).toBe(baseURL+'/api/enquiry');calls.push(route.request().postDataJSON());await route.fulfill({status:success?200:503,contentType:'application/json',body:JSON.stringify(success?{ok:true}:{error:'Local simulated failure'})});});
 await page.goto('/contact.html');await page.locator('button[type=submit]').click();await expect(page.locator('#form-status')).toContainText('Please complete');expect(calls).toHaveLength(0);
 for(const [name,value] of Object.entries({name:'Local Test',phone:'0400000000',email:'local-test@example.invalid',address:'Local test address',message:'Simulated verification only'}))await page.locator(`[name=${name}]`).fill(value);
 await page.locator('button[type=submit]').click();await expect(page.locator('#form-status')).toContainText(success?'your enquiry has been sent':'Local simulated failure');expect(calls).toHaveLength(1);expect(calls[0].email).toBe('local-test@example.invalid');await expect(page.locator('button[type=submit]')).toBeEnabled();await expect(page.locator('[name=message]')).toHaveValue(success?'':'Simulated verification only');
});

const screenshotRoot=path.join(source,'tests/fixtures/ts-migration/screenshots');
test.describe('frozen captures with the original shared browser cache',()=>{
let visualContext;
test.beforeAll(async({browser,baseURL})=>{visualContext=await browser.newContext();await visualContext.route('**/*',r=>new URL(r.request().url()).origin===baseURL?r.continue():r.abort());});
test.afterAll(async()=>{await visualContext?.close();});
for(const record of require(path.join(screenshotRoot,'inventory.json')))test(`frozen visual ${record.file} ${record.width}`,async({baseURL,browserName})=>{
 const page=await visualContext.newPage();
 await page.setViewportSize({width:record.width,height:900});
 // Prevent the existing 6.5s automatic carousel rotation during full-page capture.
 await page.addInitScript(()=>{const interval=window.setInterval;window.setInterval=(fn,delay,...args)=>delay===6500?0:interval(fn,delay,...args);});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(baseURL+'/'+record.file,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
 await page.addStyleTag({content:'*, *::before, *::after { animation-play-state: paused !important; transition: none !important; }'});
 const dimensions=await page.evaluate(()=>({width:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight}));expect(dimensions).toEqual(record.dimensions);expect(await page.title()).toBe(record.title);expect(errors).toEqual([]);
 const output=path.join(report,'browser-visuals');fs.mkdirSync(output,{recursive:true});
 const actual=await page.screenshot({path:path.join(output,record.screenshot),fullPage:true});
 const {PNG}=require(path.join(source,'node_modules/playwright-core/lib/utilsBundle.js'));
 const before=PNG.sync.read(fs.readFileSync(path.join(screenshotRoot,record.screenshot))),after=PNG.sync.read(actual);expect([after.width,after.height]).toEqual([before.width,before.height]);
 let changed=0;for(let i=0;i<after.data.length;i+=4)if(!after.data.subarray(i,i+4).equals(before.data.subarray(i,i+4)))changed++;
 const evidence={file:record.file,width:record.width,dimensions,changedPixels:changed,totalPixels:after.width*after.height,browserName,errors};
 if(changed){
  const original=fs.readFileSync(path.join(source,record.file));
  expect(require('node:crypto').createHash('sha256').update(original).digest('hex')).toBe(baseline.pages[record.file].sha256);
  const imageState=()=>page.evaluate(()=>({dpr:devicePixelRatio,images:[...document.images].map(i=>({src:i.getAttribute('src'),currentSrc:i.currentSrc,naturalWidth:i.naturalWidth,complete:i.complete,rect:i.getBoundingClientRect().toJSON()}))}));
  const decoded=()=>page.evaluate(async()=>{await Promise.all([...document.images].map(async i=>{i.loading='eager';await i.decode();}));await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));});
  await decoded();
  const stable=PNG.sync.read(await page.screenshot({path:path.join(output,'decoded-'+record.screenshot),fullPage:true}));
  evidence.distImageState=await imageState();
  await page.route('**/'+record.file,r=>r.fulfill({status:200,contentType:'text/html',body:original,headers:{'Content-Security-Policy':"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'none'; frame-src 'none'; form-action 'none'"}}));
  await page.goto(baseURL+'/'+record.file,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);await page.addStyleTag({content:'*, *::before, *::after { animation-play-state: paused !important; transition: none !important; }'});await decoded();
  const reference=PNG.sync.read(await page.screenshot({path:path.join(output,'original-'+record.screenshot),fullPage:true}));
  evidence.originalImageState=await imageState();let supplementary=0;
  expect([reference.width,reference.height]).toEqual([after.width,after.height]);
  for(let i=0;i<stable.data.length;i+=4)if(!stable.data.subarray(i,i+4).equals(reference.data.subarray(i,i+4)))supplementary++;
  evidence.supplementaryChangedPixels=supplementary;
  fs.writeFileSync(path.join(output,record.screenshot+'.json'),JSON.stringify(evidence,null,2));
  expect(supplementary,'same-browser frozen-original HTML vs dist; original PNG mismatch remains recorded').toBe(0);
 }else{fs.writeFileSync(path.join(output,record.screenshot+'.json'),JSON.stringify(evidence,null,2));expect(changed,record.screenshot+' exact pixel comparison').toBe(0);}
 await page.close();
});
});
