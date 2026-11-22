# Phase 9C.2 — Contract 2.0 visual integration

22 November 2026. Repository: `C:/Users/ddlas/Code/jobbleder-site`.

**PHASE 9C.2 COMPLETE — READY FOR OWNER REVIEW**

Local implementation only. No commit, push, deployment, dependency installation, application-repository investigation or application changes. Original source screenshots, existing Phase 9B changes and independent legal-review notices are preserved.

## 1. Executive summary

Replaced the Contract product page's Contract 1.0 illustrations with genuine Contract 2.0 crops, added intent-specific supporting visuals to the other three Contract SEO routes, and integrated the same visual system into the three core workflow articles. The offer workflow now follows the actual Offer 30 action into the contract's Offer 30 reference. The invoice example is explicitly separate: Contract 16, net 96,000 NOK, 25% VAT, VAT 24,000 NOK and gross 120,000 NOK. Its caption says the values were corrected manually; it does not claim that automatic financial calculations have been fixed.

Thirteen lossless, content-hashed WebP derivatives reuse the site's existing Sharp optimizer and ProductMedia/Next Image presentation. Their combined size is 162,946 bytes. All original pixels inside the selected crops match the WebP output after decoding. No interface, control, identity or financial value was recreated or retouched.

**Owner-approved asset limitation:** mobile form originals are only 65–79 pixels wide, and saved mobile document captures are only 112–152 pixels wide. Browser inspection confirmed that enlarging those text-heavy crops did not make them readable. The owner instructed: “Omit unreadable crops and document the limitation.” These form/document visuals are therefore omitted below 640 px. The genuine mobile invoice crop is retained. Desktop/tablet illustrations are not presented as simulated mobile screenshots. Complete mobile form coverage requires better originals, not generated replacements.

Verification: production build, TypeScript, ESLint, preservation/pixel checks, 28 target page/viewport combinations, six unrelated-product regression combinations, 23 local links/anchors and contextual caption contrast checks pass. JPEG browser captures and detailed evidence are in [phase-9c2-review](./phase-9c2-review), never in public production assets.

## 2. Initial repository status

HEAD at entry: `ec472f5` — `feat(marketing): modernize faktura guides and editorial ecosystem`.

The working tree was already dirty. Four tracked files contained approved Phase 9B work: `components/product/contract/ContractProductPage.tsx`, `content/blogPosts.ts`, `content/contractProduct.ts`, and `content/seoPages.ts`. Their initial aggregate diff was 418 insertions and 180 deletions. Existing untracked Phase 7/8 diagnostics/reports, Phase 9A/9B reports and all thirteen new screenshot source files were present before this phase.

No reset, restore, staging or history operation was used. A baseline of 295 file hashes and complete SEO/blog records was saved before implementation changes to application/site content. This baseline includes the newly created audit script itself; it is a preservation aid, not a claim that the repository was initially clean. `content/contractProduct.ts` remains byte-identical to the entry baseline: its Git modification still belongs to Phase 9B. Unrelated SEO records and articles are deep-compared against the entry content records. All 93 source images across the recorded public source directories are hash-verified unchanged.

Evidence: [baseline.json](./phase-9c2-review/baseline.json), [verification.json](./phase-9c2-review/verification.json).

## 3. Complete source asset inventory

All thirteen expected new identifiers were found, as PNG files, in `public/images/product/kontrakt/source/`; none were newly supplied under the other two source folders. Every newly supplied original was opened at its actual resolution before selecting crops. The mobile originals are genuine mobile captures, despite being stored in the kontrakt folder.

The table inventories all 53 raster files in the three requested folders. Existing older/shared files were inventoried by dimensions, file size and existing provenance; they were not relabelled as Contract 2.0. Exact hashes and role assignments are retained in [asset-inventory.json](./phase-9c2-review/asset-inventory.json). Paths below are relative to `public/images/product/`. “Retain” means no new placement in this Contract cluster and no removal from its existing consumers.

