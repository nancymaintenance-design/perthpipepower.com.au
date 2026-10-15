const {test,expect}=require('@playwright/test');
const fs=require('node:fs'),path=require('node:path');
const report=path.resolve(__dirname,'../../../reports/fullsite-refinement-2026-10-15/final-fix');
test.beforeEach(async({page,baseURL})=>{
 await page.route('**/*',r=>new URL(r.request().url()).origin===baseURL?r.continue():r.abort());
});
// Catches a lost/scoped-away light override on any real carousel slide. This
// checks the rendered label, not a numeric contrast claim across a photograph.
for(const width of [390,1440])test(`homepage carousel labels use the existing light token on all three slides ${width}`,async({page})=>{
 fs.mkdirSync(report,{recursive:true});
 await page.setViewportSize({width,height:900});await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');
 const evidence=[];
 for(const [index,label]of ['Perth plumbing & electrical repairs','Plumbing','Electrical'].entries()){
  await expect(page.locator('.carousel-status')).toHaveText(`${index+1} of 3`);
  const eyebrow=page.locator('.hero .slide.is-active .eyebrow');await expect(eyebrow).toBeVisible();await expect(eyebrow).toHaveText(label);
  const style=await eyebrow.evaluate(n=>({text:n.textContent,color:getComputedStyle(n).color,opacity:getComputedStyle(n).opacity,lightToken:getComputedStyle(n).getPropertyValue('--field-light').trim(),backgroundImage:getComputedStyle(n.closest('.slide')).backgroundImage}));
  expect(style.color).toBe('rgb(237, 245, 247)');expect(style.opacity).toBe('1');expect(style.lightToken).toBe('#edf5f7');expect(style.backgroundImage).not.toBe('none');
  const screenshot=path.join(report,`carousel-label-${width}-slide-${index+1}.png`);await page.screenshot({path:screenshot});evidence.push({...style,screenshot,width,slide:index+1});
  if(index<2)await page.locator('[data-next]').click();
 }
 fs.writeFileSync(path.join(report,`carousel-label-${width}.json`),JSON.stringify(evidence,null,2));
});
