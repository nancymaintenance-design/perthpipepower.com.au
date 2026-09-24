const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const gallery = require('../electrical-work-gallery.js');

assert.equal(gallery.ELECTRICAL_WORK_GALLERY.length, 8);
for (const record of gallery.ELECTRICAL_WORK_GALLERY) {
  assert.ok(fs.existsSync(path.join(ROOT, record.image)), `gallery asset exists: ${record.image}`);
  assert.doesNotMatch(
    `${record.alt} ${record.caption}`,
    /nearby|local project|suburb|region|client|completed in|compliant|certified|fault cause/i,
  );
}
assert.doesNotMatch(JSON.stringify(gallery.ELECTRICAL_WORK_GALLERY), /external-isolator-(after|before)/i);
assert.equal(gallery.mountElectricalWorkGalleries({ querySelectorAll: () => [] }), 0);
assert.match(gallery.renderElectricalWorkGallery(), /src="\/images\/electrical-work\//, 'gallery image URLs work from nested suburb pages');
assert.ok(
  gallery.ELECTRICAL_WORK_GALLERY.reduce((total, record) => total + fs.statSync(path.join(ROOT, record.image)).size, 0) < 8 * 1024 * 1024,
  'gallery payload stays below 8 MB',
);

for (const filename of [
  'perth-cbd-inner-suburbs.html',
  'northern-suburbs.html',
  'southern-suburbs.html',
  'eastern-suburbs.html',
  'western-suburbs.html',
  'perth-hills-swan-valley.html',
]) {
  const html = fs.readFileSync(path.join(ROOT, filename), 'utf8');
  assert.match(html, /data-electrical-work-gallery/, `${filename} mounts the gallery`);
  assert.match(html, /electrical-work-gallery\.js/, `${filename} loads the gallery module`);
  assert.doesNotMatch(html, /nearby cases|local projects|regional cases/i, `${filename} avoids unsupported location claims`);
}

const css = fs.readFileSync(path.join(ROOT, 'site.css'), 'utf8');
assert.match(css, /\.electrical-work-gallery__grid\s*\{/);
assert.match(css, /\.electrical-work-gallery__image\s*\{[^}]*object-fit:\s*cover/s);
assert.match(css, /\.electrical-work-gallery__card\s*\{/);
assert.match(css, /@media \(max-width:\s*700px\)/);
assert.match(css, /\.electrical-work-gallery__grid\s*\{[^}]*repeat\(6,\s*minmax\(0,\s*1fr\)\)/s);
assert.match(css, /\.electrical-work-gallery__image\s*\{[^}]*aspect-ratio:\s*1\s*\/\s*1/s);
assert.match(css, /@media \(max-width:\s*700px\)\s*\{[^}]*\.electrical-work-gallery__grid\s*\{[^}]*repeat\(3,\s*minmax\(0,\s*1fr\)\)/s);
assert.match(css, /\.electrical-work-gallery__card figcaption span\s*\{[^}]*display:\s*none/s);

console.log('Electrical work gallery contract passed.');
