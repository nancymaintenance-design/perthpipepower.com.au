const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs/promises'),path=require('node:path'),os=require('node:os');
test('proposal is bound to saved Chinese revision and baseline; approval cannot publish or mutate canonical files',async()=>{
 const {loadSiteData}=await import('../.build/site/content/pages.mjs'),{editorContent}=await import('../.build/tools/editor/content.mjs');
 const {saveDraft}=await import('../.build/tools/editor/store.mjs');const {exportChanges,saveEnglishProposal,readEnglishProposal,approveProposal}=await import('../.build/tools/editor/workflow.mjs');
 const root=await fs.mkdtemp(path.join(os.tmpdir(),'editor-workflow-'));try{
 const site=loadSiteData(),page=site.pages.find(p=>p.file==='about.html'),m=editorContent(page,site),f=m.fields.find(f=>!f.locked&&f.kind==='text');
 const d=await saveDraft(root,{pageId:page.file,expectedRevision:0,baseHash:m.baseHash,changes:{[f.id]:'新的中文内容'}});
 const exported=await exportChanges(root,page.file);assert.equal(exported.draft.revision,1);assert.equal(exported.changes[0].chineseAfter,'新的中文内容');
 await saveEnglishProposal(root,{pageId:page.file,chineseRevision:d.revision,chineseHash:exported.chineseHash,englishChanges:{[f.id]:'Updated local English content'},state:'needs-review'});
 await approveProposal(root,page.file,1,(await exportChanges(root,page.file)).proposalHash);assert.equal((await readEnglishProposal(root,page.file)).state,'approved');
 await saveDraft(root,{pageId:page.file,expectedRevision:1,baseHash:m.baseHash,changes:{[f.id]:'另一次中文修改'}});
 await assert.rejects(()=>approveProposal(root,page.file,1),/修订/);
 await assert.rejects(()=>saveEnglishProposal(root,{pageId:page.file,chineseRevision:1,chineseHash:exported.chineseHash,englishChanges:{[f.id]:'stale'},state:'needs-review'}),/修订/);
 assert.equal((await exportChanges(root,page.file)).state,'needs-translation');
 }finally{await fs.rm(root,{recursive:true,force:true});}
});
test('cross-process proposal lock prevents CLI and server from overwriting another proposal operation',async()=>{
 const {loadSiteData}=await import('../.build/site/content/pages.mjs'),{editorContent}=await import('../.build/tools/editor/content.mjs'),{saveDraft}=await import('../.build/tools/editor/store.mjs'),w=await import('../.build/tools/editor/workflow.mjs');
 const root=await fs.mkdtemp(path.join(os.tmpdir(),'editor-proposal-lock-'));try{const site=loadSiteData(),m=editorContent(site.pages.find(p=>p.file==='about.html'),site),f=m.fields.find(f=>!f.locked);await saveDraft(root,{pageId:'about.html',expectedRevision:0,baseHash:m.baseHash,changes:{[f.id]:'中文'}});const d=await w.exportChanges(root,'about.html'),p={pageId:'about.html',chineseRevision:1,chineseHash:d.chineseHash,englishChanges:{[f.id]:'English'},state:'needs-review'};await w.saveEnglishProposal(root,p);const current=await w.exportChanges(root,'about.html');
 const lock=path.join(root,'proposals','.about.html.lock');await fs.mkdir(lock);await assert.rejects(()=>w.saveEnglishProposal(root,p),/正在更新/);await assert.rejects(()=>w.approveProposal(root,'about.html',1,current.proposalHash),/正在更新/);assert.equal((await w.readEnglishProposal(root,'about.html')).state,'needs-review');await fs.rmdir(lock);await w.approveProposal(root,'about.html',1,current.proposalHash);assert.equal((await w.readEnglishProposal(root,'about.html')).state,'approved');
 }finally{await fs.rm(root,{recursive:true,force:true});}
});
test('confirmation rejects replaced English content even when Chinese revision is unchanged',async()=>{
 const {loadSiteData}=await import('../.build/site/content/pages.mjs'),{editorContent}=await import('../.build/tools/editor/content.mjs'),{saveDraft}=await import('../.build/tools/editor/store.mjs'),w=await import('../.build/tools/editor/workflow.mjs');
 const root=await fs.mkdtemp(path.join(os.tmpdir(),'editor-proposal-binding-'));try{const site=loadSiteData(),m=editorContent(site.pages.find(p=>p.file==='about.html'),site),f=m.fields.find(f=>!f.locked);await saveDraft(root,{pageId:'about.html',expectedRevision:0,baseHash:m.baseHash,changes:{[f.id]:'中文修订'}});const d=await w.exportChanges(root,'about.html'),a={pageId:'about.html',chineseRevision:1,chineseHash:d.chineseHash,englishChanges:{[f.id]:'First reviewed proposal'},state:'needs-review'};
 await w.saveEnglishProposal(root,a);const reviewed=await w.exportChanges(root,'about.html');await w.saveEnglishProposal(root,{...a,englishChanges:{[f.id]:'Replacement not yet reviewed'}});
 await assert.rejects(()=>w.approveProposal(root,'about.html',1,reviewed.proposalHash),/英文提案/);assert.equal((await w.exportChanges(root,'about.html')).state,'needs-review');
 }finally{await fs.rm(root,{recursive:true,force:true});}
});
