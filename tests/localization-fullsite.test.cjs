const {test}=require('node:test'),assert=require('node:assert/strict');
const {parse}=require('parse5');
const walk=n=>[n,...(n.childNodes||[]).flatMap(walk)],attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes||[]).map(text).join('');
const readable=n=>text(n).replace(/\s+/g,' ').trim();
test('all 48 approved Chinese pages retain structure, facts and matching visible FAQ schema',async()=>{
 const {loadSiteData}=await import('../.build/site/content/pages.mjs');
 const {loadApprovedLocales}=await import('../.build/site/localization/approved.mjs');
 const {renderLocalizedPage}=await import('../.build/site/localization/render.mjs');
 const {renderPage}=await import('../.build/site/templates/page.mjs');
 const site=loadSiteData(),bundles=loadApprovedLocales(process.cwd(),site);
 assert.equal(bundles.length,48,'no silent English fallback on Chinese routes');
 for(const page of site.pages){
  const en=walk(parse(renderPage(page,site))),zh=walk(parse(renderLocalizedPage(page,site,{locale:'zh-Hans',bundle:bundles.find(b=>b.pageId===page.file),preview:false})));
  const elements=(nodes,tag)=>nodes.filter(n=>n.tagName===tag);
  for(const tag of ['h1','h2','h3','img','form','details','footer','iframe'])assert.equal(elements(zh,tag).length,elements(en,tag).length,page.file+': '+tag+' parity');
  const protectedLinks=nodes=>elements(nodes,'a').map(n=>attr(n,'href')).filter(h=>/^(?:tel:|mailto:|https:\/\/(?:www\.)?google\.com\/maps)/.test(h));
  assert.deepEqual(protectedLinks(zh),protectedLinks(en),page.file+': phone/email/maps unchanged');
  const submittedValues=nodes=>elements(nodes,'option').map(n=>attr(n,'value')??text(n));assert.deepEqual(submittedValues(zh),submittedValues(en),page.file+': service payload unchanged');
  const faqs=elements(zh,'details').map(n=>{const summary=n.childNodes.find(c=>c.tagName==='summary');return {question:readable(summary),answer:n.childNodes.filter(c=>c!==summary).map(text).join('').replace(/\s+/g,' ').trim()};});
  const schemas=elements(zh,'script').filter(n=>attr(n,'type')==='application/ld+json').flatMap(n=>{const value=JSON.parse(text(n));return value['@graph']||[value];});
  for(const schema of schemas.filter(s=>s['@type']==='FAQPage'))assert.deepEqual(schema.mainEntity.map(f=>({question:f.name,answer:f.acceptedAnswer.text})),faqs,page.file+': visible FAQ source');
  for(const n of elements(zh,'a')){const href=attr(n,'href')||'';if(/^(?:tel:|mailto:|#|https?:\/\/)/.test(href)||attr(n,'class')==='language-switch')continue;const file=href.split(/[?#]/)[0];if(file.endsWith('.html')&&site.pages.some(p=>file.endsWith('/'+p.file)))assert(file.startsWith('/zh/'),page.file+': Chinese internal route');}
  const h1=readable(elements(zh,'h1')[0]);assert(/[\u3400-\u9fff]/.test(h1),page.file+': Chinese H1');
 }
});
