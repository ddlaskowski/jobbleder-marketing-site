# Phase 6B.1 — Faktura accuracy and editorial preparation

19 November 2026. **Planning and verification only.** No website text, application code, metadata, routes or images have been changed. This document proposes a limited implementation for the three Phase 6A P1 findings; it does not authorize publication.

## 1. Exact targets and audit findings

Reviewed `docs/phase-6a-faktura-ecosystem-audit.md`, particularly F01–F03, the capability evidence, existing media, SEO inventory and owner questions. Re-read the current records in `content/seoPages.ts` and `content/blogPosts.ts`, the relevant instruction guides and selected read-only local app source. The scope is **five existing URLs**, not three guessed pages:

| Audit finding | Exact target URL | Confirmed current deficiency | Planned boundary |
| --- | --- | --- | --- |
| F01 / P1 | `/faktura-krav` | FAQ reduces requirements to sender, customer, description, date and total. Sections repeat general benefits; numbering, VAT specifics and delivery particulars are not explained. | Correct the checklist and its supporting explanations; retain URL, metadata, H1 and useful structure. |
| F01 / P1, related article | `/blogg/innhold-i-faktura` | Existing list mixes requirements with practical bank details; uses “Dato for utsendelse”; no worked field explanation or delivery particulars. | Clarify fields and distinguish requirements from practical recommendations, with a contextual link to the checklist. |
| F02 / P1 | `/faktura-eksempel` | Says “Se hvordan” and discusses using an example as a template, but shows no invoice or worked numbers. | Add an authentic generated invoice example and explain its structure. No blank invoice-template claim. |
| F02 / P1, related article | `/blogg/faktura-eksempel-sma-bedrifter` | Five generic example attributes; no actual example or values; links to the similarly unillustrated example guide. | Use a concrete small-business scenario and explain the numbers rather than duplicate the broader guide. |
| F03 / P1 | `/blogg/fra-tilbud-til-kontrakt-og-faktura` | Introduction ends in ellipsis, four headings have no explanatory body, then a promotional sentence. Phase 6A measured about 27 article words. | Complete this existing outline. This is the one target where substantive expansion is justified. |

The main `/fakturaprogram-gratis` page, `/lage-faktura`, other Faktura articles, product pages, instructions and shared navigation are **reference/link destinations only**. No changes to them are proposed in this implementation scope. Preserve the existing Phase 6A report and unrelated work.

## 2. Official sources and verification status

All sources below were accessed or attempted on 19 November 2026. Guidance is evidence for general editorial statements; it does not certify Jobbleder's backend or every transaction type.

