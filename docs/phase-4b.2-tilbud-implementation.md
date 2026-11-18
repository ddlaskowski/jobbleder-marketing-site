# Phase 4B.2 — Tilbud landing page implementation

Date: 18 November 2026. Local implementation only; awaiting visual approval. No commit, push or deployment.

## Implementation

`/tilbud-mal` now renders an isolated server component using the established product surface, shared navigation/footer, application CTA, image figures and section containers. No new dependency or client component was added. The ten sections are:

1. Offer-focused hero: “Lag tilbud som blir til mer.” with authentic document-overview imagery.
2. Complete authentic exported offer PDF example and its example totals in accessible HTML.
3. Offer creation: client/project, offer lines, quantities, unit prices, MVA and PDF review.
4. Tilbud 29 → Faktura 111.
5. Tilbud 29 → Kontrakt 11, alongside the independently edited contract.
6. Kontrakt 11 → Faktura 112, explicitly presented as an alternative to direct invoicing.
7. Free/Premium comparison: identical document functionality; branding options differ.
8. Original four educational topics, rendered from the unchanged SEO content record.
9. Seven native FAQ disclosures and related internal resources.
10. Final free-offer CTA with accurate registration guidance.

All stated product capabilities are user-confirmed. The supplied screenshots substantiate the depicted interface and example documents, not an authenticated backend end-to-end test. The edited contract source header identifies Contract 11 itself; it is not described as displaying an offer-source badge. Contracts are downloaded for manual signing; electronic signing is explicitly excluded in the FAQ.

The existing light-preference contrast defect is resolved on this route by using the same explicit light product surface as the published product pages. Both OS color preferences receive the intentional light page, with dark ink and blue links; this does not introduce a separate dark palette. Shared reduced-motion and focus styles remain active. No animation was added.

## Exact implementation file list

Modified existing file:

- `app/(seo)/[slug]/page.tsx` — one import and one route-specific branch. Metadata generation and all other route branches are unchanged.

Created non-image files:

- `components/product/offer/OfferProductPage.tsx`
- `components/product/offer/offerProduct.module.css`
- `content/offerProduct.ts`
- `content/offerProductMedia.json`
- `scripts/prepare-offer-media.mjs`
- `docs/phase-4b.2-tilbud-implementation.md`

The twelve generated WebP files are listed individually below. Total implementation scope: **one modified file and eighteen created files**. Existing untracked audit documents, source images and other assets are not new implementation changes. The source PNGs are inputs, not generated files.

## Image handling

The preparation script reuses the existing optimizer and Sharp dependency. It writes content-hashed, lossless WebP files and an auditable manifest containing source filename, source SHA-256, original dimensions/bytes, crop coordinates and derivative dimensions/bytes. All twelve decoded derivatives were compared against their original PNG or exact PNG crop: **pixel-identical**, including alpha. All source hashes matched.

The full PDF page is retained with its natural proportions. UI crops remove navigation, blank space and, where documented, secondary summary panels. Five smaller-screen variants focus on the offer line/totals, editor line, invoice form, contract fields and contract-derived invoice. Neither supported document path is removed. Captions explain the crops, and all seven figures link to full original PNGs. The two new screenshots are used from `public/images/product/tilbud/source/`; byte-identical existing copies in `kontrakt/source/` remain untouched.

The browser selects smaller variants below 640 px through the shared picture component. At 768 px the contract images stack at larger widths; side-by-side presentation starts at 1024 px. Images are constrained to their intrinsic maximum width, with width/height attributes and natural aspect ratios. The hero is eager/high priority; the other six images are lazy. No CSS cover cropping or stretching is used.

Image payload for all seven displayed figures after scrolling: **276,466 bytes desktop**, **151,650 bytes mobile**, versus **710,575 bytes** for the seven corresponding source PNGs. These are file-byte comparisons, not measured production transfer totals. All twelve derivatives together occupy **380,884 bytes**. Each viewport loads one variant per figure; originals are only requested when their full-image links are opened. No additional A5 duplicate was generated.

Fine UI and document text necessarily becomes small when a whole interface or A4 page is fitted to a phone. Captions, workflow explanations and PDF totals remain readable HTML, and original-image links allow detailed inspection and zoom. Source resolution has not been fabricated or upscaled.

## Validation

Final commands completed successfully:

- `npx.cmd tsc --noEmit --incremental false` — exit 0.
- `npm.cmd run lint` — full ESLint, exit 0, no reported errors or warnings.
- `npm.cmd run build` — exit 0, 55 generated static pages, including the existing SEO routes.

The first sandboxed build stalled and was stopped; the required production build then completed outside the sandbox. The final build after the tablet layout adjustment also completed successfully. Build output contains an environment/runtime `module.register()` deprecation notice; it does not fail compilation, type validation or static generation.

