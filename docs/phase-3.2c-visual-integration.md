# Phase 3.2C — local visual integration

## Implementation

The Kontrakt introduction now shows the complete authentic exported contract, including its manual signature lines. Existing heading, descriptive text, links, pricing information and detail list remain. The caption explains downloading, printing and manual signing; electronic signing is not implied.

The workflow form screenshot and its visible text-card list are replaced by the supplied infographic. All four supported paths are retained:

1. Registreringer → Timeliste → Faktura
2. Timeliste → Faktura
3. Tilbud → Kontrakt → Faktura
4. Tilbud → Faktura

The existing section heading, introduction, free-version explanation and instruction link remain. A native “Les dokumentflytene som tekst” disclosure provides the four sequences in accessible HTML without repeating the diagram in adjacent visible cards. Its keyboard focus uses the existing focus styling.

## Exact files modified in this phase

Paths are relative to `C:/Users/ddlas/Code/jobbleder-site/`.

- `components/home/Homepage.tsx`
- `components/home/home.module.css`
- `components/site/Primitives.tsx`
- `content/homeProductMedia.json`
- `scripts/prepare-home-media.mjs`

No other existing files changed relative to a SHA-256 snapshot taken before Phase 3.2C. The build-generated `next-env.d.ts` was restored byte-for-byte to that snapshot after verification. Pre-existing working-tree changes from earlier phases remain untouched.

## Exact files created

- `public/images/product/kontrakt/optimized/jobbleder-home-contract-document-249c17de7105.webp`
- `public/images/product/docflow/optimized/jobbleder-home-document-flow-940f0666f4cc.webp`
- `public/images/product/docflow/optimized/jobbleder-home-document-flow-compact-a1de69c9b05c.webp`
- `public/images/product/docflow/optimized/jobbleder-home-document-flow-mobile-3dbe42d3e7a8.webp`
- `docs/phase-3.2c-visual-integration.md`

The three supplied source PNGs already existed when this phase began and are not newly created implementation files. Previous phase derivatives remain on disk; unrelated files were not deleted.

## Image optimization report

All four new derivatives are lossless WebP. The existing preparation script and Sharp installation were reused. No dependencies or image configuration were added. Full source SHA-256, source dimensions/bytes, output paths/dimensions/bytes, format, and crop coordinates are recorded in `content/homeProductMedia.json`.

| Source under `public/images/product/` | Source pixels | Source bytes | Derivative filename | Output pixels | Output bytes | Reduction |
|---|---:|---:|---|---:|---:|---:|
| `kontrakt/source/exported_contract_preview.png` | 508×720 | 73,859 | `jobbleder-home-contract-document-249c17de7105.webp` | 508×720 | 37,384 | 49.4% |
| `docflow/source/jobbleder_docflow.png` | 1536×1024 | 1,605,526 | `jobbleder-home-document-flow-940f0666f4cc.webp` | 1536×1024 | 1,005,366 | 37.4% |
| `docflow/source/docflow_cropped.png` | 1442×597 | 982,488 | `jobbleder-home-document-flow-compact-a1de69c9b05c.webp` | 1442×597 | 610,516 | 37.9% |
| `docflow/source/docflow_cropped.png` | 1442×597 | 982,488 | `jobbleder-home-document-flow-mobile-3dbe42d3e7a8.webp` | 1000×597 | 408,308 | 58.4% |

The mobile derivative uses `{left:0, top:0, width:1000, height:597}`. It removes the repeated explanation column to the right of the diagram while retaining every node and arrow in all four paths. The other three outputs use the complete input (`crop: null`). No image was upscaled or reconstructed. Decoded pixels of every derivative were compared with its source or exact source crop and matched. All supplied source files retained their baseline hashes.

The manifest regeneration also reproduces the previously integrated hero, Timeliste and Tilbud derivatives without byte changes. Regenerate with `node scripts/prepare-home-media.mjs`.

## Responsive choices

