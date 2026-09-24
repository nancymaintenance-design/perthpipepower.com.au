const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const {
  loadLocalities,
  buildDirectoryData,
  renderLocalityPage,
} = require('../scripts/build-perth-service-areas');

const localities = loadLocalities();
const directory = buildDirectoryData(localities);

assert.equal(directory.regions.length, 6, 'the directory has six regions');
assert.ok(localities.length >= 120, 'the catalogue contains at least 120 localities');
assert.equal(
  new Set(localities.map(({ slug }) => slug)).size,
  localities.length,
  'every locality has a unique slug',
);

const examplePage = renderLocalityPage(localities[0]);
assert.match(examplePage, /<meta name="robots" content="noindex,follow">/);
assert.match(examplePage, /data-enquiry-form/);

const representative = localities.find(({ region }) => region === 'Northern Suburbs');
const outputPath = path.join(__dirname, '..', 'service-areas', `${representative.slug}.html`);
assert.ok(fs.existsSync(outputPath), 'the representative locality page exists');
const generatedPage = fs.readFileSync(outputPath, 'utf8');
assert.match(generatedPage, new RegExp(`Plumber &amp; Electrician in ${representative.name}, Perth`));
assert.match(generatedPage, /Real local work photos are being prepared/);
assert.match(generatedPage, /contact-form\.js/);
assert.ok(
  !fs.readFileSync(path.join(__dirname, '..', 'sitemap.xml'), 'utf8').includes(`/service-areas/${representative.slug}.html`),
  'pending locality pages are excluded from the sitemap',
);

console.log('Perth service-area locality data contract passed.');
