// Immutable migration evidence + reviewed exact fragment edits. No Git, root
// generated HTML, current dist capture, or permissive whole-page exemptions.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {parseFragment}=require('parse5');
const frozen=require('../fixtures/ts-migration/baseline.json');
const policies=Object.keys(frozen.pages).map(f=>require('../fixtures/content-navigation-repair/'+f+'.json'));
const policy={changes:policies.flatMap(p=>p.changes),headStylesheets:policies.flatMap(p=>p.headStylesheets||[]),runtimeHashes:policies[0].runtimeHashes};
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
function withoutHeader(tree){
 function visit(n){const c=childList(n);for(let i=c.length-1;i>=0;i--){const x=c[i];if(isEl(x,'header')||isEl(x,'div')&&attr(x,'class')==='utility'){c.splice(i,1);continue;}visit(x);}
 // Header variants differ only in inter-block whitespace. Keep all main,
 // footer, raw text and inline spacing byte-sensitive in the DOM comparison.
 if(isEl(n,'body')){const start=c.findIndex(x=>isEl(x,'a')&&attr(x,'class')==='skip'),end=c.findIndex(x=>isEl(x,'main'));if(start>=0&&end>start){c.splice(start+1,end-start-1);for(let i=start-1;i>=0;i--)if(c[i][0]==='text'&&!c[i][1].trim())c.splice(i,1);}}}
 visit(tree);return tree;
}
const approved=structuredClone(frozen);
for(const record of policy.changes){const original=approved.pages[record.file],tree=JSON.parse(original.dom);
 for(const change of record.fragments)replaceFragment(tree,change.before,change.after,record.file,change.region);
 for(const change of record.schemas){const script=walk(tree).filter(n=>isEl(n,'script')&&attr(n,'type')==='application/ld+json')[change.index];assert.equal(text(script),change.before,record.file+': schema provenance');script[4]=[['text',change.after]];}
 approved.pages[record.file]=snapshotFromTree(tree,original);
}
Object.assign(approved.assets,policy.runtimeHashes);
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
  return JSON.stringify(withoutHeader(JSON.parse(d.expected)))!==JSON.stringify(withoutHeader(JSON.parse(d.actual)));
 }).map(d=>({...d,expected:d.field==='dom'?'approved exact content outside shared header':d.expected,actual:d.field==='dom'?'unexpected DOM difference':d.actual}));
}
module.exports={approved,policy,compareApprovedOutput,withoutHeader};
