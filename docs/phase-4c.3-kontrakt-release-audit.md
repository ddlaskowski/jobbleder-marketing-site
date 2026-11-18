# Phase 4C.3 — Kontrakt final release audit

Date: 18 November 2026, Europe/Berlin. Target: local production build at `http://127.0.0.1:3024/kontrakt-mal`.

## 1. Executive summary

**READY TO DEPLOY. No P0/P1 issue established for the audited Kontrakt implementation.** No application change is required by this audit. Existing user approval of the desktop/mobile design is preserved; no redesign or silent fix was made.

The page accurately presents contract creation, independent editing, three pricing structures, configurable payment arrangements, editable terms, PDF output and document conversion. It does not promise automatic milestone tracking, percentage calculations, scheduled invoice generation, sending or collection. The PDF is explicitly an earlier contract version, and the invoice example is explicitly a full-value example rather than a calculated payment-plan stage.

Fresh TypeScript, full ESLint and production build passed. All four requested widths passed browser checks under light/dark OS preferences, with reduced-motion toggles in all eight cases. Ten image links and ten FAQ controls worked; no overflow, distorted image or observed layout shift was found. Automated accessibility found zero violations in every case.

Local Lighthouse 13.6.0: performance **99 mobile / 100 desktop**, accessibility **100 / 100**, SEO **100 / 100**, LCP **1.096 s / 0.571 s**, CLS **0 / 0**. Best practices scored **92 / 96**, reflecting the known local analytics error and a mobile hero pixel-density warning. These are single local laboratory runs, not production or field measurements.

One extra regression check remains **unverified**: Timeliste's external last-seven-days PDF endpoint timed out in two Node attempts and a curl check. No HTTP status was received. This is recorded as P2/F2, not passed or diagnosed as a production outage. The local Timeliste page and static PDF passed; no corresponding source changed. Recheck the external dependency during the later production release process.

Only this audit report is created in the repository. No existing application, CSS, metadata, content, image, configuration or report is edited. No commit, push or deployment.

## 2. Scope, standards and evidence

Read `docs/phase-4c.1-kontrakt-audit.md`, `docs/phase-4c.2-kontrakt-implementation.md`, the implemented contract component/CSS/content/manifest and shared primitives. Applied the Phase 3.3 visible-label/image-link standard and Phase 4A.3/4B.3 distinctions between fresh tests, local lab results, user-confirmed product behavior and release limitations.

The existing Chrome executable and cached Puppeteer, axe-core, Sharp and Lighthouse were used. No dependency was installed. A new production server on port 3024 was started after the fresh build, so old preview-server results were not substituted for the new checks.

Evidence outside the repository:

`C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase4c3-evidence/`

- `browser-results.json`: eight responsive/theme cases, sixteen page regression cases, 28 local href results and FAQ/schema parity.
- `extra-results.json`: all-FAQ keyboard tests, ten accessible image-link names per width, precise image ratios and contrast calculations.
- `interactions.json`: 60 Tab steps, ten actual original-image navigations, primary/final CTA clicks, contextual Faktura navigation, product-menu navigation, SEO/fragments, local PDF and fifteen image-integrity checks.
- `external-pdf.json`: the unresolved external download's actual connection failures; completed supplemental results retain an explicit `verified: false` entry for it.
- `headers.json`: fresh HTTP 200 and absence of an `X-Robots-Tag` restriction.
- `lighthouse-mobile.report.{json,html}` and `lighthouse-desktop.report.{json,html}`.
- Fresh full-page `contract-{width}-{light,dark}.png`, matching hero captures, payment/terms/workflow details, comparison/regression screenshots and `layout-matrix.png`.
- `final-scope.json`: end-of-audit scope assertions. The start baseline is alongside the directory as `phase4c3-baseline.json`.

The initial two supplemental scripts stopped at the external PDF fetch after their earlier browser checks. Their completed runs retained that failure explicitly and omitted further calls to the failing external service; local/browser/integrity results were then saved. This records the failure without relabelling it as a pass. No application or test assertion for the Kontrakt page was relaxed.

## 3. P0/P1/P2/P3 findings

