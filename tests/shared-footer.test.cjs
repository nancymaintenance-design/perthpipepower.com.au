const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {parse}=require('parse5');
const root=path.resolve(__dirname,'../dist');
const walk=n=>[n,...(n.childNodes||[]).flatMap(walk)];
const canonical=n=>n.nodeName==='#text'?['text',n.value]:n.tagName?['element',n.tagName,n.attrs.map(a=>[a.name,a.value]).sort(),(n.childNodes||[]).map(canonical)]:[n.nodeName];
const footer=f=>{const found=walk(parse(fs.readFileSync(path.join(root,f),'utf8'))).filter(n=>n.tagName==='footer');assert.equal(found.length,1,f+': one footer');return found[0];};
test('every published page has the complete homepage footer, including social, contact and exploration links',()=>{
 const home=footer('index.html');
 const hrefs=walk(home).filter(n=>n.tagName==='a').map(n=>n.attrs.find(a=>a.name==='href')?.value);
 for(const href of ['https://www.instagram.com/elliservices_group/','https://www.facebook.com/p/Ellis-Services-Group-100082926022259/','https://www.linkedin.com/in/ellis-services-group-091541266/','https://www.google.com/maps?cid=4207134925924682021','tel:0413477667','mailto:maxinemaintenance.au@outlook.com','news.html','insights.html','faq.html','contact.html','https://abr.business.gov.au/ABN/View?id=645821745'])assert(hrefs.includes(href),href);
 const files=fs.readdirSync(root).filter(f=>f.endsWith('.html'));assert.equal(files.length,48);
 for(const file of files)assert.deepEqual(canonical(footer(file)),canonical(home),file+': complete shared footer, not a reduced variant');
});
