# Phase 5.2B.1 — Mobile documentation audit & capture plan

19 November 2026, Europe/Berlin. **READ-ONLY AUDIT — AWAITING APPROVAL.** Only this report is created.

## 1. Executive summary

Jobbleder already supports phones, tablets, computers and touch devices as a responsive web application. Mobile support since v1.0 and complete mobile document workflows are **OWNER-CONFIRMED**. Missing phone screenshots are a documentation gap, not missing functionality. The owner's approximately 70% mobile / 30% desktop use is personal experience, not a platform statistic.

Reviewed the full Phase 5.1 audit and Phase 5.2A report, the current instruction implementation, shared media components and relevant sections of all five marketing pages. Reused saved visual observations instead of repeating the complete image audit. Phase 5.2A is a local implementation awaiting approval; this report does not claim it is deployed.

All **29 instructions and 143 original steps** are classified individually in the coverage appendix. Ten modernized instructions consolidate their original 58 steps into 42 groups. The remaining 85 steps give **127 currently rendered numbered steps**. Historical step numbers below are audit references, not the current displayed numbering.

Coverage totals: **30 A, 28 B, 63 C and 22 D**. One capture can support several steps and instructions.

Recommend **10 essential states**, **six recommended states** and **three optional states**. Eight essentials cover Registreringer → Timeliste → Faktura; two cover offer/contract conversion actions. These are logical states, not a fixed PNG quota: combine adjacent states if all controls are readable, or capture an additional genuine viewport when necessary. Do not photograph every field.

## 2. Mobile coverage and current implementation

The product tree has 50 PNGs and 60 WebPs: the previous 51 WebPs plus nine Phase 5.2A derivatives. `public/app-preview.png` is additional. The instruction manifest has 33 entries, reusing 24 existing WebPs and nine new lossless derivatives; 25 figures link to 24 original images. **No authentic smartphone viewport screenshot was identified.** Existing mobile-named variants are desktop-derived crops; useful details, but not evidence of the phone interface.

The ten modernized instructions are `opprett-faktura`, `opprett-timeliste`, `opprett-tilbud`, `opprett-kontrakt`, `dokumentoversikt`, `lag-faktura-fra-dokument`, `lag-kontrakt-fra-tilbud`, `hvordan-arbeidsokter-fungerer`, `legg-til-en-arbeidsokt` and `importer-arbeidsokter-til-timeliste`.

Three others have small terminology corrections: `appens-hovedvisning`, `hovedmenyoversikt` and `gjenta-et-dokument`. Sixteen retain their existing step arrays. All eight section anchors and 29 instruction URLs remain; `#arbeidsokter` and historical instruction slugs stay stable despite visible Registreringer terminology. The three conversion branches also have direct anchors: `#timeliste-til-faktura`, `#tilbud-til-faktura`, `#kontrakt-til-faktura`.

Most important missing phone evidence:

- Actual Registreringer navigation, entry fields, saved list, selected rows and import action. The existing selected-row mobile crop omits Importer til timeliste.
- Import result, worker identity and source/count context; saved-document action controls.
- Four separately handled invoice categories across readable phone views: regular hours, extra hours, regular KM and extra KM.
- Offer/contract action menus and resulting documents, with the distinction between source action and target form preserved.

Existing desktop screenshots adequately explain many individual fields, pricing/material/clause selectors and settings details. Full PDF images remain suitable output evidence; a phone PDF viewer is optional. Existing offer-line crops omit identity/toolbar context, invoice customer crops show only a detail, and contract pricing crops are not phone interfaces. Company/client/project creation, reports and Premium settings remain broader Phase 5.1 gaps, not new essential capture tasks here.

### Classification method

**A:** authentic phone evidence substantially improves the instruction. **B:** existing desktop evidence suffices for the relevant visual explanation. **C:** phone evidence useful but optional. **D:** no screenshot needed; explain in HTML.

A classifications are editorial value judgments, not a requirement for a unique capture per step. An A step may share a recommended creation image while existing desktop evidence remains usable. C without a capture ID means deferred opportunity, not another owner request. B does not verify backend behavior, validation or every assertion in an old sentence. Original wording is reproduced in the appendix only for traceability; it is not reapproved copy.

## 3. Prioritized capture matrix and filenames

P1 = core registration-to-invoice chain; P2 = conversion actions/results; P3 = supplementary creation/context. These are capture priorities, not defect severities. All proposed paths are original portrait phone PNGs under `public/images/product/<area>/source/mobile/`. No directories or images are created by this audit.

| ID / priority | Instruction / exact screen | Action before capture | Required state and visible elements | Suggested original path | Reuse |
|---|---|---|---|---|---|
| E01 — Essential P1 | Registration opening/add/saved list | Save two demo registrations, return to Registreringer | Two saved rows, ordinary and Ekstra; title and Legg til registrering. Relevant filters if visible. | `public/images/product/timeliste/source/mobile/registrations_saved_mobile.png` | Registration guides; Timeliste/homepage context |
| E02 — Essential P1 | Legg til registrering: upper editor | Fill extra registration, dismiss keyboard | Date, description, start/end times and pause. Same record as E03. | `public/images/product/timeliste/source/mobile/registration_form_mobile.png` | Registration and field guidance |
| E03 — Essential P1 | Same registration: lower editor | Continue E02; mark Ekstra, enter KM when enabled; capture before saving | Ekstra, KM value/label and Lagre registrering. Paid-pause state if visible. | `public/images/product/timeliste/source/mobile/registration_extra_km_save_mobile.png` | Registration, optional flags and KM |
| E04 — Essential P1 | Registreringer selection/import | Select both saved registrations | Selections, count if shown and Importer til timeliste. Add focused action viewport if separated. | `public/images/product/timeliste/source/mobile/registrations_selected_import_mobile.png` | Import instruction; Timeliste registration section |
| E05 — Essential P1 | Timeliste import result | Choose Importer til timeliste from E04 | Worker, project/identity, imported-row context and source/count if displayed. Record actual count. | `public/images/product/timeliste/source/mobile/timelist_import_result_mobile.png` | Creation/import instructions; Timeliste product page |
| E06 — Essential P1 | Dokumenter: selected saved Timeliste actions | Review/save E05; open that document and actual actions | Document identity, Generer PDF and Opprett faktura. Use an extra focused viewport if needed. | `public/images/product/timeliste/source/mobile/timelist_document_actions_mobile.png` | Document overview, PDF and conversion entry |
| E07 — Essential P1 | Faktura from Timeliste: ordinary categories | Choose Opprett faktura from E06; review/enter actual rates | Source Timeliste/worker reference, regular hours and regular KM labels/quantities/prices. Same draft as E08. | `public/images/product/timeliste/source/mobile/timelist_invoice_regular_mobile.png` | Four-category conversion; Timeliste page |
| E08 — Essential P1 | Same Faktura: extra categories | Scroll same draft from E07 | Extra hours and extra KM labels/quantities/prices. All four categories must be covered across E07/E08. | `public/images/product/timeliste/source/mobile/timelist_invoice_extra_mobile.png` | Four-category explanation; conversion result |
| E09 — Essential P2 | Dokumenter: selected Tilbud actions | Open saved demo offer and actual action controls | Offer identity, Opprett faktura and Opprett kontrakt. Source action state, not destination form. | `public/images/product/tilbud/source/mobile/offer_document_actions_mobile.png` | Both offer conversions; document overview |
| E10 — Essential P2 | Dokumenter: selected Kontrakt actions | Open saved contract, ideally from session 2 | Contract identity and Opprett faktura; PDF/edit controls if naturally visible. | `public/images/product/kontrakt/source/mobile/contract_document_actions_mobile.png` | Contract conversion; document overview |
| R01 — Recommended P2 | Faktura created from Tilbud | Choose Opprett faktura from E09 | Offer reference and at least one copied line with quantities/prices; actual review state. | `public/images/product/tilbud/source/mobile/invoice_from_offer_mobile.png` | Offer conversion guide; optional Tilbud section |
| R02 — Recommended P2 | Kontrakt created from Tilbud | Return to offer; choose Opprett kontrakt | Offer reference, copied work/pricing and independently editable field/section; observe editing separately. | `public/images/product/tilbud/source/mobile/contract_from_offer_mobile.png` | Offer-to-contract; Tilbud/Kontrakt workflow |
| R03 — Recommended P2 | Faktura created from Kontrakt | Choose Opprett faktura from E10 | Contract reference and copied invoice line; no inferred automatic installment calculation. | `public/images/product/kontrakt/source/mobile/invoice_from_contract_mobile.png` | Contract conversion; Kontrakt section |
| R04 — Recommended P3 | Independent Faktura creation | Start Opprett → Faktura, not converted draft | Customer, line and actual save/generate controls where they fit; focused companion if necessary. | `public/images/product/invoice/source/mobile/invoice_create_mobile.png` | Create invoice; optional Faktura hero |
| R05 — Recommended P3 | Independent Tilbud creation | Create source offer during session 2 | Identity and description, unit price, quantity, MVA; save/generate controls if naturally visible. | `public/images/product/tilbud/source/mobile/offer_create_mobile.png` | Create offer; Tilbud creation section |
| R06 — Recommended P3 | Independent Kontrakt creation | Start Opprett → Kontrakt separately from offer conversion | Customer/work context, pricing choice and relevant create controls. Time 900 only if deliberately matching current example. | `public/images/product/kontrakt/source/mobile/contract_create_mobile.png` | Create contract; possible standalone hero |
| O01 — Optional P3 | Actual phone application navigation | Open real navigation control | Current destinations and context; do not assume desktop sidebar or drawer. | `public/images/product/overview/source/mobile/app_navigation_mobile.png` | Orientation/opening instructions |
| O02 — Optional P3 | Innstillinger: Standard for timeliste | Only if enabling KM or clarifying location | Aktiver KM and actual save control with context. Existing desktop detail already sufficient. | `public/images/product/settings/source/mobile/timelist_km_setting_mobile.png` | KM prerequisite/settings guidance |
| O03 — Optional P3 | Timeliste PDF in phone browser/viewer | Generate/open PDF from E06 | Readable output; preserve complete document separately. Not a native-app screenshot. | `public/images/product/timeliste/source/mobile/timelist_pdf_view_mobile.png` | PDF-opening guidance; existing PDF sufficient |


