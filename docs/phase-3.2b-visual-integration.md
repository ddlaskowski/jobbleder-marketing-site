# Jobbleder Phase 3.2B — implementation and verification

## 1. Implementation summary

Integrated approved authentic screenshots on the homepage using the existing Phase 3.1 layout and shared media primitive. Preserved section order, site navigation, useful product detail text, existing Premium invoice image, SEO configuration, and invoice landing page layout. No dependencies added. No commit, push, or deployment.

## 2. Files created

- `content/homeProductMedia.json`: generated asset manifest containing source path, SHA-256, crop (or null for the full image), output dimensions, WebP format, and bytes.
- `scripts/prepare-home-media.mjs`: reproducible homepage image preparation, importing the existing invoice image pipeline without running its CLI.
- `docs/phase-3.2b-visual-integration.md`: this delivery report.
- Nine content-hashed WebP derivatives listed below.

## 3. Files modified in this phase

- `components/home/Homepage.tsx`: image integration, explicit four-workflow overview, captions, original-image links, pricing structure and manual signing text.
- `components/home/home.module.css`: wrapping workflow labels and spacing for the workflow illustration.
- `components/site/Primitives.tsx`: art-directed media, intrinsic dimensions, original-image links, native width limits, and retention of detail content alongside media.
- `components/site/site.module.css`: responsive media width limits and compact text details, reusing existing colors and spacing.
- `components/product/invoice/ProductHero.tsx`: alt-text correction only.
- `scripts/optimize-invoice-media.mjs`: exported reusable preparation function, optional output directory/lossless encoding/resize, and CLI execution guard. Existing invoice defaults remain unchanged.

The pre-existing modification to `app/page.tsx`, untracked Phase 3.1 components, and supplied source directories were present before this phase. Their Git status must not be mistaken for newly created Phase 3.2B work.

## 4. Generated derivatives

All outputs are lossless WebP; no screenshots were enlarged or reconstructed. The manifest records full provenance and crop coordinates. Sizes below are actual encoded bytes divided by 1024.

| Directory under `public/images/product/` | Filename | Dimensions | Bytes | KiB |
|---|---|---:|---:|---:|
| `overview/optimized/` | `jobbleder-home-overview-e9a124620412.webp` | 1918×1077 | 77266 | 75.5 |
| `overview/optimized/` | `jobbleder-home-overview-mobile-880aee00ae06.webp` | 392×216 | 5688 | 5.6 |
| `timeliste/optimized/` | `jobbleder-home-timelist-1ed52e78b8c6.webp` | 608×512 | 49762 | 48.6 |
| `timeliste/optimized/` | `jobbleder-home-timelist-mobile-208a0fd31c80.webp` | 300×104 | 7234 | 7.1 |
| `tilbud/optimized/` | `jobbleder-home-offer-59f2cd7e7af2.webp` | 506×360 | 19060 | 18.6 |
| `kontrakt/optimized/` | `jobbleder-home-contract-192687f50086.webp` | 638×141 | 2452 | 2.4 |
| `kontrakt/optimized/` | `jobbleder-home-contract-mobile-6413439017d3.webp` | 340×141 | 1910 | 1.9 |
| `timeliste/optimized/` | `jobbleder-home-workflow-0ee4dab45f71.webp` | 1256×522 | 53442 | 52.2 |
| `timeliste/optimized/` | `jobbleder-home-workflow-mobile-4743a1295445.webp` | 218×226 | 10896 | 10.6 |

Total new derivatives: 227710 bytes (222.4 KiB). A page downloads only its selected variants. Including the unchanged 51534-byte Premium invoice derivative, homepage screenshot payload is approximately 94.1 KiB at 375 px, 164.0 KiB at 768 px, and 247.6 KiB at 1280/1440 px, excluding HTTP overhead. Below-fold images remain lazy loaded.

Regenerate from the project root with `node scripts/prepare-home-media.mjs`. Original PNGs remain untouched. Content-hashed outputs are not automatically deleted, avoiding accidental removal of assets referenced elsewhere.

## 5. Homepage visual integrations

