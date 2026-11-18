# Phase 4B.1 — Tilbud product page audit

Date: 18 November 2026, Europe/Berlin.

## 1. Executive summary

**Recommendation: proceed to Phase 4B.2 after approving the narrative and resolving the specified evidence gaps.** Keep `/tilbud-mal` as the existing offer pillar. Build a product page about preparing a clear offer and choosing either Tilbud → Faktura or Tilbud → Kontrakt → Faktura, with authentic document output near the beginning.

There are sufficient authentic assets for offer creation, a complete offer document, document preview, direct invoice conversion and offer-to-contract creation. A matching complete Contract 11 document also exists outside the Tilbud folder. The complete contract-to-invoice end of Workflow B and independent editing of the resulting contract are **USER-CONFIRMED**, but are not fully demonstrated by the supplied image set or by application implementation in this marketing repository.

The most concrete current design issue is an existing light-theme contrast defect: the published page renders white headings on a white background. The redesign should use the explicit light product surface already used by the homepage and Timeliste. This report does not change or repair that defect.

Scope was read-only except for creating this report. No application code, image, metadata, content record, dependency or configuration changed. No commit, push or deployment. The locally modified Timeliste PDF and unrelated untracked sources were left untouched.

### Evidence and limitations

- Inspected route/content/schema/navigation code and shared components.
- Recursively enumerated **all seven files** under `public/images/product/tilbud/`, read their dimensions and exact byte sizes, and visually inspected each.
- Inspected relevant contract output and existing invoice branding examples to distinguish reusable assets from unrelated outcomes.
- Directly inspected production `/tilbud-mal` at 1280×900 in dark and light preferences. Dark navigation returned 200; the subsequent light navigation used a normal 304 cached response. Both rendered the same current content. No horizontal overflow at that inspected width.
- Opened the three existing FAQ controls in each preference. Checked the other three offer-cluster routes, their titles/canonicals/headings and the 15 distinct internal href destinations present on the main page; all destinations returned 200.
- This is a discovery/content audit, not a new full responsive, Lighthouse or WCAG release audit. No authenticated offer, contract or invoice was created/edited. No SEO rankings, keyword volumes, Search Console or conversion data were measured.
- Browser evidence and image inventory are outside the repository under `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase4b1-evidence/`.

## 2. Existing page findings

### Route and page composition

`app/(seo)/[slug]/page.tsx` generates static params from `content/seoPages.ts`, finds the content record and derives metadata through `generateMetadata`. Faktura and Timeliste have explicit product-component branches; Tilbud still uses the generic SEO renderer.

Existing order:

1. Legacy `Navbar`.
2. `Breadcrumbs`: Hjem / Tilbud / Tilbud mal (gratis).
3. One H1, introductory paragraph and four benefit bullets.
4. Main CTA.
5. `ClusterNavigation` for offer resources.
6. Four educational content sections.
7. `FAQAccordion` with three questions.
8. `RelatedSeoPages` and legacy `Footer`.

The source has nested Containers around some generic blocks. The page uses a narrow `max-w-3xl` editorial column within `Container`. No main product images, completed-document example, Free/Premium comparison, conversion screenshots or final CTA are present. `DownloadResources` is imported by the renderer but the Tilbud record has no `downloadResources`; there is no existing blank-offer/PDF-template download to preserve or advertise.

### Metadata and search positioning

Source: `content/seoPages.ts:336` and shared metadata generation.

| Element | Current production/source value |
|---|---|
| URL | `/tilbud-mal` |
| Title, including root template | `Tilbud mal – skriv et profesjonelt tilbud (gratis) | Jobbleder` |
| Description | `Tilbud mal for små bedrifter og håndverkere. Lag tilbud raskt og konverter til faktura når kunden sier ja.` |
| Canonical | `https://www.jobbleder.no/tilbud-mal` |
| H1 | `Tilbud mal (gratis)` |
| Topic / pillar | `tilbud` / `isPillar: true` |

