const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

test('footer Instagram icons reserve intrinsic layout space', () => {
  const html = fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');
  assert.match(html, /<img class="footer-instagram__icon" src="instagram-icon-small\.png" alt="" width="1254" height="1254">/);
});
