# Phase 9C.2A — Screenshot sharpness & visual quality correction

22 November 2026. Local implementation in C:/Users/ddlas/Code/jobbleder-site only. No commit, staging, push or deployment.

**PHASE 9C.2A COMPLETE — READY FOR OWNER REVIEW**

**Publication gate added after final copy review:** the contract-to-invoice calculation claim must not be published until the relevant application defects are fixed and financial regression tests pass. See [mandatory release acceptance](./phase-9c2a-invoice-copy-release-gate.md). Website validation and owner visual review do not satisfy that gate.

The unintended enlargement and very thin crop presentation are corrected. **The supplied originals still do not contain enough text detail for consistently readable 2× presentation. This is not a claim that all screenshots are now sharp or comfortable to read on high-density displays.** New authentic higher-resolution captures are required to remove that remaining limitation, especially the 162px mobile invoice. No detail was invented or recovered by enlarging a source.

## 1. Repository safety and preservation

Verified git root C:/Users/ddlas/Code/jobbleder-site and package.json name jobbleder-site before any implementation. The work was already dirty with Phase 9B/9C.2 changes. Entry hashes cover 465 existing files, including untracked source captures, approved media, components and reports. No other frontend/backend repository was read or modified during this phase. QA diagnostics are in the already authorized Codex visualizations workspace; all website changes are inside jobbleder-site.

The original source screenshots remain byte-identical. Existing Phase 9A, 9B and 9C.2 reports and review evidence were preserved. Header/footer, shared ProductMedia, global CSS, legal notices, FAQ records, metadata, canonicals, downloads and other SEO clusters are unchanged. Existing obsolete derivatives from earlier work were preserved; only three temporary derivative trials introduced during this task were removed after selecting final crop boundaries.

## 2. Root cause: full delivery pipeline

1. **Original PNG:** supplied desktop forms are only 430–546px wide; mobile forms are 65–79px wide, mobile saved documents 112–152px, and mobile invoice 162px. Small UI labels are already limited in the provided raster data. The origin of any earlier reduction before these files were supplied is not verifiable in this repository.
2. **Cropping:** previous pricing/material/action/offer-reference outputs were only 46/27/54/32px high. They removed much functional context. Cropping itself did not interpolate pixels, but could not add detail absent from the sources.
3. **WebP:** all 13 previous crops were already lossless. Fresh raw RGBA comparison against each original PNG crop returned identical pixels. Regenerating at a larger quality number would not restore extra text detail. WebP was not the demonstrated source of degradation.
4. **Next Image / picture:** current images use the existing unoptimized WebP path. There is no additional Next.js lossy optimization in this path, no generated density srcset and no blur placeholder. The invoice picture switches desktop/mobile at 639px; it does not select a higher-density alternative at DPR 2. Existing sizes text does not select another file without a corresponding srcset.
5. **CSS/browser:** contractMedia.module.css overrode the shared intrinsic maximum with max-width:100%, within an 850px wrapper. The mobile wrapper allowed 324px for the 162px asset. Thus a 341px payment crop rendered approximately 848px wide at 1440px; the 425px price strip also rendered approximately 848px. Maximum observed enlargement across the before matrix: **2.487×**. DPR 2 then stretches the same resource over twice as many physical pixels again.

The local correction gives each wrapper/figure its actual desktop/mobile pixel-width limit. Images may scale down to fit the column, but never enlarge past native width. No image-rendering:pixelated, CSS sharpening, blur, transforms, forced aspect ratio, source-value edit or synthetic UI was added. Shared image components were not redesigned.

## 3. Original source inventory and inherent limits

All 13 supplied Contract 2.0 originals were visually inspected at actual resolution and inventoried. Files below are relative to the authorized repository. Full hashes and role mapping are in checks/asset-inventory.json; entry hashes also independently preserve each original.

