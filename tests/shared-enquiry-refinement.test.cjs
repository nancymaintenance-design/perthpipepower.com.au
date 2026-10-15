const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const {parse}=require('parse5');
const walk=n=>[n,...(n.childNodes||[]).flatMap(walk)],attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const nodes=file=>walk(parse(fs.readFileSync('dist/'+file,'utf8')));
test('all 41 enquiry rails provide one focusable form target and a native first-screen booking link',()=>{
 const {loadSiteData}=require('../.build/site/content/pages.mjs');let count=0;
 for(const p of loadSiteData().pages.filter(p=>['service','serviceHub','region','about','article'].includes(p.kind))){
  count++;const all=nodes(p.file),forms=all.filter(n=>attr(n,'data-enquiry-form')!==undefined);
  assert.equal(forms.length,1,p.file);assert.equal(attr(forms[0],'id'),'enquiry',p.file);assert.equal(attr(forms[0],'tabindex'),'-1',p.file);
  assert.equal(all.filter(n=>attr(n,'id')==='enquiry').length,1,p.file);
  const mobile=all.find(n=>attr(n,'class')==='mobile-ctas');assert(walk(mobile).some(n=>attr(n,'href')==='#enquiry'),p.file+': direct mobile form target');
  const hero=all.find(n=>(attr(n,'class')||'').split(' ').includes('page-hero'));
  if(hero)assert(walk(hero).some(n=>n.tagName==='a'&&attr(n,'href')==='#enquiry'),p.file+': native hero form target');
  for(const src of ['booking-context.js?v=20261015','contact-prefill.js?v=20261015','contact-form.js'])assert.equal(all.filter(n=>n.tagName==='script'&&attr(n,'src')===src).length,1,p.file+': shared '+src);
 }
 assert.equal(count,41);
});
test('mixed hot-water sidebar and cross-page context agree on Not sure',()=>{
 const all=nodes('hot-water-problems-perth.html'),form=all.find(n=>attr(n,'data-enquiry-form')!==undefined);
 const selected=walk(form).find(n=>n.tagName==='option'&&attr(n,'selected')!==undefined);
 assert.equal(attr(selected,'value'),'Not sure — Hot Water Repairs & System Replacement Perth');
 const api=require('../booking-context.js');assert.equal(api.serviceFromSearch('?service=hot-water-problems-perth.html').type,'Not sure');
});
test('one compact disclosure controls each public navigation without modal semantics',()=>{
 const {loadSiteData}=require('../.build/site/content/pages.mjs');
 for(const p of loadSiteData().pages){const all=nodes(p.file),toggle=all.filter(n=>n.tagName==='button'&&attr(n,'class')==='nav-toggle');
  assert.equal(toggle.length,1,p.file);assert.equal(attr(toggle[0],'aria-controls'),'main-nav');assert.equal(attr(toggle[0],'aria-expanded'),'false');
  assert.equal(all.filter(n=>attr(n,'id')==='main-nav').length,1,p.file);assert(!all.some(n=>attr(n,'aria-modal')!==undefined),p.file);
 }
});
test('shared booking resolver preserves valid context and rejects duplicated or hostile suburb data',()=>{
 const api=require('../booking-context.js');assert.equal(typeof api.resolveBookingContext,'function','one shared pure resolver');
 assert.deepEqual(api.resolveBookingContext('/hot-water-problems-perth.html','?suburb=Subiaco%20WA'),{service:{route:'hot-water-problems-perth.html',type:'Not sure',label:'Hot Water Repairs & System Replacement Perth'},suburb:'Subiaco WA'});
 assert.equal(api.resolveBookingContext('/contact.html','?service=ceiling-fans-perth.html').service.type,'Electrical');
 for(const query of ['?suburb=%','?suburb=%00','?suburb=%EF%BF%BD','?suburb=Perth&suburb=Subiaco'])assert.equal(api.resolveBookingContext('/about.html',query).suburb,null);
});
