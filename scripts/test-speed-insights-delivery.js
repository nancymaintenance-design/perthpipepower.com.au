const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('../tests/support/public-paths.cjs');
const assert = require('node:assert/strict');
const { readdir, readFile } = require('node:fs/promises');
const path = require('node:path');
const test = require('node:test');

const root = resolvePublicRoot();
const loader = '/_vercel/speed-insights/script.js';

test('every public HTML page loads the Vercel Speed Insights client', async () => {
  const entries = await readdir(root);
  const pages = entries.filter((entry) => entry.endsWith('.html'));

  assert.ok(pages.length > 0, 'expected public HTML pages');

  for (const page of pages) {
    const html = await readFile(path.join(root, page), 'utf8');
    assert.match(html, new RegExp(loader.replaceAll('/', '\\/')),
      `${page} should include the Speed Insights loader`);
  }
});
