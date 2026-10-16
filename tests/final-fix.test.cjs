const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),{parse}=require('parse5');
const walk=n=>[n,...(n.childNodes||[]).flatMap(walk)];
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes||[]).map(text).join('');
// Catches either repeated overview tab stop, while keeping the useful overview
// and all the other independently enumerated destinations in each actual list.
for(const [id,wanted]of [
 ['service-scope',['plumbing.html','water-leak-detection-perth.html','tap-mixer-repairs-perth.html','hot-water-problems-perth.html','service-areas.html']],
 ['service-faq',['plumbing.html','water-leak-detection-perth.html','tap-mixer-repairs-perth.html','hot-water-problems-perth.html']],
])test('water-pressure '+id+' navigation keeps one overview and its relevant routes',()=>{
 const nodes=walk(parse(fs.readFileSync(path.join(__dirname,'../dist/water-pressure-perth.html'),'utf8')));
 const anchor=nodes.find(n=>attr(n,'id')===id);
 assert(anchor,id+': chapter remains');
 const section=anchor.tagName==='section'?anchor:nodes.find(n=>n.tagName==='section'&&walk(n).includes(anchor));
 const lists=walk(section).filter(n=>n.tagName==='ul'&&attr(n,'class')==='intent-links');
 assert.equal(lists.length,1,id+': one actual navigation list');
 const links=walk(lists[0]).filter(n=>n.tagName==='a');
 assert.deepEqual(links.map(n=>attr(n,'href')),wanted,id+': no duplicated overview or removed useful navigation');
 assert.equal(text(links[0]),'plumbing services');
});
