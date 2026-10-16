# 双语网站与本地 TypeScript 编辑后台实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在保留现有版式和已验收成果的前提下，让用户本机编辑中文草稿，通知助手同步英文，本地确认后再另行授权发布。

**Architecture:** 复用现有TypeScript `PageData`与纯渲染器，增加稳定字段映射及语言覆盖层。独立的TypeScript loopback服务提供点选编辑、持久化草稿与预览；正式静态构建只读取已审内容，不包含后台或本地草稿。

**Tech Stack:** 现有TypeScript／Node.js／parse5、文件型JSON数据、原生浏览器TypeScript客户端、node:test、现有Playwright。不引入云CMS、数据库、自动翻译API或新邮件服务。

**Spec:** `docs/superpowers/specs/2026-10-16-bilingual-local-editor-design.md`（用户2026-10-16已确认）。

## Global Constraints

- 唯一工作副本：`E:/Ellis-Services/Perth Pipe Power/source`；资料与报告分别为同级`obsidian`／`reports`，禁止另建旧副本。
- 生产基线30778a3；设计提交5c6254e仅增加文档。实施前再次核对origin、GitHub最新main、本地改动，禁止覆盖他人成果。
- 保留现有英文网址，中文`/zh/`；语言为`en-AU`／`zh-Hans`，英文为`x-default`。48正式页面，126旧地区永久跳转保持。
- TypeScript代码可沿用`.mts`，浏览器客户端使用`.ts`；最终前台仍输出静态HTML。
- 保持原电话0413 477 667及原href、邮箱、API、收件人、Resend、价格、营业时间、地址、ABN、地图／Reviews和完整页尾。
- 后台仅loopback，默认4200端口；无Git／部署接口，无任意shell命令，无真实邮件测试，无远端环境变量修改。
- 中文保存不自动改英文；英文同步必须绑定中文修订。用户审批候选不自动推送，只有聊天中的明确发布授权才可部署。
- 不重建版式、不自由拖拽、不新增服务事实或营销扩写；不把未完成的翻译或后台原型当完整交付。

## Review Focus

1. 同页打开两个编辑窗口：后保存的过期修订必须返回409，保留前一个有效保存（Task2）。
2. 中文保存后刷新、关闭后台再重启：草稿必须仍在，英文原文不变（Task2、3）。
3. 中文修改后旧英文提案仍打开：审批必须拒绝过期修订，不能显示“已同步”（Task5）。
4. 深层中文页含锚点、咨询参数、图片及外链：页面内链切换语言，资源／电话／邮箱不误加`/zh/`（Task4）。
5. 真实页面模板升级后用户仍有旧草稿：检测字段基线不匹配，阻止覆盖，不按失效DOM下标写入（Task1、5）。

## 文件与职责

- `site/localization/{types,fields,overlay,routes,render,approved}.mts`：类型、稳定字段、白名单覆盖、语言路由、语言渲染与已审内容读取。
- `site/content/locales/{en-AU,zh-Hans}/`：受版本管理的已审语言内容；共享导航／页尾独立记录。未审草稿不放在这里。
- `tools/editor/{store,security,server,uploads,image-decode,workflow,cli}.mts`：原子存储、请求校验、loopback路由、图片暂存／解码、同步／审批、受控本地CLI。
- `editor/ui/{index.html,client.ts,editor.css}`、`tsconfig.editor.json`：仅本地后台UI及独立编译入口，不加入生产asset清单。
- `.local-editor/`：Git忽略的草稿、有限历史和图片暂存；不含真实邮件凭据；不得被静态服务器目录遍历或复制进dist。
- `content-assets/`：候选确认后才进入版本管理的安全图片文件；与后台暂存分开。
- `tests/localization-*.test.cjs`、`tests/editor-*.test.cjs`、`tests/browser/bilingual-editor.spec.cjs`：独立保护、存储／安全、工作流和浏览器测试。

## 时间与交付检查点

