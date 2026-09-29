const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {
  loadLocalities,
  renderLocalityPage,
  addGeneratedPageMetadata,
  updateSitemap,
} = require('../scripts/build-perth-service-areas');

const localities = loadLocalities();
assert.ok(localities.length >= 120, 'the legacy locality catalogue remains intact');
assert.equal(new Set(localities.map(({ slug }) => slug)).size, localities.length);

const fallback = localities.find(({ slug }) => slug === 'east-perth');
const html = renderLocalityPage(fallback, localities);
const tracked = addGeneratedPageMetadata(html);
assert.match(html, /<meta name="robots" content="noindex,follow">/);
assert.doesNotMatch(html, /Explore nearby|Other Perth areas|nearbyLinks/);
assert.match(tracked, /googletagmanager\.com\/gtag\/js\?id=G-HZ6PKHKGWH/);
assert.match(tracked, /property="og:title"/);

const fixture = path.join(__dirname, 'fixtures-locality-sitemap.xml');
fs.writeFileSync(fixture, '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');
updateSitemap(localities, fixture);
const generatedSitemap = fs.readFileSync(fixture, 'utf8');
assert.doesNotMatch(generatedSitemap, /service-areas\//i);
fs.unlinkSync(fixture);

const duplicateFixture = path.join(__dirname, 'fixtures-duplicate-localities.json');
fs.writeFileSync(duplicateFixture, JSON.stringify([localities[0], { ...localities[0] }]));
assert.throws(() => loadLocalities(duplicateFixture), /Duplicate locality slug/);
fs.unlinkSync(duplicateFixture);

console.log('Perth service-area locality fallback contract passed.');
