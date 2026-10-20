const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const fixture=require('./fixtures/external-links-cleanup-20261020.json');
const hash=v=>crypto.createHash('sha256').update(v).digest('hex');
test('six removed reference destinations are absent and all approved outbound destinations remain',async()=>{
 const {parse}=await import('parse5');const walk=n=>[n,...(n.childNodes||[]).flatMap(walk)];
 for(const file of Object.keys(fixture.beforeFiles).filter(f=>f.endsWith('.html'))){
  const html=fs.readFileSync(path.join('dist',file),'utf8');
  assert(!/https?:\/\/[^\s"<>]*(?:watercorporation\.com\.au|dfes\.wa\.gov\.au|wa\.gov\.au\/government\/multi-step-guides)/i.test(html),file);
 }
 for(const edit of fixture.publicEdits)for(const n of walk(parse(edit.after)))if(['p','ul','li'].includes(n.tagName))assert((n.childNodes||[]).length>0,edit.file+': no newly empty '+n.tagName);
 for(const file of ['index.html','zh/index.html','about.html','zh/about.html']){
  const html=fs.readFileSync(path.join('dist',file),'utf8');
  for(const domain of ['instagram.com','facebook.com','linkedin.com','www.google.com/maps'])assert(html.includes(domain),domain);
  if(file.endsWith('about.html'))assert(html.includes('abr.business.gov.au/ABN/View?id=645821745'));
 }
});
test('reviewed link cleanup plus subsequent navigation retain every other public artifact',()=>{
 assert.equal(Object.keys(fixture.afterFiles).length,16);
 const navigation=require('./fixtures/navigation-release-20261021.json');
 for(const [file,before]of Object.entries(fixture.beforeFiles))assert.equal(hash(fs.readFileSync(path.join('dist',file))),navigation.afterFiles[file]||fixture.afterFiles[file]||before,file);
});
