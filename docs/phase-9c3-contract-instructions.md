# Phase 9C.3 — Contract instructions update

Date: 22 November 2026. Local implementation and verification only.

**PHASE 9C.3 COMPLETE — READY FOR OWNER REVIEW**

This status approves review of the website work, not publication. The mandatory financial acceptance gate recorded in `docs/phase-9c2a-invoice-copy-release-gate.md` remains outstanding. No application repository was inspected or modified, and no commit, push or deployment was performed.

## 1. Initial repository status

Verified repository root: `C:/Users/ddlas/Code/jobbleder-site`; package name: `jobbleder-site`; initial HEAD: `ec472f5f24ca2627c0c38a5b6e4efe5b9d378aae`.

The working tree already contained nine modified tracked files covering Phase 9B/9C contract pages, content, media manifest and preparation script. Existing untracked work included ContractMedia/ContractEditorialMedia, visual mappings, earlier reports and diagnostics, 13 source PNGs, 21 contract WebP files and review scripts. These were retained. This phase did not stage, remove or clean any files.

A separate pre-change snapshot recorded 321 application/content/media/script file hashes and the SEO/blog content records. The existing instruction guide file was also copied before editing. Investigation artifacts are outside the repository in:

`C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c3/`

## 2. Updated instruction sections

### `#opprett-kontrakt`

Seven concise steps cover opening Opprett → Kontrakt, checking the B2C/B2B contract type, choosing customer and optional project, dates and job name, work rows and optional detailed description, Fast/Time/Tilbud price basis and applicable MVA inclusion, payment terms, material responsibility, optional text changes and final review/PDF generation. Manual signing remains explicit. A payment plan is described as agreed terms, not automatic invoicing.

### `#lag-kontrakt-fra-tilbud`

Five steps cover opening an existing offer, selecting Opprett kontrakt, checking transferred customer/project information, checking the selected offer reference and price basis, completing contract-specific fields and reviewing/generating the document. Independent contract editing is explained without promising ongoing synchronization. The approved Tilbud 30 → Kontrakt 17 screenshots replace the older Tilbud 29 → Kontrakt 11 examples in this flow.

### `#kontrakt-til-faktura`

The existing nested section remains within `#lag-faktura-fra-dokument`. Five steps explain opening a saved contract, selecting Opprett faktura, checking the initialized invoice, verifying descriptions/quantities/unit prices/MVA, adjusting fields, reviewing net/MVA/total and choosing Lagre or Generer. The user downloads and shares the PDF. No independent error-free verification, automatic installment calculation or automatic delivery is claimed.

The Timeliste → Faktura and Tilbud → Faktura parts of the same parent guide are unchanged. All other guide objects, category labels, workflow navigation and the original 29-item instruction inventory are preserved.

## 3. Exact files changed in this phase

| File | Change |
| --- | --- |
| `content/instructionGuides.ts` | Updated the two contract guides and only the contract-to-invoice part of the shared conversion guide; optional typed `contractVisual` field. |
| `components/instructions/InstructionsHub.tsx` | Render the existing ContractMedia component for the selected steps. Existing media rendering and disclosures remain intact. |
| `components/product/contract/ContractMedia.tsx` | Added optional `omitOnMobile`, default false. Instructions use it to omit tiny mobile media while existing consumers retain their behavior. |
| `content/contractProductVisuals.ts` | Removed version terminology from one caption and one alt description. |
| `components/product/contract/ContractProductPage.tsx` | Removed two public version references; no other copy/layout change in this phase. |
| `content/seoPages.ts` | Removed five public version references, including an FAQ question; otherwise identical to the phase-entry content. |
| `content/blogPosts.ts` | Removed four public version references; otherwise identical to the phase-entry content. |
| `docs/phase-9c3-contract-instructions.md` | This report. |

These are changes relative to phase entry, not a staging list for all accumulated Phase 9 work. Existing source screenshots, optimized images, media manifests, CSS, route files, metadata configuration and legal-review notes were not changed in this phase. No dependency was added.

## 4. Public version terminology removed

Thirteen public occurrences of `Contract 2.0` were replaced with natural `Jobbleder` wording or `kontrakts-PDF`. The affected text comprised component paragraphs, SEO paragraphs/intro/FAQ, blog paragraphs, an image caption and alt text.

