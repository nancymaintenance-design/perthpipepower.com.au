import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const pages = readdirSync(root).filter((name) => name.endsWith('.html'));

test('every public PPR page loads the first-party Speed Insights client', () => {
  assert.ok(pages.length > 1, 'the static site should expose more than one public page');

  for (const page of pages) {
    const html = readFileSync(resolve(root, page), 'utf8');
    assert.match(
      html,
      /<script>window\.si=window\.si\|\|function\(\)\{\(window\.siq=window\.siq\|\|\[\]\)\.push\(arguments\)\};<\/script><script defer src="\/_vercel\/speed-insights\/script\.js"><\/script>/,
      `${page} must initialize and load the first-party Speed Insights client`,
    );
  }
});
