# Phase 9B — Kontrakt SEO content upgrade

21. november 2026. Local implementation only. Status: **READY FOR OWNER REVIEW**. No commit, push, deployment or application/backend change. Independent legal review remains pending.

## 1. Executive summary and scope

Updated the existing four-route contract cluster and three core contract-related articles to reflect the owner's confirmed Contract 2.0 capabilities. Preserved route architecture, page shells, CSS, responsive rules, navigation, footer, image files, application destinations and sitemap/robots infrastructure. No new article, route, dependency, image or PDF was introduced.

The four pages now serve distinct needs: structured preparation (/kontrakt-mal), educational document anatomy (/kontrakt-eksempel), practical contractor preparation (/kontrakt-handverker), and an informational checklist (/hva-skal-en-kontrakt-inneholde). The article explaining when a written record helps is complete. Existing explanatory workflow articles retain their useful narrative and authentic historical examples with clearer qualifications.

The confirmed functionality in the task is treated as **OWNER-CONFIRMED**. This phase did not inspect or modify the Jobbleder application/backend or rerun authenticated Contract 2.0 transactions. Previous Phase 9A frontend evidence describes the earlier version and is not relabelled as fresh Contract 2.0 code verification.

## 2. Baseline and Phase 9A findings addressed

Entry branch main; HEAD ec472f5f24ca2627c0c38a5b6e4efe5b9d378aae. No tracked modifications at entry. Eight existing untracked files, including docs/phase-9a-kontrakt-ecosystem-audit.md and the earlier Phase 7/8 reports/diagnostics, were preserved. Baseline recorded 344 existing file hashes and complete SEO/blog records. Exactly four existing source files differ at completion; image/manifests, other source and earlier documents remain unchanged. No staging occurred.

The complete retained Phase 9A report and its source references were reviewed. The current owner request changes its original implementation order: Phase 9B is now a content upgrade; fresh Contract 2.0 media belongs to Phase 9C. We did not follow the old roadmap into a visual redesign.

| Phase 9A finding | Result in this phase |
| --- | --- |
| F01 missing authentic example | Educational anatomy now covers all 11 requested areas and explicitly says updated examples are not yet published. Actual new B2C/B2B PDF examples remain a Phase 9C dependency; no fabricated substitute. |
| F02 thin practical creation guidance | Contractor route now covers scope, materials, method, exclusions, price, payment, dates, changes, preparation and precise instruction links. |
| F03 thin contents reference | Replaced generic repetition with a practical structured checklist, distinct from the example and product pages. |
| F04 unfinished article | Removed the literal unfinished sentence and completed the decision guide. |
| F05 agreement vs written document | Product educational copy and FAQs distinguish the agreement from its written record and customer acceptance. |
| F06 PDF legal risk | Existing document is labelled as pre-Contract 2.0; old complaint/law text is explicitly not legal guidance or a current ready-to-sign template. Pixels unchanged. Underlying clauses are not declared fixed or legally approved. |
| F07 inadequate qualifications | Pending legal review, B2C/B2B context, invoicing caveat and review-before-use language added. |
| F08 broad category anchors | Product creation link now targets #opprett-kontrakt; invoice guidance targets #kontrakt-til-faktura. |
| F09 small/old media | No resizing/redesign in this content phase; clear legacy captions and a concrete replacement plan. |
| F10–F12 | Duplicate assets, legacy navigation/self-links and Node warnings deferred as out of content scope. |

## 3. Exact files modified or created

| File | Change |
| --- | --- |
| components/product/contract/ContractProductPage.tsx | Existing section copy/captions and precise links; legal notice in existing typography; render contextual links already supported by SEOSection in the existing education cards. No new shared abstraction/layout/CSS. |
| content/contractProduct.ts | Current capability FAQs, legal boundaries, payment explanation, language/version/history distinction. FAQ JSON-LD uses this same visible data. |
| content/seoPages.ts | Only the four contract content records: metadata, differentiated copy, FAQs and contextual links. |
| content/blogPosts.ts | Only the three core contract articles described below. All 15 other article records unchanged. |
| docs/phase-9b-kontrakt-content-upgrade.md | This new implementation report. |

