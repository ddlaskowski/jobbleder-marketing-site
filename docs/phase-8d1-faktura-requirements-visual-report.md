# Phase 8D.1 — Faktura requirements visual modernization

Date: 2026-11-20. Local implementation of `/faktura-krav` only. No staging, commit, push or deployment.

Preview: <http://127.0.0.1:3041/faktura-krav>.

## 1. Executive summary

The requirements page now has a dedicated reference-led composition: concise opening, four section shortcuts, lined definition lists, a separate conditional-information section, practical review, correction guidance, restrained product explanation, native FAQ and compact resources.

The previously corrected factual content remains. Existing paragraphs and checklist sentences were compared with the rendered final page, allowing capitalization and regrouping: none are missing. Seller identification is separated from conditional MVA-registration wording; the Foretaksregisteret condition is moved into the conditional section. Practical payment additions remain clearly separate from requirements.

TypeScript, full ESLint, production build and diff whitespace checks passed. All 16 target browser cases had zero confirmed axe violations, no horizontal overflow and no observed runtime/console errors. Metadata, H1 and JSON-LD match the baseline. The existing Phase 8B/8C implementations are preserved. No images or dependencies were added.

## 2. Existing content and legal baseline

Preparation included Phase 8A, 8B and 8C reports, the dynamic route dispatcher, `content/seoPages.ts`, existing invoice components and CSS, and the offer example/creation references. Before screenshots and rendered metadata/text were recorded for the target and six reference/help routes at 375/1440.

The original route used the generic SEO renderer: short hero, four marketing checkmarks, app CTA, cluster navigation, nested narrow content, long checklists, legacy FAQ and nine related cards. The useful corrected content already covered numbering, document/date distinctions, parties, delivery, amounts, conditional registration, practical payment details, Free/Premium and credit-note corrections. These were not treated as unresolved historical deficiencies.

Preservation decisions:

- Keep all existing substantive paragraphs and checklist explanations, including qualifications about private buyers, work locations, conditional MVA, varying rates, Foretaksregisteret and the absence of a universal 14-day term.
- Preserve practical bank/payment-reference/contact explanations without turning them into general legal obligations.
- Keep the qualified credit-note/new-invoice explanation and both existing correction anchors.
- Keep existing product/manual-distribution and Free/Premium wording.
- Replace generic promotional opening/bullets with a short reference introduction; preserve metadata and original H1.
- Preserve all useful old destinations; remove only the redundant current-page self-link.

## 3. Authoritative-source verification

Sources were opened during this phase. The review supports a scoped practical overview, not independent certification of every invoice type or the application.

