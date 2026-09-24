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

console.log('Electrical work gallery contract passed.');
