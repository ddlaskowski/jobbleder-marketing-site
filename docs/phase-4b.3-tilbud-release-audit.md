# Phase 4B.3 — Tilbud final release audit

Date: 18 November 2026, Europe/Berlin. Target: local production build at `http://127.0.0.1:3022/tilbud-mal`.

## 1. Executive summary

**READY TO DEPLOY. No P0/P1 issue found in the executed checks.** The three conversion sections accurately present Tilbud → Faktura, Tilbud → Kontrakt with independent editing, and Kontrakt → Faktura. All are explicitly available in Free. Premium is limited to document branding differences. No unsupported electronic signing, automatic approval, automatic delivery, pricing or paid workflow restriction was found.

Fresh TypeScript, full ESLint and production-build checks passed. All four requested widths passed the local browser matrix under both light and dark OS preferences. Reduced motion was toggled and checked in each case. No horizontal overflow, distorted image or observed layout shift was detected. Seven full-image navigations worked, all seven FAQs worked with the keyboard, and both actual primary/final CTA clicks reached the existing application login page.

Lighthouse 13.6.0 measured performance **94 mobile / 100 desktop**, accessibility **100 / 100**, SEO **100 / 100**, LCP **2.157 s / 0.610 s**, and CLS **0 / 0**. Best practices scored 96 in both runs because of the known local analytics handshake HTTP 400. These are local laboratory measurements, not production or field Core Web Vitals.

This audit made **no application, content, CSS, metadata, configuration or image changes**. The only new repository file is this report. No redesign, fix, commit, push or deployment was performed. Deployment still requires approval.

## 2. Scope, standards and evidence

Reviewed the Phase 3.3 homepage audit and subsequent image-link naming convention, Phase 4A.3 Timeliste release standard, Phase 4B.1 offer audit, Phase 4B.2 implementation report, implemented offer component/CSS/content/manifest, shared primitives/navigation, SEO route/content, sitemap, robots and existing analytics handling.

Evidence directory outside the repository:

`C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase4b3-evidence/`

Fresh outputs:

- `browser-results.json`: eight responsive/theme cases, twelve regression cases, local href checks and FAQ/schema comparison.
- `extra-results.json`: all-FAQ keyboard checks, Chrome accessibility-tree link names, focus checks and calculated gradient contrast.
- `interactions.json`: 60 keyboard stops, seven original-image navigations, both CTA navigations, contextual Faktura navigation, menu navigation, SEO, PDF endpoints, fragments and lossless-image integrity.
- `final-scope.json`: successful start/end file-hash comparison and aggregate check assertions.
- `lighthouse-mobile.report.{json,html}` and `lighthouse-desktop.report.{json,html}`.
- Eight `offer-{width}-{light,dark}.png` full-page screenshots and matching `hero-*` screenshots; conversion-section captures at every width/preference; comparison captures and homepage/Faktura/Timeliste regression screenshots.
- `full-matrix.png` and `conversion-matrix.png`: visual review contact sheets derived from QA screenshots, not source product images.

Existing Chrome and cached Puppeteer, axe-core and Lighthouse were used; no dependency was installed. A fresh Next production server was started on port 3022 after the successful build. No browser certificate validation was disabled. An initial supplemental navigation selector assumed Faktura used the newer product dropdown; inspection showed its unchanged legacy Navbar. The test was corrected outside the repository, and the complete supplemental run then passed. This was a harness mismatch, not a broken page.

## 3. Findings by severity

| ID | Priority | Finding | Release impact |
|---|---|---|---|
| — | P0 | None identified. | No blocker found. |
| — | P1 | None identified. | No required accessibility or functionality correction found. |
| F1 | P2 | Fine raster UI/document text remains small on phones. | Non-blocking; full-image links and readable HTML explanations work. |
| F2 | P2 | Existing local `/api/handshake` returns HTTP 400. | Not evidence of a production outage; verify production analytics during the later deployment smoke test. |
| F3 | P2 | Free CTA opens English login before account creation. | Existing flow, accurately explained; no broken destination. |
| F4 | P3 | Shared-runtime JavaScript has optional performance opportunities. | Mobile performance remains 94; no new offer-specific client component/dependency. |
| F5 | P3 | Existing global SearchAction observation remains. | Unchanged global schema; separate cleanup. |
| F6 | P3 | Example customer name adds an unsupported legal suffix. | Minor demo-copy inconsistency; no effect on features, amounts or workflows. |

