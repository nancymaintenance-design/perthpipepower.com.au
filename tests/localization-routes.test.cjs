const {test}=require('node:test');
const assert=require('node:assert/strict');
test('locale routes preserve assets, external targets and service context',async()=>{
 const {localizedPath,localizeInternalHref}=await import('../.build/site/localization/routes.mjs');
 const files=['index.html','contact.html','tap-mixer-repairs-perth.html'];
 assert.equal(localizedPath('index.html','zh-Hans'),'/zh/');
 assert.equal(localizedPath('tap-mixer-repairs-perth.html','zh-Hans'),'/zh/tap-mixer-repairs-perth.html');
 assert.equal(localizeInternalHref('contact.html?service=tap-mixer-repairs-perth.html#enquiry','zh-Hans',files),'/zh/contact.html?service=tap-mixer-repairs-perth.html#enquiry');
 for(const href of ['tel:0413477667','mailto:maxinemaintenance.au@outlook.com','images/kitchen.webp','https://www.google.com/maps?cid=4207134925924682021','#enquiry'])assert.equal(localizeInternalHref(href,'zh-Hans',files),href);
 assert.equal(localizeInternalHref('/zh/contact.html?suburb=Joondalup#enquiry','en-AU',files),'/contact.html?suburb=Joondalup#enquiry');
 assert.throws(()=>localizedPath('../secret','zh-Hans'));
});
