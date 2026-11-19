# Phase 6A — Faktura ecosystem audit

Date: 19 November 2026. Scope: read-only inspection of the marketing repository, existing media, selected local application source and the live website. No implementation, content correction, image processing, commit, push or deployment was performed.

## 1. Executive summary

The main `/fakturaprogram-gratis` product page is already a substantial, working product presentation. Its authentic creation interface, generated invoice examples, Free/Premium comparison, responsive layout and accessible disclosure controls should be preserved. A wholesale redesign would spend effort on the strongest part of this ecosystem.

The weaker layer is the supporting educational content. The audit identifies **no demonstrated P0**, and **three P1 content/intent findings**:

1. `/faktura-krav` does not provide a sufficient factual checklist for its stated purpose. The related content article also needs a more qualified, sourced explanation.
2. `/faktura-eksempel` and its small-business article promise an example without actually presenting a worked example or document.
3. `/blogg/fra-tilbud-til-kontrakt-og-faktura` is an indexable outline rather than a usable workflow explanation: approximately 27 rendered article words, introductory ellipsis, four headings and a promotional sentence.

These are editorial and user-journey issues, not evidence that invoice creation is broken or that Jobbleder fails legal requirements. No new serious accessibility failure was found in the targeted automated checks. There is no evidence here establishing harmful keyword cannibalization, and no basis for redirects, consolidation or new routes.

The inventory contains **four primary Faktura routes, five Faktura-category articles and seven additional articles with relevant document-workflow content**. Nine contextual product/index/hub/home routes were also inspected: **25 unique routes**, each opened locally and directly in production at 375 px/light and 1440 px/dark, for **100 browser observations**. Main-page checks additionally covered 768 and 1280 px locally. Current local/production title, description, canonical, headings, schema and main text matched for all 25 routes at the sampled mobile width.

Product evidence supports invoice creation, PDFs, VAT entry, payment details, document conversion and a credit-note workflow. Local app source distinguishes editable offers/contracts/timesheets from invoices without a direct Edit action. It does **not** establish the deployed backend's numbering guarantees, draft/issued lifecycle or partial-credit behavior. Those questions must be settled before stronger marketing claims are published.

Recommended order: verify correction/numbering facts and add narrowly scoped help discovery; improve the requirements and example pages; improve the five invoice articles and the workflow outline; finish with contextual linking and regression testing. Preserve the recently approved Timeliste work.

## 2. Method, evidence and boundaries

### Repository and prior work

Entry working tree was clean at `81cbf9e63f6da8531057d361e960e68a8567c09a`. A SHA-256 baseline of all **304 tracked files** was saved before investigation. The final preservation check is recorded below. Existing source images were only read.

Relevant sources inspected:

- `app/(seo)/[slug]/page.tsx`, `content/seoPages.ts`: actual route inventory, metadata and legacy renderer.
- `app/blogg/[slug]/page.tsx`, `content/blogPosts.ts`: article routes, content, metadata and Article JSON-LD.
- `components/product/invoice/*`, `content/invoiceProduct.ts`, `content/invoiceProductMedia.json`: actual rendered invoice product content. The older Faktura body in `seoPages.ts` is bypassed for this route; it must not be mistaken for current visible copy.
- `components/site/SiteChrome.tsx`, `components/Navbar.tsx`, `components/Footer.tsx`, `components/ClusterNavigation.tsx`, `components/RelatedSeoPages.tsx`, `components/RelatedGuides.tsx`, `components/RelatedBlogPosts.tsx`.
- `content/instructionContent.ts`, `content/instructionGuides.ts` (including `instructionLabels` overrides), `content/instructionMobileMedia.json`, instruction rendering and linking.
- `app/sitemap.ts`, `app/robots.ts`, `lib/siteUrl.ts` and inherited layout metadata.
- Previous reports: `docs/phase-3.3-homepage-final-audit.md`, `docs/phase-3.3a-release-verification.md`, `docs/invoice-product-media.md`, `docs/phase-4c.4-kontrakt-navigation-production-release.md`, relevant asset/coverage entries in `docs/phase-5.1-instructions-media-audit.md`, and Phase 5.3A, 5.3B.3, 5.3B.4, 5.3C and 5.3D reports.

The published Timeliste page and modernized editorial components provide comparison patterns. The old homepage image-link issue and the old legacy light-mode heading defect are historical findings; neither is automatically carried forward as an open defect.

### Confidence labels

- **PRODUCTION-VERIFIED:** observed on `https://www.jobbleder.no` in this audit.
- **MARKETING-SOURCE-VERIFIED:** present in the current marketing implementation or authentic asset; not proof of all backend rules.
- **LOCAL-APP-SOURCE-VERIFIED:** found in the read-only sibling checkout `C:/Users/ddlas/Code/jobbleder_app/src`. Its correspondence to the current deployed app has not been established.
- **OWNER-CONFIRMED:** established product facts supplied in the approved preceding phases, especially conversions and Free/Premium branding.
- **REQUIRES CONFIRMATION:** backend behavior, deployment identity or edge cases not established by these sources.

No authenticated document was created, edited, sent or credited. No live account or backend mutation was attempted. Chrome was used for browser inspection; HTTP probes checked public resources. Automated accessibility coverage is targeted, not a declaration that every article or authenticated app screen is accessible. Search Console, rankings, conversion analytics and field Core Web Vitals were not available for the Faktura cluster.

## 3. Complete relevant route inventory

Exact rendered metadata, H1, canonical, schema types, main-content internal destinations and conversion destinations are listed per route in Appendix A. All paths below actually exist in the content/route inventory and returned 200 in production.

### 3.1 Primary cluster

| URL | Type / intended search intent | Current implementation and assessment |
| --- | --- | --- |
| `/fakturaprogram-gratis` | Product: choose a free invoice program | Dedicated `InvoiceProductPage`; authentic interface/PDFs; primary app CTA and process anchor. Preserve. |
| `/lage-faktura` | SEO guide: how to create/write an invoice | Generic SEO renderer; short explanatory prose, no actual application sequence or screenshot. Can become a practical guide without copying the product hero. |
| `/faktura-eksempel` | SEO guide: see an invoice example | Generic SEO renderer; no illustrated or worked invoice. Strongest opportunity for an existing authentic PDF image. |
| `/faktura-krav` | SEO guide: required invoice information | Generic SEO renderer; superficial list and FAQ; missing important specifics and authoritative sources. |

### 3.2 Five Faktura-category articles

| Exact article URL | Distinct editorial purpose | Current article-body assessment |
| --- | --- | --- |
| `/blogg/gratis-fakturaprogram-handverkere` | Choosing a free program for a trades business | Approx. 212 words; no screenshot. Generic benefits and free-plan limitations of unspecified alternatives; body link to product page. |
| `/blogg/innhold-i-faktura` | Understand invoice fields and avoid omissions | Approx. 196 words; no screenshot. Useful initial list, but incomplete requirements context; body link to `/faktura-krav`. |
| `/blogg/hvordan-lage-gratis-faktura` | A practical beginner's sequence | Approx. 183 words; no screenshot. Broad steps and a list, with limited actual UI guidance; body link to `/lage-faktura`. |
| `/blogg/faktura-eksempel-sma-bedrifter` | Interpret a concrete small-business invoice | Approx. 110 words; no screenshot, amounts or worked document; links to the similarly unillustrated example route. |
| `/blogg/nar-sende-faktura` | Invoice timing and practical habits | Approx. 133 words; no screenshot needed by default. Generic advice, weak connection to agreed payment terms and manual delivery. |

Word counts are rough whitespace counts of rendered `article.innerText`, not ranking thresholds. A short article is not inherently a defect; failure to answer its stated task is the concern.

### 3.3 Seven adjacent articles

| Exact URL | Faktura relevance / disposition |
| --- | --- |
| `/blogg/gratis-timeliste-mal` | Recently modernized template article; authentic document/mobile examples and restrained discovery link. Preserve the downloads, SEO and approved content. |
| `/blogg/effektiv-timeliste` | Newly clarified registration/import/review sequence; useful bridge to invoice workflow. Preserve Phase 5.3D work. |
| `/blogg/timeliste-for-handverkere` | Practical hours, kilometers and extra-work example; existing authentic mobile screenshot. Preserve. |
| `/blogg/timeliste-og-faktura` | Strongest existing educational invoice-conversion example; review of four categories, manual invoice checking and sending; authentic mobile summary. Reuse its accuracy pattern, not its whole article. |
| `/blogg/lage-tilbud-byggebransjen` | Offer-first intent; one conversion sentence is valid, but links could lead to the actual offer-to-invoice instruction. Do not rewrite as an invoice article. |
| `/blogg/forskjell-faktura-tilbud-timeliste` | Document-type distinctions; overly absolute wording about invoicing only after completion needs qualification. This was already observed in Phase 5.3C. |
| `/blogg/fra-tilbud-til-kontrakt-og-faktura` | Directly relevant conversion journey; currently an unfinished outline. See P1 F03. |

### 3.4 Context routes, navigation and homepage

- Product workflow sources: `/timeliste-mal`, `/tilbud-mal`, `/kontrakt-mal`; project bridge `/timeliste-prosjekt`.
- Discovery: `/`, `/instruksjoner`, `/blogg`, `/blogg/kategori/faktura`, `/blogg/kategori/oversikt`.
- Homepage presents Faktura and supported connected document workflows with authentic product imagery. The global product menu links directly to `/fakturaprogram-gratis` alongside the three other products. No new fifth product section is needed for credit notes.
- Main product pages use `SiteHeader` with the existing Produkter dropdown/mobile menu. Legacy SEO pages and blogs use `Navbar` with Hjem, Instruksjoner, Blogg, Om oss, Kontakt and Login. This is a component-level difference, not a regression of the previously fixed Faktura product header.
- `RelatedSeoPages` and `ClusterNavigation` connect the four invoice routes. Blog `RelatedGuides` selects the first three invoice-topic entries, which excludes `/faktura-krav` from the default card set. Contextual links therefore matter; the content article already provides one.
- `RelatedBlogPosts` selects same-topic entries, then fills from general posts in source order, deduplicating and taking three. This is a working discovery mechanism, but it does not choose the best next task for each article.
- Related cards make the link graph look dense. They do not substitute for a sentence explaining why a reader should open a particular guide or instruction.

### 3.5 Existing instruction destinations

All eleven instruction anchors below were checked directly in both local and production browsers. The target exists and the containing instruction opens on the direct hash URL. These are anchors on one hub, not eleven independent indexable pages.

