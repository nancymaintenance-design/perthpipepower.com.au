const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const contactHtml = fs.readFileSync(path.join(__dirname, '..', 'contact.html'), 'utf8');
const { safeSuburbFromSearch } = require('../contact-prefill.js');

assert.match(contactHtml, /<form[^>]+id="enquiry"[^>]+data-enquiry-form/i, 'contact form has a stable enquiry anchor');
assert.match(contactHtml, /<script src="contact-prefill\.js">\s*<\/script>/i, 'contact page loads the initializer');
assert.equal(safeSuburbFromSearch('?suburb=Subiaco%20WA'), 'Subiaco WA');
assert.equal(safeSuburbFromSearch('?suburb=Perth%20Hills%20%26%20Swan%20Valley'), 'Perth Hills & Swan Valley');
assert.equal(safeSuburbFromSearch('?suburb=%E0%A4%A'), null, 'replacement-character decoding is rejected');
assert.equal(safeSuburbFromSearch('?suburb=%'), null, 'invalid percent encoding is rejected');
assert.equal(safeSuburbFromSearch('?suburb='), null, 'blank values are ignored');
assert.equal(safeSuburbFromSearch(''), null, 'absent values are ignored');

const address = { value: '', focused: false, focus() { this.focused = true; } };
global.window = { location: { search: '?suburb=Subiaco%20WA' }, addEventListener() {} };
global.document = { querySelector: (selector) => selector === 'input[name="address"]' ? address : null };
delete require.cache[require.resolve('../contact-prefill.js')];
require('../contact-prefill.js');
window.prefillContactSuburb();
assert.equal(address.value, 'Subiaco WA');
assert.equal(address.focused, true);
delete global.window;
delete global.document;

console.log('Contact suburb-prefill contract passed.');