| Exact source path | Native dimensions | Bytes | Use / limit |
| --- | --- | --- | --- |
| public/images/product/kontrakt/source/contract-2-b2b-form.png | 430×720 | 65224 | b2b, payments |
| public/images/product/kontrakt/source/contract-2-b2b-form_mobile.png | 65×720 | 28687 | Retained original; omitted below 640px where unreadable, no enlargement/reconstruction |
| public/images/product/kontrakt/source/contract-2-b2b-in-documents.png | 358×720 | 66122 | savedB2B |
| public/images/product/kontrakt/source/contract-2-b2b-in-documents_mobile.png | 112×720 | 41362 | Retained original; omitted below 640px where unreadable, no enlargement/reconstruction |
| public/images/product/kontrakt/source/contract-2-b2c-form.png | 534×720 | 76893 | hero, work, pricing, materials |
| public/images/product/kontrakt/source/contract-2-b2c-form_mobile.png | 79×720 | 32375 | Retained original; omitted below 640px where unreadable, no enlargement/reconstruction |
| public/images/product/kontrakt/source/contract-2-b2c-in-documents.png | 487×720 | 78256 | savedB2C |
| public/images/product/kontrakt/source/contract-2-b2c-in-documents_mobile.png | 152×720 | 53101 | Retained original; omitted below 640px where unreadable, no enlargement/reconstruction |
| public/images/product/kontrakt/source/contract-2-from-offer-mobile.png | 78×720 | 31420 | Retained original; omitted below 640px where unreadable, no enlargement/reconstruction |
| public/images/product/kontrakt/source/contract-2-from-offer.png | 546×720 | 79214 | offer |
| public/images/product/kontrakt/source/contract-2-invoice-conversion-mobile.png | 162×720 | 40991 | invoiceMobile |
| public/images/product/kontrakt/source/contract-2-invoice-conversion.png | 851×403 | 63028 | invoice |
| public/images/product/kontrakt/source/offer-to-contract.png | 850×720 | 78532 | offerAction, offerOverview |

No larger matching Contract 2.0 original was found in the repository. Historical Contract 1.0 screenshots are not substitutes. The five unusably small mobile form/document sources remain omitted under the existing owner-approved policy. The mobile invoice remains an authentic mobile example at its native-width limit, with alt/caption and original link, but **its tiny internal text remains a capture-quality limitation**. It must not be represented as a successfully restored readable 2× screenshot.

## 4. Original → old crop → corrected lossless derivative

Every derivative is generated directly from its original PNG, never from another WebP. Sharp extract only; no resize. WebP settings inherited from the existing optimizer: **lossless:true, quality:94, effort:6**. The quality value does not make this a lossy encode. Post-generation decoding verifies exact original-crop pixels for all 13 entries.

| Asset role | Original dimensions / bytes | Before crop x,y,w,h | Before output / bytes | After crop x,y,w,h | After output / bytes |
| --- | --- | --- | --- | --- | --- |
| hero | 534×720 / 76893 | 0, 74, 425, 186 | 425×186 / 12458 | 0, 0, 534, 260 | 534×260 / 19084 |
| b2b | 430×720 / 65224 | 0, 58, 341, 142 | 341×142 / 7426 | 0, 0, 430, 200 | 430×200 / 12318 |
| work | 534×720 / 76893 | 0, 260, 425, 228 | 425×228 / 15544 | 0, 260, 425, 228 | 425×228 / 15544 |
| pricing | 534×720 / 76893 | 0, 490, 425, 46 | 425×46 / 2014 | 0, 490, 425, 99 | 425×99 / 4838 |
| payments | 430×720 / 65224 | 0, 448, 341, 145 | 341×145 / 7626 | 0, 418, 341, 199 | 341×199 / 10230 |
| materials | 534×720 / 76893 | 0, 559, 425, 27 | 425×27 / 982 | 0, 535, 425, 185 | 425×185 / 9014 |
| savedB2C | 487×720 / 78256 | 0, 0, 487, 359 | 487×359 / 15456 | 0, 0, 487, 359 | 487×359 / 15456 |
| savedB2B | 358×720 / 66122 | 0, 0, 358, 289 | 358×289 / 11218 | 0, 0, 358, 289 | 358×289 / 11218 |
| offerAction | 850×720 / 78532 | 0, 660, 840, 54 | 840×54 / 7918 | 0, 0, 840, 714 | 840×714 / 56702 |
| offerOverview | 850×720 / 78532 | 0, 0, 840, 540 | 840×540 / 48788 | 0, 0, 840, 540 | 840×540 / 48788 |
| offer | 546×720 / 79214 | 0, 503, 434, 32 | 434×32 / 2154 | 0, 68, 434, 510 | 434×510 / 32690 |
| invoice | 851×403 / 63028 | 120, 105, 725, 253 | 725×253 / 20122 | 120, 105, 725, 253 | 725×253 / 20122 |
| invoiceMobile | 162×720 / 40991 | 0, 324, 162, 315 | 162×315 / 11240 | 0, 301, 162, 341 | 162×341 / 12236 |

