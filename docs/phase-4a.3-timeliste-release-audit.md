# Phase 4A.3 — Timeliste visual QA and release audit

Date: 18 November 2026, Europe/Berlin. Target: local production build at `http://127.0.0.1:3020/timeliste-mal`.

## 1. Executive summary

**READY TO DEPLOY.** No P0 or P1 issue was identified in the executed checks. The remaining P2/P3 findings concern mobile fine print and comparison-table wrapping, existing registration friction, local analytics, and optional polish. They do not block use of the page, its downloads or its conversion paths.

The previously missing browser matrix has now been executed. All four requested widths passed layout/overflow, intrinsic-image-ratio, image-loading, skip-link and FAQ interaction checks under both light and dark preferences. Reduced motion was toggled and checked in all eight cases. All ten sections were inspected through rendered screenshots and DOM evidence. Six full-image destinations work; image links include their visible labels in their accessible names. Existing SEO, downloadable templates, homepage and invoice-page source files are preserved.

Local Lighthouse 13.6.0 reported performance 99 mobile / 100 desktop, accessibility 100 / 100, SEO 100 / 100 and best practices 96 / 96. The known local `/api/handshake` HTTP 400 is the console error responsible for the best-practices deduction. These are local laboratory results, not production measurements or field Core Web Vitals.

This was a read-only application audit. The only new repository file is this report. No application code, CSS, source image, derivative, SEO content, dependency, configuration or existing report was edited. No commit, push or deployment occurred. Publishing still requires the user's approval.

## 2. Environment and exact test matrix

Used the installed Chrome executable and cached Puppeteer/axe-core/Lighthouse packages. No dependency was installed. The existing Next production server was already listening on port 3020; an attempted second start returned EADDRINUSE, so the running server was reused. The source files and delivered page were inspected for consistency. TypeScript, ESLint and build success from Phase 4A.2 are prior-phase results, **not newly executed compiler checks**.

Responsive runs used 900 px viewport height, device scale factor 1, desktop Chrome user agent and explicit CSS viewport widths. They are responsive browser tests, not physical-device tests. Color preferences were emulated and confirmed with `matchMedia`.

| Width | Color preference | HTTP | Overflow / image ratios / ten sections | axe violations | Observed CLS | Skip link / FAQ Enter and Space | Reduced-motion toggle |
|---:|---|---:|---|---:|---:|---|---|
| 375 | Light | 200 | PASS | 0 | 0 | PASS | PASS |
| 375 | Dark | 200 | PASS | 0 | 0 | PASS | PASS |
| 768 | Light | 200 | PASS | 0 | 0 | PASS | PASS |
| 768 | Dark | 200 | PASS | 0 | 0 | PASS | PASS |
| 1280 | Light | 200 | PASS | 0 | 0 | PASS | PASS |
| 1280 | Dark | 200 | PASS | 0 | 0 | PASS | PASS |
| 1440 | Light | 200 | PASS | 0 | 0 | PASS | PASS |
| 1440 | Dark | 200 | PASS | 0 | 0 | PASS | PASS |

Each run decoded all six main images while scrolling, checked DOM geometry and loading, and captured a full-page and first-screen screenshot. With `reduce` enabled, `matchMedia` became true, root scroll behavior became `auto`, and the sampled link transition became `0s`. Reduced-motion checks were live preference toggles after the normal run, rather than eight additional cold navigations.

Additional executed checks:

- Homepage and Faktura: four widths each, dark preference, image decode, metadata, landmarks, runtime exceptions and overflow: eight regression cases.
- Mobile navigation: opened/closed at 375 px in light and dark runs; all nine panel links measured 44 px high.
- A separate 375 px keyboard traversal recorded 55 Tab steps with no missing outline among focused links, summaries or buttons.
- Six original-image navigations, actual contextual Faktura-link navigation, actual primary and final app-CTA navigation, and a new-tab blank-PDF click.
- Eight FAQ HTML/schema pairs compared exactly; six image-link accessible names read from Chrome's accessibility tree.
- 26 distinct local href targets, including fragment variants and original images, returned HTTP 200.
- Both PDF endpoints, sitemap, robots and source/derivative integrity were checked afresh.
- One standard mobile Lighthouse run and one desktop-preset Lighthouse run, sequentially.

