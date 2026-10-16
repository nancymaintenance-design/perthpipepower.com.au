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
test('preview_cannot_send_mail',async()=>{
 const {startEditor}=await import('../.build/tools/editor/server.mjs');const server=await startEditor({host:'127.0.0.1',port:0,sourceRoot:path.resolve(__dirname,'..')});
 try{const origin=new URL(server.url).origin;assert.equal((await fetch(origin+'/api/enquiry',{method:'POST',body:'{}'})).status,403);const html=await(await fetch(origin+'/')).text();assert.ok(html.includes('Google Reviews'));assert.ok(html.includes('0413'));assert.ok(!html.includes('contact-form.js'));}
 finally{await server.close();}
});
