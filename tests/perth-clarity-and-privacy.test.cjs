const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('./support/public-paths.cjs');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = resolvePublicRoot();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const about = read('about.html');
const faq = read('faq.html');
const contact = read('contact.html');
const home = read('index.html');
const privacy = read('privacy.html');

assert.match(about.replace(/\\s+/g,' '), /part of the Ellis Group.*local repair team/i);
assert.match(home, /Our local team provides plumbing repairs, electrical repairs and property maintenance/i);
assert.match(faq, /Routine service hours: 09:00–21:00, seven days a week/i);
assert.match(faq, /24-hour emergency repairs/i);
assert.doesNotMatch(faq, /Availability should be confirmed directly/i);
assert.doesNotMatch(faq, /receives enquiries for Perth|can be accommodated/i);
assert.match(contact, /href="privacy\.html"/);
assert.match(privacy, /<h1>Privacy policy<\/h1>/i);
assert.match(privacy, /name, phone number, email address and property address/i);
assert.match(privacy, /maxinemaintenance\.au@outlook\.com/i);

console.log('PASS: Perth service clarity, operating hours and privacy disclosures are present.');
