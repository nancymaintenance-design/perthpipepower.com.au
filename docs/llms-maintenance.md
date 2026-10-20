# Curated bilingual llms.txt

Canonical source: `site/content/llms.mts`, wired through the existing `site/content/artifacts.mts` and shared business tokens. `npm run build` writes `dist/llms.txt`. Do not edit the legacy root file or generated `dist` output.

The directory selects 17 real English/Chinese page pairs, not every sitemap entry. Summaries were reviewed against the published bodies; evidence and the pairing list are in the site's sibling `reports/llms-bilingual-20261020` folder. There are no verified independent customer-case pages in this selection, so no case-study group is included.

When a selected page changes:

1. Read both public page bodies and confirm their actual language pairing, canonical URLs, indexability and sitemap presence.
2. Update only the relevant label or summary. Keep formal absolute owner URLs; exclude drafts, private routes, API, previews, redirects and noindex pages.
3. Update the exact reviewed llms fixture and prior-hash guard in `tests/support/approved-content.cjs` deliberately; do not recapture page baselines.
4. Run `npm test`, `npm run validate:seo`, then GET the generated llms file and every selected public URL. Check final URL, status, body, language, canonical and reciprocal hreflang. Preserve robots and existing training policies.
5. Review the public-output diff: this directory must not change website pages, JSON-LD, feeds, layouts or existing business facts. Publication requires separate user approval.

This is an optional public reading directory, not a Google ranking/indexing switch or a guarantee of AI recommendation. Simulated User-Agent requests do not prove a real crawler has visited, indexed or cited the site. No runtime model calls, llms-full.txt or Markdown page mirrors are required.
