# Phase 9E — Git release candidate preparation & change inventory

22 November 2026 (Europe/Berlin). Read-only repository review; only this report is added. Paths below are exact repository-relative paths under `C:/Users/ddlas/Code/jobbleder-site`. No staging commands in this document were executed.

## 1. Executive summary

The release candidate is inventoried, with **76 proposed paths**: 50 source/tool/documentation paths and **26 media paths requiring explicit privacy/provenance approval**. There are 103 pre-existing changed/untracked paths recommended for exclusion and preservation. The candidate is a proposed Git manifest, not permission to publish.

Initial inventory: **487 tracked/nonignored-untracked files; 27 unstaged tracked modifications; 151 untracked individual files; 178 changed/untracked files; no staged changes**. This report adds the 179th changed/untracked file. No deletion or rename is present. All 487 initial bytes/hashes are preserved.

TypeScript, full ESLint, production build and diff whitespace check pass. The image/content verifier **fails with the old repository fixture**, then passes with the preserved later approved fixture: 13 lossless derivatives, 93 original source hashes. The default fixture remains stale and unchanged. This maintenance limitation must not be hidden as an unconditional passing fresh-checkout test.

**F01 — APPLICATION FINANCIAL VERIFICATION remains PENDING.** No application repository was accessed. Withheld B2C/B2B PDFs remain unpublished; no Premium price/MVA decision is made.

## 2. Repository and branch verification

| Property | Verified value |
| --- | --- |
| Root | C:/Users/ddlas/Code/jobbleder-site |
| Branch | main |
| HEAD | ec472f5f24ca2627c0c38a5b6e4efe5b9d378aae |
| Package | jobbleder-site 0.1.0; Next 16.1.6; React 19.2.3 |
| Index | Empty at entry; remains empty |
| Configuration/dependencies | No tracked package.json, package-lock.json, Next/ESLint/TS config, .gitignore, sitemap or robots changes |
| Scope | This repository only; external evidence in the authorized Codex visualizations root |

No AGENTS.md was found by the repository inventory. No source restructuring, dependency installation or application repository access was performed.

## 3. Initial Git status

Captured with git status --porcelain=v1 -z, git ls-files -z, git ls-files --others --exclude-standard -z and git diff --name-only -z. Directory entries were expanded to individual files; NUL parsing preserves special filenames. No changed-path filename contains a newline. The unusual unchanged tracked Unicode root artifact was captured separately.

The expanded status below is also the complete input to section 4:

```text
 M app/(seo)/[slug]/opengraph-image.tsx
 M app/(seo)/[slug]/page.tsx
 M app/blogg/[slug]/page.tsx
 M app/blogg/kategori/[category]/page.tsx
 M app/blogg/page.tsx
 M app/instruksjoner/page.tsx
 M app/kontakt/page.tsx
 M app/layout.tsx
 M app/om-oss/page.tsx
 M components/ContactForm.tsx
 M components/Footer.tsx
 M components/Navbar.tsx
?? components/SkipLink.tsx
 M components/home/Homepage.tsx
 M components/home/home.module.css
 M components/instructions/InstructionsHub.tsx
?? components/product/contract/ContractEditorialMedia.tsx
?? components/product/contract/ContractGuidePage.tsx
?? components/product/contract/ContractMedia.tsx
 M components/product/contract/ContractProductPage.tsx
?? components/product/contract/contractGuide.module.css
?? components/product/contract/contractMedia.module.css
 M components/product/invoice/invoiceExample.module.css
 M components/product/invoice/invoiceGuide.module.css
 M components/product/invoice/invoiceRequirements.module.css
 M components/product/offer/offerExample.module.css
 M components/product/timelist/specializedTimelist.module.css
 M content/blogPosts.ts
 M content/contractProduct.ts
 M content/contractProductMedia.json
?? content/contractProductVisuals.ts
 M content/instructionGuides.ts
 M content/seoPages.ts
?? docs/phase-7e-diagnostics/browser-accessibility.json
?? docs/phase-7e-diagnostics/route-link-seo.json
?? docs/phase-7e-diagnostics/verification.json
?? docs/phase-7h-tilbud-production-verification.md
?? docs/phase-8a-diagnostics/checks.json
?? docs/phase-8a-diagnostics/inventory.json
?? docs/phase-8f-faktura-production-verification.md
?? docs/phase-9a-kontrakt-ecosystem-audit.md
?? docs/phase-9b-kontrakt-content-upgrade.md
?? docs/phase-9c2-contract-visual-integration.md
?? docs/phase-9c2-review/accessibility-results.json
?? docs/phase-9c2-review/accessibility-verification.json
?? docs/phase-9c2-review/asset-inventory.json
?? docs/phase-9c2-review/baseline.json
?? docs/phase-9c2-review/blogg-fra-tilbud-til-kontrakt-og-faktura-1024.jpg
?? docs/phase-9c2-review/blogg-fra-tilbud-til-kontrakt-og-faktura-1440.jpg
?? docs/phase-9c2-review/blogg-fra-tilbud-til-kontrakt-og-faktura-390.jpg
?? docs/phase-9c2-review/blogg-fra-tilbud-til-kontrakt-og-faktura-768.jpg
?? docs/phase-9c2-review/blogg-nar-trenger-du-kontrakt-1024.jpg
?? docs/phase-9c2-review/blogg-nar-trenger-du-kontrakt-1440.jpg
?? docs/phase-9c2-review/blogg-nar-trenger-du-kontrakt-390.jpg
?? docs/phase-9c2-review/blogg-nar-trenger-du-kontrakt-768.jpg
?? docs/phase-9c2-review/blogg-tilbud-vs-kontrakt-1024.jpg
?? docs/phase-9c2-review/blogg-tilbud-vs-kontrakt-1440.jpg
?? docs/phase-9c2-review/blogg-tilbud-vs-kontrakt-390.jpg
?? docs/phase-9c2-review/blogg-tilbud-vs-kontrakt-768.jpg
?? docs/phase-9c2-review/browser-results.json
?? docs/phase-9c2-review/detail-blogg-fra-tilbud-til-kontrakt-og-faktura-1440-0.jpg
?? docs/phase-9c2-review/detail-blogg-fra-tilbud-til-kontrakt-og-faktura-1440-1.jpg
?? docs/phase-9c2-review/detail-blogg-fra-tilbud-til-kontrakt-og-faktura-1440-2.jpg
?? docs/phase-9c2-review/detail-blogg-fra-tilbud-til-kontrakt-og-faktura-1440-3.jpg
?? docs/phase-9c2-review/detail-blogg-nar-trenger-du-kontrakt-1440-0.jpg
?? docs/phase-9c2-review/detail-blogg-tilbud-vs-kontrakt-1440-0.jpg
?? docs/phase-9c2-review/detail-hva-skal-en-kontrakt-inneholde-1440-0.jpg
?? docs/phase-9c2-review/detail-hva-skal-en-kontrakt-inneholde-1440-1.jpg
?? docs/phase-9c2-review/detail-kontrakt-eksempel-1440-0.jpg
?? docs/phase-9c2-review/detail-kontrakt-eksempel-1440-1.jpg
?? docs/phase-9c2-review/detail-kontrakt-eksempel-1440-2.jpg
?? docs/phase-9c2-review/detail-kontrakt-eksempel-1440-3.jpg
?? docs/phase-9c2-review/detail-kontrakt-handverker-1440-0.jpg
?? docs/phase-9c2-review/detail-kontrakt-handverker-1440-1.jpg
?? docs/phase-9c2-review/detail-kontrakt-handverker-1440-2.jpg
?? docs/phase-9c2-review/detail-kontrakt-handverker-1440-3.jpg
?? docs/phase-9c2-review/detail-kontrakt-handverker-1440-4.jpg
?? docs/phase-9c2-review/detail-kontrakt-mal-1440-0.jpg
?? docs/phase-9c2-review/detail-kontrakt-mal-1440-1.jpg
?? docs/phase-9c2-review/detail-kontrakt-mal-1440-2.jpg
?? docs/phase-9c2-review/detail-kontrakt-mal-1440-3.jpg
?? docs/phase-9c2-review/detail-kontrakt-mal-1440-4.jpg
?? docs/phase-9c2-review/detail-kontrakt-mal-1440-5.jpg
?? docs/phase-9c2-review/detail-kontrakt-mal-1440-6.jpg
?? docs/phase-9c2-review/detail-kontrakt-mal-1440-7.jpg
?? docs/phase-9c2-review/detail-kontrakt-mal-1440-8.jpg
?? docs/phase-9c2-review/detail-kontrakt-mal-1440-9.jpg
?? docs/phase-9c2-review/detail-kontrakt-mal-390-0.jpg
?? docs/phase-9c2-review/fakturaprogram-gratis-1440.jpg
?? docs/phase-9c2-review/fakturaprogram-gratis-390.jpg
?? docs/phase-9c2-review/hva-skal-en-kontrakt-inneholde-1024.jpg
?? docs/phase-9c2-review/hva-skal-en-kontrakt-inneholde-1440.jpg
?? docs/phase-9c2-review/hva-skal-en-kontrakt-inneholde-390.jpg
?? docs/phase-9c2-review/hva-skal-en-kontrakt-inneholde-768.jpg
?? docs/phase-9c2-review/kontrakt-eksempel-1024.jpg
?? docs/phase-9c2-review/kontrakt-eksempel-1440.jpg
?? docs/phase-9c2-review/kontrakt-eksempel-390.jpg
?? docs/phase-9c2-review/kontrakt-eksempel-768.jpg
?? docs/phase-9c2-review/kontrakt-handverker-1024.jpg
?? docs/phase-9c2-review/kontrakt-handverker-1440.jpg
?? docs/phase-9c2-review/kontrakt-handverker-390.jpg
?? docs/phase-9c2-review/kontrakt-handverker-768.jpg
?? docs/phase-9c2-review/kontrakt-mal-1024.jpg
?? docs/phase-9c2-review/kontrakt-mal-1440.jpg
?? docs/phase-9c2-review/kontrakt-mal-390-top.jpg
?? docs/phase-9c2-review/kontrakt-mal-390.jpg
?? docs/phase-9c2-review/kontrakt-mal-768.jpg
?? docs/phase-9c2-review/navigation-results.json
?? docs/phase-9c2-review/og-hva-skal-en-kontrakt-inneholde.png
?? docs/phase-9c2-review/og-kontrakt-eksempel.png
?? docs/phase-9c2-review/og-kontrakt-handverker.png
?? docs/phase-9c2-review/og-kontrakt-mal.png
?? docs/phase-9c2-review/opengraph-results.json
?? docs/phase-9c2-review/optimization-results.json
?? docs/phase-9c2-review/owner-review-desktop.jpg
?? docs/phase-9c2-review/owner-review-mobile-invoice.jpg
?? docs/phase-9c2-review/page-verification.json
?? docs/phase-9c2-review/removed-trial-derivatives.json
?? docs/phase-9c2-review/review-blogg-fra-tilbud-til-kontrakt-og-faktura.jpg
?? docs/phase-9c2-review/review-blogg-nar-trenger-du-kontrakt.jpg
?? docs/phase-9c2-review/review-blogg-tilbud-vs-kontrakt.jpg
?? docs/phase-9c2-review/review-hva-skal-en-kontrakt-inneholde.jpg
?? docs/phase-9c2-review/review-kontrakt-eksempel.jpg
?? docs/phase-9c2-review/review-kontrakt-handverker.jpg
?? docs/phase-9c2-review/review-kontrakt-mal.jpg
?? docs/phase-9c2-review/tilbud-mal-1440.jpg
?? docs/phase-9c2-review/tilbud-mal-390.jpg
?? docs/phase-9c2-review/timeliste-mal-1440.jpg
?? docs/phase-9c2-review/timeliste-mal-390.jpg
?? docs/phase-9c2-review/verification.json
?? docs/phase-9c2a-invoice-copy-release-gate.md
?? docs/phase-9c2a-visual-quality-correction.md
?? docs/phase-9c3-contract-instructions.md
?? docs/phase-9c4a-homepage-redesign-proposal.md
?? docs/phase-9c4b-homepage-implementation.md
?? docs/phase-9c4c-homepage-restoration.md
?? docs/phase-9c5-contract-seo-visual-alignment.md
?? docs/phase-9d-final-website-qa.md
?? docs/phase-9d1-contrast-remediation.md
?? docs/phase-9d2-seo-accessibility-cleanup.md
?? lib/socialMetadata.ts
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-b2b-9a2b3b4668e7.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-b2b-c732250ada84.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-hero-cbbb9ad4befa.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-hero-faee5c2ab7ef.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-326624105cfc.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-mobile-5d4b1a2ab159.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-mobile-a038f2aeef10.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-materials-9ff1040c096a.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-materials-ac7fc43e9269.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-action-45c573d688c0.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-action-e5744404ead6.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-c9b47a50e629.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-ca69d638cd2f.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-overview-e2387e1b3c82.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-payments-632b3a9f8bfa.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-payments-d3df25846030.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-pricing-0017bd7a2216.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-pricing-c40023acaa65.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-saved-b2-b-df3ee5ae9f1d.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-saved-b2-c-b8ceec4e775e.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-work-02fb97838ded.webp
?? public/images/product/kontrakt/source/contract-2-b2b-form.png
?? public/images/product/kontrakt/source/contract-2-b2b-form_mobile.png
?? public/images/product/kontrakt/source/contract-2-b2b-in-documents.png
?? public/images/product/kontrakt/source/contract-2-b2b-in-documents_mobile.png
?? public/images/product/kontrakt/source/contract-2-b2c-form.png
?? public/images/product/kontrakt/source/contract-2-b2c-form_mobile.png
?? public/images/product/kontrakt/source/contract-2-b2c-in-documents.png
?? public/images/product/kontrakt/source/contract-2-b2c-in-documents_mobile.png
?? public/images/product/kontrakt/source/contract-2-from-offer-mobile.png
?? public/images/product/kontrakt/source/contract-2-from-offer.png
?? public/images/product/kontrakt/source/contract-2-invoice-conversion-mobile.png
?? public/images/product/kontrakt/source/contract-2-invoice-conversion.png
?? public/images/product/kontrakt/source/offer-to-contract.png
 M scripts/prepare-contract-media.mjs
?? scripts/review-contract-pages.mjs
?? scripts/verify-contract-visuals.mjs
```