Test harness corrections were limited to files outside the repository: an initial selector addressed a hidden desktop menu instead of the mobile menu, a fetch response was initially logged using the Puppeteer response API, and browser-cache 304 responses were initially flagged by an over-strict assertion. The final complete matrix disabled cache and returned 200 throughout. These were test-harness issues, not application failures. Final results are in `browser-results.json`; earlier `partial-results.json` is not the final result.

## 3. Screenshots and visual findings

Evidence directory:

`C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase43-evidence/`

Desktop first screen:

![Timeliste at 1440 px, light preference](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase43-evidence/hero-1440-light.png)

Mobile first screen:

![Timeliste at 375 px, light preference](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase43-evidence/hero-375-light.png)

Full-page captures exist as `timelist-{375,768,1280,1440}-{light,dark}.png`; matching `hero-*` files show the first screen. Section crops `section-{width}-{2..10}.png` preserve the rendered page pixels for inspection; `footer-{width}.png` records footer alignment. These are QA screenshots, not product assets.

| Section | Visual/product assessment |
|---|---|
| 1. Hero | Free timeliste-mal intent and two CTAs are prominent. Primary button is visible within the 900 px first screen at every width. At 375 px it is 327×51 px. Desktop is a balanced two-column composition; tablet stacks. Mobile shows a real form crop. Fine UI labels require enlargement (F1). |
| 2. PDF templates | Both download choices remain near the beginning, clearly distinct from the app. Buttons fit on mobile without clipped labels. |
| 3. Registrations | Selected registrations are authentic. The separate example is disclosed in the caption. The mobile crop retains both selected registrations; the original exposes the import action. Visible HTML explains recording, selecting, importing and entering the worker name. |
| 4. Four categories | All four rows remain visible in the mobile form crop. HTML labels and quantities explain 8.5 ordinary hours, 10 extra hours, 35 ordinary km and 75 extra km. No automatic overtime claim. |
| 5. Timeliste PDF | Complete supplied 508×720 document shown without cropping, with worker, project, entries and separate summaries. Clear distinction between generated example and blank downloadable template. At 768 px the document/copy columns fit, though document fine print is small. |
| 6. Conversion | Timeliste 264 → Faktura 111 is shown using the supplied form and full exported invoice. The mobile crop retains all four invoice lines. The adjacent HTML table reproduces the four approved quantities and demonstration prices, net 22,695.00, VAT 5,673.75 and total 28,368.75 NOK. These are labelled demonstration rates. No automatic issuing or sending claim. |
| 7. Free/Premium | All functionality remains available in Free; branding/logo is the distinction. The table fits, but long Norwegian row labels break awkwardly on mobile (F2). |
| 8. Educational content | All four original search-content topics remain visible HTML. Mobile is linear; tablet/desktop use a two-column reading layout. Timeliste cluster links remain present. |
| 9. FAQ | Eight native disclosures fit without overlap. Focus ring is clearly visible. Related links wrap within the content width. |
| 10. Final CTA/footer | Dark final section has readable text and a wide mobile CTA. Download alternative and registration guidance remain present. Footer stacks on mobile and aligns in three columns on wider screens. |

No image distortion, removed category, clipped document page, overlapping text/control or footer overflow was observed. The light product surface stays white in both OS-preference emulations. Section spacing is consistent; the full document pages deliberately retain their blank paper area. Desktop H1 wrapping varies between 1280 and 1440 because fluid font size meets the capped container (F7).

### Authenticity and cropping

All ten derivative outputs were decoded and compared pixel-for-pixel against the corresponding unchanged source PNG or manifest crop. All comparisons and source SHA-256 checks passed. No screenshot was reconstructed or fictionalized. Provenance establishes fidelity to the supplied assets; the authenticated product's calculations were not independently exercised.

The form's four rows and invoice's four lines remain complete in the small-screen variants. The two exported document images use their complete source bounds. The registration illustration is a separate example, accurately labelled. Every enlargement link opens the original PNG, including the document examples; the interface does not mislabel those image links as direct PDF downloads.

## 4. Accessibility

**No concrete P0/P1 accessibility failure found.** axe-core checks for WCAG A/AA through 2.2 plus best-practice tags found zero violations in each of the eight Timeliste cases. Lighthouse accessibility scored 100 in both runs. These results are automated evidence, not full WCAG certification or screen-reader testing.

