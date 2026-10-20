# Customer service navigation

Source: `site/navigation/customer-paths.mts`. The 48 explicit route records are shared by both languages; labels, real parent, service owner and the reason for the relationship are reviewed together. Do not infer parents from URL segments or automatically turn every guide into a service child.

`renderLocalizedPage` projects the visible breadcrumb and matching JSON-LD after approved translation. `renderBilingualSite` validates coverage, parent cycles, indexability and service-owner types before rendering. No URL, canonical, hreflang or business-schema migration is part of this feature.

When adding a public route, add its explicit record, verify its body and counterpart, and provide a genuine entry on its parent. For a single-service guide choose the actual service; keep mixed-topic news under News. Only add a contextual service/enquiry entry when the page supports that service. Preserve existing business facts and the enquiry endpoint.

Run `npm.cmd run build`, `npm.cmd run typecheck`, `npm.cmd run validate:seo` and `npm.cmd test`. Navigation tests check all bilingual pages. Strict DOM baselines record exact old/new fragments; never replace the entire approved baseline simply to make a failing test pass. A separately reviewed, bounded fixture update is required for intentional future changes.

`conversion-events.js` reuses the existing single click handler. `breadcrumb_click` records source_path, target_path, locale, position and owner_id; no query string or personal data. It is not a lead conversion. Existing service, telephone and form-success events remain separate. GA4 custom-dimension registration and reporting require separate account access; this task does not change GA4 administration.

Evidence and before/after mappings for this local candidate: `../reports/breadcrumbs-20261020/`. No production release is implied by a local build. After an approved release, retain the release date and commit, compare complete 28-day pre-release data with 28/56-day follow-ups by language, device, geography and brand/non-brand queries, and verify actual received enquiries separately from click events.
