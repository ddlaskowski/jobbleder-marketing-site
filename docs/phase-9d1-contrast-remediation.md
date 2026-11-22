# Phase 9D.1 — W01 accessibility contrast remediation

Date: 22 November 2026 (Europe/Berlin). Local implementation and production-build verification only.

**W01 RESOLVED in the tested local production build.** The existing page palettes now resolve deterministically above the shared light surface. No palette values, layouts, typography, spacing, content, image assets, navigation markup or metadata were changed. A directly related focused skip-link contrast defect on the specialized Timeliste pages was also corrected using an existing theme token.

## 1. Initial repository state

- Verified root: `C:/Users/ddlas/Code/jobbleder-site`; package jobbleder-site, Next 16.1.6, React 19.2.3, TypeScript/ESLint/Tailwind/CSS Modules.
- Branch: `main`; HEAD: `ec472f5f24ca2627c0c38a5b6e4efe5b9d378aae`.
- Existing approved dirty work was retained, including all previous tracked modifications, untracked components/assets/reports and Phase 9D's report. The complete initial status and SHA-256 values for **483** existing files are preserved in external initial.json.
- No reset, clean, stash, revert, staging, commit, push, deployment or access to another repository. No application financial implementation was inspected.
- Read docs/phase-9d-final-website-qa.md, its W01 evidence, the relevant CSS modules, shared site.module.css and all import consumers. The final guard permits only the five CSS changes and this new report; unrelated files and source images remain unchanged.

Initial tracked modifications (all pre-existing):

```text
 M app/(seo)/[slug]/opengraph-image.tsx
 M app/(seo)/[slug]/page.tsx
 M app/blogg/[slug]/page.tsx
 M components/home/Homepage.tsx
 M components/home/home.module.css
 M components/instructions/InstructionsHub.tsx
 M components/product/contract/ContractProductPage.tsx
 M content/blogPosts.ts
 M content/contractProduct.ts
 M content/contractProductMedia.json
 M content/instructionGuides.ts
 M content/seoPages.ts
 M scripts/prepare-contract-media.mjs
```

The full untracked list is retained in initial.json rather than being removed or automatically staged. The historical Phase 9D report is unchanged; this report records W01's new resolution without rewriting audit history.

## 2. Confirmed root cause

Every affected view combines the shared site.surface class with a page class on the same root div. site.module.css:1–12 declares the light surface, including --site-ink:#0f172a, --site-body:#334155 and a white background. Four guide modules already declare the intended navy palette, but their original .page root rule had the same specificity as .surface. The specialized Timeliste module declares similar dark overrides inside prefers-color-scheme:dark.

Fresh **before** production measurements confirm the shared surface occurs after the theme rule in the production CSS bundle. Example: /lage-tilbud's matching page rule and then site.surface both appear in stylesheet index 1, `/_next/static/chunks/20cbe6dbd82ba57b.css`. Dark canvas/paper variables survived, but shared light ink/body variables and the white root background won. The result was dark text on the navy hero and pale links against unintended white sections. JSX class order does not resolve this conflict.

Group A's six Faktura/Tilbud guides exhibited this in both preferences. Group B's four specialized Timeliste pages exhibited it when their dark media query activated; their existing light presentation was already readable and is preserved.

All consumers:

| CSS module | Direct consumers / routes |
| --- | --- |
| invoiceExample.module.css | InvoiceExamplePage → /faktura-eksempel |
| invoiceGuide.module.css | InvoiceGuidePage → /lage-faktura; ContractGuidePage also reuses its page/layout classes for the three approved Contract SEO guides |
| invoiceRequirements.module.css | InvoiceRequirementsPage → /faktura-krav |
| offerExample.module.css | OfferExamplePage → /tilbud-eksempel; OfferGuidePage → /lage-tilbud and /hvordan-folge-opp-tilbud |
| specializedTimelist.module.css | SpecializedTimelistPage → /timeliste-mal-pdf, /timeliste-uke, /timeliste-ansatt, /timeliste-prosjekt |

The shared SiteHeader/SiteFooter and site surface also serve the homepage, product pages and instruction hub; their shared CSS was inspected but not edited.

## 3. Exact files modified

