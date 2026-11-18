# Phase 4C.1 — Kontrakt landing page audit

Date: 18 November 2026, Europe/Berlin.

## 1. Executive summary

**Recommendation: approve a contract-focused Phase 4C.2 using the available authentic assets, with the evidence boundaries below. Do not implement yet.**

The current target is **`/kontrakt-mal`**, still rendered by the generic SEO template. It preserves useful contract search content but does not demonstrate the product: no contract screenshot, PDF example, pricing/payment explanation, branding comparison or final CTA. Its light-preference presentation has a concrete important contrast defect: white H1/educational headings on white, with pale introductory/body copy. This needs to be resolved within the future dedicated page, without changing unrelated SEO routes.

All **14 images** under `public/images/product/kontrakt/` were inventoried and visually inspected: eleven source PNGs and three WebPs, totalling **702,896 bytes**. Existing materials cover all ten requested topics at the **interface/document illustration level**, including editable clauses, 30% advance configuration, a progress-payment-plan row and the source-labelled contract-to-invoice form. No substitute imagery is needed for a carefully bounded product landing page.

The principal evidence gap is **payment execution semantics**. A visible payment-plan setting is not evidence that Jobbleder automatically creates/sends staged invoices or applies a percentage to a converted invoice. The supplied Invoice 112 shows the full 12,000 net / 15,000 gross amount, while the edited contract screenshot has a single 25% plan row. Do not present that invoice as proof of a calculated 25% stage. The contract PDF also shows an earlier offer-based/after-completion version of Contract 11, not the edited fixed-price/progress-plan version.

Workflow support and the Free/Premium model are user-confirmed. Other detailed fields are supported by screenshots and published instructions, not authenticated backend tests. No application source implementing contract calculations or saving was inspected in this marketing repository.

Read-only scope: **only this audit report is created in the repository**. No code, image, metadata, content record, configuration or existing report changed. No image generation, derivative creation, commit, push or deployment.

### Evidence and limitations

- Read route/content/components, shared styling, contract instructions, related-topic/blog records, existing manifests and prior approved offer documentation.
- Read dimensions, exact byte sizes and hashes for every contract-directory asset; visually opened all fourteen originals/derivatives without modifying them.
- Inspected production `/kontrakt-mal` at **375 and 1280 px**, both light and dark preferences, with 900 px viewport height; captured QA screenshots and ran axe. Opened/closed each of the three existing FAQ controls using Enter in every case.
- Inspected the published Faktura, Timeliste and Tilbud reference pages at 1280 px/light; all returned 200. These were visual/content references, not a new full release/regression audit.
- All fifteen distinct existing marketing-origin link destinations returned 200. Production sitemap and robots returned 200.
- No full four-width release matrix, Lighthouse, screen-reader session, physical-device test, authenticated contract creation, payment calculation or legal compliance review was performed. No tests are claimed beyond those executed.
- QA evidence is outside the repository at `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase4c1-evidence/`; metadata inventories and baseline hashes are alongside that directory with the `phase4c1-` prefix.
- Final scope check: SHA-256 comparison confirmed all **195 pre-existing tracked/untracked files unchanged**, with unchanged HEAD and this report as the only new repository file. Source images and unrelated local work are preserved; `final-scope.json` records the check.

## 2. Existing page findings

### URL and route

- Production: `https://www.jobbleder.no/kontrakt-mal`.
- Implementation: `app/(seo)/[slug]/page.tsx`, generic `SEOPage` after the dedicated Faktura, Timeliste and Tilbud branches.
- Content: `content/seoPages.ts`, `slug: "kontrakt-mal"`, `topic: "kontrakt"`, `isPillar: true`.
- Metadata comes from `generateMetadata`; canonical is generated through `lib/siteUrl.ts`, whose stable origin is `https://www.jobbleder.no`.
- No dedicated contract product component, contract-page media manifest or contract download resource is configured for this route.

### Current structure and content

1. Legacy `Navbar`, including Login destination.
2. `Breadcrumbs`: Hjem / kontrakt / Kontrakt mal (gratis). The topic label currently falls back to lowercase `kontrakt`.
3. One H1: **Kontrakt mal (gratis)**.
4. Introduction: “Trenger du en enkel kontrakt mal? Med Jobbleder kan du opprette kontrakt raskt og bruke den som grunnlag for arbeid og faktura.”
5. Four bullets: free contract template for tradespeople; create a contract in minutes; use an offer as its basis; convert contract to invoice.
6. One main **Opprett kontrakt** CTA.
7. `ClusterNavigation` for the four contract-topic pages.
8. Four educational H2s: **Hva er en kontrakt?**, **Hvorfor bruke kontrakt?**, **Hva bør en kontrakt inneholde?**, **Fra tilbud til kontrakt**. Existing paragraphs describe scope, price, terms, clarity and reduced misunderstanding; retain these topics and useful substance.
9. **Ofte stilte spørsmål**, using client `FAQAccordion`.
10. `RelatedSeoPages`, with nine contextual cards.
11. Legacy `Footer`.

