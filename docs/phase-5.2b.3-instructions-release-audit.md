# Phase 5.2B.3 — Final instructions release audit

19 November 2026, Europe/Berlin. **AUDIT ONLY.** Owner visual approval of Phase 5.2A/5.2B.2 was supplied as context. No application changes, commits, pushes or deployment were performed.

## 1. Executive summary

The local instructions release passes the executed integrity, responsive, accessibility, technical and regression checks. **No P0 or P1 release blockers were identified.** All 29 instructions, historical anchors, desktop examples and PDF previews remain available. Twenty authentic phone captures are shown as separate, accurately captioned examples in the ten modernized instructions.

Fresh tests cover eight fully expanded width/theme combinations, 80 direct-anchor cases, 53 manifest entries, 97 asset URLs, 22 internal routes and 20 product-page regression cases. TypeScript, full ESLint and the production build passed. Measured Lighthouse mobile/desktop performance is **88/100**; accessibility **100/100**, Best Practices **96/96**, SEO **100/100**. Mobile total blocking time is a nonblocking performance observation, discussed below.

Production observation at `https://www.jobbleder.no/instruksjoner` returned **HTTP 200**; both naturally triggered analytics POST endpoints returned **HTTP 200, ok: true**. The handshake HTTP 400 remains reproducible locally, not on the production visit. No analytics change is warranted by this evidence.

Read the four requested reports: Phase 5.1 audit, Phase 5.2A implementation, Phase 5.2B.1 capture plan and Phase 5.2B.2 integration report. Reviewed the current Git diff and untracked implementation files. Current implementation bytes match the saved Phase 5.2B.2 snapshot; completed source-image inspections were not repeated unnecessarily.

## 2. Release blockers and nonblocking observations

| Severity | Finding | Assessment |
|---|---|---|
| P0 | None found | No identified critical release blocker. |
| P1 | None found | No identified broken instruction, image, navigation, accessibility or production-analytics regression. |
| P2 | Mobile Lighthouse performance 88; TBT 489.5ms | Profile parsing/hydration/main-thread work in a subsequent optimization phase. LCP 1.088s and CLS 0 are good in this lab run. No equivalent earlier Lighthouse baseline establishes a before/after regression. |
| P2 | Some mobile conversion captures are partial evidence | Offer-to-invoice image omits the source marker/ID; offer-derived contract still shows the offer dropdown placeholder. Captions explicitly disclose these limits and retain desktop evidence. No false completed selection or automatic conversion/payment claim is introduced. |
| P3 | Dense screenshot fine print | The original phone captures are 332px wide. Inline portraits preserve proportions; fine details may require the working original-image link/zoom. Owner mobile visual approval is retained; no claim that every raster label is readable without enlargement. |
| P3 | Automated contrast needs manual review | axe incomplete entries are disclosed separately from violations; unchanged-source manual checks from Phase 5.2B.2 cover the flagged text. |
| P3 | Local-only analytics error | Local handshake 400 causes the Lighthouse Best Practices deduction. Production handshake and footprint returned 200. Upstream analytics persistence is not demonstrated by an endpoint acknowledgement. |
| P3 | Existing media/content backlog | Dedicated mobile navigation/KM-settings/PDF-viewer views, company/client/project/report/Premium media and unmodernized legacy wording remain outside this release. Existing `/lage-faktura`/blog observations are not newly introduced instruction regressions. |

Release packaging note: this is intentionally still an uncommitted implementation. **Include every referenced original and derivative in the eventual release commit.** Twenty phone originals and six desktop originals used by full-size links are currently untracked. Their being present locally is not sufficient if they are omitted when staging. This is a normal release-packaging requirement, not an asset missing from the audited working tree. Unused originals, duplicates elsewhere and unrelated reports must not be staged indiscriminately.

## 3. Instruction integrity