十分钟不能作为48页翻译、完整后台与全量安全／回归验收的完成承诺。计划获批并开始执行后，优先争取一个可操作本地首版：页面选择、首页中文点选编辑、保存和预览，英文不变；它仍标记“原型／部分翻译”，不能上线。若十分钟时首版未可用，报告真实进度和阻塞，不交付假端口或用英文占位冒充中文。

原型检查点并不削减完整范围。Task1–2提供基础链路；Task3–6完成全部已批准能力及验收。用户已确认 Native 执行，优先交付本地可编辑、可保存中文草稿的首版。

---

### Task 1: 稳定字段与语言覆盖，保护原英文

**Files:** Create `site/localization/types.mts`、`fields.mts`、`overlay.mts`；Test `tests/localization-fields.test.cjs`。

**Interfaces:**
- `Locale = 'en-AU' | 'zh-Hans'`；`FieldKind = 'text' | 'image' | 'alt' | 'link' | 'seoTitle' | 'seoDescription'`。
- `EditableField { id:string; pageId:string; kind:FieldKind; sourcePath:string; sourceHash:string; value:string; locked:boolean; shared:boolean }`。
- `LocaleBundle { schemaVersion:1; locale:Locale; baseHash:string; values:Record<string,string> }`。
- `collectEditableFields(page:PageData, site:SiteData): readonly EditableField[]`；`applyLocaleOverlay(page:PageData, site:SiteData, bundle:LocaleBundle): PageData`。共享内容按独立共享记录应用，不复制成每页独立事实。

- [ ] **Step1：写失败测试。** `empty_overlay_preserves_all_48_english_pages`断言空覆盖后原渲染输出逐页相同；`protected_fields_reject_edits`断言电话／mailto／地图／价格／布局不可写；`stale_field_hash_is_rejected`断言模板改变后旧字段不被覆盖；`plain_text_is_escaped`断言`<script>`成为文字而非代码。
- [ ] **Step2：运行RED。** `node --test tests/localization-fields.test.cjs`，必须因缺少语言模块而失败，不使用无关语法错误作RED。
- [ ] **Step3：实现上述接口。** 使用parse5的受控节点／属性映射及稳定字段ID；基线指纹不符拒绝应用。不得开放任意HTML替换或改写现有模板布局。
- [ ] **Step4：运行GREEN及保护验证。** `npm run typecheck`、`node --test tests/localization-fields.test.cjs`；48页空覆盖无变化，全部目标测试通过。
- [ ] **Step5：本地提交。** 仅提交本任务实现及测试，记录实际退出码；不推送。

### Task 2: 安全草稿服务和首条可编辑链路

**Files:** Create `tools/editor/store.mts`、`security.mts`、`server.mts`、`editor/ui/index.html`、`editor/ui/client.ts`、`editor/ui/editor.css`、`tsconfig.editor.json`；Modify `.gitignore`、`package.json`；Test `tests/editor-store.test.cjs`、`tests/editor-server.test.cjs`。

**Interfaces:**
- `DraftRevision { pageId:string; revision:number; baseHash:string; changes:Record<string,string>; updatedAt:string; state:'draft'|'needs-translation'|'needs-review'|'approved' }`。
- `readDraft(root:string,pageId:string):Promise<DraftRevision|null>`；`saveDraft(root:string,input:{pageId:string;expectedRevision:number;baseHash:string;changes:Record<string,string>}):Promise<DraftRevision>`。
- `startEditor(options:{host:'127.0.0.1';port:number;sourceRoot:string}):Promise<{url:string;close():Promise<void>}>`。
- 本地API仅`/__editor/api/session`、`pages`、`draft/:pageId`、`preview/:pageId`；保存为PUT，需正确Origin、Host、本地令牌和修订号。公开`/api/*`的真实提交在预览服务一律拒绝。

