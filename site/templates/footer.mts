import { footers } from '../content/layouts.mjs';
import type { PageData, SiteData } from '../types.mjs';
import { renderChrome } from './navigation.mjs';

export function renderFooter(page: PageData, site: SiteData): string {
  const layout = site.layouts[page.layoutId];
  const template = layout && footers[layout.footerId];
  if (!template) throw new Error(`Invalid footer layout for ${page.file}`);
  return renderChrome(page, template);
}