<!-- SOURCE_TABLE_START -->
| Actual file | Dimensions | Bytes | Class | Functionality / existing provenance | Placement / cropping |
| --- | --- | --- | --- | --- | --- |
| kontrakt/source/contract-2-b2b-form.png | 430 × 720 | 65224 | desktop | B2B creation, work/detail, fixed price, progress schedule and materials | b2b, payments; focused crops required |
| kontrakt/source/contract-2-b2b-form_mobile.png | 65 × 720 | 28687 | mobile | Genuine mobile B2B creation form; text unreadable at supplied resolution | Omitted; readable replacement needed |
| kontrakt/source/contract-2-b2b-in-documents.png | 358 × 720 | 66122 | desktop | Saved B2B Contract 16, company/project and scope preview | savedB2B; focused crops required |
| kontrakt/source/contract-2-b2b-in-documents_mobile.png | 112 × 720 | 41362 | mobile | Genuine mobile saved Contract 16; very small text | Omitted; readable replacement needed |
| kontrakt/source/contract-2-b2c-form.png | 534 × 720 | 76893 | desktop | B2C creation, work rows/detail, price/VAT, completion payment and materials | hero, work, pricing, materials; focused crops required |
| kontrakt/source/contract-2-b2c-form_mobile.png | 79 × 720 | 32375 | mobile | Genuine mobile B2C creation form; text unreadable at supplied resolution | Omitted; readable replacement needed |
| kontrakt/source/contract-2-b2c-in-documents.png | 487 × 720 | 78256 | desktop | Saved B2C Contract 15, customer/project and scope preview | savedB2C; focused crops required |
| kontrakt/source/contract-2-b2c-in-documents_mobile.png | 152 × 720 | 53101 | mobile | Genuine mobile saved Contract 15; very small text | Omitted; readable replacement needed |
| kontrakt/source/contract-2-from-offer-mobile.png | 78 × 720 | 31420 | mobile | Genuine mobile offer-linked contract form; text unreadable at supplied resolution | Omitted; readable replacement needed |
| kontrakt/source/contract-2-from-offer.png | 546 × 720 | 79214 | desktop | Contract 17 form linked to Offer 30, work/detail and offer price selection | offer; focused crops required |
| kontrakt/source/contract-2-invoice-conversion-mobile.png | 162 × 720 | 40991 | mobile | Genuine mobile editable invoice, rate, corrected totals and Contract 16 source | invoiceMobile; focused crops required |
| kontrakt/source/contract-2-invoice-conversion.png | 851 × 403 | 63028 | desktop | Editable invoice from Contract 16, owner-corrected net/VAT/gross | invoice; focused crops required |
| kontrakt/source/contract_from_offer_edited.png | 706 × 720 | 78568 | desktop | Historical edited contract from offer | Retain existing consumers; not selected |
| kontrakt/source/exported_contract_preview.png | 508 × 720 | 73859 | desktop | Historical Contract 1.0 PDF visual | Retain existing consumers; not selected |
| kontrakt/source/invoice_from_contract.png | 1280 × 720 | 115705 | desktop | Historical invoice creation from contract | Retain existing consumers; not selected |
| kontrakt/source/material_costs.png | 640 × 142 | 6279 | desktop | Historical material responsibility controls | Retain existing consumers; not selected |
| kontrakt/source/new_contract_form.png | 840 × 720 | 87933 | desktop | Historical contract creation form | Retain existing consumers; not selected |
| kontrakt/source/new_contract_form_time.png | 840 × 720 | 90346 | desktop | Historical hourly contract form | Retain existing consumers; not selected |
| kontrakt/source/new_contract_form_with_advance_percentage.png | 680 × 720 | 89836 | desktop | Historical advance-payment form and text sections | Retain existing consumers; not selected |
| kontrakt/source/offer-to-contract.png | 850 × 720 | 78532 | desktop | Offer 30 customer, rows, summary and actual create-contract action | offerAction, offerOverview; focused crops required |
| kontrakt/source/payment_base.png | 638 × 141 | 4494 | desktop | Historical price-structure dropdown | Retain existing consumers; not selected |
| kontrakt/source/payment_methods.png | 652 × 154 | 9917 | desktop | Historical payment-method controls | Retain existing consumers; not selected |
| kontrakt/source/suggestions.png | 613 × 285 | 9718 | desktop | Work-description suggestion dictionary | Retain existing consumers; not selected |
| kontrakt/source/tilbud_to_contract.png | 834 × 720 | 94495 | desktop | Historical offer-to-contract form | Retain existing consumers; not selected |
| mobile/source/contract_create_mobile_01.png | 332 × 720 | 71144 | mobile | Historical mobile contract creation, first part | Retain existing consumers; not selected |
| mobile/source/contract_create_mobile_02.png | 332 × 720 | 63285 | mobile | Historical mobile contract creation, second part | Retain existing consumers; not selected |
| mobile/source/contract_document_actions_mobile.png | 332 × 720 | 56691 | mobile | Historical mobile contract document/actions | Retain existing consumers; not selected |
| mobile/source/contract_from_offer_mobile.png | 332 × 720 | 65359 | mobile | Historical mobile offer-to-contract form | Retain existing consumers; not selected |
| mobile/source/invoice_create_mobile.png | 332 × 720 | 64721 | mobile | Existing mobile invoice creation | Retain existing consumers; not selected |
| mobile/source/invoice_from_contract_mobile.png | 332 × 720 | 64078 | mobile | Historical mobile contract-to-invoice example | Retain existing consumers; not selected |
| mobile/source/invoice_from_offer_mobile.png | 332 × 720 | 57596 | mobile | Existing separate mobile offer-to-invoice example | Retain existing consumers; not selected |
| mobile/source/new_contract_document_edit_mobile.png | 332 × 720 | 65284 | mobile | Historical mobile contract editing | Retain existing consumers; not selected |
| mobile/source/new_offer_document_edit_mobile.png | 332 × 720 | 61585 | mobile | Existing mobile offer editing | Retain existing consumers; not selected |
| mobile/source/offer_document_actions_mobile.png | 332 × 720 | 58001 | mobile | Existing mobile offer document/actions | Retain existing consumers; not selected |
| mobile/source/registration_extra_km_save_mobile.png | 332 × 720 | 66153 | mobile | Existing mobile registration with extras/km/save | Retain existing consumers; not selected |
| mobile/source/registration_form_mobile.png | 332 × 720 | 67231 | mobile | Existing mobile work registration form | Retain existing consumers; not selected |
| mobile/source/registrations_saved_mobile.png | 332 × 720 | 89378 | mobile | Existing saved mobile work registrations | Retain existing consumers; not selected |
| mobile/source/registrations_selected_import_mobile.png | 332 × 720 | 98974 | mobile | Existing mobile registration selection/import | Retain existing consumers; not selected |
| mobile/source/timelist_import_result_mobile_01.png | 332 × 720 | 76994 | mobile | Existing mobile timelist import, first part | Retain existing consumers; not selected |
| mobile/source/timelist_import_result_mobile_02.png | 332 × 720 | 68506 | mobile | Existing mobile timelist import, second part | Retain existing consumers; not selected |
| mobile/source/timelist_invoice_extra_mobile.png | 332 × 720 | 63368 | mobile | Existing mobile extra-hours invoice rows | Retain existing consumers; not selected |
| mobile/source/timelist_invoice_regular_mobile.png | 332 × 720 | 65346 | mobile | Existing mobile regular-hours invoice rows | Retain existing consumers; not selected |
| mobile/source/timelist_invoice_regular_mobile_01.png | 332 × 720 | 57939 | mobile | Existing mobile regular invoice, first part | Retain existing consumers; not selected |
| mobile/source/timelist_invoice_regular_mobile_02.png | 332 × 720 | 61657 | mobile | Existing mobile regular invoice, second part | Retain existing consumers; not selected |
| mobile/source/timelist_invoice_summary_mobile.png | 332 × 720 | 69797 | mobile | Existing mobile timelist-invoice summary | Retain existing consumers; not selected |
| tilbud/source/contract_from_offer_edited.png | 706 × 720 | 78568 | desktop | Historical edited contract from offer | Retain existing consumers; not selected |
| tilbud/source/exported_tilbud_A4.png | 506 × 720 | 39992 | desktop | Existing full A4 offer PDF visual | Retain existing consumers; not selected |
| tilbud/source/exported_tilbud_A5.png | 506 × 360 | 37358 | desktop | Existing A5 offer PDF visual | Retain existing consumers; not selected |
| tilbud/source/invoice_from_contract.png | 1280 × 720 | 115705 | desktop | Historical invoice creation from contract | Retain existing consumers; not selected |
| tilbud/source/new_offer_form.png | 1280 × 720 | 112403 | desktop | Existing desktop offer creation form | Retain existing consumers; not selected |
| tilbud/source/offer_document_preview_in_documents_menu.png | 1280 × 720 | 153575 | desktop | Existing desktop offer document preview/actions | Retain existing consumers; not selected |
| tilbud/source/tilbud_to_contract.png | 834 × 720 | 94495 | desktop | Historical offer-to-contract form | Retain existing consumers; not selected |
| tilbud/source/tilbud_to_invoice.png | 1280 × 720 | 115837 | desktop | Existing direct offer-to-invoice form | Retain existing consumers; not selected |
<!-- SOURCE_TABLE_END -->