All manifest entries previously totalled 162,946 bytes; they now total **268,240 bytes**. The increase restores functional context rather than adding resolution by upsampling. This is an inventory sum, not a measured single-page transfer total. offerOverview is retained for compatibility but no longer selected; that earlier 840×540 derivative is not additionally downloaded by its former article placement. Active overview/action uses the same existing source crop/file, so no duplicate new image data is needed there.

## 5. Actual browser selection, CSS dimensions and DPR

Fresh headless Chrome observations, not inferred HTML: before and after each cover seven routes × four widths (390/768/1024/1440) × DPR 1/2 = **56 cases per stage**. after-browser.json records currentSrc, img src/srcset/sizes, picture sources/media, natural dimensions, rendered dimensions, DPR, density, filter, transform, loading and full-size link names for every Contract figure, including hidden ones. Visible-image statistics exclude intentionally omitted mobile figures.

Representative product observations at DPR 2 (1440px viewport, except invoiceMobile at 390px):

| Role | Before CSS px | After CSS px | Actual selected resource dimensions | Source px / CSS px after |
| --- | --- | --- | --- | --- |
| hero | 577.59×252.78 | 532.00×259.02 | 534×260 | 1.004 |
| b2b | 550.00×229.03 | 428.00×199.06 | 430×200 | 1.005 |
| work | 550.00×295.05 | 423.00×226.92 | 425×228 | 1.005 |
| pricing | 848.00×91.78 | 423.00×98.53 | 425×99 | 1.005 |
| payments | 848.00×360.58 | 339.00×197.83 | 341×199 | 1.006 |
| materials | 550.00×34.94 | 423.00×184.13 | 425×185 | 1.005 |
| savedB2C | 438.00×322.88 | 438.00×322.88 | 487×359 | 1.112 |
| offerAction | 848.00×54.50 | 838.00×712.30 | 840×714 | 1.002 |
| offer | 848.00×62.52 | 432.00×507.64 | 434×510 | 1.005 |
| invoice | 848.00×295.92 | 723.00×252.30 | 725×253 | 1.003 |
| invoiceMobile | 322.00×626.11 | 160.00×336.78 | 162×341 | 1.012 |

All visible corrected images stayed at or below native pixel width. Maximum corrected rendered/source width: **0.9976×**, including border effects. Native proportions are preserved; minor fractional CSS rounding is expected. Current computed image filter/transform are none. No low-resolution placeholder remains over a loaded image.

### Honest high-DPI assessment

There were 80 visible-image observations at DPR 2 after correction; **80 did not provide 2 source pixels per CSS pixel**. The browser selects the same native lossless file for each art-directed crop at DPR 1/2 because no true higher-resolution matching original exists. Adding a fake 2x URL or resizing a 162px image to 324px would not satisfy this requirement and was not done.

