import type { SiteData } from '../types.mjs';
import { validateSiteData } from '../validate-content.mjs';
import { assets as approvedAssets } from '../content/assets.mjs';
import { renderPage } from '../templates/page.mjs';

/** Canonical typed data is the only content input. No filesystem or clock. */
export function renderSite(site: SiteData): ReadonlyMap<string, string> {
  const differences = validateSiteData(site);
  if (differences.length) throw new Error(`Invalid site content: ${differences.map(d => `${d.file}:${d.field}`).join(', ')}`);
  if (site.assets.length !== approvedAssets.length || site.assets.some(file => !approvedAssets.includes(file))) {
    throw new Error('Invalid public asset allowlist');
  }
  for (const file of ['ai-content.json', 'llms.txt', 'robots.txt', 'sitemap.xml']) {
    if (!site.artifacts[file]) throw new Error(`Missing required public artifact: ${file}`);
  }
  const urls = [...site.artifacts['sitemap.xml']!.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map(match => match[1]);
  const expectedUrls = site.pages.filter(page => page.file !== 'privacy.html').map(page => page.seo.canonical).sort();
  if (JSON.stringify([...urls].sort()) !== JSON.stringify(expectedUrls)) throw new Error('Invalid sitemap membership');
  const output = new Map<string, string>();
  for (const page of site.pages) output.set(page.file, renderPage(page, site));
  for (const [file, text] of Object.entries(site.artifacts)) {
    if (text.includes('{{ppp:')) throw new Error(`Unresolved artifact content marker: ${file}`);
    output.set(file, text);
  }
  return new Map([...output].sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0));
}
