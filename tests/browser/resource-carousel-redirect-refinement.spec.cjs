const {test,expect}=require('@playwright/test');
const fs=require('node:fs'),path=require('node:path');
const report=path.resolve(__dirname,'../../../reports/fullsite-refinement-2026-10-15/task-4');
test.beforeEach(async({page})=>{fs.mkdirSync(report,{recursive:true});await page.route('**/*',r=>new URL(r.request().url()).hostname==='127.0.0.1'?r.continue():r.abort());});
test('all 126 suburb HTTP paths redirect once and retain query encoding',async({request})=>{
 const evidence=[];
 for(const s of require('../../data/perth-suburbs.json')){
  const source='/service-areas/'+s.slug+'.html?service=plumbing.html&note=a%26b%20c';
  const response=await request.get(source,{maxRedirects:0});expect(response.status(),s.slug).toBe(308);
  const location=response.headers().location;expect(location).toBe('/contact.html?suburb='+encodeURIComponent(s.name)+'&service=plumbing.html&note=a%26b%20c');
  const next=await request.get(location,{maxRedirects:0});expect(next.status(),s.slug+': no loop').toBe(200);evidence.push({source,status:response.status(),location,nextStatus:next.status(),name:s.name});
 }
 fs.writeFileSync(path.join(report,'all-126-redirects.json'),JSON.stringify(evidence,null,2));
});
test('redirect browser navigation preserves fragment and contact context',async({page})=>{
 await page.goto('/service-areas/east-perth.html?service=plumbing.html&note=a%26b%20c#enquiry');
 await expect(page).toHaveURL(/\/contact\.html\?suburb=East%20Perth&service=plumbing.html&note=a%26b%20c#enquiry$/);
 await expect(page.locator('[name=address]')).toHaveValue('East Perth');await expect(page.locator('[name=type]')).toHaveValue('Plumbing');await expect(page.locator('#enquiry')).toBeInViewport();
 await page.screenshot({path:path.join(report,'redirect-east-perth-context.png')});
});
for(const width of [390,1440])test(`responsive carousel loads WebP without duplicate fallback download ${width}`,async({page})=>{
 await page.setViewportSize({width,height:900});const downloads=[];page.on('request',r=>downloads.push(r.url()));await page.goto('/');
 await page.locator('[data-next]').click();await expect.poll(()=>page.locator('.slide.is-active').evaluate(n=>getComputedStyle(n).backgroundImage)).toContain(width===390?'plumbing-repair-480.webp':'plumbing-repair-1200.webp');
 await page.locator('[data-next]').click();await expect.poll(()=>page.locator('.slide.is-active').evaluate(n=>getComputedStyle(n).backgroundImage)).toContain(width===390?'electrical-repair-480.webp':'electrical-repair-1200.webp');
 await expect.poll(()=>downloads.filter(u=>u.endsWith(width===390?'electrical-repair-480.webp':'electrical-repair-1200.webp')).length).toBe(1);
 expect(downloads.filter(u=>/\/(?:plumbing|electrical)-repair\.jpg$/.test(u))).toEqual([]);
 await page.screenshot({path:path.join(report,`carousel-webp-${width}.png`)});fs.writeFileSync(path.join(report,`carousel-resources-${width}.json`),JSON.stringify(downloads,null,2));
});
test('carousel has one timer and pauses offscreen hidden reduced-motion hover focus and explicit pause',async({page})=>{
 await page.clock.install();await page.goto('/');await page.mouse.move(1430,890);await page.waitForTimeout(50);
 const status=page.locator('.carousel-status'),pause=page.locator('[data-carousel-pause]');await expect(pause).toHaveText('Pause slideshow');
 await page.clock.runFor(6500);await expect(status).toHaveText('2 of 3');
 await page.locator('.hero').dispatchEvent('mouseenter');await page.clock.runFor(19500);await expect(status).toHaveText('2 of 3');await page.locator('.hero').dispatchEvent('mouseleave');
 for(let i=0;i<3;i++){await page.locator('.hero').dispatchEvent('mouseenter');await page.locator('.hero').dispatchEvent('mouseleave');}
 await page.clock.runFor(6500);await expect(status).toHaveText('3 of 3');
 await page.evaluate(()=>scrollTo({top:document.body.scrollHeight,behavior:'instant'}));await page.waitForTimeout(100);await page.clock.runFor(19500);await expect(status).toHaveText('3 of 3');
 await page.evaluate(()=>scrollTo({top:0,behavior:'instant'}));await page.waitForTimeout(100);await page.clock.runFor(6500);await expect(status).toHaveText('1 of 3');
 // Browsers do not expose a headless tab-hide command; only this native state
 // boundary is controlled. Real visibilitychange reconciliation is exercised.
 await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,value:true});document.dispatchEvent(new Event('visibilitychange'));});await page.clock.runFor(19500);await expect(status).toHaveText('1 of 3');
 await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,value:false});document.dispatchEvent(new Event('visibilitychange'));});
 await pause.click();await status.click();await page.mouse.move(1430,890);await page.clock.runFor(19500);await expect(status).toHaveText('1 of 3');await expect(pause).toHaveAttribute('aria-pressed','true');
 await page.locator('[data-next]').click();await expect(status).toHaveText('2 of 3');
 await pause.click();await status.click();await page.mouse.move(1430,890);await page.clock.runFor(6500);await expect(status).toHaveText('3 of 3');
 await page.locator('[data-prev]').focus();await page.clock.runFor(19500);await expect(status).toHaveText('3 of 3');await status.click();await page.mouse.move(1430,890);
 await page.emulateMedia({reducedMotion:'reduce'});await page.clock.runFor(19500);await expect(status).toHaveText('3 of 3');await expect(pause).toBeDisabled();await page.locator('[data-prev]').click();await expect(status).toHaveText('2 of 3');
 await page.screenshot({path:path.join(report,'carousel-paused-controls.png')});
});
for(const width of [320,390])test(`pause control fits mobile without obscuring hero actions ${width}`,async({page})=>{
 await page.setViewportSize({width,height:844});await page.goto('/');
 const pause=page.locator('[data-carousel-pause]');
 const geometry=await pause.evaluate(n=>{const r=n.getBoundingClientRect(),s=getComputedStyle(n);return {rect:r.toJSON(),clientWidth:n.clientWidth,scrollWidth:n.scrollWidth,clientHeight:n.clientHeight,scrollHeight:n.scrollHeight,fontSize:s.fontSize};});
 expect(geometry.scrollWidth).toBeLessThanOrEqual(geometry.clientWidth);expect(geometry.scrollHeight).toBeLessThanOrEqual(geometry.clientHeight);expect(geometry.rect.width).toBeGreaterThan(90);expect(geometry.rect.x).toBeGreaterThanOrEqual(0);expect(geometry.rect.right).toBeLessThanOrEqual(width);expect(geometry.rect.height).toBeGreaterThanOrEqual(40);
 const controls=await page.locator('.carousel-controls').boundingBox(),actions=await page.locator('.slide.is-active .hero-actions').boundingBox();expect(controls.y).toBeGreaterThanOrEqual(actions.y+actions.height);expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
 await page.screenshot({path:path.join(report,`carousel-mobile-first-${width}.png`)});
 await pause.click();await expect(pause).toHaveAttribute('aria-pressed','true');await page.locator('[data-next]').click();await expect(page.locator('.carousel-status')).toHaveText('2 of 3');
 const resumed=await pause.boundingBox();expect(resumed.right??resumed.x+resumed.width).toBeLessThanOrEqual(width);
 await page.screenshot({path:path.join(report,`carousel-mobile-${width}.png`)});fs.writeFileSync(path.join(report,`carousel-mobile-${width}.json`),JSON.stringify({geometry,controls,actions},null,2));
});
