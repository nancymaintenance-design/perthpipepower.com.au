const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('./support/public-paths.cjs');
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=resolvePublicRoot();
const read=file=>fs.readFileSync(path.join(root,file),'utf8');

// Catches losing the native gallery at the primary electrical-service entry point.
test('electrical overview exposes existing work photos without JavaScript and with local lazy resources',()=>{
 const html=read('electrical.html');
 const main=html.match(/<main\b[\s\S]*?<\/main>/)[0];
 const galleries=[...main.matchAll(/<div class="shell" data-electrical-work-gallery>/g)];
 assert.equal(galleries.length,1);
 const figures=[...main.matchAll(/<figure class="electrical-work-gallery__card">([\s\S]*?)<\/figure>/g)];
 assert.equal(figures.length,8);
 for(const [,figure]of figures){
  assert.match(figure,/loading="lazy"/);
  assert.match(figure,/width="480" height="360"/);
  const image=figure.match(/src="([^"]+)"/)[1];
  assert(fs.existsSync(path.join(root,image.replace(/^\//,''))));
  assert.match(figure,/alt="[^"]+"/);
 }
});
