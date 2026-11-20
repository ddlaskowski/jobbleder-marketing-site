# Phase 7F — Tilbud eksempel visual design pilot

Date: 20 November 2026. Local implementation only. No commit, push or deployment.

## 1. Summary

Redesigned only `/tilbud-eksempel` as a page-local editorial product page. The authentic Tilbud 29 is now the visual centerpiece, followed by four grouped explanations, practical clarifications, acceptance/document workflows, a restrained Free/Premium conversion section, the existing FAQ and quiet resource navigation.

The existing substantive explanations and factual/legal qualifications remain. No shared navigation/footer files, content records, images, other routes or blog articles were edited by Phase 7F. Earlier uncommitted Phase 7B–7D work remains in the working tree.

Preview: [Tilbud eksempel](http://127.0.0.1:3041/tilbud-eksempel).

## 2. Reference-page design analysis

Inspected the actual `/timeliste-mal-pdf` implementation in `components/product/timelist/SpecializedTimelistPage.tsx`, `specializedTimelist.module.css` and `content/specializedTimelists.ts`, and captured fresh browser references at 375 px dark and 1440 px dark/light.

Reusable principles: broad section containers; restrained text widths; large clamped headings; small editorial eyebrows; alternating surfaces; a document beside explanatory text; numbered editorial units; a split conversion/plan explanation; native FAQ disclosures; simple related-resource links; existing site chrome and CTA components.

The pilot uses these principles with its own information architecture, rather than copying the PDF-template page. Existing navy, light ink and blue accent colors are retained. The pilot deliberately stays navy in both OS color preferences, as requested. The reference has preference-dependent colors; it was not changed. Footer heading sizes remain governed by the shared footer styling rather than the pilot's main-content heading rules.

## 3. New page structure

| Section | Presentation and purpose |
| --- | --- |
| Hero | Existing breadcrumbs/H1, authentic-document introduction, primary CTA, document anchor and the four existing benefit bullets. |
| Tilbud 29 | Desktop text/document columns; verified facts in a definition list; full original page and enlargement link. |
| Understand the document | Four editorial units: customer/project; work/quantity; price/VAT; dates/validity. |
| Clarify your own assignment | Separate materials/scope/extra-work prompts and existing explanatory qualifications. |
| After customer response | Three columns distinguish the agreement, subsequent documents and written documentation. Existing workflow and Forbrukerrådet links remain. |
| Create your own offer | Practical benefit, existing application CTA, registration guidance and accurate Free/Premium distinction. |
| FAQ | All three existing questions/answers in native details/summary. |
| Resources | Named navigation lists, prioritizing Tilbud while preserving previous destinations. |

Reuses `SiteHeader`, `SiteFooter`, `SectionContainer`, `ApplicationCTA`, `REGISTRATION_GUIDANCE` and the existing `OfferFigure` document variant. No new dependency, font, animation or shared abstraction.

## 4. Exact Phase 7F files

| File | Change |
| --- | --- |
| `app/(seo)/[slug]/page.tsx` | Import the local page and select it only when `slug === "tilbud-eksempel"`; metadata generation remains unchanged. |
| `components/product/offer/OfferExamplePage.tsx` | New server-rendered, page-specific composition. |
| `components/product/offer/offerExample.module.css` | New scoped palette, grids, spacing, typography, focus and responsive rules. |
| `docs/phase-7f-tilbud-example-visual-pilot-report.md` | This report. |

The route file already contained Phase 7C changes before this pilot. Existing modifications to `content/blogPosts.ts` and `content/seoPages.ts`, the untracked `OfferFigure` files and previous reports are not Phase 7F changes. Source verification compared the 311 tracked files to the pre-pilot hashes: only the route file changed. All blog/SEO records match the pre-pilot extraction. The five earlier local files with stored historical hashes also match.

## 5. Content preservation verification

The page reads the existing SEO record rather than maintaining a second copy. Browser assertions confirm all **16 original explanatory paragraphs**, all **four bullets**, and all FAQ content remain in every responsive case. The paragraphs have been regrouped; their wording is unchanged.

The introductory copy was shortened to identify the real completed document immediately. New headings, a factual summary, three practical prompts and a concise conversion explanation support the new composition. No substantive qualification was removed.

Preserved distinctions include: demonstration data; generated document versus blank template; project visible in the app but not as a PDF field; quantity 1 rather than an invented area/hour count; example-specific VAT; validity dates versus work dates; missing detailed material/payment/change terms; practical advice versus legal guarantees; acceptance versus a separate signed contract; and user-initiated document creation versus automatic communication or acceptance registration.

All previous main-content link destinations remain, comparing normalized URLs. Quiet resource lists cover the old related-link destinations and topic-cluster destinations. Application registration guidance still explains login and “Create account”.

## 6. Authentic document verification

Inspected the actual image and dimensions, not only filenames.

| Asset | Dimensions | Bytes | Use |
| --- | --- | ---: | --- |
| `public/images/product/tilbud/optimized/jobbleder-offer-pdf-085c0b3a1244.webp` | 506 × 720 | 20,340 | Existing optimized document preview. |
| `public/images/product/tilbud/source/exported_tilbud_A4.png` | 506 × 720 | 39,992 | Existing original, linked for full-size viewing. |

The source hash matches the existing manifest. Both files remain unchanged. No image generated, processed, duplicated, cropped or artificially enlarged.

Verified in Tilbud 29: Demo Company; Eksempel Eiendom; “Legging av parkett”; quantity 1; unit/net NOK 12,000; VAT 25% / NOK 3,000; total NOK 15,000; issue date 18.11.2026; valid through 02.12.2026; Free branding. The entire document, including its blank lower area, remains visible. That area belongs to the source document.

The existing image component supplies explicit dimensions, descriptive Norwegian alt text, lazy loading, responsive sizing, an informative caption and a descriptive original-image link. No invented document fields were added.

## 7. SEO preservation

Compared rendered metadata and parsed structured data against the pre-pilot browser baseline in all eight target cases.

| Item | Result |
| --- | --- |
| Route | `/tilbud-eksempel`, unchanged. |
| Title | `Tilbud eksempel – se hvordan et godt tilbud kan se ut \| Jobbleder`, unchanged. |
| Description | `Se et tilbud eksempel og lær hvordan et ryddig og profesjonelt tilbud kan bygges opp for små bedrifter og håndverkere.`, unchanged. |
| H1 | Exactly one: `Tilbud eksempel`, unchanged. |
| Canonical | `https://www.jobbleder.no/tilbud-eksempel`, unchanged. |
| Robots | Same rendered directives as baseline. |
| Structured data | Parsed JSON-LD equals baseline; same three FAQ questions and answers as visible content. |
| Internal destinations | No previous main-content destination missing. Thirteen distinct local page/image destinations returned HTTP 200. |

No redirects, indexing changes, new routes or sitemap/configuration changes.

## 8. Responsive results

Executed against the local **production build**, not production hosting. Chromium browser automation used light/dark color-scheme preferences and reduced-motion preference in every case.

| Width | Light | Dark | Overflow | Observed CLS | Document layout |
| ---: | --- | --- | --- | ---: | --- |
| 375 | Pass | Pass | None | 0 | Stacked, contained portrait image. |
| 768 | Pass | Pass | None | 0 | Stacked, natural-width document. |
| 1280 | Pass | Pass | None | 0 | Balanced text/document columns. |
| 1440 | Pass | Pass | None | 0 | Balanced text/document columns. |

Checks covered loaded images, preserved proportions, CTA access, headings, section reflow, FAQ expansion, visible focus and original-image opening. Desktop document width is capped at its native 506 px. Narrow mobile text inside the document is naturally smaller; nearby factual explanations and the original-image link provide alternatives. No broken images, hydration exceptions or JavaScript page errors were observed. No active animations were found with reduced motion.

Visually inspected full desktop/mobile pilot captures and focused tablet/document captures. The desktop document is prominent without exceeding its native resolution; mobile stacks logically; explanatory units and resource links reflow without clipping. Compared against the actual Timeliste reference: comparable section rhythm, palette and editorial hierarchy, with a deliberately different content composition. Final aesthetic approval remains with the owner.

Screenshots, outside application source:

- [Desktop, 1440 px](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase7f/tilbud-eksempel-1440-dark.png)
- [Mobile, 375 px](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase7f/tilbud-eksempel-375-light.png)
- [Tablet document](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase7f/document-768-light.png)
- [Actual reference, desktop dark](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase7f/reference-timeliste-1440-dark.png)

Full-page and document-focused captures exist for all eight target cases in that evidence directory.

## 9. Accessibility results

axe-core: **zero reported violations** across eight cases, including expanded FAQ content, using WCAG 2 A/AA, 2.1 AA, 2.2 AA and best-practice checks. This is scoped automated evidence, not a claim of complete conformance.

axe marked contrast inspection **incomplete** for the shared menu-chevron glyph and decorative down-arrow beside “Se hele dokumentet”. These are not counted as automated passes. Visual inspection found both visible on the navy surface; the link arrow is hidden from assistive technology and the descriptive link text remains. A complete manual contrast/assistive-technology audit remains outside this check.

Executed keyboard checks in every case:

- Skip link receives visible focus, has dark text on a light surface, and moves focus to main content.
- Shared menu opens with Enter, closes with Space, and Tab reaches its Faktura link; visible 3 px focus outline retained.
- Each native FAQ opens with Enter and closes with Space. Browser accessibility-tree inspection exposes named, focusable disclosure controls with the expected expanded state.
- Original-image link has a meaningful name, visible focus and opens the authentic PNG with Enter; decoded size is 506 × 720.

Heading hierarchy uses one H1, section H2s and subordinate H3s. Breadcrumb/resource navigation landmarks have distinct labels. No screen-reader application was run; accessibility-tree inspection is not a substitute for a full screen-reader session.

## 10. Technical test results

| Check | Result |
| --- | --- |
| `npx.cmd tsc --noEmit --incremental false` | Pass, exit 0. |
| `npm.cmd run lint` | Pass, full ESLint, no lint warnings. |
| `npm.cmd run build` | Pass, 55 static pages. Existing Node DEP0205 `module.register` deprecation warning; no build failure. |
| `git diff --check` | Pass. Git's line-ending normalization notices do not indicate content errors. |
| Target HTTP | 200 in all eight browser cases. |
| Local links | All 13 checked destinations HTTP 200, including the original PNG. |
| Regression | 15 routes checked, including the target. All 14 non-target routes retain baseline metadata/schema identity, main text and main link lists; all return 200. |

Regression routes: homepage; `/tilbud-mal`; `/timeliste-mal-pdf`; `/lage-tilbud`; `/timeliste-mal`; `/fakturaprogram-gratis`; `/kontrakt-mal`; and the existing articles `tilbud-eller-pristilbud`, `lage-tilbud-byggebransjen`, `lage-tilbudsdokument`, `feil-med-tilbud`, `tilbud-vs-kontrakt`, `folle-opp-tilbud`, `fra-tilbud-til-kontrakt-og-faktura` under `/blogg/`. This is content/metadata/link regression coverage; the full responsive matrix applies to the pilot, not every regression route.

Evidence: `phase7f/browser.json`, `source-verification.json`, `before.json`, `source.json` and `preservation-before.json` in the existing Codex visualization directory. Investigation scripts and screenshots are outside application source.

## 11. Known limitations

- The known local `/api/handshake` request returns HTTP 400 in each target case. No analytics implementation was changed and production analytics was not tested in this local pilot. No JavaScript page exceptions were observed; the HTTP error is reported separately.
- The original 506 × 720 document limits fine-print legibility. It is intentionally not upscaled or cropped. The full-size PNG link works but cannot create additional source detail.
- Two decorative-glyph contrast checks remain axe-incomplete as described above. No P0/P1 defect was identified in executed checks.
- No production deployment verification, Lighthouse measurement or physical screen-reader session was performed. Reported CLS is a local browser observation, not field performance.
- Earlier unrelated local work remains uncommitted and must be separated during any future release staging.

## 12. Recommendation for future extension

**READY FOR OWNER REVIEW.** Review the local desktop/mobile composition before release or wider adoption.

If approved, reuse the principles—authentic artifact first, meaningful editorial groups, broad but controlled containers, restrained related navigation and clear document/plan distinctions—according to each page's search intent and available evidence. Do not automatically impose this page's fixed navy preference or exact layout across other SEO pages. Consider shared abstractions only after a second approved use case establishes real duplication. Phase 7E has not been started.
