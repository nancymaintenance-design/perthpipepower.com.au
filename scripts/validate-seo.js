const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const origin = 'https://perthpipepower.com.au';
const issues = [];
const pages = fs.readdirSync(root).filter((name) => name.endsWith('.html'));

for (const page of pages) {
  const html = fs.readFileSync(path.join(root, page), 'utf8');
  const canonical = html.match(/<link rel="canonical" href="([^"]+)">/);
  const expected = `${origin}/${page === 'index.html' ? '' : page}`;
  if (!canonical) issues.push(`${page}: missing canonical`);
  else if (canonical[1] !== expected) issues.push(`${page}: canonical must be ${expected}`);
}

const robots = fs.readFileSync(path.join(root, 'robots.txt'), 'utf8');
if (!robots.includes(`Sitemap: ${origin}/sitemap.xml`)) issues.push('robots.txt: incorrect sitemap URL');

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
for (const match of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  if (!match[1].startsWith(`${origin}/`)) issues.push(`sitemap.xml: non-canonical URL ${match[1]}`);
}

if (issues.length) {
  console.error(issues.join('\n'));
  process.exit(1);
}

console.log(`Validated ${pages.length} canonical tags, robots.txt and sitemap.xml.`);
