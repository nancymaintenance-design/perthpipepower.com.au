const {test}=require('node:test'),assert=require('node:assert/strict');
const {parse}=require('parse5');
const {loadSiteData}=require('../.build/site/content/pages.mjs');
const {loadApprovedLocales}=require('../.build/site/localization/approved.mjs');
const {renderBilingualSite}=require('../.build/site/build/render-bilingual.mjs');
const {renderLocalizedPage}=require('../.build/site/localization/render.mjs');
const site=loadSiteData(),bundles=loadApprovedLocales('',site),output=renderBilingualSite(site,bundles);
const all=n=>[n,...(n.childNodes||[]).flatMap(all)],attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes||[]).map(text).join('');
const graphs=html=>all(parse(html)).filter(n=>n.tagName==='script'&&attr(n,'type')==='application/ld+json').flatMap(n=>{const v=JSON.parse(text(n));return v['@graph']||[v];});
test('both language feeds expose real page content with stable canonical IDs and relevant tags',()=>{
 for(const prefix of ['','zh/']){
  assert(output.has(prefix+'feed.json'),'JSON Feed must be generated');
  const feed=JSON.parse(output.get(prefix+'feed.json'));
  assert.equal(feed.version,'https://jsonfeed.org/version/1.1');
  assert.equal(feed.language,prefix?'zh-Hans':'en-AU');
  assert.equal(feed.items.length,47);
  const item=feed.items.find(i=>i.url.endsWith('/tap-mixer-repairs-perth.html'));
  assert.equal(item.id,'https://perthpipepower.com.au/'+prefix+'tap-mixer-repairs-perth.html');
  assert.match(item.content_text,prefix?/水龙头/:/dripping taps/);
  assert(item.tags.length>0&&item.tags.length<=6);
  assert(item.tags.every(t=>item.content_text.includes(t)));
  assert(!feed.items.some(i=>i.url.endsWith('/privacy.html')));
  const rss=output.get(prefix+'feed.xml');
  assert(rss.includes('<rss ')&&rss.includes('<content:encoded>'));
  assert.equal((rss.match(/<item>/g)||[]).length,47);
  assert(!output.has(prefix+'atom.xml'));
 }
});
test('service graph links its existing main entity and uses visible terms rather than unrelated keywords',()=>{
 for(const prefix of ['','zh/']){
  const html=output.get(prefix+'tap-mixer-repairs-perth.html'),nodes=graphs(html);
  const page=nodes.find(n=>n['@type']==='WebPage'),service=nodes.find(n=>n['@type']==='Service');
  assert.equal(page.mainEntity?.['@id'],service['@id']);
  assert(Array.isArray(page.keywords)&&page.keywords.length<=6);
  const visible=text(all(parse(html)).find(n=>n.tagName==='main')).replace(/\s+/g,' ');
  assert(page.keywords.every(k=>visible.includes(k)));
  assert(!JSON.stringify(page.keywords).match(/roofing|Adelaide|carpentry/i));
  assert(nodes.find(n=>n['@id']==='https://perthpipepower.com.au/#business').description);
 }
});
test('machine discovery leaves every other HTML byte and every existing schema property unchanged',()=>{
 const strip=html=>html.replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g,'').replace(/<link data-content-feed[^>]+>/g,'');
 for(const page of site.pages)for(const locale of ['en-AU','zh-Hans']){
  const prefix=locale==='en-AU'?'':'zh/';
  const before=renderLocalizedPage(page,site,{locale,bundle:bundles.find(b=>b.pageId===page.file),preview:false}),after=output.get(prefix+page.file);
  assert.equal(strip(after),strip(before),prefix+page.file);
  const old=graphs(before),next=graphs(after);
  assert.equal(next.length,old.length,'no second graph or duplicate entity');
  old.forEach((n,i)=>{
   for(const [k,v]of Object.entries(n))assert.deepEqual(next[i][k],v,prefix+page.file+': preserve '+k);
   const allowed=n['@type']==='LocalBusiness'?['description','hasOfferCatalog']:n['@type']==='WebPage'?['keywords','mainEntity']:['Article','BlogPosting','NewsArticle'].includes(n['@type'])?['keywords']:n['@type']==='Service'?['category']:[];
   assert(Object.keys(next[i]).filter(k=>!Object.hasOwn(n,k)).every(k=>allowed.includes(k)),'only approved semantic properties may be added');
  });
  if(page.file!=='privacy.html')assert.equal((after.match(/<link data-content-feed/g)||[]).length,2);
 }
});
test('preview serves only approved feed JSON paths with the correct feed media types',async t=>{
 const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),{spawn}=require('node:child_process');
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'ppp-feed-preview-'));
 fs.mkdirSync(path.join(root,'zh'));
 for(const f of ['feed.json','zh/feed.json','feed.xml','zh/feed.xml','private.json'])fs.writeFileSync(path.join(root,f),f.endsWith('.json')?'{}':'<rss/>');
 const child=spawn('python',['scripts/preview-dist.py','--root',root,'--config','vercel.json','--port','0'],{cwd:path.resolve(__dirname,'..'),windowsHide:true});
 t.after(()=>{child.kill();assert(path.resolve(root).startsWith(path.resolve(os.tmpdir())+path.sep));fs.rmSync(root,{recursive:true,force:true});});
 const origin=await new Promise((resolve,reject)=>{child.stdout.on('data',b=>{const url=String(b).match(/http:\/\/127\.0\.0\.1:\d+/);if(url)resolve(url[0]);});child.once('error',reject);child.once('exit',code=>reject(Error('preview exited '+code)));});
 for(const f of ['feed.json','zh/feed.json','feed.xml','zh/feed.xml']){
  const r=await fetch(origin+'/'+f);assert.equal(r.status,200,f);
  assert.match(r.headers.get('content-type'),f.endsWith('.json')?/application\/feed\+json/:/application\/rss\+xml/);
 }
 assert.equal((await fetch(origin+'/private.json')).status,404);
 assert.equal((await fetch(origin+'/feed.json',{method:'POST'})).status,403);
});