No shared renderer, global styling, header/footer, image component, instruction content, media manifest, download endpoint, sitemap, robots, package file or application/backend file was changed. Investigation files are external to the repository, under C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9b/. Scripts in that parent directory use the phase9b- prefix and are not application source or staging recommendations.

## 4. Page-by-page content changes

### /kontrakt-mal — structured preparation, not legal certification

Preserved product section order, images and rendered H1 “Lag kontrakter som passer jobben.” The hero describes preparing a document for private/business customers. Added concise review-pending text before any interpretation as a signing-ready template. Existing education cards explain what a template is, documenting scope, choosing B2C/B2B and reviewing the result. Added contextual links within the cards using existing ResourceLink styling.

Explains job title, multiple rows, dictionary, optional detailed paragraphs/simple headings/lists, multipage Norwegian PDF, price including/excluding VAT, payment deadlines/schedules, estimated vs agreed deadlines, editable contracts and PDF regeneration. FAQs distinguish automatic type suggestions from legal checking, versioned clause snapshots from revision history, and Norwegian documents from Norwegian/Polish/English interface choices. Preserved Free/Premium branding distinctions and user-initiated document conversion. Current payment cards avoid presenting the older screenshot's advance-invoice option as newly verified Contract 2.0 functionality.

### /kontrakt-eksempel — eleven-part document anatomy

The previous short generalities are replaced with: parties; work; time; price/payment; materials/obligations; changes/extras; delay/completion; defects/complaints; cancellation/termination; law/disputes; signatures/review. Examples are clearly hypothetical scope explanations, not fabricated Jobbleder documents or universal contract clauses. Explains detailed descriptions and payment schedules without implying automation.

Updated B2C/B2B example PDFs are explicitly not yet published. No public placeholder or dead download link was added. Planned locations, not implemented anchors, are listed in section 11. The page provides useful explanations before any registration action.

### /kontrakt-handverker — practical preparation

H1 is now natural Bokmål “Kontrakt for håndverkere”; the existing URL is preserved. Uses painting/carpentry/flooring/tiling/renovation examples without claims about product-specific trade compliance. Covers materials, methods, exclusions, time assumptions and agreeing changes. Keeps the app CTA destination, with the restrained label “Opprett en kontrakt”. Explains selecting/validating the contract type and reviewing the PDF before manual sharing/signing. Links to actual creation, offer-conversion and invoice-conversion instructions.

### /hva-skal-en-kontrakt-inneholde — informational checklist

Seven practical sections explain parties/deliverables, responsibility/materials, price/payment, time, changes/end of work, customer context and final review. The introduction and FAQ distinguish practical recommendations from mandatory legal requirements. Includes relevant Forbrukerrådet links. It does not supply invented statutory deadlines, generic legal guarantees or a new-home construction sales pitch. The product is used as a practical example rather than the entire purpose of the article.

## 5. Blog review and changes

| Article | Primary intent | Outcome |
| --- | --- | --- |
| /blogg/tilbud-vs-kontrakt | Distinguish offer, acceptance, agreement and written document | Preserved useful explanatory content and hypothetical parkett example. Added a short Contract 2.0/type-selection/legal-pending paragraph and checklist link. Title, summary, H1 and dates unchanged. |
| /blogg/nar-trenger-du-kontrakt | Decide when separate written documentation is useful | Replaced “Mange jobber uten kontrakt...” and three vague bullets with practical situations, a scope-change example, customer context, restrained product introduction and one closing product link. Removed the generic promotional callout. Title/H1/URL/date preserved; summary/meta description improved. |
| /blogg/fra-tilbud-til-kontrakt-og-faktura | User-initiated document reuse | Added current type/description/VAT/date/payment checks and review-pending notice. Historical contract document/editor captions now clearly predate Contract 2.0. Kept all five existing examples, direct offer→invoice alternative and manual invoice review/delivery. Summary no longer suggests coverage of payment processing. Title/H1/URL/date preserved. |