- [ ] **Step1：写失败测试。** `save_survives_restart_without_english_change`、`stale_revision_returns_409`、`origin_and_token_required`、`path_traversal_rejected`、`preview_cannot_send_mail`，分别断言持久化、409、403、路径白名单及不触发网络邮件调用。
- [ ] **Step2：运行RED。** `node --test tests/editor-store.test.cjs tests/editor-server.test.cjs`，确认缺少服务／存储能力的实际失败。
- [ ] **Step3：实现存储与请求保护。** `.local-editor/`加入Git忽略；临时文件＋原子替换，保留最近20次修订；客户端提供修订号但不能指定文件路径。只允许固定登记页面ID；验证loopback Host、同源Origin及会话令牌。
- [ ] **Step4：实现首条UI链路。** 首页先录入完整首页所需中文初稿字段，点选登记文字、侧栏编辑、保存成功后更新预览；其他未完成页面明确标注。新增`npm run editor:compile`和`npm run editor:dev`，端口冲突自动选择下一空闲端口并打印实际地址，不终止其他进程。
- [ ] **Step5：运行GREEN与首版浏览器检查。** 存储／服务测试通过；实测保存中文、刷新、重启仍保留，英文不变。只有实际监听及HTTP检查成功后才给出原型地址；后续原型不替代完整验收。
- [ ] **Step6：本地提交。** 提交任务文件，不提交`.local-editor`、令牌或临时文件，不推送。

### Task 3: 完整可视化编辑与图片管理

**Files:** Modify `editor/ui/{index.html,client.ts,editor.css}`、`tools/editor/server.mts`、`tools/editor/store.mts`；Create `tools/editor/uploads.mts`、`tools/editor/image-decode.mts`；Test `tests/editor-uploads.test.cjs`、`tests/browser/bilingual-editor.spec.cjs`。

**Interfaces:**
- 消费Task1字段及Task2修订API；UI状态只从成功响应更新，不伪造保存成功。
- `stageImage(root:string,input:{name:string;bytes:Uint8Array}):Promise<{assetId:string;previewUrl:string;width:number;height:number}>`；仅JPEG／PNG／WebP，最多10MiB，核对文件签名及真实可解码尺寸，禁止SVG和可执行文件。
- `decodeImageDimensions(bytes:Uint8Array,mime:'image/jpeg'|'image/png'|'image/webp'):Promise<{width:number;height:number}>`，使用已安装Playwright浏览器的内存图片解码，不联网、不安装新解码器；检测失败即拒绝上传，不把客户端报告的尺寸当安全证明。
- `restoreRevision(root:string,pageId:string,historyRevision:number,expectedRevision:number):Promise<DraftRevision>`，恢复生成新的修订而非覆盖历史。

- [ ] **Step1：写失败测试。** 浏览器测试`click_edit_save_reload`、`shared_footer_edit_is_explicit`、`mobile_editor_usable`、`history_restore_preserves_other_pages`；图片测试`reject_disguised_svg_and_oversize`、`reject_malicious_filename`、`staging_does_not_publish_asset`。
- [ ] **Step2：运行RED。** 定向运行新增测试，确认缺少点选／图片／恢复行为的失败。
- [ ] **Step3：完成编辑界面。** 全部页面列表、搜索、点选高亮、字段编辑、FAQ、内部页面／锚点选择器、图片选择／暂存、SEO栏、桌面／手机尺寸、保存／历史状态。iframe编辑模式阻止真实表单、电话、邮件及外部导航，不保存DOM中的编辑高亮或工具属性。
- [ ] **Step4：实现安全图片和历史恢复接口。** 暂存文件仅按服务器生成ID读取，上传不能选择保存路径；图片替换维持原容器比例。所有写接口复用Task2安全与冲突保护。
- [ ] **Step5：运行GREEN。** 图片／存储／浏览器目标测试全部通过；确认数据持久化与无第二个询盘表单。
- [ ] **Step6：本地提交。** 只提交任务代码及测试，不提交上传暂存或用户草稿。

### Task 4: 48页中文、语言路由及双语SEO

**Files:** Create `site/localization/routes.mts`、`render.mts`、`approved.mts`，`site/content/locales/manifest.json`、`zh-Hans/*.json`及共享记录；Modify `site/localization/types.mts`、`site/templates/navigation.mts`、`head.mts`、`document.mts`、`enquiry-sidebar.mts`和必要表单反馈适配；Test `tests/localization-routes.test.cjs`、`tests/localization-render.test.cjs`、浏览器双语案例。

