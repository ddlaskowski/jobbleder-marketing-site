# Phase 8C — Faktura creation guide modernization

Date: 2026-11-20. Scope: local `/lage-faktura` only. No staging, commit, push or deployment.

## 1. Executive summary

Replaced the generic SEO renderer for this route with a practical, workflow-led guide. Five numbered actions sit within three phases: fill in the invoice, review its contents, generate the PDF and deliver it yourself. Preparation, conditional VAT treatment, corrections and supported document conversions have concise contextual explanations.

The authentic editor is the central illustration. Desktop uses Faktura 110; mobile and tablet use a separate authentic Faktura 113 capture, explicitly distinguished in the caption. A small existing price/VAT crop supports the worked example. Completed PDF inspection remains on `/faktura-eksempel`.

All 16 target browser cases passed the executed overflow, runtime-error and automated accessibility checks. TypeScript, full ESLint and production build passed. Existing metadata, H1, FAQ and JSON-LD are preserved. Phase 8B is preserved. This is ready for owner visual review, not a production verification.

Local production-build preview: <http://127.0.0.1:3041/lage-faktura>.

## 2. Verified application workflow

Evidence: existing `content/instructionContent.ts`, `content/instructionGuides.ts`, invoice/mobile media manifests, original screenshots, and read-only inspection of `C:/Users/ddlas/Code/jobbleder_app/src/`. Source references below concern the inspected local application; they do not establish production backend behavior.

| Action | Evidence and treatment in the guide |
|---|---|
| Start in Opprett and select Faktura | `ui/documents/CreateDocument2026.jsx`, document-type controls; authentic desktop editor. Number 110 is an example, not a numbering guarantee. |
| Select customer; optionally select project | `CreateDocument2026.jsx:1733` validation and fields around 2260; invoice requires customer, not project. |
| Check Utstedt and Forfallsdato | `viewmodels/createDocument.viewmodel.js:153–180` loads defaults; editor allows checking/changing dates. No universal payment period is prescribed. |
| Describe work; enter net unit price, quantity and VAT | `CreateDocument2026.jsx:1801` row controls, `Legg til rad`; validation around 1710 requires at least one filled description/quantity/price row. This is product validation, not proof of complete legal compliance. |
| Check company/payment information | `createDocument.viewmodel.js:173–180` and invoice payload in `CreateDocument2026.jsx:1550–1583` copy company/account data from defaults. Guide links to company settings instructions. |
| Review rows, VAT and Oppsummering | Actual desktop editor shows net 12,000, VAT 3,000 and total 15,000 for quantity 1 at 25%. This is an illustrative sale, not a universal VAT rule or one hour of work. |
| Save or generate | `CreateDocument2026.jsx:1767–1790`, buttons around 2311; `Main.js:1143–1200`; `MainContainer.js:574–594`. Lagre saves; Generer saves and starts PDF generation. Saved documents also offer Generer PDF. |
| Obtain and deliver PDF | `ServerRoutes/serverRoute.js:104–118` creates a PDF Blob and opens it through the browser. Guide describes browser PDF save/download followed by manual delivery outside Jobbleder. |
| Create invoice from existing document | `viewmodels/documentPreview.viewmodel.js:443` onward and `Main.js:1863` onward; supported source types are offer, contract and timesheet. User initiates conversion and reviews the result. |
| Correct an invoice | Existing credit-note instruction and preview action; links to `/instruksjoner#rette-en-faktura`. No promise that a finalized invoice can simply be edited. |

Free creation, export and conversion, Free watermark, and Premium branding options use the established owner-confirmed product model. No payment reconciliation, reminders, email delivery, EHF, integration or backend numbering guarantee was introduced.

## 3. Authentic media inventory

Paths are repository-relative. File sizes are exact bytes. All are existing files; no derivative or source was created or modified. Inventory measurements were recovered from Phase 8A and all 59 inventoried file hashes were rechecked unchanged during this phase.

