const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const html = fs.readFileSync(path.join(__dirname, '..', 'service-areas.html'), 'utf8');
const directoryScript = fs.readFileSync(path.join(__dirname, '..', 'service-area-directory.js'), 'utf8');
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || '';
const regionCards = [...main.matchAll(/<article\b[^>]*class="area-region[^\"]*"[\s\S]*?<\/article>/gi)].map((match) => match[0]);
const links = regionCards.flatMap((card) => [...card.matchAll(/<a\s+[^>]*href="([^"]+)"/gi)].map((match) => match[1]));
const expected = ['perth-cbd-inner-suburbs.html', 'northern-suburbs.html', 'southern-suburbs.html', 'eastern-suburbs.html', 'western-suburbs.html', 'perth-hills-swan-valley.html'];

assert.match(html, /<meta name="description" content="Explore Ellis Services Group&#39;s six Perth plumbing and electrical service regions\."/i);
assert.doesNotMatch(html, /Search Perth suburbs and localities/i);
assert.equal(regionCards.length, 6);
assert.equal(links.length, 6);
assert.deepEqual(new Set(links), new Set(expected));
assert.doesNotMatch(main, /type="search"|area-search|service-areas\//i);
assert.equal((main.match(/data-region-localities/g) || []).length, 6, 'each region reserves a locality display area');
assert.match(html, /<script src="service-area-data\.js"><\/script>/i);
assert.match(html, /<script src="service-area-directory\.js"><\/script>/i);
assert.match(directoryScript, /region\.localities/i);
assert.match(directoryScript, /document\.createElement\('span'\)/i);
assert.doesNotMatch(directoryScript, /service-areas\//i, 'locality names do not create individual locality links');
console.log('Six-region directory contract passed.');