| Check | Result and scope |
|---|---|
| Instruction inventory | All 29 original instruction slugs remain real native details cards. |
| Historical sections | All eight anchors remain: `#oversikt`, `#opprett`, `#dokumenter`, `#arbeidsokter`, `#prosjekter-kunder`, `#rapporter`, `#innstillinger`, `#premium`. |
| Conversion branches | `#timeliste-til-faktura`, `#tilbud-til-faktura`, `#kontrakt-til-faktura` resolve and reveal their parent instruction. |
| Direct-link testing | Fresh navigation to 29 instruction + eight section + three branch anchors at 375 and 1440px: **80/80 passed**, target revealed/focused and below the sticky header. |
| Modernized step counts | Ten instructions have 42 groups replacing their original 58 steps; 85 other steps remain, giving 127 rendered numbered steps. Historical Phase 5.1 coverage remains 143 original steps, not a conflicting current count. |
| Mobile context | 20 independently expandable examples / 24 figures reuse 20 distinct phone captures. Correct context is maintained across all ten instructions. |
| Desktop and PDF preservation | All 25 existing desktop/PDF figures remain; five are PDF-output previews. Total fully expanded figures: 49. |
| Existing URLs | `/instruksjoner` and all original fragments work. No URL, slug, redirect or canonical strategy changed. |

| Modernized instruction | Current steps | Mobile example groups / figures | Existing desktop/PDF figures |
|---|---:|---:|---:|
| `opprett-faktura` | 3 | 1 / 1 | 2 |
| `opprett-timeliste` | 5 | 1 / 2 | 4 |
| `opprett-tilbud` | 3 | 1 / 1 | 2 |
| `opprett-kontrakt` | 5 | 2 / 2 | 4 |
| `dokumentoversikt` | 3 | 1 / 1 | 1 |
| `lag-faktura-fra-dokument` | 9 | 6 / 8 | 5 |
| `lag-kontrakt-fra-tilbud` | 4 | 2 / 2 | 2 |
| `hvordan-arbeidsokter-fungerer` | 3 | 1 / 1 | 1 |
| `legg-til-en-arbeidsokt` | 4 | 2 / 2 | 2 |
| `importer-arbeidsokter-til-timeliste` | 3 | 3 / 4 | 2 |

### Product relationships and content accuracy

- Phone examples explicitly distinguish **three registrations → Timeliste 265 → Faktura 112** from the older desktop Timeliste 261/264 and Faktura 111 examples. The desktop import image still has two imported registrations despite three total rows; its caption retains that distinction.
- Phone invoice preview covers all four categories: **9.5 ordinary hours, 45 ordinary KM, 2 extra hours, 50 extra KM**. Its Timeliste preview totals include extra work: 11h30 total, 2h extra, 95KM total, 50 extra KM. Extra values are not added twice.
- Tilbud 29 source actions, offer-to-invoice line/summary and offer-derived contract are separate states. The mobile contract's unselected source dropdown is not described as selected. Contract editing remains independent, with the existing desktop edited-contract evidence retained.
- Contract conversion explicitly distinguishes phone **Faktura 113 from Kontrakt 11** from the older desktop invoice number. Contract payment terms and percentages are not presented as automatic installment calculations or automatic invoice generation.
- Older contract PDF, hourly creation and payment-plan screenshots remain separate examples, not falsely presented as the same export. PDF examples are image previews of real exports; no new downloadable PDF binary endpoint was invented.
- Confirmed creation, PDF and conversion functions remain Free. Premium remains a branding/logo distinction. No automatic sending, electronic signatures, native-app availability, offline mode or background synchronization is promised. Documents are downloaded/distributed manually; contract signing is manual.

## 4. Image and responsive-media verification

Fresh static verification covers **53 manifest entries** across `content/instructionMedia.json` and `content/instructionMobileMedia.json`: source/derivative dimensions and bytes match the filesystem, and stored original hashes match. All **97 unique derivative/original URLs** returned HTTP 200 and matched local SHA-256 bytes. These represent 53 derivative paths and 44 distinct original paths; repeated figures reuse assets.

