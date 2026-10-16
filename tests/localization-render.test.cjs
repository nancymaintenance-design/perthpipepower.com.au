const {test}=require('node:test');
const assert=require('node:assert/strict');
test('localized rendering requires complete fresh source-bound plain translations',async()=>{
 const {renderLocalizedPage,requiredTranslations}=await import('../.build/site/localization/render.mjs');
 const {loadSiteData}=await import('../.build/site/content/pages.mjs');
 const {pageHash}=await import('../.build/site/localization/fields.mjs');
 const site=loadSiteData(),page=site.pages.find(p=>p.file==='tap-mixer-repairs-perth.html');
 const values=Object.fromEntries(requiredTranslations(page,site).map(row=>[row.key,'中文 '+row.source]));
 const bundle={schemaVersion:1,locale:'zh-Hans',baseHash:pageHash(page),values};
 const html=renderLocalizedPage(page,site,{locale:'zh-Hans',bundle,preview:true});
 assert.match(html,/<html[^>]+lang="zh-Hans"/);
 assert.match(html,/rel="canonical" href="https:\/\/perthpipepower.com.au\/zh\/tap-mixer-repairs-perth.html"/);
 assert.match(html,/hreflang="en-AU"/);assert.match(html,/hreflang="zh-Hans"/);assert.match(html,/hreflang="x-default"/);
 assert.match(html,/class="language-switch"/);
 assert.match(html,/src="\/contact-form.js\?locale=zh-v1"/);
 assert.match(html,/href="tel:0413477667"/);
 const {parse}=require('parse5');
 const options=text=>{const walk=n=>[n,...(n.childNodes||[]).flatMap(walk)];const read=n=>n.nodeName==='#text'?n.value:(n.childNodes||[]).map(read).join('');return walk(parse(text)).filter(n=>n.tagName==='option').map(n=>n.attrs.find(a=>a.name==='value')?.value??read(n));};
 const {renderPage}=await import('../.build/site/templates/page.mjs');
 assert.deepEqual(options(html),options(renderPage(page,site)),'translated service labels retain original submission values');
 const schemas=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(m=>JSON.parse(m[1])['@graph']||[]);
 assert.equal(schemas.find(s=>s['@type']==='WebSite').url,'https://perthpipepower.com.au/zh/');
 assert.equal(schemas.find(s=>s['@type']==='WebPage').isPartOf['@id'],'https://perthpipepower.com.au/zh/#website');
 assert.doesNotMatch(html,/src="images\//);
 assert.throws(()=>renderLocalizedPage(page,site,{locale:'zh-Hans',bundle:{...bundle,values:{}},preview:false}),/Missing translation/);
 assert.throws(()=>renderLocalizedPage(page,site,{locale:'zh-Hans',bundle:{...bundle,baseHash:'stale'},preview:false}),/Stale/);
 values[requiredTranslations(page,site)[0].key]='<script>bad</script>';
 const escaped=renderLocalizedPage(page,site,{locale:'zh-Hans',bundle,preview:true});
 assert.match(escaped,/&lt;script&gt;bad&lt;\/script&gt;/);
});
test('English rendering only adds language entry and reciprocal metadata',async()=>{
 const {renderLocalizedPage}=await import('../.build/site/localization/render.mjs');
 const {loadSiteData}=await import('../.build/site/content/pages.mjs');
 const {renderPage}=await import('../.build/site/templates/page.mjs');
 const site=loadSiteData();
 for(const page of site.pages){
  const result=renderLocalizedPage(page,site,{locale:'en-AU',preview:false});
  assert.match(result,/class="language-switch"[^>]*href="\/zh\//);
  assert.match(result,/lang="en-AU"/);
  assert.equal(result.replace(/<link data-locale-alternate[^>]+>/g,'').replace(/<style data-locale-style>[\s\S]*?<\/style>/,'').replace(/<li data-locale-entry>[\s\S]*?<\/li>/,'').replace(/<script data-locale-switch>[\s\S]*?<\/script>/,''),renderPage(page,site));
 }
});