## 4. Optimized asset inventory

All files below are in `public/images/product/kontrakt/optimized/`. Width and height are intrinsic decoded WebP dimensions, not CSS display dimensions. Every selected derivative is lossless. Older derivatives are preserved for shared consumers; only unreferenced trial derivatives created during this phase were cleaned up, with baseline-file checks.

<!-- OPTIMIZED_TABLE_START -->
| Role | Source filename | Crop (x,y,w,h) | Output filename | Dimensions | Bytes |
| --- | --- | --- | --- | --- | --- |
| hero | contract-2-b2c-form.png | 0, 74, 425, 186 | jobbleder-contract-2-hero-faee5c2ab7ef.webp | 425 × 186 | 12458 |
| b2b | contract-2-b2b-form.png | 0, 58, 341, 142 | jobbleder-contract-2-b2b-c732250ada84.webp | 341 × 142 | 7426 |
| work | contract-2-b2c-form.png | 0, 260, 425, 228 | jobbleder-contract-2-work-02fb97838ded.webp | 425 × 228 | 15544 |
| pricing | contract-2-b2c-form.png | 0, 490, 425, 46 | jobbleder-contract-2-pricing-0017bd7a2216.webp | 425 × 46 | 2014 |
| payments | contract-2-b2b-form.png | 0, 448, 341, 145 | jobbleder-contract-2-payments-632b3a9f8bfa.webp | 341 × 145 | 7626 |
| materials | contract-2-b2c-form.png | 0, 559, 425, 27 | jobbleder-contract-2-materials-9ff1040c096a.webp | 425 × 27 | 982 |
| savedB2C | contract-2-b2c-in-documents.png | 0, 0, 487, 359 | jobbleder-contract-2-saved-b2-c-b8ceec4e775e.webp | 487 × 359 | 15456 |
| savedB2B | contract-2-b2b-in-documents.png | 0, 0, 358, 289 | jobbleder-contract-2-saved-b2-b-df3ee5ae9f1d.webp | 358 × 289 | 11218 |
| offerAction | offer-to-contract.png | 0, 660, 840, 54 | jobbleder-contract-2-offer-action-e5744404ead6.webp | 840 × 54 | 7918 |
| offerOverview | offer-to-contract.png | 0, 0, 840, 540 | jobbleder-contract-2-offer-overview-e2387e1b3c82.webp | 840 × 540 | 48788 |
| offer | contract-2-from-offer.png | 0, 503, 434, 32 | jobbleder-contract-2-offer-c9b47a50e629.webp | 434 × 32 | 2154 |
| invoice | contract-2-invoice-conversion.png | 120, 105, 725, 253 | jobbleder-contract-2-invoice-326624105cfc.webp | 725 × 253 | 20122 |
| invoiceMobile | contract-2-invoice-conversion-mobile.png | 0, 324, 162, 315 | jobbleder-contract-2-invoice-mobile-5d4b1a2ab159.webp | 162 × 315 | 11240 |
<!-- OPTIMIZED_TABLE_END -->