| Existing URL | Purpose / current evidence |
| --- | --- |
| `/instruksjoner#opprett-faktura` | Create an invoice; modernized guide with desktop and authentic mobile examples. |
| `/instruksjoner#lag-faktura-fra-dokument` | General conversion starting point. |
| `/instruksjoner#timeliste-til-faktura` | Timesheet-to-invoice; four categories, review, PDF/manual sending. |
| `/instruksjoner#tilbud-til-faktura` | Offer-to-invoice conversion. |
| `/instruksjoner#kontrakt-til-faktura` | Contract-to-invoice conversion. |
| `/instruksjoner#opprett-kreditnota` | Text-based credit-note selection/date/check/save instructions; suitable existing form image is not integrated here. |
| `/instruksjoner#rette-en-faktura` | Text-based credit note and corrected new invoice guidance; requires owner verification of edge cases before expansion. |
| `/instruksjoner#firma-og-fakturadetaljer` | Company/payment/VAT details; labels should be verified against current settings UI before editing. |
| `/instruksjoner#standardverdier-for-dokumenter` | Defaults, numbering/payment days/rates; not evidence of backend sequence guarantees. |
| `/instruksjoner#gjenta-et-dokument` | Copying a document. Rendered overrides use Kopier terminology; unused raw wording must not be mistaken for the displayed instruction. Copying is not recurring invoicing. |
| `/instruksjoner#dokumentoversikt` | Locate a document before preview/conversion/correction. |

`/fakturaprogram-gratis#slik-fungerer-det` also exists and was tested in both environments. Existing historical section anchors should remain intact in any later instruction work.

### 3.6 Downloads

No downloadable blank invoice template or public invoice PDF endpoint was found in the repository. Do not describe invoice preview PNG/WebP files as blank invoice templates or invent `/faktura-mal` as an existing route.

The neighboring template journey retains `/downloads/timeliste-mal-jobbleder.pdf` and `https://laskowskicreative.no/api/jobbleder/user/documents/oneweek-timelist`. Both returned genuine PDF responses in this audit. Their presence is not evidence of an invoice-template download. Creating an invoice PDF inside the authenticated application was not exercised.

## 4. Product capability findings

| Capability | Established evidence | Safe explanation / limitation |
| --- | --- | --- |
| Create invoices independently | Marketing creation screenshot, mobile source, guide; local app `CreateDocument2026.jsx` and corresponding view model | Enter customer, relevant project, invoice lines, quantities, rates, VAT and payment details; check before generating. A screenshot of a Premium-active account does not make creation Premium-only. |
| Timeliste → Faktura | Owner-confirmed; authentic four-category form/PDF and mobile summary; local `domain/documents/helpers/buildInvoiceFromTimelist.js` | Select conversion, review separate regular hours, extra hours, regular kilometers and extra kilometers, rates/VAT and totals. Worker-name attribution is not an employee account/payroll feature. |
| Tilbud → Faktura | Owner-confirmed; desktop/mobile conversion assets; local `buildInvoiceFromOffer.js` | Reuse offer data, then review and create the invoice. It is not automatically approved or delivered. |
| Kontrakt → Faktura | Owner-confirmed; desktop/mobile assets and current guides | Explicit action and review; agreed payment schedules do not prove automatic installment calculation or invoice creation. No backend schedule execution was verified. |
| PDF generation | Authentic exported documents and local preview action `generate-pdf` | Download a generated PDF. Marketing production only verifies the public preview images, not an authenticated export transaction. |
| Invoice numbering | Number visible in screenshots; local create view model gets `fakturanr` defaults; creation UI displays number as metadata, rather than an editable normal input | A number is supplied/displayed by the app. Backend allocation, atomic sequence, overrides, historical starting number and draft/issuance rules require confirmation. Do not claim legally compliant numbering solely from the display. |
| VAT | Line VAT in creation interface; exported invoice shows 25% example, 12,000 net + 3,000 VAT = 15,000 NOK | Explain line VAT and checking totals. This is not proof that every exemption, mixed-rate case or tax-registration situation is handled correctly. |
| Payment information | Invoice example includes account, due date and payment reference; settings instructions | Payment instructions on a document; no evidence of bank synchronization, reconciliation or a payment provider. |
| Credit notes | Existing form `new_creditnota_form.png`; hub instructions; local preview `create-credit-note` action and source-invoice/date form | Credit note references an existing invoice. The screenshot shows credit note 28 / invoice 110, source line count and source total. Full versus partial credit, repeated credit limits and reversal/status semantics require confirmation. |
| Edit/correct a saved invoice | Local preview actions exclude direct Edit for Faktura while allowing it for Timeliste, Tilbud, Kontrakt; existing correction instructions advise credit note + new invoice | Do not advertise editing an issued invoice as if it were an offer. The UI evidence is not a backend immutability proof or a complete definition of when a document is legally issued. |
| Free / Premium | Owner-confirmed model, current product comparison and authentic document examples | Creation, PDF export and conversions in Free; Free PDF contains Jobbleder watermark; Premium supports own logo or a clean document without watermark. Branding choices are not document-workflow restrictions. |
| Unlimited invoices; NO/PL/EN | Existing approved product claims; language files and marketing evidence | No contradictory evidence found, but quota enforcement and completeness of every translated export were not tested against production accounts. Preserve approved wording; do not extend it into unsupported guarantees. |

Specific local-source references: `src/Main.js` imports the 2026 desktop/mobile web screens; `src/viewmodels/documentPreview.viewmodel.js` around lines 443–473 defines edit/conversion/credit-note/PDF actions; `src/viewmodels/createDocument.viewmodel.js` supplies defaults and detects linked notes; `src/ui/documents/CreateDocument2026.jsx` around lines 2249–2267 displays credit-note/source and invoice-number metadata. Line numbers refer to the inspected sibling app checkout, not marketing files.

The filename `screenshot_fv_edit.png` is misleading if interpreted alone: its actual visible heading is **Opprett dokument**, with creation controls. It does not demonstrate editing an already issued invoice.

### Unsupported extensions to avoid

No independent evidence established automatic invoice delivery, accounting integrations, bank synchronization, automatic payment reconciliation, EHF, recurring invoices, automatic reminders or a released native mobile app. Manual reminder-related actions in local source are not proof of automatic delivery. A separate mobile-oriented source folder is not proof of a released native product. Describe a responsive web application and mobile browser where needed.

Public copy such as “Last ned og send som PDF” can describe manual sending. It is not automatically a false claim. In procedural content, remove ambiguity by explicitly saying that the user checks the invoice, downloads it and sends it manually. Likewise, contract documents are downloaded and arranged for manual signing; do not add electronic-signature claims.

## 5. SEO findings and preservation requirements

### Current technical state

- All 25 sampled routes returned 200 directly in production and had distinct title strings.
- The four core routes each render exactly one H1 and a self-referencing `https://www.jobbleder.no` canonical. Current product H1 is “Gratis fakturaprogram. Ubegrenset fakturering.”; its legacy SEO-data H1 is not rendered on that route.
- The four core pages emit FAQPage plus inherited Organization/WebSite JSON-LD. Eight product FAQ answers and three answers on each legacy route match text in the rendered DOM. Collapsed answers remain user-expandable. The articles use Article JSON-LD; they do not need artificial FAQ sections.
- No page-level robots meta or X-Robots-Tag restriction was observed for the sampled pages. Absence of a robots tag allows the default index/follow behavior; it is not evidence of an indexing failure.
- Production robots permits public crawling, excludes `/api/` and `/private/`, and advertises the WWW sitemap. Sitemap includes all sampled routes, including category hubs and the existing instruction hub. Anchors are not separate sitemap entries.
- JSON-LD parsed successfully. This is syntax/content checking, not a Google Rich Results eligibility guarantee. Do not add ratings, compliance claims or software feature schema unsupported by the product.
- Important sampled internal main-content URLs and hash targets worked. No broken destination was found in the 106 HTTP link checks. Link coverage excludes authenticated application journeys and every possible dynamically created app URL.

### Intent differentiation

Preserve the product route for choosing a free program; `/lage-faktura` for a practical sequence; `/faktura-eksempel` for inspecting a document; `/faktura-krav` for a sourced checklist. Give articles narrower angles: trades-business selection, field explanations, beginner walkthrough, worked small-business example and timing habits. The article and landing-page versions should answer different depths/questions rather than repeat the same generic benefit paragraphs.

Overlap between “gratis fakturaprogram”, “lage faktura” and “faktura eksempel” is expected. Search Console query-by-page data, impressions/clicks and changing ranking URLs would be required to establish harmful cannibalization. No such measurements were available. Do not merge, redirect, change canonicals, introduce noindex or rename URLs on this evidence.

Missing *coverage* is more important than missing routes: correction/credit-note discovery, a genuine worked example, a sourced requirements checklist and a useful conversion narrative can all be delivered in existing pages and anchors. No new page is recommended now.

### Requirements content: authoritative comparison

The current `/faktura-krav` FAQ names sender, customer, description, date and total, but does not explain invoice numbering, VAT identification/treatment or delivery particulars. Altinn's checklist also covers numbering, seller/buyer identification, delivery time/place and separated VAT information; requirements vary with circumstances. A later rewrite should cite the official checklist and distinguish optional practical details from required information. This is an editorial completeness finding, not a compliance verdict on Jobbleder. [Altinn: Faktura (salgsdokumentasjon)](https://info.altinn.no/starte-og-drive/regnskap-og-revisjon/regnskap/faktura-salgsdokumentasjon/).

Numbering claims need particular care: Skatteetaten explains controls against choosing/overriding invoice numbers. A frontend number field or static sample cannot establish those controls. Verify the backend before promising automated, compliant sequences. [Skatteetaten: Inntekter](https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/rutiner-regnskap-og-kassasystem/gode-rutiner-for-daglig-drift/inntekter/).

Do not infer EHF from PDF export, or guarantee that an illustrative invoice contains everything required for every company and transaction. Avoid adding legal timing deadlines without checking applicable exceptions and authoritative guidance.

### SEO safeguards for subsequent phases

Preserve exact URLs, WWW canonical strategy, metadata/H1 by default, indexability, established headings where practical, existing working links/downloads and Article/FAQ intent. Review query data before changing a title or primary angle. Keep `/blogg/gratis-timeliste-mal` and its free-template journey unchanged. Recheck sitemap/robots and compare rendered metadata/schema after any implementation.

## 6. Main landing-page assessment

### What works and should remain