Intro: “Lag et profesjonelt tilbud med riktig struktur. Når tilbudet er akseptert kan du gjøre det om til faktura.” This describes customer acceptance as business context; it does not establish an in-app acceptance workflow.

Current benefits: “Ryddig mal med feltene du trenger”, “Lag tilbud på minutter”, “Konverter tilbud til faktura”, “Last ned og send som PDF”. In future copy, clarify that users download the document and arrange delivery themselves; the current wording must not be expanded into built-in sending or automatic dispatch.

Existing educational headings/content to retain in substance:

- **Hva er et tilbud?** Scope of delivery, price and terms; useful before work starts; clear documents explain what is included.
- **Hvorfor bruke en tilbud mal?** Reusable structure, less administration, consistent documents.
- **Hva bør et godt tilbud inneholde?** Work description, price, conditions and validity period.
- **Fra tilbud til faktura.** Use the accepted offer as a basis for the next document and keep the process together.

The current keyword intent combines “tilbud mal”, “gratis”, “profesjonelt tilbud”, tradespeople and small businesses. It is not primarily an offer-follow-up guide or a generic invoice landing page.

### FAQ and structured data

Current visible questions and source-generated FAQPage answers:

| Question | Answer |
|---|---|
| Hva bør et tilbud inneholde? | Kontaktinfo, beskrivelse, pris, vilkår og dato. |
| Kan jeg lage faktura fra tilbudet? | Ja, med ett klikk i Jobbleder. |
| Er det gratis? | Ja, du kan opprette tilbud gratis. |

The renderer creates one FAQPage JSON-LD block from the same `page.faqs` array used by `FAQAccordion`. The global root layout adds Organization and WebSite schema. Visible breadcrumbs have no dedicated BreadcrumbList schema. The unchanged global WebSite SearchAction is an existing separate observation, not a reason to alter global schema during the Tilbud redesign.

The legacy FAQ is a client component using buttons and conditional answers. Its buttons lack explicit `aria-expanded`/answer relationships, and the plus/minus is included in button text. Prefer the native `details/summary` pattern used by Timeliste/Faktura, with visible FAQ and JSON-LD sharing one data source. Preserve the three existing topics; do not create duplicate FAQPage blocks when adding a dedicated route branch.

### Links and CTA destinations

The main **“Opprett tilbud”** CTA and header **“Login”** link normalize to `https://app.jobbleder.no/`. There is no direct registration URL, preview anchor, template download or second/final CTA today. Reuse the accurate registration helper from `Primitives.tsx`: the app opens English login and new users choose “Create account”. This journey was verified in preceding phases; it was not submitted or re-tested as an authenticated flow in this audit.

Existing offer cluster: `/tilbud-mal`, `/lage-tilbud`, `/tilbud-eksempel`, `/hvordan-folge-opp-tilbud`.

Related cards: those three other offer pages, `/timeliste-mal`, `/timeliste-mal-pdf`, `/fakturaprogram-gratis`, `/lage-faktura`, `/kontrakt-mal`, `/kontrakt-handverker`.

Shared navigation/footer: `/`, `/instruksjoner`, `/blogg`, `/om-oss`, `/kontakt` (footer has the first three resource links). All 15 distinct current internal destinations returned 200 during this audit. Preserve useful destinations even if the card/pill presentation changes.

### Current visual design and concrete defect

Dark preference: body `rgb(10,10,10)`, white H1/H2, gray supporting paragraphs, blue CTA and white navigation. It is a text-first SEO layout with dark cluster pills and a pale related-card section.

Light preference: body `rgb(255,255,255)` while the generic renderer still assigns white headings (`text-white`). The H1 and educational H2s become white-on-white; paragraph text remains very pale. Source locations: `app/(seo)/[slug]/page.tsx:81` and its educational heading/text classes, combined with `app/globals.css`. This is a **concrete important contrast defect**, visually confirmed in production, not a speculative theme concern. A future dedicated page should use the explicit white surface/dark ink tokens already deployed on Timeliste. Do not change the shared SEO renderer broadly as part of this page redesign.

