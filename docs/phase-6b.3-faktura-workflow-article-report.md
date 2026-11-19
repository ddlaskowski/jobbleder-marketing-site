# Phase 6B.3 — Fra tilbud til kontrakt og faktura

19 November 2026. Local implementation only; no commit, push or deployment.

## 1. Scope and outcome

Completed the existing article at `/blogg/fra-tilbud-til-kontrakt-og-faktura`. The previous ellipsis/four-heading outline is now a practical Norwegian Bokmål guide using a parkett-service example, three authentic application screenshots and two generated document previews. The final document additions and their fresh validation are recorded in section 11.

Reviewed Phase 6A F03 and the Phase 6B.1 workflow plan, current article/renderer, offer/contract/invoice instruction guides and media manifests. The article explains both supported routes and keeps conversion, document review, PDF generation and manual delivery distinct. It does not require a contract for the direct offer-to-invoice route.

The other articles, four Phase 6B.2 pages, product landing pages, metadata configuration, instructions, source images and existing optimized images are unchanged. No new route, dependency, screenshot or image derivative.

## 2. Exact files changed

| File | Change |
| --- | --- |
| `content/blogPosts.ts` | Replaced only the target article's body; extended the existing product-example asset union for the three reused assets. All other article records and the target's identifying/SEO fields are unchanged. |
| `components/blog/BlogProductExample.tsx` | Reused the current editorial component for the edited-contract asset and both generated documents; existing mobile examples retain their original markup/layout. No new shared abstraction. |
| `components/blog/blogProductExample.module.css` | Scoped rules for the 560 px edited-contract example and matching 480 px document previews without borders or decoration. Existing figure/link styles remain intact. |
| `docs/phase-6b.3-faktura-workflow-article-report.md` — created | This report. |

Only these three implementation files and this report belong to this phase. Previous phase reports were not edited.

## 3. Final article structure

The existing H1 remains **Fra tilbud til kontrakt og faktura – slik fungerer det**.

1. Intro: a small service-business/parkett scenario and the two supported document routes.
2. **Fra forespørsel til tilbud**: agree scope/material responsibility, describe work and price, choose customer and relevant project, review offer PDF and clarify acceptance outside the application.
3. **Fra tilbud til kontrakt**: three explicit actions—select the offer, check the contract basis, then edit the independent contract. Edited-contract screenshot, manual signing and accurate payment-plan explanation.
4. **Fra kontrakt til faktura**: select the saved contract, choose Opprett faktura, review transferred details, then deliberately save/generate/download and manually send. Authentic mobile creation state.
5. **Et alternativ: Fra tilbud direkte til faktura**: separate supported route with its own source document and review step; authentic mobile line/summary example.
6. **Før fakturaen sendes**: checklist covering correct customer, work/extent, amounts, applicable VAT, payment information and dates/delivery particulars.
7. Short Free/Premium clarification and one restrained product CTA: **Se fakturaverktøyet i Jobbleder**.

Before the final document additions, the approximately 808 rendered article words included captions and enlargement-link labels. The final follow-up only inserts the two previews and their captions; existing prose and the three application examples are preserved. There are no repeated promotional boxes or decorative workflow sections. Existing related-guide/article modules remain unchanged.

## 4. Authentic screenshots and generated documents

Three existing optimized application assets were selected initially. The final follow-up adds an existing offer export and contract export within their relevant sections, rather than creating a separate gallery. The edited-contract example covers the contract's offer origin and subsequent independent editing; the document preview shows its earlier terms.

| State and article placement | Original PNG, unchanged | Reused optimized WebP | Optimized dimensions / bytes |
| --- | --- | --- | --- |
| Generated Tilbud 29, after preparing the offer | `public/images/product/tilbud/source/exported_tilbud_A5.png` — 506×360, 37,358 B | `public/images/product/tilbud/optimized/jobbleder-home-offer-59f2cd7e7af2.webp` | 506×360 / 19,060 B |
| Generated Kontrakt 11 from Tilbud 29, before further editing | `public/images/product/kontrakt/source/exported_contract_preview.png` — 508×720, 73,859 B | `public/images/product/kontrakt/optimized/jobbleder-home-contract-document-249c17de7105.webp` | 508×720 / 37,384 B |
| Kontrakt 11 edited after the offer-based example | `public/images/product/tilbud/source/contract_from_offer_edited.png` — 706×720, 78,568 B | `public/images/product/tilbud/optimized/jobbleder-offer-edited-contract-98807c86e360.webp` | 560×442 / 26,892 B |
| Contract-to-invoice creation, mobile Faktura 113 | `public/images/product/mobile/source/invoice_from_contract_mobile.png` — 332×720, 64,078 B | `public/images/product/mobile/optimized/invoice_from_contract_mobile-4059b61ae977.webp` | 332×720 / 44,312 B |
| Direct offer-to-invoice line and summary, separate mobile example | `public/images/product/mobile/source/invoice_from_offer_mobile.png` — 332×720, 57,596 B | `public/images/product/mobile/optimized/invoice_from_offer_mobile-19b76863d679.webp` | 332×720 / 40,668 B |

