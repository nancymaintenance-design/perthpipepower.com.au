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
assert.match(examplePage, /data-electrical-work-gallery/);
assert.match(examplePage, /electrical-work-gallery\.js/);
assert.match(examplePage, /Examples of electrical work completed by our team/);
assert.doesNotMatch(examplePage, /Construction cases for|Real local work photos are being prepared|nearby case|local project/i);
assert.match(generatedPage, /data-electrical-work-gallery/);
assert.match(generatedPage, /electrical-work-gallery\.js/);
assert.doesNotMatch(generatedPage, /Real local work photos are being prepared/);
assert.match(generatedPage, /contact-form\.js/);
assert.ok(
  !fs.readFileSync(path.join(__dirname, '..', 'sitemap.xml'), 'utf8').includes(`/service-areas/${representative.slug}.html`),
  'pending locality pages are excluded from the sitemap',
);

const directoryPage = fs.readFileSync(path.join(__dirname, '..', 'service-areas.html'), 'utf8');
assert.match(directoryPage, /type="search"/);
assert.match(directoryPage, /aria-controls="area-search-results"/);
assert.match(directoryPage, /service-area-directory\.js/);
assert.match(directoryPage, /data-area-region="Northern Suburbs"/);
assert.match(
  fs.readFileSync(path.join(__dirname, '..', 'service-area-directory.js'), 'utf8'),
  /aria-live="polite"/,
);

const directoryScript = fs.readFileSync(path.join(__dirname, '..', 'service-area-directory.js'), 'utf8');
assert.match(directoryScript, /area-search-clear/, 'the search has a clear action');
assert.match(directoryScript, /No matching Perth locality/, 'the search has a no-results state');
assert.match(directoryScript, /area-region__meta/, 'each region renders a card metadata row');
assert.match(directoryScript, /area-region__localities/, 'each region renders a dedicated locality list');
assert.match(fs.readFileSync(path.join(__dirname, '..', 'site.css'), 'utf8'), /\.area-region__localities\s*\{/, 'the locality list has card styling');
assert.match(generatedPage, /noindex,follow/, 'pending locality pages remain noindex');
assert.match(generatedPage, /data-enquiry-form/, 'generated locality pages retain the enquiry hook');

const duplicateFixture = path.join(__dirname, 'fixtures-duplicate-localities.json');
fs.writeFileSync(duplicateFixture, JSON.stringify([localities[0], { ...localities[0] }]));
assert.throws(() => loadLocalities(duplicateFixture), /Duplicate locality slug/);
fs.unlinkSync(duplicateFixture);

console.log('Perth service-area locality data contract passed.');