Eight main sections cover hero, value summary, creation process, invoice/PDF showcase, connected workflows, plan comparison, FAQ and final CTA. “Gratis fakturaprogram. Ubegrenset fakturering.” provides a clear proposition. The first CTA goes to `https://app.jobbleder.no/`; nearby text accurately explains the login screen and “Create account” action. The secondary CTA leads to the on-page process anchor. The app landing destination returned 200; creating an account was not tested.

Screenshots are genuine and optimized. Free and Premium examples make branding differences concrete; wording correctly treats logo and clean PDF as alternative Premium appearance choices. PDF examples have existing full-size links, and the hero offers the full interface. Explicit dimensions, responsive media, lazy loading for lower figures and existing reduced-motion styles support stability. The fixed light product surface is intentional under either operating-system preference; it is not a failure to offer a dark product skin.

The Produkter dropdown and mobile menu are shared with the other product pages. Enter opens and Space closes the sampled menus. All eight FAQ questions were separately exercised by keyboard on production at 375 and 1440 px, with visible outlines. The main page produced zero axe violations in the targeted matrix. See measured results below rather than interpreting that as complete accessibility certification.

### Focused opportunities

- Add a small, accurate answer about invoice corrections and a contextual link to the existing credit-note/correction instructions once owner facts are confirmed. This closes a task gap without adding a major section.
- Connect each conversion explanation to its existing task instruction where useful; current cards mainly lead to general product pages.
- The mobile hero uses a genuine crop of the desktop customer/date fields, not a fabricated interface. It is readable but demonstrates less than the authentic mobile creation screenshot already available. Consider a measured, limited replacement only if it improves understanding; do not replace the approved layout merely to match Timeliste.
- At phone size the full-page invoice is recognizable rather than body-text-readable inline. Full-size links are available and work. A field-explanation guide is a better place for close reading than forcing a full invoice to fill the product hero.
- Repeated invoice figures reuse the same URLs. Count transfer/cache behavior, not the number of figure elements, before alleging image bloat.

Compared with `/timeliste-mal`, the Faktura page has less explicit task guidance and no dedicated correction story, but comparable authentic presentation and an established visual system. Timeliste's registration→review→PDF/invoice explanation is the useful content model. Its hero composition or the specialized pages' dark editorial surface need not be copied.

## 7. Blog editorial assessment

| Article | Useful next improvement | Authentic media / contextual next step |
| --- | --- | --- |
| `gratis-fakturaprogram-handverkere` | Replace vague repeated benefits with a trades-business decision example; explain Free branding versus same document functions in Premium. Avoid unqualified claims about unspecified competitors' limits. | One interface detail only if it illustrates the decision. Natural product link exists; link “eksempler”/“krav” when those concepts are actually discussed. |
| `innhold-i-faktura` | Explain fields through a concrete work item, price, VAT and total; qualify legal requirements and cite official guidance. Preserve informational intent. | Existing generated invoice can annotate the explanation in nearby text without altering the source document; link sourced requirements page and creation instruction. |
| `hvordan-lage-gratis-faktura` | Turn general list into an actual ordered application walkthrough: company details, customer/lines, checking, generation, manual delivery. Label optional project selection appropriately. | Existing creation screenshot and, if helpful, one mobile example. Link `/instruksjoner#opprett-faktura` rather than another generic introduction alone. |
| `faktura-eksempel-sma-bedrifter` | Interpret one specific invoice: work item, quantity, 12,000 net, 3,000 VAT, 15,000 total; explain what the fields mean without presenting it as universal legal certification. | Existing invoice 110 PDF image. Keep distinction from the broader example page by explaining a small-business scenario. |
| `nar-sende-faktura` | Practical checklist of completion/agreement/review/delivery; acknowledge agreed advance or progress terms carefully. Distinguish preparing a PDF from manually sending it. | No screenshot needed unless it clarifies a specific action. Relevant links to requirements/correction instructions and creation process. |
| `fra-tilbud-til-kontrakt-og-faktura` | Replace the outline/ellipsis with real explanation of both supported routes: Tilbud→Faktura and Tilbud→Kontrakt→Faktura. Explain independent contract editing and manual review/sending; no automatic signing/payment-generation promises. | Existing offer/contract/conversion assets are sufficient for principal explanation. Link actual product and instruction anchors near each action. |
| `forskjell-faktura-tilbud-timeliste` | Qualify “En faktura sendes etter at jobben er utført” and “når jobben er ferdig” as a common case, not the only arrangement. Keep document-type explanation concise. | No image required. Preserve document distinctions and link to verified workflows. |
| `lage-tilbud-byggebransjen` | Preserve offer-first focus. Explain a conversion only where it helps the reader continue after preparing an offer. | Existing offer product page/instruction is the natural destination. No need for another invoice screenshot. |

The five older invoice articles have text, notes/promotional callouts and an app link in the established blog renderer. Individual generic note + promo + related cards can repeat the same benefits without answering the task. Consolidate only after checking each useful link; retain the informational opening and put discovery after practical help. The 2026 workflow outline has a promotional block but no useful body links, which is a materially larger gap.

The four recently modernized Timeliste-related articles were inspected as contextual references and production-checked. They are not recommended for another rewrite. `/blogg/timeliste-og-faktura` already explains explicit conversion/review/manual delivery; adding an invoice-marketing section there would be repetitive.

## 8. Conversion analysis

| Journey | Current behavior | Recommended next step |
| --- | --- | --- |
| Search → free-program article → Jobbleder | Product body link and app button work, but generic prose gives little concrete evidence before signup. | Clarify actual Free model and show one relevant interface detail if helpful. |
| Search → `/fakturaprogram-gratis` → invoice creation | Clear primary CTA, accurate login guidance and process anchor; authenticated creation untested. | Preserve hierarchy; add task-level support links, not additional competing primary CTAs. |
| Search → example article → `/faktura-eksempel` | Both pages talk about examples without showing one. | Put an actual example at each relevant reading depth; do not require registration just to inspect a public sample. |
| Timeliste → Faktura | Strong product explanation and modern instruction, four separate categories and review. | Cross-link to the specific guide from the invoice conversion context. Preserve approved wording. |
| Tilbud → Faktura | Existing conversion screenshot and instruction; product link works. | Explicit task link and manual review, not automatic delivery. |
| Tilbud → Kontrakt → Faktura | Product pages work; the dedicated overview blog is skeletal. | Complete that article using existing authentic evidence; explain independent contract editing and deliberate conversion. |
| Correction question → Kreditnota | Exact hub anchors work, but main invoice page does not surface the correction task. Existing correction guides are text-only. | Brief FAQ/context link; reuse existing credit-note form. Capture output only after owner confirms the full correction path. |

The instructions are a meaningful conversion support destination, not only a generic footer link. Help the reader choose the right task rather than sending every question directly to signup. Invoice creation and conversion remain available in Free; no upsell gate should be added to these journeys.

## 9. Authentic media inventory and gaps

No assets were created, cropped, compressed or replaced. Appendix B records exact manifest paths, dimensions and bytes for reusable invoice/conversion media. The original invoice folder is **`public/images/product/invoice/`**, not `.../faktura/`.

Principal existing evidence:

- `public/images/product/invoice/source/screenshot_fv_edit.png`: 1917×906, 114,542 bytes; invoice 110 **creation** form. Existing desktop WebP: 73,136 bytes. Mobile hero/process assets are crops of this source.
- `public/images/product/invoice/source/fv_free_watermark.png`: 959×1251, 127,681 bytes; generated invoice 110 with Free watermark, example customer/bank/VAT/totals. Existing WebP: 52,268 bytes.
- `public/images/product/invoice/source/fv_premium_clear.png`: 959×1251, 109,632 bytes; generated invoice without watermark/logo. WebP: 45,982 bytes.
- `public/images/product/invoice/source/fv_premium_logo.png`: 947×1251, 131,557 bytes; generated invoice with demo company logo. WebP: 51,534 bytes.
- `public/images/product/kreditnota/source/new_creditnota_form.png`: 1280×720, 86,922 bytes; credit note 28, source Invoice 110, date, source count and 15,000 total. **Already exists** and was visually inspected. No optimized derivative is registered in the current product media manifests; processing belongs to a later approved phase.
- Existing invoice-from-timesheet form/PDF, offer-to-invoice and contract-to-invoice desktop assets, plus authentic 332×720 mobile creation/conversion screenshots, are listed in Appendix B.

Visually inspected the creation example, Free/Premium document examples, credit-note form and representative rendered production screenshots. Existing screenshot evidence/usage from the Phase 5.1 inventory was reused rather than re-auditing every unrelated image.

### Missing evidence, in priority order

1. **Owner confirmation before new copy:** actual deployed invoice lifecycle, correction rules, number allocation and full/partial credit behavior. More screenshots cannot establish backend guarantees.
2. **Generated credit-note PDF/preview** tied to a non-sensitive demo invoice, showing the invoice reference, credited amount and resulting state. Current creation form is already available; do not request it again.
3. **One coherent correction sequence**, if a detailed tutorial is approved: original invoice → explicit credit action → generated credit note → corrected replacement invoice. Keep document IDs and amounts consistent and label each document; never imply rewriting the original invoice.
4. **Current company/invoice settings screenshot** only if the settings guide is expanded: number/default controls, bank details and VAT settings. Verify exact visible labels and behavior before capture. No need to delay principal example/creation improvements for this.

Existing optimized media is sufficient to improve the three supporting SEO pages and five invoice articles. New screenshots are not a prerequisite for those editorial tasks. Do not fabricate a new invoice, alter document values or duplicate assets already shared between Tilbud/Kontrakt.

## 10. Visual consistency and accessibility

The main product page already belongs to the established product design family: generous spacing, clear type, bounded authentic figures, restrained CTA hierarchy and a practical plan comparison. Legacy SEO guides are narrower, more text-heavy and use nested container spacing plus generic cluster cards before detailed help. Improve hierarchy and relevance in their own approved phase; a dark background or a different hero is not inherently wrong.

Blogs are deliberately light editorial pages under either operating-system preference. That is compatible with readability. The recently modernized Timeliste article components demonstrate balanced text/media and modest captions without large promotional banners. Reuse these components where suitable rather than adding a new blog rendering system.

The old `/lage-faktura` light-mode white-on-white heading problem is **not reproduced**: the shared renderer now uses `text-foreground`, with explicit paragraph colors, and FAQAccordion exposes `aria-expanded`/`aria-controls`. The footer has a theme-aware muted color. These fixes should be preserved.