All 49 figures decoded with nonempty alt text. Application screenshots retain natural proportions; actual PDF previews use the intended contain/document presentation. No missing file, broken import, unintended cover cropping or stretched portrait was detected. All five PDF-preview originals are included in the asset checks.

The canonical phone source directory is `public/images/product/mobile/source/`. All 21 approved originals remain unchanged; 20 are used and have native-size 332×720 lossless WebP derivatives. The unused upper-contract-form image remains locally preserved without a redundant derivative. Phase 5.2B.2's decoded RGBA comparison established **20/20 pixel-identical derivatives**, and all corresponding files are unchanged in this audit. The used phone originals total 1,347,803 bytes; derivatives total 901,986 bytes, a 33.08% saving.

The eight existing art-directed pairs retain their 639px source boundary; phone examples remain separate because their IDs/states differ. At 375px, existing narrow desktop crops are selected; at 768/1280/1440 the desktop sources remain. CurrentSrc records provide the source-selection evidence; the previous 64 explicit pair assertions remain applicable to unchanged sources.

Phone portraits use their own intrinsic dimensions and a maximum natural-width column, without arbitrary height caps. Narrow screenshots render approximately 283px wide inside a 285px bordered figure at 375px. Galleries add columns only when space permits. Full-size access provides inspection of small labels.

### Original links and lazy loading

- All phone figures point to their own PNG original, not an unrelated desktop PNG. Existing desktop-crop pairs share their actual original appropriately.
- Every current figure link retains visible **Åpne hele bildet** in its accessible name plus its meaningful image description. Link destinations are checked anew through HTTP/hash verification.
- Reused unchanged-source Phase 5.2B.2 evidence: **44 original-image links clicked and decoded**, including all 20 phone originals; **16 normal/compact fixture cases** demonstrated correct distinct-original link selection at 375/639/640/768/1023/1024/1280/1440px. These clicks/fixture cases were not repeated in this audit.
- All eight fresh initial hub runs loaded **zero instruction images** while cards remained closed. Fully expanded tests decoded all 49 figures. Scoped observed CLS remained 0. No broad eager-loading or portrait preload regression was found.

## 5. Accessibility results

Fresh automated scope: axe WCAG 2 A/AA, WCAG 2.1/2.2 AA and best-practice rules in **eight fully expanded page states**, including all mobile examples. **Zero detected violations in each case.** This is automated rule coverage, not a blanket WCAG certification.

Fresh keyboard tests cover Enter/Space opening/closing and visible 3px focus for all 29 guide summaries and 20 mobile-example summaries in every width/theme case. Skip-link and desktop/mobile header-menu keyboard actions, workflow navigation, incoming links and cross-instruction links were checked. All headings maintain hierarchy without level jumps; all internal fragments resolve.

Original-image accessible names include their visible labels and accurate image descriptions. Phone original links have at least 44px height; native mobile-example summaries also have a 44px minimum. Phase 5.2B.2's unchanged-source 60-step actual Tab sequence and 20 focused caption/viewport checks remain supporting evidence; they are not counted as newly repeated tests.

### Contrast and manual-review scope

Fresh axe results retain **12 color-contrast incomplete nodes at 375px** and **one at each wider width**, in both preferences. They are not reported as passed automated contrast assertions. Phase 5.2B.2 manually followed up every incomplete node at 375/1440 in light/dark: hit testing found unobscured text, and computed contrast was **7.58:1–17.85:1**; the common header item was 10.35:1. Captions are rgb(71,85,105) on white (7.58:1). Source/style hashes are unchanged, so that completed follow-up was reused rather than repeated.

