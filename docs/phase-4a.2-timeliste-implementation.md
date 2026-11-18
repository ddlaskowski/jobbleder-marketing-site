# Phase 4A.2 — Timeliste product page

## Outcome and scope

Implemented a dedicated local product landing page at `/timeliste-mal`. It presents Registreringer → Timeliste → Faktura, direct timelist creation, four separate hour/kilometer categories, authentic PDF examples and the confirmed Free/Premium distinction. The ten sections follow the approved Timeliste narrative rather than duplicating the invoice page.

Local production preview: **http://127.0.0.1:3020/timeliste-mal**.

No commit, push or deployment. Visual approval is still pending. No dependencies added.

Phase 4A.1 was delivered in the preceding conversation, not as a repository file. No `docs/*4a*` audit file existed at the start of this implementation; the conversation audit and supplied Phase 4A.2 specification were used.

## Implementation

- Added an early-return branch for only `timeliste-mal` in the existing SEO route. Metadata generation and all other branches remain unchanged.
- Reused `SiteHeader`, `SiteFooter`, `SectionContainer`, `ApplicationCTA`, `ResourceLink`, `ProductMedia` and existing site tokens, focus styles and reduced-motion handling. Shared primitives and existing product pages were not edited.
- Kept the existing SEO record authoritative for educational sections, the original three FAQs and both PDF download links. Added five confirmed FAQs through a single data source shared by native `details/summary` and one FAQPage JSON-LD block.
- Retained the entire timeliste topic cluster and the six existing related product-guide destinations. Added the contextual Faktura link and verified instruction anchor from source.
- Kept title, description, canonical `https://www.jobbleder.no/timeliste-mal`, pillar status, sitemap and robots configuration unchanged. There is one H1 and ten main sections.
- Both existing PDF links retain their URLs and open in a new tab. The blank template remains separate from generated-document image examples.
- The five new images show the same demonstration: Timeliste 264 and Faktura 111. The additional work-registration image is explicitly identified as a separate registration example.
- Demonstration quantities/rates/totals are presented as example values, never product defaults. Extra work is user-marked, not described as automatic overtime. No automatic invoice issuing/sending, employee accounts, payroll, approval or GPS claims were added.

## Exact source-file changes

Modified:

1. `app/(seo)/[slug]/page.tsx` — one import and one slug-specific branch.

Created:

1. `components/product/timelist/TimelistProductPage.tsx`
2. `components/product/timelist/timelistProduct.module.css`
3. `content/timelistProduct.ts`
4. `content/timelistProductMedia.json`
5. `scripts/prepare-timelist-media.mjs`
6. `docs/phase-4a.2-timeliste-implementation.md`

The ten created image derivatives are listed below. Existing unrelated untracked assets were left untouched. The six supplied source PNGs used by this page already existed before implementation; they were not created or edited by this task:

- `public/images/product/timeliste/source/new_timelist_form_4_different_entries.png`
- `public/images/product/timeliste/source/timelist_4_different_entries_in_documents_menu.png`
- `public/images/product/timeliste/source/exported_timelist_4_different_entries.png`
- `public/images/product/timeliste/source/new_invoice_form_4_different_entries.png`
- `public/images/product/timeliste/source/exported_invoice_4_different_entries.png`
- `public/images/product/timeliste/source/work_entries_panel_with_2_entries_marked.png`

These source files are currently untracked and must be included deliberately in a future approved release. None were staged during this phase.

## Verification completed

| Check | Result |
|---|---|
| TypeScript | PASS — `npx.cmd tsc --noEmit --incremental false` |
| Full ESLint | PASS — `npm.cmd run lint` |
| Production build | PASS — `npm.cmd run build`, 55 static pages |
| Patch whitespace | PASS — `git diff --check` |
| Original image inspection | All five new PNGs inspected at actual dimensions; selected older registration image inspected; crop outputs inspected |
| Local rendered page | Native Chrome successfully loaded the production build and exposed all ten sections, six image links, download links, tables and eight native FAQ controls |
| Image integrity | PASS — all ten WebPs have decoded pixels identical to their source or exact source crop; manifest source hashes match current PNGs |
| Image delivery | PASS — ten derivative URLs and six original-image links return 200; derivative responses match local file bytes |
| PDF downloads | PASS — local blank PDF returns 200, application/pdf, 36,150 bytes; external seven-day PDF returns 200, application/pdf, 334,287 bytes; both have PDF signatures |
| Timeliste metadata/structure | PASS — unchanged title/canonical, one H1, ten sections, eight FAQs with exact HTML/JSON-LD question-and-answer parity, one FAQPage block |
| HTTP regression checks | PASS — homepage, Faktura, Timeliste PDF cluster page, Tilbud, Kontrakt, sitemap and robots return 200; canonical values are on www.jobbleder.no |
| Source regression checks | PASS — SHA-256 comparison against all tracked files before implementation found only the intended two-line route change; homepage, Faktura, shared components, SEO content, dependency/config files and download PDF unchanged |

Build output included a Node `module.register()` deprecation warning. It did not fail the build.

## Browser verification limitation and user decision

The in-app browser could not reach localhost, despite the local server returning HTTP 200 outside the sandbox. A subsequent browser invocation expired. After recovery, native Chrome successfully rendered the page, but the alternative native DevTools control then failed as its window became minimized/stale.

The user was asked whether to use a local Playwright run as a fallback. The user explicitly selected **“Behold bare kontrollene som er fullført”**. No Playwright/CDP fallback or further browser interaction was performed after that answer.