### Acceptance rules

Use a real smartphone browser, Norwegian UI, normal browser zoom and safe demo customer/company/project data. Record device, OS, browser, orientation, CSS viewport if known, original pixel dimensions and actual document/source IDs in notes accompanying the files. Physical PNG pixels include device pixel ratio; they are not CSS viewport dimensions. Preserve original PNGs unchanged.

Dismiss the keyboard when it obscures the required state. Retain relevant labels and controls; do not compose invented screens or add fake device frames. Prefer demo data over redaction of essential UI. No real customer sending, signing, payment or Premium order is required.

Prepare ordinary and extra registrations with KM enabled and nonzero KM where supported, allowing the resulting invoice to demonstrate all four categories. Keep the worker name consistent. This does not mean KM is mandatory for every registration. Adjacent E02/E03 or E07/E08 may share one file if readable. If selection and import controls cannot share a phone viewport, add `registrations_import_action_mobile.png` in the same timeliste directory. Other necessary viewports can use `_02`, `_03` suffixes. Never omit a category to satisfy an arbitrary image count.

## 4. Efficient capture sessions

### Session 0 — prepare once

Use one demo company, customer/project and worker name. Record actual IDs/values; do not force a new dataset to reproduce old documents 261/264/111/29/11. Enable KM if necessary, optionally taking O02 at that moment. Take O01 on first opening navigation if useful. Do not request separate company, reports or Premium capture sessions.

### Session 1 — Registreringer → Timeliste → Faktura

1. Create an ordinary registration without photographing every field.
2. Create the extra registration: E02 upper form, then E03 Extra/KM/save context before saving.
3. Save and capture E01 with two saved registrations. This also supplies opening/add-button context; no redundant empty list is needed.
4. Select both entries, capture E04 including the actual import action, then import once.
5. Review worker name, actual row count and imported context; capture E05 and save.
6. Open the saved timelist in Dokumenter; capture E06 actions. Optionally generate/open the PDF for O03 and return.
7. Choose Opprett faktura. Review actual rates and quantities; capture E07/E08 from the same draft. Stop before any real sending.

The order deliberately takes the saved-list image after entry creation to avoid repeated navigation.

### Session 2 — offer/contract conversions

Create one demo offer, capturing R05 during entry if taking recommended images. Save and capture E09. Choose Opprett faktura for R01; return to the source offer and choose Opprett kontrakt for R02. Edit a meaningful contract field independently, save and capture E10. Choose Opprett faktura for R03. Keep real source lineage; a static editable field illustrates context, while the observed action sequence establishes independent editing. Existing suitable documents can supply essential E09/E10 first; result forms remain recommended.

### Session 3 — standalone creation

Reuse the prepared customer/project. Capture R04 from a new standalone invoice and R06 from a standalone contract. R05 was already captured in session 2. Do not use converted-document screenshots as proof of independent creation. Existing desktop details suffice for individual price/payment/clause selectors.

## 5. Responsive image architecture — recommendation only

### Current implementation

`content/instructionGuides.ts` selects keys in `content/instructionMedia.json`. `components/instructions/InstructionsHub.tsx` renders shared `ProductMedia` from `components/site/Primitives.tsx`. It uses picture/source, Next.js Image, intrinsic dimensions, lazy loading, a caption and a visible **Åpne hele bildet** link with additional descriptive screen-reader text. Native details/summary cards and `InstructionAnchors.tsx` preserve direct links and keyboard operation.

The hub uses the noncompact mobile source query **max-width: 639px**. Shared compact mode uses 1023px and an optional tablet source supports 1199px; this does not mean the hub uses those modes. Its sizes hint switches at 767px: resolution hints and composition selection have different purposes. Explicit source dimensions reserve space for different ratios.

Two integration details need attention later:

- The full-size URL is derived from the **base desktop original**, even when a mobile source is shown. Authentic phone variants must have an appropriate phone-original link.
- ProductMedia uses `mobileImage.alt` for the fallback image whenever a mobile variant exists. The hub currently supplies the same alt to both. A future composition-dependent alt must not become inaccurate on desktop. Captions also contain literal “Mobilutsnittet” wording and fixed IDs/values that cannot be carried over blindly.

`components/product/ProductMediaFrame.tsx` has a related picture pattern for Faktura: a 639px mobile source, explicit ratios and full-size links tied to the base optimized image. `lib/invoiceProductMedia.ts` supplies presentation metadata, not an original PNG. Reuse these conventions if marketing integration is later authorized; no changes now.

### Proposed rules

1. Keep shared picture/Next.js Image rendering with explicit per-variant dimensions, original URL and state metadata. No duplicate screenshot component or JavaScript viewport detection.
2. Pair equivalent steps/states: selected registrations with selected registrations; source menus with source menus; converted drafts with the same conversion result. Different demo IDs are acceptable only if surrounding HTML/captions do not claim identical data. Otherwise use a separately labelled phone example or a matched capture.
3. Start with the existing 639px art-direction boundary; validate at 375/768/1280/1440px. At 768px choose by actual media-column readability, not “tablet” assumptions. Do not automatically extend portraits to every tablet. Keep sizes/srcset resolution choices separate from art direction.
4. Preserve each variant's own ratio and reserve height. No fixed desktop ratio, cover cropping or A4 document frame for tall app UI. The document mode remains for actual PDFs.
5. Keep lazy loading inside collapsed instruction panels. Do not preload every portrait. Only a later measured marketing LCP image may justify priority.
6. Let the full-size link open the displayed variant's original. Two clearly named phone/desktop original links, or a matching-variant link plus accessible alternate, can avoid a wrong-image destination without viewport JS. Accessible names must retain visible link wording.
7. Use a common truthful semantic alt for equivalent variants; avoid location-specific descriptions such as “sidebar” or “right column”. Keep button labels and essential instructions in HTML. If one alt cannot truthfully describe both images, do not silently pair them. Revise literal crop captions and fixed demo claims when necessary.
8. Later, generate WebPs only where beneficial, preserve original PNGs, record sizes/dimensions and verify text legibility. Use lossless or visually verified near-lossless settings; avoid huge physical-resolution PNG payloads inline. No processing is authorized in this audit.

## 6. Portrait instructional UX

Use one complete phone viewport for context, followed by focused views for distinct actions. At 375px the current instruction image slot is approximately **285 CSS px** after hub/card padding. A 390px-wide 9:19.5 capture renders about 617px tall at that width. A blind 400px height cap shrinks it to roughly 185px wide, making labels harder to read.

