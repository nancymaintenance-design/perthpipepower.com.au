const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('./support/public-paths.cjs');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = resolvePublicRoot();
// The handover guide owns occupant/manager records, not a mechanical catalogue
// of every service that links to it. These three paths return to the actual
// managed-property owner after the unrelated service-chain paragraph is removed.
const handoverReturnOwners={
  'smoke-alarm-maintenance-perth.html':'property-management.html',
  'fixtures-appliances-perth.html':'property-management.html',
  'renewables-smart-home-perth.html':'property-management.html',
};
// Missing rendered summaries deprives readers without JavaScript of the
// symptom/safety/next-step answer. Assert shipped output, not generator text.
for (const file of Object.keys(require('../data/service-commercial-copy.cjs'))) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const main = html.match(/<main\b[\s\S]*?<\/main>/)[0];
  const blocks = [...main.matchAll(/<aside\b[^>]*data-service-answer[^>]*>([\s\S]*?)<\/aside>/g)];
  assert.equal(blocks.length, 1, file + ': one native quick answer');
  const text = blocks[0][1].replace(/<[^>]*>/g, ' ');
  assert.match(text, /assess|inspect|quote/i, file + ': actual next step');
  assert.match(text, /safe|hazard|keep clear|do not/i, file + ': safe reporting boundary');
  assert.doesNotMatch(text, /guaranteed|five.star|certified|within \d+ minutes/i);
  const guide = blocks[0][1].match(/href="(insights[^"#?]*\.html)"/);
  assert(guide, file + ': guide link readable without JavaScript');
  assert(fs.existsSync(path.join(root, guide[1])));
  const guideMain = fs.readFileSync(path.join(root, guide[1]), 'utf8').match(/<main\b[\s\S]*?<\/main>/)[0];
  const returnOwner=handoverReturnOwners[file]??file;
  if(handoverReturnOwners[file])assert.equal(guide[1],'insights-tenant-property-manager-maintenance-handover.html',file+': exact handover route');
  assert(guideMain.includes(`href="${returnOwner}"`), guide[1] + ': contextual return to ' + returnOwner);
  assert.equal((main.match(/<section\b/g)||[]).length, 5, file + ': retained five-part design');
}
const leak = fs.readFileSync(path.join(root, 'water-leak-detection-perth.html'), 'utf8');
assert(leak.match(/data-service-answer[\s\S]*?insights-reporting-a-plumbing-leak.html/));
console.log('PASS: twelve safe native service answers and existing guide pathways.');
