const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const home = read('index.html');

function cardFor(href) {
  const card = home
    .split('<article class="card">')
    .slice(1)
    .map((fragment) => `<article class="card">${fragment}`)
    .find((fragment) => fragment.includes(`href="${href}"`));
  assert.ok(card, `Homepage should present a service card linking to ${href}`);
  return card;
}

for (const [pageHref, cardHeading, image] of [
  ['fixtures-appliances-perth.html', 'Fixtures &amp; appliances', 'fixtures-appliances-service.png'],
  ['renewables-smart-home-perth.html', 'Renewables &amp; smart home', 'renewables-smart-home-service.png'],
]) {
  const card = cardFor(pageHref);
  assert.match(card, new RegExp(`<h3>${cardHeading}<\\/h3>`));
  assert.match(card, new RegExp(`<img[\\s\\S]*?src="${image}"`));
  const page = read(pageHref);
  assert.match(page, new RegExp(`<img class="service-page-image" src="${image}"`));
  assert.match(page, /<form class="contact-card" data-enquiry-form novalidate>/);
  assert.match(page, /<link rel="canonical" href="https:\/\/perthpipepower\.com\.au\//);
}

assert.equal((home.match(/<article class="card">/g) || []).length, 6, 'Homepage service grid should contain six cards');
console.log('PASS: homepage presents six service cards with two complete new service pages.');