Proposed soft review targets: **450–640 CSS px or 70–80svh on phones**, **480–600px on tablets**, **550–640px on desktop**. These are comfort ranges, not implemented hard caps or proof that every screenshot remains legible. Preserve proportions. Critical labels appearing below roughly 12px are a readability warning, not a formal screenshot WCAG threshold. If fitting the height makes labels tiny, use a focused authentic viewport/crop, fewer inline figures and full-size access.

Full portraits suit initial orientation and document actions. Focused views suit Extra/KM/save controls and separate invoice-category groups. Preserve source context, all four categories and required actions across the sequence. Do not stack complete long forms repeatedly, crop away a workflow or use an unexplained montage.

Retain native expandable instructions. Normal original-image links already permit browser zoom; no lightbox dependency is necessary. Any future viewer needs tested keyboard entry/return focus, Escape, zoom and touch behavior. Keep visible focus, meaningful link text, optional-action labels and HTML explanations; color/arrows alone must not convey the process. Reduced-motion users should not depend on animation.

## 7. Optional marketing opportunities

| Existing page/location | Natural reuse after instructions | Accuracy guardrail |
|---|---|---|
| Homepage onboarding / Timeliste feature | E01 or E05 as a separately labelled phone example | Existing hero shows Oversikt/quick actions; Registreringer is a different state, not a drop-in phone picture source. No homepage-only capture is essential. |
| `/timeliste-mal` — `#registreringer` | E04 selected registrations with import action | Pair only with matching selected/import state; keep action/count context. |
| Timeliste — `#timer-og-kilometer`, `#timeliste-til-faktura` | E05 and E07/E08 | Current examples name 264/111 and fixed values. Match that dataset or label a separate phone example; preserve four categories. |
| `/fakturaprogram-gratis` creation hero/process | R04 standalone form | A converted Timeliste invoice is a different state. A phone invoice form does not fill the company-settings screenshot gap. |
| `/tilbud-mal` — `#lag-tilbud` and conversion sections | R05 creation; R01/R02 target forms | E09 source actions are not destination forms. Preserve quantities/MVA and independent contract editing. |
| `/kontrakt-mal` standalone hero / workflow | R06 standalone; R02 offer-derived; E10/R03 conversion | Do not substitute offer-derived creation for standalone creation. Existing Time 900 form and earlier PDF are different configurations; preserve manual signing. |

Truthful optional Norwegian copy: **Bruk Jobbleder i nettleseren på mobil, nettbrett og PC.** Do not imply future-only mobile support, native apps, offline operation, automatic background synchronization, automatic sending/signing or platform-wide mobile statistics. All confirmed creation/conversion functionality remains Free; Premium removes Jobbleder PDF branding and supports a company logo.

## 8. Accuracy, evidence and verification boundaries

Mobile capabilities are owner-confirmed. Repository inspection verifies marketing rendering, not authenticated-app menu positions. Exact phone controls/placement await authentic capture; no mobile drawer or gesture is invented.

Existing Timeliste 261 has three rows but a badge for **two imported registrations**. Do not call all three imported. Existing Timeliste 264 / Faktura 111 has four categories with a specific dataset. A new phone example must not silently inherit those IDs/totals. Worker name is entered on the document, not evidence of employee accounts.

The existing contract PDF is an earlier offer-priced, after-completion example. It is not the export of the independently edited progress-payment or standalone hourly example. Payment schedules/percentages do not prove automatic installment calculations or invoice creation. Download/manual distribution and manual signing remain accurate; electronic signatures are unsupported.

Legacy report/settings/Premium/correction instructions contain unverified claims. Their C classifications defer optional phone evidence; they do not confirm those claims. Capture no real Premium orders. Preserve confirmed terminology: Registreringer, Legg til registrering, Lagre registrering, Opprett kopi. Do not reuse old “til høyre” layout directions as phone instructions.

### Previous test evidence, not new tests

Saved Phase 5.2A local Chromium evidence reports eight hub width/theme runs at 375/768/1280/1440 including reduced motion, zero automated axe violations, CLS 0 and zero initial image transfer with cards closed. It also records 20 regression combinations across the homepage/four product pages, 57 asset URLs, 24 original-image links and 60 Tab steps, with manual caption/focus follow-up. These are **prior local marketing tests**, not newly executed production, authenticated-app or real-phone tests.

Previous expanded-image totals: 721442 bytes at 375px, 915596 bytes at wider tested widths; all 33 manifest variants total 1055552 bytes. These scoped results are not a new benchmark or a future mobile-image budget. No browser, Lighthouse, TypeScript, ESLint or build test is claimed executed for this report-only audit.

Sources: `docs/phase-5.1-instructions-media-audit.md`, `docs/phase-5.2a-instructions-implementation.md`; current content, hub, image components/styles and homepage/four product implementations. Saved observations were reused from `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/`: `phase51-notes.cjs`, `phase51/inventory.json`, `phase51/browser.json`, `phase52a/browser-results.json`, `phase52a/contrast.json`, `phase52a/pixels.json` and associated manual/scope records. These remain investigation artifacts, not release files.

## 9. Implementation roadmap

1. Approve this plan; collect session 1 essentials and E09/E10 first. Do not delay the primary workflow for settings, PDF-viewer or marketing extras.
2. Review real captures: labels, selections, import counts, all four categories and source lineage. Combine redundant states; add viewports only for genuinely missing evidence.
3. Authorize a separate integration phase for selected instructions. Reuse shared media/manifest, create only necessary derivatives, correct original links/captions and preserve URLs, desktop/PDF examples and accurate copy. Do not automatically expand to all 29 tutorials.
4. Validate at 375/768/1280/1440, light/dark and reduced motion: keyboard/focus, anchors/details, alt/link names, full-size targets, overflow, cropping, lazy loading and CLS. Include real phone/tablet readability. Run TypeScript, full ESLint and build; regression-check all five marketing pages.
5. Consider recommended targets and limited marketing reuse separately. Broader company/client/project/report/Premium media and terminology remain the Phase 5.1 backlog.

## 10. Complete coverage appendix

### 10.1 All 29 instructions

| Instruction / existing anchor | Original steps | Current steps | Scope |
|---|---:|---:|---|
| #appens-hovedvisning | 4 | 4 | Existing steps retained; small label overrides where noted |
| #hovedmenyoversikt | 6 | 6 | Existing steps retained; small label overrides where noted |
| #opprett-faktura | 7 | 3 | Modernized |
| #opprett-timeliste | 8 | 5 | Modernized |
| #opprett-tilbud | 7 | 3 | Modernized |
| #opprett-kontrakt | 9 | 5 | Modernized |
| #opprett-kreditnota | 5 | 5 | Existing steps retained; small label overrides where noted |
| #dokumentoversikt | 4 | 3 | Modernized |
| #gjenta-et-dokument | 5 | 5 | Existing steps retained; small label overrides where noted |
| #lag-faktura-fra-dokument | 4 | 9 | Modernized |
| #lag-kontrakt-fra-tilbud | 4 | 4 | Modernized |
| #rette-en-faktura | 4 | 4 | Existing steps retained; small label overrides where noted |
| #hvordan-arbeidsokter-fungerer | 4 | 3 | Modernized |
| #legg-til-en-arbeidsokt | 6 | 4 | Modernized |
| #importer-arbeidsokter-til-timeliste | 5 | 3 | Modernized |
| #hvordan-prosjekter-fungerer | 5 | 5 | Existing steps retained; small label overrides where noted |
| #opprett-et-prosjekt | 5 | 5 | Existing steps retained; small label overrides where noted |
| #hvordan-kunder-fungerer | 4 | 4 | Existing steps retained; small label overrides where noted |
| #opprett-en-kunde | 5 | 5 | Existing steps retained; small label overrides where noted |
| #hvordan-rapporter-fungerer | 5 | 5 | Existing steps retained; small label overrides where noted |
| #maanedlig-salg | 4 | 4 | Existing steps retained; small label overrides where noted |
| #maanedlige-arbeidstimer | 4 | 4 | Existing steps retained; small label overrides where noted |
| #hvordan-innstillinger-fungerer | 4 | 4 | Existing steps retained; small label overrides where noted |
| #firma-og-fakturadetaljer | 4 | 4 | Existing steps retained; small label overrides where noted |
| #standardverdier-for-dokumenter | 4 | 4 | Existing steps retained; small label overrides where noted |
| #profil-og-grensesnitt | 4 | 4 | Existing steps retained; small label overrides where noted |
| #premium-og-branding | 4 | 4 | Existing steps retained; small label overrides where noted |
| #last-opp-logo | 4 | 4 | Existing steps retained; small label overrides where noted |
| #kjop-premium | 5 | 5 | Existing steps retained; small label overrides where noted |

