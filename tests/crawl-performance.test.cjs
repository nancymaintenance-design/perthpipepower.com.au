const assert = require('node:assert/strict');
const fs = require('node:fs');
const gallery = require('../electrical-work-gallery.js');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
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
assert.equal(entries.length, 35);
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'data/sitemap-content-dates.json'), 'utf8'));
const crypto = require('node:crypto');
for (const [, entry] of entries) {
  const url = entry.match(/<loc>([^<]+)<\/loc>/)[1];
  const file = new URL(url).pathname.slice(1) || 'index.html';
  const date = entry.match(/<lastmod>(\d{4}-\d{2}-\d{2})<\/lastmod>/)?.[1];
  assert(date, file + ': explicit content modification date');
  assert.equal(date, manifest[file].lastmod);
  assert.equal(manifest[file].sha256, crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex'), file + ': lastmod manifest matches content');
}
console.log('PASS: responsive work photos and content-backed sitemap dates.');
