const {test}=require('node:test'),assert=require('node:assert/strict');
const {parse}=require('parse5');
const {loadSiteData}=require('../.build/site/content/pages.mjs');
const {renderLocalizedPage}=require('../.build/site/localization/render.mjs');
const {loadApprovedLocales}=require('../.build/site/localization/approved.mjs');
const site=loadSiteData();
const nodes=n=>[n,...(n.childNodes||[]).flatMap(nodes)],attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes||[]).map(text).join('');
test('all bilingual footers retain contact, social and hours without rejected lower rows',()=>{
 const bundles=loadApprovedLocales('',site);
 for(const page of site.pages)for(const locale of ['en-AU','zh-Hans']){
  const html=renderLocalizedPage(page,site,{locale,bundle:bundles.find(b=>b.pageId===page.file),preview:true});
  const footer=nodes(parse(html)).find(n=>n.tagName==='footer'),all=nodes(footer);
  assert.equal(all.filter(n=>attr(n,'class')?.split(' ').includes('subfooter')).length,0,page.file+locale);
  assert.equal(all.filter(n=>attr(n,'data-business-identity')!==undefined).length,0,page.file+locale);
  for(const href of ['tel:0413477667','mailto:maxinemaintenance.au@outlook.com','https://www.google.com/maps?cid=4207134925924682021'])assert(all.some(n=>attr(n,'href')===href),page.file+href);
  assert(all.some(n=>attr(n,'data-confirmed-hours')!==undefined));
  assert(all.some(n=>attr(n,'href')?.includes('instagram.com')));
 }
});
test('service pages remove duplicated safety boxes and post-guide quote boilerplate without losing prices',()=>{
 for(const page of site.pages){
  const all=nodes(parse(require('../.build/site/templates/page.mjs').renderPage(page,site)));
  assert(!all.some(n=>attr(n,'class')?.split(' ').includes('service-safety')),page.file+': safety box');
  assert(!all.some(n=>n.tagName==='h3'&&text(n).trim()==='Written quote and agreed scope'),page.file+': repeated quote block');
  if(page.file==='blocked-drains-perth.html')assert(all.some(n=>text(n).trim()==='AUD $198–$605'));
 }
});
test('home and company pages do not repeat generic standalone emergency panels',()=>{
 for(const file of ['index.html','about.html']){
  const page=site.pages.find(p=>p.file===file),all=nodes(parse(require('../.build/site/templates/page.mjs').renderPage(page,site)));
  assert(!all.some(n=>n.tagName==='aside'&&/Immediate plumbing and electrical hazards|Electrical hazards and immediate danger/.test(text(n))),file);
 }
});