Targeted axe WCAG 2 A/AA, WCAG 2.1/2.2 AA and best-practice checks found **zero violations in 16 cases**: the main page at all four local widths in both preferences, plus all four invoice routes on production at 375/1440 px in light preference. Incomplete/needs-review results are retained in the raw artifact; automated checks cannot prove every color state, screen-reader reading sequence or the usability of small document text.

The incomplete checks concern decorative arrow/chevron glyphs on the product page, checklist ticks on legacy guides and the un-underlined Hjem breadcrumb in mobile legacy samples (`link-in-text-block`). These are not recorded as passed manual contrast/link-distinction tests. Review the breadcrumb's visual distinction in subsequent accessibility QA; this audit did not establish a serious failure from the incomplete result alone.

Keyboard samples verified native disclosures, visible outlines and accessible destinations. Main product FAQ was additionally tested question-by-question at both production widths. No unnamed screenshot link was reported in the targeted tests; existing visible full-size labels are meaningful. This audit did not conduct a full screen-reader session, every tab stop on every article, or authenticated app accessibility testing.

## 11. Browser, production and performance verification

### Exact executed scope

| Test | Local | Direct production | Result / boundary |
| --- | --- | --- | --- |
| 25 routes × two viewport/preference pairs | 375/light, 1440/dark | 375/light, 1440/dark | 100 observations; all 200, no horizontal overflow, no uncaught page errors. Reduced motion enabled for these observations. |
| Invoice product page additional matrix / axe | 375, 768, 1280, 1440 × light/dark | 375/1440 light | No detected overflow; observed CLS 0 in targeted scrolling/image checks. |
| Three legacy invoice routes / axe | Source and broad browser sampling | 375/1440 light | Six production cases; zero detected violations; FAQ keyboard open/close and 2px outline observed. |
| Shared product menus | Home, Faktura, Timeliste at 375/1440 | Same | Enter opens and Space closes; 12 menu observations. Link destinations match the shared product list. |
| Anchors | 12 targets | Same 12 | 24 successful target checks; 11 instruction details opened plus product process anchor present. |
| Internal main-content links | 53 requests | 53 requests | 106 responses were 200; tested hash targets exist. These are unique hrefs per environment, not all links on the internet. |
| Rendered images | All visible main images in sampled pages decoded | Same | 204 image observations; none failed decoding or had zero natural dimensions. Closed unrelated instruction media excluded. |
| Full-size main invoice links | Source/markup checked | Four unique WebP URLs, requested at both widths | All returned 200; same-URL duplicates are not distinct assets. |
| Invoice FAQ | Source array / targeted disclosure sample | All eight questions at 375/1440 | Enter opens, Space closes, visible 3px outline; answers consistent with shared schema source. |
| Resources | Sitemap, robots, local timesheet PDF | Same plus external timesheet PDF | All 200; PDFs have PDF content type and `%PDF-` signature. |

Broad production checks are at 375 and 1440 px, not all four widths for every route. Local main-page matrix covers 768 and 1280; do not relabel that as a full production four-width certification. Initial browser harness attempts that stalled on hidden image decoding were replaced by completed runs excluding hidden/unopened media; only the completed results are counted.

### Production resource responses

- `https://www.jobbleder.no/sitemap.xml`: 200, XML, 5,904 bytes.
- `https://www.jobbleder.no/robots.txt`: 200, text/plain, 137 bytes; WWW host/sitemap, public allow, API/private exclusions.
- `https://www.jobbleder.no/downloads/timeliste-mal-jobbleder.pdf`: 200, application/pdf, 339,211 bytes.
- `https://laskowskicreative.no/api/jobbleder/user/documents/oneweek-timelist`: 200, application/pdf, 334,286 bytes in this audit. It did not time out on this attempt.
- `https://app.jobbleder.no/`: 200 to the public app destination. No account creation or invoice action tested.

Production observations recorded no HTTP 400+ subresource responses or uncaught page errors. Several local observations saw the known `/api/handshake` 400; that was not reproduced in the direct production observations and is not classified as a demonstrated production analytics failure. Successful requests alone do not establish complete analytics attribution or event storage.

### Lighthouse measurements

Fresh measurements and image/transfer findings are recorded in Appendix C. These are single-run, simulated laboratory measurements of the production URL from this computer, not real-user metrics, Search Console data or a historical before/after comparison. No production performance regression can be attributed from one run alone.

TypeScript, full ESLint and a production build were **not rerun**: this is a read-only content/product audit, not an implementation or release validation. Existing previous-phase passes were not counted as fresh results. A later implementation phase must run its required technical validation and full regression matrix.

## 12. Prioritized recommendations

P0 = critical function/factual issue; P1 = important SEO/accessibility/conversion issue; P2 = valuable editorial/visual improvement; P3 = optional enhancement. No P0 or new proven P1 accessibility/availability issue was observed in the executed scope. The following P1 findings concern content and user intent.

| ID / priority | Affected URL(s) | Evidence / user impact | Recommended action | Change risk / complexity |
| --- | --- | --- | --- | --- |
| F01 / P1 | `/faktura-krav`; related `/blogg/innhold-i-faktura` | Requirements page FAQ/body omit important information such as numbering, VAT specifics and delivery particulars; users seeking a checklist get generic advice. Official comparison in section 5. | Create a sourced, qualified checklist; distinguish law, practical tips and app behavior. Explain an example without compliance guarantees. | Medium: factual/legal accuracy and existing organic intent; medium editorial effort, owner/professional review of assertions. |
| F02 / P1 | `/faktura-eksempel`, `/blogg/faktura-eksempel-sma-bedrifter` | Both promise examples but have no document, image or worked values. The article leads to another page with the same gap. | Reuse an authentic invoice example and explain its fields/numbers. Differentiate broad example guide from small-business scenario. | Low–medium: preserve metadata/URLs, avoid unsupported legal claim; low–medium implementation using existing media. |
| F03 / P1 | `/blogg/fra-tilbud-til-kontrakt-og-faktura` | Rendered article is about 27 words, contains “En god arbeidsflyt gjør alt enklere...” and headings without explanation. Indexable Article schema promises a workflow guide. | Complete the existing article with the two real routes, explicit user actions, review/manual sending and contextual links. | Medium: do not invent automatic approval/signing/billing; medium editorial/media effort. |
| F04 / P2 | `/fakturaprogram-gratis`, `/instruksjoner#opprett-kreditnota`, `/instruksjoner#rette-en-faktura` | Working correction anchors exist but main product FAQ only links generally to instructions; correction guides remain text-only despite an existing form image. | Verify lifecycle/credit rules, add brief task discovery and reuse existing form; capture output only if needed. | Medium: backend distinctions matter; small UI/content change, medium fact verification. |
| F05 / P2 | `/lage-faktura`, `/blogg/hvordan-lage-gratis-faktura` | Generic process prose; zero screenshots; “Last ned eller send fakturaen videre” leaves the delivery step underspecified. | Actual ordered creation/check/PDF/manual-send sequence with verified labels and one useful authentic example. | Low–medium; medium editorial work, no new dependency. |
| F06 / P2 | `/blogg/gratis-fakturaprogram-handverkere` | Generic free-program limitations and repeated benefits, no concrete trades-business decision example; referenced concepts lack contextual links. | Practical scenario, factual Free/Premium branding explanation and selected links. Avoid blanket competitor claims. | Low–medium SEO/editorial risk; low–medium effort. |
| F07 / P2 | `/blogg/nar-sende-faktura`, `/blogg/forskjell-faktura-tilbud-timeliste` | Timing advice centers on completion; latter says invoice is sent after work and repeats it in list. Readers may interpret a common case as the only arrangement. | Qualify timing against agreed terms; explain deliberate preparation/review/manual delivery; source any legal deadline separately. | Medium accuracy risk; low editorial complexity. |
| F08 / P2 | `/fakturaprogram-gratis`, invoice articles, `/blogg/lage-tilbud-byggebransjen` | Conversion cards lead to broad product pages; instruction anchors work but are not surfaced near relevant tasks. Related-card selection is source-order based. | Add a few task-specific contextual links; preserve useful existing links and avoid repetitive CTA blocks. | Low if route/anchor destinations retained; low–medium effort. |
| F09 / P2 | Three supporting SEO pages and five Faktura articles | Legacy text-heavy presentation, generic promotional repetition; sparse practical examples. Contrast failure from older audit is not reproduced. | Improve editorial hierarchy and reuse suitable blog/media patterns in separate scoped phases; preserve main product design. | Medium scope risk if shared renderer changed; medium effort with explicit regression protection. |
| F10 / P3 | `/fakturaprogram-gratis` mobile hero | Existing crop shows customer/date rather than a full authentic phone workflow; links to full image work. | Consider existing mobile creation screenshot only if it explains more; preserve approved spacing/CTA hierarchy. | Low–medium visual risk; low effort; optional. |
| F11 / P3 | Faktura cluster metadata, related-content selection | Keyword overlap and generic source-order cards exist, but no query/click/conversion evidence of harm. | Review GSC page/query data and choose better task recommendations before any metadata experiment. | Medium risk if unnecessary SEO changes; low analysis effort once data available. |

The backend uncertainties below are **verification dependencies**, not accusations of defects. Do not promote them to P0/P1 product failures without a demonstrated current-production behavior.

## 13. Proposed implementation roadmap

### Phase 6B — Product facts and narrowly scoped main-page/help corrections

Confirm current deployed app source/version, invoice lifecycle, numbering and credit-note rules. Document supported manual correction workflow. Improve discovery from the main invoice page to existing instructions, preserving the approved product design. Reuse the existing credit-note form if updating the selected guides; no automatic request for a replacement capture. Keep Free/Premium differences factual. Do not begin a product redesign under the label of correction.

Acceptance: owner-approved capability wording, explicit action/review/manual sending, no implication of editing an issued invoice or automatic recurring/reminder behavior; stable metadata and accessible linked images. Run TypeScript/ESLint/build and responsive/accessibility regression checks for any actual edits.

### Phase 6C — Three specialized invoice SEO guides

Start with F01 `/faktura-krav` and F02 `/faktura-eksempel`, then `/lage-faktura`. Preserve routes, existing title/description/H1 unless separately approved and supported by search evidence. Keep distinct purposes: checklist, visible example, practical procedure. Reuse original media through existing optimized derivatives; preserve source PNGs. Avoid changes to all SEO routes through an unbounded renderer refactor.

### Phase 6D — Five invoice articles and the existing workflow outline

Improve the example and field/creation articles first; complete the thin workflow article. Then refine free-program selection and timing. Qualify the existing document-difference article only as necessary. Use one relevant screenshot when it carries explanatory value; do not distribute the same screenshot across every article. Consolidate repeated promotional copy while preserving useful links. Do not reopen the modernized free-timesheet article or Phase 5.3D articles.