| File | Change |
| --- | --- |
| components/product/invoice/invoiceExample.module.css | Existing root theme selector strengthened; explanatory CSS comment. |
| components/product/invoice/invoiceGuide.module.css | Existing root theme selector strengthened; explanatory CSS comment. |
| components/product/invoice/invoiceRequirements.module.css | Existing root theme selector strengthened; explanatory CSS comment. |
| components/product/offer/offerExample.module.css | Existing root theme selector strengthened; explanatory CSS comment. |
| components/product/timelist/specializedTimelist.module.css | Dark theme root selector strengthened; one dark-mode skip-link foreground rule referencing --canvas. |
| docs/phase-9d1-contrast-remediation.md | New implementation and verification report. |

No TSX, content, metadata, shared site CSS, approved Contract CSS, media manifest, original image, dependency, pricing or application file was modified. Source preservation is documented in external preservation.json.

## 4. Specificity and minimal implementation

The existing .page declaration becomes **.page.page** in the four always-dark guide modules. Only the existing dark media-query root declaration becomes .page.page in the specialized Timeliste module.

- Original .page: **(0,1,0)**; shared .surface: **(0,1,0)** → later declaration wins.
- Corrected .page.page: **(0,2,0)** → page theme wins regardless of which stylesheet is later.
- CSS Modules emits the same local class twice in the selector, e.g. .offerExample-module__okNRFa__page.offerExample-module__okNRFa__page. This matches the existing root class once present; no duplicate DOM class, extra theme block or attribute is required.
- The final production bundle still places the shared surface after this theme rule. Computed values are nevertheless correct, demonstrating specificity-based resolution rather than a fortunate import reorder.
- No new !important, colors, theme duplication, global inversion, element-by-element recoloring, dependency or component refactoring.

**Directly related exception found during focused-state testing:** resolving --site-ink to the existing light heading color also gives the shared skip link a light background. Its default white foreground then had only **1.10:1** contrast on the four specialized pages in dark preference. The other dark guide modules already handle their skip-link foreground.

The minimal additional rule is inside the same existing dark media query:

```css
.page > a[href="#timelisteinnhold"] { color: var(--canvas); }
```

It selects only the existing direct skip link, reuses the existing dark canvas token and leaves its wording, target, geometry and light preference untouched. This is a focused-state correctness fix, not a new palette or unrelated accessibility change. The final production build and complete final verification were repeated after this adjustment.

## 5. Before/after computed colors

Representative navy state, computed from the production DOM:

| Token | Before | After |
| --- | --- | --- |
| --site-ink | #0f172a | #f1f5f9 |
| --site-body | #334155 | #d5dfec |
| --site-muted | #475569 | #b6c4d7 |
| --site-line | #e2e8f0 | #3a4a61 |
| --site-paper | #f8fafc | #172337 |
| --canvas | #101827 | #101827 |
| --paper | #172337 | #172337 |
| --accent | #93c5fd | #93c5fd |

The canvas/paper/accent values already existed. The correction restores their intended pairing with the existing light text variables. The root's unintended white background resolves back to its already-declared navy canvas; alternate sections retain the already-declared navy paper. It does not achieve contrast by introducing a different large-area palette.

| Route | Light ink before → after | Dark ink before → after |
| --- | --- | --- |
| /lage-tilbud | #0f172a → #f1f5f9 | #0f172a → #f1f5f9 |
| /tilbud-eksempel | #0f172a → #f1f5f9 | #0f172a → #f1f5f9 |
| /hvordan-folge-opp-tilbud | #0f172a → #f1f5f9 | #0f172a → #f1f5f9 |
| /lage-faktura | #0f172a → #f1f5f9 | #0f172a → #f1f5f9 |
| /faktura-eksempel | #0f172a → #f1f5f9 | #0f172a → #f1f5f9 |
| /faktura-krav | #0f172a → #f1f5f9 | #0f172a → #f1f5f9 |
| /timeliste-mal-pdf | #0f172a → #0f172a | #0f172a → #f1f5f9 |
| /timeliste-uke | #0f172a → #0f172a | #0f172a → #f1f5f9 |
| /timeliste-ansatt | #0f172a → #0f172a | #0f172a → #f1f5f9 |
| /timeliste-prosjekt | #0f172a → #0f172a | #0f172a → #f1f5f9 |

The specialized pages retain their existing white/light-gray surfaces and dark text in light preference. The other six guides retain their existing intended fixed navy palette under either preference.

## 6. Before/after contrast ratios