The renderer nests Containers around several editorial blocks. The main content is a narrow `max-w-3xl` column, with repeated cluster/card navigation. There are **zero main product images**, no PDF preview, no Free/Premium explanation and no bottom conversion CTA. These are presentation/content gaps rather than broken destinations.

### Metadata and FAQ

| Element | Current production value |
|---|---|
| Title | `Kontrakt mal – enkel kontrakt for håndverkere (gratis) | Jobbleder` |
| Description | `Gratis kontrakt mal for håndverkere og små bedrifter. Lag kontrakt raskt og sikre avtalen med kunden.` |
| Canonical | `https://www.jobbleder.no/kontrakt-mal` |
| Indexability | HTTP 200; no noindex meta directive observed; public route included in sitemap and allowed by robots. |
| H1 | Exactly one: `Kontrakt mal (gratis)` |
| JSON-LD | One FAQPage with three questions, plus global Organization and WebSite. |

Current FAQ pairs, whose topics should be preserved:

- **Hva er en kontrakt?** — “En kontrakt er en avtale mellom deg og kunden som beskriver arbeid, pris og vilkår.”
- **Må jeg ha kontrakt som håndverker?** — “Det anbefales sterkt for å unngå misforståelser og sikre tydelige avtaler.” This is existing general recommendation copy, not verification of a legal obligation.
- **Kan jeg lage kontrakt gratis?** — “Ja, du kan opprette kontrakt gratis i Jobbleder.”

The generic renderer builds FAQPage from the same array as the visible accordion. All three answers were exposed by opening the controls. Do not create a second FAQPage when a future dedicated branch is introduced. No dedicated BreadcrumbList is currently generated. The global WebSite SearchAction is inherited infrastructure, not contract functionality.

### Links and CTAs

Both navbar **Login** and main **Opprett kontrakt** use `https://app.jobbleder.no` (browser-normalized to a trailing slash). There is no contract-specific authenticated deep link configured. Preserve that destination; reuse the established registration guidance rather than inventing a registration URL or direct editor route.

Contract cluster:

- `/kontrakt-mal`
- `/kontrakt-handverker`
- `/kontrakt-eksempel`
- `/hva-skal-en-kontrakt-inneholde`

The related cards preserve the three other contract destinations, then `/timeliste-mal`, `/timeliste-mal-pdf`, `/tilbud-mal`, `/lage-tilbud`, `/fakturaprogram-gratis`, `/lage-faktura`. Shared navigation/footer additionally links `/`, `/instruksjoner`, `/blogg`, `/om-oss`, `/kontakt`. All **15 unique marketing-origin destinations** returned 200 during this audit. The two application hrefs were inspected; this audit did not create an account or submit an application form.

There is no existing blank contract PDF download endpoint/resource to preserve. `exported_contract_preview.png` is an image of an exported document, not a downloadable `.pdf` template. A future secondary CTA should say **Se kontraktseksempel**, unless an actual PDF file is supplied later.

### Comparison with published product pages

| Area | Current Kontrakt | Established product-page approach to reuse |
|---|---|---|
| Product proof | Text and bullets only | Authentic UI, full exported documents, source-labelled workflows. |
| Narrative | Generic template education | Concrete benefit → product action → document result → next step. |
| Typography/layout | Narrow generic column, nested Containers | Fluid strong headings, capped reading widths, generous consistent section spacing. |
| Backgrounds | Theme-dependent body with hardcoded light text | Explicit light product surface, alternating white/light panels and a dark final CTA. |
| Responsive imagery | None | Natural proportions, art-directed details, intrinsic dimensions, original-image links. |
| Free/Premium | Only a free FAQ | Same functions in both; document branding/logo explained separately. |
| FAQ | Client buttons without exposed expanded state | Native `details/summary`, matching JSON-LD and visible focus. |
| CTA journey | One creation CTA; no helper copy | Primary/final CTA plus accurate “Create account” guidance and relevant secondary resource. |

Kontrakt should have its own contract-configuration narrative, rather than copying the invoice layout or repeating the complete offer editor. The published reference pages and local components corroborate these reusable patterns; Faktura still uses the legacy Navbar/Footer, while Timeliste/Tilbud use `SiteChrome`.

## 3. Complete screenshot inventory

Dimensions are original pixels; file sizes are exact bytes. **D** = desktop; **M** = mobile. Recommendations below describe possible future presentation only: no source was modified and no crop, conversion or new product-image derivative was written. In-memory decoded-pixel comparisons were used solely to inspect existing derivative fidelity.