Tracked diff summary: **27 files changed, 1,006 insertions, 637 deletions**. These are line changes, not deleted files. Untracked files are absent from git diff --stat until staged.

## 4. Complete changed-file inventory

Every one of the **178** pre-existing changed/untracked files is listed once. Types distinguish source, source asset, generated derivative, documentation and diagnostics. Sizes are exact bytes (useful as approximate storage cost). “Build” distinguishes a compiler dependency from runtime delivery and maintenance requirements: Next can compile even when a public full-size link would be missing. A successful build alone does not validate media completeness.

A=production source; B=production/source media; C=maintenance tools; D=project reports; E=diagnostics; F=ambiguous/historical items. “Yes” is a recommendation awaiting approval, not executed staging.

| Path | Git | Type / category | Bytes | Production reference | Build / reproducibility | Phase | Include / owner review | Purpose / exclusion reason |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| app/(seo)/[slug]/opengraph-image.tsx |  M | .tsx / A | 2991 | Yes | Yes (source) | 9C.2 | Yes; Manifest approval | Contract social-image title; Next route |
| app/(seo)/[slug]/page.tsx |  M | .tsx / A | 8470 | Yes | Yes (source) | 9C.2 / 9C.5 / 9D.2 | Yes; Manifest approval | SEO routing, Contract guides/media, social metadata, fallback skip target |
| app/blogg/[slug]/page.tsx |  M | .tsx / A | 9208 | Yes | Yes (source) | 9C.2 / 9D.2 | Yes; Manifest approval | Article renderer: contractVisual block, social metadata, skip target |
| app/blogg/kategori/[category]/page.tsx |  M | .tsx / A | 3797 | Yes | Yes (source) | 9D.2 | Yes; Manifest approval | Category metadata and skip target |
| app/blogg/page.tsx |  M | .tsx / A | 2586 | Yes | Yes (source) | 9D.2 | Yes; Manifest approval | Blog metadata, single title suffix, skip target |
| app/instruksjoner/page.tsx |  M | .tsx / A | 883 | Yes | Yes (source) | 9D.2 | Yes; Manifest approval | Instructions social metadata; imports hub |
| app/kontakt/page.tsx |  M | .tsx / A | 2893 | Yes | Yes (source) | 9D.2 | Yes; Manifest approval | Contact social metadata and skip target |
| app/layout.tsx |  M | .tsx / A | 1975 | Yes | Yes (source) | 9D.2 | Yes; Manifest approval | Root social metadata; removes unsupported SearchAction only |
| app/om-oss/page.tsx |  M | .tsx / A | 6097 | Yes | Yes (source) | 9D.2 | Yes; Manifest approval | About metadata/skip target and Contract in product lists |
| components/ContactForm.tsx |  M | .tsx / A | 7582 | Yes | Yes (source) | 9D.2 | Yes; Manifest approval | Contact error associations, focus, request alert and success status |
| components/Footer.tsx |  M | .tsx / A | 667 | Yes | Yes (source) | 9D.2 | Yes; Manifest approval | Legacy footer product-list correction |
| components/Navbar.tsx |  M | .tsx / A | 3905 | Yes | Yes (source) | 9D.2 | Yes; Manifest approval | Legacy navigation imports SkipLink |
| components/SkipLink.tsx | ?? | .tsx / A | 266 | Yes | Yes (source) | 9D.2 | Yes; Manifest approval | Navbar dependency; focused Tailwind skip link |
| components/home/Homepage.tsx |  M | .tsx / A | 17345 | Yes | Yes (source) | 9C.4C (supersedes 9C.4B) | Yes; Manifest approval | Approved homepage restoration, four products, four workflows, Free comparison |
| components/home/home.module.css |  M | .css / A | 5733 | Yes | Yes (source) | 9C.4C (supersedes 9C.4B) | Yes; Manifest approval | Required homepage styles and responsive presentation |
| components/instructions/InstructionsHub.tsx |  M | .tsx / A | 9818 | Yes | Yes (source) | 9C.3 | Yes; Manifest approval | Guide renderer consumes contractVisual with mobile omission |
| components/product/contract/ContractEditorialMedia.tsx | ?? | .tsx / A | 723 | Yes | Yes (source) | 9C.2 / 9C.2A | Yes; Manifest approval | Guide/SEO renderer maps contextual Contract imagery |
| components/product/contract/ContractGuidePage.tsx | ?? | .tsx / A | 7131 | Yes | Yes (source) | 9C.5 | Yes; Manifest approval | Three Contract SEO routes; existing content/schema and shared layout |
| components/product/contract/ContractMedia.tsx | ?? | .tsx / A | 1511 | Yes | Yes (source) | 9C.2 / 9C.2A | Yes; Manifest approval | Manifest/visual mapping; responsive image and source links |
| components/product/contract/ContractProductPage.tsx |  M | .tsx / A | 11221 | Yes | Yes (source) | 9B / 9C.2 / 9C.2A | Yes; Manifest approval | Contract landing page, current imagery and financial-gated copy |
| components/product/contract/contractGuide.module.css | ?? | .css / A | 2573 | Yes | Yes (source) | 9C.5 | Yes; Manifest approval | Scoped Contract guide layout/theme |
| components/product/contract/contractMedia.module.css | ?? | .css / A | 805 | Yes | Yes (source) | 9C.2 / 9C.2A | Yes; Manifest approval | Native-size cap, mobile omission, focus and captions |
| components/product/invoice/invoiceExample.module.css |  M | .css / A | 5551 | Yes | Yes (source) | 9D.1 | Yes; Manifest approval | W01 root-theme specificity |
| components/product/invoice/invoiceGuide.module.css |  M | .css / A | 6736 | Yes | Yes (source) | 9D.1 | Yes; Manifest approval | W01 root-theme specificity; also ContractGuide dependency |
| components/product/invoice/invoiceRequirements.module.css |  M | .css / A | 6027 | Yes | Yes (source) | 9D.1 | Yes; Manifest approval | W01 root-theme specificity |
| components/product/offer/offerExample.module.css |  M | .css / A | 5625 | Yes | Yes (source) | 9D.1 | Yes; Manifest approval | W01 root-theme specificity; three offer guides |
| components/product/timelist/specializedTimelist.module.css |  M | .css / A | 5471 | Yes | Yes (source) | 9D.1 | Yes; Manifest approval | W01 dark root-theme specificity and skip foreground |
| content/blogPosts.ts |  M | .ts / A | 93106 | Yes | Yes (source) | 9B / 9C.2 / 9C.2A | Yes; Manifest approval | Three Contract-related articles and typed Contract visuals |
| content/contractProduct.ts |  M | .ts / A | 4145 | Yes | Yes (source) | 9B / 9C.2 / 9C.2A | Yes; Manifest approval | Contract FAQ, pricing/payment explanations and legal limitations |
| content/contractProductMedia.json |  M | .json / A | 9092 | Yes | Yes (source) | 9C.2 / 9C.2A | Yes; Manifest approval | 13 derivative/source/crop/hash records; ContractMedia and tools |
| content/contractProductVisuals.ts | ?? | .ts / A | 4209 | Yes | Yes (source) | 9C.2 / 9C.2A | Yes; Manifest approval | Visual aliases, alt/captions and contextual guide mapping |
| content/instructionGuides.ts |  M | .ts / A | 29411 | Yes | Yes (source) | 9C.3 | Yes; Manifest approval | Three Contract workflows; preserve user-initiated review/signing |
| content/seoPages.ts |  M | .ts / A | 71359 | Yes | Yes (source) | 9B / 9C.2 | Yes; Manifest approval | Four Contract SEO records and their existing routes |
| docs/phase-7e-diagnostics/browser-accessibility.json | ?? | .json / E | 183178 | No runtime | No | 7E | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-7e-diagnostics/route-link-seo.json | ?? | .json / E | 81065 | No runtime | No | 7E | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-7e-diagnostics/verification.json | ?? | .json / E | 61206 | No runtime | No | 7E | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-7h-tilbud-production-verification.md | ?? | .md / D | 11627 | No runtime | No | 7h | No; Manifest approval | Previous release verification; separate historical phase |
| docs/phase-8a-diagnostics/checks.json | ?? | .json / E | 235689 | No runtime | No | 8A | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-8a-diagnostics/inventory.json | ?? | .json / E | 1146830 | No runtime | No | 8A | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-8f-faktura-production-verification.md | ?? | .md / D | 19695 | No runtime | No | 8f | No; Manifest approval | Previous release verification; separate historical phase |
| docs/phase-9a-kontrakt-ecosystem-audit.md | ?? | .md / D | 58204 | No runtime | No | 9a | Yes; Manifest approval | Contract ecosystem audit and original requirements |
| docs/phase-9b-kontrakt-content-upgrade.md | ?? | .md / D | 36072 | No runtime | No | 9b | Yes; Manifest approval | Contract content/product/legal scope and verification |
| docs/phase-9c2-contract-visual-integration.md | ?? | .md / D | 37354 | No runtime | No | 9c2 | Yes; Manifest approval | Initial visual integration/provenance; final selections in 9C.2A |
| docs/phase-9c2-review/accessibility-results.json | ?? | .json / E | 2899 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/accessibility-verification.json | ?? | .json / E | 3687 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/asset-inventory.json | ?? | .json / E | 29850 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/baseline.json | ?? | .json / F | 207166 | Verifier default input only | No | 9C.2 | No; Approve future test-fixture strategy | Stale expectations fail current approved copy. Preserve; do not bless by staging or overwrite |
| docs/phase-9c2-review/blogg-fra-tilbud-til-kontrakt-og-faktura-1024.jpg | ?? | .jpg / E | 691106 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-fra-tilbud-til-kontrakt-og-faktura-1440.jpg | ?? | .jpg / E | 723786 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-fra-tilbud-til-kontrakt-og-faktura-390.jpg | ?? | .jpg / E | 596776 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-fra-tilbud-til-kontrakt-og-faktura-768.jpg | ?? | .jpg / E | 667192 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-nar-trenger-du-kontrakt-1024.jpg | ?? | .jpg / E | 463423 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-nar-trenger-du-kontrakt-1440.jpg | ?? | .jpg / E | 485960 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-nar-trenger-du-kontrakt-390.jpg | ?? | .jpg / E | 405173 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-nar-trenger-du-kontrakt-768.jpg | ?? | .jpg / E | 437916 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-tilbud-vs-kontrakt-1024.jpg | ?? | .jpg / E | 630683 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-tilbud-vs-kontrakt-1440.jpg | ?? | .jpg / E | 658261 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-tilbud-vs-kontrakt-390.jpg | ?? | .jpg / E | 601031 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-tilbud-vs-kontrakt-768.jpg | ?? | .jpg / E | 621560 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/browser-results.json | ?? | .json / E | 148784 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-blogg-fra-tilbud-til-kontrakt-og-faktura-1440-0.jpg | ?? | .jpg / E | 75269 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-blogg-fra-tilbud-til-kontrakt-og-faktura-1440-1.jpg | ?? | .jpg / E | 30924 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-blogg-fra-tilbud-til-kontrakt-og-faktura-1440-2.jpg | ?? | .jpg / E | 47174 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-blogg-fra-tilbud-til-kontrakt-og-faktura-1440-3.jpg | ?? | .jpg / E | 95711 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-blogg-nar-trenger-du-kontrakt-1440-0.jpg | ?? | .jpg / E | 73400 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-blogg-tilbud-vs-kontrakt-1440-0.jpg | ?? | .jpg / E | 62407 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-hva-skal-en-kontrakt-inneholde-1440-0.jpg | ?? | .jpg / E | 70040 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-hva-skal-en-kontrakt-inneholde-1440-1.jpg | ?? | .jpg / E | 39794 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-eksempel-1440-0.jpg | ?? | .jpg / E | 64138 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-eksempel-1440-1.jpg | ?? | .jpg / E | 62914 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-eksempel-1440-2.jpg | ?? | .jpg / E | 64251 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-eksempel-1440-3.jpg | ?? | .jpg / E | 68516 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-handverker-1440-0.jpg | ?? | .jpg / E | 33102 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-handverker-1440-1.jpg | ?? | .jpg / E | 65540 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-handverker-1440-2.jpg | ?? | .jpg / E | 65743 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-handverker-1440-3.jpg | ?? | .jpg / E | 43705 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-handverker-1440-4.jpg | ?? | .jpg / E | 38313 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-1440-0.jpg | ?? | .jpg / E | 35275 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-1440-1.jpg | ?? | .jpg / E | 33837 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-1440-2.jpg | ?? | .jpg / E | 35134 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-1440-3.jpg | ?? | .jpg / E | 72571 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-1440-4.jpg | ?? | .jpg / E | 22276 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-1440-5.jpg | ?? | .jpg / E | 47532 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-1440-6.jpg | ?? | .jpg / E | 34358 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-1440-7.jpg | ?? | .jpg / E | 30590 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-1440-8.jpg | ?? | .jpg / E | 32214 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-1440-9.jpg | ?? | .jpg / E | 75316 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-390-0.jpg | ?? | .jpg / E | 63827 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/fakturaprogram-gratis-1440.jpg | ?? | .jpg / E | 521883 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/fakturaprogram-gratis-390.jpg | ?? | .jpg / E | 362419 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/hva-skal-en-kontrakt-inneholde-1024.jpg | ?? | .jpg / E | 524208 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/hva-skal-en-kontrakt-inneholde-1440.jpg | ?? | .jpg / E | 547327 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/hva-skal-en-kontrakt-inneholde-390.jpg | ?? | .jpg / E | 455584 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/hva-skal-en-kontrakt-inneholde-768.jpg | ?? | .jpg / E | 492094 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-eksempel-1024.jpg | ?? | .jpg / E | 650482 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-eksempel-1440.jpg | ?? | .jpg / E | 681252 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-eksempel-390.jpg | ?? | .jpg / E | 526159 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-eksempel-768.jpg | ?? | .jpg / E | 629861 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-handverker-1024.jpg | ?? | .jpg / E | 562438 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-handverker-1440.jpg | ?? | .jpg / E | 586697 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-handverker-390.jpg | ?? | .jpg / E | 461571 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-handverker-768.jpg | ?? | .jpg / E | 536267 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-mal-1024.jpg | ?? | .jpg / E | 882642 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-mal-1440.jpg | ?? | .jpg / E | 985544 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-mal-390-top.jpg | ?? | .jpg / E | 57190 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-mal-390.jpg | ?? | .jpg / E | 651423 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-mal-768.jpg | ?? | .jpg / E | 823642 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/navigation-results.json | ?? | .json / E | 459 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/og-hva-skal-en-kontrakt-inneholde.png | ?? | .png / E | 123250 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/og-kontrakt-eksempel.png | ?? | .png / E | 132307 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/og-kontrakt-handverker.png | ?? | .png / E | 125398 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/og-kontrakt-mal.png | ?? | .png / E | 125522 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/opengraph-results.json | ?? | .json / E | 408 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/optimization-results.json | ?? | .json / E | 2108 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/owner-review-desktop.jpg | ?? | .jpg / E | 52514 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/owner-review-mobile-invoice.jpg | ?? | .jpg / E | 26945 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/page-verification.json | ?? | .json / E | 2476 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/removed-trial-derivatives.json | ?? | .json / E | 789 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/review-blogg-fra-tilbud-til-kontrakt-og-faktura.jpg | ?? | .jpg / E | 282525 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/review-blogg-nar-trenger-du-kontrakt.jpg | ?? | .jpg / E | 290693 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/review-blogg-tilbud-vs-kontrakt.jpg | ?? | .jpg / E | 336883 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/review-hva-skal-en-kontrakt-inneholde.jpg | ?? | .jpg / E | 294183 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/review-kontrakt-eksempel.jpg | ?? | .jpg / E | 248857 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/review-kontrakt-handverker.jpg | ?? | .jpg / E | 281374 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/review-kontrakt-mal.jpg | ?? | .jpg / E | 268177 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/tilbud-mal-1440.jpg | ?? | .jpg / E | 798707 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/tilbud-mal-390.jpg | ?? | .jpg / E | 486928 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/timeliste-mal-1440.jpg | ?? | .jpg / E | 922056 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/timeliste-mal-390.jpg | ?? | .jpg / E | 661476 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/verification.json | ?? | .json / E | 461 | No runtime | No | 9C.2 historical diagnostics | No; No action; preserve | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2a-invoice-copy-release-gate.md | ?? | .md / D | 4099 | No runtime | No | 9c2a | Yes; Manifest approval | Mandatory F01 acceptance requirements; keep publication hold explicit |
| docs/phase-9c2a-visual-quality-correction.md | ?? | .md / D | 25361 | No runtime | No | 9c2a | Yes; Manifest approval | Final crop fidelity/native-width limits and unresolved capture quality |
| docs/phase-9c3-contract-instructions.md | ?? | .md / D | 14662 | No runtime | No | 9c3 | Yes; Manifest approval | Instruction changes, anchor preservation, missing mobile media |
| docs/phase-9c4a-homepage-redesign-proposal.md | ?? | .md / D | 41833 | No runtime | No | 9c4a | Yes; Manifest approval | Historical design proposal; 9C.4C is current design authority |
| docs/phase-9c4b-homepage-implementation.md | ?? | .md / D | 19850 | No runtime | No | 9c4b | Yes; Manifest approval | Historical intermediate implementation; superseded by 9C.4C |
| docs/phase-9c4c-homepage-restoration.md | ?? | .md / D | 19667 | No runtime | No | 9c4c | Yes; Manifest approval | Approved final homepage restoration and regression evidence |
| docs/phase-9c5-contract-seo-visual-alignment.md | ?? | .md / D | 18695 | No runtime | No | 9c5 | Yes; Manifest approval | Contract SEO presentation and shared CSS dependencies |
| docs/phase-9d-final-website-qa.md | ?? | .md / D | 60096 | No runtime | No | 9d | Yes; Manifest approval | Full audit inventory; historical W01 failure closed by later report |
| docs/phase-9d1-contrast-remediation.md | ?? | .md / D | 22923 | No runtime | No | 9d1 | Yes; Manifest approval | W01 resolution and focused skip-link correction |
| docs/phase-9d2-seo-accessibility-cleanup.md | ?? | .md / D | 23958 | No runtime | No | 9d2 | Yes; Manifest approval | Final SEO/accessibility cleanup and preservation evidence |
| lib/socialMetadata.ts | ?? | .ts / A | 925 | Yes | Yes (source) | 9D.2 | Yes; Manifest approval | Imported by eight route modules; inherited image handling |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-b2b-9a2b3b4668e7.webp | ?? | .webp / B | 12318 | Yes: manifest → ContractMedia | No compile dependency; required media/tool integrity | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Selected lossless derivative; never replace with historical hash |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-b2b-c732250ada84.webp | ?? | .webp / F | 7426 | None in app/components/content/lib/scripts | No | 9C.2 historical crop | No; Owner archival decision | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-hero-cbbb9ad4befa.webp | ?? | .webp / B | 19084 | Yes: manifest → ContractMedia | No compile dependency; required media/tool integrity | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Selected lossless derivative; never replace with historical hash |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-hero-faee5c2ab7ef.webp | ?? | .webp / F | 12458 | None in app/components/content/lib/scripts | No | 9C.2 historical crop | No; Owner archival decision | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-326624105cfc.webp | ?? | .webp / B | 20122 | Yes: manifest → ContractMedia | No compile dependency; required media/tool integrity | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Selected lossless derivative; never replace with historical hash |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-mobile-5d4b1a2ab159.webp | ?? | .webp / F | 11240 | None in app/components/content/lib/scripts | No | 9C.2 historical crop | No; Owner archival decision | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-mobile-a038f2aeef10.webp | ?? | .webp / B | 12236 | Yes: manifest → ContractMedia | No compile dependency; required media/tool integrity | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Selected lossless derivative; never replace with historical hash |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-materials-9ff1040c096a.webp | ?? | .webp / F | 982 | None in app/components/content/lib/scripts | No | 9C.2 historical crop | No; Owner archival decision | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-materials-ac7fc43e9269.webp | ?? | .webp / B | 9014 | Yes: manifest → ContractMedia | No compile dependency; required media/tool integrity | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Selected lossless derivative; never replace with historical hash |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-action-45c573d688c0.webp | ?? | .webp / B | 56702 | Yes: manifest → ContractMedia | No compile dependency; required media/tool integrity | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Selected lossless derivative; never replace with historical hash |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-action-e5744404ead6.webp | ?? | .webp / F | 7918 | None in app/components/content/lib/scripts | No | 9C.2 historical crop | No; Owner archival decision | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-c9b47a50e629.webp | ?? | .webp / F | 2154 | None in app/components/content/lib/scripts | No | 9C.2 historical crop | No; Owner archival decision | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-ca69d638cd2f.webp | ?? | .webp / B | 32690 | Yes: manifest → ContractMedia | No compile dependency; required media/tool integrity | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Selected lossless derivative; never replace with historical hash |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-overview-e2387e1b3c82.webp | ?? | .webp / B | 48788 | Manifest/tool only; alias unused at runtime | No compile dependency; required media/tool integrity | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Keep complete 13-entry manifest and verifier; runtime alias uses offerAction |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-payments-632b3a9f8bfa.webp | ?? | .webp / F | 7626 | None in app/components/content/lib/scripts | No | 9C.2 historical crop | No; Owner archival decision | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-payments-d3df25846030.webp | ?? | .webp / B | 10230 | Yes: manifest → ContractMedia | No compile dependency; required media/tool integrity | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Selected lossless derivative; never replace with historical hash |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-pricing-0017bd7a2216.webp | ?? | .webp / F | 2014 | None in app/components/content/lib/scripts | No | 9C.2 historical crop | No; Owner archival decision | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-pricing-c40023acaa65.webp | ?? | .webp / B | 4838 | Yes: manifest → ContractMedia | No compile dependency; required media/tool integrity | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Selected lossless derivative; never replace with historical hash |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-saved-b2-b-df3ee5ae9f1d.webp | ?? | .webp / B | 11218 | Yes: manifest → ContractMedia | No compile dependency; required media/tool integrity | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Selected lossless derivative; never replace with historical hash |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-saved-b2-c-b8ceec4e775e.webp | ?? | .webp / B | 15456 | Yes: manifest → ContractMedia | No compile dependency; required media/tool integrity | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Selected lossless derivative; never replace with historical hash |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-work-02fb97838ded.webp | ?? | .webp / B | 15544 | Yes: manifest → ContractMedia | No compile dependency; required media/tool integrity | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Selected lossless derivative; never replace with historical hash |
| public/images/product/kontrakt/source/contract-2-b2b-form.png | ?? | .png / B | 65224 | Yes: full-size source link | No compile dependency; required media/tool integrity | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Original PNG required by full-size links AND crop reproducibility |
| public/images/product/kontrakt/source/contract-2-b2b-form_mobile.png | ?? | .png / B | 28687 | No runtime; source archive/hash baseline | No compile dependency; 93-source verification/archive | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Five tiny mobile originals: preserve provenance and 93-source verification; not displayed; public-path approval required |
| public/images/product/kontrakt/source/contract-2-b2b-in-documents.png | ?? | .png / B | 66122 | Yes: full-size source link | No compile dependency; required media/tool integrity | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Original PNG required by full-size links AND crop reproducibility |
| public/images/product/kontrakt/source/contract-2-b2b-in-documents_mobile.png | ?? | .png / B | 41362 | No runtime; source archive/hash baseline | No compile dependency; 93-source verification/archive | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Five tiny mobile originals: preserve provenance and 93-source verification; not displayed; public-path approval required |
| public/images/product/kontrakt/source/contract-2-b2c-form.png | ?? | .png / B | 76893 | Yes: full-size source link | No compile dependency; required media/tool integrity | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Original PNG required by full-size links AND crop reproducibility |
| public/images/product/kontrakt/source/contract-2-b2c-form_mobile.png | ?? | .png / B | 32375 | No runtime; source archive/hash baseline | No compile dependency; 93-source verification/archive | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Five tiny mobile originals: preserve provenance and 93-source verification; not displayed; public-path approval required |
| public/images/product/kontrakt/source/contract-2-b2c-in-documents.png | ?? | .png / B | 78256 | Yes: full-size source link | No compile dependency; required media/tool integrity | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Original PNG required by full-size links AND crop reproducibility |
| public/images/product/kontrakt/source/contract-2-b2c-in-documents_mobile.png | ?? | .png / B | 53101 | No runtime; source archive/hash baseline | No compile dependency; 93-source verification/archive | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Five tiny mobile originals: preserve provenance and 93-source verification; not displayed; public-path approval required |
| public/images/product/kontrakt/source/contract-2-from-offer-mobile.png | ?? | .png / B | 31420 | No runtime; source archive/hash baseline | No compile dependency; 93-source verification/archive | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Five tiny mobile originals: preserve provenance and 93-source verification; not displayed; public-path approval required |
| public/images/product/kontrakt/source/contract-2-from-offer.png | ?? | .png / B | 79214 | Yes: full-size source link | No compile dependency; required media/tool integrity | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Original PNG required by full-size links AND crop reproducibility |
| public/images/product/kontrakt/source/contract-2-invoice-conversion-mobile.png | ?? | .png / B | 40991 | Yes: full-size source link | No compile dependency; required media/tool integrity | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Original PNG required by full-size links AND crop reproducibility |
| public/images/product/kontrakt/source/contract-2-invoice-conversion.png | ?? | .png / B | 63028 | Yes: full-size source link | No compile dependency; required media/tool integrity | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Original PNG required by full-size links AND crop reproducibility |
| public/images/product/kontrakt/source/offer-to-contract.png | ?? | .png / B | 78532 | Yes: full-size source link | No compile dependency; required media/tool integrity | 9C.2 / 9C.2A | Conditional; Privacy/provenance approval | Original PNG required by full-size links AND crop reproducibility |
| scripts/prepare-contract-media.mjs |  M | .mjs / C | 4516 | No runtime | No; maintenance | 9C.2 / 9C.2A | Yes; Manifest approval | Reproduces 13 crops with tracked optimizer; do not execute during inventory |
| scripts/review-contract-pages.mjs | ?? | .mjs / F | 13710 | No runtime | No | 9C.2 | No; Archive/portability decision | Historical diagnostics tool: fixed localhost:3092 and review inputs; rewrites old report; not safe general release check |
| scripts/verify-contract-visuals.mjs | ?? | .mjs / C | 6473 | No runtime | No; maintenance | 9C.2 / 9C.2A | Yes; External approved fixture prerequisite | Checks pixels/hash/approved copy; default stale fixture fails; requires external approved baseline |

