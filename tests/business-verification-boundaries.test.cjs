const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const b=require('../data/business-entity.cjs');
assert.equal(b.maps,'https://www.google.com/maps?cid=4207134925924682021','Maps uses the verified direct official listing, not a short redirect');
const home=read('index.html');
assert(home.includes('data-map-contact-note'),'group map and dedicated team contacts are distinguished');
assert(home.includes('0413 477 667'));
assert(!home.includes('tel:+61403069685'),'group listing phone does not replace the approved dedicated number');
const about=read('about.html');
assert(about.includes('data-registration-scope'),'ABR verification scope is explicit');
for(const file of Object.keys(require('../data/editorial-summaries.cjs'))){
 const html=read(file),graph=JSON.parse(html.match(/type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
 assert.equal(graph.find(n=>n['@type']==='Article').author['@id'],'https://perthpipepower.com.au/#business');
 assert(!graph.some(n=>n['@type']==='Person'),'no private personnel introduced into structured data');
}
console.log('PASS: official Maps URL, group/dedicated contact distinction, ABR scope and private personnel.');
