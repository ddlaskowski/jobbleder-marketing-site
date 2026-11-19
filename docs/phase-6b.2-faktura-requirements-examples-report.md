# Phase 6B.2 — Faktura requirements and authentic examples

19 November 2026. Implemented locally; no commit, push or deployment.

## 1. Summary and scope

Improved exactly four existing pages:

- `/faktura-krav`
- `/blogg/innhold-i-faktura`
- `/faktura-eksempel`
- `/blogg/faktura-eksempel-sma-bedrifter`

The requirements guide separates ordinary legal requirements from practical payment/contact details. The field article explains the three different dates without repeating the whole checklist. The example page presents authentic Faktura 110, while the small-business article explains the parkett example and its arithmetic with a smaller authentic creation-form detail.

The main Faktura landing page and the offer→contract→invoice article are unchanged. Previous Phase 6A/6B.1 reports were preserved. No source PNG, optimized image, backend, authentication, navigation, footer, SEO infrastructure or PDF endpoint was modified.

**READY FOR OWNER REVIEW** — local technical and browser checks completed; owner visual/editorial approval is still required.

## 2. Exact files changed

| File | Change |
| --- | --- |
| `content/seoPages.ts` | Revised only `faktura-krav` and `faktura-eksempel` records; added optional checklist/link/example fields to the existing section type. |
| `content/blogPosts.ts` | Revised only the two scoped article bodies; added an invoice-figure block type. All other article records retain their existing content. |
| `app/(seo)/[slug]/page.tsx` | Renders optional section checklists, contextual links and the invoice example. Records without these fields produce unchanged output. Existing metadata and FAQ generation remain in place. |
| `app/blogg/[slug]/page.tsx` | Dispatches the optional invoice-figure block to the new shared figure. Existing block behavior is unchanged. |
| `components/editorial/InvoiceFigure.tsx` — new | Small server-rendered figure using Next.js Image, existing optimized media, explicit dimensions, lazy loading, accurate alt/caption and a visible full-size link. |
| `components/editorial/invoiceFigure.module.css` — new | Scoped figure sizing, proportions, captions and keyboard outline; supports the inherited SEO theme and explicitly light editorial blog surface. |
| `docs/phase-6b.2-faktura-requirements-examples-report.md` — new | This implementation/verification report. |

Seven files belong to this phase: four modified, three created. The pre-existing untracked Phase 6A and 6B.1 reports are not new changes from this phase.

## 3. Editorial changes by page

### `/faktura-krav`

- Preserved H1, metadata, introduction, bullet summary, original three section headings, existing CTA destination and related navigation.
- Replaced generic body paragraphs with useful explanation and official source links.
- Added separate H3 lists: **Lovpålagte opplysninger** and **Praktiske opplysninger**.
- Covered numbering, documentation date, seller/buyer, description/extent, delivery, amounts/VAT and payment due date. Qualified MVA registration and relevant AS/ASA/NUF information.
- Separated bank account, reference and contact information from universal requirements. Explicitly avoided universal KID/14-day requirements.
- Added a brief correction explanation and links to the existing correction/credit-note instructions. No partial-credit or invoice-editing promises.
- Corrected the first FAQ answer. Visible FAQ and FAQPage JSON-LD still use the same data source.

### `/blogg/innhold-i-faktura`

- Replaced ambiguous “Dato for utsendelse” with **Fakturadato (dokumentasjonsdato)**.
- Explained invoice date, delivery date and payment due date in a dedicated section.
- Kept the article focused on reading fields; the requirements guide provides the full checklist.
- Explained the existing invoice-110 amounts and retained useful advice about concrete descriptions, readable prices and contact information.
- Replaced repeated note/promotional boxes with practical text and contextual links. Kept the existing app destination and one primary action.
- Added a contextual official Skatteetaten link. No decorative screenshot was added where it would duplicate the nearby example journey.

### `/faktura-eksempel`

- Added the complete existing Free invoice-110 image with an accessible full-size link.
- Explained seller/customer, invoice number, example dates, work description, quantity/price, VAT, total and payment instructions.
- Used the authentic arithmetic: **1 × 12 000 = 12 000 net; 25% VAT = 3 000; total = 15 000 NOK**.
- Clearly labeled demonstration data and distinguished the generated document from a blank or editable PDF template.
- Qualified the existing “Kan jeg bruke eksempelet som mal?” FAQ. No downloadable invoice PDF was created.
- Kept the useful existing section structure and added contextual requirements/instruction/article links.

### `/blogg/faktura-eksempel-sma-bedrifter`

