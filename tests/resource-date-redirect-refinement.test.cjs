const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const {SOURCE_ROOT,resolvePublicRoot}=require('./support/public-paths.cjs');
const root=resolvePublicRoot(),read=file=>fs.readFileSync(path.join(root,file),'utf8');
const retained=['insights.html','news.html','service-areas.html','lighting-power-points-perth.html'];
test('all 48 routes load each changed shared script once with the new cache identity',()=>{
 for(const file of Object.keys(require('./fixtures/ts-migration/baseline.json').pages)){
  const sources=Array.from(read(file).matchAll(/<script[^>]*src="([^"]+)"/g),m=>m[1]);
  for(const script of ['site.js','navigation.js','booking-context.js','contact-prefill.js']){
   const matches=sources.filter(src=>src.split('?')[0]===script);assert.deepEqual(matches,[script+'?v=20261015'],file+': '+script+' once, current version');
  }
 }
});
test('canonical pages share a single cache identity per stylesheet',()=>{
 const identities=new Map();
 for(const file of Object.keys(require('./fixtures/ts-migration/baseline.json').pages))for(const [,href]of read(file).matchAll(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"/g)){
  const url=new URL(href,'https://perthpipepower.com.au/'),key=url.pathname;
  if(!identities.has(key))identities.set(key,new Set());identities.get(key).add(url.href);
 }
 for(const [file,values]of identities)assert.equal(values.size,1,file+': one response is reusable across routes');
});
test('substantive routes are dated while minor headings and coverage wording retain their prior date',()=>{
 const dates=require('../data/sitemap-content-dates.json');
 for(const [file,entry]of Object.entries(dates))assert.equal(entry.lastmod,retained.includes(file)?'2026-10-13':'2026-10-15',file);
 const xml=read('sitemap.xml');
 for(const [,body]of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)){
  const file=new URL(body.match(/<loc>([^<]+)/)[1]).pathname.replace(/^\/(?:zh\/)?/,'')||'index.html';assert(body.includes('<lastmod>'+dates[file].lastmod+'</lastmod>'),file);
 }
 for(const [file,entry]of Object.entries(require('../data/editorial-content-dates.json'))){
  const html=read(file);assert.equal(entry.lastmod,'2026-10-15',file);assert(html.includes('datetime="2026-10-15">15 October 2026</time>'),file);
  assert(html.includes('"dateModified": "2026-10-15"'),file);assert(!html.includes('"datePublished"'),file+': unknown publication date stays absent');
 }
});
test('both maintenance manifests fingerprint final rendered LF-normalized canonical HTML',()=>{
 for(const name of ['sitemap-content-dates','editorial-content-dates'])for(const [file,entry]of Object.entries(require('../data/'+name+'.json'))){
  assert.equal(entry.sha256,crypto.createHash('sha256').update(read(file).replace(/\r\n/g,'\n')).digest('hex'),name+': '+file);
 }
});
test('all existing suburb aliases have explicit permanent config destinations with original names',()=>{
 const config=require('../vercel.json'),suburbs=require('../data/perth-suburbs.json');
 const aliases=config.redirects.filter(r=>r.source.startsWith('/service-areas/'));assert.equal(aliases.length,126);
 for(const s of suburbs){const matches=aliases.filter(r=>r.source==='/service-areas/'+s.slug+'.html');assert.equal(matches.length,1,s.slug);assert.deepEqual(matches[0],{source:'/service-areas/'+s.slug+'.html',destination:'/contact.html?suburb='+encodeURIComponent(s.name),permanent:true});assert(!config.redirects.some(r=>r.source===new URL(matches[0].destination,'https://example.test').pathname));assert(fs.existsSync(path.join(root,'service-areas',s.slug+'.html')));}
});
