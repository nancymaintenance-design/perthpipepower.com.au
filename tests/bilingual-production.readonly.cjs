// Explicit post-release GET-only verification. Never submits an enquiry.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const origin='https://perthpipepower.com.au';
const sha=s=>crypto.createHash('sha256').update(s.replace(/\r\n/g,'\n')).digest('hex');
async function read(route){const r=await fetch(origin+route,{headers:{'Cache-Control':'no-cache'},signal:AbortSignal.timeout(30000)});return {status:r.status,text:await r.text()};}
(async()=>{
 if(process.argv[2]!=='--production')throw Error('Explicit --production required');
 const files=Object.keys(require('./fixtures/ts-migration/baseline.json').pages),routes=files.flatMap(f=>[{file:f,route:f==='index.html'?'/':'/'+f},{file:'zh/'+f,route:f==='index.html'?'/zh/':'/zh/'+f}]);
 const failures=[];let checked=0;
 for(let start=0;start<routes.length;start+=6)await Promise.all(routes.slice(start,start+6).map(async({file,route})=>{try{const r=await read(route);assert.equal(r.status,200,route);assert.equal(sha(r.text),sha(fs.readFileSync(path.join('dist',file),'utf8')),route+' exact approved HTML');checked++;}catch(e){failures.push(String(e));}}));
 const sitemap=await read('/sitemap.xml');assert.equal(sitemap.status,200);assert.equal((sitemap.text.match(/<loc>/g)||[]).length,94);assert.equal(sha(sitemap.text),sha(fs.readFileSync('dist/sitemap.xml','utf8')));
 for(const file of ['contact-form.js','contact-prefill.js','navigation.js','site.js','suburb-search.js']){const r=await read('/'+file+'?locale=zh-v1');assert.equal(r.status,200);assert.equal(sha(r.text),sha(fs.readFileSync(path.join('dist',file),'utf8')),file);}
 for(const route of ['/__editor/','/.local-editor/','/site/content/locales/zh-Hans/shared.json','/.superpowers/sdd/2026-10-16-bilingual-local-editor/translations/candidate.json']){const r=await read(route);assert.equal(r.status,404,route+' stays private');}
 assert.deepEqual(failures,[]);assert.equal(checked,96);
 console.log(JSON.stringify({origin,checkedAt:new Date().toISOString(),publicPages:checked,sitemapUrls:94,localizedScripts:5,privateRoutes404:4,realEnquiries:0},null,2));
})().catch(e=>{console.error(e);process.exitCode=1});