Phase 9E addition (not present in entry snapshot): docs/phase-9e-git-release-candidate-preparation.md; ??; Markdown/D; report-only; no runtime/build requirement; include after owner review. Its size is not fixed in this self-describing report. The final file is the only repository addition made in this task.

## 5. Classification by category

| Category | Entry files | Proposed inclusion | Decision |
| --- | --- | --- | --- |
| A | 34 | 34 | Include approved implementation/maintenance scope |
| B | 26 | 26 conditional | Privacy approval required; 12 runtime + 1 manifest-only WebP; 8 runtime originals + 5 archive originals |
| C | 2 | 2 | Include approved implementation/maintenance scope |
| D | 15 | 13 of 15 (plus this report) | Prior 7H/8F reports deferred to separate documentation commit |
| E | 91 | 0 | Preserve outside commit |
| F | 10 | 0 | Preserve; explicit owner review; no execution |

The 178 entries reconcile to 34 A + 26 B + 2 C + 15 D + 91 E + 10 F. Proposed set = 34 A + 26 B + 2 C + 14 D including this report = 76 paths. Excluded set = 2 older D + 91 E + 10 F = 103 paths. No ignored dependency/build/env files enter these counts.

## 6. Production source dependencies

The current tracked diff and every new source file were reviewed against HEAD. Changes map to the documented phases; no unexplained production modification was identified.

