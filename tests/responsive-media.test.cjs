const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('./support/public-paths.cjs');
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const modulePath=path.resolve(__dirname,'../scripts/apply-responsive-media.cjs');
test('media integration supplies real responsive sources without changing carousel markup or article dates',()=>{
 const apply=fs.existsSync(modulePath)?require(modulePath).responsiveMarkup:undefined;
 assert.equal(typeof apply,'function','responsive media integration is available');
 const original='<link rel="preload" as="image" href="hero-repair.jpg" fetchpriority="high"><section class="hero"><article style="background-image:url(hero-repair.jpg)"></article></section><img class="brand-logo" src="ellis-services-logo.png" width="1237" height="1272" alt="Ellis Services Group logo"><img src="perth-property-service.png" width="1536" height="1024" alt="Perth property"><img src="images/electrical-work/residential-switchboard.jpg" width="1706" height="1279" loading="lazy" alt="Residential switchboard"><script>{"dateModified":"2026-10-10"}</script>';
 const result=apply(original,'index.html');
 assert.match(result,/ellis-services-logo-54.webp 1x, ellis-services-logo-108.webp 2x/);
 assert.match(result,/type="image\/avif"[^>]*perth-property-service-responsive-480.avif 480w/);
 assert.match(result,/residential-switchboard-responsive-960.webp 960w/);
 assert.match(result,/media="\(max-width:800px\)"[^>]*hero-repair-mobile.webp/);
 assert(result.includes('<section class="hero"><article style="background-image:url(hero-repair.jpg)"></article></section>'));
 assert(result.includes('"dateModified":"2026-10-10"'));
 assert.equal(apply(result,'index.html'),result,'rebuilding cannot nest pictures or duplicate srcsets');
});
test('published responsive photo width descriptors match encoded pixels',()=>{
 const html=fs.readFileSync(path.resolve(resolvePublicRoot(),'index.html'),'utf8');
 const sources=[...html.matchAll(/(?:srcset)="([^"]*responsive[^\"]*)"/g)].flatMap(m=>m[1].split(',').map(s=>s.trim().split(/\s+/)));
 for(const [file,width] of sources){
  const bytes=fs.readFileSync(path.resolve(resolvePublicRoot(),file));
  // Read the standard AVIF spatial extents / lossy WebP frame size directly,
  // keeping the regression check independent of the optional build encoder.
  const offset=file.endsWith('.avif')?bytes.indexOf(Buffer.from('ispe')):bytes.indexOf(Buffer.from([0x9d,0x01,0x2a]));
  assert(offset>=0,file+': encoded image dimensions present');
  const actualWidth=file.endsWith('.avif')?bytes.readUInt32BE(offset+8):bytes.readUInt16LE(offset+3)&0x3fff;
  assert.equal(actualWidth,Number(width.slice(0,-1)),file+': descriptor must be truthful');
 }
});
