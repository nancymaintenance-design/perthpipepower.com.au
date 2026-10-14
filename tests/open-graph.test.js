const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('./support/public-paths.cjs');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = resolvePublicRoot();
const internalDirectories = new Set(['node_modules', '.build', 'dist', 'playwright-report', 'test-results']);
const htmlFiles = fs.readdirSync(root, { recursive: true })
  .filter((file) => !file.split(path.sep).some(part => internalDirectories.has(part)) && file.endsWith('.html') && !path.basename(file).startsWith('google') && fs.statSync(path.join(root, file)).isFile());

test('every indexable HTML document has Open Graph title, description, URL and type', () => {
  const missing = [];
  for (const relative of htmlFiles) {
    const html = fs.readFileSync(path.join(root, relative), 'utf8');
    for (const property of ['og:title', 'og:description', 'og:url', 'og:type']) {
      if (!new RegExp(`property=["']${property}["']`, 'i').test(html)) missing.push(`${relative}: ${property}`);
    }
    assert.doesNotMatch(html, /property=["']og:(?:title|description)["'][^>]*&amp;amp;/i, `${relative}: Open Graph content must not double-encode entities`);
  }
  assert.deepEqual(missing, []);
});
