const {test}=require('node:test'),assert=require('node:assert/strict');
test('editor starts from published Chinese including FAQ; draft preserves English and rejects locked/stale input',async()=>{
 const {loadSiteData}=await import('../.build/site/content/pages.mjs');const {editorContent,renderEditorContent,normalizeDraftChanges}=await import('../.build/tools/editor/content.mjs');
 const site=loadSiteData(),page=site.pages.find(p=>p.file==='tap-mixer-repairs-perth.html'),model=editorContent(page,site);
 const heading=model.fields.find(f=>f.value==='Tap & Mixer Repairs Perth'),faq=model.fields.find(f=>f.value==='Does a dripping mixer always need replacing?');
 assert.ok(heading.publishedValue.includes('水龙头'));assert.ok(faq&&!faq.locked);
 const html=renderEditorContent(page,site,{changes:{[heading.id]:'中文修改标题',[faq.id]:'滴水配件的维修与更换'},baseHash:model.baseHash},'zh-Hans');
 assert.ok(html.includes('中文修改标题'));assert.ok(html.includes('滴水配件的维修与更换'));assert.ok(html.includes('tel:0413477667'));
 assert.ok(!renderEditorContent(page,site,null,'en-AU').includes('中文修改标题'));
 assert.throws(()=>normalizeDraftChanges(model,{bad:'未知字段'}),/字段/);
 const locked=model.fields.find(f=>f.locked);assert.throws(()=>normalizeDraftChanges(model,{[locked.id]:'修改'}),/锁定/);
 assert.throws(()=>renderEditorContent(page,site,{changes:{},baseHash:'stale'},'zh-Hans'),/基线/);
 const schema=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);assert.ok(JSON.stringify(schema).includes('滴水配件的维修与更换'));
});
test('English candidate FAQ with linked fragments derives schema from visible answer',async()=>{
 const {loadSiteData}=await import('../.build/site/content/pages.mjs'),{editorContent,renderEditorContent}=await import('../.build/tools/editor/content.mjs');
 const s=loadSiteData(),p=s.pages.find(p=>p.file==='faq.html'),m=editorContent(p,s),f=m.fields.find(f=>f.value==='Call');assert.ok(f&&!f.locked);
 const html=renderEditorContent(p,s,null,'en-AU',{[f.id]:'Contact the repair team on'});
 const graph=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'],faq=graph.find(x=>x['@type']==='FAQPage');
 const answer=faq.mainEntity.find(x=>x.name==='How do I arrange an urgent plumbing or electrical repair?').acceptedAnswer.text;
 assert.ok(answer.includes('Contact the repair team on'));assert.ok(answer.includes('0413 477 667'));
});
test('legacy shared-label overrides are preserved for review without altering current shared navigation',async()=>{
 const {loadSiteData}=await import('../.build/site/content/pages.mjs'),{editorContent,checkedChanges,legacyReview}=await import('../.build/tools/editor/content.mjs');
 const site=loadSiteData(),model=editorContent(site.pages.find(p=>p.file==='index.html'),site),field=model.fields.find(f=>f.value==='Plumbing'),alias=Object.keys(model.aliases).find(id=>id.startsWith('index.html:')&&model.aliases[id]===field.id);
 const draft={baseHash:model.legacyHash,changes:{[alias]:'旧中文服务标签'}};assert.deepEqual(checkedChanges(model,draft),{});assert.equal(legacyReview(model,draft)[0].chinese,'旧中文服务标签');assert.throws(()=>checkedChanges(model,{...draft,baseHash:model.baseHash}),/锁定/);
});