Also reviewed the five Phase 9A supporting articles: /blogg/lage-tilbud-byggebransjen, /blogg/lage-tilbudsdokument, /blogg/feil-med-tilbud, /blogg/folle-opp-tilbud and /blogg/tilbud-eller-pristilbud. Their current terms distinguish practical advice, acceptance, manual follow-up and consumer/B2B context. No directly necessary correction was established, so all five were preserved under the restriction protecting Tilbud content. They are not claimed to be independently legally certified.

No new blog article. No unrelated Timeliste/Faktura/Tilbud record modified. Potential later opportunities — not claimed search-volume opportunities — are richer examples of scope changes and estimated vs agreed completion, preferably within the existing pages rather than new keyword variants.

## 6. SEO metadata and safeguards

| Route | Before title | After title | Before description | After description |
| --- | --- | --- | --- | --- |
| /kontrakt-mal | Kontrakt mal – enkel kontrakt for håndverkere (gratis) | Kontrakt mal – forbered et tydelig kontraktsdokument | Gratis kontrakt mal for håndverkere og små bedrifter. Lag kontrakt raskt og sikre avtalen med kunden. | Lag et strukturert kontraktsdokument for privatkunder eller bedrifter. Beskriv arbeid, pris og vilkår i Jobbleder, og gjennomgå PDF-en før signering. |
| /kontrakt-handverker | Kontrakt håndverker – trygg avtale med kunde | Kontrakt for håndverkere – omfang, pris og vilkår | Lag kontrakt som håndverker og sikre tydelige avtaler med kunden. Enkel løsning for små bedrifter i Norge. | Forbered kontrakt for maler-, snekker-, gulv- og oppussingsarbeid. Avklar omfang, materialer, pris og tidsplan for privatkunder eller bedrifter. |
| /kontrakt-eksempel | Kontrakt eksempel – slik kan en avtale se ut | Kontrakt eksempel – forstå oppbygningen og innholdet | Se kontrakt eksempel og lær hvordan en tydelig avtale kan bygges opp for håndverkere og små bedrifter. | Se hvordan et kontraktsdokument kan bygges opp med parter, arbeid, pris, tidsplan og vilkår. En pedagogisk gjennomgang, ikke en juridisk godkjent mal. |
| /hva-skal-en-kontrakt-inneholde | Hva skal en kontrakt inneholde? | Hva skal en kontrakt inneholde? Praktisk sjekkliste | Se hva en kontrakt bør inneholde og hvordan du lager en tydelig avtale med kunden. | En praktisk gjennomgang av parter, arbeid, pris, betaling, tidsplan og endringer i en tjenestekontrakt. Skill anbefalinger fra lovkrav. |

Blog summaries/meta descriptions changed only for nar-trenger-du-kontrakt and fra-tilbud-til-kontrakt-og-faktura, as described above. Their Article schema description uses the same visible summary; no separate unsupported claim set. All three blog titles/H1s and original publication dates remain unchanged. The rendered product H1 is unchanged; the other two informational H1s are unchanged. Only the contractor-page H1 was improved.

All existing slugs/canonicals and indexing remain intact. Registry counts remain 17 SEO records and 18 articles; sitemap generation is unchanged. Related-resource labels/descriptions derived from the updated contract records naturally reflect the new wording in other pages; this is expected data reuse, not edits to those other clusters' own content.

Existing Open Graph infrastructure is preserved: per-route generated images use SEO h1/description or article title/summary, so the relevant updated copy flows through automatically. Seven local OG image endpoints were fetched: all 200 image/png. The inherited generic OG title/description and WWW metadata base were reviewed and left unchanged; route-specific OG text overrides are a P3 follow-up, not a hidden infrastructure change. No review/rating schema or legal approval claims were introduced.

## 7. Internal linking and CTA changes

Primary app destinations remain https://app.jobbleder.no (generic renderer) and https://app.jobbleder.no/ (shared ApplicationCTA). Their existing login/registration behavior is preserved; this phase did not create an account or test authenticated app functions.

Main improvements: product education→offer/contract distinction, checklist, example and contractor guide; precise product→contract creation/conversion anchors; contractor guide→decision article and instruction tasks; example→practical preparation/product; checklist→example/practical guide/product; core articles→appropriate contextual pages. No link to the nonexistent /lage-kontrakt was introduced.