Light and dark OS preferences preserve the established light instruction surfaces with readable contrast; no dark-palette redesign is implied. Reduced motion gives auto scrolling; normal preference retains smooth scrolling. Raster screenshot text is outside axe's contrast checks and may require enlargement. No new screen-reader session, real-phone interaction or authenticated workflow execution is claimed.

## 6. Fresh responsive matrix

All guide and nested mobile-example disclosures were opened, not merely the initial hub.

| Width | Light | Dark | Reduced / normal motion | Decoded figures | Horizontal overflow | Scoped CLS |
|---:|---|---|---|---:|---|---:|
| 375px | PASS | PASS | auto / smooth | 49 each | None | 0 |
| 768px | PASS | PASS | auto / smooth | 49 each | None | 0 |
| 1280px | PASS | PASS | auto / smooth | 49 each | None | 0 |
| 1440px | PASS | PASS | auto / smooth | 49 each | None | 0 |

Natural image dimensions, alt text, figure/link names, heading hierarchy, menu/summary focus and all fragments passed in each expanded case. No new clipped-control, text-overlap or broken-layout defect was identified. Phone captures are intentionally partial scroll views where captions say so; that is not CSS clipping. The complete four-category invoice remains visible in the dedicated preview. Fine print can be enlarged through the original link rather than forcing tall portraits into a distorted fixed height.

Fresh full-page hub/workflow captures exist for all four widths. Existing Phase 5.2B.2 focused light/dark viewport captures and the owner's supplied desktop/mobile visual approval remain the manual visual evidence for the unchanged implementation. No repeated inspection of every original source image was needed.

## 7. Measured Lighthouse results

Lighthouse **13.6.0**, fresh headless Chrome processes, local production build at `http://127.0.0.1:3030/instruksjoner`. Mobile and desktop ran sequentially without concurrent browser-test workloads. One run per profile; no fabricated averages or production scores. The page starts with disclosures **closed**; the fully expanded image/a11y/CLS checks above are a separate workload.

| Metric | Mobile | Desktop |
|---|---:|---:|
| Performance | **88** | **100** |
| Accessibility | **100** | **100** |
| Best Practices | **96** | **96** |
| SEO | **100** | **100** |
| LCP | **1,088.49ms** | **322.99ms** |
| CLS | **0** | **0** |
| FCP | 1,088.49ms | 322.99ms |
| Total blocking time | **489.5ms** | **0ms** |
| Speed index | 1,326.49ms | 432.20ms |
| Total measured transfer | 220,298 bytes (~215KiB) | 271,005 bytes (~265KiB) |

Mobile profile: simulated network RTT 150ms, throughput 1,638.4Kbps, CPU slowdown 4×; emulated 412×823 CSS pixels, DPR 1.75. Desktop profile: RTT 40ms, throughput 10,240Kbps, CPU 1×; 1350×940, DPR 1. These standard Lighthouse profiles differ from the four responsive QA widths by design. Both runs had no Lighthouse runtime error or run warning.

### Investigation of the mobile score

The score deduction is driven by main-thread work/TBT, not image downloads or layout movement. Mobile diagnostics attribute approximately **1.20s to script parsing/compilation**, **0.58s to style/layout**, and **0.49s to script evaluation**, within roughly 2.7s total main-thread work. Long tasks are attributed to inline document work and the largest shared JavaScript chunk. Lighthouse estimates approximately **27KiB unused JS** in that chunk. These are laboratory diagnostics, not a proven request to remove necessary framework code.

The initial HTML has 314,550 decoded bytes and 42,815 transferred bytes. Script transfer totals are 150,307 bytes on mobile and 160,795 on desktop. Desktop's additional fetch transfer (50,324 versus 10,105 bytes) accounts for most of its larger measured transfer, not hidden screenshot downloads. Neither run lists image resource transfers. Main-thread/payload profiling is a reasonable later optimization; no feature/dependency change is made in this audit. No equivalent pre-implementation Lighthouse run exists to establish that 88 is a new regression.