### Phase 6E — Internal journeys, measurement and final audit

Review contextual links and related-card relevance after the content is useful. Connect conversion/correction questions to exact instructions. Validate production pages, public assets, metadata/schema, anchors and app destination. Audit four widths, both preferences, reduced motion, expanded FAQ/menu states and representative screen-reader/keyboard journeys; run fresh technical validation and mobile/desktop Lighthouse. Obtain GSC page/query data for prioritization rather than assuming overlap is cannibalization.

No new route, redirect, canonical change, consolidation or indexing restriction is recommended by this audit. Keep each phase locally reviewable and require owner approval before publishing.

## 14. Open questions requiring owner confirmation

1. Does the inspected local app checkout correspond to the currently published app version? Which source/deployment should be authoritative?
2. When is an invoice considered created, saved, finalized, issued or sent in the actual product? Are there distinct draft states, and can any state be edited without a credit note?
3. How does the backend allocate invoice/credit-note numbers? Can defaults be changed, and what protects sequence/uniqueness across simultaneous sessions, failures, imports or account changes? Do not infer answers from the read-only number display.
4. Is a credit note always for the complete source invoice, or are partial credit and multiple notes supported? How is the original and replacement invoice represented afterward?
5. Does “Kopier” always create a new identity/number through the same backend allocation? Confirm without describing it as recurring billing.
6. Are current settings labels and the relevant NO/PL/EN exports unchanged? Which VAT combinations/exemptions are explicitly supported and tested?
7. Does Free still have the approved unlimited-invoice model, and do the same creation/conversion capabilities remain available in Free? Current evidence is consistent with that model; production enforcement was not exercised.
8. If a correction tutorial is approved, can the owner supply a sanitized credit-note output and coherent replacement-invoice example? The creation-form image already exists.
9. Can GSC query/page data for the invoice cluster and any measured conversion journeys be supplied before changing metadata or prioritizing overlapping articles? No future traffic or ranking result can be guaranteed.

## 15. Report status and preservation

Only this audit report was created in the repository. Temporary source inventories, hashes, browser screenshots, HTTP logs, accessibility and Lighthouse artifacts are outside the repository under `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase6a/`; inspection scripts sit beside that directory.

Final tracked-file hash comparison, exact metadata/link inventory, reusable asset inventory and Lighthouse results follow. This report is an audit recommendation for owner review, not approval to implement or deploy.

## Appendix A — Exact rendered SEO and link inventory

Production snapshots at 375 px, 19 November 2026. Titles include the inherited ` | Jobbleder` suffix. Each entry below was also opened at 1440 px and in the local preview. Internal destination lists include main-content navigation/related cards; shared header/footer destinations are documented in section 3. Images are inventoried separately. An absent robots tag/header means default index/follow, not a separately measured Google indexing state.

### `/fakturaprogram-gratis`

- Type / intent: Choose a free invoice product.
- Title: Fakturaprogram gratis – lag faktura enkelt i Norge | Jobbleder
- Description: Fakturaprogram gratis for håndverkere og små bedrifter. Lag faktura raskt i nettleseren og last ned som PDF.
- H1 (1): Gratis fakturaprogram. Ubegrenset fakturering.
- Canonical: https://www.jobbleder.no/fakturaprogram-gratis
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite, FAQPage.
- Main-content internal destinations: `/`, `/fakturaprogram-gratis`, `#slik-fungerer-det`, `/faktura-eksempel`, `/faktura-krav`, `/tilbud-mal`, `/timeliste-mal`, `/kontrakt-mal`, `/instruksjoner`, `/lage-faktura`, `/timeliste-mal-pdf`, `/lage-tilbud`, `/kontrakt-handverker`.
- Main-content external / app / download destinations: https://app.jobbleder.no/.

### `/lage-faktura`

- Type / intent: How to create/write an invoice.
- Title: Lage faktura – hvordan skrive en faktura enkelt | Jobbleder
- Description: Lær hvordan du lager en faktura enkelt og riktig. Jobbleder gjør det raskt å opprette faktura i nettleseren.
- H1 (1): Lage faktura
- Canonical: https://www.jobbleder.no/lage-faktura
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite, FAQPage.
- Main-content internal destinations: `/fakturaprogram-gratis`, `/lage-faktura`, `/faktura-eksempel`, `/faktura-krav`, `/timeliste-mal`, `/timeliste-mal-pdf`, `/tilbud-mal`, `/lage-tilbud`, `/kontrakt-mal`, `/kontrakt-handverker`.
- Main-content external / app / download destinations: https://app.jobbleder.no.

### `/faktura-eksempel`

- Type / intent: Inspect an invoice example.
- Title: Faktura eksempel – se hvordan en faktura kan se ut | Jobbleder
- Description: Se et enkelt faktura eksempel og lær hvordan en profesjonell faktura bør bygges opp for små bedrifter og håndverkere.
- H1 (1): Faktura eksempel
- Canonical: https://www.jobbleder.no/faktura-eksempel
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite, FAQPage.
- Main-content internal destinations: `/fakturaprogram-gratis`, `/lage-faktura`, `/faktura-eksempel`, `/faktura-krav`, `/timeliste-mal`, `/timeliste-mal-pdf`, `/tilbud-mal`, `/lage-tilbud`, `/kontrakt-mal`, `/kontrakt-handverker`.
- Main-content external / app / download destinations: https://app.jobbleder.no.

### `/faktura-krav`

- Type / intent: Required invoice information.
- Title: Faktura krav – hva må en faktura inneholde? | Jobbleder
- Description: Lær hvilke opplysninger en faktura bør inneholde og hvordan du lager en ryddig faktura for kunder i Norge.
- H1 (1): Faktura krav
- Canonical: https://www.jobbleder.no/faktura-krav
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite, FAQPage.
- Main-content internal destinations: `/fakturaprogram-gratis`, `/lage-faktura`, `/faktura-eksempel`, `/faktura-krav`, `/timeliste-mal`, `/timeliste-mal-pdf`, `/tilbud-mal`, `/lage-tilbud`, `/kontrakt-mal`, `/kontrakt-handverker`.
- Main-content external / app / download destinations: https://app.jobbleder.no.

### `/blogg/gratis-timeliste-mal`

- Type / intent: Free timesheet templates; preserve.
- Title: Gratis timeliste mal (PDF) – last ned uten innlogging | Jobbleder
- Description: Last ned gratis timeliste mal PDF uten innlogging. Velg mellom tom timeliste og ferdig datert timeliste for siste uke.
- H1 (1): Timeliste mal (PDF) – gratis nedlasting uten innlogging
- Canonical: https://www.jobbleder.no/blogg/gratis-timeliste-mal
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite, Article.
- Main-content internal destinations: `/`, `/blogg`, `/downloads/timeliste-mal-jobbleder.pdf`, `/timeliste-mal#registrer-pa-mobil`, `/timeliste-mal`, `/timeliste-mal-pdf`, `/timeliste-uke`, `/tilbud-mal`, `/fakturaprogram-gratis`, `/kontrakt-mal`, `/blogg/effektiv-timeliste`, `/blogg/timeliste-for-handverkere`, `/blogg/timeliste-og-faktura`.
- Main-content external / app / download destinations: https://laskowskicreative.no/api/jobbleder/user/documents/oneweek-timelist.

### `/blogg/gratis-fakturaprogram-handverkere`

- Type / intent: Choose a free program for trades work.
- Title: Gratis fakturaprogram for håndverkere – enkelt og nettbasert | Jobbleder
- Description: Opprett faktura raskt med et gratis fakturaprogram for håndverkere. Enkel løsning direkte i nettleseren.
- H1 (1): Gratis fakturaprogram for håndverkere – her er et enkelt alternativ
- Canonical: https://www.jobbleder.no/blogg/gratis-fakturaprogram-handverkere
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite, Article.
- Main-content internal destinations: `/`, `/blogg`, `/fakturaprogram-gratis`, `/lage-faktura`, `/faktura-eksempel`, `/timeliste-mal`, `/tilbud-mal`, `/kontrakt-mal`, `/blogg/innhold-i-faktura`, `/blogg/hvordan-lage-gratis-faktura`, `/blogg/faktura-eksempel-sma-bedrifter`.
- Main-content external / app / download destinations: https://app.jobbleder.no.

### `/blogg/lage-tilbud-byggebransjen`

- Type / intent: Prepare a professional offer.
- Title: Hvordan lage et profesjonelt tilbud i byggebransjen | Jobbleder
- Description: Slik lager du et tydelig og profesjonelt tilbud i byggebransjen. Lær hva som bør være med og hvordan du gjør det enklere digitalt.
- H1 (1): Hvordan lage et profesjonelt tilbud i byggebransjen
- Canonical: https://www.jobbleder.no/blogg/lage-tilbud-byggebransjen
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite, Article.
- Main-content internal destinations: `/`, `/blogg`, `/tilbud-mal`, `/lage-tilbud`, `/tilbud-eksempel`, `/timeliste-mal`, `/fakturaprogram-gratis`, `/kontrakt-mal`, `/blogg/feil-med-tilbud`, `/blogg/lage-tilbudsdokument`, `/blogg/folle-opp-tilbud`.
- Main-content external / app / download destinations: https://app.jobbleder.no.

### `/blogg/innhold-i-faktura`

- Type / intent: Understand invoice fields.
- Title: Hva skal en faktura inneholde? En enkel oversikt | Jobbleder
- Description: Se hva en faktura bør inneholde, og hvordan du lager en tydelig og profesjonell faktura for kunder i Norge.
- H1 (1): Hva skal en faktura inneholde?
- Canonical: https://www.jobbleder.no/blogg/innhold-i-faktura
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite, Article.
- Main-content internal destinations: `/`, `/blogg`, `/faktura-krav`, `/fakturaprogram-gratis`, `/lage-faktura`, `/faktura-eksempel`, `/timeliste-mal`, `/tilbud-mal`, `/kontrakt-mal`, `/blogg/gratis-fakturaprogram-handverkere`, `/blogg/hvordan-lage-gratis-faktura`, `/blogg/faktura-eksempel-sma-bedrifter`.
- Main-content external / app / download destinations: https://app.jobbleder.no.

### `/blogg/effektiv-timeliste`