| Exact path | Dimensions | Bytes | Visible content / existing use / decision |
|---|---:|---:|---|
| `public/images/product/invoice/source/screenshot_fv_edit.png` | 1917×906 | 114,542 | Full desktop Opprett editor, Faktura 110, customer/project/dates, parkett line and summary. Existing invoice/instruction source; full-size desktop link. |
| `public/images/product/invoice/optimized/jobbleder-invoice-editor-80c02f47c4d3.webp` | 1917×906 | 73,136 | Same full editor; existing product/instruction media. Primary illustration above 1023 px. |
| `public/images/product/mobile/source/invoice_create_mobile.png` | 332×720 | 64,721 | Native mobile-browser editor, Faktura 113. Existing instruction source; full-size mobile link. Bottom of line, VAT and summary are outside the capture. |
| `public/images/product/mobile/optimized/invoice_create_mobile-26b02c459f30.webp` | 332×720 | 44,822 | Existing mobile instruction derivative. Primary illustration at widths up to 1023 px; no artificial enlargement. |
| `public/images/product/invoice/optimized/jobbleder-invoice-lines-e59165029d4b.webp` | 400×136 | 3,900 | Existing process crop showing unit net price 12,000 and VAT 25%. Reused beside the review checklist; original link opens the full desktop editor. |
| `public/images/product/invoice/optimized/jobbleder-invoice-customer-a819f5c0ca04.webp` | 400×75 | 2,366 | Existing customer-field crop; not selected because full editor already supplies context. |
| `public/images/product/invoice/optimized/jobbleder-invoice-editor-mobile-customer-d8eee62a318a.webp` | 400×145 | 4,148 | Existing desktop customer/date crop, despite filename. Not represented as native mobile; genuine mobile capture preferred. |
| `public/images/product/invoice/optimized/jobbleder-invoice-totals-a06d77a998da.webp` | 320×145 | 4,460 | Existing summary crop. Not added; full desktop screenshot plus worked example cover it without another image. |
| `public/images/product/invoice/source/fv_free_watermark.png` | 959×1251 | 127,681 | Completed Free invoice 110 with watermark; original document source. |
| `public/images/product/invoice/optimized/jobbleder-invoice-free-8239cf43dbea.webp` | 959×1251 | 52,268 | Existing product, editorial and instruction document preview. Linked through `/faktura-eksempel`, not duplicated in this guide. |
| `public/images/product/invoice/source/fv_premium_clear.png` | 959×1251 | 109,632 | Completed clean Premium PDF source; branding comparison elsewhere. Not needed in this creation guide. |
| `public/images/product/invoice/optimized/jobbleder-invoice-premium-clear-c94ecd44cf6d.webp` | 959×1251 | 45,982 | Existing clean Premium preview; not selected. |
| `public/images/product/invoice/source/fv_premium_logo.png` | 947×1251 | 131,557 | Completed Premium PDF with logo; not selected. |
| `public/images/product/invoice/optimized/jobbleder-invoice-premium-logo-fe289b390386.webp` | 947×1251 | 51,534 | Existing homepage/product branding illustration; not selected. |

Selected images are lazy-loaded through the existing `ProductMedia` component, with explicit intrinsic dimensions, responsive selection and meaningful Norwegian alt text. No source alteration, new compression, dependency or duplicate asset.

Measured encoded image-body payload after scrolling: 48,722 bytes on mobile/tablet (44,822 + 3,900), 77,036 bytes on desktop (73,136 + 3,900). These are local resource measurements, excluding HTTP headers, page JS/CSS and full-size originals opened separately.

## 4. Design decisions

- Retained the editorial navy palette `#101827` / `#172337`, restrained rules, readable text and blue contextual links under either OS preference.
- Two-column desktop hero pairs the purpose and single app CTA with a preparation list. Mobile stacks these naturally.
- A vertical numbered process, three anchor phases and a separate review spread distinguish this page from the eight-step offer guide and document-first invoice example.
- The full editor appears beside its instructional context, rather than replacing the guide with a document gallery.
- Review combines a practical checklist with a small native-resolution price/VAT crop and arithmetic example.
- Three priority resources remain visible; six other existing topic destinations remain in a native disclosure. The redundant self-link was removed.
- Initial visual inspection found the mobile step indent squeezed the screenshot. The final layout gives mobile paragraphs/media the full content width. At 768 px the genuine portrait capture is more useful than a shrunken desktop interface, so existing compact-media behavior is reused through 1023 px.

## 5. Component architecture

Dedicated server component `InvoiceGuidePage` with a scoped CSS Module. Reuses `SiteHeader`, `SiteFooter`, `SectionContainer`, `ApplicationCTA`, `REGISTRATION_GUIDANCE` and `ProductMedia`. Existing JSON manifests supply media. The route's SEO record supplies H1 and FAQs; no separate content record diverges from schema.

The existing dynamic SEO dispatcher now selects this component for `lage-faktura`. Its Phase 8B `InvoiceExamplePage` dispatch remains intact. No global style, shared primitive, client component, package or application backend change was required.

## 6. Exact files modified

Phase 8C adds/changes only:

1. `app/(seo)/[slug]/page.tsx` — adds `InvoiceGuidePage` import and route return, retaining Phase 8B lines.
2. `components/product/invoice/InvoiceGuidePage.tsx` — new guide.
3. `components/product/invoice/invoiceGuide.module.css` — new route-scoped presentation.
4. `docs/phase-8c-faktura-creation-guide-report.md` — this new report.

Working-tree baseline was recorded before implementation. Of 334 existing tracked/untracked files hashed, only the expected dispatcher changed. All other 333 baseline files are unchanged. All 59 inventoried media hashes match. No staged change was made.

