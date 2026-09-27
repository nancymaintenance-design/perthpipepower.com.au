const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const css = fs.readFileSync(path.join(__dirname, '..', 'mega-menu.css'), 'utf8');

assert.match(
  css,
  /@media\s*\(min-width:\s*801px\)[\s\S]*?\.mega-menu\s*\{[\s\S]*?position:\s*fixed/,
  'Desktop mega menus should be fixed to the viewport rather than their nav item.',
);
assert.match(
  css,
  /max-height:\s*calc\(100vh\s*-\s*[^)]+\)/,
  'Desktop mega menus should reserve space within the viewport height.',
);
assert.match(
  css,
  /overflow-y:\s*auto/,
  'Long desktop mega menus should scroll inside their visible region.',
);
assert.match(
  css,
  /\.site-nav\s+\.mega-menu\s*\{[\s\S]*?display:\s*grid/,
  'Desktop mega menus should override the base navigation flex layout.',
);
assert.match(
  css,
  /@media\s*\(max-width:\s*800px\)[\s\S]*?\.mega-menu\s*\{[\s\S]*?position:\s*static/,
  'Mobile mega menus should retain their in-flow accordion layout.',
);

console.log('PASS: mega menus remain contained in the desktop viewport and mobile flow.');