Source hashes match the existing manifests. No original or derivative was altered. The three UI WebPs total 111,872 B and the two document WebPs add 56,444 B: **168,316 B** combined on disk, not a measured total-page transfer size.

### Accurate context and captions

- Edited contract shows the reference to offer 29, fastpris and payment terms. Its payment-plan fields are not presented as automatic invoice generation or calculated installments.
- Mobile contract conversion shows Faktura 113 with Kontrakt 11 as source, customer, dates and part of the parkett line. It does not show the entire summary or a generated PDF. Caption explicitly avoids claiming it is the exact PDF export of the preceding contract image.
- Direct offer-conversion crop shows a line and summary: 12,000 net, 3,000 example VAT and 15,000 total. The document number/source badge is not visible, and the caption says so. It is a separate example, not the same Faktura 113.

Next.js Image reuses the optimized WebPs directly, with explicit dimensions, lazy loading and proportional sizing. Edited contract renders at 327 px wide on the 375 px screen and up to its native 560 px on larger screens. Portrait examples use the established 292 px mobile / 248 px desktop editorial presentation, with text alongside on desktop and before the image on mobile. No file is artificially upscaled.

All figures offer the existing original PNG at a larger readable size. Visible link text is “Åpne hele skjermbildet”, with descriptive supplementary accessible text. Small contract fine print can be inspected through enlargement; the inline figure provides context rather than promising every field is legible at phone size.

## 5. Verified workflows and product boundaries

Evidence: `content/instructionGuides.ts` entries `opprett-tilbud`, `lag-kontrakt-fra-tilbud`, `lag-faktura-fra-dokument` and its `tilbud-til-faktura` / `kontrakt-til-faktura` parts; existing authentic screenshots; owner-confirmed capabilities recorded in Phase 6A/6B.1.

| Workflow | What the article actually explains |
| --- | --- |
| Create offer | Choose customer, describe work, quantities/prices/VAT and conditions; optionally associate project; review/generate PDF and share manually. |
| Offer → contract | Select offer in Dokumenter, choose Opprett kontrakt and review the resulting document. |
| Independent contract editing | Contract becomes a separate document; edit content/terms using Rediger for a saved contract. Not direct editing of an issued invoice. |
| Contract → invoice | Explicit user action on the saved contract, then invoice-line/customer/date/payment/VAT review. |
| Offer → invoice | Separate direct conversion; a contract is not mandatory in the application. |
| PDF and delivery | User generates/downloads and manually sends the invoice. Conversion does not send it. |
| Free | Creation, export and these conversions are available in Free; Free PDF watermark, Premium appearance options. |

No automatic acceptance tracking, electronic signatures, accounting integration, EHF, bank reconciliation, automatic sending or installment invoicing is introduced. No legal compliance guarantee, issuance deadline or universal VAT rate is asserted. The 25% rate belongs to the displayed example. No authenticated document or application transaction was performed in this phase.

## 6. Contextual internal links

Seven unique article destinations:

- `/tilbud-mal` — offer preparation/product guide.
- `/kontrakt-mal` — contract content and options.
- `/instruksjoner#lag-kontrakt-fra-tilbud` — exact offer-to-contract procedure.
- `/instruksjoner#kontrakt-til-faktura` — exact contract-to-invoice procedure.
- `/instruksjoner#tilbud-til-faktura` — separate direct offer-to-invoice procedure.
- `/faktura-krav` — requirements/payment information referenced by the pre-send checklist.
- `/fakturaprogram-gratis` — the one product CTA.

Contextual help links use the existing underlined editorial style; the final CTA uses the existing blog action style. The two contract-help links were placed at separate relevant points so they do not join together on a desktop line. No new destination was invented.

## 7. SEO and regression protection

Preserved exactly:

