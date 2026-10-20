const {test}=require('node:test'),assert=require('node:assert/strict');
const {loadSiteData}=require('../.build/site/content/pages.mjs');
const {loadApprovedLocales}=require('../.build/site/localization/approved.mjs');
const {renderBilingualSite}=require('../.build/site/build/render-bilingual.mjs');
const {parse}=require('parse5');
const site=loadSiteData(),output=renderBilingualSite(site,loadApprovedLocales('',site));
const expected=['index.html','plumbing.html','electrical.html','blocked-drains-perth.html','water-leak-detection-perth.html','hot-water-problems-perth.html','power-faults-perth.html','safety-switch-tripping-perth.html','lighting-installation-perth.html','power-points-perth.html','property-management.html','service-areas.html','about.html','contact.html','insights-reporting-a-plumbing-leak.html','insights-safety-switch-keeps-tripping.html','insights-tenant-property-manager-maintenance-handover.html'];
const walk=n=>[n,...(n.childNodes||[]).flatMap(walk)],attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const links=()=>[...output.get('llms.txt').matchAll(/^- \[([^\]]+)\]\((https:\/\/[^)]+)\): (.+)$/gm)];
test('llms is a curated bilingual directory, not a one-language sitemap dump',()=>{
 const value=output.get('llms.txt');
 assert.equal((value.match(/^# /gm)||[]).length,1);
 assert.match(value,/^> .+/m);
 assert.equal(links().length,34);
 assert.equal((value.match(/^- /gm)||[]).length,34,'every entry has a descriptive summary');
 assert.equal(new Set(links().map(m=>m[2])).size,34);
 assert(!output.has('llms-full.txt'));
});
test('every listed language URL has readable, indexable paired content and a self canonical',()=>{
 const urls=links().map(m=>m[2]);
 const expectedURLs=expected.flatMap(f=>['','zh/'].map(prefix=>'https://perthpipepower.com.au/'+prefix+(f==='index.html'?'':f)));
 assert.deepEqual([...urls].sort(),expectedURLs.sort());
 for(const url of urls){
  const u=new URL(url),file=(u.pathname==='/'?'index.html':u.pathname==='/zh/'?'zh/index.html':u.pathname.slice(1));
  const nodes=walk(parse(output.get(file))),zh=file.startsWith('zh/');
  assert.equal(attr(nodes.find(n=>n.tagName==='html'),'lang'),zh?'zh-Hans':'en-AU');
  assert.equal(attr(nodes.find(n=>n.tagName==='link'&&attr(n,'rel')==='canonical'),'href'),url);
  assert(nodes.some(n=>n.tagName==='main'));
  assert(!nodes.some(n=>n.tagName==='meta'&&attr(n,'name')==='robots'&&/noindex/i.test(attr(n,'content')||'')));
  assert(nodes.some(n=>n.tagName==='link'&&attr(n,'hreflang')===(zh?'en-AU':'zh-Hans')&&urls.includes(attr(n,'href'))));
  assert(output.get('sitemap.xml').includes('<loc>'+url+'</loc>'));
 }
});
test('local llms GET is UTF-8 Markdown and does not enable form or private-data access',async t=>{
 const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),{spawn}=require('node:child_process');
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'ppp-llms-preview-'));
 fs.writeFileSync(path.join(root,'llms.txt'),output.get('llms.txt'));
 const child=spawn('python',['scripts/preview-dist.py','--root',root,'--config','vercel.json','--port','0'],{windowsHide:true});
 t.after(()=>{child.kill();assert(root.startsWith(os.tmpdir()+path.sep));fs.rmSync(root,{recursive:true,force:true});});
 const origin=await new Promise((resolve,reject)=>{child.stdout.on('data',b=>{const m=String(b).match(/http:\/\/127\.0\.0\.1:\d+/);if(m)resolve(m[0]);});child.once('error',reject);child.once('exit',c=>reject(Error('preview exited '+c)));});
 for(const language of ['en-AU','zh-CN']){
  const r=await fetch(origin+'/llms.txt',{headers:{'Accept-Language':language}});
  assert.equal(r.status,200);assert.match(r.headers.get('content-type'),/^text\/plain;\s*charset=utf-8$/i);
  assert.equal(await r.text(),output.get('llms.txt'));
 }
 assert.equal((await fetch(origin+'/api/contact')).status,404);
 assert.equal((await fetch(origin+'/llms.txt',{method:'POST'})).status,403);
});