Ratios use actual computed foreground colors and composited effective backgrounds through transparent ancestors, with WCAG relative luminance. Values are rounded to two decimals. Large text target ≥3:1; normal text ≥4.5:1; sampled focus indicators ≥3:1. Raster screenshot text is not reinterpreted as live DOM text.

Representative /lage-faktura at 1440px/dark:

| Element | Before foreground / background | Before ratio | After foreground / background | After ratio |
| --- | --- | --- | --- | --- |
| hero | rgb(15, 23, 42) / rgb(23,35,55) | 1.13 | rgb(241, 245, 249) / rgb(23,35,55) | 14.39 |
| intro | rgb(51, 65, 85) / rgb(23,35,55) | 1.52 | rgb(213, 223, 236) / rgb(23,35,55) | 11.71 |
| navigation | rgb(51, 65, 85) / rgb(16,24,39) | 1.72 | rgb(213, 223, 236) / rgb(16,24,39) | 13.19 |
| footer | rgb(51, 65, 85) / rgb(16,24,39) | 1.72 | rgb(213, 223, 236) / rgb(16,24,39) | 13.19 |
| button | rgb(255, 255, 255) / rgb(37,99,235) | 5.17 | rgb(255, 255, 255) / rgb(37,99,235) | 5.17 |
| link | rgb(147, 197, 253) / rgb(23,35,55) | 8.74 | rgb(147, 197, 253) / rgb(23,35,55) | 8.74 |
| breadcrumb | rgb(71, 85, 105) / rgb(23,35,55) | 2.08 | rgb(182, 196, 215) / rgb(23,35,55) | 8.91 |
| faq | rgb(51, 65, 85) / rgb(255,255,255) | 10.35 | rgb(213, 223, 236) / rgb(16,24,39) | 13.19 |

Navy hero headings now reach **14.39:1**; body on the paper surface **11.71:1**; navigation/footer body on canvas **13.19:1**; muted breadcrumbs on paper **8.91:1**; accent links on paper **8.74:1** or canvas **9.85:1**. White text on the unchanged primary blue button remains **5.17:1**. Cards/panels use these same existing foreground/surface pairs. Decorative separators are not misclassified as controls requiring 3:1 boundaries.

Focused specialized skip link in dark preference: white #fff on light #f1f5f9 **1.10:1** after the token correction alone; final #101827 on #f1f5f9 **16.22:1**. Its existing focus outline remains visible.

Final separate focused/hover-state check: 20 route/preference cases, **140** measured states (skip, primary CTA, contextual link, FAQ, menu, dropdown focus and hover). Minimum normal text **5.17:1**; minimum sampled outline/background contrast **6.41:1**. No measured failure. Outline width is 3px with 5px offset in the checked page styles. These samples supplement axe; they are not a claim that every conceivable non-text state has been manually certified.

## 7. Ten-route test matrix

All combinations below used the **final production build on port 3102**. Each cell represents both light and dark OS preferences with reduced motion, expanded main disclosures and loaded visible screenshots. Each case includes axe, overflow, computed colors and before/after content/geometry comparison.

| Route | 375 | 390 | 768 | 1024 | 1440 | Cases |
| --- | --- | --- | --- | --- | --- | --- |
| /lage-tilbud | L/D PASS | L/D PASS | L/D PASS | L/D PASS | L/D PASS | 10 |
| /tilbud-eksempel | L/D PASS | L/D PASS | L/D PASS | L/D PASS | L/D PASS | 10 |
| /hvordan-folge-opp-tilbud | L/D PASS | L/D PASS | L/D PASS | L/D PASS | L/D PASS | 10 |
| /lage-faktura | L/D PASS | L/D PASS | L/D PASS | L/D PASS | L/D PASS | 10 |
| /faktura-eksempel | L/D PASS | L/D PASS | L/D PASS | L/D PASS | L/D PASS | 10 |
| /faktura-krav | L/D PASS | L/D PASS | L/D PASS | L/D PASS | L/D PASS | 10 |
| /timeliste-mal-pdf | L/D PASS | L/D PASS | L/D PASS | L/D PASS | L/D PASS | 10 |
| /timeliste-uke | L/D PASS | L/D PASS | L/D PASS | L/D PASS | L/D PASS | 10 |
| /timeliste-ansatt | L/D PASS | L/D PASS | L/D PASS | L/D PASS | L/D PASS | 10 |
| /timeliste-prosjekt | L/D PASS | L/D PASS | L/D PASS | L/D PASS | L/D PASS | 10 |