### 10.2 Every original step

Historical wording is an audit reference, not current phone copy. Existing filenames resolve to exact paths in §10.3. C without an ID is deferred, not an additional capture request.

#### #appens-hovedvisning

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Åpne dashboardet når du logger inn. | C | `app-preview.png` | O01; optional context at this step. |
| 2 | Bruk hurtigvalg for å starte vanlige oppgaver. | C | `app-preview.png` | O01; optional context at this step. |
| 3 | Bruk søk for å finne dokumenter, prosjekter og kunder raskt. | C | `app-preview.png` | Optional later; no new capture requested now. |
| 4 | Klikk deg videre til riktig arbeidsområde fra menyen. | C | `app-preview.png` | O01; optional context at this step. |

#### #hovedmenyoversikt

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Bruk Opprett når du vil starte et nytt dokument. | C | `app-preview.png` | O01; optional context at this step. |
| 2 | Bruk Dokumenter for å åpne, gjenta og generere PDF fra eksisterende dokumenter. | C | `documents_menu_preview_timelist_document.png` | E06/E09/E10; optional context at this step. |
| 3 | Bruk Arbeidsøkter for å lagre dagsregistreringer og importere dem til timeliste. | C | `work_entries_panel.png` | E01; optional context at this step. |
| 4 | Bruk Prosjekter og Kunder for å organisere dokumenter og arbeid. | D | `app-preview.png`, `project_card_timelist_count_by_name.png`, `client_card_add_timelist_by_client_name_.png` | Text sufficient; no additional screenshot. |
| 5 | Bruk Rapporter for å se salgs- og timeoversikter. | D | `app-preview.png` | Text sufficient; no additional screenshot. |
| 6 | Bruk Innstillinger for firmadata, standardverdier og Premium. | C | `timelist_settings_add_km_row.png` | O02; optional context at this step. |

#### #opprett-faktura

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Velg "Faktura". | C | `screenshot_fv_edit.png` | R04; optional context at this step. |
| 2 | Velg kunde (påkrevd). | B | `screenshot_fv_edit.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 3 | Velg prosjekt hvis du ønsker å knytte fakturaen til et prosjekt. | D | `screenshot_fv_edit.png` | Text sufficient; no additional screenshot. |
| 4 | Sett dato og forfallsdato. | B | `screenshot_fv_edit.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 5 | Legg til minst én linje med beskrivelse, pris, antall og MVA. | A | `screenshot_fv_edit.png` | R04; actual phone action/result materially improves explanation. |
| 6 | Kontroller sammendraget til høyre. | B | `screenshot_fv_edit.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 7 | Klikk Lagre for å lagre dokumentet, eller Generer for å lagre og lage PDF med én gang. | A | `screenshot_fv_edit.png`, `fv_free_watermark.png` | R04; actual phone action/result materially improves explanation. |

#### #opprett-timeliste

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Velg "Timeliste". | C | `new_timelist_wizard.png` | E05; optional context at this step. |
| 2 | Velg prosjekt (påkrevd). | A | `new_timelist_wizard.png` | E05; actual phone action/result materially improves explanation. |
| 3 | Skriv inn navn på arbeider. | A | `new_timelist_wizard.png` | E05; actual phone action/result materially improves explanation. |
| 4 | Legg eventuelt til kunde for bedre orden i dokumentasjonen. | B | `new_timelist_wizard_add_client.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 5 | Legg til rader med dato, beskrivelse, inn, ut og pause. | B | `new_timelist_wizard.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 6 | Marker betalt pause eller ekstraarbeid ved behov. | C | `work_entries_add_new_position_mark_as_extra.png`, `new_timelist_form_4_different_entries.png` | E03; optional context at this step. |
| 7 | Importer arbeidsøkter hvis du allerede har lagret dagene på forhånd. | A | `work_entries_panel_with_2_entries_marked.png`, `new_timelist_wizard_with_3_entries_imported_from_work_entires_panel.png` | E04/E05; actual phone action/result materially improves explanation. |
| 8 | Kontroller sammendraget til høyre og lagre eller generer PDF. | A | `new_timelist_wizard.png`, `exported_timelist_with_1_entry.png` | E06; actual phone action/result materially improves explanation. |

#### #opprett-tilbud

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Velg "Tilbud". | C | `new_offer_form.png` | R05; optional context at this step. |
| 2 | Velg kunde. | B | `new_offer_form.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 3 | Velg eventuelt prosjekt. | D | `new_offer_form.png` | Text sufficient; no additional screenshot. |
| 4 | Sett dato og gyldighetstid. | B | `new_offer_form.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 5 | Legg inn linjer med beskrivelse, pris, antall og MVA. | A | `new_offer_form.png` | R05; actual phone action/result materially improves explanation. |
| 6 | Kontroller sammendraget. | B | `new_offer_form.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 7 | Lagre dokumentet eller generer PDF. | A | `new_offer_form.png`, `exported_tilbud_A4.png` | R05; actual phone action/result materially improves explanation. |

#### #opprett-kontrakt

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Velg "Kontrakt". | C | `new_contract_form.png` | R06; optional context at this step. |
| 2 | Velg kunde (påkrevd). | B | `new_contract_form.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 3 | Fyll inn datoer for opprettelse, start og slutt. | B | `new_contract_form_time.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 4 | Legg til arbeidsbeskrivelse i egne rader. | C | `new_contract_form_time.png` | R06; optional context at this step. |
| 5 | Velg prismodell: fastpris, timepris eller tilbud. | B | `payment_base.png`, `tilbud_to_contract.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 6 | Velg betalingsmåte og antall betalingsdager. | B | `payment_methods.png`, `new_contract_form_with_advance_percentage.png`, `contract_from_offer_edited.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 7 | Velg hvem som leverer materialer. | B | `material_costs.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 8 | Juster kontraktstekster hvis du vil endre standardklausulene. | C | `new_contract_form_with_advance_percentage.png` | R06; optional context at this step. |
| 9 | Lagre eller generer PDF. | C | `new_contract_form_time.png`, `exported_contract_preview.png` | R06; optional context at this step. |

#### #opprett-kreditnota

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Velg "Kreditnota". | C | `new_creditnota_form.png` | Optional later; no new capture requested now. |
| 2 | Velg kildefaktura. | B | `new_creditnota_form.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 3 | Sett dato. | B | `new_creditnota_form.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 4 | Kontroller innholdet. | B | `new_creditnota_form.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 5 | Lagre eller generer PDF. | C | `new_creditnota_form.png` | Optional later; no new capture requested now. |

#### #dokumentoversikt

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Bruk søkefeltet for å finne dokumenter raskt. | C | `documents_menu_preview_timelist_document.png` | E06/E09/E10; optional context at this step. |
| 2 | Filtrer etter type: faktura, timeliste, tilbud, kontrakt eller kreditnota. | B | `offer_document_preview_in_documents_menu.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 3 | Klikk et dokument i listen for å se detaljer til høyre. | A | `documents_menu_preview_timelist_document.png` | E06/E09/E10; actual phone action/result materially improves explanation. |
| 4 | Bruk forhåndsvisningen for å kontrollere innhold, sammendrag og relaterte dokumenter. | B | `documents_menu_preview_timelist_document.png`, `documents_menu_preview_timelist_with_extra_km.png` | Existing detail/output sufficient; not proof of validation or backend rules. |

#### #gjenta-et-dokument

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Åpne dokumentet du vil bruke på nytt. | B | `documents_menu_preview_timelist_document.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 2 | Klikk "Gjenta dokument". | C | `documents_menu_preview_timelist_document.png` | Optional later; no new capture requested now. |
| 3 | Kontroller innholdet i den nye kopien. | C | None for this state | Optional later; no new capture requested now. |
| 4 | Gjør endringer ved behov. | C | `new_timelist_wizard.png` | Optional later; no new capture requested now. |
| 5 | Lagre eller generer PDF. | D | `new_timelist_wizard.png` | Text sufficient; no additional screenshot. |