| Source | Scope verified / editorial consequence |
|---|---|
| [Altinn: Faktura — salgsdokumentasjon](https://info.altinn.no/starte-og-drive/regnskap-og-revisjon/regnskap/faktura-salgsdokumentasjon/) (page updated 18 March 2026) | Identification, delivery and monetary information; conditional registration/company wording; separate tax treatments; credit-note reference. Existing distinctions retained. |
| [Skatteetaten: Inntekter](https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/rutiner-regnskap-og-kassasystem/gode-rutiner-for-daglig-drift/inntekter/) | Official invoice/numbering overview. No app-numbering guarantee inferred from it. Its general timing summary was not expanded into a universal completion-only rule. |
| [Skatteetaten: Registrere, endre eller slette i Mva-registeret](https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/mva/registrere-endre-slette/) | Approval/registration condition before invoicing with MVA confirmed. Added a direct contextual link beneath conditional information. |
| [Lovdata: bokføringsforskriften, chapter 5](https://lovdata.no/forskrift/2004-12-01-1558/kap5) | Direct full-text access failed with HTTP 405, including section links from Altinn. Search snippets are not treated as complete consolidated-law verification. |

Topic treatment:

- Numbering remains a general documented requirement, explicitly separate from any claim about Jobbleder's backend implementation.
- Invoice date, delivery information and payment due date remain distinct. No single default payment period is prescribed.
- Seller/buyer identification and the private-customer qualification are retained.
- Registration-dependent MVA wording, tax treatment and company-form conditions are visibly grouped. The added clarification about separate lines for mixed treatments/rates follows Altinn's guidance.
- Description, scope, price, tax and total explanations remain intact, including the NOK tax-amount qualification.
- Payment-account/reference/contact details remain practical additions. The new review checklist is practical support, not a declaration that every legal condition has been satisfied.
- Existing qualified credit-note correction wording is retained; no silent overwrite/edit promise.
- Timing and documentation conditions are acknowledged without inventing new deadlines, retention periods or blanket rules. No claim that every invoice follows identical rules.

Unresolved verification boundary: direct current consolidated regulation text was inaccessible. No new detailed statutory citation, exhaustive exception list or universal legal guarantee was introduced. Specialized transaction situations still require checking applicable official guidance.

## 4. Design decisions

Navy `#101827` and `#172337`, established typography/gutters and blue contextual links align with the approved editorial family. This deliberate appearance is retained under both OS color preferences.

The opening uses a single reading action, “Se oversikten”, and four compact section links. The one app CTA appears later in the product-support section, after the requirements. It retains the shared registration guidance.

The central semantic definition list puts field names beside their explanations on desktop and above them on mobile. Conditions use three restrained, rule-separated columns where space permits; practical additions sit beside the review checklist. Alternating backgrounds distinguish categories without large cards or decorative imagery.

No large image is needed: the reference page explains classifications, `/lage-faktura` explains the process, and `/faktura-eksempel` provides the authentic finished document. Existing media was not duplicated merely to fill space.

Visual refinement after the first render: capitalize the first word of separated field explanations and provide a specific MVA-registration source link. No substantive original sentence was removed.

## 5. Component architecture

`InvoiceRequirementsPage` is a server component selected only for `faktura-krav` by the existing dispatcher. It reuses `SiteHeader`, `SiteFooter`, `SectionContainer`, `ApplicationCTA` and `REGISTRATION_GUIDANCE`. Original SEO-record paragraphs/checklists/FAQs are reused directly; field labels are split at the colon, and seller MVA conditions are presented separately.

Scoped `invoiceRequirements.module.css` supplies the composition and theme tokens. Native `details`/`summary` supplies FAQ and supplementary resources. No new dependency, client component, global CSS change, shared-component refactor or image processing.

## 6. Exact files modified

Phase 8D.1 changes only:

1. `app/(seo)/[slug]/page.tsx` — two additional lines: import and route return for `InvoiceRequirementsPage`; existing 8B/8C dispatch remains.
2. `components/product/invoice/InvoiceRequirementsPage.tsx` — new reference page.
3. `components/product/invoice/invoiceRequirements.module.css` — new scoped styles.
4. `docs/phase-8d1-faktura-requirements-visual-report.md` — this new report.

Baseline hash inventory: 337 existing tracked/untracked files. Only the expected dispatcher differs; the other 336 files are unchanged. All 59 previously inventoried product-media files retain their hashes.

Existing modified Phase 8B files remain untouched: `components/editorial/InvoiceFigure.tsx` and `invoiceFigure.module.css`. Existing untracked `InvoiceExamplePage.tsx`, `invoiceExample.module.css`, `InvoiceGuidePage.tsx`, `invoiceGuide.module.css`, and the Phase 8B/8C reports are unchanged. Previous reports/diagnostics (`docs/phase-7e-diagnostics/`, Phase 7H report, `docs/phase-8a-diagnostics/`, Phase 8A report) are preserved. No existing local work was reverted, removed or staged.

## 7. Before/after comparison

| Before | After |
|---|---|
| Generic SEO hero/checkmarks | Reference introduction and direct reading navigation |
| Long mixed checklist | Eight field rows, separate MVA/company conditions and practical additions |
| Nested mobile gutters | One consistent content gutter; no deep list indentation |
| Generic visual hierarchy | Category-specific headings, definition lists and restrained separators |
| Early app promotion | One later, contextual product action |
| Legacy FAQ and nine cards | Native lined FAQ, three priority resources and six supplementary destinations |

Compared with invoice-example, creation-guide and offer references: typography, chrome, surface transitions, focus and link language are consistent. The document-free definition-list composition remains distinct from their document-led/workflow-led pages.

## 8. Responsive results

Executed in local Chrome/Puppeteer against the final production build, with a 1000 px viewport height. Full matrix: **4 widths × 2 OS color preferences × 2 motion preferences = 16 cases**.

| Width | Layout observations | Automated result |
|---:|---|---|
| 375 | Single-column fields/conditions/review; wrapped section navigation; no nested narrow text column | HTTP 200; no root overflow before or after disclosures; no observed runtime/console errors |
| 768 | Field labels beside explanations; three conditional columns; two-column review/practical and correction/product sections | Same passing checks; no clipping/overlap observed in visual review |
| 1280 | Intro beside reference list; comfortable desktop gutters and resource/footer alignment | Same passing checks |
| 1440 | Constrained editorial width, balanced reference spread, clear category transitions | Same passing checks |

Final measured load/interaction CLS: **0 in all 16 cases**, a local lab observation rather than a production field guarantee. No page images are present, so there is no new image-transfer weight or image-induced shift. Reduced-motion and ordinary-motion preferences were both exercised; no new animation was introduced.

Initial post-build Chrome navigation timed out because the sandboxed server was not reachable from the browser environment. That attempt was not counted as passed. Restarting the preview outside the sandbox resolved access; the complete final matrix then executed successfully.

Screenshot directory, absolute:

`C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase8d1/`

- Before: `before-faktura-krav-375-dark.png`, `before-faktura-krav-1440-dark.png`.
- Final full page: `after-faktura-krav-375-dark.png`, `after-faktura-krav-768-dark.png`, `after-faktura-krav-1280-dark.png`, `after-faktura-krav-1440-dark.png`.
- Light-preference full-page captures: `after-faktura-krav-375-light.png`, `after-faktura-krav-1440-light.png`.
- Matching `-hero.png` captures are saved alongside these files. All four widths were browser-tested with both preferences, even where only dark screenshots were saved.
- Evidence: `before.json`, `after.json`, `interactions.json`, `hashes.json`, `verification.json` in the same external directory.

Visual review covered mobile, intermediate-width and desktop composition; screenshots can retain visible focus from keyboard tests.

## 9. Accessibility results

- 16 axe-core runs covering WCAG 2 A/AA, 2.1 A/AA, 2.2 AA and best-practice tags: **zero confirmed violations**.
- Incomplete automated rule: `color-contrast` on decorative `aria-hidden` navigation chevrons/arrow glyphs. These are recorded as incomplete checks, not certified passes or confirmed text failures.
- Semantic H1/H2/H3 hierarchy, definition lists, labeled navigation landmarks and meaningful link text were inspected. One H1 remains.
- Three FAQ disclosures plus supplementary-resource disclosure opened and closed with Enter/Space in all cases: 64 disclosure checks. Focus outline observed as 3 px in the accent color.
- Shared menu opened/closed with keyboard in all 16 cases; Tab reached the Faktura destination with visible focus.
- At 375/1440, skip link was visible on focus and reached `fakturakrav-innhold`. All four section links landed with approximately 100 px top clearance.
- At both widths, actual links to `#rette-en-faktura`, `#opprett-kreditnota` and `#opprett-faktura` opened their destination instruction disclosures and scrolled them into view.
- Body/heading contrast and mobile reflow were visually reviewed. No complete accessibility certification, assistive-technology user study or exhaustive cross-browser coverage is claimed.

## 10. SEO preservation

Browser baseline/final comparisons across all 16 cases confirm identical:

- Title: `Faktura krav – hva må en faktura inneholde? | Jobbleder`.
- Description: `Lær hvilke opplysninger en faktura bør inneholde og hvordan du lager en ryddig faktura for kunder i Norge.`
- Canonical: `https://www.jobbleder.no/faktura-krav`.
- Single H1: `Faktura krav`.
- Parsed JSON-LD: unchanged three-question FAQPage and global Organization/WebSite data. Visible FAQs reuse the same record; no duplicate FAQPage is emitted.
- Robots-meta state: unchanged. No new noindex, redirects or indexing configuration.

The metadata generator, SEO records, URL, sitemap/robots infrastructure and structured-data intent remain untouched. Every useful original link destination remains. Destination comparison found only the redundant `/faktura-krav` self-link absent. All 14 tested internal route destinations returned HTTP 200. Exact instruction anchors were separately tested as described above. Existing external Altinn/Skatteetaten sources remain; MVA-registration guidance is the only new external source destination.

## 11. Product accuracy

The existing product paragraphs are reused without stronger claims: select customer, enter description/unit price/quantity/MVA, review, generate PDF, download and manually send. Phase 8C's inspected app evidence (`CreateDocument2026.jsx`, `createDocument.viewmodel.js`, PDF server-route response and document preview actions) supports these scoped statements. No new backend capability is asserted.

Free document creation/export/conversion and Free watermark/Premium branding follow the established owner-confirmed model. No new pricing, plan restriction, automatic bookkeeping, VAT filing, payment reconciliation, delivery, EHF or integration claim. General numbering requirements are not described as verified Jobbleder compliance. The page explicitly separates the product's document setup from the user's responsibility to check the sale.

Credit-note guidance retains original invoice reference and qualified correction/new-invoice wording. Detailed workflow remains in the instructions; no promise that every finalized invoice can be overwritten or edited.

## 12. Technical validation

Executed after the final text/source-link refinement:

| Check | Result |
|---|---|
| `npx.cmd tsc --noEmit --incremental false` | Pass, exit 0 |
| `npm.cmd run lint` — full ESLint | Pass, exit 0; no lint warning |
| `npm.cmd run build` | Pass, exit 0; Next.js 16.1.6, 55 generated pages |
| `git diff --check` | Pass, exit 0 |
| Existing-file SHA comparison | Only expected dispatcher changed among 337 baseline files |
| Media SHA comparison | All 59 unchanged |
| Existing factual-sentence comparison | No original section/checklist sentence missing, allowing capitalization/regrouping |

Build emitted existing Node 26 DEP0205 `module.register` deprecation notices. No new compilation/build failure.

Regression matrix: homepage, `/fakturaprogram-gratis`, `/faktura-eksempel`, `/lage-faktura`, `/instruksjoner`, `/tilbud-eksempel`, `/lage-tilbud`, `/timeliste-mal-pdf`, `/blogg/faktura-eksempel-sma-bedrifter`, at 375 and 1440: **18 observations**, matching baseline metadata/schema and rendered main text, with no root overflow. This is representative regression coverage, not exhaustive functionality testing of every route. Phase 8B/8C source hashes and fresh same-width browser baselines match.

## 13. Known limitations

- Lovdata direct access failed with HTTP 405. Full current consolidated regulation/exception coverage is not independently certified. Accessible official guidance supports the preserved scoped overview.
- No live authenticated invoice creation, backend numbering audit, accounting validation or production deployment was performed. No universal legal-compliance assertion is made.
- Incomplete decorative contrast checks remain documented. Chrome was the tested browser.
- No Lighthouse run, field CWV or production analytics verification was requested/performed. Browser tests intercepted analytics with a synthetic response to avoid unnecessary events; that is not an endpoint-success test.
- Existing F10 timing wording in another article is outside this phase and unchanged.
- Further source-record restructuring would require reviewing the component's field mapping. No shared content model refactor was needed for this scoped release.

## 14. Owner review checklist

1. Open the local preview at 375 and 1440; confirm it reads as a requirements reference, distinct from the example and creation guide.
2. Review the eight field explanations, separate registration/company conditions and practical payment additions.
3. Confirm all qualifications remain understandable and the review checklist does not suggest universal legal compliance.
4. Try FAQ, menu, keyboard focus, section shortcuts and correction/creation instruction links.
5. Check that the single later app CTA is appropriately restrained and useful related destinations remain discoverable.
6. Revisit the approved `/faktura-eksempel` and `/lage-faktura` previews to confirm their work remains intact.
7. Approve the visual/editorial result before any separate release task.

**READY FOR VISUAL OWNER REVIEW**