### Source PNGs

All eleven paths below are under `public/images/product/kontrakt/source/`.

| Exact filename | Dimensions | Bytes | What it actually demonstrates | Suggested section / desktop and mobile suitability / evidence boundary |
|---|---:|---:|---|---|
| `new_contract_form.png` | 840×720 | 87,933 | Standalone Contract creation UI with no offer-source badge; Contract 11, selected customer/project, issued/due/start/end dates, place, description, work row; Fast model with empty price/summary 0.00; after-completion payment, 14 days, materials Entreprenør, four default clause switches off. | Creation process. D: show form or relevant field crop. M: use focused field groups plus full-original link. An initial form, not a polished completed fixed-price example or proof of saving. |
| `new_contract_form_time.png` | 840×720 | 90,346 | Standalone Time model, hourly rate 900, work “Legging av parkett”, after-completion payment, 14 days, materials Begge. | Hourly-pricing demonstration; possible authentic hero support. D: keep pricing context and summary. M: price-field detail required for legibility. No number of hours, calculated invoice or 900-standard-rate claim established. |
| `new_contract_form_with_advance_percentage.png` | 680×720 | 89,836 | Standalone Fast contract with 12,000, Forskuddsfaktura, Forskudd (%) 30, materials Entreprenør, and four editable clause textareas enabled: Tilleggsarbeid, Reklamasjonstekst, Lovtekst, Tilleggsvilkår. | Fixed price, advance configuration and editable terms. D: selective sections rather than duplicating the entire form repeatedly. M: separate detail crops keeping labels/value/context. No generated 30% invoice or legal validation shown. |
| `tilbud_to_contract.png` | 834×720 | 94,495 | Contract 11 with **Kilde: Tilbud 29**, selected offer/reference 29, 12,000 offer amount, same client/project and parkett line, Tilbud price model, after-completion payment and 14 days. | Offer-to-contract workflow and offer-based pricing. D/M: retain source badge and reference with the relevant fields; mobile detail plus full link. Does not alone prove independent-edit persistence. |
| `contract_from_offer_edited.png` | 706×720 | 78,568 | **Kilde: Kontrakt 11**, work retained, reference text to offer 29, price model changed to Fast 12,000, **Fakturering etter fremdrift**, payment plan on with shortcuts 25%/33%/50%, add-row control and one 25% row with optional description. | Independent editing and progress-plan configuration. D: clear field crop; M: pricing/payment detail. Source badge is Contract 11, not Offer 29. One row at 25% is not evidence of a complete 100% schedule or automated staged invoices. |
| `invoice_from_contract.png` | 1280×720 | 115,705 | Invoice 112 creation with **Kilde: Kontrakt 11**, client/project and parkett line, unit/net 12,000, quantity 1, MVA 25% / 3,000, total 15,000; full app sidebar and Premium-active account indicator. | Contract-to-invoice proof. D: remove irrelevant sidebar only in a future derivative. M: retain source and line in a close detail; full original available. Shows full-value draft creation, not automatic percentage billing, PDF result, sending or a Premium-only restriction. |
| `exported_contract_preview.png` | 508×720 | 73,859 | Whole exported Contract 11: parties, parkett work, dates, **Pris iht. tilbud nr. 29**, 12,000 offer sum, payment after completion, 14 days, materials by contractor, default work/change/complaint/legal clauses and **manual signature lines**, Free branding. | Main full PDF-document example. D: natural full-page ratio without enlarging beyond useful source resolution. M: complete page with original link and key facts in HTML. Earlier offer/after-completion version; not output of the edited progress-plan contract. An image, not a supplied `.pdf` download. |
| `payment_base.png` | 638×141 | 4,494 | Open **Prisstruktur** menu with Fast, Time, Tilbud; current field says Time. Despite filename, this is a price-model selector. | Compact pricing support. D: native size; M: crop only empty right-side space while keeping every model. Does not show payment calculation. |
| `payment_methods.png` | 652×154 | 9,917 | Open **Betalingsmetode** menu: Faktura etter ferdigstillelse, Forskuddsfaktura, Fakturering etter fremdrift. | Payment-arrangement explanation. D: compact original; M: future label/options detail. No timing automation, invoice issuance or collection result shown. |
| `material_costs.png` | 640×142 | 6,279 | **Materialer** dropdown: Entreprenør, Kunde, Begge; selected display Begge. | Material responsibility within terms/details. D: compact original; M: label/options detail. Does not demonstrate material-cost calculations, inventory or purchasing. |
| `suggestions.png` | 613×285 | 9,718 | Work-description input “Legging” with suggestions such as shingle, parkett, laminat and vinylgulv; category labels Tak/Gulv. | Optional creation detail, not a core section. D: compact supporting crop; M: readable detail if needed. Shows suggestions only, not AI generation, pricing recommendations or specification completeness. |

