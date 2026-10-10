const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.join(__dirname, '..');
const measurementId = 'G-HZ6PKHKGWH';
const pages = fs.readdirSync(root, { recursive: true }).filter(file => file.endsWith('.html') && fs.statSync(path.join(root, file)).isFile());

test('every public HTML page has one Perth Pipe Power GA4 configuration', () => {
  for (const relative of pages) {
    const html = fs.readFileSync(path.join(root, relative), 'utf8');
    assert.match(html, new RegExp(`https://www\\.googletagmanager\\.com/gtag/js\\?id=${measurementId}`), relative);
    assert.equal((html.match(new RegExp(`gtag\\(\\s*["']config["']\\s*,\\s*["']${measurementId}["']\\s*\\)\\s*;`, 'g')) || []).length, 1, relative);
  }
});
