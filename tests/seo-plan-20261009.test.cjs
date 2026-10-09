const assert=require('node:assert/strict'),fs=require('node:fs');
const read=f=>fs.readFileSync(require('node:path').join(__dirname,'..',f),'utf8');
// Missing contextual links breaks the region-to-service booking journey even when global menus exist.
for(const file of ['perth-cbd-inner-suburbs.html','northern-suburbs.html','southern-suburbs.html','eastern-suburbs.html','western-suburbs.html','perth-hills-swan-valley.html']){
 const html=read(file),main=html.match(/<main\b[\s\S]*?<\/main>/)[0];
 const services=new Set([...main.matchAll(/href="([^"#?]+-perth\.html)"/g)].map(m=>m[1]));
 assert(services.size>=4,file+' has relevant crawlable services in its main content');
 for(const service of services)assert(fs.existsSync(require('node:path').join(__dirname,'..',service)));
 assert(main.includes('contact.html?suburb='),file+' retains a prefilled locality booking path');
 assert((main.match(/<section\b/g)||[]).length<=4,file+' uses continuous service content instead of fragmented panels');
}
const feed=JSON.parse(read('ai-content.json'));
assert.equal(feed.servicePages?.length,12,'AI summary links the actual twelve service owners');
for(const item of feed.servicePages){assert(item.url.startsWith('https://perthpipepower.com.au/'));assert(read(new URL(item.url).pathname.slice(1)).includes('href="contact.html"'));}
for(const file of Object.keys(require('../data/service-commercial-copy.cjs'))){
 const html=read(file),description=html.match(/name="description"\s+content="([^"]+)"/)[1];
 assert(description.length<=180,file+' has a concise service summary, not an appended paragraph');
 const img=html.match(/<img[^>]*class="service-editorial-image"[^>]*>/)?.[0];
 if(img)assert(img.includes('srcset='),file+' sends a suitable small service image');
 const serviceNodes=[];const walk=x=>{if(!x||typeof x!=='object')return;if(x['@type']==='Service')serviceNodes.push(x);for(const v of Object.values(x))if(typeof v==='object')Array.isArray(v)?v.forEach(walk):walk(v);};
 for(const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g))walk(JSON.parse(m[1]));
 const name=html.match(/<h1[^>]*>([^<]+)<\/h1>/)[1].replace(/&amp;/g,'&');
 for(const service of serviceNodes){assert.equal(service.name,name);assert.equal(service.description,description.replace(/&amp;/g,'&'));}
}
console.log('PASS: regional service paths, prefilled booking, twelve machine-readable service URLs, concise descriptions and responsive service images.');
