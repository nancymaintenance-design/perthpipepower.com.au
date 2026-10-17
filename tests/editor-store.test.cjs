const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs/promises');const os=require('node:os');const path=require('node:path');
test('save_survives_restart_without_english_change',async()=>{
 const m=await import('../.build/tools/editor/store.mjs'),root=await fs.mkdtemp(path.join(os.tmpdir(),'ppp-draft-'));
 try{const before=await fs.readFile(path.join(__dirname,'../site/content/pages/about.mts'));const draft=await m.saveDraft(root,{pageId:'about.html',expectedRevision:0,baseHash:'baseline',changes:{field:'中文草稿'}});
 assert.equal(draft.revision,1);assert.equal((await m.readDraft(root,'about.html')).changes.field,'中文草稿');assert.deepEqual(await fs.readFile(path.join(__dirname,'../site/content/pages/about.mts')),before);
 }finally{await fs.rm(root,{recursive:true,force:true});}
});
test('stale_revision_returns_409',async()=>{
 const m=await import('../.build/tools/editor/store.mjs'),root=await fs.mkdtemp(path.join(os.tmpdir(),'ppp-conflict-'));
 try{const input={pageId:'index.html',expectedRevision:0,baseHash:'base',changes:{x:'一'}};const results=await Promise.allSettled([m.saveDraft(root,input),m.saveDraft(root,input)]);assert.equal(results.filter(r=>r.status==='fulfilled').length,1);assert.equal(results.find(r=>r.status==='rejected').reason.status,409);
 }finally{await fs.rm(root,{recursive:true,force:true});}
});
test('path_traversal_rejected',async()=>{const m=await import('../.build/tools/editor/store.mjs');await assert.rejects(m.readDraft('unused','../secret'));await assert.rejects(m.readDraft('unused','unknown.html'));});
test('restore creates a new revision and preserves other pages; stale restoration is rejected',async()=>{
 const m=await import('../.build/tools/editor/store.mjs'),root=await fs.mkdtemp(path.join(os.tmpdir(),'editor-history-'));
 try{await m.saveDraft(root,{pageId:'about.html',expectedRevision:0,baseHash:'base',changes:{x:'第一版'}});await m.saveDraft(root,{pageId:'about.html',expectedRevision:1,baseHash:'base',changes:{x:'第二版'}});
 await m.saveDraft(root,{pageId:'index.html',expectedRevision:0,baseHash:'base',changes:{y:'其他页'}});
 assert.equal((await m.listHistory(root,'about.html')).length,2);const restored=await m.restoreRevision(root,'about.html',1,2,'base');assert.equal(restored.revision,3);assert.equal(restored.changes.x,'第一版');assert.equal((await m.readDraft(root,'index.html')).changes.y,'其他页');
 await assert.rejects(()=>m.restoreRevision(root,'about.html',1,2,'base'),/其他窗口/);await assert.rejects(()=>m.restoreRevision(root,'about.html',1,3,'changed'),/基线/);
 }finally{await fs.rm(root,{recursive:true,force:true});}
});