#### #lag-faktura-fra-dokument

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Åpne timeliste, tilbud eller kontrakt. | A | `timelist_4_different_entries_in_documents_menu.png`, `offer_document_preview_in_documents_menu.png` | E06/E09/E10; actual phone action/result materially improves explanation. |
| 2 | Klikk "Opprett faktura". | A | `timelist_4_different_entries_in_documents_menu.png`, `offer_document_preview_in_documents_menu.png` | E06/E09/E10; actual phone action/result materially improves explanation. |
| 3 | Kontroller dataene som blir kopiert inn. | A | `new_invoice_form_4_different_entries.png`, `tilbud_to_invoice.png`, `invoice_from_contract.png` | E07/E08/R01/R03; actual phone action/result materially improves explanation. |
| 4 | Lagre eller generer PDF. | B | `new_invoice_form_4_different_entries.png`, `exported_invoice_4_different_entries.png` | Existing detail/output sufficient; not proof of validation or backend rules. |

#### #lag-kontrakt-fra-tilbud

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Åpne tilbudet. | A | `offer_document_preview_in_documents_menu.png` | E09; actual phone action/result materially improves explanation. |
| 2 | Klikk "Opprett kontrakt". | A | `offer_document_preview_in_documents_menu.png` | E09; actual phone action/result materially improves explanation. |
| 3 | Kontroller vilkår, pris og arbeidsbeskrivelse. | A | `tilbud_to_contract.png`, `contract_from_offer_edited.png` | R02; actual phone action/result materially improves explanation. |
| 4 | Lagre eller generer PDF. | B | `tilbud_to_contract.png`, `exported_contract_preview.png` | Existing detail/output sufficient; not proof of validation or backend rules. |

#### #rette-en-faktura

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Opprett kreditnota for den opprinnelige fakturaen. | C | `new_creditnota_form.png` | Optional later; no new capture requested now. |
| 2 | Lag en ny korrigert faktura ved å opprette den på nytt. | D | `screenshot_fv_edit.png` | Text sufficient; no additional screenshot. |
| 3 | Kontroller innhold og tall. | B | `screenshot_fv_edit.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 4 | Generer ny PDF. | D | `fv_free_watermark.png` | Text sufficient; no additional screenshot. |

#### #hvordan-arbeidsokter-fungerer

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Bruk Arbeidsøkter når du vil lagre dagens arbeid raskt. | A | `work_entries_panel.png` | E01; actual phone action/result materially improves explanation. |
| 2 | Bygg opp flere dager over tid. | A | `work_entries_panel_with_2_entries.png` | E01; actual phone action/result materially improves explanation. |
| 3 | Velg én eller flere oppføringer senere. | A | `work_entries_panel_with_2_entries_marked.png` | E04; actual phone action/result materially improves explanation. |
| 4 | Importer dem til timeliste når du er klar. | A | `work_entries_panel_with_2_entries_marked.png`, `new_timelist_wizard_with_3_entries_imported_from_work_entires_panel.png` | E04/E05; actual phone action/result materially improves explanation. |

#### #legg-til-en-arbeidsokt

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Åpne Arbeidsøkter. | A | `work_entries_panel.png` | E01; actual phone action/result materially improves explanation. |
| 2 | Klikk "Legg til oppføring". | A | `work_entries_panel.png` | E01/E02; actual phone action/result materially improves explanation. |
| 3 | Fyll inn dato, beskrivelse, inn, ut og pause. | A | `work_entries_add_new_position_mark_as_extra.png` | E02; actual phone action/result materially improves explanation. |
| 4 | Marker betalt pause eller ekstraarbeid ved behov. | A | `work_entries_add_new_position_mark_as_extra.png` | E03; actual phone action/result materially improves explanation. |
| 5 | Legg til KM hvis funksjonen er aktivert. | A | `timelist_settings_add_km_row.png`, `work_entries_with_km_value.png` | E03; actual phone action/result materially improves explanation. |
| 6 | Klikk "Lagre". | A | `work_entries_add_new_position_mark_as_extra.png`, `work_entries_panel_with_2_entries.png` | E03/E01; actual phone action/result materially improves explanation. |

#### #importer-arbeidsokter-til-timeliste

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Åpne Arbeidsøkter. | A | `work_entries_panel.png` | E01; actual phone action/result materially improves explanation. |
| 2 | Velg én eller flere oppføringer. | A | `work_entries_panel_with_2_entries_marked.png` | E04; actual phone action/result materially improves explanation. |
| 3 | Klikk "Importer til timeliste". | A | `work_entries_panel_with_2_entries_marked.png` | E04; actual phone action/result materially improves explanation. |
| 4 | Kontroller de importerte radene i timelisten. | A | `new_timelist_wizard_with_3_entries_imported_from_work_entires_panel.png` | E05; actual phone action/result materially improves explanation. |
| 5 | Lagre eller generer PDF. | A | `new_timelist_wizard_with_3_entries_imported_from_work_entires_panel.png`, `exported_timelist_with_3_entires.png` | E06; actual phone action/result materially improves explanation. |

#### #hvordan-prosjekter-fungerer

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Bruk ett prosjekt per oppdrag eller jobb. | D | `project_card_timelist_count_by_name.png` | Text sufficient; no additional screenshot. |
| 2 | Knytt timelister, tilbud, kontrakter og fakturaer til prosjektet. | B | `project_card_timelist_count_by_name.png`, `new_offer_form.png`, `new_contract_form_time.png`, `new_timelist_wizard.png`, `screenshot_fv_edit.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 3 | Sett standard arbeidstider hvis du vil forenkle timelisteoppretting. | C | `project_card_timelist_count_by_name.png` | Optional later; no new capture requested now. |
| 4 | Bruk limit hours og deadline for å følge fremdriften. | B | `project_card_timelist_count_by_name.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 5 | Se dokumentstatistikk og arbeidstimer samlet på prosjektnivå. | B | `project_card_timelist_count_by_name.png` | Existing detail/output sufficient; not proof of validation or backend rules. |

#### #opprett-et-prosjekt

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Åpne Prosjekter. | C | `app-preview.png` | Optional later; no new capture requested now. |
| 2 | Klikk "Nytt prosjekt". | C | `app-preview.png` | Optional later; no new capture requested now. |
| 3 | Skriv inn prosjektnavn. | C | None for this state | Optional later; no new capture requested now. |
| 4 | Legg til adresse, arbeidstider, beskrivelse, deadline og timegrense ved behov. | D | `project_card_timelist_count_by_name.png` | Text sufficient; no additional screenshot. |
| 5 | Klikk "Opprett prosjekt". | C | None for this state | Optional later; no new capture requested now. |

#### #hvordan-kunder-fungerer

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Opprett kunden én gang. | D | `app-preview.png`, `client_card_add_timelist_by_client_name_.png` | Text sufficient; no additional screenshot. |
| 2 | Bruk kunden i faktura, tilbud og kontrakt. | B | `screenshot_fv_edit.png`, `new_offer_form.png`, `new_contract_form_time.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 3 | Se antall tilknyttede dokumenter direkte i kundekortet. | B | `client_card_add_timelist_by_client_name_.png` | Existing detail/output sufficient; not proof of validation or backend rules. |
| 4 | Se relaterte prosjekter og siste dokumenter. | B | `client_card_add_timelist_by_client_name_.png` | Existing detail/output sufficient; not proof of validation or backend rules. |

#### #opprett-en-kunde

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Åpne Kunder. | C | `app-preview.png` | Optional later; no new capture requested now. |
| 2 | Klikk "Ny kunde". | C | `app-preview.png` | Optional later; no new capture requested now. |
| 3 | Fyll inn navn, adresse, postnummer og sted. | C | None for this state | Optional later; no new capture requested now. |
| 4 | Legg til e-post og MVA-nummer ved behov. | D | `client_card_add_timelist_by_client_name_.png` | Text sufficient; no additional screenshot. |
| 5 | Klikk "Opprett kunde". | C | None for this state | Optional later; no new capture requested now. |

#### #hvordan-rapporter-fungerer

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Bruk Monthly Sales for å se fakturaresultater for en valgt måned. | C | None for this state | Optional later; no new capture requested now. |
| 2 | Bruk Yearly Sales for å sammenligne måneder og totaler for et helt år. | C | None for this state | Optional later; no new capture requested now. |
| 3 | Bruk Monthly Work Hours og Yearly Work Hours for å analysere timer, ekstraarbeid og KM. | C | None for this state | Optional later; no new capture requested now. |
| 4 | Bruk Project Performance for å sammenligne prosjektverdi og tidsbruk. | C | None for this state | Optional later; no new capture requested now. |
| 5 | Bruk Offers for å følge tilbud og konvertering. | C | None for this state | Optional later; no new capture requested now. |

