# Phase 4C.3A — Navigation consistency fix

Date: 18 November 2026, Europe/Berlin. **Implemented and validated locally; awaiting approval. No commit, push or deployment.**

Preview: [http://127.0.0.1:3025/fakturaprogram-gratis](http://127.0.0.1:3025/fakturaprogram-gratis)

## 1. Root cause

The discrepancy came from a separate legacy component, not metadata, routing configuration or a different Next layout.

| Page | Header before this fix |
|---|---|
| Homepage | `SiteHeader` from `components/site/SiteChrome.tsx` |
| `/fakturaprogram-gratis` | Legacy client `Navbar` from `components/Navbar.tsx` |
| `/timeliste-mal` | Shared `SiteHeader` |
| `/tilbud-mal` | Shared `SiteHeader` |
| `/kontrakt-mal` | Shared `SiteHeader` in the approved local implementation |

`InvoiceProductPage.tsx` directly imported/rendered `Navbar`. Its hardcoded `navLinks` began with `Hjem`, and it had its own mobile hamburger state. The other pages already rendered the shared native product disclosure/mobile menu. The SEO route simply selects the corresponding product component; it did not configure the different menu.

## 2. Exact files and changes

Modified application files:

1. `components/product/invoice/InvoiceProductPage.tsx`
   - Replace the `Navbar` import with the existing shared `SiteHeader` import.
   - Replace `<Navbar />` with `<SiteHeader />`.
   - Keep all product sections, main markup, skip link, FAQ schema and existing footer unchanged.
2. `components/product/invoice/invoiceProduct.module.css`
   - Add three local aliases mapping shared header color tokens onto the existing invoice palette:
     - `--site-ink: var(--ink)`
     - `--site-muted: var(--muted)`
     - `--site-line: var(--line)`
   - The invoice page has its own product-surface tokens. These aliases supply the reused header's brand/hover, mobile-label and border colors without wrapping/changing the content surface or modifying shared CSS.

Created documentation:

- `docs/phase-4c.3a-navigation-consistency-fix.md`

No duplicate dropdown, new dependency, custom disclosure script or shared-navigation API was added. `SiteChrome.tsx`, `site.module.css` and the legacy `Navbar` are unchanged. Other pages using either component retain their source implementations.

## 3. Resulting navigation

All five pages now use the same header implementation and existing destinations:

| Visible product label | Destination |
|---|---|
| Faktura | `/fakturaprogram-gratis` |
| Timeliste | `/timeliste-mal` |
| Tilbud | `/tilbud-mal` |
| Kontrakt | `/kontrakt-mal` |

Desktop uses **Produkter** with native `details/summary`. Mobile uses the existing **Meny** panel and product grid. Resource links, **Logg inn**, accessible brand/home link and landmark labels come directly from the existing shared component. No labels/destinations were reimplemented locally.

The common breakpoint remains 1024 px: tested 375/768 px use the mobile menu, 1280/1440 px use the desktop dropdown. Faktura adopts that existing breakpoint instead of its old legacy 768 px desktop threshold. Its header is now the same 73 px total height as the other pages, replacing the old 65 px header. The resulting initial main-content offset is an intentional shared-header alignment, not a loading/menu-induced layout shift. No main-section spacing or typography rule was changed.

## 4. Technical validation

Fresh checks after the application change:

| Command | Result |
|---|---|
| `npx.cmd tsc --noEmit --incremental false` | PASS, exit 0; no TypeScript diagnostics. |
| `npm.cmd run lint` | PASS, full ESLint, exit 0; no reported warnings/errors. |
| `npm.cmd run build` | PASS, exit 0; compilation, type validation and all 55 static pages completed. |

Build output includes the existing Node worker `DEP0205 module.register()` deprecation notices. No validation failure occurred. The production preview was started on port 3025 after the successful build.

## 5. Navigation regression verification

Chrome headless, local production build, cache disabled, viewport height 900 px, DPR 1. Each matrix cell was executed in **both light and dark OS preference**, for forty browser cases total.

| Page | 375 px | 768 px | 1280 px | 1440 px |
|---|---|---|---|---|
| Homepage | PASS ×2 | PASS ×2 | PASS ×2 | PASS ×2 |
| Faktura | PASS ×2 | PASS ×2 | PASS ×2 | PASS ×2 |
| Timeliste | PASS ×2 | PASS ×2 | PASS ×2 | PASS ×2 |
| Tilbud | PASS ×2 | PASS ×2 | PASS ×2 | PASS ×2 |
| Kontrakt | PASS ×2 | PASS ×2 | PASS ×2 | PASS ×2 |

Every case checked:

- Correct visible mobile/desktop disclosure and initially closed state.
- Enter opens, Space closes, and pointer activation opens/closes the menu.
- Tab enters the first product link with visible focus; summary/link outlines are solid 3 px.
- Exact product labels and hrefs match the shared four-item inventory.
- Mobile panel links are visible and at least 44 px high.
- Opening the overlay leaves the main element's top position unchanged; no horizontal overflow when closed/open.
- Sticky header remains at y=0 after a 500 px scroll.
- Header height, sampled brand color/font, white background and border color match the homepage reference at the same width/preference.
- Shared Hovedmeny/Mobilmeny semantics remain present; existing Logg inn URL is preserved, and no Hjem resource item is rendered.
- Axe checks scoped to the header: zero detected WCAG A/AA/best-practice violations in all forty cases. Decorative-character manual-review entries are not a detected contrast failure.
- Observed CLS was 0 in all forty navigation runs; no JavaScript page exception was recorded. This is a scoped local navigation measurement, not a new full-page Lighthouse or field-performance audit.

Actual product-link activations: **32**, consisting of 28 cross-route navigations and four valid Faktura self-links. At every tested width, all four product links were clicked from Faktura; the other four pages' product-menu Faktura link was also clicked. All reached the expected path. Link inventories were checked in both preferences; actual cross-page activations were performed in the light runs.

Screenshots were captured for homepage and Faktura, open and closed menus, at all four widths. Desktop/mobile Faktura open-menu screenshots were visually inspected. No new navigation style was designed.

## 6. Faktura content and SEO preservation

Before changing the component, the existing local server's rendered Faktura HTML was saved outside the repository. A browser DOMParser parsed that reference, and the new rendered page was compared against it at all four widths in both preferences.

All **eight exact before/after comparisons** passed for:

- Entire rendered `main.innerHTML`, including existing text, headings, CTAs, images, FAQ and table markup.
- Entire existing footer markup.
- Metadata title and description.
- Self-referencing canonical.
- All parsed JSON-LD blocks, including Organization, WebSite and FAQPage.

Preserved metadata:

- Title: `Fakturaprogram gratis – lag faktura enkelt i Norge | Jobbleder`.
- Description: `Fakturaprogram gratis for håndverkere og små bedrifter. Lag faktura raskt i nettleseren og last ned som PDF.`
- Canonical: `https://www.jobbleder.no/fakturaprogram-gratis`.

The SEO data record, invoice content/components other than the page's header selection, metadata generator, sitemap, robots and all image/source assets were not edited. Existing Kontrakt implementation changes from earlier phases are preserved without modification by this fix.

## 7. Remaining issues and scope

No new navigation failure or required follow-up fix was identified. Existing Phase 4C.3 P2/P3 observations—including local analytics, image density and the externally unverified Timeliste dynamic PDF—were not changed or broadly retested by this navigation-only task. No claim of clean production analytics or external download availability is made here.

Tests used desktop Chrome with emulated sizes/preferences, not physical touch hardware, Safari/Firefox or a complete screen-reader session. No new Lighthouse run was required or performed for this small navigation change.

Evidence outside the repository:

`C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/`

- `phase4c3a-baseline.json`: working-tree preservation baseline.
- `phase4c3a-invoice-before.html`: pre-change local rendered HTML.
- `phase4c3a-evidence/results.json`: forty cases, thirty-two link activations and eight exact content/SEO comparisons.
- `phase4c3a-evidence/{home,invoice}-{width}-{open,closed}.png`: navigation captures.
- `phase4c3a-evidence/final-scope.json`: final file-scope assertions.

The completed hash comparison of 211 pre-existing files confirmed only the two listed application files changed; the other 209 files are unchanged. This report is the only new repository file. Shared components, other page implementations, source images, previous reports and unrelated local work are preserved. HEAD, the empty index and `next-env.d.ts` are unchanged. No commit, push or deployment.

**Stop after this local fix and validation. Await approval before release.**