### Existing optimized assets

All three paths below are under `public/images/product/kontrakt/optimized/`.

| Exact filename | Dimensions | Bytes | Actual content and suggested reuse | D/M and limits |
|---|---:|---:|---|---|
| `jobbleder-home-contract-document-249c17de7105.webp` | 508×720 | 37,384 | Full `exported_contract_preview.png`; current homepage contract document. | Reuse for the full PDF example, both sizes. Pixel-identical decoded output; preserve entire page and existing homepage usage. |
| `jobbleder-home-contract-192687f50086.webp` | 638×141 | 2,452 | Full `payment_base.png` price-model dropdown. Name does not mean full contract form. | Reusable compact D pricing visual. Decoded pixels match PNG; not referenced by current homepage manifest. |
| `jobbleder-home-contract-mobile-6413439017d3.webp` | 340×141 | 1,910 | Left-side mobile crop of that same dropdown, retaining all three model labels. | Existing M pricing variant; right-side selector arrow removed. Decoded pixels match the exact left 340×141 PNG crop. Not a mobile full contract screenshot. |

All three existing WebPs were decoded and checked against their original/full crop: pixel-identical. Only the full contract-document PNG and its document WebP are already tracked under the contract directory. The remaining twelve files are pre-existing local untracked assets; none should be lost or indiscriminately staged during a later release.

### Relevant assets already elsewhere

The following full sources under `public/images/product/tilbud/source/` are byte-identical to their contract-folder counterparts and already committed/deployed:

- `contract_from_offer_edited.png`
- `invoice_from_contract.png`
- `tilbud_to_contract.png`

The committed `content/offerProductMedia.json` already identifies these reusable optimized variants under `public/images/product/tilbud/optimized/`:

| Exact filename | Dimensions | Bytes |
|---|---:|---:|
| `jobbleder-offer-contract-793f5eed04dc.webp` | 834×720 | 56,266 |
| `jobbleder-offer-contract-mobile-66905c4b86f7.webp` | 664×426 | 30,226 |
| `jobbleder-offer-edited-contract-98807c86e360.webp` | 560×442 | 26,892 |
| `jobbleder-offer-contract-invoice-7847d3b65141.webp` | 1084×386 | 35,312 |
| `jobbleder-offer-contract-invoice-mobile-64fb6553081e.webp` | 862×386 | 25,808 |

Prefer reuse where the crop fits the future contract story; avoid uploading duplicate bytes solely to change a folder or filename. Keep any new page manifest isolated so reused offer/home assets remain unchanged. The existing four-path infographic can provide optional broader context, but it is heavier and broader than this contract page needs; no new infographic is necessary.

## 4. Product capabilities and evidence classification

**USER-CONFIRMED** refers to explicit product information in the approved phases/current request. **DOCUMENTED/UI-SUPPORTED** means the marketing instructions and/or authentic screenshot show a field or action. Neither means this repository executes the authenticated backend. **REQUIRES VERIFICATION** must not be promoted into marketing claims without further evidence.

