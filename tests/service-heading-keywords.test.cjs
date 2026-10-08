const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const home = read('index.html');

const services = [
  ['blocked-drains-perth.html', 'Blocked Drains &amp; Toilet Repairs Perth'],
  ['burst-pipe-repair-perth.html', 'Burst Pipe Repairs Perth'],
  ['lighting-power-points-perth.html', 'Power Point &amp; Lighting Repairs Perth'],
  ['property-management.html', 'Property Manager Plumbing &amp; Electrical Perth'],
  ['fixtures-appliances-perth.html', 'Fixture, Tap &amp; Appliance Connection Services in Perth'],
  ['renewables-smart-home-perth.html', 'Smart Home &amp; Energy Electrical Services in Perth'],
];

for (const [page, heading] of services) {
  const card = home
    .split('<article class="card">')
    .slice(1)
    .map((fragment) => `<article class="card">${fragment}`)
    .find((fragment) => fragment.includes(`href="${page}"`));
  assert.ok(card, `Homepage should link the ${heading} card to ${page}`);
  assert.match(card, new RegExp(`<h3>${heading}<\\/h3>`));

  const pageHtml = read(page);
  assert.match(pageHtml, new RegExp(`<h1>${heading.replaceAll(' Perth', ' in Perth')}<\\/h1>|<h1>${heading}<\\/h1>`));
  const title = pageHtml.match(/<title>([^<]+)<\/title>/)[1];
  assert.match(title, /Perth \| Ellis(?: Services Group)?$/);
  assert.ok(title.length < 85, 'service title should be concise');
  assert.equal(pageHtml.match(/property="og:title" content="([^"]+)"/)[1], title, 'share title matches search title');
}

console.log('PASS: keyword-led service headings align across homepage cards and service pages.');
