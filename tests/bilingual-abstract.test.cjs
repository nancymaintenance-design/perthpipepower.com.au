const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('fs'),{parse}=require('parse5');
const walk=n=>[n,...(n.childNodes||[]).flatMap(walk)],text=n=>n.nodeName==='#text'?n.value:(n.childNodes||[]).map(text).join(''),attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value,normal=s=>s.replace(/\s+/g,' ').trim();
const site=require('../.build/site/content/pages.mjs').loadSiteData();
for(const page of site.pages.filter(p=>p.kind==='article'))for(const prefix of ['','zh/'])test(prefix+page.file+': structured abstract matches the visible summary in the same language',()=>{
 const nodes=walk(parse(fs.readFileSync('dist/'+prefix+page.file,'utf8')));
 const aside=nodes.find(n=>n.tagName==='aside'&&(attr(n,'class')||'').split(/\s+/).includes('article-summary'));assert(aside);
 const paragraph=aside.childNodes.find(n=>n.tagName==='p');assert(paragraph);
 const article=nodes.filter(n=>n.tagName==='script'&&attr(n,'type')==='application/ld+json').flatMap(n=>JSON.parse(text(n))['@graph']||[]).find(n=>['Article','NewsArticle','BlogPosting'].includes(n['@type']));assert(article);
 assert.equal(normal(article.abstract),normal(text(paragraph)));
});