Existing Phase 8B work preserved: dispatcher lines; modified `components/editorial/InvoiceFigure.tsx` and `invoiceFigure.module.css`; untracked `components/product/invoice/InvoiceExamplePage.tsx`, `invoiceExample.module.css` and `docs/phase-8b-faktura-example-visual-pilot-report.md`.

Other pre-existing untracked work preserved: `docs/phase-7e-diagnostics/`, `docs/phase-7h-tilbud-production-verification.md`, `docs/phase-8a-diagnostics/`, `docs/phase-8a-faktura-ecosystem-audit.md`. They were not treated as new Phase 8C changes. Investigation scripts/screenshots remain outside the repository.

## 7. Before/after comparison

| Before | After |
|---|---|
| Generic SEO-page composition | Dedicated practical guide with preparation and three navigable phases |
| Short general creation explanation | Five evidence-backed actions with actual button/field labels |
| No prominent editor-led instructional composition | Responsive authentic editor plus focused price/VAT example |
| Limited distinction between generating and delivering | Separate save/generate, browser download and manual sending instructions |
| Broad related-topic presentation | Three prioritized resources, remaining useful links in a disclosure |

Compared with `/lage-tilbud` and `/faktura-eksempel`: same editorial typography, navigation and focus language; different workflow-led hierarchy, screenshot placement and checklist composition. This page explains creating, `/faktura-eksempel` explains reading the finished document, and `/fakturaprogram-gratis` remains the product landing page.

## 8. Responsive results

Executed against the local final production build in Chrome using Puppeteer. Each width was tested with light/dark OS preferences and reduced/no-preference motion: **16 cases**. The page intentionally retains the approved navy editorial presentation under both OS preferences.

| Width | Primary image | Observed presentation | Result |
|---:|---|---|---|
| 375 | Mobile 332×720 source | Approximately 325 px wide; no step indentation on paragraphs/media | No overflow before/after disclosure expansion; readable text; CTA and footer intact |
| 768 | Mobile 332×720 source | Approximately 330 px wide, centered at native size; review becomes two columns | No overflow; portrait proportions retained; no clipping introduced by page |
| 1280 | Desktop 1917×906 source | Approximately 1086 px wide; full form and summary visible | No overflow; balanced desktop preparation/review sections |
| 1440 | Desktop 1917×906 source | Approximately 1086 px wide in the constrained editorial column | No overflow; header, steps, related resources and footer align |

All target requests returned HTTP 200. Target images loaded correctly. Initial load/scroll CLS recorded as **0** in all 16 cases; this is a local lab observation, not a field guarantee. No target JavaScript runtime errors or console errors were observed. Normal and reduced-motion navigation were checked; no new animation was introduced.

Screenshot directory (absolute):

`C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase8c/`

Before: `before-lage-faktura-375-dark.png`, `before-lage-faktura-1440-dark.png`.

Final full-page screenshots: `after-lage-faktura-375-dark.png`, `after-lage-faktura-768-dark.png`, `after-lage-faktura-1280-dark.png`, `after-lage-faktura-1440-dark.png`; corresponding `light` files were captured at 375 and 1440. Both preferences were browser-tested at all four widths. Full-page visual review included final mobile, tablet and desktop; initial inspection also informed the responsive refinement above. JSON results: `after.json`, `interactions.json`, `verification.json` in the same directory.

## 9. Accessibility results

- axe-core ran in all 16 cases with WCAG 2 A/AA, 2.1 A/AA, 2.2 AA and best-practice tags: **zero confirmed violations**.
- Automated contrast checks had incomplete results on decorative, `aria-hidden` arrows/chevrons. These are reported as incomplete, not passed checks or confirmed text failures. Visible text, focus and controls were visually reviewed. This is not an accessibility certification or screen-reader user study.
- One H1, logical H2/H3 hierarchy, labeled navigation landmarks and skip-to-main target verified. Step numbers are decorative beside semantic ordered lists.
- Three FAQ disclosures and the related-resource disclosure opened and closed by keyboard in every case: 64 disclosure checks. Focus outlines were visible, 3 px in the accent color.
- Shared mobile/desktop menu opened/closed by keyboard in each case; Tab reached the Faktura link with visible focus.
- At 375 and 1440, keyboard activation of the skip link reached `fakturaguide-innhold`. All three in-page links landed at their sections, approximately 100 px below the viewport top.
- All six contextual instruction anchors were activated by keyboard at both widths. Destination instruction disclosures opened and scrolled into view: company data, offer conversion, contract conversion, timesheet conversion, correction and invoice creation.
- Primary full-size links were activated by keyboard at both widths: mobile PNG loaded at 332×720; desktop PNG loaded at 1917×906. The review crop points to the same working desktop original. Link names include image context, and descriptions remain available.

