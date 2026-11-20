# Phase 8A — Faktura ecosystem audit & visual strategy

Date: 20 November 2026. Read-only audit of the marketing website, accessible application source, existing media and production website. No implementation, content correction, image processing, staging, commit, push or deployment.

## 1. Executive summary

**Recommend `/faktura-eksempel` as the single Phase 8B visual pilot.** It already has an accurate, authentic document and useful explanatory content. Its main weakness is presentation: the promised example starts approximately 993 px down the desktop page and 1,465 px down the 375 px page. A document-led editorial composition can demonstrate the approved visual direction without rewriting the successful main product page or reopening settled legal content.

The inventory contains **33 relevant routes: nine primary Faktura pages, 19 contextual/workflow/reference pages and five discovery hubs**. Instruction anchors are documented separately; they are not counted as additional routes. Common footer/card mentions alone do not make every page a Faktura editorial target.

Phase 6B's requirements, authentic examples and completed workflow article are present in both the local release and production. The original Phase 6A deficiencies must not be reported as still unresolved. Current opportunities concern generic supporting-page composition, practical creation guidance, restrained contextual linking and the surviving F10 timing statement.

No demonstrated P0 or P1 functional/accessibility release blocker was found in the executed checks. P1/P2/P3 below describe **modernization priority**, as requested, rather than implying a broken production release. F10 remains a **P2 factual correction**. Numbering guarantees, partial-credit behavior and any automatic delivery/payment/accounting claims remain outside the verified evidence.

Technical baseline: TypeScript, full ESLint and production build passed. Detailed checks covered all four widths and both preferences for the nine primary pages and F10, plus the four approved references. There were zero confirmed axe violations in 57 targeted runs. Incomplete automated checks remain explicitly qualified in section 12.

## 2. Complete Faktura route inventory

Discovery used all 17 SEO records, all 18 blog records, route dispatch, specialized-page content, embedded blog components, instruction manifests and actual rendered links. This matters because `seoPages.ts` alone omits content supplied by dedicated product components. `/timeliste-ansatt` and `/blogg/gratis-timeliste-mal` were included after inspecting their rendered-component workflows.

### Renderer/component keys

| Key | Actual implementation / visual structure |
| --- | --- |
| IP | `components/product/invoice/InvoiceProductPage.tsx`, `content/invoiceProduct.ts`, `invoiceProduct.module.css`: dedicated light product page, authentic hero/editor, process, PDF showcase, workflows, comparison, native disclosures, final CTA; shared `SiteHeader`, older `Footer`. |
| SEO | `app/(seo)/[slug]/page.tsx:80`: `Navbar`, `Breadcrumbs`, generic H1/intro/checkmarks/app CTA, `ClusterNavigation`, nested `Container` and text sections, `FAQAccordion`, nine `RelatedSeoPages` cards, `Footer`. `InvoiceFigure` is inserted on the example page. |
| BLOG | `app/blogg/[slug]/page.tsx`: legacy light editorial surface, category/date/tags, typed blocks, contextual links, `RelatedGuides` and `RelatedBlogPosts`, older `Navbar`/`Footer`. The small-business example embeds `InvoiceFigure`; the document-workflow article embeds `BlogProductExample`. |
| TP / ST | `TimelistProductPage` / `SpecializedTimelistPage`, with `content/specializedTimelists.ts`; dedicated product or approved navy editorial sections. |
| OP / OE / OG | `OfferProductPage` / `OfferExamplePage` / `OfferGuidePage`, `offerExample.module.css`, `offerGuide.module.css`; authentic documents, distinct editorial compositions and shared site chrome. |
| CP | `ContractProductPage`, contract media and dedicated product sections. |
| HUB | Home composition, `InstructionsHub`, blog index or category renderer, as specified below. |

The following table records intent, audience, structure and priority for every discovered route. Exact rendered metadata and actual internal destinations are retained in `docs/phase-8a-diagnostics/inventory.json`; section 10 also prints every route's title, description and H1. Canonicals use the production WWW origin plus the unchanged path.

| URL | Type | Search intent / audience | Current structure / component key | Priority |
| --- | --- | --- | --- | --- |
| `/timeliste-mal` | Context product | Digital work-entry/timesheet workflow; tradespeople | TP, mobile Registreringer, four-category invoice example | P3 |
| `/timeliste-uke` | Context guide | Weekly timesheet; weekly record keepers | ST: weekly document, process, CTA, FAQ | P3 |
| `/timeliste-prosjekt` | Context guide | Project timesheet/invoice basis; project workers | ST: project document, registrations-to-invoice, FAQ | P3 |
| `/tilbud-mal` | Context product | Create an offer; contractors | OP: editor/PDF, offer/contract/invoice conversions, plans, FAQ | P3 |
| `/tilbud-eksempel` | Context example / visual reference | Read a completed offer; contractors | OE: authentic Tilbud 29, facts, qualifications, workflow, FAQ | P3 |
| `/fakturaprogram-gratis` | Primary product | Choose a free invoice tool; small firms/tradespeople | IP | P3 |
| `/lage-faktura` | Primary SEO guide | Create/write an invoice; first-time invoicer | SEO | P1 |
| `/faktura-eksempel` | Primary SEO example | See/read a completed invoice; small firms | SEO + InvoiceFigure | P1 |
| `/faktura-krav` | Primary SEO requirements | Required/conditional/practical fields; Norwegian sellers | SEO | P2 |
| `/kontrakt-mal` | Context product | Create/edit a contract; contractors | CP: pricing/payment terms, clauses, PDF, invoice conversion, FAQ | P3 |
| `/kontrakt-handverker` | Context SEO guide | Written scope/price agreement; tradespeople | SEO: contract advice, FAQ, related links | P3 |
| `/blogg/gratis-fakturaprogram-handverkere` | Primary blog | Evaluate a browser tool; tradespeople | BLOG: benefits, browser use, product CTA | P2 |
| `/blogg/innhold-i-faktura` | Primary blog | Understand fields, dates and sums; new invoicers | BLOG: explanatory headings, lists, sources | P3 |
| `/blogg/effektiv-timeliste` | Context blog | Practical time-recording routines; small firms | BLOG + mobile work-entry example; invoice-basis links | P3 |
| `/blogg/hvordan-lage-gratis-faktura` | Primary blog | Create a first free invoice online; small firms | BLOG: requirements, benefits, action list | P2 |
| `/blogg/forskjell-faktura-tilbud-timeliste` | Context blog / F10 | Distinguish document types; newcomers | BLOG: definitions, simple sequence, instruction/app links | P2 |
| `/blogg/folle-opp-tilbud` | Context blog | Follow up offers; contractors | BLOG: follow-up guidance, accepted-offer next steps, links | P3 |
| `/blogg/timeliste-for-handverkere` | Context blog | Useful work records; tradespeople | BLOG: practical records, authentic document, contextual links | P3 |
| `/blogg/timeliste-og-faktura` | Context workflow blog | Understand timesheet-to-invoice; hourly workers | BLOG + mobile four-category invoice preview; manual review/delivery | P3 |
| `/blogg/faktura-eksempel-sma-bedrifter` | Primary blog | Understand a concrete price/VAT example; small firms | BLOG + InvoiceFigure line crop, arithmetic steps | P3 |
| `/blogg/nar-sende-faktura` | Primary blog | Invoice timing/payment routines; small firms | BLOG: routines, checklist, app invitation | P2 |
| `/blogg/tilbud-vs-kontrakt` | Context blog | Offer/contract distinction; contractors | BLOG: qualified agreement explanation and next-document links | P3 |
| `/blogg/fra-tilbud-til-kontrakt-og-faktura` | Context workflow guide | Offer to contract/invoice; small contractors | BLOG + BlogProductExample: two document previews, three application states, checklist, alternate direct flow | P3 |
| `/timeliste-mal-pdf` | Context guide / visual reference | Free blank timesheet download; manual template users | ST: downloads, authentic filled example, digital alternative, FAQ | P3 |
| `/lage-tilbud` | Context guide / visual reference | Prepare/create an offer; contractors | OG: eight creation steps, authentic form, manual sharing, FAQ | P3 |
| `/hvordan-folge-opp-tilbud` | Context guide / visual reference | Manual offer follow-up; contractors | OG: communication/timeline, response scenarios, document next steps, FAQ | P3 |
| `/` | Discovery hub | Find product workflows; small firms | HUB: homepage product introductions and four-flow infographic | P3 |
| `/instruksjoner` | Discovery hub / instructions | Perform app tasks; existing/new users | HUB: InstructionsHub, grouped native details, media, workflow/legacy anchors | P3 |
| `/blogg` | Discovery hub | Find educational articles; small firms | HUB: blog categories and article cards | P3 |
| `/blogg/kategori/faktura` | Discovery hub | Browse invoice articles; invoicers | HUB: filtered Faktura article cards | P3 |
| `/blogg/kategori/oversikt` | Discovery hub | Understand document differences; newcomers | HUB: filtered overview article cards | P3 |
| `/timeliste-ansatt` | Context guide | Worker-name timesheet; people recording named workers | ST: worker attribution, document/Free conversion, FAQ | P3 |
| `/blogg/gratis-timeliste-mal` | Context blog | Free PDF timesheet templates; manual record keepers | BLOG + TimelistContents/TimelistComparison: downloads, authentic document/mobile example, digital workflow | P3 |

