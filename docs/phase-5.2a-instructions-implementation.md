# Phase 5.2A — Instructions hub and document workflows

19 November 2026, Europe/Berlin. **IMPLEMENTED LOCALLY; AWAITING VISUAL APPROVAL.** No commit, push or deployment.

Preview: [http://127.0.0.1:3026/instruksjoner](http://127.0.0.1:3026/instruksjoner).

## 1. Implementation and exact scope

Read the Phase 5.1 audit and used its core-workflow roadmap. The hub is modernized as one existing route, with all **29 instruction cards and eight original section anchors preserved**. Only **ten cards** receive a full step/content/media refresh; three others receive small confirmed label corrections. The other **sixteen instruction bodies retain their existing steps**. This does not attempt a full rewrite or product validation of all 29 tutorials.

Fully refreshed existing card keys and grouped step counts:

| Existing key / direct link | Grouped steps | Changes |
|---|---|---|
| `opprett-faktura` — [preview](http://127.0.0.1:3026/instruksjoner#opprett-faktura) | 3 | Velg kunde, beskriv arbeidet og lag en faktura du kan laste ned som PDF. |
| `opprett-timeliste` — [preview](http://127.0.0.1:3026/instruksjoner#opprett-timeliste) | 5 | Opprett timelisten selv, eller bruk registreringer du allerede har lagret. Timer og kilometer følger arbeidernavnet du skriver inn. |
| `opprett-tilbud` — [preview](http://127.0.0.1:3026/instruksjoner#opprett-tilbud) | 3 | Lag et tydelig prisforslag med kunde, arbeidsbeskrivelse, pris og gyldighet. Last ned PDF og del den med kunden. |
| `opprett-kontrakt` — [preview](http://127.0.0.1:3026/instruksjoner#opprett-kontrakt) | 5 | Opprett kontrakten selv, velg pris og betalingsvilkår, og tilpass innholdet før du lager PDF. |
| `dokumentoversikt` — [preview](http://127.0.0.1:3026/instruksjoner#dokumentoversikt) | 3 | Finn lagrede dokumenter, åpne forhåndsvisningen og velg neste handling. |
| `lag-faktura-fra-dokument` — [preview](http://127.0.0.1:3026/instruksjoner#lag-faktura-fra-dokument) | 9 | Bruk en timeliste, et tilbud eller en kontrakt som grunnlag. Kontroller den nye fakturaen før du genererer PDF. |
| `lag-kontrakt-fra-tilbud` — [preview](http://127.0.0.1:3026/instruksjoner#lag-kontrakt-fra-tilbud) | 4 | Ta tilbudets opplysninger videre til en egen kontrakt. Kontrakten kan deretter redigeres selvstendig. |
| `hvordan-arbeidsokter-fungerer` — [preview](http://127.0.0.1:3026/instruksjoner#hvordan-arbeidsokter-fungerer) | 3 | Lagre arbeidsdagene fortløpende, og bruk dem som utgangspunkt for timeliste når du er klar. |
| `legg-til-en-arbeidsokt` — [preview](http://127.0.0.1:3026/instruksjoner#legg-til-en-arbeidsokt) | 4 | Registrer dato, arbeidsbeskrivelse, tider og pause. Marker ekstraarbeid og ta med kilometer ved behov. |
| `importer-arbeidsokter-til-timeliste` — [preview](http://127.0.0.1:3026/instruksjoner#importer-arbeidsokter-til-timeliste) | 3 | Velg lagrede registreringer og gå videre til timelisteopprettingen. Kontroller radene og arbeidernavnet før du lagrer. |

The selected instructions previously contained 58 steps; they now have **42 clearly titled step groups**. The remaining existing 85 steps are retained, for 127 rendered numbered steps overall. Grouping is deliberate; the audit's historical 143 count is not misrepresented as the new rendered count. Optional customer/KM/contract-text choices are distinguished, and summaries/prerequisites avoid inventing mandatory validation behavior.

Small corrections only:

- `hovedmenyoversikt`: visible Registreringer and copying terminology replace Arbeidsøkter/gjenta in menu guidance.
- `appens-hovedvisning`: description uses registreringer.
- `gjenta-et-dokument`: title becomes Kopier et dokument; button becomes Opprett kopi; summary no longer promises automatic number assignment. Its existing slug remains.

The canonical/title/description, SEO helper, sitemap/robots, homepage, four product pages, SEO renderer, blog content and authentication/backend are unchanged. **/lage-faktura is outside this approved phase**, so its known light-mode H1 issue remains recorded for a later scope. Other Phase 5.1 findings in unselected settings/report/Premium/credit-note articles are also not claimed as resolved.

## 2. Hub and navigation UX

- Uses the already-published SiteHeader/SiteFooter, SectionContainer, ProductMedia, ResourceLink, ApplicationCTA and registration guidance. No shared component/CSS is edited.
- Hero gives four common starting tasks. Category navigation follows immediately; five distinct workflow links lead to the relevant instruction/branch.
- All 29 cards use native details/summary, remain server-rendered and open with Enter/Space. No search system, tabs, modal image viewer, new library or document-route duplication is added.
- Every original item slug becomes a real card ID and permalink. A small isolated client helper reveals an incoming target's disclosure and focuses the summary/branch heading. It also handles same-page links and history/hash changes. Native fragment anchors avoid unnecessary router navigation within the page.
- Original anchors remain: #oversikt, #opprett, #dokumenter, **#arbeidsokter**, #prosjekter-kunder, #rapporter, #innstillinger, #premium. The visible label for #arbeidsokter is now Registreringer.
- Three additional branch anchors inside the existing invoice-conversion card: #timeliste-til-faktura, #tilbud-til-faktura, #kontrakt-til-faktura.
- 100px anchor offsets protect targets from the sticky header. Focus follows a summary or heading rather than outlining an entire multi-screen procedure. Visual counters are decorative; ordered lists carry step semantics.
- Relevant guide/product links are near the steps. The resource directory preserves all 13 existing hub SEO links and adds the four existing Kontrakt destinations to the hub's topic coverage; generic app links retain honest login/Create account guidance.
- Both OS color preferences intentionally use the same explicit light product palette, consistent with the published product pages. The dark final CTA remains readable. This is not an unimplemented promise of a separate dark palette.

## 3. Document workflow and product accuracy

| Workflow | Starting action and result | Media / boundaries |
|---|---|---|
| Registreringer → Timeliste | Open Registreringer, select records, Importer til timeliste; review rows, project, Arbeider and optional customer; Lagre/Generer. | Existing selected-row capture plus newly optimized imported form. Precisely states two imports and three total rows; no assertion about automatic deletion/cleanup timing. |
| Timeliste → Faktura | Select timelist in Dokumenter, Opprett faktura; review four separate categories/rates/quantities and create PDF. | Timeliste264→Invoice111 source, form and PDF. Ordinary/Extra hours and KM remain distinct and associated with the entered worker name; no employee accounts/payroll/automatic overtime. |
| Tilbud → Faktura | Select offer, Opprett faktura; review copied information and source before generating. | Tilbud29→Invoice111 existing target form. Manual review/download/distribution, not automatic sending. |
| Tilbud → Kontrakt | Select offer, Opprett kontrakt; review and independently edit the contract, save/generate. | Original and edited Contract11 states reused. Manual signing only; no electronic signature or customer-approval portal. |
| Kontrakt → Faktura | Select saved contract, Opprett faktura; review source/lines/amounts before generating. | Existing Invoice112 target. Missing source-panel screenshot is described in text and recorded below; full 12000 net example is not a calculated 25% installment. |

All these creation/PDF/conversion functions are described as Free. Free PDFs contain Jobbleder branding; Premium is a PDF-branding choice, not a conversion gate. Invoice distribution is manual. Contract payment terms are configured by the user, not an automatic invoice-generation schedule. The earlier offer-priced contract PDF is explicitly distinguished from the hourly creation and edited payment-plan configurations. No pricing, legal-compliance guarantee, backend or automated sending feature is added.

## 4. Media reuse and optimization

**25 figures**, **24 distinct original screenshot/document files**, **24 reused WebP variants** and **nine newly generated lossless derivatives**. The manifest has 33 possible desktop/mobile/detail assets. Source PNGs and pre-existing derivatives are unchanged.

The new derivatives total **296,030 bytes (289.1 KiB)**, from eight existing PNG originals. Losslessness was verified for all nine by comparing decoded pixels to the exact original/crop; dimensions and source hashes are recorded in `content/instructionMedia.json`. `scripts/prepare-instruction-media.mjs` is scoped to the new instruction derivative directory and never overwrites source files or other product manifests. No dependency was installed.

New derivative report; crop coordinates are source pixels (left, top, width, height):

| Asset key | Exact source / original dimensions and bytes | Exact derivative | Derivative dimensions / bytes | Crop |
|---|---|---|---|---|
| `registrationForm` | `public/images/product/timeliste/source/work_entries_add_new_position_mark_as_extra.png`; 1280×720; 123857 bytes | `public/images/product/instructions/optimized/jobbleder-instructions-registration-form-4c4d4c2e2ae2.webp` | 1070×306; 22916 bytes | (200, 176, 1070, 306) |
| `registrationExtra` | `public/images/product/timeliste/source/work_entries_add_new_position_mark_as_extra.png`; 1280×720; 123857 bytes | `public/images/product/instructions/optimized/jobbleder-instructions-registration-extra-63ebddd47c98.webp` | 520×124; 5922 bytes | (738, 352, 520, 124) |
| `registrationsSaved` | `public/images/product/timeliste/source/work_entries_panel_with_2_entries.png`; 1280×720; 100339 bytes | `public/images/product/instructions/optimized/jobbleder-instructions-registrations-saved-1ef20a66e195.webp` | 1070×366; 31204 bytes | (200, 64, 1070, 366) |
| `timelistSetup` | `public/images/product/timeliste/source/new_timelist_wizard.png`; 1280×720; 126313 bytes | `public/images/product/instructions/optimized/jobbleder-instructions-timelist-setup-8e71ebb7456f.webp` | 1070×529; 48448 bytes | (200, 76, 1070, 529) |
| `timelistCustomer` | `public/images/product/timeliste/source/new_timelist_wizard_add_client.png`; 1280×720; 130853 bytes | `public/images/product/instructions/optimized/jobbleder-instructions-timelist-customer-518f740d075e.webp` | 812×130; 12490 bytes | (210, 202, 812, 130) |
| `timelistImport` | `public/images/product/timeliste/source/new_timelist_wizard_with_3_entries_imported_from_work_entires_panel.png`; 714×720; 90399 bytes | `public/images/product/instructions/optimized/jobbleder-instructions-timelist-import-345cd94ba109.webp` | 714×720; 52728 bytes | Full original |
| `timelistSettings` | `public/images/product/timeliste/source/timelist_settings_add_km_row.png`; 1280×720; 164318 bytes | `public/images/product/instructions/optimized/jobbleder-instructions-timelist-settings-c8c96fdde783.webp` | 850×377; 25660 bytes | (410, 192, 850, 377) |
| `offerForm` | `public/images/product/tilbud/source/new_offer_form.png`; 1280×720; 112403 bytes | `public/images/product/instructions/optimized/jobbleder-instructions-offer-form-107c14b7f6a7.webp` | 1084×450; 43522 bytes | (184, 56, 1084, 450) |
| `contractForm` | `public/images/product/kontrakt/source/new_contract_form_time.png`; 840×720; 90346 bytes | `public/images/product/instructions/optimized/jobbleder-instructions-contract-form-de70574904f4.webp` | 840×720; 53140 bytes | Full original |

Reused optimized assets (existing bytes/files preserved):

| Key | Existing exact WebP path | Dimensions / bytes | Existing source |
|---|---|---|---|
| `invoiceForm` | `public/images/product/invoice/optimized/jobbleder-invoice-editor-80c02f47c4d3.webp` | 1917×906; 73136 bytes | `public/images/product/invoice/source/screenshot_fv_edit.png` |
| `invoiceCustomer` | `public/images/product/invoice/optimized/jobbleder-invoice-editor-mobile-customer-d8eee62a318a.webp` | 400×145; 4148 bytes | `public/images/product/invoice/source/screenshot_fv_edit.png` |
| `invoicePdf` | `public/images/product/invoice/optimized/jobbleder-invoice-free-8239cf43dbea.webp` | 959×1251; 52268 bytes | `public/images/product/invoice/source/fv_free_watermark.png` |
| `registrations` | `public/images/product/timeliste/optimized/jobbleder-timelist-registrations-b7636e83c465.webp` | 1070×370; 35438 bytes | `public/images/product/timeliste/source/work_entries_panel_with_2_entries_marked.png` |
| `registrationsMobile` | `public/images/product/timeliste/optimized/jobbleder-timelist-registrations-mobile-1c7e61037ffa.webp` | 590×166; 11708 bytes | `public/images/product/timeliste/source/work_entries_panel_with_2_entries_marked.png` |
| `timelistPdf` | `public/images/product/timeliste/optimized/jobbleder-timelist-timelist-pdf-2ac9500c19b9.webp` | 508×720; 22154 bytes | `public/images/product/timeliste/source/exported_timelist_4_different_entries.png` |
| `timelistDocuments` | `public/images/product/timeliste/optimized/jobbleder-timelist-hero-6426b7a8e7d6.webp` | 624×646; 46052 bytes | `public/images/product/timeliste/source/timelist_4_different_entries_in_documents_menu.png` |
| `timelistInvoice` | `public/images/product/timeliste/optimized/jobbleder-timelist-invoice-form-8831711a4a0c.webp` | 840×720; 52880 bytes | `public/images/product/timeliste/source/new_invoice_form_4_different_entries.png` |
| `timelistInvoiceMobile` | `public/images/product/timeliste/optimized/jobbleder-timelist-invoice-form-mobile-68ad22496f40.webp` | 668×480; 29764 bytes | `public/images/product/timeliste/source/new_invoice_form_4_different_entries.png` |
| `timelistInvoicePdf` | `public/images/product/timeliste/optimized/jobbleder-timelist-invoice-pdf-f5e18354a415.webp` | 508×720; 30270 bytes | `public/images/product/timeliste/source/exported_invoice_4_different_entries.png` |
| `offerEditorMobile` | `public/images/product/tilbud/optimized/jobbleder-offer-editor-mobile-c86e5ebb7582.webp` | 842×140; 10696 bytes | `public/images/product/tilbud/source/new_offer_form.png` |
| `offerDocuments` | `public/images/product/tilbud/optimized/jobbleder-offer-hero-3c424f34ca1e.webp` | 1090×650; 70056 bytes | `public/images/product/tilbud/source/offer_document_preview_in_documents_menu.png` |
| `offerInvoice` | `public/images/product/tilbud/optimized/jobbleder-offer-invoice-825bce28603f.webp` | 1084×386; 35104 bytes | `public/images/product/tilbud/source/tilbud_to_invoice.png` |
| `offerInvoiceMobile` | `public/images/product/tilbud/optimized/jobbleder-offer-invoice-mobile-dc98f21e88fc.webp` | 862×386; 25696 bytes | `public/images/product/tilbud/source/tilbud_to_invoice.png` |
| `offerPdf` | `public/images/product/tilbud/optimized/jobbleder-offer-pdf-085c0b3a1244.webp` | 506×720; 20340 bytes | `public/images/product/tilbud/source/exported_tilbud_A4.png` |
| `offerContract` | `public/images/product/tilbud/optimized/jobbleder-offer-contract-793f5eed04dc.webp` | 834×720; 56266 bytes | `public/images/product/tilbud/source/tilbud_to_contract.png` |
| `offerContractMobile` | `public/images/product/tilbud/optimized/jobbleder-offer-contract-mobile-66905c4b86f7.webp` | 664×426; 30226 bytes | `public/images/product/tilbud/source/tilbud_to_contract.png` |
| `editedContract` | `public/images/product/tilbud/optimized/jobbleder-offer-edited-contract-98807c86e360.webp` | 560×442; 26892 bytes | `public/images/product/tilbud/source/contract_from_offer_edited.png` |
| `contractInvoice` | `public/images/product/tilbud/optimized/jobbleder-offer-contract-invoice-7847d3b65141.webp` | 1084×386; 35312 bytes | `public/images/product/tilbud/source/invoice_from_contract.png` |
| `contractInvoiceMobile` | `public/images/product/tilbud/optimized/jobbleder-offer-contract-invoice-mobile-64fb6553081e.webp` | 862×386; 25808 bytes | `public/images/product/tilbud/source/invoice_from_contract.png` |
| `contractPdf` | `public/images/product/kontrakt/optimized/jobbleder-home-contract-document-249c17de7105.webp` | 508×720; 37384 bytes | `public/images/product/kontrakt/source/exported_contract_preview.png` |
| `contractPricing` | `public/images/product/kontrakt/optimized/jobbleder-home-contract-192687f50086.webp` | 638×141; 2452 bytes | `public/images/product/kontrakt/source/payment_base.png` |
| `contractPricingMobile` | `public/images/product/kontrakt/optimized/jobbleder-home-contract-mobile-6413439017d3.webp` | 340×141; 1910 bytes | `public/images/product/kontrakt/source/payment_base.png` |
| `contractClauses` | `public/images/product/kontrakt/optimized/jobbleder-contract-clauses-e1b447e61a33.webp` | 538×278; 23562 bytes | `public/images/product/kontrakt/source/new_contract_form_with_advance_percentage.png` |

All 24 original/full-size paths reused:

- `public/images/product/invoice/source/screenshot_fv_edit.png`
- `public/images/product/invoice/source/fv_free_watermark.png`
- `public/images/product/timeliste/source/work_entries_panel_with_2_entries_marked.png`
- `public/images/product/timeliste/source/exported_timelist_4_different_entries.png`
- `public/images/product/timeliste/source/timelist_4_different_entries_in_documents_menu.png`
- `public/images/product/timeliste/source/new_invoice_form_4_different_entries.png`
- `public/images/product/timeliste/source/exported_invoice_4_different_entries.png`
- `public/images/product/tilbud/source/new_offer_form.png`
- `public/images/product/tilbud/source/offer_document_preview_in_documents_menu.png`
- `public/images/product/tilbud/source/tilbud_to_invoice.png`
- `public/images/product/tilbud/source/exported_tilbud_A4.png`
- `public/images/product/tilbud/source/tilbud_to_contract.png`
- `public/images/product/tilbud/source/contract_from_offer_edited.png`
- `public/images/product/tilbud/source/invoice_from_contract.png`
- `public/images/product/kontrakt/source/exported_contract_preview.png`
- `public/images/product/kontrakt/source/payment_base.png`
- `public/images/product/kontrakt/source/new_contract_form_with_advance_percentage.png`
- `public/images/product/timeliste/source/work_entries_add_new_position_mark_as_extra.png`
- `public/images/product/timeliste/source/work_entries_panel_with_2_entries.png`
- `public/images/product/timeliste/source/new_timelist_wizard.png`
- `public/images/product/timeliste/source/new_timelist_wizard_add_client.png`
- `public/images/product/timeliste/source/new_timelist_wizard_with_3_entries_imported_from_work_entires_panel.png`
- `public/images/product/timeliste/source/timelist_settings_add_km_row.png`
- `public/images/product/kontrakt/source/new_contract_form_time.png`

Originals are opened through standard same-tab links; no lightbox or synthetic/redrawn interface. Some sources remain pre-existing untracked local files. They were preserved and are available in the preview; a later release must explicitly include the runtime-required ones, without staging the entire source folders.

All media is lazy-loaded with intrinsic dimensions. The closed initial hub loaded **zero product images in all eight cases**. If every illustrated card is opened, the distinct displayed image bytes total 721442 at 375px and 915596 at 768/1280/1440px (file-byte totals, not a network-compression or field-performance claim). All desktop/mobile variants together total 1055552 bytes; users do not receive all variants by default. Dense raster text still benefits from full-size inspection; essential instructions/button names are also real HTML.

## 5. Validation results

| Command | Final result |
|---|---|
| npx.cmd tsc --noEmit --incremental false | PASS, exit 0; explicit final run after last application changes. |
| npm.cmd run lint | PASS, full ESLint, exit 0; no warnings/errors reported. |
| npm.cmd run build | PASS, exit 0; compilation/types and all 55 static pages. |
| git diff --check | PASS; only normal LF/CRLF notice. |

Build workers emit the existing two Node DEP0205 module.register() deprecation notices. They are not compilation failures. No failing application check was skipped.

Chrome headless, local **production build** at port 3026, DPR 1, height 900. Both OS color preferences and reduced motion were exercised. This is local lab/browser emulation, not production verification, physical touch hardware or Safari/Firefox/screen-reader certification.

| Width | Light | Dark | Reduced motion |
|---|---|---|---|
| 375 px | PASS | PASS | PASS: auto; normal preference: smooth |
| 768 px | PASS | PASS | PASS: auto; normal preference: smooth |
| 1280 px | PASS | PASS | PASS: auto; normal preference: smooth |
| 1440 px | PASS | PASS | PASS: auto; normal preference: smooth |

In every case:

- HTTP 200, exactly one H1; all 29 cards and the five workflows present; no heading-level jumps with content expanded.
- Enter/Space opening/closing and visible 3px focus checked on every instruction summary (232 panel cases); skip link and menu keyboard focus checked.
- All five workflow links activated (40 activations total), correct panel/branch revealed and target below the sticky header. Incoming contract, nested conversion and unchanged customer-card links checked at each width/preference (24 incoming anchor cases). A cross-guide link is also activated in each case.
- All 25 figures decode with nonempty alt, correct proportions or deliberate object-fit:contain document frame. Accessible full-image link names include visible “Åpne hele bildet” plus the meaningful image description. All fragment links resolve.
- No horizontal overflow, JavaScript page exception or observed unexpected CLS. Scoped observed CLS 0 in all cases; not a Lighthouse/field-performance score.
- axe WCAG A/AA/best-practice checks with **zero detected violations** in all eight expanded-page runs.

Additional executed checks: **60 actual Tab steps** with solid 3px focus; all **24 unique full-image links clicked** and originals decoded; all **57 unique manifest derivative/original URLs** returned 200 and matched local SHA-256 bytes; all **18 internal resource/contact destinations** returned 200. The sixteen unselected instruction step arrays matched the original content exactly. No authenticated document operation or external CTA account submission was performed; CTA hrefs remain the shared application URL.

### Accessibility follow-ups handled during implementation

The first expanded-page axe run found duplicate “next steps” landmark names. Labels now identify their particular instruction; subsequent complete runs report zero detected violations. Anchor handling was simplified to native internal links and synchronous reveal/focus; test helpers were corrected for native fragment navigation without a new HTTP response and for clicks under a sticky header. The complete layout/a11y matrix was rerun after application fixes; the final image-link supplement continued from the already-passed matrix rather than claiming the initial interrupted supplement passed.

axe retains manual-review entries for the shared decorative chevron, and at 375px two captions whose negative-margin media layout prevents automated background determination. Manual inspection/hit testing verified the invoice and document-overview captions are unobscured, below their images, with foreground rgb(71,85,105) on white: **7.58:1**. Viewport captures were visually inspected. These incomplete entries are distinguished from violations; screenshot-internal text is not certified by axe.

Visual evidence includes full-page hub and invoice-workflow captures at all four widths, plus viewport captures of creation/import/conversion links. Desktop1440 and mobile375 hub/workflow captures and the flagged mobile captions were inspected; no obvious clipping, overlapping text/icons or footer misalignment was found. Full-page sticky-header capture positioning is an artifact of the scrolled screenshot, so viewport captures are also supplied as evidence.

## 6. SEO and regression preservation

Rendered hub title, description, WWW self-canonical and parsed existing JSON-LD blocks match the pre-change local HTML exactly. Metadata source remains unchanged. No new FAQ/HowTo schema was invented; valid existing global structured data is preserved. The route and all previous section links remain valid. Sitemap/robots and all existing PDF endpoint implementations are byte-unchanged.

Before rebuilding, rendered baseline HTML was saved for homepage, Faktura, Timeliste, Tilbud and Kontrakt. Fresh browser comparisons at375/768/1280/1440 (**20 cases**) matched each page's **entire main, header, footer, title, description, canonical and parsed JSON-LD** exactly; no horizontal overflow found. These are exact DOM comparisons plus local smoke checks, not a new full visual audit of every product section under every theme. Shared product/header/footer source files are byte-unchanged.

The known local /api/handshake HTTP400/resource console message is still present; no page exception or other new failing browser response was observed. Analytics is untouched and no production analytics claim is made. No Lighthouse run was requested/performed for this local implementation.

## 7. Remaining gaps and limits

- Missing selected-contract document-actions screenshot: Kontrakt→Faktura entry is clear text; the authentic target image is shown. Do not substitute a timelist/offer panel for a selected contract.
- Company/billing settings: prerequisite is explained in text; no customer-selector screenshot is labelled company setup. Authentic screenshot remains a later gap.
- Existing source density means some mobile field fine print needs enlargement. Responsive details preserve the relevant content and captions explain what each crop omits; all four invoice categories remain present.
- Remaining sixteen article bodies and most settings/report/Premium/correction behavior are not modernized or newly verified. Existing required-field/correction/purchase assertions noted by Phase 5.1 still require later confirmation; there is no claim that all 29 guides are now fully validated.
- /lage-faktura's light-mode H1 contrast, the unrelated broken blog link and abbreviated blog articles are outside scope and unchanged. Published product micro-tutorial crop mismatch also remains outside this hub change.
- No new screenshots or videos were requested; no synthetic interface, product-source edit, app backend or authentication change. Optional lifecycle/independence videos remain later work.

## 8. Exact changed/generated files

Only one pre-existing tracked file modified; all other entries are new scoped files. The pre-existing audit/unrelated reports/screenshots remain unchanged and untracked.

- `app/instruksjoner/page.tsx`
- `components/instructions/InstructionAnchors.tsx`
- `components/instructions/InstructionsHub.tsx`
- `components/instructions/instructions.module.css`
- `content/instructionGuides.ts`
- `content/instructionMedia.json`
- `scripts/prepare-instruction-media.mjs`
- `docs/phase-5.2a-instructions-implementation.md`
- `public/images/product/instructions/optimized/jobbleder-instructions-registration-form-4c4d4c2e2ae2.webp`
- `public/images/product/instructions/optimized/jobbleder-instructions-registration-extra-63ebddd47c98.webp`
- `public/images/product/instructions/optimized/jobbleder-instructions-registrations-saved-1ef20a66e195.webp`
- `public/images/product/instructions/optimized/jobbleder-instructions-timelist-setup-8e71ebb7456f.webp`
- `public/images/product/instructions/optimized/jobbleder-instructions-timelist-customer-518f740d075e.webp`
- `public/images/product/instructions/optimized/jobbleder-instructions-timelist-import-345cd94ba109.webp`
- `public/images/product/instructions/optimized/jobbleder-instructions-timelist-settings-c8c96fdde783.webp`
- `public/images/product/instructions/optimized/jobbleder-instructions-offer-form-107c14b7f6a7.webp`
- `public/images/product/instructions/optimized/jobbleder-instructions-contract-form-de70574904f4.webp`

All 214 pre-existing files were hash-checked: only app/instruksjoner/page.tsx changed; the other 213 are identical, including all original images, product pages, shared components, old content data and Phase 5.1 audit. HEAD/index remain unchanged. The nine generated WebPs are the only new image files; the temporary superseded timelist crop was removed and is not a deliverable. No temporary QA screenshot or script was added to application source.

## 9. Preview and evidence

- [Instructions hub](http://127.0.0.1:3026/instruksjoner)
- [Registreringer → Timeliste](http://127.0.0.1:3026/instruksjoner#importer-arbeidsokter-til-timeliste)
- [Timeliste → Faktura](http://127.0.0.1:3026/instruksjoner#timeliste-til-faktura)
- [Tilbud → Faktura](http://127.0.0.1:3026/instruksjoner#tilbud-til-faktura)
- [Tilbud → Kontrakt](http://127.0.0.1:3026/instruksjoner#lag-kontrakt-fra-tilbud)
- [Kontrakt → Faktura](http://127.0.0.1:3026/instruksjoner#kontrakt-til-faktura)

QA artifacts outside the repository: `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase52a/` — baseline.json, before-*.html, browser-results.json, pixels.json, contrast.json, caption-review.json, hub-*.png, invoice-workflows-*.png and viewport-*.png. Executed scripts are phase52a-browser.cjs, phase52a-links.cjs, phase52a-contrast.cjs and phase52a-caption.cjs alongside that directory.

**Stop after local implementation and validation. Await visual approval before any commit, push or deployment.**
