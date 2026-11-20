# Phase 8B — Faktura example visual pilot

Date: 20 November 2026. Local implementation only. **READY FOR VISUAL OWNER REVIEW.** No staging, commit, push or deployment.

Preview: [http://127.0.0.1:3041/faktura-eksempel](http://127.0.0.1:3041/faktura-eksempel).

## 1. Initial findings

Read the complete Phase 8A audit and inspected the existing route, invoice/media components, metadata, FAQ and contextual links. Fresh browser baseline visits covered `/faktura-eksempel`, `/tilbud-eksempel`, `/lage-tilbud` and `/timeliste-mal-pdf` at 375 and 1440 px. Their actual rendered layouts and component architecture informed the pilot.

The original example page used the generic SEO renderer: intro/checkmarks/app CTA, cluster navigation, then the invoice. Its document started at y=993 px on desktop and y=1,465 px on mobile. Nested containers reduced mobile document width to 279 px. The top cluster and nine-card related block repeated destinations and delayed the example.

The approved references establish navy surfaces, clear typography, restrained disclosures and contextual resources. This pilot shares those principles but places the invoice **inside the opening hero**, rather than duplicating Tilbud's separate hero/document/acceptance sections.

## 2. Authentic invoice asset verification

| Asset | Exact existing path | Dimensions | Bytes |
| --- | --- | --- | --- |
| Original | `public/images/product/invoice/source/fv_free_watermark.png` | 959×1251 | 127,681 |
| Reused derivative | `public/images/product/invoice/optimized/jobbleder-invoice-free-8239cf43dbea.webp` | 959×1251 | 52,268 |

Visually inspected the original before implementation. It is Jobbleder-generated Faktura 110 from Demo Company to **Eksempel Eiendom**, dated 18 November 2026, due 2 December 2026. Its one line is Legging av parkett: quantity 1 × net price 12,000; example VAT 25%/3,000; total 15,000 NOK. Bank account, due date and invoice-number payment reference appear in the document. Jobbleder Free branding is visible.

The PDF screenshot is an illustrative completed document with demonstration data, not a blank downloadable template or a universal legal reference. The project shown in the application editor is not described as a separate visible PDF field.

The existing optimized derivative preserves the original proportions and content. No image was generated, edited, cropped, duplicated or optimized during Phase 8B. All 59 inventoried Phase 8A media files retain their recorded SHA-256 values. The full-size link continues to open the same 959×1251 WebP.

## 3. Design decisions

- Navy #101827 and secondary #172337 match the approved editorial family under both OS color preferences. Typography, spacing, focus and shared site chrome follow the existing system.
- Desktop hero pairs concise copy and a restrained factual summary with an intact 520 px-wide invoice. Mobile order is introduction/action, document, then the summary; facts do not delay the document.
- Shortened the opening after the first visual pass and moved the reading shortcut beside the factual summary. The document now starts approximately 550 px down the mobile page instead of the first iteration's 632 px.
- Replaced checklist/card composition with a semantic lined definition list explaining the existing five factual topics: parties, number/dates, work/price, VAT/total and payment information.
- Preserved the useful practical qualifications and Free/manual-download explanation. Creation guidance links to `/lage-faktura` and the exact instruction rather than recreating the full tutorial.
- Three primary related guides use compact editorial links. Six existing cross-document destinations remain available in a keyboard-operable disclosure instead of a nine-card wall. The redundant link to the current page itself was removed.
- One app CTA in the hero; contextual links elsewhere. No extra promotional boxes, repeated screenshots, gradients or animation.

## 4. Component architecture

`InvoiceExamplePage` is a dedicated server component selected by the existing dynamic route dispatcher only for `faktura-eksempel`. `generateMetadata`, static route parameters and the generic renderer for other slugs remain intact.

Reused `SiteHeader`, `SiteFooter`, `SectionContainer`, `ApplicationCTA`, registration guidance and `InvoiceFigure`. The new CSS module scopes the page's layout and navy tokens. No global styles or dependencies changed.

`InvoiceFigure` has one optional `hero` flag, defaulting to false. For this page it enables the 520 px maximum, zero external figure margin, appropriate hero sizes/caption and eager/high-priority loading. The blog's default lazy loading, 400 px line crop, alt/caption/enlargement and existing styling remain intact. The hero image is a major opening element and only 52,268 bytes, so eager/high priority is justified. Explicit 959×1251 dimensions and auto height reserve its proportions.

Native `<details>/<summary>` implements the three FAQs and supplementary resource list. No accordion dependency or new client component was introduced; existing site JavaScript/analytics remains.

## 5. Exact files changed

| File | Change |
| --- | --- |
| `app/(seo)/[slug]/page.tsx` | Added import and route-specific dispatch; two added lines. |
| `components/editorial/InvoiceFigure.tsx` | Optional hero presentation/loading flag; existing defaults preserved. |
| `components/editorial/invoiceFigure.module.css` | Three hero-only rules; default figure rules unchanged. |
| `components/product/invoice/InvoiceExamplePage.tsx` | New dedicated example page. |
| `components/product/invoice/invoiceExample.module.css` | New scoped editorial styling. |
| `docs/phase-8b-faktura-example-visual-pilot-report.md` | This new implementation/review report. |

Entry HEAD: `638319d2f8d20706046740bde39e53477c707ce7`. The 331-file entry hash baseline shows exactly the three intended existing-source modifications above; the other 328 existing files are unchanged. The two source components and this report are new. Existing untracked Phase 7E/7H and Phase 8A reports/diagnostics were preserved. `/fakturaprogram-gratis`, all content records, metadata configuration and original images were not modified.

Scripts, raw results and screenshots are external diagnostics in:

`C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase8b/`

Main results: `before.json`, `after.json`, `verification.json`, `interactions.json`, `hashes.json`. An intermediate `iteration-1.json` is retained; final screenshots/results correspond to the final build.

## 6. Before/after comparison and screenshots

| Observation | Before | Final |
| --- | --- | --- |
| Desktop 1440 document top | 993 px | 155 px; 838 px earlier |
| Mobile 375 document top | 1,465 px | 549.7 px; approximately 915 px earlier |
| Mobile document width | 279 px | 327 px; 17.2% wider |
| Desktop document width | 570 px, separate section | 520 px within the opening split; original 959 px image remains accessible |
| Related resources | Top cluster plus nine cards | Contextual links, three primary guides and six supplementary links in a disclosure |
| Invoice image payload | One existing 52,268-byte WebP, lazy | Same single WebP, eager/high priority; no added image payload |

The smaller desktop display is intentional to balance the two-column hero. The complete document fits in the opening 1000 px test viewport, with enlargement available for fine print. No image is scaled beyond its intrinsic width. On mobile, an intact document still has small fine print; the purpose of the larger preview is recognition and structure, with full-size viewing for detailed inspection.

Fresh baseline and final screenshots:

- [Before desktop](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase8b/before-faktura-eksempel-1440-dark.png).
- [Final desktop — full page](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase8b/after-faktura-eksempel-1440-dark.png).
- [Final desktop — hero](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase8b/after-faktura-eksempel-1440-dark-hero.png).
- [Before mobile](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase8b/before-faktura-eksempel-375-dark.png).
- [Final mobile — full page](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase8b/after-faktura-eksempel-375-dark.png).
- [Final mobile — hero](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase8b/after-faktura-eksempel-375-dark-hero.png).

Additional final screenshots at 768/1280 are in the same directory; light-preference 375/1440 captures were also saved. Reviewed full desktop/mobile composition and the hero after the mobile refinement. Captures may retain visible keyboard focus from the interaction checks.

## 7. Responsive results

Final local production build: **16 combinations**, four widths × light/dark OS preference × reduced/ordinary motion. Each completed successfully with no horizontal overflow, including expanded disclosure states.

| Width | Document top / displayed size | Layout and result |
| --- | --- | --- |
| 375 | 549.7 px / 327×426.6 | Text/action → intact document → summary. Full available gutter width, readable surrounding text, no clipped controls. |
| 768 | 482.3 px / 520×678.3 | Single-column hero with centered document; explanation/practical content adapts below. No overflow. |
| 1280 | 155 px / 520×678.3 | Split hero, lined explanation rows and balanced practical columns. No overflow. |
| 1440 | 155 px / 520×678.3 | Split hero and coherent resource/footer transition. No overflow. |

Document dimensions/proportions are identical in both preferences. Deliberate navy styling is preserved; no theme switch was introduced. The FAQ and supplementary resource disclosure work at each tested width. The measured layout-shift accumulation was **CLS 0 in all 16 cases** during the exercised image/scroll/disclosure sequence; this is a local observation, not field CWV.

Regression browser samples at 375 and 1440 covered home, `/fakturaprogram-gratis`, `/lage-faktura`, `/faktura-krav`, the three approved references and `/blogg/faktura-eksempel-sma-bedrifter`: 16 observations, unchanged metadata/schema/rendered text and no overflow. The responsive offer-figure enlargement label intentionally differs between mobile and desktop; comparisons used a matching-viewport baseline where available. No content change or regression was hidden by treating different responsive labels as equivalent.

The small-business article still displays the original crop at 327 px on mobile and its native 400 px desktop maximum. Its dimensions, lazy loading and full-invoice destination remain intact.

## 8. Accessibility results

- **16 axe runs**, with all disclosures expanded, covering WCAG 2 A/AA, WCAG 2.1 A/AA, WCAG 2.2 AA and best practices: zero confirmed violations.
- The incomplete rule was `color-contrast`, on decorative `aria-hidden` navigation chevrons/arrow glyphs. These results remain incomplete rather than certified passes. They are not confirmed failures of the surrounding text. Normal copy, captions, controls and visible focus were inspected in the rendered page.
- One H1; meaningful H2/H3 hierarchy. Document facts use `<dl>/<dt>/<dd>`. Breadcrumb, main, related navigation and footer retain semantic structure and distinct navigation names.
- Existing Norwegian invoice alt text and enlargement label remain accurate. Caption identifies demonstration data and distinguishes the document from a blank template. No image is hidden from assistive technology.
- All four page disclosures (three FAQs plus resources) opened/closed with Enter/Space in every combination: 64 disclosure checks. The 16 visible header-menu keyboard checks also passed, including subsequent link focus.
- Full-size image link was Enter-activated at 375 and 1440; both decoded the correct 959×1251 document.
- Separate keyboard checks at 375/1440 verified the first Tab exposes “Hopp til innhold” at y=12 with a visible 3 px outline, Enter focuses the main target, the reading shortcut reaches its section at approximately y=100, and the direct creation-instruction link opens the correct instruction near y=100.
- Reduced motion computes root scroll behavior `auto`; ordinary preference retains existing `smooth` scrolling. No new animation was added.

This is targeted automated/manual browser testing, not a full screen-reader, physical-device, cross-engine or WCAG-certification exercise.

## 9. SEO preservation

| Element | Preserved result |
| --- | --- |
| Route | `/faktura-eksempel`; no redirect/new URL. |
| Rendered title | `Faktura eksempel – se hvordan en faktura kan se ut | Jobbleder` |
| Meta description | `Se et enkelt faktura eksempel og lær hvordan en profesjonell faktura bør bygges opp for små bedrifter og håndverkere.` |
| Canonical | `https://www.jobbleder.no/faktura-eksempel` |
| H1 | `Faktura eksempel`, exactly one. |
| Indexing | Existing robots metadata/default indexability unchanged. |
| FAQ | Same three questions and answers, read directly from the unchanged SEO record. |
| Structured data | Exactly one `FAQPage`, unchanged and consistent with visible FAQs; inherited Organization/WebSite schema unchanged. |
| Sitemap / robots infrastructure | Source/configuration unchanged; no route registration or canonical-strategy change. |

Before/after browser snapshots match title, description, canonical, robots metadata, H1 and parsed schema objects in every final case. `content/seoPages.ts`, site URL helpers and metadata generation were not edited.

Useful existing content about parties, dates, price/VAT, payment information, demonstration data, manual distribution and Free watermark remains. The five explanatory facts reuse the existing checklist, split into label/body with sentence capitalization. No legal checklist or full creation tutorial was duplicated.

All useful previous main-content destinations remain, including the small-business example, exact invoice-creation instruction and six cross-document resources. The only removed unique main-content destination is the redundant current-page self-link. The app CTA now uses the existing shared `https://app.jobbleder.no/` constant, the same root destination as before. All 15 distinct internal paths linked from the page returned local HTTP 200.

## 10. Product accuracy checks

The page describes the actual Faktura 110 and its values. The 25% rate and document dates are examples, not universal settings or payment rules. The image is not presented as a blank template or a legal-compliance guarantee.

The practical paragraph still requires users to enter their own data, check the invoice, generate/download the PDF and send it manually. Free creation/export and Jobbleder watermark wording is retained. The product link offers the established Free/Premium explanation without inventing restrictions or prices.

No promise of automatic document creation/sending, automatic reminders, bank matching, EHF, accounting integration, VAT reporting or bookkeeping was added. No direct invoice-editing claim was introduced. Credit-note behavior was not expanded or changed. Phase 8A's F10 and other ecosystem editorial recommendations remain outside this one-page pilot.

## 11. Technical validation

| Check | Final result |
| --- | --- |
| `npx.cmd tsc --noEmit --incremental false` | Exit 0. |
| `npm.cmd run lint` | Exit 0; full ESLint, no warnings. |
| `npm.cmd run build` | Exit 0; Next.js 16.1.6, 55 generated pages. |
| `git diff --check` | Exit 0; no whitespace errors. |
| Browser runtime/console | No page or console errors in the 16 final target cases. |
| FAQ/menu/enlargement/internal links | Passed the scoped checks described above. |
| Diff/preservation review | Only three intended existing files differ; original media and existing audit work unchanged. New files are the dedicated page, scoped CSS and report. No staged changes. |

The build retains the existing Node 26 `DEP0205`/`module.register()` deprecation output. No new build failure, missing import or image warning was observed. Earlier Git LF/CRLF advisory output was resolved by matching the touched files' existing working-tree line endings; the final diff check is clean.

Analytics calls were intercepted with synthetic 204 responses during automated visits to avoid unnecessary tracking. Those are not real endpoint results. Analytics source/configuration was unchanged; this phase does not claim to fix the previously documented local handshake 400 or reverify production analytics.

## 12. Known limitations

- Local preview and Chrome viewport emulation only; this pilot is not deployed. No production release verification, GSC performance or conversion uplift is claimed.
- Original invoice fine print remains small on mobile; the working full-size view is intentionally retained. The 520 px desktop preview balances the hero rather than maximizing document size independently of the text.
- The same optimized WebP is used at each width; `sizes` documents presentation but does not create additional image variants. Image payload is unchanged, not a claimed download reduction from this phase.
- CLS is an observed local result. Lighthouse/LCP and field performance were not measured; no historical scores are reused as current results.
- Axe incomplete contrast items and untested assistive-technology/device scenarios remain qualified above.
- Numbering/backend guarantees, credit-note edge cases and ecosystem-wide content changes remain outside scope.

## 13. Owner visual review checklist

- [ ] Desktop hero balances the complete invoice with headline, practical summary and primary action.
- [ ] Mobile document appears sufficiently early, at useful width, with comfortable text and spacing.
- [ ] Lined field explanations and restrained FAQ/resources fit the approved editorial direction.
- [ ] Full-size document and creation-instruction links behave as expected.
- [ ] The example, Free wording, manual delivery and retained search intent are accurate.

Review at [the local preview](http://127.0.0.1:3041/faktura-eksempel). Awaiting visual owner approval; no staging, commit, push or deployment has occurred.

**READY FOR VISUAL OWNER REVIEW**
