const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const path = require('node:path');

const result = spawnSync(process.execPath, ['scripts/validate-seo.js'], {
  cwd: path.join(__dirname, '..'),
  encoding: 'utf8',
});

assert.equal(result.status, 0, result.stdout + result.stderr);
assert.doesNotMatch(result.stdout + result.stderr, /missing canonical/);

console.log('SEO validator recognises multiline canonical tags.');