| Capability | Evidence and safe description | Boundary |
|---|---|---|
| Independent contract creation | DOCUMENTED/UI-SUPPORTED: `instructionContent.ts` “Opprett en kontrakt”; standalone forms without an offer source. Homepage already says users may create independently. | No authenticated save/create test performed. Do not imply an offer is required. |
| Contract directly from offer | USER-CONFIRMED plus instructions “Opprett kontrakt fra tilbud” and source-labelled Contract 11. | User chooses conversion and reviews the result; no automatic customer approval. |
| Independent editing after conversion | USER-CONFIRMED in Phase 4B; changed fixed-price/progress example supplied. Instructions allow editing work/terms. | Screenshot does not prove persistence or unchanged source-offer data by itself; do not claim automatic synchronization. |
| Generate contract PDF | USER-CONFIRMED document functionality, documented save/generate action and authentic exported image. | No actual contract `.pdf` file/endpoint supplied in marketing assets. |
| Fixed price | DOCUMENTED/UI-SUPPORTED: Fast selector and filled 12,000 examples. | No price-default, MVA-inclusion or final-calculation behavior inferred from a single screenshot. |
| Hourly rate | DOCUMENTED/UI-SUPPORTED: Time, 900 rate, summary `hourly`; instructions explicitly name timepris. | No hours tally, overtime, employee accounts or automatic timesheet billing inferred. 900 is demo input. |
| Price based on existing offer | DOCUMENTED/UI-SUPPORTED: Tilbud selector, selected Offer 29 and 12,000 reference. | Do not assume later offer edits automatically change the contract. |
| Invoice after completion | UI-SUPPORTED option, default form state and printed PDF wording. | A payment arrangement, not proof that software detects completion or schedules sending. |
| Advance invoice / percentage | UI-SUPPORTED: Forskuddsfaktura with Forskudd (%) 30. | Generated advance amount, split settlement, percentage base/MVA and subsequent balance behavior REQUIRE VERIFICATION. |
| Progress-based invoicing | UI-SUPPORTED: Fakturering etter fremdrift in menu and edited contract. | Automatic milestone detection, recurring invoicing or sending not evidenced. |
| Payment plans / percentages | UI-SUPPORTED: plan switch, 25/33/50 shortcuts, add row, percentage and optional description. | Full saved multi-row plan, totals validation, supported limits and resulting partial invoices REQUIRE VERIFICATION. |
| Work descriptions | DOCUMENTED/UI-SUPPORTED rows; add/reorder/remove controls and populated parkett example. | Suggestions are visible; no AI-generation claim. |
| Start/completion dates | DOCUMENTED/UI-SUPPORTED separate date fields; printed planned start/estimated finish. | No calendar scheduling, project execution tracking or guaranteed completion inference. |
| Material responsibility | DOCUMENTED/UI-SUPPORTED Entreprenør/Kunde/Begge. | Selection concerns who supplies materials; does not prove cost splitting, stock or purchasing. |
| Payment deadline | DOCUMENTED/UI-SUPPORTED Betalingsfrist (dager), value 14 and printed equivalent. | Example value is not a universal/default legal deadline. Validation rules untested. |
| Optional/editable contract sections | DOCUMENTED/UI-SUPPORTED four switches/textareas and instructions to adjust standard clauses. | The screenshot shows editable sections/default text; no legal approval, legal advice or standards compliance verified. |
| Contract → invoice | USER-CONFIRMED, instructions “Opprett faktura fra dokument”, Invoice 112 source Contract 11. | Full-value invoice draft is shown, not percentage allocation, automatic sending or final PDF. |
| Free | USER-CONFIRMED: all document creation/conversion functionality available; Free PDFs branded. Full PDF visibly has Free branding. | Some UI screenshots show Premium active; that does not make their functions Premium-only. Do not invent quotas/prices. |
| Premium | USER-CONFIRMED and branding instructions: remove Jobbleder branding, use own company logo. | Same document functions. No contract-specific Premium PDF comparison image supplied. |
| Signing | Prior user-confirmed limitation and printed manual signature lines. | Download/arrange manual signing. Electronic signing is **not supported**. |

Legal text present in the sample PDF/textarea is screenshot evidence only. This audit neither validates that text nor treats it as a universal Norwegian standard contract. Do not market Jobbleder as legally approved, compliant with a named standard, dispute-proof, or a guarantee that every generated contract is appropriate for every job.

## 5. Missing visual evidence and exact asset requests

### Coverage of the ten requested topics

| Topic | Existing coverage | What is still missing |
|---|---|---|
| 1. Create from scratch | Standalone default, hourly and advance forms. | Optional polished filled ordinary fixed-price example; not essential to demonstrate independent creation. |
| 2. Create from offer | Source-labelled `tilbud_to_contract.png`. | No essential gap for basic conversion narrative. |
| 3. Fixed price | Filled fixed-price advance/edited forms. | Optional filled ordinary after-completion form to avoid making advance payment appear mandatory. |
| 4. Hourly | Populated `new_contract_form_time.png`. | Optional matching hourly PDF if explaining the output of that mode. |
| 5. Advance payments | 30% configuration visible. | Matching resulting advance-invoice form/PDF and confirmed percentage semantics. |
| 6. Progress invoicing | Selected mode and a single 25% plan row. | Complete saved plan plus actual invoice result for one selected stage; current full-value invoice does not demonstrate this. |
| 7. Editable clauses | Four enabled textareas in advance form. | Optional saved/printed changed-clause result; no essential gap for saying sections can be edited. |
| 8. Material responsibility | Menu lists all three choices; forms show Entreprenør/Begge. | No essential gap for selection feature. Optional matching Kunde/Begge PDF if demonstrating printed variations. |
| 9. PDF output | Authentic complete offer-based Contract 11 document, PNG/WebP. | Higher-resolution export or actual PDF would improve detail/zoom. No fixed/hourly/advance/progress matching output currently supplied. |
| 10. Contract → invoice | Source-labelled Invoice 112 full-value draft. | Optional matching exported Invoice 112 PDF and source contract action screen. Partial-payment behavior remains unproved. |

**Existing assets are sufficient for a convincing basic contract product page without synthetic screenshots.** The following requests are prioritized by the extra claim they would unlock; they are not permission to invent filenames or generate content.