- SEO route → ContractProductPage / new ContractGuidePage (three guide slugs), ContractEditorialMedia and socialMetadata. File-based Open Graph route keeps the Contract-specific title selection.
- Blog route → ContractMedia for the new typed contractVisual blocks in blogPosts. The content change is restricted to the three Contract-related articles documented in 9B/9C.2, not a new rewrite in 9E.
- InstructionsHub → instructionGuides → contractProductVisuals → ContractMedia. Current Contract instructions use the approved mobile omission and user-initiated conversion/review language.
- ContractMedia → contractProductVisuals + contractProductMedia.json + contractMedia.module.css + already tracked shared ProductMedia. The new guide also imports existing invoiceGuide.module.css, so its W01 fix is part of the candidate.
- Navbar → new SkipLink; each legacy main target change must accompany it. Eight route modules import the new socialMetadata helper. ContactForm carries the approved accessible validation semantics.
- Homepage.tsx + home.module.css are the approved **9C.4C** end state. All four product sections, original document-flow resources and existing shared primitives/manifests remain dependencies already tracked in HEAD. Do not substitute the intermediate 9C.4B design.
- Five W01 CSS corrections are in scope despite the invoice/offer/timelist directory names. They fix documented shared-theme cascade issues; they are not unrelated product redesigns.

All 34 A paths are required to preserve the audited source state. Omitting new CSS/helpers/components would make the proposed tracked route/content changes incomplete. Existing shared components and manifests need no new staging because they are unchanged in HEAD.

## 7. Image and asset dependencies

The current manifest contains **13** derivative records generated from **8** PNG originals. ContractMedia creates original-image hrefs from original.file; excluding those originals would break public enlargement links even if Next build passes. Twelve distinct derivatives are selected through runtime aliases; offerOverview intentionally aliases offerAction, leaving the separate offer-overview derivative as a manifest/verifier/preparation dependency. Include all 13 selected records without silently editing the manifest.

**13 original PNGs** are proposed conditionally: eight serve runtime full-size links and regeneration; five tiny mobile sources are maintenance/archive inputs covered by the 93-source preservation baseline, not displayed screenshots. The five unused originals are not required for Next compilation or current page links. They are retained in the proposed source set for provenance and repeatable preservation verification. Because public/ is web-addressable, their inclusion needs explicit owner privacy approval too. If the owner chooses to keep these five private, revise the maintenance fixture/archive policy in a separately authorized phase; do not pretend the complete 93-source check works from that reduced checkout.

Eight historical WebP hashes are not selected in the current manifest or referenced in production/tool source. Their exclusion preserves final runtime behavior. They are not deleted. Existing older source images still used by homepage/blog/other manifests are tracked and unchanged; do not remove them.

No new public PDFs exist in this change set. No withheld current B2C/B2B PDF example is proposed. Original PNGs were read, not altered; no image generation/optimization was run.