- Hero: the same dashboard, optimized losslessly. Mobile shows its authentic work-registration and invoice quick actions.
- Faktura: the existing Premium PDF screenshot and explicit Premium caption. Its full-image link points to the original PNG. Free/Premium branding text remains clear.
- Timeliste: desktop crop preserves Timeliste 261, work entries, extra-work markers, summary and document actions. Compact screens show the existing descriptions/extra-work markers, with access to the complete original.
- Tilbud: complete 506×360 supplied document crop, natural landscape ratio, described as a document excerpt rather than an A5 feature.
- Kontrakt: pricing selector with Fast, Time and Tilbud intact. The same generic image primitive and manifest can later accommodate an authentic finished contract.
- Workflows: four separate accessible text paths, explicitly available free. A broad screenshot below the list shows Timeliste 261 as source, ordinary and extra hours on separate lines, and the summary. Compact screens show the summary/source panel. No kilometer-conversion claim.
- Onboarding, resources and final CTA: existing architecture retained; no extra imagery.

## 6. Responsive behavior and performance

The hero switches to its focused image below 640 px. Timeliste, Kontrakt and workflow imagery use compact variants below 1024 px because the existing two-column grid makes full panels too small at tablet widths. The grid itself remains unchanged.

Native source dimensions and CSS maximum widths prevent enlargement. `<picture><source>` includes each variant's intrinsic width and height; the browser reserves its natural ratio. No forced portrait ratio is applied to the offer. The existing portrait invoice treatment is retained.

Explicit art direction delivers the appropriate prepared WebP directly; `sizes` is not relied on to generate responsive versions of an `unoptimized` asset. Only the hero uses high fetch priority. It uses eager loading inside the picture to avoid a separate, mismatched preload of its desktop fallback. Other homepage images load lazily. No Next image configuration changes were necessary.

## 7. Accessibility

Each picture has one image and one Norwegian alternative description accurate for both variants. Captions identify compact views. Original-image links have descriptive accessible names and normal same-tab destinations; no modal library was added.

Useful detail headings and lists are preserved as HTML beside the media. Pricing structures, manual contract signing, workflow sequence, free availability, and ordinary/extra invoice lines are described in HTML. Workflow arrows are decorative and accompanied by screen-reader text saying “til”.

The invoice hero uses a shared description mentioning customer and issue date, accurate for the full editor and the existing mobile crop. The mobile descriptor also no longer falsely names a “Ny faktura” action. The shared invoice frame and its layout were not changed.

## 8. Verification

- `npx.cmd tsc --noEmit --incremental false`: passed.
- `npm.cmd run lint`: passed.
- `npm.cmd run build`: passed, including TypeScript and generation of 55 static pages.
- Production Chrome checks at 375, 768, 1280 and 1440 px for `/` and `/fakturaprogram-gratis`: passed all eight cases.
- Homepage visually inspected at all four widths. Invoice landing page visually inspected at mobile and desktop extremes, with automated layout/image checks at all four widths.
- No horizontal overflow; natural homepage image proportions (excluding intentional existing invoice paper framing); no homepage image upscaling; source switching; original-image HTTP 200 responses; captions/alt text; preserved detail text; four workflows; canonical URLs; and application CTA links checked.
- Homepage hero high priority and below-fold lazy loading checked. At 375 px the desktop hero, timelist and workflow derivatives were not requested. Observed non-input layout shift was 0 in all eight local checks.
- Source hashes matched the manifest. Decoded pixels of all nine outputs exactly matched their corresponding original image/crop, confirming lossless preservation.

Evidence is outside the repository at `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase32-evidence/`: full-page PNGs for all eight cases and `results.json`. The browser script is in the parent directory as `phase32-browser.cjs`.

The initial sandboxed build stalled and was stopped; the production build passed outside the sandbox. Port 3014 was already occupied, so verification used a separate server at `http://127.0.0.1:3015`.

## 9. Remaining risks and limitations

- The existing `/api/handshake` tracking endpoint returned HTTP 400 in several local browser cases. This is recorded separately in browser results, was not changed, and is not a layout/image failure. Other observed HTTP errors and JavaScript exceptions were absent.
- Full document screenshots contain small text at marketing widths. Captions, retained HTML and original-image links carry the important information; the images are not intended as readable, interactive application forms.
- Local Chrome checks used DPR 1 and no network throttling. They establish local layout behavior, not field Core Web Vitals across devices or browsers.
- Node emitted the existing toolchain `module.register()` deprecation warning during build; it did not prevent compilation.

## 10. Review decisions

No implementation approval is required to complete this phase. The implemented result is ready for the requested visual review before publication. No publication action has been taken.
