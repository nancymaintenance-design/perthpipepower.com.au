const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const about = read('about.html');
const faq = read('faq.html');
const contact = read('contact.html');
const home = read('index.html');
const privacy = read('privacy.html');

assert.match(about, /part of the Ellis Group.*dedicated Perth repair team.*across Perth/i);
assert.match(home, /dedicated Perth repair team/i);
assert.match(faq, /available for Perth plumbing and electrical enquiries every day from 00:00 to 23:59/i);
assert.doesNotMatch(faq, /Availability should be confirmed directly/i);
assert.doesNotMatch(faq, /receives enquiries for Perth|can be accommodated/i);
assert.match(contact, /href="privacy\.html"/);
assert.match(privacy, /<h1>Privacy policy<\/h1>/i);
assert.match(privacy, /name, phone number, email address and property address/i);
assert.match(privacy, /maxinemaintenance\.au@outlook\.com/i);

console.log('PASS: Perth service clarity, operating hours and privacy disclosures are present.');
