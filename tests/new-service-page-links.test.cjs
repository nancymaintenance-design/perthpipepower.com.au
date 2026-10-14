const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('./support/public-paths.cjs');
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {hasLocalLink}=require('../scripts/lib/link-assertions.cjs');
const root = resolvePublicRoot();

const expected = {
  "fixtures-appliances-perth.html": [
    "tap-mixer-repairs-perth.html",
    "toilet-repairs-perth.html",
    "hot-water-problems-perth.html",
    "lighting-power-points-perth.html",
    "service-areas.html",
    "contact.html",
  ],
  "renewables-smart-home-perth.html": [
    "power-faults-perth.html",
    "safety-switch-tripping-perth.html",
    "lighting-power-points-perth.html",
    "electrical.html",
    "service-areas.html",
    "contact.html",
  ],
};

for (const [file, hrefs] of Object.entries(expected)) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  assert.ok(!html.includes("service-page-depth.js"), `${file} should use its dedicated related-services content`);
  hrefs.forEach((href) => assert.ok(hasLocalLink(html,href), `${file} should link to ${href}`));
}
console.log("PASS: new service pages use dedicated, topic-relevant internal links.");