The native-width cap removes unintended enlargement; it does not solve upstream source resolution. For a 425px-wide readable field group at DPR 2, obtain at least 850 real source pixels for the same field group; for a 725px-wide invoice, approximately 1450px. For the mobile invoice to occupy around 324 CSS pixels sharply, capture at least 648 real pixels across that region. Record at browser/device native pixel resolution and **do not shrink a tall capture to a fixed 720px height**. Whether a prior tool did that reduction is unknown; this is a capture recommendation, not a claim about its provenance.

## 6. Crop and composition changes

- Hero/B2B include creation headers, type/customer/project/date/title context and summary instead of isolated upper fields.
- Price strip now includes complete price/VAT/payment/material fields (425×99 rather than 425×46).
- Material strip now includes complete surrounding payment and clause controls (425×185 rather than 425×27).
- Payment crop includes the price/payment fields, all three percentage rows and material control; no financial value changed.
- Offer action is now a full meaningful Offer 30 preview with identity, rows, totals and its actual create-contract action (840×714 rather than 840×54).
- Destination contract is now a contextual Contract 17 fragment, including customer, work and Offer 30 reference (434×510 rather than 434×32). Two context-bearing figures replace two disconnected thin strips; no compositing, pasted UI or altered application values.
- In the workflow article, the existing offerOverview variant selects that same contextual action image. One now-duplicate later offerAction block was removed; the contract result remains next to its explanation. No unrelated article text changed.
- Genuine mobile invoice crop now includes its full Lines heading and complete line/summary (162×341); it is capped at native width instead of doubled. Internal text limitations remain as stated.
- Existing work and saved-document crops were already contextual and were retained byte-for-byte.

## 7. Updated asset mapping

| Manifest key | Current resource path | New in this phase? |
| --- | --- | --- |
| hero | public/images/product/kontrakt/optimized/jobbleder-contract-2-hero-cbbb9ad4befa.webp | Yes |
| b2b | public/images/product/kontrakt/optimized/jobbleder-contract-2-b2b-9a2b3b4668e7.webp | Yes |
| work | public/images/product/kontrakt/optimized/jobbleder-contract-2-work-02fb97838ded.webp | No; existing derivative preserved |
| pricing | public/images/product/kontrakt/optimized/jobbleder-contract-2-pricing-c40023acaa65.webp | Yes |
| payments | public/images/product/kontrakt/optimized/jobbleder-contract-2-payments-d3df25846030.webp | Yes |
| materials | public/images/product/kontrakt/optimized/jobbleder-contract-2-materials-ac7fc43e9269.webp | Yes |
| savedB2C | public/images/product/kontrakt/optimized/jobbleder-contract-2-saved-b2-c-b8ceec4e775e.webp | No; existing derivative preserved |
| savedB2B | public/images/product/kontrakt/optimized/jobbleder-contract-2-saved-b2-b-df3ee5ae9f1d.webp | No; existing derivative preserved |
| offerAction | public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-action-45c573d688c0.webp | Yes |
| offerOverview | public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-overview-e2387e1b3c82.webp | No; existing derivative preserved |
| offer | public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-ca69d638cd2f.webp | Yes |
| invoice | public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-326624105cfc.webp | No; existing derivative preserved |
| invoiceMobile | public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-mobile-a038f2aeef10.webp | Yes |

Runtime aliases: creation→hero; business→b2b; savedPrivate→savedB2C; savedBusiness→savedB2B; invoice selects invoiceMobile only below 640px. offerOverview→offerAction now intentionally shares the complete preview. The unused older offerOverview resource is retained rather than deleting pre-existing local work. All source paths, financial values and original-image links remain authentic.

## 8. Contract-to-invoice public copy

Before, body, caption and note repeatedly discussed manual correction and lack of automatic price calculations. The corrected public text focuses on the editable invoice form:

> Bruk kontrakten som utgangspunkt for en faktura.

