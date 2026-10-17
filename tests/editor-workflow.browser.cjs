const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs/promises'),path=require('node:path'),os=require('node:os'),{chromium,expect}=require('@playwright/test');
test('without JavaScript no editor action pretends to be available',async()=>{
 const {startEditor}=await import('../.build/tools/editor/server.mjs'),s=await startEditor({host:'127.0.0.1',port:0,sourceRoot:path.resolve(__dirname,'..')}),b=await chromium.launch({channel:'msedge',headless:true});
 try{const p=await b.newPage({javaScriptEnabled:false});await p.goto(s.url);for(const button of await p.locator('button').all())assert.equal(await button.isDisabled(),true,await button.getAttribute('id'));}finally{await b.close();await s.close();}
});
test('published Chinese edit save history restore and proposal review stay local',async()=>{
 const root=await fs.mkdtemp(path.join(os.tmpdir(),'editor-review-browser-')),{startEditor}=await import('../.build/tools/editor/server.mjs');
 const server=await startEditor({host:'127.0.0.1',port:0,sourceRoot:path.resolve(__dirname,'..'),draftRoot:root}),browser=await chromium.launch({channel:'msedge',headless:true});
 try{const page=await browser.newPage({viewport:{width:1500,height:1000}});let realEnquiries=0;await page.route('**/*',route=>{const u=new URL(route.request().url());if(u.pathname==='/api/enquiry'){realEnquiries++;return route.abort();}if(u.origin!==new URL(server.url).origin)return route.abort();return route.continue();});
 await page.goto(server.url);await page.locator('#status').filter({hasText:'已上线中文'}).waitFor();
 await page.locator('#page').selectOption('about.html');await page.locator('#status').filter({hasText:'已上线中文'}).waitFor();
 const h=page.frameLocator('#preview').locator('h1 [data-editor-field]').first(),headingId=await h.getAttribute('data-editor-field');await h.click();await expect(page.locator('#field')).toHaveValue(headingId);assert.ok((await page.locator('#translation').inputValue()).includes('管道'));
 await page.locator('#translation').fill('中文后台本地验收标题');await page.locator('#save').click();await page.locator('#status').filter({hasText:'已保存中文草稿'}).waitFor();await expect(h).toHaveText('中文后台本地验收标题');
 await page.locator('#translation').fill('另一修订标题');await page.locator('#save').click();await page.locator('#status').filter({hasText:'修订 2'}).waitFor();
 await page.getByText('已保存历史',{exact:true}).click();await page.locator('#history').selectOption('1');await page.locator('#restore').click();await page.getByRole('button',{name:'确认恢复',exact:true}).click();await page.locator('#status').filter({hasText:'已恢复为新修订'}).waitFor();await expect(page.frameLocator('#preview').locator('h1')).toHaveText('中文后台本地验收标题');
 const {exportChanges,saveEnglishProposal}=await import('../.build/tools/editor/workflow.mjs');const data=await exportChanges(root,'about.html');await saveEnglishProposal(root,{pageId:'about.html',chineseRevision:data.draft.revision,chineseHash:data.chineseHash,englishChanges:Object.fromEntries(data.changes.map(c=>[c.fieldId,'Local English review title'])),state:'needs-review'});
 await page.locator('#reload').click();await page.locator('#status').filter({hasText:'已载入本地草稿'}).waitFor();await expect(page.locator('#workflow-state')).toContainText('待你确认英文');
 await page.locator('#preview-language').selectOption('en-AU');await expect(page.frameLocator('#preview').locator('h1')).toHaveText('Local English review title');
 await page.getByText('中英文变更与确认',{exact:true}).click();await page.locator('#approve').click();await page.getByRole('button',{name:'确认本地候选',exact:true}).click();await expect(page.locator('#workflow-state')).toContainText('本地候选已确认');
 await page.locator('#preview-language').selectOption('zh-Hans');await h.click();await expect(page.locator('#field')).toHaveValue(headingId);await page.locator('#translation').fill('新中文让英文失效');await page.locator('#save').click();await page.locator('#status').filter({hasText:'已保存中文草稿'}).waitFor();await expect(page.locator('#workflow-state')).toContainText('待通知助手同步英文');assert.equal(await page.locator('#approve').isDisabled(),true);
 await page.setViewportSize({width:390,height:844});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);await expect(page.frameLocator('#preview').locator('.nav-toggle')).toBeVisible();await page.frameLocator('#preview').locator('.nav-toggle').click();await expect(page.frameLocator('#preview').locator('#main-nav')).toBeVisible();assert.equal(realEnquiries,0);
 }finally{await browser.close();await server.close();await fs.rm(root,{recursive:true,force:true});}
});
