# Phase 4B.4 — Tilbud production release

Date: 18 November 2026, Europe/Berlin.

## Release result

**PUBLISHED AND VERIFIED. No new P0/P1 issue found.**

Production: [https://www.jobbleder.no/tilbud-mal](https://www.jobbleder.no/tilbud-mal)

- Commit: `8c38d8af6d72ace521f7cec8c06adb1021dde028`.
- Message: `feat(marketing): launch redesigned tilbud landing page`.
- Branch: `main`; pushed to `origin/main` successfully.
- Vercel commit status: **success — Deployment has completed**.
- GitHub Production deployment: **7893731107**, matching the exact release SHA, status **success** at `2026-11-18T19:20:29Z`.
- [Vercel deployment details](https://vercel.com/damians-projects-59fe4c9d/jobbleder-marketing-site/36oAuhGwAnc9aVJsMuKdhk8NLg9M).
- [Deployment-specific URL](https://jobbleder-marketing-site-f76p4siia-damians-projects-59fe4c9d.vercel.app).

Deployment success was independently confirmed through the Vercel commit status and Production deployment status, followed by direct public-domain checks. A successful Git push was not treated as proof of deployment. No Vercel settings or repository configuration were changed.

## Pre-release verification and commit scope

Read the approved Phase 4B.2 implementation report and Phase 4B.3 final audit. The current code and assets were hash-checked against the audited implementation. Before staging, the branch was `main`, the index was empty, and a successful remote fetch confirmed zero commits ahead/behind `origin/main`.

Only an explicit list of **28 required files** was staged. No `git add .` or `git add -A` was used. Staged paths and content were checked against that list before commit; whitespace validation passed. The commit contains the route branch, offer component/CSS/content/manifest, reproducible image script, three Phase 4B reports, twelve WebPs and seven original PNGs referenced by the approved full-image links.

The seven originals were deliberately included as public assets required by working enlargement links and by the approved manifest. They were not edited. Unused originals, duplicate contract-folder screenshots, unrelated product assets, local configuration, secrets and temporary QA screenshots were excluded. These remain preserved locally.

Fresh release checks:

| Check | Result |
|---|---|
| `npx.cmd tsc --noEmit --incremental false` | PASS, exit 0; no diagnostics. |
| `npm.cmd run lint` | PASS, full ESLint, exit 0; no warnings/errors. |
| `npm.cmd run build` | PASS, exit 0; all 55 static pages generated. |
| Staged whitespace check | PASS. |
| Exact staged/committed file inventory | PASS, 28 files, no unrelated paths. |

Warnings: the build emitted the existing Node `DEP0205 module.register()` deprecation notices. Git also printed normal LF-to-CRLF working-copy notices when staging text files. Neither caused validation failure or application changes.

## Direct production verification

Checks used `https://www.jobbleder.no/tilbud-mal` directly, not localhost or the deployment preview URL. Chrome ran with cache disabled at viewport height 900 px and DPR 1. These are responsive desktop-browser checks, not physical-device or cross-engine certification. Theme/reduced-motion coverage remains documented in the approved Phase 4B.3 audit; production smoke testing did not repeat that entire preference matrix or Lighthouse.

| Width | Page HTTP | Product images | FAQ controls | Overflow | Marketing console errors / page exceptions |
|---:|---:|---|---|---|---|
| 375 px | 200 | 7/7 loaded | 7/7 keyboard interactions passed | None | None |
| 768 px | 200 | 7/7 loaded | 7/7 keyboard interactions passed | None | None |
| 1280 px | 200 | 7/7 loaded | 7/7 keyboard interactions passed | None | None |
| 1440 px | 200 | 7/7 loaded | 7/7 keyboard interactions passed | None | None |

First-screen screenshots were captured at all four widths, and mobile/desktop production renders were visually inspected. All ten sections are present. The 375 px browser selected the five intended mobile crops; wider browsers selected the desktop variants. All images have Norwegian alternative text.

### Metadata and indexability

- Title: `Tilbud mal – skriv et profesjonelt tilbud (gratis) | Jobbleder`.
- Description: `Tilbud mal for små bedrifter og håndverkere. Lag tilbud raskt og konverter til faktura når kunden sier ja.`
- Canonical: exactly `https://www.jobbleder.no/tilbud-mal` in every viewport.
- Exactly one H1: `Lag tilbud som blir til mer.`
- No noindex meta directive or `X-Robots-Tag` noindex header found.
- Response is served by Vercel; initial direct fetch returned HTTP 200 with `x-vercel-cache: PRERENDER`.
- Sitemap returns 200, includes the Tilbud URL and has 45 WWW-origin URLs.
- Robots.txt returns 200, allows `/`, preserves `/api/` and `/private/` exclusions, and references the WWW host/sitemap.

### Workflows, comparison and FAQ

- Tilbud 29 → Faktura 111 is represented with its authentic source-labelled screenshot.
- Tilbud 29 → Kontrakt 11, independent contract editing and Kontrakt 11 → Faktura 112 are represented in the three conversion sections.
- Copy states that all document conversions are available in Free. Premium differentiates branding removal and own company logo; no new prices, quotas or restrictions were introduced.
- Seven native FAQ disclosures were opened/closed with keyboard input at each width. Exactly one FAQPage JSON-LD matches all seven visible questions/answers.
- PDF generation is described accurately; contracts retain manual-signing language. No electronic signing, automatic sending or approval was added.
- Product backend capabilities remain user-confirmed. No authenticated document creation/conversion or account registration was executed during the release.

### Images, links and CTAs

- All **19 image URLs**—twelve WebP variants and seven required originals—returned HTTP 200 with expected image types. Downloaded bytes match local approved files by SHA-256.
- The authentic offer PDF preview is an image of the exported document; its full-original image link works. It is not mislabelled as a blank PDF template download.
- All **26 collected same-origin href URLs** returned 200.
- Primary CTA was actually followed from mobile, and final CTA from desktop; both reached `https://app.jobbleder.no/`. The primary destination displayed “Create account” as described in the existing helper copy. No authentication was submitted.
- Secondary CTA scrolled to `#tilbudseksempel` below the sticky header.
- The contextual Faktura link was actually followed to the production `/fakturaprogram-gratis` page.

## Production analytics

Observed through real marketing-page browser visits:

| Endpoint | Actual production result |
|---|---|
| `/api/handshake` | HTTP **200**, parsed response `ok: true`, in all four viewport cases. |
| `/api/footprint` | HTTP **200** in all four viewport cases. |

The known local HTTP 400 did **not** reproduce in production. No TLS verification was disabled in the production checks. These results establish endpoint behavior, not complete attribution, dashboard ingestion or CTA-to-registration analytics. Tracking implementation was not changed.

## Regression checks

Direct production browser checks at 375 px:

| Page | HTTP | Visible product images | Canonical | Overflow |
|---|---:|---|---|---|
| Homepage | 200 | 6/6 loaded | `https://www.jobbleder.no/` | None |
| Faktura | 200 | 8/8 loaded | `https://www.jobbleder.no/fakturaprogram-gratis` | None |
| Timeliste | 200 | 6/6 loaded | `https://www.jobbleder.no/timeliste-mal` | None |

The homepage retains all four product introductions. Both existing Timeliste PDF destinations returned 200 with `application/pdf` and valid PDF signatures. The static template's downloaded hash matches the committed file. No homepage, Faktura, Timeliste, shared component, metadata infrastructure or PDF endpoint source was changed by this release.

## Remaining P2/P3 observations

The approved audit observations remain applicable, without changes during release:

- **P2:** Small screenshot/PDF fine print on phones; working full-image links and readable HTML explanations provide detail access.
- **P2:** Existing free-start journey opens English login before account creation; helper copy accurately explains it.
- **P3:** Existing shared-runtime performance opportunities and Node deprecation notice; no production Lighthouse score is claimed here.
- **P3:** Existing global WebSite SearchAction observation remains outside this release.
- **P3:** Demo customer copy says “Eksempel Eiendom AS” while the screenshot says “Eksempel Eiendom”. The previously audited minor inconsistency was not changed during deployment.
- **P3, external app:** Actual CTA navigation observed `https://app.jobbleder.no/manifest.json` returning 404. The app/login page still loads and “Create account” is visible. This is separate from the marketing origin, where there were no console errors or failed responses. No app/backend change was made.

The local analytics issue remains a local/environment observation; production endpoints succeeded. No new P0/P1 issue or release blocker was identified.

## Deviations and worktree preservation

- Initial Git fetch using OpenSSL failed because the environment could not build its local issuer chain. Fetch and push then succeeded with per-command `http.sslBackend=schannel`, using the Windows certificate store. Certificate verification remained enabled; no persistent Git/Vercel configuration was changed.
- No implementation deviation or unrelated improvement was introduced. Required PNGs were intentionally packaged for approved full-image links; other originals were excluded.
- This report was created **after** deployment to record the final commit and actual results. It remains local/uncommitted and was not used to trigger a second deployment.
- All **194 pre-existing working files** were hash-checked for preservation after commit, including unrelated untracked work. The index and tracked worktree were clean before this new report; `HEAD` and local `origin/main` matched the release commit.

Evidence outside the repository:

`C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/`

- `phase4b4-deployment.json`: Vercel commit/deployment status and exact SHA.
- `phase4b4-evidence/results.json`: complete production verification results.
- `phase4b4-evidence/production-{375,768,1280,1440}.png`: production screenshots.
- `phase4b4-baseline.json` and `phase4b4-release-files.json`: scope/preservation evidence.

## Exact files included in commit

The following inventory is read from the release commit, not inferred from the remaining local working tree.

- `app/(seo)/[slug]/page.tsx`
- `components/product/offer/OfferProductPage.tsx`
- `components/product/offer/offerProduct.module.css`
- `content/offerProduct.ts`
- `content/offerProductMedia.json`
- `docs/phase-4b.1-tilbud-audit.md`
- `docs/phase-4b.2-tilbud-implementation.md`
- `docs/phase-4b.3-tilbud-release-audit.md`
- `public/images/product/tilbud/optimized/jobbleder-offer-contract-793f5eed04dc.webp`
- `public/images/product/tilbud/optimized/jobbleder-offer-contract-invoice-7847d3b65141.webp`
- `public/images/product/tilbud/optimized/jobbleder-offer-contract-invoice-mobile-64fb6553081e.webp`
- `public/images/product/tilbud/optimized/jobbleder-offer-contract-mobile-66905c4b86f7.webp`
- `public/images/product/tilbud/optimized/jobbleder-offer-edited-contract-98807c86e360.webp`
- `public/images/product/tilbud/optimized/jobbleder-offer-editor-efed9bd605e5.webp`
- `public/images/product/tilbud/optimized/jobbleder-offer-editor-mobile-c86e5ebb7582.webp`
- `public/images/product/tilbud/optimized/jobbleder-offer-hero-3c424f34ca1e.webp`
- `public/images/product/tilbud/optimized/jobbleder-offer-hero-mobile-7ef9a11a7c8c.webp`
- `public/images/product/tilbud/optimized/jobbleder-offer-invoice-825bce28603f.webp`
- `public/images/product/tilbud/optimized/jobbleder-offer-invoice-mobile-dc98f21e88fc.webp`
- `public/images/product/tilbud/optimized/jobbleder-offer-pdf-085c0b3a1244.webp`
- `public/images/product/tilbud/source/contract_from_offer_edited.png`
- `public/images/product/tilbud/source/exported_tilbud_A4.png`
- `public/images/product/tilbud/source/invoice_from_contract.png`
- `public/images/product/tilbud/source/new_offer_form.png`
- `public/images/product/tilbud/source/offer_document_preview_in_documents_menu.png`
- `public/images/product/tilbud/source/tilbud_to_contract.png`
- `public/images/product/tilbud/source/tilbud_to_invoice.png`
- `scripts/prepare-offer-media.mjs`