The **only failed weighted Best Practices audit** in both runs is `errors-in-console`, caused by the known local handshake 400. Production observation below distinguishes that local result; it does not justify inventing a future production Lighthouse score. Lighthouse accessibility 100 covers the initial collapsed page, while expanded accessibility is separately exercised with axe and keyboard tests.

## 8. Technical validation and SEO

| Check | Fresh result |
|---|---|
| `npx.cmd tsc --noEmit` | PASS, exit 0 |
| Full `npm.cmd run lint` | PASS, exit 0; no ESLint warning/error |
| `npm.cmd run build` | PASS, exit 0; all 55 static pages generated |
| Missing assets/imports | None detected; all 53 manifest entries and 97 URLs verified |
| Internal page routes | **22/22 HTTP 200**, including hub, five marketing pages, resource guides and contact/about/blog |
| H1 | Exactly one |
| Title | `Instruksjoner for Jobbleder | Jobbleder` |
| Description | Existing description retained, including original SEO wording; no unnecessary metadata edit |
| Canonical | `https://www.jobbleder.no/instruksjoner` |
| Indexability | No noindex meta; existing robots configuration remains permissive |
| Sitemap/robots | Both HTTP 200; sitemap includes the WWW instruction URL, robots points to the WWW sitemap |
| Structured data | Existing parsed blocks match the saved baseline; no invented FAQ/HowTo schema |
| Browser exceptions | None in the eight fresh expanded runs |
| Other failing browser responses | None besides known local `/api/handshake` 400 |

Build emitted Node **DEP0205** (`module.register()` deprecated; use module.registerHooks()) from environment/tooling. It did not fail compilation or generation. No repository or dependency change was made to suppress it. Git may print the existing LF→CRLF notices; whitespace checking is recorded separately from these notices.

The metadata description remains: “Lær hvordan du bruker Jobbleder til å opprette faktura, tilbud, timelister og kontrakter, registrere arbeidsøkter og holde oversikt over prosjekter, kunder og rapporter.” Historical metadata wording is preserved deliberately; UI labels use Registreringer.

## 9. Regression and analytics findings

### Marketing pages

Homepage, `/fakturaprogram-gratis`, `/timeliste-mal`, `/tilbud-mal` and `/kontrakt-mal` passed **20 fresh regression cases** (five pages × four widths). Complete main/header/footer DOM, title, description, canonical and parsed JSON-LD match the saved Phase 5.2A pre-change HTML exactly. No horizontal overflow was found. These are exact DOM/source and local smoke checks, not another full product redesign audit.

Shared navigation/CTA markup and destinations remain unchanged; existing menu keyboard handling was exercised in the hub matrix. No authentication flow, external CTA submission or product-backend operation was executed. Product-page source, original instruction content, PDF endpoint infrastructure and sitemap/robots sources remain unchanged. Legacy findings outside the instruction scope are not silently fixed or claimed resolved.

### Analytics: local versus production

Observed the requests naturally triggered by visiting `/instruksjoner` in Chrome; did not change analytics or expose configured upstream URLs/credentials.

| Environment | Page response | POST `/api/handshake` | POST `/api/footprint` |
|---|---:|---|---|
| Local production build | 304 on the cached analytics probe; separate fresh route checks were 200 | **400**, `ok: false`, `Invalid request` | **200**, `ok: true` |
| `https://www.jobbleder.no` | **200** | **200**, `ok: true` | **200**, `ok: true` |

The published instruction page is the **existing production version**, not this unpublished release. This production probe verifies the current analytics environment, not deployment of the new instructions. Local 400 occurs in the handshake catch path; source alone does not establish a specific TLS/configuration cause. Production 200 demonstrates that this failure was not reproduced in production during the visit. No production-impacting regression is demonstrated.

Footprint returns before its upstream fetch completes, so HTTP 200 confirms endpoint acknowledgement, not persisted analytics ingestion. No production analytics console/backend access was performed. No production Lighthouse score is claimed.