A case-insensitive search of `app`, `components`, `content` and `public` found no remaining public textual references matching Contract/Kontrakt + 2.0/v2. Internal versioned asset filenames and developer documentation remain unchanged. No unrelated version identifier was changed.

The SEO/blog preservation test compares complete records against the phase-entry snapshot with only these explicitly authorized terminology substitutions. It confirms metadata, H1s, links, section order and legal notices are otherwise unchanged. Existing structured-data rendering continues to use the corresponding visible content.

## 5. Visual assets reused

All paths below begin with `public/images/product/kontrakt/`. No image was generated, cropped, resized or recompressed in this phase.

| Step visual | Existing optimized file | Dimensions | Bytes | Original/full-size link |
| --- | --- | --- | ---: | --- |
| Creation | `optimized/jobbleder-contract-2-hero-cbbb9ad4befa.webp` | 534 × 260 | 19,084 | `source/contract-2-b2c-form.png` |
| Work description | `optimized/jobbleder-contract-2-work-02fb97838ded.webp` | 425 × 228 | 15,544 | `source/contract-2-b2c-form.png` |
| Pricing | `optimized/jobbleder-contract-2-pricing-c40023acaa65.webp` | 425 × 99 | 4,838 | `source/contract-2-b2c-form.png` |
| Offer action | `optimized/jobbleder-contract-2-offer-action-45c573d688c0.webp` | 840 × 714 | 56,702 | `source/offer-to-contract.png` |
| Contract from offer | `optimized/jobbleder-contract-2-offer-ca69d638cd2f.webp` | 434 × 510 | 32,690 | `source/contract-2-from-offer.png` |
| Invoice review | `optimized/jobbleder-contract-2-invoice-326624105cfc.webp` | 725 × 253 | 20,122 | `source/contract-2-invoice-conversion.png` |

Combined derivative size: 148,980 bytes. These are six existing assets, not six new downloads on every visit. Existing lazy loading is retained. Images have explicit dimensions, descriptive Norwegian alt text, captions and links to the unchanged full source images. Rendered widths never exceed native widths.

Below 640 px the six contract figures are omitted using the existing desktop-only pattern. In particular, the 162 px invoice mobile crop is not substituted or enlarged. All instructional text remains visible. The older contract screenshots are no longer used inside these three updated flows; unrelated instruction media and PDF examples remain available.

## 6. Anchor and navigation verification

- All 29 instruction disclosures remain present.
- Each target anchor occurs exactly once; no duplicate IDs were detected across the page.
- Direct hash navigation opens the enclosing disclosure and focuses its summary or nested heading.
- Native Enter and Space disclosure activation works; focus outlines remain visible.
- Every same-page anchor link resolves to an existing ID.
- 58 distinct local route/image links discovered on the instructions page returned HTTP 200, including 36 source-image paths. This is a local check, not a production availability claim.
- All four contract SEO routes returned HTTP 200. Existing incoming instruction links on `/kontrakt-mal` and `/kontrakt-handverker` resolve to the three correct sections and open the intended disclosure. The other two contract SEO routes currently have no direct instruction-anchor links; none were invented in this phase.
- The shared navigation, other document instructions and downloadable examples were not rewritten.

## 7. Responsive and visual verification

Tested the final production build in local headless Chrome at `http://127.0.0.1:3095`.

| Width | Light OS preference | Dark OS preference | Reduced motion | Expanded states |
| ---: | --- | --- | --- | --- |
| 390 px | Passed | Passed | Passed | Three target flows and all 29 disclosures |
| 768 px | Passed | Passed | Passed | Three target flows and all 29 disclosures |
| 1024 px | Passed | Passed | Passed | Three target flows and all 29 disclosures |
| 1440 px | Passed | Passed | Passed | Three target flows and all 29 disclosures |

The established instructions design intentionally remains a light surface under either operating-system preference. No theme redesign was introduced. Twenty-four screenshots record the three target anchors across all eight width/preference combinations. Representative rendered screenshots were visually inspected at each of the four widths, including mobile text-only presentation, the offer action image, invoice review and desktop creation.

No horizontal overflow, distorted images, clipped step controls or overlapping text was detected. The existing typography, section spacing, card structure and focus treatment are retained. Explicit image dimensions reserve image proportions; this phase did not run a numerical CLS/Lighthouse measurement and does not claim a measured score.