| ID | Priority | Finding | Release assessment |
|---|---|---|---|
| — | P0 | None identified. | No critical blocker demonstrated. |
| — | P1 | None identified in product accuracy, accessibility or local page behavior. | No required Kontrakt correction found. |
| F1 | P2 | Mobile raster density/fine print, including Lighthouse's hero-resolution warning. | Non-blocking; approved appearance, readable HTML, faithful source pixels and enlargement links. |
| F2 | P2 | External Timeliste PDF reachability could not be verified. | Explicit regression uncertainty; unchanged dependency, no HTTP response. Recheck before/in the production smoke test. |
| F3 | P2 | Known local analytics handshake returns HTTP 400. | Not an established production failure; production analytics remains a later release check. |
| F4 | P2 | Free CTA reaches English login before account creation. | Existing flow, correctly explained and navigable. |
| F5 | P3 | Shared runtime/CSS lab optimization opportunities and Node deprecation notices. | No contract-specific client dependency or performance blocker found. |
| F6 | P3 | Existing global WebSite SearchAction observation. | Outside the isolated contract implementation; separate follow-up. |

### F1 — Raster detail and high-density mobile display

Affected: the mobile hero asset `jobbleder-contract-hero-mobile-b5101a336cae.webp`, full document/form imagery and clause fine print. At the standard Lighthouse mobile profile, the hero is displayed at approximately 330×74 CSS pixels from a 332×74 source; the audit expects 495×111 pixels for its density threshold. `image-size-responsive` therefore fails. This is **resolution**, not aspect-ratio distortion: all ten displayed image ratios passed the precise geometry checks, and the bytes are lossless PNG crops.

The current 375 px design was already visually approved and key options/explanations remain HTML. All ten full-image links work. A future higher-resolution authentic capture would improve dense displays and clause/document fine print. Do not invent detail or upscale the existing crop solely to satisfy Lighthouse. No source or design was changed during this audit.

### F2 — External Timeliste download remains unverified

Endpoint: `https://laskowskicreative.no/api/jobbleder/user/documents/oneweek-timelist`.

- Fresh Node supplemental run: `UND_ERR_CONNECT_TIMEOUT`, 10,000 ms connection timeout.
- Fresh Node interaction run: the same connection timeout.
- Independent `curl.exe --head --max-time 25`: exit 28, could not connect after 22,371 ms.

No HTTP 200, 400 or other response was received; do not infer PDF validity or a production outage. The evidence does not distinguish a service/network reachability problem from a limitation of this test environment, and it does not establish a TLS cause. The endpoint and its references are unchanged by Kontrakt. The static Timeliste PDF and all four existing product/home pages passed their executed local checks. This optional external download was an additional regression check, not a Kontrakt CTA; the overall regression scope must not be described as universally passed. Recheck the external dependency separately during release verification.

### F3 — Local analytics error

The unchanged `/api/handshake` returned HTTP 400 in the responsive tests and both Lighthouse runs; it produces a console resource error and a best-practices deduction. No Kontrakt page JavaScript exception was recorded. The catch-all in `app/api/handshake/route.ts` does not by itself diagnose the upstream cause. Production analytics was not retested here, and prior production successes are not a substitute for a new production check. No analytics logic, endpoint configuration or TLS validation was changed.

### F4 — Existing registration step

Shared `ApplicationCTA` targets `https://app.jobbleder.no/`. Both actual primary/final CTA clicks reached the existing login page with “Create account”. The helper copy correctly explains that step. No credentials, registration or authenticated document operation was submitted. This is existing cross-product friction, not a broken Kontrakt CTA or Premium restriction.

### F5 — Optional runtime optimization

Lighthouse estimates 27 KiB unused JavaScript and 14 KiB legacy JavaScript in both profiles. Render-blocking diagnostics estimate 320 ms mobile / 10 ms desktop, and desktop also estimates 9 KiB image-delivery savings and reports a forced-reflow diagnostic. The page is a server component with native FAQ controls and no new client library. These are single-run lab opportunities, not a controlled regression against production. Build workers emit the existing `DEP0205 module.register()` deprecation notices; compilation/types/static generation still succeed. Avoid unrelated framework/CSS changes in a release audit.

### F6 — Existing SearchAction

The unchanged global WebSite schema in `app/layout.tsx:58–59` advertises `/blogg?q={search_term_string}`, the separate search-support observation already recorded in Phase 3.3/4A.3/4B.3. No new contract-specific search capability or schema was added. This audit did not perform a new exhaustive blog-search test.

## 4. Fresh validation results

| Command | Result | Warnings/failures |
|---|---|---|
| `npx.cmd tsc --noEmit --incremental false` | PASS, exit 0 | No TypeScript diagnostics. |
| `npm.cmd run lint` | PASS, exit 0 | Full ESLint; no reported warnings/errors. |
| `npm.cmd run build` | PASS, exit 0 | Compiled successfully, type validation passed, 55 static pages generated. Existing Node worker deprecation notices only. |

The Phase 4C.2 results were read as context; these commands were actually rerun for this audit. No app source was changed between validation and browser/Lighthouse testing.