- Tab reveals “Hopp til innhold” at y=12 with an outline; Enter moves focus to `#timelisteinnhold` in all eight cases.
- The first FAQ received a solid 3 px focus outline and opened with Enter, then closed with Space in each case. All eight disclosures use native `details/summary` semantics.
- The supplemental 55-step traversal at 375 px found no missing outline on focused actionable elements. This is a sampled traversal, not a claim about every possible browser/assistive-technology combination.
- All six main images have descriptive Norwegian alt text. Art-directed alternatives retain accurate shared descriptions.
- All six full-image links have distinct accessibility-tree names beginning **“Åpne hele bildet: …”**. Their visible label is included, preserving the Phase 3.3A correction. Actual navigations returned 200 and complete PNGs with nonzero natural dimensions.
- One H1 is followed by H2 sections and H3 subsections; no skipped heading level was found. Both tables have captions and scoped row/column headings.
- No text-contrast violation was reported. axe listed manual-review contrast items for the decorative, `aria-hidden` chevrons/arrows; these are not demonstrated text failures. Visual inspection confirms readable text on the white/light panels and dark final CTA. Small text inside raster product screenshots remains F1, not an automated contrast pass for image contents.
- Reduced-motion media matches were confirmed, scroll behavior became `auto`, and sampled transitions were suppressed.

No screen-reader session, real-touch-device interaction or cross-engine Safari/Firefox run was performed.

## 5. SEO verification

| Element | Fresh result |
|---|---|
| H1 | Exactly one: “Timeliste mal (gratis).Fra arbeidstimer til ferdig faktura.” The inline span creates a visual break, not another H1. |
| Title | `Timeliste mal – gratis og enkel timeliste (PDF / nett) | Jobbleder` |
| Description | `Gratis timeliste mal for håndverkere og små bedrifter. Lag timeliste raskt, last ned som PDF og få full oversikt.` |
| Canonical | `https://www.jobbleder.no/timeliste-mal` |
| Pillar status | Existing `isPillar: true` and `timeliste` topic unchanged. |
| Linking | Timeliste PDF, uke, ansatt and prosjekt cluster preserved, plus contextual Faktura/instructions and existing related document destinations. |
| FAQ | Exactly one FAQPage block, eight questions, exact question/answer parity with the rendered disclosure HTML. Original three topics retained. |
| Global schemas | Organization and WebSite remain present. No fabricated ratings/offers introduced. Existing SearchAction observation remains F6. |
| Sitemap | 200; 45 URLs, all on the www production origin; `/timeliste-mal` included. |
| Robots | 200; allows `/`, disallows `/api/` and `/private/`, specifies `Host: https://www.jobbleder.no` and the www sitemap. |

The page preserves both template and digital-timeliste intent early in the page. Its main metadata and educational content focus on timeliste, not “gratis fakturaprogram”. The invoice section illustrates the downstream conversion and links to the dedicated invoice page. No unnecessary title/canonical competition was found. Ranking/cannibalization outcomes in search engines were not measured.

## 6. CTA and PDF verification

| Action | Executed check and result |
|---|---|
| Hero “Lag timeliste gratis” | Actual browser click reaches `https://app.jobbleder.no/` and English login with “Create account”. |
| Secondary “Last ned PDF-mal” | Actual 375 px click sets `#pdf-maler`. After smooth scrolling settles, section top is 100.98 px and sticky header bottom 73 px; heading is unobscured. |
| Blank PDF | Actual new-tab click reaches `/downloads/timeliste-mal-jobbleder.pdf`. Fresh GET: 200, application/pdf, 36,150 bytes, PDF signature. |
| Last seven days PDF | Fresh GET to the unchanged external endpoint: 200, application/pdf, 334,287 bytes, PDF signature. Its date/content semantics were not inspected; this is endpoint/delivery verification. |
| Contextual Faktura link | Actual click reaches local `/fakturaprogram-gratis` and its product heading. |
| Final CTA | Actual click reaches the same app login. At 375 px it is 327×51 px. |
| Registration helper | Login is English; switching to “Create account” displays “Create your account”, Repeat password and agreement controls. No credentials entered, agreement accepted or account submitted. Helper text is accurate. |

