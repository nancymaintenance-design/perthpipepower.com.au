const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('./support/public-paths.cjs');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const html = fs.readFileSync(path.join(resolvePublicRoot(), 'about.html'), 'utf8');
const core = html.match(/<section class="section"><div class="shell text-column">[\s\S]*?<\/section>/)?.[0] || '';
for(const heading of ['Plumbing Repairs','Electrical Repairs','Property Maintenance']) assert.match(core,new RegExp('<h3>'+heading+'<\\/h3>'));
for(const href of ['plumbing.html','electrical.html','property-management.html','blocked-drains-perth.html','water-leak-detection-perth.html','hot-water-problems-perth.html']) assert(core.includes('href="'+href+'"'),href);
assert.match(core,/homeowners, rental properties, strata properties and property managers/);
assert.match(html,/<h1>Plumbing, Electrical Repairs and Property Maintenance in Perth<\/h1>/);
console.log('About core-service introduction and company audience contract passed.');