1. **Highest priority if describing payment-plan execution:** actual saved contract with a complete agreed multi-row progress plan; screenshot showing the chosen stage and resulting invoice sourced from that contract; matching exported invoice if claiming the PDF result. Supply matching IDs, percentages and totals, and confirm whether selection/calculation is manual or automatic. Suggested future descriptive filenames: `contract_progress_plan_complete.png`, `invoice_from_contract_progress_stage.png`. These files **do not currently exist**.
2. **Highest priority if describing calculated advance invoices:** filled contract with 30% advance plus actual resulting invoice draft/PDF and confirmed amount basis/remainder handling. Suggested filenames: `invoice_from_contract_advance.png`, `exported_advance_invoice.png`; **not present**. Do not assume current Invoice 112 is that result.
3. **Medium priority for a stronger independent-creation hero:** complete fixed-price contract created from scratch, with work, dates, nonzero price, normal after-completion payment and no offer-source badge. Supply matching full PDF if showing a before/after pair. Suggested `contract_fixed_price_complete.png` and `exported_fixed_price_contract.png`; **not present**.
4. **Medium/optional:** complete saved edited contract plus its PDF showing the changed clause and payment arrangement. Current PDF is an earlier version; do not splice the two into a false matched result. A higher-resolution current PDF/export is useful even if no new behavior is claimed.
5. **Optional:** matching hourly-contract PDF, Contract 11 document-menu action “Opprett faktura”, and exact exported Invoice 112. These improve proof but are unnecessary for the already user-confirmed basic workflow. A Premium-branded contract PDF is only needed for a visual contract-specific branding comparison; an accurate HTML comparison needs no substitute image.

If extra materials are unavailable, proceed later with clearly limited wording: **“Velg betalingsmåte og legg inn en betalingsplan”**, rather than promising calculated partial invoices, automated billing, collection or scheduling.

## 6. Recommended landing page structure

Aim for ten focused sections. Show the contract's usefulness first, then its configurable detail and workflow. Avoid an exhaustive tour of every field.

| Section | Proposed Norwegian message / purpose | Authentic image and interaction guidance |
|---|---|---|
| 1. Hero | Eyebrow **Kontrakt mal · gratis for håndverkere**; H1 idea **Lag kontrakter som passer oppdraget.** Lead: “Beskriv arbeidet, velg pris og avtal betaling. Start med en ny kontrakt, eller bygg videre på et tilbud.” Primary **Opprett kontrakt gratis**, secondary **Se kontraktseksempel**. | Authentic creation-form detail with visible contract identity; avoid making a blank 0.00-price form the sole proof. Use existing filled hourly/advance UI with an accurate caption if no new ordinary fixed-price asset is supplied. Clear registration guidance. |
| 2. Contract PDF | **Avtalen samlet i ett dokument.** Explain parties, work, dates, price, payment and manual signing. | Complete existing Contract 11 PDF image/WebP, natural portrait proportions and original link. Label its actual offer-based/after-completion version; no fabricated downloadable blank template. |
| 3. Contract creation | **Fra oppdrag til tydelige rammer.** Choose customer/project, describe work and set dates. Emphasize independent creation as well as offer input. | `new_contract_form.png` or populated hourly example; readable field detail on phones, full original available. Work-description suggestions can remain optional supporting detail. |
| 4. Three pricing structures | **Fastpris, timepris eller pris fra tilbud.** Three short plain-language explanations instead of repeating the entire form three times. | Existing pricing dropdown/mobile derivative plus a concise populated fixed/hourly/offer field example. Label values as demonstrations. |
| 5. Payment arrangements | **Avtal hvordan og når det skal faktureres.** Explain after completion, advance and progress settings. Payment-plan detail only at verified scope. | `payment_methods.png`; 30% advance and edited plan details as secondary images. Describe configured terms, not guaranteed automated invoice execution. Do not show incomplete 25% plan as a recommended complete schedule. |
| 6. Editable terms and materials | **Tilpass innholdet til oppdraget.** Work, dates, who supplies materials and editable clause sections; only enough technical detail to understand the benefit. | Enabled clause textareas from advance form; material dropdown optional. Do not endorse the legal clause wording as compliant. Retain useful explanation in HTML. |
| 7. Connected workflow | **Fra tilbud til kontrakt. Fra kontrakt til faktura.** Contract stays the focus; source-labelled examples explain reuse and independent editing. | Reuse existing offer-derived contract, edited contract and Contract 11 → Invoice 112 variants where suitable. Show each step clearly and avoid falsely matching the earlier PDF to edited terms. Link to Tilbud/Faktura pages for their full stories. |
| 8. Free vs Premium | **Alle kontraktfunksjonene er med i Free.** Creation, pricing/payment fields, PDF and conversions remain included; branding is the difference. | Short accessible HTML comparison using the offer/timelist table pattern. Free PDF is visible above. No unverified price, quota or unrelated invoice branding screenshot presented as a contract export. |
| 9. Guidance and FAQ | Preserve the four existing educational topics, with concise supporting copy and contract-topic links. Preserve the three FAQ topics; add pricing modes, editable terms, manual signing, offer/invoice conversion and branding questions. | Native FAQ disclosures and one data source for visible answers/schema. Avoid legal obligations/guarantees beyond verified information. |
| 10. Final CTA | **Få avtalen på plass før arbeidet starter.** Repeat **Opprett kontrakt gratis** and accurate application-registration guidance. | Established dark final panel, clear visible focus. No new authentication or backend flow. |