- Type / intent: Efficient work registration.
- Title: Hvordan føre timelister effektivt | Jobbleder
- Description: Lær hvordan du fører timelister effektivt og hva en god timeliste bør inneholde for bedre oversikt og dokumentasjon.
- H1 (1): Hvordan føre timelister effektivt – spesielt for selvstendig næringsdrivende
- Canonical: https://www.jobbleder.no/blogg/effektiv-timeliste
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite, Article.
- Main-content internal destinations: `/`, `/blogg`, `/timeliste-uke`, `/timeliste-mal#registrer-pa-mobil`, `/instruksjoner#importer-arbeidsokter-til-timeliste`, `/blogg/timeliste-og-faktura`, `/blogg/timeliste-for-handverkere`, `/timeliste-mal`, `/timeliste-mal-pdf`, `/tilbud-mal`, `/fakturaprogram-gratis`, `/kontrakt-mal`, `/blogg/gratis-timeliste-mal`.
- Main-content external / app / download destinations: none; product discovery occurs through internal links.

### `/blogg/hvordan-lage-gratis-faktura`

- Type / intent: Beginner invoice creation.
- Title: Hvordan lage en faktura gratis på nett | Jobbleder
- Description: Slik lager du en profesjonell faktura gratis på nett. Enkel oversikt over hva en faktura bør inneholde og hvordan du kommer i gang.
- H1 (1): Hvordan lage en faktura gratis på nett?
- Canonical: https://www.jobbleder.no/blogg/hvordan-lage-gratis-faktura
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite, Article.
- Main-content internal destinations: `/`, `/blogg`, `/lage-faktura`, `/fakturaprogram-gratis`, `/faktura-eksempel`, `/timeliste-mal`, `/tilbud-mal`, `/kontrakt-mal`, `/blogg/gratis-fakturaprogram-handverkere`, `/blogg/innhold-i-faktura`, `/blogg/faktura-eksempel-sma-bedrifter`.
- Main-content external / app / download destinations: https://app.jobbleder.no.

### `/blogg/forskjell-faktura-tilbud-timeliste`

- Type / intent: Distinguish document types.
- Title: Forskjellen på faktura, tilbud og timeliste | Jobbleder
- Description: Her er en enkel forklaring på forskjellen mellom faktura, tilbud og timeliste – og når du bør bruke dem.
- H1 (1): Faktura, timeliste og tilbud – hva er forskjellen og når bruker du dem?
- Canonical: https://www.jobbleder.no/blogg/forskjell-faktura-tilbud-timeliste
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite, Article.
- Main-content internal destinations: `/`, `/blogg`, `/instruksjoner`, `/timeliste-mal`, `/tilbud-mal`, `/fakturaprogram-gratis`, `/kontrakt-mal`, `/blogg/fra-tilbud-til-kontrakt-og-faktura`, `/blogg/gratis-timeliste-mal`, `/blogg/gratis-fakturaprogram-handverkere`.
- Main-content external / app / download destinations: https://app.jobbleder.no.

### `/blogg/timeliste-for-handverkere`

- Type / intent: Practical trades-work recording.
- Title: Timeliste for håndverkere – hvorfor gode rutiner er viktige | Jobbleder
- Description: Slik bruker håndverkere timelister for bedre oversikt, dokumentasjon og enklere arbeidshverdag.
- H1 (1): Timeliste for håndverkere – hvorfor gode rutiner sparer deg for tid
- Canonical: https://www.jobbleder.no/blogg/timeliste-for-handverkere
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite, Article.
- Main-content internal destinations: `/`, `/blogg`, `/instruksjoner#legg-til-en-arbeidsokt`, `/timeliste-prosjekt`, `/timeliste-ansatt`, `/blogg/timeliste-og-faktura`, `/timeliste-mal#registrer-pa-mobil`, `/timeliste-mal`, `/timeliste-mal-pdf`, `/timeliste-uke`, `/tilbud-mal`, `/fakturaprogram-gratis`, `/kontrakt-mal`, `/blogg/gratis-timeliste-mal`, `/blogg/effektiv-timeliste`.
- Main-content external / app / download destinations: none; product discovery occurs through internal links.

### `/blogg/timeliste-og-faktura`

- Type / intent: Reviewed timesheet to invoice.
- Title: Timeliste og faktura – slik henger de sammen | Jobbleder
- Description: Slik bruker du timeliste som grunnlag for tydeligere og enklere fakturaarbeid.
- H1 (1): Timeliste og faktura – hvordan henger de sammen?
- Canonical: https://www.jobbleder.no/blogg/timeliste-og-faktura
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite, Article.
- Main-content internal destinations: `/`, `/blogg`, `/instruksjoner#timeliste-til-faktura`, `/timeliste-prosjekt`, `/timeliste-mal`, `/fakturaprogram-gratis`, `/timeliste-mal-pdf`, `/timeliste-uke`, `/tilbud-mal`, `/kontrakt-mal`, `/blogg/gratis-timeliste-mal`, `/blogg/effektiv-timeliste`, `/blogg/timeliste-for-handverkere`.
- Main-content external / app / download destinations: none; product discovery occurs through internal links.

### `/blogg/faktura-eksempel-sma-bedrifter`

- Type / intent: Worked small-business invoice.
- Title: Faktura eksempel for små bedrifter | Jobbleder
- Description: Se hva et godt faktura eksempel bør vise, og hvordan små bedrifter kan lage tydelige fakturaer.
- H1 (1): Faktura eksempel for små bedrifter – hva bør det vise?
- Canonical: https://www.jobbleder.no/blogg/faktura-eksempel-sma-bedrifter
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite, Article.
- Main-content internal destinations: `/`, `/blogg`, `/faktura-eksempel`, `/fakturaprogram-gratis`, `/lage-faktura`, `/timeliste-mal`, `/tilbud-mal`, `/kontrakt-mal`, `/blogg/gratis-fakturaprogram-handverkere`, `/blogg/innhold-i-faktura`, `/blogg/hvordan-lage-gratis-faktura`.
- Main-content external / app / download destinations: https://app.jobbleder.no.

### `/blogg/nar-sende-faktura`

- Type / intent: Timing and practical invoicing habits.
- Title: Når bør du sende faktura for raskere betaling? | Jobbleder
- Description: Lær hvorfor timing er viktig når du sender faktura, og hvordan gode rutiner kan gi raskere betaling.
- H1 (1): Når bør du sende faktura for å få raskere betaling?
- Canonical: https://www.jobbleder.no/blogg/nar-sende-faktura
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite, Article.
- Main-content internal destinations: `/`, `/blogg`, `/lage-faktura`, `/fakturaprogram-gratis`, `/faktura-eksempel`, `/timeliste-mal`, `/tilbud-mal`, `/kontrakt-mal`, `/blogg/gratis-fakturaprogram-handverkere`, `/blogg/innhold-i-faktura`, `/blogg/hvordan-lage-gratis-faktura`.
- Main-content external / app / download destinations: https://app.jobbleder.no.

### `/blogg/fra-tilbud-til-kontrakt-og-faktura`

- Type / intent: Offer/contract/invoice workflow.
- Title: Fra tilbud til kontrakt og faktura – slik fungerer det | Jobbleder
- Description: Se hvordan hele prosessen fungerer fra første tilbud til betaling.
- H1 (1): Fra tilbud til kontrakt og faktura – slik fungerer det
- Canonical: https://www.jobbleder.no/blogg/fra-tilbud-til-kontrakt-og-faktura
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite, Article.
- Main-content internal destinations: `/`, `/blogg`, `/timeliste-mal`, `/tilbud-mal`, `/fakturaprogram-gratis`, `/kontrakt-mal`, `/blogg/forskjell-faktura-tilbud-timeliste`, `/blogg/gratis-timeliste-mal`, `/blogg/gratis-fakturaprogram-handverkere`.
- Main-content external / app / download destinations: none; product discovery occurs through internal links.

### `/timeliste-mal`

- Type / intent: Timesheet product and template discovery.
- Title: Timeliste mal – gratis og enkel timeliste (PDF / nett) | Jobbleder
- Description: Gratis timeliste mal for håndverkere og små bedrifter. Lag timeliste raskt, last ned som PDF og få full oversikt.
- H1 (1): Timeliste mal (gratis).Fra arbeidstimer til ferdig faktura.
- Canonical: https://www.jobbleder.no/timeliste-mal
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite, FAQPage.
- Main-content internal destinations: `/`, `#pdf-maler`, `/downloads/timeliste-mal-jobbleder.pdf`, `/instruksjoner#legg-til-en-arbeidsokt`, `/instruksjoner#arbeidsokter`, `/fakturaprogram-gratis`, `/timeliste-mal`, `/timeliste-mal-pdf`, `/timeliste-uke`, `/timeliste-ansatt`, `/timeliste-prosjekt`, `/instruksjoner`, `/tilbud-mal`, `/lage-tilbud`, `/lage-faktura`, `/kontrakt-mal`, `/kontrakt-handverker`.
- Main-content external / app / download destinations: https://app.jobbleder.no/, https://laskowskicreative.no/api/jobbleder/user/documents/oneweek-timelist.

### `/tilbud-mal`

- Type / intent: Offer product and conversion.
- Title: Tilbud mal – skriv et profesjonelt tilbud (gratis) | Jobbleder
- Description: Tilbud mal for små bedrifter og håndverkere. Lag tilbud raskt og konverter til faktura når kunden sier ja.
- H1 (1): Lag tilbud som blir til mer.
- Canonical: https://www.jobbleder.no/tilbud-mal
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite, FAQPage.
- Main-content internal destinations: `/`, `#tilbudseksempel`, `/instruksjoner#opprett`, `/fakturaprogram-gratis`, `/kontrakt-mal`, `/tilbud-mal`, `/lage-tilbud`, `/tilbud-eksempel`, `/hvordan-folge-opp-tilbud`, `/timeliste-mal`, `/timeliste-mal-pdf`, `/lage-faktura`, `/kontrakt-handverker`, `/instruksjoner#dokumenter`.
- Main-content external / app / download destinations: https://app.jobbleder.no/.

### `/kontrakt-mal`

- Type / intent: Contract product and conversion.
- Title: Kontrakt mal – enkel kontrakt for håndverkere (gratis) | Jobbleder
- Description: Gratis kontrakt mal for håndverkere og små bedrifter. Lag kontrakt raskt og sikre avtalen med kunden.
- H1 (1): Lag kontrakter som passer jobben.
- Canonical: https://www.jobbleder.no/kontrakt-mal
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite, FAQPage.
- Main-content internal destinations: `/`, `#kontraktseksempel`, `/instruksjoner#opprett`, `/tilbud-mal`, `/fakturaprogram-gratis`, `/kontrakt-mal`, `/kontrakt-handverker`, `/kontrakt-eksempel`, `/hva-skal-en-kontrakt-inneholde`, `/timeliste-mal`, `/timeliste-mal-pdf`, `/lage-tilbud`, `/lage-faktura`, `/instruksjoner#dokumenter`.
- Main-content external / app / download destinations: https://app.jobbleder.no/.