### Executed local Chrome matrix

Production build served at `http://127.0.0.1:3021/tilbud-mal`, Chrome headless, 900 px viewport height, DPR 1, cache disabled. These are local laboratory checks, not production results.

| Width | OS light | OS dark | Horizontal overflow | Images | Observed CLS | Axe violations |
|---|---|---|---|---|---|---|
| 375 px | Passed | Passed | None | 7/7 loaded | 0 | 0 |
| 768 px | Passed | Passed | None | 7/7 loaded | 0 | 0 |
| 1280 px | Passed | Passed | None | 7/7 loaded | 0 | 0 |
| 1440 px | Passed | Passed | None | 7/7 loaded | 0 | 0 |

All ten sections remain present. Image ratios, intrinsic sizing, natural proportions, CTA positions and footer bounds were inspected. Full-page and hero screenshots were captured for all eight combinations. Contract and comparison screenshots were also captured at all four widths. Visual review covered spacing, headings, the full PDF, mobile table wrapping and workflow imagery. The tablet contract layout was adjusted after review and the matrix repeated against the final build.

Reduced motion was explicitly emulated in all eight cases: preference matched, document scroll behavior was `auto`, and the tested CTA transition duration was `0s`.

Accessibility checks:

- Axe WCAG 2 A/AA, 2.1 A/AA, 2.2 AA and best-practice checks: no detected violations in any matrix cell. This is not a blanket WCAG certification.
- Automated contrast review flagged the hero gradient as requiring manual review. Calculated against both gradient endpoints, its foreground text colors have a minimum **6.1579:1** contrast. Decorative arrow characters also generate manual-review entries; they are hidden from assistive technologies.
- Skip link is keyboard-reachable with visible outline and moves focus to the main landmark.
- All seven FAQs were opened with Enter and closed with Space at each width. Their focus outline is 3 px.
- Ten successive keyboard focus stops from the hero CTA were checked at each width; visible solid outlines remained present. Mobile menu opens/closes and exposes its navigation links.
- Chrome accessibility-tree names for all seven full-image links begin with “Åpne hele bildet” and include the image-specific description, matching the visible action without overriding ARIA labels.
- Exactly one H1; section H2s and subsection H3s follow a coherent hierarchy. All seven images have Norwegian alternative text valid for their selected crops.
- No JavaScript page exceptions were observed. The pre-existing local `/api/handshake` request returns HTTP 400; analytics was not changed. Do not interpret that known response as a clean HTTP-error log.

### SEO, CTAs and links

- Title remains `Tilbud mal – skriv et profesjonelt tilbud (gratis) | Jobbleder`.
- Description remains `Tilbud mal for små bedrifter og håndverkere. Lag tilbud raskt og konverter til faktura når kunden sier ja.`
- Self-referencing canonical remains `https://www.jobbleder.no/tilbud-mal`.
- Search intent appears in the hero eyebrow, breadcrumb, offer-focused copy, existing education and FAQ topics. There is no new invoice SEO page or new URL.
- The SEO content record, metadata infrastructure and indexability configuration are byte-unchanged. No noindex directive was introduced.
- Seven FAQ questions/answers match the single FAQPage JSON-LD exactly. Original three question topics are retained; the direct-invoice answer is expanded to describe review/download accurately.
- Both primary CTAs point to `https://app.jobbleder.no/`. Existing shared guidance explains login followed by “Create account”. Authentication was not changed or submitted during testing.
- The secondary CTA scrolls to `#tilbudseksempel`. No nonexistent downloadable offer template is promised. The supplied exported PDF is displayed as its authentic image, with an original-image link.
- All **26 distinct same-origin link URLs** collected from the page returned HTTP 200 locally, including seven original-image destinations. These URL checks do not by themselves verify every fragment; the primary example anchor was additionally exercised in the mobile browser.
- Sitemap and robots.txt returned 200. Sitemap includes the WWW Tilbud canonical; robots allows the public site, retains API/private exclusions and references the WWW sitemap.
- Existing blank Timeliste PDF and the external last-seven-days PDF endpoint both returned 200 with `application/pdf`. Neither was changed.

### Regression and scope

Homepage, Faktura and Timeliste were each rendered in Chrome at 375, 768, 1280 and 1440 px with dark OS preference: HTTP 200, visible images loaded, no horizontal overflow and no page exceptions. Their navigation, footer and product media remain available. The homepage retains its four product sections and document-flow presentation.

A SHA-256 comparison of **173 pre-existing files**, including originals and pre-existing untracked files, found only the intentionally modified route file different. `next-env.d.ts` is unchanged. Shared components/styles, homepage, Faktura, Timeliste, source images, dependencies, configuration, PDF files/endpoints, SEO records, sitemap and robots source were not edited.