Screenshot and result filenames in the external evidence directory include:

- `390-light-opprett-kontrakt.png`
- `768-dark-lag-kontrakt-fra-tilbud.png`
- `1024-light-kontrakt-til-faktura.png`
- `1440-light-opprett-kontrakt.png`
- `browser-results.json` and `extra-results.json`

## 8. Accessibility results

Eight axe-core WCAG 2 A/AA and WCAG 2.1 A/AA runs, one per width/preference combination, tested the page with all 29 instruction disclosures and nested mobile examples expanded. All reported **zero violations**. Each run included one incomplete contrast review concerning the existing `aria-hidden` navigation chevron: the tool could not classify its non-text character. It is not a reported contrast failure. The chevron and its visible associated label are unchanged.

Manual/browser checks confirmed native disclosure keyboard operation, visible summary and screenshot-link focus indicators, descriptive full-size link names beginning with the visible label “Åpne hele bildet”, Norwegian alt descriptions and intact heading hierarchy. Target hash navigation moves focus to the intended summary/heading.

Reduced motion produces `scroll-behavior: auto`; the ordinary preference retains the pre-existing `smooth` behavior. No animation was introduced. Raster interface text remains limited by the owner-approved source resolution; automated DOM contrast checks do not validate every character inside screenshots. No screen-reader session or application workflow interaction was performed.

## 9. Build and test results

| Check | Result |
| --- | --- |
| `npx.cmd tsc --noEmit --incremental false` | Passed |
| `npm.cmd run lint` | Passed, no ESLint warnings/errors |
| `npm.cmd run build` | Passed; all 55 pages generated |
| `git diff --check` | Passed; Git emitted existing LF/CRLF conversion notices, not whitespace errors |
| Existing `scripts/verify-contract-visuals.mjs` at entry | Passed |
| Existing visual verifier after changes | Passed: 13 lossless derivatives and 93 original source files verified |
| Scoped source regression test | Passed: only the seven listed source files differ from phase entry; all 201 PNG/WebP files unchanged; unrelated guides/content preserved |
| Browser matrix | Passed: 24 target-flow cases plus eight expanded-page keyboard/accessibility checks |
| Local links | 58/58 returned HTTP 200 |

For the post-change existing visual verifier, a separate external expected-content snapshot allows only the authorized terminology substitutions; the original pre-change snapshot is preserved. This avoids overwriting Phase 9C.2 baselines or relaxing their legal-content/image assertions. The script itself was not changed. Both output reports were written outside the repository for this post-change run.

Build output retains the existing Node DEP0205 `module.register()` deprecation notices. Browser checks recorded no JavaScript page exceptions. The known local `/api/handshake` request returned HTTP 400 once per page load; no other HTTP failures were recorded. Analytics code was not changed, and production analytics was not tested in this local phase.

## 10. Remaining limitations and publication gate

- Owner-approved source resolution limits fine interface text; native-width presentation and original-image links are retained, with the small figures omitted on mobile.
- No new contract PDF capture was supplied. The instructions explain generation without presenting an older, different contract PDF as the export of the current form.
- Application controls and workflows were documented from the supplied requirements and existing authentic product evidence. No application repository or live application was accessed.
- **Financial correctness remains a mandatory publication acceptance criterion.** The relevant conversion/calculation fixes and real application regression tests must be completed and recorded before publishing the prepared contract-to-invoice marketing copy. Website checks and screenshot values do not establish application correctness. See `docs/phase-9c2a-invoice-copy-release-gate.md`.
- Existing legal-review notices remain applicable and unchanged.
- All verification here is local. No production deployment or production verification occurred.

## 11. Recommended next steps for the homepage

Obtain owner review of the three instruction anchors first. Before any later homepage copy release, satisfy the financial acceptance gate in the application workstream and retain the distinction between user-initiated conversion and automatic sending. A future homepage phase may link the contract introduction to these existing instruction anchors and use the already approved screenshots where they remain readable. No homepage layout, content or image work was started here.

Local review URLs:

- <http://127.0.0.1:3095/instruksjoner#opprett-kontrakt>
- <http://127.0.0.1:3095/instruksjoner#lag-kontrakt-fra-tilbud>
- <http://127.0.0.1:3095/instruksjoner#kontrakt-til-faktura>

**PHASE 9C.3 COMPLETE — READY FOR OWNER REVIEW**