## 10. Working tree, files changed and release packaging

**Only repository file created by this audit:**

- `docs/phase-5.2b.3-instructions-release-audit.md`

Reviewed existing tracked changes: `app/instruksjoner/page.tsx` replaces legacy markup with the approved hub while preserving metadata; `components/site/Primitives.tsx` adds opt-in original-link selection; `components/site/site.module.css` adds the corresponding mutually exclusive link styles. Existing product-page callers retain identical rendered output.

Reviewed the scoped untracked implementation: `components/instructions/InstructionAnchors.tsx`, `InstructionsHub.tsx`, `instructions.module.css`; `content/instructionGuides.ts`, `instructionMedia.json`, `instructionMobileMedia.json`; both instruction media preparation scripts; nine desktop instruction derivatives and twenty phone derivatives. Detailed filenames/sizes remain in the implementation reports/manifests; this audit does not modify them.

Among the **44 original paths referenced by the manifests**, 26 are currently untracked: all 20 used originals under `public/images/product/mobile/source/`, plus these six desktop sources:

- `public/images/product/timeliste/source/work_entries_add_new_position_mark_as_extra.png`
- `public/images/product/timeliste/source/work_entries_panel_with_2_entries.png`
- `public/images/product/timeliste/source/new_timelist_wizard.png`
- `public/images/product/timeliste/source/new_timelist_wizard_add_client.png`
- `public/images/product/timeliste/source/new_timelist_wizard_with_3_entries_imported_from_work_entires_panel.png`
- `public/images/product/timeliste/source/timelist_settings_add_km_row.png`

These originals are required public assets because full-size links reference them; include them selectively in a future release. Do not confuse them with the unused `new_contract_document_edit_mobile.png`, mobile PNG duplicates in other product folders, unrelated raw images, unused historical WebPs or older release reports. Those unrelated local files are preserved and are not automatically release candidates. No staging/commit action was taken.

At audit start, recorded HEAD, staging state and SHA-256 hashes for **all 284 pre-existing tracked/untracked nonignored repository files**. Final verification confirmed all 284 remained byte-identical, HEAD and staging state were unchanged, and only this report was added. `git diff --check` passed, with only existing LF→CRLF notices. Ignored build output is ordinary tooling output, not a release asset. All QA scripts/screenshots/Lighthouse HTML and JSON are outside the application repository.

### Evidence and reuse

Fresh evidence directory:

`C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase52b3/`

- `browser-results.json`: eight expanded width/theme cases, 20 page regressions, 97 asset HTTP/hash checks, menu/summary/anchor checks and matching metadata. Its `links` array is deliberately empty: it does not claim that the prior 44 click-through cases were rerun.
- `integrity.json`: 80 incoming anchor cases, 53 manifest metadata/hash checks, 22 internal routes, sitemap/robots and observed local/production analytics responses.
- `lighthouse-mobile.json` / `.html`, `lighthouse-desktop.json` / `.html`, `lighthouse-summary.json`: measured scores, diagnostic details and exact settings.
- Fresh `hub-<width>.png` and `invoice-workflows-<width>.png` captures.

Reused unchanged-source evidence under sibling `phase52b2/`: `links.json` (44 clicked originals), `supplement.json` (16 original-link fixture cases, 60 actual Tab steps, 20 focused light/dark captures), `manual-contrast.json` (all incomplete-node follow-ups), `inventory.json` and pixel-comparison results documented in Phase 5.2B.2. This distinguishes prior completed checks from this audit's fresh measurements.

## 11. Final recommendation

The approved implementation has no identified P0/P1 blocker. Proceed only after owner approval of this audit, then stage the complete required implementation/manifest/derivative/original asset set selectively. Mobile main-thread performance and the documented media backlog are nonblocking follow-ups. No publishing has occurred.

**READY TO DEPLOY**
