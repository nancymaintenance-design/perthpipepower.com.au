import { isDeepStrictEqual } from 'node:util';
import type { LayoutData, PageData } from '../types.mjs';
import { assertNoReservedMarkers, escapePlainText } from './document.mjs';

function jsonLdText(page: PageData, index: number): string {
  const value = page.seo.jsonLd[index];
  let serialized: string;
  try {
    serialized = JSON.stringify(value);
    if (!value || typeof value !== 'object' || !isDeepStrictEqual(JSON.parse(serialized), value)) {
      throw new Error('lossy JSON value');
    }
  } catch {
    throw new Error(`Invalid JSON-LD value ${index} for ${page.file}`);
  }
  const source = page.seo.jsonLdSource?.[index];
  if (page.seo.jsonLdSource !== undefined) {
    try {
      if (typeof source !== 'string' || !isDeepStrictEqual(JSON.parse(source), value)) throw new Error('mismatch');
      serialized = source;
    } catch {
      throw new Error(`Invalid JSON-LD source companion ${index} for ${page.file}`);
    }
  }
  assertNoReservedMarkers(serialized, 'JSON-LD');
  // HTML parses script text before JSON. Escaping '<' blocks closing-script and
  // comment/script-state injection while retaining the authoritative JSON value.
  // Ordinary frozen source has no '<', so its raw formatting remains identical.
  return serialized.replace(/</g, '\\u003c');
}

export function renderHead(page: PageData, layout: LayoutData): string {
  const seo = page.seo;
  if (seo.jsonLdSource !== undefined && seo.jsonLdSource.length !== seo.jsonLd.length) {
    throw new Error(`Invalid JSON-LD source companion count for ${page.file}`);
  }
  const counts: Record<string, number> = {};
  let socialIndex = 0, jsonLdIndex = 0;
  const result = layout.headSlots.map(slot => {
    if (slot.kind === 'static') {
      assertNoReservedMarkers(slot.html, 'static head');
      return slot.html;
    }
    counts[slot.key] = (counts[slot.key] ?? 0) + 1;
    switch (slot.key) {
      case 'title': return `<title>${escapePlainText(seo.title)}</title>`;
      case 'description': return `<meta name="description" content="${escapePlainText(seo.description)}">`;
      case 'canonical': return `<link rel="canonical" href="${escapePlainText(seo.canonical)}">`;
      case 'robots':
        if (seo.robots === null) throw new Error(`Invalid robots head slot for ${page.file}`);
        return `<meta name="robots" content="${escapePlainText(seo.robots)}">`;
      case 'social': {
        const social = seo.social[socialIndex++];
        if (!social || !['name', 'property'].includes(social.attribute)) throw new Error(`Invalid social metadata slot for ${page.file}`);
        return `<meta ${social.attribute}="${escapePlainText(social.key)}" content="${escapePlainText(social.value)}">`;
      }
      case 'jsonLd': return `<script type="application/ld+json">${jsonLdText(page, jsonLdIndex++)}</script>`;
      default: throw new Error(`Invalid head slot for ${page.file}`);
    }
  }).join('');
  for (const [key, expected] of Object.entries({ title: 1, description: 1, canonical: 1,
    robots: seo.robots === null ? 0 : 1, social: seo.social.length, jsonLd: seo.jsonLd.length })) {
    if ((counts[key] ?? 0) !== expected) throw new Error(`Invalid head slot count ${key} for ${page.file}`);
  }
  assertNoReservedMarkers(result, 'head');
  return result;
}
