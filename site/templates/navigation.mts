import { headers } from '../content/layouts.mjs';
import type { ChromeTemplate, PageData, SiteData } from '../types.mjs';
import { escapePlainText, renderSlots } from './document.mjs';

/** Both text and quoted attribute bindings are decoded plain strings. */
export function renderChrome(page: PageData, template: ChromeTemplate): string {
  const bindings: Record<string, string> = {};
  for (const [key, kind] of Object.entries(template.slots)) {
    if (kind !== 'text' && kind !== 'attribute') throw new Error(`Invalid chrome slot kind ${key}`);
    const value = page.chromeBindings?.[key];
    if (typeof value !== 'string') throw new Error(`Invalid chrome binding ${key} for ${page.file}`);
    bindings[key] = escapePlainText(value);
  }
  return renderSlots(template.html, bindings, `chrome for ${page.file}`);
}

export function renderNavigation(page: PageData, site: SiteData): string {
  const layout = site.layouts[page.layoutId];
  const template = layout && headers[layout.headerId];
  if (!template) throw new Error(`Invalid navigation layout for ${page.file}`);
  const original = renderChrome(page, template);
  // Directory and legal pages share the established service menu, including
  // native links when scripts are unavailable. Keep each page's contact scope.
  const standard = site.pages.find(p => p.file === 'electrical.html')!;
  const contact = original.match(/class="nav-cta"[^>]*href="([^"]+)"|href="([^"]+)"[^>]*class="nav-cta"/) ;
  const href = contact?.[1] ?? contact?.[2] ?? 'contact.html';
  const unified = /id="plumbing-menu"/.test(original) ? original :
    renderChrome(standard, headers[site.layouts[standard.layoutId].headerId]).replace(/<div class="utility">[\s\S]*?<\/div>\s*<\/div>/, '').replace('href="contact.html?service=electrical.html" class="nav-cta"', `href="${href}" class="nav-cta"`).replace('class="nav-cta" href="contact.html?service=electrical.html"', `class="nav-cta" href="${href}"`);
  const route = page.file === 'index.html' ? '/' : page.file;
  return unified.replace(/<nav\b/, '<button class="nav-toggle" type="button" aria-controls="main-nav" aria-expanded="false">Menu</button><nav')
    .replace('Renewables &amp; smart home','Smart lighting &amp; controls')
    .replace('Energy equipment, automation and electrical upgrade enquiries.','Smart lighting, switches, sensors and basic controls.')
    .replace(/\saria-current="[^"]*"/g, '').replace(/<nav\b[\s\S]*?<\/nav>/, nav =>
    nav.replace(/<a\b([^>]*?)href="([^"]+)"([^>]*)>/g, (all, before, target, after) =>
      target === route && !['plumbing.html', 'electrical.html'].includes(route) ? `<a${before}href="${target}"${after} aria-current="page">` : all)
      .replace(/<button\b([^>]*?)aria-controls="(plumbing|electrical)-menu"([^>]*)>/g,
        (all, before, topic, after) => route === `${topic}.html` ? `<button${before}aria-controls="${topic}-menu"${after} aria-current="page">` : all)
  );
}
