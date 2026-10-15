const {test,expect}=require('@playwright/test');
const path=require('node:path');
const fs=require('node:fs');
const report=path.resolve(__dirname,'../../../reports/fullsite-refinement-2026-10-15/task-3');
test.beforeEach(async({page})=>{
 page.setDefaultTimeout(10000);
 await page.route('**/*',route=>new URL(route.request().url()).hostname==='127.0.0.1'?route.continue():route.abort());
});
for(const [width,height]of [[390,844],[768,900],[1024,900],[1440,900],[1440,600]])test(`responsive enquiry, three-block layout and menu evidence ${width}x${height}`,async({page})=>{
 await page.setViewportSize({width,height});
 const evidence={width,height,pages:[]};fs.mkdirSync(report,{recursive:true});
 for(const file of ['about.html','electrical.html','tap-mixer-repairs-perth.html']){
  await page.goto('/'+file);await page.evaluate(()=>document.fonts.ready);
  const header=await page.locator('.site-header').boundingBox();
  if(width<=800)expect(header.height).toBeLessThan(90);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  await page.screenshot({path:path.join(report,`${file}-${width}x${height}-top.png`)});
  const row={file,headerHeight:header.height};
  if(file==='electrical.html'){
   const grid=page.locator('.enquiry-content .rich-grid').first();await grid.scrollIntoViewIfNeeded();
   const cards=await grid.locator(':scope > *').evaluateAll(nodes=>nodes.map(n=>n.getBoundingClientRect().toJSON()));expect(cards).toHaveLength(3);
   if(width>=1200)expect(Math.max(...cards.map(c=>c.y))-Math.min(...cards.map(c=>c.y))).toBeLessThan(1);
   else expect(Math.max(...cards.map(c=>c.x))-Math.min(...cards.map(c=>c.x))).toBeLessThan(1);
   row.cards=cards;await page.screenshot({path:path.join(report,`electrical-three-blocks-${width}x${height}.png`)});
  }
  if(file==='tap-mixer-repairs-perth.html'){
   await page.locator('.page-hero a[href="#enquiry"]').click();await expect(page.locator('#enquiry [name=name]')).toBeInViewport();
   if(width<=1000)await expect.poll(async()=>(await page.locator('#enquiry').boundingBox()).y).toBeLessThan(210);
   await page.locator('#enquiry [name=name]').focus();await expect(page.locator('#enquiry [name=name]')).toBeInViewport();
   if(width<=800)await expect(page.locator('.mobile-ctas')).toBeHidden();
   row.form=await page.locator('#enquiry').boundingBox();
   const rail=page.locator('.enquiry-sidebar__sticky');row.rail=await rail.evaluate(n=>({position:getComputedStyle(n).position,clientHeight:n.clientHeight,scrollHeight:n.scrollHeight,scrollbar:getComputedStyle(n).scrollbarColor}));
   if(width>1000){expect(row.rail.position).toBe('sticky');expect((await rail.boundingBox()).width).toBe(340);}
   if(height===600){expect(row.rail.scrollHeight).toBeGreaterThan(row.rail.clientHeight);await rail.evaluate(n=>n.scrollTop=n.scrollHeight);await expect(page.locator('#enquiry button[type=submit]')).toBeInViewport();}
   await page.screenshot({path:path.join(report,`tap-enquiry-${width}x${height}.png`)});
   if(width>1000){await page.evaluate(()=>scrollTo({top:document.body.scrollHeight,behavior:'instant'}));const r=await rail.boundingBox(),f=await page.locator('footer').boundingBox();expect(r.y+r.height).toBeLessThanOrEqual(f.y+1);row.footerClearance=f.y-r.y-r.height;}
  }
  evidence.pages.push(row);
 }
 if(width<=800){await page.goto('/electrical.html');await page.locator('.nav-toggle').click();await page.locator('[aria-controls="electrical-menu"]').click();await expect(page.locator('#electrical-menu')).toBeVisible();await expect(page.locator('.mobile-ctas')).toBeHidden();await page.screenshot({path:path.join(report,`menu-open-${width}x${height}.png`)});}
 fs.writeFileSync(path.join(report,`geometry-${width}x${height}.json`),JSON.stringify(evidence,null,2));
});
test('cross-page query and manually edited sidebar fields remain intact',async({page})=>{
 await page.goto('/hot-water-problems-perth.html?suburb=Subiaco');
 const contact=page.locator('.site-nav .nav-cta');expect(await contact.getAttribute('href')).toContain('suburb=Subiaco');expect(await contact.getAttribute('href')).toContain('service=hot-water-problems-perth.html');
 for(const [name,value]of Object.entries({name:'Existing user',address:'User address',message:'User request'}))await page.locator(`[name=${name}]`).fill(value);
 await page.locator('[name=type]').selectOption('Electrical');await page.evaluate(()=>window.prefillContactSuburb());
 await expect(page.locator('[name=type]')).toHaveValue('Electrical');await expect(page.locator('[name=address]')).toHaveValue('User address');await expect(page.locator('[name=message]')).toHaveValue('User request');
 await page.locator('[name=message]').fill('');await page.evaluate(()=>window.prefillContactSuburb());await expect(page.locator('[name=message]')).toHaveValue('');
 await page.locator('[name=type]').focus();await page.keyboard.press('Alt+ArrowDown');await page.screenshot({path:path.join(report,'native-service-select.png')});await page.keyboard.press('Escape');await expect(page.locator('[name=type]')).toBeFocused();
 await contact.click();await expect(page.locator('[name=type]')).toHaveValue('Not sure');await expect(page.locator('[name=address]')).toHaveValue('Subiaco');await expect(page.locator('[name=message]')).toHaveValue('Service requested: Hot Water Repairs & System Replacement Perth\n\n');
});
test('compact mobile menu closes with Escape and returns focus without covering enquiry actions',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/hot-water-problems-perth.html?suburb=Subiaco');
 expect((await page.locator('.site-header').boundingBox()).height).toBeLessThan(90);
 const toggle=page.getByRole('button',{name:'Menu',exact:true});await toggle.click();await expect(toggle).toHaveAttribute('aria-expanded','true');
 const plumbing=page.locator('[aria-controls="plumbing-menu"]');await plumbing.click();await expect(page.locator('#plumbing-menu')).toBeVisible();
 await expect(page.locator('.mobile-ctas')).toBeHidden();await page.keyboard.press('Escape');await expect(plumbing).toBeFocused();
 await page.keyboard.press('Escape');await expect(toggle).toBeFocused();await expect(toggle).toHaveAttribute('aria-expanded','false');
 await page.locator('.page-hero a[href="#enquiry"]').click();await expect(page.locator('#enquiry')).toBeFocused();
 await expect(page.locator('#enquiry [name=name]')).toBeInViewport();
 await expect.poll(async()=>Math.abs((await page.locator('.site-header').boundingBox()).y)).toBeLessThan(1);
 await expect.poll(async()=>(await page.locator('#enquiry').boundingBox()).y).toBeLessThan(200);
 const target=await page.locator('#enquiry').boundingBox();expect(target.y).toBeGreaterThanOrEqual((await page.locator('.site-header').boundingBox()).height);
 await expect(page.locator('[name=address]')).toHaveValue('Subiaco');await expect(page.locator('[name=type]')).toHaveValue('Not sure — Hot Water Repairs & System Replacement Perth');
 await page.screenshot({path:path.join(report,'mobile-enquiry-390.png')});
});
test('focused mobile input stays clear of contact bar in a reduced visual viewport',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/tap-mixer-repairs-perth.html');await page.locator('.page-hero a[href="#enquiry"]').click();await expect(page.locator('#enquiry [name=name]')).toBeInViewport();
 await page.setViewportSize({width:390,height:460});const message=page.locator('#enquiry [name=message]');await message.focus();await message.scrollIntoViewIfNeeded();await expect(message).toBeFocused();await expect(page.locator('.mobile-ctas')).toBeHidden();
 const r=await message.boundingBox(),h=await page.locator('.site-header').boundingBox();expect(r.y).toBeGreaterThanOrEqual(h.y+h.height);expect(r.y+r.height).toBeLessThanOrEqual(460);
 await page.screenshot({path:path.join(report,'mobile-focused-reduced-viewport.png')});
});
test('hero enquiry labels and outline boundaries remain readable on the dark hero',async({page})=>{
 for(const file of ['about.html','tap-mixer-repairs-perth.html']){
  await page.goto('/'+file);const action=page.locator('.page-hero a.button[href="#enquiry"]');
  const colours=await action.evaluate(n=>{const s=getComputedStyle(n),h=getComputedStyle(n.closest('.page-hero'));return {text:s.color,border:s.borderColor,background:s.backgroundColor,hero:h.backgroundColor};});
  const luminance=value=>{const rgb=value.match(/[\d.]+/g).slice(0,3).map(Number).map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4;});return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;};
  const contrast=(a,b)=>{a=luminance(a);b=luminance(b);return (Math.max(a,b)+.05)/(Math.min(a,b)+.05);};
  const background=colours.background==='rgba(0, 0, 0, 0)'?colours.hero:colours.background;
  expect(contrast(colours.text,background),file+': normal label contrast').toBeGreaterThanOrEqual(4.5);
  if(file==='tap-mixer-repairs-perth.html')expect(contrast(colours.border,colours.hero),file+': visible secondary outline').toBeGreaterThanOrEqual(3);
  await page.screenshot({path:path.join(report,file+'-hero-action-readable.png')});
 }
});
test('Tab leaving the non-modal navigation uncovers the focused page content',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/about.html');const toggle=page.locator('.nav-toggle');await toggle.click();await page.locator('.site-nav .nav-cta').focus();await page.keyboard.press('Tab');
 expect(await page.evaluate(()=>document.querySelector('main').contains(document.activeElement))).toBe(true);
 await expect(toggle).toHaveAttribute('aria-expanded','false');
 const focused=await page.evaluate(()=>document.activeElement.getBoundingClientRect().toJSON()),header=await page.locator('.site-header').boundingBox();expect(focused.y).toBeGreaterThanOrEqual(header.y+header.height);
});
