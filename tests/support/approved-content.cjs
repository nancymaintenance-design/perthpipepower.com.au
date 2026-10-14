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
module.exports={approved,policy,compareApprovedOutput,normalizeChromeWhitespace,approvedHeader};