> Her er Kontrakt 16 kilden. Du kan tilpasse fakturalinjene, beløpene, MVA og betalingsinformasjonen i fakturaskjemaet.

Caption:

> Faktura fra Kontrakt 16. Linjer, beløp og MVA kan redigeres før dokumentet genereres.

One review instruction remains before PDF generation/manual sending. No automatic-correction, financial-accuracy guarantee, scheduled invoice or automatic-delivery promise was added. The shared alt text accurately describes the owner's supplied net 96,000 / VAT 24,000 / gross 120,000 example; the original screenshot pixels are unchanged. The report, rather than repetitive marketing copy, records that these amounts were manually corrected before capture.

## 9. Before/after visual comparisons

Representative actual browser figure screenshots at DPR 2, without re-encoding/compositing by this task:

| Region | Before | After |
| --- | --- | --- |
| creation | [Before PNG](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c2a/before-creation-1440-dpr2.png) | [After PNG](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c2a/after-creation-1440-dpr2.png) |
| pricing | [Before PNG](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c2a/before-pricing-1440-dpr2.png) | [After PNG](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c2a/after-pricing-1440-dpr2.png) |
| materials | [Before PNG](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c2a/before-materials-1440-dpr2.png) | [After PNG](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c2a/after-materials-1440-dpr2.png) |
| offerAction | [Before PNG](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c2a/before-offerAction-1440-dpr2.png) | [After PNG](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c2a/after-offerAction-1440-dpr2.png) |
| offer | [Before PNG](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c2a/before-offer-1440-dpr2.png) | [After PNG](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c2a/after-offer-1440-dpr2.png) |
| invoice | [Before PNG](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c2a/before-invoice-390-dpr2.png) | [After PNG](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c2a/after-invoice-390-dpr2.png) |

PNG figure captures preserve device pixels for inspecting rendering; they may display at different physical sizes in a viewer because the CSS dimensions changed. Compare them with the recorded native/CSS/DPR numbers, not arbitrary viewer zoom. Full-page JPEG captures show layout only and are **not** used to certify sharpness/compression quality. All seven routes have before/after full-page captures at 390 and 1440; all four requested widths have direct rendering/selection measurements.

Manual inspection confirms more complete field/action context, no stretched image aspect ratio and removal of the former oversized strips. It also confirms that some supplied fine print remains soft/small. This is explicitly not a blanket visual-quality pass; the owner must judge the remaining source-resolution limits.

## 10. Responsive, accessibility and technical verification

| Check | Executed result |
| --- | --- |
| TypeScript — npx.cmd tsc --noEmit --incremental false | Exit 0. |
| Full ESLint — npm.cmd run lint | Exit 0. |
| Production build — npm.cmd run build | Exit 0, Next 16.1.6, 55 pages. Existing Node DEP0205/module.register notices. |
| Existing relevant preservation/pixel test — node scripts/verify-contract-visuals.mjs | Passed: 13 lossless derivatives; 93 original source images unchanged; unrelated content and approved legal/FAQ sections retained. Output redirected to a new review directory; old evidence not overwritten. |
| Before browser | 56 successful page/width/DPR observations. |
| After browser | 56 successful observations across all four pages and three core articles. No horizontal overflow or observed page runtime error. |
| Image proportions/scaling | No visible image enlarged past native width; currentSrc/picture selection recorded for both DPRs. No CSS blur/transform. |
| Layout stability | Maximum sampled after non-input CLS 0; this is lab evidence, not field Core Web Vitals. |
| Accessibility/theme checks | 14 additional axe runs: 390px dark/reduced motion and 1440px light/ordinary motion on all seven routes. No confirmed violation; focus outlines checked on visible full-size links; no observed console error. Incomplete axe rules remain manual review, not certification. |
| Original-image links | 7 original resources opened in Chrome from product figures, all 200 with actual native image dimensions. |
| Metadata/structure | Target titles/canonicals/H1 remain consistent before/after; existing page layouts and shared navigation/footer remain unchanged. |
| Whitespace/scope | git diff --check passes. No staging/commit/push/deploy. |