## 5. Product accuracy

Evidence classification remains important: **USER-CONFIRMED** capabilities are supplied product facts; **UI/document-supported** means authentic screenshots and instructions demonstrate controls/content. Marketing inspection is not an authenticated backend test of saving, calculations, legal suitability or document conversion.

| Required area | Audit result |
|---|---|
| Independent contract creation | Hero uses a standalone populated Time form. Offer-conversion section explicitly also permits creation without an offer. Consistent with instructions/audit evidence. |
| Create from offers | Source-labelled Contract 11 from Tilbud 29, contextual Tilbud link and matching FAQ. User-confirmed workflow. |
| Independent editing | Copy says the resulting contract can be edited as a separate document. No automatic synchronization of later offer changes is promised. User-confirmed behavior. |
| Fixed price | Fast option and explanation supported by the source selector/filled originals. Example 12,000 is labelled a demonstration value. |
| Hourly | Time option and 900 example in the actual hero form/detail. No hours aggregation or automatic invoice calculation promised. |
| Offer-based pricing | Tilbud option and referenced Offer 29 form. No inferred automatic price refresh. |
| Advance | Actual Forskuddsfaktura / 30% field, described as an input. No generated 30% invoice or remainder settlement claimed. |
| Progress terms | Fakturering etter fremdrift option and editable plan detail. Wording concerns the agreed payment arrangement. |
| Payment schedule/percentages | Single 25% row clearly captioned as an excerpt. No complete 100% schedule, automatic milestone tracking, automatic percentage calculation, scheduled invoice generation/sending or collection is claimed. |
| Clauses | Four editable contract sections shown, including work/change, complaint, legal text and extra terms. No legal approval, certification or guaranteed protection claim. |
| Materials/dates/deadline | Observed Entreprenør/Kunde/Begge choices and instructions support responsibility, dates and days-to-pay fields. No purchasing/inventory or default legal deadline inferred. |
| PDF export | Complete authentic document, manual signature fields, clear manual-signing explanation. No nonexistent blank downloadable contract PDF or electronic signing promise. |
| Contract → invoice | Invoice 112 identifies Contract 11 as source; review/download is described. Full 12,000 net example is explicitly not a calculated stage from the plan. User-confirmed basic conversion. |
| Free/Premium | Creation, editing, pricing/payment settings, PDF and conversion explicitly included in Free. Premium changes branding/logo; no price, quota or paid-workflow restriction added. |

### PDF/configuration consistency

The actual full PDF shows price from Offer 29 and payment after completion. `ContractProductPage.tsx:40,44` identifies it as an earlier version and explicitly says it is not the export of the lower payment-plan example. The edited contract screenshot instead shows Fast 12,000 and progress terms; the invoice form shows the full-value line. The text at line 79 correctly separates that invoice from percentage billing. No incompatible screenshots are presented as a verified calculation trace.

The existing educational FAQ recommendation about written contracts remains general guidance, not a legal obligation/certification claim. No actual contract, invoice, payment, account or signature was created during this audit.

## 6. Responsive and visual matrix

Chrome headless, local production build, cache disabled, CSS viewport height 900 px and DPR 1. Preferences were explicitly emulated and confirmed. These are responsive browser tests, not real-device coverage.

| Width | OS preference | HTTP | Overflow / image ratios / 11 sections | Images loaded | Observed CLS | Axe violations | Skip / FAQ / focus | Reduced motion |
|---:|---|---:|---|---|---:|---:|---|---|
| 375 | Light | 200 | PASS | 10/10 | 0 | 0 | PASS | PASS |
| 375 | Dark | 200 | PASS | 10/10 | 0 | 0 | PASS | PASS |
| 768 | Light | 200 | PASS | 10/10 | 0 | 0 | PASS | PASS |
| 768 | Dark | 200 | PASS | 10/10 | 0 | 0 | PASS | PASS |
| 1280 | Light | 200 | PASS | 10/10 | 0 | 0 | PASS | PASS |
| 1280 | Dark | 200 | PASS | 10/10 | 0 | 0 | PASS | PASS |
| 1440 | Light | 200 | PASS | 10/10 | 0 | 0 | PASS | PASS |
| 1440 | Dark | 200 | PASS | 10/10 | 0 | 0 | PASS | PASS |

Reduced motion was toggled after each normal run, not eight extra cold loads: media matched, root scrolling became `auto`, and sampled CTA transition duration was `0s`. Both OS color preferences intentionally receive the established light product surface. The earlier white-on-white heading, footer contrast and generic reduced-motion defects do not recur on this page.

