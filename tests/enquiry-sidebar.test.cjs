const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const {parse}=require('parse5');
const walk=n=>[n,...(n.childNodes||[]).flatMap(walk)],attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const {loadSiteData}=require('../.build/site/content/pages.mjs');
test('eligible inner pages expose one usable enquiry form without duplicating contact or homepage',()=>{
 for(const p of loadSiteData().pages){
  const nodes=walk(parse(fs.readFileSync('dist/'+p.file,'utf8')));
  const eligible=['service','serviceHub','region','about','article'].includes(p.kind);
  const asides=nodes.filter(n=>attr(n,'class')==='enquiry-sidebar');
  assert.equal(asides.length,eligible?1:0,p.file);
  if(!eligible)continue;
  const form=nodes.find(n=>attr(n,'data-enquiry-form')!==undefined);
  assert(form,p.file+': reusable contact form');
  assert.equal(nodes.filter(n=>attr(n,'data-enquiry-form')!==undefined).length,1,p.file);
  for(const name of ['name','phone','email','address','message'])assert(walk(form).some(n=>attr(n,'name')===name&&attr(n,'required')!==undefined),p.file+': '+name);
  assert(nodes.some(n=>n.tagName==='script'&&attr(n,'src')==='contact-form.js'),p.file+': working submission handler');
  const type=walk(form).find(n=>n.tagName==='option'&&attr(n,'selected')!==undefined);
  if(p.file==='tap-mixer-repairs-perth.html')assert.equal(attr(type,'value'),'Plumbing — Tap & Mixer Repairs Perth');
 }
});