| Updated page | Contextual destinations/labels |
| --- | --- |
| /kontrakt-mal | Les om forskjellen mellom tilbud, aksept og kontrakt → /blogg/tilbud-vs-kontrakt; Se en praktisk sjekkliste for kontraktsinnhold → /hva-skal-en-kontrakt-inneholde; Les Forbrukerrådets veiledning om bruk av håndverker → https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/; Forstå strukturen i et kontraktsdokument → /kontrakt-eksempel; Forbered en kontrakt for håndverksoppdraget → /kontrakt-handverker |
| /kontrakt-handverker | Les råd for håndverksarbeid hos privatkunder → https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/; Les når et eget kontraktsdokument er særlig nyttig → /blogg/nar-trenger-du-kontrakt; Følg trinnene for å opprette kontrakt → /instruksjoner#opprett-kontrakt; Bruk tilbud som kontraktsgrunnlag → /instruksjoner#lag-kontrakt-fra-tilbud; Se hvordan kontrakten blir fakturagrunnlag → /instruksjoner#kontrakt-til-faktura |
| /kontrakt-eksempel | Les Forbrukerrådets informasjon om mangler ved håndverksarbeid → https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/misfornoyd-med-handverkeren/; Se hvordan du forbereder et håndverksoppdrag → /kontrakt-handverker; Utforsk kontraktsverktøyet og hva du kan fylle inn → /kontrakt-mal |
| /hva-skal-en-kontrakt-inneholde | Les Forbrukerrådets sjekkliste for håndverksoppdrag → https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/sjekkliste-handverker/; Se informasjon om reklamasjon i forbrukerforhold → https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/misfornoyd-med-handverkeren/; Forstå oppbygningen av et kontraktsdokument → /kontrakt-eksempel; Bruk sjekklisten i et praktisk håndverksoppdrag → /kontrakt-handverker; Se hvordan Jobbleder strukturerer kontraktsopplysningene → /kontrakt-mal |
| /blogg/tilbud-vs-kontrakt | Bruk sjekklisten for innhold og avklaringer i kontrakten → /hva-skal-en-kontrakt-inneholde |
| /blogg/nar-trenger-du-kontrakt | Se praktiske avklaringer for håndverksoppdrag → /kontrakt-handverker; Les om tilbud, kundens svar og et eget kontraktsdokument → /blogg/tilbud-vs-kontrakt; Les Forbrukerrådets råd om skriftlig dokumentasjon → https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/; Gå gjennom sjekklisten før du bruker dokumentet → /hva-skal-en-kontrakt-inneholde; Se hvordan Jobbleder hjelper deg å forberede kontrakten → /kontrakt-mal |
| /blogg/fra-tilbud-til-kontrakt-og-faktura | Forstå kontraktsdokumentets oppbygning før du bruker det → /kontrakt-eksempel |

The table lists section links for the four updated records and newly introduced block-link destinations for the three blogs; existing valid links are retained. The three exact instruction destinations were exercised at 375/1440, automatically opened their containing disclosures and aligned around 100px from the viewport top. Fragment IDs were separately checked in returned HTML. No download was gated behind registration.

## 8. Legal and product claims reviewed

Internal status **LEGAL_REVIEW_PENDING** is preserved as a constraint. Public wording says that the standard terms await independent legal review; the internal status constant is not exposed as product UI. Jobbleder is described as a preparation tool, never as a legal adviser, automated compliance checker, immutable issued-contract system, digital acceptance portal or NS/new-home contract service.