Consequently, the following are **NOT verified** in this phase:

- Full browser matrix at 375, 768, 1280 and 1440 px.
- Controlled light/dark preference and reduced-motion runs.
- Measured mobile overflow, image overlap, clipping and layout shift.
- Keyboard traversal, skip-link activation and visible-focus interaction checks.
- Click-through behavior for image links and downloads (HTTP checks are reported separately).
- Fresh browser regression matrix for homepage and Faktura.

No completed desktop/mobile screenshot set is delivered. The one native inspection was an intermediate render, not a finished visual-approval capture. Responsive CSS, semantic markup, intrinsic image dimensions and loading behavior were reviewed in source, but that does not substitute for the missing browser matrix.

The native console displayed the existing local `/api/handshake` HTTP 400. This is consistent with the previously documented local analytics/TLS limitation. No analytics code was changed; a clean-console result is not claimed.

## Image processing

Regenerate with `node scripts/prepare-timelist-media.mjs`. The script imports the existing optimizer, uses lossless WebP, retains native resolution, records SHA-256 source provenance, and writes only new hashed derivatives plus its manifest. No original PNG is modified, rescaled, composited or redrawn. No portrait frame is imposed on app images.

Desktop uses focused product panels. Mobile uses authentic crops of the hero, selected registrations, all four timelist rows and all four invoice lines. The two document examples remain complete at every width. Every figure includes a caption and a full original-image link whose accessible name includes its visible label. The hero is eager/high priority; the other five images are lazy loaded. Source dimensions reserve natural aspect ratios.

### Inspected source inventory

All source paths below are under `public/images/product/timeliste/source/`.

| Exact filename | Dimensions | Bytes |
|---|---:|---:|
| `new_timelist_form_4_different_entries.png` | 654×720 | 82084 |
| `timelist_4_different_entries_in_documents_menu.png` | 1280×720 | 177017 |
| `exported_timelist_4_different_entries.png` | 508×720 | 46476 |
| `new_invoice_form_4_different_entries.png` | 840×720 | 92374 |
| `exported_invoice_4_different_entries.png` | 508×720 | 58619 |
| `work_entries_panel_with_2_entries_marked.png` | 1280×720 | 104952 |

### Created derivatives

All derivative paths below are under `public/images/product/timeliste/optimized/`. Crop values are source pixels `(left, top, width, height)`; no resize or upscaling is applied.

| Key | Exact derivative filename | Dimensions | Bytes | Source / crop |
|---|---|---:|---:|---|
| hero | `jobbleder-timelist-hero-6426b7a8e7d6.webp` | 624×646 | 46052 | `timelist_4_different_entries_in_documents_menu.png` / (646,54,624,646) |
| heroMobile | `jobbleder-timelist-hero-mobile-b1225eb33266.webp` | 520×222 | 14784 | `new_timelist_form_4_different_entries.png` / (0,96,520,222) |
| registrations | `jobbleder-timelist-registrations-b7636e83c465.webp` | 1070×370 | 35438 | `work_entries_panel_with_2_entries_marked.png` / (200,64,1070,370) |
| registrationsMobile | `jobbleder-timelist-registrations-mobile-1c7e61037ffa.webp` | 590×166 | 11708 | `work_entries_panel_with_2_entries_marked.png` / (204,214,590,166) |
| form | `jobbleder-timelist-form-0ef832050c88.webp` | 654×720 | 47768 | `new_timelist_form_4_different_entries.png` / full |
| formMobile | `jobbleder-timelist-form-mobile-683400a49c39.webp` | 520×548 | 33176 | `new_timelist_form_4_different_entries.png` / (0,172,520,548) |
| timelistPdf | `jobbleder-timelist-timelist-pdf-2ac9500c19b9.webp` | 508×720 | 22154 | `exported_timelist_4_different_entries.png` / full |
| invoiceForm | `jobbleder-timelist-invoice-form-8831711a4a0c.webp` | 840×720 | 52880 | `new_invoice_form_4_different_entries.png` / full |
| invoiceFormMobile | `jobbleder-timelist-invoice-form-mobile-68ad22496f40.webp` | 668×480 | 29764 | `new_invoice_form_4_different_entries.png` / (0,240,668,480) |
| invoicePdf | `jobbleder-timelist-invoice-pdf-f5e18354a415.webp` | 508×720 | 30270 | `exported_invoice_4_different_entries.png` / full |

Total new derivatives: **323,994 bytes (316.4 KiB)**. Based on the source selection rules, one complete page load selects about **234,562 bytes (229.1 KiB)** of product images on desktop or **141,856 bytes (138.5 KiB)** below 640 px, excluding headers and other site assets. These are file-size calculations, not measured browser transfer or performance scores. Superseded trial crops created during this task were removed; pre-existing files were retained.

The complete source and derivative filenames, source dimensions/bytes/SHA-256 and crop coordinates are also recorded in `content/timelistProductMedia.json`.

## Remaining work before approval/release

The local implementation is ready for visual review, **not verified as deployment-ready**. The missing browser matrix, desktop/mobile captures, keyboard/focus checks and visual regressions should be completed when browser testing is available and authorized. Product fine print inside screenshots may require opening the original image, especially on small screens. Core workflow/category information is also provided in visible HTML.

No functionality in the authenticated product was exercised, no account was created and no invoice was issued. This phase implements and verifies marketing presentation only.
