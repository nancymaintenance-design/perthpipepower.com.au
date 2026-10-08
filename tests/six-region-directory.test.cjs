const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const html = fs.readFileSync(path.join(__dirname, '..', 'service-areas.html'), 'utf8');
const directoryScript = fs.readFileSync(path.join(__dirname, '..', 'service-area-directory.js'), 'utf8');
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || '';
const regionCards = [...main.matchAll(/<article\b[^>]*class="area-region[^\"]*"[\s\S]*?<\/article>/gi)].map((match) => match[0]);
const links = regionCards.flatMap((card) => [...card.matchAll(/<a\s+[^>]*href="([^"]+)"/gi)].map((match) => match[1]));
const expected = ['perth-cbd-inner-suburbs.html', 'northern-suburbs.html', 'southern-suburbs.html', 'eastern-suburbs.html', 'western-suburbs.html', 'perth-hills-swan-valley.html'];

assert.match(html, /six Perth regions[^"]*on-site assessment and written quote/i);
assert.equal(regionCards.length, 6);
assert.equal(links.filter(link=>link.startsWith('contact.html?suburb=')).length, 126);
assert.deepEqual(new Set(links.filter(link=>!link.startsWith('contact.html?suburb='))), new Set(expected));
assert.match(main, /type="search"/i);
assert.doesNotMatch(main, /href="service-areas\//i);
assert.equal((main.match(/data-region-localities/g) || []).length, 6, 'each region reserves a locality display area');
assert.match(html, /<script src="service-area-data\.js"><\/script>/i);
assert.match(html, /<script src="service-area-directory\.js"><\/script>/i);
assert.match(directoryScript, /region\.localities/i);
assert.match(directoryScript, /document\.createElement\('a'\)/i, 'each locality is a contact shortcut');
assert.match(directoryScript, /className\s*=\s*['"]area-region__locality-link['"]/i, 'locality links retain a dedicated style hook');
assert.match(directoryScript, /contact\.html\?suburb=/i, 'locality links route to the contact page');
assert.match(directoryScript, /encodeURIComponent\(locality\.name\)/i, 'suburb names are safely encoded in the contact URL');
assert.match(directoryScript, /#enquiry/i, 'locality links target the enquiry form');
assert.doesNotMatch(directoryScript, /service-areas\//i, 'locality names do not create individual locality pages');
console.log('Six-region directory contract passed.');
