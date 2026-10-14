const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const {parse}=require('parse5');
const root=path.resolve(__dirname,'../dist');
const walk=n=>[n,...(n.childNodes||[]).flatMap(walk)];
const text=n=>n?.nodeName==='#text'?n.value:(n?.childNodes||[]).map(text).join('');
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const nodes=f=>walk(parse(fs.readFileSync(path.join(root,f),'utf8')));
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
test('homepage separates office, service pathways and company advantages',()=>{
 const all=nodes('index.html');
 for(const id of ['office-location-title','home-service-pathways','home-company-advantages'])assert(all.some(n=>attr(n,'id')===id),id);
 const office=all.find(n=>attr(n,'class')?.split(' ').includes('office-location'));
 assert(!walk(office).some(n=>attr(n,'data-site-intent')!==undefined),'intent content must not inherit office grid');
 assert(all.some(n=>attr(n,'class')==='office-map-fallback'),'readable map fallback');
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
