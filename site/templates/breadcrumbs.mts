import type { PageData } from '../types.mjs';
import { escapePlainText, renderSlots } from './document.mjs';

export function renderBreadcrumbs(page: PageData): string {
  if (page.breadcrumbContainer === null) {
    if (page.breadcrumbs.length) throw new Error(`Invalid breadcrumb container for ${page.file}`);
    return '';
  }
  if (!page.breadcrumbs.length) throw new Error(`Invalid empty breadcrumb items for ${page.file}`);
  const bindings: Record<string, string> = {};
  for (const [index, item] of page.breadcrumbs.entries()) {
    bindings[`breadcrumb:${index}:label`] = escapePlainText(item.label);
    if (item.href !== null) bindings[`breadcrumb:${index}:href`] = escapePlainText(item.href);
  }
  return renderSlots(page.breadcrumbContainer, bindings, `breadcrumbs for ${page.file}`);
}