**100/100 required combinations passed.** No remaining W01 failure in either preference.

## 8. Shared-component regression results

The nine additional requested consumers were checked at 375 and 1440px in both preferences, with reduced motion: **36** additional cases, each with axe and before/after content, metadata, image and geometry checks.

| Regression route | Cases | Result |
| --- | --- | --- |
| / | 4 | PASS; content, SEO, image attributes and geometry unchanged |
| /kontrakt-mal | 4 | PASS; content, SEO, image attributes and geometry unchanged |
| /kontrakt-eksempel | 4 | PASS; content, SEO, image attributes and geometry unchanged |
| /kontrakt-handverker | 4 | PASS; content, SEO, image attributes and geometry unchanged |
| /hva-skal-en-kontrakt-inneholde | 4 | PASS; content, SEO, image attributes and geometry unchanged |
| /timeliste-mal | 4 | PASS; content, SEO, image attributes and geometry unchanged |
| /tilbud-mal | 4 | PASS; content, SEO, image attributes and geometry unchanged |
| /fakturaprogram-gratis | 4 | PASS; content, SEO, image attributes and geometry unchanged |
| /instruksjoner | 4 | PASS; content, SEO, image attributes and geometry unchanged |

The three Contract SEO guides reuse invoiceGuide classes; their local scoped tokens remain compatible with the stronger guide selector. No Contract source file was edited. Full-page desktop captures for homepage and /kontrakt-eksempel have identical dimensions and **pixel-identical decoded before/after images**. This verifies the required approved visual references, beyond source preservation alone.

Sixteen actual internal link clicks across both preferences also passed: homepage → Lage faktura → Kontrakt product → Contract example → Timeliste PDF guide → Tilbud product → Tilbud example → Kontrakt product → homepage. Links were used as rendered, opening their ancestor disclosure when needed. Theme tokens remained correct as Next client navigation loaded multiple CSS consumers. This supplements direct URL loads and does not exercise the authenticated application.

## 9. Responsive and visual results

- Zero horizontal overflow across all **136 final combinations** and tested expanded menus.
- Before/after comparison found **no geometry difference** in headings, paragraphs, sections, summaries, figures, main, header, footer or image boxes. No typography/spacing/layout rule was changed.
- Main text, H1, links/accessible labels, title, meta description, canonical, Open Graph and JSON-LD were identical to before for all 136 compared documents. Image sources, alt text, explicit dimensions and rendered positions are unchanged. Visible images loaded.
- Reduced motion yields scroll-behavior:auto and no running animations in the checked states. No animation was added.
- Required before/after captures of Lage faktura desktop, Tilbud example desktop and Timeliste PDF dark mobile were visually compared. Their existing compositions, dimensions, typography, section breaks and authentic documents remain; the intended navy text/surface pairings are now readable. Source-resolution limitations remain accepted and unchanged.
- Required homepage and Contract guide desktop references are pixel-identical. No approved page was redesigned.

## 10. Accessibility results

**212 final axe-core WCAG2A/AA and WCAG2.1A/AA runs: zero reported violations.** This consists of 136 expanded-content route/width/preference checks plus 76 open-header-menu checks at 375/1440px in both preferences. Main FAQ/resource/instruction disclosures were expanded during the scans, including nested mobile examples.

Keyboard tests confirmed visible focus, menu opening with Enter/closing with Space, and FAQ/disclosure opening/closing. The homepage workflow explanation intentionally starts open; a separate FAQ target is tested rather than interpreting that initial state as a failure. Skip, link and dropdown focus/hover measurements are documented in section 6; the specialized skip-link issue was identified through this extra testing rather than ignored because initial axe scans were clear.

Axe incomplete color-contrast entries for decorative aria-hidden chevrons/arrows remain review notes, not confirmed text failures. No screen-reader session, full WCAG certification, exhaustive image-text contrast analysis or every assistive-technology/browser combination is claimed.

## 11. Build/lint/typecheck and existing checks