### Reusable implementation patterns for a later phase

- `components/site/Primitives.tsx`: SectionContainer, ApplicationCTA, ResourceLink, ProductMedia and REGISTRATION_GUIDANCE. The registration helper explains login followed by “Create account”.
- `components/site/SiteChrome.tsx` and `site.module.css`: consistent light surface, navigation/footer, named landmarks, skip link pattern, 3 px focus indicators, reduced-motion override and final CTA treatment.
- Timeliste/offer server-component Section/Media wrappers, isolated page CSS/content/manifest and natural `picture` variants. Preserve the accessible **Åpne hele bildet** prefix when reusing ProductMedia.
- Native FAQ `details/summary` with one shared FAQ data array; do not reuse the legacy accordion's missing expanded-state semantics.
- Offer/timelist semantic comparison-table pattern, with short row labels and explicit scoped headers. Faktura's PlanComparison is invoice-specific, not a generic contract component.
- Existing lossless optimization script conventions can be reused **only after implementation approval**. Reuse the already deployed PDF WebP and fitting offer-workflow assets; generate additional derivatives only for genuinely useful crops. Preserve all PNGs and their proportions/text.

For mobile, keep full documents and full-original links, while field details receive readable crops. Never crop away a discussed price option, source badge, plan row or clause label. Two narrow full-form images should not compete side by side on tablet; the offer page's stacked-until-desktop contract treatment is a useful precedent. Use no new animation/dependency unless a concrete requirement emerges.

## 7. SEO preservation requirements

Primary intent: **kontrakt mal** / **gratis kontrakt mal**. Secondary qualitative targets supported by the existing cluster/content: **kontrakt håndverker**, **kontrakt eksempel**, **lage kontrakt**, **hva skal en kontrakt inneholde**. Pricing/terms copy can naturally answer fixed-price, hourly and payment-arrangement questions, without creating new competing SEO routes. No keyword-volume, ranking or Search Console analysis was performed.

Preserve in Phase 4C.2 unless a later explicit SEO decision says otherwise:

- Existing `/kontrakt-mal` URL, stable WWW canonical and public indexability.
- Existing metadata title/description, contract topic and pillar flag.
- Exactly one H1 with clear contract-mal relevance in the hero; if adopting a benefit-led H1, retain the exact template intent prominently in nearby visible HTML as the offer page does.
- Useful content from all four existing educational topics and the three existing FAQ question topics. Preserve search intent; do not carry a weak or misleading legal claim merely to retain exact wording.
- Contract cluster links and all useful existing cross-product/navigation destinations.
- One FAQPage matching visible accessible answers; existing Organization/WebSite infrastructure unchanged.
- Existing sitemap generation (`isPillar` weekly/priority 0.9), robots strategy and WWW origin. No redirects or URL changes needed.

Internal-link opportunities:

- Contract cluster: `/kontrakt-handverker`, `/kontrakt-eksempel`, `/hva-skal-en-kontrakt-inneholde`.
- Contextual product steps: `/tilbud-mal`, `/fakturaprogram-gratis`; `/timeliste-mal` only where genuinely useful, not a competing hours-focused section.
- Existing instruction anchors `/instruksjoner#opprett` and `/instruksjoner#dokumenter`. Individual instruction articles have keys/slugs but no corresponding HTML IDs; do not invent `#opprett-kontrakt` without separately implementing it.
- Existing educational records: `/blogg/tilbud-vs-kontrakt`, `/blogg/nar-trenger-du-kontrakt`, `/blogg/fra-tilbud-til-kontrakt-og-faktura`. Their repository content is sparse/outline-like in places; do not treat it as verified legal guidance or copy unsupported automation/delivery implications into the product page.

Avoid cannibalization by keeping offer creation/acceptance detail on Tilbud, invoice-number/MVA/export detail on Faktura, and time registration on Timeliste. Here the distinctive value is **defining the agreement and adapting its price, payment and terms**, with brief onward workflow proof.

## 8. Accessibility concerns and executed observations