**Interfaces:**
- `localizedPath(pageFile:string,locale:Locale):string`；`localizeInternalHref(href:string,locale:Locale,knownFiles:readonly string[]):string`。
- `renderLocalizedPage(page:PageData,site:SiteData,options:{locale:Locale;bundle:LocaleBundle;preview:boolean}):string`。
- `validateLocaleCoverage(site:SiteData,bundles:readonly LocaleBundle[]):readonly {pageId:string;fieldId:string;reason:string}[]`。缺少翻译不能静默用整段英文填充。
- `LocaleManifest { enabledLocales:Locale[]; approvals:Record<string,{chineseRevision:number;bundleHash:string;approvedAt:string}> }`，审批key为`<locale>:<pageId>`，初始只启用英文，原英文空覆盖无需伪造审批。
- `loadApprovedLocales(sourceRoot:string):readonly LocaleBundle[]`，核对清单审批及内容hash；中文未审内容仅供本地预览，正式启用中文前必须全48页覆盖和审批通过。

- [ ] **Step1：写失败测试。** `chinese_routes_keep_assets_and_external_targets`、`hreflang_reciprocal_and_canonical_self`、`all_48_chinese_pages_complete`、`visible_faq_matches_localized_schema`、`language_switch_preserves_query_and_anchor`；英文保护测试仅允许明确的语言入口和SEO差异。
- [ ] **Step2：运行RED。** `node --test tests/localization-routes.test.cjs tests/localization-render.test.cjs`，确认缺少路由／翻译等能力的实际失败。
- [ ] **Step3：实现路由和语言渲染。** 英文原路径、中文`/zh/`；内部路径与资源分开处理；表单service键仍使用稳定原页面ID，中文标签／错误反馈本地化，收件逻辑不改。共享导航／页尾仅一个中文来源。
- [ ] **Step4：逐页编写并核对中文。** 48页正文、FAQ、导航、表单反馈及SEO全部完成，不编事实、不引入新承诺、不遗漏联系／安全等原有有效内容。建立字段覆盖清单，核对核心标题与服务意图。
- [ ] **Step5：校验双语SEO及显示。** 各语言自指canonical、双向hreflang／x-default；FAQ与JSON-LD同源，原索引政策和英语日期保留；本地浏览器检查中文深链、菜单、地图／完整页尾及手机布局。
- [ ] **Step6：本地提交。** 提交翻译及任务代码；翻译候选状态明确，未获审阅前不启用正式双语发布。

### Task 5: 人工英文同步、过期保护和候选审批

**Files:** Create `tools/editor/workflow.mts`、`cli.mts`；Modify `tools/editor/server.mts`、`editor/ui/client.ts`、`site/content/locales/manifest.json`；Test `tests/editor-workflow.test.cjs`及浏览器对照案例。

**Interfaces:**
- `EnglishProposal { pageId:string; chineseRevision:number; chineseHash:string; englishChanges:Record<string,string>; state:'needs-review'|'approved' }`。
- `exportChanges(root:string,pageId:string):Promise<{draft:DraftRevision;fields:readonly EditableField[]}>`。
- `saveEnglishProposal(root:string,proposal:EnglishProposal):Promise<void>`；`approveProposal(root:string,pageId:string,chineseRevision:number):Promise<void>`。
- `applyApprovedCandidate(root:string,pageId:string,chineseRevision:number):Promise<{changedFiles:readonly string[]}>`仅由本地CLI明确执行，不作为后台部署接口。

