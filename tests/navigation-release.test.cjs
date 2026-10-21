const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const fixture=require('./fixtures/navigation-release-20261021.json');
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
test('navigation release is limited to 94 HTML pages and the existing click handler; production UI and all other artifacts retained',()=>{
 assert.equal(Object.keys(fixture.afterFiles).length,95);
 for(const [file,before]of Object.entries(fixture.beforeFiles))assert.equal(hash(fs.readFileSync(path.join('dist',file))),require('./fixtures/customer-copy-20261021.json').afterFiles[file]||fixture.afterFiles[file]||before,file);
 for(const f of ['field-design.css','feed.json','feed.xml','zh/feed.json','zh/feed.xml','llms.txt','robots.txt','sitemap.xml'])assert(!fixture.afterFiles[f],f+': exact production identity');
});
test('bilingual pages retain the approved outbound whitelist and all six removed reference URLs stay absent',async()=>{
 const {parse}=await import('parse5'),walk=n=>[n,...(n.childNodes||[]).flatMap(walk)];
 for(const file of Object.keys(fixture.beforeFiles).filter(f=>/^(zh\/)?[^/]+\.html$/.test(f))){
  const html=fs.readFileSync(path.join('dist',file),'utf8');
  assert(!/https?:\/\/[^\s"<>]*(?:watercorporation\.com\.au|dfes\.wa\.gov\.au|wa\.gov\.au\/government\/multi-step-guides)/i.test(html),file);
  for(const a of walk(parse(html)).filter(n=>n.tagName==='a')){
   const href=a.attrs.find(a=>a.name==='href')?.value;if(!href||!/^https?:/.test(href))continue;
   const u=new URL(href);assert(['perthpipepower.com.au','www.instagram.com','www.facebook.com','www.linkedin.com','abr.business.gov.au'].includes(u.hostname)||u.hostname==='www.google.com'&&u.pathname.startsWith('/maps'),file+': '+href);
  }
 }
});
