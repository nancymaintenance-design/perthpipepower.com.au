const {test}=require('node:test'),assert=require('node:assert/strict'),{parse}=require('parse5');
const {loadSiteData}=require('../.build/site/content/pages.mjs'),{loadApprovedLocales}=require('../.build/site/localization/approved.mjs'),{renderBilingualSite}=require('../.build/site/build/render-bilingual.mjs');
const site=loadSiteData(),output=renderBilingualSite(site,loadApprovedLocales('',site));
const walk=n=>[n,...(n.childNodes||[]).flatMap(walk)],attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value,text=n=>n?.nodeName==='#text'?n.value:(n?.childNodes||[]).map(text).join('');
test('route validation rejects missing parents, cycles, noindex parents and non-service owners',()=>{
 const {customerRoutes,validateCustomerRoutes}=require('../.build/site/navigation/customer-paths.mjs');
 const changed=patch=>({...customerRoutes,'plumbing.html':{...customerRoutes['plumbing.html'],...patch}});
 assert.throws(()=>validateCustomerRoutes(site,changed({parent:'missing.html'})),/Invalid or cyclic/);
 assert.throws(()=>validateCustomerRoutes(site,changed({parent:'plumbing.html'})),/Invalid or cyclic/);
 assert.throws(()=>validateCustomerRoutes(site,changed({parent:'privacy.html'})),/Nonindexable/);
 assert.throws(()=>validateCustomerRoutes(site,changed({owner:'about.html'})),/Invalid commercial/);
});
test('every non-home page has one semantic localized trail matching exactly one schema path',()=>{
 for(const [file,html]of output)if(file.endsWith('.html')){
  const nodes=walk(parse(html)),nav=nodes.filter(n=>n.tagName==='nav'&&attr(n,'data-customer-breadcrumb')!==undefined);
  const graphs=nodes.filter(n=>n.tagName==='script'&&attr(n,'type')==='application/ld+json').flatMap(n=>{const v=JSON.parse(text(n));return v['@graph']||(Array.isArray(v)?v:[v]);}),bc=graphs.filter(n=>n['@type']==='BreadcrumbList');
  if(file.endsWith('privacy.html')){assert.equal(nav.length,0);continue;}
  if(file.endsWith('index.html')){assert.equal(nav.length,0);assert.equal(bc.length,0);continue;}
  assert.equal(nav.length,1,file+': real navigation, not a text-only wrapper');assert.equal(bc.length,1,file);
  const items=walk(nav[0]).filter(n=>n.tagName==='li');assert(items.length>=2);
  assert.equal(attr(nav[0],'aria-label'),file.startsWith('zh/')?'面包屑导航':'Breadcrumb');
  const canonical=attr(nodes.find(n=>n.tagName==='link'&&attr(n,'rel')==='canonical'),'href');
  const actual=items.map((n,i)=>{const a=walk(n).find(n=>n.tagName==='a');if(i<items.length-1){assert(a);assert.equal(new URL(attr(a,'href')).origin,'https://perthpipepower.com.au');assert.equal(new URL(attr(a,'href')).pathname.startsWith('/zh/'),file.startsWith('zh/'));}else{assert(!a);assert(walk(n).some(n=>attr(n,'aria-current')==='page'));}return {'@type':'ListItem',position:i+1,name:text(n).trim(),item:a?attr(a,'href'):canonical};});
  assert.deepEqual(bc[0].itemListElement,actual,file);
  const page=graphs.find(n=>n['@type']==='WebPage');if(page)assert.equal(page.breadcrumb?.['@id'],canonical+'#breadcrumb');
 }
});
test('single-topic guides return to the actual service and their service parent links back',()=>{
 for(const [guide,owner]of [['insights-reporting-a-plumbing-leak.html','water-leak-detection-perth.html'],['insights-safety-switch-keeps-tripping.html','safety-switch-tripping-perth.html'],['insights-hot-water-plumbing-or-electrical.html','hot-water-problems-perth.html'],['insights-tenant-property-manager-maintenance-handover.html','property-management.html']])for(const prefix of ['','zh/']){
  const url=f=>'https://perthpipepower.com.au/'+prefix+f;
  const nodes=walk(parse(output.get(prefix+guide))),bc=nodes.find(n=>n.tagName==='nav'&&attr(n,'data-customer-breadcrumb')!==undefined);
  assert(bc,guide);assert(walk(bc).some(n=>n.tagName==='a'&&attr(n,'href')===url(owner)),guide);
  const parentMain=walk(parse(output.get(prefix+owner))).find(n=>n.tagName==='main');
  assert(walk(parentMain).some(n=>n.tagName==='a'&&new URL(attr(n,'href')||'/',url(owner)).href===url(guide)),owner+': actual parent provides guide entry');
  assert(nodes.some(n=>n.tagName==='a'&&attr(n,'href')==='#enquiry'),guide+': existing enquiry remains reachable');
 }
});
test('new navigation preserves headings, contact details, forms, core schema, language and public artifacts',()=>{
 const before=require('./fixtures/customer-paths-protected-20261020.json');
 for(const [file,baseline]of Object.entries(before)){
  const old=require('./support/reviewed-copy.cjs').reviewedCopy(baseline,file);
  const b=walk(parse(output.get(file)));
  for(const tag of ['h1','form','header','footer'])assert.deepEqual(b.filter(n=>n.tagName===tag).map(n=>text(n)),old.text[tag],file+': '+tag);
  const metas=n=>n.filter(n=>n.tagName==='link'&&['canonical','alternate'].includes(attr(n,'rel'))).map(n=>n.attrs);
  assert.deepEqual(metas(b),old.languageLinks,file);
  const schemas=n=>n.filter(n=>n.tagName==='script'&&attr(n,'type')==='application/ld+json').flatMap(n=>{const v=JSON.parse(text(n));return v['@graph']||[v];}).filter(n=>n['@type']!=='BreadcrumbList').map(n=>{const copy=structuredClone(n);if(n['@type']==='WebPage')delete copy.breadcrumb;return copy;});
  assert.deepEqual(schemas(b),old.schema,file+': existing business, service, FAQ and article schema');
 }
});
