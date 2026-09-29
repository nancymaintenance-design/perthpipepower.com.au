const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const regions = [
  { file: 'perth-cbd-inner-suburbs.html', name: 'CBD & Inner Perth' },
  { file: 'northern-suburbs.html', name: 'Northern Suburbs' },
  { file: 'southern-suburbs.html', name: 'Southern Suburbs' },
  { file: 'eastern-suburbs.html', name: 'Eastern Suburbs' },
  { file: 'western-suburbs.html', name: 'Western Suburbs' },
  { file: 'perth-hills-swan-valley.html', name: 'Perth Hills & Swan Valley' },
];
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const directory = read('service-areas.html');
const main = directory.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || '';
const guideList = main.match(/<div\b[^>]*data-region-guide-list[^>]*>([\s\S]*?)<\/div>/i)?.[1] || '';
const directoryLinks = [...guideList.matchAll(/<a\s+[^>]*href="([^"]+)"/gi)].map((match) => match[1]);

assert.equal(directoryLinks.length, 6, 'the directory exposes exactly six customer destinations');
assert.deepEqual(
  new Set(directoryLinks),
  new Set(regions.map(({ file }) => file)),
  'the directory links only to the six region guides',
);
assert.doesNotMatch(main, /type="search"|area-search|service-areas\//i);

for (const { file, name } of regions) {
  const html = read(file);
  assert.match(html, new RegExp(`<h1>[^<]*${name.replace(/[&]/g, '&amp;')}[^<]*<\\/h1>`, 'i'));
  assert.match(html, /Service scenarios/i);
  assert.match(html, /How we scope the work/i);
  assert.match(html, /Frequently asked questions/i);
  assert.match(html, /application\/ld\+json/i);
  assert.match(html, /"@type":"FAQPage"/);
  assert.doesNotMatch(html, /service-areas\//i, `${file} does not promote suburb URLs`);
}

const sitemap = read('sitemap.xml');
assert.doesNotMatch(sitemap, /service-areas\//i, 'no suburb fallback appears in sitemap');
for (const { file } of regions)
  assert.match(sitemap, new RegExp(`https:\/\/perthpipepower\.com\.au\/${file}`));

const fallback = read('service-areas/applecross.html');
assert.match(fallback, /<meta name="robots" content="noindex,follow">/);
assert.doesNotMatch(fallback, /Explore nearby|Other Perth areas|<a\b[^>]*href="[^"\n]*service-areas\/[a-z]/i);

const aiFeed = JSON.parse(read('ai-content.json'));
assert.equal(aiFeed.regions.length, 6);
assert.equal(aiFeed.business.telephone, '0413 477 667');
assert.equal(aiFeed.business.email, 'maxinemaintenance.au@outlook.com');
assert.doesNotMatch(JSON.stringify(aiFeed), /24 hour|24-hour|fixed price|guaranteed/i);

const llms = read('llms.txt');
for (const { file } of regions) assert.match(llms, new RegExp(file));
assert.doesNotMatch(llms, /24 hour|24-hour|fixed price|guaranteed/i);

console.log('Six-region service architecture contract passed.');