### F1 — Screenshot fine print

Affected: `components/product/offer/OfferProductPage.tsx:37,41,51,57,62,69` and supplied raster resolution. At 375 px, fitted screenshots retain small field labels and PDF fine print. The three conversion explanations, source/document numbers and PDF totals also exist as readable HTML. Every figure has a full-original link that was actually opened successfully. The complete PDF page remains visible; mobile crops do not remove a supported conversion path. This is the same type of non-blocking observation as Phase 4A.3 F1. No synthetic sharpening, upscaling or source-image changes were made.

### F2 — Local analytics

Affected: unchanged `app/api/handshake/route.ts` and shared tracking. The responsive runs and both Lighthouse reports observed a single HTTP-400 console resource error at `/api/handshake`. No JavaScript page exception or page-rendering failure was observed. The handler's catch-all response alone does not establish the upstream cause. Earlier phases documented environment/TLS behavior; this audit does not claim a new TLS diagnosis or a production failure. Production analytics delivery was not tested here, and a successful marketing-page request would not itself prove event delivery. Keep this explicit in the later production smoke test; no analytics implementation was altered.

### F3 — Registration friction

Affected: shared `components/site/Primitives.tsx:6–14` and external app. Both actual CTA clicks reached `https://app.jobbleder.no/`, whose visible page includes “Login” and “Create account”. The helper copy correctly explains that extra step. No credentials were entered, account created or authentication flow changed. This repeats an established shared observation rather than introducing a new Tilbud restriction.

### F4 — Optional runtime performance work

Lighthouse estimates 27 KiB unused JavaScript and 14 KiB legacy JavaScript in both profiles. Mobile TBT was 243 ms with simulated 4× CPU slowdown; desktop TBT was 0 ms. Mobile diagnostics also flag main-thread work/forced reflow, and render-blocking estimates are 10 ms mobile / 40 ms desktop. The offer page is a server component with native FAQ controls and no added library. The audit does not establish an offer-specific regression against a controlled baseline or recommend framework changes during this release. Node also emitted the existing `DEP0205 module.register()` deprecation notice during the successful build.

### F5 — Existing global schema observation

`app/layout.tsx:58–59` still advertises the global WebSite SearchAction `/blogg?q={search_term_string}`, previously noted as lacking corresponding blog-search behavior in Phase 3.3/4A.3. The layout is byte-unchanged. Search functionality was not reimplemented or exhaustively re-audited here. Tilbud FAQPage data is independently valid and matches its visible content.

### F6 — Minor example-name mismatch

`components/product/offer/OfferProductPage.tsx:43` says “Eksempel Eiendom AS”, while the supplied offer PDF and interface show “Eksempel Eiendom”. The “AS” suffix is not established by the asset. Future copy polish can use the exact displayed name. This is a minor example-label inconsistency, not an unsupported product capability or pricing promise. Per audit scope, no copy was changed.

## 4. Validation results

| Fresh command | Result | Warnings/failures |
|---|---|---|
| `npx.cmd tsc --noEmit --incremental false` | PASS, exit 0 | No TypeScript diagnostics. |
| `npm.cmd run lint` | PASS, exit 0 | Full ESLint; no reported warnings/errors. |
| `npm.cmd run build` | PASS, exit 0 | Compilation, TypeScript and all 55 static pages completed. Two Node worker notices for `DEP0205 module.register()`; no build failure. |

No validation result from the implementation phase was substituted for these fresh runs. The existing environment file was read normally by Next; no secret values are included in this report or changed by the audit.

## 5. Browser and responsive matrix

Local desktop Chrome, responsive CSS viewport, height 900 px, DPR 1, cache disabled. These are browser emulations, not physical-device tests.

