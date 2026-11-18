# Phase 4C.2 — Kontrakt landing page implementation

Date: 18 November 2026, Europe/Berlin. **Local implementation complete; awaiting visual approval. No commit, push or deployment.**

Preview: [http://127.0.0.1:3023/kontrakt-mal](http://127.0.0.1:3023/kontrakt-mal)

## 1. Implementation summary

The existing `/kontrakt-mal` route now selects an isolated contract server component, following the approved Phase 4C.1 audit and the published product design system. Its eleven sections are:

1. Hero: **Lag kontrakter som passer jobben.** Actual standalone contract creation UI, free CTA and PDF-example anchor.
2. Complete authentic contract PDF image, explicitly identified as the earlier offer-based/after-completion version.
3. Three alternative pricing structures: Fast, Time and Tilbud, supported by the authentic selector.
4. Three payment arrangements, with separate authentic advance-percentage and progress-plan details.
5. Editable contract content, material responsibility, dates, payment deadline and four editable clause sections.
6. Tilbud 29 → Kontrakt 11, explaining independent editing after creation.
7. Kontrakt 11 → Faktura 112, explicitly distinguished from calculated percentage billing.
8. Free/Premium comparison: document functionality versus branding options.
9. Original four educational topics and contract-topic links.
10. Ten native FAQ disclosures with matching FAQPage JSON-LD and existing related destinations.
11. Final free contract CTA and established registration guidance.

Shared SiteHeader/SiteFooter, SectionContainer, ApplicationCTA, ProductMedia and registration guidance are reused without editing them. The explicit light product surface resolves the former white-on-white heading issue and dark-footer contrast issue on this route. Navigation landmarks are named, a main skip link is present, and native FAQ controls expose their state. Existing product focus and reduced-motion styles remain active. Both OS color preferences use the intentional light product palette, consistent with Timeliste/Tilbud; a separate dark palette was not added.

The contract page focuses on adapting the agreement rather than duplicating the offer editor or invoice SEO narrative. No client component, dependency, animation, authentication change, backend logic or analytics change was introduced.

## 2. Exact implementation files

Modified existing file:

- `app/(seo)/[slug]/page.tsx` — one import and one `kontrakt-mal` branch; metadata generation and all other branches are unchanged.

Created non-image files:

- `components/product/contract/ContractProductPage.tsx`
- `components/product/contract/contractProduct.module.css`
- `content/contractProduct.ts`
- `content/contractProductMedia.json`
- `scripts/prepare-contract-media.mjs`
- `docs/phase-4c.2-kontrakt-implementation.md`

Eight newly generated WebPs are enumerated below. Total implementation scope: **one modified file and fourteen created files**. Seven existing optimized image variants are reused and unchanged. Pre-existing untracked sources, old reports and unused assets are not new implementation files.

## 3. Images and optimization

The audit's fourteen contract-directory assets informed the selection. The new page uses fifteen manifest entries for ten figures: **eight new lossless WebPs and seven reused variants**. All originals remain unchanged, and existing homepage/offer references are preserved.

Reproduction: `node scripts/prepare-contract-media.mjs`. The script imports the existing optimizer and uses the already installed Sharp dependency. It writes only the eight new hashed WebP derivatives and the new contract manifest. It reads existing home/offer manifests and pricing WebPs, preserving source filenames, original dimensions/bytes/SHA-256 and exact crop coordinates in the contract manifest. It never overwrites source PNGs or the existing manifests/assets.

All fifteen decoded outputs were compared against the corresponding source PNG/full crop: **pixel-identical**, including alpha. All recorded source hashes matched. No resampling, compositing, interface reconstruction, text replacement or synthetic screenshot was used. The full contract document preserves all source bounds and its natural proportions.

Responsive choices:

- Hero: full creation-form detail on desktop; near-native 332×74 time-price/deadline detail on phones. Its alt text remains true for both.
- Pricing selector: existing 340×141 mobile crop retains all three model labels.
- Payment selector: 340×154 mobile detail retains all three payment-method labels.
- Offer-source contract and contract-source invoice: reuse the inspected, source-preserving mobile variants from the offer page.
- Small advance, plan, clause and material details retain their full selected bounds at every size. Material choices remain in a compact 340 px view; all four editable clause sections remain visible together.
- Detail grids stack below 1024 px; full forms do not compete in narrow tablet columns. The PDF remains a complete page with a full-original link.

The hero is eager/high priority; the other nine figures are lazy. Intrinsic image/source dimensions reserve space, and natural height is used. All ten figure links visibly say **Åpne hele bildet**, with image-specific accessible names and original PNG destinations. Ten link clicks were tested, covering nine unique originals; advance and clause details intentionally share one original.

New derivatives occupy **79,948 bytes** total. All fifteen manifest variants, including reuse, total **269,306 bytes**. Full-page browser Resource Timing after decoding all ten figures measured **140,942 encoded image bytes at 375 px**, and **204,390 bytes at 768/1280/1440 px**. The nine distinct source PNGs total **563,499 bytes**. These are local image-byte measurements, not production page-weight or field performance claims. Only the selected variant is loaded for each figure; full PNGs are requested on enlargement.

The source/output mapping, dimensions, exact file sizes and created-versus-reused status are recorded in the tables at the end of this report.

## 4. Product claims verification

| Area | Implemented wording/evidence boundary |
|---|---|
| Independent creation | Authentic populated standalone Time form with no offer-source badge; users can start without an offer. Instructions and audit support the creation UI. |
| Pricing | Fast, Time and Tilbud are alternatives. Users enter/check the basis. Demo 900/12,000 values are labelled examples, not default prices or a calculation guarantee. |
| Payment | Three observed method options; 30% advance field and a single 25% plan row are described as configured terms. No automatic milestone detection, percentage calculation, invoice generation/sending or payment collection is promised. |
| Editable detail | Work rows, dates, materials, deadline and editable clause text are described. Material choice is responsibility, not inventory/cost accounting. No legal certification, named-standard compliance or guaranteed protection is claimed. |
| PDF version | Complete existing PDF is explicitly the earlier price-from-Offer-29 / payment-after-completion version. It is not presented as the export of the edited progress-plan example. |
| Signing | Download and arrange manual signing. Electronic signing is explicitly stated as unsupported. |
| Offer → contract | User-confirmed conversion and independent editing; source-labelled Contract 11 is authentic. No automatic synchronization/approval claim. |
| Contract → invoice | User-confirmed workflow shown with Invoice 112 sourced from Contract 11. The caption/note discloses the full 12,000 net amount and that it does not demonstrate a calculated stage from the plan above. |
| Free/Premium | Creation, editing, pricing/payment choices, PDF export and conversions are available in Free. Premium differentiates branding removal and own logo only. No price, quota or paid-workflow restriction was added. |

These are user-confirmed capabilities and/or documented, screenshot-supported UI as classified in Phase 4C.1. Marketing code does not independently verify authenticated save/edit persistence, invoice percentage semantics or backend calculations. No real contract, invoice or account was created during implementation/testing.

## 5. SEO preservation

- Route remains `/kontrakt-mal`; canonical remains `https://www.jobbleder.no/kontrakt-mal`.
- Title remains `Kontrakt mal – enkel kontrakt for håndverkere (gratis) | Jobbleder`.
- Description remains `Gratis kontrakt mal for håndverkere og små bedrifter. Lag kontrakt raskt og sikre avtalen med kunden.`
- `content/seoPages.ts`, contract pillar/topic, metadata infrastructure, sitemap and robots source are unchanged.
- Exactly one H1, with **Kontrakt mal** retained prominently in the eyebrow/breadcrumb and contract-focused content.
- Original four education sections and original three FAQ pairs are reused from the unchanged SEO record. Seven practical FAQ pairs are added in the isolated contract content file.
- One FAQPage has ten question/answer pairs exactly matching the visible native disclosures. Existing Organization/WebSite schema remains present.
- All original fifteen marketing-page destinations remain available through header/footer, contract cluster and related links; additional image/anchor links are relevant to this page.
- Sitemap returns 200, contains the contract WWW URL and forty-five total URLs. Robots returns 200, retaining public access and existing API/private exclusions and WWW sitemap.
- No new route, redirect, pricing schema, invented contract PDF endpoint or competing invoice/timelist SEO page was introduced. The secondary CTA is an authentic image example, not a blank template download promise.

## 6. Validation results

Fresh commands on the final application code:

| Check | Result |
|---|---|
| `npx.cmd tsc --noEmit --incremental false` | PASS, exit 0, no diagnostics. |
| `npm.cmd run lint` | PASS, full ESLint, exit 0, no reported warnings/errors. |
| `npm.cmd run build` | PASS, exit 0, compilation/type validation and 55 static pages completed. |

The build emitted the existing Node `DEP0205 module.register()` deprecation notice from worker processes. It did not cause a build failure. No dependency/configuration change was required.

### Browser matrix actually executed

Local production build served at port 3023. Chrome headless, height 900 px, DPR 1, cache disabled. Full-page/hero screenshots were captured for all eight combinations, plus payment, editable-term, workflow, comparison and regression evidence.

| Width | Preference | HTTP | Overflow | Images | Sections | Observed CLS | Axe violations | Skip/FAQ/focus | Reduced motion |
|---:|---|---:|---|---|---:|---:|---:|---|---|
| 375 | Light | 200 | None | 10/10 | 11 | 0 | 0 | PASS | PASS |
| 375 | Dark | 200 | None | 10/10 | 11 | 0 | 0 | PASS | PASS |
| 768 | Light | 200 | None | 10/10 | 11 | 0 | 0 | PASS | PASS |
| 768 | Dark | 200 | None | 10/10 | 11 | 0 | 0 | PASS | PASS |
| 1280 | Light | 200 | None | 10/10 | 11 | 0 | 0 | PASS | PASS |
| 1280 | Dark | 200 | None | 10/10 | 11 | 0 | 0 | PASS | PASS |
| 1440 | Light | 200 | None | 10/10 | 11 | 0 | 0 | PASS | PASS |
| 1440 | Dark | 200 | None | 10/10 | 11 | 0 | 0 | PASS | PASS |

Reduced motion was explicitly toggled after each normal run: media query matched, root scrolling became `auto`, and sampled CTA transitions were `0s`. These were live toggles, not eight extra cold navigations. The established product surface fixes the generic page's preference behavior while retaining the approved light palette in both color preferences.

The initial harness used integer client dimensions and falsely flagged thin screenshot ratios. Supplemental checks also needed explicit lazy-image decode before reading natural sizes. The harness was corrected outside the repository to measure fractional bounding rectangles after decode; the complete matrix was repeated successfully. All ten figures at every width passed an additional relative-aspect-ratio error tolerance of 0.2%. A separate selector typo in that supplemental script was corrected before its successful final run. No application change was needed for these instrumentation issues.

### Accessibility and functionality

- Axe WCAG A/AA through 2.2 and best-practice checks: zero detected violations in all eight cases. Two manual-review contrast entries concern decorative, aria-hidden characters; no text-contrast failure was reported. Manual color checks cover the pale-blue hero; its tested text colors exceed 6.15:1 against that background. These checks are not full WCAG certification or a guarantee about raster-image fine print.
- Keyboard skip link is visible on focus and moves focus to `#kontraktsinnhold`. Named navigation landmarks and meaningful H1/H2/H3 hierarchy are present.
- All ten FAQs opened with Enter and closed with Space at every width in supplemental checks. Focus outlines are 3 px. Ten successive focus stops were inspected at each width, plus a separate 60-Tab mobile traversal with no missing outline on focused actions.
- Chrome accessibility-tree names for all ten original-image links contain the visible **Åpne hele bildet** action plus the individual description. All ten were actually followed to complete PNG images with nonzero natural dimensions.
- Both primary and final CTA were actually followed from the local page to `https://app.jobbleder.no/`. The app shows the existing login/create-account flow; no authentication was submitted. Shared registration guidance is unchanged.
- The secondary CTA scrolls to `#kontraktseksempel`, below the sticky header (about y=101, header bottom 73). The contextual Faktura link was actually followed.
- All **28 distinct collected local href URLs** returned 200. Both instruction fragments `#opprett` and `#dokumenter` exist. FAQ schema/visible answers match exactly.
- No JavaScript page exceptions were recorded for the local contract page. The known local `/api/handshake` returns HTTP 400 and produces a console resource error; analytics was not changed. Do not interpret this as a completely clean HTTP/console log or a production failure.

### Regression checks and scope

Homepage, Faktura, Timeliste and Tilbud were each rendered at all four widths under dark OS preference: **16 local regression cases** passed HTTP 200, image decode, overflow and page-exception checks. Homepage retains its four product sections/four workflow text paths. Existing product navigation to Kontrakt was followed from homepage, Timeliste and Tilbud; Faktura's unchanged legacy Navbar home link also worked.

Both existing Timeliste PDF endpoints returned 200 with `application/pdf` and PDF signatures. No PDF file/endpoint or generation logic changed. The local implementations of the published pages and their image assets remain unchanged; this is not a new production deployment or production regression run.

The completed SHA-256 scope check of 196 pre-existing tracked/untracked files confirmed that only the two-line route integration changed; the other 195 files, including originals, reused assets and previous reports, are unchanged. Exactly fourteen new files match the implementation inventory. HEAD, the empty index and `next-env.d.ts` remain unchanged. Shared components/styles, all published-page implementations, SEO records, configuration, authentication, analytics and backend files are outside the change set. `final-scope.json` records the assertions.

## 7. Known limitations and visual approval

- Native-resolution full forms, complete document text and clause fine print are necessarily small when fitted to a phone. Core choices and explanations remain readable HTML; focused pricing/payment/material variants and full-original links provide detail access. No source resolution was fabricated.
- The supplied plan screenshot contains one 25% row. This remains a configuration example, not a complete recommended schedule or tested partial-invoice result. Advance/progress calculation, validation and collection semantics remain unverified and are not advertised.
- The PDF is an earlier document example; no new matching export was supplied or invented. There is no standalone contract `.pdf` download in the marketing repository.
- Known local analytics HTTP 400 and existing English login/create-account step remain unchanged. Production analytics was not retested in this local implementation phase.
- Browser checks use emulated desktop Chrome, not physical mobile hardware, Safari/Firefox or a screen-reader session. Lighthouse and production measurements were not run or claimed in this phase.

Evidence directory:

`C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase4c2-evidence/`

Key evidence: `browser-results.json`, `extra-results.json`, `interactions.json`, full-page `contract-{width}-{light,dark}.png`, matching hero captures, payment/terms/workflow details, regression screenshots and `layout-matrix.png`. Scripts and QA screenshots remain outside the application repository.

**Implementation and requested local validation complete. Await visual approval before commit, push or deployment.**

## 8. Exact image inventory and optimization mappings

The following tables are generated from the final manifest/file metadata. All byte counts are exact. “Reused” means an existing asset was not rewritten. Crop coordinates are original-pixel `left, top, width, height`; “Full” preserves the source bounds.

### New generated files (exact list)

- `public/images/product/kontrakt/optimized/jobbleder-contract-hero-11f4f7338a0b.webp`
- `public/images/product/kontrakt/optimized/jobbleder-contract-hero-mobile-b5101a336cae.webp`
- `public/images/product/kontrakt/optimized/jobbleder-contract-payments-f96f107da0be.webp`
- `public/images/product/kontrakt/optimized/jobbleder-contract-payments-mobile-b3e033dbf6b6.webp`
- `public/images/product/kontrakt/optimized/jobbleder-contract-advance-1e0f477eb7e3.webp`
- `public/images/product/kontrakt/optimized/jobbleder-contract-progress-b47e4e1c1c86.webp`
- `public/images/product/kontrakt/optimized/jobbleder-contract-clauses-e1b447e61a33.webp`
- `public/images/product/kontrakt/optimized/jobbleder-contract-materials-be1c1b83a11e.webp`

### Source PNGs used (all unchanged)

| Exact source path | Dimensions | Bytes |
|---|---|---:|
| `public/images/product/kontrakt/source/exported_contract_preview.png` | 508 × 720 | 73859 |
| `public/images/product/tilbud/source/tilbud_to_contract.png` | 834 × 720 | 94495 |
| `public/images/product/tilbud/source/invoice_from_contract.png` | 1280 × 720 | 115705 |
| `public/images/product/kontrakt/source/payment_base.png` | 638 × 141 | 4494 |
| `public/images/product/kontrakt/source/new_contract_form_time.png` | 840 × 720 | 90346 |
| `public/images/product/kontrakt/source/payment_methods.png` | 652 × 154 | 9917 |
| `public/images/product/kontrakt/source/new_contract_form_with_advance_percentage.png` | 680 × 720 | 89836 |
| `public/images/product/tilbud/source/contract_from_offer_edited.png` | 706 × 720 | 78568 |
| `public/images/product/kontrakt/source/material_costs.png` | 640 × 142 | 6279 |

### Source-to-output mappings

| Exact output path | Status | Source filename | Dimensions | Bytes | Crop |
|---|---|---|---|---:|---|
| `public/images/product/kontrakt/optimized/jobbleder-home-contract-document-249c17de7105.webp` | Reused | `exported_contract_preview.png` | 508 × 720 | 37384 | Full |
| `public/images/product/tilbud/optimized/jobbleder-offer-contract-793f5eed04dc.webp` | Reused | `tilbud_to_contract.png` | 834 × 720 | 56266 | Full |
| `public/images/product/tilbud/optimized/jobbleder-offer-contract-mobile-66905c4b86f7.webp` | Reused | `tilbud_to_contract.png` | 664 × 426 | 30226 | 0, 76, 664, 426 |
| `public/images/product/tilbud/optimized/jobbleder-offer-contract-invoice-7847d3b65141.webp` | Reused | `invoice_from_contract.png` | 1084 × 386 | 35312 | 184, 146, 1084, 386 |
| `public/images/product/tilbud/optimized/jobbleder-offer-contract-invoice-mobile-64fb6553081e.webp` | Reused | `invoice_from_contract.png` | 862 × 386 | 25808 | 184, 146, 862, 386 |
| `public/images/product/kontrakt/optimized/jobbleder-home-contract-192687f50086.webp` | Reused | `payment_base.png` | 638 × 141 | 2452 | Full |
| `public/images/product/kontrakt/optimized/jobbleder-home-contract-mobile-6413439017d3.webp` | Reused | `payment_base.png` | 340 × 141 | 1910 | 0, 0, 340, 141 |
| `public/images/product/kontrakt/optimized/jobbleder-contract-hero-11f4f7338a0b.webp` | Created | `new_contract_form_time.png` | 668 × 422 | 28740 | 0, 84, 668, 422 |
| `public/images/product/kontrakt/optimized/jobbleder-contract-hero-mobile-b5101a336cae.webp` | Created | `new_contract_form_time.png` | 332 × 74 | 2948 | 334, 396, 332, 74 |
| `public/images/product/kontrakt/optimized/jobbleder-contract-payments-f96f107da0be.webp` | Created | `payment_methods.png` | 652 × 154 | 5594 | Full |
| `public/images/product/kontrakt/optimized/jobbleder-contract-payments-mobile-b3e033dbf6b6.webp` | Created | `payment_methods.png` | 340 × 154 | 4024 | 0, 0, 340, 154 |
| `public/images/product/kontrakt/optimized/jobbleder-contract-advance-1e0f477eb7e3.webp` | Created | `new_contract_form_with_advance_percentage.png` | 538 × 58 | 3778 | 0, 350, 538, 58 |
| `public/images/product/kontrakt/optimized/jobbleder-contract-progress-b47e4e1c1c86.webp` | Created | `contract_from_offer_edited.png` | 560 × 120 | 8672 | 0, 386, 560, 120 |
| `public/images/product/kontrakt/optimized/jobbleder-contract-clauses-e1b447e61a33.webp` | Created | `new_contract_form_with_advance_percentage.png` | 538 × 278 | 23562 | 0, 438, 538, 278 |
| `public/images/product/kontrakt/optimized/jobbleder-contract-materials-be1c1b83a11e.webp` | Created | `material_costs.png` | 340 × 142 | 2630 | 0, 0, 340, 142 |
