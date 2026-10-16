const {test}=require('node:test');
const assert=require('node:assert/strict');
test('enabling Chinese requires exactly 48 fresh source-bound reviewed bundles',async()=>{
 const {validateLocaleCoverage,validateLocaleManifest}=await import('../.build/site/localization/approved.mjs');
 const {loadSiteData}=await import('../.build/site/content/pages.mjs');
 const site=loadSiteData();
 assert.equal(validateLocaleCoverage(site,[]).length,48);
 assert.throws(()=>validateLocaleManifest(site,{schemaVersion:1,enabledLocales:['en-AU','zh-Hans'],approvals:{}},[]),/48|coverage|approval/i);
 assert.throws(()=>validateLocaleManifest(site,{schemaVersion:1,enabledLocales:['en-AU','zh-Hans'],approvals:{'zh-Hans:../secret':{}}},[]),/48|coverage|approval|key/i);
 assert.doesNotThrow(()=>validateLocaleManifest(site,{schemaVersion:1,enabledLocales:['en-AU'],approvals:{}},[]));
 const {pageHash}=await import('../.build/site/localization/fields.mjs');
 const {requiredTranslations}=await import('../.build/site/localization/render.mjs');
 const page=site.pages[0],values=Object.fromEntries(requiredTranslations(page,site).map(r=>[r.key,r.source]));
 assert(validateLocaleCoverage(site,[{schemaVersion:1,pageId:page.file,locale:'zh-Hans',baseHash:pageHash(page),values}]).some(issue=>issue.reason==='Untranslated text'));
});