#### #maanedlig-salg

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Velg måned og år. | C | None for this state | Optional later; no new capture requested now. |
| 2 | Se antall fakturaer. | D | None for this state | Text sufficient; no additional screenshot. |
| 3 | Kontroller netto, MVA og brutto total. | D | None for this state | Text sufficient; no additional screenshot. |
| 4 | Gå videre til fakturalisten og åpne dokumenter ved behov. | C | None for this state | Optional later; no new capture requested now. |

#### #maanedlige-arbeidstimer

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Velg riktig periode. | C | None for this state | Optional later; no new capture requested now. |
| 2 | Kontroller totalt antall timer. | D | `project_card_timelist_count_by_name.png` | Text sufficient; no additional screenshot. |
| 3 | Sammenlign vanlige timer og ekstraarbeid. | D | `exported_timelist_4_different_entries.png` | Text sufficient; no additional screenshot. |
| 4 | Se summer per arbeider og prosjekt. | D | `project_card_timelist_count_by_name.png` | Text sufficient; no additional screenshot. |

#### #hvordan-innstillinger-fungerer

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Fyll inn firmaopplysninger i Company & Billing. | C | `timelist_settings_add_km_row.png` | Optional later; no new capture requested now. |
| 2 | Sett standardverdier for faktura, tilbud, kontrakt og timeliste. | C | `timelist_settings_add_km_row.png` | Optional later; no new capture requested now. |
| 3 | Oppdater visningsnavn og språk i Profile & Interface. | C | `timelist_settings_add_km_row.png` | Optional later; no new capture requested now. |
| 4 | Bruk Premium & Branding for logo og premiumvalg. | C | `timelist_settings_add_km_row.png`, `fv_premium_logo.png`, `fv_premium_clear.png` | Optional later; no new capture requested now. |

#### #firma-og-fakturadetaljer

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Fyll inn firmanavn, adresse, postnummer og poststed. | C | `fv_free_watermark.png` | Optional later; no new capture requested now. |
| 2 | Legg til kontonummer og MVA-nummer. | C | `fv_free_watermark.png` | Optional later; no new capture requested now. |
| 3 | Velg giro-innstilling hvis du bruker det. | C | None for this state | Optional later; no new capture requested now. |
| 4 | Lagre hvert felt med Lagre-knappen. | D | None for this state | Text sufficient; no additional screenshot. |

#### #standardverdier-for-dokumenter

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Bruk Invoice Defaults for fakturanummer, MVA, betalingsdager, timepris og KM-pris. | C | `timelist_settings_add_km_row.png` | Optional later; no new capture requested now. |
| 2 | Bruk Offer Defaults for tilbudsnummer og gyldighet. | C | `timelist_settings_add_km_row.png` | Optional later; no new capture requested now. |
| 3 | Bruk Contract Defaults for kontraktsnummer, betalingsdager og materialvalg. | C | `timelist_settings_add_km_row.png` | Optional later; no new capture requested now. |
| 4 | Bruk Timelist Defaults for standard inn/ut, pause, betalt pause og KM. | C | `timelist_settings_add_km_row.png` | O02; optional context at this step. |

#### #profil-og-grensesnitt

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Velg business type som passer virksomheten din. | C | None for this state | Optional later; no new capture requested now. |
| 2 | Sett worker/display name som skal brukes i timelister. | C | `new_timelist_wizard.png` | Optional later; no new capture requested now. |
| 3 | Velg språk for grensesnittet: EN, NO eller PL. | C | None for this state | Optional later; no new capture requested now. |
| 4 | Oppdater e-post eller passord ved behov. | D | None for this state | Text sufficient; no additional screenshot. |

#### #premium-og-branding

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Se premiumstatus og hvor lenge abonnementet varer. | D | `app-preview.png` | Text sufficient; no additional screenshot. |
| 2 | Kontroller dokumentbruk og dagens oppsett. | D | None for this state | Text sufficient; no additional screenshot. |
| 3 | Velg plan og bestill premiumfaktura ved behov. | C | None for this state | Optional later; no new capture requested now. |
| 4 | Åpne premiumfaktura når den er opprettet. | C | None for this state | Optional later; no new capture requested now. |

#### #last-opp-logo

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Åpne Premium & Branding i Innstillinger. | C | `timelist_settings_add_km_row.png` | Optional later; no new capture requested now. |
| 2 | Velg fil i logo-seksjonen. | C | None for this state | Optional later; no new capture requested now. |
| 3 | Klikk "Replace logo". | C | None for this state | Optional later; no new capture requested now. |
| 4 | Bruk "Remove logo" hvis du vil fjerne den. | C | None for this state | Optional later; no new capture requested now. |

#### #kjop-premium

| Original step | Original action | Class | Existing evidence | Capture / rationale |
|---:|---|:---:|---|---|
| 1 | Gå til Premium & Branding. | C | `timelist_settings_add_km_row.png` | Optional later; no new capture requested now. |
| 2 | Velg 1 måned, 6 måneder eller 12 måneder. | C | None for this state | Optional later; no new capture requested now. |
| 3 | Legg inn rabattkode hvis du har en. | D | None for this state | Text sufficient; no additional screenshot. |
| 4 | Klikk Order invoice. | D | None for this state | Text sufficient; no additional screenshot. |
| 5 | Åpne premiumfaktura når den er klar. | C | None for this state | Optional later; no new capture requested now. |

Classification totals: **A 30, B 28, C 63, D 22; total 143**.

### 10.3 Exact existing evidence paths

Existing files only; duplicates across folders remain separate paths. Full dimensions and derivative inventories remain in Phase 5.1/5.2A.

| Filename | Exact path(s) |
|---|---|
| app-preview.png | `public/app-preview.png` |
| client_card_add_timelist_by_client_name_.png | `public/images/product/timeliste/source/client_card_add_timelist_by_client_name_.png` |
| contract_from_offer_edited.png | `public/images/product/kontrakt/source/contract_from_offer_edited.png`<br>`public/images/product/tilbud/source/contract_from_offer_edited.png` |
| documents_menu_preview_timelist_document.png | `public/images/product/timeliste/source/documents_menu_preview_timelist_document.png` |
| documents_menu_preview_timelist_with_extra_km.png | `public/images/product/timeliste/source/documents_menu_preview_timelist_with_extra_km.png` |
| exported_contract_preview.png | `public/images/product/kontrakt/source/exported_contract_preview.png` |
| exported_invoice_4_different_entries.png | `public/images/product/timeliste/source/exported_invoice_4_different_entries.png` |
| exported_tilbud_A4.png | `public/images/product/tilbud/source/exported_tilbud_A4.png` |
| exported_timelist_4_different_entries.png | `public/images/product/timeliste/source/exported_timelist_4_different_entries.png` |
| exported_timelist_with_1_entry.png | `public/images/product/timeliste/source/exported_timelist_with_1_entry.png` |
| exported_timelist_with_3_entires.png | `public/images/product/timeliste/source/exported_timelist_with_3_entires.png` |
| fv_free_watermark.png | `public/images/product/invoice/source/fv_free_watermark.png` |
| fv_premium_clear.png | `public/images/product/invoice/source/fv_premium_clear.png` |
| fv_premium_logo.png | `public/images/product/invoice/source/fv_premium_logo.png` |
| invoice_from_contract.png | `public/images/product/kontrakt/source/invoice_from_contract.png`<br>`public/images/product/tilbud/source/invoice_from_contract.png` |
| material_costs.png | `public/images/product/kontrakt/source/material_costs.png` |
| new_contract_form.png | `public/images/product/kontrakt/source/new_contract_form.png` |
| new_contract_form_time.png | `public/images/product/kontrakt/source/new_contract_form_time.png` |
| new_contract_form_with_advance_percentage.png | `public/images/product/kontrakt/source/new_contract_form_with_advance_percentage.png` |
| new_creditnota_form.png | `public/images/product/kreditnota/source/new_creditnota_form.png` |
| new_invoice_form_4_different_entries.png | `public/images/product/timeliste/source/new_invoice_form_4_different_entries.png` |
| new_offer_form.png | `public/images/product/tilbud/source/new_offer_form.png` |
| new_timelist_form_4_different_entries.png | `public/images/product/timeliste/source/new_timelist_form_4_different_entries.png` |
| new_timelist_wizard.png | `public/images/product/timeliste/source/new_timelist_wizard.png` |
| new_timelist_wizard_add_client.png | `public/images/product/timeliste/source/new_timelist_wizard_add_client.png` |
| new_timelist_wizard_with_3_entries_imported_from_work_entires_panel.png | `public/images/product/timeliste/source/new_timelist_wizard_with_3_entries_imported_from_work_entires_panel.png` |
| offer_document_preview_in_documents_menu.png | `public/images/product/tilbud/source/offer_document_preview_in_documents_menu.png` |
| payment_base.png | `public/images/product/kontrakt/source/payment_base.png` |
| payment_methods.png | `public/images/product/kontrakt/source/payment_methods.png` |
| project_card_timelist_count_by_name.png | `public/images/product/timeliste/source/project_card_timelist_count_by_name.png` |
| screenshot_fv_edit.png | `public/images/product/invoice/source/screenshot_fv_edit.png` |
| tilbud_to_contract.png | `public/images/product/kontrakt/source/tilbud_to_contract.png`<br>`public/images/product/tilbud/source/tilbud_to_contract.png` |
| tilbud_to_invoice.png | `public/images/product/tilbud/source/tilbud_to_invoice.png` |
| timelist_4_different_entries_in_documents_menu.png | `public/images/product/timeliste/source/timelist_4_different_entries_in_documents_menu.png` |
| timelist_settings_add_km_row.png | `public/images/product/timeliste/source/timelist_settings_add_km_row.png` |
| work_entries_add_new_position_mark_as_extra.png | `public/images/product/timeliste/source/work_entries_add_new_position_mark_as_extra.png` |
| work_entries_panel.png | `public/images/product/timeliste/source/work_entries_panel.png` |
| work_entries_panel_with_2_entries.png | `public/images/product/timeliste/source/work_entries_panel_with_2_entries.png` |
| work_entries_panel_with_2_entries_marked.png | `public/images/product/timeliste/source/work_entries_panel_with_2_entries_marked.png` |
| work_entries_with_km_value.png | `public/images/product/timeliste/source/work_entries_with_km_value.png` |