Evidence: [light screenshot](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase4b1-evidence/existing-tilbud-light.png), [dark screenshot](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase4b1-evidence/existing-tilbud-dark.png).

## 3. Complete Tilbud image inventory

Repository root: `C:/Users/ddlas/Code/jobbleder-site/`. Paths below are exact repository-relative paths. File sizes are actual encoded bytes, not estimates. **Seven files total: six PNG sources and one optimized WebP, 572,720 bytes combined.** No other files were found recursively under the Tilbud directory at audit time.

| Exact path | Dimensions | Bytes | Depicts | Suggested use / full versus crop |
|---|---:|---:|---|---|
| `public/images/product/tilbud/source/exported_tilbud_A4.png` | 506×720 | 39,992 | Complete supplied portrait offer page: Tilbud 29, Demo Company, Eksempel Eiendom, one “Legging av parkett” line, net 12,000, 25% MVA 3,000 and gross 15,000 NOK; issue/validity dates; Jobbleder Free branding. | Main authentic PDF-example section. Preserve the entire page and natural proportions, with original-image link. A separate close-up may support details; do not crop the only full-document presentation. |
| `public/images/product/tilbud/source/exported_tilbud_A5.png` | 506×360 | 37,358 | Compact landscape document view of the same offer fields, line and totals. | Suitable hero/compact illustration. Describe as a document view/excerpt, not proof of selectable A5 export support. Full source preferred where used; enlargement available. |
| `public/images/product/tilbud/source/new_offer_form.png` | 1280×720 | 112,403 | Tilbud 29 creation: client, project, issue/validity dates, line description, net unit price 12,000, quantity 1, 25% MVA and summary 12,000 / 3,000 / 15,000. | Creation process and potentially hero. Desktop crop may remove sidebar/blank lower area. Mobile detail crop should retain relevant client/line fields or summary with HTML explanation; original must remain accessible. |
| `public/images/product/tilbud/source/offer_document_preview_in_documents_menu.png` | 1280×720 | 153,575 | Selected Tilbud 29, client/project, line and summary; buttons “Rediger”, “Opprett kopi”, “Opprett kontrakt”, “Opprett faktura”, “Generer PDF”. Preview title is “Offer 29”. | Strong branching-workflow illustration: one existing offer, two document-conversion choices. Prefer a right-panel crop on desktop; preserve document identity and conversion controls in an appropriate detail view. Do not crop away both actions while claiming they are shown. |
| `public/images/product/tilbud/source/tilbud_to_contract.png` | 834×720 | 94,495 | Contract 11 creation with “Kilde: Tilbud 29”, selected offer/reference, customer/project, editable work/date/payment fields and clause controls. | Workflow B creation step. Keep source badge and offer/reference together with the fields discussed. A mobile source/header detail and optional field detail are preferable to shrinking the entire form into unreadable text. Does not prove independent editing semantics by itself. |
| `public/images/product/tilbud/source/tilbud_to_invoice.png` | 1280×720 | 115,837 | Invoice 111 creation with “Kilde: Tilbud 29”, customer/project, transferred parkett line, quantity/price/MVA and source-labelled summary. | Workflow A. Crop empty areas/sidebar while retaining source identity and the invoice result fields. Supply access to full source; do not describe the screen as an already issued or sent invoice. |
| `public/images/product/tilbud/optimized/jobbleder-home-offer-59f2cd7e7af2.webp` | 506×360 | 19,060 | Existing homepage derivative of `exported_tilbud_A5.png`. | Reuse for the same compact document composition where helpful. Decoded pixels are identical to the A5 source. Do not enlarge beyond its useful resolution or use it as a full portrait page. |

The A4/A5 filenames do not independently verify physical export-format options. The A5 image is not pixel-identical to a simple top crop of the A4 source; do not infer an exact crop relationship from their dimensions. Both visibly show the same offer example. Only the WebP ↔ A5 lossless relationship was verified pixel-for-pixel here.

