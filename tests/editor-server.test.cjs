const {test}=require('node:test');const assert=require('node:assert/strict');const path=require('node:path');
test('origin_and_token_required',async()=>{
 const {startEditor}=await import('../.build/tools/editor/server.mjs');const server=await startEditor({host:'127.0.0.1',port:0,sourceRoot:path.resolve(__dirname,'..')});
 try{const origin=new URL(server.url).origin;
 assert.equal((await fetch(origin+'/__editor/api/pages')).status,403);
 const session=await(await fetch(origin+'/__editor/api/session')).json();
 assert.equal((await fetch(origin+'/__editor/api/draft/about.html',{method:'PUT',headers:{'x-editor-token':session.token,'content-type':'application/json'},body:'{}'})).status,403);
 assert.equal((await fetch(origin+'/__editor/api/pages',{headers:{'x-editor-token':session.token}})).status,200);
 assert.equal((await fetch(origin+'/__editor/api/session',{headers:{Origin:'https://untrusted.example'}})).status,403);
 }finally{await server.close();}
});
test('full published Chinese, local history and workflow are protected and saves do not change English',async()=>{
 const fs=require('node:fs/promises'),os=require('node:os');const root=await fs.mkdtemp(path.join(os.tmpdir(),'editor-api-'));
 const {startEditor}=await import('../.build/tools/editor/server.mjs');const server=await startEditor({host:'127.0.0.1',port:0,sourceRoot:path.resolve(__dirname,'..'),draftRoot:root});
 try{const origin=new URL(server.url).origin,token=(await(await fetch(origin+'/__editor/api/session')).json()).token,headers={'x-editor-token':token,Origin:origin,'content-type':'application/json'};
 const before=await(await fetch(origin+'/about.html')).text();const result=await(await fetch(origin+'/__editor/api/draft/about.html',{headers})).json();assert.ok(result.fields.some(f=>f.publishedValue?.includes('管道')));
 const field=result.fields.find(f=>!f.locked&&f.kind==='text');let r=await fetch(origin+'/__editor/api/draft/about.html',{method:'PUT',headers,body:JSON.stringify({baseHash:result.baseHash,expectedRevision:0,changes:{[field.id]:'本地测试内容'}})});assert.equal(r.status,200);
 assert.ok((await(await fetch(origin+'/zh/about.html')).text()).includes('本地测试内容'));assert.equal(await(await fetch(origin+'/about.html')).text(),before);
 r=await fetch(origin+'/__editor/api/history/about.html',{headers});assert.equal(r.status,200);assert.equal((await r.json()).length,1);
 r=await fetch(origin+'/__editor/api/workflow/about.html',{headers});assert.equal(r.status,200);assert.equal((await r.json()).state,'needs-translation');
 assert.equal((await fetch(origin+'/__editor/api/workflow/about.html')).status,403);
 }finally{await server.close();await fs.rm(root,{recursive:true,force:true});}
});
test('preview_cannot_send_mail',async()=>{
 const {startEditor}=await import('../.build/tools/editor/server.mjs');const server=await startEditor({host:'127.0.0.1',port:0,sourceRoot:path.resolve(__dirname,'..')});
 try{const origin=new URL(server.url).origin;assert.equal((await fetch(origin+'/api/enquiry',{method:'POST',body:'{}'})).status,403);const html=await(await fetch(origin+'/')).text();assert.ok(html.includes('Google Reviews'));assert.ok(html.includes('0413'));assert.ok(!html.includes('contact-form.js'));}
 finally{await server.close();}
});