| Width | OS preference | HTTP | Overflow / ratios / 7 images / 10 sections | Observed CLS | Axe violations | Skip / FAQ keyboard / focus | Reduced motion |
|---:|---|---:|---|---:|---:|---|---|
| 375 | Light | 200 | PASS | 0 | 0 | PASS | PASS |
| 375 | Dark | 200 | PASS | 0 | 0 | PASS | PASS |
| 768 | Light | 200 | PASS | 0 | 0 | PASS | PASS |
| 768 | Dark | 200 | PASS | 0 | 0 | PASS | PASS |
| 1280 | Light | 200 | PASS | 0 | 0 | PASS | PASS |
| 1280 | Dark | 200 | PASS | 0 | 0 | PASS | PASS |
| 1440 | Light | 200 | PASS | 0 | 0 | PASS | PASS |
| 1440 | Dark | 200 | PASS | 0 | 0 | PASS | PASS |

Each run scrolled and decoded all seven images, checked image geometry and page width, exercised the skip link and first FAQ, recorded resources and captured screenshots. Reduced motion was a live toggle after each ordinary-preference run, not eight additional cold loads: media matched, document scroll behavior was `auto`, and the sampled CTA transition duration was `0s`. No animation is added by this page.

Visual review found readable HTML, consistent section spacing, preserved image proportions, no overlapping text/control and aligned footer content. The intentional light product surface remains white/dark ink under both OS preferences; support for dark preference does not mean a separately designed dark palette. The prior white-on-white light-theme defect does not recur. Primary CTA is visible in every 900 px first screen; at 375 px it is approximately 192×51 px. The secondary example anchor lands below the sticky header (about y=100 versus a 73 px header).

### Conversion sections

| Section | Fresh visual/content result |
|---|---|
| Tilbud → Faktura | Invoice 111 explicitly identifies Tilbud 29 as source. The mobile crop retains source and the parkett line. Copy describes reuse, review, PDF generation/download; no automatic sending or approval. |
| Tilbud → Kontrakt | Contract 11 identifies Tilbud 29 in the creation view. The adjacent independently edited Contract 11 shows work/pricing/payment fields. Images stack at 375/768 px and sit side by side at 1280/1440 px. The edited view is not falsely described as showing an offer-source badge. Manual signing is stated. |
| Kontrakt → Faktura | Invoice 112 identifies Contract 11 as source. Source and invoice line remain in the mobile crop. HTML shows Tilbud 29 → Kontrakt 11 → Faktura 112 and clearly permits the direct offer-to-invoice alternative. |

Both the entire offer document and all original images remain accessible. The tablet contract presentation has more room than a two-column 768 px layout. Screenshot fine print is F1, not a claim that every embedded field label is comfortably readable at phone size.

### Screenshot evidence

[Desktop first screen](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase4b3-evidence/hero-1440-light.png) · [Mobile first screen](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase4b3-evidence/hero-375-dark.png) · [Conversion matrix](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase4b3-evidence/conversion-matrix.png)

## 6. Accessibility

- Axe WCAG A/AA through 2.2 and best-practice checks: zero violations in all eight responsive/theme runs. Lighthouse accessibility: 100 in each profile. These are automated results, not a complete WCAG certification.
- Axe lists 12 manual-review nodes per case, covering gradient-background text and decorative characters. Gradient text foregrounds were checked against both endpoints (`#eff6ff` / white); minimum ratio **6.1579:1**. Decorative chevrons/arrows are hidden from assistive technologies. Image-contained fine print is not certified by automated text-contrast checks.
- One H1, “Lag tilbud som blir til mer.”, followed by section H2s and subsection H3s. The offer comparison has a caption and scoped column/row headings. No skipped main-content heading level found.
- All seven images have accurate Norwegian alt text compatible with the selected mobile crops. The image links preserve the Phase 3.3A visible-label correction: Chrome names begin “Åpne hele bildet : …”, followed by the individual image description. No overriding `aria-label` masks the visible action.
- Skip link becomes visible with keyboard focus and moves focus to `#tilbudsinnhold`. Focus indicators use solid 3 px outlines; the dark final section retains a lighter visible outline.
- All seven FAQs opened with Enter and closed with Space at each width in supplemental checks. They use native `details/summary` semantics. Ten successive focus stops were checked at each width; a separate 60-Tab mobile traversal found no missing outline on focused links/summaries/buttons.
- Mobile menu opens/closes and exposes correctly sized links. Actual seven full-image clicks opened complete PNG images with nonzero natural dimensions.

