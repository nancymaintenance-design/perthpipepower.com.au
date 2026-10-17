# 本地中文草稿编辑器

范围：仅 editor/ui，现有公开网站样式及行为不受本文件变更影响。

- Token ownership: Model B, consume field-design.css --field-*; no public token changes. White editor surfaces use --editor-surface.
- Native select owns page and field selection; platform popup geometry is accepted. All labels Chinese; source English remains visible for reference.
- Save is explicit, pessimistic and server-confirmed. Revision conflicts preserve all typed values; no force overwrite. No deployment, Git or email actions.
- Page switching with unsaved changes uses native HTML dialog with app-owned Chinese content; keep editing receives focus. Browser close uses beforeunload only when dirty.
- One status region announces load/save/failure. Failures remain visible and retry never discards changes.
- Desktop: real iframe preview plus natural-height editing panel. Narrow screens stack editor before preview. No fixed-height form scroller; iframe owns public-page scroll.
- Textarea: resize:none, at least 10 rows; input preserved after errors. No automatic save during IME composition.
- Route document title policy: 编辑：{page title} — 本地中文草稿.
- Route errors: API 403 explains same-origin session boundary; 404 explains unknown page. Client provides reload retry without discarding typed text.
- Safety: public submission handlers removed, form-action none, /api/* rejected. Navigation and contact actions disabled inside editable preview. Maps and footer remain visible.
- 2026-10-17 checkpoint: published Chinese body/FAQ/SEO/labels are the starting values. Text changes group equivalent source strings within this page. Shared nav/footer, factual copy, image replacement and link targets remain locked; no layout editing.
- Chinese explicit save creates a local revision and invalidates any prior English proposal by revision/hash. Assistant imports English proposal through a local CLI only after a chat instruction; UI renders all before/after values and English preview read-only. Confirming the proposal marks a local candidate, never performs Git/deploy/canonical application.
- History has at most20 revisions. Restore creates a new revision of the current page and invalidates prior translation. Legacy drafts remain byte-for-byte untouched until an explicit save; first migrated save archives a complete copy. Old shared-label overrides remain visible read-only rather than changing shared nav.
- Default working preview is Chinese; English preview uses only a matching proposal or current published English. Page choice is URL-restorable. Page search is local, IME-safe and transient; it is not persisted because it is only a temporary picker filter over48knownpages.

## Canonical UI Map

| Capability | Canonical owner | Source of truth | Allowed variants | Verification |
|---|---|---|---|---|
| Select/Listbox | Native HTML select in editor/ui | This contract | Platform-owned popup geometry | editor-workflow.browser.cjs |
| Form | client.ts controls/validation + content.mts server validator | Approved bilingual editor spec §4–7 | Chinese write; English read-only | editor-content/editor-server tests |
| Scrollbar | editor.css global editor-app baseline | DESIGN.md runtime Model B | iframe owns page scroll; panel natural height | browser computed styles/screenshots |
| Toast | client.ts message + persistent #status | This contract | status/error; no transient-only critical messages | browser failure paths |
| CRUD | server.mts/store.mts/workflow.mts | Approved spec §5–7 | explicit save, new-revision restore, local candidate approval | editor-workflow.browser.cjs |

Business sources: docs/superpowers/specs/2026-10-16-bilingual-local-editor-design.md §4–7; current user instruction2026-10-17. Explicit local-only save and confirmation supersede previous public-release authorization. No destructive deletion, billing, remote accounts or new legal copy.
