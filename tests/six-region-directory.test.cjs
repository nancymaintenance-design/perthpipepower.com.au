const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const html = fs.readFileSync(path.join(__dirname, '..', 'service-areas.html'), 'utf8');
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || '';
const guideList = main.match(/<div\b[^>]*data-region-guide-list[^>]*>([\s\S]*?)<\/div>/i)?.[1] || '';
const links = [...guideList.matchAll(/<a\s+[^>]*href="([^"]+)"/gi)].map((match) => match[1]);
const expected = ['perth-cbd-inner-suburbs.html', 'northern-suburbs.html', 'southern-suburbs.html', 'eastern-suburbs.html', 'western-suburbs.html', 'perth-hills-swan-valley.html'];

assert.equal(links.length, 6);
assert.deepEqual(new Set(links), new Set(expected));
assert.doesNotMatch(main, /type="search"|area-search|service-areas\//i);
console.log('Six-region directory contract passed.');
