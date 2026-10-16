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
- Checkpoint limitations: rich text + SEO only. FAQ structured records, nav/footer shared editing, images/history restore and translation approvals are not yet editable. English shown in unfinished regions; preview never claims complete translation.
