const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

const owners = [
  ['blocked-drains-perth.html', 'Blocked Drains Perth — Drain Clearing &amp; Repairs', 'How we scope drain clearing and further repairs', 'property-management.html'],
  ['water-leak-detection-perth.html', 'Water Leak Detection Perth', 'From locating the source to agreeing the leak repair', 'burst-pipe-repair-perth.html'],
  ['burst-pipe-repair-perth.html', 'Burst Pipe Repairs Perth', 'Our burst-pipe assessment and repair approach', 'water-leak-detection-perth.html'],
  ['electrical.html', 'Electrician Perth — Electrical Repairs &amp; Installation', 'How electrical repair work is scoped', 'contact.html'],
];

for (const [file, h1, marker, relatedHref] of owners) {
  const html = read(file);
  assert.match(html, new RegExp(`<h1>${h1}</h1>`), `${file} retains its unique service H1`);
  assert.match(html, new RegExp(`<h2>${marker}</h2>`), `${file} explains its assessment scope`);
  assert.match(html, new RegExp(`href="${relatedHref}"`), `${file} has a contextual related-service link`);
  assert.match(html, /href="contact\.html"/, `${file} keeps a crawlable enquiry path`);
}

assert.match(read('hot-water-problems-perth.html'), /Thornlie/, 'hot-water owner covers the observed Thornlie query without a new locality page');
assert.match(read('fixtures-appliances-perth.html'), /Visible water under a sink/, 'fixture owner distinguishes visible sink leaks from hidden-leak diagnosis');
assert.match(read('southern-suburbs.html'), /Thornlie/, 'Southern Suburbs guide truthfully includes Thornlie coverage');
assert.doesNotMatch(read('sitemap.xml'), /service-areas\/thornlie\.html/, 'no Thornlie landing page is added to the sitemap');
assert.match(read('sitemap.xml'), /<loc>https:\/\/perthpipepower\.com\.au\/fixtures-appliances-perth\.html<\/loc>/, 'the existing indexable fixture owner is listed in the sitemap');

console.log('Core service owner SEO contract passed.');
