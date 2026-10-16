// Local read-only browser verification. All enquiry results are in-memory mocks.
const {chromium,expect}=require('@playwright/test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
(async()=>{const base='http://127.0.0.1:4210',browser=await chromium.launch({channel:'msedge',headless:true});try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 await page.route('**/*',route=>{const u=new URL(route.request().url());if(u.origin!==base)return route.abort();if(u.pathname==='/api/enquiry')throw Error('Real enquiry request forbidden');return route.continue();});
 const files=Object.keys(require('./fixtures/ts-migration/baseline.json').pages);
 for(const file of files){const route='/zh/'+(file==='index.html'?'':file),response=await page.goto(base+route);assert.equal(response.status(),200,route);assert.equal(await page.locator('html').getAttribute('lang'),'zh-Hans');assert.equal(await page.locator('footer').count(),1);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,route);assert.equal(await page.locator('.language-switch').count(),1);}
 await page.goto(base+'/zh/tap-mixer-repairs-perth.html?service=tap-mixer-repairs-perth.html#service-quote');
 assert.equal(await page.locator('.language-switch').getAttribute('href'),'/tap-mixer-repairs-perth.html?service=tap-mixer-repairs-perth.html#service-quote');
 assert.match(await page.locator('textarea[name="message"]').inputValue(),/所需服务：水龙头/);
 assert.match(await page.locator('select[name="type"]').inputValue(),/^Plumbing/);
 await page.locator('.enquiry-sidebar').evaluate(e=>e.scrollIntoView());await page.evaluate(()=>scrollBy(0,300));
 assert.equal(await page.locator('.enquiry-sidebar__sticky').evaluate(e=>getComputedStyle(e).position),'sticky');
 await page.screenshot({path:path.resolve('../reports/bilingual-service-desktop-20261016.png')});
 await page.goto(base+'/zh/about.html');await page.locator('[data-enquiry-form]').evaluate(form=>form.requestSubmit());
 await expect(page.locator('.form-status')).toHaveText('请填写全部必填项，并输入有效的邮箱地址。');
 await page.evaluate(()=>{window.mockCalls=[];window.fetch=async(url,options)=>{window.mockCalls.push({url,data:JSON.parse(options.body)});return {ok:true,json:async()=>({ok:true})};};});
 for(const [name,value]of Object.entries({name:'本地界面检查',phone:'0400000000',email:'preview@example.invalid',address:'Local preview only',message:'内存模拟，无真实提交'}))await page.locator(`[name="${name}"]`).fill(value);
 await page.locator('[data-enquiry-form]').evaluate(form=>form.requestSubmit());
 await expect(page.locator('.form-status')).toContainText('咨询已发送');assert.equal(await page.evaluate(()=>window.mockCalls.length),1);
 for(const width of [390,800,820,1000,1280])for(const locale of ['','zh/']){await page.setViewportSize({width,height:844});await page.goto(base+'/'+locale+'about.html');assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`${width} ${locale}`);}
 await page.setViewportSize({width:390,height:844});await page.goto(base+'/zh/about.html');
 await page.getByRole('button',{name:'菜单',exact:true}).click();await expect(page.locator('.language-switch')).toBeVisible();
 const menu=page.locator('[aria-controls="plumbing-menu"]');await menu.click();
 assert.equal(await page.locator('#plumbing-menu a[href="/zh/fixtures-appliances-perth.html"]').count(),1,'no runtime English duplicate menu link');
 await page.keyboard.press('Escape');await page.keyboard.press('Escape');await expect(page.locator('.nav-toggle')).toBeFocused();
 await page.screenshot({path:path.resolve('../reports/bilingual-service-mobile-20261016.png')});
 await page.goto(base+'/zh/service-areas.html');
 await expect(page.locator('#suburb-results')).toContainText('选择郊区');
 await page.locator('#suburb-search').fill('Joondalup');await expect(page.locator('#suburb-results')).toContainText('找到');
 await page.locator('#suburb-search').fill('zzzzunknown');await expect(page.locator('#suburb-results')).toContainText('未找到');
 await page.locator('#suburb-clear').click();await expect(page.locator('#suburb-results')).toContainText('选择郊区');
 await page.setViewportSize({width:1440,height:1000});await page.goto(base+'/zh/');
 await expect(page.locator('[data-carousel-pause]')).toHaveText('暂停轮播');await page.locator('[data-next]').click();await expect(page.locator('.carousel-status')).toHaveText('第 2 张，共 3 张');
 assert.match(await page.locator('iframe[title]').first().getAttribute('src'),/^https:\/\/www.google.com\/maps/);
 await page.screenshot({path:path.resolve('../reports/bilingual-home-desktop-20261016.png')});
 console.log('PASS: all 48 Chinese routes, responsive navigation, context/anchor language switch, sticky rail, localized validation and in-memory success; no real enquiry or email.');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1});