- URL and canonical `https://www.jobbleder.no/blogg/fra-tilbud-til-kontrakt-og-faktura`.
- Metadata title/H1: `Fra tilbud til kontrakt og faktura – slik fungerer det` (existing global title suffix unchanged).
- Meta description/summary: `Se hvordan hele prosessen fungerer fra første tilbud til betaling.`
- Entire existing Article JSON-LD, including original publication date `2026-04-07`, author and publisher; inherited Organization/WebSite data.
- Existing indexability, global rendering/navigation, related modules, sitemap and robots configuration.

Automated source comparison requires every non-target article and all SEO-page records to remain identical. A fresh browser baseline of 37 routes was captured before implementation. The final validation results below distinguish the updated target from the 36 unchanged routes.

## 8. Validation and evidence

TypeScript (`npx.cmd tsc --noEmit --incremental false`) and full ESLint (`npm.cmd run lint`) passed with exit 0. Final production build (`npm.cmd run build`) passed with exit 0, generated 55 static pages and retained the existing Node `[DEP0205] module.register()` deprecation warnings. No dependency/configuration change was made for the warning.

Final browser checks used the local production build at `http://127.0.0.1:3041`, caches disabled, with reduced-motion preference enabled. These are not production deployment tests.

| Width | Light preference | Dark preference |
| --- | --- | --- |
| 375 px | Passed | Passed |
| 768 px | Passed | Passed |
| 1280 px | Passed | Passed |
| 1440 px | Passed | Passed |

Across the **eight final cases**:

- HTTP 200, exactly one H1, correct metadata/canonical and byte-equivalent parsed structured data versus the pre-edit page.
- No horizontal overflow; observed CLS **0** during loading, image decoding and full-page scrolling. No image distortion or artificial upscaling; all three lazy images decoded with correct natural dimensions and meaningful alt text.
- Heading hierarchy has no skipped levels. Original editorial surfaces remain light in either OS preference; existing reduced-motion root scroll behavior is `auto`.
- Three original-image links were opened by Enter in every case: **24 keyboard enlargement checks**, visible 3 px outlines and correct original-image widths. Each original PNG loaded successfully.
- Axe WCAG A/AA, WCAG 2.1/2.2 AA and best-practice checks recorded **zero violations in eight runs**. Raw `link-in-text-block` and `color-contrast` needs-review results are retained and are not counted as certified passes; automated testing is not a full screen-reader or authenticated-app accessibility certification.
- All seven article internal destinations returned 200. Direct navigation to all three instruction hash URLs found the target and opened its containing instruction, including the previously untested offer-to-contract anchor.
- No uncaught page errors. The known local `/api/handshake` HTTP 400 was observed; analytics was not changed and no new production analytics conclusion is drawn.

**36 non-target routes** passed exact before/after browser comparisons of main HTML, metadata, canonical, H1, schema and href/text lists. This includes the homepage, all four main product pages, the four Phase 6B.2 pages, instructions, the preserved free-timesheet article and other SEO/blog routes in the baseline. All other article records and all SEO content records also passed source-data equality checks.

Saved eight full-page screenshots and 24 media viewport screenshots. Reviewed representative mobile/desktop media and the full mobile article. A final link-placement refinement separated two adjacent help links; technical checks and the full browser matrix were repeated afterward. Early harness waiting on browser-history/network-idle was replaced by explicit article reloads between image-link checks; that aborted attempt is not counted as a passed case. Media captures wait for decoding so the evidence does not contain lazy-load placeholders.

`git diff --check` passed. Git reports normal LF→CRLF working-copy notices. No Lighthouse measurement was requested or performed; the 111,872 B image payload and observed CLS are not a Lighthouse score or field performance measurement.

## 9. Remaining uncertainties and scope boundaries

- Owner visual/editorial approval is pending; no new P0/P1 issue was found in the executed scope.
- App behavior is described from owner-confirmed capabilities, existing guides and authentic evidence. No current authenticated production workflow/backend transaction was run. Invoice numbering/lifecycle/partial-credit edge cases remain outside this article's claims.
- Fine-print review of the wider contract image may require its original-image link on small screens. Portrait conversion examples are intentionally separate cases; they are not represented as one exact chain of generated PDFs.
- The existing local analytics response and Node deprecation warning remain recorded, without unrelated fixes.
- No legal deadlines, tax exceptions, automatic invoice schedules, acceptance/signature tracking or legal-compliance guarantees were added. No new source image or owner capture is needed for this article.

## 10. Evidence, preservation and preview

Temporary inspection files and screenshots are outside the repository:
`C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase6b3/`.