Full-page/hero screenshots were captured for all eight cases, and payment, terms, workflow and comparison details at the requested widths were inspected. Reading widths, section spacing and footer alignment remain consistent with the approved design. All three pricing labels, three payment methods, material choices and four clause sections are retained in their selected images. The PDF remains complete. No clipped workflow/source label, overlapping HTML/control or unexpected layout shift was found; F1 describes remaining raster fine print.

The primary CTA is visible in every 900 px first screen, approximately 238×51 px at 375 px. The secondary example anchor lands around y=101 below the 73 px sticky header. All ten original-image links were actually followed and opened complete PNGs with nonzero natural dimensions.

[Desktop first screen](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase4c3-evidence/hero-1440-light.png) · [Mobile first screen](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase4c3-evidence/hero-375-light.png) · [Layout matrix](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase4c3-evidence/layout-matrix.png)

## 7. Accessibility findings

- Axe WCAG A/AA through 2.2 plus best-practice checks: **zero violations in all eight cases**. Lighthouse accessibility: 100 in both profiles. These are automated findings, not exhaustive WCAG/screen-reader certification.
- The two manual-review contrast entries per case concern decorative aria-hidden chevrons/arrows, not a demonstrated text failure. Tested hero text colors have minimum 6.1579:1 against the pale-blue background; standard page text/final-panel contrast was also visually inspected. Raster fine print is not certified by HTML contrast audits.
- Exactly one H1, followed by section H2s and meaningful H3 subsections; no skipped main-content heading level. The comparison table has a caption and scoped row/column headings.
- All ten images have Norwegian descriptions valid for their desktop/mobile crops. Full-image accessible names begin “Åpne hele bildet : …” with an individual description, retaining the visible-label correction from Phase 3.3A without unnecessary overriding ARIA.
- Keyboard skip link is visible on focus and moves focus to `#kontraktsinnhold`. Actions show solid focus outlines; native FAQ focus is 3 px. A 60-Tab mobile traversal found no focused actionable element without an outline; ten successive stops were also checked at each width.
- All ten FAQs opened with Enter and closed with Space at each width in supplemental tests. Native `details/summary` provides expanded-state semantics, with decorative +/- hidden from assistive technologies.
- Mobile menu opens/closes. Actual product navigation worked from homepage, Timeliste and Tilbud; the unchanged Faktura legacy Navbar home link worked.

No P0/P1 accessibility issue identified. No physical touchscreen, Safari/Firefox or full screen-reader session was executed.

## 8. SEO verification

| Item | Fresh result |
|---|---|
| Title | `Kontrakt mal – enkel kontrakt for håndverkere (gratis) | Jobbleder` |
| Description | `Gratis kontrakt mal for håndverkere og små bedrifter. Lag kontrakt raskt og sikre avtalen med kunden.` |
| Canonical | Exactly `https://www.jobbleder.no/kontrakt-mal`. |
| Indexability | HTTP 200; no noindex meta observed; fresh HEAD has no restrictive X-Robots-Tag; sitemap/robots allow the route. |
| H1/intent | One H1, “Lag kontrakter som passer jobben.” Exact “Kontrakt mal” intent remains prominent in eyebrow/breadcrumb and related content. |
| Existing content | Four educational sections and three original FAQ topics remain sourced from the unchanged SEO record. |
| Internal links | All 28 collected local href URLs returned 200. Same-page targets and both instruction fragments exist. Contextual Faktura navigation was actually followed. |
| FAQ | One FAQPage with ten pairs exactly matching the visible disclosure content; valid JSON parsing and expected Question/Answer shape. |
| Global schema | Existing Organization and WebSite retained; no fabricated pricing/rating/offer schema. F6 is separate. |
| Sitemap | HTTP 200; 45 WWW-origin URLs, including the self-canonical contract URL. |
| Robots | HTTP 200; public allow, API/private exclusions, WWW Host and sitemap retained. |

Metadata generation, `content/seoPages.ts`, contract pillar/topic and canonical/sitemap/robots source are unchanged. Contract cluster and existing cross-product destinations are preserved. No redirect or new competing route was introduced.

The page's distinctive content is contract price/payment/terms configuration. Its offer and invoice sections support the onward workflow and link to the dedicated pages, rather than reproducing the complete offer editor or invoice SEO pitch. No unnecessary keyword overlap was found qualitatively; no ranking, keyword-volume or Search Console analysis was performed.

## 9. Lighthouse and image performance

