const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const {applySiteContent}=require('../scripts/apply-site-content-intent.cjs');
const {pages}=require('../data/site-content-intent.cjs');
const root=path.resolve(__dirname,'..');

test('content builder puts decision sections before FAQs and escapes prose without duplicate blocks on rerun',()=>{
 const temp=fs.mkdtempSync(path.join(root,'../reports/gap-render-test-'));
 const page=pages['blocked-drains-perth.html'],saved=page.sections;
 try{
  for(const file of Object.keys(pages))fs.copyFileSync(path.join(root,file),path.join(temp,file));
  page.sections=[{id:'gap-scope-test',heading:'Scope & approval',body:['Equipment <limits> & access.'],bullets:['One agreed task'],links:[['contact.html','Ask about the scope']]}];
  applySiteContent(temp);
  const file=path.join(temp,'blocked-drains-perth.html'),once=fs.readFileSync(file,'utf8');
  assert(!/(?<!\r)\n/.test(once),'regeneration preserves the Windows checkout line endings');
  assert.equal((once.match(/id="gap-scope-test"/g)||[]).length,1,'the section needs a reachable unique anchor');
  assert(once.indexOf('id="gap-scope-test"')<once.indexOf('id="service-faq"'),'decision content belongs before FAQs');
  assert(once.includes('Equipment &lt;limits&gt; &amp; access.'),'public text must not create HTML elements');
  assert(once.includes('href="contact.html">Ask about the scope</a>'),'the next step is a native link');
  applySiteContent(temp);
  assert.equal(fs.readFileSync(file,'utf8'),once,'regeneration must not duplicate or move sections');
 }finally{
  if(saved===undefined)delete page.sections;else page.sections=saved;
  // Exact test-owned directory; never the source or reports root.
  fs.rmSync(temp,{recursive:true,force:true});
 }
});

test('service content has no body-link orphan and local anchors resolve after regeneration',()=>{
 const files=Object.keys(pages),set=new Set(files);
 for(const file of files){
  const h=fs.readFileSync(path.join(root,file),'utf8'),main=h.match(/<main\b[\s\S]*?<\/main>/)[0];
  for(const match of main.matchAll(/href="#([^"?]+)"/g))assert(main.includes('id="'+match[1]+'"'),file+': broken on-page navigation '+match[0]);
  for(const match of main.matchAll(/href="([^"?#]*\.html)(?:#([^"?]+))?"/g)){
   if(!set.has(match[1]))continue;
   const target=fs.readFileSync(path.join(root,match[1]),'utf8');
   if(match[2])assert(target.includes('id="'+match[2]+'"'),file+': broken section link '+match[0]);
  }
 }
});