All Timeliste features described by the page are within the user's confirmed Free scope. Premium is presented as document-profile control, not a requirement for PDF/export/conversion. No employee-account, payroll, GPS, approval, automatic overtime or automatic-send promise was found.

Existing PDF URLs and new-tab behavior are unchanged. No external endpoint was modified.

## 7. Performance — local laboratory only

Lighthouse 13.6.0, one run per profile, local production build. No field measurements or Vercel performance results are claimed. Browser QA and Lighthouse runs were not run concurrently.

| Metric | Mobile | Desktop |
|---|---:|---:|
| Emulated viewport | 412×823, DPR 1.75 | 1350×940, DPR 1 |
| Simulated RTT / throughput / CPU factor | 150 ms / 1,638.4 Kbps / 4× | 40 ms / 10,240 Kbps / 1× |
| Performance | 99 | 100 |
| Accessibility | 100 | 100 |
| Best practices | 96 | 96 |
| SEO | 100 | 100 |
| LCP | 1.945 s | 0.678 s |
| FCP | 1.097 s | 0.315 s |
| CLS | 0 | 0 |
| Total blocking time | 108.5 ms | 0 ms |
| Speed index | 1.097 s | 0.390 s |
| Total transfer in Lighthouse capture | 252,125 bytes | 381,512 bytes |
| JavaScript transfer | 150,834 bytes / 10 requests | 161,322 bytes / 12 requests |
| Image transfer in Lighthouse capture | 60,514 bytes / 3 requests | 152,540 bytes / 4 requests |

These Lighthouse image totals are initial/capture-time transfer totals, including resources it observed; they are **not** the six-image full-scroll payload. The responsive browser runs decoded all main images and measured encoded product-image payload of **141,856 bytes at 375 px** and **234,562 bytes at 768/1280/1440 px**. Mobile requests selected the mobile variants. The hero is eager/high priority and discoverable in initial HTML; the other five images are lazy. Natural ratios were retained and no layout shift was observed while loading/scrolling.

Lighthouse passed all three LCP discovery checks. No external webfont requests were recorded. There were no Lighthouse run warnings.

Diagnostics: approximately 27 KiB potentially unused JavaScript and 14 KiB legacy JavaScript were reported in the existing shared chunk. CSS render-blocking estimates were 20 ms mobile / 10 ms desktop. Mobile also reported about 120 ms unattributed forced reflow. These are lab diagnostics and modelled opportunities, not measured benefits from a proposed change. The Timeliste component is a server component, its FAQ is native HTML, and no new library or dedicated interactive client bundle was introduced. Desktop prefetching changes request counts, so its larger transfer total is not evidence of a route regression.

The best-practices deduction is the observed local analytics handshake error (F4). No uncaught page JavaScript exception was recorded in the eight Timeliste cases.

Reports: [mobile Lighthouse](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase43-evidence/lighthouse-mobile.report.html), [desktop Lighthouse](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase43-evidence/lighthouse-desktop.report.html). Matching JSON files retain settings and audit details.

## 8. Regression and audit integrity

The homepage and Faktura each rendered at 375, 768, 1280 and 1440 px under dark preference. All returned 200 with cache disabled, retained loaded/labelled images, correct canonical destinations, and no horizontal overflow or uncaught page exception. Homepage retains all four product sections and four workflow text paths. Invoice remains its dedicated product page with its existing visual structure.

Navigation and footer source are unchanged. Timeliste uses the existing newer SiteHeader/SiteFooter; Faktura keeps its existing Navbar/Footer. This pre-existing difference was not changed during this audit. Mobile menu controls worked, their links remained in bounds, and all local href destinations gathered from Timeliste returned 200. Both PDF endpoints and canonical/sitemap/robots infrastructure remain functional.

A SHA-256 baseline was taken for all **169 tracked and untracked project files present at the start of this audit**. Comparison after testing found **zero changes** to those files. This includes the Phase 4A.2 application files, all image sources/derivatives and existing reports. Only this new report is added to the repository. Test scripts, screenshots, lab reports and JSON evidence are outside the project in the evidence directory/its parent.