- [ ] **Step1：写失败测试。** `chinese_save_marks_english_stale`、`reject_proposal_for_changed_chinese_revision`、`approval_does_not_run_git_or_deploy`、`apply_rejects_stale_template_hash`、`unapproved_draft_cannot_enter_candidate`。
- [ ] **Step2：运行RED。** `node --test tests/editor-workflow.test.cjs`，确认新增工作流保护未实现而失败。
- [ ] **Step3：实现同步／对照。** CLI输出精确中文变更供助手在聊天处理；助手录入英文提案，前台显示两种语言前后对照。新中文修订立即使旧提案失效；不调用任何在线翻译API。
- [ ] **Step4：实现审批与受控应用。** 审批只更新本地状态；应用前重新校验字段基线和修订号，原子更新版本化语言文件及审批清单hash／真实审批时间。仅将已审图片复制到`content-assets/<hash>.<ext>`并登记，不能批量覆盖原页面或邮件代码。
- [ ] **Step5：运行GREEN。** 工作流单测及浏览器过期／对照／恢复案例通过；证明整个流程不调用Git、Vercel或Resend。
- [ ] **Step6：本地提交。** 仅提交工作流代码和测试，不提交未审用户草稿。

### Task 6: 静态构建隔离、全站回归与本地交付

**Files:** Modify `site/build/write-output.mts`、`site/build/copy-assets.mts`、`site/content/artifacts.mts`、相关SEO验证／日期指纹维护代码；Create `tests/localization-build.test.cjs`、`tests/editor-production-isolation.test.cjs`、`docs/local-editor-guide.md`；交付报告放同级`reports/bilingual-editor-2026-10-16/`。

**Interfaces:**
- `loadApprovedLocales(sourceRoot:string):readonly LocaleBundle[]`由Task4的`approved.mts`提供；正式构建不访问`.local-editor`。
- 本地编辑服务复用Task4渲染函数读取草稿；生产构建只读取已审版本，双语未启用时仍能构建原英文；完整双语候选启用前必须通过48页覆盖校验。

- [ ] **Step1：写失败测试。** `production_excludes_editor_drafts_tokens_and_staging`、`unreviewed_locale_cannot_be_enabled`、`english_dates_do_not_advance_for_locale_metadata`、`all_126_legacy_redirects_preserve_context`。
- [ ] **Step2：运行RED。** 对新增双语构建／隔离案例确认真实缺失能力；不修改冻结基线来隐藏失败。
- [ ] **Step3：接入构建。** 生成已审双语HTML、正确sitemap／SEO及安全资源路径；后台UI和本地数据绝不进入dist，更新资源缓存身份与指纹时不伪造英文发布日期。
- [ ] **Step4：完整验收。** 执行typecheck、完整单测、现有浏览器回归和新增双语／编辑器测试；覆盖48页两语言、桌面／手机及短屏，复查原电话、80原mailto、表单收件人代码、地图、完整页尾、价格、126旧跳转。禁用真实业务提交与Resend网络调用，失败必须如实处理并定向复测。
- [ ] **Step5：启动本地后台与预览。** 实际确认进程只监听loopback，检查后台、英文首页、中文首页、一个服务页和一个文章页；保留最后成功预览，记录实际地址、命令及关闭方式，不复用旧8088作新验收地址。
- [ ] **Step6：说明、报告与本地提交。** 交付使用说明、改动／保护清单、翻译覆盖、测试正式退出结果和真实本地地址；标明未部署，等待用户验收。保持本地候选和草稿，不推送生产。

## 计划自审

设计第1–4节由Task1／4覆盖；本地后台与存储由Task2／3覆盖；同步与审批由Task5覆盖；构建隔离、错误处理、完整回归和交付由Task6及各任务拒绝路径覆盖。五项Review Focus均有明确测试归属。所有任务共享同一Locale、字段、修订和提案接口；不包含云后台或部署执行。

## 执行选择（已确认 Native）

建议Native：同一会话由主代理连续实现，优先跑通本地首条编辑链路，最后进行独立整体验收；相对逐任务开启新实现／审查代理更适合争取首版时间。

也可选择Subagent-driven：每任务分别实现与审查后推进，最后再作整体验收，过程更细但时间及上下文成本更高。

用户已确认本计划及 Native 执行方式。十分钟目标不覆盖产品安全、全站翻译或验收缺口；首版不等于完整双语网站或可上线版本。未经用户另行确认，不推送或部署。