Key artifacts: `source-before.json`, `before.json`, `browser.json`, `article-{width}-{theme}.png`, `figure-{0|1|2}-{width}-{theme}.png`. Scripts are beside that directory and are not release files.

Final file-hash comparison: of 309 pre-existing tracked files, only the three implementation files listed in section 2 changed; the remaining 306 are unchanged, including previous reports, image assets, navigation, SEO infrastructure and backend-facing configuration. One new report was created. HEAD remains `9e5b0b9bc6868da5cce9e628b3ca22ef5df0da0e`.

Local preview: [Fra tilbud til kontrakt og faktura](http://127.0.0.1:3041/blogg/fra-tilbud-til-kontrakt-og-faktura).

No commit, push or deployment. Await owner approval before further changes or release.

## 11. Final document examples — owner-requested follow-up

### Placement and preservation

Added the exact existing `exported_tilbud_A5.png` example after the offer-preparation explanation in **Fra forespørsel til tilbud**. Added the matching `exported_contract_preview.png` after the conversion/review steps in **Fra tilbud til kontrakt**. Both source files were found locally; no replacement capture or fabricated document was needed.

The examples show Tilbud 29 and Kontrakt 11 with the same demonstration parties and parkett work. Contract 11 explicitly references offer 29. The generated contract contains payment-after-completion terms, whereas the existing edited-contract screenshot shows later changes/payment-plan choices. Its caption therefore identifies the preview as the document **before the further editing shown below**, rather than falsely claiming it is the export of that later configuration. It also labels the document as an illustrative example, not a universal legal template. Empty signature fields do not imply electronic signing; the existing manual-signing explanation remains unchanged.

Both documents use the same existing article image component, a 480 px maximum display width, intact proportions, no border/radius decoration, descriptive Norwegian alternatives, lazy loading and original-PNG full-size links. At 375 px they render 327 px wide; at 768/1280/1440 px they render 480 px wide. Neither source is upscaled. The original three application screenshots, their captions, explanatory paragraphs and all existing article blocks remain unchanged; an automated source comparison verifies the final blocks equal the approved pre-follow-up article after filtering out only the two added document blocks.

### Exact files changed in this follow-up

1. `content/blogPosts.ts` — two document-example blocks and their asset union entries only.
2. `components/blog/BlogProductExample.tsx` — reuse existing homepage media entries, document sizing/link label and omit an empty copy container for document-only blocks.
3. `components/blog/blogProductExample.module.css` — three document-only presentation rules; no changes to the existing UI screenshot presentation.
4. `docs/phase-6b.3-faktura-workflow-article-report.md` — this update.

Assets are the two PNG/WebP pairs listed in section 4. No image files, new dependencies, routes, PDFs or shared component abstractions were created. Original sources and existing optimized derivatives retain their hashes.

### Fresh validation

- TypeScript, full ESLint and production build passed with exit 0. Build generated 55 static pages with the existing Node `[DEP0205]` warning.
- **Eight local production-build cases**: 375, 768, 1280 and 1440 px, each with light/dark preference and reduced motion enabled.
- All five figures load, preserve aspect ratio and fit the layout; no horizontal overflow or observed layout shift (CLS 0). Representative offer/contract viewport captures were visually reviewed.
- All five original-image links opened successfully by keyboard in every case: **40 enlargement checks**, including **16 checks of the two new document originals**. Visible focus remains present.
- Exactly one H1; title, meta description, canonical and complete structured data match the pre-follow-up browser snapshot. No article rewrite or indexing changes.
- Axe recorded zero violations in the eight cases; raw needs-review output remains available and is not treated as a complete manual accessibility certification.
- All seven existing internal article destinations still return 200, and the three instruction anchors open correctly.
- All **36 non-target routes** retain exact pre-follow-up main HTML, metadata, schemas and links. The existing approved Phase 6B.2 pages remain unchanged.
- No uncaught page errors; the known local analytics `/api/handshake` 400 remains unchanged and was not addressed.

Evidence is outside the repository at `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase6b3-documents/`: `source-before.json`, `before.json`, `browser.json`, eight full-page screenshots and 40 figure viewport captures. The follow-up entry hashes protect earlier uncommitted work as well as tracked files; only the four files listed above changed. HEAD is unchanged. No commit, push or deployment.

Preview: [Fra tilbud til kontrakt og faktura](http://127.0.0.1:3041/blogg/fra-tilbud-til-kontrakt-og-faktura).

**READY FOR OWNER REVIEW**
