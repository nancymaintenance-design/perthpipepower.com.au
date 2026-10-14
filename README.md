# Perth Pipe Power static site

The editable website is maintained in `E:/Ellis-Services/Perth Pipe Power/source`.
The TypeScript content model and shared templates produce static HTML in `dist/`.
The existing `.html` URLs, relative assets, metadata and publication dates are preserved.

## Content and rendering

- Start at the canonical registry `site/content/records.mts` to locate the owning
  record in `site/content/pages/*.mts`. Edit its authoritative SEO fields, structured
  FAQ items and page prose. Some fragments contain `ppp:page`/`ppp:shared` bindings;
  edit the referenced canonical field, not a rendered copy of that binding.
- Business identity and hours have one editable authority: `site/content/shared.mts`.
  `site/content/identity.mts` validates date/suburb JSON records and exposes identity
  views; `authority.mts` and `legacy/` supply derived, readonly compatibility views.
  `site/content/pages.mts` materializes the canonical registry for rendering.
- `site/content/layouts.mts` holds layout structure. `page-values.mts` resolves page
  bindings; structural edits must also retain or deliberately update compatibility
  node references and pass the content/compatibility tests.
- `site/templates/` renders the shared document, SEO head, navigation, footer,
  FAQ, breadcrumbs and page layouts.
- `site/content/assets.mts` is the public resource allowlist; `site/content/artifacts.mts`
  carries the inherited robots, sitemap and public feed texts.
- `data/sitemap-content-dates.json` is the existing date/provenance record. A build does
  not refresh publication dates. Intentional content/date changes require review together.
- Compatibility modules in `data/` and `scripts/lib/ts-compat.cjs` read the same compiled
  model. Old root-writing CLIs fail with guidance to run the canonical build.

Do not edit generated `.build/`, `dist/` or the retained root HTML as content sources.
The root HTML remains the approved legacy/provenance snapshot. The 2026-10-14 approved repair changes only navigation.js, site.css and field-design.css at runtime. Imagery, enquiry behavior and api/enquiry.js remain preserved. Narrow `.gitattributes` rules preserve frozen
public asset bytes across Git checkouts. Do not normalize their line endings.

## Local commands

Use Node.js 24.19.0 and the exact dependencies in the lockfile.

```text
npm ci --ignore-scripts
npm run typecheck
npm run build
npm test
npm run validate:seo
npm run test:browser
```

`compile` emits `.build/`; `build` validates all records before writing the controlled
`dist/` output. `npm test` builds first and explicitly selects the Node suites.
`validate:seo` checks actual `dist/`. A source archive does not need Git history:
historical public expectations are checked in with their original commit provenance.
The frozen content manifest is `tests/fixtures/ts-migration/baseline.json`; ordinary
builds and tests never update it. `baseline:freeze` is an explicit migration tool,
not a remedy for failing preservation tests.

Browser verification uses the installed Microsoft Edge channel, without downloading
a browser, and Python 3.12 for `scripts/preview-dist.py`. Playwright requires an already-running preview and never starts or stops it. The current user-started preview is http://127.0.0.1:4189 (PID 40784).
The 18 original PNGs and inventory are versioned in `tests/fixtures/ts-migration/screenshots`
without refreshing their bytes. Only a `http://127.0.0.1` preview is accepted. The preview serves `dist/`
and reads routing configuration separately, denies private paths, sets noindex/no-store,
blocks external connections/forms with CSP and refuses real POSTs. Set `TS_PREVIEW_URL`
only if a different local test port is required. Tests intercept dummy enquiry responses;
they must never call the real enquiry backend or send analytics.

For a separately authorized future preview session, the helper command is:

```text
python scripts/preview-dist.py --root dist --config vercel.json --port 4189
```

The helper binds only to 127.0.0.1. If the port is occupied, it chooses the next free
one and prints the actual address; set `TS_PREVIEW_URL` to that address for tests.

Test logs, screenshots, browser profiles and temporary fixtures belong in this site's
`reports/content-navigation-repair-2026-10-14`, never in public `dist/`. Set process-local
`TEMP`, `TMP`, `TMPDIR` and `npm_config_cache` there before running tools on this workstation.

## Delivery boundary

The public output is 48 HTML pages, 47 sitemap URLs, 239 assets and four public text
artifacts (291 files in total). Privacy remains noindex. Report evidence and the local
acceptance brief live beside the source, under `../reports/content-navigation-repair-2026-10-14`.
Task reviews and whole-branch approval are separate from automated checks.

Publishing requires fresh explicit user authorization and the GitHub → Vercel automatic
build path. This local migration does not push, merge, deploy or modify Google/platform
settings. No runtime secrets belong in the repository or reports.


## Approved content/navigation repair evidence

The original migration baseline and all 18 PNGs remain byte-identical provenance. Its earlier browser result was 57/59 with inherited capture/raster limitations; this revision does not accept that historical migration. Normal tests now apply the explicit page/region before-and-after policy in `tests/fixtures/content-navigation-repair` to the original DOM, retaining strict metadata, assets, legal, price, hours, links and artifact checks. `tests/support/approved-content.cjs` never reads Git history, retained root HTML or current dist to construct expectations. Production content remains solely in canonical TypeScript records.

The original pixel comparisons are an explicit historical diagnostic, against a layout intentionally superseded by this approval. Run separately in PowerShell with `$env:TS_HISTORICAL_VISUAL='1'; npm run test:browser -- --grep 'historical migration provenance'`, then remove that process-local variable. Their incompatibility must not be reported as a new-design regression or a historical pass. Normal browser tests cover the approved layout, sticky/dropdown geometry, local map fallback, complete HTTP bodies, native/no-JS navigation, booking context, mock-only form success/failure and new-state screenshots at 320/390/1440.

`statement-topics.json` and `statement-answer-edits.json` are independent test evidence for 139 reviewed QA-to-statement entries, including exact topic/answer pairing and only explicitly approved complete-sentence edits. They are never consumed by production. The full task report and authored edit evidence are in the current report directory. The named current report root and historical migration report root are the only permitted isolated fixture roots; all existing physical path/link protections remain active.
