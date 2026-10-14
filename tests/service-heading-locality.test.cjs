const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const {parse}=require('parse5'),{loadSiteData}=require('../.build/site/content/pages.mjs');
const walk=n=>[n,...(n.childNodes||[]).flatMap(walk)],text=n=>n.nodeName==='#text'?n.value:(n.childNodes||[]).map(text).join('');
test('all service secondary headings avoid repeated city modifiers while primary search titles remain intact',()=>{
 const baseline=require('./fixtures/ts-migration/baseline.json');
 for(const p of loadSiteData().pages.filter(p=>['service','serviceHub'].includes(p.kind))){
  const nodes=walk(parse(fs.readFileSync('dist/'+p.file,'utf8'))),main=nodes.find(n=>n.tagName==='main');
  for(const n of walk(main).filter(n=>/^h[2-6]$/.test(n.tagName)))assert(!/\bperth\b/i.test(text(n)),p.file+': '+text(n));
  assert.equal(text(nodes.find(n=>n.tagName==='title')),baseline.pages[p.file].title,p.file+': SEO title retained');
  const original=baseline.pages[p.file].headings.find(h=>h.level===1).text;
  assert.equal(text(nodes.find(n=>n.tagName==='h1')).replace(/\s+/g,' ').trim(),original,p.file+': H1 retained');
 }
});