No real screen-reader session, Safari/Firefox run or physical touchscreen test was executed. No new P0/P1 accessibility failure was established.

## 7. Functional and content verification

| Claim | Assessment and evidence |
|---|---|
| Create offers | Correctly described in hero, three-step creation section and authentic editor. |
| Offer PDF | Complete authentic exported offer page shown; original-image link works. Copy explains downloading and sharing manually. No nonexistent blank-offer PDF download is advertised. |
| Tilbud → Faktura | Correctly described and source-labelled screenshot supplied. |
| Tilbud → Kontrakt | Correctly described with matching contract-creation example. |
| Independent contract editing | Explicitly stated and illustrated by the supplied edited contract. |
| Kontrakt → Faktura | Correctly described and illustrated by Invoice 112 sourced from Contract 11. |
| Free | Hero, workflow copy, comparison and FAQ explicitly include offers, PDF, clients/projects and conversions. No workflow is gated to Premium. |
| Premium | Same document functions; removal of Jobbleder branding and own company logo. No price, quota or unconfirmed paid feature introduced. |

These capabilities remain **USER-CONFIRMED**, supported by authentic supplied screenshots. Marketing-code inspection verifies rendered claims, not backend calculations, authenticated conversions or independent-edit persistence. No document was created or modified in the application during this audit.

The example arithmetic is coherent: 12,000 kr net + 3,000 kr at 25% MVA = 15,000 kr. Values are labelled demonstration values rather than standard prices or tax defaults. The only exact example-name inconsistency is F6.

Both primary and final CTAs were actually clicked from the mobile page and reached `https://app.jobbleder.no/` with the expected login/create-account page. Secondary CTA scrolled to the offer example; contextual Faktura link navigated to `/fakturaprogram-gratis`. Authentication was not submitted.

## 8. SEO verification

| Item | Fresh result |
|---|---|
| Title | `Tilbud mal – skriv et profesjonelt tilbud (gratis) | Jobbleder` |
| Description | `Tilbud mal for små bedrifter og håndverkere. Lag tilbud raskt og konverter til faktura når kunden sier ja.` |
| Canonical | Exactly `https://www.jobbleder.no/tilbud-mal`. |
| Indexability | HTTP 200; no noindex meta directive found; sitemap/robots permit the public route. Source infrastructure unchanged. |
| Heading/search intent | Exactly one H1; “Tilbud mal” in eyebrow/breadcrumb; offer creation, offer example and original educational topics retained. |
| Internal links | All 26 distinct collected local href URLs returned 200, including image destinations. Primary same-page anchor and both instructions fragments additionally verified to exist. |
| FAQ | Exactly one FAQPage, seven questions/answers, exact match with visible disclosure content. Original three topics preserved. |
| Other schema | Existing Organization and WebSite retained; no invented review, price or offer schema. F5 remains separate. |
| Sitemap | HTTP 200, 45 URLs, all on `https://www.jobbleder.no/`, including the offer canonical. |
| Robots | HTTP 200; allows `/`, excludes `/api/` and `/private/`, uses WWW Host and sitemap URL. |

The unchanged `content/seoPages.ts` continues to define the Tilbud pillar and metadata. The educational offer cluster links to `lage-tilbud`, `tilbud-eksempel` and `hvordan-folge-opp-tilbud`. Related Faktura/Timeliste links provide document context. The three conversion sections support offer intent rather than repeating an invoice/timelist landing page. No unnecessary new URL, redirect or competing keyword-focused page was introduced. This is a qualitative content assessment, not a measured ranking/cannibalization analysis.

## 9. Lighthouse and performance

One mobile run and one desktop run, sequentially after functional browser tests finished. Lighthouse **13.6.0**, local production build, Chrome headless, simulated throttling and normal storage reset. No URL blocking, ignored certificate errors or custom audit skips were used. Run warnings: **none** in either report.