- Added a practical parkett-service scenario based on the authentic example rather than a second generic document tour.
- Explained the difference between quantity 1 for the example's agreed-price line and an unsupported assumption of one hour or one square meter.
- Presented the net/VAT/total arithmetic in readable HTML steps.
- Reused a compact creation-form detail instead of repeating the large invoice image.
- Kept the customer perspective: understand the work, compare with the agreement and follow the amounts/payment information.
- Preserved the example-guide/app destinations; added the requirements link. No extra promotional box.

## 4. Images and media handling

| Usage | Original PNG, unchanged | Existing WebP, reused | Dimensions / WebP size |
| --- | --- | --- | --- |
| Full document on `/faktura-eksempel` | `public/images/product/invoice/source/fv_free_watermark.png` — 959×1251, 127,681 B | `public/images/product/invoice/optimized/jobbleder-invoice-free-8239cf43dbea.webp` | 959×1251, 52,268 B |
| Price/VAT detail in the small-business article | `public/images/product/invoice/source/screenshot_fv_edit.png` — 1917×906, 114,542 B | `public/images/product/invoice/optimized/jobbleder-invoice-lines-e59165029d4b.webp` | 400×136, 3,900 B |

The detail's filename suggests “lines”, but visual inspection established that it shows **only the net unit-price and VAT-rate fields**. Its alt text and caption describe those exact fields, not a visible description/quantity or completed PDF. Its link opens the full generated invoice from the same demonstrated case.

No new raster assets, crops, compression, duplicate files or dependencies. Next.js Image serves the already optimized WebPs directly (`unoptimized` avoids another conversion); explicit dimensions reserve space, sizing preserves aspect ratio, and both figures are lazy loaded. Initial media limits were 480 px for the document and 400 px for the detail; the final desktop document adjustment is recorded in section 10. There is no new viewport-dependent raster variant because the existing files are small and preserve fine text.

At 375 px the full document is a 279×364 overview within the preserved SEO containers; it is not intended to make all document fine print readable inline. The 959×1251 enlargement works by keyboard and permits inspection. The price/VAT detail renders at 327×111 and remains readable. Figures were also checked at the other requested widths and in both preferences.

## 5. Official guidance and accuracy safeguards

Relied on the accessible guidance identified in Phase 6B.1. Reopened Altinn's invoice guide and Skatteetaten's Inntekter page in this phase. The other official references below retain their Phase 6B.1 verification status:

- [Altinn — Faktura (salgsdokumentasjon)](https://info.altinn.no/starte-og-drive/regnskap-og-revisjon/regnskap/faktura-salgsdokumentasjon/): general invoice information, conditional identification and corrections.
- [Skatteetaten — Inntekter](https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/rutiner-regnskap-og-kassasystem/gode-rutiner-for-daglig-drift/inntekter/): numbering controls and basic invoice information.
- [Skatteetaten — Merverdiavgiftshåndboken 15-10.2](https://www.skatteetaten.no/rettskilder/type/handboker/merverdiavgiftshandboken/gjeldende/M-15/M-15-10/M-15-10.2/): documentation date, parties and content, linked in the field article.
- [Skatteetaten — Merverdiavgiftshåndboken 15-10.6](https://www.skatteetaten.no/rettskilder/type/handboker/merverdiavgiftshandboken/gjeldende/M-15/M-15-10/M-15-10.6/): delivery and separate VAT treatment. As recorded in Phase 6B.1, these `gjeldende` handbook pages displayed the 2025 edition heading.
- [Skatteetaten — MVA registration](https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/mva/registrere-endre-slette): registration approval before charging VAT.

The Phase 6B.1 Lovdata access limitation remains. No unverified statutory quotation, detailed date exception, universal issuance deadline or advance-billing rule was added. This ordinary-invoice explanation is not presented as an exhaustive checklist for every transaction or company type, or as a certificate that the sample meets every legal condition.

Product review confirmed the copy stays within the evidence: creation, line inputs, checking VAT/totals, PDF download, manual delivery, document conversion and Free/Premium branding. There are no claims of automatic sending, EHF, accounting/bank integration, reconciliation, recurring invoicing, automatic payment processing or editing an issued invoice. General software numbering requirements are not recast as an independently verified guarantee about Jobbleder's backend.

## 6. SEO and scope preservation

Automated comparisons against a fresh pre-edit local browser/source baseline confirmed:

- All four URLs, metadata titles/descriptions, H1 values and WWW canonicals are unchanged; exactly one H1 each.
- Article JSON-LD is unchanged, including original publication dates and descriptions.
- SEO-page FAQPage intent/generation is preserved. Only the relevant answer on each page was corrected, with visible FAQ/schema text consistency verified.
- All pre-existing internal href destinations on the four targets remain available. Contextual links were added without redirects or route consolidation.
- There were no direct downloadable PDF resources in these four target records. No new invoice PDF endpoint or template was invented.
- All non-target SEO/blog content records are unchanged. The deferred `/blogg/fra-tilbud-til-kontrakt-og-faktura` article is unchanged.
- Browser comparisons on **33 non-target routes** found identical main HTML, title, description, canonical, H1, schemas and href/text lists before/after. This includes homepage, `/fakturaprogram-gratis`, Timeliste/Tilbud/Kontrakt product pages, `/instruksjoner`, the free-template article and all other existing blog articles/SEO pages in that baseline.
- Original screenshots, SEO helpers, sitemap/robots, existing PDF endpoints, navigation/footer and the previous reports retain their baseline hashes.

Shared rendering additions are optional. No existing unrelated route is assigned the new fields/block; regression checks confirm their rendered output remains identical.

## 7. Executed validation

### Technical checks

| Command | Result |
| --- | --- |
| `npx.cmd tsc --noEmit --incremental false` | Passed, exit 0. |
| `npm.cmd run lint` | Full ESLint passed, exit 0; no lint warnings. |
| `npm.cmd run build` | Passed, exit 0; generated 55 static pages. |
| `git diff --check` | Passed. Git also reports normal LF→CRLF working-copy notices. |

Production build emitted Node 26 `[DEP0205]` deprecation warnings about `module.register()`; compilation, type checks and prerendering completed successfully. No dependency/runtime/configuration change was made to suppress this environmental warning.

### Local production browser matrix

Tested the built site at `http://127.0.0.1:3041` using installed Chrome/Puppeteer, caches disabled. These are **local production-build tests**, not verification of a newly deployed production release.

| Page | 375 px | 768 px | 1280 px | 1440 px |
| --- | --- | --- | --- | --- |
| `/faktura-krav` | Light + dark passed | Light + dark passed | Light + dark passed | Light + dark passed |
| `/blogg/innhold-i-faktura` | Light + dark passed | Light + dark passed | Light + dark passed | Light + dark passed |
| `/faktura-eksempel` | Light + dark passed | Light + dark passed | Light + dark passed | Light + dark passed |
| `/blogg/faktura-eksempel-sma-bedrifter` | Light + dark passed | Light + dark passed | Light + dark passed | Light + dark passed |

Results from 32 completed cases:

- HTTP 200; no horizontal overflow; observed CLS **0** during initial loading/scrolling/image decoding. This is the measured scope, not a guarantee for every network/device.
- Correct image dimensions/proportions, nonempty accurate alt text and lazy loading. No broken images or cropping of document content.
- Image enlargement links opened the full 959 px invoice by Enter; visible 3 px outline. Tested in all 16 image-bearing cases.
- All three FAQ buttons on each SEO page opened with Enter and closed with Space; expanded state and visible 2 px outline checked.
- Heading hierarchy has no skipped levels; exactly one H1; metadata and schema checks above passed.
- Reduced-motion preference enabled; computed root scroll behavior was `auto`.
- Axe WCAG A/AA, 2.1/2.2 AA and best-practice checks: **zero violations in 32 runs**. Incomplete checks remain for existing checklist glyph contrast and breadcrumb link distinction; these are not claimed as manually certified passes or new confirmed serious failures.
- **22 unique internal destinations** returned 200; relevant instruction hash targets existed. Original links were preserved.
- No uncaught page errors or unexpected failing resources. The known local `/api/handshake` HTTP 400 appeared; analytics was not modified and this is not evidence of a new production failure.

Initial browser setup encountered sandbox network reachability and then cache-driven HTTP 304 responses. The local preview was made reachable and the harness disabled caching; the complete 32-case run above then finished. These setup attempts are not reported as application failures or successful test cases.

Captured full-page screenshots for all 32 cases and media-focused screenshots for the 16 image cases. Representative mobile/desktop document, price-detail, requirements and field-article captures were visually inspected. Existing blog surfaces remain intentionally light under dark OS preference; the SEO pages retain their current light/dark behavior. No broad visual redesign was applied.

### Performance boundary

No Lighthouse run was requested or executed for this phase. Media payload is the reused 52,268 B document or 3,900 B detail, loaded lazily with reserved dimensions. CLS was measured as above. Phase 6A Lighthouse scores are not reused as fresh results for these changed pages.

## 8. Remaining questions and observations

- Owner approved the initial four-page visual implementation and requested the final size refinement recorded in section 10. Final refinement approval is pending. No new P0/P1 issue was observed in the executed checks.
- Direct consolidated Lovdata wording and exceptional issuance/date rules remain outside verified copy. None was guessed or added.
- Deployed app numbering/lifecycle guarantees and partial/multiple credit-note behavior remain owner/backend verification questions. This release does not depend on claiming those uncertain capabilities.
- Existing breadcrumb/glyph automated needs-review observations and the local analytics 400 remain recorded. No unrelated navigation/analytics fixes were included.
- Phase 6A F03 workflow-outline improvements are deliberately deferred, as requested.
- No authenticated app transaction, new production verification or complete screen-reader session was performed. Existing PDF endpoints were not changed; this phase's download checks concern the actual image-enlargement links, not a nonexistent public invoice PDF.

## 9. Evidence and local preview

Temporary evidence is outside the repository:
`C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase6b2/`.

Artifacts: `source-before.json` (source/file baseline), `before.json` (37 pre-edit browser snapshots), `browser.json` (32 cases, 33 unchanged-route comparisons, 22 internal links), and full-page/media screenshots named by route, width and theme. Inspection scripts are beside that directory. None belongs in an application release commit.

Local preview URLs:

- [Faktura krav](http://127.0.0.1:3041/faktura-krav)
- [Innhold i faktura](http://127.0.0.1:3041/blogg/innhold-i-faktura)
- [Faktura eksempel](http://127.0.0.1:3041/faktura-eksempel)
- [Faktura eksempel for små bedrifter](http://127.0.0.1:3041/blogg/faktura-eksempel-sma-bedrifter)

Final file-hash comparison: only the four approved tracked implementation files in section 2 changed; all other baseline files, including both prior reports and all tracked source/optimized images, are unchanged. Three new files belong to this phase. HEAD remains unchanged; no commit, push or deployment.

## 10. Final visual polish after owner review

Implemented only a document-width adjustment; no content, metadata, caption, alt text, image source or link changes.

- `/faktura-eksempel`: document maximum width increases from **480 to 570 px (+18.75%) at viewport widths of 1024 px and above**. It remains within the article container, preserves its 959:1251 aspect ratio and uses the same original/optimized assets. Existing mobile/tablet sizes remain unchanged. The Image `sizes` hint matches the desktop limit.
- `/blogg/faktura-eksempel-sma-bedrifter`: the price/VAT crop already displays at its **native 400×136 px** on desktop. Retained this maximum rather than enlarging the 400 px source or introducing blur. At 375 px it still fits responsively at 327 px wide. No alternative crop or screenshot was added.

Exact files changed in this follow-up:

1. `components/editorial/invoiceFigure.module.css` — desktop-only maximum-width rule for document figures, excluding the line/detail variant.
2. `components/editorial/InvoiceFigure.tsx` — corresponding document `sizes` hint only.
3. `docs/phase-6b.2-faktura-requirements-examples-report.md` — this update.

Fresh validation: TypeScript (`npx.cmd tsc --noEmit --incremental false`), full ESLint and production build all passed with exit 0. Build still emits the existing Node `[DEP0205]` warning and generates 55 static pages. No application/configuration change was made for that warning.

Fresh local production-build browser checks: **16 cases**, two affected pages × 375/768/1280/1440 px × light/dark preference, reduced motion enabled. Confirmed:

| Viewport | Document width | Price/VAT width |
| --- | --- | --- |
| 375 px | 279 px, unchanged | 327 px, unchanged |
| 768 px | 480 px, unchanged | 400 px, native maximum |
| 1280 px | 570 px | 400 px, native maximum |
| 1440 px | 570 px | 400 px, native maximum |

All cases returned 200 with no horizontal overflow, distortion or measured layout shift (observed CLS 0). Images remain within the viewport and below their natural resolution. Captions, alternatives, full-size link destinations, body text, H1, metadata, canonical and schema are unchanged. Full-size links were keyboard-tested in all 16 cases, including visible focus and successful opening of the 959 px invoice. No uncaught page error was recorded. Desktop document balance was visually checked from the captured viewport.

The other approved pages, `/faktura-krav` and `/blogg/innhold-i-faktura`, passed fresh exact browser comparisons of main HTML, text, metadata, schema and links against their pre-polish approved versions. File-hash comparison confirms every file outside the three listed above remains unchanged from this follow-up's entry state, preserving all earlier uncommitted work and source images.

Evidence: `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase6b2-polish/` (`before.json`, `approved-browser-before.json`, `browser.json`, 16 viewport screenshots). Local preview remains on port **3041** at the links above. No commit, push or deployment.

**READY FOR OWNER REVIEW**
