const {test}=require('node:test');
const assert=require('node:assert/strict');
async function modules(){return {
  ...await import('../.build/site/localization/fields.mjs'),
  ...await import('../.build/site/localization/overlay.mjs'),
  ...await import('../.build/site/content/pages.mjs'),
  ...await import('../.build/site/templates/page.mjs')
};}
test('empty_overlay_preserves_all_48_english_pages',async()=>{
  const m=await modules(),site=m.loadSiteData();assert.equal(site.pages.length,48);
  for(const page of site.pages){const result=m.applyLocaleOverlay(page,site,{schemaVersion:1,locale:'zh-Hans',baseHash:m.pageHash(page),values:{}});
    assert.equal(m.renderPage(result,site),m.renderPage(page,site));}
});
test('protected_fields_reject_edits',async()=>{
  const m=await modules(),site=m.loadSiteData(),page=site.pages[0];
  for(const key of ['seo.canonical','layoutId','tel:0413477667','mailto:maxinemaintenance.au@outlook.com','map.src','price']){
    assert.throws(()=>m.applyLocaleOverlay(page,site,{schemaVersion:1,locale:'zh-Hans',baseHash:m.pageHash(page),values:{[key]:'changed'}}));}
  const protectedPage={...page,hero:'<p>0413 477 667</p><p>AUD $165–$420</p><p>140 St Georges Terrace</p>'};
  const fields=m.collectEditableFields(protectedPage,site).filter(f=>f.locked&&f.sourcePath.startsWith('hero'));
  assert.equal(fields.length,3);
  for(const field of fields)assert.throws(()=>m.applyLocaleOverlay(protectedPage,site,{schemaVersion:1,locale:'zh-Hans',baseHash:m.pageHash(protectedPage),values:{[field.id]:'changed'}}));
});
test('stale_field_hash_is_rejected',async()=>{
  const m=await modules(),site=m.loadSiteData(),page=site.pages[0],field=m.collectEditableFields(page,site).find(f=>!f.locked&&f.kind==='text');
  assert.ok(field);assert.throws(()=>m.applyLocaleOverlay({...page,hero:page.hero+'<p>New source</p>'},site,{schemaVersion:1,locale:'zh-Hans',baseHash:m.pageHash(page),values:{[field.id]:'中文'}}));
});
test('plain_text_is_escaped',async()=>{
  const m=await modules(),site=m.loadSiteData(),page={...site.pages[0],hero:'<section><h1>Original heading</h1></section>'};
  const field=m.collectEditableFields(page,site).find(f=>f.sourcePath.startsWith('hero'));
  const edited=m.applyLocaleOverlay(page,site,{schemaVersion:1,locale:'zh-Hans',baseHash:m.pageHash(page),values:{[field.id]:'<script>alert(1)</script>'}});
  assert.equal(edited.hero,'<section><h1>&lt;script&gt;alert(1)&lt;/script&gt;</h1></section>');assert.equal(page.hero,'<section><h1>Original heading</h1></section>');
});