### 10.4 Current modernized step groups

Capture pool is shared across each instruction, not a requirement to attach every capture to every group. Match the actual action state before integration; existing PDF groups need no phone replacement.

| Instruction / branch | Current group | Current title | Relevant capture pool |
|---|---:|---|---|
| #opprett-faktura | 1 | Velg kunde og datoer. | R04 |
| #opprett-faktura | 2 | Legg inn fakturalinjene. | R04 |
| #opprett-faktura | 3 | Lagre eller generer PDF. | Existing PDF sufficient; optional O03 for Timeliste only |
| #opprett-timeliste | 1 | Velg prosjekt og skriv inn arbeider. | E05, E03, E04, E06 |
| #opprett-timeliste | 2 | Knytt til kunde ved behov. | E05, E03, E04, E06 |
| #opprett-timeliste | 3 | Legg inn arbeidsdagene. | E05, E03, E04, E06 |
| #opprett-timeliste | 4 | Ta med kilometer når du trenger det. | E05, E03, E04, E06 |
| #opprett-timeliste | 5 | Kontroller og lagre timelisten. | Existing PDF sufficient; optional O03 for Timeliste only |
| #opprett-tilbud | 1 | Velg kunde og gyldighet. | R05 |
| #opprett-tilbud | 2 | Beskriv og pris arbeidet. | R05 |
| #opprett-tilbud | 3 | Lagre og lag PDF. | Existing PDF sufficient; optional O03 for Timeliste only |
| #opprett-kontrakt | 1 | Legg inn partene og oppdraget. | R06 |
| #opprett-kontrakt | 2 | Velg prisgrunnlag. | R06 |
| #opprett-kontrakt | 3 | Avtal betaling og materialansvar. | R06 |
| #opprett-kontrakt | 4 | Tilpass kontraktstekstene. | R06 |
| #opprett-kontrakt | 5 | Kontroller og generer dokumentet. | Existing PDF sufficient; optional O03 for Timeliste only |
| #dokumentoversikt | 1 | Åpne Dokumenter. | E06, E09, E10 |
| #dokumentoversikt | 2 | Velg dokumentet i listen. | E06, E09, E10 |
| #dokumentoversikt | 3 | Velg neste handling. | E06, E09, E10 |
| #lag-faktura-fra-dokument / #timeliste-til-faktura | 1 | Velg timelisten og Opprett faktura. | E06, E09, E10, E07, E08, R01, R03 |
| #lag-faktura-fra-dokument / #timeliste-til-faktura | 2 | Kontroller fire separate kategorier. | E06, E09, E10, E07, E08, R01, R03 |
| #lag-faktura-fra-dokument / #timeliste-til-faktura | 3 | Lagre eller generer fakturaen. | Existing PDF sufficient; optional O03 for Timeliste only |
| #lag-faktura-fra-dokument / #tilbud-til-faktura | 4 | Åpne tilbudet i Dokumenter. | E06, E09, E10, E07, E08, R01, R03 |
| #lag-faktura-fra-dokument / #tilbud-til-faktura | 5 | Se gjennom det som følger med. | E06, E09, E10, E07, E08, R01, R03 |
| #lag-faktura-fra-dokument / #tilbud-til-faktura | 6 | Generer og last ned PDF. | E06, E09, E10, E07, E08, R01, R03 |
| #lag-faktura-fra-dokument / #kontrakt-til-faktura | 7 | Åpne kontrakten i Dokumenter. | E06, E09, E10, E07, E08, R01, R03 |
| #lag-faktura-fra-dokument / #kontrakt-til-faktura | 8 | Kontroller kilde, linjer og beløp. | E06, E09, E10, E07, E08, R01, R03 |
| #lag-faktura-fra-dokument / #kontrakt-til-faktura | 9 | Lagre eller lag PDF. | E06, E09, E10, E07, E08, R01, R03 |
| #lag-kontrakt-fra-tilbud | 1 | Velg tilbudet i Dokumenter. | E09, R02 |
| #lag-kontrakt-fra-tilbud | 2 | Kontroller kontraktsgrunnlaget. | E09, R02 |
| #lag-kontrakt-fra-tilbud | 3 | Tilpass kontrakten videre. | E09, R02 |
| #lag-kontrakt-fra-tilbud | 4 | Lagre og avtal signering. | E09, R02 |
| #hvordan-arbeidsokter-fungerer | 1 | Åpne Registreringer. | E01, E04, E05 |
| #hvordan-arbeidsokter-fungerer | 2 | Bygg opp registreringene dag for dag. | E01, E04, E05 |
| #hvordan-arbeidsokter-fungerer | 3 | Velg det du vil bruke. | E01, E04, E05 |
| #legg-til-en-arbeidsokt | 1 | Åpne registreringsskjemaet. | E01, E02, E03 |
| #legg-til-en-arbeidsokt | 2 | Fyll inn arbeidsdagen. | E01, E02, E03 |
| #legg-til-en-arbeidsokt | 3 | Marker ekstraarbeid eller legg til KM. | E01, E02, E03 |
| #legg-til-en-arbeidsokt | 4 | Velg Lagre registrering. | E01, E02, E03 |
| #importer-arbeidsokter-til-timeliste | 1 | Marker registreringene. | E01, E04, E05, E06 |
| #importer-arbeidsokter-til-timeliste | 2 | Kontroller de importerte radene. | E01, E04, E05, E06 |
| #importer-arbeidsokter-til-timeliste | 3 | Lagre eller generer timelisten. | E01, E04, E05, E06 |


## 11. Audit-only scope verification

Only `docs/phase-5.2b.1-mobile-documentation-capture-plan.md` is created. Existing uncommitted Phase 5.2A implementation, prior reports, raw screenshots and local artifacts are preserved. No application/content/SEO edits, image derivatives, commits, pushes or deployments. Stop here and await approval.

Compared SHA-256 hashes of all 230 pre-existing tracked/untracked nonignored files against the start-of-audit baseline: none changed or disappeared. Only this report was added; Git HEAD and staging index remained unchanged. `git diff --check` passed, with Git's existing LF-to-CRLF notice for the previously modified instructions route.

### Follow-up completeness validation

The working copy already contained all three completed tables when this follow-up began; none of the reported placeholders remained. Preserved the existing capture matrix and all original A/B/C/D classifications without repeating the image audit. Reorganized the owner checklist below into the three capture sessions. Verified: zero unresolved placeholders; exactly 19 unique logical states (10 Essential, 6 Recommended, 3 Optional); every session capture ID resolves to the matrix; all 29 original instructions and 143 original steps are covered (A 30, B 28, C 63, D 22); all 19 checklist filenames and destination paths exactly match the matrix. Only this report is modified.

