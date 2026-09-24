const assert = require('node:assert/strict');

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

console.log('Perth service-area locality data contract passed.');
