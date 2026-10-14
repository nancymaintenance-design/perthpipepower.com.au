import type { LayoutData } from '../types.mjs';

/** Decoded plain values only; trusted fragments never pass through this helper. */
export function escapePlainText(value: string): string {
  if (typeof value !== 'string') throw new Error('Invalid plain text value');
  assertNoReservedMarkers(value, 'plain text');
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

export function assertNoReservedMarkers(value: string, context: string): void {
  if (typeof value !== 'string' || value.includes('{{ppp:')) {
    throw new Error(`Invalid ${context}: unresolved reserved marker or non-string content`);
  }
}

/** Slots are consumed once, in a single pass, without interpreting replacement text. */
export function renderSlots(
  container: string, bindings: Readonly<Record<string, string>>, context: string,
  deferred: readonly string[] = []
): string {
  if (typeof container !== 'string') throw new Error(`Invalid ${context} slot container`);
  for (const [key, value] of Object.entries(bindings)) {
    assertNoReservedMarkers(value, `${context} binding ${key}`);
    if (container.split(`{{ppp:${key}}}`).length !== 2) {
      throw new Error(`Invalid ${context} slot ${key}: expected exactly one occurrence`);
    }
  }
  const result = container.replace(/\{\{ppp:([^}]+)\}\}/g, (marker: string, key: string) => {
    if (Object.hasOwn(bindings, key)) return bindings[key];
    if (deferred.includes(key)) return marker;
    throw new Error(`Invalid ${context}: undeclared slot ${key}`);
  });
  let remainder = result;
  for (const key of deferred) remainder = remainder.replaceAll(`{{ppp:${key}}}`, '');
  assertNoReservedMarkers(remainder, context);
  return result;
}

export function renderDocument(
  layout: LayoutData,
  parts: { head: string; navigation: string; main: string; footer: string }
): string {
  const output = layout.documentOpen + parts.head + layout.bodyOpen + parts.navigation + layout.beforeMain
    + parts.main + layout.afterMain + parts.footer + layout.scripts.join('') + layout.documentClose;
  assertNoReservedMarkers(output, 'document');
  return output;
}