### `/timeliste-prosjekt`

- Type / intent: Project timesheet as invoice basis.
- Title: Timeliste prosjekt – før timer per prosjekt og kunde | Jobbleder
- Description: Lag timeliste per prosjekt og få bedre oversikt over arbeidstid, kunder og oppdrag. Last ned som PDF.
- H1 (1): Timeliste prosjekt
- Canonical: https://www.jobbleder.no/timeliste-prosjekt
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite, FAQPage.
- Main-content internal destinations: `/`, `/timeliste-mal`, `/instruksjoner#timeliste-til-faktura`, `/fakturaprogram-gratis`, `/timeliste-mal-pdf`, `/timeliste-uke`, `/timeliste-ansatt`, `/timeliste-prosjekt`, `/tilbud-mal`, `/lage-tilbud`, `/lage-faktura`, `/kontrakt-mal`, `/kontrakt-handverker`.
- Main-content external / app / download destinations: https://app.jobbleder.no/.

### `/blogg/kategori/faktura`

- Type / intent: Invoice article discovery.
- Title: Faktura | Blogg | Jobbleder
- Description: Artikler og guider om faktura for brukere av Jobbleder.
- H1 (1): Faktura
- Canonical: https://www.jobbleder.no/blogg/kategori/faktura
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite.
- Main-content internal destinations: `/blogg`, `/blogg/kategori/timeliste`, `/blogg/kategori/faktura`, `/blogg/kategori/tilbud`, `/blogg/kategori/kontrakt`, `/blogg/kategori/oversikt`, `/blogg/nar-sende-faktura`, `/blogg/faktura-eksempel-sma-bedrifter`, `/blogg/hvordan-lage-gratis-faktura`, `/blogg/innhold-i-faktura`, `/blogg/gratis-fakturaprogram-handverkere`.
- Main-content external / app / download destinations: none; product discovery occurs through internal links.

### `/blogg/kategori/oversikt`

- Type / intent: Document overview article discovery.
- Title: Oversikt | Blogg | Jobbleder
- Description: Artikler og guider om oversikt for brukere av Jobbleder.
- H1 (1): Oversikt
- Canonical: https://www.jobbleder.no/blogg/kategori/oversikt
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite.
- Main-content internal destinations: `/blogg`, `/blogg/kategori/timeliste`, `/blogg/kategori/faktura`, `/blogg/kategori/tilbud`, `/blogg/kategori/kontrakt`, `/blogg/kategori/oversikt`, `/blogg/fra-tilbud-til-kontrakt-og-faktura`, `/blogg/forskjell-faktura-tilbud-timeliste`.
- Main-content external / app / download destinations: none; product discovery occurs through internal links.

### `/blogg`

- Type / intent: Article hub.
- Title: Blogg om faktura, tilbud, timelister og kontrakter | Jobbleder | Jobbleder
- Description: Artikler og guider om faktura, tilbud, timelister og kontrakter for håndverkere og små bedrifter i Norge.
- H1 (1): Blogg
- Canonical: https://www.jobbleder.no/blogg
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite.
- Main-content internal destinations: `/blogg`, `/blogg/kategori/timeliste`, `/blogg/kategori/faktura`, `/blogg/kategori/tilbud`, `/blogg/kategori/kontrakt`, `/blogg/kategori/oversikt`, `/blogg/tilbud-vs-kontrakt`, `/blogg/nar-trenger-du-kontrakt`, `/blogg/fra-tilbud-til-kontrakt-og-faktura`, `/blogg/tilbud-eller-pristilbud`, `/blogg/nar-sende-faktura`, `/blogg/faktura-eksempel-sma-bedrifter`, `/blogg/timeliste-og-faktura`, `/blogg/timeliste-for-handverkere`, `/blogg/gratis-timeliste-mal`, `/blogg/hvordan-lage-gratis-faktura`, `/blogg/lage-tilbudsdokument`, `/blogg/feil-med-tilbud`, `/blogg/effektiv-timeliste`, `/blogg/innhold-i-faktura`, `/blogg/folle-opp-tilbud`, `/blogg/gratis-fakturaprogram-handverkere`, `/blogg/forskjell-faktura-tilbud-timeliste`, `/blogg/lage-tilbud-byggebransjen`.
- Main-content external / app / download destinations: none; product discovery occurs through internal links.

### `/instruksjoner`

- Type / intent: Task instructions and direct anchors.
- Title: Instruksjoner for Jobbleder | Jobbleder
- Description: Lær hvordan du bruker Jobbleder til å opprette faktura, tilbud, timelister og kontrakter, registrere arbeidsøkter og holde oversikt over prosjekter, kunder og rapporter.
- H1 (1): Instruksjonerfor Jobbleder.
- Canonical: https://www.jobbleder.no/instruksjoner
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite.
- Main-content internal destinations: `#legg-til-en-arbeidsokt`, `#opprett-faktura`, `#opprett-tilbud`, `#opprett-kontrakt`, `#oversikt`, `#opprett`, `#dokumenter`, `#arbeidsokter`, `#prosjekter-kunder`, `#rapporter`, `#innstillinger`, `#premium`, `#importer-arbeidsokter-til-timeliste`, `#timeliste-til-faktura`, `#tilbud-til-faktura`, `#lag-kontrakt-fra-tilbud`, `#kontrakt-til-faktura`, `#appens-hovedvisning`, `#hovedmenyoversikt`, `/fakturaprogram-gratis`, `#lag-faktura-fra-dokument`, `/timeliste-mal`, `#opprett-timeliste`, `/tilbud-mal`, `/kontrakt-mal`, `#opprett-kreditnota`, `#gjenta-et-dokument`, `#dokumentoversikt`, `#rette-en-faktura`, `#hvordan-arbeidsokter-fungerer`, `#hvordan-prosjekter-fungerer`, `#opprett-et-prosjekt`, `#hvordan-kunder-fungerer`, `#opprett-en-kunde`, `#hvordan-rapporter-fungerer`, `#maanedlig-salg`, `#maanedlige-arbeidstimer`, `#hvordan-innstillinger-fungerer`, `#firma-og-fakturadetaljer`, `#standardverdier-for-dokumenter`, `#profil-og-grensesnitt`, `#premium-og-branding`, `#last-opp-logo`, `#kjop-premium`, `/timeliste-mal-pdf`, `/timeliste-uke`, `/timeliste-ansatt`, `/timeliste-prosjekt`, `/lage-faktura`, `/faktura-eksempel`, `/faktura-krav`, `/lage-tilbud`, `/tilbud-eksempel`, `/hvordan-folge-opp-tilbud`, `/kontrakt-handverker`, `/kontrakt-eksempel`, `/hva-skal-en-kontrakt-inneholde`, `/kontakt`.
- Main-content external / app / download destinations: https://app.jobbleder.no/, https://app.jobbleder.no.

### `/`

- Type / intent: Brand/product discovery.
- Title: Jobbleder – Faktura, kontrakt, timeliste og tilbud på minutter
- Description: Lag faktura, kontrakt, timeliste og tilbud enkelt i nettleseren. Jobbleder er laget for håndverkere og små bedrifter.
- H1 (1): Jobben din.Dokumentene på plass.
- Canonical: https://www.jobbleder.no/
- Index directives: robots meta absent; X-Robots-Tag absent; HTTP 200.
- Structured data: Organization, WebSite.
- Main-content internal destinations: `#produkter`, `/app-preview.png`, `#faktura`, `#timeliste`, `#tilbud`, `#kontrakt`, `/fakturaprogram-gratis`, `/faktura-eksempel`, `/timeliste-mal`, `/timeliste-mal-pdf`, `/tilbud-mal`, `/lage-tilbud`, `/kontrakt-mal`, `/hva-skal-en-kontrakt-inneholde`, `/instruksjoner#dokumenter`, `/instruksjoner`, `/lage-faktura`, `/faktura-krav`, `/timeliste-uke`, `/timeliste-ansatt`, `/timeliste-prosjekt`, `/tilbud-eksempel`, `/hvordan-folge-opp-tilbud`, `/kontrakt-handverker`, `/kontrakt-eksempel`, `/blogg`.
- Main-content external / app / download destinations: https://app.jobbleder.no/.

## Appendix B — Existing reusable media manifest inventory

Bytes are on-disk file sizes, not necessarily browser transfer bytes after responsive Next.js processing. Rows are unique optimized URLs; hero aliases to the same editor file are not duplicated. All source PNGs remain unchanged. Additional duplicate/source-only files are noted after the table.