| Exact command / check | Final result |
| --- | --- |
| npx.cmd tsc --noEmit --incremental false | PASS, exit 0 after final CSS adjustment |
| npm.cmd run lint | PASS, full ESLint, exit 0, no lint warning/error |
| npm.cmd run build | PASS, exit 0, 55 entries generated after final CSS adjustment |
| npm.cmd run start -- --port 3102 | Final local production preview; ready |
| node scripts/verify-contract-visuals.mjs | PASS, 13 lossless derivatives / 93 original source files unchanged; external CONTRACT_REVIEW_DIRECTORY |
| node <external>/browser.cjs | PASS, final 100 affected +36 regression cases; 212 axe runs including open menus |
| node <external>/focus.cjs | PASS, 140 focused/hover states |
| node <external>/navigation.cjs | PASS, 16 actual internal link navigations |
| node <external>/compare.cjs | PASS, unchanged content/geometry, no violations/overflow and two pixel-identical regression captures |
| git diff --check | PASS; existing LF/CRLF notices are not whitespace errors |

External means `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d1`. Browser commands use the existing cached puppeteer-core/axe-core and installed Chrome; no dependency was added. Before capture used browser.cjs --before against the prior production preview at port 3100. HTTP 304 is valid cache validation, not a failed page; the harness was adjusted accordingly before the completed baseline run. The navigation harness was corrected to use actual intermediate product links instead of assuming a direct link between two guides; no website link change was needed.

Build warnings remain the existing Node DEP0205 module.register() deprecation notices. No final TypeScript, ESLint or build failure. No pageerror/hydration error or unexpected resource HTTP failure in the completed final matrix.

Analytics endpoints were intercepted in the test harness with synthetic 204 to avoid repeated tracking. This neither modifies analytics nor proves the known local handshake problem or production ingestion is fixed. No Lighthouse rerun was required for this CSS-only remediation, and no old performance score is presented as a new measurement.

## 12. Screenshot and evidence paths

All evidence is external to the repository. The ten required before/after screenshots:

| View | Before | After |
| --- | --- | --- |
| Lage faktura desktop | C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d1/before-lage-faktura-1440.png | C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d1/after-lage-faktura-1440.png |
| Tilbud example desktop | C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d1/before-tilbud-eksempel-1440.png | C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d1/after-tilbud-eksempel-1440.png |
| Timeliste PDF mobile/dark | C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d1/before-timeliste-mal-pdf-375.png | C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d1/after-timeliste-mal-pdf-375.png |
| Approved Contract guide desktop | C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d1/before-kontrakt-eksempel-1440.png | C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d1/after-kontrakt-eksempel-1440.png |
| Approved homepage desktop | C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d1/before-home-1440.png | C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d1/after-home-1440.png |

Each captured view uses dark OS preference to cover the reported failure and intended styles consistently; the full matrix covers both preferences. These are browser captures, not regenerated or modified product screenshots. Visual inspection of the three repaired required captures supplemented automated results; decoded full-page pixel comparison validates the two approved references.

Raw evidence: initial.json; before.json; after.json; comparison.json; focus.json; navigation.json; preservation.json; contract-check/verification.json. initial-remediation.json and initial-focus.json preserve the interim focused-state finding before its final fix; they are not final passing results. External setup.cjs, browser.cjs, focus.cjs, navigation.cjs, compare.cjs and report.cjs are diagnostic scripts, not release source.

Local preview examples:

- [Lage faktura](http://127.0.0.1:3102/lage-faktura)
- [Tilbud example](http://127.0.0.1:3102/tilbud-eksempel)
- [Timeliste PDF](http://127.0.0.1:3102/timeliste-mal-pdf)

The remaining affected and regression routes use the same local origin. Nothing was published.

## 13. Remaining limitations and status

**W01 is resolved in the tested local production build**, including the directly related focused skip-link defect. The five CSS modules and this report are the only Phase 9D.1 repository changes. Prior local work, content, media, approved homepage/Contract design, SEO and pricing remain untouched.

This is readiness for **owner review of the targeted fix**, not global production-release approval. W02–W12 were not implemented. The separate financial gate remains **PENDING — APPLICATION FINANCIAL VERIFICATION**; website contrast/build checks do not replace the required application corrections and regression acceptance. Legal review/withheld-PDF and Premium MVA decisions remain separate and unchanged. No authenticated app, production deployment or application financial logic was accessed or modified.

No staging, commit, push, deploy or automatic next phase. Await owner approval.

**PHASE 9D.1 COMPLETE — READY FOR OWNER REVIEW**