### Relevant instructions, section anchors and destinations

These are sections of `/instruksjoner`, not independent routes:

| Anchor | Purpose / current evidence |
| --- | --- |
| `#opprett` / `#dokumenter` | Historical category navigation; both IDs exist. Category navigation does not need to expand every instruction. |
| `#opprett-faktura` | Manual invoice creation: customer, optional project, dates, lines, review, save/generate, manual PDF distribution. Desktop and mobile examples remain available. |
| `#lag-faktura-fra-dokument` | Parent instruction for user-initiated conversion from an existing document. |
| `#timeliste-til-faktura` | Four categories kept separate; desktop Timeliste 264/Faktura 111 and mobile Timeliste 265/Faktura 112 are explicitly separate examples. |
| `#tilbud-til-faktura` | Select offer, choose Opprett faktura, review copied information, generate/download. |
| `#kontrakt-til-faktura` | Select contract, choose Opprett faktura, review amounts; payment schedules do not create invoices automatically. |
| `#opprett-kreditnota` / `#rette-en-faktura` | Original-invoice selection and correction guidance. No direct invoice Edit action is promised. |
| `#firma-og-fakturadetaljer` / `#standardverdier-for-dokumenter` | Company/payment information and defaults; numbering behavior still needs backend confirmation before stronger claims. |
| `#maanedlig-salg` | Invoice-count/net/VAT/gross reporting, not bank payment reconciliation or VAT filing. |

Twelve IDs were checked locally and in production. A focused six-anchor follow-up also waited for navigation to settle: each target's disclosure opened and the target landed approximately 100 px below the top. Workflow headings received keyboard focus. Existing URLs and IDs should be preserved.

No standalone `/faktura-mal` or dedicated credit-note SEO route was found in the actual route/content inventory. Neither is needed merely to make the route list look complete.

## 3. Current visual quality assessment

Findings below come from actual Chrome renders and source inspection, not from filenames or older audit descriptions.

| Location | Specific observation and user impact | Recommended direction |
| --- | --- | --- |
| `/fakturaprogram-gratis` | Dedicated, balanced product composition; authentic editor/PDFs, legible comparison and native disclosures. Its light presentation remains intentional under both OS preferences. | Preserve the page and its product narrative. Optional future contextual help links only. Do not force navy styling onto it. |
| Three supporting SEO pages | The same 36 px H1, four checkmarks and generic Start gratis action precede substantive guidance. At 1440 px the 768 px text column leaves substantial unused space on the right. | Give each page a specific editorial opening: document example, ordered creation guide or requirements reference. |
| `/faktura-eksempel` | The 570 px-wide intact document begins at y≈993 on desktop. At 375 px it starts at y≈1,465 and is only 279 px wide. A dark cluster-navigation card comes before the promised example. | Bring the authentic document and its explanation forward. Use a balanced desktop split and a clear mobile reading order. Keep enlargement; do not crop the invoice. |
| Generic SEO text sections | Nested `Container` shifts section text 24 px farther inward than the hero. At 375 px this reduces useful text/document space from 327 to 279 px. | Use one consistent content gutter in the pilot's scoped layout. Avoid changing every shared container. |
| `/lage-faktura` | “Hvordan lage faktura enkelt” offers general advice rather than a sequence matching the app; no editor illustration or direct creation-instruction link in the main explanatory sections. | Later build an actual preparation → customer/lines → review → PDF/manual delivery guide using existing media. |
| `/faktura-krav` | The corrected legal/practical distinctions are useful, but long lists and the generic hero flatten their hierarchy. | Preserve content; visually separate general, conditional and practical information. No need for a screenshot in every legal subsection. |
| Legacy FAQ | White rounded cards remain readable and functional on the dark SEO body, but feel detached from the article. | Reuse the references' restrained border-separated disclosure treatment within an approved page scope. This is visual consistency, not a current FAQ state defect. |
| SEO related resources | Nine large cards after the FAQ repeat destinations already offered in the top cluster card. On mobile they form a long second article-length block. | Curate a smaller contextual reading list while preserving useful destinations; avoid repeated card walls. |
| Older Faktura blogs | Long date/tag headers, generic benefit prose, a product link, note, promotional callout and app button can repeat the same invitation. No authentic example is needed for every article, but the creation article would benefit from one. | Keep the blog editorial layout. Improve specific paragraphs and one contextual action; do not convert blogs into product landing pages. |
| Small-business example blog | Its 400×136 price/VAT crop is readable and used at or below native width. Caption correctly says the full-size link opens the completed invoice. | Preserve this restrained treatment. It is not a screenshot of the entire invoice line or an editable template. |
| Legacy footer | On 375 px, the flex layout has little edge padding and “Om oss” wraps; no measured overflow. Under dark preference, a white blog ends abruptly at a black footer. | P3 shared-chrome polish in separately approved scope, not a reason to redesign all blog content now. |

Representative captures are in the external `phase8a` diagnostics directory. They include visible focus left by keyboard checks; this is not a styling regression:

- [Current Faktura example, desktop](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase8a/faktura-eksempel-1440-dark.png).
- [Current creation guide, mobile](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase8a/lage-faktura-375-dark.png).
- [Current small-business article, mobile](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase8a/blogg_faktura-eksempel-sma-bedrifter-375-dark.png).
- [Approved Tilbud reference, desktop](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase8a/tilbud-eksempel-1440-dark.png).

## 4. Comparison with approved references

All four references were rendered at all four widths in both preferences. Their navy appearance is deliberate and remains consistent in either preference.

| Reference | Reusable principles / actual components | Do not copy indiscriminately |
| --- | --- | --- |
| `/timeliste-mal-pdf` | Download-first hierarchy, authentic document clearly distinguished from a blank template, alternating surfaces, compact final conversion explanation. `SpecializedTimelistPage`, shared `site.module.css`, `SiteHeader`/`SiteFooter`, `ApplicationCTA`, `SectionContainer`. | Its two PDF-download actions are specific to Timeliste; do not invent a blank invoice PDF download. |
| `/tilbud-eksempel` | `OfferExamplePage`, `OfferFigure`, navy #101827/#172337 surfaces, desktop document/text split, factual document reading, lined facts, native FAQ, contextual resources. H1 scales up to 80 px; body stays comfortable rather than filling the whole width. | An invoice has different legal/payment fields. Do not retain offer validity/acceptance sections or clone every numbered section. |
| `/lage-tilbud` | `OfferGuidePage`, `offerGuide.module.css`: ordered preparation steps, authentic form, purposeful two-/three-column grouping above appropriate breakpoints; mobile stacks logically. | Invoice creation needs its own action sequence, review and manual delivery explanation, not eight steps merely because the offer guide has eight. |
| `/hvordan-folge-opp-tilbud` | The same visual tokens support a communication/timeline narrative with few screenshots. Restrained links and explicit boundaries around app behavior. | Do not imply invoice reminders or follow-up sending become automatic just because the offer follow-up guide uses a timeline. |

Reuse `SectionContainer`, `ApplicationCTA`, registration guidance, shared chrome and existing figure/media components where their semantics fit. Native disclosure patterns can be reused without introducing a client-side accordion dependency. `InvoiceFigure` already supplies dimensions, lazy loading, descriptive alt, caption and a meaningful enlargement link; any layout extension should stay scoped and preserve its existing blog use.

Consistency should come from typography, gutters, surfaces, focus treatment and editorial intent. The future example page can be document-led, creation page step-led and requirements page reference-led. The successful main product and light blog articles need not become identical navy pages.

## 5. Content and search-intent analysis

| Primary URL | Distinct purpose to preserve | Evidence-based editorial opportunity |
| --- | --- | --- |
| `/fakturaprogram-gratis` | Choose a free invoice tool | Existing product proof and Free/Premium distinction are strong. Preserve. |
| `/lage-faktura` | Learn to create/write an invoice | Replace general process explanation with practical app steps in a later phase, not a repeat of the product benefits. |
| `/faktura-eksempel` | See and understand a completed invoice | Preserve Faktura 110 and arithmetic; improve how quickly the reader reaches the example. |
| `/faktura-krav` | Understand required/conditional/practical fields | Preserve sourced checklist and credit-note guidance. Improve navigation and visual grouping, not length. |
| `/blogg/gratis-fakturaprogram-handverkere` | Assess a simple browser tool for a tradesperson | Generic assertions about limitations of other free programs lack examples/sources. Replace with neutral questions to evaluate a tool; explain Jobbleder Free branding. Link the mentioned example/requirements directly. |
| `/blogg/innhold-i-faktura` | Understand how the fields relate | Already improved with dates, arithmetic and references. Keep its explanatory reading intent rather than duplicate the legal checklist. |
| `/blogg/hvordan-lage-gratis-faktura` | First practical invoice online | Current list omits an explicit review step and ends “Last ned eller send fakturaen videre”. Clarify generating/downloading and sending manually; add direct `#opprett-faktura` help. This wording is ambiguous, not proof of an automatic-send promise. |
| `/blogg/faktura-eksempel-sma-bedrifter` | Understand one concrete price/VAT calculation | Existing 12,000 + 3,000 = 15,000 example is useful. Preserve its focused crop, explicit example rate and links to the full document/requirements. |
| `/blogg/nar-sende-faktura` | Build sensible invoicing/payment routines | Advice is currently generic and completion-focused. Add a short qualification for ongoing/longer work, distinguish invoice issuance from payment deadline, and make manual sending explicit. Do not promise faster payment as a certainty. |

