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
  return renderChrome(page, template);
}