| Exact asset path | Native pixels | Bytes | Dependency / decision |
| --- | --- | --- | --- |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-b2b-9a2b3b4668e7.webp | 430 × 200 | 12318 | Selected manifest |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-b2b-c732250ada84.webp | 341 × 142 | 7426 | Historical; exclude |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-hero-cbbb9ad4befa.webp | 534 × 260 | 19084 | Selected manifest |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-hero-faee5c2ab7ef.webp | 425 × 186 | 12458 | Historical; exclude |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-326624105cfc.webp | 725 × 253 | 20122 | Selected manifest |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-mobile-5d4b1a2ab159.webp | 162 × 315 | 11240 | Historical; exclude |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-mobile-a038f2aeef10.webp | 162 × 341 | 12236 | Selected manifest |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-materials-9ff1040c096a.webp | 425 × 27 | 982 | Historical; exclude |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-materials-ac7fc43e9269.webp | 425 × 185 | 9014 | Selected manifest |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-action-45c573d688c0.webp | 840 × 714 | 56702 | Selected manifest |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-action-e5744404ead6.webp | 840 × 54 | 7918 | Historical; exclude |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-c9b47a50e629.webp | 434 × 32 | 2154 | Historical; exclude |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-ca69d638cd2f.webp | 434 × 510 | 32690 | Selected manifest |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-overview-e2387e1b3c82.webp | 840 × 540 | 48788 | Selected manifest |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-payments-632b3a9f8bfa.webp | 341 × 145 | 7626 | Historical; exclude |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-payments-d3df25846030.webp | 341 × 199 | 10230 | Selected manifest |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-pricing-0017bd7a2216.webp | 425 × 46 | 2014 | Historical; exclude |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-pricing-c40023acaa65.webp | 425 × 99 | 4838 | Selected manifest |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-saved-b2-b-df3ee5ae9f1d.webp | 358 × 289 | 11218 | Selected manifest |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-saved-b2-c-b8ceec4e775e.webp | 487 × 359 | 15456 | Selected manifest |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-work-02fb97838ded.webp | 425 × 228 | 15544 | Selected manifest |
| public/images/product/kontrakt/source/contract-2-b2b-form.png | 430 × 720 | 65224 | Source/full-size link |
| public/images/product/kontrakt/source/contract-2-b2b-form_mobile.png | 65 × 720 | 28687 | Source archive only |
| public/images/product/kontrakt/source/contract-2-b2b-in-documents.png | 358 × 720 | 66122 | Source/full-size link |
| public/images/product/kontrakt/source/contract-2-b2b-in-documents_mobile.png | 112 × 720 | 41362 | Source archive only |
| public/images/product/kontrakt/source/contract-2-b2c-form.png | 534 × 720 | 76893 | Source/full-size link |
| public/images/product/kontrakt/source/contract-2-b2c-form_mobile.png | 79 × 720 | 32375 | Source archive only |
| public/images/product/kontrakt/source/contract-2-b2c-in-documents.png | 487 × 720 | 78256 | Source/full-size link |
| public/images/product/kontrakt/source/contract-2-b2c-in-documents_mobile.png | 152 × 720 | 53101 | Source archive only |
| public/images/product/kontrakt/source/contract-2-from-offer-mobile.png | 78 × 720 | 31420 | Source archive only |
| public/images/product/kontrakt/source/contract-2-from-offer.png | 546 × 720 | 79214 | Source/full-size link |
| public/images/product/kontrakt/source/contract-2-invoice-conversion-mobile.png | 162 × 720 | 40991 | Source/full-size link |
| public/images/product/kontrakt/source/contract-2-invoice-conversion.png | 851 × 403 | 63028 | Source/full-size link |
| public/images/product/kontrakt/source/offer-to-contract.png | 850 × 720 | 78532 | Source/full-size link |

## 8. Documentation recommendations

| Exact report | Recommendation / authority |
| --- | --- |
| docs/phase-7h-tilbud-production-verification.md | Defer from this release: Previous release verification; separate historical phase |
| docs/phase-8f-faktura-production-verification.md | Defer from this release: Previous release verification; separate historical phase |
| docs/phase-9a-kontrakt-ecosystem-audit.md | Include: Contract ecosystem audit and original requirements |
| docs/phase-9b-kontrakt-content-upgrade.md | Include: Contract content/product/legal scope and verification |
| docs/phase-9c2-contract-visual-integration.md | Include: Initial visual integration/provenance; final selections in 9C.2A |
| docs/phase-9c2a-invoice-copy-release-gate.md | Include: Mandatory F01 acceptance requirements; keep publication hold explicit |
| docs/phase-9c2a-visual-quality-correction.md | Include: Final crop fidelity/native-width limits and unresolved capture quality |
| docs/phase-9c3-contract-instructions.md | Include: Instruction changes, anchor preservation, missing mobile media |
| docs/phase-9c4a-homepage-redesign-proposal.md | Include: Historical design proposal; 9C.4C is current design authority |
| docs/phase-9c4b-homepage-implementation.md | Include: Historical intermediate implementation; superseded by 9C.4C |
| docs/phase-9c4c-homepage-restoration.md | Include: Approved final homepage restoration and regression evidence |
| docs/phase-9c5-contract-seo-visual-alignment.md | Include: Contract SEO presentation and shared CSS dependencies |
| docs/phase-9d-final-website-qa.md | Include: Full audit inventory; historical W01 failure closed by later report |
| docs/phase-9d1-contrast-remediation.md | Include: W01 resolution and focused skip-link correction |
| docs/phase-9d2-seo-accessibility-cleanup.md | Include: Final SEO/accessibility cleanup and preservation evidence |

Include this Phase 9E report as the approval/staging record. 9D is historical, not the latest W01/W02–W05/W09/W10 status: 9D.1 and 9D.2 record those resolutions. 9C.2A, 9C.4C and 9C.5 take precedence for final imagery/homepage/guide appearance. Earlier reports remain useful decision/provenance history; old measurements must not be represented as new 9E measurements.

These internal reports include local filesystem paths, implementation limitations and release requirements. They are not production page content and do not enter the Next public bundle. Review repository visibility before distributing internal documentation publicly. No credentials were detected by the limited scan; this is not a comprehensive secret-history audit.

## 9. Diagnostic artifacts recommended for exclusion

The **91 E files** are all individually enumerated with exact paths, sizes and reasons in section 4 and repeated in the exclusion manifest in section 16. They consist of earlier Phase 7E/8A JSON results and Phase 9C.2 review JSON/screenshots. None is imported by production source or required by npm run build. Their useful conclusions are recorded in the summary reports.

The old review-contract-pages script reads some of these files, uses a fixed local port and rewrites the historical integration report; it is separately classified F, not included as a portable release check. This makes excluding its raw inputs an explicit dependency decision, not an accidental omission. No diagnostic artifact is deleted, overwritten or executed. New 9E diagnostics stay outside this repository.

## 10. Ambiguous files requiring review

| Path | Finding / action |
| --- | --- |
| docs/phase-9c2-review/baseline.json | Stale expectations fail current approved copy. Preserve; do not bless by staging or overwrite |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-b2b-c732250ada84.webp | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-hero-faee5c2ab7ef.webp | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-mobile-5d4b1a2ab159.webp | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-materials-9ff1040c096a.webp | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-action-e5744404ead6.webp | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-c9b47a50e629.webp | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-payments-632b3a9f8bfa.webp | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-pricing-0017bd7a2216.webp | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| scripts/review-contract-pages.mjs | Historical diagnostics tool: fixed localhost:3092 and review inputs; rewrites old report; not safe general release check |

The eight old derivatives have established historical crop roles but are redundant for the current manifest; category F records the archival decision rather than asserting they are malicious. Neither they nor the review script were executed.

**Existing tracked root artifact (not one of the 178 dirty files):**

```text
te pages and add mobile registration showcasegit commit -m feat improve timeliste pages and add mobile registration showcase
```

Exact filename includes private-use characters U+F022 and U+F03A. Git ls-files -z confirms tracking. Read-only filesystem/hash and HEAD blob comparison: **1424 bytes**, 17 text lines, SHA-256 **1e71691515228a51255ad1e3ef67a15ae1f51d78b38817dcbdfa680414b07eed**, **identical to HEAD**. It contains pasted command/commit material, has no production/tool-source reference and is outside public/. It is not part of the proposed commit because it is unchanged. Do not execute, rename, delete or stage it. Recommend a separately approved housekeeping review. Excluding it here does not remove it from existing Git history or future checkouts.

## 11. Security and privacy observations

A limited, nonintrusive inspection of candidate text/source/docs checked obvious private-key markers, common token formats and literal secret assignments. No matches were found. No .env, credential, local deployment config or private PDF is in the allowlist. .gitignore and git check-ignore confirm .env.local, node_modules, .next, .vercel and next-env.d.ts remain ignored; values of environment files were not printed or copied. The build reports that it reads the existing .env.local; successful local build does not prove production environment configuration.

**Privacy review remains required for all 26 B files.** All 13 new PNG sources were visually opened read-only; the selected derivatives were verified as exact source crops. Captures show customer/worker names and street addresses; saved-document examples also show business/contact identifiers and an account-number field. Several labels are overtly demo/example labels, but that is insufficient evidence of permission or of every field being fictional. The smallest five mobile originals have text too small for reliable field-by-field inspection; do not claim they are cleared. Full-size source links expose more than the displayed crop.

Before approving these public assets, the owner must confirm the displayed identity, address, contact, business and account data are authorized demonstration data and that both original/full-size and crop distribution are permitted. No redaction or asset replacement is authorized or performed here. If this cannot be confirmed, keep the candidate on hold and authorize a separate authentic-capture correction; do not publish only the crop while leaving a sensitive original linked.

Unselected historical assets and raw diagnostics remain outside the proposed new commit. Existing tracked historical images are not newly privacy-certified by this review. No intrusive scan, secret-history scan or private service request was run.

## 12. Git diff findings

Reviewed the complete 27-file tracked diff, current new source/tool contents, manifest and runtime mappings. The source phases in section 4 account for every change. The broad content diff in seoPages includes quoted-key serialization around the four approved Contract records, not an unrelated whole-file rewrite. Existing line-ending warnings and a few restored terminal newlines are noted; no normalization was performed.

- git diff --check: **PASS, exit 0**. LF-to-CRLF advisory messages are not whitespace-error failures.
- No changed dependency/lock/config/env/API implementation/sitemap/robots file; no new package or feature introduced by 9E.
- No new runtime debug logging, test endpoint, local URL or temporary screenshot import was identified in proposed production source. Maintenance scripts do log results; that is not browser logging.
- The public contract-to-invoice copy matches the approved intended workflow, but remains publication-gated. Screenshots and website tests are not evidence of application financial correctness.
- Current old repository fixture and review script are **incomplete as portable verification infrastructure**, not evidence that current website source failed TypeScript/build. Do not silently stage stale fixtures or rewrite their expected text.

No staging, normalization or repair was performed. No unexpected production-source change was found; explicit unresolved decisions are recorded in sections 10, 11 and 17.

## 13. Technical validation results

| Executed command / scope | Result |
| --- | --- |
| npx.cmd tsc --noEmit --incremental false | PASS, exit 0; no incremental file requested |
| npm.cmd run lint | PASS, exit 0; full ESLint; no warning/error |
| npm.cmd run build | PASS, exit 0; Next 16.1.6; 55 generated entries; existing Node DEP0205 module.register deprecation notices |
| git diff --check | PASS, exit 0; LF/CRLF advisories only |
| node scripts/verify-contract-visuals.mjs with copied repository baseline in external directory | FAIL, exit 1: Approved section copy: kontrakt-mal. Old fixture expects “I Contract 2.0 …”; current approved source says “I Jobbleder …”. Stops before media checks. |
| Same unmodified verifier with preserved approved Phase 9D.2 external baseline | PASS, exit 0; 13 derivatives match dimensions/bytes/source hashes and lossless raw pixels; 93 original source hashes unchanged; approved content/legal assertions pass. |
| Read-only source/reference/manifest inspection | PASS for current runtime dependency existence; eight historical hashes unreferenced; 8 source full-size links identified |
| Repository preservation guard | 487 initial file hashes unchanged; no missing files; HEAD/branch/index unchanged; only Phase 9E report added |