## 5. Source-to-derivative mappings

The table above records every exact source filename, crop rectangle and hashed output filename. Rectangle order is `left, top, width, height` in original source pixels. `content/contractProductMedia.json` also records source dimensions, byte size, full SHA-256, output dimensions/bytes, functionality and crop. The filename hash comes from output bytes, so replacing a source regenerates a new derivative URL rather than relying on an outdated cache entry.

Run `node scripts/prepare-contract-media.mjs` to regenerate using the existing `optimize` export from `scripts/optimize-invoice-media.mjs`. It does not run the invoice optimizer's standalone main routine, alter its manifest, delete originals or update the shared offer/home/instruction manifests. No second production image optimization pipeline or package was introduced.

The current invoice desktop/mobile roles both derive from the latest owner-supplied corrected sources. No old Contract 1.0 invoice role is referenced by the new Contract visual manifest. No reference to the former inflated Contract 2.0 example was introduced or retained in the target routes/articles. The source images remain untouched.

## 6. Crop decisions and selected functionality

- Primary creation: B2C type, customer/project, completion-date context and job title. The full long form is not squeezed into the hero.
- B2B: selected business type and customer context, separate from consumer presentation. No legal approval claim.
- Work: all four visible structured painting-work rows plus the complete visible optional-description field. The field's internal scrollbar and its visible content are preserved, not expanded or rewritten.
- Price: current price structure, inclusion control and fixed-price field. The screenshot shows the selected control state; it does not pretend an unopened dropdown displays all options. The existing three-price-structure copy is preserved.
- Payment: current B2B progress method, deadline, enabled schedule and 33/33/34 rows. Complete visible controls are retained; unrelated following section headings are excluded. This is not automatic installment invoicing.
- Materials: the complete selected responsibility field, without showing invented open options.
- Saved contracts: focused B2C Contract 15 and B2B Contract 16 previews, customer/project context and scope. They are labelled in-app previews, not downloadable PDFs. The supplied saved-preview screenshots do not show the contract action row; no action controls were fabricated or claimed to be visible.
- Offer: actual Offer 30 overview and actual action row, then the resulting contract's selected Offer 30 reference/net offer sum. The strip preserves the genuine controls; the full original remains available through the existing image link.
- Invoice: preserves source Contract 16, editable line, rate and corrected totals. Mobile uses its genuine mobile source, not the desktop crop.

