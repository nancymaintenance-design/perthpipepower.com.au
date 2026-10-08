const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),pages=Object.keys(require('../data/service-presentation.cjs'));
const clean=s=>s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
for(const file of pages){
 const html=fs.readFileSync(path.join(root,file),'utf8'),main=html.match(/<main\b[^>]*>[\s\S]*?<\/main>/)[0];
 assert.equal((main.match(/<section\b/g)||[]).length,5,file+' should present five coherent main sections');
 assert.equal((main.match(/class="[^"]*\bfaq\b/g)||[]).length,1,file+' should have one FAQ group');
 assert(!main.includes('service-detail-grid'),file+' should not repeat link-card walls');
 assert(!html.includes('src="service-page-depth.js"'),file+' should not append legacy content at runtime');
 const h1=clean(main.match(/<h1[^>]*>[\s\S]*?<\/h1>/)[0]);assert(/repair|detection|connection|electrical services/i.test(h1)&&/Perth/.test(h1),file+' needs a commercial service headline');
 assert(main.includes('href="tel:0413477667"')&&main.includes('href="contact.html"'),file+' needs direct booking');
 assert(clean(main).split(/\s+/).length>=550,file+' needs substantial service content');
 const title=html.match(/<title>([^<]+)<\/title>/)[1];assert.equal(html.match(/property="og:title"\s+content="([^"]+)"/)[1],title);
 for(const m of html.matchAll(/type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)){const data=JSON.parse(m[1]);const walk=x=>{if(!x||typeof x!=='object')return;if(x['@type']==='FAQPage')for(const q of x.mainEntity){assert(clean(main).includes(clean(q.name)));assert(clean(main).includes(clean(q.acceptedAnswer.text)));}for(const v of Object.values(x))if(typeof v==='object')Array.isArray(v)?v.forEach(walk):walk(v);};walk(data);}
}
console.log('PASS: 12 commercial service pages, five main sections each, one matching FAQ, native booking and substantial topic content.');