The failing default fixture was **not updated**. The later approved fixture was copied from the existing external Phase 9D.2 evidence, not newly recorded from current content to manufacture a pass. Original fixture SHA-256: f04e0831eb9612d0b78dfe8ade67d7451021800e379e1fcdd1fcc5d64c90e859. Later external fixture SHA-256: 7e7193e272adc4c1fe4ccdb773935e426072cf5b62fd1cb9044a7d1b5ff4f0aa. Both remain available; their content/hashes differ. Verifier result changedBaselineFiles is a historical comparison, not a list of files edited in Phase 9E.

External evidence directory: C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9e. initial.json records NUL-decoded status, exact expanded inventory and all 487 initial hashes; tracked.patch records the reviewed tracked diff; inspection.json records references, limited secret scan and artifact metadata; contract-check/baseline.json preserves the failing old fixture; approved-check/baseline.json and verification.json preserve the passing later fixture/results.

Safe reproduction of the successful existing check requires an approved external fixture directory containing that baseline, plus the 93 original sources. Set CONTRACT_REVIEW_DIRECTORY to it before node scripts/verify-contract-visuals.mjs. The script writes only its two result JSON files there. Do not use --record-baseline as proof of historical preservation; do not use --clean-trials.

prepare-contract-media.mjs was inspected but **not run** because it regenerates public media and the manifest. review-contract-pages.mjs was inspected but **not run** because it writes old reports/review files and assumes localhost:3092. No new browser/axe/Lighthouse/production QA was requested or performed in 9E; prior reports retain their own scope and dates.

## 14. Exact proposed commit manifest

**Proposed total: 76 individually named paths**, conditional on owner approval of the 26 media files and acceptance of the verifier fixture limitation. The base source/tool/documentation set has 50 paths, including this report. No source/media subset is authorization to publish. No path outside these lists should be staged.

### 14.1 Source, maintenance and documentation — 50 paths

```text
app/(seo)/[slug]/opengraph-image.tsx
app/(seo)/[slug]/page.tsx
app/blogg/[slug]/page.tsx
app/blogg/kategori/[category]/page.tsx
app/blogg/page.tsx
app/instruksjoner/page.tsx
app/kontakt/page.tsx
app/layout.tsx
app/om-oss/page.tsx
components/ContactForm.tsx
components/Footer.tsx
components/Navbar.tsx
components/SkipLink.tsx
components/home/Homepage.tsx
components/home/home.module.css
components/instructions/InstructionsHub.tsx
components/product/contract/ContractEditorialMedia.tsx
components/product/contract/ContractGuidePage.tsx
components/product/contract/ContractMedia.tsx
components/product/contract/ContractProductPage.tsx
components/product/contract/contractGuide.module.css
components/product/contract/contractMedia.module.css
components/product/invoice/invoiceExample.module.css
components/product/invoice/invoiceGuide.module.css
components/product/invoice/invoiceRequirements.module.css
components/product/offer/offerExample.module.css
components/product/timelist/specializedTimelist.module.css
content/blogPosts.ts
content/contractProduct.ts
content/contractProductMedia.json
content/contractProductVisuals.ts
content/instructionGuides.ts
content/seoPages.ts
docs/phase-9a-kontrakt-ecosystem-audit.md
docs/phase-9b-kontrakt-content-upgrade.md
docs/phase-9c2-contract-visual-integration.md
docs/phase-9c2a-invoice-copy-release-gate.md
docs/phase-9c2a-visual-quality-correction.md
docs/phase-9c3-contract-instructions.md
docs/phase-9c4a-homepage-redesign-proposal.md
docs/phase-9c4b-homepage-implementation.md
docs/phase-9c4c-homepage-restoration.md
docs/phase-9c5-contract-seo-visual-alignment.md
docs/phase-9d-final-website-qa.md
docs/phase-9d1-contrast-remediation.md
docs/phase-9d2-seo-accessibility-cleanup.md
docs/phase-9e-git-release-candidate-preparation.md
lib/socialMetadata.ts
scripts/prepare-contract-media.mjs
scripts/verify-contract-visuals.mjs
```

### 14.2 Required/source media — 26 paths, privacy approval required

```text
public/images/product/kontrakt/optimized/jobbleder-contract-2-b2b-9a2b3b4668e7.webp
public/images/product/kontrakt/optimized/jobbleder-contract-2-hero-cbbb9ad4befa.webp
public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-326624105cfc.webp
public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-mobile-a038f2aeef10.webp
public/images/product/kontrakt/optimized/jobbleder-contract-2-materials-ac7fc43e9269.webp
public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-action-45c573d688c0.webp
public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-ca69d638cd2f.webp
public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-overview-e2387e1b3c82.webp
public/images/product/kontrakt/optimized/jobbleder-contract-2-payments-d3df25846030.webp
public/images/product/kontrakt/optimized/jobbleder-contract-2-pricing-c40023acaa65.webp
public/images/product/kontrakt/optimized/jobbleder-contract-2-saved-b2-b-df3ee5ae9f1d.webp
public/images/product/kontrakt/optimized/jobbleder-contract-2-saved-b2-c-b8ceec4e775e.webp
public/images/product/kontrakt/optimized/jobbleder-contract-2-work-02fb97838ded.webp
public/images/product/kontrakt/source/contract-2-b2b-form.png
public/images/product/kontrakt/source/contract-2-b2b-form_mobile.png
public/images/product/kontrakt/source/contract-2-b2b-in-documents.png
public/images/product/kontrakt/source/contract-2-b2b-in-documents_mobile.png
public/images/product/kontrakt/source/contract-2-b2c-form.png
public/images/product/kontrakt/source/contract-2-b2c-form_mobile.png
public/images/product/kontrakt/source/contract-2-b2c-in-documents.png
public/images/product/kontrakt/source/contract-2-b2c-in-documents_mobile.png
public/images/product/kontrakt/source/contract-2-from-offer-mobile.png
public/images/product/kontrakt/source/contract-2-from-offer.png
public/images/product/kontrakt/source/contract-2-invoice-conversion-mobile.png
public/images/product/kontrakt/source/contract-2-invoice-conversion.png
public/images/product/kontrakt/source/offer-to-contract.png
```

The five unreferenced mobile PNGs are explicitly included for source provenance/full hash verification, not claimed to be runtime necessities. If owner approval excludes them, the proposed total and test reproducibility policy must be revised explicitly before staging. The other eight source originals cannot be omitted without changing current full-size links. The manifest-only offer-overview WebP remains included to keep all 13 existing manifest/tool records complete.

### 14.3 Candidate byte fingerprints (excluding this self-describing report)

Recheck these before a later authorized staging phase. A differing hash means this reviewed plan needs reassessment; do not overwrite the changed file.