## 10. SEO preservation

Before/after browser comparisons across all 16 cases confirmed identical title, description, canonical, H1 and parsed JSON-LD:

- Title: `Lage faktura – hvordan skrive en faktura enkelt | Jobbleder`.
- Description: `Lær hvordan du lager en faktura enkelt og riktig. Jobbleder gjør det raskt å opprette faktura i nettleseren.`
- Canonical: `https://www.jobbleder.no/lage-faktura`.
- Exactly one H1: `Lage faktura`.
- All three original FAQ questions/answers preserved verbatim, generated once as FAQPage schema. Existing global Organization/WebSite schema preserved.

Route and indexability configuration, metadata generator, SEO records, sitemap, robots and redirects were not changed. Existing useful internal destinations remain; destination-set comparison found only the redundant `/lage-faktura` self-link absent. All 14 tested internal path destinations returned 200; instruction hash behavior is separately verified above. App CTA retains the shared `https://app.jobbleder.no/` destination and login/Create account guidance, without inventing a deep link.

## 11. Product accuracy verification

Verified in local source/media: mandatory selected customer and one filled invoice row; optional project; editable prefilled dates; net price/quantity/VAT controls; company/account defaults; user-triggered save/generate and conversions; PDF viewer handoff; credit-note entry point.

Owner-confirmed product policy: Free document creation/export/conversion and watermark, Premium clean/logo branding choices. No new pricing or plan restriction.

Explicit distinctions: desktop Faktura 110 and mobile Faktura 113 are separate captures; 25% is an example; quantity 1 is not claimed to mean one hour; form validation is not a legal guarantee; sending is manual; correction guidance does not promise editing a finalized invoice. There is no claim about automatic email, sequential backend numbering, payment tracking, reminders, integrations or universal invoice timing.

No new categorical legal requirement was added. Detailed conditional requirements are delegated to the existing `/faktura-krav` guide. Phase 8A F10 in a separate article remains out of scope and unchanged; this phase makes no claim to resolve it.

## 12. Technical validation

Executed after the final responsive refinement:

| Check | Result |
|---|---|
| `npx.cmd tsc --noEmit --incremental false` | Pass, exit 0 |
| `npm.cmd run lint` (full ESLint) | Pass, exit 0; no lint warnings |
| `npm.cmd run build` | Pass, exit 0; Next.js 16.1.6, 55 generated pages |
| `git diff --check` | Pass, exit 0 |
| Baseline SHA comparison | Only expected dispatcher changed among 334 existing files |
| Existing media SHA comparison | All 59 unchanged |

Build emitted existing Node 26 DEP0205 `module.register` deprecation notices. No new compilation/build failure.

Regression checks: homepage, `/fakturaprogram-gratis`, `/faktura-eksempel`, `/instruksjoner`, `/faktura-krav`, `/tilbud-eksempel`, `/lage-tilbud`, `/timeliste-mal-pdf`, `/blogg/faktura-eksempel-sma-bedrifter`, each at 375 and 1440: 18 cases. Compared metadata and visible main text match their saved baseline; none had horizontal overflow. Phase 8B example rendering remains unchanged. Regression scope is these checks, not exhaustive functional testing of every route.

Diagnostic artifacts are outside application source. Analytics requests were intercepted with a synthetic response in browser tests to avoid unnecessary events. No actual analytics endpoint result or production verification is claimed.

## 13. Known limitations

- No authenticated live-app end-to-end invoice save, backend numbering allocation or real email delivery test was performed. Workflow evidence is inspected local app code, instructions and authentic screenshots.
- Browser PDF save/download controls depend on browser preferences; the guide avoids prescribing a particular viewer button label.
- Mobile capture does not include VAT, full quantity control or summary. The caption discloses this; the focused desktop price/VAT example and text cover review without fabricating a mobile state.
- No production deployment, production analytics test, Lighthouse run or field Core Web Vitals measurement was performed in this phase.
- Incomplete automated decorative contrast checks and the separate F10 editorial observation remain documented; no confirmed new accessibility blocker was found.

## 14. Owner review checklist

1. Open the local preview at 375 and 1440 px; confirm the workflow-first visual hierarchy and single primary CTA.
2. Check preparation, optional project wording, actual labels and five numbered actions against your current application.
3. Inspect mobile Faktura 113 and desktop Faktura 110, their explanatory caption and full-size links.
4. Confirm that the price/VAT example is helpful and that generation, download and manual delivery are clear.
5. Try FAQ, menus, keyboard focus, phase anchors and the three conversion instructions.
6. Confirm that the approved Phase 8B invoice-example page remains intact.
7. Approve visual/editorial results before any separate release action.

**READY FOR VISUAL OWNER REVIEW**
