// Immutable migration evidence + reviewed exact fragment edits. No Git, root
// generated HTML, current dist capture, or permissive whole-page exemptions.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {parseFragment}=require('parse5');
const frozen=require('../fixtures/ts-migration/baseline.json');
const chrome=require('../fixtures/content-navigation-repair/chrome-contract.json');
const homeCorrection=require('../fixtures/content-navigation-repair/home-map-correction.json');
const policies=Object.keys(frozen.pages).map(f=>require('../fixtures/content-navigation-repair/'+f+'.json'));
const policy={changes:policies.flatMap(p=>p.changes),headStylesheets:policies.flatMap(p=>p.headStylesheets||[]),runtimeHashes:{...policies[0].runtimeHashes,...chrome.runtimeHashes}};
const children=n=>n.childNodes||[];
function canonical(n){
 if(n.nodeName==='#text')return ['text',n.value];
 if(n.nodeName==='#comment')return ['comment',n.data];
 if(n.tagName)return ['element',n.namespaceURI,n.tagName,n.attrs.map(a=>[a.namespace||'',a.name,a.value]).sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b),'en')),children(n).map(canonical)];
 return ['fragment',children(n).map(canonical)];
}
const parts=html=>canonical(parseFragment(html))[1];
const isEl=(n,tag)=>n?.[0]==='element'&&n[2]===tag;
const attr=(n,name)=>n?.[3]?.find(a=>a[1]===name)?.[2];
const childList=n=>n[0]==='element'?n[4]:n[0]==='document'||n[0]==='fragment'?n[1]:[];
const walk=n=>[n,...childList(n).flatMap(walk)];
const text=n=>n[0]==='text'?n[1]:childList(n).map(text).join('');
const readable=n=>text(n).replace(/\s+/g,' ').trim();
function replaceFragment(tree,before,after,file,region){
 const old=parts(before),next=parts(after);let count=0;
 if(!old.length){const main=walk(tree).find(n=>isEl(n,'main'));main[4].push(...next);return;}
 const needle=JSON.stringify(old);
 function visit(node){const c=childList(node);for(let i=0;i<=c.length-old.length;i++)if(JSON.stringify(c.slice(i,i+old.length))===needle){c.splice(i,old.length,...structuredClone(next));count++;return;}c.forEach(visit);}
 visit(tree);assert.equal(count,1,file+': exact approved '+region+' must match immutable evidence once');
}
function snapshotFromTree(tree,previous){
 const nodes=walk(tree);
 return {...previous,dom:JSON.stringify(tree),headings:nodes.filter(n=>n[0]==='element'&&/^h[1-6]$/.test(n[2])).map(n=>({level:Number(n[2][1]),text:readable(n)})),
 faq:nodes.filter(n=>isEl(n,'details')).map(n=>{const summary=n[4].find(c=>isEl(c,'summary'));return {question:readable(summary),answer:n[4].filter(c=>c!==summary).map(text).join('').replace(/\s+/g,' ').trim()};}),
 jsonLd:nodes.filter(n=>isEl(n,'script')&&attr(n,'type')==='application/ld+json').map(n=>JSON.parse(text(n))),
 rawText:nodes.filter(n=>n[0]==='element'&&['pre','textarea','script','style'].includes(n[2])).map(n=>({tag:n[2],content:text(n)}))};
}
function bodyChildren(tree){return childList(walk(tree).find(n=>isEl(n,'body')));}
function normalizeChromeWhitespace(tree){
 const c=bodyChildren(tree),end=c.findIndex(n=>isEl(n,'main'));
 // Only direct-body, whitespace-only text before main: never remove an element
 // or recurse into similarly named header/utility nodes in content or footer.
 for(let i=end-1;i>=0;i--)if(c[i][0]==='text'&&!c[i][1].trim())c.splice(i,1);
 return tree;
}
function approvedHeader(file,refined=true){
 const promotion=chrome.promotedHeaders[file],source=promotion?.from||file;
 const candidates=bodyChildren(JSON.parse(frozen.pages[source].dom)).filter(n=>isEl(n,'header')&&attr(n,'class')==='site-header');
 assert.equal(candidates.length,1,file+': exactly one immutable top-level shared header');
 const header=candidates[0];
 if(promotion){
  const cta=walk(header).filter(n=>isEl(n,'a')&&attr(n,'class')==='nav-cta');
  assert.equal(cta.length,1,file+': exactly one approved contact CTA');
  cta[0][3].find(a=>a[1]==='href')[2]=promotion.contactHref;
 }
 for(const node of walk(header))if(node[0]==='element')node[3]=node[3].filter(a=>a[1]!=='aria-current');
 const nav=walk(header).find(n=>isEl(n,'nav')&&attr(n,'aria-label')==='Main navigation');
 const selected=[];
 for(const node of walk(nav)){
  const key=isEl(node,'a')?'href:'+attr(node,'href'):isEl(node,'button')?'controls:'+attr(node,'aria-controls'):null;
  if(key&&chrome.current[file].includes(key)){
   selected.push(key);node[3].push(['','aria-current','page']);
   node[3].sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b),'en'));
  }
 }
 assert.deepEqual(selected,chrome.current[file],file+': independently enumerated current targets exist exactly');
 return refined?refineHeader(header):header;
}
const approved=structuredClone(frozen);
assert.deepEqual(Object.keys(chrome.current).sort(),Object.keys(frozen.pages).sort(),'chrome contract covers all 48 routes');
for(const [file,original]of Object.entries(approved.pages)){
 const tree=JSON.parse(original.dom),body=bodyChildren(tree),headers=body.filter(n=>isEl(n,'header')&&attr(n,'class')==='site-header');
 assert.equal(headers.length,1,file+': exact top-level header replacement boundary');
 body[body.indexOf(headers[0])]=approvedHeader(file,false);
 // The utility stays byte/DOM-exact from this page's immutable baseline. It is
 // not borrowed from the promoted header's source, removed, or exempted.
 approved.pages[file]=snapshotFromTree(tree,original);
}
for(const record of policy.changes){const original=approved.pages[record.file],tree=JSON.parse(original.dom);
 for(const change of record.fragments)replaceFragment(tree,change.before,change.after,record.file,change.region);
 for(const change of record.schemas){const script=walk(tree).filter(n=>isEl(n,'script')&&attr(n,'type')==='application/ld+json')[change.index];assert.equal(text(script),change.before,record.file+': schema provenance');script[4]=[['text',change.after]];}
 approved.pages[record.file]=snapshotFromTree(tree,original);
}
{
 const previous=approved.pages['index.html'],tree=JSON.parse(previous.dom);
 for(const name of homeCorrection.removedClasses){
  let removed=0;
  for(const parent of walk(tree)){
   const c=childList(parent);
   for(let i=c.length-1;i>=0;i--)if(c[i][0]==='element'&&(attr(c[i],'class')||'').split(' ').includes(name)){c.splice(i,1);removed++;}
  }
  assert.equal(removed,1,'homepage correction removes exactly one '+name);
 }
 approved.pages['index.html']=snapshotFromTree(tree,previous);
}
// Exact, independently reviewed copy edits layered on the prior immutable contract.
const trustCleanup=require('../fixtures/content-navigation-repair/trust-copy-cleanup.json');
for(const [file,previous]of Object.entries(approved.pages)){
 const tree=JSON.parse(previous.dom);
 for(const edit of trustCleanup.text.filter(e=>e.file===file)){
  const node=edit.path.reduce((n,i)=>childList(n)[i],tree);
  assert.equal(node[0],'text',file+': approved text-node boundary');
  assert.equal(require('node:crypto').createHash('sha256').update(node[1]).digest('hex'),edit.hash,file+': prior text provenance');
  assert.equal(node[1].slice(edit.start,edit.start+edit.before.length),edit.before);
  node[1]=node[1].slice(0,edit.start)+edit.after+node[1].slice(edit.start+edit.before.length);
 }
 if(file==='about.html'){
  const sections=walk(tree).filter(n=>isEl(n,'section')&&walk(n).some(c=>isEl(c,'h2')&&text(c)==='Company registration and trade documentation'));
  assert.equal(sections.length,1,'exact rejected About section');
  const parent=walk(tree).find(n=>childList(n).includes(sections[0]));
  childList(parent).splice(childList(parent).indexOf(sections[0]),1);
  const scripts=walk(tree).filter(n=>isEl(n,'script')&&attr(n,'type')==='application/ld+json');
  assert.equal(scripts.length,1);const graph=JSON.parse(text(scripts[0]));
  assert.equal(graph['@graph'].filter(n=>n['@type']==='FAQPage').length,1);
  graph['@graph']=graph['@graph'].filter(n=>n['@type']!=='FAQPage');
  scripts[0][4]=[['text',JSON.stringify(graph,null,2)]];
 }
 approved.pages[file]=snapshotFromTree(tree,previous);
}
for(const [file,previous]of Object.entries(approved.pages)){
 const tree=JSON.parse(previous.dom);
 for(const edit of require('../fixtures/content-navigation-repair/trust-copy-follow-up.json').text.filter(e=>e.file===file)){
  const node=edit.path.reduce((n,i)=>childList(n)[i],tree);
  assert.equal(node[0],'text');
  assert.equal(require('node:crypto').createHash('sha256').update(node[1]).digest('hex'),edit.hash,file+': follow-up text provenance');
  assert.equal(node[1].slice(edit.start,edit.start+edit.before.length),edit.before);
  node[1]=node[1].slice(0,edit.start)+edit.after+node[1].slice(edit.start+edit.before.length);
 }
 approved.pages[file]=snapshotFromTree(tree,previous);
}
const finalCopy=require('../fixtures/content-navigation-repair/trust-copy-final.json');
for(const [file,previous]of Object.entries(approved.pages)){
 const tree=JSON.parse(previous.dom);
 for(const edit of finalCopy.text.filter(e=>e.file===file)){
  const node=edit.path.reduce((n,i)=>childList(n)[i],tree);
  assert.equal(node[0],'text');assert.equal(node[1],edit.before,file+': final-copy provenance');
  node[1]=edit.after;
 }
 approved.pages[file]=snapshotFromTree(tree,previous);
}
function reviewedCopy(s){return [...require('../fixtures/content-navigation-repair/trust-copy-rules.json'),...finalCopy.rules].reduce((v,[a,b])=>v.replace(new RegExp(a.replace(/[.*+?^${}()|[\]\\]/g,'\\$&').replace(/\s+/g,'\\s+'),'g'),b),s);}
assert.equal(approved.artifacts['llms.txt'].split(' No arrival time is guaranteed.').length-1,1,'one approved shared-hours companion edit');
approved.artifacts['llms.txt']=reviewedCopy(approved.artifacts['llms.txt']);
// Owner-approved global footer restoration: clone only the previously approved
// homepage footer/mobile bar, never capture newly generated output as expected.
{
 const homeBody=bodyChildren(JSON.parse(approved.pages['index.html'].dom));
 const footerIndex=homeBody.findIndex(n=>isEl(n,'footer'));
 const mobileIndex=homeBody.findIndex(n=>isEl(n,'div')&&attr(n,'class')==='mobile-ctas');
 assert.equal(mobileIndex,footerIndex+2,'homepage footer and mobile bar boundary');
 assert.equal(homeBody[mobileIndex+1][0],'text');
 const shared=homeBody.slice(footerIndex,mobileIndex+2);
 for(const [file,previous]of Object.entries(approved.pages)){
  const tree=JSON.parse(previous.dom),body=bodyChildren(tree);
  const start=body.findIndex(n=>isEl(n,'footer'));
  const end=body.findIndex(n=>isEl(n,'div')&&attr(n,'class')==='mobile-ctas');
  let length;
  if(['insights-hot-water-plumbing-or-electrical.html','insights-reporting-a-plumbing-leak.html','insights-safety-switch-keeps-tripping.html','insights-tenant-property-manager-maintenance-handover.html','news-clearer-property-maintenance-enquiry.html','news-keeping-access-information-together.html','news-useful-property-work-order.html','privacy.html'].includes(file)){
   assert.equal(end,-1,file+': historical layout had no mobile bar');
   length=file==='privacy.html'?2:1;
   if(file==='privacy.html')assert.equal(body[start+1][0],'text');
  }else if(['insights.html','news.html'].includes(file)){
   assert.equal(end,start+1,file+': historical compact footer/mobile boundary');length=2;
  }else{
   assert.equal(end,start+2,file+': exact footer/mobile restoration boundary');
   assert.equal(body[end+1][0],'text');length=end-start+2;
  }
  body.splice(start,length,...structuredClone(shared));
  approved.pages[file]=snapshotFromTree(tree,previous);
 }
}
// Owner-approved de-duplication: only generic photo-submission paragraphs,
// display-only photo topics and redundant scenario introductions are removed.
for(const [file,previous]of Object.entries(approved.pages)){
 if(['faq.html','contact.html'].includes(file))continue;
 const tree=JSON.parse(previous.dom),main=walk(tree).find(n=>isEl(n,'main'));
 for(const parent of walk(main)){
  const c=childList(parent);
  for(let i=c.length-1;i>=0;i--){const n=c[i],copy=readable(n);
   if(isEl(n,'p')&&copy.startsWith('Photos are optional: email safely taken photos to'))c.splice(i,1);
   else if(isEl(n,'p')&&copy==='Use these common service situations to describe the work you need. Our team assesses the cause and confirms the repair or installation plan.')c.splice(i,1);
   else if(isEl(n,'div')&&attr(n,'class')==='service-information'&&walk(n).some(x=>isEl(x,'h3')&&readable(x)==='Safely taken photos'))c.splice(i,1);
  }
  for(let i=c.length-1;i>0;i--)if(c[i][0]==='text'&&c[i-1][0]==='text'){c[i-1][1]+=c[i][1];c.splice(i,1);}
 }
 approved.pages[file]=snapshotFromTree(tree,previous);
}
const beforeCoherentPresentation=structuredClone(approved);
// Reviewed presentation correction: retire all 125 converted FAQ statement
// walls, keep the substantive work/education chapters and compact actual FAQ.
for(const [file,previous]of Object.entries(approved.pages)){
 const tree=JSON.parse(previous.dom),main=walk(tree).find(n=>isEl(n,'main'));
 for(const parent of walk(main)){
  const c=childList(parent);
  for(let i=c.length-1;i>=0;i--)if(isEl(c[i],'div')&&attr(c[i],'class')==='service-information')c.splice(i,1);
  for(let i=c.length-1;i>0;i--)if(c[i][0]==='text'&&c[i-1][0]==='text'){c[i-1][1]+=c[i][1];c.splice(i,1);}
 }
 const targets=require('../fixtures/content-navigation-repair/coherent-related.json')[file];
 if(targets)for(const n of walk(main).filter(n=>isEl(n,'ul')&&attr(n,'class')==='intent-links')){
  // Only the FAQ presenter owns this correction, not body/region directories.
  const faq=walk(main).find(p=>isEl(p,'section')&&(attr(p,'class')||'').split(' ').includes('faq')&&walk(p).includes(n));if(!faq)continue;
  n[4]=n[4].filter(li=>isEl(li,'li')&&walk(li).some(a=>isEl(a,'a')&&targets.includes(attr(a,'href'))));
  if(n[4].length)n[3].find(a=>a[1]==='class')[2]='intent-links service-related-links';
  else{const p=walk(main).find(p=>childList(p).includes(n));childList(p).splice(childList(p).indexOf(n),1);}
 }
 if(['plumbing.html','electrical.html'].includes(file)){
  const heading=walk(main).find(n=>isEl(n,'h2')&&text(n)===(file==='plumbing.html'?'Assessment and written quotation':'Booking an Electrician: Symptoms, Safety and Access'));
  assert(heading,file+': approved availability placement heading');
  const parent=walk(main).find(n=>childList(n).includes(heading));
  childList(parent).splice(childList(parent).indexOf(heading)+1,0,...parts('<p class="service-attendance-note">Emergency repair fees follow the quoted work plan. For urgent work, call rather than relying on an online enquiry.</p>'));
 }
 approved.pages[file]=snapshotFromTree(tree,previous);
}
for(const [kind,map]of Object.entries(require('../fixtures/content-navigation-repair/coherent-heading-edits.json')))for(const [file,label]of Object.entries(map)){
 const previous=approved.pages[file],tree=JSON.parse(previous.dom);
 const old=kind==='scenarios'?'Common situations and what to report':'Service assessment and next steps';
 const matches=walk(tree).filter(n=>isEl(n,'h2')&&text(n)===old);assert.equal(matches.length,1,file+': exact generic heading replacement');
 matches[0][4]=[['text',label]];approved.pages[file]=snapshotFromTree(tree,previous);
}
for(const edit of require('../fixtures/content-navigation-repair/coherent-prose-edits.json')){
 const previous=approved.pages[edit.file],tree=JSON.parse(previous.dom);
 const matches=walk(tree).filter(n=>n[0]==='text'&&n[1].includes(edit.before));assert.equal(matches.length,1,edit.file+': exact educational prose edit');
 matches[0][1]=matches[0][1].replace(edit.before,edit.after);approved.pages[edit.file]=snapshotFromTree(tree,previous);
}
// Owner-approved secondary heading cleanup only; no primary title/body/link edits.
for(const edit of require('../fixtures/content-navigation-repair/service-locality-heading-edits.json')){
 const previous=approved.pages[edit.file],tree=JSON.parse(previous.dom);
 const matches=walk(tree).filter(n=>isEl(n,'h2')&&text(n)===edit.before);
 assert.equal(matches.length,1,edit.file+': exact locality heading correction');
 matches[0][4]=[['text',edit.after]];approved.pages[edit.file]=snapshotFromTree(tree,previous);
}
const beforeEnquirySidebar=structuredClone(approved);
// Exact approved wrapper/form addition. Original body nodes move unchanged;
// existing two forms are relocated, not replaced by a new output capture.
for(const [file,[label,line]]of Object.entries(require('../fixtures/content-navigation-repair/enquiry-sidebar-topics.json'))){
 const previous=approved.pages[file],tree=JSON.parse(previous.dom),main=walk(tree).find(n=>isEl(n,'main'));
 const article=label===null,topic=label??previous.title.split(' | ')[0];
 const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
 const existing=walk(main).find(n=>isEl(n,'form')&&attr(n,'data-enquiry-form')!==undefined);
 let form;
 if(existing){
  form=existing;
  const parent=walk(main).find(n=>childList(n).includes(existing)),c=childList(parent);c.splice(c.indexOf(existing),1);
  for(let i=c.length-1;i>0;i--)if(c[i][0]==='text'&&c[i-1][0]==='text'){c[i-1][1]+=c[i][1];c.splice(i,1);}
 }else{
  const html=fs.readFileSync(path.join(__dirname,'../fixtures/content-navigation-repair/enquiry-sidebar-form.html'),'utf8').trimEnd().replace('{{service}}',esc(line+' — '+topic)).replace('{{topic}}',esc(line==='Not sure'?'Not sure':topic));
  form=parts(html)[0];
 }
 const start=article?0:main[4].findIndex(n=>isEl(n,'section')&&(attr(n,'class')||'').includes('page-hero'))+1;
 assert(start>0||article,file+': exact hero/wrapper boundary');
 const moved=main[4].splice(start);
 const wrapper=parts('<div class="enquiry-layout shell"><div class="enquiry-content"></div><aside class="enquiry-sidebar" aria-label="Contact our repair team"><div class="enquiry-sidebar__sticky"><a class="enquiry-sidebar__call" href="tel:0413477667">Call 0413 477 667</a></div></aside></div>')[0];
 wrapper[4][0][4]=moved;wrapper[4][1][4][0][4].push(form);main[4].push(wrapper);
 if(!walk(tree).some(n=>isEl(n,'script')&&attr(n,'src')==='contact-form.js')){
  const body=bodyChildren(tree);let i=body.length;while(i>0&&body[i-1][0]==='text'&&!body[i-1][1].trim())i--;
  body.splice(i,0,...parts('<script src="contact-form.js"></script>'));
 }
 approved.pages[file]=snapshotFromTree(tree,previous);
}
Object.assign(approved.assets,policy.runtimeHashes,homeCorrection.runtimeHashes,{'field-design.css':'74c476ca164881a8f43e413b7330c845b94265eab1ddfd31f531b73465e39efd','contact-form.js':'bccd86ae00111dba344485989b164fa7c1e4bac07af20c9e9e7a19d7c7899ab7'});
for(const change of policy.headStylesheets){
 const original=approved.pages[change.file],tree=JSON.parse(original.dom),head=walk(tree).find(n=>isEl(n,'head'));
 const i=head[4].findIndex(n=>isEl(n,'link')&&attr(n,'rel')==='stylesheet'&&attr(n,'href')===change.after);
 assert(i>=0,'privacy stylesheet insertion has exact historical anchor');
 head[4].splice(i+1,0,['text','\n    '],...parts(`<link rel="stylesheet" href="${change.href}">`));
 approved.pages[change.file]=snapshotFromTree(tree,original);
}
// Reviewed 2026-10-15 service-only fragment policy. Each exact before fragment
// must occur once in the previously approved immutable DOM; unrelated content,
// metadata, shared chrome and asset hashes retain their existing contract.
for(const edit of require('../fixtures/fullsite-refinement/service-copy-edits.json').edits){
 const previous=approved.pages[edit.file],tree=JSON.parse(previous.dom);
 replaceFragment(tree,edit.before,edit.after,edit.file,edit.reason);
 approved.pages[edit.file]=snapshotFromTree(tree,previous);
}
for(const edit of require('../fixtures/fullsite-refinement/hub-service-follow-up.json').edits){
 const previous=approved.pages[edit.file],tree=JSON.parse(previous.dom);
 let deletionParent;
 if(edit.after===''){
  const fragment=parts(edit.before);assert.equal(fragment.length,1,'one exact removed hub paragraph');
  const parents=walk(tree).filter(n=>childList(n).some(c=>JSON.stringify(c)===JSON.stringify(fragment[0])));
  assert.equal(parents.length,1,edit.file+': exact paragraph parent');deletionParent=parents[0];
 }
 replaceFragment(tree,edit.before,edit.after,edit.file,edit.reason);
 // Removing this one paragraph joins its two whitespace text neighbours when
 // the HTML parser reads the canonical source. Match that exact local effect.
 if(deletionParent){const c=childList(deletionParent);for(let i=c.length-1;i>0;i--)if(c[i][0]==='text'&&c[i-1][0]==='text'){c[i-1][1]+=c[i][1];c.splice(i,1);}}
 approved.pages[edit.file]=snapshotFromTree(tree,previous);
}
{
 const edit=require('../fixtures/fullsite-refinement/smart-control-faq.json');
 const previous=approved.pages[edit.file],tree=JSON.parse(previous.dom);
 for(const [before,after]of edit.text){
  const nodes=walk(tree).filter(n=>n[0]==='text'&&n[1]===before);
  assert.equal(nodes.length,1,edit.file+': exact smart-control contact label');nodes[0][1]=after;
 }
 const detail=q=>`<details><summary>${q.question}</summary><p>${q.answer}</p></details>`;
 replaceFragment(tree,detail(edit.before),detail(edit.after),edit.file,'actual smart-control quotation FAQ');
 const script=walk(tree).find(n=>isEl(n,'script')&&attr(n,'type')==='application/ld+json');
 const graph=JSON.parse(text(script))['@graph'].find(n=>n['@type']==='FAQPage');
 assert.equal(graph.mainEntity[edit.index].name,edit.before.question);
 assert.equal(graph.mainEntity[edit.index].acceptedAnswer.text,edit.before.answer);
 let source=text(script);
 for(const key of ['question','answer']){
  assert.equal(source.split(JSON.stringify(edit.before[key])).length-1,1,edit.file+': exact prior FAQ schema value');
  source=source.replace(JSON.stringify(edit.before[key]),JSON.stringify(edit.after[key]));
 }
 script[4]=[['text',source]];approved.pages[edit.file]=snapshotFromTree(tree,previous);
}
for(const edit of require('../fixtures/fullsite-refinement/review-round-1.json').edits){
 const previous=approved.pages[edit.file],tree=JSON.parse(previous.dom);
 replaceFragment(tree,edit.before,edit.after,edit.file,edit.reason);
 approved.pages[edit.file]=snapshotFromTree(tree,previous);
}
// Task 2 is a literal fragment policy over the previously reviewed output.
// Plain text/attribute edits have one exact occurrence; HTML edits retain the
// strict structural fragment matcher. No page or content category is exempted.
for(const edit of require('../fixtures/fullsite-refinement/editorial-copy-edits.json').edits){
 const previous=approved.pages[edit.file],tree=JSON.parse(previous.dom);
 if(!edit.before.includes('<')||edit.before.startsWith('>')){
  const before=text(['fragment',parts(edit.before.startsWith('>')?edit.before.slice(1,-4):edit.before)]);
  const after=text(['fragment',parts(edit.after.startsWith('>')?edit.after.slice(1,-4):edit.after)]);
  let count=0;
  for(const n of walk(tree)){
   if(n[0]==='text'&&n[1].includes(before)){assert.equal(n[1].split(before).length-1,1,edit.file+': one exact text occurrence');n[1]=n[1].replace(before,after);count++;}
   if(n[0]==='element')for(const a of n[3])if(a[2].includes(before)){assert.equal(a[2].split(before).length-1,1,edit.file+': one exact attribute occurrence');a[2]=a[2].replace(before,after);count++;}
  }
  assert.equal(count,1,edit.file+': exact editorial text/attribute edit: '+edit.reason);
 }else replaceFragment(tree,edit.before,edit.after,edit.file,edit.reason);
 approved.pages[edit.file]=snapshotFromTree(tree,previous);
}
{
 const edit=require('../fixtures/fullsite-refinement/editorial-faq-edit.json');
 const previous=approved.pages[edit.file],tree=JSON.parse(previous.dom);
 const detail=q=>`<details><summary>${q.question}</summary>${q.answerHtml}</details>`;
 replaceFragment(tree,detail(edit.before),detail(edit.after),edit.file,edit.reason);
 const script=walk(tree).find(n=>isEl(n,'script')&&attr(n,'type')==='application/ld+json');
 const graph=JSON.parse(text(script))['@graph'].find(n=>n['@type']==='FAQPage');
 assert.equal(graph.mainEntity[edit.index].name,edit.before.question);
 assert.equal(graph.mainEntity[edit.index].acceptedAnswer.text,edit.before.answer);
 let source=text(script);
 for(const key of ['question','answer']){
  assert.equal(source.split(JSON.stringify(edit.before[key])).length-1,1,edit.file+': one prior schema FAQ value');
  source=source.replace(JSON.stringify(edit.before[key]),JSON.stringify(edit.after[key]));
 }
 script[4]=[['text',source]];approved.pages[edit.file]=snapshotFromTree(tree,previous);
}
for(const edit of require('../fixtures/fullsite-refinement/editorial-heading-edits.json').edits){
 const previous=approved.pages[edit.file],tree=JSON.parse(previous.dom);
 replaceFragment(tree,edit.before,edit.after,edit.file,edit.reason);
 approved.pages[edit.file]=snapshotFromTree(tree,previous);
}
for(const edit of require('../fixtures/fullsite-refinement/editorial-photo-edits.json').edits){
 const previous=approved.pages[edit.file],tree=JSON.parse(previous.dom);
 replaceFragment(tree,edit.before,edit.after,edit.file,edit.reason);
 approved.pages[edit.file]=snapshotFromTree(tree,previous);
}
for(const edit of require('../fixtures/fullsite-refinement/editorial-review-round-1.json').edits){
 const previous=approved.pages[edit.file],tree=JSON.parse(previous.dom);
 replaceFragment(tree,edit.before,edit.after,edit.file,edit.reason);
 approved.pages[edit.file]=snapshotFromTree(tree,previous);
}
// Task 3 applies precise shared-control edits to the independently maintained
// prior DOM. All unrelated attributes, content, metadata and footer nodes stay
// under the original whole-document comparison.
function refineHeader(header){
 const edits=require('../fixtures/fullsite-refinement/shared-enquiry-edits.json');
 const nav=walk(header).filter(n=>isEl(n,'nav')&&attr(n,'id')==='main-nav');assert.equal(nav.length,1,'one pre-existing main navigation');
 const parent=walk(header).find(n=>childList(n).includes(nav[0]));
 childList(parent).splice(childList(parent).indexOf(nav[0]),0,...parts(edits.toggle));
 const menu=walk(header).find(n=>attr(n,'id')==='electrical-menu');
 for(const [before,after]of edits.navigationText){
  const matches=walk(menu).filter(n=>n[0]==='text'&&n[1]===before);assert.equal(matches.length,1,'exact previous navigation label '+before);matches[0][1]=after;
 }
 return header;
}
{
 const edits=require('../fixtures/fullsite-refinement/shared-enquiry-edits.json');
 const eligible=Object.keys(require('../fixtures/content-navigation-repair/enquiry-sidebar-topics.json'));
 for(const [file,previous]of Object.entries(approved.pages)){
  const tree=JSON.parse(previous.dom),all=walk(tree),body=bodyChildren(tree);
  refineHeader(all.find(n=>isEl(n,'header')&&attr(n,'class')==='site-header'));
  const mobile=all.find(n=>isEl(n,'div')&&attr(n,'class')==='mobile-ctas'),action=walk(mobile).filter(n=>isEl(n,'a')&&text(n)==='Book a repair');assert.equal(action.length,1,file+': one existing mobile booking action');
  assert.equal(attr(action[0],'href'),'contact.html');action[0][3].find(a=>a[1]==='href')[2]=eligible.includes(file)||file==='contact.html'?'#enquiry':'contact.html#enquiry';
  if(eligible.includes(file)){
   const forms=all.filter(n=>isEl(n,'form')&&attr(n,'data-enquiry-form')!==undefined);assert.equal(forms.length,1,file+': one existing form');assert.equal(attr(forms[0],'id'),undefined,file+': no previous anchor collision');
   forms[0][3].push(['','id','enquiry'],['','tabindex','-1']);forms[0][3].sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b),'en'));
   const option=edits.selectedOptionEdits[file];if(option){
    const selected=walk(forms[0]).filter(n=>isEl(n,'option')&&attr(n,'selected')!==undefined);assert.equal(selected.length,1,file+': one selected topic');
    assert.equal(attr(selected[0],'value'),option[0],file+': exact previous trade/topic');assert.equal(text(selected[0]),option[2]);
    selected[0][3].find(a=>a[1]==='value')[2]=option[1];selected[0][4]=[['text',option[3]]];
   }
   const hero=all.find(n=>isEl(n,'section')&&(attr(n,'class')||'').split(' ').includes('page-hero'));
   if(hero){
    const links=walk(hero).filter(n=>isEl(n,'a')&&/^contact\.html(?:[?#]|$)/.test(attr(n,'href')||''));
    for(const link of links)link[3].find(a=>a[1]==='href')[2]='#enquiry';
    if(!links.length){const shell=hero[4].find(n=>isEl(n,'div')&&attr(n,'class')==='shell');assert(shell,file+': exact hero shell');shell[4].push(...parts(edits.heroAction));}
   }
  }
  // Reorder only the previously appended handler on rails; the new shared
  // resolver/prefill must precede it. Existing Contact scripts remain exact.
  if(file!=='contact.html'){
   const handler=body.findIndex(n=>isEl(n,'script')&&attr(n,'src')==='contact-form.js');
   if(eligible.includes(file)&&!['fixtures-appliances-perth.html','renewables-smart-home-perth.html'].includes(file)){assert(handler>=0,file+': existing shared handler');body.splice(handler,0,...parts('<script src="booking-context.js"></script><script src="contact-prefill.js"></script>'));}
   else{if(!eligible.includes(file))assert.equal(handler,-1,file+': no form handler');let i=body.length;while(i>0&&body[i-1][0]==='text'&&!body[i-1][1].trim())i--;body.splice(i,0,...parts('<script src="booking-context.js"></script><script src="contact-prefill.js"></script>'));}
  }
  approved.pages[file]=snapshotFromTree(tree,previous);
 }
 Object.assign(approved.assets,edits.runtimeHashes);
}
// Task 4 changes only enumerated CSS identities, two lazy carousel resource
// attributes, one pause button, seven article date companions and sitemap dates.
// All other full-document nodes/artifacts/assets remain independently guarded.
{
 const edits=require('../fixtures/fullsite-refinement/resource-maintenance-edits.json');
 for(const [file,previous]of Object.entries(approved.pages)){
  const tree=JSON.parse(previous.dom),all=walk(tree);
  for(const [before,after]of edits.scripts){const matches=all.filter(n=>isEl(n,'script')&&attr(n,'src')===before);assert.equal(matches.length,1,file+': one prior shared script '+before);matches[0][3].find(a=>a[1]==='src')[2]=after;}
  for(const node of all.filter(n=>isEl(n,'link')&&attr(n,'rel')==='stylesheet')){
   const edit=edits.stylesheets.find(([before])=>before===attr(node,'href'));
   if(edit)node[3].find(a=>a[1]==='href')[2]=edit[1];
  }
  if(file==='index.html'){
   for(const edit of edits.carousel){const nodes=all.filter(n=>isEl(n,'article')&&attr(n,'data-background-image')===edit.fallback);assert.equal(nodes.length,1,'one exact lazy slide '+edit.fallback);assert.equal(attr(nodes[0],'data-background-srcset'),undefined);nodes[0][3].push(['','data-background-srcset',edit.srcset]);nodes[0][3].sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b),'en'));}
   const controls=all.filter(n=>isEl(n,'div')&&attr(n,'class')==='carousel-controls');assert.equal(controls.length,1);
   const children=childList(controls[0]),next=children.findIndex(n=>isEl(n,'button')&&attr(n,'data-next')!==undefined);assert(next>=0);children.splice(next+1,0,...parts('\n          '+edits.pause));
  }
  if(edits.articles.includes(file)){
   const times=all.filter(n=>isEl(n,'time'));assert.equal(times.length,1,file+': one prior visible article date');assert.equal(attr(times[0],'datetime'),'2026-10-10');assert.equal(text(times[0]),'10 October 2026');times[0][3].find(a=>a[1]==='datetime')[2]='2026-10-15';times[0][4]=[['text','15 October 2026']];
   const scripts=all.filter(n=>isEl(n,'script')&&attr(n,'type')==='application/ld+json'&&text(n).includes('"dateModified": "2026-10-10"'));assert.equal(scripts.length,1,file+': one prior Article schema');
   assert.equal(text(scripts[0]).split('"dateModified": "2026-10-10"').length-1,1);scripts[0][4]=[['text',text(scripts[0]).replace('"dateModified": "2026-10-10"','"dateModified": "2026-10-15"')]];
  }
  approved.pages[file]=snapshotFromTree(tree,previous);
 }
 for(const edit of edits.dates){const url='https://perthpipepower.com.au/'+(edit.file==='index.html'?'':edit.file),before='<loc>'+url+'</loc><lastmod>'+edit.before+'</lastmod>';assert.equal(approved.artifacts['sitemap.xml'].split(before).length-1,1,edit.file+': exact prior sitemap date');approved.artifacts['sitemap.xml']=approved.artifacts['sitemap.xml'].replace(before,'<loc>'+url+'</loc><lastmod>'+edit.after+'</lastmod>');}
 assert.equal(approved.assets['site.js'],edits.siteJs.before,'previous carousel runtime fingerprint');approved.assets['site.js']=edits.siteJs.after;
 assert.equal(approved.assets['site.css'],edits.siteCss.before,'previous carousel style fingerprint');approved.assets['site.css']=edits.siteCss.after;
}
// Final-review fixes remain two exact old-to-approved list edits and one
// explicit asset identity. Static alias shells and all other guards remain.
{
 const edits=require('../fixtures/fullsite-refinement/final-fix-edits.json');
 for(const edit of edits.edits){
  const previous=approved.pages[edit.file],tree=JSON.parse(previous.dom);
  replaceFragment(tree,edit.before,edit.after,edit.file,edit.reason);
  approved.pages[edit.file]=snapshotFromTree(tree,previous);
 }
 assert.equal(approved.assets['field-design.css'],edits.fieldDesignCss.before,'previous homepage style fingerprint');
 approved.assets['field-design.css']=edits.fieldDesignCss.after;
}
// User-approved 2026-10-16 changes are exact source fragments. This layer
// retains full-document protection outside the enumerated removals/labels/move.
{
 const edits=[...require('../fixtures/customer-corrections-20261016.json').edits,require('../fixtures/about-subtitle-sync-20261016.json')];
 for(const [file,previous]of Object.entries(approved.pages)){
  const tree=JSON.parse(previous.dom);
  for(const edit of edits.filter(e=>e.file===file)){
   const old=parts(edit.before),next=parts(edit.after),needle=JSON.stringify(old);let count=0;
   function visit(node){const c=childList(node);for(let i=0;i<=c.length-old.length;i++)if(JSON.stringify(c.slice(i,i+old.length))===needle){c.splice(i,old.length,...structuredClone(next));count++;i+=next.length-1;}c.forEach(visit);}
   visit(tree);assert.equal(count,edit.renderedCount??edit.count,file+': exact approved customer fragment '+edit.before.slice(0,180));
  }
  approved.pages[file]=snapshotFromTree(tree,previous);
 }
}
// Explicit runtime-only localization additions preserve the existing English
// payload contract and behavior; this is not a recapture of page baselines.
for(const [file,edit] of Object.entries(require('../fixtures/bilingual-runtime-edits.json'))){
 assert.equal(approved.assets[file],edit.before,file+': previous runtime identity');approved.assets[file]=edit.after;
}
// Exact customer-approved 2026-10-19 edits layered on immutable prior evidence.
// Every replacement/removal must match the old node(s); no page-level exemption.
for(const edit of require('../fixtures/copy-cleanup-20261019.json').edits){
 const previous=approved.pages[edit.file],tree=JSON.parse(previous.dom);
 for(const op of edit.ops){
  if(op.op==='replace'){
   const parent=op.path.slice(0,-1).reduce((n,i)=>n[i],tree),key=op.path.at(-1);
   assert.deepEqual(parent[key],op.before,edit.file+': exact prior node at '+op.path.join('/'));
   parent[key]=structuredClone(op.after);
  }else{
   const list=op.path.reduce((n,i)=>n[i],tree);
   assert.deepEqual(list.slice(op.at,op.at+op.before.length),op.before,edit.file+': exact removed nodes');
   list.splice(op.at,op.before.length,...structuredClone(op.after));
  }
 }
 const updated=snapshotFromTree(tree,previous),all=walk(tree);
 updated.title=text(all.find(n=>isEl(n,'title')));
 updated.description=attr(all.find(n=>isEl(n,'meta')&&attr(n,'name')==='description'),'content');
 approved.pages[edit.file]=updated;
}
function normalizeLocaleChrome(tree,file){
 const all=walk(tree),entries=all.filter(n=>n[0]==='element'&&attr(n,'data-locale-entry')!==undefined);
 if(!entries.length)return tree;
 assert.equal(entries.length,1,file+': one bounded locale entry');
 const locale=require('../fixtures/bilingual-chrome.json'),tail=file==='index.html'?'':file;
 const head=all.find(n=>isEl(n,'head')),body=all.find(n=>isEl(n,'body'));
 const nav=all.find(n=>isEl(n,'nav')&&attr(n,'class')==='site-nav'),list=childList(nav).find(n=>isEl(n,'ul')&&attr(n,'class')==='nav-list');
 function removeExact(parent,fragment){const expected=parts(fragment);assert.equal(expected.length,1);const list=childList(parent),matches=list.map((n,i)=>JSON.stringify(n)===JSON.stringify(expected[0])?i:-1).filter(i=>i>=0);assert.equal(matches.length,1,file+': exact locale fragment and parent');list.splice(matches[0],1);for(let i=1;i<list.length;i++)if(list[i-1][0]==='text'&&list[i][0]==='text'){list[i-1][1]+=list[i][1];list.splice(i--,1);}}
 removeExact(list,`<li data-locale-entry><a class="language-switch" href="/zh/${tail}" lang="zh-Hans" hreflang="zh-Hans" aria-label="切换到中文">中文</a></li>`);
 for(const [language,url]of [['en-AU','/'+tail],['zh-Hans','/zh/'+tail],['x-default','/'+tail]])removeExact(head,`<link data-locale-alternate rel="alternate" hreflang="${language}" href="https://perthpipepower.com.au${url}">`);
 removeExact(head,locale.style);removeExact(body,locale.script);return tree;
}
function bilingualSitemap(xml){return xml.replace('</urlset>',[...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>([\s\S]*?)<\/url>/g)].map(m=>`<url><loc>${m[1].replace('https://perthpipepower.com.au/','https://perthpipepower.com.au/zh/')}</loc>${m[2]}</url>`).join('\n  ')+'\n</urlset>');}
// Bounded machine-only policy: retain the approved visible DOM and every old
// schema property. This never recaptures a complete page or relaxes a body diff.
function machineApproved(manifest){
 const change=require('../fixtures/machine-discovery-20261019.json'),next=structuredClone(manifest);
 for(const [file,previous]of Object.entries(next.pages)){
  const tree=JSON.parse(previous.dom),all=walk(tree),scripts=all.filter(n=>isEl(n,'script')&&attr(n,'type')==='application/ld+json');
  assert.equal(scripts.length,change.pages[file].length);
  scripts.forEach((n,i)=>{
   const before=JSON.parse(text(n)),after=JSON.parse(change.pages[file][i]);
   const list=v=>v['@graph']||(Array.isArray(v)?v:[v]);
   list(before).forEach((entity,index)=>{for(const [key,value]of Object.entries(entity))assert.deepEqual(list(after)[index][key],value,file+': existing schema '+key);});
   n[4]=[['text',change.pages[file][i]]];
  });
  if(file!=='privacy.html')childList(all.find(n=>isEl(n,'head'))).push(...parts('<link data-content-feed rel="alternate" type="application/rss+xml" href="https://perthpipepower.com.au/feed.xml"><link data-content-feed rel="alternate" type="application/feed+json" href="https://perthpipepower.com.au/feed.json">'));
  next.pages[file]=snapshotFromTree(tree,previous);
 }
 next.artifacts={...next.artifacts,...require('./external-cleanup-feeds.cjs')(change.feeds)};
 return next;
}
function customerNavigationApproved(manifest){
 const next=structuredClone(manifest),review=require('../fixtures/customer-paths-20261020.json');
 for(const edit of review.edits){
  const previous=next.pages[edit.file],tree=normalizeChromeWhitespace(JSON.parse(previous.dom));
  for(const op of edit.ops){
   if(op.op==='replace'){const parent=op.path.slice(0,-1).reduce((n,i)=>n[i],tree),key=op.path.at(-1);assert.deepEqual(parent[key],op.before,edit.file+': exact prior navigation node');parent[key]=structuredClone(op.after);}
   else {const list=op.path.reduce((n,i)=>n[i],tree);assert.deepEqual(list.slice(op.at,op.at+op.before.length),op.before,edit.file+': exact prior navigation fragment');list.splice(op.at,op.before.length,...structuredClone(op.after));}
  }
  next.pages[edit.file]=snapshotFromTree(tree,previous);
 }
 return next;
}
// User-approved phone-link normalization, applied after all reviewed copy.
// Exactly two prior anchor attributes on the leak guide; no DOM exemptions.
function phoneLinksApproved(manifest){
 const review=require('../fixtures/leak-phone-links-release-20261024.json'),next=structuredClone(manifest);
 const previous=next.pages[review.page];assert(previous,'reviewed leak guide exists');
 const tree=JSON.parse(previous.dom),links=walk(tree).filter(n=>isEl(n,'a')&&attr(n,'href')===review.from);
 assert.equal(links.length,review.changesPerPage,'exact prior leak-guide phone links');
 for(const link of links){assert.equal(readable(link),review.displayTelephone);link[3].find(a=>a[1]==='href')[2]=review.to;}
 next.pages[review.page]=snapshotFromTree(tree,previous);return next;
}
function compareApprovedOutput(root,manifest=approved){
 const {comparePublicOutput}=require('../../.build/site/baseline.mjs');
 const enhanced=['feed.json','feed.xml','zh/feed.json','zh/feed.xml'].some(file=>fs.existsSync(path.join(root,file)));
 const machine=enhanced?machineApproved(manifest):manifest;
 const customer=fs.existsSync(path.join(root,'about.html'))&&fs.readFileSync(path.join(root,'about.html'),'utf8').includes('data-customer-path-style');
 return comparePublicOutput(root,phoneLinksApproved(require('./customer-copy-approved.cjs').customerCopyApproved(customer?customerNavigationApproved(machine):machine))).filter(d=>{
  if(d.file==='sitemap.xml'&&d.field==='text')return d.actual!==d.expected&&d.actual!==bilingualSitemap(d.expected);
  if(d.file==='sitemap.xml'&&d.field==='sitemapUrls')return JSON.stringify(d.actual)!==JSON.stringify(d.expected)&&JSON.stringify(d.actual)!==JSON.stringify([...d.expected,...d.expected.map(u=>u.replace('https://perthpipepower.com.au/','https://perthpipepower.com.au/zh/'))]);
  if(d.field==='rawText'){const chrome=require('../fixtures/bilingual-chrome.json'),allowed=Object.values(chrome).map(s=>s.replace(/^<(?:style|script)[^>]*>/,'').replace(/<\/(?:style|script)>$/,''));return JSON.stringify(d.actual.filter(n=>!allowed.includes(n.content)))!==JSON.stringify(d.expected);}
  if(d.field!=='dom')return true;
  return JSON.stringify(normalizeChromeWhitespace(JSON.parse(d.expected)))!==JSON.stringify(normalizeChromeWhitespace(normalizeLocaleChrome(JSON.parse(d.actual),d.file)));
 }).map(d=>({...d,expected:d.field==='dom'?'approved exact DOM including shared chrome':d.expected,actual:d.field==='dom'?'unexpected DOM difference':d.actual}));
}
// Exact approved directory replacement; no other artifact or page exemption.
const llmsReview=require('../fixtures/llms-curated-20261020.json');
assert.equal(require('node:crypto').createHash('sha256').update(JSON.stringify(approved.artifacts['llms.txt'])).digest('hex'),llmsReview.previousArtifactJSONSha256,'prior reviewed llms identity');
approved.artifacts['llms.txt']=llmsReview.text;
for(const [file,edit]of Object.entries(require('../fixtures/customer-paths-20261020.json').assets)){
 assert.equal(approved.assets[file],edit.before,file+': exact previous tracking asset');approved.assets[file]=edit.after;
}
const readingReview=require('../fixtures/service-reading-release-20261020.json');
for(const [file,hash]of Object.entries(readingReview.afterAssets)){
 assert.equal(approved.assets[file],readingReview.beforeAssets[file],file+': exact pre-release asset');approved.assets[file]=hash;
}
// Customer-authorised removal of six external reference destinations. Exact
// prior fragments only; the rest of each page keeps its original contract.
for(const edit of require('../fixtures/external-links-cleanup-20261020.json').edits){
 const previous=approved.pages[edit.file],tree=JSON.parse(previous.dom);
 replaceFragment(tree,edit.before,edit.after,edit.file,'external-reference cleanup');
 approved.pages[edit.file]=snapshotFromTree(tree,previous);
}
// Approved UI release: change one stylesheet asset and its exact URL version.
const uiLayoutReview=require('../fixtures/ui-layout-release-20261021.json');
assert.equal(approved.assets['field-design.css'],uiLayoutReview.beforeCssSha,'previous reviewed UI asset');
approved.assets['field-design.css']=uiLayoutReview.afterCssSha;
for(const [file,previous]of Object.entries(approved.pages)){
 const edit=uiLayoutReview.versionChanges[file];assert(edit,file+': exact stylesheet version change');
 const tree=JSON.parse(previous.dom),links=walk(tree).filter(n=>isEl(n,'link')&&attr(n,'href')===edit.before);
 assert.equal(links.length,1,file+': one prior UI stylesheet');
 const href=links[0][3].find(a=>a[1]==='href');assert(href,file+': stylesheet href');href[2]=edit.after;
 approved.pages[file]=snapshotFromTree(tree,previous);
}
module.exports={approved,beforeCoherentPresentation,beforeEnquirySidebar,policy,compareApprovedOutput,normalizeChromeWhitespace,normalizeLocaleChrome,approvedHeader,reviewedCopy};
