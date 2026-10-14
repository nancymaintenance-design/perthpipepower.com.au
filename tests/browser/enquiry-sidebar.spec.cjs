const {test,expect}=require('@playwright/test');
test.beforeEach(async({page})=>{
 await page.route('**/*',route=>new URL(route.request().url()).hostname==='127.0.0.1'?route.continue():route.abort());
});
test('desktop rail fills the right column, sticks below navigation and stops before footer',async({page})=>{
 await page.goto('/tap-mixer-repairs-perth.html');
 const content=page.locator('.enquiry-content'),rail=page.locator('.enquiry-sidebar__sticky');
 const c=await content.boundingBox(),r=await rail.boundingBox();
 expect(r.x).toBeGreaterThan(c.x+c.width);expect(r.width).toBeGreaterThan(300);
 await page.evaluate(()=>scrollTo(0,1500));
 const sticky=await rail.boundingBox(),header=await page.locator('.site-header').boundingBox();
 expect(sticky.y).toBeGreaterThanOrEqual(header.y+header.height);expect(sticky.y).toBeLessThan(header.y+header.height+40);
 await page.evaluate(()=>scrollTo(0,document.body.scrollHeight));
 const end=await rail.boundingBox(),footer=await page.locator('footer').boundingBox();
 expect(end.y+end.height).toBeLessThanOrEqual(footer.y+1);
});
test('mobile form follows the full article without overlay or horizontal overflow',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/tap-mixer-repairs-perth.html');
 const content=await page.locator('.enquiry-content').boundingBox(),rail=await page.locator('.enquiry-sidebar').boundingBox();
 expect(rail.y).toBeGreaterThanOrEqual(content.y+content.height);
 expect(await page.locator('.enquiry-sidebar__sticky').evaluate(e=>getComputedStyle(e).position)).toBe('static');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(391);
});
test('sidebar validation, pending duplicate prevention, success and failed retry use the shared handler',async({page})=>{
 // Header override only in this test enables intercepted local calls; the real preview remains blocked.
 await page.route('**/tap-mixer-repairs-perth.html',async route=>{const response=await route.fetch();const headers=response.headers();delete headers['content-security-policy'];await route.fulfill({response,headers});});
 let requests=0,release;const gate=new Promise(r=>release=r);let fail=false;
 await page.route('**/api/enquiry',async route=>{requests++;expect(JSON.parse(route.request().postData()).type).toBe('Plumbing — Tap & Mixer Repairs Perth');await gate;await route.fulfill({status:fail?503:200,contentType:'application/json',body:fail?'"bad response"':'{"ok":true}'});});
 await page.goto('/tap-mixer-repairs-perth.html');
 const form=page.locator('[data-enquiry-form]'),button=form.getByRole('button',{name:'Send enquiry'});
 await button.click();await expect(form.locator('[name=name]')).toBeFocused();await expect(form.locator('.form-status')).toContainText('required');expect(requests).toBe(0);
 for(const [name,value]of Object.entries({name:'Local test',phone:'0400000000',email:'local@example.invalid',address:'Test suburb',message:'Local preview test only'}))await form.locator(`[name=${name}]`).fill(value);
 await button.click();await expect(button).toBeDisabled();await form.evaluate(f=>f.requestSubmit());expect(requests).toBe(1);release();
 await expect(form.locator('.form-status')).toContainText('has been sent');await expect(button).toBeEnabled();
 fail=true;for(const [name,value]of Object.entries({name:'Local test',phone:'0400000000',email:'local@example.invalid',address:'Test suburb',message:'Retry test'}))await form.locator(`[name=${name}]`).fill(value);
 await button.click();await expect(form.locator('.form-status')).toContainText('could not be sent');await expect(form.locator('[name=message]')).toHaveValue('Retry test');await expect(button).toBeEnabled();
});