| Metric | Mobile | Desktop |
|---|---:|---:|
| Performance | 94 | 100 |
| Accessibility | 100 | 100 |
| SEO | 100 | 100 |
| Best practices | 96 | 96 |
| LCP | 2.1567 s | 0.6100 s |
| CLS | 0 | 0 |
| Total blocking time | 243 ms | 0 ms |
| Total measured page transfer | 260,756 bytes | 387,346 bytes |

Mobile profile: 412×823, DPR 1.75, simulated RTT 150 ms / throughput 1,638.4 Kbps / 4× CPU. Desktop preset: 1350×940, DPR 1, RTT 40 ms / throughput 10,240 Kbps / 1× CPU. These standard Lighthouse sizes differ from the separate required responsive matrix. Fetch times: mobile `2026-11-18T19:09:53.799Z`; desktop `2026-11-18T19:10:34.202Z`.

The hero image is LCP in both profiles. It is eager/high priority; the remaining six figures use lazy loading. Its mobile resource is only 11,992 bytes versus desktop 70,056 bytes. Lighthouse initially requested four product images: 68,724 encoded / 69,852 transferred bytes mobile; 157,996 encoded / 159,125 transferred bytes desktop. Later lazy content is not included in those initial four-image totals.

After scrolling through all seven figures in the cache-disabled browser runs, Resource Timing measured:

| Product images | 375 px | 768/1280/1440 px |
|---|---:|---:|
| Encoded image payload | 151,650 bytes | 276,466 bytes |
| Transfer including recorded overhead | 153,750 bytes | 278,566 bytes |

Only one variant per figure was requested in each viewport. No original PNG was fetched until enlargement. Declared dimensions and source-specific picture dimensions preserved proportions; observed CLS stayed 0 while decoding and scrolling. All twelve WebP files were freshly decoded and compared pixel-for-pixel with their manifest PNG crop/full source; all lossless checks and source hashes passed. Originals were never rewritten.

Lighthouse's sole console-error entry is the existing handshake 400 (F2), explaining the best-practices deduction. Runtime optimization observations are F4. Scores come from single local runs and can vary; they are not production throughput, real-device interaction latency or field measurements.

## 10. Regression results

Homepage, `/fakturaprogram-gratis` and `/timeliste-mal` were each loaded afresh at 375, 768, 1280 and 1440 px with dark OS preference: **12 successful regression cases**. All returned 200, decoded their visible product images, showed no horizontal overflow and raised no JavaScript page exceptions. The homepage retains all four product sections and exactly four HTML document workflows.

Homepage and Timeliste product-menu keyboard activation and actual Tilbud navigation worked. Faktura retains its existing legacy Navbar; its home link was actually followed successfully. No dropdown was incorrectly required of that unchanged menu. Tilbud mobile navigation was opened/closed in both preference runs, and shared CTA behavior was verified through the actual target app.

The unchanged blank Timeliste PDF and external last-seven-days PDF endpoint both returned 200, `application/pdf`, with `%PDF-` signatures. No offer PDF endpoint was invented or modified. Canonical, sitemap and robots infrastructure remain unchanged.

## 11. Exact files changed and recommendation

Created during this audit:

- `docs/phase-4b.3-tilbud-release-audit.md`

The completed start/end SHA-256 comparison confirmed that all **193 pre-existing tracked and untracked files are unchanged**, including source PNGs, derivatives, implementation files and earlier reports. HEAD and `next-env.d.ts` are unchanged, and this report is the only new repository file. Generated Next build output and external QA evidence are not application changes. The prior Phase 4B.2 working-tree changes remain uncommitted; the audit does not stage or include unrelated untracked assets.

For a later approved release, use the Phase 4B.2 exact implementation/asset inventory, including the seven original PNGs referenced by working enlargement links. Preserve other unused sources locally and exclude unrelated assets/test artifacts from the release commit. No staging or release action was performed here.

**Final recommendation: READY TO DEPLOY**, after user approval and the normal production smoke test, including production analytics. No P0/P1 fix is required by this audit. F1–F6 are non-blocking P2/P3 observations; none was silently changed.

Stop after this audit. No commit, push or deployment.
