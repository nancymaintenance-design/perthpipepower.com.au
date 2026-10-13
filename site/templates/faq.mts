import type { FaqItem, TrustedHtml } from '../types.mjs';
import { assertNoReservedMarkers, escapePlainText, renderSlots } from './document.mjs';

export function renderFaq(items: readonly FaqItem[], container: TrustedHtml): string {
  const bindings: Record<string, string> = {};
  for (const [index, item] of items.entries()) {
    bindings[`faq:${index}:question`] = escapePlainText(item.question);
    assertNoReservedMarkers(item.answer, 'FAQ answer');
    bindings[`faq:${index}:answer`] = item.answer;
  }
  // Some legacy section arrangements place their explicit breadcrumbs here.
  // The page compositor resolves that placement after rendering every section.
  return renderSlots(container, bindings, 'FAQ', ['breadcrumbs']);
}
