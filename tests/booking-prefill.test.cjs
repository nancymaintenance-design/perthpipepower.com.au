const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('./support/public-paths.cjs');
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=resolvePublicRoot();
function start(search,values={}){
 const listeners={};
 const fields={address:{value:''},message:{value:''},type:{value:'Not sure',options:[{value:'Plumbing'},{value:'Electrical'},{value:'Not sure',defaultSelected:true}]}};
 for(const [key,value]of Object.entries(values))fields[key].value=value;
 const document={activeElement:null,body:{},querySelector:s=>s.includes('address')?fields.address:s.includes('message')?fields.message:s.includes('type')?fields.type:null,addEventListener:(name,fn)=>{listeners[name]=fn;}};
 fields.address.focus=()=>{document.activeElement=fields.address;};
 const window={location:{search},addEventListener:()=>{}};
 const context=vm.createContext({window,document,URL,URLSearchParams});
 if(fs.existsSync(path.join(SOURCE_ROOT,'booking-context.js')))vm.runInContext(fs.readFileSync(path.join(SOURCE_ROOT,'booking-context.js'),'utf8'),context);
 vm.runInContext(fs.readFileSync(path.join(SOURCE_ROOT,'contact-prefill.js'),'utf8'),context);
 return {fields,window,document,edit(key,value){fields[key].value=value;listeners.input?.({target:fields[key]});},apply(){window.prefillContactSuburb();}};
}
test('electrical booking selects Electrical and includes the specific project in the submitted message',()=>{
 const app=start('?service=ceiling-fans-perth.html');app.apply();
 assert.equal(app.fields.type.value,'Electrical');
 assert.match(app.fields.message.value,/Ceiling Fan Installation & Repairs Perth/);
});
test('plumbing, mixed work and generic enquiries do not inherit the wrong trade',()=>{
 for(const [search,type,label]of [['?service=dishwasher-installation-perth.html','Plumbing','Dishwasher'],['?service=fixtures-appliances-perth.html','Not sure','Fixture'],['?service=property-management.html','Not sure','Managed'],['','Not sure',null]]){
  const app=start(search);app.apply();assert.equal(app.fields.type.value,type);
  if(label)assert(app.fields.message.value.includes(label));else assert.equal(app.fields.message.value,'');
 }
});
test('service and suburb coexist, while existing or cleared user values survive repeated initialization',()=>{
 const app=start('?service=power-points-perth.html&suburb=Subiaco%20WA');app.apply();
 assert.equal(app.fields.address.value,'Subiaco WA');assert.equal(app.fields.type.value,'Electrical');
 app.edit('type','Plumbing');app.edit('message','');app.edit('address','');app.apply();
 assert.equal(app.fields.type.value,'Plumbing');assert.equal(app.fields.message.value,'');assert.equal(app.fields.address.value,'');
 const restored=start('?service=power-points-perth.html&suburb=Subiaco',{type:'Plumbing',address:'Existing address',message:'Existing request'});restored.apply();
 assert.equal(restored.fields.type.value,'Plumbing');assert.equal(restored.fields.address.value,'Existing address');assert.equal(restored.fields.message.value,'Existing request');
 const neutralRestored=start('?service=power-points-perth.html',{type:'Not sure',address:'Restored address',message:'Restored request'});neutralRestored.apply();
 assert.equal(neutralRestored.fields.type.value,'Not sure');
});
test('unknown, duplicate, malformed and hostile service values never become project copy',()=>{
 for(const search of ['?service=evil','?service=__proto__','?service=%3Cscript%3E','?service=%E0%A4%A','?service=power-points-perth.html&service=ceiling-fans-perth.html']){
  const app=start(search);app.apply();assert.equal(app.fields.type.value,'Not sure');assert.equal(app.fields.message.value,'');
 }
});
test('invalid suburb values cannot overwrite the address and prefill never steals focus from another field',()=>{
 for(const query of ['%EF%BF%BD','%00','%0A','a'.repeat(241),'Subiaco&suburb=Perth']){
  const app=start('?suburb='+query);app.apply();assert.equal(app.fields.address.value,'');
 }
 const app=start('?suburb=Subiaco');app.document.activeElement=app.fields.message;app.apply();
 assert.equal(app.document.activeElement,app.fields.message);
});
test('every published service and three hubs have native booking links with their own allowlisted context',()=>{
 const {services}=require('../booking-context.js');
 const routes=JSON.parse(fs.readFileSync(path.join(root,'ai-content.json'),'utf8')).servicePages.map(p=>new URL(p.url).pathname.slice(1));
 routes.push('plumbing.html','electrical.html','property-management.html');
 assert.equal(routes.length,27);assert.deepEqual(Object.keys(services).sort(),routes.sort());
 for(const route of routes){
  const html=fs.readFileSync(path.join(root,route),'utf8').match(/<main\b[\s\S]*?<\/main>/)[0];let count=0;
  for(const [,href]of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)){
   const url=new URL(href.replace(/&amp;/g,'&'),'https://perthpipepower.com.au/'+route);
   if(url.origin==='https://perthpipepower.com.au'&&url.pathname==='/contact.html'){
    count++;assert.equal(url.searchParams.get('service'),route);assert.equal(url.searchParams.getAll('service').length,1);
   }
  }
  assert(count>0,route+' needs a booking route');
 }
});
test('trade-menu enquiry buttons carry their own trade rather than the currently open page',()=>{
 for(const file of fs.readdirSync(root).filter(file=>file.endsWith('.html')&&file!=='privacy.html')){
  const html=fs.readFileSync(path.join(root,file),'utf8');
  for(const [id,route]of [['plumbing-menu','plumbing.html'],['electrical-menu','electrical.html']]){
   const menu=html.match(new RegExp('<ul[^>]*id="'+id+'"[^>]*>[\\s\\S]*?</ul>'))?.[0];
   if(!menu)continue;
   for(const [,href]of menu.matchAll(/<a\b[^>]*href="([^"]+)"/g)){
    const url=new URL(href.replace(/&amp;/g,'&'),'https://perthpipepower.com.au/');
    if(url.pathname==='/contact.html')assert.equal(url.searchParams.get('service'),route,file+': '+id);
   }
  }
 }
});
test('native link generation preserves suburb and fragment, excludes foreign links and is idempotent',()=>{
 const {applyBookingContext}=require('../scripts/apply-booking-context.cjs');
 const folder=createFixture('booking-fixture-');
 try{
  const target=path.join(folder,'electrical.html');
  fs.writeFileSync(target,'<a href="contact.html?suburb=Subiaco&amp;service=old#enquiry">Book</a><a href="https://elsewhere.example/contact.html">Other</a><a href="tel:0413477667">Call</a>');
  applyBookingContext(folder);
  const html=fs.readFileSync(target,'utf8'),url=new URL(html.match(/href="([^"]+)"/)[1].replace(/&amp;/g,'&'),'https://perthpipepower.com.au/');
  assert.equal(url.searchParams.get('suburb'),'Subiaco');assert.equal(url.searchParams.get('service'),'electrical.html');assert.equal(url.hash,'#enquiry');
  assert(html.includes('href="https://elsewhere.example/contact.html"'));assert(html.includes('href="tel:0413477667"'));
  assert.deepEqual(applyBookingContext(folder),[]);
 }finally{fs.rmSync(folder,{recursive:true,force:true});}
});
test('link diagnostics accept local parameterized routes, but not missing, foreign or lookalike destinations',()=>{
 const {hasLocalLink}=require('../scripts/lib/link-assertions.cjs');
 assert(hasLocalLink('<a href="contact.html?service=electrical.html#enquiry">Book</a>','contact.html'));
 for(const html of ['<a href="https://elsewhere.example/contact.html">Other</a>','<a href="contact.html.fake">Other</a>','<p>No link</p>'])assert.equal(hasLocalLink(html,'contact.html'),false);
});
