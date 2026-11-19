# Phase 4C.4 — Kontrakt and navigation production release

18 November 2026, Europe/Berlin. **PUBLISHED AND VERIFIED.** No new P0/P1 issue identified in the executed checks.

## Release and deployment

- Commit: `b508d0e80b1ddf0d525e76e8c0e1869cfaa55752` — feat(marketing): launch kontrakt page and unify product navigation.
- Exactly one release commit pushed to existing `main`; local HEAD and origin/main match. No repository, deployment, analytics or authentication configuration changed.
- Vercel commit check: **success**, “Deployment has completed”. [Vercel deployment](https://vercel.com/damians-projects-59fe4c9d/jobbleder-marketing-site/EAPY784eZxLPBw2upPaVRK1WBpS4).
- GitHub Production deployment **7895583811**, state **success**, reported 2026-11-18T20:38:36Z.
- [Deployment-specific URL](https://jobbleder-marketing-site-2eu9yusmr-damians-projects-59fe4c9d.vercel.app).
- Production tested directly at [https://www.jobbleder.no/kontrakt-mal](https://www.jobbleder.no/kontrakt-mal); local preview results were not substituted for production checks.

## Pre-release checks and scope

Read the Phase 4C.1 audit, Phase 4C.2 implementation, Phase 4C.3 release audit and Phase 4C.3A navigation report. Reviewed Git status/diff and the exact approved file inventory. The remote was current before release. Only the contract route branch, isolated contract implementation/data/assets, approved invoice header swap/color aliases, media-preparation script and four related Phase 4C reports were staged.

| Check | Fresh result |
|---|---|
| TypeScript: npx.cmd tsc --noEmit --incremental false | PASS, exit 0 |
| Full ESLint: npm.cmd run lint | PASS, exit 0, no lint warnings/errors |
| Production build: npm.cmd run build | PASS, exit 0, all 55 static pages generated |
| Staged diff whitespace check | PASS |
| Whitelist versus staged/committed files | Exact match, 27 files |
| Existing working-file preservation | 212 SHA-256 comparisons passed |

The sandbox build stalled without diagnostics and was interrupted; its unrestricted rerun completed successfully. Two existing Node DEP0205 module.register() deprecation notices remain. Git also reported normal LF-to-CRLF working-copy notices. No failing application validation was suppressed.

Five original PNG files are necessary runtime assets: approved “Åpne hele bildet” links reference them directly. Only those required original sources were committed; other source screenshots and unrelated local files/reports remain untouched and untracked. Ten newly tracked WebPs include two existing reused derivatives. No product-source screenshot was regenerated or edited for this release.

## Production browser matrix

Chrome headless on Windows, direct WWW production URL, cache disabled, DPR 1, height 900 px. Light OS preference and reduced-motion preference enabled in all twenty cases. The approved earlier local audits cover both light/dark preferences; a new production dark-preference matrix, physical touch-device test, Safari/Firefox test and full screen-reader session were not executed.

| Route | 375 px | 768 px | 1280 px | 1440 px |
|---|---|---|---|---|
| `/` | PASS | PASS | PASS | PASS |
| `/fakturaprogram-gratis` | PASS | PASS | PASS | PASS |
| `/timeliste-mal` | PASS | PASS | PASS | PASS |
| `/tilbud-mal` | PASS | PASS | PASS | PASS |
| `/kontrakt-mal` | PASS | PASS | PASS | PASS |

Every case returned HTTP 200, had exactly one H1, preserved title/description/self-referencing WWW canonical and had no noindex directive. No horizontal overflow, undecoded product image, JavaScript page exception or new browser console error was observed. Observed CLS range: 0–0; these are scoped browser observations, not field performance measurements.

Shared header tested in all twenty cases: mobile menu at 375/768, desktop Produkter at 1280/1440, same four labels/routes, Enter open, Space close, pointer toggle, Tab into first product link, visible 3 px summary focus and visible link focus. Mobile menu links are at least 44 px high. Opening the overlay did not move main content. **32 actual product-link activations** reached their expected route, including all four destinations from Faktura at each width and a Faktura navigation from each other page at each width.

All main native disclosures were opened/closed with the keyboard at every width, including FAQ controls. FAQPage JSON-LD parsed and all questions/answers matched the corresponding visible controls on each product page. Ten automated axe WCAG A/AA/best-practice checks ran: all five pages at 375 and 1440, **zero detected violations**. This does not substitute for a complete manual accessibility audit.

Kontrakt retains eleven sections, ten authentic screenshot figures and ten matching FAQ entries at every width. Full-size image-link accessible text begins “Åpne hele bildet” and includes the image description. **10 actual full-size link clicks** loaded decoded originals. All **24 unique manifest derivative/original URLs** returned HTTP 200 and matched local SHA-256 bytes. Responsive picture selections were recorded at all widths. Image ratios are preserved, including deliberate object-fit: contain PDF frames. No source image was changed. Production full-page captures of Kontrakt at 375/1440 and Faktura at 375 were visually inspected; no obvious clipping, overlap or footer misalignment was found.

Actual primary CTA activations from all five pages reached https://app.jobbleder.no/; existing login/Create account guidance remains accurate. No credentials or authenticated document operation was submitted. The secondary contract CTA retains its #kontraktseksempel href and matching section target in the rendered markup. All conversion descriptions remain user-controlled; the earlier PDF example is distinguished from the payment-plan configuration, and the invoice is not promised as an automatically calculated plan installment. Free functionality/Premium branding distinctions remain the approved content.

## Regression, SEO and endpoints

The entire rendered main markup, footer and parsed JSON-LD of homepage, Faktura, Timeliste and Tilbud were compared with a production snapshot taken before this push. All sixteen route/width comparisons matched exactly. Their metadata also matched. The intentional Faktura header replacement is the released change; product content was not rewritten. Kontrakt metadata/canonical also match the previous production SEO record.

- Sitemap: HTTP 200, all five routes present with WWW URLs.
- Robots: HTTP 200, correct WWW sitemap reference.
- Static Timeliste template /downloads/timeliste-mal-jobbleder.pdf: HTTP 200 and valid %PDF- signature.
- Production analytics: /api/handshake and /api/footprint returned HTTP 200 in every page/width case. The known local HTTP 400 was not reproduced in production; no analytics implementation change was made.
- External Timeliste last-seven-days PDF was retried **exactly once** this release: HTTP 200; content type application/pdf; 334286 bytes; signature %PDF-.

External URL: https://laskowskicreative.no/api/jobbleder/user/documents/oneweek-timelist. It was excluded from other test loops to avoid unintended retries.

## Remaining observations and limitations

- P0/P1: none newly identified in executed production checks.
- P2: existing mobile raster density/fine print can benefit from future higher-resolution authentic captures. Full-size access works; approved appearance retained.
- Previously unresolved Timeliste PDF: status is recorded above; now verified HTTP 200, application/pdf and %PDF- signature on the single retry. This unchanged external dependency is not a newly introduced Kontrakt/navigation regression.
- P2: CTA opens the existing English login before Create account; guidance is preserved.
- P3: existing framework deprecation notices, optional shared-runtime optimization and global SearchAction follow-up remain outside this release. No new Lighthouse run or production performance score is claimed.

Test-run adjustments: initial browser assertions were corrected for existing object-fit: contain PDF frames and normal HTTP 304 caching, and waiting for hidden lazy-loaded responsive variants; cache was then disabled and decoding limited to visible images and the complete matrix rerun. No application correction or deployment deviation was required.

## Exact committed files (27)

- `app/(seo)/[slug]/page.tsx`
- `components/product/contract/ContractProductPage.tsx`
- `components/product/contract/contractProduct.module.css`
- `components/product/invoice/InvoiceProductPage.tsx`
- `components/product/invoice/invoiceProduct.module.css`
- `content/contractProduct.ts`
- `content/contractProductMedia.json`
- `docs/phase-4c.1-kontrakt-audit.md`
- `docs/phase-4c.2-kontrakt-implementation.md`
- `docs/phase-4c.3-kontrakt-release-audit.md`
- `docs/phase-4c.3a-navigation-consistency-fix.md`
- `public/images/product/kontrakt/optimized/jobbleder-contract-advance-1e0f477eb7e3.webp`
- `public/images/product/kontrakt/optimized/jobbleder-contract-clauses-e1b447e61a33.webp`
- `public/images/product/kontrakt/optimized/jobbleder-contract-hero-11f4f7338a0b.webp`
- `public/images/product/kontrakt/optimized/jobbleder-contract-hero-mobile-b5101a336cae.webp`
- `public/images/product/kontrakt/optimized/jobbleder-contract-materials-be1c1b83a11e.webp`
- `public/images/product/kontrakt/optimized/jobbleder-contract-payments-f96f107da0be.webp`
- `public/images/product/kontrakt/optimized/jobbleder-contract-payments-mobile-b3e033dbf6b6.webp`
- `public/images/product/kontrakt/optimized/jobbleder-contract-progress-b47e4e1c1c86.webp`
- `public/images/product/kontrakt/optimized/jobbleder-home-contract-192687f50086.webp`
- `public/images/product/kontrakt/optimized/jobbleder-home-contract-mobile-6413439017d3.webp`
- `public/images/product/kontrakt/source/material_costs.png`
- `public/images/product/kontrakt/source/new_contract_form_time.png`
- `public/images/product/kontrakt/source/new_contract_form_with_advance_percentage.png`
- `public/images/product/kontrakt/source/payment_base.png`
- `public/images/product/kontrakt/source/payment_methods.png`
- `scripts/prepare-contract-media.mjs`

## Evidence and local report status

Evidence: C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/

- phase4c4-deployment.json: Vercel and Production deployment statuses tied to the exact commit.
- phase4c4-evidence/before-production.json and production-results.json: pre/post comparisons, twenty cases, actual links, endpoints, asset hashes and the single external PDF attempt.
- phase4c4-evidence/{kontrakt-mal,fakturaprogram-gratis}-{375,1440}.png: full-page production captures.
- phase4c4-baseline.json and phase4c4-release-files.json: preservation and explicit release whitelist.

This final report is intentionally created **after deployment and left local/uncommitted**, avoiding a second release commit/deployment. All pre-existing files were hash-checked unchanged, the index is empty, no tracked modification remains, and unrelated untracked work is preserved.
