const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('./support/public-paths.cjs');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = resolvePublicRoot();
const home = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const styles = fs.readFileSync(path.join(root, 'site.css'), 'utf8');
const walk=node=>[node,...(node.childNodes??[]).flatMap(walk)];
const nodes=walk(require('parse5').parse(home));
function icon(name,src) {
  const matches=nodes.filter(n=>n.tagName==='img'&&n.attrs.some(a=>a.name==='class'&&a.value===name));
  assert.equal(matches.length,1,name+': one native icon');
  const attrs=Object.fromEntries(matches[0].attrs.map(a=>[a.name,a.value]));
  assert.equal(attrs.src,src);assert.equal(attrs.alt,'','decorative icon has an empty alt');
}

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
icon('footer-facebook__icon','facebook-icon.svg');
assert.match(home, /href="https:\/\/www\.linkedin\.com\/in\/ellis-services-group-091541266\/"/);
assert.match(home, /aria-label="Follow Ellis Services Group on LinkedIn"/);
icon('footer-linkedin__icon','linkedin-icon.svg');
assert.match(home, /href="https:\/\/www\.google\.com\/maps\?cid=4207134925924682021"/);
assert.match(home, /aria-label="Read or leave a Google review for Ellis Services Group"/);
const star=nodes.find(n=>n.tagName==='span'&&n.attrs.some(a=>a.name==='class'&&a.value==='footer-google-reviews__icon'));
assert.ok(star);assert.equal(star.attrs.find(a=>a.name==='aria-hidden')?.value,'true');assert.equal(star.childNodes[0]?.value,'★');
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
icon('footer-instagram__icon','instagram-icon-small.png');
assert.ok(fs.existsSync(path.join(root, 'instagram-icon.png')), 'the supplied Instagram icon asset is present');
assert.ok(fs.existsSync(path.join(root, 'facebook-icon.svg')), 'the Facebook icon asset is present');
assert.ok(fs.existsSync(path.join(root, 'linkedin-icon.svg')), 'the LinkedIn icon asset is present');
assert.match(
  home,
  /<p>Dedicated Perth plumbing and electrical repair team, serving properties across Perth\.<\/p>\s*<a\b[^>]*class="footer-instagram"/,
  'the Instagram entry appears below the footer brand description',
);

console.log('PASS: homepage contains an accessible, responsive Perth office map section.');