Git status: A5 source and the homepage WebP are already tracked. The other **five Tilbud source PNGs are currently untracked**, but pre-existed this audit. Preserve them and deliberately include selected originals in a future approved implementation/release. Do not indiscriminately stage all untracked product folders.

### Relevant supporting assets outside the Tilbud directory

| Exact path | Dimensions | Bytes | Use/limitation |
|---|---:|---:|---|
| `public/images/product/kontrakt/source/exported_contract_preview.png` | 508×720 | 73,859 | Complete Contract 11 output. It explicitly references offer 29 and “Pris iht. tilbud nr. 29”, with 12,000 kr offer amount and manual signature fields. Suitable supporting result for Workflow B; already used by the homepage. No new contract-preview asset is needed for that step. |
| `public/images/product/kontrakt/source/tilbud_to_contract.png` | 834×720 | 94,495 | Byte-identical duplicate of the Tilbud-folder contract-creation screenshot. Choose one canonical source path in a future manifest; do not create another duplicate. |
| `public/images/product/invoice/source/fv_free_watermark.png` | 959×1251 | 127,681 | Free-branded Invoice 110 with the same general parkett/client/15,000 total. It is not Invoice 111 and does not establish which conversion produced it. Do not label it the exact result of the displayed offer-to-invoice form. |
| `public/images/product/invoice/source/fv_premium_logo.png` | 947×1251 | 131,557 | Premium-logo Invoice 110. Suitable only as an explicitly labelled invoice branding example, not a Tilbud Premium screenshot. |
| `public/images/product/invoice/source/fv_premium_clear.png` | 959×1251 | 109,632 | Unbranded Invoice 110. Same limitation; no need to duplicate the full Faktura pricing presentation. |
| `public/images/product/docflow/source/jobbleder_docflow.png` | 1536×1024 | 1,605,526 | Existing four-path document infographic, including both offer paths. Supports context but is broader/heavier than this page needs. |
| `public/images/product/docflow/source/docflow_cropped.png` | 1442×597 | 982,488 | Compact existing infographic source. Optional supporting overview; authentic offer screens should carry the main narrative. |

## 4. Product functionality and evidence classification

**CODE-VERIFIED** below means the marketing repository renders a particular claim/UI or schema. It does not mean this repository implements or tests the authenticated product. No offer/calculation/conversion implementation was found in this marketing app. All supplied product capabilities therefore remain **USER-CONFIRMED**, with additional screenshot/documentation support as specified.

| Capability | Authority | Additional evidence / qualification |
|---|---|---|
| Create offers | USER-CONFIRMED | Creation form and instruction content; marketing code renders creation CTA. |
| Associate client/project | USER-CONFIRMED | Both selectors and transferred values visible in offer and conversion forms. |
| Offer lines, unit price, quantity | USER-CONFIRMED | Form shows one row plus “Legg til rad”; one-row sample demonstrates the fields, not every multi-line scenario. |
| MVA calculations | USER-CONFIRMED | Coherent example 12,000 net + 3,000 MVA = 15,000 total. This is visual consistency, not backend calculation verification or a claim that every offer must use 25%. |
| PDF generation | USER-CONFIRMED | Generate-PDF control and exported offer images. No actual offer `.pdf` download file was found in `public/downloads/`. |
| Tilbud → Faktura | USER-CONFIRMED | Source-labelled Invoice 111 creation screenshot; existing FAQ and invoice-workflow marketing copy. |
| Tilbud → Kontrakt | USER-CONFIRMED | Source-labelled Contract 11 form and matching exported contract. |
| Edit resulting contract independently | USER-CONFIRMED | Editable-looking contract fields and general contract-edit instructions support the presentation, but screenshots do not establish independence from the offer or absence of synchronization. |
| Kontrakt → Faktura | USER-CONFIRMED | Existing instructions and marketing paths explicitly describe it. No matching Contract 11 → invoice screenshot located. |
| All functions in Free | USER-CONFIRMED | Current homepage states the four workflows are free. A “Premium aktiv” sidebar in screenshots is not evidence that these functions require Premium. |
| Free branding; Premium removes branding/custom logo | USER-CONFIRMED | Offer document shows Free branding; general invoice examples demonstrate branding options for invoices, not a complete offer-specific comparison. |