Lighthouse **13.6.0**, one standard mobile run and one desktop-preset run, sequentially after functional browser runs. No ignored certificate validation, URL blocking or custom audit skips. Both reports have **no run warnings**; diagnostic/best-practice failures are separately documented above.

| Metric | Mobile | Desktop |
|---|---:|---:|
| Performance | 99 | 100 |
| Accessibility | 100 | 100 |
| SEO | 100 | 100 |
| Best practices | 92 | 96 |
| LCP | 1.0960 s | 0.5712 s |
| CLS | 0 | 0 |
| Total blocking time | 109 ms | 0 ms |
| Total measured transfer | 236,880 bytes | 346,160 bytes |

Mobile: 412×823, DPR 1.75, simulated RTT 150 ms / throughput 1,638.4 Kbps / 4× CPU. Desktop: 1350×940, DPR 1, simulated RTT 40 ms / throughput 10,240 Kbps / 1× CPU. These preset sizes differ from the separate four-width functional matrix. Fetch timestamps: mobile `2026-11-18T20:11:47.039Z`, desktop `2026-11-18T20:13:24.620Z`.

Mobile LCP is the hero lead paragraph; desktop LCP is the hero image. Hero imagery is eager/high priority, while the other nine figures are lazy. Lighthouse initially fetched three product images on mobile (42,242 encoded / 43,084 transferred bytes) and eight on desktop (112,812 encoded / 115,060 transferred bytes); these are not full-page post-scroll image totals.

After scrolling/decoding all ten figures with cache disabled, Resource Timing measured:

| Images after full-page scroll | 375 px | 768/1280/1440 px |
|---|---:|---:|
| Encoded image bytes | 140,942 | 204,390 |
| Transfer including recorded overhead | 143,942 | 207,390 |

Only one art-directed variant per figure was requested; full PNGs were fetched on enlargement, not ordinary rendering. All fifteen manifest variants were freshly decoded and matched pixel-for-pixel against their original PNG or exact crop, with matching source SHA-256 hashes. Images preserve source dimensions/proportions. New optimization/source edits were not performed. Existing manifest storage totals (269,306 bytes across variants) are not a single-viewport payload.

F1 explains the density warning, F3 the console deduction and F5 the optional runtime/CSS diagnostics. These local lab results are not production performance, field Core Web Vitals or a guarantee of real-device latency. No repeat runs were used to select a higher score.

## 10. Regression results

Homepage, `/fakturaprogram-gratis`, `/timeliste-mal` and `/tilbud-mal` were each rendered at 375, 768, 1280 and 1440 px with dark OS preference: **16 local page-regression cases passed** HTTP 200, image decode, overflow and JavaScript page-exception checks. The homepage retains all four product introductions and four workflow text paths. Their source files and assets are unchanged by this audit.

Shared navigation was exercised, the contextual Faktura link navigated correctly, and both actual contract primary/final CTAs reached the expected application login/create-account page. No authentication or backend document action was submitted. These checks establish navigation, not authenticated product availability.

The local static Timeliste template returned HTTP 200 with `application/pdf` and a `%PDF-` signature. **The external last-seven-days template was not verified** because all three connection attempts failed without an HTTP response (F2). No earlier-phase success was substituted. Contract has no invented PDF endpoint; its example is the authentic document image with a working original link.

This is a local pre-deployment audit. Production page rendering, deployment completion and production analytics still require the later authorized release smoke test.

## 11. Exact files changed and final recommendation

Created in the repository during this audit:

- `docs/phase-4c.3-kontrakt-release-audit.md`

No application fix, source image change, optimized-image change, dependency/configuration change, commit, push or deployment was made. The completed start/end SHA-256 check confirmed **all 210 pre-existing tracked/untracked files unchanged**, including the approved implementation and unrelated local work; this report is the only new repository file. HEAD, the empty index and `next-env.d.ts` remain unchanged. External QA evidence/scripts are outside the repository.

For a later approved release, use the Phase 4C.2 inventory and explicitly include the required original-image destinations. In particular, five required contract-folder source PNGs and the two existing pricing-dropdown WebPs are currently untracked inputs/reused assets, not automatically covered by staging only the eight newly generated WebPs. Preserve unused originals locally and do not blanket-stage unrelated folders. This is normal release packaging, not a code change performed here.

**Final recommendation: READY TO DEPLOY**, after user approval and the normal production smoke test. No P0/P1 Kontrakt correction is required by the executed audit. P2/P3 observations remain documented; the external Timeliste download must remain explicitly unverified until it is successfully checked. Revisit that external dependency and production analytics during release verification rather than treating the local audit as proof of production health.

Stop here and await approval. No Phase 4C.4 release action has been taken.