Browser review led to narrower crop boundaries so subsequent headings or controls were not cut. No image was stretched; CSS preserves the source aspect ratio. Original full-resolution links remain available where the corresponding visual is displayed.

## 7. Desktop/mobile image mappings

| Role | Desktop/tablet source | Mobile below 640 px |
| --- | --- | --- |
| B2C creation | contract-2-b2c-form.png | Omitted: 79-pixel-wide mobile original is unreadable |
| B2B context | contract-2-b2b-form.png | Omitted: 65-pixel-wide mobile original is unreadable |
| Work, pricing, materials | Focused B2C form crops | Omitted; no desktop interface disguised as mobile |
| Percentage payment terms | Focused B2B form crop | Omitted; no desktop interface disguised as mobile |
| Saved B2C | contract-2-b2c-in-documents.png | Omitted after testing the 152-pixel-wide original |
| Saved B2B | contract-2-b2b-in-documents.png | Omitted: 112-pixel-wide original is too small |
| Offer action/result | offer-to-contract.png + contract-2-from-offer.png | Omitted; resulting mobile form is 78 pixels wide; no new readable mobile offer-action source supplied |
| Contract -> invoice | 725 x 253 crop from corrected desktop source | Genuine 162 x 315 crop from corrected mobile source |

The retained invoice pair uses one `<picture>`/`<img>` with an exclusive media source below 640 px, not two competing images hidden with CSS. Its original-image link also selects the actual corresponding original. Other form/document figures are omitted on mobile according to the owner's explicit instruction; explanatory copy, legal notices, CTAs and navigation remain available. At 768, 1024 and 1440 px the focused desktop crops are displayed. Only the product hero has eager/high-priority treatment; below-fold figures remain lazy.

## 8. Page-by-page visual integration

| Route | Integration | Preserved intent |
| --- | --- | --- |
| /kontrakt-mal | B2C creation hero; saved B2C; current price/payment fields; work/detail/material controls; B2B selection; offer action/result; corrected desktop/mobile invoice | Product preparation and conversion workflow |
| /kontrakt-eksempel | Saved B2C and B2B under parties, structured/detailed scope under section 2, payment schedule under section 4 | Existing eleven-part educational document anatomy; no public PDF example |
| /kontrakt-handverker | Work/detail and materials, progress schedule, actual offer action followed by offer-reference crop | Practical scope, responsibility and payment preparation |
| /hva-skal-en-kontrakt-inneholde | Only customer/job context and material responsibility fragments | Supporting checklist illustrations, not a screenshot gallery |

The existing generic editorial shells, product design language, dark/light behavior, CTA destinations, section copy, FAQs and independent-review notices are preserved. Editorial visuals are selected by route and existing heading through `contractEditorialVisuals`, rather than replacing approved text. The main product page's obsolete image-specific captions and references to Contract 11/old price controls were updated where they no longer described the visible screenshot.

## 9. Article image changes

