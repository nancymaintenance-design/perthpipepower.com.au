const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('./support/public-paths.cjs');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const gallery = require('../electrical-work-gallery.js');
const path = require('node:path');
const root = resolvePublicRoot();
const markup = gallery.renderElectricalWorkGallery();
assert.equal((markup.match(/srcset=/g) || []).length, 8, 'all work photos have responsive delivery');
for (const photo of gallery.ELECTRICAL_WORK_GALLERY) {
  for (const width of [480, 960]) {
    const file = path.join(root, photo.image.replace(/\.jpg$/, `-${width}.webp`));
    assert(fs.existsSync(file), file);
    assert(fs.statSync(file).size < 150 * 1024, 'gallery asset within transfer budget');
  }
}
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const entries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)];
assert.equal(entries.length,require('../site/content/locales/manifest.json').enabledLocales.includes('zh-Hans')?94:47,'47 English owners and their complete Chinese counterparts');
const manifest = JSON.parse(fs.readFileSync(path.join(SOURCE_ROOT,'data/sitemap-content-dates.json'), 'utf8'));
const crypto = require('node:crypto');
// Current maintenance fingerprints use final rendered HTML normalized to LF.
// Independent frozen DOM + explicit reviewed deltas still guard the whole output.
for (const [, entry] of entries) {
  const url = entry.match(/<loc>([^<]+)<\/loc>/)[1];
  const chinese=new URL(url).pathname.startsWith('/zh/');
  const file = new URL(url).pathname.replace(/^\/(?:zh\/)?/,'') || 'index.html';
  const date = entry.match(/<lastmod>(\d{4}-\d{2}-\d{2})<\/lastmod>/)?.[1];
  assert(date, file + ': explicit content modification date');
  assert.equal(date, manifest[file].lastmod);
  if(!chinese)assert.equal(manifest[file].sha256, crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file),'utf8').replace(/\r\n/g,'\n')).digest('hex'), file + ': maintenance fingerprint matches final canonical HTML (LF)');
}
const {compareApprovedOutput:comparePublicOutput,approved}=require('./support/approved-content.cjs');
assert.deepEqual(comparePublicOutput(root,approved),[],'actual dist content, SEO, dates and resources remain equivalent to the frozen candidate');
console.log('PASS: responsive work photos and content-backed sitemap dates.');