Bokmål is generally understandable. Compounds such as “fakturakrav” and “fakturaeksempel” may read more naturally in new body copy, but existing title/H1/search assets should not be changed merely to satisfy a stylistic preference. “Ryddig”, “enkelt” and “profesjonell” recur without adding much information on the older pages; concrete actions are more useful than more adjectives.

The product page and free-program blog overlap on “gratis fakturaprogram”; creation guide/blog overlap on “lage faktura”; requirements/fields articles overlap on invoice contents. Their distinct purposes remain defensible. **Keyword overlap alone does not prove harmful cannibalization.** No Faktura GSC query, ranking, conversion or field-performance data was available. Do not consolidate, redirect or change established metadata on this evidence.

## 6. Product functionality verification

Evidence tiers: **CODE** means inspected local application frontend/helper code, not an authenticated end-to-end transaction or deployed backend guarantee. **MEDIA** means visible authentic product state/document. **OWNER** means the established confirmed product model. **UNVERIFIED** means not established by these sources.

Application source root: `C:/Users/ddlas/Code/jobbleder_app/src/`, read-only. Marketing `content/invoiceProduct.ts` is evidence of what is advertised, not independent proof that a backend feature exists.

| Capability / claim | Result and precise evidence | Publishing boundary |
| --- | --- | --- |
| Create invoice; customer/project; dates; lines | CODE + MEDIA. `ui/documents/CreateDocument2026.jsx:2249–2277` renders customer/project/date fields and invoice rows. Faktura 110 editor shows Eksempel Eiendom, optional project, quantity/unit price/VAT. | Explain user input/review. Project shown in the editor is not a separate field in the illustrated PDF. |
| VAT and totals | CODE + MEDIA. Invoice editor row controls and summary; 110 has 12,000 net/25%/3,000 VAT/15,000 total. | A selectable rate is not tax advice or proof of automatic legal validation. |
| Invoice number | CODE + MEDIA. `viewmodels/createDocument.viewmodel.js:153` takes defaults from invoice details; editor displays number as text. Settings expose defaults. | No backend counter, concurrency, gap prevention or non-overridable numbering guarantee was established. Do not claim universal legal compliance. |
| Payment information | MEDIA + CODE settings/preview. PDF includes account, due date, invoice-number payment reference. | Do not promise KID generation, card payments, payment collection or bank matching. |
| PDF generation/download | CODE + MEDIA. `viewmodels/documentPreview.viewmodel.js:471`; `Main.js:1881` onward dispatches generate/regenerate; existing generated PDFs are authentic. | User generates, downloads and distributes. PDF export is not EHF/electronic delivery. |
| Timeliste → Faktura | CODE + MEDIA + OWNER. `domain/documents/helpers/buildInvoiceFromTimelist.js:13–67` creates separate regular/extra hours and regular/extra km lines with worker name. `Main.js:1863` dispatches conversion. | Review quantities, rates and VAT. Different desktop/mobile document numbers and totals must not be spliced into one scenario. |
| Tilbud → Faktura | CODE + MEDIA + OWNER. `buildInvoiceFromOffer.js:1`; `Main.js:1863`; source document linkage and copied data in the editor. | User initiates conversion and checks resulting invoice. No automatic acceptance or sending. |
| Kontrakt → Faktura | CODE + MEDIA + OWNER. `CreateDocument2026.jsx:1246` contract seed branch; document action in `Main.js`; invoice-from-contract screenshots. | Example copies the whole 12,000 net basis. No evidence of automatically calculated installments or schedule-triggered invoices. |
| Faktura → Kreditnota | CODE + MEDIA. `documentPreview.viewmodel.js:454`, `Main.js:1834`, `CreateDocument2026.jsx:2249` source-invoice selector; existing screenshot shows Kreditnota 28 from Invoice 110. | Full/partial/repeated credit behavior, backend numbering and exported credit-note contents require confirmation. Do not promise editable partial credit lines from this form. |
| Invoice editing/corrections | CODE. `documentPreview.viewmodel.js:446–454` offers Edit for timelist/offer/contract, but credit-note action for invoice. Current instruction explains correction through credit note/new invoice. | No claim that an issued invoice can simply be overwritten. Draft/issued lifecycle remains unverified. |
| Free / Premium | OWNER + MEDIA + CODE UI. Creation/conversion/PDF available in Free; Free watermark and Premium logo/clear documents exist. `settings.viewmodel.js:267–300` exposes branding; Free generation path exists in `Main.js`. | Keep functionality separate from branding. “Unlimited” is owner-confirmed marketing policy, not an independently audited backend quota guarantee. No new price claims. |
| Reminders | CODE, important nuance: `documentPreview.viewmodel.js:475–563` exposes reminder history, date gating and explicit create/print actions. `Main.js:1842–1852`, `MainContainer.js:637–648` call reminder/generation services. | This supports a user-initiated reminder workflow in source. It does not prove automatic reminders, actual email delivery, collection/legal compliance or the deployed service's behavior. Obtain owner confirmation/media before advertising more. |
| Payment tracking | The screen labelled Betalingsstatus shows due date and reminder level/history (`ui/documents/DocumentPreview2026.jsx:539`). | Reminder history is not evidence of paid/unpaid reconciliation or bank-confirmed payments. No payment-tracking promise should be inferred. |
| Automatic invoice delivery / electronic delivery / EHF | UNVERIFIED. No supported sending/EHF implementation established in inspected frontend actions/services. | Keep manual PDF delivery wording. Absence in inspected frontend is not proof that no separate service exists. |
| Bank/accounting integrations; automatic bookkeeping; automatic VAT reporting | UNVERIFIED. Inspected document services, actions and reporting UI do not establish these. Sales/VAT summaries are not filing/bookkeeping integrations. | Do not add these claims. No backend/integration audit or authenticated test was performed. |

Current primary content does not explicitly promise EHF, bank matching or automatic invoice delivery. The older generic phrase about a program helping users “sende” is not equivalent to an established delivery feature; future copy should make the manual step clear.

## 7. Norwegian invoice accuracy review

Official pages were reopened during this audit. Legal requirements below are separate from Jobbleder implementation and from practical advice. This is a content-accuracy review, not certification of the generated example or application.