| Article | Change |
| --- | --- |
| /blogg/tilbud-vs-kontrakt | One actual Offer 30 action-row illustration near the existing document-workflow explanation; narrative unchanged |
| /blogg/nar-trenger-du-kontrakt | One focused current work/detail illustration near the existing Contract 2.0 capability paragraph; narrative and legal note unchanged |
| /blogg/fra-tilbud-til-kontrakt-og-faktura | Replaced old offer/contract-PDF/edited-contract/mobile-contract-invoice illustrations with Offer 30 overview, actual create-contract action, selected Offer 30 reference and corrected Contract 16 invoice pair |

The workflow article retains the hypothetical parkett narrative and explicitly distinguishes it from the authentic painting-work screenshots. It also states that the invoice example uses a different source contract. Only obsolete image-dependent explanations were replaced. Existing independent-review note blocks are deep-equal to baseline. The separate direct offer-to-invoice mobile example is preserved and continues to be described as a separate example.

`BlogProductExample`, its old shared roles, `offerProductMedia.json` and Tilbud pages were not changed. All 15 unrelated article records remain deep-equal to baseline.

## 10. Metadata changes

| Route | Title configuration | Description |
| --- | --- | --- |
| /kontrakt-mal | Kontrakt mal – lag kontrakt gratis med Jobbleder | Lag kontrakt for privatkunder og bedrifter gratis med Jobbleder. Beskriv arbeidet, avtal pris, sett opp betalingsplan og last ned kontrakten som PDF. |
| /kontrakt-eksempel | Kontrakt eksempel – se hvordan en kontrakt bygges opp | Existing approved description preserved |
| /kontrakt-handverker | Kontrakt for håndverkere – omfang, pris og vilkår | Preserved |
| /hva-skal-en-kontrakt-inneholde | Hva skal en kontrakt inneholde? Praktisk sjekkliste | Preserved |

The existing document-title template still appends `| Jobbleder`. Existing rendered H1s are preserved; the product hero remains “Lag kontrakter som passer jobben.” Contract route Open Graph/Twitter title and description now use the same page configuration, and the existing dynamic OG image uses the Contract metadata title. Canonicals remain on the configured public site origin, not localhost. Other SEO route records and their OG behavior are unchanged. Existing FAQ/Article/Organization/WebSite JSON-LD parses successfully; approved FAQ content is unchanged.

## 11. Files created

- `components/product/contract/ContractMedia.tsx`: scoped adapter around existing ProductMedia.
- `components/product/contract/ContractEditorialMedia.tsx`: route/heading placement adapter.
- `components/product/contract/contractMedia.module.css`: contextual caption colors, responsive omission, proportional presentation and focus/link-target styling.
- `content/contractProductVisuals.ts`: shared roles, truthful Norwegian alt text/captions and editorial placements.
- Thirteen hashed WebPs listed in section 4.
- `scripts/verify-contract-visuals.mjs`: source/pixel/content/metadata preservation checks and optional safe cleanup of phase-owned trial crops.
- `scripts/review-contract-pages.mjs`: assertions over browser evidence, local links, contextual contrast and non-public review sheets.
- This report and `docs/phase-9c2-review/` evidence: baseline, inventories, optimization/preservation/browser/accessibility/navigation/link results, 34 full-page captures, seven four-width review sheets, focused views and two owner-review viewport captures. See the evidence index below.

The thirteen source PNGs were already untracked at entry; they are owner-supplied originals, not created by this implementation.

## 12. Files modified

Phase-specific modifications to existing files:

- `scripts/prepare-contract-media.mjs`
- `content/contractProductMedia.json`
- `content/seoPages.ts` — only the two approved metadata changes; all section/FAQ content preserved.
- `content/blogPosts.ts` — scoped image blocks and obsolete image-dependent descriptions in the three requested articles.
- `components/product/contract/ContractProductPage.tsx`
- `app/(seo)/[slug]/page.tsx` — Contract-only figures and metadata override.
- `app/(seo)/[slug]/opengraph-image.tsx` — Contract-only title selection.
- `app/blogg/[slug]/page.tsx` — rendering of the new shared Contract visual block.

`content/contractProduct.ts` and existing Phase 7/8/9 reports remain untouched relative to entry. Shared product primitives, CSS, home/offer/invoice/timelist/instruction components and their manifests are unchanged. Existing old optimized/source assets were not removed. Source verification confirms no new public PDF or private document publication. No package files were changed.

## 13. Optimization results and file sizes

Selected WebPs: **162,946 bytes total**, versus **251,964 bytes** when the same crop pixels are encoded as PNG: **35.3% less**. This is a like-for-like crop-encoding comparison, not a claim that cropping itself is compression. The 13 derivatives use eight unique authentic originals. Individual source and derivative sizes are in sections 3–4 and [optimization-results.json](./phase-9c2-review/optimization-results.json).