| Manifest / key | Source PNG | Source dimensions / bytes | Existing optimized derivative | Derivative dimensions / bytes |
| --- | --- | --- | --- | --- |
| invoiceProductMedia/editor | `public/images/product/invoice/source/screenshot_fv_edit.png` | 1917×906 / 114542 | `public/images/product/invoice/optimized/jobbleder-invoice-editor-80c02f47c4d3.webp` | 1917×906 / 73136 |
| invoiceProductMedia/free | `public/images/product/invoice/source/fv_free_watermark.png` | 959×1251 / 127681 | `public/images/product/invoice/optimized/jobbleder-invoice-free-8239cf43dbea.webp` | 959×1251 / 52268 |
| invoiceProductMedia/premiumClear | `public/images/product/invoice/source/fv_premium_clear.png` | 959×1251 / 109632 | `public/images/product/invoice/optimized/jobbleder-invoice-premium-clear-c94ecd44cf6d.webp` | 959×1251 / 45982 |
| invoiceProductMedia/premiumLogo | `public/images/product/invoice/source/fv_premium_logo.png` | 947×1251 / 131557 | `public/images/product/invoice/optimized/jobbleder-invoice-premium-logo-fe289b390386.webp` | 947×1251 / 51534 |
| invoiceProductMedia/heroMobile | `public/images/product/invoice/source/screenshot_fv_edit.png` | 1917×906 / 114542 | `public/images/product/invoice/optimized/jobbleder-invoice-editor-mobile-customer-d8eee62a318a.webp` | 400×145 / 4148 |
| invoiceProductMedia/processCustomer | `public/images/product/invoice/source/screenshot_fv_edit.png` | 1917×906 / 114542 | `public/images/product/invoice/optimized/jobbleder-invoice-customer-a819f5c0ca04.webp` | 400×75 / 2366 |
| invoiceProductMedia/processLines | `public/images/product/invoice/source/screenshot_fv_edit.png` | 1917×906 / 114542 | `public/images/product/invoice/optimized/jobbleder-invoice-lines-e59165029d4b.webp` | 400×136 / 3900 |
| invoiceProductMedia/processTotals | `public/images/product/invoice/source/screenshot_fv_edit.png` | 1917×906 / 114542 | `public/images/product/invoice/optimized/jobbleder-invoice-totals-a06d77a998da.webp` | 320×145 / 4460 |
| timelistProductMedia/invoiceForm | `public/images/product/timeliste/source/new_invoice_form_4_different_entries.png` | 840×720 / 92374 | `public/images/product/timeliste/optimized/jobbleder-timelist-invoice-form-8831711a4a0c.webp` | 840×720 / 52880 |
| timelistProductMedia/invoiceFormMobile | `public/images/product/timeliste/source/new_invoice_form_4_different_entries.png` | 840×720 / 92374 | `public/images/product/timeliste/optimized/jobbleder-timelist-invoice-form-mobile-68ad22496f40.webp` | 668×480 / 29764 |
| timelistProductMedia/invoicePdf | `public/images/product/timeliste/source/exported_invoice_4_different_entries.png` | 508×720 / 58619 | `public/images/product/timeliste/optimized/jobbleder-timelist-invoice-pdf-f5e18354a415.webp` | 508×720 / 30270 |
| offerProductMedia/invoice | `public/images/product/tilbud/source/tilbud_to_invoice.png` | 1280×720 / 115837 | `public/images/product/tilbud/optimized/jobbleder-offer-invoice-825bce28603f.webp` | 1084×386 / 35104 |
| offerProductMedia/invoiceMobile | `public/images/product/tilbud/source/tilbud_to_invoice.png` | 1280×720 / 115837 | `public/images/product/tilbud/optimized/jobbleder-offer-invoice-mobile-dc98f21e88fc.webp` | 862×386 / 25696 |
| offerProductMedia/contractInvoice | `public/images/product/tilbud/source/invoice_from_contract.png` | 1280×720 / 115705 | `public/images/product/tilbud/optimized/jobbleder-offer-contract-invoice-7847d3b65141.webp` | 1084×386 / 35312 |
| offerProductMedia/contractInvoiceMobile | `public/images/product/tilbud/source/invoice_from_contract.png` | 1280×720 / 115705 | `public/images/product/tilbud/optimized/jobbleder-offer-contract-invoice-mobile-64fb6553081e.webp` | 862×386 / 25808 |
| instructionMobileMedia/mobileTimelistDocument | `public/images/product/mobile/source/timelist_invoice_regular_mobile_01.png` | 332×720 / 57939 | `public/images/product/mobile/optimized/timelist_invoice_regular_mobile_01-2091c06e2ae8.webp` | 332×720 / 35022 |
| instructionMobileMedia/mobileTimelistSummary | `public/images/product/mobile/source/timelist_invoice_regular_mobile_02.png` | 332×720 / 61657 | `public/images/product/mobile/optimized/timelist_invoice_regular_mobile_02-a77b7c05e04f.webp` | 332×720 / 38652 |
| instructionMobileMedia/mobileTimelistInvoice | `public/images/product/mobile/source/timelist_invoice_regular_mobile.png` | 332×720 / 65346 | `public/images/product/mobile/optimized/timelist_invoice_regular_mobile-aac888f9e45f.webp` | 332×720 / 45380 |
| instructionMobileMedia/mobileTimelistInvoiceExtra | `public/images/product/mobile/source/timelist_invoice_extra_mobile.png` | 332×720 / 63368 | `public/images/product/mobile/optimized/timelist_invoice_extra_mobile-89d3c1f3e42f.webp` | 332×720 / 42574 |
| instructionMobileMedia/mobileInvoiceSummary | `public/images/product/mobile/source/timelist_invoice_summary_mobile.png` | 332×720 / 69797 | `public/images/product/mobile/optimized/timelist_invoice_summary_mobile-f4b16dce374e.webp` | 332×720 / 40904 |
| instructionMobileMedia/mobileOfferInvoice | `public/images/product/mobile/source/invoice_from_offer_mobile.png` | 332×720 / 57596 | `public/images/product/mobile/optimized/invoice_from_offer_mobile-19b76863d679.webp` | 332×720 / 40668 |
| instructionMobileMedia/mobileContractInvoice | `public/images/product/mobile/source/invoice_from_contract_mobile.png` | 332×720 / 64078 | `public/images/product/mobile/optimized/invoice_from_contract_mobile-4059b61ae977.webp` | 332×720 / 44312 |
| instructionMobileMedia/mobileInvoiceCreate | `public/images/product/mobile/source/invoice_create_mobile.png` | 332×720 / 64721 | `public/images/product/mobile/optimized/invoice_create_mobile-26b02c459f30.webp` | 332×720 / 44822 |

Source-only and duplicate evidence (do not generate another copy just because it is listed):

- `public/images/product/invoice/source/fv_free_watermark.png`: 959×1251, 127681 bytes.
- `public/images/product/invoice/source/fv_premium_clear.png`: 959×1251, 109632 bytes.
- `public/images/product/invoice/source/fv_premium_logo.png`: 947×1251, 131557 bytes.
- `public/images/product/invoice/source/screenshot_fv_edit.png`: 1917×906, 114542 bytes.
- `public/images/product/kontrakt/source/invoice_from_contract.png`: 1280×720, 115705 bytes.
- `public/images/product/kreditnota/source/new_creditnota_form.png`: 1280×720, 86922 bytes.
- `public/images/product/mobile/source/invoice_create_mobile.png`: 332×720, 64721 bytes.
- `public/images/product/mobile/source/invoice_from_contract_mobile.png`: 332×720, 64078 bytes.
- `public/images/product/mobile/source/invoice_from_offer_mobile.png`: 332×720, 57596 bytes.
- `public/images/product/mobile/source/timelist_invoice_extra_mobile.png`: 332×720, 63368 bytes.
- `public/images/product/mobile/source/timelist_invoice_regular_mobile.png`: 332×720, 65346 bytes.
- `public/images/product/mobile/source/timelist_invoice_regular_mobile_01.png`: 332×720, 57939 bytes.
- `public/images/product/mobile/source/timelist_invoice_regular_mobile_02.png`: 332×720, 61657 bytes.
- `public/images/product/mobile/source/timelist_invoice_summary_mobile.png`: 332×720, 69797 bytes.
- `public/images/product/tilbud/source/invoice_from_contract.png`: 1280×720, 115705 bytes.
- `public/images/product/tilbud/source/tilbud_to_invoice.png`: 1280×720, 115837 bytes.
- `public/images/product/timeliste/source/exported_invoice_4_different_entries.png`: 508×720, 58619 bytes.
- `public/images/product/timeliste/source/new_invoice_form_4_different_entries.png`: 840×720, 92374 bytes.
- `public/images/product/timeliste/source/one_click_invoice_from_timelist.png`: 1280×694, 117420 bytes.
- `public/images/product/timeliste/source/timelist_invoice_extra_mobile.png`: 332×720, 63368 bytes.
- `public/images/product/timeliste/source/timelist_invoice_regular_mobile.png`: 332×720, 65346 bytes.
- `public/images/product/timeliste/source/timelist_invoice_summary_mobile.png`: 332×720, 69797 bytes.

Document identity matters: the invoice-110 branding samples and credit-note-28 form share one demo source case. Other mobile and timesheet-conversion examples may use other document numbers; label them as separate examples unless a coherent sequence has been verified.

## Appendix C — Fresh production Lighthouse laboratory results

Target: `https://www.jobbleder.no/fakturaprogram-gratis`. Lighthouse 13.6.0; headless installed Chrome; one default mobile run and one desktop-config run, sequential, with simulated throttling. The broader browser audit had finished before these measurements. No application change was made between profiles.

| Profile | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT | Total transfer |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| mobile | 100 | 100 | 100 | 100 | 1.70 s | 0 | 0 ms | 271365 B |
| desktop | 100 | 100 | 100 | 100 | 0.48 s | 0 | 0 ms | 400015 B |

No Lighthouse run warning or runtime failure was recorded. These scores apply to this page/profile/run, not the complete ecosystem or authenticated application.

- mobile: 2026-11-19T17:54:40.789Z; image transfer 67649 B across 5 image requests; script transfer 153154 B. Estimated unused JavaScript: 0 B.
- desktop: 2026-11-19T17:54:51.179Z; image transfer 136653 B across 5 image requests; script transfer 173086 B. Estimated unused JavaScript: 21127 B.

Lighthouse measures the load window, not the sum of all lazy images after scrolling. The browser audit separately scrolled/decoded visible figures. Desktop reported an approximately 21 KiB unused-JavaScript opportunity; profile before changing framework/runtime behavior. No performance-related code change is justified by that diagnostic alone.

## Appendix D — Evidence artifacts and final preservation check

Artifacts folder: `C:\Users\ddlas\.codex\visualizations\2026\11\18\01a1eebb-5858-7be1-82b1-491fd2f27970/phase6a/`. Main files: `source.json`, `preservation-before.json`, `browser.json`, `accessibility.json`, `extra.json`, `lighthouse-summary.json`, `lighthouse-mobile.json/html`, `lighthouse-desktop.json/html`.

Representative production captures:

- `production-invoice-full-375.png` and `production-invoice-full-1440.png`: complete product page.
- `production-_faktura-krav-375.png` / `production-_faktura-krav-1440.png`: sampled legacy guide, light mobile / dark desktop.
- `production-_faktura-eksempel-375.png` / `production-_faktura-eksempel-1440.png`: example-page opening.
- `production-_blogg_faktura-eksempel-sma-bedrifter-375.png` / `production-_blogg_faktura-eksempel-sma-bedrifter-1440.png`: article opening.
- Matching local captures and remaining representative routes are retained alongside these files.

Final SHA-256 comparison: all 304 pre-existing tracked files unchanged. HEAD unchanged at `81cbf9e63f6da8531057d361e960e68a8567c09a`. The only repository addition is `docs/phase-6a-faktura-ecosystem-audit.md`. No code/content/metadata/image changes, commit, push or deployment.

The audit is complete. Prioritize the existing requirements/example content and workflow outline; preserve the working product core and obtain owner confirmation before extending sensitive invoice lifecycle claims.

**READY FOR OWNER REVIEW**
