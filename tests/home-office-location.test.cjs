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
assert.match(home, /href="https:\/\/www\.facebook\.com\/p\/Ellis-Services-Group-100082926022259\/"/);
assert.match(home, /aria-label="Follow Ellis Services Group on Facebook"/);
assert.match(home, /<img\s+class="footer-facebook__icon"\s+src="facebook-icon\.svg"\s+alt=""[^>]*>/);
assert.match(home, /href="https:\/\/www\.linkedin\.com\/in\/ellis-services-group-091541266\/"/);
assert.match(home, /aria-label="Follow Ellis Services Group on LinkedIn"/);
assert.match(home, /<img\s+class="footer-linkedin__icon"\s+src="linkedin-icon\.svg"\s+alt=""[^>]*>/);
assert.match(home, /href="https:\/\/www\.google\.com\/maps\?cid=4207134925924682021"/);
assert.match(home, /aria-label="Read or leave a Google review for Ellis Services Group"/);
assert.match(home, /<span class="footer-google-reviews__icon" aria-hidden="true">★<\/span>/);
assert.match(home, /"@type": "GeoCoordinates"/);
assert.match(home, /"latitude": -31\.954352/);
assert.match(home, /"longitude": 115\.8564539/);
assert.match(home, /"hasMap": "https:\/\/www\.google\.com\/maps\?cid=4207134925924682021"/);
assert.match(home, /"sameAs": \[\s*"https:\/\/www\.instagram\.com\/elliservices_group\/"/);
assert.match(home, /aria-label="Follow Ellis Services Group on Instagram"/);
assert.match(home, /class="footer-instagram"/);
assert.match(styles, /\.footer-instagram\s*\{/);
assert.match(styles, /\.footer-instagram\s*>\s*img\s*\{[^}]*width:\s*1em\s*!important/i);
assert.match(styles, /\.footer-google-reviews__icon\s*\{[^}]*width:\s*1em/i);
assert.match(home, /<img\s+class="footer-instagram__icon"\s+src="instagram-icon-small\.png"\s+alt=""[^>]*>/);
assert.ok(fs.existsSync(path.join(root, 'instagram-icon.png')), 'the supplied Instagram icon asset is present');
assert.ok(fs.existsSync(path.join(root, 'facebook-icon.svg')), 'the Facebook icon asset is present');
assert.ok(fs.existsSync(path.join(root, 'linkedin-icon.svg')), 'the LinkedIn icon asset is present');
assert.match(
  home,
  /<p>Dedicated Perth plumbing and electrical repair team, serving properties across Perth\.<\/p>\s*<a\s+class="footer-instagram"/,
  'the Instagram entry appears below the footer brand description',
);

console.log('PASS: homepage contains an accessible, responsive Perth office map section.');