Concrete code-verified marketing facts: the existing title/canonical, one H1, source-driven FAQPage, CTA destinations, cluster links, homepage workflow text and invoice `ConnectedWorkflows` entries. Product claims must not be promoted from USER-CONFIRMED to CODE-VERIFIED merely because they appear in marketing text.

Do not add customer acceptance portals, electronic approval/signing, automatic sending, reminder automation, tracking/open rates, employee access, accounting integrations, quantities/usage limits, discounts, currency options or prices without separate confirmation. Contract signature fields are for manual signing, not e-signing. Educational “vilkår” content is not proof of an arbitrary offer-terms editor field absent from the offer screenshot.

## 5. Current workflows and presentation opportunities

### Workflow A — Tilbud → Faktura

Currently mentioned in the Tilbud intro, benefit bullet, educational section and FAQ. The homepage offer section and the four-flow text/infographic reinforce it. The invoice page's `ConnectedWorkflows` presents an offer-source card linked to `/tilbud-mal`, with a reminder to check transferred information.

Recommended demonstration: Tilbud 29 document preview with “Opprett faktura” → `tilbud_to_invoice.png`, retaining “Kilde: Tilbud 29”, the parkett line and totals. Suggested copy: **“Bruk tilbudet som grunnlag for faktura. Kontroller opplysningene før du oppretter dokumentet.”** Link to `/fakturaprogram-gratis`. A generated Invoice 111 output from this exact offer is desirable if a final-document result is included.

### Workflow B — Tilbud → Kontrakt → Faktura

The homepage explicitly lists this complete path and says the offer can be used for a contract or invoice. Instructions at `/instruksjoner#dokumenter` describe both conversion steps, while `/instruksjoner#opprett` describes contract fields. The invoice page separately presents contract-to-invoice, but does not visually trace an entire offer-origin chain. The Tilbud SEO page itself does not currently explain this path.

Recommended demonstration: Tilbud 29 preview with “Opprett kontrakt” → source-labelled Contract 11 form → available Contract 11 document → new evidence of invoice creation sourced from Contract 11. Suggested copy: **“Lag kontrakt fra tilbudet. Tilpass kontrakten videre, og bruk den som grunnlag for faktura når du er klar.”** Independent editing is USER-CONFIRMED; a changed-contract/unchanged-offer pair would make it convincing visually. Link to `/kontrakt-mal` and the existing instruction section.

Use two clearly labelled alternatives. Do not imply that every offer must become a contract, that the system accepts an offer for the customer, or that creating/converting a document sends, approves or signs it. Do not substitute the Timeliste 264 → Faktura 111 example for offer conversion merely because the invoice number is also 111.

## 6. Free/Premium and reusable component inventory

| Candidate | Reuse decision |
|---|---|
| `components/site/SiteChrome.tsx` | Reuse existing SiteHeader/SiteFooter for modern product navigation; do not edit them or change other page shells unnecessarily. |
| `components/site/Primitives.tsx` | Reuse SectionContainer, ApplicationCTA, ResourceLink, ProductMedia and registration guidance. ProductMedia provides proportions, lazy/priority choices, art direction, captions and accessible original links. |
| `components/site/site.module.css` | Reuse explicit light surface, dark ink, blue accents, spacing, focus rings and reduced-motion behavior. |
| `components/product/timelist/TimelistProductPage.tsx` | Reuse patterns for isolated slug composition, a compact semantic comparison table and native FAQ fed by the same data as schema. Its content is Timeliste-specific, not a ready-made generic page. Avoid its known narrow-table word wrapping. |
| `components/product/invoice/PlanComparison.tsx` | Reuse the table's caption/scope pattern if useful. Component/data/images are invoice-bound and not suitable unchanged. Do not copy “unlimited invoicing” into a promise about offer limits. |
| `components/product/invoice/ProductFAQ.tsx` | Useful native disclosure/layout pattern; hardcoded topic/FAQ data needs an offer-specific equivalent. |
| `components/product/ProductMediaFrame.tsx` | Looks shared but imports invoice types/CSS and says “fakturavisningen” in document links. Prefer ProductMedia for offers rather than changing a working invoice component. |
| Cluster/related components | Reuse content selection/destinations; avoid importing dark/light legacy containers unchanged into the new surface. |
| `scripts/optimize-invoice-media.mjs` and existing page preparation scripts | Reuse the exported lossless optimization pipeline in Phase 4B.2. Preserve originals, record hashes/crops/dimensions/bytes, and avoid changing current manifests or generating files during this audit. |

