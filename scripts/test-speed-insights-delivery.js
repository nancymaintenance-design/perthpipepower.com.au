import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const root = path.resolve(import.meta.dirname, '..');
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
