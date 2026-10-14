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
function approvedHeader(file){
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
 return header;
}
const approved=structuredClone(frozen);
assert.deepEqual(Object.keys(chrome.current).sort(),Object.keys(frozen.pages).sort(),'chrome contract covers all 48 routes');
for(const [file,original]of Object.entries(approved.pages)){
 const tree=JSON.parse(original.dom),body=bodyChildren(tree),headers=body.filter(n=>isEl(n,'header')&&attr(n,'class')==='site-header');
 assert.equal(headers.length,1,file+': exact top-level header replacement boundary');
 body[body.indexOf(headers[0])]=approvedHeader(file);
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
Object.assign(approved.assets,policy.runtimeHashes,homeCorrection.runtimeHashes);
for(const change of policy.headStylesheets){
 const original=approved.pages[change.file],tree=JSON.parse(original.dom),head=walk(tree).find(n=>isEl(n,'head'));
 const i=head[4].findIndex(n=>isEl(n,'link')&&attr(n,'rel')==='stylesheet'&&attr(n,'href')===change.after);
 assert(i>=0,'privacy stylesheet insertion has exact historical anchor');
 head[4].splice(i+1,0,['text','\n    '],...parts(`<link rel="stylesheet" href="${change.href}">`));
 approved.pages[change.file]=snapshotFromTree(tree,original);
}
function compareApprovedOutput(root,manifest=approved){
 const {comparePublicOutput}=require('../../.build/site/baseline.mjs');
 return comparePublicOutput(root,manifest).filter(d=>{
  if(d.field!=='dom')return true;
  return JSON.stringify(normalizeChromeWhitespace(JSON.parse(d.expected)))!==JSON.stringify(normalizeChromeWhitespace(JSON.parse(d.actual)));
 }).map(d=>({...d,expected:d.field==='dom'?'approved exact DOM including shared chrome':d.expected,actual:d.field==='dom'?'unexpected DOM difference':d.actual}));
}
module.exports={approved,policy,compareApprovedOutput,normalizeChromeWhitespace,approvedHeader,reviewedCopy};