Recommended compact comparison (USER-CONFIRMED content):

| Feature | Free | Premium |
|---|---|---|
| Create offers, client/project and offer lines | Included | Included |
| PDF and document conversion | Included | Included |
| Document appearance | Jobbleder branding | Remove Jobbleder branding; custom company logo |

No prices or usage caps. A compact HTML table is sufficient; a visual offer-branding comparison requires real Premium offer examples. Invoice artwork should not masquerade as a Premium offer.

## 7. SEO cluster and preservation requirements

| Intent | Existing destination | Recommended role |
|---|---|---|
| tilbud mal / gratis tilbud mal | `/tilbud-mal` | Main product/pillar: tool, actual example and conversion choices. |
| lage tilbud | `/lage-tilbud` | Instructional guide: how to write/build a clear offer. Keep it linked rather than cloning its whole article into the product page. |
| tilbud eksempel | `/tilbud-eksempel` | Example interpretation/content guide. Main page can show authentic output and link here for explanation. |
| tilbud håndverker | No dedicated matching SEO slug found | Cover tradespeople/real job examples naturally within the pillar and existing construction guide; no new URL or redirect needed. |
| oppfølging | `/hvordan-folge-opp-tilbud` | Human follow-up advice. Avoid presenting it as product reminder automation. |

Live titles/canonicals for the other three cluster pages match their existing routes and return 200. Potential overlap exists between `/lage-tilbud` and the writing-oriented blog articles, and between the SEO follow-up guide and `/blogg/folle-opp-tilbud`. This is intent overlap, not evidence of ranking cannibalization. Preserve their destinations and differentiate the product page through screenshots and workflow evidence.

Useful existing blog links, selectively rather than a large duplicate resource wall:

- `/blogg/lage-tilbud-byggebransjen` — audience-specific writing guidance.
- `/blogg/lage-tilbudsdokument` — document contents/how-to.
- `/blogg/feil-med-tilbud` — common mistakes.
- `/blogg/folle-opp-tilbud` — existing exact slug, despite its spelling.
- `/blogg/tilbud-eller-pristilbud` — pricing clarity.
- `/blogg/tilbud-vs-kontrakt` — conceptual distinction.
- `/blogg/fra-tilbud-til-kontrakt-og-faktura` — existing but thin placeholder-like content with ellipses; review before making it a prominent conversion aid. Do not rewrite that article in the product-page task.

Preservation checklist for Phase 4B.2:

- Keep `/tilbud-mal` and canonical `https://www.jobbleder.no/tilbud-mal`; no redirect/new product URL.
- Retain current title/description as baseline. Any revision should have a concrete SEO reason, not just visual redesign preference.
- Keep exactly one H1 containing “Tilbud mal” and free intent; a marketing continuation may be part of the same H1.
- Preserve topic `tilbud`, pillar status and automatic sitemap inclusion (weekly / priority 0.9 in current sitemap code).
- Keep all four existing educational topics as useful visible HTML, with their current substantive meaning.
- Retain existing cluster and related internal destinations, homepage/header inbound routes, and useful links to invoice/contract/instructions.
- Retain the original three FAQ topics. More detailed wording may clarify conversion versus sending, but visible HTML/schema must remain synchronized.
- Keep root metadata infrastructure, robots and www origin helper untouched. Do not add a second FAQPage or invented software ratings/offers.
- Do not promise a downloadable blank PDF/Word/Excel template when none is supplied. “Tilbud mal” can truthfully refer to creating the document in Jobbleder.

