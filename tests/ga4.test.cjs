const {SOURCE_ROOT, resolvePublicRoot, createFixture} = require('./support/public-paths.cjs');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = resolvePublicRoot();
const measurementId = 'G-HZ6PKHKGWH';
const internalDirectories = new Set(['node_modules', '.build', 'dist', 'playwright-report', 'test-results']);
const pages = fs.readdirSync(root, { recursive: true }).filter(file => !file.split(path.sep).some(part => internalDirectories.has(part)) && file.endsWith('.html') && fs.statSync(path.join(root, file)).isFile());

test('every public HTML page has one Perth Pipe Power GA4 configuration', () => {
  for (const relative of pages) {
    const html = fs.readFileSync(path.join(root, relative), 'utf8');
    assert.match(html, new RegExp(`https://www\\.googletagmanager\\.com/gtag/js\\?id=${measurementId}`), relative);
    assert.equal((html.match(new RegExp(`gtag\\(\\s*["']config["']\\s*,\\s*["']${measurementId}["']\\s*\\)\\s*;`, 'g')) || []).length, 1, relative);
  }
});
