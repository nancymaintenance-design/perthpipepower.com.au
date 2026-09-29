const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const {
  loadLocalities,
  buildDirectoryData,
  renderLocalityPage,
  updateSitemap,
} = require('../scripts/build-perth-service-areas');

const localities = loadLocalities();
const directory = buildDirectoryData(localities);

const priorityLocalities = localities.filter(({ priority }) => priority);
assert.equal(priorityLocalities.length, 12, 'twelve locality pages are prioritised for search');
assert.equal(
  new Set(priorityLocalities.map(({ slug }) => slug)).size,
  priorityLocalities.length,
  'every priority locality has a unique slug',
);
for (const locality of priorityLocalities) {
  assert.ok(locality.priority.title, `${locality.slug} has a priority title`);
  assert.ok(locality.priority.description, `${locality.slug} has a priority description`);
  assert.ok(locality.priority.h1, `${locality.slug} has a priority H1`);
  assert.ok(
    locality.priority.services.length >= 2,
    `${locality.slug} links to at least two relevant services`,
  );
}

const priorityExample = priorityLocalities.find(({ slug }) => slug === 'east-perth');
const nonPriorityExample = localities.find(({ priority }) => !priority);
const priorityHtml = renderLocalityPage(priorityExample, localities);
const nonPriorityHtml = renderLocalityPage(nonPriorityExample, localities);
assert.match(priorityHtml, /<meta name="robots" content="index,follow">/);
assert.match(
  priorityHtml,
  new RegExp(priorityExample.priority.title.replace(/&/g, '&amp;')),
);
assert.match(priorityHtml, new RegExp(priorityExample.priority.h1));
assert.match(priorityHtml, new RegExp(priorityExample.priority.services[0].href.replace(/[.?]/g, '\\$&')));
assert.match(priorityHtml, new RegExp(priorityExample.priority.faqs[0].q));
assert.doesNotMatch(priorityHtml, /Explore nearby|Other Perth areas|nearbyLinks/);
assert.match(nonPriorityHtml, /<meta name="robots" content="noindex,follow">/);
assert.doesNotMatch(nonPriorityHtml, /Explore nearby|Other Perth areas|nearbyLinks/);

assert.equal(directory.regions.length, 6, 'the directory has six regions');
for (const region of directory.regions) {
  assert.equal(region.featuredLocalities.length, 2, `${region.name} has two featured locality links`);
  assert.ok(
    region.featuredLocalities.every(({ priority }) => priority),
    `${region.name} only surfaces priority localities in its initial view`,
  );
}
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

const prioritySitemapFixture = path.join(__dirname, 'fixtures-priority-sitemap.xml');
fs.writeFileSync(prioritySitemapFixture, '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');
updateSitemap(localities, prioritySitemapFixture);
const prioritySitemap = fs.readFileSync(prioritySitemapFixture, 'utf8');
assert.equal(
  (prioritySitemap.match(/<loc>https:\/\/perthpipepower\.com\.au\/service-areas\//g) || []).length,
  12,
  'the sitemap contains exactly the twelve priority locality URLs',
);
for (const locality of priorityLocalities)
  assert.match(prioritySitemap, new RegExp(`/service-areas/${locality.slug}\\.html`));
fs.unlinkSync(prioritySitemapFixture);

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
assert.match(directoryScript, /featuredLocalities/, 'the initial directory uses featured locality links');
assert.match(fs.readFileSync(path.join(__dirname, '..', 'site.css'), 'utf8'), /\.area-region__localities\s*\{/, 'the locality list has card styling');
assert.match(generatedPage, /noindex,follow/, 'pending locality pages remain noindex');
assert.match(generatedPage, /data-enquiry-form/, 'generated locality pages retain the enquiry hook');

const duplicateFixture = path.join(__dirname, 'fixtures-duplicate-localities.json');
fs.writeFileSync(duplicateFixture, JSON.stringify([localities[0], { ...localities[0] }]));
assert.throws(() => loadLocalities(duplicateFixture), /Duplicate locality slug/);
fs.unlinkSync(duplicateFixture);

console.log('Perth service-area locality data contract passed.');