No source was enlarged or rewritten by the optimizer. CSS allows focused fragments to use the available column and preserves aspect ratio. Enlargement can expose existing low-resolution softness, so the source-resolution limitation remains, particularly for fine labels and long description text. Content hashes ensure the corrected invoice derivatives do not reuse a stale URL.

## 14. Responsive browser verification

Local production server: `http://127.0.0.1:3092`, using the completed Next production build. No Vercel deployment.

| Coverage | 390 px | 768 px | 1024 px | 1440 px |
| --- | --- | --- | --- | --- |
| Four Contract SEO routes | PASS with approved omissions | PASS | PASS | PASS |
| Three Contract workflow articles | PASS with approved omissions | PASS | PASS | PASS |
| Tilbud, Timeliste, Faktura product regression checks | PASS | — | — | PASS |

**34 browser checks:** 28 target combinations plus six regression combinations. All have a single H1, valid canonical, no horizontal overflow and no broken visible images. All seven Contract targets retain visible legal-review language. Geometry sampling before/after image loading showed no image-position changes in these checks; this is not a laboratory CLS score or a guarantee across all devices.

Actual `<picture>` currentSrc selection was checked: the corrected mobile invoice derivative at 390 px and the corrected desktop derivative at 768/1024/1440 px. The component contains one image per responsive pair. Below-fold images remain lazy. The account CTA href is unchanged; it was inspected without opening the separate application. The existing “Se kontraktseksempel” anchor was clicked and reached its correct section; the legal-review FAQ was expanded and its pending-review answer verified.

23 distinct local internal links/anchors return 200 with referenced anchors present. Full-page browser captures were reviewed visually through four-width sheets and native-size focused crops, including forms, payment rows, descriptions, previews, corrected invoice values and captions. A visual inspection found and fixed contextual caption contrast on white article backgrounds; final evidence was recaptured after that fix.

An initially flagged Faktura image was inside an existing closed optional Premium panel. It is correctly lazy while closed, and loads when that panel opens; it is not a broken asset or a regression. No unrelated generator/page change was made.

## 15. Accessibility verification

Norwegian Bokmål alt text describes visible functionality and remains accurate for both invoice variants. Captions distinguish an app preview from a PDF, and desktop fragments from genuine mobile captures. The manually corrected amounts are explained in readable caption text, not only inside the screenshot. No legal approval or automatic installment/financial-correction claim was introduced.

New caption links have at least 44 px height and a visible keyboard focus outline. Contextual colors were verified in the white product page, existing dark editorial shell, and white blog article. Minimum sampled caption contrast is **6.96:1**, exceeding 4.5:1. Existing semantic headings, navigation, FAQ behavior, CTAs and pending-review notices remain intact. This is targeted accessibility verification, not a complete WCAG certification or screen-reader audit.

Evidence: [accessibility-verification.json](./phase-9c2-review/accessibility-verification.json), [navigation-results.json](./phase-9c2-review/navigation-results.json).

## 16. Build and test results

| Check | Result |
| --- | --- |
| `node node_modules/typescript/bin/tsc --noEmit --incremental false` | PASS |
| `npm.cmd run lint` | PASS |
| `npm.cmd run build` | PASS; 55 static pages generated; dynamic routes retained |
| `node scripts/prepare-contract-media.mjs` | PASS; 13 final derivatives |
| `node scripts/verify-contract-visuals.mjs --clean-trials` | PASS; exact crop pixels, source hashes, approved copy/FAQ/legal notes and unrelated records preserved |
| `node scripts/review-contract-pages.mjs` | PASS; browser evidence, 23 local links and sampled contrast |
| Browser visual/structural checks | PASS; 28 target + 6 regression combinations |

There is no existing package test script or standalone automated test suite in this repository. Added verification scripts provide relevant assertions without a new dependency. Earlier verification runs exposed one lint naming rule in the new QA script and the scoped sizing/contrast issues described above; they were corrected before final verification. Builds emit the existing Node DEP0205 module.register deprecation warning; compilation and generation succeed. No secret/environment values were printed.

## 17. Known limitations and priorities

