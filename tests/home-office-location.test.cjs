const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const home = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const styles = fs.readFileSync(path.join(root, 'site.css'), 'utf8');

assert.match(home, /<section class="section office-location"/);
assert.match(home, /<h2[^>]*>Visit our Perth office<\/h2>/);
assert.match(home, /140 St Georges Terrace, Perth WA 6000/);
assert.match(home, /<iframe[^>]+title="Map of Ellis Services Group office"/);
assert.match(home, /google\.com\/maps\?[^"']*140%20St%20Georges%20Terrace/);
assert.match(home, /href="https:\/\/www\.google\.com\/maps\/place\/140\+St\+Georges\+Terrace/);
assert.match(styles, /\.office-location__map\s*\{/);
assert.match(styles, /\.office-location__map iframe\s*\{/);

assert.match(home, /href="https:\/\/www\.instagram\.com\/elliservices_group\//);
assert.match(home, /aria-label="Follow Ellis Services Group on Instagram"/);
assert.match(home, /class="footer-instagram"/);
assert.match(styles, /\.footer-instagram\s*\{/);
assert.match(
  home,
  /<p>Plumbing and electrical repair enquiries for Perth properties\.<\/p>\s*<a\s+class="footer-instagram"/,
  'the Instagram entry appears below the footer brand description',
);

console.log('PASS: homepage contains an accessible, responsive Perth office map section.');