| Topic | Verified distinction / implication for existing content | Official source |
| --- | --- | --- |
| Numbering/date | Invoice number must follow the documented controlled numbering approach; invoice date is distinct from delivery and due date. A typed Word number or a screenshot of a number does not establish compliance. | [Skatteetaten: Inntekter](https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/rutiner-regnskap-og-kassasystem/gode-rutiner-for-daglig-drift/inntekter/). |
| Parties, delivery and amounts | The general checklist covers seller/buyer identification, nature/scope of delivery, time/place, consideration, tax and due date. Buyer details allow alternatives; a private customer need not have an organization number. | [Altinn: Faktura — salgsdokumentasjon](https://info.altinn.no/starte-og-drive/regnskap-og-revisjon/regnskap/faktura-salgsdokumentasjon/), updated 18 March 2026. |
| Conditional identification | MVA suffix depends on registration. Foretaksregisteret wording depends on business form/registration, including AS/ASA and applicable NUF. Do not impose every conditional field on every seller. | [Altinn invoice guidance](https://info.altinn.no/starte-og-drive/regnskap-og-revisjon/regnskap/faktura-salgsdokumentasjon/). |
| MVA registration | Registration/approval determines when a business may invoice with MVA; turnover limits have conditions and exceptions. The rate selector does not resolve this. | [Skatteetaten: Mva-registeret](https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/mva/registrere-endre-slette). |
| Rates / tax presentation | 25% is the ordinary rate, not a universal rate. Official guidance also lists reduced rates; treatment depends on the actual supply. Existing 25% document arithmetic is clearly labelled as an example. | [Skatteetaten: Merverdiavgiftssatser](https://www.skatteetaten.no/satser/merverdiavgift/). |
| Payment details | A due date is part of the invoice checklist. Bank account, contact details and payment reference are useful practical additions; KID and a universal 14-day deadline must not be invented as general requirements. | [Altinn invoice guidance](https://info.altinn.no/starte-og-drive/regnskap-og-revisjon/regnskap/faktura-salgsdokumentasjon/). |
| Correction / credit note | Correcting an earlier invoice can require a referencing credit note and a new invoice. The current guide's qualified wording is appropriate. Preserve the original-document relationship. | [Altinn invoice guidance](https://info.altinn.no/starte-og-drive/regnskap-og-revisjon/regnskap/faktura-salgsdokumentasjon/); [Skatteetaten: documentation and incorrect addressee](https://www.skatteetaten.no/rettskilder/type/handboker/merverdiavgiftshandboken/gjeldende/M-15/M-15-10/M-15-10.2/). |
| Timing / ongoing work | For construction work the official explanation allows invoicing in step with progress and distinguishes financial advances from payment for work performed. Completion-only wording is therefore too categorical; an agreed payment plan alone does not make every advance VAT invoice permissible. | [Skatteetaten: construction invoicing and advances](https://www.skatteetaten.no/rettskilder/type/uttalelser/prinsipputtalelser/utstedelse-av-salgsdokument-i-bygge--og-anleggsvirksomheten--avregning-av-forskudd/). |
| PDF versus electronic invoice | A PDF attachment is not the same as structured electronic invoice delivery/EHF. Existing export wording should remain precise. | [Altinn invoice guidance](https://info.altinn.no/starte-og-drive/regnskap-og-revisjon/regnskap/faktura-salgsdokumentasjon/). |

Direct access to [bokføringsforskriften on Lovdata](https://lovdata.no/dokument/SF/forskrift/2004-12-01-1558) and the targeted §5-2-4 page returned HTTP 405 in the browsing environment. Search results were available but do not replace a successfully opened full current regulation. No independent current consolidated-law certification is claimed. The opened Skatteetaten “gjeldende” handbook identified itself as the **2025 edition**; the URL must not be described as proof of a 2026 edition. The registration URL with a trailing slash initially failed; the official URL without it opened successfully.

The expanded `/faktura-krav` correctly distinguishes mandatory/conditional/practical information and does not claim that the demonstration PDF is a universal legal template. No reversal of Phase 6B's factual corrections is recommended.

## 8. F10 finding reassessment

**Confirmed, still P2.** `content/blogPosts.ts`, post `forskjell-faktura-tilbud-timeliste`, contains both:

- “En faktura sendes etter at jobben er utført, når du skal kreve betaling.”
- “Faktura – når jobben er ferdig og du skal ha betalt”.

The same text is present in production. The article's document-type explanation remains useful; only these categorical timing statements need correction. The source cited in section 7 demonstrates that the entire project need not always be finished before an invoice is appropriate. This does not establish a general right to invoice future taxable work in advance.

Proposed replacement paragraph, **not implemented**:

> En faktura dokumenterer det kunden skal betale for varer eller tjenester. Når du fakturerer, må du følge avtalen og reglene som gjelder for leveransen. Ved lengre oppdrag kan det være aktuelt å fakturere underveis, i samsvar med fremdriften. Kontroller beskrivelse, beløp og betalingsvilkår før du sender fakturaen.

Proposed replacement list item:

> Faktura – når det er grunnlag for å fakturere leveransen eller den utførte delen av arbeidet.

Keep URL, canonical, metadata, H1, structured data and the article's explanatory intent. Add one contextual link to the requirements/timing explanation if needed. Risk/complexity: low; no redesign. Review the softer completion-focused advice in `/blogg/nar-sende-faktura` at the same editorial checkpoint without labelling it an identical legal error.

## 9. Authentic media inventory

**59 relevant existing files: 28 PNG sources and 31 WebP derivatives.** Dimensions and byte sizes were read from the actual files using the installed `sharp` library; nothing was rewritten. SHA-256 and manifest provenance are in `docs/phase-8a-diagnostics/inventory.json`. The scope includes supporting document-action states discovered through instruction manifests, not only filenames containing “invoice”, and the existing workflow infographic, explicitly identified as illustration rather than a product screenshot.

### Content/use/suitability keys for the complete table

| Key | Actual content and current use | Suitability / accuracy and privacy boundary |
| --- | --- | --- |
| F | Faktura 110, one parkett line, net 12,000/VAT 3,000/total 15,000; Free watermark. Product, example page, instruction PDF example and enlargement destination from small-business blog. | Best pilot document. Intact at 959×1251. Demo Company/Eksempel Eiendom, sample account/org numbers/dates: keep demonstrational caption; not a blank PDF or compliance guarantee. |
| PC / PL | Same invoice without branding / with Demo Company logo, shown by main product comparison/showcase. | Branding proof only; not a Premium-only invoicing feature. Same sample-data caveat. |
| E | Faktura 110 editor, customer/project/date/one line and totals; main product and creation instructions. | Full desktop screenshot is readable when enlarged. Project is editor context, not a separate field on the pictured PDF. Source sidebar says Premium active; that does not make creation Premium-only. |
| EC / EM / EL / ET | Crops of E: customer (75 px high), customer+dates (145), net-price/VAT controls (136), totals (145). Existing product process/hero and instructions; EL also small-business blog. | Authentic desktop crops, **not native mobile UI**. Keep native-width limits. EL excludes the description/quantity; ET is not a whole invoice. |
| TI / TIC / TP | Invoice creation from Timeliste 264, four categories; tighter mobile-width crop; exported Faktura 111 total 28,368.75. Timeliste product and conversion instructions. | Suitable detailed workflow proof. Keep four categories; caption crop limitations. Separate from the Timeliste 265 mobile scenario. |
| TA | Older Timeliste 261 → invoice form with two hour categories, 22,500 total. Source-only in current inspected manifests. | Not the same four-category scenario; do not substitute it for TI/TP or infer sending from filename “one_click”. |
| OI / OIC | Tilbud 29 → Faktura 111 creation state; full content crop / narrower desktop crop. Tilbud product and instructions. | Shows source/customer/line/summary in full derivative. Narrow crop omits right summary; not native mobile. |
| CI / CIC | Kontrakt 11 → Faktura 112 creation state; full content crop / narrower desktop crop. Kontrakt/Tilbud products and instructions. | Whole 12,000 net basis, not computed 30%/70% installment. PNG has a capture-edge line; current optimized derivative is preferable. |
| MC | Actual 332×720 mobile invoice-creation state, Faktura 113. Creation instruction. | Customer/dates/price visible; lower form is cut by the capture. No complete invoice/PDF claim. |
| MO / MK | Actual mobile offer-to-invoice line/summary / contract-to-invoice creation. Workflow instructions and completed workflow blog; MK also Kontrakt product where referenced. | MO crop does not show number/source marker. MK shows Faktura 113 from Kontrakt 11, distinct from desktop 112. |
| MR / MX / MS | Mobile Timeliste 265 → Faktura 112: source/regular hours; middle km/extra-hours fields; preview of all four categories. Instructions; MS also Timeliste article. | MS is a UI preview, not exported PDF. MR/MX alone do not show all four categories. Sample worker is Demo; no employee-account inference. |
| MT / MTΣ | Despite filenames ending `_01`/`_02`, these show **Timelist 265**, its customer/project/actions and its work summary, not an invoice. Used by Timeliste instructions. | Useful starting-point proof for conversion. Do not caption as Faktura or mix its totals with desktop Timeliste 264. |
| TC | Desktop Timelist 264 in Dokumenter, four work rows, summary and Opprett faktura action. Main Timeliste product and conversion instructions use the optimized crop. | Authentic conversion starting point; not the resulting invoice. Whole source includes document-list context; keep its example distinct from mobile Timeliste 265. |
| OA / OAS | Offer 29 in Dokumenter with customer, line, summary and document actions. Main Tilbud product and instructions use OA; OAS is its existing compact line/summary crop. | OA explains the starting point for offer conversion. OAS does not show the source number or actions and is a desktop crop, not native mobile UI. |
| MAO / MAK | Actual mobile Offer 29 / Contract 11 document previews with Opprett faktura action. Used in relevant conversion instructions. | Clear mobile starting-point evidence; not invoice output. Sample customer/project names are visible. Preserve the separate offer and contract context. |
| KN | Kreditnota 28 editor from Invoice 110, source selector/date/summary; currently source-only, not a deployed illustrated credit-note instruction. | Suitable future creation explanation with readable crop/enlargement. Does not show exported credit note, negative totals or partial credits. |
| DF / DFC / DFM | Existing homepage four-flow infographic, full/compact/narrow variants. PNGs are source material; WebPs are used by homepage. | Illustration, not application evidence. Four paths retained; it does not include credit notes. Large payload and small embedded labels make it a poor default blog/pilot image. Do not duplicate it everywhere. |

PNG rows below are original/source provenance, not a recommendation to serve source files as new thumbnails. Current usages above primarily refer to the optimized derivatives; original links in instructions can also expose the PNG. Source-only files have no inferred current page placement.

| Exact existing path | Dimensions | Bytes | Content/use/suitability key |
| --- | --- | --- | --- |
| `public/images/product/docflow/optimized/jobbleder-home-document-flow-940f0666f4cc.webp` | 1536×1024 | 1005366 | DF (WebP) |
| `public/images/product/docflow/optimized/jobbleder-home-document-flow-compact-a1de69c9b05c.webp` | 1442×597 | 610516 | DFC (WebP) |
| `public/images/product/docflow/optimized/jobbleder-home-document-flow-mobile-3dbe42d3e7a8.webp` | 1000×597 | 408308 | DFM (WebP) |
| `public/images/product/docflow/source/docflow_cropped.png` | 1442×597 | 982488 | DFC (source) |
| `public/images/product/docflow/source/jobbleder_docflow.png` | 1536×1024 | 1605526 | DF (source) |
| `public/images/product/invoice/optimized/jobbleder-invoice-customer-a819f5c0ca04.webp` | 400×75 | 2366 | EC (WebP) |
| `public/images/product/invoice/optimized/jobbleder-invoice-editor-80c02f47c4d3.webp` | 1917×906 | 73136 | E (WebP) |
| `public/images/product/invoice/optimized/jobbleder-invoice-editor-mobile-customer-d8eee62a318a.webp` | 400×145 | 4148 | EM (WebP) |
| `public/images/product/invoice/optimized/jobbleder-invoice-free-8239cf43dbea.webp` | 959×1251 | 52268 | F (WebP) |
| `public/images/product/invoice/optimized/jobbleder-invoice-lines-e59165029d4b.webp` | 400×136 | 3900 | EL (WebP) |
| `public/images/product/invoice/optimized/jobbleder-invoice-premium-clear-c94ecd44cf6d.webp` | 959×1251 | 45982 | PC (WebP) |
| `public/images/product/invoice/optimized/jobbleder-invoice-premium-logo-fe289b390386.webp` | 947×1251 | 51534 | PL (WebP) |
| `public/images/product/invoice/optimized/jobbleder-invoice-totals-a06d77a998da.webp` | 320×145 | 4460 | ET (WebP) |
| `public/images/product/invoice/source/fv_free_watermark.png` | 959×1251 | 127681 | F (source) |
| `public/images/product/invoice/source/fv_premium_clear.png` | 959×1251 | 109632 | PC (source) |
| `public/images/product/invoice/source/fv_premium_logo.png` | 947×1251 | 131557 | PL (source) |
| `public/images/product/invoice/source/screenshot_fv_edit.png` | 1917×906 | 114542 | E (source) |
| `public/images/product/kontrakt/source/invoice_from_contract.png` | 1280×720 | 115705 | CI (source) |
| `public/images/product/kreditnota/source/new_creditnota_form.png` | 1280×720 | 86922 | KN (source) |
| `public/images/product/mobile/optimized/contract_document_actions_mobile-7615390c1d96.webp` | 332×720 | 34024 | MAK (WebP) |
| `public/images/product/mobile/optimized/invoice_create_mobile-26b02c459f30.webp` | 332×720 | 44822 | MC (WebP) |
| `public/images/product/mobile/optimized/invoice_from_contract_mobile-4059b61ae977.webp` | 332×720 | 44312 | MK (WebP) |
| `public/images/product/mobile/optimized/invoice_from_offer_mobile-19b76863d679.webp` | 332×720 | 40668 | MO (WebP) |
| `public/images/product/mobile/optimized/offer_document_actions_mobile-e6dc31f296e1.webp` | 332×720 | 34196 | MAO (WebP) |
| `public/images/product/mobile/optimized/timelist_invoice_extra_mobile-89d3c1f3e42f.webp` | 332×720 | 42574 | MX (WebP) |
| `public/images/product/mobile/optimized/timelist_invoice_regular_mobile-aac888f9e45f.webp` | 332×720 | 45380 | MR (WebP) |
| `public/images/product/mobile/optimized/timelist_invoice_regular_mobile_01-2091c06e2ae8.webp` | 332×720 | 35022 | MT (WebP) |
| `public/images/product/mobile/optimized/timelist_invoice_regular_mobile_02-a77b7c05e04f.webp` | 332×720 | 38652 | MTΣ (WebP) |
| `public/images/product/mobile/optimized/timelist_invoice_summary_mobile-f4b16dce374e.webp` | 332×720 | 40904 | MS (WebP) |
| `public/images/product/mobile/source/contract_document_actions_mobile.png` | 332×720 | 56691 | MAK (source) |
| `public/images/product/mobile/source/invoice_create_mobile.png` | 332×720 | 64721 | MC (source) |
| `public/images/product/mobile/source/invoice_from_contract_mobile.png` | 332×720 | 64078 | MK (source) |
| `public/images/product/mobile/source/invoice_from_offer_mobile.png` | 332×720 | 57596 | MO (source) |
| `public/images/product/mobile/source/offer_document_actions_mobile.png` | 332×720 | 58001 | MAO (source) |
| `public/images/product/mobile/source/timelist_invoice_extra_mobile.png` | 332×720 | 63368 | MX (source) |
| `public/images/product/mobile/source/timelist_invoice_regular_mobile.png` | 332×720 | 65346 | MR (source) |
| `public/images/product/mobile/source/timelist_invoice_regular_mobile_01.png` | 332×720 | 57939 | MT (source) |
| `public/images/product/mobile/source/timelist_invoice_regular_mobile_02.png` | 332×720 | 61657 | MTΣ (source) |
| `public/images/product/mobile/source/timelist_invoice_summary_mobile.png` | 332×720 | 69797 | MS (source) |
| `public/images/product/tilbud/optimized/jobbleder-offer-contract-invoice-7847d3b65141.webp` | 1084×386 | 35312 | CI (WebP) |
| `public/images/product/tilbud/optimized/jobbleder-offer-contract-invoice-mobile-64fb6553081e.webp` | 862×386 | 25808 | CIC (WebP) |
| `public/images/product/tilbud/optimized/jobbleder-offer-hero-3c424f34ca1e.webp` | 1090×650 | 70056 | OA (WebP) |
| `public/images/product/tilbud/optimized/jobbleder-offer-hero-mobile-7ef9a11a7c8c.webp` | 600×168 | 11992 | OAS (WebP) |
| `public/images/product/tilbud/optimized/jobbleder-offer-invoice-825bce28603f.webp` | 1084×386 | 35104 | OI (WebP) |
| `public/images/product/tilbud/optimized/jobbleder-offer-invoice-mobile-dc98f21e88fc.webp` | 862×386 | 25696 | OIC (WebP) |
| `public/images/product/tilbud/source/invoice_from_contract.png` | 1280×720 | 115705 | CI (source) |
| `public/images/product/tilbud/source/offer_document_preview_in_documents_menu.png` | 1280×720 | 153575 | OA (source) |
| `public/images/product/tilbud/source/tilbud_to_invoice.png` | 1280×720 | 115837 | OI (source) |
| `public/images/product/timeliste/optimized/jobbleder-timelist-hero-6426b7a8e7d6.webp` | 624×646 | 46052 | TC (WebP) |
| `public/images/product/timeliste/optimized/jobbleder-timelist-invoice-form-8831711a4a0c.webp` | 840×720 | 52880 | TI (WebP) |
| `public/images/product/timeliste/optimized/jobbleder-timelist-invoice-form-mobile-68ad22496f40.webp` | 668×480 | 29764 | TIC (WebP) |
| `public/images/product/timeliste/optimized/jobbleder-timelist-invoice-pdf-f5e18354a415.webp` | 508×720 | 30270 | TP (WebP) |
| `public/images/product/timeliste/source/exported_invoice_4_different_entries.png` | 508×720 | 58619 | TP (source) |
| `public/images/product/timeliste/source/new_invoice_form_4_different_entries.png` | 840×720 | 92374 | TI (source) |
| `public/images/product/timeliste/source/one_click_invoice_from_timelist.png` | 1280×694 | 117420 | TA (source) |
| `public/images/product/timeliste/source/timelist_4_different_entries_in_documents_menu.png` | 1280×720 | 177017 | TC (source) |
| `public/images/product/timeliste/source/timelist_invoice_extra_mobile.png` | 332×720 | 63368 | MX (source) |
| `public/images/product/timeliste/source/timelist_invoice_regular_mobile.png` | 332×720 | 65346 | MR (source) |
| `public/images/product/timeliste/source/timelist_invoice_summary_mobile.png` | 332×720 | 69797 | MS (source) |

Four files are byte-identical duplicates: `tilbud/source/invoice_from_contract.png` duplicates the Kontrakt source; the three Timeliste `timelist_invoice_{regular,extra,summary}_mobile.png` sources duplicate their mobile-directory counterparts. Preserve them during this audit; reuse the established manifest paths rather than create more copies.

All **31 inventoried WebP URLs** returned production HTTP 200 and matched local bytes. Both invoice-example enlargement links were keyboard-opened locally and in production and decoded to 959×1251. The main product's initially collapsed Premium-clear image was separately opened and fully decoded at 375/1440 locally and in production; its initial unloaded lazy state is not a broken image.

### Missing media, only where useful

1. For a future illustrated credit-note explanation: authentic generated credit-note PDF for the same source invoice, with original-invoice reference, number/date and credited amounts visible. Confirm full versus partial correction first. Current editor image alone cannot prove output.
2. If the owner wants to explain reminders: authentic create/preview/download states plus confirmation of manual distribution and actual deployed behavior. Do not illustrate automatic delivery with the current history screen.
3. If making a numbering-compliance claim: backend/product confirmation is needed; another screenshot of a number is insufficient.

**No new asset is required for the proposed Phase 8B pilot or a practical creation guide.** Existing invoice document/editor/mobile assets are sufficient. Visual inspection found demonstrational names in the sampled originals, but this is not an external identity or account-number validation; owner review remains appropriate before publishing any newly selected private capture.

## 10. SEO findings

Actual local/production title, description, H1, canonical, structured data and rendered main text matched for all 33 inventory routes. All returned production HTTP 200. Existing source-order card selections are not evidence of orphaning: each primary route has incoming main-content links in the sampled graph.

| URL | Actual title | Actual meta description | Actual H1 |
| --- | --- | --- | --- |
| `/timeliste-mal` | Timeliste mal – gratis og enkel timeliste (PDF / nett) \| Jobbleder | Gratis timeliste mal for håndverkere og små bedrifter. Lag timeliste raskt, last ned som PDF og få full oversikt. | Timeliste mal (gratis).Fra arbeidstimer til ferdig faktura. |
| `/timeliste-uke` | Timeliste uke – få oversikt over arbeidstid per uke \| Jobbleder | Lag ukentlig timeliste for ansatte, prosjekter eller egne oppdrag. Enkel oversikt og PDF-nedlasting. | Timeliste uke |
| `/timeliste-prosjekt` | Timeliste prosjekt – før timer per prosjekt og kunde \| Jobbleder | Lag timeliste per prosjekt og få bedre oversikt over arbeidstid, kunder og oppdrag. Last ned som PDF. | Timeliste prosjekt |
| `/tilbud-mal` | Tilbud mal – skriv et profesjonelt tilbud (gratis) \| Jobbleder | Tilbud mal for små bedrifter og håndverkere. Lag tilbud raskt og konverter til faktura når kunden sier ja. | Lag tilbud som blir til mer. |
| `/tilbud-eksempel` | Tilbud eksempel – se hvordan et godt tilbud kan se ut \| Jobbleder | Se et tilbud eksempel og lær hvordan et ryddig og profesjonelt tilbud kan bygges opp for små bedrifter og håndverkere. | Tilbud eksempel |
| `/fakturaprogram-gratis` | Fakturaprogram gratis – lag faktura enkelt i Norge \| Jobbleder | Fakturaprogram gratis for håndverkere og små bedrifter. Lag faktura raskt i nettleseren og last ned som PDF. | Gratis fakturaprogram.Ubegrenset fakturering. |
| `/lage-faktura` | Lage faktura – hvordan skrive en faktura enkelt \| Jobbleder | Lær hvordan du lager en faktura enkelt og riktig. Jobbleder gjør det raskt å opprette faktura i nettleseren. | Lage faktura |
| `/faktura-eksempel` | Faktura eksempel – se hvordan en faktura kan se ut \| Jobbleder | Se et enkelt faktura eksempel og lær hvordan en profesjonell faktura bør bygges opp for små bedrifter og håndverkere. | Faktura eksempel |
| `/faktura-krav` | Faktura krav – hva må en faktura inneholde? \| Jobbleder | Lær hvilke opplysninger en faktura bør inneholde og hvordan du lager en ryddig faktura for kunder i Norge. | Faktura krav |
| `/kontrakt-mal` | Kontrakt mal – enkel kontrakt for håndverkere (gratis) \| Jobbleder | Gratis kontrakt mal for håndverkere og små bedrifter. Lag kontrakt raskt og sikre avtalen med kunden. | Lag kontrakter som passer jobben. |
| `/kontrakt-handverker` | Kontrakt håndverker – trygg avtale med kunde \| Jobbleder | Lag kontrakt som håndverker og sikre tydelige avtaler med kunden. Enkel løsning for små bedrifter i Norge. | Kontrakt håndverker |
| `/blogg/gratis-fakturaprogram-handverkere` | Gratis fakturaprogram for håndverkere – enkelt og nettbasert \| Jobbleder | Opprett faktura raskt med et gratis fakturaprogram for håndverkere. Enkel løsning direkte i nettleseren. | Gratis fakturaprogram for håndverkere – her er et enkelt alternativ |
| `/blogg/innhold-i-faktura` | Hva skal en faktura inneholde? En enkel oversikt \| Jobbleder | Se hva en faktura bør inneholde, og hvordan du lager en tydelig og profesjonell faktura for kunder i Norge. | Hva skal en faktura inneholde? |
| `/blogg/effektiv-timeliste` | Hvordan føre timelister effektivt \| Jobbleder | Lær hvordan du fører timelister effektivt og hva en god timeliste bør inneholde for bedre oversikt og dokumentasjon. | Hvordan føre timelister effektivt – spesielt for selvstendig næringsdrivende |
| `/blogg/hvordan-lage-gratis-faktura` | Hvordan lage en faktura gratis på nett \| Jobbleder | Slik lager du en profesjonell faktura gratis på nett. Enkel oversikt over hva en faktura bør inneholde og hvordan du kommer i gang. | Hvordan lage en faktura gratis på nett? |
| `/blogg/forskjell-faktura-tilbud-timeliste` | Forskjellen på faktura, tilbud og timeliste \| Jobbleder | Her er en enkel forklaring på forskjellen mellom faktura, tilbud og timeliste – og når du bør bruke dem. | Faktura, timeliste og tilbud – hva er forskjellen og når bruker du dem? |
| `/blogg/folle-opp-tilbud` | Hvordan følge opp et sendt tilbud og lande flere jobber \| Jobbleder | Slik følger du opp et sendt tilbud på en profesjonell måte og øker sjansen for å få respons fra kunden. | Hvordan følge opp et sendt tilbud og lande flere jobber |
| `/blogg/timeliste-for-handverkere` | Timeliste for håndverkere – hvorfor gode rutiner er viktige \| Jobbleder | Slik bruker håndverkere timelister for bedre oversikt, dokumentasjon og enklere arbeidshverdag. | Timeliste for håndverkere – hvorfor gode rutiner sparer deg for tid |
| `/blogg/timeliste-og-faktura` | Timeliste og faktura – slik henger de sammen \| Jobbleder | Slik bruker du timeliste som grunnlag for tydeligere og enklere fakturaarbeid. | Timeliste og faktura – hvordan henger de sammen? |
| `/blogg/faktura-eksempel-sma-bedrifter` | Faktura eksempel for små bedrifter \| Jobbleder | Se hva et godt faktura eksempel bør vise, og hvordan små bedrifter kan lage tydelige fakturaer. | Faktura eksempel for små bedrifter – hva bør det vise? |
| `/blogg/nar-sende-faktura` | Når bør du sende faktura for raskere betaling? \| Jobbleder | Lær hvorfor timing er viktig når du sender faktura, og hvordan gode rutiner kan gi raskere betaling. | Når bør du sende faktura for å få raskere betaling? |
| `/blogg/tilbud-vs-kontrakt` | Tilbud vs kontrakt – hva er forskjellen? \| Jobbleder | Lær forskjellen mellom tilbud og kontrakt og når du bør bruke hvert dokument. | Tilbud vs kontrakt – hva er forskjellen? |
| `/blogg/fra-tilbud-til-kontrakt-og-faktura` | Fra tilbud til kontrakt og faktura – slik fungerer det \| Jobbleder | Se hvordan hele prosessen fungerer fra første tilbud til betaling. | Fra tilbud til kontrakt og faktura – slik fungerer det |
| `/timeliste-mal-pdf` | Timeliste mal PDF – gratis timeliste for håndverkere \| Jobbleder | Gratis timeliste mal PDF for håndverkere og små bedrifter. Før timer enkelt og last ned timelisten som PDF. | Timeliste mal PDF |
| `/lage-tilbud` | Lage tilbud – hvordan skrive et godt tilbud \| Jobbleder | Lær hvordan du lager et ryddig og profesjonelt tilbud. Enkelt for håndverkere og små bedrifter i Norge. | Lage tilbud |
| `/hvordan-folge-opp-tilbud` | Hvordan følge opp tilbud – få flere svar fra kunder \| Jobbleder | Lær hvordan du følger opp et sendt tilbud på en profesjonell måte og øker sjansen for å få svar fra kunden. | Hvordan følge opp tilbud |
| `/` | Jobbleder – Faktura, kontrakt, timeliste og tilbud på minutter | Lag faktura, kontrakt, timeliste og tilbud enkelt i nettleseren. Jobbleder er laget for håndverkere og små bedrifter. | Jobben din.Dokumentene på plass. |
| `/instruksjoner` | Instruksjoner for Jobbleder \| Jobbleder | Lær hvordan du bruker Jobbleder til å opprette faktura, tilbud, timelister og kontrakter, registrere arbeidsøkter og holde oversikt over prosjekter, kunder og rapporter. | Instruksjonerfor Jobbleder. |
| `/blogg` | Blogg om faktura, tilbud, timelister og kontrakter \| Jobbleder \| Jobbleder | Artikler og guider om faktura, tilbud, timelister og kontrakter for håndverkere og små bedrifter i Norge. | Blogg |
| `/blogg/kategori/faktura` | Faktura \| Blogg \| Jobbleder | Artikler og guider om faktura for brukere av Jobbleder. | Faktura |
| `/blogg/kategori/oversikt` | Oversikt \| Blogg \| Jobbleder | Artikler og guider om oversikt for brukere av Jobbleder. | Oversikt |
| `/timeliste-ansatt` | Timeliste ansatt – enkel registrering av arbeidstid \| Jobbleder | Før timeliste for ansatte på en enkel måte. Perfekt for små bedrifter og håndverkere som trenger oversikt over arbeidstid. | Timeliste ansatt |
| `/blogg/gratis-timeliste-mal` | Gratis timeliste mal (PDF) – last ned uten innlogging \| Jobbleder | Last ned gratis timeliste mal PDF uten innlogging. Velg mellom tom timeliste og ferdig datert timeliste for siste uke. | Timeliste mal (PDF) – gratis nedlasting uten innlogging |

All 33 canonicals equal `https://www.jobbleder.no` plus their path. All have one H1; no primary-page heading-level skip was found. Primary pages have no explicit noindex. Missing page-level robots metadata is not a noindex finding; default indexability is preserved. The exact robots meta values, schema objects, heading lists and internal destinations are in the diagnostic inventory.

The four primary SEO/product routes emit `FAQPage`, with current questions/answers derived from the same content as their visible disclosures. The product uses `invoiceProduct.faqs`; generic pages use their own SEO FAQs. No invalid JSON-LD was found. This establishes parseability and content consistency, not eligibility for Google FAQ rich results. Blogs emit `Article` with stored publication dates; no fabricated freshness/dateModified is needed. Related cards' H3 headings are navigation, not extra article H1s. Breadcrumb navigation does not by itself supply `BreadcrumbList`; adding that schema is optional, not a release blocker.

`/sitemap.xml` and `/robots.txt` returned HTTP 200 locally and in production. Every inventory route is in the sitemap. Robots allows the site, disallows `/api/` and `/private/`, and declares the WWW sitemap/host. Preserve `lib/siteUrl.ts`, `app/robots.ts` and `app/sitemap.ts`; there is no demonstrated reason to change canonical strategy, redirects or indexability.

The product route bypasses the older generic Faktura body in `seoPages.ts`; review the **rendered product copy**, not unused paragraphs, when assessing its claims. `RelatedGuides` uses the first three topic entries, so `/faktura-krav` is absent from that default list; existing contextual links mitigate this. More precise link selection is worthwhile, but no broken SEO architecture or harmful cannibalization was demonstrated.

## 11. Internal linking and user journeys

| Journey | Current verified state | Useful narrowly scoped improvement |
| --- | --- | --- |
| Example → requirements → creation/product | Full document, sourced requirements and app entry are accessible. Example contains a direct creation-instruction anchor. | Give the document a clear in-page entry point and move useful reading links nearer the corresponding field. |
| Creation search → app | `/lage-faktura` has a working app link but generic explanation; the article links the guide. | Link `#opprett-faktura` beside the practical steps, with a review/download/manual-send distinction. |
| Tilbud → Faktura | Product, practical workflow blog and `#tilbud-til-faktura` demonstrate user initiation and review. | Preserve; do not duplicate whole workflows on every Faktura page. |
| Kontrakt → Faktura | Product/workflow blog and `#kontrakt-til-faktura` show source and whole-price example. | Preserve explicit distinction from automatic installment billing. |
| Timeliste → Faktura | Main Timeliste page, specialized project page, modern articles and `#timeliste-til-faktura` explain separate categories. | Link the exact instruction rather than only the hub when conversion is mentioned. |
| Faktura → Kreditnota | Requirements guide links `#rette-en-faktura` and `#opprett-kreditnota`; both reveal their content. | A short correction/help link near creation guidance could improve discovery. A new credit-note landing route is not a prerequisite. |
| Free-program discovery | Main product is strong; older tradesperson article refers readers vaguely to examples/requirements. | Make those references contextual links and clarify Free watermark/Premium branding once. |

The main product uses `SiteHeader` and its existing Produkter dropdown; generic SEO/blog pages use `Navbar` with Hjem and a different mobile menu. This is a component choice, not a broken dropdown. Reusing site chrome in approved future SEO pilots can reduce inconsistency; changing the global blog header is a separate scope decision.

**150 main-content internal HTTP checks** completed across local and production and returned 200; the three absolute instruction hashes discovered in that pass also existed in both environments. Additional instruction-specific browser checks verified actual expansion/scroll, not just ID strings. These totals describe the executed link set, not every possible outbound link on the website. Contextual inventory JSON retains actual outgoing links and allows targeted follow-up without reconstructing the graph.

## 12. Accessibility and responsive results

### Executed matrix

| Scope | Widths / preferences / motion | Executed count and result |
| --- | --- | --- |
| Nine primary routes + F10 | 375, 768, 1280, 1440; light and dark preference; reduced motion | 80 cases; no root overflow before/after disclosure expansion; no page/runtime or console errors in captured cases. |
| Four approved references | Same four widths and both preferences; reduced motion | 32 cases (eight in main run, 24 supplemental); no root overflow. Deliberate navy appearance preserved. |
| Nine primary routes | 375/light; ordinary motion preference | Nine additional cases; browser scrolling is smooth normally versus auto with reduced motion; zero targeted axe violations. |
| Inventory parity | 33 routes × local/production; 375 px sample | 66 observations; production 200 and matched metadata/schema/main text. These contextual samples are not all a four-width audit. |
| Production primary SEO/product | 1440/dark/reduced; four routes | Four additional observations; no root overflow/runtime error, first FAQ keyboard open/close works; product menu works. |
| Enlargement links | Example page + small-business article, local/production | Four Enter-activated image navigations, correct 959×1251 invoice. |
| Main product collapsed Premium preview | 375/1440, local/production | Four explicit open/decode checks passed. |

The main/reference matrix produced 34 full-page diagnostic screenshots. All nine primary pages had desktop/mobile dark-preference captures; the three generic SEO pages also had light-preference captures. Light mode was tested on the remaining pages even where no separate screenshot was saved. Representative screenshots were visually inspected for typography, document proportions, crop context and footer transitions.

### Automated and manual evidence

- **57 axe runs:** 48 expanded-state main/reference runs at 375/1440 with WCAG 2 A/AA, 2.1 AA, 2.2 AA and best-practice tags; nine supplemental primary runs also explicitly included `wcag21a`. Zero confirmed violations. This is targeted automated coverage, not a WCAG certification or a full assistive-technology audit.
- Incomplete rules were `color-contrast` and `link-in-text-block`. Targets included decorative checkmarks/FAQ glyphs/menu arrows, wrapped breadcrumbs and the mobile crop context. They were not counted as confirmed violations or blanket passes. The image's own embedded UI contrast is not evaluated by DOM axe checks.
- Normal text/headings and captions were readable in the sampled light/dark renders. No new white-on-white heading or low-contrast dark-footer failure was reproduced. Product/reference focus uses explicit 3 px outlines; legacy FAQ has an explicit outline and ordinary navigation retains browser focus. Stronger uniform legacy focus is P3 polish, not a demonstrated failure here.
- 168 main/reference disclosure open/close checks and 34 menu checks succeeded using Enter/Space. The disclosure total includes the Premium alternative, not just FAQ questions. Legacy FAQs expose `aria-expanded`, a valid `aria-controls` target and hidden answers; native details use browser semantics.
- One H1 per inventory page; primary hierarchy remained ordered. Image alt descriptions and enlargement labels match their visible example/context. No Phase 3-style accessible-name/visible-label mismatch was found.
- Full document proportions remain intact. Existing editorial figures specify dimensions and lazy loading. Main-product document frames use `object-fit: contain`; the frame's paper ratio is not evidence of image distortion. Fine print on a 279 px mobile document requires enlargement, which works.
- Observed CLS was **0 in the 88 instrumented main-run cases** during the exercised scroll/load/disclosure sequence. This is a local observation, not field Core Web Vitals or proof that every possible interaction is shift-free. Supplemental reference cases were not assigned an invented CLS value.
- Reduced-motion cases computed root scroll behavior `auto`; no active continuous animation was found in the main-run snapshots. Ordinary-motion supplemental cases computed `smooth` as expected.

Not executed: complete screen-reader session, manual audit of every WCAG criterion, browser/device-engine matrix, 200%/400% zoom matrix or authenticated application accessibility. Lighthouse was not required by this task and was not run; no performance/SEO/LCP score is claimed from earlier audits.

## 13. Technical baseline

| Check | Result |
| --- | --- |
| Git HEAD | `638319d2f8d20706046740bde39e53477c707ce7` |
| Entry working tree | Only untracked `docs/phase-7e-diagnostics/` and `docs/phase-7h-tilbud-production-verification.md`; no tracked diff. Preserved. |
| TypeScript | `npx.cmd tsc --noEmit --incremental false` — exit 0. |
| Full ESLint | `npm.cmd run lint` — exit 0; no lint warnings. |
| Production build | `npm.cmd run build` — exit 0; Next.js 16.1.6 compiled and generated 55 pages. |
| Build observation | Node 26 emitted existing `DEP0205`/`module.register()` deprecation output. No build failure, missing image/import warning or newly introduced warning was established. |
| Local production preview | `http://127.0.0.1:3041`, `next start`; used for the local audit, not a substitute for direct production checks. |
| Runtime | No page errors, console errors or HTTP ≥400 resource responses in the 88 instrumented render cases; tracking requests were suppressed there. |
| Production analytics | One ordinary production product-page visit allowed the real requests: `/api/handshake` 200, `/api/footprint` 200. Other automated visits suppressed those endpoints with synthetic 204 responses to avoid unnecessary tracking events. Synthetic responses are not endpoint test results. |
| Local analytics | One ordinary local visit: handshake 400, footprint 200. Current handshake catch maps exceptions to 400; no fresh diagnosis of the underlying exception was established. Local TLS/upstream evidence from previous reports must not be presented as a newly proven cause. |

`/api/footprint` returns before its upstream write completes and catches errors; HTTP 200 confirms acceptance by the marketing endpoint, not guaranteed analytics storage. No analytics configuration or implementation was changed and no secrets/environment values were printed.

Preservation verification: 328 pre-existing tracked/untracked files were compared with their entry SHA-256 baseline; 0 changed or missing. No pre-existing audit, diagnostic, application source or inventoried image was changed.

## 14. Prioritized modernization backlog

P1/P2/P3 here are **modernization priorities**. There is no demonstrated critical outage or release-blocking a11y defect in this audit.

| ID / priority | Affected URL/component and evidence | Benefit / recommended action | Complexity / risk |
| --- | --- | --- | --- |
| V01 / P1 | `/faktura-eksempel`: document at y≈993 desktop / 1,465 mobile; generic opening and narrow nested gutter. | Document-first editorial pilot; consistent gutter; accessible enlargement; contextual facts. | Medium / low-to-medium if scoped to this route. Preserve SEO/data. |
| V02 / P1 | `/lage-faktura`: generic paragraphs rather than practical workflow; no editor media in content. | Actual creation/review/download guide with existing authentic form and precise instruction anchor. | Medium / medium editorial review; no new features. |
| V03 / P2 | `/faktura-krav`: useful corrected list flattened by generic composition. | Better grouping of general/conditional/practical rules and compact contextual reading. | Medium / medium legal wording regression risk; retain verified text. |
| E01 / P2 | `/blogg/gratis-fakturaprogram-handverkere`: unsupported broad comparison with other free programs; vague example references and repeated promotion. | Neutral evaluation advice, concise Free branding explanation and contextual example/requirements links. | Small / low; no whole-article redesign. |
| E02 / P2 | `/blogg/hvordan-lage-gratis-faktura`: broad list without explicit review/manual-send distinction. | Add accurate sequence and `#opprett-faktura`, optionally one authentic mobile/editor example. | Small-to-medium / low; preserve metadata and informational intent. |
| F10 / P2 | `/blogg/forskjell-faktura-tilbud-timeliste`: categorical completion-only wording reproduced in production. | Two precise timing corrections from section 8. | Small / low; verify official source remains current when implemented. |
| E03 / P2 | `/blogg/nar-sende-faktura`: completion-focused general routine advice. | Qualify longer/ongoing work; separate issuance, manual sending and due date; practical checklist. | Small / medium if expanded into legal advice; keep narrow. |
| L01 / P2 | Generic supporting SEO/blog related-resource components use source order; requirements absent from default blog guide list. | Scoped contextual links before considering shared selection changes. | Small / low; global component changes require broader regression scope. |
| M01 / P2, conditional | Credit-note explanation has editor source but no output example. | Confirm credit behavior; only then capture/export one authentic matched PDF for future instruction depth. | Owner/backend dependent; not a pilot dependency. |
| P01 / P3 | `/fakturaprogram-gratis` already meets product presentation needs. | Preserve. Optional direct instruction/correction help, if later approved. | Small / avoid unnecessary product redesign. |
| P02 / P3 | `/blogg/innhold-i-faktura`, `/blogg/faktura-eksempel-sma-bedrifter`, completed document-workflow article are useful and accurate. | Preserve; optional contextual link/caption polish only. | Small / image/native-size and SEO safeguards. |
| C01 / P3 | Legacy header/footer and related cards on narrow screens. | Separately scoped chrome/gutter/focus/resource-list consistency. | Medium if shared; do not fold global blog redesign into pilot. |

Other contextual routes/hubs are P3/preserve in the complete inventory. Their Faktura references are useful existing journeys, not an invitation to redesign approved Timeliste/Tilbud/Kontrakt work.

## 15. Recommended Phase 8B pilot — exactly one page

**`/faktura-eksempel` only.** It has the clearest visual search intent, a verified scenario and sufficient authentic media. It allows the owner to evaluate hierarchy, document balance, navy surfaces and responsive reading order independently of a creation-guide rewrite or legal-reference redesign.

Proposed composition:

1. Compact editorial hero preserving H1 and search intent; a useful “Se fakturaeksemplet” in-page entry and restrained product action.
2. Intact Faktura 110 beside a concise factual explanation on desktop; explanatory introduction and readable document on mobile, with enlargement immediately available.
3. Read the document in purposeful groups: parties, line/price/VAT, dates/payment information. Retain 12,000/3,000/15,000 arithmetic and the demo-data/25%-example qualifications.
4. Short distinction between generated example and a blank/editable template; links to requirements and practical creation help.
5. Existing relevant FAQ and a compact contextual resource list. Preserve useful destinations while avoiding duplicate nine-card blocks.

Reuse site chrome/primitives, navy tokens and border-separated FAQ principles from approved references; reuse `InvoiceFigure`/existing media provenance. Avoid cloning Tilbud's acceptance/contract narrative. A scoped figure/layout adapter may be appropriate if needed, but must not change the small-business blog crop or other pages accidentally.

Preserve URL, canonical, indexability, metadata title/description, H1, FAQ content/schema alignment, real invoice image, meaningful alt/caption/enlargement, existing useful internal links and app destination. No synthetic document, image-detail edits, added legal guarantee, new dependency or new application feature.

Success criteria: the document is easy to reach/recognize; mobile uses the available content width; no crop/distortion; full-size link is keyboard accessible; zero confirmed targeted axe violations; four-width/two-preference/reduced-motion checks; SEO snapshot unchanged; TS/lint/build passed; only approved route-scoped code/assets/report changes. Compare image transfer bytes before/after and measure CLS without claiming a new traffic/conversion gain from a local test.

## 16. Proposed Phase 8 roadmap

| Phase | Proposed scope / approval gate |
| --- | --- |
| 8B — Visual pilot | `/faktura-eksempel` only, as above. Owner approves desktop/mobile composition before any rollout. |
| 8C — Ecosystem consistency | After pilot approval: `/lage-faktura` practical step-led guide, then `/faktura-krav` reference-led hierarchy. Separate small editorial batch for F10, the timing article and the two older free/creation articles. Preserve modern blogs and the main product. Include contextual links; global chrome changes require explicit scope. |
| 8D — Final review | Diff/scope and source-image preservation; factual workflow review; refreshed official citations where legal text changed; all canonical/title/description/H1/schema comparisons; internal links/anchors; images/full-size states; 375/768/1280/1440 and both preferences; motion/focus/menu/FAQ; axe incomplete items reviewed; TypeScript/full ESLint/build. Optional current mobile/desktop Lighthouse before/after, not recycled historical scores. Stop on new P0/P1 release defects. |
| 8E — Deployment verification | Only after explicit release approval: verify intended commit/deployment evidence, direct production 200/metadata/canonical/indexability, example/media hash/loads, desktop/mobile layout/FAQ/navigation, creation/conversion/correction instruction anchors, relevant links, sitemap/robots and one restrained real analytics check. Preserve working downloads and regression-check home plus all product pages. |

No implementation or release is authorized by this audit report. Timing corrections can be a small separate content change within an approved 8C batch; they do not require redesigning F10's article.

## 17. Known limitations

- No GSC or production conversion data was supplied for Faktura. No claim about rankings, cannibalization damage or predicted uplift.
- Application evidence is local frontend/helper code and authentic media, not authenticated production app tests or backend guarantees. Number allocation, invoice lifecycle, partial credits, deployed reminder delivery and integrations remain unverified.
- Lovdata full-text requests were blocked; official guidance and a specifically identified handbook edition support the scoped review. Recheck before materially changing legal guidance.
- Full four-width/two-preference browser matrix applies to primary routes, F10 and the four visual references. Other contextual routes received a representative mobile parity/availability check; production desktop interaction checks covered the four primary SEO/product routes.
- Browser tests used installed desktop Chrome viewport emulation. No physical mobile-device, screen-reader, full zoom or cross-engine certification. Incomplete axe checks are not silently marked passed.
- Images inside collapsed instructions are intentionally lazy. The audit checked their manifests/files and targeted relevant instructions/anchors; it did not decode every hidden media state in all 29 instructions or repeat the entire Phase 5 documentation audit.
- No Lighthouse or field CWV measurement in this task. Observed local CLS is explicitly scoped. Infographic payload is inventoried, not presented as a new measured speed regression.
- Production parity is content/metadata/media evidence. No new Vercel deployment metadata was used to assert an exact deployed SHA.

## 18. Owner decisions required

1. Approve or revise the single `/faktura-eksempel` Phase 8B pilot and its document-led navy editorial direction. The main Faktura product and existing blog layout remain preserved.
2. Approve the subsequent creation-guide → requirements-guide order and the small editorial/link batch, including F10's proposed wording.
3. Decide whether a later shared legacy-header/footer/resource-list refinement belongs in Phase 8 or separate work. It is not a pilot prerequisite.
4. Before publishing stronger claims, confirm numbering/backend lifecycle, full/partial credit behavior and actual reminder delivery. Supply a matched exported credit-note example only if the owner wants that instructional depth.

Audit changes: `docs/phase-8a-faktura-ecosystem-audit.md`, `docs/phase-8a-diagnostics/inventory.json`, `docs/phase-8a-diagnostics/checks.json` (new only). Supporting scripts/raw screenshots remain outside the repository in the existing Codex visualizations directory. Existing Phase 7E/7H work and application files were preserved. No product image was generated or altered.

**READY FOR OWNER REVIEW**
