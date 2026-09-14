const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const iconHref = '/favicon-ellis-512.png';
const icon = fs.readFileSync(path.join(root, iconHref.slice(1)));
if (icon.length < 24 || !icon.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])) || icon.toString('ascii', 12, 16) !== 'IHDR') throw new Error('Invalid PNG favicon');
const width = icon.readUInt32BE(16);
const height = icon.readUInt32BE(20);
if (width !== height || width < 48) throw new Error(`Favicon must be square and at least 48px, found ${width} x ${height}`);
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (entry.name === '.git' || entry.name === 'node_modules') return [];
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : entry.name.endsWith('.html') ? [file] : [];
  });
}
const iconTags = /<link\b(?=[^>]*\brel\s*=\s*["'](?:shortcut\s+)?icon["'])[^>]*>/gi;
const files = walk(root);
if (!files.length) throw new Error('No HTML pages found');
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] || '';
  const links = head.match(iconTags) || [];
  if (links.length !== 1 || (html.match(iconTags) || []).length !== 1) throw new Error(`${file}: expected one favicon in head`);
  const href = links[0].match(/\bhref\s*=\s*["']([^"']+)["']/i)?.[1];
  if (href !== iconHref) throw new Error(`${file}: unexpected favicon path ${href}`);
  const target = href.startsWith('/') ? path.join(root, href.slice(1)) : path.resolve(path.dirname(file), href);
  if (!fs.existsSync(target)) throw new Error(`${file}: favicon target missing`);
  const relative = path.relative(root, file).split(path.sep).join('/');
  const baseline = execFileSync('git', ['show', `HEAD:${relative}`], { cwd: root, encoding: 'utf8' });
  const normalise = text => text.replace(iconTags, '').replace(/\r\n/g, '\n').replace(/\n$/, '');
  if (normalise(html) !== normalise(baseline)) throw new Error(`${relative}: changes beyond favicon`);
}
console.log(`PASS: ${files.length} pages; unique favicon links; existing ${width}x${height} PNG; no other HTML changes against HEAD.`);
