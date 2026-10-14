import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { captureBaseline } from '../site/baseline.mjs';

const [command, ...args] = process.argv.slice(2);
if (command !== 'freeze' || args.length > 3) {
  throw new Error('Explicit freeze required: migration-baseline.mjs freeze [publicRoot] [reportRoot] [manifestPath]');
}
const publicRoot = resolve(args[0] ?? '.');
const reportRoot = resolve(args[1] ?? '../reports/typescript-migration-2026-10-13/baseline');
const manifestPath = resolve(args[2] ?? 'tests/fixtures/ts-migration/baseline.json');
if (existsSync(manifestPath)) throw new Error(`Frozen manifest already exists; inspect it before explicitly replacing it: ${manifestPath}`);
const manifest = captureBaseline(publicRoot, reportRoot);
if (Object.keys(manifest.pages).length !== 48 || manifest.sitemapUrls.length !== 47) throw new Error('Expected exactly 48 pages and 47 sitemap URLs');
if (!manifest.pages['privacy.html']?.robots?.includes('noindex')) throw new Error('Privacy page must remain noindex');
if (manifest.pages['index.html']?.canonical !== 'https://perthpipepower.com.au/') throw new Error('Homepage canonical changed');
const headings = manifest.pages['electrical.html']?.headings ?? [];
if (!headings.some(item => item.text === 'Electrical Maintenance for Perth Property Managers')) throw new Error('Current heading corrections are missing');
const electricalHtml = readFileSync(resolve(publicRoot, 'electrical.html'), 'utf8');
if (!electricalHtml.includes('contact.html?service=electrical.html') || !manifest.assets['booking-context.js']) throw new Error('Current booking context is missing');
mkdirSync(dirname(manifestPath), { recursive: true });
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
writeFileSync(resolve(reportRoot, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Frozen ${Object.keys(manifest.pages).length} pages, ${manifest.sitemapUrls.length} sitemap URLs, ${Object.keys(manifest.assets).length} public assets: ${manifestPath}`);
