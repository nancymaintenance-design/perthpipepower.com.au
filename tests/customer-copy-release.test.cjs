const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('fs'),crypto=require('crypto');const fixture=require('./fixtures/customer-copy-20261021.json');
test('reviewed bilingual copy changes only the approved 66 HTML and four existing feeds',()=>{
 assert.equal(Object.keys(fixture.afterFiles).length,70);assert.equal(Object.keys(fixture.afterFiles).filter(f=>f.endsWith('.html')).length,66);
 for(const [file,before]of Object.entries(fixture.beforeFiles))assert.equal(crypto.createHash('sha256').update(fs.readFileSync('dist/'+file)).digest('hex'),fixture.afterFiles[file]||before,file);
 for(const file of ['field-design.css','conversion-events.js','robots.txt','sitemap.xml','llms.txt','ai-content.json','privacy.html','zh/privacy.html'])assert(!fixture.afterFiles[file],file+': exact preservation');
});