The current uncommitted Phase 4A.2 files and pre-existing unrelated untracked product assets were not staged or otherwise altered. A later approved release must include the required Timeliste sources and derivatives deliberately; this audit does not authorize including all untracked files.

## 9. Findings by severity

Severity: P0 = critical blocker; P1 = important release correction; P2 = non-blocking improvement; P3 = optional polish. **No P0 or P1 finding.**

### F1 — P2: Fine product details remain small on mobile

Affected: `components/product/timelist/TimelistProductPage.tsx:44,61,71,77,87` and its media selections in `scripts/prepare-timelist-media.mjs`.

At 375 px, full four-row forms and full document pages are scaled into a 327 px content width. Individual field labels and invoice fine print are small. All categories remain present, visible HTML explains the workflow and values, and original-image links work, so this is not a lost-content or navigation blocker. Consider a future detail presentation or additional authentic close-ups while retaining all four categories and full document access. Do not enlarge/redraw fictional UI.

### F2 — P2: Comparison row labels wrap inside words at 375 px

Affected: `components/product/timelist/timelistProduct.module.css:57–61,99–100`; `TimelistProductPage.tsx:93`.

“Alle timelistefunksjoner” and “PDF og fakturakonvertering” split awkwardly inside the fixed-width first column. The 12 px table text is readable but visually rough; no overflow or missing content occurs. A later small copy/layout adjustment could use shorter row labels or a clearer narrow-screen comparison. Evidence: `section-375-7.png`.

### F3 — P2: Free-start journey opens English login first

Affected: `components/site/Primitives.tsx:6–14`, external app authentication UI.

Actual CTA clicks show English login and require choosing “Create account”. Marketing guidance accurately explains this, so the CTA is not broken. Norwegian registration or a verified direct registration destination could reduce friction in a separate app task. No unsupported URL should be guessed.

### F4 — P2: Existing local analytics handshake error and unverified delivery

Affected: `components/Tracker.tsx`, `app/api/handshake/route.ts`, `app/api/footprint/route.ts`.

Each tested marketing navigation observed the existing `/api/handshake` HTTP 400; Lighthouse's console audit flags it. Page rendering/navigation are not gated on it, and no retry loop or uncaught page exception was observed. The route's catch-all does not identify the cause by itself. Earlier phases documented local TLS trust behavior; this audit did not re-diagnose upstream transport or establish a production outage. A 200 footprint response still does not prove upstream delivery because the route returns before that operation completes. Keep the normal production analytics smoke check in the eventual release process.

### F5 — P3: Shared JavaScript and minor lab performance opportunities

Affected: existing Next/shared runtime chunk, reported as `aee6c7720838f8a2.js` in this build. Lighthouse estimates 27 KiB unused and 14 KiB legacy JavaScript. Initial-load performance is already 99/100; no new Timeliste-specific dependency was found. Avoid speculative framework changes during release.

### F6 — P3: Existing WebSite SearchAction needs separate cleanup

Affected: `app/layout.tsx` and blog search behavior, already noted in the Phase 3.3 audit. The unchanged schema advertises `/blogg?q={search_term_string}`. This is not a new Timeliste schema issue; the existing observation about unsupported blog search should be handled separately rather than expanding this release.

### F7 — P3: Desktop headline wrapping and explanatory captions can be polished

Affected: `components/product/timelist/timelistProduct.module.css:10,95` and `TimelistProductPage.tsx:44,61,71,87`.

The larger fluid H1 at 1440 wraps “Timeliste mal (gratis)” over two lines while 1280 fits that phrase on one. Both fit and preserve CTA visibility; a future font/container tuning could make the desktop rhythm steadier. Several captions explain mobile cropping explicitly; they are truthful but could later be shorter product-oriented captions. No redesign is required for release.

## 10. Final recommendation

**READY TO DEPLOY**, after user approval and the normal production deployment smoke check. No application change is required by the findings of this audit. P2/P3 items can be scheduled separately.

The newly completed tests resolve the main uncertainty from Phase 4A.2: the target browser matrix, responsive image composition, theme/reduced-motion behavior, keyboard/focus behavior and screenshot evidence have now been exercised. This recommendation does not claim production performance, exhaustive WCAG conformance, PDF date-content correctness, account creation or authenticated invoice generation.

Stop here. No fixes, commit, push or publishing performed.
