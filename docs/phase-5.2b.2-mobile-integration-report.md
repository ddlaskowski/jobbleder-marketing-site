# Phase 5.2B.2 — Authentic mobile screenshot integration

19 November 2026, Europe/Berlin. **IMPLEMENTED LOCALLY — READY FOR OWNER VISUAL REVIEW.** No commit, push or deployment.

Preview: [instructions hub](http://127.0.0.1:3030/instruksjoner). Open an instruction and select **Se på mobil** at the relevant step.

## 1. Implementation summary and scope

Reviewed Phase 5.1, Phase 5.2A and the Phase 5.2B.1 plan without repeating the original image audit. Inventoried and visually inspected all **21 authentic phone PNGs** in the owner's canonical `public/images/product/mobile/source/` directory. Its actual paths supersede the proposed per-product capture directories. Original PNGs, including copies elsewhere in the repository, are preserved byte-for-byte; none were moved or renamed.

Integrated **20 distinct captures** into **20 expandable mobile examples**, comprising **24 phone figures**, across all ten Phase 5.2A-modernized instructions. All previous **25 desktop/PDF figures remain**, for 49 figures when everything is expanded. Existing 29 instruction anchors, eight category anchors, three conversion-branch anchors and 42 modernized step groups remain intact. The other sixteen instruction bodies and three small terminology overrides are not expanded in scope.

Mobile examples are separate, explicitly captioned examples at the appropriate step, available on desktop and mobile. They are collapsed initially and rendered before the corresponding desktop figure. This is deliberate: the mobile registration count, document IDs, invoice quantities and contract configuration often differ from the desktop examples. No authentic phone image is silently substituted into a misleading responsive pair.

No homepage/product-page content, SEO metadata, sitemap/robots, backend, authentication or analytics changes. The only shared component change is an opt-in original-link capability; existing callers retain their output. No new dependencies.

## 2. Exact source inventory and optimization

All sources are **332 × 720 pixels**. Derivatives retain those dimensions with **no crop, no resize and lossless WebP**. Each derivative was decoded to RGBA and compared with its original: **20/20 pixel-identical**.

The 20 used originals total **1,347,803 bytes**; their derivatives total **901,986 bytes**, saving **445,817 bytes (33.08%)**. The complete 21-PNG inventory totals **1,413,087 bytes**. The unused original has no derivative, avoiding a redundant download/asset.

| Exact original path | Original dimensions / bytes | What it actually shows | Exact derivative path | Derivative dimensions / bytes |
|---|---|---|---|---|
| `public/images/product/mobile/source/contract_create_mobile_01.png` | 332 × 720 / 71144 | Configured progress-payment terms: two 50% rows, 14-day deadline, material responsibility Entreprenør. | `public/images/product/mobile/optimized/contract_create_mobile_01-9d95dd5a24ea.webp` | 332 × 720 / 49682 |
| `public/images/product/mobile/source/contract_create_mobile_02.png` | 332 × 720 / 63285 | Upper contract form: Kontrakt 11, customer/project and dates; pricing is outside the capture. | `public/images/product/mobile/optimized/contract_create_mobile_02-d1dd24a06489.webp` | 332 × 720 / 41870 |
| `public/images/product/mobile/source/contract_document_actions_mobile.png` | 332 × 720 / 56691 | Selected Kontrakt 11 with Rediger, Opprett kopi, Opprett faktura, Generer PDF. | `public/images/product/mobile/optimized/contract_document_actions_mobile-7615390c1d96.webp` | 332 × 720 / 34024 |
| `public/images/product/mobile/source/contract_from_offer_mobile.png` | 332 × 720 / 65359 | Work description referencing offer 29, Prisstruktur Tilbud, but offer selector still unselected. | `public/images/product/mobile/optimized/contract_from_offer_mobile-dc96091cddcc.webp` | 332 × 720 / 44542 |
| `public/images/product/mobile/source/invoice_create_mobile.png` | 332 × 720 / 64721 | Faktura 113 form: customer/project/dates, save/generate and beginning of parkett line. | `public/images/product/mobile/optimized/invoice_create_mobile-26b02c459f30.webp` | 332 × 720 / 44822 |
| `public/images/product/mobile/source/invoice_from_contract_mobile.png` | 332 × 720 / 64078 | Faktura 113 with Kilde: Kontrakt 11 and parkett line beginning. | `public/images/product/mobile/optimized/invoice_from_contract_mobile-4059b61ae977.webp` | 332 × 720 / 44312 |
| `public/images/product/mobile/source/invoice_from_offer_mobile.png` | 332 × 720 / 57596 | Parkett invoice line and summary: 12000 net, 3000 MVA, 15000 total; source/header absent. | `public/images/product/mobile/optimized/invoice_from_offer_mobile-19b76863d679.webp` | 332 × 720 / 40668 |
| `public/images/product/mobile/source/new_contract_document_edit_mobile.png` | 332 × 720 / 65284 | Another upper Kontrakt 11 form with offer-29 description; no visible changed clauses/pricing. Preserved unused. | None — preserved unused | — |
| `public/images/product/mobile/source/new_offer_document_edit_mobile.png` | 332 × 720 / 61585 | Tilbud 29 form with identity, dates and parkett price/quantity/MVA. | `public/images/product/mobile/optimized/new_offer_document_edit_mobile-3e7a019b8d5e.webp` | 332 × 720 / 42388 |
| `public/images/product/mobile/source/offer_document_actions_mobile.png` | 332 × 720 / 58001 | Selected Tilbud/Offer 29 with contract/invoice conversion actions and PDF. | `public/images/product/mobile/optimized/offer_document_actions_mobile-e6dc31f296e1.webp` | 332 × 720 / 34196 |
| `public/images/product/mobile/source/registrations_saved_mobile.png` | 332 × 720 / 89378 | Three saved entries, one Ekstra, two with KM; Valgt: 0, import disabled. | `public/images/product/mobile/optimized/registrations_saved_mobile-72fede332c79.webp` | 332 × 720 / 63906 |
| `public/images/product/mobile/source/registrations_selected_import_mobile.png` | 332 × 720 / 98974 | Same three entries selected; Valgt: 3, active Importer til timeliste. | `public/images/product/mobile/optimized/registrations_selected_import_mobile-9c6dfb417ed0.webp` | 332 × 720 / 72030 |
| `public/images/product/mobile/source/registration_extra_km_save_mobile.png` | 332 × 720 / 66153 | 20 November waste removal, 08–10, pause 0, KM 50, Ekstra checked and save. | `public/images/product/mobile/optimized/registration_extra_km_save_mobile-4a67065d08f6.webp` | 332 × 720 / 44152 |
| `public/images/product/mobile/source/registration_form_mobile.png` | 332 × 720 / 67231 | 19 November plasterboard work, 08–16, pause 30, KM empty, Ekstra off and save. | `public/images/product/mobile/optimized/registration_form_mobile-35f62cf2d7be.webp` | 332 × 720 / 44472 |
| `public/images/product/mobile/source/timelist_import_result_mobile_01.png` | 332 × 720 / 76994 | Timeliste 265, Registreringer: 3 rader, project, Arbeider Demo, customer, save/generate. | `public/images/product/mobile/optimized/timelist_import_result_mobile_01-6d9d6b4db8f6.webp` | 332 × 720 / 54852 |
| `public/images/product/mobile/source/timelist_import_result_mobile_02.png` | 332 × 720 / 68506 | Imported timelist rows/fields: ordinary row and start of extra row; partial scroll view. | `public/images/product/mobile/optimized/timelist_import_result_mobile_02-b3d826797e8e.webp` | 332 × 720 / 43538 |
| `public/images/product/mobile/source/timelist_invoice_extra_mobile.png` | 332 × 720 / 63368 | Invoice draft middle: 45 ordinary KM at 12 and 2 extra hours at 1350; extra KM outside view. | `public/images/product/mobile/optimized/timelist_invoice_extra_mobile-89d3c1f3e42f.webp` | 332 × 720 / 42574 |
| `public/images/product/mobile/source/timelist_invoice_regular_mobile.png` | 332 × 720 / 65346 | Faktura 112, Kilde: Timeliste 265, first ordinary-hours line (9:30) at 900. | `public/images/product/mobile/optimized/timelist_invoice_regular_mobile-aac888f9e45f.webp` | 332 × 720 / 45380 |
| `public/images/product/mobile/source/timelist_invoice_regular_mobile_01.png` | 332 × 720 / 57939 | Actually Dokumenter → Timeliste 265, not an invoice: identity and conversion/PDF actions. | `public/images/product/mobile/optimized/timelist_invoice_regular_mobile_01-2091c06e2ae8.webp` | 332 × 720 / 35022 |
| `public/images/product/mobile/source/timelist_invoice_regular_mobile_02.png` | 332 × 720 / 61657 | Timeliste 265 preview/summary: 3 rows, 11h30 total, 2h extra, 95KM total, 50 extra. | `public/images/product/mobile/optimized/timelist_invoice_regular_mobile_02-a77b7c05e04f.webp` | 332 × 720 / 38652 |
| `public/images/product/mobile/source/timelist_invoice_summary_mobile.png` | 332 × 720 / 69797 | Invoice document preview: all four categories from Timeliste 265; not an exported PDF. | `public/images/product/mobile/optimized/timelist_invoice_summary_mobile-f4b16dce374e.webp` | 332 × 720 / 40904 |


### Mapping to the approved capture plan

- E01–E04: saved registrations, selected/import state and both registration forms are present under the expected names, but the saved/selected list has **three**, not two, entries.
- E05: both `timelist_import_result_mobile_01.png` and `_02.png` show the import context/rows. The source badge says **Registreringer: 3 rader**; the document is **Timeliste 265**.
- E06: `timelist_document_actions_mobile.png` is absent. The actual `timelist_invoice_regular_mobile_01.png` shows the saved Timeliste 265 and its actions; `_02.png` shows its rows/summary and the same actions. Their content, rather than the misleading invoice-related filename, determines their use.
- E07/E08: `timelist_invoice_regular_mobile.png` shows Faktura 112 from Timeliste 265. `timelist_invoice_extra_mobile.png` shows ordinary KM and extra hours, not all extra categories. The additional `timelist_invoice_summary_mobile.png` shows **all four categories together** in the document preview. These three views form one explanatory sequence.
- E09/E10 and R01–R04: actual offer/contract actions and conversion/creation captures are present. `invoice_from_offer_mobile.png` shows the line and summary, not a visible document ID/source marker; its caption does not invent one.
- R05: the proposed `offer_create_mobile.png` is absent. The approved additional `new_offer_document_edit_mobile.png` supplies the actual offer-form view, captioned as Tilbud 29 in the form rather than proof of a separate new offer.
- R06: `_02` shows contract identity/dates; `_01` shows payment/material settings. The ordering follows actual content, not filename numbering.
- O01/O02/O03: no dedicated navigation, KM-settings or phone PDF-viewer capture is present. Bottom navigation is visible incidentally in the supplied images; this is not substituted for a dedicated navigation tutorial. Existing desktop settings and full PDFs remain.

## 3. Integrated instructions

| Existing instruction anchor | Mobile example groups | Phone figures | What was added |
|---|---:|---:|---|
| #opprett-faktura | 1 | 1 | kunde og fakturalinje |
| #opprett-timeliste | 1 | 2 | importerte registreringer |
| #opprett-tilbud | 1 | 1 | tilbudsskjemaet |
| #opprett-kontrakt | 2 | 2 | parter og datoer; betalingsvilkår og materialer |
| #dokumentoversikt | 1 | 1 | dokument og handlinger |
| #lag-faktura-fra-dokument | 6 | 8 | åpne handlingene for timelisten; kontroller de fire kategoriene; handlingene for tilbudet; linjen fra tilbudet; handlingene for kontrakten; faktura med kontrakt som kilde |
| #lag-kontrakt-fra-tilbud | 2 | 2 | opprett kontrakt fra tilbudet; arbeidsbeskrivelse og prisgrunnlag |
| #hvordan-arbeidsokter-fungerer | 1 | 1 | lagrede arbeidsdager |
| #legg-til-en-arbeidsokt | 2 | 2 | fyll inn arbeidsdagen; ekstraarbeid og kilometer |
| #importer-arbeidsokter-til-timeliste | 3 | 4 | velg og importer registreringene; se resultatet av importen; kontroller den lagrede timelisten |


The mobile images extend the existing instructions. They do not add mandatory product steps, plan restrictions, sending, signature or automation promises.

## 4. Responsive media implementation

- Added `content/instructionMobileMedia.json`, separate from the Phase 5.2A desktop manifest. Added reproducible `scripts/prepare-instruction-mobile-media.mjs`; running the old desktop generator does not overwrite the mobile manifest.
- Extended the existing GuideStep data with optional `mobileExample` title, description and images. The hub renders native nested details/summary sections using the same `ProductMedia`/Next.js Image figure and original-link pattern. No new client component, viewer dependency or viewport JavaScript.
- Preserved existing picture/source pairs and the **639px** mobile art-direction boundary. Those pairs remain desktop-derived details with equivalent original states. At 375px they use the existing narrow crops; at 768/1280/1440 they retain desktop presentation. Authentic phone examples remain separately identified at every width because their data/compositions differ.
- Checked the recorded currentSrc values for all eight existing responsive pairs in all eight width/theme cases: **64 source-selection assertions passed**.
- Phone galleries use an adaptive grid with a natural maximum column width of 332px. Images keep their native ratio; no fixed-height cap, enlargement, device frame or cover crop. A second column fits only when available space allows readable portraits. At 375px the actual image pixels render approximately **283px wide** inside the 285px figure; full-size links remain available.
- Native width/height and lazy loading are retained. All original guide cards and new mobile examples start closed. The eight browser runs observed **zero initially loaded instruction images**. Full expansion naturally increases page length; additional phone examples do not lengthen the initial closed hub and can be opened independently.

### Appropriate original image links

Each standalone phone figure opens its own PNG under `/images/product/mobile/source/`. The hub passes the original path of any existing mobile crop to the shared component as well.

`ProductMedia` now accepts optional `mobileOriginalSrc`. When different desktop/mobile originals are supplied, two mutually exclusive links follow exactly the same normal 639px or compact 1023px boundary as the picture source. Hidden alternatives leave the tab order/accessibility tree; no incorrect desktop destination remains active for the mobile variant. Existing eight instruction crop pairs currently share the same original PNG, so they correctly retain one link. Existing product-page callers omit the new property and retain identical markup.

Tested the actual shared component in an isolated local fixture at 375/639/640/768/1023/1024/1280/1440px: **16 normal/compact cases**, exactly one visible link each, correct original destination. This fixture tests routing behavior; it is not a new product example or page.

## 5. Captions and terminology

- Visible actions remain **Registreringer**, **Legg til registrering**, **Lagre registrering**, **Importer til timeliste**, **Opprett faktura**, **Opprett kontrakt** and **Opprett kopi**. Existing URLs/slugs stay stable.
- Captions explicitly distinguish three phone registrations from two desktop registrations and Timeliste 265/Faktura 112 from Timeliste 264/Faktura 111. The independent invoice-form capture shows 113; it is not labelled as the export of desktop Faktura 110.
- The phone contract conversion shows **Faktura 113 from Kontrakt 11**; the separate desktop conversion shows Faktura 112. No ID/value is carried across silently.
- Timeliste 265's preview shows 11 h 30 min total including 2 extra hours and 95 KM including 50 extra KM. Its invoice preview separates 9.5 ordinary hours, 45 ordinary KM, 2 extra hours and 50 extra KM. It is described as a document preview, not a PDF.
- In `contract_from_offer_mobile.png`, the description references offer 29 and Prisstruktur is Tilbud, but **Velg tilbud still shows its placeholder**. The caption tells the reader to check/select the source before proceeding. The image is not presented as proof that the offer dropdown is already selected.
- Contract payment terms show two 50% fields, a 14-day deadline and material responsibility Entreprenør. These are configured terms, not evidence of automatic installments/invoice generation. The prior PDF remains a different contract configuration; manual signing guidance remains.
- Full creation/conversion functionality stays Free. Premium distinctions remain PDF branding/company logo. The images demonstrate the responsive web application; no native-app, offline or background-sync claim is added.

## 6. Executed validation and accessibility

| Check | Result |
|---|---|
| `npx.cmd tsc --noEmit` | PASS |
| Full `npm.cmd run lint` | PASS; no ESLint warnings/errors |
| `npm.cmd run build` | PASS; all 55 static pages generated |
| Build warnings | Environment/tooling emitted Node DEP0205: module.register() deprecated; no related code/dependency change made |
| Original-image decoded pixel comparison | PASS, 20/20 lossless derivatives |
| Automated axe WCAG A/AA, 2.1/2.2 AA and best-practice checks | Zero detected violations in all eight expanded-page cases |
| Guide/phone example keyboard operation | Enter/Space and visible 3px focus checked for 29 guide summaries and 20 phone-example summaries in each case |
| Additional actual Tab sequence | PASS, 60 steps with visible 3px focus |
| Deep links / five workflow links | PASS: correct instruction/branch opened and focused, below sticky header; incoming and cross-guide links checked |
| Full-size navigation | PASS: 44 distinct originals clicked and decoded, including all 20 phone originals |
| Asset endpoints | PASS: 97 derivative/original URLs returned 200 and matched local SHA-256 bytes |
| Alt text / accessible names | All 49 figures have nonempty descriptive alt; link names retain visible Åpne hele bildet plus the image description |
| Phone full-size touch targets | At least 44px high; native mobile-example summaries also have a 44px minimum |

### Contrast manual-review results

axe retained color-contrast **incomplete** entries: 12 at 375px and one at each wider width. These are not counted as passed automated contrast assertions. Follow-up checked every incomplete node at 375 and 1440, in light and dark preferences: text remained unobscured by hit testing and computed contrast ranged from **7.58:1 to 17.85:1** (the shared navigation item was 10.35:1). Phone captions use rgb(71,85,105) on white: 7.58:1. All four follow-up cases passed. Text inside raster screenshots is outside axe's contrast assessment; dense labels still benefit from opening the original.

## 7. Responsive and visual results

| Width | Light preference | Dark preference | Reduced motion / normal preference | Layout / images / CLS |
|---:|---|---|---|---|
| 375px | PASS | PASS | auto / smooth | No horizontal overflow; natural image ratios; CLS 0 observed |
| 768px | PASS | PASS | auto / smooth | No horizontal overflow; natural image ratios; CLS 0 observed |
| 1280px | PASS | PASS | auto / smooth | No horizontal overflow; natural image ratios; CLS 0 observed |
| 1440px | PASS | PASS | auto / smooth | No horizontal overflow; natural image ratios; CLS 0 observed |

These are **local production-build Chromium laboratory checks**, not authenticated phone-app tests or production field measurements. Both OS preferences retain the established light instruction/product surfaces; no unrequested dark-palette redesign was introduced. No Lighthouse run was requested or performed.

Captured hub/workflow full-page screenshots at all four widths and 20 focused viewport screenshots covering registration entry, selected import, all-four-category preview, offer-derived contract and payment terms at 375/1440 in both preferences. Visually inspected representative mobile/desktop, light/dark views: no distorted portraits, missing category path, overlapping caption/control or unexpected horizontal clipping observed. Sticky-header screenshots begin partway through the expanded instruction by design; this is scroll position, not hidden page content. Caption-below-image checks passed for all 20 viewport cases.

### Test-environment interruptions and completion

Chrome required execution outside the filesystem sandbox, and the local preview was started in the same host environment to make localhost reachable. The first adapted screenshot helper waited on lazy images inside a closed nested example; it was corrected to open the example before decoding. The main run then completed all eight responsive/a11y cases, 20 regression cases and 97 asset checks, but its original-image click helper timed out with the target under the sticky header. A dedicated continuation centered each link before clicking and successfully tested all 44 originals. A fixture helper's network-idle wait was also replaced with DOM/layout readiness. No application changes were made to mask these test-harness problems; interrupted attempts are not reported as passed runs.

## 8. Regression and SEO preservation

Homepage, Faktura, Timeliste, Tilbud and Kontrakt passed **20 local cases** (five pages × four widths). Compared entire rendered main/header/footer, title, description, canonical and parsed JSON-LD against saved Phase 5.2A pre-change HTML: exact matches, with no horizontal overflow. Shared navigation and CTA markup/destinations therefore remain unchanged. No external account action or form submission was performed.

Instruction title, description, WWW canonical and existing parsed structured data also match the saved baseline. No new schema or metadata was introduced. Product-page source, original instruction arrays, sitemap/robots and PDF endpoint infrastructure remain byte-unchanged.

The previously known local `/api/handshake` **HTTP 400** and associated resource console errors persist. No page exceptions or other failing browser responses were observed. Analytics was not changed; no production analytics status is claimed.

## 9. Remaining gaps and readiness

- **P0/P1:** none identified in the executed local marketing checks. Ready for owner visual review; this is not permission to publish.
- **P2 documentation evidence:** offer-to-invoice phone image lacks its own visible source marker/ID, and the offer-derived contract still shows an unselected offer dropdown. Captions accurately limit what the images demonstrate; desktop source/result evidence remains. A later focused capture can strengthen these states without blocking this truthful integration.
- **P3 readability:** supplied phone originals are 332px wide; dense control labels at 375px may need original-image zoom. They are not enlarged or sharpened artificially. Portrait examples are independently collapsible to control reading length.
- **P3 optional media:** no dedicated mobile navigation, KM-settings or phone PDF-viewer image. Existing desktop/PDF explanations remain. Company settings, client/project creation, reports, other defaults and Premium media stay in the Phase 5.1 backlog.
- The additional `new_contract_document_edit_mobile.png` only provides another upper contract-form view, without showing the changed clauses/pricing. It remains preserved but unused; the desktop edited-contract evidence remains.
- Other unmodernized instruction claims, `/lage-faktura` contrast and unrelated blog findings remain outside scope. No authenticated workflow execution, real-device test or production deployment verification was performed here.

## 10. Exact files changed and evidence

**Five pre-existing implementation files modified:**

- `components/instructions/InstructionsHub.tsx`
- `components/instructions/instructions.module.css`
- `content/instructionGuides.ts`
- `components/site/Primitives.tsx`
- `components/site/site.module.css`

**23 files created (manifest, generator, this report and 20 WebPs):**

- `content/instructionMobileMedia.json`
- `scripts/prepare-instruction-mobile-media.mjs`
- `docs/phase-5.2b.2-mobile-integration-report.md`
- `public/images/product/mobile/optimized/registration_form_mobile-35f62cf2d7be.webp`
- `public/images/product/mobile/optimized/registration_extra_km_save_mobile-4a67065d08f6.webp`
- `public/images/product/mobile/optimized/registrations_saved_mobile-72fede332c79.webp`
- `public/images/product/mobile/optimized/registrations_selected_import_mobile-9c6dfb417ed0.webp`
- `public/images/product/mobile/optimized/timelist_import_result_mobile_01-6d9d6b4db8f6.webp`
- `public/images/product/mobile/optimized/timelist_import_result_mobile_02-b3d826797e8e.webp`
- `public/images/product/mobile/optimized/timelist_invoice_regular_mobile_01-2091c06e2ae8.webp`
- `public/images/product/mobile/optimized/timelist_invoice_regular_mobile_02-a77b7c05e04f.webp`
- `public/images/product/mobile/optimized/timelist_invoice_regular_mobile-aac888f9e45f.webp`
- `public/images/product/mobile/optimized/timelist_invoice_extra_mobile-89d3c1f3e42f.webp`
- `public/images/product/mobile/optimized/timelist_invoice_summary_mobile-f4b16dce374e.webp`
- `public/images/product/mobile/optimized/offer_document_actions_mobile-e6dc31f296e1.webp`
- `public/images/product/mobile/optimized/contract_document_actions_mobile-7615390c1d96.webp`
- `public/images/product/mobile/optimized/invoice_from_offer_mobile-19b76863d679.webp`
- `public/images/product/mobile/optimized/contract_from_offer_mobile-dc96091cddcc.webp`
- `public/images/product/mobile/optimized/invoice_from_contract_mobile-4059b61ae977.webp`
- `public/images/product/mobile/optimized/invoice_create_mobile-26b02c459f30.webp`
- `public/images/product/mobile/optimized/contract_create_mobile_02-d1dd24a06489.webp`
- `public/images/product/mobile/optimized/contract_create_mobile_01-9d95dd5a24ea.webp`
- `public/images/product/mobile/optimized/new_offer_document_edit_mobile-3e7a019b8d5e.webp`


All 261 pre-existing tracked/untracked nonignored files were hash-compared against the start-of-phase baseline. Only the five scoped implementation files above changed; all original PNGs and unrelated work remain identical. Git HEAD/index remain unchanged. Build caches are ordinary ignored tooling output, not release assets.

QA artifacts remain outside the repository under `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase52b2/`: inventory/contact sheets, browser-results.json, supplement.json, links.json, manual-contrast.json, original-link-fixture.html and screenshots. The browser-results file retains the interrupted click-helper failure; links.json records its successful continuation. The complete result is assessed from these files together, not from an interrupted run alone.

Local previews:

- [Registreringer](http://127.0.0.1:3030/instruksjoner#legg-til-en-arbeidsokt)
- [Import to Timeliste](http://127.0.0.1:3030/instruksjoner#importer-arbeidsokter-til-timeliste)
- [Timeliste → Faktura](http://127.0.0.1:3030/instruksjoner#timeliste-til-faktura)
- [Tilbud → Faktura](http://127.0.0.1:3030/instruksjoner#tilbud-til-faktura)
- [Tilbud → Kontrakt](http://127.0.0.1:3030/instruksjoner#lag-kontrakt-fra-tilbud)
- [Kontrakt → Faktura](http://127.0.0.1:3030/instruksjoner#kontrakt-til-faktura)

**Stop after local implementation and verification. Await owner review before commit, push or deployment.**