| Path | SHA-256 |
| --- | --- |
| app/(seo)/[slug]/opengraph-image.tsx | 3fd6a7c5ef0fbd73af1801cdecc6d55df5a9e4227d10d6c60c1e7539093ace1b |
| app/(seo)/[slug]/page.tsx | 57a39825757811f74060a9a816c406b851a5c2e4e78996dc94afa72d279f4b7e |
| app/blogg/[slug]/page.tsx | 0a21ffcc452498b7cbb9d1edb1f708f987ac2b18576761b65132a1d01e95f733 |
| app/blogg/kategori/[category]/page.tsx | 1b35d880141906bdbd33c5944327046ad66d0fc18ea438db38c3cf402867890e |
| app/blogg/page.tsx | e76f0434ba8472541fa1356fc8c7f7c7490adedc0499c87a069958e69564b75d |
| app/instruksjoner/page.tsx | e658e53654b4d7cdd1493e3df48dfb4cbdfc25c65a51f02e0f870d81035d485e |
| app/kontakt/page.tsx | c2d9b9a0d4f73be7172b61a752d58982e45a3f375a6a12453602342e2b0813fb |
| app/layout.tsx | a02f85e07c74d7d68047b55948e1ef61c0e3b53516103149d64c4151dfe921f9 |
| app/om-oss/page.tsx | 0560fc986e2962de654ea21f702cc10f7a0f9fe058bfcd68102a0a0163abea3d |
| components/ContactForm.tsx | a5e49a9d71870f0713f45e54a70fe2797c4d1c7f0d0592aa2cc848eeb9f9c052 |
| components/Footer.tsx | 604a609e749a7fe7bd59b71b3d4758757f8cdf3aec382eb0326049b2e59e70f7 |
| components/Navbar.tsx | d239d8308dd35dc27177b22d0aeeed2569c0ef4976e34d8721e3e474b34e5258 |
| components/SkipLink.tsx | 8d1d1174901768fb25f468f95aafaf758f6ef8af10d45b1382a778e9fd37744b |
| components/home/Homepage.tsx | ef398a3ba4ea03b1d61d4c0badfbca267bbe73936f7c23694a154950c8ce7a5f |
| components/home/home.module.css | b4582fa0d720eed73944efd7f617b6e029e4e9cccca21fa9859f64ca45b71271 |
| components/instructions/InstructionsHub.tsx | a7ee33219c4c3012e359caca0056290d0e0d16b1c10bd89ca3a22fbf47471d2b |
| components/product/contract/ContractEditorialMedia.tsx | ac1a5b5dca31d76d368b8ab293a3eba1e39b723fc3fb417dea8d7eb31a2945c6 |
| components/product/contract/ContractGuidePage.tsx | 766d9c7986feecb893406d9bd6637636325f1508df0b3146130ade51752ed79c |
| components/product/contract/ContractMedia.tsx | b96eccdbef32aa4feebc125b786ded3e3785e1fb9ddab262169f9eec1be8fd05 |
| components/product/contract/ContractProductPage.tsx | 1595045dda6e609386cc92c7f854fce7cccd924de3b105f6557e962fa060257f |
| components/product/contract/contractGuide.module.css | d3fc4eb75d29bec6131e0f15cfe30d3b326f936ea550e1dba220af814d0f0b78 |
| components/product/contract/contractMedia.module.css | eb535fc56bf2617a04b4aab8540a67cc9d436d400ac7278b80f7b12cd9b45806 |
| components/product/invoice/invoiceExample.module.css | c0b42c50a0d240493f0aa2c6911e1b95b89ccea43feb28ac3df3229be0c46845 |
| components/product/invoice/invoiceGuide.module.css | 95de9f7c3201722209666070af6743da801a938394a4fdb91710b778f96838f8 |
| components/product/invoice/invoiceRequirements.module.css | c106623bbdbbe18e3428a2151698a5a1d9cba8d6fe55303de750b6babe292f09 |
| components/product/offer/offerExample.module.css | 1fb9771e70e0b293c5bb94f65d400570e7904c1a058b098bedb0b650c5a2ce0a |
| components/product/timelist/specializedTimelist.module.css | bb9e2380d914caf472f65158a5f26434f2bc34de3d371e436347ba0c1b197390 |
| content/blogPosts.ts | 7e8f8474cc8abdcfc16e1ff35b2708f99264cbe9f438cf98bf11a1061e1f7083 |
| content/contractProduct.ts | 6c0218ff61fa233cab32f14ce312f370c11c3e1a7754a60811823e72ffaa703e |
| content/contractProductMedia.json | 9cf2d941d1c6ee752feefa07a4272dee18cca6b138db61083d96540e08943162 |
| content/contractProductVisuals.ts | fcec1f1e08cf64e830aa31aafbd13a5e4af29ab61466676a8ede3dc4ea2668bc |
| content/instructionGuides.ts | 31afca663aeceb6ae6334c8418bad898adae7b6ea165073730a70e6e6c16c133 |
| content/seoPages.ts | 90c0b3f69031e69bcddfb5718e00e01c2fdce15f7dbab165ef56705ae7762378 |
| docs/phase-9a-kontrakt-ecosystem-audit.md | ca53976c36e382eda20699326a59e7e5de80a7b15da6a7d87ada400dc9eb9d1f |
| docs/phase-9b-kontrakt-content-upgrade.md | 058bbda9c066c66c91641e713490222469af08326e6f4ae609cce09053d0ae1b |
| docs/phase-9c2-contract-visual-integration.md | 1d9dde628f35da629f7dc4ded9d0e9a41b4f78e2ff0c9792497dc103ce3f9bb6 |
| docs/phase-9c2a-invoice-copy-release-gate.md | 1c3447152ac99638ac166faed33327b7913ad73595389f3373191df23d542873 |
| docs/phase-9c2a-visual-quality-correction.md | 4b31ce614d762322fb32eccf67f5dba85192a6418b893dfce3546fab68f315f7 |
| docs/phase-9c3-contract-instructions.md | 57e67902bafab758fbb4f863f305edb0ad31b9ad74c8b63150fccd1920e8e8d9 |
| docs/phase-9c4a-homepage-redesign-proposal.md | 321ccc14081059354a8c392008a2ba52a26fdf129fd2f3a3aaf58e71b9df7e05 |
| docs/phase-9c4b-homepage-implementation.md | 029fd1754429bda73b6fdc01a42415e6ddb73a9c9edd8132a2261d747f7f78c8 |
| docs/phase-9c4c-homepage-restoration.md | f7491c27e68f2698a91dc6e755ce76351af4336479f664076025136f60a7e0db |
| docs/phase-9c5-contract-seo-visual-alignment.md | d90ade3ac350765298d0796a8f20e79a3dcd957d90eec7362bf3a083ce57eb6b |
| docs/phase-9d-final-website-qa.md | 054e20c5648facb17624e43e84a677baf9b04223531a5a6111f5f7d8a108c62b |
| docs/phase-9d1-contrast-remediation.md | 9382c314d2da9bc8a01b851d4056ed44ec371143dab67f151ac11fa180d78a3f |
| docs/phase-9d2-seo-accessibility-cleanup.md | 9ca916facf1255cc172b221dee2652eae2e0e2ddc21a8c89de933a03fe0a1733 |
| lib/socialMetadata.ts | 1d464e0e3781e0059053c818f684a0bfc948e65ee51e5af9a551cbe7204a37e1 |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-b2b-9a2b3b4668e7.webp | 9a2b3b4668e7c68f0f8b36a96e1a76d505984bf5d0b26e4133f6d51b2b3042d4 |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-hero-cbbb9ad4befa.webp | cbbb9ad4befa3568ab6844bc6b4ba66c6bae92499c1845ff0619c6aefa1c472e |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-326624105cfc.webp | 326624105cfc596ff7cd43adab4fd4c1eb8414fa087a8ccd8b03f3fd187c8f18 |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-mobile-a038f2aeef10.webp | a038f2aeef10938f0c49333575bf654285bf942b6bdb7950784e19783023eca9 |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-materials-ac7fc43e9269.webp | ac7fc43e92698a1af1610f94dd646a79223d32fc1142335d5cfc0741aa0ee2e3 |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-action-45c573d688c0.webp | 45c573d688c0f7310b2d084b63f53afadf0d772fadf7b603285929e957244673 |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-ca69d638cd2f.webp | ca69d638cd2f34719bb2f172c4d556bcd291b891e06e77d9148e045409ae8725 |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-overview-e2387e1b3c82.webp | e2387e1b3c82daf66a8c5692058e57537a08e35c952fa8bdceb5ab2a968f5c5b |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-payments-d3df25846030.webp | d3df258460303cd35013532078e0d5cbd450c0b6bbef332ba1177ae7b291b78b |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-pricing-c40023acaa65.webp | c40023acaa652a4f75c9e32287b322b0d4082c2689cb4cf802f5c3c8bfeb6b35 |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-saved-b2-b-df3ee5ae9f1d.webp | df3ee5ae9f1df4bf7677d8ee56168bf40cbf51aaf779a845ece9c227f6b859de |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-saved-b2-c-b8ceec4e775e.webp | b8ceec4e775efab9e6a3cf166aae92217d899d3bebb0615dc63fdd8a7cfc4ced |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-work-02fb97838ded.webp | 02fb97838dedd04fb049471dde507656b692d2920e18cf29c5fc685956d532c0 |
| public/images/product/kontrakt/source/contract-2-b2b-form.png | a17b970e6e90896773e427aa42e403431d06722adeca20a47b110e88909c730a |
| public/images/product/kontrakt/source/contract-2-b2b-form_mobile.png | 0560b4d63c752490cbc53c029e25b67ac0cf533076588efbbd33ea59e721ed08 |
| public/images/product/kontrakt/source/contract-2-b2b-in-documents.png | 78234b4b07105c516de9230ee9d2d71debee69345e7e636e0ca8e2db8c39bf5f |
| public/images/product/kontrakt/source/contract-2-b2b-in-documents_mobile.png | 3cf7f0c7c0eaf722f48b3a8f125a98494fbb817215010187237b4bccc0833a58 |
| public/images/product/kontrakt/source/contract-2-b2c-form.png | 9a65c858430e6e0a3e71d6721445272a19703c480c7228976bd082acdbf896ca |
| public/images/product/kontrakt/source/contract-2-b2c-form_mobile.png | b39bd3952cdfa65fc03c023269aa57610a120ec440598c51fdd7b9e4957310ed |
| public/images/product/kontrakt/source/contract-2-b2c-in-documents.png | 4354209fc5be278cc01e3f8b4c0ebb75bfe1a4e93b62fa8fed0f1fe6d9108800 |
| public/images/product/kontrakt/source/contract-2-b2c-in-documents_mobile.png | 939db4c8bf535b2fd4e30d3a95d3ddfbff796cd1bd1acbc58cb3a18421be8aa9 |
| public/images/product/kontrakt/source/contract-2-from-offer-mobile.png | 40dbda87127202b2c1ed110e34a13e6fdc4759c428f945e5e40cde59f51681f0 |
| public/images/product/kontrakt/source/contract-2-from-offer.png | 89467e19224b4eb8113a566ce6801528b77a1bbc7f8915efb127b151250b2540 |
| public/images/product/kontrakt/source/contract-2-invoice-conversion-mobile.png | cdf219f3046684a473a284322741138f9fff062c052c1a0da3b12cd310813a51 |
| public/images/product/kontrakt/source/contract-2-invoice-conversion.png | f4563a540384a5a51f8475bd20da07fe6ca23befad93da0cfb68cb095c7115b5 |
| public/images/product/kontrakt/source/offer-to-contract.png | 0cd936393ade8c16cb249565f28f814c155cc65f1514d39f299a30e090162a37 |
| scripts/prepare-contract-media.mjs | 221c785ecac866c4c9e011742f7ff1270c3ebba23e14a779bd266ba7b88f32bc |
| scripts/verify-contract-visuals.mjs | 02062a83d59f5c23c4c4a2ce22af6168abc26eaba9c352124e63d5e5d59545d5 |

## 15. Exact proposed staging commands

**PROPOSAL ONLY — NOT EXECUTED.** Execute only in a later owner-approved Git phase, after privacy decisions and fixture-plan acceptance. These commands do not authorize a push or deployment. Use PowerShell; single-quoted individual paths avoid shell interpolation, and Git --literal-pathspecs protects [slug] and [category] from pathspec interpretation. No directory, wildcard, all-files staging, forced ignored files or unrelated-index reset is used.

```powershell
Set-Location -LiteralPath 'C:\Users\ddlas\Code\jobbleder-site'
if ((git rev-parse HEAD).Trim() -ne 'ec472f5f24ca2627c0c38a5b6e4efe5b9d378aae') { throw 'HEAD changed; re-review manifest.' }
if ((git branch --show-current).Trim() -ne 'main') { throw 'Branch changed; stop.' }
if (@(git diff --cached --name-only).Count -ne 0) { throw 'Index is not empty; preserve it and stop.' }
git status --short
git diff --check
if ($LASTEXITCODE -ne 0) { throw 'Whitespace check failed.' }

# Approve all fingerprints/content and privacy decisions before proceeding.
$releaseSourceToolsDocs = @(
    'app/(seo)/[slug]/opengraph-image.tsx'
    'app/(seo)/[slug]/page.tsx'
    'app/blogg/[slug]/page.tsx'
    'app/blogg/kategori/[category]/page.tsx'
    'app/blogg/page.tsx'
    'app/instruksjoner/page.tsx'
    'app/kontakt/page.tsx'
    'app/layout.tsx'
    'app/om-oss/page.tsx'
    'components/ContactForm.tsx'
    'components/Footer.tsx'
    'components/Navbar.tsx'
    'components/SkipLink.tsx'
    'components/home/Homepage.tsx'
    'components/home/home.module.css'
    'components/instructions/InstructionsHub.tsx'
    'components/product/contract/ContractEditorialMedia.tsx'
    'components/product/contract/ContractGuidePage.tsx'
    'components/product/contract/ContractMedia.tsx'
    'components/product/contract/ContractProductPage.tsx'
    'components/product/contract/contractGuide.module.css'
    'components/product/contract/contractMedia.module.css'
    'components/product/invoice/invoiceExample.module.css'
    'components/product/invoice/invoiceGuide.module.css'
    'components/product/invoice/invoiceRequirements.module.css'
    'components/product/offer/offerExample.module.css'
    'components/product/timelist/specializedTimelist.module.css'
    'content/blogPosts.ts'
    'content/contractProduct.ts'
    'content/contractProductMedia.json'
    'content/contractProductVisuals.ts'
    'content/instructionGuides.ts'
    'content/seoPages.ts'
    'docs/phase-9a-kontrakt-ecosystem-audit.md'
    'docs/phase-9b-kontrakt-content-upgrade.md'
    'docs/phase-9c2-contract-visual-integration.md'
    'docs/phase-9c2a-invoice-copy-release-gate.md'
    'docs/phase-9c2a-visual-quality-correction.md'
    'docs/phase-9c3-contract-instructions.md'
    'docs/phase-9c4a-homepage-redesign-proposal.md'
    'docs/phase-9c4b-homepage-implementation.md'
    'docs/phase-9c4c-homepage-restoration.md'
    'docs/phase-9c5-contract-seo-visual-alignment.md'
    'docs/phase-9d-final-website-qa.md'
    'docs/phase-9d1-contrast-remediation.md'
    'docs/phase-9d2-seo-accessibility-cleanup.md'
    'docs/phase-9e-git-release-candidate-preparation.md'
    'lib/socialMetadata.ts'
    'scripts/prepare-contract-media.mjs'
    'scripts/verify-contract-visuals.mjs'
)

# This entire array is conditional on explicit owner media/privacy approval.
$releaseMedia = @(
    'public/images/product/kontrakt/optimized/jobbleder-contract-2-b2b-9a2b3b4668e7.webp'
    'public/images/product/kontrakt/optimized/jobbleder-contract-2-hero-cbbb9ad4befa.webp'
    'public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-326624105cfc.webp'
    'public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-mobile-a038f2aeef10.webp'
    'public/images/product/kontrakt/optimized/jobbleder-contract-2-materials-ac7fc43e9269.webp'
    'public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-action-45c573d688c0.webp'
    'public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-ca69d638cd2f.webp'
    'public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-overview-e2387e1b3c82.webp'
    'public/images/product/kontrakt/optimized/jobbleder-contract-2-payments-d3df25846030.webp'
    'public/images/product/kontrakt/optimized/jobbleder-contract-2-pricing-c40023acaa65.webp'
    'public/images/product/kontrakt/optimized/jobbleder-contract-2-saved-b2-b-df3ee5ae9f1d.webp'
    'public/images/product/kontrakt/optimized/jobbleder-contract-2-saved-b2-c-b8ceec4e775e.webp'
    'public/images/product/kontrakt/optimized/jobbleder-contract-2-work-02fb97838ded.webp'
    'public/images/product/kontrakt/source/contract-2-b2b-form.png'
    'public/images/product/kontrakt/source/contract-2-b2b-form_mobile.png'
    'public/images/product/kontrakt/source/contract-2-b2b-in-documents.png'
    'public/images/product/kontrakt/source/contract-2-b2b-in-documents_mobile.png'
    'public/images/product/kontrakt/source/contract-2-b2c-form.png'
    'public/images/product/kontrakt/source/contract-2-b2c-form_mobile.png'
    'public/images/product/kontrakt/source/contract-2-b2c-in-documents.png'
    'public/images/product/kontrakt/source/contract-2-b2c-in-documents_mobile.png'
    'public/images/product/kontrakt/source/contract-2-from-offer-mobile.png'
    'public/images/product/kontrakt/source/contract-2-from-offer.png'
    'public/images/product/kontrakt/source/contract-2-invoice-conversion-mobile.png'
    'public/images/product/kontrakt/source/contract-2-invoice-conversion.png'
    'public/images/product/kontrakt/source/offer-to-contract.png'
)
$releasePaths = @($releaseSourceToolsDocs) + @($releaseMedia)
if ($releasePaths.Count -ne 76) { throw 'Unexpected manifest count; stop.' }
foreach ($releasePath in $releasePaths) {
    if (-not (Test-Path -LiteralPath $releasePath -PathType Leaf)) { throw "Missing approved file: $releasePath" }
}
# Only after the later owner-approved staging authorization:
git --literal-pathspecs add -- $releasePaths
if ($LASTEXITCODE -ne 0) { throw 'Staging failed; inspect index without discarding work.' }
git diff --cached --check
if ($LASTEXITCODE -ne 0) { throw 'Staged whitespace check failed.' }
git -c core.quotepath=true diff --cached --name-status
git diff --cached --stat
git diff --cached --no-ext-diff
git status --short
# Compare staged names/count (76) and exact content against section 14.
# Keep every excluded path unstaged. Stop on any unexpected file or change.
# No commit, push or deploy command is authorized here.
```