| Current issue | Evidence | Future recommendation |
|---|---|---|
| **Important: white-on-white headings in light preference** | At both tested widths, body is `rgb(255,255,255)` and H1/educational headings are white. Visible screenshot confirms disappearance; ratio 1:1. Generic route uses `text-white` with theme-dependent body. | Isolated dedicated contract product surface/dark ink; do not broadly change the generic renderer or unrelated routes. |
| Pale copy/breadcrumb/cluster contrast | Axe finds 14 insufficient-contrast nodes per light case: introductory/body gray about 1.47:1, breadcrumb home about 2.6:1, cluster links about 3.77:1. H1/manual white-heading finding is additional; zero automated detections would not imply invisible text is acceptable. | Use established explicit surface and accessible color tokens throughout breadcrumb, body and cluster navigation. |
| Dark footer contrast | Axe finds one contrast node per dark case: existing `text-gray-500` footer tagline, about 4.09:1 versus 4.5:1 expected. | Use accessible SiteFooter within the new contract surface. Do not change unrelated footer usage during this phase. |
| Indistinguishable navigation landmarks | Axe `landmark-unique` in all four cases, targeting `.sticky`; main navbar and breadcrumb nav have no distinct accessible names. | Reuse named SiteChrome and label breadcrumb navigation appropriately. |
| FAQ state not programmatically exposed | All three buttons toggle by keyboard, but `aria-expanded` and `aria-controls` are absent; +/- enters their accessible text. Browser shows default `auto` 1 px focus outline rather than the product system's 3 px outline. | Prefer native disclosures and hide decorative symbols from assistive technology. Preserve visible focus and keyboard behavior. |
| Reduced-motion preference not respected by scrolling | After emulating reduce in all four cases, `matchMedia` is true but computed root `scroll-behavior` remains `smooth`; global CSS has no reduced-motion override for this generic page. | Reuse the product surface's reduced-motion override. |
| No skip link in generic page | Source has no main skip target/link as in product references. | Add the established skip-link pattern in the future dedicated component. |
| Future screenshot accessibility | Current route has no images; supplied sources are relatively small raster UIs. | Norwegian alt text accurate for both crops, named full-image links, HTML explanations, natural dimensions, no assumed legibility of phone-scale fine print. |

Test matrix actually executed:

| Width | Preference | HTTP | Horizontal overflow | Axe contrast nodes | Axe landmark issue | FAQ Enter toggles |
|---:|---|---:|---|---:|---|---|
| 375 | Light | 200 | None | 14 | Present | All 3 worked |
| 375 | Dark | 200 | None | 1 | Present | All 3 worked |
| 1280 | Light | 200 | None | 14 | Present | All 3 worked |
| 1280 | Dark | 200 | None | 1 | Present | All 3 worked |

This is a discovery audit of existing defects, not release approval of the generic page or an exhaustive WCAG assessment. The dedicated redesign should resolve these findings before its own final release audit.

## 9. Risks and implementation recommendations

1. **Payment automation overclaim:** the highest product-copy risk is treating configured terms/percentages as proof of automatic staged invoice generation. Resolve semantics with actual product evidence or keep the language limited to configuration and review.
2. **Mismatched document versions:** PDF Contract 11 is offer-based/after-completion, edited Contract 11 is fixed/progress-plan, and Invoice 112 is full-value. Same number does not mean the images are a validated step-by-step payment execution trace. Caption versions accurately or obtain matched exports.
3. **Legal overclaim:** editable clauses and a law reference printed in a demo are not certification. Avoid named-standard, guaranteed-validity or dispute-prevention promises; manual signing must stay explicit.
4. **Free/Premium misinterpretation:** a Premium-active indicator in the invoice screenshot does not restrict those functions to Premium. Use the user-confirmed branding-only distinction.
5. **Mobile legibility:** long full forms shrink badly. Prioritize the message in HTML, use faithful detail variants later, preserve source/full-image access, and validate 375/768/1280/1440, both preferences and reduced motion before release.
6. **Asset duplication/release scope:** twelve contract-folder files are currently untracked, and three duplicate already deployed offer-folder sources. Deliberately select required inputs/assets in a later phase; do not move/delete user originals or stage all untracked product folders. Existing homepage/offer image references must remain intact.
7. **SEO collateral changes:** introduce only a future `/kontrakt-mal` component branch and isolated content/media/CSS. Preserve metadata generation, cluster routes, shared infrastructure and all published product pages.
8. **Backend uncertainty:** this audit is not authenticated QA of save/edit, percentage validation, MVA treatment or invoice settlement. Maintain the evidence classification in implementation documentation; do not infer unsupported calculations from marketing code.

Recommended next step after approval: agree on the contract-first narrative and payment-claim boundary; request matched advance/progress results only if those stronger behaviors are to be described; implement the isolated page using the existing authentic material; then run the established compiler/lint/build, responsive, accessibility and release-audit process. No new imagery or backend work is authorized by this report.

**Stop here. Await approval before Phase 4C.2.**