The first sandboxed build stalled during compile and was interrupted. A preview attempt before completion failed because BUILD_ID was absent. The successful baseline/final builds ran with the approved escalation, then fresh previews were started. Failed attempts are not counted as test passes. No production verification, authenticated application action, tracking-event test or Lighthouse score is claimed. Browser tracking endpoints were intercepted to avoid unnecessary events.

## 11. Remaining limitations and capture request

1. **Text detail / 2× remains limited by the supplied originals.** Lossless regeneration preserves, but cannot recover, missing fine detail. The mobile invoice is still intrinsically too narrow for comfortable detailed reading. The five tiny mobile form/document sources remain omitted.
2. Request native-resolution desktop/browser screenshots and mobile captures of the same authentic states and values. Prefer tightly framed complete field groups captured at real 2× density, not resized copies of the current PNGs. Preserve original files; no synthetic redraw. Match invoice values to the owner's 96,000/24,000/120,000 example without claiming automated correction.
3. Until those captures exist, review the smaller native-width presentation as an interim correction, not a completed high-DPI media library. Full-size links still open only the supplied original resolution.
4. Existing LEGAL_REVIEW_PENDING disclosures are unchanged. Visual processing neither reviews contract clauses nor verifies legal compliance.
5. Older unreferenced derivative files remain preserved to respect pre-existing local work. A later explicitly approved staging plan should include the final manifest's required resources and avoid superseded trials/diagnostics.

## 12. Exact files modified and created in this phase

Modified relative to the entry snapshot:

- components/product/contract/ContractMedia.tsx
- components/product/contract/contractMedia.module.css
- content/contractProductVisuals.ts
- scripts/verify-contract-visuals.mjs
- components/product/contract/ContractProductPage.tsx
- content/blogPosts.ts
- content/contractProductMedia.json
- scripts/prepare-contract-media.mjs

New final lossless WebP files:

- public/images/product/kontrakt/optimized/jobbleder-contract-2-hero-cbbb9ad4befa.webp
- public/images/product/kontrakt/optimized/jobbleder-contract-2-b2b-9a2b3b4668e7.webp
- public/images/product/kontrakt/optimized/jobbleder-contract-2-pricing-c40023acaa65.webp
- public/images/product/kontrakt/optimized/jobbleder-contract-2-payments-d3df25846030.webp
- public/images/product/kontrakt/optimized/jobbleder-contract-2-materials-ac7fc43e9269.webp
- public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-action-45c573d688c0.webp
- public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-ca69d638cd2f.webp
- public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-mobile-a038f2aeef10.webp

Created repository report: docs/phase-9c2a-visual-quality-correction.md. No original PNG changed or removed. The QA scripts' new optional CONTRACT_REVIEW_DIRECTORY setting preserves the prior default while allowing this phase's evidence to stay separate from approved Phase 9C.2 artifacts. scripts/review-contract-pages.mjs itself is unchanged; its captured old rows are not represented as fresh test results.

External diagnostics: baseline.json, before-browser.json, after-browser.json, accessibility.json, summary.json, before/after figure PNGs, full-page JPEGs, and checks/asset-inventory.json, checks/verification.json, checks/optimization-results.json plus the copied earlier baseline. External phase9c2a-browser.cjs, phase9c2a-extra.cjs and phase9c2a-report.cjs reside in the parent Codex visualization directory. These are investigation files, not production media or staging recommendations.

Local preview: [Kontrakt page](http://127.0.0.1:3094/kontrakt-mal). Also inspect /kontrakt-eksempel, /kontrakt-handverker, /hva-skal-en-kontrakt-inneholde and the three core contract articles on the same local origin.

**PHASE 9C.2A COMPLETE — READY FOR OWNER REVIEW**
