const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const {parse}=require('parse5');
const root=path.resolve(__dirname,'../dist');
const walk=n=>[n,...(n.childNodes||[]).flatMap(walk)];
const text=n=>n?.nodeName==='#text'?n.value:(n?.childNodes||[]).map(text).join('');
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const nodes=f=>walk(parse(fs.readFileSync(path.join(root,f),'utf8')));
test('all 48 complete top-level headers and utility blocks match independent immutable chrome contracts',()=>{
 const {approvedHeader}=require('./support/approved-content.cjs'),frozen=require('./fixtures/ts-migration/baseline.json');
 const contract=require('./fixtures/content-navigation-repair/chrome-contract.json');
 const canonical=n=>n.nodeName==='#text'?['text',n.value]:n.nodeName==='#comment'?['comment',n.data]:n.tagName?['element',n.namespaceURI,n.tagName,n.attrs.map(a=>[a.namespace||'',a.name,a.value]).sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b),'en')),(n.childNodes||[]).map(canonical)]:['fragment',(n.childNodes||[]).map(canonical)];
 const cchildren=n=>n[0]==='element'?n[4]:['document','fragment'].includes(n[0])?n[1]:[],cwalk=n=>[n,...cchildren(n).flatMap(cwalk)];
 assert.equal(Object.keys(contract.current).length,48);
 for(const file of Object.keys(frozen.pages)){
  const all=nodes(file),body=all.find(n=>n.tagName==='body'),headers=body.childNodes.filter(n=>n.tagName==='header'&&attr(n,'class')==='site-header');
  assert.equal(headers.length,1,file+': one exact top-level shared header');
  assert.deepEqual(canonical(headers[0]),approvedHeader(file),file+': full logo/menu/CTA DOM including every attribute, label, destination and current marker');
  const original=cchildren(cwalk(JSON.parse(frozen.pages[file].dom)).find(n=>n[2]==='body')).filter(n=>n[2]==='div'&&n[3].some(a=>a[1]==='class'&&a[2]==='utility'));
  assert.deepEqual(body.childNodes.filter(n=>n.tagName==='div'&&attr(n,'class')==='utility').map(canonical),original,file+': full original utility content/contact links');
 }
});
test('all public types expose unified service menus and honest current-page state',()=>{
 for(const file of fs.readdirSync(root).filter(f=>f.endsWith('.html'))){
  const all=nodes(file),nav=all.find(n=>n.tagName==='nav'&&attr(n,'aria-label')==='Main navigation');
  assert(all.some(n=>n.tagName==='link'&&attr(n,'href')?.split('?')[0]==='field-design.css'),file+': shared sticky navigation styles');
  const list=walk(nav).find(n=>attr(n,'class')==='nav-list');
  const controls=list.childNodes.filter(n=>n.tagName==='li').map(n=>n.childNodes.find(c=>c.tagName==='a'||c.tagName==='button'));
  assert.deepEqual(controls.map(n=>text(n).trim()),['Home','About','Areas','Plumbing','Electrical','Contact'],file);
  for(const id of ['plumbing-menu','electrical-menu'])assert(all.some(n=>n.tagName==='button'&&attr(n,'aria-controls')===id),file+': '+id);
  const current=walk(nav).filter(n=>attr(n,'aria-current')==='page');
  if(['index.html','about.html','service-areas.html','plumbing.html','electrical.html','contact.html'].includes(file))assert.equal(current.length,1,file);
 }
});
test('approved preservation rejects out-of-region DOM and every shared-chrome mutation',async t=>{
 const {compareApprovedOutput}=require('./support/approved-content.cjs');
 const {createFixture}=require('./support/public-paths.cjs');
 const fixture=createFixture('chrome-mutations-');
 try{
  fs.cpSync(root,fixture,{recursive:true});
  const file='index.html',original=fs.readFileSync(path.join(root,file),'utf8');
  assert.deepEqual(compareApprovedOutput(fixture),[],'unchanged control must pass');
  fs.writeFileSync(path.join(fixture,file),original.replace(/<main\b/,'\n \t\n<main'));
  assert.deepEqual(compareApprovedOutput(fixture),[],'only reviewed direct-body inter-block whitespace is normalized');
  const cases={
   'extra pre-main paragraph':h=>h.replace(/<main\b/,'<p>UNAPPROVED BODY CONTENT</p><main'),
   'pre-main header':h=>h.replace(/<main\b/,'<header>UNAPPROVED HEADER</header><main'),
   'pre-main utility':h=>h.replace(/<main\b/,'<div class="utility">UNAPPROVED UTILITY</div><main'),
   'main header':h=>h.replace('</main>','<header>UNAPPROVED HEADER</header></main>'),
   'main utility':h=>h.replace('</main>','<div class="utility">UNAPPROVED UTILITY</div></main>'),
   'footer header':h=>h.replace('</footer>','<header>UNAPPROVED HEADER</header></footer>'),
   'footer utility':h=>h.replace('</footer>','<div class="utility">UNAPPROVED UTILITY</div></footer>'),
   'wrong menu destination':h=>h.replace('href="blocked-drains-perth.html"','href="toilet-repairs-perth.html"'),
   'wrong logo destination':h=>h.replace(/(<a\b[^>]*class="brand"[^>]*href=")[^"]+/, '$1privacy.html'),
   'wrong CTA destination':h=>h.replace(/(<a\b[^>]*class="nav-cta"[^>]*href=")[^"]+/, '$1contact.html?service=WRONG'),
   'missing utility contact':h=>h.replace(/(<div class="utility">[\s\S]*?)<a\b[^>]*href="tel:[^"]+"[^>]*>[\s\S]*?<\/a>/,'$1'),
   'utility text change':h=>h.replace(/(<div class="utility">[\s\S]*?<span>)[^<]+/,'$1UNAPPROVED UTILITY COPY')
  };
  for(const [name,mutate]of Object.entries(cases))await t.test(name,()=>{
   const changed=mutate(original);assert.notEqual(changed,original,name+': mutation must apply');
   fs.writeFileSync(path.join(fixture,file),changed);
   assert(compareApprovedOutput(fixture).some(d=>d.file===file&&d.field==='dom'),name+': exact preservation must fail');
  });
 }finally{fs.rmSync(fixture,{recursive:true,force:true});}
});
test('hub narratives state all hours once and retain distinct urgent and safety guidance',()=>{
 for(const file of ['electrical.html','plumbing.html']){
  const statements=nodes(file).filter(n=>attr(n,'class')==='service-information'),copy=statements.map(text).join(' ');
  for(const fact of ['09:00–21:00','seven days a week','24-hour emergency repairs','No arrival time is guaranteed'])assert.equal(copy.split(fact).length-1,1,file+': '+fact+' appears once');
  assert.match(copy,/Emergency repair fees follow the quoted work plan/);
  assert.match(copy,/For urgent work, call rather than relying on an online enquiry/);
  if(file==='electrical.html'){
   assert.match(copy,/Call 0413 477 667 for urgent work; an online form does not reserve an appointment/);
   assert.match(copy,/For shock or network danger, use the official safety route first/);
  }else assert.match(copy,/Utility faults and immediate danger use the appropriate official channel first/);
 }
});
test('homepage retains the office while avoiding duplicate pathways and advantages',()=>{
 const all=nodes('index.html');
 assert(all.some(n=>attr(n,'id')==='office-location-title'));
 for(const id of ['home-service-pathways','home-company-advantages'])assert(!all.some(n=>attr(n,'id')===id),id+': rejected repeated block');
 const office=all.find(n=>attr(n,'class')?.split(' ').includes('office-location'));
 assert(!walk(office).some(n=>attr(n,'data-site-intent')!==undefined),'intent content must not inherit office grid');
 assert(!all.some(n=>attr(n,'class')==='office-map-fallback'),'map is not replaced by address-only copy');
});
test('About introduces three core services before company evidence',()=>{
 const all=nodes('about.html'),headings=all.filter(n=>/^h[123]$/.test(n.tagName)).map(n=>text(n).trim());
 assert.match(headings[0],/Plumbing.*Electrical.*Property Maintenance.*Perth/i);
 for(const heading of ['Plumbing Repairs','Electrical Repairs','Property Maintenance'])assert(headings.includes(heading),heading);
 assert(!headings.includes('Your home deserves proper attention.'));
});
test('service information uses statements and compact related answers',()=>{
 for(const file of ['blocked-drains-perth.html','tap-mixer-repairs-perth.html','water-leak-detection-perth.html','smoke-alarm-maintenance-perth.html']){
  const all=nodes(file),main=all.find(n=>n.tagName==='main'),inside=walk(main);
  assert(inside.filter(n=>n.tagName==='details').length<=3,file+': compact related Q&A');
  assert(!inside.filter(n=>/^h[23]$/.test(n.tagName)).some(n=>text(n).trim().endsWith('?')),file+': statements');
  assert(inside.some(n=>n.tagName==='a'&&attr(n,'href')?.startsWith('faq.html#')),file+': FAQ category');
 }
});
test('statement narratives have complete sentences without dangling yes/no answers',()=>{
 for(const file of fs.readdirSync(root).filter(f=>f.endsWith('.html'))){
  const all=nodes(file),statements=all.filter(n=>attr(n,'class')==='service-information');
  for(const statement of statements){const first=walk(statement).find(n=>n.tagName==='p');assert(!/^(?:Yes|No)[.,]/.test(text(first).trim()),file+': '+text(first).trim());}
 }
 const about=nodes('about.html'),heading=about.find(n=>n.tagName==='h3'&&text(n)==='Electrical Repairs');
 const section=heading.parentNode,copy=section.childNodes.slice(section.childNodes.indexOf(heading)+1).find(n=>n.tagName==='p');
 assert.match(text(copy),/appropriately licensed electrical tradespeople/);
 assert.doesNotMatch(text(copy),/licensed plumbing/);
});
test('each statement heading identifies its original answer topic rather than a shifted FAQ index',()=>{
 for(const [file,want]of Object.entries(require('./fixtures/content-navigation-repair/statement-topics.json'))){
  const actual=nodes(file).filter(n=>attr(n,'class')==='service-information').map(n=>text(walk(n).find(n=>n.tagName==='h3')).trim());
  assert.deepEqual([...actual].sort(),[...want].sort(),file+': statement topics match the reviewed original questions');
 }
});
test('a deliberately mismatched statement title fails the independent topic contract',()=>{
 const file='blocked-drains-perth.html',html=fs.readFileSync(path.join(root,file),'utf8');
 const mutated=walk(parse(html.replace('<div class="service-information"><h3>Recurring drain blockages after clearing</h3>','<div class="service-information"><h3>Kitchen sink gurgling and slow drainage</h3>')));
 const actual=mutated.filter(n=>attr(n,'class')==='service-information').map(n=>text(walk(n).find(n=>n.tagName==='h3')).trim()).sort();
 assert.throws(()=>assert.deepEqual(actual,[...require('./fixtures/content-navigation-repair/statement-topics.json')[file]].sort()),assert.AssertionError);
});
test('each converted answer remains paired with its reviewed topic and preserves original scope, safety and links',()=>{
 const before=require('./fixtures/ts-migration/baseline.json').pages,edits=require('./fixtures/content-navigation-repair/statement-answer-edits.json');
 const clean=html=>text(parse(html)).replace(/\s+/g,' ').trim();
 for(const [file,topics]of Object.entries(require('./fixtures/content-navigation-repair/statement-topics.json'))){
  const blocks=nodes(file).filter(n=>attr(n,'class')==='service-information'),offset=file==='index.html'?0:2;
  topics.forEach((topic,i)=>{
   const original=before[file].faq[i+offset],edit=edits.find(e=>e.file===file&&e.question===original.question);
   if(edit)assert.equal(clean(edit.before),original.answer,file+': precise original answer provenance');
   const expected=edit?clean(edit.after):original.answer;
   const block=blocks.find(b=>text(walk(b).find(n=>n.tagName==='h3')).trim()===topic);
   assert(block,file+': '+topic);
   assert.equal(block.childNodes.filter(n=>n.tagName!=='h3').map(text).join('').replace(/\s+/g,' ').trim(),expected,file+': '+original.question);
  });
 }
});