| ID | Exact official source | Access / intended use |
| --- | --- | --- |
| S1 | [Altinn — Faktura (salgsdokumentasjon)](https://info.altinn.no/starte-og-drive/regnskap-og-revisjon/regnskap/faktura-salgsdokumentasjon/) | Successfully read; page says updated 18 March 2026. General invoice checklist, conditional company identification, mixed VAT, correction reference and PDF/EHF distinction. |
| S2 | [Skatteetaten — Inntekter](https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/rutiner-regnskap-og-kassasystem/gode-rutiner-for-daglig-drift/inntekter/) | Successfully read. Numbering controls, basic invoice fields, preservation of erroneous invoices not sent. |
| S3 | [Skatteetaten — Merverdiavgiftshåndboken, 15-10.2](https://www.skatteetaten.no/rettskilder/type/handboker/merverdiavgiftshandboken/gjeldende/M-15/M-15-10/M-15-10.2/) | Successfully read, especially 15-10.2.2. General required fields and identification of parties. The `gjeldende` URL currently displays the heading **Merverdiavgiftshåndboken 2025**; it is not relabeled as a verified 2026 consolidated regulation here. |
| S4 | [Skatteetaten — Merverdiavgiftshåndboken, 15-10.6](https://www.skatteetaten.no/rettskilder/type/handboker/merverdiavgiftshandboken/gjeldende/M-15/M-15-10/M-15-10.6/) | Successfully read, especially the discussion of invoice content, numbering, delivery and VAT grouping. Same displayed edition caveat as S3. |
| S5 | [Skatteetaten — Registrere, endre eller slette i Merverdiavgiftsregisteret](https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/mva/registrere-endre-slette) | Successfully read. Registration approval before invoicing with VAT and the registration-transition guidance. No new registration-threshold tutorial is proposed. |
| L1 | [Bokføringsforskriften — consolidated regulation](https://lovdata.no/dokument/SF/forskrift/2004-12-01-1558) | Direct access failed with HTTP 405. Chapter 5 and a direct § 5-1-1 URL also failed. Current complete statutory wording, exceptions and commencement provisions were **not directly verified**. |

Relevant provision references for a final legal-text check are §§ 5-1-1, 5-1-2, 5-1-3, 5-1-4, 5-1-5 and 5-2-7. These are cross-referenced in accessible guidance/search material; they are not represented as a successful direct reading of L1. Historical `/LTI/` versions and old government PDF copies appeared in search results but were **not used as current law**. In particular, historical numbering of the credit-note section differs from modern references.

**Verification boundary:** the general requirements below are supported by accessible official guidance. Precise date exceptions, detailed issuance deadlines, advance-billing exceptions, any changes awaiting commencement and the exact current consolidated provisions require direct verification before including those details in publishable copy. Do not fill those gaps using a commercial blog or an assumption. This limitation does not prevent planning the confirmed checklist and example improvements.

## 3. Verified requirements versus practical recommendations

Scope: ordinary Norwegian invoice/sales-document information. This is a focused editorial baseline, not exhaustive guidance for cash sales, reverse charge, exports, sector-specific billing or all company forms. Avoid “alt loven krever i alle tilfeller”.

| ID / topic | Verified baseline and classification | Editorial instruction / evidence |
| --- | --- | --- |
| R01 — Numbering | **Requirement.** Machine allocation with a controllable sequence is the ordinary software route; easy overriding is not acceptable. Preprinted numbered forms are another route described in guidance. | Explain the rule without promising Jobbleder's backend meets it. A visible number is insufficient evidence. S2 and [S4, numbering discussion](https://www.skatteetaten.no/rettskilder/type/handboker/merverdiavgiftshandboken/gjeldende/M-15/M-15-10/M-15-10.6/). |
| R02 — Dates | **Requirement.** A documentation date and delivery particulars are relevant; invoice date, delivery date and payment due date must not be treated as interchangeable. | Replace the article's ambiguous “Dato for utsendelse” with “Fakturadato (dokumentasjonsdato)”. Do not prescribe backdating or a universal issuance deadline; exact exceptions need L1 verification. [S3, required content](https://www.skatteetaten.no/rettskilder/type/handboker/merverdiavgiftshandboken/gjeldende/M-15/M-15-10/M-15-10.2/). |
| R03 — Seller | **Requirement / conditional detail.** Seller name and organization number; MVA suffix when registered. AS/ASA and relevant registered foreign branches have additional identification requirements. | Distinguish those conditions; do not tell every sole trader to add Foretaksregisteret. S1; [S3, seller identification](https://www.skatteetaten.no/rettskilder/type/handboker/merverdiavgiftshandboken/gjeldende/M-15/M-15-10/M-15-10.2/). Include address as useful baseline contact information; exact company-form requirements need final checking. |
| R04 — Buyer | **Requirement.** Buyer identification ordinarily includes name plus address or organization number; some special cases require more. | Do not require every private customer to have an organization number, or equate a worker name with buyer identity. [S3, buyer identification](https://www.skatteetaten.no/rettskilder/type/handboker/merverdiavgiftshandboken/gjeldende/M-15/M-15-10/M-15-10.2/). |
| R05 — Goods/services and delivery | **Requirement.** Nature and extent of the supply, delivery time and place. The necessary detail depends on the transaction. | Explain practical work description/quantity and relevant work site; do not assume customer billing address is always the work site. [S4, supply/delivery discussion](https://www.skatteetaten.no/rettskilder/type/handboker/merverdiavgiftshandboken/gjeldende/M-15/M-15-10/M-15-10.6/). |
| R06 — Amount, VAT, due date | **Requirement.** Consideration, payment due date and applicable VAT must be specified; VAT amount in NOK. Different VAT treatments/rates need clear separate specification and totals. | Do not make 25% universal or insist VAT must be printed on every individual row. S1; [S4, amount/VAT discussion](https://www.skatteetaten.no/rettskilder/type/handboker/merverdiavgiftshandboken/gjeldende/M-15/M-15-10/M-15-10.6/). |
| R07 — VAT registration | **Conditional requirement.** Do not invoice with VAT before registration is approved. | A VAT input or selected default does not determine the user's tax status. Keep registration guidance brief and link official help. [S5, while waiting / after registration](https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/mva/registrere-endre-slette). |
| R08 — Payment method/contact | **Practical recommendation**, distinct from the required due date/amount. Bank account, useful reference, email and contact person help payment and questions. | Bank account and KID are not listed as universal requirements in the general invoice-content checklist reviewed. This is a limited inference about that checklist, not a claim that no special agreement/rule can require them. No mandatory KID or statutory 14-day payment term should be invented. [S3, baseline list](https://www.skatteetaten.no/rettskilder/type/handboker/merverdiavgiftshandboken/gjeldende/M-15/M-15-10/M-15-10.2/). |
| R09 — Corrections | **Correction requirement/guidance.** A credit note corrects a prior invoice and references it; documentation requirements apply. Do not imply overwriting an already sent invoice is the ordinary correction path. | Explain credit note and, where appropriate, a corrected replacement invoice. Preserve the distinction between legal guidance and app draft behavior. [S1, credit notes](https://info.altinn.no/starte-og-drive/regnskap-og-revisjon/regnskap/faktura-salgsdokumentasjon/). S2 also says erroneous invoices not sent must be retained, not discarded. Exact current § 5-2-7 and edge cases remain subject to L1 check. |

### How to use the requirements in the later copy

- Use a concise **krav** checklist and a separate **praktiske opplysninger** paragraph. Apply R01–R09 rather than mixing all fields in a single undifferentiated list.
- Number allocation required of invoicing software is not the same claim as automatic invoice creation or sending. Never transfer the word “automatisk” from the legal numbering discussion to the whole document workflow.
- Avoid legally absolute PDF-template advice. An illustrated document is not a compliant numbering system or a blank downloadable invoice template. Altinn also distinguishes a PDF from a structured electronic invoice; do not claim EHF support from a PDF image. [S1, electronic invoice discussion](https://info.altinn.no/starte-og-drive/regnskap-og-revisjon/regnskap/faktura-salgsdokumentasjon/).
- A payment schedule in a contract is not permission to issue every kind of VAT invoice in advance. The workflow article should explain document actions, not give unverified advance-invoicing tax advice. Detailed exceptions are outside the planned article.
- No claim that Jobbleder “sikrer alle lovkrav”, validates company registration, books income or checks the correct VAT treatment. Those capabilities were not established.

## 4. Verified Jobbleder capabilities and uncertainties

Evidence tiers: **OWNER-CONFIRMED** = established product facts from approved phases; **ASSET/DOCUMENTED** = real interface/export or current instruction; **LOCAL SOURCE** = code in `C:/Users/ddlas/Code/jobbleder_app/src`; **UNVERIFIED** = no current production transaction/backend test. Local source has not been proven identical to the deployed app. No authenticated account or document mutation was used in this phase.

| Capability | Evidence rechecked | Safe statement for the planned pages / boundary |
| --- | --- | --- |
| Invoice creation and lines | `content/instructionGuides.ts`, `opprett-faktura`; desktop/mobile creation assets; `src/ui/documents/CreateDocument2026.jsx` invoice editor | Choose customer/dates, add descriptions, unit price, quantity and VAT; review before saving/generating. Project association is optional when relevant. The desktop filename `screenshot_fv_edit.png` shows creation, not editing an issued invoice. |
| PDF export | Authentic generated invoice images; guide and local preview `generate-pdf` action | Create/download a PDF and send it manually. A static PNG of an export is not itself a downloadable invoice PDF. |
| VAT and totals | Line controls and invoice 110: 12,000 net, 3,000 VAT, 15,000 total | Explain this actual 25% example; do not claim all VAT scenarios/exemptions or tax-status validation. |
| Payment information | Invoice 110 shows account, due date and payment instructions; company/invoice-details guide | Display information for payment. This does not establish bank connection, payment processing or reconciliation. |
| Timeliste → Faktura | Owner-confirmed, authentic form/PDF; `src/domain/documents/helpers/buildInvoiceFromTimelist.js` | Four separate categories: regular hours, extra hours, regular kilometers, extra kilometers, with worker attribution. Select conversion and review rates, quantities, VAT and totals. No automatic billing/delivery. |
| Tilbud → Faktura | Owner-confirmed; conversion screenshot; `buildInvoiceFromOffer.js` copies source data | Use an offer as the basis for an invoice, then review. Do not infer acceptance tracking or automatic sending. |
| Tilbud → Kontrakt → Faktura | Owner-confirmed; existing conversion/editing assets; current guides | Contract can be edited independently after conversion; invoice creation is a separate chosen action. No electronic signing or automatic installment generation. |
| Credit note | `new_creditnota_form.png`, credit-note instruction; local form selects source invoice/date; preview exposes `create-credit-note` | A source-invoice-based credit-note flow exists. Full versus partial credit, repeated notes, statuses and generated output need confirmation. Do not promise partial refunds or returned funds. |
| Invoice editing / correction | Local `documentPreview.viewmodel.js` around 443–473 offers Edit for timesheet/offer/contract, but not invoice. Correction instruction advises credit note/new invoice. | Do not present direct editing of an issued invoice as supported. Backend immutability and exact draft/issued boundaries remain unverified. |
| Numbering | Screenshot displays invoice 110; local creation UI displays default number as metadata; view model takes number defaults | Safe to explain the visible example number. Cannot yet promise backend sequence allocation, concurrency safety, reset behavior or non-overridable numbering. |
| Free / Premium | Owner-confirmed model, current comparison and authentic branding examples | Document creation, export and conversions in Free; Free PDFs have Jobbleder watermark. Premium supports own logo/clean branding alternatives. Do not put conversion behind Premium in copy. |

Useful source references rechecked: `src/viewmodels/documentPreview.viewmodel.js` action list; `src/viewmodels/createDocument.viewmodel.js` credit-note detection/defaults; `src/ui/documents/CreateDocument2026.jsx` credit-note payload around 1701 and number/source/date editor around 2249–2267; the two conversion helpers above. These are read-only evidence, not files proposed for modification.

No independent verification supports automatic sending, bank synchronization, bookkeeping integration, payment reconciliation, EHF, recurring billing, automatic reminders, native apps or offline behavior. Do not add them. Existing mobile screenshots show browser-responsive UI; a mobile layout is not evidence of a native app.

## 5. Authentic screenshot inventory

Selected existing sources/derivatives were checked on disk: 15 media entries reference 13 unique PNG originals and 14 distinct existing derivatives. Dimensions and sizes below are exact bytes, not estimated browser transfers. All 14 selected manifest derivatives exist and their PNG source hashes match their recorded originals; the additional credit-note source has no registered optimized derivative. Source images remain unchanged. The fuller Phase 6A inventory remains available; this selection is limited to the three findings.

### Recommended placement and evidence value

| ID | Existing evidence | Suggested use / limitations |
| --- | --- | --- |
| M01 | Full Free invoice 110 | Primary F02 example. Shows actual document structure, a single work line and VAT/total. Provide full-size access. This is a generated document example with demonstration data, not a blank template or universal legal specimen. |
| M02 | Desktop invoice-creation interface | Optional support in the requirements article's short application explanation; no need to insert it on every target. Creation state, not proof of issued-invoice editing. |
| M03–M04 | Existing line and totals crops of M02 | Useful if explaining fields requires more readable detail. Reuse existing crops; do not place all crops beside the full source without a reason. |
| M05–M06 | Timeliste-derived four-category invoice form and exported invoice | Available to demonstrate the separate categories if needed. Timeliste is not the main narrative of the offer/contract article; prefer a contextual instruction link there, avoiding scope expansion. |
| M07 | Offer-derived invoice form | Direct Tilbud→Faktura branch of F03. Caption it as a form being checked, not a sent invoice. |
| M08–M09 | Contract created from offer and independently edited contract | Main branch of F03. A paired example can clarify independent editing without implying changes to the original offer. |
| M10 | Invoice created from contract | Complete F03's longer branch. Use its existing derivative; the same source also exists in the Kontrakt folder, so do not duplicate it. |
| M11–M14 | Authentic mobile creation and conversion screenshots | Alternative portrait examples when the mobile UI genuinely helps. They may show different document numbers; never imply they are the exact export of invoice 110. |
| M15 | Existing credit-note creation form | Already sufficient to illustrate selecting an invoice/date and checking the source summary. Generated credit-note output is not shown. Useful only if the requirements/correction explanation benefits; it is not mandatory decoration. |

Suggested primary alt text/caption for M01, subject to final implementation review:

- Alt: “Faktura 110 fra Jobbleder med én linje for parkettarbeid, MVA og totalbeløp på 15 000 kroner.”
- Caption: “Eksempel på en faktura generert i Jobbleder. Opplysningene er demonstrasjonsdata; dette er ikke en blank fakturamal.”
- Visible enlargement label: “Åpne fakturaeksemplet i full størrelse”. Do not give its link an accessible name inconsistent with the visible label.

### Missing assets and exact capture plan

**No new capture is essential to resolve F01–F03 at the planned level.** Existing media is sufficient for a sourced checklist, real invoice examples and both offer workflows. Do not delay those tasks for unrelated screenshots.

If a detailed correction tutorial is later authorized, request these only after the owner confirms the actual supported workflow:

1. `exported_credit_note_for_invoice_110.png`, proposed destination `public/images/product/kreditnota/source/`: full exported credit note or its authentic preview, clearly showing its own identity/date, reference to original invoice, amounts and VAT. It must actually come from the demonstrated case; if invoice 110 cannot be used, change the filename and all captions to the real coherent case. Do not stage or edit financial values to match an old screenshot.
2. `corrected_invoice_after_credit_note.png`, same proposed directory: the resulting replacement invoice from that case, with new invoice identity and corrected content. Only capture if replacement is the confirmed procedure; label it separately from the original.
3. Optional `credit_note_source_invoice_mobile.png`, same proposed directory: authentic mobile source-selection/review state, if a phone-specific correction guide is approved. Do not request a synthetic portrait crop of the desktop form as a substitute for mobile UI.

These are **proposed future filenames**, not assets that currently exist. Ask for demo data, no real customer/bank/personal information. Preserve the existing `new_creditnota_form.png`; do not request it again. Current settings captures are not required for this five-page plan.

The illustrative invoice does not explicitly establish every conditional requirement in section 3. Do not redraw it to add delivery or company-registration details; explain what the example demonstrates and keep legal checklist coverage in the text. Any “complete legal template” claim would require separate verification/materials and is not proposed.

## 6. Proposed changes per target

### A. `/faktura-krav` — useful, sourced requirements guide

**Preserve:** current introductory purpose, existing H1 and three useful section topics, URL/metadata/canonical, FAQ intent, related links and existing app destination. This needs targeted replacement of generic paragraphs, not a new sales landing page.

**Specific edits proposed:**

1. Under “Vanlige opplysninger i en faktura”, introduce the compact R01–R09 checklist with requirement/conditional/practical distinctions. Link S1 and the relevant Skatteetaten source beside the explanation.
2. Use “Hvorfor er det viktig å kjenne til faktura krav?” to explain checking the document before use; remove repeated statements about professionalism that add no instruction.
3. Add a short correction subsection with the established general principle, then link the existing correction guide. Avoid unverified partial-credit and draft mechanics.
4. Keep “Slik gjør et fakturaprogram jobben enklere” brief and factual: structured lines, checking and PDF. Do not claim Jobbleder guarantees legal compliance or backend numbering correctness.
5. Correct “Hva må en faktura inneholde?” FAQ to reflect the checklist rather than the current five-field answer. Generate the visible FAQ and JSON-LD from the same revised records. Keep the other useful questions unless their answers need the same factual qualification.

**Practical example/media:** short check-before-use exercise referring to invoice 110, linked to `/faktura-eksempel`; a second full-page invoice image is optional, not necessary. If M03/M04 genuinely clarifies price/VAT, use one relevant detail with a full-size link to the authentic source. Do not imply this cropped detail proves all requirements are met.

**Contextual links:** `/faktura-eksempel` (“Se feltene i et fakturaeksempel”), `/instruksjoner#opprett-faktura`, `/instruksjoner#rette-en-faktura` and, if the text specifically introduces it, `/instruksjoner#opprett-kreditnota`. Existing related links stay available.

**Restrained CTA:** retain the existing verified app destination `https://app.jobbleder.no` and one “Opprett faktura gratis”/equivalent action after useful help. Do not add a new banner or second conversion box.

**Acceptance:** authoritative sources visible; R08 separate from legal list; no universal VAT/date/payment-term claims; FAQ/schema consistency; retained metadata and H1.

### B. `/blogg/innhold-i-faktura` — explain fields in practice

**Preserve:** informational opening, current H1, useful sections “Hvorfor er dette viktig?” and “Slik gjør du fakturaen mer profesjonell”, existing `/faktura-krav` link and app destination. No complete rewrite.

**Specific edits proposed:**

1. Correct the date terminology and expand the current checklist using R02–R07. Separate payment method/contact tips (R08). Clarify who the organization number belongs to instead of treating every buyer as a company.
2. Add one short read-through of the actual invoice-110 work line and totals: what the description, quantity, net price and VAT explain. Refer detailed legal coverage to A instead of repeating its whole checklist.
3. Replace one repetitive note/promo paragraph with a factual check-before-download paragraph. Retain useful contact/readability tips.

**Media:** M03/M04 are sufficient if a small field detail helps. Alternatively one M01 preview near the explanation; choose one approach, not a gallery. No fabricated annotated interface; explain references in adjacent HTML text.

**Contextual links:** preserve `/faktura-krav`; optionally link `/faktura-eksempel` for full reading and `/instruksjoner#opprett-faktura` where the article discusses creating the document. Avoid adding all five instructions just because they exist.

**Restrained CTA:** keep one existing app action, with concise Free/watermark context only where necessary. No new plan comparison or large product section.

**Acceptance:** readers can distinguish required fields from payment convenience; the article remains a field explanation, not a duplicate requirements landing page. Preserve Article schema intent and original publication date; do not silently reset datePublished.

### C. `/faktura-eksempel` — show the promised example

**Preserve:** H1, URL, metadata/canonical, useful explanatory topics and existing related links/app destination. Keep this as a document-reading page, not a product-page clone.

**Specific edits proposed:**

1. Place M01 near the introduction, before lengthy generic advice. Present a full document with explicit dimensions, balanced width and readable full-size access; mobile can stack the explanation before/after it without cutting off fields.
2. Explain this actual example: invoice 110, one “Legging av parkett” line, quantity 1, unit net price 12 000, MVA 3 000 and total 15 000 NOK. These are demonstration values, not a recommended universal price or VAT treatment.
3. Under “Hva bør et godt faktura eksempel vise?”, help the reader locate document identity/dates, parties, line and totals. Refer legal questions to A.
4. Qualify “Kan jeg bruke eksempelet som mal?”: it can illustrate structure, but the image is neither an editable blank template nor a replacement for a proper numbering system. Do not invent a download endpoint or editable PDF.
5. Keep “Fra eksempel til ferdig faktura” as a short next step: enter real information, review, generate PDF and send manually.

**Contextual links:** `/faktura-krav`, `/instruksjoner#opprett-faktura`, and a natural link to `/blogg/faktura-eksempel-sma-bedrifter` for the scenario discussion. Preserve existing working links; do not create circular “read another guide” detours before showing the sample.

**Restrained CTA:** one existing app action; optional textual product link only when it answers a question about Free. No registration gate on the public example.

**Acceptance:** actual image visible inline; explanatory values match source; full-size link works by keyboard; caption separates generated example from blank template; FAQ/schema use the same revised answer.

### D. `/blogg/faktura-eksempel-sma-bedrifter` — a concrete small-business reading

**Preserve:** opening intent, H1/metadata/canonical, `/faktura-eksempel` and app link. Expand the thin body with useful detail rather than a new marketing narrative.

**Specific edits proposed:**

1. Retain the current “Hva bør et faktura eksempel vise?” list, refining terms where section 3 requires it.
2. Add the invoice-110 parkett scenario and a small accessible HTML arithmetic explanation beside/below M01: `1 × 12 000 = 12 000`, example VAT `3 000`, total `15 000`. This is interpretation of the existing document, not a new synthetic invoice.
3. Use “Hvorfor oppsettet betyr noe” to explain how the customer connects description, amount and payment details. Remove generic repetition.
4. Link to C for the broader field map and to A for requirements. Distinguish the article's scenario purpose from C's overall document layout.

**Media:** M01 is appropriate here despite also appearing on C: both pages explicitly promise a visible invoice example. Reuse the same optimized URL/cache asset, not another derivative or duplicate PNG. Do not reuse the same image across the unrelated workflow article merely for consistency.

**Restrained CTA:** retain one app action; no extra promotional box or plan table. Place useful explanation before the CTA.

**Acceptance:** practical case is understandable without opening another page; metadata preserved; arithmetic and caption match image; no false legal-template/download claim.

### E. `/blogg/fra-tilbud-til-kontrakt-og-faktura` — complete the justified outline

**Preserve:** URL, metadata, H1, Article schema intent and publication date. The existing numbered headings can remain recognizable, but insert explanatory body text and a clearly labeled direct-invoice branch. Substantive completion is justified by F03; a large redesign is not.

**Proposed sequence:**

1. Replace the ellipsis with a brief explanation of two supported routes: **Tilbud → Faktura** and **Tilbud → Kontrakt → Faktura**. A contract is not mandatory for the direct route. Do not promise payment tracking because the existing description mentions “til betaling”.
2. “1. Lag tilbud”: customer/project, work/offer lines, quantities/prices/VAT and review/PDF. Do not imply customer acceptance is recorded automatically.
3. Explain the branch where a selected offer is used directly to create an invoice; review resulting content. Link `/instruksjoner#tilbud-til-faktura`. M07 can show this actual conversion state.
4. “2. Opprett kontrakt”: create from the selected offer, then edit the resulting contract independently. M08/M09 demonstrate this, but keep the original offer and separate contract identities clear. Contracts are documents for download/manual signing; no electronic signature feature.
5. “3. Utfør arbeid”: keep a short practical bridge about the agreed work, checking actual basis and terms. Do not give unverified advance-invoicing or automatic schedule advice. Optional timesheet context should be a brief link, not a second Timeliste tutorial.
6. “4. Send faktura”: distinguish creating an invoice from the contract (M10), reviewing customer/lines/VAT/dates/amounts, generating the PDF and sending it manually. The button action does not deliver the invoice. Link `/instruksjoner#kontrakt-til-faktura`.
7. Mention once that creation/export/conversions are available in Free; Free PDF branding and Premium logo/clean branding differences are appearance options. Avoid repeating the same promotional paragraph between stages.

**Media selection:** prefer two purposeful figures: (a) compact offer→contract/edit example M08/M09; (b) conversion results M07/M10 with separate captions. If that is too much in the existing blog width, keep M09 and M10 and use the direct-route instruction link instead of a third/fourth screenshot. No stock illustration, synthetic arrows implying automation or stitched “single document” sequence. Captions must state that distinct screenshots can be separate examples.

**Contextual links:** `/tilbud-mal`, `/kontrakt-mal`, `/instruksjoner#tilbud-til-faktura`, `/instruksjoner#lag-kontrakt-fra-tilbud`, `/instruksjoner#kontrakt-til-faktura`. A short optional `/blogg/timeliste-og-faktura` link is justified only if that paragraph actually discusses hourly documentation. The `lag-kontrakt-fra-tilbud` guide exists in current source; Phase 6A's direct production anchor sample did not separately exercise it, so retest its direct URL in implementation QA.

**Restrained CTA:** replace the generic ending with a single contextual product action, for example “Se hvordan du oppretter faktura i Jobbleder” → `/fakturaprogram-gratis#slik-fungerer-det`. Do not add parallel signup buttons after every stage. Existing related-guide links stay available.

**Acceptance:** both supported routes are clear; independent editing applies to the contract; PDF/manual delivery is explicit; no automated sending, approval, signing, payment calculation or invoice schedules are promised.

## 7. SEO, accessibility and implementation safeguards

### Frozen SEO baseline

Appendix A records exact current titles, descriptions, H1 and canonical targets for these five records. Preserve those values. The rendering layer adds the existing ` | Jobbleder` title suffix; preserve the global template too. No new route, redirect, noindex, canonical change or URL consolidation. Keyword overlap is not evidence requiring a redirect.

Preserve existing useful headings/content and internal destinations. The two SEO pages retain FAQPage generated from their visible FAQ records; the three articles retain Article data and original datePublished. Correcting FAQ answers must update their shared source so visible content and structured data stay aligned. Do not add invented ratings or legal compliance schema.

None of these five current content records contains a direct download resource. Do not invent an invoice-template PDF URL. Working downloads elsewhere, including `/blogg/gratis-timeliste-mal`, remain untouched. Preserve the existing SEO infrastructure, sitemap and robots.

### Reuse and bounded implementation

- Use existing Next.js Image/media/editorial patterns; inspect `BlogProductExample`, `TimelistContents` and product media patterns before selecting one. Do not change Timeliste-specific components globally just to serve these targets.
- The current generic SEO data/rendering model does not itself place invoice figures or rich inline source links inside its plain paragraph records. A later implementation may need a narrowly scoped presentation extension; do not casually alter every SEO route. Record that code decision in the implementation plan before editing.
- Use explicit dimensions, responsive `sizes`, intact image proportions and lazy loading below the fold; avoid defaulting every figure to eager/priority.
- Full documents need readable enlargement links and meaningful Norwegian alternatives. Keep useful document details; do not crop away identity/amounts or imply mismatched sources form one exact transaction.
- Preserve original source files. Prefer the existing WebPs in Appendix B. Any future derivative for M15 requires separate approved processing and documentation, not replacement of the PNG.
- No new dependency is needed for this editorial/media scope.

### Required implementation QA, not claimed as executed now

Run TypeScript, full ESLint and production build after actual changes. Test all five targets at 375, 768, 1280 and 1440 px, both preferences and reduced motion; include expanded FAQs, keyboard focus, image enlargement links, no overflow/distortion and layout stability. Confirm metadata/H1/canonical equality, parsed schema/visible FAQ alignment, internal anchors and absence of new console errors. Regression-check the main invoice page and the preserved Timeliste article/product pages if shared rendering changes.

Phase 6A production availability/anchor checks and Lighthouse results are historical evidence from that audit, **not new Phase 6B.1 browser/performance passes**. This phase rechecked source/asset integrity and official guidance. It did not run an application build or browser test suite, because it changed only this planning report.

## 8. Open questions and publication gates

| Question / dependency | Why it matters | Effect on later implementation |
| --- | --- | --- |
| Which source/version matches the deployed app? | Local code evidence is not production behavior. | Gate stronger product/lifecycle claims; existing owner-confirmed basic workflows can be described conservatively. |
| How are invoice and credit-note numbers allocated, protected and initialized? Can defaults be changed? | A number displayed in UI is not proof of controllable, non-overridable backend allocation. | Do not promise legal numbering compliance before verification; checklist can state the general rule separately. |
| What are the actual draft/saved/issued states and permitted correction actions? | Need to distinguish app behavior from correction of an already sent invoice. | Gate detailed editing/correction promises. No new claim that invoices can be directly edited. |
| Full credit only, or partial/multiple credit notes? How are originals/replacements linked? | Form/source payload alone does not answer this; no generated note examined. | Gate detailed credit-note scenario and optional new captures, not the basic existence statement. |
| Does the existing PDF example show the fields needed for the intended business/transaction? | Demonstration imagery is not a universal compliant template; delivery particulars and conditional company details must be checked separately. | Use a carefully labeled illustrative example. Do not add details to the source image or claim universal completeness. |
| Direct current Lovdata text / date and exceptional invoicing rules | Tool returned 405; current handbook URL displays 2025 edition. | Verify exact current provisions before adding exceptions, deadlines or statutory quotations. If access remains unavailable, omit those details and label the remaining verification explicitly in review material. |

No owner action is needed to supply the already-existing credit-note form, the invoice PDF example or conversion screenshots. Optional output captures can wait until a more detailed correction tutorial is approved. Owner confirmation cannot replace an authoritative legal check for general invoice requirements.

## 9. Implementation priorities and recommendation

1. **Resolve verification boundaries first:** confirm the authoritative deployed product and invoice lifecycle facts; complete the direct statutory-text check for any proposed fine legal detail. Keep uncertain statements out of publishable copy.
2. **F01:** improve `/faktura-krav` and `/blogg/innhold-i-faktura` together, sharing factual requirements but preserving their checklist versus explanatory-article purposes.
3. **F02:** improve `/faktura-eksempel` and `/blogg/faktura-eksempel-sma-bedrifter` using M01 and the exact existing demonstration values. No new screenshots required.
4. **F03:** complete the existing offer/contract/invoice outline using verified actions and selected existing media. Avoid a broader workflow/product redesign.
5. Perform the bounded implementation QA above and obtain owner visual/editorial approval before any release phase. Do not broaden to Phase 6A P2/P3 pages without a separate instruction.

Recommended scope remains five URLs. No complete rewrite is recommended for the other four targets; the unfinished workflow article merits substantive completion. The plan is ready for owner decisions, with explicit legal/product verification gates. It is **not** a deployment-readiness verdict or permission to implement.

## Appendix A — Frozen SEO baseline for the five targets

Values below come from the current content records and unchanged route metadata generation. SEO-page titles are `title`; article titles are `seoTitle ?? title`. The global title suffix remains unchanged. Canonicals are the existing self-referencing WWW URLs.

### `/faktura-eksempel`

- Metadata title: Faktura eksempel – se hvordan en faktura kan se ut
- Meta description: Se et enkelt faktura eksempel og lær hvordan en profesjonell faktura bør bygges opp for små bedrifter og håndverkere.
- H1: Faktura eksempel
- Canonical: `https://www.jobbleder.no/faktura-eksempel`
- Preserve schema: FAQPage, keeping corrected answers synchronized with visible FAQ.
- Current record download resources: none. Do not create a fictional download.

### `/faktura-krav`

- Metadata title: Faktura krav – hva må en faktura inneholde?
- Meta description: Lær hvilke opplysninger en faktura bør inneholde og hvordan du lager en ryddig faktura for kunder i Norge.
- H1: Faktura krav
- Canonical: `https://www.jobbleder.no/faktura-krav`
- Preserve schema: FAQPage, keeping corrected answers synchronized with visible FAQ.
- Current record download resources: none. Do not create a fictional download.

### `/blogg/innhold-i-faktura`

- Metadata title: Hva skal en faktura inneholde? En enkel oversikt
- Meta description: Se hva en faktura bør inneholde, og hvordan du lager en tydelig og profesjonell faktura for kunder i Norge.
- H1: Hva skal en faktura inneholde?
- Canonical: `https://www.jobbleder.no/blogg/innhold-i-faktura`
- Preserve schema: Article, including original datePublished `2025-04-23`.
- Current record download resources: none. Do not create a fictional download.

### `/blogg/faktura-eksempel-sma-bedrifter`

- Metadata title: Faktura eksempel for små bedrifter
- Meta description: Se hva et godt faktura eksempel bør vise, og hvordan små bedrifter kan lage tydelige fakturaer.
- H1: Faktura eksempel for små bedrifter – hva bør det vise?
- Canonical: `https://www.jobbleder.no/blogg/faktura-eksempel-sma-bedrifter`
- Preserve schema: Article, including original datePublished `2026-02-25`.
- Current record download resources: none. Do not create a fictional download.

### `/blogg/fra-tilbud-til-kontrakt-og-faktura`

- Metadata title: Fra tilbud til kontrakt og faktura – slik fungerer det
- Meta description: Se hvordan hele prosessen fungerer fra første tilbud til betaling.
- H1: Fra tilbud til kontrakt og faktura – slik fungerer det
- Canonical: `https://www.jobbleder.no/blogg/fra-tilbud-til-kontrakt-og-faktura`
- Preserve schema: Article, including original datePublished `2026-04-07`.
- Current record download resources: none. Do not create a fictional download.

## Appendix B — Exact selected media paths, dimensions and sizes

M01–M15 refer to section 5. Paths are repository-relative for implementation precision. Optimized rows are existing assets, not files generated in this phase.

| ID | Original file | Dimensions / bytes | Existing derivative | Dimensions / bytes |
| --- | --- | --- | --- | --- |
| M01 | `public/images/product/invoice/source/fv_free_watermark.png` | 959×1251 / 127681 | `public/images/product/invoice/optimized/jobbleder-invoice-free-8239cf43dbea.webp` | 959×1251 / 52268 |
| M02 | `public/images/product/invoice/source/screenshot_fv_edit.png` | 1917×906 / 114542 | `public/images/product/invoice/optimized/jobbleder-invoice-editor-80c02f47c4d3.webp` | 1917×906 / 73136 |
| M03 | `public/images/product/invoice/source/screenshot_fv_edit.png` | 1917×906 / 114542 | `public/images/product/invoice/optimized/jobbleder-invoice-lines-e59165029d4b.webp` | 400×136 / 3900 |
| M04 | `public/images/product/invoice/source/screenshot_fv_edit.png` | 1917×906 / 114542 | `public/images/product/invoice/optimized/jobbleder-invoice-totals-a06d77a998da.webp` | 320×145 / 4460 |
| M05 | `public/images/product/timeliste/source/new_invoice_form_4_different_entries.png` | 840×720 / 92374 | `public/images/product/timeliste/optimized/jobbleder-timelist-invoice-form-8831711a4a0c.webp` | 840×720 / 52880 |
| M06 | `public/images/product/timeliste/source/exported_invoice_4_different_entries.png` | 508×720 / 58619 | `public/images/product/timeliste/optimized/jobbleder-timelist-invoice-pdf-f5e18354a415.webp` | 508×720 / 30270 |
| M07 | `public/images/product/tilbud/source/tilbud_to_invoice.png` | 1280×720 / 115837 | `public/images/product/tilbud/optimized/jobbleder-offer-invoice-825bce28603f.webp` | 1084×386 / 35104 |
| M08 | `public/images/product/tilbud/source/tilbud_to_contract.png` | 834×720 / 94495 | `public/images/product/tilbud/optimized/jobbleder-offer-contract-793f5eed04dc.webp` | 834×720 / 56266 |
| M09 | `public/images/product/tilbud/source/contract_from_offer_edited.png` | 706×720 / 78568 | `public/images/product/tilbud/optimized/jobbleder-offer-edited-contract-98807c86e360.webp` | 560×442 / 26892 |
| M10 | `public/images/product/tilbud/source/invoice_from_contract.png` | 1280×720 / 115705 | `public/images/product/tilbud/optimized/jobbleder-offer-contract-invoice-7847d3b65141.webp` | 1084×386 / 35312 |
| M11 | `public/images/product/mobile/source/invoice_create_mobile.png` | 332×720 / 64721 | `public/images/product/mobile/optimized/invoice_create_mobile-26b02c459f30.webp` | 332×720 / 44822 |
| M12 | `public/images/product/mobile/source/timelist_invoice_summary_mobile.png` | 332×720 / 69797 | `public/images/product/mobile/optimized/timelist_invoice_summary_mobile-f4b16dce374e.webp` | 332×720 / 40904 |
| M13 | `public/images/product/mobile/source/invoice_from_offer_mobile.png` | 332×720 / 57596 | `public/images/product/mobile/optimized/invoice_from_offer_mobile-19b76863d679.webp` | 332×720 / 40668 |
| M14 | `public/images/product/mobile/source/invoice_from_contract_mobile.png` | 332×720 / 64078 | `public/images/product/mobile/optimized/invoice_from_contract_mobile-4059b61ae977.webp` | 332×720 / 44312 |
| M15 | `public/images/product/kreditnota/source/new_creditnota_form.png` | 1280×720 / 86922 | None registered in inspected manifests | — |

M03/M04 are existing crops of M02. M05/M06 are one desktop timesheet-conversion example; M12 is a separate mobile example. M10 reuses an existing Tilbud-directory derivative; do not copy the Kontrakt duplicate into a new location. M11 is a mobile creation state, not the exact document shown in M01. These distinctions must remain in captions.

## Appendix C — Verification record and changed files

Executed in Phase 6B.1:

- Read Phase 6A findings and current target records; reviewed selected relevant guides, metadata rendering and local app source evidence.
- Accessed S1–S5 as recorded; attempted current Lovdata document/chapter/provision access and recorded the limitation. Search-only/historical documents were not substituted for current direct legislative verification.
- Checked 15 media entries (13 unique PNG originals) and 14 derivatives on disk; validated the 14 manifest original SHA-256 values; original images were not processed.
- Preserved the initial untracked Phase 6A report. Used its production checks as dated background, without claiming they were rerun.
- No application tests, fresh browser matrix, Lighthouse, authenticated product transactions, build, commit, push or deployment were performed.

Preservation check: all 305 baseline files unchanged (304 tracked files plus the pre-existing untracked Phase 6A report); HEAD remains `81cbf9e63f6da8531057d361e960e68a8567c09a`.

Only new repository file in this phase: `docs/phase-6b.1-faktura-accuracy-editorial-plan.md`. Temporary planning evidence is outside the repository at `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase6b1/` (`before.json`, `targets.json`, `media.json`).

This evidence-based plan is complete for owner review. Unresolved product/backend and direct-legislation details are explicit publication gates, not silently assumed features or requirements. Await owner approval before implementation.

**READY FOR OWNER REVIEW**