## 8. Proposed section architecture

Recommended story: **show the offer → explain how it is made → let the reader choose the next document**. This keeps the output tangible and distinguishes it from Timeliste's registration-led sequence and Faktura's invoicing-led page.

| Section | Suggested Norwegian direction | Assets and behavior |
|---|---|---|
| 1. Hero | **“Tilbud mal (gratis). Gjør det tydelig hva du tilbyr.”** Explain customer/project, work lines, price and PDF. Primary “Lag tilbud gratis”; secondary “Se tilbudseksempel”. | Authentic offer-preview/editor crop or existing compact output. App CTA plus accurate English-login registration guidance; secondary anchors to the example, not an invented template download. |
| 2. Authentic document | **“Et ryddig tilbud, klart som PDF.”** Explain work, dates/validity, line price, MVA and total. | Full `exported_tilbud_A4.png`, Free branding caption and original-image link. Compact supporting view can use existing WebP. |
| 3. Creation | **“Fra kundedetaljer til ferdig tilbud.”** Select client/project, enter lines/quantity/price/MVA, review and generate PDF. | `new_offer_form.png` with readable details; dates/validity visibly supported, not a promise of automatic acceptance or delivery. |
| 4. Choose the next step | **“Bygg videre på tilbudet.”** Introduce the two alternatives without requiring a contract. | Preview screenshot retaining both conversion actions; two short HTML paths, not the heavy four-product infographic repeated at full size. |
| 5. Direct invoice path | **“Fra tilbud til faktura.”** Reuse existing information and review it before creation. | `tilbud_to_invoice.png`; optionally a matching final Invoice 111 when supplied. Contextual link to Faktura. |
| 6. Contract path | **“Fra tilbud til kontrakt — og videre til faktura.”** Independently adapt the contract, then create invoice when ready. | Existing source-labelled contract form and matching Contract 11 document. Complete final-step illustration after the missing Contract 11 → invoice evidence is supplied; otherwise keep that final step as confirmed HTML explanation. |
| 7. Plans | **“Hele tilbudsarbeidet er med i Free.”** Same functionality; Premium controls branding/logo. | Compact accessible comparison, no new restrictions/prices. Offer-specific branding images only if authentic examples are supplied. |
| 8. Educational resources | **“Slik blir tilbudet tydelig for kunden.”** Preserve what/why/contents/conversion topics. | Visible text plus selected links to lage tilbud, tilbud eksempel, follow-up and tradesperson guidance. Avoid duplicating full guide articles. |
| 9. FAQ | **“Spørsmål om tilbud?”** Keep current topics; add confirmed PDF, contract, independence and plan topics. | Native details/summary; one shared FAQ data source and one FAQPage. |
| 10. Final CTA | **“Få tilbudet på plass.”** Primary “Opprett tilbud gratis”, optional example anchor. | Reuse application destination and registration helper; no promise of direct signup, sending or customer acceptance. |

Possible additional FAQs, with bounded answers:

- **Kan jeg lage kontrakt fra tilbudet?** Yes; review and adapt the resulting contract.
- **Kan jeg redigere kontrakten uten å endre tilbudet?** Yes, USER-CONFIRMED independent editing; do not imply automatic synchronization.
- **Kan jeg lage faktura fra kontrakten?** Yes; inspect the copied information before creating the invoice.
- **Kan jeg laste ned tilbud som PDF?** Yes; distinguish an app-generated document from a blank downloadable template.
- **Hva er forskjellen på Free og Premium?** Full offer/PDF/conversion in both; Free branding versus Premium branding/logo controls.

On mobile, use a single reading order and detail crops with original links. Preserve document identity/source badges and the controls being described. Avoid tiny full dashboards, overlapping PDF cards or a wide unscrollable comparison. At desktop widths use spacious two-column compositions and alternating light sections. Later QA should include 375/768/1280/1440, both preferences, reduced motion, focus, schema parity, image ratios/payload and regression checks on deployed product pages.