Recommended future commit message: **feat(marketing): modernize contract ecosystem and homepage with accessibility fixes**. No commit command was executed or included in the staging sequence. The manifest remains conditional: do not stage only 50 text files and treat a build with missing public media as a complete candidate.

## 16. Files explicitly excluded

All **103** changed/untracked exclusions below remain on disk and unstaged. Their reasons are recorded per file here and in section 4. “No build dependency” does not imply an obsolete diagnostic can reproduce its old review without those inputs.

| Exact path | Category | Reason / safe exclusion scope |
| --- | --- | --- |
| docs/phase-7e-diagnostics/browser-accessibility.json | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-7e-diagnostics/route-link-seo.json | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-7e-diagnostics/verification.json | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-7h-tilbud-production-verification.md | D | Previous release verification; separate historical phase |
| docs/phase-8a-diagnostics/checks.json | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-8a-diagnostics/inventory.json | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-8f-faktura-production-verification.md | D | Previous release verification; separate historical phase |
| docs/phase-9c2-review/accessibility-results.json | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/accessibility-verification.json | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/asset-inventory.json | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/baseline.json | F | Stale expectations fail current approved copy. Preserve; do not bless by staging or overwrite |
| docs/phase-9c2-review/blogg-fra-tilbud-til-kontrakt-og-faktura-1024.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-fra-tilbud-til-kontrakt-og-faktura-1440.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-fra-tilbud-til-kontrakt-og-faktura-390.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-fra-tilbud-til-kontrakt-og-faktura-768.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-nar-trenger-du-kontrakt-1024.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-nar-trenger-du-kontrakt-1440.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-nar-trenger-du-kontrakt-390.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-nar-trenger-du-kontrakt-768.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-tilbud-vs-kontrakt-1024.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-tilbud-vs-kontrakt-1440.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-tilbud-vs-kontrakt-390.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/blogg-tilbud-vs-kontrakt-768.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/browser-results.json | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-blogg-fra-tilbud-til-kontrakt-og-faktura-1440-0.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-blogg-fra-tilbud-til-kontrakt-og-faktura-1440-1.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-blogg-fra-tilbud-til-kontrakt-og-faktura-1440-2.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-blogg-fra-tilbud-til-kontrakt-og-faktura-1440-3.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-blogg-nar-trenger-du-kontrakt-1440-0.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-blogg-tilbud-vs-kontrakt-1440-0.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-hva-skal-en-kontrakt-inneholde-1440-0.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-hva-skal-en-kontrakt-inneholde-1440-1.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-eksempel-1440-0.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-eksempel-1440-1.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-eksempel-1440-2.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-eksempel-1440-3.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-handverker-1440-0.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-handverker-1440-1.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-handverker-1440-2.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-handverker-1440-3.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-handverker-1440-4.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-1440-0.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-1440-1.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-1440-2.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-1440-3.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-1440-4.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-1440-5.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-1440-6.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-1440-7.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-1440-8.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-1440-9.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/detail-kontrakt-mal-390-0.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/fakturaprogram-gratis-1440.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/fakturaprogram-gratis-390.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/hva-skal-en-kontrakt-inneholde-1024.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/hva-skal-en-kontrakt-inneholde-1440.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/hva-skal-en-kontrakt-inneholde-390.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/hva-skal-en-kontrakt-inneholde-768.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-eksempel-1024.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-eksempel-1440.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-eksempel-390.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-eksempel-768.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-handverker-1024.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-handverker-1440.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-handverker-390.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-handverker-768.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-mal-1024.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-mal-1440.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-mal-390-top.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-mal-390.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/kontrakt-mal-768.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/navigation-results.json | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/og-hva-skal-en-kontrakt-inneholde.png | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/og-kontrakt-eksempel.png | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/og-kontrakt-handverker.png | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/og-kontrakt-mal.png | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/opengraph-results.json | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/optimization-results.json | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/owner-review-desktop.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/owner-review-mobile-invoice.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/page-verification.json | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/removed-trial-derivatives.json | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/review-blogg-fra-tilbud-til-kontrakt-og-faktura.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/review-blogg-nar-trenger-du-kontrakt.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/review-blogg-tilbud-vs-kontrakt.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/review-hva-skal-en-kontrakt-inneholde.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/review-kontrakt-eksempel.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/review-kontrakt-handverker.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/review-kontrakt-mal.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/tilbud-mal-1440.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/tilbud-mal-390.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/timeliste-mal-1440.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/timeliste-mal-390.jpg | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| docs/phase-9c2-review/verification.json | E | Raw browser/SEO/image review evidence; summaries in reports. Historical review script may read it; production does not |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-b2b-c732250ada84.webp | F | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-hero-faee5c2ab7ef.webp | F | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-mobile-5d4b1a2ab159.webp | F | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-materials-9ff1040c096a.webp | F | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-action-e5744404ead6.webp | F | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-c9b47a50e629.webp | F | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-payments-632b3a9f8bfa.webp | F | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| public/images/product/kontrakt/optimized/jobbleder-contract-2-pricing-0017bd7a2216.webp | F | Unselected historical hash; absent from current manifest and all production/tool source references; preserve locally |
| scripts/review-contract-pages.mjs | F | Historical diagnostics tool: fixed localhost:3092 and review inputs; rewrites old report; not safe general release check |

Also exclude the unchanged tracked root artifact in section 10 from new staging; it is already in HEAD and has no diff. Ignored .env*, node_modules, .next, .vercel, next-env.d.ts, *.tsbuildinfo, coverage/build output, PEMs and logs are not release candidates. These are ignore-rule categories, not wildcard staging instructions. No ignored file contents were added or credentials printed. New external Phase 9E diagnostics are outside Git and excluded. No file was deleted.

## 17. Remaining owner decisions

1. Approve the exact 76-path candidate, including Phase 9 documentation and the acknowledged historical 9C.4A/B reports. Their retained history does not override the approved 9C.4C end state. Defer earlier 7H/8F reports to a separate documentation decision.
2. Confirm authorized demo provenance/privacy for all 26 proposed media files, including original href targets. Decide whether the five unreadable archive-only mobile PNGs may remain web-addressable; do not certify them from visual approval alone.
3. Approve a future verification-fixture policy. The old repo baseline fails current approved terminology; the working later baseline exists only in external evidence. This report and C-tool inclusion preserve that prerequisite, **not a claim that the default verifier is self-contained in a fresh checkout**. A separately scoped change may be needed to version a reviewed fixture or decouple stale historical assertions. Do not silently refresh it in this phase.
4. Leave the 103 exclusions intact; separately decide historical derivative/review-tool archival and the unchanged tracked root artifact's housekeeping. No cleanup is authorized here.
5. Supply F01 application financial regression/version acceptance before publication; obtain legal approval before withheld PDF release; confirm MVA treatment before adding Premium prices. No application work was attempted.
6. Authorize a later staging/commit phase explicitly. If pushing main triggers Vercel automatically, do not push while publication holds remain. Website technical pass and Git manifest approval are distinct from deployment authorization.

## 18. Publication gate status and final preservation

| Gate | Status / implication |
| --- | --- |
| Website compilation/lint | PASS in this phase; existing DEP0205 notices remain |
| Existing contract visual check | PASS with later approved external fixture; FAIL with stale repo fixture; prerequisite unresolved for default fresh-checkout usage |
| Media privacy/provenance | OWNER REVIEW REQUIRED; no universal demo-data clearance claimed |
| F01 — APPLICATION FINANCIAL VERIFICATION | PENDING; mandatory before publishing dependent conversion/calculation claims |
| Withheld current B2C/B2B contract PDFs | Remain unpublished pending required independent legal review and explicit approval |
| Premium pricing / MVA | No new pricing; confirm MVA treatment before any addition |
| Production edge/analytics | Not tested in this Git-only task; no claim of operational resolution |
| Git release authorization | No staging/commit/push/deploy performed; awaiting owner approval |

Final preservation was checked against the initial NUL-decoded 487-file SHA-256 snapshot: no existing file changed or disappeared; the only new nonignored repository path is this report; no staged paths; main and HEAD ec472f5f24ca2627c0c38a5b6e4efe5b9d378aae unchanged. Existing ignored .next build output may change through the authorized build; ignored caches/build artifacts are not source changes. No reset, clean, stash, revert, rename, deletion, commit, push or deployment occurred. All prior dirty work remains.

**PHASE 9E COMPLETE — AWAITING OWNER APPROVAL OF COMMIT MANIFEST**