| Viewport | Contract | Infographic |
|---|---|---|
| 375 px | Complete document within the available width; original-size image link for small clauses. | Diagram-only mobile derivative: all four paths, no repeated explanation column. |
| 768 px | Contract section stacks its media below the text, allowing the document to reach its native 508 px width instead of becoming a tiny column. | Supplied cropped variant, preserving all four paths and their explanatory column. |
| 1280 px | Existing two-column composition; complete document capped at 508 px. | Full infographic with title, four paths and footer. |
| 1440 px | Same balanced two-column composition. | Full infographic within the existing 1152 px content width. |

The hero, Faktura, Timeliste and Tilbud integrations are preserved. All homepage sections and headings remain in their existing order. Other product grids are unchanged. The contract uses its natural 508:720 proportions rather than the small portrait invoice frame.

`ProductMedia` supports an optional tablet source between the mobile and desktop sources. The mobile variant is used below 640 px and the supplied compact variant below 1200 px. These breakpoints were selected after evaluating the available text and diagram width: at phone width, removing only the infographic header/footer was insufficient; removing the duplicate explanation column increases the scale of the actual paths.

Each `<source>` declares intrinsic dimensions. Images retain their natural proportions and remain lazy loaded below the fold. The existing hero loading behavior is unchanged. The selected source is delivered directly; `sizes` is not treated as an automatic responsive optimizer for `unoptimized` WebP.

## Validation

- TypeScript: `npx.cmd tsc --noEmit --incremental false` passed.
- ESLint: `npm.cmd run lint` passed.
- Production build: `npm.cmd run build` passed, including TypeScript and 55 generated static pages.
- Production Chrome: 24 passing cases, covering `/` and `/fakturaprogram-gratis`, at 375, 768, 1280 and 1440 px, in light, dark and reduced-motion settings.
- Observed non-input layout shift: 0 in every local case.
- No page-level horizontal overflow or image upscaling. Natural aspect ratios and source switching passed. All full-image links returned HTTP 200.
- Complete contract and all four infographic paths visually inspected at each requested width. No overlapping nodes, text, or arrows and no missing conversion path.
- Native text disclosure opens/closes correctly. Norwegian alt text is accurate; manual signature text is present. Existing application CTA destinations remain.
- Homepage headings and canonical URLs match Phase 3.2B. The Faktura landing page image sources, dimensions, positions, alt text and CTA destinations match the previous verification at all four widths.
- SEO metadata sources, canonical helper, sitemap, robots, SEO routes, internal navigation components and all source PNGs were unchanged by file-hash comparison. Contract and workflow resource links are retained.
- The homepage keeps its existing explicit light surface when the OS preference is dark. Image geometry remains the same in light/dark/reduced modes. Reduced-motion still sets scrolling to `auto`, and no running animations were detected.

Browser script and evidence are outside the repository:

`C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase32c-browser.cjs`

`C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase32c-evidence/`

The evidence includes full-page screenshots for all cases, contract/workflow section screenshots at all four widths and `results.json`.

## Remaining limitations

- Contract fine print and infographic descriptions are small at phone width. The complete contract and complete diagram remain visible; original-size links and the optional HTML workflow list provide readable access to details. No path is removed to make the graphic fit.
- Lossless preservation leaves the full infographic at approximately 982 KiB; it is lazy loaded. Compact and phone variants reduce this to approximately 596 and 399 KiB. No lossy compression was introduced to trade text/icon quality for a smaller file.
- The existing `/api/handshake` tracking route continues to return HTTP 400 in local checks, as observed in Phase 3.2B. This is recorded separately and was not changed. Other observed HTTP failures and JavaScript exceptions were absent.
- Tests used local Chrome at DPR 1 without network throttling, not a cross-browser device lab or field performance measurement.

## Local preview and approval

Preview: **http://127.0.0.1:3016/**

Implementation stops here, awaiting visual approval. No commit, push or deployment was performed.
