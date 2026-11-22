# Phase 9A — Kontrakt ecosystem audit

Date: 20 November 2026. Read-only audit of local production build and the public WWW website. No implementation, staging, commit, push or deployment. Only this new report was created in the repository.

## 1. Executive summary

The ecosystem contains **four primary Kontrakt routes, three core articles and five supporting Tilbud articles**. Fifteen related/discovery routes bring the browser inventory to 27 routes. All 27 returned 200 locally and in production. The proposed candidate /lage-kontrakt does not exist: both environments return 404; no broken published link to that candidate was found.

The product page is already substantial. The largest modernization opportunity is the gap between its authentic application/document presentation and three short generic SEO pages. /kontrakt-eksempel promises an example without displaying one. /blogg/nar-trenger-du-kontrakt remains visibly unfinished. Existing media is sufficient for an example pilot and a practical creation guide without synthetic screenshots.

There are **0 confirmed P0, 0 confirmed P1, 9 P2 and 3 P3 findings**. These counts do not certify legal compliance. One P2 legal-review risk is particularly important before expanding reuse of the sample: its complaint clause measures reasonable time from completion, and its law clause references consumer legislation without identifying transaction context. Do not promote this as a universally suitable legal template. Legal review/qualification and owner confirmation of demonstration contact data are dependencies of the example pilot, not assumed passes.

Executed: 54 route observations; 64 local responsive/preference cases; eight production responsive cases; 80 axe runs including eight expanded-state runs; 14 instruction-anchor observations; 20 production full-size image navigations; 101 internal production HTTP destinations; 41 production media/hash comparisons; ten reference-page screenshot observations. No confirmed axe violation, horizontal overflow, missing tested media or observed primary-page runtime error. Technical checks passed. Source hashes are unchanged.

## 2. Git baseline

Branch: main. HEAD: ec472f5f24ca2627c0c38a5b6e4efe5b9d378aae. Subject: feat(marketing): modernize faktura guides and editorial ecosystem. The Phase 8 release SHA is the actual current HEAD, not merely an expected value.

No tracked or staged modification at entry. Seven pre-existing untracked files were preserved:

- docs/phase-7e-diagnostics/browser-accessibility.json
- docs/phase-7e-diagnostics/route-link-seo.json
- docs/phase-7e-diagnostics/verification.json
- docs/phase-7h-tilbud-production-verification.md
- docs/phase-8a-diagnostics/checks.json
- docs/phase-8a-diagnostics/inventory.json
- docs/phase-8f-faktura-production-verification.md

Entry hashes covered 343 existing files, including untracked investigation material. Final comparison: 0 changed/missing files. No application/content/image/report file existing at entry was modified. Build output is ignored generated output, not a source change. This report is the sole new repository file. Git diff --check passes.

## 3. Complete route inventory

### Primary routes and actual metadata

| Route | HTTP local / production | Rendered title | Meta description | H1 | Canonical | Schema |
| --- | --- | --- | --- | --- | --- | --- |
| /kontrakt-mal | 200 / 200 | Kontrakt mal – enkel kontrakt for håndverkere (gratis) \| Jobbleder | Gratis kontrakt mal for håndverkere og små bedrifter. Lag kontrakt raskt og sikre avtalen med kunden. | Lag kontrakter som passer jobben. | https://www.jobbleder.no/kontrakt-mal | Organization, WebSite, FAQPage |
| /kontrakt-handverker | 200 / 200 | Kontrakt håndverker – trygg avtale med kunde \| Jobbleder | Lag kontrakt som håndverker og sikre tydelige avtaler med kunden. Enkel løsning for små bedrifter i Norge. | Kontrakt håndverker | https://www.jobbleder.no/kontrakt-handverker | Organization, WebSite, FAQPage |
| /kontrakt-eksempel | 200 / 200 | Kontrakt eksempel – slik kan en avtale se ut \| Jobbleder | Se kontrakt eksempel og lær hvordan en tydelig avtale kan bygges opp for håndverkere og små bedrifter. | Kontrakt eksempel | https://www.jobbleder.no/kontrakt-eksempel | Organization, WebSite, FAQPage |
| /hva-skal-en-kontrakt-inneholde | 200 / 200 | Hva skal en kontrakt inneholde? \| Jobbleder | Se hva en kontrakt bør inneholde og hvordan du lager en tydelig avtale med kunden. | Hva skal en kontrakt inneholde? | https://www.jobbleder.no/hva-skal-en-kontrakt-inneholde | Organization, WebSite, FAQPage |

All four are indexable: no noindex directive/header observed, one rendered H1 each, self-canonicals use https://www.jobbleder.no. Product FAQ has 10 questions; the other routes have 3, 3 and 2 respectively. Current FAQ JSON-LD comes from the same question/answer records as the visible controls; no separate contradictory answer set was found. Valid JSON/schema shape is not a guarantee of Google rich-result eligibility.

Route dispatch: app/(seo)/[slug]/page.tsx resolves seoPages, generates static params and metadata, dispatches /kontrakt-mal to ContractProductPage, and uses the generic renderer for the other three. Unknown slugs call notFound(). There is no creation-guide route to preserve under /lage-kontrakt. Do not create it just to target another keyword.

### Core and supporting articles

| Route | HTTP local / production | Rendered title | Meta description | H1 | Canonical | Schema |
| --- | --- | --- | --- | --- | --- | --- |
| /blogg/nar-trenger-du-kontrakt | 200 / 200 | Når trenger du kontrakt som håndverker? \| Jobbleder | Se når du bør bruke kontrakt og hvorfor det er viktig i byggebransjen. | Når trenger du kontrakt som håndverker? | https://www.jobbleder.no/blogg/nar-trenger-du-kontrakt | Organization, WebSite, Article |
| /blogg/tilbud-vs-kontrakt | 200 / 200 | Tilbud vs kontrakt – hva er forskjellen? \| Jobbleder | Lær forskjellen mellom tilbud og kontrakt og når du bør bruke hvert dokument. | Tilbud vs kontrakt – hva er forskjellen? | https://www.jobbleder.no/blogg/tilbud-vs-kontrakt | Organization, WebSite, Article |
| /blogg/fra-tilbud-til-kontrakt-og-faktura | 200 / 200 | Fra tilbud til kontrakt og faktura – slik fungerer det \| Jobbleder | Se hvordan hele prosessen fungerer fra første tilbud til betaling. | Fra tilbud til kontrakt og faktura – slik fungerer det | https://www.jobbleder.no/blogg/fra-tilbud-til-kontrakt-og-faktura | Organization, WebSite, Article |
| /blogg/lage-tilbud-byggebransjen | 200 / 200 | Hvordan lage et profesjonelt tilbud i byggebransjen \| Jobbleder | Slik lager du et tydelig og profesjonelt tilbud i byggebransjen. Lær hva som bør være med og hvordan du gjør det enklere digitalt. | Hvordan lage et profesjonelt tilbud i byggebransjen | https://www.jobbleder.no/blogg/lage-tilbud-byggebransjen | Organization, WebSite, Article |
| /blogg/lage-tilbudsdokument | 200 / 200 | Hva er et tilbudsdokument og hvordan lager du ett? \| Jobbleder | Lær hva et tilbudsdokument er, hva som bør være med, og hvordan du lager et profesjonelt tilbud på en enkel måte. | Hva er et tilbudsdokument og hvordan lager du ett? | https://www.jobbleder.no/blogg/lage-tilbudsdokument | Organization, WebSite, Article |
| /blogg/feil-med-tilbud | 200 / 200 | Topp 5 feil å unngå når du sender tilbud \| Jobbleder | Her er de vanligste feilene i tilbudsdokumenter – og hva du kan gjøre for å sende tydeligere og mer profesjonelle tilbud. | Topp 5 feil å unngå når du sender tilbud | https://www.jobbleder.no/blogg/feil-med-tilbud | Organization, WebSite, Article |
| /blogg/folle-opp-tilbud | 200 / 200 | Hvordan følge opp et sendt tilbud og lande flere jobber \| Jobbleder | Slik følger du opp et sendt tilbud på en profesjonell måte og øker sjansen for å få respons fra kunden. | Hvordan følge opp et sendt tilbud og lande flere jobber | https://www.jobbleder.no/blogg/folle-opp-tilbud | Organization, WebSite, Article |
| /blogg/tilbud-eller-pristilbud | 200 / 200 | Tilbud eller pristilbud – hva forventer kunden? \| Jobbleder | Slik lager du et tydelig tilbud eller pristilbud som er lett for kunden å forstå og ta stilling til. | Tilbud eller pristilbud – hva forventer kunden egentlig? | https://www.jobbleder.no/blogg/tilbud-eller-pristilbud | Organization, WebSite, Article |