## Evidence and remaining limitations

Evidence is outside the repository at:

`C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase4b2-evidence/`

It contains `browser-results.json`, `extra-results.json`, `integrity.json`, eight full-page screenshots, eight hero screenshots, section detail captures and regression screenshots. Test scripts remain outside the application repository. No screenshots or development artifacts are added to the implementation file list.

Remaining observations:

- Existing local analytics handshake 400 remains out of scope; this release has not been deployed or production-tested.
- Small source text is best inspected through full-image links, especially on phones. No higher-resolution PDF source was supplied.
- Tests used local desktop Chrome with emulated widths/preferences, not physical mobile devices, Safari, Firefox or a full screen-reader session. No Lighthouse measurement was requested or claimed.
- No authenticated document conversion or registration was executed. Product behavior remains user-confirmed.

**Implementation and requested local validation complete. Await visual approval before commit, push or deployment.**

## Source inventory and generated assets

The following tables are generated directly from inspected file metadata and the final media manifest. Paths are repository-relative; byte counts are exact.

### Existing source PNGs (unchanged)

| Exact path | Dimensions | Bytes | Use |
|---|---|---:|---|
| `public/images/product/tilbud/source/contract_from_offer_edited.png` | 706 × 720 | 78568 | Independently edited contract |
| `public/images/product/tilbud/source/exported_tilbud_A4.png` | 506 × 720 | 39992 | Full PDF example |
| `public/images/product/tilbud/source/exported_tilbud_A5.png` | 506 × 360 | 37358 | Existing compact asset; no new derivative |
| `public/images/product/tilbud/source/invoice_from_contract.png` | 1280 × 720 | 115705 | Contract-to-invoice workflow |
| `public/images/product/tilbud/source/new_offer_form.png` | 1280 × 720 | 112403 | Offer creation |
| `public/images/product/tilbud/source/offer_document_preview_in_documents_menu.png` | 1280 × 720 | 153575 | Hero |
| `public/images/product/tilbud/source/tilbud_to_contract.png` | 834 × 720 | 94495 | Contract creation |
| `public/images/product/tilbud/source/tilbud_to_invoice.png` | 1280 × 720 | 115837 | Direct invoice workflow |

### New optimized derivatives (exact created image file list)

All paths below are under `public/images/product/tilbud/optimized/`. Crop format is `left, top, width, height` in original pixels; “Full” means no crop.

| Exact filename | Source filename | Dimensions | Bytes | Crop |
|---|---|---|---:|---|
| `jobbleder-offer-hero-3c424f34ca1e.webp` | `offer_document_preview_in_documents_menu.png` | 1090 × 650 | 70056 | 180, 58, 1090, 650 |
| `jobbleder-offer-hero-mobile-7ef9a11a7c8c.webp` | `offer_document_preview_in_documents_menu.png` | 600 × 168 | 11992 | 660, 260, 600, 168 |
| `jobbleder-offer-pdf-085c0b3a1244.webp` | `exported_tilbud_A4.png` | 506 × 720 | 20340 | Full |
| `jobbleder-offer-editor-efed9bd605e5.webp` | `new_offer_form.png` | 1084 × 342 | 32496 | 184, 164, 1084, 342 |
| `jobbleder-offer-editor-mobile-c86e5ebb7582.webp` | `new_offer_form.png` | 842 × 140 | 10696 | 194, 350, 842, 140 |
| `jobbleder-offer-invoice-825bce28603f.webp` | `tilbud_to_invoice.png` | 1084 × 386 | 35104 | 184, 146, 1084, 386 |
| `jobbleder-offer-invoice-mobile-dc98f21e88fc.webp` | `tilbud_to_invoice.png` | 862 × 386 | 25696 | 184, 146, 862, 386 |
| `jobbleder-offer-contract-793f5eed04dc.webp` | `tilbud_to_contract.png` | 834 × 720 | 56266 | Full |
| `jobbleder-offer-contract-mobile-66905c4b86f7.webp` | `tilbud_to_contract.png` | 664 × 426 | 30226 | 0, 76, 664, 426 |
| `jobbleder-offer-edited-contract-98807c86e360.webp` | `contract_from_offer_edited.png` | 560 × 442 | 26892 | 0, 94, 560, 442 |
| `jobbleder-offer-contract-invoice-7847d3b65141.webp` | `invoice_from_contract.png` | 1084 × 386 | 35312 | 184, 146, 1084, 386 |
| `jobbleder-offer-contract-invoice-mobile-64fb6553081e.webp` | `invoice_from_contract.png` | 862 × 386 | 25808 | 184, 146, 862, 386 |