| Topic | Treatment and evidence boundary |
| --- | --- |
| Written document vs binding agreement | Qualified “can be binding” wording with exceptions/forbehold. Government preparatory material supports the general distinction; direct current consolidated law could not be read, so detailed validity/form-requirement questions remain manual review. |
| B2C/B2B | Separate standard terms and manual/suggested type selection are owner-confirmed. Consumer guidance is not automatically applied to businesses. No automatic legal classification guarantee. |
| 24-month complaints | Explicitly framed as a possible agreed B2B term, never a universal statutory deadline. No claim that every instance is enforceable. |
| Complaints/termination/delays | Explained as topics to examine, not new automatic remedies/deadlines/day fines. Older PDF clause text is specifically disclaimed as legal guidance. |
| New residential construction | Explicitly outside the advertised dedicated solution; no claim of bustadoppføringslova compliance. |
| Review/signing | Documents must be reviewed for the task; no “ready to sign” promise, electronic signing or automatic customer acceptance. |
| Version snapshots/editing | Owner-confirmed clause-version snapshots distinguished from unsupported revision history or immutability; regenerated PDF is not customer acceptance. |
| Payments/invoices | Owner-confirmed schedules/percentages, not automatic invoice generation or sending. Software choices do not establish permission to invoice before delivery. |
| Free/Premium | Existing owner-confirmed model retained: creation/conversion in Free, Jobbleder marking vs paid branding/logo options. No invented restriction or pricing. |

## 9. Official sources used

Accessed 21 November 2026:

- [Forbrukerrådet — bruk av håndverker](https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/): recommendation for written documentation, not proof that a separate signed document is always required.
- [Forbrukerrådet — sjekkliste](https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/sjekkliste-handverker/): practical preparation and context-specific consumer guidance. We do not generalize its estimate rule to all contracts.
- [Forbrukerrådet — misfornøyd med håndverkeren](https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/misfornoyd-med-handverkeren/): consumer complaint/defect context; used to link readers to authoritative guidance rather than invent a universal period.
- [Regjeringen — Prop. 64 L (2013–2014), chapter 7](https://www.regjeringen.no/no/dokumenter/Prop-64-L-20132014/id755470/?ch=7): official historical explanatory material on form freedom and exceptions. It is not presented as freshly consolidated law or a legal opinion on an individual agreement.

Attempts to read [håndverkertjenesteloven](https://lovdata.no/dokument/NL/lov/1989-06-16-63), [avtaleloven](https://lovdata.no/dokument/NL/lov/1918-05-31-4) and [bustadoppføringslova](https://lovdata.no/dokument/NL/lov/1997-06-13-43) directly returned 405. Search snippets were not used as full statutory verification. Detailed legal applications remain flagged for manual review rather than invented conclusions. Product capability evidence is the owner's current brief, not these legal sources.

## 10. Remaining independent legal-review requirements

LEGAL-01: independent review of both B2C and B2B clause sets, including scope of applicable law, complaints, changes/extras, delays/completion, cancellation/termination, payment and disputes. This phase does not change the application's defaults or certify them.

LEGAL-02: assess contractual B2B complaint terms and any 24-month period in its actual context; do not confuse them with statutory consumer deadlines. Confirm the distinction between estimated and agreed dates in sample language.

LEGAL-03: inspect authentic new exports before public reuse, including all pages, demo identities/contact data, transaction type, VAT wording, signatures and branding. Do not reuse the old sample's complaint/law text as reviewed terms. A visible warning is risk qualification, not a legal repair of the old document.

LEGAL-04: manual confirmation of detailed current-law claims when direct official consolidated text is available; avoid expanding the narrow general guidance before that review. Owner content/visual approval is separate from independent legal approval. Neither is inferred from technical tests.

## 11. Asset replacement inventory for Phase 9C

No new image or downloadable contract PDF was created. Existing source PNGs and optimized derivatives are byte-preserved. Current product figures and historical contract examples in the workflow article remain in place with explicit legacy captions. /kontrakt-eksempel does not reuse them as current Contract 2.0 documents.

### Existing product media needing current captures

| Existing role | Original source | Current derivative |
| --- | --- | --- |
| pdf | public/images/product/kontrakt/source/exported_contract_preview.png | /images/product/kontrakt/optimized/jobbleder-home-contract-document-249c17de7105.webp |
| offer | public/images/product/tilbud/source/tilbud_to_contract.png | /images/product/tilbud/optimized/jobbleder-offer-contract-793f5eed04dc.webp |
| offerMobile | public/images/product/tilbud/source/tilbud_to_contract.png | /images/product/tilbud/optimized/jobbleder-offer-contract-mobile-66905c4b86f7.webp |
| invoice | public/images/product/tilbud/source/invoice_from_contract.png | /images/product/tilbud/optimized/jobbleder-offer-contract-invoice-7847d3b65141.webp |
| invoiceMobile | public/images/product/tilbud/source/invoice_from_contract.png | /images/product/tilbud/optimized/jobbleder-offer-contract-invoice-mobile-64fb6553081e.webp |
| pricing | public/images/product/kontrakt/source/payment_base.png | /images/product/kontrakt/optimized/jobbleder-home-contract-192687f50086.webp |
| pricingMobile | public/images/product/kontrakt/source/payment_base.png | /images/product/kontrakt/optimized/jobbleder-home-contract-mobile-6413439017d3.webp |
| hero | public/images/product/kontrakt/source/new_contract_form_time.png | /images/product/kontrakt/optimized/jobbleder-contract-hero-11f4f7338a0b.webp |
| heroMobile | public/images/product/kontrakt/source/new_contract_form_time.png | /images/product/kontrakt/optimized/jobbleder-contract-hero-mobile-b5101a336cae.webp |
| payments | public/images/product/kontrakt/source/payment_methods.png | /images/product/kontrakt/optimized/jobbleder-contract-payments-f96f107da0be.webp |
| paymentsMobile | public/images/product/kontrakt/source/payment_methods.png | /images/product/kontrakt/optimized/jobbleder-contract-payments-mobile-b3e033dbf6b6.webp |
| advance | public/images/product/kontrakt/source/new_contract_form_with_advance_percentage.png | /images/product/kontrakt/optimized/jobbleder-contract-advance-1e0f477eb7e3.webp |
| progress | public/images/product/tilbud/source/contract_from_offer_edited.png | /images/product/kontrakt/optimized/jobbleder-contract-progress-b47e4e1c1c86.webp |
| clauses | public/images/product/kontrakt/source/new_contract_form_with_advance_percentage.png | /images/product/kontrakt/optimized/jobbleder-contract-clauses-e1b447e61a33.webp |
| materials | public/images/product/kontrakt/source/material_costs.png | /images/product/kontrakt/optimized/jobbleder-contract-materials-be1c1b83a11e.webp |

The PDF is the earlier 508×720 Kontrakt 11; the editor images are earlier layouts and configurations. The historical edited-contract article also uses public/images/product/tilbud/source/contract_from_offer_edited.png and its existing optimized derivative through BlogProductExample. No source was retouched. Mobile contract sources in public/images/product/mobile/source/contract_create_mobile_01.png, contract_create_mobile_02.png, contract_document_actions_mobile.png, contract_from_offer_mobile.png and invoice_from_contract_mobile.png should be compared against the current UI during Phase 9C. Instructions were not rewritten here; their contract media/content remains a related later verification item.

### Proposed future files — not created, public URLs or promises

| Intended filename | Destination directory | Target page / planned location | Type | Capture purpose/content |
| --- | --- | --- | --- | --- |
| contract-2-b2c-form.png | public/images/product/kontrakt/source/ | /kontrakt-mal; /kontrakt-handverker | B2C | Actual desktop private-customer creation form; customer, job title, type suggestion/manual choice, work and dates. |
| contract-2-b2c-form-mobile.png | public/images/product/mobile/source/ | /kontrakt-mal; /kontrakt-handverker | B2C | Separately captured portrait browser state showing the actual private-customer form. Not a simulated narrow desktop view. |
| contract-2-b2b-form.png | public/images/product/kontrakt/source/ | /kontrakt-mal; /kontrakt-handverker | B2B | Actual business-customer creation form with business parties and chosen type; no legal-approval badge. |
| contract-2-b2b-form-mobile.png | public/images/product/mobile/source/ | /kontrakt-mal; /kontrakt-handverker | B2B | Authentic portrait business-customer form; retain readable fields and correct customer type. |
| contract-2-work-description.png | public/images/product/kontrakt/source/ | /kontrakt-handverker; /hva-skal-en-kontrakt-inneholde | B2C or B2B, labelled | Title, several rows, dictionary and optional detailed description; show paragraph/list/heading formatting actually supported. |
| contract-2-payment-schedule.png | public/images/product/kontrakt/source/ | /kontrakt-mal; /kontrakt-eksempel | B2B or B2C, labelled | Real percentage schedule, descriptions and payment deadline; disclose that it does not generate/send invoices. |
| contract-2-deadlines.png | public/images/product/kontrakt/source/ | /kontrakt-handverker; /hva-skal-en-kontrakt-inneholde | Either, labelled | Actual controls distinguishing estimated completion and agreed contractual deadline. |
| contract-2-b2c-clauses.png | public/images/product/kontrakt/source/ | /kontrakt-mal; /kontrakt-eksempel | B2C | Actual B2C clause panel. Record version context in capture notes if available; do not assume a visible version badge exists. Independent legal review status must be explicit before publication. |
| contract-2-b2b-clauses.png | public/images/product/kontrakt/source/ | /kontrakt-mal; /kontrakt-eksempel | B2B | Actual separate B2B clauses; any 24-month term labelled contractual, never universal statutory protection. |
| exported-contract-2-b2c-page-01.png | public/images/product/kontrakt/source/ | /kontrakt-eksempel; /kontrakt-mal; workflow article | B2C | Authentic owner-reviewed generated first page with safe demo data and Free marking. Capture all actual additional pages as separate files when supplied; do not invent the page count. |
| exported-contract-2-b2b-page-01.png | public/images/product/kontrakt/source/ | /kontrakt-eksempel; /kontrakt-mal | B2B | Authentic business example, same safe-data policy, clearly identified transaction and branding. |
| contract-2-invoice-conversion.png | public/images/product/kontrakt/source/ | /kontrakt-mal; workflow article | Same type/scenario as chosen source | Current contract action and resulting invoice with source, reviewed lines and amounts; not an automatically calculated installment. |
| kontrakt-b2c-eksempel.pdf | public/downloads/examples/ | Future /kontrakt-eksempel#eksempel-privatkunde | B2C | Complete authentic multipage export matching the B2C screenshots. Legal/content/demo-data approval before any public use. Not created or linked now. |
| kontrakt-b2b-eksempel.pdf | public/downloads/examples/ | Future /kontrakt-eksempel#eksempel-bedrift | B2B | Complete authentic matching business export. Review conditions before publication; never advertise as universal ready-to-sign template. |

Planned /kontrakt-eksempel locations: B2C preview after the educational explanation of customer context, B2B preview alongside its separate context, followed by the common anatomy checklist. Preserve the current content architecture and choose final placement after reviewing real assets; these names/anchors are planning only and are not linked in the current page. For mobile forms, capture authentic portrait states rather than assuming a crop of a wide desktop screenshot will be readable. Derivative names/dimensions/bytes will be determined from the supplied originals in Phase 9C, not invented now. Do not publish new downloadable example PDFs until content, demo data and legal qualifications are approved.

## 12. Validation results

| Check | Executed outcome |
| --- | --- |
| TypeScript: npx.cmd tsc --noEmit --incremental false | Exit 0; production build also completed TypeScript after the source-format cleanup. |
| Full ESLint: npm.cmd run lint | Exit 0; no reported lint failure. |
| Production build: npm.cmd run build | Exit 0, Next 16.1.6, 55 pages. Existing Node 26 DEP0205/module.register warnings, no build failure. |
| Git whitespace / scope | git diff --check passes. Four source changes only; earlier reports, image/manifests and unrelated records preserved. No staged changes. |
| Route inventory | 27 local routes return 200, including four contract pages, three core blogs, five supporting blogs and cross-cluster discovery/regression pages. |
| Responsive matrix | Seven updated routes × 375/768/1280/1440 × light/dark with reduced motion = 56 cases, plus seven 375px/dark/no-preference cases = 63. |
| Automated accessibility | 63 axe runs; 0 confirmed violations. Keyboard FAQ Enter/Space cycles and schema/DOM answer comparisons passed in sampled cases. |
| Overflow/runtime/media | No horizontal overflow, observed page runtime/console or image HTTP error in completed target cases. Images decoded, proportions retained; source files unchanged. |
| Internal destinations | 32 distinct main-content internal paths fetched; all 200. Fragments checked separately; no missing referenced ID in verification batch. |
| Instruction anchors | Six observations: three task anchors × 375/1440; present, containing disclosure open and correct scroll position. |
| Document previews | Two keyboard full-size navigations: product and workflow article open the unchanged 508×720 authentic original. This is an image of a historical PDF, not a new PDF endpoint. |
| Open Graph | Seven local generated image endpoints return 200 image/png. Existing metadata/image architecture intact. Browser's earlier canonical-host OG fetch batch is not used as proof of a local updated image; verification.json records the local checks. |
| Canonical/heading/schema | Seven target routes have correct WWW self-canonical, one H1, parseable FAQPage/Article JSON-LD. FAQ questions/answers match current DOM. |
| Sitemap/robots | Both local endpoints return 200; unchanged configuration includes existing contract/blog routes. /lage-kontrakt remains 404, no new route/link introduced. |
| Layout stability | Sampled non-input CLS maximum 0; this is a lab observation, not a field performance guarantee. |

Baseline source comparisons confirm all 13 non-contract SEO records and all 15 non-core blog records are identical. Header/footer/CSS files, media and app destinations are unchanged. Regression route checks cover homepage, Faktura, Tilbud, Timeliste, instructions and relevant editorial pages; this is availability/metadata/source-integrity checking rather than a complete new audit of every interaction in those pages.

Axe incomplete checks remain manual review items; no WCAG certification claimed. No authenticated app, screen-reader, production release or Lighthouse test was executed in this implementation phase. Browser analytics endpoints were intercepted with synthetic 204 to avoid unnecessary tracking; those responses are not production analytics verification. Screenshots: 28 full-page captures (seven targets × 375/1440 × light/dark) under the external phase9b directory. Main product, three SEO supporting routes and the completed decision article were visually inspected; existing templates and media layout remain intact.

Diagnostics: baseline.json; browser.json; verification.json under the external phase9b directory. Technical console outcomes were observed directly; no secrets or environment values are copied into diagnostics/report.

## 13. Remaining risks, classification and recommendation

| ID | Classification | Status / action |
| --- | --- | --- |
| B01 | LEGAL | Independent review pending for Contract 2.0 clauses and their use in the actual transaction. Mandatory before any “legally reviewed/approved” or signing-ready template positioning; such claims are absent. |
| B02 | LEGAL | Direct consolidated-law access blocked. Manual review needed before adding detailed legal conclusions, deadlines or remedies. |
| B03 | P2 | Fresh B2C/B2B media not supplied. Explicit legacy labels are interim; complete Phase 9C with authentic current examples and demo-data approval. |
| B04 | P2 | Contract instruction screenshots/click labels may predate Contract 2.0. Anchors work, but the application path was not freshly authenticated here. Review against supplied current media in Phase 9C. |
| B05 | P3 | Legacy generic SEO chrome, nested spacing, self-links and duplicate source images remain intentionally unchanged; no redesign/cleanup in this phase. |
| B06 | P3 | Inherited OG text remains generic although per-route images update; consider a separately scoped metadata refinement. |
| B07 | P3 | Existing Node deprecation and Git LF/CRLF normalization notices; no validation failure. |

No new confirmed P0 or P1 publication blocker was established in the implemented source. This is readiness for **owner review**, not a deployment instruction, legal sign-off or an assertion that pending media/terms are complete. Any future source that establishes a material product/legal misstatement must be resolved before publication. Preserve the legal-pending notices until independent review changes the status.

Local previews:

- [Kontrakt mal](http://127.0.0.1:3042/kontrakt-mal)
- [Kontrakt eksempel](http://127.0.0.1:3042/kontrakt-eksempel)
- [Kontrakt for håndverkere](http://127.0.0.1:3042/kontrakt-handverker)
- [Kontraktens innhold](http://127.0.0.1:3042/hva-skal-en-kontrakt-inneholde)
- [Når trenger du kontrakt?](http://127.0.0.1:3042/blogg/nar-trenger-du-kontrakt)
- [Tilbud vs kontrakt](http://127.0.0.1:3042/blogg/tilbud-vs-kontrakt)
- [Fra tilbud til kontrakt og faktura](http://127.0.0.1:3042/blogg/fra-tilbud-til-kontrakt-og-faktura)

**READY FOR OWNER REVIEW**