Core: nar-trenger-du-kontrakt, tilbud-vs-kontrakt, fra-tilbud-til-kontrakt-og-faktura. Supporting: lage-tilbud-byggebransjen, lage-tilbudsdokument, feil-med-tilbud, folle-opp-tilbud, tilbud-eller-pristilbud. The last five belong to the offer/acceptance/terms journey; they are not five additional contract-first articles. Generic mentions of an agreement in unrelated invoice text were not counted as core contract content.

### Related/discovery routes

| Route | Local / production HTTP | Role |
| --- | --- | --- |
| /tilbud-mal | 200 / 200 | Related document/product/guide |
| /tilbud-eksempel | 200 / 200 | Related document/product/guide |
| /lage-tilbud | 200 / 200 | Related document/product/guide |
| /hvordan-folge-opp-tilbud | 200 / 200 | Related document/product/guide |
| /fakturaprogram-gratis | 200 / 200 | Related document/product/guide |
| /lage-faktura | 200 / 200 | Related document/product/guide |
| /faktura-eksempel | 200 / 200 | Related document/product/guide |
| /faktura-krav | 200 / 200 | Related document/product/guide |
| /timeliste-mal | 200 / 200 | Related document/product/guide |
| / | 200 / 200 | Homepage entry |
| /instruksjoner | 200 / 200 | Instruction hub |
| /blogg | 200 / 200 | Blog index |
| /blogg/kategori/kontrakt | 200 / 200 | Existing category discovery |
| /blogg/kategori/tilbud | 200 / 200 | Existing category discovery |
| /blogg/kategori/oversikt | 200 / 200 | Existing category discovery |

### Exact relevant instruction anchors

All use /instruksjoner. Primary: #opprett-kontrakt; #lag-kontrakt-fra-tilbud; #kontrakt-til-faktura (inside #lag-faktura-fra-dokument). Supporting: #dokumentoversikt; #gjenta-et-dokument; #firma-og-fakturadetaljer; #standardverdier-for-dokumenter. Customer/project prerequisites: #opprett-en-kunde, #hvordan-kunder-fungerer, #opprett-et-prosjekt and #hvordan-prosjekter-fungerer. Branding: #premium-og-branding, #last-opp-logo. Historical #opprett and #dokumenter are category anchors, not precise contract steps. No dedicated contract-correction instruction exists; #rette-en-faktura concerns invoices and should not be presented as contract editing guidance.

Source: content/instructionContent.ts, content/instructionGuides.ts, content/instructionMedia.json and content/instructionMobileMedia.json. Seven anchors were exercised in each environment (14 observations); all existed and opened the containing details at approximately 100px below the viewport top. The other listed anchors were verified in source/DOM inventory, not separately exercised as interactive cases.

## 4. Current visual assessment

Read all five requested reference reports: Phase 7E/7H and Phase 8A/8E/8F. Inspected the requested five reference routes, their dedicated components and CSS; fresh local screenshots at 375 and 1440 provide ten reference observations. Earlier report scores were not substituted for current tests.

| Surface | Current observation | Useful modernization direction |
| --- | --- | --- |
| /kontrakt-mal | Dedicated product layout, light blue hero, alternating white/light sections, authentic fields and PDF, semantic comparison table, native FAQ, shared SiteHeader/SiteFooter | Preserve established product identity. Tighten a few contextual links/legal explanations in a separately approved scope; no wholesale dark conversion. |
| Three supporting SEO pages | Generic H1/intro/checklist/app CTA; nested Container; cluster box before short body; white FAQ and nine-card related grid; legacy Navbar with Hjem | Replace repeated discovery scaffolding with useful task-specific narrative. Use existing shared product navigation during an approved page modernization. This is consistency work, not a current broken menu. |
| /kontrakt-eksempel | No document figure despite example title; two very short explanatory sections | Document-led presentation, explain visible parties/work/price/dates/terms, distinguish illustration from legal template; link directly to creation instructions. |
| /kontrakt-handverker | Three brief sections, little operational detail | Use a practical contractor narrative: prepare parties/scope, choose price/payment, review terms, generate and share manually. Keep existing URL/search intent. |
| /hva-skal-en-kontrakt-inneholde | Four bullet topics, two brief sections, two short FAQs | Reference/checklist identity, useful examples and transaction-context distinctions rather than another product hero. |
| Older contract article | Literal ellipsis in first sentence; little explanation before CTA | Complete the decision guide with when documentation helps, agreement vs document, and links to practical guidance. |

The approved navy editorial system of OfferExamplePage/OfferGuidePage and InvoiceExamplePage/InvoiceGuidePage/InvoiceRequirementsPage is suitable for future editorial pages. Reuse type scale, content width, restrained rules and native disclosures, not identical section order. A contract example should prioritize parties, obligations, changes and manual review rather than invoice arithmetic. Product page light surfaces remain intentional and usable under dark OS preference.

At 375px, generic nested containers reduce inner body/cluster width to about 279px and the nine-card list dominates the page length. Text wraps without clipping, but this weakens reading rhythm. Header/footer patterns differ from modern pages; footer omits Kontrakt in its short product list. These are presentation/discovery opportunities, not established major accessibility failures.

