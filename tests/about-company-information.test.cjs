const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const about = fs.readFileSync(path.join(__dirname, '..', 'about.html'), 'utf8');

for (const expected of [
  'ELLIS SERVICES GROUP PTY LTD',
  '96 645 821 745',
  '645 821 745',
  'Australian Private Company',
  'Registered for GST',
  'https://abr.business.gov.au/ABN/View?id=645821745',
  '140 St Georges Terrace, Perth WA 6000',
  '0413 477 667',
  'maxinemaintenance.au@outlook.com',
  'How an enquiry moves forward',
  'Licensing &amp; insurance',
  'Questions customers often ask',
]) {
  assert.ok(about.includes(expected), `About page should present ${expected}`);
}

assert.ok(!/AUD\s*\d|\$\d|insured by|policy number\s*[:#]/i.test(about), 'About page must not invent insurance details');
console.log('PASS: About page presents verified company details and avoids unverified insurance claims.');
