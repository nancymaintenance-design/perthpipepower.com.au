const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const contactHtml = fs.readFileSync(path.join(__dirname, '..', 'contact.html'), 'utf8');
const scriptPath = path.join(__dirname, '..', 'contact-prefill.js');

assert.ok(fs.existsSync(scriptPath), 'contact-prefill initializer must exist');
const source = fs.readFileSync(scriptPath, 'utf8');

assert.match(contactHtml, /<form[^>]+id="enquiry"[^>]+data-enquiry-form/i, 'contact form has a stable enquiry anchor');
assert.match(contactHtml, /<script src="contact-prefill\.js">\s*<\/script>/i, 'contact page loads the initializer');
assert.match(source, /URLSearchParams/i, 'initializer parses contact URL parameters');
assert.match(source, /get\(['"]suburb['"]\)/i, 'initializer reads the suburb parameter');
assert.match(source, /querySelector\(['"]input\[name=["']address["']\]['"]\)/i, 'initializer targets only the address field');
assert.match(source, /\.trim\(\)/i, 'blank suburb values are ignored');
assert.match(source, /\.focus\(\)/i, 'prefilled contact form focuses the address field');
assert.doesNotMatch(source, /querySelector\(['"]input\[name=["']message["']\]/i, 'initializer does not overwrite the customer message');

console.log('Contact suburb-prefill contract passed.');