Screenshots: diagnostics directory contains local-kontrakt-mal-1440.png, production-kontrakt-mal-375.png, local-kontrakt-eksempel-1440.png, local-kontrakt-handverker-375.png, local-hva-skal-en-kontrakt-inneholde-375.png, and reference-* screenshots. These were visually inspected; all matrix screenshots are preserved for owner comparison.

## 5. Contract-example feasibility

Best existing source: public/images/product/kontrakt/source/exported_contract_preview.png, 508×720, 73,859 bytes. Existing full-page derivative: public/images/product/kontrakt/optimized/jobbleder-home-contract-document-249c17de7105.webp, 508×720, 37,384 bytes. No crop. Source SHA-256: f9f3480a06a9e01377203d40082d0e510dc7654c9af6a99c6f696c2d1c80b933.

Direct image inspection confirms Jobbleder gratisversjon branding, Kontrakt 11 dated 18/11/2026, Demo Company and Eksempel Eiendom, parkett work, planned start 18/11/2026, estimated finish 02/12/2026, price referencing Tilbud 29 / tilbudssum 12,000 kr, payment after completion, 14 days, contractor material responsibility, editable-style clauses and blank manual signature fields. Dates are internally consistent. Do not describe a separate project-name field or explicit VAT breakdown that this PDF does not show. App/editor correspondence and existing provenance strongly support authentic Jobbleder output; original PDF generation was not rerun/authenticated in this audit.

Demo names/addresses/number patterns are visible and signatures are blank. However, the displayed email uses a non-reserved domain; owner confirmation that all contact/organization information is safe demonstration data remains necessary before expanded reuse. No confirmed personal customer exposure was established. The audit cannot certify ownership of an email address from its appearance alone.

At native resolution the document structure is recognizable; fine print is small, particularly when scaled to a 325px mobile column. Full-size links work, but 508px is the resolution ceiling. A higher-resolution authentic export/original PDF would improve detailed reading; do not upscale or reconstruct it. Existing page captions correctly disclose that this is an earlier configuration, not the exact export of the hour-price hero or later payment plan/invoice example. Preserve this distinction.

Feasible for Phase 9B with factual caption and visible legal-context qualification. Before presenting it as an instructive template, resolve the clause/context concerns in section 7. Do not imply that a brand mark, signature field or generated PDF guarantees legal completeness.

## 6. Creation-guide feasibility

Application source was available read-only at C:/Users/ddlas/Code/jobbleder_app/src. This permits stronger evidence than marketing copy alone, but no authenticated end-to-end app session or backend/Premium enforcement test was executed.

| Capability | Classification | Evidence and guide implication |
| --- | --- | --- |
| Independent creation | Verified in frontend/source and screenshots | ui/documents/CreateDocument2026.jsx contract form; contractForm instruction and new_contract_form_time.png. Start in Opprett and choose Kontrakt. |
| Customer selection | Verified in frontend | Contract validation around lines 1748–1755 requires a client. Explain choosing the correct customer. |
| Project assignment | Verified, optional in observed validator | Form and source include project relation; do not call it mandatory or claim the project name is a separate PDF field. |
| Parties/company data | Verified fields; partially verified export persistence | Settings/customer selections and PDF example show parties. Guide should review company/contact data; no backend guarantees inferred. |
| Dates/place/work rows | Verified | Form contains issue/due/start/end, place, description and editable work rows. Not every field is enforced by the contract validator. |
| Fixed/hour/offer pricing | Verified | UI options, source pricingModel and screenshots. Offer mode additionally requires choosing an offer, not just typing a reference. |
| Advance/progress/percentages | Verified configuration | UI and payload around 1634–1695 and 2101–2160. These describe terms, not automatic invoice scheduling/calculation or legal permission for every transaction. |
| Materials/clauses | Verified | Materials menus and editable additional work, complaint, law and extra terms; clause defaults also visible in i18n/no.js. |
| Save / Generate / PDF | Verified frontend actions and authentic output; partially verified end to end | Source and instructions distinguish saving from generation. ServerRoutes/serverRoute.js opens returned PDF blob; no production document was generated here. |
| Manual download/delivery/signing | Documented/partially verified | PDF opens for browser save; users share/sign outside app. No email delivery or e-sign service demonstrated. |
| Offer → contract; independent edit | Verified frontend and media | CreateDocument2026.jsx conversion initialization; documentPreview.viewmodel.js edit/create actions; source and edited-state screenshots. |
| Contract → invoice | Verified frontend and media | Explicit user action, source relation, invoice 112 desktop/113 mobile; review new invoice before generating. |
| Long-term storage/retention | Partially verified | Saved-document list exists; retention, recovery, audit trail and legal archiving guarantees not verified. |
| Free/Premium | User-confirmed; Free branding visible | All document functions in Free; Premium removes mark/adds logo. Billing entitlements not independently tested. |
| E-signature, acceptance tracking, automatic sending, customer portal | Unsupported by established product evidence | Do not introduce these promises. Absence of a marketing claim is not proof that every backend route was audited. |

Existing media supports a practical guide now. Use a restrained sequence: parties/dates → work/pricing → payment/materials/terms → review → generate/download → optional invoice. Reuse instructions for detailed actions, customer/settings prerequisites and manual delivery. Do not make screenshots from different configuration stages appear to be one uninterrupted exact export.

## 7. Legal/editorial findings

Official sources accessed on the audit date:

- L1: [Forbrukerrådet: bruk av håndverker](https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/) — recommendation for written documentation, not a universal signature-validity rule.
- L2: [Forbrukerrådet: sjekkliste](https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/sjekkliste-handverker/) — scope, price, timing, responsibilities, payment and separately agreed extras; its estimate guidance is in the håndverkertjeneste context.
- L3: [Forbrukerrådet: misfornøyd med håndverkeren](https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/misfornoyd-med-handverkeren/) — consumer renovation complaints, reporting defects promptly, repair and other remedies. It does not make a short post-completion window a universal limit.
- L4: [Regjeringen: Prop. 64 L (2013–2014), chapter 7, discussion of §10](https://www.regjeringen.no/no/dokumenter/Prop-64-L-20132014/id755470/?ch=7) — official historical explanation of general form freedom and an exception for unsolicited telephone sales. This is preparatory material, not freshly consolidated current statutory text.
- L5: [Forbrukerrådet: contracts](https://www.forbrukerradet.no/forside/kontrakter/) — transaction-specific examples; supports choosing appropriate context rather than one universal document.

Direct Lovdata access to avtaleloven and håndverkertjenesteloven, including /nav/lov/1989-06-16-63/kapIV, returned 405. Search snippets were **not** treated as full statutory verification. A relevant Forbrukertilsynet PDF timed out; it is not used as verified legal authority. No useful directly accessed Altinn source was established for the specific disputed wording. No blanket current-law validation or legal opinion is claimed.

### Exact wording requiring attention

| Claim / source | Context and problem | Proposed wording/action, not implemented | Evidence / uncertainty |
| --- | --- | --- | --- |
| “En kontrakt er en skriftlig avtale mellom deg og kunden …” — content/seoPages.ts, /kontrakt-mal education | Agreement vs written record is blurred; readers may infer no agreement exists without a document. | “En avtale kan være bindende uten et separat signert dokument. Et skriftlig kontraktsdokument samler det dere har avtalt om arbeid, pris og vilkår.” Add appropriate exceptions/party-reservation qualification nearby. | L1/L4; modern tilbud-vs-kontrakt already explains the distinction. Do not turn general form freedom into an exceptionless rule. |
| “Mange jobber uten kontrakt...” — content/blogPosts.ts:1520, /blogg/nar-trenger-du-kontrakt | Unfinished and ambiguous about absence of an agreement vs absence of written record. | “Selv om dere har inngått en avtale, kan et eget skriftlig kontraktsdokument gjøre omfang, pris og ansvar lettere å dokumentere.” Complete practical decision guidance. | L1/L4; no evidence supplied for the prevalence assertion “mange”. |
| “Ja, det er et godt utgangspunkt.” — example-template FAQ, content/seoPages.ts, /kontrakt-eksempel | Too little qualification when visitors may copy terms into consumer/B2B work. | “Bruk eksemplet til å forstå oppsettet. Tilpass innholdet til oppdraget og avtaleforholdet; eksemplet er ikke en universell juridisk mal.” | L5; current answer does not explicitly guarantee compliance, so this is a qualification gap rather than proven universal legal advice. |
| “Når arbeidet er utført kan kontrakten brukes som grunnlag for faktura.” — /kontrakt-handverker | Simplifies the relation between completion, agreed payment and actual permitted invoicing. | “Når det er grunnlag for fakturering etter avtalen og reglene for leveransen, kan du bruke kontrakten som utgangspunkt og kontrollere den nye fakturaen.” | Existing Phase 8 timing safeguards; actual tax rules for every contract type were not re-certified here. |
| PDF section 6: “Eventuelle mangler må meldes innen rimelig tid etter at arbeidet er fullført.” Same default in app i18n/no.js:415 | Completion-based phrasing can mislead consumers about defects discovered later. It is visible illustrative document content, not merely an offscreen backend string. | Add visible warning that clauses must fit the transaction and cannot restrict mandatory rights. Obtain legal review; if a consumer example is supplied, use owner-approved wording tied to discovery and applicable outer deadlines, not an invented universal deadline. Do not retouch the screenshot. | L3; direct §22 statutory verification blocked. The example names a business-like customer; its legal status/contractual scope is not established. No finding that this demo clause is judicially invalid in every B2B agreement. |
| PDF section 7: law clause invokes håndverkertjenesteloven unless agreement/mandatory law says otherwise; same default app i18n/no.js:416 | Could be read as automatic legal fit for all contractors/customers. The app supports broader customers and services. | “Dette er et dokumenteksempel. Lovgrunnlag og vilkår må vurderes for det aktuelle oppdraget og om kunden er forbruker eller virksomhet.” Owner/legal review before promoting reuse. | L3/L5 establish context-specific consumer guidance; not full proof of every law boundary. A B2B contract may choose terms by agreement; default appearance alone is not proof of statutory applicability. |
| “Velg forskudd som betalingsmåte og angi en forskuddsprosent.” — content/contractProduct.ts | Verified software field, not a legal entitlement to issue VAT invoices in advance for all services. | Retain functionality explanation; add short context such as “Avtal betalingsvilkår som passer oppdraget. Kontroller reglene for når den aktuelle leveransen kan faktureres.” | Product code verifies the field, not legal permission. Reuse Phase 8 invoice timing references rather than claiming all advance schedules are legally approved. |

### Topics reviewed without a new factual defect

Acceptance: modern offer pages and tilbud-vs-kontrakt distinguish the offer, response, agreement and later document. Editing a document is not customer acceptance. Signatures: no universal signature requirement or e-sign claim found; manual signature fields are accurately described. Price/estimates: supporting offer content already distinguishes fixed price/estimates and consumer vs B2B; no new universal 15% rule found. Extras/changes: modern article explains agreeing changes separately; the document's written-change term should not be generalized into a claim that every oral change is legally void. Delays, defects, cancellation and termination: older pages largely omit practical treatment; omission is an editorial opportunity, not evidence of invented statutory rights. Any expansion must separate consumer renovation, new-home construction, B2B and other services, with current legal verification before adding specific remedies/deadlines. Do not copy consumer complaint, cancellation or day-fine rules into all contexts.

## 8. Product-accuracy findings

The principal product story is supported: independent contracts, conversion from offers, separate editing, fixed/hour/offer pricing, payment terms and material responsibility, PDF generation and contract-to-invoice conversion. No affirmative unsupported promise of e-signatures, customer acceptance/portals, automatic email delivery, automated installment invoices, automatic approvals, accounting integration or guaranteed legal validity was found in scoped current content. Negative explanations are not counted as promises.

Important distinctions to preserve: selecting terms is not computing/sending invoices; a saved contract is not customer acceptance; editing does not itself amend what the other party agreed; customer/project data in the editor need not have identical separate PDF fields; Free document capability is not a Premium-only feature. The conversion screenshots show full 12,000 before VAT, not an automatically calculated installment. Desktop invoice 112 and mobile invoice 113 are separate examples. The standalone 900/hour editor is not the PDF's offer-price configuration.

Claims concerning legal sufficiency, retention/security guarantees or complete backend entitlement enforcement remain unverified. No new product feature should be inferred from a menu option or marketing wording alone.

## 9. SEO findings

Distinct intended roles: /kontrakt-mal = product/free creation; /kontrakt-eksempel = completed example; /kontrakt-handverker = contractor preparation/use; /hva-skal-en-kontrakt-inneholde = practical contents reference. Existing text overlaps heavily in “arbeid, pris og vilkår”, but overlap alone is not evidence of harmful cannibalization. No Search Console data was supplied for this ecosystem; no ranking or uplift claim is made. Clarify roles on existing URLs rather than creating additional keyword variants or redirects.

All 27 route snapshots have title, description, canonical and one H1; metadata/text matched local vs production in all 27 comparisons. Sitemap and robots are 200 in both environments. Primary and article URLs are included in the generated sitemap. Robots allows public pages, disallows /api/ and /private/, points to WWW sitemap/host; no scoped noindex was found. Canonical generation uses lib/siteUrl.ts. Structured data is valid parseable JSON in observed pages: FAQPage on primary pages and Article on article pages. Published dates come from content records; no claim of fresh legal review should be inferred from article date alone.

Preserve all current slugs, metadata, indexing, canonical strategy, article H1 and linked original assets. Product H1 intentionally differs from its legacy seoPages.h1 field; preserve the actual rendered “Lag kontrakter som passer jobben.” unless separately approved. Preserve FAQ intent while making future visible answers/schema consistent. The example and contents routes under-deliver on their titles; the remedy is useful content, not another near-duplicate URL.

## 10. Internal-linking map

| Journey | Actual current route/destination | Gap / recommendation |
| --- | --- | --- |
| A Product → example → creation | /kontrakt-mal links its own #kontraktseksempel and /kontrakt-eksempel in resources; cluster links connect primary routes | Example lacks a document and a precise creation next step. Use /instruksjoner#opprett-kontrakt and existing /kontrakt-handverker; do not link nonexistent /lage-kontrakt. |
| B Creation → instructions → PDF | Product currently uses /instruksjoner#opprett; actual #opprett-kontrakt has field/media/PDF steps | Replace broad-category destination in future approved scope, retain full-size document and user-controlled generation. No blank downloadable contract template endpoint was established. |
| C Offer → contract | /tilbud-mal, /tilbud-eksempel and workflow article → /kontrakt-mal, #lag-kontrakt-fra-tilbud | Supported journey; preserve manual customer agreement distinction. |
| D Contract → invoice | Product → /fakturaprogram-gratis; article → /instruksjoner#kontrakt-til-faktura; creation/conversion instructions cross-link | Improve product's precise task link without replacing invoice product discovery; review invoice before manual delivery. |
| E Terms/content | Cluster and product resources → /hva-skal-en-kontrakt-inneholde, /kontrakt-handverker | Destinations function but are thin; explain practical scope/pricing/materials/change responsibilities with legal context. |
| F Articles → product | Modern articles include contextual product/instruction links; old article relies on generic CTA/related guides | Complete old article and add one practical next step, not repeated promotional boxes. |
| G Corrections/changes | #dokumentoversikt exposes Rediger for contract; #gjenta-et-dokument is copying; workflow article explains independent editing | No dedicated contract changes guide. Explain editing saved document vs agreeing changed terms; do not link invoice-credit-note guidance as contract correction. |

All 101 distinct main-content internal production destinations returned 200, including encountered resources. Anchors were tested separately as stated; HTTP 200 alone does not validate every fragment. A self-link to /kontrakt-mal remains in the product's resources and generic cluster self-pills; not broken. Navigation works, but generic Navbar shows Hjem rather than shared product dropdown. Future dedicated pages should reuse SiteHeader, preserving keyboard behavior, rather than building another menu.

## 11. Media inventory

The complete contract-specific/cross-manifest inventory is **41 files: 19 PNG sources and 22 WebP derivatives**, 1,834,243 bytes combined on disk. This is repository inventory weight, not one page's transfer payload. All 41 public production URLs returned 200 and matched the corresponding local SHA-256. Metadata was read from actual files with installed sharp; no asset was created, optimized or altered.

| Exact repository path | Dimensions | Bytes | SHA-256 |
| --- | --- | --- | --- |
| public/images/product/instructions/optimized/jobbleder-instructions-contract-form-de70574904f4.webp | 840×720 | 53140 | de70574904f48e8b39a649032533094abbcd6d48e14bd733db7f7224551ac986 |
| public/images/product/kontrakt/optimized/jobbleder-contract-advance-1e0f477eb7e3.webp | 538×58 | 3778 | 1e0f477eb7e3dc7e0f340c33103a86a11e295cb2f9b5c8d03590cb6297e4ed3c |
| public/images/product/kontrakt/optimized/jobbleder-contract-clauses-e1b447e61a33.webp | 538×278 | 23562 | e1b447e61a33254ac14d5f852fa7c313f617e82fe9d25804fe8c632fc1b50fe5 |
| public/images/product/kontrakt/optimized/jobbleder-contract-hero-11f4f7338a0b.webp | 668×422 | 28740 | 11f4f7338a0b95218a976b4c39f0ccade6451c71de69bc7c397c3308913aa252 |
| public/images/product/kontrakt/optimized/jobbleder-contract-hero-mobile-b5101a336cae.webp | 332×74 | 2948 | b5101a336cae30777fa237c4a70dbef5b8366e7b0753504c2d85bdb087943fc3 |
| public/images/product/kontrakt/optimized/jobbleder-contract-materials-be1c1b83a11e.webp | 340×142 | 2630 | be1c1b83a11e2c3e094c4fdcf4b8e7505ee9bc352c3139edee053fec4dc57e9c |
| public/images/product/kontrakt/optimized/jobbleder-contract-payments-f96f107da0be.webp | 652×154 | 5594 | f96f107da0bec2c15302fd0f68d279e52b6665ab7c1fe143fd5a67cc78f98cc6 |
| public/images/product/kontrakt/optimized/jobbleder-contract-payments-mobile-b3e033dbf6b6.webp | 340×154 | 4024 | b3e033dbf6b657dabd72f868d2194401972135d76a556f5ec0fb08d0f18331dc |
| public/images/product/kontrakt/optimized/jobbleder-contract-progress-b47e4e1c1c86.webp | 560×120 | 8672 | b47e4e1c1c86a249b3819c6946c1dde781493be58e10a5b14577fc72861458c5 |
| public/images/product/kontrakt/optimized/jobbleder-home-contract-192687f50086.webp | 638×141 | 2452 | 192687f5008649ce26de28954e44e4531a919addc1bc709c4639b1170d2a913b |
| public/images/product/kontrakt/optimized/jobbleder-home-contract-document-249c17de7105.webp | 508×720 | 37384 | 249c17de71058ee080dfa006e32fd8df0baa6161452bc511bd2569fa288085ad |
| public/images/product/kontrakt/optimized/jobbleder-home-contract-mobile-6413439017d3.webp | 340×141 | 1910 | 6413439017d3debf673a3ed6ade39031060a5bed9c56bac963621beae1eb4431 |
| public/images/product/kontrakt/source/contract_from_offer_edited.png | 706×720 | 78568 | e3567b7b2a17f248d8cc82d8cb52d51c342afc7dc04e0b640cc760fdc0aeb8bb |
| public/images/product/kontrakt/source/exported_contract_preview.png | 508×720 | 73859 | f9f3480a06a9e01377203d40082d0e510dc7654c9af6a99c6f696c2d1c80b933 |
| public/images/product/kontrakt/source/invoice_from_contract.png | 1280×720 | 115705 | e7c3e017c129eea93e17f10968fae46a6cb8d5ea0ab4ecdaeb1985dd6e925dac |
| public/images/product/kontrakt/source/material_costs.png | 640×142 | 6279 | e346a385a826e90e8773fac778dece0c0f66abd749f58df3dab7832812d333d1 |
| public/images/product/kontrakt/source/new_contract_form.png | 840×720 | 87933 | e296a779eb71310fb127b8dcb140b11ba8cfe873a7be49a46c9741c12b9c0ca2 |
| public/images/product/kontrakt/source/new_contract_form_time.png | 840×720 | 90346 | f5f4c724494977bab002dab398d7094f660fb6fbbb69fb367d5874ca1c98952e |
| public/images/product/kontrakt/source/new_contract_form_with_advance_percentage.png | 680×720 | 89836 | 44cd12def8b4fb4eae34bdd02ddd47f11fb1d7dc29c849b6520e5b1a9e3c31b6 |
| public/images/product/kontrakt/source/payment_base.png | 638×141 | 4494 | 0c664b7c2db219e352cdc7e259432a28f0727efc600d6d47d9cc6edd5311aa5b |
| public/images/product/kontrakt/source/payment_methods.png | 652×154 | 9917 | 741be217c8ae57d64484ad17c6e098612110224315751cd5948400e5ce09a375 |
| public/images/product/kontrakt/source/suggestions.png | 613×285 | 9718 | ac6af15b73d35dd6cdac367a8e5b160846f3f24b92180ff6610f08acb47cb394 |
| public/images/product/kontrakt/source/tilbud_to_contract.png | 834×720 | 94495 | ec097b8f9b9b90ff854c4bcee195a7e3baa4e069e2708d4e5f89cf01395574d5 |
| public/images/product/mobile/optimized/contract_create_mobile_01-9d95dd5a24ea.webp | 332×720 | 49682 | 9d95dd5a24ea90304423402b451cb6104b972f2359bc7d24fa4f5a65ec684f81 |
| public/images/product/mobile/optimized/contract_create_mobile_02-d1dd24a06489.webp | 332×720 | 41870 | d1dd24a0648996f66b0a5d45dc4ed40e7e0f165921bd678fceb74c4a6e20d6b5 |
| public/images/product/mobile/optimized/contract_document_actions_mobile-7615390c1d96.webp | 332×720 | 34024 | 7615390c1d969294a2b403e2e6898794905e07771d8a32beb32a314bbc02f2ad |
| public/images/product/mobile/optimized/contract_from_offer_mobile-dc96091cddcc.webp | 332×720 | 44542 | dc96091cddcca2c3d9fd4024103923a62746316419a2fbb5a0ed0dd9a9e331e3 |
| public/images/product/mobile/optimized/invoice_from_contract_mobile-4059b61ae977.webp | 332×720 | 44312 | 4059b61ae97798617bc33028847ae3636d4e5ee36475dd2701754e336ba2e10e |
| public/images/product/mobile/source/contract_create_mobile_01.png | 332×720 | 71144 | 686047811ae7778f2b7665a7a3e8dbae8fc161c6d14e035f19be7ef55a89e3d9 |
| public/images/product/mobile/source/contract_create_mobile_02.png | 332×720 | 63285 | 26fe46576b00b06d609f40df780d5a5ba619a1d4753d06583c33b6740d984715 |
| public/images/product/mobile/source/contract_document_actions_mobile.png | 332×720 | 56691 | ebd997bca0e899cd6e4edb6493d65d379390a2c96e4b3828ce3e0b7b30a9879e |
| public/images/product/mobile/source/contract_from_offer_mobile.png | 332×720 | 65359 | 544a38ad2c43f995b3f2f480eadf8324451363aa548c01238c83a9779d3f3acd |
| public/images/product/mobile/source/invoice_from_contract_mobile.png | 332×720 | 64078 | b6b51b0eb823475420f49edcf7d065329fc8d5d0f41ddc8be5285c680472e26d |
| public/images/product/tilbud/optimized/jobbleder-offer-contract-793f5eed04dc.webp | 834×720 | 56266 | 793f5eed04dcc76eafd2d81e3605c82d42a9c362ef2c47458898c257bf94663e |
| public/images/product/tilbud/optimized/jobbleder-offer-contract-invoice-7847d3b65141.webp | 1084×386 | 35312 | 7847d3b65141426fabbb9ac6a9c69e2196e9a6ceb70fca30081f2144cf3c1e7f |
| public/images/product/tilbud/optimized/jobbleder-offer-contract-invoice-mobile-64fb6553081e.webp | 862×386 | 25808 | 64fb6553081eec4b934674f978a4796f09ef5f1fbfce8382428380ef1f108d6b |
| public/images/product/tilbud/optimized/jobbleder-offer-contract-mobile-66905c4b86f7.webp | 664×426 | 30226 | 66905c4b86f7378a3f20b36a955aef5b3b6c6a2e1a304a0a73cf87e216f85a45 |
| public/images/product/tilbud/optimized/jobbleder-offer-edited-contract-98807c86e360.webp | 560×442 | 26892 | 98807c86e3602e16476c7d97b95eba37828f0b2a30e142f8e23ac9d2a8509674 |
| public/images/product/tilbud/source/contract_from_offer_edited.png | 706×720 | 78568 | e3567b7b2a17f248d8cc82d8cb52d51c342afc7dc04e0b640cc760fdc0aeb8bb |
| public/images/product/tilbud/source/invoice_from_contract.png | 1280×720 | 115705 | e7c3e017c129eea93e17f10968fae46a6cb8d5ea0ab4ecdaeb1985dd6e925dac |
| public/images/product/tilbud/source/tilbud_to_contract.png | 834×720 | 94495 | ec097b8f9b9b90ff854c4bcee195a7e3baa4e069e2708d4e5f89cf01395574d5 |

### What the media demonstrates and where to reuse it

| Source basename / family | Evidence / suitable use | Presentation limits |
| --- | --- | --- |
| exported_contract_preview.png | Full generated Kontrakt 11; main example and PDF step | Full page 508px wide; legal/demo qualifications above. |
| new_contract_form.png / new_contract_form_time.png | Independent creation and pricing/editor context; creation-guide form | Whole desktop UI is small on mobile; use existing responsive crops or authentic portrait states, retain original link. |
| payment_base.png | Price-structure selector; existing pricing/pricingMobile derivatives | Shows Fast, Time and Tilbud; it is not evidence of automatic price estimation. |
| payment_methods.png | Completion/advance/progress options | Preserve all choices and explain alternatives. |
| new_contract_form_with_advance_percentage.png | Advance percentage input | Do not present chosen percentage as statutory permission or computed invoice. |
| material_costs.png | Contractor/customer/both material responsibility menu | Label it responsibility, not automatic cost accounting. |
| suggestions.png | Work-description suggestions in editor | Optional detail, not proof of full scope estimation/AI contract drafting. |
| contract_from_offer_edited.png | Independently edited contract | Distinguish edited price/payment configuration from earlier PDF. |
| tilbud_to_contract.png | Contract editor with offer source | Conversion result, not automatic acceptance. |
| invoice_from_contract.png | Invoice 112 from contract 11 | Source and line data; not a payment-plan installment. |
| contract_create_mobile_01/02.png | Actual portrait parties/dates and lower payment/material fields | Complementary states, not one full-screen export. |
| contract_document_actions_mobile.png | Saved contract actions including edit/PDF/invoice | Best for explicit starting point and resulting action. |
| contract_from_offer_mobile.png | Contract price/work fields on mobile | Existing capture includes a still-unselected offer selector; do not describe it as a fully valid completed submission. |
| invoice_from_contract_mobile.png | Invoice 113 from contract 11 | Separate mobile example; caption must preserve this distinction. |

Manifest provenance and existing crop rectangles are recorded in contractProductMedia.json, instructionMedia.json, instructionMobileMedia.json and homeProductMedia.json; inventory.json records matched keys. Optimized basenames describe their roles (hero, hero-mobile, payments, payments-mobile, advance, progress, clauses, materials, pricing/home-contract, offer-contract, edited-contract, contract-invoice). Existing wide crop and mobile crop versions should be selected by what they show, not treated as identical full-page evidence.

Three byte-identical source pairs exist across public/images/product/kontrakt/source/ and public/images/product/tilbud/source/: contract_from_offer_edited.png, invoice_from_contract.png, tilbud_to_contract.png. Hashes in the table verify duplication. Do not delete originals during this audit; future cleanup must preserve existing public links/manifests. Some raw copies are not current display sources while counterparts in Tilbud are linked originals; that is not proof they are safe to remove. A runtime content/component reference search did not find suggestions.png or new_contract_form.png; they are available evidence rather than current displayed assets. The active hero uses new_contract_form_time.png. Additional media need not be added just to use an asset.

Additional relevant **offer-start context** outside the 41 contract-specific files: public/images/product/tilbud/source/offer_document_preview_in_documents_menu.png (1280×720, 153,575 bytes), its existing optimized jobbleder-offer-hero-3c424f34ca1e.webp (1090×650, 70,056 bytes), public/images/product/mobile/source/offer_document_actions_mobile.png (332×720, 58,001 bytes), and public/images/product/mobile/optimized/offer_document_actions_mobile-e6dc31f296e1.webp (332×720, 34,196 bytes). They show the offer's Opprett kontrakt starting action and already appear in instructions. These four are identified from existing manifests, not included in the 41-file fresh production hash batch; no new media is required to show that action.

## 12. Responsive/accessibility baseline

Chrome headless through installed puppeteer-core; existing axe-core, no dependency install. Local origin http://127.0.0.1:3041 serves the freshly built production app. Production origin https://www.jobbleder.no was tested directly, not inferred from local results.

| Matrix | Executed cases | Result |
| --- | --- | --- |
| Local 4 primary × widths 375/768/1280/1440 × OS light/dark × motion reduce/no-preference | 64 | All 200; no document overflow, observed runtime/console or image HTTP errors; axe 0 confirmed violations. |
| Production 4 primary × widths 375/1440 × dark/reduce | 8 | Same observed results; not a claim of the full production preference matrix. |
| Local expanded primary FAQ × 375/1440 | 8 additional axe runs | 0 confirmed violations; no expanded-state horizontal overflow; generic panels expose consistent expanded/hidden state. |
| Reference pages × 375/1440 | 10 | Screenshots and overflow observations, not a complete reference accessibility audit. |
| Route inventory 27 × local/production | 54 | 200, metadata/H1/schema/link snapshots. |

In 72 main cases, 324 FAQ keyboard cycles and 33 visible menu keyboard cycles were executed: Enter opens, Space closes, and visible header-menu Tab navigation reaches links. Focus outlines were recorded. Native details work on the product; generic FAQAccordion uses real buttons with aria-expanded/aria-controls and hidden panels. No manual screen-reader session or WCAG certification was performed.

Axe incomplete checks include color-contrast and link-in-text-block; these were not silently converted to passes. Visual inspection and source review found no confirmed major contrast defect in tested light/dark layouts, but image-internal fine print is not a pixel-by-pixel contrast certification. Headings have one H1 and appropriate section hierarchy in inspected primary pages. Linked screenshot names contain visible “Åpne hele bildet” plus descriptive context; originals opened at both widths in 20 production navigations. Images have meaningful alt, explicit intrinsic sizes, preserved proportions, hero eager/high priority and lower examples lazy loaded. Some wide detail text remains too small for comfortable inline mobile reading; full-size links mitigate but do not remove the P2 presentation opportunity.

Observed non-input CLS was 0 across sampled primary-case visits with image decoding/scrolling. This is a local browser observation, not field Core Web Vitals or proof of all user conditions. Reduced motion changes root scrolling to auto; ordinary preference retains smooth scrolling. No new animation was introduced. Full tab order, every possible submenu click and assistive-technology combination were not exhaustively tested.

## 13. Technical validation

| Check | Executed result |
| --- | --- |
| npx.cmd tsc --noEmit --incremental false | Exit 0 |
| npm.cmd run lint (full ESLint) | Exit 0 |
| npm.cmd run build | Exit 0; Next 16.1.6, 55 generated pages |
| git diff --check | Exit 0; no whitespace diff |
| Entry file SHA-256 comparison | 0 modifications/missing among 343 files |

Existing Node 26 DEP0205/module.register notices appeared during build. No new compilation/lint/type failure or observed hydration exception was found. Static route/metadata generation remains server-side; interactive legacy FAQ/Navbar are client components, product FAQs and shared product dropdown use native disclosures. CSS Modules isolate product/editorial layouts; the generic renderer relies on global theme variables and Tailwind. ProductMedia uses existing WebP art direction/unoptimized delivery and explicit dimensions. No new architecture/dependency is needed for the proposed work.

No Lighthouse run was required/executed in this audit; no performance score is claimed. Image dimensions/loading and observed CLS were inspected. Analytics request paths /api/handshake and /api/footprint were intercepted with synthetic 204 during browser visits to avoid unnecessary tracking events. Therefore this audit does not test analytics responses or claim that the synthetic statuses are production statuses.

## 14. P0–P3 findings register

P0: 0 confirmed. P1: 0 confirmed. P2: 9. P3: 3. All are existing baseline findings/opportunities. F06 is a legal-review risk with remaining context uncertainty; it is not proof of legal compliance or an adjudication of a particular agreement.

| ID | Severity / type | Route/file and evidence | User impact / recommended action | Phase / change risk |
| --- | --- | --- | --- | --- |
| F01 | P2 confirmed content gap | /kontrakt-eksempel; no main images/document, title promises example | Show authentic contract with explanatory field narrative and qualifications | 9B; medium, preserve SEO |
| F02 | P2 improvement | /kontrakt-handverker; three brief generic sections; no operational creation guide | Use existing route for practical contractor preparation/creation guidance linked to instructions | 9C; medium |
| F03 | P2 content gap | /hva-skal-en-kontrakt-inneholde; repeated work/price/terms, little practical content | Context-sensitive checklist/examples, clarify advice vs legal obligations | 9D; medium legal/editorial |
| F04 | P2 confirmed unfinished content | /blogg/nar-trenger-du-kontrakt, blogPosts.ts:1520 literal ellipsis | Complete decision guide; preserve title/URL and informational intent | 9D; low/medium |
| F05 | P2 editorial ambiguity | /kontrakt-mal education, seoPages.ts definition of contract as written agreement | Distinguish agreement from separate written document, preserving qualified exceptions | 9D; low copy change |
| F06 | P2 legal-review risk | PDF sections 6/7 and app i18n/no.js:415–416; completion-based complaints and broad law default | Resolve context/complaint wording through owner/legal review before promoting as reusable example; qualify visibly; preserve raw source | 9B prerequisite + 9D; medium/high if handled carelessly |
| F07 | P2 qualification gap | /kontrakt-eksempel FAQ “Ja, det er et godt utgangspunkt.”; payment configuration copy lacks transaction caveat | Clarify illustrative example/appropriate law and payment conditions; do not add legal guarantees | 9B/9D; low copy change, legal review needed |
| F08 | P2 discovery opportunity | ContractProductPage links #opprett/#dokumenter; precise anchors already exist | Prefer task-specific creation/conversion instructions and example→guide links | 9C; low |
| F09 | P2 usability opportunity | Product mobile wide crops, PDF 508px ceiling; generic nested containers/card repetition | Readable authentic portrait examples/focused fields, full-size link, improve editorial rhythm; optional higher-res original PDF | 9B/9C; medium layout |
| F10 | P3 duplication | Three identical PNG pairs in Tilbud/Kontrakt inventory | Avoid further duplication; defer cleanup until references/public originals are mapped | Optional later; medium deletion risk |
| F11 | P3 consistency | Generic Navbar Hjem vs shared dropdown; self-links; lowercase breadcrumb “kontrakt”; related/footer copy omits contract | Reuse shared chrome during modernization; tidy labels/self-links without broad refactor | 9B/9C; low/medium shared regression risk |
| F12 | P3 environment warning | Node 26 DEP0205 build notices | Track runtime/toolchain warning separately; no dependency/config change for this audit | Deferred maintenance; low current impact |

No route migration, noindex, template consolidation or universal legal rewrite is justified by this evidence. If later legal verification establishes a materially misleading consumer promise or unsafe customer data, escalate that specific issue to P1/P0 as appropriate before release; this report does not invent that determination.

## 15. Recommended modernization roadmap

1. **Preflight dependency:** owner confirms safe demonstration data and reviews PDF complaint/law context. Agree visible example qualification and whether a fresh authentic export is needed. Do not edit document pixels. This should happen before a more prominent example pilot.
2. **9B — Existing /kontrakt-eksempel pilot:** document-led editorial page with real full-page preview, restrained field explanations, transaction-context qualification, one product action, precise creation next step, shared chrome/native FAQ, preserved SEO. Reuse current asset if qualifications are resolved; request higher resolution only for fine-detail readability.
3. **9C — Creation guidance:** modernize existing /kontrakt-handverker as practical contractor preparation/creation guide; connect to exact instructions, both entry paths and manual PDF review/delivery. Do not create /lage-kontrakt by default. Preserve the main product's established identity and proven conversion caveats.
4. **9D — Legal/editorial/content:** complete nar-trenger-du-kontrakt; improve contents-reference page; narrowly qualify product definition and example/payment wording; cross-link related offer/contract/invoice journeys. Already modernized supporting articles need targeted review, not another wholesale rewrite. Verify current law before specific complaint/cancellation/new-build claims.
5. **9E — Combined final review:** repeat metadata/content/media integrity, responsive/keyboard/axe, link/anchor and technical checks; inspect all combined changes and run Lighthouse if performance work is evaluated. Owner visual/content approval before release.
6. **9F — Production verification:** only after explicitly approved commit/deployment; verify actual public content, assets and interactions, not merely push completion.

This is a plan, not implementation authorization. No Phase 9B work has started.

## 16. Required owner-provided assets / confirmations

No essential new interface screenshot is required to begin a scoped guide: the current editor, mobile, clause, material, PDF and conversion images cover the important steps. Essential confirmations: demonstration email/company/organization data are safe; intended transaction context for Kontrakt 11; suitability of the complaint/law clauses for any instructional reuse. These cannot be inferred from the filename.

Recommended optional capture: original generated PDF or a higher-resolution full-page PNG of an owner-reviewed demonstration contract, preserving full content and Free branding; consistent with the configuration discussed in the new example. Optional future evidence: exact save/generate→PDF/browser download state if that transition needs an image; fully selected offer mode on mobile if publishing it as a completed valid form; Premium-branded PDF only if visually comparing branding. Do not invent these states or require new assets merely to fill every section.

## 17. Known limitations

This is a sampled browser/source audit, not legal advice, security certification or complete authenticated product test. No production account/document mutation was performed. Current consolidated Lovdata law text was blocked; historical official explanatory material and accessible consumer guidance have narrower evidential scope. Consumer/B2B/new-build boundaries and individual contractual validity require specific review. Ownership/privacy of every apparent demo identifier is not independently established.

Production preference testing covered eight cases, not all 64 local combinations. Full-size image navigation and HTTP checks do not certify accessibility of text embedded in raster images. Automated incomplete checks, screen-reader testing, field performance, production analytics and all possible external services were not marked as passed. No deployment metadata check was performed in this phase; matching local/public content does not independently establish exact deployed SHA.

## 18. Exact files created

Repository: docs/phase-9a-kontrakt-ecosystem-audit.md only. Existing source, content, images and documentation remain unchanged; pre-existing untracked work remains intact.

External investigation scripts (not application source, not recommended for staging): phase9a-inventory.cjs, phase9a-browser.cjs, phase9a-extra.cjs and phase9a-report.cjs, under C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/.

Exact generated diagnostics under that directory's phase9a/:

- browser.json
- extra.json
- hashes.json
- inventory.json
- local-hva-skal-en-kontrakt-inneholde-1280.png
- local-hva-skal-en-kontrakt-inneholde-1440.png
- local-hva-skal-en-kontrakt-inneholde-375.png
- local-hva-skal-en-kontrakt-inneholde-768.png
- local-kontrakt-eksempel-1280.png
- local-kontrakt-eksempel-1440.png
- local-kontrakt-eksempel-375.png
- local-kontrakt-eksempel-768.png
- local-kontrakt-handverker-1280.png
- local-kontrakt-handverker-1440.png
- local-kontrakt-handverker-375.png
- local-kontrakt-handverker-768.png
- local-kontrakt-mal-1280.png
- local-kontrakt-mal-1440.png
- local-kontrakt-mal-375.png
- local-kontrakt-mal-768.png
- production-hva-skal-en-kontrakt-inneholde-1440.png
- production-hva-skal-en-kontrakt-inneholde-375.png
- production-kontrakt-eksempel-1440.png
- production-kontrakt-eksempel-375.png
- production-kontrakt-handverker-1440.png
- production-kontrakt-handverker-375.png
- production-kontrakt-mal-1440.png
- production-kontrakt-mal-375.png
- reference-faktura-eksempel-1440.png
- reference-faktura-eksempel-375.png
- reference-faktura-krav-1440.png
- reference-faktura-krav-375.png
- reference-lage-faktura-1440.png
- reference-lage-faktura-375.png
- reference-lage-tilbud-1440.png
- reference-lage-tilbud-375.png
- reference-tilbud-eksempel-1440.png
- reference-tilbud-eksempel-375.png
- verification.json

No commit, push or deployment. Audit complete; await owner direction on the proposed phases and example qualifications.

**READY FOR OWNER REVIEW**
