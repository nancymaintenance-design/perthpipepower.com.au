const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('./support/public-paths.cjs');
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=resolvePublicRoot();
const headings=file=>[...fs.readFileSync(path.join(root,file),'utf8').matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)].map(m=>m[1].replace(/&amp;/g,'&').replace(/<[^>]+>/g,'').trim());
test('commercial headings explicitly identify the service rather than generic reassurance',()=>{
 for(const [file,expected]of [
  ['electrical.html','Electrical Maintenance for Property Managers'],
  ['electrical.html','Electrical Faults: Safety and Reporting'],
  ['property-management.html','Plumbing and Electrical Maintenance for Property Managers'],
  ['property-management.html','Plumbing and Electrical Maintenance: Work-Order Scope'],
  ['ceiling-fans-perth.html','Ceiling fan installation: service scope'],
  ['dishwasher-installation-perth.html','Dishwasher installation: service scope'],
  ['plumbing.html','Plumbing symptoms and repair services'],
 ])assert(headings(file).includes(expected),file+': '+expected);
});
test('service-page education and scope headings do not revert to query-free boilerplate',()=>{
 const routes=JSON.parse(fs.readFileSync(path.join(root,'ai-content.json'),'utf8')).servicePages.map(p=>new URL(p.url).pathname.slice(1));
 for(const file of [...routes,'plumbing.html','electrical.html','property-management.html']){
  const list=headings(file);
  assert(!list.includes('Understand the symptoms before choosing the work'),file+': educational section lost its topic');
  assert(!list.includes('What the agreed service covers'),file+': scope section lost its topic');
 }
});
test('core trade phrases remain in the title and H1, with one H1 and stable canonical owners',()=>{
 for(const [file,phrase]of [['electrical.html','electrician perth'],['plumbing.html','plumber perth']]){
  const html=fs.readFileSync(path.join(root,file),'utf8');
  assert(html.match(/<title>([\s\S]*?)<\/title>/)[1].toLowerCase().includes(phrase));
  const h1=[...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)];assert.equal(h1.length,1);assert(h1[0][1].toLowerCase().includes(phrase));
  assert(html.match(/rel="canonical"\s+href="([^"]+)"/)[1].endsWith('/'+file));
 }
});