## OWNER ACTION REQUIRED — SCREENSHOTS TO CAPTURE

Bruk en ekte mobiltelefon i stående format, norsk grensesnitt, normal nettleserzoom og trygge demodata. Lukk tastaturet når det skjuler innholdet. Behold originale PNG-er; noter telefon, operativsystem, nettleser, bildedimensjoner og dokument-/kilde-ID-er. Pikselmålene i PNG-en er ikke nødvendigvis nettleserens CSS-bredde.

Forbered én demokunde/ett prosjekt og et arbeidernavn. Bruk en vanlig registrering og en Ekstra-registrering, begge med kilometer når dette støttes og KM er aktivert, slik at fakturaen kan vise alle fire kategorier. Ikke send dokumenter til ekte kunder, bestill Premium eller gjennomfør betaling/signering.

**Omfang: 10 nødvendige, 6 anbefalte og 3 valgfrie tilstander.** Et bilde kan dekke flere tilstander dersom alt er lesbart. Ta en ekstra ekte skjermvisning hvis nødvendige felt eller handlinger ligger utenfor bildet; ikke sett sammen en kunstig skjerm. Filbanene nedenfor er foreslåtte lagringssteder, ikke krav om at du oppretter mapper på telefonen.

### Økt 1 — Registreringer → Timeliste → Faktura

1. **O01 — Valgfritt.** Valgfritt: Åpne appens faktiske mobilnavigasjon. Vis navigasjonsvalgene med nok sammenheng til å forstå hvor Registreringer og dokumentene finnes.

   Fil: `public/images/product/overview/source/mobile/app_navigation_mobile.png`.

2. **O02 — Valgfritt.** Valgfritt: Hvis KM må aktiveres, åpne Standard for timeliste. Vis Aktiver KM og den tilhørende lagreknappen. Eksisterende skrivebordsbilde er ellers tilstrekkelig.

   Fil: `public/images/product/settings/source/mobile/timelist_km_setting_mobile.png`.

3. **E02 — Nødvendig.** Opprett først én vanlig registrering uten å fotografere hvert felt. Begynn deretter en registrering for ekstraarbeid: fyll dato, arbeidsbeskrivelse, starttid, sluttid og pause. Ta bilde av denne øvre delen før du lagrer.

   Fil: `public/images/product/timeliste/source/mobile/registration_form_mobile.png`.

4. **E03 — Nødvendig.** Fortsett i samme registrering. Marker Ekstra og legg inn kilometer når KM er aktivert. Vis Ekstra, KM-verdi og Lagre registrering; ta bildet før lagring.

   Fil: `public/images/product/timeliste/source/mobile/registration_extra_km_save_mobile.png`.

5. **E01 — Nødvendig.** Lagre registreringen og gå tilbake til Registreringer. Vis begge lagrede registreringer, én vanlig og én Ekstra, sammen med tittelen og Legg til registrering.

   Fil: `public/images/product/timeliste/source/mobile/registrations_saved_mobile.png`.

6. **E04 — Nødvendig.** Velg begge registreringene. Vis markeringene, valgt antall hvis det vises, og Importer til timeliste. Hvis importknappen ligger utenfor bildet, ta også et eget bilde av den med utvalgskontekst.

   Fil: `public/images/product/timeliste/source/mobile/registrations_selected_import_mobile.png`.

7. **E05 — Nødvendig.** Velg Importer til timeliste. Vis resultatet med arbeidernavn, prosjekt eller annen dokumentidentitet, importerte rader og kilde/antall hvis dette vises. Noter faktisk antall importerte rader.

   Fil: `public/images/product/timeliste/source/mobile/timelist_import_result_mobile.png`.

8. **E06 — Nødvendig.** Kontroller og lagre timelisten, og åpne den i Dokumenter. Vis dokumentidentiteten og handlingene Generer PDF og Opprett faktura. Ta et ekstra utsnitt hvis handlingene ikke får plass samtidig.

   Fil: `public/images/product/timeliste/source/mobile/timelist_document_actions_mobile.png`.

9. **O03 — Valgfritt.** Valgfritt: Velg Generer PDF og åpne den faktiske timeliste-PDF-en i mobilens nettleser eller PDF-viser. Ta et lesbart bilde og gå tilbake til dokumentet. Eksisterende PDF-eksempel er ellers tilstrekkelig.

   Fil: `public/images/product/timeliste/source/mobile/timelist_pdf_view_mobile.png`.

10. **E07 — Nødvendig.** Velg Opprett faktura fra timelisten. Kontroller eller legg inn faktiske satser. Vis referansen til timelisten/arbeideren, vanlige timer og vanlige kilometer med betegnelser, antall og priser.

   Fil: `public/images/product/timeliste/source/mobile/timelist_invoice_regular_mobile.png`.

11. **E08 — Nødvendig.** Bla videre i samme fakturautkast. Vis ekstra timer og ekstra kilometer med betegnelser, antall og priser. E07 og E08 skal samlet vise alle fire kategoriene; ta et ekstra bilde hvis nødvendig.

   Fil: `public/images/product/timeliste/source/mobile/timelist_invoice_extra_mobile.png`.

### Økt 2 — Tilbud → Faktura og Tilbud → Kontrakt → Faktura

12. **R05 — Anbefalt.** Anbefalt: Opprett et nytt tilbud. Før lagring viser du dokumentidentitet og tilbudslinje med beskrivelse, enhetspris, antall og MVA. Ta med Lagre/Generer hvis dette får plass naturlig.

   Fil: `public/images/product/tilbud/source/mobile/offer_create_mobile.png`.

13. **E09 — Nødvendig.** Lagre tilbudet og åpne det i Dokumenter. Vis hvilket tilbud som er valgt og handlingene Opprett faktura og Opprett kontrakt. Et egnet eksisterende demotilbud kan også brukes.

   Fil: `public/images/product/tilbud/source/mobile/offer_document_actions_mobile.png`.

14. **R01 — Anbefalt.** Anbefalt: Velg Opprett faktura. Vis tilbudsreferansen og minst én kopiert linje med antall og priser i fakturautkastet. Gå deretter tilbake til tilbudet.

   Fil: `public/images/product/tilbud/source/mobile/invoice_from_offer_mobile.png`.

15. **R02 — Anbefalt.** Anbefalt: Velg Opprett kontrakt fra samme tilbud. Vis tilbudsreferanse, arbeidsbeskrivelse/pris og en redigerbar kontraktsdel. Gjør en selvstendig endring og noter hva du endret før du lagrer kontrakten.

   Fil: `public/images/product/tilbud/source/mobile/contract_from_offer_mobile.png`.

16. **E10 — Nødvendig.** Åpne den lagrede kontrakten i Dokumenter. Vis kontraktens identitet og Opprett faktura; ta med PDF-/redigeringsvalg hvis de allerede er synlige. Et egnet eksisterende demodokument kan brukes hvis bare de nødvendige menybildene tas nå.

   Fil: `public/images/product/kontrakt/source/mobile/contract_document_actions_mobile.png`.

17. **R03 — Anbefalt.** Anbefalt: Velg Opprett faktura fra kontrakten. Vis kontraktsreferansen og en kopiert fakturalinje med faktiske verdier. Ikke presenter beløpet som en automatisk beregnet delbetaling.

   Fil: `public/images/product/kontrakt/source/mobile/invoice_from_contract_mobile.png`.

### Økt 3 — Selvstendig dokumentoppretting

18. **R04 — Anbefalt.** Anbefalt: Start Opprett → Faktura uten å konvertere et annet dokument. Vis kunde, fakturalinje og de faktiske Lagre/Generer-valgene der de får plass. Bruk et ekstra bilde bare hvis nødvendig.

   Fil: `public/images/product/invoice/source/mobile/invoice_create_mobile.png`.

19. **R06 — Anbefalt.** Anbefalt: Start Opprett → Kontrakt uten å bruke et tilbud. Vis kunde/arbeidsbeskrivelse, prisvalg og relevante lagre-/genererknapper. Bruk Time 900 bare hvis du bevisst vil matche dagens selvstendige eksempel.

   Fil: `public/images/product/kontrakt/source/mobile/contract_create_mobile.png`.

Tilbudsskjemaet R05 tas allerede i økt 2; det trenger ikke et nytt opptak i økt 3. Start med de nødvendige tilstandene hvis du vil dele leveransen i flere omganger.