| Priority | Issue | Disposition |
| --- | --- | --- |
| P1 asset dependency, owner-approved omission | Mobile form/document originals are too narrow for readable crops; mobile offer-action source is not supplied | Omitted below 640 px. Request better originals in a separately reviewed asset update; do not restore Contract 1.0 or fabricate controls |
| P2 | Desktop form screenshots are also only 430–546 px wide; fine labels/detail text are soft when enlarged | Focused crops and readable explanatory copy used; higher-resolution originals would improve fidelity |
| P2 | Saved Contract 15/16 source captures do not include their management action rows | Preview/context shown; no invented actions; capture action rows in a future source update |
| P2, outside this phase | Homepage still uses `exported_contract_preview.png`; shared Tilbud/instruction consumers still use older contract illustrations | Identified, preserved because shared/out-of-scope; not relabelled Contract 2.0 and not globally replaced |
| P3 | Node module.register deprecation warning | Existing toolchain warning; no dependency changes made |

No application defect is marked resolved. New source omissions are accepted limitations of the owner's supplied material and instruction, not a claim of complete mobile visual coverage. Existing black editorial/white blog shells remain as established, rather than being redesigned in this phase.

## 18. Deferred PDF example integration

No newly supplied PDF was copied, uploaded, linked as a download or placed in public directories. The old PDF visual was removed from the target product/article placements and replaced with authentic in-app previews, clearly labelled. Existing PDF-not-yet-published copy, FAQ answers and independent legal-review notices remain unchanged.

Homepage's existing old PDF visual and other shared consumers are identified above; this phase did not redesign the homepage or instruction pages. Publishing authentic Contract 2.0 PDFs remains a separate authorization, including suitability/privacy/legal review and any download presentation. No fictional PDF or legal clause text was created.

## 19. Deferred financial example limitation

The owner replaced `contract-2-invoice-conversion.png` and `contract-2-invoice-conversion-mobile.png` with genuine captures containing values manually corrected in the application before capture. The optimized crops preserve their actual pixels: net 96,000 NOK, rate 25%, VAT 24,000 NOK, gross 120,000 NOK and source Contract 16. No retouching was used.

Captions explain manual correction and editable invoice preparation. They expressly do not demonstrate automatic calculation, guaranteed financial accuracy or a computed installment. The site does not imply that Offer 30/Contract 17 and Contract 16 form one continuous financial example.

Application financial-integrity implementation remains deferred. Neither application repository was inspected or modified during Phase 9C.2. The marketing integration is not evidence that those defects are fixed, and this report does not repeat or perform an application audit.

## 20. Remaining work for Phase 9C.3

1. Owner review of this visual integration, original-image selections and below-640 omissions.
2. Obtain readable, genuine mobile B2C/B2B creation, work/detail, payment, material and offer-to-contract captures; replace the omitted roles through the same pipeline.
3. Prefer higher-resolution desktop originals and capture saved-contract action rows for stronger legibility and management coverage.
4. Separately authorize PDF example integration if desired; retain independent legal review and privacy checks before publication.
5. Decide separately whether shared older homepage/Tilbud/instruction visual references should be updated; audit all shared consumers before doing so.
6. Keep application financial-integrity work in its separately authorized implementation phase. Refresh public examples only after corresponding application behavior is verified.
7. Commit/push/deployment remain owner-controlled future actions, not performed here.

### Owner-review evidence index

- [Desktop viewport](./phase-9c2-review/owner-review-desktop.jpg)
- [Mobile invoice viewport](./phase-9c2-review/owner-review-mobile-invoice.jpg)
- [Contract product four-width sheet](./phase-9c2-review/review-kontrakt-mal.jpg)
- [Example page four-width sheet](./phase-9c2-review/review-kontrakt-eksempel.jpg)
- [Contractor page four-width sheet](./phase-9c2-review/review-kontrakt-handverker.jpg)
- [Checklist four-width sheet](./phase-9c2-review/review-hva-skal-en-kontrakt-inneholde.jpg)
- [Workflow article four-width sheet](./phase-9c2-review/review-blogg-fra-tilbud-til-kontrakt-og-faktura.jpg)
- [Browser results](./phase-9c2-review/browser-results.json)
- [Link verification](./phase-9c2-review/page-verification.json)

All review screenshots are outside `public`. Full-page captures include the existing sticky-header behavior; focused views and viewport captures are provided for assessing actual content. No further implementation or deployment follows without owner review.

**PHASE 9C.2 COMPLETE — READY FOR OWNER REVIEW**