## 9. Missing materials — precise request

**The existing set is sufficient for a convincing core offer page and most of both workflows. It is not sufficient for a fully screenshot-evidenced end-to-end Workflow B or independent-edit demonstration.**

Highest priority for the complete proposed story:

1. **Contract 11 document view with its next action:** show contract number, source/reference to Offer 29 and “Opprett faktura” together. The existing contract PDF already covers completed contract output; no replacement is needed for that document.
2. **Invoice creation from Contract 11:** show `Kilde: Kontrakt 11`, transferred line(s), client/project and totals. Use the invoice number actually assigned; do not edit numbers into a screenshot.
3. **Independent contract editing evidence:** a genuine Contract 11 edit/result capture after changing a work description or clause, paired with the unchanged Offer 29 source. Useful if the page visually emphasizes independence; the textual claim can already be used as USER-CONFIRMED.

Helpful, conditional additions:

- Final exported invoice generated from the displayed direct Offer 29 → Invoice 111 form, if Workflow A will show a final document. Existing Invoice 110 branding examples are not that exact outcome.
- Final exported invoice from the contract branch, if its final document is shown.
- Offer PDF exports with Premium logo and/or removed branding if a visual offer-specific Free/Premium comparison is desired. The compact text comparison does not depend on those images.
- A genuine multi-line offer with at least two work items if the design wants to demonstrate multiple-line handling more convincingly. Current UI has “Legg til rad” but the supplied example has one line.
- Actual offer PDF files for downloadable completed examples, only if that action is intended. Current PNGs are adequate for an accurately labelled preview and full-image link. A blank-template download is not required by the current site and should not be fabricated.

No synthetic interface, replacement illustration, invented data state or edited screenshot is needed. Do not require entirely new mobile screenshots before trying readable authentic crops.

## 10. Implementation risks and Phase 4B.2 recommendation

1. **Theme contrast:** isolate the new light product surface; do not carry generic `text-white` headings onto white or change all SEO pages globally.
2. **Shared route regression:** add only a Tilbud-specific branch; leave metadata generation, Faktura, Timeliste and other SEO routes unchanged.
3. **Evidence integrity:** retain USER-CONFIRMED labels in implementation notes, preserve source references, and never present unrelated Invoice 110 or Timeliste-derived Invoice 111 as the exact offer result.
4. **Workflow overstatement:** conversion is a user-selected document creation step; acceptance, signature and delivery are separate actions. Offer-based contract fields do not prove synchronization behavior.
5. **Format/download claims:** A4/A5 filenames and PNG previews do not establish selectable formats or downloadable offer-template endpoints.
6. **Untracked sources:** five relevant offer originals already exist locally but would need deliberate inclusion later. Do not modify or delete them, and do not include unrelated images or the modified Timeliste PDF in the next release.
7. **Readability/performance:** the current 1280 px screens need intentional crops; record dimensions/source hashes/crops and use lossless WebP in the next phase. Prioritize only the hero, lazy-load later media, preserve natural ratios and visible-label/accessibility-name alignment.
8. **SEO overlap:** keep the pillar product-led and guides educational. Preserve current routes, relevant content and link paths; avoid arbitrary redirects, wholesale keyword rewrites or claims about measured search performance.
9. **Plan reuse:** reuse comparison semantics rather than invoice-specific limits/copy/images. Keep narrow-screen row labels readable.
10. **Documentation quality:** the existing workflow blog article is thin; link to the established instructions for concrete product help rather than assuming the blog already provides an adequate walkthrough.

Approve the proposed narrative and decide whether Phase 4B.2 should wait for the final contract-to-invoice captures or present that user-confirmed final step in HTML until authentic screenshots are supplied. Keep the current source originals intact and use the inspected seven-file inventory as the asset starting point. Implementation should remain local until a separate visual/release approval.

**Stop after this audit. Phase 4B.2 has not started.**
