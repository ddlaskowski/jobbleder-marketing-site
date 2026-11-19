# Phase 5.1 — Instructions and media coverage audit

Completed 19 November 2026, Europe/Berlin. Resumed from the saved Phase 5.1 investigation; completed image inspections and browser checks were reused, not rerun. **AUDIT COMPLETE — implementation awaits approval.**

## 1. Executive summary

The highest-value next step is to illustrate and correct the existing `/instruksjoner` hub using the authentic materials already available. Do not start with analytics, a new visual system, synthetic screenshots or a large new capture request.

- **29 instructions, 143 existing steps, eight sections** audited in the instruction hub.
- **27 of 29 instructions can be improved immediately with existing images**, including partial/contextual illustrations. **18** have at least one step directly COVERED; the other nine have context only. The report does not equate a context image with a complete tutorial.
- **15 instructions need additional screenshots for a complete procedural walkthrough** under the practical completion assessment below. These overlap the 27 that can already be improved. The other **14** can receive their principal illustration pass with current material; some still need terminology corrections or product-behavior confirmation. These are not claims that all their steps are fully illustrated today.
- Step-level classification: **69 COVERED, 44 PARTIAL, 30 MISSING**. Eleven instructions contain at least one MISSING step; four more need missing screen states within PARTIAL coverage. These four are invoice conversion from documents, invoice correction, settings overview and non-timelist document defaults. This explains the distinction between eleven with completely missing steps and fifteen needing additional capture for completion.
- **17 SEO/product landing routes and 18 blog articles** were also reviewed, with the blog index, five category indexes and supporting navigation components inventoried. The 29/143 counts refer specifically to the hub, not these additional educational pages.
- Media: **101 files under `public/images/product/`: 50 PNGs and 51 WebPs**. `public/app-preview.png` is an additional original outside that directory. Three cross-directory PNG pairs are byte-identical. There are **48 distinct PNG byte streams including the overview**, representing **47 visual families** when the two document-flow PNGs are treated as full/cropped versions of the same infographic. An infographic is not an application screenshot. WebP derivatives do not add new source materials.
- Existing material already demonstrates registration selection/import, worker names, ordinary/Extra hours and kilometers, four invoice categories, offer creation, both offer workflows, independent contract editing, configurable contract terms, PDFs and Free/Premium output branding.
- Highest-priority captures: **actual company/billing settings** and the **selected contract's document-actions panel**. Customer/project creation, document-copy result, reports, other defaults and Premium settings are later focused sessions; existing cards/output examples must not be substituted for these input screens.
- Concrete issues include outdated Registreringer/copy/settings terminology, an incorrect internal blog link returning 404, a first-step company/customer screenshot mismatch on Faktura, unfinished contract/workflow blog articles, unsupported autosave wording and the legacy SEO renderer's light-mode contrast defect.

Recommendation: approve **Phase 5.2A — instruction hub and core document workflows using existing media**. Keep current URLs and section fragments. Separate additional captures and education-page expansion into later phases. No application/content changes are made by this audit.

## 2. Evidence, scope and existing organization

Repository root for every relative path in this report: `C:/Users/ddlas/Code/jobbleder-site/`. Public URLs use `https://www.jobbleder.no`. File paths below are exact; filename spelling errors in existing assets are deliberately preserved.

Recovered investigation artifacts live outside the application repository at:

`C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/`

| Artifact | Reused evidence |
|---|---|
| `phase51-inventory.cjs` / `phase51/inventory.json` | Parsed instruction, SEO and blog content; recursive image paths, dimensions, byte sizes, hashes and manifest relationships. |
| `phase51-pixels.cjs` / `phase51/derivative-pixels.json` | Decoded derivative/source comparisons. 41 WebPs match the corresponding PNG/crop pixels exactly; eight invoice WebPs are existing lossy derivatives; two unused historical workflow crops have no current manifest entry. |
| `phase51-browser.cjs` / `phase51/browser.json` | Sixteen read-only production browser observations: eight hub cases and four cases each for two representative educational routes. |
| `phase51-links.cjs` / `phase51/links.json` | Sixteen distinct internal/download URLs checked, including the suspected broken link and correct blog destination. |
| `phase51-notes.cjs` | Actual visual observations for source images, per-instruction findings and all 143 step mappings. |
| `phase51/baseline.json` | Original HEAD/index and hashes for 213 pre-existing working files. Rechecked unchanged on resume. |

Original image contents were inspected during the previous investigation. The resume checked saved findings against unchanged file hashes; it did not repeat the image inspection, regenerate assets or rerun the network matrix. Eight lossy invoice derivatives and the two unmapped historical workflow crops were visually inspected as well. The 41 exact pixel matches establish what their existing crops actually contain without treating them as independent screenshots. No optimization script was executed.

Evidence labels used throughout:

- **CODE-VERIFIED**: marketing implementation, content, DOM structure, manifest relationships or inspected image pixels. This repository is not the authenticated application backend.
- **USER-CONFIRMED**: product capabilities supplied in the Phase 5.1 request and earlier approved phases.
- **SCREENSHOT-OBSERVED**: labels/states visible in supplied authentic captures; not a live authenticated end-to-end test.
- **UNVERIFIED**: a legacy instruction's assertion not established by those sources. Do not turn it into a new product promise.

### 2.1 Routes and content sources

| Route/source | Organization and rendering |
|---|---|
| `/instruksjoner` — `app/instruksjoner/page.tsx` | One long server-rendered page; H1 “Instruksjoner for Jobbleder”; eight category pills/section anchors; 29 H3 instruction cards with summaries, optional descriptions, numbered steps, tips/warnings and app actions. Uses legacy `Navbar`, `Container`, `GuideClusters`, `Footer`. |
| `content/instructionContent.ts` | Typed `InstructionSection`/`InstructionItem` arrays. Items have slugs but no screenshot/media fields. `video` is optional; two example video properties are commented out. No active videos. |
| `app/(seo)/[slug]/page.tsx` + `content/seoPages.ts` | 17 registered landing routes. Four select redesigned product components; the other thirteen use the legacy educational renderer with introductory bullets, sections, topic navigation, FAQ and related links. |
| `app/blogg/[slug]/page.tsx` + `content/blogPosts.ts` | 18 articles using paragraph/heading/list/CTA/link/note blocks. Article JSON-LD. No image/video block type. A `cta` block is text in a panel, not itself an actionable link. |
| `/blogg` — `app/blogg/page.tsx` | Date-sorted article index; category navigation and cards. |
| `/blogg/kategori/timeliste`, `/blogg/kategori/faktura`, `/blogg/kategori/tilbud`, `/blogg/kategori/kontrakt`, `/blogg/kategori/oversikt` | Five category archives from `app/blogg/kategori/[category]/page.tsx`; same content source, category-filtered cards. No additional procedural instructions. |
| `/om-oss`, `/kontakt` | Supporting discovery/contact routes, not additional tutorials. `/om-oss` links to `/instruksjoner`; contact is a support path. The application's own Hjelp screen is outside this marketing repository and was not audited as an authenticated help center. |

Hub metadata is code-verified: title `Instruksjoner for Jobbleder`; description `Lær hvordan du bruker Jobbleder til å opprette faktura, tilbud, timelister og kontrakter, registrere arbeidsøkter og holde oversikt over prosjekter, kunder og rapporter.`; canonical `https://www.jobbleder.no/instruksjoner`. Preserve these until a separately approved content/SEO change. `/instruksjoner` is already included in `app/sitemap.ts`.

**Existing hub fragments:** `#oversikt`, `#opprett`, `#dokumenter`, `#arbeidsokter`, `#prosjekter-kunder`, `#rapporter`, `#innstillinger`, `#premium`. Instruction item slugs are **not currently DOM IDs or separate routes**. For example `/instruksjoner#opprett-kontrakt` does not target the contract article. The inventory therefore gives the working section URL and identifies the card separately.

### 2.2 Discovery and cross-linking

- Shared `components/site/SiteChrome.tsx` navigation/footer and legacy `components/Navbar.tsx`/`Footer.tsx` all provide instruction discovery, but the hub still uses the legacy Hjem/Login header rather than the published product header.
- Homepage explicitly links to `/instruksjoner#dokumenter` and the hub. Timeliste links to `#arbeidsokter`; Tilbud links to `#opprett` and `#dokumenter`; Kontrakt links to `#opprett` and `#dokumenter`; Faktura's FAQ links to the hub. Preserve these existing fragments while changing visible terminology.
- Every hub action currently targets the app root `https://app.jobbleder.no`, including labels such as “Opprett faktura” and “Åpne Rapporter”. These are **not verified deep links** to the named screen. Reuse the shared login/Create account guidance and describe the next menu choice; do not invent authentication URLs.
- `GuideClusters.tsx` after the hub lists all SEO pages for Timeliste/Faktura/Tilbud, but omits Kontrakt. This is a useful later linking improvement, not a change made here.
- Legacy SEO `ClusterNavigation.tsx` links all same-topic pages, including the current page. `RelatedSeoPages.tsx` selects up to three same-topic plus two per other topic, capped at nine. It does not give step-specific instruction links.
- Blog `RelatedGuides.tsx` selects up to three same-topic SEO pages plus three other pillars (or pillar links for Oversikt); `RelatedBlogPosts.tsx` selects three articles with same-topic preference and fallback. These are discovery links, not substitutes for a targeted procedure.
- `components/HowItWorks.tsx` is a legacy four-step summary but is not imported by the current homepage. Do not inventory its unused “Send faktura” heading as a live current instruction.

### 2.3 Complete hub instruction inventory

All 29 cards currently have **zero screenshots and zero active videos**. Their exact existing steps are reproduced, classified and matched to files in section 4, avoiding a second divergent step list. “More media” below means additional screen states for a complete walkthrough, not a reason to postpone using existing images.

| # / current URL and card | Title / subject | Existing steps; media coverage | Accuracy, useful links and improvement | Additional media for complete walkthrough |
|---|---|---|---|---|
| I01 — [https://www.jobbleder.no/instruksjoner#oversikt](https://www.jobbleder.no/instruksjoner#oversikt); card `appens-hovedvisning` | Appens hovedvisning — Orientation/search | 4 steps; currently text-only. Available C/P/M: 3/1/0 | Replace unsupported report-detail implications with navigation only; name Oversikt as visible. Links: `/fakturaprogram-gratis`, `/timeliste-mal` | No for principal illustration pass — group A; retain verification notes. |
| I02 — [https://www.jobbleder.no/instruksjoner#oversikt](https://www.jobbleder.no/instruksjoner#oversikt); card `hovedmenyoversikt` | Hovedmenyoversikt — Navigation to all work areas | 6 steps; currently text-only. Available C/P/M: 3/3/0 | Use Registreringer and current Norwegian settings names; separate entry points from unverified report behavior. Links: `/instruksjoner#arbeidsokter`, `/instruksjoner#opprett` | No for principal illustration pass — group A; retain verification notes. |
| I03 — [https://www.jobbleder.no/instruksjoner#opprett](https://www.jobbleder.no/instruksjoner#opprett); card `opprett-faktura` | Opprett en faktura — Manual invoice/PDF | 7 steps; currently text-only. Available C/P/M: 6/1/0 | Add prerequisite company setup, exact button close-up, Free branding/unlimited invoices and explicit download/manual sending. Links: `/lage-faktura`, `/fakturaprogram-gratis`, `/instruksjoner#innstillinger` | No for principal illustration pass — group A; retain verification notes. |
| I04 — [https://www.jobbleder.no/instruksjoner#opprett](https://www.jobbleder.no/instruksjoner#opprett); card `opprett-timeliste` | Opprett en timeliste — Manual timelist/worker/import | 8 steps; currently text-only. Available C/P/M: 6/2/0 | Explain document worker name, no employee accounts, optional customer, KM setting and all four categories. Verify required-project behavior. Links: `/timeliste-mal`, `/timeliste-ansatt`, `/instruksjoner#arbeidsokter` | No for principal illustration pass — group A; retain verification notes. |
| I05 — [https://www.jobbleder.no/instruksjoner#opprett](https://www.jobbleder.no/instruksjoner#opprett); card `opprett-tilbud` | Opprett et tilbud — Offer lines/customer/project/PDF | 7 steps; currently text-only. Available C/P/M: 7/0/0 | Reuse editor+output and link both conversion paths. Clarify sending means distributing downloaded PDF. Links: `/tilbud-mal`, `/lage-tilbud`, `/instruksjoner#dokumenter` | No for principal illustration pass — group A; retain verification notes. |
| I06 — [https://www.jobbleder.no/instruksjoner#opprett](https://www.jobbleder.no/instruksjoner#opprett); card `opprett-kontrakt` | Opprett en kontrakt — Standalone contract/terms/PDF | 9 steps; currently text-only. Available C/P/M: 8/1/0 | Show price/payment/clauses details, manual signing and boundaries of payment-plan configuration. Label earlier PDF correctly. Links: `/kontrakt-mal`, `/hva-skal-en-kontrakt-inneholde`, `/instruksjoner#dokumenter` | No for principal illustration pass — group A; retain verification notes. |
| I07 — [https://www.jobbleder.no/instruksjoner#opprett](https://www.jobbleder.no/instruksjoner#opprett); card `opprett-kreditnota` | Opprett en kreditnota — Source invoice/credit note | 5 steps; currently text-only. Available C/P/M: 4/1/0 | Use available form immediately; verify invoice-correction rules and request output only if expanding this tutorial. Links: `/faktura-krav`, `/instruksjoner#dokumenter` | No for principal illustration pass — group A; retain verification notes. |
| I08 — [https://www.jobbleder.no/instruksjoner#dokumenter](https://www.jobbleder.no/instruksjoner#dokumenter); card `dokumentoversikt` | Dokumentoversikt — Search/filter/preview/actions | 4 steps; currently text-only. Available C/P/M: 4/0/0 | Pair overall list with action-bar detail; explain Rediger, Opprett kopi and Generer PDF separately. Links: `/instruksjoner#opprett`, `/instruksjoner#dokumenter` | No for principal illustration pass — group A; retain verification notes. |
| I09 — [https://www.jobbleder.no/instruksjoner#dokumenter](https://www.jobbleder.no/instruksjoner#dokumenter); card `gjenta-et-dokument` | Gjenta et dokument — Manual copy/reuse | 5 steps; currently text-only. Available C/P/M: 1/3/1 | Correct action label to Opprett kopi after approval; verify numbering behavior. Do not equate copy with recurring/scheduled invoicing. Links: `/instruksjoner#dokumenter`, `/instruksjoner#opprett` | Yes — group B; see capture plan. |
| I10 — [https://www.jobbleder.no/instruksjoner#dokumenter](https://www.jobbleder.no/instruksjoner#dokumenter); card `lag-faktura-fra-dokument` | Opprett faktura fra dokument — Three distinct invoice conversions | 4 steps; currently text-only. Available C/P/M: 2/2/0 | Split into Timeliste, Tilbud and Kontrakt branches; show source markers and review quantities/rates, never automatic sending. Links: `/timeliste-mal`, `/tilbud-mal`, `/kontrakt-mal`, `/fakturaprogram-gratis` | Yes — group B; see capture plan. |
| I11 — [https://www.jobbleder.no/instruksjoner#dokumenter](https://www.jobbleder.no/instruksjoner#dokumenter); card `lag-kontrakt-fra-tilbud` | Opprett kontrakt fra tilbud — Offer-to-contract/independent editing | 4 steps; currently text-only. Available C/P/M: 4/0/0 | Existing starting and destination images suffice; explain acceptance outside app and independent subsequent edits. Links: `/tilbud-mal`, `/kontrakt-mal` | No for principal illustration pass — group A; retain verification notes. |
| I12 — [https://www.jobbleder.no/instruksjoner#dokumenter](https://www.jobbleder.no/instruksjoner#dokumenter); card `rette-en-faktura` | Rette en faktura — Credit-note/corrected invoice | 4 steps; currently text-only. Available C/P/M: 1/3/0 | Verify blanket no-edit statement against actual app states before retaining it as a rule; no legal-compliance guarantee. Links: `/faktura-krav`, `/instruksjoner#opprett` | Yes — group B; see capture plan. |
| I13 — [https://www.jobbleder.no/instruksjoner#arbeidsokter](https://www.jobbleder.no/instruksjoner#arbeidsokter); card `hvordan-arbeidsokter-fungerer` | Hvordan Arbeidsøkter fungerer — Daily registrations | 4 steps; currently text-only. Available C/P/M: 4/0/0 | Rename visible UI terminology; show saved vs selected states, preserve existing #arbeidsokter inbound anchor. Links: `/timeliste-mal`, `/instruksjoner#arbeidsokter` | No for principal illustration pass — group A; retain verification notes. |
| I14 — [https://www.jobbleder.no/instruksjoner#arbeidsokter](https://www.jobbleder.no/instruksjoner#arbeidsokter); card `legg-til-en-arbeidsokt` | Legg til en arbeidsøkt — Date/time/break/Extra/KM | 6 steps; currently text-only. Available C/P/M: 4/2/0 | Use exact Legg til registrering/Lagre registrering labels; KM prerequisite is optional, not Premium. Links: `/instruksjoner#innstillinger`, `/timeliste-mal` | No for principal illustration pass — group A; retain verification notes. |
| I15 — [https://www.jobbleder.no/instruksjoner#arbeidsokter](https://www.jobbleder.no/instruksjoner#arbeidsokter); card `importer-arbeidsokter-til-timeliste` | Importer arbeidsøkter til timeliste — Select/import/review/save | 5 steps; currently text-only. Available C/P/M: 5/0/0 | Use two selected rows→two-import badge/three-row form accurately. Verify when registrations are consumed before describing cleanup. Links: `/timeliste-mal`, `/instruksjoner#opprett` | No for principal illustration pass — group A; retain verification notes. |
| I16 — [https://www.jobbleder.no/instruksjoner#prosjekter-kunder](https://www.jobbleder.no/instruksjoner#prosjekter-kunder); card `hvordan-prosjekter-fungerer` | Hvordan Prosjekter fungerer — Project grouping/hour totals | 5 steps; currently text-only. Available C/P/M: 3/2/0 | Use existing project card, current labels Frist/Grense; employee aggregates are names in documents. Edit/create behavior needs proof. Links: `/timeliste-prosjekt`, `/timeliste-ansatt` | No for principal illustration pass — group A; retain verification notes. |
| I17 — [https://www.jobbleder.no/instruksjoner#prosjekter-kunder](https://www.jobbleder.no/instruksjoner#prosjekter-kunder); card `opprett-et-prosjekt` | Opprett et prosjekt — Project prerequisites | 5 steps; currently text-only. Available C/P/M: 0/3/2 | Reuse overview shortcut/card context; obtain actual create form before field-by-field tutorial. Required-name-only claim unverified. Links: `/timeliste-prosjekt`, `/instruksjoner#opprett` | Yes — group B; see capture plan. |
| I18 — [https://www.jobbleder.no/instruksjoner#prosjekter-kunder](https://www.jobbleder.no/instruksjoner#prosjekter-kunder); card `hvordan-kunder-fungerer` | Hvordan Kunder fungerer — Customer record reuse | 4 steps; currently text-only. Available C/P/M: 3/1/0 | Existing card covers statistics/links; correct filename-based assumption about a dedicated timelist-by-name action. Links: `/tilbud-mal`, `/fakturaprogram-gratis` | No for principal illustration pass — group A; retain verification notes. |
| I19 — [https://www.jobbleder.no/instruksjoner#prosjekter-kunder](https://www.jobbleder.no/instruksjoner#prosjekter-kunder); card `opprett-en-kunde` | Opprett en kunde — Customer prerequisite | 5 steps; currently text-only. Available C/P/M: 0/3/2 | Existing saved card is not a creation form. Verify required/optional inputs before adding illustrated steps. Links: `/instruksjoner#opprett`, `/tilbud-mal` | Yes — group B; see capture plan. |
| I20 — [https://www.jobbleder.no/instruksjoner#rapporter](https://www.jobbleder.no/instruksjoner#rapporter); card `hvordan-rapporter-fungerer` | Hvordan Rapporter fungerer — Five report types | 5 steps; currently text-only. Available C/P/M: 0/0/5 | All report-body functionality remains documentation-only; confirm names, available views and Free scope before requesting capture. Links: `/instruksjoner#rapporter`, `/timeliste-prosjekt` | Yes — group B; see capture plan. |
| I21 — [https://www.jobbleder.no/instruksjoner#rapporter](https://www.jobbleder.no/instruksjoner#rapporter); card `maanedlig-salg` | Månedlig salg — Monthly invoice aggregation | 4 steps; currently text-only. Available C/P/M: 0/0/4 | No report screenshot. Do not substitute an invoice summary for a monthly-sales total. Links: `/fakturaprogram-gratis`, `/instruksjoner#rapporter` | Yes — group B; see capture plan. |
| I22 — [https://www.jobbleder.no/instruksjoner#rapporter](https://www.jobbleder.no/instruksjoner#rapporter); card `maanedlige-arbeidstimer` | Månedlige arbeidstimer — Period/worker/project aggregates | 4 steps; currently text-only. Available C/P/M: 0/3/1 | Project detail gives partial context; do not imply employee accounts or an uncaptured monthly report UI. Links: `/timeliste-mal`, `/timeliste-prosjekt` | Yes — group B; see capture plan. |
| I23 — [https://www.jobbleder.no/instruksjoner#innstillinger](https://www.jobbleder.no/instruksjoner#innstillinger); card `hvordan-innstillinger-fungerer` | Hvordan Innstillinger fungerer — Company/defaults/profile/branding | 4 steps; currently text-only. Available C/P/M: 0/4/0 | Use Norwegian group names shown in settings. Existing timelist screenshot gives a useful starting navigation context. Links: `/instruksjoner#premium`, `/instruksjoner#opprett` | Yes — group B; see capture plan. |
| I24 — [https://www.jobbleder.no/instruksjoner#innstillinger](https://www.jobbleder.no/instruksjoner#innstillinger); card `firma-og-fakturadetaljer` | Firma og fakturadetaljer — Company identity/bank/MVA/defaults | 4 steps; currently text-only. Available C/P/M: 0/2/2 | High-value onboarding gap. Need actual fields and per-field save; giro behavior remains unverified. Links: `/faktura-krav`, `/instruksjoner#opprett` | Yes — group B; see capture plan. |
| I25 — [https://www.jobbleder.no/instruksjoner#innstillinger](https://www.jobbleder.no/instruksjoner#innstillinger); card `standardverdier-for-dokumenter` | Standardverdier for dokumenter — Document defaults/KM | 4 steps; currently text-only. Available C/P/M: 1/3/0 | Timelist subsection can be illustrated now; other defaults and numbering behavior need screenshots/verification. Links: `/timeliste-mal`, `/instruksjoner#opprett` | Yes — group B; see capture plan. |
| I26 — [https://www.jobbleder.no/instruksjoner#innstillinger](https://www.jobbleder.no/instruksjoner#innstillinger); card `profil-og-grensesnitt` | Profil og grensesnitt — Profile/language/worker default | 4 steps; currently text-only. Available C/P/M: 0/1/3 | Do not confuse document Arbeider entry with separate employee accounts or profile default verification. Confirm actual setting labels. Links: `/timeliste-ansatt`, `/instruksjoner#opprett` | Yes — group B; see capture plan. |
| I27 — [https://www.jobbleder.no/instruksjoner#premium](https://www.jobbleder.no/instruksjoner#premium); card `premium-og-branding` | Premium og branding — Branding/subscription management | 4 steps; currently text-only. Available C/P/M: 0/1/3 | Use existing three PDF outcomes now. Status duration/usage/checkout remain unverified; no Free invoice quota. Links: `/fakturaprogram-gratis#planer-tittel`, `/instruksjoner#premium` | Yes — group B; see capture plan. |
| I28 — [https://www.jobbleder.no/instruksjoner#premium](https://www.jobbleder.no/instruksjoner#premium); card `last-opp-logo` | Last opp eller bytt logo — Logo upload/remove | 4 steps; currently text-only. Available C/P/M: 0/1/3 | PDF outcomes cover value, not instructions. Obtain actual controls before promising English Replace/Remove labels. Links: `/instruksjoner#innstillinger`, `/fakturaprogram-gratis` | Yes — group B; see capture plan. |
| I29 — [https://www.jobbleder.no/instruksjoner#premium](https://www.jobbleder.no/instruksjoner#premium); card `kjop-premium` | Velg og bestill Premium — Purchase flow | 5 steps; currently text-only. Available C/P/M: 0/1/4 | Verify periods/discount/order/payment handling first; no prices or feature gates should be invented. Links: `/instruksjoner#premium`, `/kontakt` | Yes — group B; see capture plan. |

### 2.4 Complete related SEO/product inventory

These routes retain their current canonical and query intent. Existing SEO entries' titles/sections are preserved in the inventory; the four product routes override the generic renderer and have additional product-specific content/FAQ. Do not confuse unused legacy FAQ data with their live product FAQs. Current illustrative families are identified, rather than counting responsive variants as separate screenshots.

| URL / metadata title | Existing subject, headings and procedure | Current media / reuse opportunity | Relevant instruction cross-link and accuracy note |
|---|---|---|---|
| [https://www.jobbleder.no/timeliste-mal](https://www.jobbleder.no/timeliste-mal); Timeliste mal – gratis og enkel timeliste (PDF / nett) | Product hero, preserved PDF downloads, three registration steps, four categories, authentic PDF, Timeliste 264→Invoice 111, Free/Premium, education, FAQ and final CTA. | Authentic product screenshots/PDFs already integrated. Suitable family: `new_timelist_form_4_different_entries.png`, `exported_timelist_4_different_entries.png` | `/instruksjoner#arbeidsokter`; No numbered app procedure; retain educational intent and add a contextual example, not a cloned landing page. |
| [https://www.jobbleder.no/timeliste-mal-pdf](https://www.jobbleder.no/timeliste-mal-pdf); Timeliste mal PDF – gratis timeliste for håndverkere | Hva er en timeliste mal PDF?; Hvem passer en PDF-timeliste for?; Fordeler med å laste ned timeliste som PDF — existing introductory bullets: Gratis timeliste i nettleseren; Last ned som PDF på sekunder; Passer for håndverkere og små bedrifter; Full oversikt per uke og prosjekt | Text-only; no image/video support in the generic renderer. Suitable family: `new_timelist_form_4_different_entries.png`, `exported_timelist_4_different_entries.png` | `/instruksjoner#arbeidsokter`; No numbered app procedure; retain educational intent and add a contextual example, not a cloned landing page. |
| [https://www.jobbleder.no/timeliste-uke](https://www.jobbleder.no/timeliste-uke); Timeliste uke – få oversikt over arbeidstid per uke | Hvorfor bruke ukentlig timeliste?; Timeliste uke for prosjekter og kunder; Fordeler med digital ukentlig timeliste — existing introductory bullets: Registrer timer uke for uke; Perfekt for små bedrifter og håndverkere; Se oversikt per prosjekt og kunde; Last ned ukentlig timeliste som PDF | Text-only; no image/video support in the generic renderer. Suitable family: `new_timelist_form_4_different_entries.png`, `exported_timelist_4_different_entries.png` | `/instruksjoner#arbeidsokter`; No numbered app procedure; retain educational intent and add a contextual example, not a cloned landing page. |
| [https://www.jobbleder.no/timeliste-ansatt](https://www.jobbleder.no/timeliste-ansatt); Timeliste ansatt – enkel registrering av arbeidstid | Hvorfor føre timeliste for ansatte?; Bedre kontroll over arbeidstid; Digital løsning i stedet for papir — existing introductory bullets: Enkel timeregistrering for ansatte; Oversikt over arbeidstid og oppdrag; Passer for små bedrifter; Last ned som PDF ved behov | Text-only; no image/video support in the generic renderer. Suitable family: `new_timelist_form_4_different_entries.png`, `exported_timelist_4_different_entries.png` | `/instruksjoner#arbeidsokter`; Clarify worker name in document; no employee accounts. |
| [https://www.jobbleder.no/timeliste-prosjekt](https://www.jobbleder.no/timeliste-prosjekt); Timeliste prosjekt – før timer per prosjekt og kunde | Hvorfor føre timer per prosjekt?; Timeliste prosjekt gir bedre fakturagrunnlag; Passer godt for håndverkere og små bedrifter — existing introductory bullets: Registrer timer per prosjekt; Bedre oversikt over kunder og oppdrag; Bruk timelisten som grunnlag for faktura; Last ned og del som PDF | Text-only; no image/video support in the generic renderer. Suitable family: `new_timelist_form_4_different_entries.png`, `exported_timelist_4_different_entries.png` | `/instruksjoner#arbeidsokter`; No numbered app procedure; retain educational intent and add a contextual example, not a cloned landing page. |
| [https://www.jobbleder.no/tilbud-mal](https://www.jobbleder.no/tilbud-mal); Tilbud mal – skriv et profesjonelt tilbud (gratis) | Product hero/PDF, three offer-creation steps, direct invoice conversion, offer→contract and independent editing, contract→invoice, Free/Premium, education, FAQ and final CTA. | Authentic product screenshots/PDFs already integrated. Suitable family: `new_offer_form.png`, `exported_tilbud_A4.png` | `/instruksjoner#opprett`; No numbered app procedure; retain educational intent and add a contextual example, not a cloned landing page. |
| [https://www.jobbleder.no/lage-tilbud](https://www.jobbleder.no/lage-tilbud); Lage tilbud – hvordan skrive et godt tilbud | Hvorfor er det viktig å lage et tydelig tilbud?; Hvordan lage tilbud på en enkel måte; Fordeler med digital tilbudsløsning — existing introductory bullets: Lag tilbud direkte i nettleseren; Bruk en tydelig og profesjonell struktur; Perfekt for håndverkere og små bedrifter; Last ned tilbud som PDF | Text-only; no image/video support in the generic renderer. Suitable family: `new_offer_form.png`, `exported_tilbud_A4.png` | `/instruksjoner#opprett`; No numbered app procedure; retain educational intent and add a contextual example, not a cloned landing page. |
| [https://www.jobbleder.no/tilbud-eksempel](https://www.jobbleder.no/tilbud-eksempel); Tilbud eksempel – se hvordan et godt tilbud kan se ut | Hvorfor bruke et tilbud eksempel?; Hva bør et godt tilbud eksempel vise?; Fra eksempel til eget tilbud — existing introductory bullets: Se hvordan et profesjonelt tilbud kan bygges opp; Nyttig for håndverkere og små bedrifter; Bruk eksempelet som inspirasjon til egne tilbud; Lag tilbud digitalt og last ned som PDF | Text-only; no image/video support in the generic renderer. Suitable family: `new_offer_form.png`, `exported_tilbud_A4.png` | `/instruksjoner#opprett`; Currently an example topic without an actual example image in the legacy renderer. |
| [https://www.jobbleder.no/fakturaprogram-gratis](https://www.jobbleder.no/fakturaprogram-gratis); Fakturaprogram gratis – lag faktura enkelt i Norge | Product hero, three-step process, authentic invoice/branding examples, document workflows, Free/Premium, FAQ and final CTA. Existing process image/label mismatch is A13. | Authentic product screenshots/PDFs already integrated. Suitable family: `screenshot_fv_edit.png`, `fv_free_watermark.png` | `/instruksjoner#opprett`; No numbered app procedure; retain educational intent and add a contextual example, not a cloned landing page. |
| [https://www.jobbleder.no/hvordan-folge-opp-tilbud](https://www.jobbleder.no/hvordan-folge-opp-tilbud); Hvordan følge opp tilbud – få flere svar fra kunder | Hvorfor oppfølging av tilbud er viktig; Når bør du følge opp tilbudet?; Hvordan skrive en god oppfølging — existing introductory bullets: Lær hvordan du følger opp tilbud profesjonelt; Få bedre respons fra kunder; Perfekt for små bedrifter og håndverkere; Bruk enkle rutiner for oppfølging | Text-only; no image/video support in the generic renderer. Suitable family: `new_offer_form.png`, `exported_tilbud_A4.png` | `/instruksjoner#opprett`; Manual customer follow-up advice, not an app reminder/sending feature; no screenshot needed for a phone/email conversation. |
| [https://www.jobbleder.no/lage-faktura](https://www.jobbleder.no/lage-faktura); Lage faktura – hvordan skrive en faktura enkelt | Hva trenger en faktura?; Hvordan lage faktura enkelt; Hvorfor bruke et fakturaprogram? — existing introductory bullets: Lag faktura direkte i nettleseren; Enkel løsning for håndverkere og små bedrifter; Ryddig oppsett med feltene du trenger; Last ned og send som PDF | Text-only; no image/video support in the generic renderer. Suitable family: `screenshot_fv_edit.png`, `fv_free_watermark.png` | `/instruksjoner#opprett`; No numbered app procedure; retain educational intent and add a contextual example, not a cloned landing page. |
| [https://www.jobbleder.no/faktura-eksempel](https://www.jobbleder.no/faktura-eksempel); Faktura eksempel – se hvordan en faktura kan se ut | Hvorfor se på et faktura eksempel?; Hva bør et godt faktura eksempel vise?; Fra eksempel til ferdig faktura — existing introductory bullets: Se hvordan en ryddig faktura kan bygges opp; Perfekt for små bedrifter og håndverkere; Bruk eksempelet som utgangspunkt for egne fakturaer; Lag faktura digitalt og last ned som PDF | Text-only; no image/video support in the generic renderer. Suitable family: `screenshot_fv_edit.png`, `fv_free_watermark.png` | `/instruksjoner#opprett`; Currently an example topic without an actual example image in the legacy renderer. |
| [https://www.jobbleder.no/faktura-krav](https://www.jobbleder.no/faktura-krav); Faktura krav – hva må en faktura inneholde? | Hvorfor er det viktig å kjenne til faktura krav?; Vanlige opplysninger i en faktura; Slik gjør et fakturaprogram jobben enklere — existing introductory bullets: Få oversikt over hva en faktura bør inneholde; Lag ryddige og profesjonelle fakturaer; Passer for små bedrifter og håndverkere; Bruk Jobbleder for å lage faktura enkelt | Text-only; no image/video support in the generic renderer. Suitable family: `screenshot_fv_edit.png`, `fv_free_watermark.png` | `/instruksjoner#opprett`; Educational overview, not independently verified legal compliance. |
| [https://www.jobbleder.no/kontrakt-mal](https://www.jobbleder.no/kontrakt-mal); Kontrakt mal – enkel kontrakt for håndverkere (gratis) | Product hero/PDF, Fast/Time/Tilbud pricing, configurable payments, editable terms/materials, offer→contract and contract→invoice, Free/Premium, education, FAQ and final CTA. | Authentic product screenshots/PDFs already integrated. Suitable family: `new_contract_form_time.png`, `exported_contract_preview.png` | `/instruksjoner#opprett`; No numbered app procedure; retain educational intent and add a contextual example, not a cloned landing page. |
| [https://www.jobbleder.no/kontrakt-handverker](https://www.jobbleder.no/kontrakt-handverker); Kontrakt håndverker – trygg avtale med kunde | Hvorfor kontrakt er viktig for håndverkere; Hva bør en håndverkerkontrakt inneholde?; Fra kontrakt til faktura — existing introductory bullets: Tydelig avtale med kunden; Beskriv arbeid og pris; Unngå misforståelser; Bruk kontrakt som grunnlag for faktura | Text-only; no image/video support in the generic renderer. Suitable family: `new_contract_form_time.png`, `exported_contract_preview.png` | `/instruksjoner#opprett`; No numbered app procedure; retain educational intent and add a contextual example, not a cloned landing page. |
| [https://www.jobbleder.no/kontrakt-eksempel](https://www.jobbleder.no/kontrakt-eksempel); Kontrakt eksempel – slik kan en avtale se ut | Hvordan ser en god kontrakt ut?; Hva kan du lære av et eksempel? — existing introductory bullets: Se struktur på en kontrakt; Lær hva som bør være med; Bruk som inspirasjon; Lag kontrakt digitalt | Text-only; no image/video support in the generic renderer. Suitable family: `new_contract_form_time.png`, `exported_contract_preview.png` | `/instruksjoner#opprett`; Currently an example topic without an actual example image in the legacy renderer. |
| [https://www.jobbleder.no/hva-skal-en-kontrakt-inneholde](https://www.jobbleder.no/hva-skal-en-kontrakt-inneholde); Hva skal en kontrakt inneholde? | De viktigste elementene; Hvorfor tydelig struktur er viktig — existing introductory bullets: Beskrivelse av arbeid; Pris og betaling; Tidsramme; Vilkår | Text-only; no image/video support in the generic renderer. Suitable family: `new_contract_form_time.png`, `exported_contract_preview.png` | `/instruksjoner#opprett`; No numbered app procedure; retain educational intent and add a contextual example, not a cloned landing page. |

### 2.5 Complete blog/educational inventory

All eighteen article bodies are currently **text-only**. Listed headings/checklists describe existing educational content, not verified application button sequences. Exact body links appear alongside suggested contextual instruction destinations. General business advice such as following up an offer is not an app reminder/sending feature.

| Existing URL / title | Subject and existing headings/checklists | Existing body links | Media opportunity, accuracy and proposed instruction link |
|---|---|---|---|
| [https://www.jobbleder.no/blogg/gratis-timeliste-mal](https://www.jobbleder.no/blogg/gratis-timeliste-mal); Timeliste mal (PDF) – gratis nedlasting uten innlogging | Last ned timeliste mal PDF gratis; Hva inneholder en god timeliste?; Slik bruker du timeliste-malen; PDF eller digital timeliste? Checklist/list content: Tom timeliste-mal (PDF) – blank mal for manuell utfylling; Timeliste for siste uke (PDF) – datoene er ferdig fylt inn / Navn, prosjekt, uke og år; Dato; Inn og ut; Pause; Timer; Arbeidsbeskrivelse; Totalt antall timer / Last ned PDF-en; Fyll inn timer og arbeidsbeskrivelse hver dag; Summer total tid; Send til kunde eller bruk som dokumentasjon ved fakturering | `/downloads/timeliste-mal-jobbleder.pdf`, `https://laskowskicreative.no/api/jobbleder/user/documents/oneweek-timelist`, `/timeliste-mal`, `https://app.jobbleder.no` | `new_timelist_form_4_different_entries.png`, `exported_timelist_4_different_entries.png`; Preserve both template downloads; verify/remove broad autosave assertion; populated screenshot is not a blank template. Target `/instruksjoner#arbeidsokter` |
| [https://www.jobbleder.no/blogg/gratis-fakturaprogram-handverkere](https://www.jobbleder.no/blogg/gratis-fakturaprogram-handverkere); Gratis fakturaprogram for håndverkere – her er et enkelt alternativ | Hva betyr egentlig gratis fakturaprogram?; Et enklere alternativ for håndverkere; Hvorfor velge en nettbasert løsning? Checklist/list content: Begrenset antall fakturaer per måned; Mangler lagring eller historikk; Krever oppgradering for viktige funksjoner / Lag faktura raskt; Hold orden på kunder og prosjekter; Last ned PDF når dokumentet er klart; Bruk samme system for tilbud og timeliste | `/fakturaprogram-gratis`, `https://app.jobbleder.no` | `screenshot_fv_edit.png`, `fv_free_watermark.png`; Use one relevant authentic example; preserve educational search intent. Target `/instruksjoner#dokumenter` |
| [https://www.jobbleder.no/blogg/lage-tilbud-byggebransjen](https://www.jobbleder.no/blogg/lage-tilbud-byggebransjen); Hvordan lage et profesjonelt tilbud i byggebransjen | Hva er et godt tilbud?; Dette bør et tilbud inneholde; Hvorfor er tydelighet viktig?; Digitalt tilbud gjør arbeidet enklere Checklist/list content: Din kontaktinformasjon; Kundens informasjon; Beskrivelse av arbeidet; Pris og eventuelt tidsbruk; MVA og vilkår | `/tilbud-mal`, `https://app.jobbleder.no` | `new_offer_form.png`, `exported_tilbud_A4.png`; Use one relevant authentic example; preserve educational search intent. Target `/instruksjoner#dokumenter` |
| [https://www.jobbleder.no/blogg/innhold-i-faktura](https://www.jobbleder.no/blogg/innhold-i-faktura); Hva skal en faktura inneholde? | Dette bør en faktura inneholde; Hvorfor er dette viktig?; Slik gjør du fakturaen mer profesjonell Checklist/list content: Dato for utsendelse; Fakturanummer; Navn og adresse på deg og kunden; Organisasjonsnummer og eventuell MVA-merking; Beskrivelse av arbeid eller varer; Pris og totalbeløp; Betalingsfrist og kontonummer / Bruk klare beskrivelser av arbeidet; Sørg for at pris og beløp er enkle å lese; Ta med kontaktinformasjon; Bruk samme struktur på alle fakturaer | `/faktura-krav`, `https://app.jobbleder.no` | `screenshot_fv_edit.png`, `fv_free_watermark.png`; Use one relevant authentic example; preserve educational search intent. Target `/instruksjoner#dokumenter` |
| [https://www.jobbleder.no/blogg/feil-med-tilbud](https://www.jobbleder.no/blogg/feil-med-tilbud); Topp 5 feil å unngå når du sender tilbud | 1. For lite informasjon; 2. Manglende gyldighetsdato; 3. Utydelig pris eller MVA; 4. Uprofesjonell presentasjon; 5. Du følger ikke opp tilbudet No procedural list. | `/folle-opp-tilbud`, `https://app.jobbleder.no` | `new_offer_form.png`, `exported_tilbud_A4.png`; Fix proven /folle-opp-tilbud 404; correct existing article is /blogg/folle-opp-tilbud. Target `/instruksjoner#dokumenter` |
| [https://www.jobbleder.no/blogg/effektiv-timeliste](https://www.jobbleder.no/blogg/effektiv-timeliste); Hvordan føre timelister effektivt – spesielt for selvstendig næringsdrivende | Hva bør en god timeliste inneholde?; Vanlige feil ved timeføring; Hvorfor er digital timeføring enklere? Checklist/list content: Dato; Antall timer; Hva som ble gjort; Prosjekt eller kunde; Eventuelle kommentarer / Du glemmer å føre timer daglig; Beskrivelsene blir for uklare; Datoene mangler eller blir utydelige; Du har ikke et system for å lagre alt samlet | `/timeliste-uke`, `https://app.jobbleder.no` | `new_timelist_form_4_different_entries.png`, `exported_timelist_4_different_entries.png`; Use one relevant authentic example; preserve educational search intent. Target `/instruksjoner#arbeidsokter` |
| [https://www.jobbleder.no/blogg/hvordan-lage-gratis-faktura](https://www.jobbleder.no/blogg/hvordan-lage-gratis-faktura); Hvordan lage en faktura gratis på nett? | Hva må en faktura inneholde?; Hvorfor velge et gratis fakturaprogram?; Slik lager du en faktura enkelt Checklist/list content: Firmanavn og organisasjonsnummer; Kundeinformasjon; Fakturanummer og dato; Forfallsdato; Beskrivelse av tjeneste eller produkt; Totalsum og eventuell MVA / Du slipper dyre lisenskostnader; Du kan jobbe direkte i nettleseren; Du genererer PDF raskt; Du samler dokumentene på ett sted / Opprett en ny faktura; Fyll inn kundeinformasjon; Beskriv arbeidet eller varen; Legg inn pris og betalingsinformasjon; Last ned eller send fakturaen videre | `/lage-faktura`, `https://app.jobbleder.no` | `screenshot_fv_edit.png`, `fv_free_watermark.png`; Use one relevant authentic example; preserve educational search intent. Target `/instruksjoner#dokumenter` |
| [https://www.jobbleder.no/blogg/lage-tilbudsdokument](https://www.jobbleder.no/blogg/lage-tilbudsdokument); Hva er et tilbudsdokument og hvordan lager du ett? | Hva er et tilbudsdokument?; Dette bør et tilbud inneholde; Hvorfor er et godt tilbud viktig?; Digitalt tilbud sparer tid Checklist/list content: Firmanavn og kontaktinformasjon; Kundens navn og informasjon; Beskrivelse av prosjektet; Pris og eventuelle tillegg; Gyldighetsperiode | `/lage-tilbud`, `https://app.jobbleder.no` | `new_offer_form.png`, `exported_tilbud_A4.png`; Use one relevant authentic example; preserve educational search intent. Target `/instruksjoner#dokumenter` |
| [https://www.jobbleder.no/blogg/forskjell-faktura-tilbud-timeliste](https://www.jobbleder.no/blogg/forskjell-faktura-tilbud-timeliste); Faktura, timeliste og tilbud – hva er forskjellen og når bruker du dem? | Hva er et tilbud?; Hva er en timeliste?; Hva er en faktura?; Hvordan henger de sammen? Checklist/list content: Tilbud – før du starter jobben; Timeliste – underveis, når du vil dokumentere timer; Faktura – når jobben er ferdig og du skal ha betalt | `/instruksjoner`, `https://app.jobbleder.no` | `new_offer_form.png`, `exported_tilbud_A4.png`; Use one relevant authentic example; preserve educational search intent. Target `/instruksjoner#dokumenter` |
| [https://www.jobbleder.no/blogg/folle-opp-tilbud](https://www.jobbleder.no/blogg/folle-opp-tilbud); Hvordan følge opp et sendt tilbud og lande flere jobber | Hvorfor oppfølging er viktig; Når bør du følge opp?; Hvordan følge opp på en god måte; Hvis kunden ikke svarer No procedural list. | `/hvordan-folge-opp-tilbud`, `https://app.jobbleder.no` | `new_offer_form.png`, `exported_tilbud_A4.png`; Manual follow-up/distribution advice, not app sending/reminders. Target `/instruksjoner#dokumenter` |
| [https://www.jobbleder.no/blogg/timeliste-for-handverkere](https://www.jobbleder.no/blogg/timeliste-for-handverkere); Timeliste for håndverkere – hvorfor gode rutiner sparer deg for tid | Hvorfor timelister er nyttige i praksis; Den vanligste feilen Checklist/list content: Bedre oversikt over arbeidstid; Mindre risiko for å glemme timer; Tydeligere dokumentasjon overfor kunde; Mer struktur i hverdagen | `/timeliste-ansatt`, `https://app.jobbleder.no` | `new_timelist_form_4_different_entries.png`, `exported_timelist_4_different_entries.png`; Use one relevant authentic example; preserve educational search intent. Target `/instruksjoner#arbeidsokter` |
| [https://www.jobbleder.no/blogg/timeliste-og-faktura](https://www.jobbleder.no/blogg/timeliste-og-faktura); Timeliste og faktura – hvordan henger de sammen? | Hvorfor god timeføring hjelper senere; Hva bør stå i timelisten? Checklist/list content: Dato; Arbeidsbeskrivelse; Timer brukt; Prosjekt eller kunde; Eventuelle tillegg eller kommentarer | `/timeliste-prosjekt`, `https://app.jobbleder.no` | `new_timelist_form_4_different_entries.png`, `exported_timelist_4_different_entries.png`; Replace generic relationship-only explanation with actual four-category conversion evidence. Target `/instruksjoner#arbeidsokter` |
| [https://www.jobbleder.no/blogg/faktura-eksempel-sma-bedrifter](https://www.jobbleder.no/blogg/faktura-eksempel-sma-bedrifter); Faktura eksempel for små bedrifter – hva bør det vise? | Hva bør et faktura eksempel vise?; Hvorfor oppsettet betyr noe Checklist/list content: Tydelig kundeinformasjon; Beskrivelse av arbeid eller varer; Dato og fakturanummer; Pris og totalbeløp; Betalingsinformasjon | `/faktura-eksempel`, `https://app.jobbleder.no` | `screenshot_fv_edit.png`, `fv_free_watermark.png`; Use one relevant authentic example; preserve educational search intent. Target `/instruksjoner#dokumenter` |
| [https://www.jobbleder.no/blogg/nar-sende-faktura](https://www.jobbleder.no/blogg/nar-sende-faktura); Når bør du sende faktura for å få raskere betaling? | Hvorfor timing er viktig; Gode rutiner gjør hverdagen enklere Checklist/list content: Lag faktura så snart jobben er ferdig; Ha tydelig betalingsfrist; Bruk faste rutiner for oppfølging; Sørg for at dokumentet er ryddig og lett å lese | `/lage-faktura`, `https://app.jobbleder.no` | `screenshot_fv_edit.png`, `fv_free_watermark.png`; Manual follow-up/distribution advice, not app sending/reminders. Target `/instruksjoner#dokumenter` |
| [https://www.jobbleder.no/blogg/tilbud-eller-pristilbud](https://www.jobbleder.no/blogg/tilbud-eller-pristilbud); Tilbud eller pristilbud – hva forventer kunden egentlig? | Hva kunden ser etter; Hvorfor tydelighet vinner Checklist/list content: Hva som faktisk inngår; Hva det vil koste; Om det finnes tillegg eller forbehold; Hvor lenge tilbudet gjelder | `/tilbud-eksempel`, `https://app.jobbleder.no` | `new_offer_form.png`, `exported_tilbud_A4.png`; Use one relevant authentic example; preserve educational search intent. Target `/instruksjoner#dokumenter` |
| [https://www.jobbleder.no/blogg/tilbud-vs-kontrakt](https://www.jobbleder.no/blogg/tilbud-vs-kontrakt); Tilbud vs kontrakt – hva er forskjellen? | Hva er et tilbud?; Hva er en kontrakt?; Når bruker du hva? Checklist/list content: Tilbud – før avtale; Kontrakt – når avtalen er bekreftet | None — CTA is text only. | `new_contract_form_time.png`, `exported_contract_preview.png`; Abbreviated/unfinished content with literal ellipsis; expand body and actionable cross-links after approval. Target `/instruksjoner#dokumenter` |
| [https://www.jobbleder.no/blogg/nar-trenger-du-kontrakt](https://www.jobbleder.no/blogg/nar-trenger-du-kontrakt); Når trenger du kontrakt som håndverker? | Når bør du bruke kontrakt? Checklist/list content: Større jobber; Langvarige prosjekter; Når pris må dokumenteres | None — CTA is text only. | `new_contract_form_time.png`, `exported_contract_preview.png`; Abbreviated/unfinished content with literal ellipsis; expand body and actionable cross-links after approval. Target `/instruksjoner#dokumenter` |
| [https://www.jobbleder.no/blogg/fra-tilbud-til-kontrakt-og-faktura](https://www.jobbleder.no/blogg/fra-tilbud-til-kontrakt-og-faktura); Fra tilbud til kontrakt og faktura – slik fungerer det | 1. Lag tilbud; 2. Opprett kontrakt; 3. Utfør arbeid; 4. Send faktura No procedural list. | None — CTA is text only. | `new_offer_form.png`, `exported_tilbud_A4.png`; Abbreviated/unfinished content with literal ellipsis; expand body and actionable cross-links after approval. Target `/instruksjoner#dokumenter` |

## 3. Available screenshot and derivative inventory

### 3.1 Counting and reuse rules

The recursive scan found 50 PNG source paths plus 51 WebP derivative paths in the product tree, with no video there. `public/app-preview.png` supplies the two overview derivatives. Three duplicate pairs are SHA-256-identical:

- `public/images/product/kontrakt/source/contract_from_offer_edited.png` = `public/images/product/tilbud/source/contract_from_offer_edited.png`
- `public/images/product/kontrakt/source/invoice_from_contract.png` = `public/images/product/tilbud/source/invoice_from_contract.png`
- `public/images/product/kontrakt/source/tilbud_to_contract.png` = `public/images/product/tilbud/source/tilbud_to_contract.png`

Prefer the already-referenced Tilbud paths for these shared workflow sources; do not move/delete the Kontrakt copies in an audit. `docflow_cropped.png` is a supplied crop of the same infographic family as `jobbleder_docflow.png`. A4/A5 offer exports show the same offer in different document presentations, not proof of an in-app paper-size selector. Different Timeliste examples are distinct captured states; preserve their IDs and values.

Existing usage below is traced through `content/{home,invoice,timelist,offer,contract}ProductMedia.json` and the corresponding renderer. A source can be used through a derivative/full-size link even when its raw PNG is not the default rendered image. “Not currently referenced” concerns marketing renderers/manifests, not whether it is available locally. Some valuable sources remain untracked; a later implementation must explicitly include only the required assets and preserve originals.

### 3.2 Source inventory: exact paths, actual contents and instructional suitability

Desktop/mobile recommendations refer to **presenting authentic desktop captures on a responsive marketing page**. They do not establish that a screenshot was captured on a phone or verify the authenticated app's mobile behavior. No new crops are produced here. Original filenames, dimensions and byte sizes follow.

#### S01 — docflow_cropped.png

- Exact path: `public/images/product/docflow/source/docflow_cropped.png`.
- Dimensions/size: **1442×597 px; 982,488 bytes**.
- Actual contents: Same four-path infographic cropped to workflow rows, retaining side explanations.
- Function/instructional use: Same visual family as jobbleder_docflow.png, not an additional independent screenshot.
- Desktop/mobile and crop assessment: Existing1000×597 mobile crop retains all paths and drops repeated side explanations.
- Existing usage: `/`. No hub instruction currently uses it.

#### S02 — jobbleder_docflow.png

- Exact path: `public/images/product/docflow/source/jobbleder_docflow.png`.
- Dimensions/size: **1536×1024 px; 1,605,526 bytes**.
- Actual contents: User-supplied infographic, four supported paths; not an application screenshot.
- Function/instructional use: Conceptual overview only: registrations→timelist→invoice; timelist→invoice; offer→contract→invoice; offer→invoice.
- Desktop/mobile and crop assessment: Use existing compact/mobile variants; do not crop away any path, imply employee accounts or automatic sending/signing.
- Existing usage: `/`. No hub instruction currently uses it.

#### S03 — fv_free_watermark.png

- Exact path: `public/images/product/invoice/source/fv_free_watermark.png`.
- Dimensions/size: **959×1251 px; 127,681 bytes**.
- Actual contents: Invoice 110 PDF with Jobbleder Free mark, customer, line, tax, totals and payment information.
- Function/instructional use: Explain downloadable output, Free branding and manual distribution.
- Desktop/mobile and crop assessment: Preserve complete document; optional header/amount detail with full-size original link.
- Existing usage: `/fakturaprogram-gratis`. No hub instruction currently uses it.

#### S04 — fv_premium_clear.png

- Exact path: `public/images/product/invoice/source/fv_premium_clear.png`.
- Dimensions/size: **959×1251 px; 109,632 bytes**.
- Actual contents: Same invoice PDF without Jobbleder mark or company logo.
- Function/instructional use: Premium clean-PDF alternative, not missing functionality in Free.
- Desktop/mobile and crop assessment: Whole document and optional branding-header detail; keep semantic explanation in HTML.
- Existing usage: `/fakturaprogram-gratis`. No hub instruction currently uses it.

#### S05 — fv_premium_logo.png

- Exact path: `public/images/product/invoice/source/fv_premium_logo.png`.
- Dimensions/size: **947×1251 px; 131,557 bytes**.
- Actual contents: Same invoice PDF with Demo Company logo.
- Function/instructional use: Premium logo outcome; does not show upload controls.
- Desktop/mobile and crop assessment: Whole page with header detail; avoid replacing complete PDF with a brand-only crop.
- Existing usage: `/fakturaprogram-gratis`. No hub instruction currently uses it.

#### S06 — screenshot_fv_edit.png

- Exact path: `public/images/product/invoice/source/screenshot_fv_edit.png`.
- Dimensions/size: **1917×906 px; 114,542 bytes**.
- Actual contents: Create Faktura 110, selected customer/project, dates, one parkett line, 12000 net, 3000 MVA, 15000 gross, Lagre/Generer.
- Function/instructional use: All manual invoice form steps; screenshot name does not prove saved invoice editing.
- Desktop/mobile and crop assessment: Crop customer/dates, line including description AND quantity, summary and toolbar separately for mobile; existing processLines shows price/MVA only.
- Existing usage: `/fakturaprogram-gratis`. No hub instruction currently uses it.

#### S07 — contract_from_offer_edited.png

- Exact path: `public/images/product/tilbud/source/contract_from_offer_edited.png`. Byte-identical alias: `public/images/product/kontrakt/source/contract_from_offer_edited.png`.
- Dimensions/size: **706×720 px; 78,568 bytes** per identical file.
- Actual contents: Editing Contract 11 (Kilde: Kontrakt 11) with fixed 12000, progress invoicing, payment plan enabled and one 25% row.
- Function/instructional use: Independent editing after offer conversion; configurable plan only.
- Desktop/mobile and crop assessment: Existing editedContract crop focuses price/plan, not saving or an unmodified source offer. No automatic installment claim.
- Existing usage: `/tilbud-mal`, `/kontrakt-mal`. No hub instruction currently uses it.

#### S08 — exported_contract_preview.png

- Exact path: `public/images/product/kontrakt/source/exported_contract_preview.png`.
- Dimensions/size: **508×720 px; 73,859 bytes**.
- Actual contents: Full Contract 11 PDF, price from Tilbud 29=12000, payment after completion, clauses and blank manual signature lines, Free mark.
- Function/instructional use: Contract PDF, manual signing and branding.
- Desktop/mobile and crop assessment: Keep full page plus enlargement; not exact export of Time 900, advance 30% or edited progress 25% configuration.
- Existing usage: `/`, `/kontrakt-mal`. No hub instruction currently uses it.

#### S09 — invoice_from_contract.png

- Exact path: `public/images/product/tilbud/source/invoice_from_contract.png`. Byte-identical alias: `public/images/product/kontrakt/source/invoice_from_contract.png`.
- Dimensions/size: **1280×720 px; 115,705 bytes** per identical file.
- Actual contents: Invoice 112, Kilde: Kontrakt 11, copied parkett line12000 net,15000 gross.
- Function/instructional use: Kontrakt→Faktura target.
- Desktop/mobile and crop assessment: Use existing desktop/mobile source-and-line crops; full invoice value is not a25% installment.
- Existing usage: `/tilbud-mal`, `/kontrakt-mal`. No hub instruction currently uses it.

#### S10 — material_costs.png

- Exact path: `public/images/product/kontrakt/source/material_costs.png`.
- Dimensions/size: **640×142 px; 6,279 bytes**.
- Actual contents: Open Materialer selector: Entreprenør, Kunde, Begge.
- Function/instructional use: Material responsibility.
- Desktop/mobile and crop assessment: Existing340px crop is appropriate; no separate mobile screenshot required.
- Existing usage: `/kontrakt-mal`. No hub instruction currently uses it.

#### S11 — new_contract_form.png

- Exact path: `public/images/product/kontrakt/source/new_contract_form.png`.
- Dimensions/size: **840×720 px; 87,933 bytes**.
- Actual contents: Standalone contract11 create form without offer source; Fast selected, price not filled, dates/description/materials/default clauses.
- Function/instructional use: Start an independent contract; fixed-price configuration field.
- Desktop/mobile and crop assessment: Full desktop context; mobile separate identity/terms details; not a completed fixed-price PDF.
- Existing usage: Not currently referenced in product/home manifests; available locally. No hub instruction currently uses it.

#### S12 — new_contract_form_time.png

- Exact path: `public/images/product/kontrakt/source/new_contract_form_time.png`.
- Dimensions/size: **840×720 px; 90,346 bytes**.
- Actual contents: Standalone Contract 11, Time 900, customer/project/dates/work/materials and editable-clause toggles off.
- Function/instructional use: Hourly creation and field context.
- Desktop/mobile and crop assessment: HeroMobile only shows time price and payment days; do not reuse that crop as sole whole-form explanation.
- Existing usage: `/kontrakt-mal`. No hub instruction currently uses it.

#### S13 — new_contract_form_with_advance_percentage.png

- Exact path: `public/images/product/kontrakt/source/new_contract_form_with_advance_percentage.png`.
- Dimensions/size: **680×720 px; 89,836 bytes**.
- Actual contents: Fixed12000 contract with Forskuddsfaktura30%,14-day deadline and four clause editors toggled open.
- Function/instructional use: Advance configuration and editable clauses.
- Desktop/mobile and crop assessment: Existing lossless advance/clauses crops work; mobile each field should be described in HTML and linked full size.
- Existing usage: `/kontrakt-mal`. No hub instruction currently uses it.

#### S14 — payment_base.png

- Exact path: `public/images/product/kontrakt/source/payment_base.png`.
- Dimensions/size: **638×141 px; 4,494 bytes**.
- Actual contents: Open Prisstruktur selector: Fast, Time, Tilbud.
- Function/instructional use: Three pricing options, not payment methods.
- Desktop/mobile and crop assessment: Already tight; existing332px mobile crop retains all options.
- Existing usage: `/kontrakt-mal`. No hub instruction currently uses it.

#### S15 — payment_methods.png

- Exact path: `public/images/product/kontrakt/source/payment_methods.png`.
- Dimensions/size: **652×154 px; 9,917 bytes**.
- Actual contents: Open Betalingsmetode: Faktura etter ferdigstillelse, Forskuddsfaktura, Fakturering etter fremdrift.
- Function/instructional use: Three payment arrangements.
- Desktop/mobile and crop assessment: Already focused; existing420px mobile variant retains all options.
- Existing usage: `/kontrakt-mal`. No hub instruction currently uses it.

#### S16 — suggestions.png

- Exact path: `public/images/product/kontrakt/source/suggestions.png`.
- Dimensions/size: **613×285 px; 9,718 bytes**.
- Actual contents: Work-description dropdown after typing Legging with several construction suggestions.
- Function/instructional use: Optional contract description assistance.
- Desktop/mobile and crop assessment: Already cropped/readable; do not market it as AI or a mandatory step.
- Existing usage: Not currently referenced in product/home manifests; available locally. No hub instruction currently uses it.

#### S17 — tilbud_to_contract.png

- Exact path: `public/images/product/tilbud/source/tilbud_to_contract.png`. Byte-identical alias: `public/images/product/kontrakt/source/tilbud_to_contract.png`.
- Dimensions/size: **834×720 px; 94,495 bytes** per identical file.
- Actual contents: Contract 11 create form with Kilde: Tilbud 29, offer pricing, payment-after-completion and default clauses.
- Function/instructional use: Tilbud→Kontrakt target and source continuity.
- Desktop/mobile and crop assessment: Full desktop form; existing mobile crop retains source/price fields but not whole lower clause area.
- Existing usage: `/tilbud-mal`, `/kontrakt-mal`. No hub instruction currently uses it.

#### S18 — new_creditnota_form.png

- Exact path: `public/images/product/kreditnota/source/new_creditnota_form.png`.
- Dimensions/size: **1280×720 px; 86,922 bytes**.
- Actual contents: Kreditnota28 create form; Kilde faktura Invoice 110, date, source line count1 and source total 15000; Lagre/Generer.
- Function/instructional use: Credit note selection/date/summary; not PDF result or proof that invoice editing is prohibited.
- Desktop/mobile and crop assessment: Crop form+summary+toolbar; mobile field details possible without new capture.
- Existing usage: Not currently referenced in product/home manifests; available locally. No hub instruction currently uses it.

#### S19 — exported_tilbud_A4.png

- Exact path: `public/images/product/tilbud/source/exported_tilbud_A4.png`.
- Dimensions/size: **506×720 px; 39,992 bytes**.
- Actual contents: Full portrait Tilbud 29 PDF, parkett12000, VAT 3000, total 15000 and Free mark.
- Function/instructional use: Offer PDF and customer-facing structure.
- Desktop/mobile and crop assessment: Preserve whole page; existing optimized PDF available.
- Existing usage: `/tilbud-mal`. No hub instruction currently uses it.

#### S20 — exported_tilbud_A5.png

- Exact path: `public/images/product/tilbud/source/exported_tilbud_A5.png`.
- Dimensions/size: **506×360 px; 37,358 bytes**.
- Actual contents: Compact landscape presentation of the same Tilbud 29 contents and Free mark.
- Function/instructional use: Readable compact offer example (homepage).
- Desktop/mobile and crop assessment: No new crop required for basic mobile example; do not infer a selectable A4/A5 app setting from filenames.
- Existing usage: `/`. No hub instruction currently uses it.

#### S21 — new_offer_form.png

- Exact path: `public/images/product/tilbud/source/new_offer_form.png`.
- Dimensions/size: **1280×720 px; 112,403 bytes**.
- Actual contents: Tilbud 29 create form, customer/project/dates/validity, parkett line12000 +25% VAT, gross 15000, Lagre/Generer.
- Function/instructional use: Offer creation and field labels.
- Desktop/mobile and crop assessment: Use full form context and form/toolbar details; editorMobile shows price/MVA/quantity but omits customer and dates.
- Existing usage: `/tilbud-mal`. No hub instruction currently uses it.

#### S22 — offer_document_preview_in_documents_menu.png

- Exact path: `public/images/product/tilbud/source/offer_document_preview_in_documents_menu.png`.
- Dimensions/size: **1280×720 px; 153,575 bytes**.
- Actual contents: Documents view selected Offer29; list, preview, Rediger/Opprett kopi/Opprett kontrakt/Opprett faktura/Generer PDF.
- Function/instructional use: Both offer conversion starting controls, copy, PDF and preview.
- Desktop/mobile and crop assessment: Desktop full context; mobile action bar plus selected offer; current heroMobile only shows preview line/summary.
- Existing usage: `/tilbud-mal`. No hub instruction currently uses it.

#### S23 — tilbud_to_invoice.png

- Exact path: `public/images/product/tilbud/source/tilbud_to_invoice.png`.
- Dimensions/size: **1280×720 px; 115,837 bytes**.
- Actual contents: Invoice 111 create form with Kilde: Tilbud 29, copied parkett line and15000 gross.
- Function/instructional use: Direct Tilbud→Faktura target.
- Desktop/mobile and crop assessment: Existing invoice crops retain source reference; add toolbar from original for instructions. No new target capture needed.
- Existing usage: `/tilbud-mal`. No hub instruction currently uses it.

#### S24 — client_card_add_timelist_by_client_name_.png

- Exact path: `public/images/product/timeliste/source/client_card_add_timelist_by_client_name_.png`.
- Dimensions/size: **594×540 px; 75,323 bytes**.
- Actual contents: Customer Eksempel Eiendom details, document counts, project and recent documents; bottom Rediger kunde/Nytt dokument/Archive/Delete.
- Function/instructional use: Customer reuse and linked records. Filename does not demonstrate a dedicated add-timelist-by-name action.
- Desktop/mobile and crop assessment: Already tight card crop; mobile split details/statistics, not a replacement for customer creation form.
- Existing usage: Not currently referenced in product/home manifests; available locally. No hub instruction currently uses it.

#### S25 — documents_menu_preview_timelist_document.png

- Exact path: `public/images/product/timeliste/source/documents_menu_preview_timelist_document.png`.
- Dimensions/size: **1280×604 px; 170,865 bytes**.
- Actual contents: Documents list and selected Timeliste 261, customer, three rows, summary and Rediger/Opprett kopi/Opprett faktura/Generer PDF.
- Function/instructional use: Document search/filter/select/preview, copy action and conversion entry point.
- Desktop/mobile and crop assessment: Full desktop context; mobile needs separate action-bar and selected-document details, not just existing row crop.
- Existing usage: `/`. No hub instruction currently uses it.

#### S26 — documents_menu_preview_timelist_with_extra_km.png

- Exact path: `public/images/product/timeliste/source/documents_menu_preview_timelist_with_extra_km.png`.
- Dimensions/size: **1280×720 px; 177,520 bytes**.
- Actual contents: Selected Timeliste 262, Extra row 3h30 and 120 KM, totals and same four document controls.
- Function/instructional use: Extra/KM preview and document actions.
- Desktop/mobile and crop assessment: Useful one-row mobile example; retain totals and buttons in accompanying view.
- Existing usage: Not currently referenced in product/home manifests; available locally. No hub instruction currently uses it.

#### S27 — exported_invoice_4_different_entries.png

- Exact path: `public/images/product/timeliste/source/exported_invoice_4_different_entries.png`.
- Dimensions/size: **508×720 px; 58,619 bytes**.
- Actual contents: Invoice 111 PDF tied in line descriptions to Timeliste 264/Demo; four lines and gross 28368.75, Free mark.
- Function/instructional use: End-to-end registration/timelist/invoice example.
- Desktop/mobile and crop assessment: Keep entire page; optional rows/totals crop for mobile, not a fictional independently matched document.
- Existing usage: `/timeliste-mal`. No hub instruction currently uses it.

#### S28 — exported_timelist_4_different_entries.png

- Exact path: `public/images/product/timeliste/source/exported_timelist_4_different_entries.png`.
- Dimensions/size: **508×720 px; 46,476 bytes**.
- Actual contents: Portrait PDF for Timeliste 264; regular8h30/35KM, Extra 10h/75KM; Free mark.
- Function/instructional use: Complete four-category timelist output.
- Desktop/mobile and crop assessment: Keep full document link; optional focused totals detail alongside HTML explanation.
- Existing usage: `/timeliste-mal`. No hub instruction currently uses it.

#### S29 — exported_timelist_with_1_entry.png

- Exact path: `public/images/product/timeliste/source/exported_timelist_with_1_entry.png`.
- Dimensions/size: **926×583 px; 49,042 bytes**.
- Actual contents: Landscape timelist PDF, Demo, one ordinary 8h row, Free mark.
- Function/instructional use: First simple PDF result.
- Desktop/mobile and crop assessment: Preserve full output; useful readable single-row mobile alternative, not four-category evidence.
- Existing usage: Not currently referenced in product/home manifests; available locally. No hub instruction currently uses it.

#### S30 — exported_timelist_with_3_entires.png

- Exact path: `public/images/product/timeliste/source/exported_timelist_with_3_entires.png`.
- Dimensions/size: **504×393 px; 37,372 bytes**.
- Actual contents: Landscape timelist PDF with three rows; regular7h30, Extra 12h30 and red Extra outlines; Free mark.
- Function/instructional use: Regular versus Extra output.
- Desktop/mobile and crop assessment: Full output; explain red row treatment rather than implying an error.
- Existing usage: Not currently referenced in product/home manifests; available locally. No hub instruction currently uses it.

#### S31 — exported_timelist_with_extra_km.png

- Exact path: `public/images/product/timeliste/source/exported_timelist_with_extra_km.png`.
- Dimensions/size: **1126×720 px; 95,076 bytes**.
- Actual contents: Landscape PDF with one Extra 3h30/120km row, Free mark and Extra totals.
- Function/instructional use: KM/Extra PDF explanation.
- Desktop/mobile and crop assessment: Full output plus totals detail on mobile; no additional screenshot required.
- Existing usage: Not currently referenced in product/home manifests; available locally. No hub instruction currently uses it.

#### S32 — new_invoice_form_4_different_entries.png

- Exact path: `public/images/product/timeliste/source/new_invoice_form_4_different_entries.png`.
- Dimensions/size: **840×720 px; 92,374 bytes**.
- Actual contents: Invoice 111, source Timeliste 264, four lines: 8.5h×900, 35km×12, 10 extra h×1350, 75 extra km×15; net 22695, VAT 5673.75, total 28368.75.
- Function/instructional use: Four separate categories and checking rates/quantities before generating.
- Desktop/mobile and crop assessment: Retain all four lines and source reference; split into labeled details for mobile, never show only first category.
- Existing usage: `/timeliste-mal`. No hub instruction currently uses it.

#### S33 — new_timelist_form_4_different_entries.png

- Exact path: `public/images/product/timeliste/source/new_timelist_form_4_different_entries.png`.
- Dimensions/size: **654×720 px; 82,084 bytes**.
- Actual contents: Timeliste 264 with Demo and four rows: ordinary hours/KM and Extra hours/KM. Summary 8.5 ordinary hours, 10 extra, 110 KM total.
- Function/instructional use: Four work categories and manual row controls.
- Desktop/mobile and crop assessment: Full desktop form plus sequential row details on mobile; current formMobile clips source/header and is not an entire import tutorial.
- Existing usage: `/timeliste-mal`. No hub instruction currently uses it.

#### S34 — new_timelist_wizard.png

- Exact path: `public/images/product/timeliste/source/new_timelist_wizard.png`.
- Dimensions/size: **1280×720 px; 126,313 bytes**.
- Actual contents: Timeliste 260, project selected, Arbeider Demo, optional customer unchecked, one ordinary row, summary, Lagre/Generer.
- Function/instructional use: Manual timelist, worker name and optional customer distinction.
- Desktop/mobile and crop assessment: Desktop form; mobile split identity, row and toolbar; existing image top title partially clipped.
- Existing usage: Not currently referenced in product/home manifests; available locally. No hub instruction currently uses it.

#### S35 — new_timelist_wizard_add_client.png

- Exact path: `public/images/product/timeliste/source/new_timelist_wizard_add_client.png`.
- Dimensions/size: **1280×720 px; 130,853 bytes**.
- Actual contents: Same form with Knytt kunde checked and customer selector shown.
- Function/instructional use: Demonstrate optional customer reveal.
- Desktop/mobile and crop assessment: Existing close detail sufficient; no new screenshot needed.
- Existing usage: Not currently referenced in product/home manifests; available locally. No hub instruction currently uses it.

#### S36 — new_timelist_wizard_with_3_entries_imported_from_work_entires_panel.png

- Exact path: `public/images/product/timeliste/source/new_timelist_wizard_with_3_entries_imported_from_work_entires_panel.png`.
- Dimensions/size: **714×720 px; 90,399 bytes**.
- Actual contents: Timeliste 261 has THREE rows but source badge says Registreringer: 2 rader; regular 7.5 and Extra 12.5 hours. Note says imports retained until saved/generated.
- Function/instructional use: Import result plus additional row; explain two imported rows, not three imported registrations.
- Desktop/mobile and crop assessment: Use form/summary/retention-note details on mobile; keep imported-count badge visible.
- Existing usage: Not currently referenced in product/home manifests; available locally. No hub instruction currently uses it.

#### S37 — one_click_invoice_from_timelist.png

- Exact path: `public/images/product/timeliste/source/one_click_invoice_from_timelist.png`.
- Dimensions/size: **1280×694 px; 117,420 bytes**.
- Actual contents: Invoice 111 with source Timeliste 261; two hour lines 7.5/12.5 at 900, net 18000, MVA 4500, gross 22500.
- Function/instructional use: Simple timelist conversion result with employee name; not the four-category invoice.
- Desktop/mobile and crop assessment: Desktop source marker+lines+summary; mobile split rows. Two unused legacy WebPs already exist, including summary-only crop.
- Existing usage: Not currently referenced in product/home manifests; available locally. No hub instruction currently uses it.

#### S38 — project_card_timelist_count_by_name.png

- Exact path: `public/images/product/timeliste/source/project_card_timelist_count_by_name.png`.
- Dimensions/size: **936×684 px; 25,353 bytes**.
- Actual contents: Project detail, standard times 07–16, deadline, hour limit55, document counts, 42/55 usage, workers Demo/Boss with hour aggregates.
- Function/instructional use: Project overview and grouping by document worker name; no separate employee accounts.
- Desktop/mobile and crop assessment: Card already cropped; mobile statistics/worker sections separately. Not a project edit/create form.
- Existing usage: Not currently referenced in product/home manifests; available locally. No hub instruction currently uses it.

#### S39 — suggestions_of_work_description.png

- Exact path: `public/images/product/timeliste/source/suggestions_of_work_description.png`.
- Dimensions/size: **1909×898 px; 124,986 bytes**.
- Actual contents: Timelist form with description suggestions open; ordinary/extra row controls partly below fold.
- Function/instructional use: Optional description assistance, not AI generation or a proven automation feature.
- Desktop/mobile and crop assessment: Use suggestion list detail; no need to capture it again.
- Existing usage: Not currently referenced in product/home manifests; available locally. No hub instruction currently uses it.

#### S40 — timelist_4_different_entries_in_documents_menu.png

- Exact path: `public/images/product/timeliste/source/timelist_4_different_entries_in_documents_menu.png`.
- Dimensions/size: **1280×720 px; 177,017 bytes**.
- Actual contents: Selected Timeliste 264; four rows, Demo, 18h30 total including 10 Extra, 110 KM total including 75 Extra, action bar.
- Function/instructional use: Preview and start timelist→invoice with all four categories.
- Desktop/mobile and crop assessment: Existing hero is preview-only; mobile hero from another source shows top rows, so caption accurately. Keep action bar for procedural use.
- Existing usage: `/timeliste-mal`. No hub instruction currently uses it.

#### S41 — timelist_settings_add_km_row.png

- Exact path: `public/images/product/timeliste/source/timelist_settings_add_km_row.png`.
- Dimensions/size: **1280×720 px; 164,318 bytes**.
- Actual contents: Innstillinger → Standard for timeliste, defaults, per-field Lagre, Aktiver KM checked. Sidebar lists Norwegian settings group names.
- Function/instructional use: KM prerequisite, timelist defaults and settings terminology.
- Desktop/mobile and crop assessment: Crop actual KM switch plus label/Lagre; preserve one full navigation context; mobile field detail sufficient.
- Existing usage: Not currently referenced in product/home manifests; available locally. No hub instruction currently uses it.

#### S42 — work_entries_add_new_position.png

- Exact path: `public/images/product/timeliste/source/work_entries_add_new_position.png`.
- Dimensions/size: **1280×720 px; 129,453 bytes**.
- Actual contents: Registration entry editor with date/time/pause and work-description suggestions overlay.
- Function/instructional use: Description input and suggestion selection; overlay hides parts of the editor.
- Desktop/mobile and crop assessment: Use suggestion detail only, not sole image for all time fields; mobile focus on open list.
- Existing usage: Not currently referenced in product/home manifests; available locally. No hub instruction currently uses it.

#### S43 — work_entries_add_new_position_mark_as_extra.png

- Exact path: `public/images/product/timeliste/source/work_entries_add_new_position_mark_as_extra.png`.
- Dimensions/size: **1280×720 px; 123,857 bytes**.
- Actual contents: Registration editor with 08–16, pause 30, Extra checked, paid pause unchecked, Lagre registrering.
- Function/instructional use: Time input, Extra flag and exact save button name.
- Desktop/mobile and crop assessment: Crop form with labels and save control; keep ordinary/Extra distinction.
- Existing usage: Not currently referenced in product/home manifests; available locally. No hub instruction currently uses it.

#### S44 — work_entries_panel.png

- Exact path: `public/images/product/timeliste/source/work_entries_panel.png`.
- Dimensions/size: **1280×720 px; 89,561 bytes**.
- Actual contents: Empty Registreringer view, filters, Legg til registrering, disabled Importer til timeliste.
- Function/instructional use: Starting screen and why import requires a selection.
- Desktop/mobile and crop assessment: Desktop overview; mobile detail must retain entry/import controls and selection count.
- Existing usage: Not currently referenced in product/home manifests; available locally. No hub instruction currently uses it.

#### S45 — work_entries_panel_with_2_entries.png

- Exact path: `public/images/product/timeliste/source/work_entries_panel_with_2_entries.png`.
- Dimensions/size: **1280×720 px; 100,339 bytes**.
- Actual contents: Two saved registration cards, one Ekstra; zero selected, import disabled.
- Function/instructional use: Saved-state feedback and building several days.
- Desktop/mobile and crop assessment: Crop list and toolbar together; do not confuse two available rows with selected rows.
- Existing usage: Not currently referenced in product/home manifests; available locally. No hub instruction currently uses it.

#### S46 — work_entries_panel_with_2_entries_marked.png

- Exact path: `public/images/product/timeliste/source/work_entries_panel_with_2_entries_marked.png`.
- Dimensions/size: **1280×720 px; 104,952 bytes**.
- Actual contents: Same two cards checked, Valgt: 2 and enabled Importer til timeliste.
- Function/instructional use: Selection and import action.
- Desktop/mobile and crop assessment: Reuse registrations WebPs; mobile existing crop excludes import toolbar, so pair it with a toolbar/context view.
- Existing usage: `/timeliste-mal`. No hub instruction currently uses it.

#### S47 — work_entries_with_km_value.png

- Exact path: `public/images/product/timeliste/source/work_entries_with_km_value.png`.
- Dimensions/size: **1280×720 px; 130,336 bytes**.
- Actual contents: Registration editor with KM 120, Extra checked and Lagre registrering; post-import status text above.
- Function/instructional use: Enabled KM field and Extra classification.
- Desktop/mobile and crop assessment: Form/checkbox/save crop appropriate on mobile; do not infer automatic cleanup timing from status text alone.
- Existing usage: Not currently referenced in product/home manifests; available locally. No hub instruction currently uses it.

#### S48 — app-preview.png

- Exact path: `public/app-preview.png`.
- Dimensions/size: **1918×1077 px; 152,432 bytes**.
- Actual contents: Full Oversikt: side menu, quick actions, daily registrations, global search field/results list, recent documents, Premium active.
- Function/instructional use: Orientation and choosing a starting point; not report/configuration internals.
- Desktop/mobile and crop assessment: Keep one full desktop context; use separate existing-action/sidebar detail on mobile. Existing overviewMobile only shows quick actions, not all navigation.
- Existing usage: `/`. No hub instruction currently uses it.


### 3.3 Complete optimized derivative inventory

All 51 existing WebPs are listed once. “Source” resolves to the exact original path in section 3.2; mobile/detail variants remain members of that source family. Crop coordinates are `(left, top, width, height)` in source pixels. For instructional reuse, check that a crop includes the actual control being explained: several approved marketing crops show outcomes but omit toolbars.

The eight invoice WebPs were produced by the existing quality-94 lossy pipeline. Decoded mean absolute channel differences from their PNG/crop references range from approximately 0.164 to 1.276 on a 0–255 scale. Their existing text was visually inspected; this is not a new compression recommendation or proof of zero perceptual loss. Forty-one other mapped derivatives are exact decoded pixel matches. The two unused historical workflow crops were visually matched to `one_click_invoice_from_timelist.png`; their original extraction coordinates are not claimed as manifest-verified.

| Exact WebP path | Dimensions / bytes | Exact source path | Crop / evidence and current use |
|---|---|---|---|
| `public/images/product/docflow/optimized/jobbleder-home-document-flow-940f0666f4cc.webp` | 1536×1024; 1,005,366 bytes | `public/images/product/docflow/source/jobbleder_docflow.png` | Full original; exact decoded pixels; home manifest(s) |
| `public/images/product/docflow/optimized/jobbleder-home-document-flow-compact-a1de69c9b05c.webp` | 1442×597; 610,516 bytes | `public/images/product/docflow/source/docflow_cropped.png` | Full original; exact decoded pixels; home manifest(s) |
| `public/images/product/docflow/optimized/jobbleder-home-document-flow-mobile-3dbe42d3e7a8.webp` | 1000×597; 408,308 bytes | `public/images/product/docflow/source/docflow_cropped.png` | (0, 0, 1000, 597); exact decoded pixels; home manifest(s) |
| `public/images/product/invoice/optimized/jobbleder-invoice-customer-a819f5c0ca04.webp` | 400×75; 2,366 bytes | `public/images/product/invoice/source/screenshot_fv_edit.png` | (320, 367, 400, 75); existing lossy invoice WebP; invoice manifest(s) |
| `public/images/product/invoice/optimized/jobbleder-invoice-editor-80c02f47c4d3.webp` | 1917×906; 73,136 bytes | `public/images/product/invoice/source/screenshot_fv_edit.png` | Full original; existing lossy invoice WebP; invoice manifest(s) |
| `public/images/product/invoice/optimized/jobbleder-invoice-editor-mobile-customer-d8eee62a318a.webp` | 400×145; 4,148 bytes | `public/images/product/invoice/source/screenshot_fv_edit.png` | (320, 367, 400, 145); existing lossy invoice WebP; invoice manifest(s) |
| `public/images/product/invoice/optimized/jobbleder-invoice-free-8239cf43dbea.webp` | 959×1251; 52,268 bytes | `public/images/product/invoice/source/fv_free_watermark.png` | Full original; existing lossy invoice WebP; invoice manifest(s) |
| `public/images/product/invoice/optimized/jobbleder-invoice-lines-e59165029d4b.webp` | 400×136; 3,900 bytes | `public/images/product/invoice/source/screenshot_fv_edit.png` | (332, 662, 400, 136); existing lossy invoice WebP; invoice manifest(s) |
| `public/images/product/invoice/optimized/jobbleder-invoice-premium-clear-c94ecd44cf6d.webp` | 959×1251; 45,982 bytes | `public/images/product/invoice/source/fv_premium_clear.png` | Full original; existing lossy invoice WebP; invoice manifest(s) |
| `public/images/product/invoice/optimized/jobbleder-invoice-premium-logo-fe289b390386.webp` | 947×1251; 51,534 bytes | `public/images/product/invoice/source/fv_premium_logo.png` | Full original; existing lossy invoice WebP; invoice manifest(s) |
| `public/images/product/invoice/optimized/jobbleder-invoice-totals-a06d77a998da.webp` | 320×145; 4,460 bytes | `public/images/product/invoice/source/screenshot_fv_edit.png` | (1566, 439, 320, 145); existing lossy invoice WebP; invoice manifest(s) |
| `public/images/product/kontrakt/optimized/jobbleder-contract-advance-1e0f477eb7e3.webp` | 538×58; 3,778 bytes | `public/images/product/kontrakt/source/new_contract_form_with_advance_percentage.png` | (0, 350, 538, 58); exact decoded pixels; contract manifest(s) |
| `public/images/product/kontrakt/optimized/jobbleder-contract-clauses-e1b447e61a33.webp` | 538×278; 23,562 bytes | `public/images/product/kontrakt/source/new_contract_form_with_advance_percentage.png` | (0, 438, 538, 278); exact decoded pixels; contract manifest(s) |
| `public/images/product/kontrakt/optimized/jobbleder-contract-hero-11f4f7338a0b.webp` | 668×422; 28,740 bytes | `public/images/product/kontrakt/source/new_contract_form_time.png` | (0, 84, 668, 422); exact decoded pixels; contract manifest(s) |
| `public/images/product/kontrakt/optimized/jobbleder-contract-hero-mobile-b5101a336cae.webp` | 332×74; 2,948 bytes | `public/images/product/kontrakt/source/new_contract_form_time.png` | (334, 396, 332, 74); exact decoded pixels; contract manifest(s) |
| `public/images/product/kontrakt/optimized/jobbleder-contract-materials-be1c1b83a11e.webp` | 340×142; 2,630 bytes | `public/images/product/kontrakt/source/material_costs.png` | (0, 0, 340, 142); exact decoded pixels; contract manifest(s) |
| `public/images/product/kontrakt/optimized/jobbleder-contract-payments-f96f107da0be.webp` | 652×154; 5,594 bytes | `public/images/product/kontrakt/source/payment_methods.png` | Full original; exact decoded pixels; contract manifest(s) |
| `public/images/product/kontrakt/optimized/jobbleder-contract-payments-mobile-b3e033dbf6b6.webp` | 340×154; 4,024 bytes | `public/images/product/kontrakt/source/payment_methods.png` | (0, 0, 340, 154); exact decoded pixels; contract manifest(s) |
| `public/images/product/kontrakt/optimized/jobbleder-contract-progress-b47e4e1c1c86.webp` | 560×120; 8,672 bytes | `public/images/product/tilbud/source/contract_from_offer_edited.png` | (0, 386, 560, 120); exact decoded pixels; contract manifest(s) |
| `public/images/product/kontrakt/optimized/jobbleder-home-contract-192687f50086.webp` | 638×141; 2,452 bytes | `public/images/product/kontrakt/source/payment_base.png` | Full original; exact decoded pixels; contract manifest(s) |
| `public/images/product/kontrakt/optimized/jobbleder-home-contract-document-249c17de7105.webp` | 508×720; 37,384 bytes | `public/images/product/kontrakt/source/exported_contract_preview.png` | Full original; exact decoded pixels; home, contract manifest(s) |
| `public/images/product/kontrakt/optimized/jobbleder-home-contract-mobile-6413439017d3.webp` | 340×141; 1,910 bytes | `public/images/product/kontrakt/source/payment_base.png` | (0, 0, 340, 141); exact decoded pixels; contract manifest(s) |
| `public/images/product/overview/optimized/jobbleder-home-overview-e9a124620412.webp` | 1918×1077; 77,266 bytes | `public/app-preview.png` | Full original; exact decoded pixels; home manifest(s) |
| `public/images/product/overview/optimized/jobbleder-home-overview-mobile-880aee00ae06.webp` | 392×216; 5,688 bytes | `public/app-preview.png` | (320, 330, 392, 216); exact decoded pixels; home manifest(s) |
| `public/images/product/tilbud/optimized/jobbleder-home-offer-59f2cd7e7af2.webp` | 506×360; 19,060 bytes | `public/images/product/tilbud/source/exported_tilbud_A5.png` | Full original; exact decoded pixels; home manifest(s) |
| `public/images/product/tilbud/optimized/jobbleder-offer-contract-793f5eed04dc.webp` | 834×720; 56,266 bytes | `public/images/product/tilbud/source/tilbud_to_contract.png` | Full original; exact decoded pixels; offer, contract manifest(s) |
| `public/images/product/tilbud/optimized/jobbleder-offer-contract-invoice-7847d3b65141.webp` | 1084×386; 35,312 bytes | `public/images/product/tilbud/source/invoice_from_contract.png` | (184, 146, 1084, 386); exact decoded pixels; offer, contract manifest(s) |
| `public/images/product/tilbud/optimized/jobbleder-offer-contract-invoice-mobile-64fb6553081e.webp` | 862×386; 25,808 bytes | `public/images/product/tilbud/source/invoice_from_contract.png` | (184, 146, 862, 386); exact decoded pixels; offer, contract manifest(s) |
| `public/images/product/tilbud/optimized/jobbleder-offer-contract-mobile-66905c4b86f7.webp` | 664×426; 30,226 bytes | `public/images/product/tilbud/source/tilbud_to_contract.png` | (0, 76, 664, 426); exact decoded pixels; offer, contract manifest(s) |
| `public/images/product/tilbud/optimized/jobbleder-offer-edited-contract-98807c86e360.webp` | 560×442; 26,892 bytes | `public/images/product/tilbud/source/contract_from_offer_edited.png` | (0, 94, 560, 442); exact decoded pixels; offer manifest(s) |
| `public/images/product/tilbud/optimized/jobbleder-offer-editor-efed9bd605e5.webp` | 1084×342; 32,496 bytes | `public/images/product/tilbud/source/new_offer_form.png` | (184, 164, 1084, 342); exact decoded pixels; offer manifest(s) |
| `public/images/product/tilbud/optimized/jobbleder-offer-editor-mobile-c86e5ebb7582.webp` | 842×140; 10,696 bytes | `public/images/product/tilbud/source/new_offer_form.png` | (194, 350, 842, 140); exact decoded pixels; offer manifest(s) |
| `public/images/product/tilbud/optimized/jobbleder-offer-hero-3c424f34ca1e.webp` | 1090×650; 70,056 bytes | `public/images/product/tilbud/source/offer_document_preview_in_documents_menu.png` | (180, 58, 1090, 650); exact decoded pixels; offer manifest(s) |
| `public/images/product/tilbud/optimized/jobbleder-offer-hero-mobile-7ef9a11a7c8c.webp` | 600×168; 11,992 bytes | `public/images/product/tilbud/source/offer_document_preview_in_documents_menu.png` | (660, 260, 600, 168); exact decoded pixels; offer manifest(s) |
| `public/images/product/tilbud/optimized/jobbleder-offer-invoice-825bce28603f.webp` | 1084×386; 35,104 bytes | `public/images/product/tilbud/source/tilbud_to_invoice.png` | (184, 146, 1084, 386); exact decoded pixels; offer manifest(s) |
| `public/images/product/tilbud/optimized/jobbleder-offer-invoice-mobile-dc98f21e88fc.webp` | 862×386; 25,696 bytes | `public/images/product/tilbud/source/tilbud_to_invoice.png` | (184, 146, 862, 386); exact decoded pixels; offer manifest(s) |
| `public/images/product/tilbud/optimized/jobbleder-offer-pdf-085c0b3a1244.webp` | 506×720; 20,340 bytes | `public/images/product/tilbud/source/exported_tilbud_A4.png` | Full original; exact decoded pixels; offer manifest(s) |
| `public/images/product/timeliste/optimized/jobbleder-home-timelist-1ed52e78b8c6.webp` | 608×512; 49,762 bytes | `public/images/product/timeliste/source/documents_menu_preview_timelist_document.png` | (660, 48, 608, 512); exact decoded pixels; home manifest(s) |
| `public/images/product/timeliste/optimized/jobbleder-home-timelist-mobile-208a0fd31c80.webp` | 300×104; 7,234 bytes | `public/images/product/timeliste/source/documents_menu_preview_timelist_document.png` | (770, 281, 300, 104); exact decoded pixels; home manifest(s) |
| `public/images/product/timeliste/optimized/jobbleder-home-workflow-0ee4dab45f71.webp` | 1256×522; 53,442 bytes | `public/images/product/timeliste/source/one_click_invoice_from_timelist.png` | Historical crop; coordinates not currently recorded; visually inspected; Unused/untracked legacy workflow derivative; no current manifest reference |
| `public/images/product/timeliste/optimized/jobbleder-home-workflow-mobile-4743a1295445.webp` | 218×226; 10,896 bytes | `public/images/product/timeliste/source/one_click_invoice_from_timelist.png` | Historical crop; coordinates not currently recorded; visually inspected; Unused/untracked legacy workflow derivative; no current manifest reference |
| `public/images/product/timeliste/optimized/jobbleder-timelist-form-0ef832050c88.webp` | 654×720; 47,768 bytes | `public/images/product/timeliste/source/new_timelist_form_4_different_entries.png` | Full original; exact decoded pixels; timelist manifest(s) |
| `public/images/product/timeliste/optimized/jobbleder-timelist-form-mobile-683400a49c39.webp` | 520×548; 33,176 bytes | `public/images/product/timeliste/source/new_timelist_form_4_different_entries.png` | (0, 172, 520, 548); exact decoded pixels; timelist manifest(s) |
| `public/images/product/timeliste/optimized/jobbleder-timelist-hero-6426b7a8e7d6.webp` | 624×646; 46,052 bytes | `public/images/product/timeliste/source/timelist_4_different_entries_in_documents_menu.png` | (646, 54, 624, 646); exact decoded pixels; timelist manifest(s) |
| `public/images/product/timeliste/optimized/jobbleder-timelist-hero-mobile-b1225eb33266.webp` | 520×222; 14,784 bytes | `public/images/product/timeliste/source/new_timelist_form_4_different_entries.png` | (0, 96, 520, 222); exact decoded pixels; timelist manifest(s) |
| `public/images/product/timeliste/optimized/jobbleder-timelist-invoice-form-8831711a4a0c.webp` | 840×720; 52,880 bytes | `public/images/product/timeliste/source/new_invoice_form_4_different_entries.png` | Full original; exact decoded pixels; timelist manifest(s) |
| `public/images/product/timeliste/optimized/jobbleder-timelist-invoice-form-mobile-68ad22496f40.webp` | 668×480; 29,764 bytes | `public/images/product/timeliste/source/new_invoice_form_4_different_entries.png` | (0, 240, 668, 480); exact decoded pixels; timelist manifest(s) |
| `public/images/product/timeliste/optimized/jobbleder-timelist-invoice-pdf-f5e18354a415.webp` | 508×720; 30,270 bytes | `public/images/product/timeliste/source/exported_invoice_4_different_entries.png` | Full original; exact decoded pixels; timelist manifest(s) |
| `public/images/product/timeliste/optimized/jobbleder-timelist-registrations-b7636e83c465.webp` | 1070×370; 35,438 bytes | `public/images/product/timeliste/source/work_entries_panel_with_2_entries_marked.png` | (200, 64, 1070, 370); exact decoded pixels; timelist manifest(s) |
| `public/images/product/timeliste/optimized/jobbleder-timelist-registrations-mobile-1c7e61037ffa.webp` | 590×166; 11,708 bytes | `public/images/product/timeliste/source/work_entries_panel_with_2_entries_marked.png` | (204, 214, 590, 166); exact decoded pixels; timelist manifest(s) |
| `public/images/product/timeliste/optimized/jobbleder-timelist-timelist-pdf-2ac9500c19b9.webp` | 508×720; 22,154 bytes | `public/images/product/timeliste/source/exported_timelist_4_different_entries.png` | Full original; exact decoded pixels; timelist manifest(s) |

### 3.4 Important existing-crop limitations

- Invoice `processCustomer` shows a **customer** selector. It cannot illustrate company/bank settings. `processLines` shows unit price/MVA but omits the full description/quantity workflow; `processTotals` shows totals, not the Generate button or PDF download.
- Timeliste `registrationsMobile` shows selected records but omits the import toolbar. `heroMobile` and `formMobile` are different views of the four-row form, not the registration import action. `invoiceFormMobile` retains all four invoice lines but omits the original's source/header/summary; pair it with the full image or a separate context view.
- Tilbud `heroMobile` shows preview lines/totals, not document conversion buttons. `editorMobile` shows line details rather than customer/dates. Existing offer and invoice conversion originals already include the missing broader context; do not request duplicates.
- Kontrakt `heroMobile` shows time price/payment days only. Pricing/payment/material selector crops retain their options and are excellent instructional details. Contract clauses and payment-plan detail crops are available without new source captures.
- Document PDFs should retain a complete-page view and full-size access; optional focused details may supplement them later. Never present the earlier offer-priced contract PDF as the exact export of the hourly, 30%-advance or edited progress-plan capture.

## 4. Screenshot-to-instruction coverage matrix

Coverage describes **available visual evidence**, not media already integrated, backend implementation verification or live click-test success. All current hub instructions are text-only.

- **COVERED**: an existing authentic image clearly shows the relevant action/control or result. A visible save/generate button establishes a usable visual explanation; it does not prove the app's storage/API behavior.
- **PARTIAL**: relevant context exists, but the particular control, validation rule, transition or result is not fully demonstrated, or the instruction's label differs. Each row names the exact available files and the limitation.
- **MISSING**: no suitable image for that step; do not substitute another screen's totals/settings or invent a UI.
- **VIDEO RECOMMENDED**: optional motion-dependent supplementary explanation. Current numbered steps can be classified by static availability; the two extra lifecycle/independence opportunities are separately classified in section 9. Video is not a prerequisite for the static implementation.

Every filename below resolves to the exact source path in section 3.2. Duplicate shared workflow filenames intentionally resolve to the Tilbud originals. The full list of 143 existing steps follows; group labels identify the working section anchor and card slug.

### I01 — Appens hovedvisning

Current section URL: [https://www.jobbleder.no/instruksjoner#oversikt](https://www.jobbleder.no/instruksjoner#oversikt); card key `appens-hovedvisning`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Åpne dashboardet når du logger inn. | COVERED | `app-preview.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 2 | Bruk hurtigvalg for å starte vanlige oppgaver. | COVERED | `app-preview.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 3 | Bruk søk for å finne dokumenter, prosjekter og kunder raskt. | PARTIAL | `app-preview.png` | Search field and list visible; search interaction/results accuracy not tested. |
| 4 | Klikk deg videre til riktig arbeidsområde fra menyen. | COVERED | `app-preview.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |

### I02 — Hovedmenyoversikt

Current section URL: [https://www.jobbleder.no/instruksjoner#oversikt](https://www.jobbleder.no/instruksjoner#oversikt); card key `hovedmenyoversikt`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Bruk Opprett når du vil starte et nytt dokument. | COVERED | `app-preview.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 2 | Bruk Dokumenter for å åpne, gjenta og generere PDF fra eksisterende dokumenter. | COVERED | `documents_menu_preview_timelist_document.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 3 | Bruk Arbeidsøkter for å lagre dagsregistreringer og importere dem til timeliste. | PARTIAL | `work_entries_panel.png` | UI is Registreringer, not Arbeidsøkter. |
| 4 | Bruk Prosjekter og Kunder for å organisere dokumenter og arbeid. | COVERED | `app-preview.png`, `project_card_timelist_count_by_name.png`, `client_card_add_timelist_by_client_name_.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 5 | Bruk Rapporter for å se salgs- og timeoversikter. | PARTIAL | `app-preview.png` | Reports entry only; report screens absent. |
| 6 | Bruk Innstillinger for firmadata, standardverdier og Premium. | PARTIAL | `timelist_settings_add_km_row.png` | Only timelist settings contents captured. |

### I03 — Opprett en faktura

Current section URL: [https://www.jobbleder.no/instruksjoner#opprett](https://www.jobbleder.no/instruksjoner#opprett); card key `opprett-faktura`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Velg "Faktura". | COVERED | `screenshot_fv_edit.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 2 | Velg kunde (påkrevd). | PARTIAL | `screenshot_fv_edit.png` | Selected customer is visible; required validation is not. |
| 3 | Velg prosjekt hvis du ønsker å knytte fakturaen til et prosjekt. | COVERED | `screenshot_fv_edit.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 4 | Sett dato og forfallsdato. | COVERED | `screenshot_fv_edit.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 5 | Legg til minst én linje med beskrivelse, pris, antall og MVA. | COVERED | `screenshot_fv_edit.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 6 | Kontroller sammendraget til høyre. | COVERED | `screenshot_fv_edit.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 7 | Klikk Lagre for å lagre dokumentet, eller Generer for å lagre og lage PDF med én gang. | COVERED | `screenshot_fv_edit.png`, `fv_free_watermark.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |

### I04 — Opprett en timeliste

Current section URL: [https://www.jobbleder.no/instruksjoner#opprett](https://www.jobbleder.no/instruksjoner#opprett); card key `opprett-timeliste`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Velg "Timeliste". | COVERED | `new_timelist_wizard.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 2 | Velg prosjekt (påkrevd). | PARTIAL | `new_timelist_wizard.png` | Project field present, mandatory validation not shown. |
| 3 | Skriv inn navn på arbeider. | COVERED | `new_timelist_wizard.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 4 | Legg eventuelt til kunde for bedre orden i dokumentasjonen. | COVERED | `new_timelist_wizard_add_client.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 5 | Legg til rader med dato, beskrivelse, inn, ut og pause. | COVERED | `new_timelist_wizard.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 6 | Marker betalt pause eller ekstraarbeid ved behov. | PARTIAL | `work_entries_add_new_position_mark_as_extra.png`, `new_timelist_form_4_different_entries.png` | Extra shown enabled; paid-pause control present but enabled example absent. |
| 7 | Importer arbeidsøkter hvis du allerede har lagret dagene på forhånd. | COVERED | `work_entries_panel_with_2_entries_marked.png`, `new_timelist_wizard_with_3_entries_imported_from_work_entires_panel.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 8 | Kontroller sammendraget til høyre og lagre eller generer PDF. | COVERED | `new_timelist_wizard.png`, `exported_timelist_with_1_entry.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |

### I05 — Opprett et tilbud

Current section URL: [https://www.jobbleder.no/instruksjoner#opprett](https://www.jobbleder.no/instruksjoner#opprett); card key `opprett-tilbud`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Velg "Tilbud". | COVERED | `new_offer_form.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 2 | Velg kunde. | COVERED | `new_offer_form.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 3 | Velg eventuelt prosjekt. | COVERED | `new_offer_form.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 4 | Sett dato og gyldighetstid. | COVERED | `new_offer_form.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 5 | Legg inn linjer med beskrivelse, pris, antall og MVA. | COVERED | `new_offer_form.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 6 | Kontroller sammendraget. | COVERED | `new_offer_form.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 7 | Lagre dokumentet eller generer PDF. | COVERED | `new_offer_form.png`, `exported_tilbud_A4.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |

### I06 — Opprett en kontrakt

Current section URL: [https://www.jobbleder.no/instruksjoner#opprett](https://www.jobbleder.no/instruksjoner#opprett); card key `opprett-kontrakt`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Velg "Kontrakt". | COVERED | `new_contract_form.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 2 | Velg kunde (påkrevd). | PARTIAL | `new_contract_form.png` | Customer field present; required validation not shown. |
| 3 | Fyll inn datoer for opprettelse, start og slutt. | COVERED | `new_contract_form_time.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 4 | Legg til arbeidsbeskrivelse i egne rader. | COVERED | `new_contract_form_time.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 5 | Velg prismodell: fastpris, timepris eller tilbud. | COVERED | `payment_base.png`, `tilbud_to_contract.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 6 | Velg betalingsmåte og antall betalingsdager. | COVERED | `payment_methods.png`, `new_contract_form_with_advance_percentage.png`, `contract_from_offer_edited.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 7 | Velg hvem som leverer materialer. | COVERED | `material_costs.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 8 | Juster kontraktstekster hvis du vil endre standardklausulene. | COVERED | `new_contract_form_with_advance_percentage.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 9 | Lagre eller generer PDF. | COVERED | `new_contract_form_time.png`, `exported_contract_preview.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |

### I07 — Opprett en kreditnota

Current section URL: [https://www.jobbleder.no/instruksjoner#opprett](https://www.jobbleder.no/instruksjoner#opprett); card key `opprett-kreditnota`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Velg "Kreditnota". | COVERED | `new_creditnota_form.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 2 | Velg kildefaktura. | COVERED | `new_creditnota_form.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 3 | Sett dato. | COVERED | `new_creditnota_form.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 4 | Kontroller innholdet. | COVERED | `new_creditnota_form.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 5 | Lagre eller generer PDF. | PARTIAL | `new_creditnota_form.png` | Lagre/Generer controls shown; generated credit-note output absent. |

### I08 — Dokumentoversikt

Current section URL: [https://www.jobbleder.no/instruksjoner#dokumenter](https://www.jobbleder.no/instruksjoner#dokumenter); card key `dokumentoversikt`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Bruk søkefeltet for å finne dokumenter raskt. | COVERED | `documents_menu_preview_timelist_document.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 2 | Filtrer etter type: faktura, timeliste, tilbud, kontrakt eller kreditnota. | COVERED | `offer_document_preview_in_documents_menu.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 3 | Klikk et dokument i listen for å se detaljer til høyre. | COVERED | `documents_menu_preview_timelist_document.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 4 | Bruk forhåndsvisningen for å kontrollere innhold, sammendrag og relaterte dokumenter. | COVERED | `documents_menu_preview_timelist_document.png`, `documents_menu_preview_timelist_with_extra_km.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |

### I09 — Gjenta et dokument

Current section URL: [https://www.jobbleder.no/instruksjoner#dokumenter](https://www.jobbleder.no/instruksjoner#dokumenter); card key `gjenta-et-dokument`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Åpne dokumentet du vil bruke på nytt. | COVERED | `documents_menu_preview_timelist_document.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 2 | Klikk "Gjenta dokument". | PARTIAL | `documents_menu_preview_timelist_document.png` | Actual button is Opprett kopi, not Gjenta dokument. |
| 3 | Kontroller innholdet i den nye kopien. | MISSING | — | No captured copied-document form/new assigned number. |
| 4 | Gjør endringer ved behov. | PARTIAL | `new_timelist_wizard.png` | Generic editor only, not a copy result. |
| 5 | Lagre eller generer PDF. | PARTIAL | `new_timelist_wizard.png` | Generic save/generate control, not copied-document output. |

### I10 — Opprett faktura fra dokument

Current section URL: [https://www.jobbleder.no/instruksjoner#dokumenter](https://www.jobbleder.no/instruksjoner#dokumenter); card key `lag-faktura-fra-dokument`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Åpne timeliste, tilbud eller kontrakt. | PARTIAL | `timelist_4_different_entries_in_documents_menu.png`, `offer_document_preview_in_documents_menu.png` | Timelist/offer selected views exist; selected contract details absent. |
| 2 | Klikk "Opprett faktura". | PARTIAL | `timelist_4_different_entries_in_documents_menu.png`, `offer_document_preview_in_documents_menu.png` | Timelist/offer Opprett faktura visible; contract starting control not shown. |
| 3 | Kontroller dataene som blir kopiert inn. | COVERED | `new_invoice_form_4_different_entries.png`, `tilbud_to_invoice.png`, `invoice_from_contract.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 4 | Lagre eller generer PDF. | COVERED | `new_invoice_form_4_different_entries.png`, `exported_invoice_4_different_entries.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |

### I11 — Opprett kontrakt fra tilbud

Current section URL: [https://www.jobbleder.no/instruksjoner#dokumenter](https://www.jobbleder.no/instruksjoner#dokumenter); card key `lag-kontrakt-fra-tilbud`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Åpne tilbudet. | COVERED | `offer_document_preview_in_documents_menu.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 2 | Klikk "Opprett kontrakt". | COVERED | `offer_document_preview_in_documents_menu.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 3 | Kontroller vilkår, pris og arbeidsbeskrivelse. | COVERED | `tilbud_to_contract.png`, `contract_from_offer_edited.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 4 | Lagre eller generer PDF. | COVERED | `tilbud_to_contract.png`, `exported_contract_preview.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |

### I12 — Rette en faktura

Current section URL: [https://www.jobbleder.no/instruksjoner#dokumenter](https://www.jobbleder.no/instruksjoner#dokumenter); card key `rette-en-faktura`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Opprett kreditnota for den opprinnelige fakturaen. | COVERED | `new_creditnota_form.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 2 | Lag en ny korrigert faktura ved å opprette den på nytt. | PARTIAL | `screenshot_fv_edit.png` | Independent invoice form exists; not linked correction result. |
| 3 | Kontroller innhold og tall. | PARTIAL | `screenshot_fv_edit.png` | Summary exists; correction validation not demonstrated. |
| 4 | Generer ny PDF. | PARTIAL | `fv_free_watermark.png` | Generic invoice PDF, not a demonstrably corrected output. |

### I13 — Hvordan Arbeidsøkter fungerer

Current section URL: [https://www.jobbleder.no/instruksjoner#arbeidsokter](https://www.jobbleder.no/instruksjoner#arbeidsokter); card key `hvordan-arbeidsokter-fungerer`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Bruk Arbeidsøkter når du vil lagre dagens arbeid raskt. | COVERED | `work_entries_panel.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 2 | Bygg opp flere dager over tid. | COVERED | `work_entries_panel_with_2_entries.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 3 | Velg én eller flere oppføringer senere. | COVERED | `work_entries_panel_with_2_entries_marked.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 4 | Importer dem til timeliste når du er klar. | COVERED | `work_entries_panel_with_2_entries_marked.png`, `new_timelist_wizard_with_3_entries_imported_from_work_entires_panel.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |

### I14 — Legg til en arbeidsøkt

Current section URL: [https://www.jobbleder.no/instruksjoner#arbeidsokter](https://www.jobbleder.no/instruksjoner#arbeidsokter); card key `legg-til-en-arbeidsokt`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Åpne Arbeidsøkter. | COVERED | `work_entries_panel.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 2 | Klikk "Legg til oppføring". | PARTIAL | `work_entries_panel.png` | Actual button Legg til registrering differs. |
| 3 | Fyll inn dato, beskrivelse, inn, ut og pause. | COVERED | `work_entries_add_new_position_mark_as_extra.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 4 | Marker betalt pause eller ekstraarbeid ved behov. | COVERED | `work_entries_add_new_position_mark_as_extra.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 5 | Legg til KM hvis funksjonen er aktivert. | COVERED | `timelist_settings_add_km_row.png`, `work_entries_with_km_value.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 6 | Klikk "Lagre". | PARTIAL | `work_entries_add_new_position_mark_as_extra.png`, `work_entries_panel_with_2_entries.png` | Actual button Lagre registrering differs. |

### I15 — Importer arbeidsøkter til timeliste

Current section URL: [https://www.jobbleder.no/instruksjoner#arbeidsokter](https://www.jobbleder.no/instruksjoner#arbeidsokter); card key `importer-arbeidsokter-til-timeliste`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Åpne Arbeidsøkter. | COVERED | `work_entries_panel.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 2 | Velg én eller flere oppføringer. | COVERED | `work_entries_panel_with_2_entries_marked.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 3 | Klikk "Importer til timeliste". | COVERED | `work_entries_panel_with_2_entries_marked.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 4 | Kontroller de importerte radene i timelisten. | COVERED | `new_timelist_wizard_with_3_entries_imported_from_work_entires_panel.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 5 | Lagre eller generer PDF. | COVERED | `new_timelist_wizard_with_3_entries_imported_from_work_entires_panel.png`, `exported_timelist_with_3_entires.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |

### I16 — Hvordan Prosjekter fungerer

Current section URL: [https://www.jobbleder.no/instruksjoner#prosjekter-kunder](https://www.jobbleder.no/instruksjoner#prosjekter-kunder); card key `hvordan-prosjekter-fungerer`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Bruk ett prosjekt per oppdrag eller jobb. | PARTIAL | `project_card_timelist_count_by_name.png` | Project detail, not creation/list organization. |
| 2 | Knytt timelister, tilbud, kontrakter og fakturaer til prosjektet. | COVERED | `project_card_timelist_count_by_name.png`, `new_offer_form.png`, `new_contract_form_time.png`, `new_timelist_wizard.png`, `screenshot_fv_edit.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 3 | Sett standard arbeidstider hvis du vil forenkle timelisteoppretting. | PARTIAL | `project_card_timelist_count_by_name.png` | Saved work times shown; editing them not shown. |
| 4 | Bruk limit hours og deadline for å følge fremdriften. | COVERED | `project_card_timelist_count_by_name.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 5 | Se dokumentstatistikk og arbeidstimer samlet på prosjektnivå. | COVERED | `project_card_timelist_count_by_name.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |

### I17 — Opprett et prosjekt

Current section URL: [https://www.jobbleder.no/instruksjoner#prosjekter-kunder](https://www.jobbleder.no/instruksjoner#prosjekter-kunder); card key `opprett-et-prosjekt`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Åpne Prosjekter. | PARTIAL | `app-preview.png` | Projects menu entry only. |
| 2 | Klikk "Nytt prosjekt". | PARTIAL | `app-preview.png` | Dashboard Nytt prosjekt exists; Projects-list action not shown. |
| 3 | Skriv inn prosjektnavn. | MISSING | — | Project creation form absent. |
| 4 | Legg til adresse, arbeidstider, beskrivelse, deadline og timegrense ved behov. | PARTIAL | `project_card_timelist_count_by_name.png` | Saved address/times/deadline/limit context, not entry form. |
| 5 | Klikk "Opprett prosjekt". | MISSING | — | Project creation submit/success absent. |

### I18 — Hvordan Kunder fungerer

Current section URL: [https://www.jobbleder.no/instruksjoner#prosjekter-kunder](https://www.jobbleder.no/instruksjoner#prosjekter-kunder); card key `hvordan-kunder-fungerer`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Opprett kunden én gang. | PARTIAL | `app-preview.png`, `client_card_add_timelist_by_client_name_.png` | Ny kunde entry point and saved card only. |
| 2 | Bruk kunden i faktura, tilbud og kontrakt. | COVERED | `screenshot_fv_edit.png`, `new_offer_form.png`, `new_contract_form_time.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 3 | Se antall tilknyttede dokumenter direkte i kundekortet. | COVERED | `client_card_add_timelist_by_client_name_.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |
| 4 | Se relaterte prosjekter og siste dokumenter. | COVERED | `client_card_add_timelist_by_client_name_.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |

### I19 — Opprett en kunde

Current section URL: [https://www.jobbleder.no/instruksjoner#prosjekter-kunder](https://www.jobbleder.no/instruksjoner#prosjekter-kunder); card key `opprett-en-kunde`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Åpne Kunder. | PARTIAL | `app-preview.png` | Kunder menu entry, not full customer list. |
| 2 | Klikk "Ny kunde". | PARTIAL | `app-preview.png` | Dashboard Ny kunde shortcut, not list toolbar. |
| 3 | Fyll inn navn, adresse, postnummer og sted. | MISSING | — | Customer creation fields absent. |
| 4 | Legg til e-post og MVA-nummer ved behov. | PARTIAL | `client_card_add_timelist_by_client_name_.png` | Existing customer values, not input form. |
| 5 | Klikk "Opprett kunde". | MISSING | — | Customer creation submit/success absent. |

### I20 — Hvordan Rapporter fungerer

Current section URL: [https://www.jobbleder.no/instruksjoner#rapporter](https://www.jobbleder.no/instruksjoner#rapporter); card key `hvordan-rapporter-fungerer`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Bruk Monthly Sales for å se fakturaresultater for en valgt måned. | MISSING | — | Monthly Sales report absent. |
| 2 | Bruk Yearly Sales for å sammenligne måneder og totaler for et helt år. | MISSING | — | Yearly Sales absent. |
| 3 | Bruk Monthly Work Hours og Yearly Work Hours for å analysere timer, ekstraarbeid og KM. | MISSING | — | Monthly/Yearly Work Hours absent. |
| 4 | Bruk Project Performance for å sammenligne prosjektverdi og tidsbruk. | MISSING | — | Project Performance report absent; project detail is a different screen. |
| 5 | Bruk Offers for å følge tilbud og konvertering. | MISSING | — | Offers report absent; document list is not a report. |

### I21 — Månedlig salg

Current section URL: [https://www.jobbleder.no/instruksjoner#rapporter](https://www.jobbleder.no/instruksjoner#rapporter); card key `maanedlig-salg`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Velg måned og år. | MISSING | — | Period selector absent. |
| 2 | Se antall fakturaer. | MISSING | — | Report invoice-count result absent. |
| 3 | Kontroller netto, MVA og brutto total. | MISSING | — | Sales report totals absent; individual invoice totals are not this report. |
| 4 | Gå videre til fakturalisten og åpne dokumenter ved behov. | MISSING | — | Report-to-invoice-list navigation absent. |

### I22 — Månedlige arbeidstimer

Current section URL: [https://www.jobbleder.no/instruksjoner#rapporter](https://www.jobbleder.no/instruksjoner#rapporter); card key `maanedlige-arbeidstimer`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Velg riktig periode. | MISSING | — | Report period selector absent. |
| 2 | Kontroller totalt antall timer. | PARTIAL | `project_card_timelist_count_by_name.png` | Project worker totals provide context only, not monthly report. |
| 3 | Sammenlign vanlige timer og ekstraarbeid. | PARTIAL | `exported_timelist_4_different_entries.png` | Ordinary/Extra document examples only, not report. |
| 4 | Se summer per arbeider og prosjekt. | PARTIAL | `project_card_timelist_count_by_name.png` | Worker/project grouping in project detail, not selected-period report. |

### I23 — Hvordan Innstillinger fungerer

Current section URL: [https://www.jobbleder.no/instruksjoner#innstillinger](https://www.jobbleder.no/instruksjoner#innstillinger); card key `hvordan-innstillinger-fungerer`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Fyll inn firmaopplysninger i Company & Billing. | PARTIAL | `timelist_settings_add_km_row.png` | Firma og faktura menu group only; no company fields. |
| 2 | Sett standardverdier for faktura, tilbud, kontrakt og timeliste. | PARTIAL | `timelist_settings_add_km_row.png` | Only timelist defaults body shown. |
| 3 | Oppdater visningsnavn og språk i Profile & Interface. | PARTIAL | `timelist_settings_add_km_row.png` | Profil og grensesnitt menu only. |
| 4 | Bruk Premium & Branding for logo og premiumvalg. | PARTIAL | `timelist_settings_add_km_row.png`, `fv_premium_logo.png`, `fv_premium_clear.png` | Premium og profilering menu and PDF outcomes only. |

### I24 — Firma og fakturadetaljer

Current section URL: [https://www.jobbleder.no/instruksjoner#innstillinger](https://www.jobbleder.no/instruksjoner#innstillinger); card key `firma-og-fakturadetaljer`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Fyll inn firmanavn, adresse, postnummer og poststed. | PARTIAL | `fv_free_watermark.png` | Company identity appears on PDF, not settings input. |
| 2 | Legg til kontonummer og MVA-nummer. | PARTIAL | `fv_free_watermark.png` | Account/MVA appear on PDF, not settings fields. |
| 3 | Velg giro-innstilling hvis du bruker det. | MISSING | — | Giro control not shown or confirmed. |
| 4 | Lagre hvert felt med Lagre-knappen. | MISSING | — | Company field-save controls not captured; timelist saves are a different group. |

### I25 — Standardverdier for dokumenter

Current section URL: [https://www.jobbleder.no/instruksjoner#innstillinger](https://www.jobbleder.no/instruksjoner#innstillinger); card key `standardverdier-for-dokumenter`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Bruk Invoice Defaults for fakturanummer, MVA, betalingsdager, timepris og KM-pris. | PARTIAL | `timelist_settings_add_km_row.png` | Standard for faktura navigation entry only. |
| 2 | Bruk Offer Defaults for tilbudsnummer og gyldighet. | PARTIAL | `timelist_settings_add_km_row.png` | Standard for tilbud navigation entry only. |
| 3 | Bruk Contract Defaults for kontraktsnummer, betalingsdager og materialvalg. | PARTIAL | `timelist_settings_add_km_row.png` | Standard for kontrakt navigation entry only. |
| 4 | Bruk Timelist Defaults for standard inn/ut, pause, betalt pause og KM. | COVERED | `timelist_settings_add_km_row.png` | Relevant control/state is visible; use the source/crop recommendations in section3. |

### I26 — Profil og grensesnitt

Current section URL: [https://www.jobbleder.no/instruksjoner#innstillinger](https://www.jobbleder.no/instruksjoner#innstillinger); card key `profil-og-grensesnitt`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Velg business type som passer virksomheten din. | MISSING | — | Business type setting not captured/confirmed. |
| 2 | Sett worker/display name som skal brukes i timelister. | PARTIAL | `new_timelist_wizard.png` | Worker name visible in document, not profile default setting. |
| 3 | Velg språk for grensesnittet: EN, NO eller PL. | MISSING | — | Language selector absent. |
| 4 | Oppdater e-post eller passord ved behov. | MISSING | — | Account email/password settings absent. |

### I27 — Premium og branding

Current section URL: [https://www.jobbleder.no/instruksjoner#premium](https://www.jobbleder.no/instruksjoner#premium); card key `premium-og-branding`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Se premiumstatus og hvor lenge abonnementet varer. | PARTIAL | `app-preview.png` | Premium aktiv shown; expiry not shown. |
| 2 | Kontroller dokumentbruk og dagens oppsett. | MISSING | — | Actual document-usage settings screen absent; overview invoice count is not a usage quota. |
| 3 | Velg plan og bestill premiumfaktura ved behov. | MISSING | — | Plan/order controls not shown/confirmed. |
| 4 | Åpne premiumfaktura når den er opprettet. | MISSING | — | Premium invoice result absent. |

### I28 — Last opp eller bytt logo

Current section URL: [https://www.jobbleder.no/instruksjoner#premium](https://www.jobbleder.no/instruksjoner#premium); card key `last-opp-logo`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Åpne Premium & Branding i Innstillinger. | PARTIAL | `timelist_settings_add_km_row.png` | Premium og profilering navigation only; current NO label differs. |
| 2 | Velg fil i logo-seksjonen. | MISSING | — | File chooser absent; PDF logo is only output evidence. |
| 3 | Klikk "Replace logo". | MISSING | — | Replace logo control absent/unverified label. |
| 4 | Bruk "Remove logo" hvis du vil fjerne den. | MISSING | — | Remove logo control absent/unverified label. |

### I29 — Velg og bestill Premium

Current section URL: [https://www.jobbleder.no/instruksjoner#premium](https://www.jobbleder.no/instruksjoner#premium); card key `kjop-premium`.

| Step | Existing text | Coverage | Exact existing screenshot filename(s) | Limitation / use |
|---|---|---|---|---|
| 1 | Gå til Premium & Branding. | PARTIAL | `timelist_settings_add_km_row.png` | Localized settings group visible. |
| 2 | Velg 1 måned, 6 måneder eller 12 måneder. | MISSING | — | 1/6/12-month plans not visually or user verified. |
| 3 | Legg inn rabattkode hvis du har en. | MISSING | — | Discount-code field not captured/confirmed. |
| 4 | Klikk Order invoice. | MISSING | — | Order invoice action not captured/confirmed. |
| 5 | Åpne premiumfaktura når den er klar. | MISSING | — | Premium invoice completion/output absent. |

### 4.1 Additional procedural content outside the hub

The hub counts exclude these existing short procedures. This matrix prevents recommending a screenshot that cannot demonstrate a published instruction.

| Location / existing step | Coverage | Existing visual evidence and limitation |
|---|---|---|
| `/fakturaprogram-gratis#slik-fungerer-det` — “Legg inn bedriftsinformasjon.” | PARTIAL | Current `jobbleder-invoice-customer-a819f5c0ca04.webp` shows **Kunde**, not the business settings. `fv_free_watermark.png` shows company output only. C01 below supplies the missing input screen. |
| Same — “Velg kunde og legg til arbeid.” | COVERED in source, PARTIAL in current crop | `screenshot_fv_edit.png` contains customer, description, quantity, unit price and VAT. Current `jobbleder-invoice-lines-e59165029d4b.webp` shows price/VAT only. Reuse the full editor/context rather than requesting it again. |
| Same — “Opprett og last ned faktura som PDF.” | PARTIAL in current crop | `screenshot_fv_edit.png` contains Generer; `fv_free_watermark.png` demonstrates PDF output. Current totals crop alone does not show generation/download. |
| `/tilbud-mal#lag-tilbud` — choose customer/project | COVERED | `new_offer_form.png`; desktop source contains both fields; existing mobile line crop omits them. |
| Same — describe/price work | COVERED | `new_offer_form.png` and existing editor detail. |
| Same — check and create PDF | COVERED | `new_offer_form.png` plus `exported_tilbud_A4.png`; toolbar is in the original. |
| `/tilbud-mal#tilbud-til-kontrakt` — create from offer | COVERED | `offer_document_preview_in_documents_menu.png` → `tilbud_to_contract.png`. |
| Same — edit independently | COVERED state; PARTIAL independence demonstration | `contract_from_offer_edited.png`; user confirms independence, but capture does not show returning to an unchanged original offer. Optional V02. |
| `/timeliste-mal#registreringer` — register work | COVERED | `work_entries_add_new_position_mark_as_extra.png`, `work_entries_with_km_value.png`; prerequisites in `timelist_settings_add_km_row.png`. |
| Same — select/import | COVERED | `work_entries_panel_with_2_entries_marked.png` → `new_timelist_wizard_with_3_entries_imported_from_work_entires_panel.png`; two imported rows plus another row, not three selected registrations. |
| Same — worker name/project/customer | COVERED | `new_timelist_wizard.png`, `new_timelist_wizard_add_client.png`; no employee-account setup. |
| `/blogg/gratis-timeliste-mal` — download PDF | PARTIAL | Existing static PDF endpoint and complete exported examples give context; an exported populated timelist is **not** the blank downloadable template. No screenshot needed to explain a simple download link. |
| Same — fill hours/description daily | COVERED example | `exported_timelist_with_1_entry.png`; it is an app-generated filled example, not an editable PDF form or proof of PDF autofill support. |
| Same — sum time | COVERED example | `exported_timelist_with_3_entires.png` / `exported_timelist_4_different_entries.png`; explain manual-template arithmetic separately from app totals. |
| Same — send to customer/use as invoice basis | PARTIAL | PDF output and `new_invoice_form_4_different_entries.png` show outcomes. User manually distributes the downloaded file; no app-send control is supported. |
| `/blogg/hvordan-lage-gratis-faktura` — create invoice | COVERED | `screenshot_fv_edit.png`. |
| Same — customer information | COVERED | `screenshot_fv_edit.png`. |
| Same — work/product description | COVERED | `screenshot_fv_edit.png`. |
| Same — price/payment information | PARTIAL | Invoice form shows price/due date and PDF shows bank details; company/bank setup needs C01. |
| Same — download or send onward | COVERED output; sending is manual | `fv_free_watermark.png` plus Generer in editor. No direct sending feature should be inferred. |
| `/blogg/fra-tilbud-til-kontrakt-og-faktura` — 1. Lag tilbud | COVERED | `new_offer_form.png`, `exported_tilbud_A4.png`. Current article has a heading but no step explanation. |
| Same — 2. Opprett kontrakt | COVERED | `offer_document_preview_in_documents_menu.png`, `tilbud_to_contract.png`, `contract_from_offer_edited.png`. |
| Same — 3. Utfør arbeid | PARTIAL | `work_entries_add_new_position_mark_as_extra.png` can demonstrate recording work; an application screenshot cannot prove physical job completion. |
| Same — 4. Send faktura | PARTIAL | `invoice_from_contract.png` shows creation, not sending. Explain manual review, PDF generation/download and distribution. |

Other article lists are educational checklists (document contents, common mistakes or follow-up advice), not additional app-button procedures. Section 2.5 inventories their exact headings and content scope. Do not force a product screenshot into a step such as customer phone/email follow-up where the app has no supported sending/reminder function.

## 5. Product accuracy and terminology findings

### 5.1 Confirmed boundaries for all subsequent writing

| Area | Confirmed behavior | Evidence boundary / writing requirement |
|---|---|---|
| Timeliste | Registrations can be imported; regular/Extra hours and regular/Extra KM (KM enabled in settings); four separate invoice categories; worker name entered in document. | USER-CONFIRMED and supported by inspected fields/PDFs. No separate employee accounts, automatic overtime rule or fixed extra-rate multiplier. Demonstration rates 900/1350/12/15 are examples. |
| Tilbud | Create/export PDF; direct invoice or contract conversion; resulting contract independently editable. | USER-CONFIRMED plus starting/target states. No automatic approval, customer portal acceptance, sending or signing. |
| Kontrakt | Independent/from-offer creation, Fast/Time/Tilbud pricing, configurable payments, editable clauses/material responsibility, PDF and invoice conversion. | USER-CONFIRMED/screenshot-supported. Signing is manual. Payment plans are configured terms; no evidence of automatic installment calculations, triggers or scheduled invoice generation. |
| Faktura | Unlimited Free invoices; downloaded PDFs distributed by the user; no direct sending. Free PDFs have Jobbleder branding; Premium supports logo or clean output. | USER-CONFIRMED; three authentic PDF presentations support branding. Do not introduce Free quotas or feature gates. |
| Free/Premium | Confirmed creation/conversion features are in Free; Premium changes document branding. | An overview screenshot captured while Premium is active does not itself establish Free availability. Cite the confirmed product model rather than deriving entitlements from that screenshot. |

### 5.2 Concrete corrections and verification needs

| ID / priority | Location and existing wording | Finding and recommended later action |
|---|---|---|
| A01 / P1 | `content/instructionContent.ts`: Arbeidsøkter; “Legg til oppføring”; “Klikk Lagre” for registration | SCREENSHOT-OBSERVED labels are **Registreringer**, **Legg til registrering**, **Lagre registrering**. This can prevent first-time users finding the stated controls. Align visible text after approval; retain existing `#arbeidsokter` inbound anchor. |
| A02 / P1 | `gjenta-et-dokument`: “Gjenta dokument”, automatically new number | Screens show **Opprett kopi**. Number assignment and copy result are not verified by current screenshots. Correct label; verify numbering before promising automation. Never describe recurring scheduled invoices. |
| A03 / P2 | Settings instructions: Company & Billing, Invoice/Offer/Contract/Timelist Defaults, Profile & Interface, Premium & Branding | Captured Norwegian groups are **Firma og faktura**, **Standard for faktura/tilbud/kontrakt/timeliste**, **Profil og grensesnitt**, **Premium og profilering**. Label the capture language; English alternatives may be useful only if verified for the English UI. Replace/Remove logo and Order invoice remain unverified labels. |
| A04 / P1 verification | `/blogg/gratis-timeliste-mal`, “lagre alt automatisk” | Broad autosave promise is not established by available evidence. Captures distinguish Lagre/Generer and imported-row retention until save/generate. Confirm actual lifecycle, or explicitly describe manual saving in the later rewrite. This is an unsupported assertion, not a backend-proven contradiction. |
| A05 / P2 | `/timeliste-ansatt`, project/worker descriptions and docflow text “per ansatt” | Existing wording can imply employee self-service accounts. Clarify that the operator enters the worker name in the document; project aggregates by those names do not prove team accounts/permissions/payroll. |
| A06 / P2 | Credit-note creation and invoice-correction warnings: invoices cannot be edited directly; automatically new copied number | Not established by this marketing repository or inspected invoice state. The editor screenshot's filename is not evidence of editing saved invoices either. Verify actual document states/rules; do not certify legal compliance or rewrite these as verified restrictions. |
| A07 / P2 | Project required-name-only tip; timelist required project; required customer; giro and profile fields | Some fields are visibly present, but required validation, exact account settings and giro behavior are not confirmed. Mark as verification tasks, not invented missing features or proven false statements. |
| A08 / P2 | Reports and Premium ordering/status instructions | Six report views, plan durations (1/6/12 months), discount code, expiration/usage, premium invoice and account-change controls remain documentation-only. Confirm first; do not reproduce pricing or imply a Free invoice quota from “dokumentbruk”. |
| A09 / P2 | `new_timelist_wizard_with_3_entries_imported_from_work_entires_panel.png` filename | Image has **three rows, but only two imported** according to its visible badge. State/caption precisely. Document-list totals include Extra, while form/PDF ordinary totals are separated; do not add Extra twice. |
| A10 / P2 | Contract example sequence | The PDF is an earlier offer-priced/after-completion version; edited contract shows fixed/progress 25%; invoice112 shows full 12000 net. Never claim it is a calculated 25% installment, exact export of edited terms, automatic billing or electronic signing. |
| A11 / P2 | Generic “send faktura/tilbud” in educational content | Generic manual sending is not inherently false. Make **download and distribute yourself** explicit where application behavior is described. No direct-send button exists in the confirmed model. No explicit e-signature or automatic payment-schedule invoicing claim was found in the hub itself. |
| A12 / P2 | `content/blogPosts.ts`, `/blogg/feil-med-tilbud` link `href: /folle-opp-tilbud` | Saved production GET returned **404**. Existing correct article `/blogg/folle-opp-tilbud` returned **200**; `/hvordan-folge-opp-tilbud` is also an existing SEO guide. Fix the content link later; do not rename existing URLs or create a redirect merely to correct this link. |
| A13 / P2 | `content/invoiceProduct.ts` step1 and `components/product/invoice/InvoiceProcess.tsx` | “Legg inn bedriftsinformasjon” is paired with `processCustomer`, whose visible label is **Kunde**. Actual company settings capture C01 is missing. This is a specific instructional mismatch; do not silently change the already-published product page during this audit. |
| A14 / P2 | Last three contract/workflow articles in `content/blogPosts.ts` | `tilbud-vs-kontrakt`, `nar-trenger-du-kontrakt`, `fra-tilbud-til-kontrakt-og-faktura` contain literal abbreviated paragraphs ending `...`; the workflow article has four headings without body explanations. Their CTA panels are text only and these three have no explicit body app-link block. Existing screenshots suffice for substantial later expansion. |

Legal/tax educational statements and the contract PDF's law-related boilerplate were not checked against current legislation. The audit verifies product/marketing evidence, not legal sufficiency, compliance certification or authenticated document correctness. No claim of independent legal verification is made.

## 6. Instructional UX and accessibility

### 6.1 Executed browser observations from the saved investigation

Chrome headless, production `www.jobbleder.no`, DPR 1, viewport height 900, cache disabled. OS light/dark and reduced-motion preference were set. This is browser emulation, not real-phone testing. No new browser run was needed on resume because the file-preservation check matched the saved investigation.

| Route | Widths | Preferences / executed cases | Result and limits |
|---|---|---|---|
| `/instruksjoner` | 375, 768, 1280, 1440 px | light/dark × widths; reduced motion enabled; 8 cases | HTTP200; no horizontal overflow in these cases. 29 cards/143 steps; zero images/videos; only category anchors. |
| `/lage-faktura` | 375, 1440 px | light/dark × widths; reduced motion enabled; 4 cases | HTTP200; no horizontal overflow in these cases. Light H1 contrast failure confirmed. |
| `/blogg/fra-tilbud-til-kontrakt-og-faktura` | 375, 1440 px | light/dark × widths; reduced motion enabled; 4 cases | HTTP200; no horizontal overflow in these cases. Text-only abbreviated workflow content confirmed. |

Findings from those executed observations:

- Hub: all eight cases returned 200, rendered 29 cards/143 steps, zero main images/videos, and no horizontal overflow. Only the eight section IDs exist; the tested `#opprett-kontrakt` item fragment does not resolve.
- `/lage-faktura`: white H1 over transparent main on white body in light preference; computed H1 `rgb(255,255,255)` against white background gives **1:1 contrast**. This is **P1**, confirmed in both tested light widths. The same legacy renderer explicitly uses `text-white`/`text-gray-300` for headings/copy across thirteen routes; source suggests broader impact, but only the named representative route received browser confirmation. Do not report all thirteen as browser-tested failures.
- Hub/blog explicit white content surfaces with dark text avoid that particular H1 defect. Saved computed colors are observations, not a complete contrast certification.
- With reduced motion enabled, computed `html` scroll behavior remains **smooth** on these legacy pages. Global `app/globals.css` sets smooth scrolling; the shared product surface's reduced-motion rule does not apply here. **P2**: adopt the existing preference behavior when the hub is updated.
- Section scroll margin is `0px`; at widths 768+ the `#opprett` H2 reaches about y64 under a65px sticky legacy header. This is a minor edge occlusion risk, not evidence that the whole heading disappears. Give future anchor targets an appropriate scroll offset.
- No automated axe/Lighthouse run, complete keyboard traversal or screen-reader session was executed in this Phase 5.1 audit. Do not reuse Phase4 product-page scores as instruction-page results. Full-size image links/alt text cannot be tested on a hub that currently has no images.

### 6.2 First-time-user assessment

| Aspect | Current finding | Recommended improvement after approval |
|---|---|---|
| Starting point | Eight subject pills help discovery, but no short first-use path or company/customer/project prerequisites. App actions all open root/login. | Offer a concise setup→create→check→download path and link specific cards. Explain login/Create account without changing authentication. |
| Step order | Forms generally follow sensible field order. Imports and three invoice-source workflows are compressed together; settings have no pictured prerequisites. | Show registration selection→imported form→save/PDF; split invoice conversion by actual source type. |
| Control names | Concrete mismatches in A01–A03. | Use actual labels beside screenshots, preserve language context and distinguish actions from explanatory headings. |
| Relevant media | No instructional screenshot/video integration despite rich existing material. | Put a figure beside the step or short group of steps it explains, not a gallery detached from the numbered procedure. |
| Readability | Full1280/1918px forms become tiny at 375px; existing tight selector crops are excellent. | Use existing lossless details where suitable, readable HTML explanation, explicit dimensions and accessible full-size links; preserve all relevant rows/options. |
| Consistency | Hub/blog use legacy Tailwind cards/header/footer, while product pages use shared site primitives. | Reuse the published typography, section spacing, blue links, media frames and focus behavior; avoid a separate design language or unrelated global refactor. |
| Required/optional | Optional project/customer/Extra/KM choices are mixed with mandatory claims not visually validated. | Mark verified optional steps; explain KM's settings prerequisite and avoid claiming mandatory validation without evidence. |
| Accessibility | Real H1→H2→H3 structure and `ol` steps are useful. Item IDs, skip-to-main treatment and media descriptions are absent; explicit numbered spans may repeat list numbering in some assistive output. | Add stable card targets and native list semantics; treat visual counters as decorative where needed; meaningful alt/captions and visible-label-consistent enlargement links. Verify with keyboard/screen reader later. |
| Linking | Strong inbound product links stop at broad categories; hub app actions sound like deep links; Kontrakt absent from GuideClusters. | Preserve section anchors, add card-level anchors, contextual product/education links and correct the404; label generic app handoff honestly. |
| Video | Conditional video player exists but no video assets/active entries. No captions/transcript mechanism is implemented in that branch. | Add only optional, user-controlled videos where useful; provide captions/transcripts and static alternative. No autoplay or essential information available only in motion. |

## 7. Recommended reusable instructional components

Recommendations only; no new component or content type is created by this audit.

| Existing component/pattern | Reuse | Small later extension / caution |
|---|---|---|
| `components/site/SiteChrome.tsx` / `site.module.css` | Shared header/footer, product dropdown, responsive menu, focus and reduced-motion patterns. | Hub adoption should be approved as its own scoped consistency change; do not change navigation during this audit. |
| `components/site/Primitives.tsx` — `SectionContainer`, `ResourceLink`, `ApplicationCTA`, `REGISTRATION_GUIDANCE` | Layout, contextual links and honest app handoff. | Do not invent screen-specific app URLs. |
| Same — `ProductMedia` | Authentic picture variants, fixed dimensions, caption, full-size source link and description in link name. | Correct current media per instructional action. Current `InstructionItem` has no media fields; add explicit source/alt/caption/step association in a later implementation, without duplicating image pipelines. |
| `components/product/ProductMediaFrame.tsx` / invoice media adapter | Existing invoice frames and original/optimized metadata. | Do not copy an invoice crop purely because its marketing slot is named “Bedriftsinformasjon”; inspect the actual pixels. |
| Existing instruction card + native `ol` | Stable article anchors, prerequisites, small step groups and optional notes. | A minimal `InstructionArticle`/`InstructionStep` wrapper may remove duplicated markup later; keep narrative order and semantic headings, not a new interaction framework. |
| Existing tips/warnings | Local prerequisite/scope notes such as KM setting and manual signing. | Use verified facts, avoid making ordinary steps appear dangerous; do not present unverified restrictions as warnings of fact. |
| Existing plan tables + three invoice PDFs | Free functionality versus Premium branding. | Reuse outputs for explanation, not as fake screenshots of upload/checkout screens. |
| Existing content manifest/pipeline conventions | Source provenance, derivatives, dimensions/crops and original links. | Reuse existing assets first. Generate further derivatives only in a later approved phase and preserve originals. |

Preserve `siteUrl`/canonical helpers, `app/sitemap.ts`, `app/robots.ts` and FAQ/Article infrastructure. A tutorial refresh does not require URL migrations, redirects, new SEO routes or a wholesale component rewrite. Consider step-level media records only when implementation is approved; do not add schema solely for an unverified feature.

## 8. Prioritized missing-screenshot capture plan

This plan follows the complete existing inventory. **Do not recapture the existing invoice/offer forms, registration selection/import result, four work categories, timelist/invoice PDFs, contract price/payment/material menus, clause editors or conversion target forms.** Reuse their exact files from section3.

All names below are **proposed missing files, not existing assets**. Desktop captures are recommended because their field context can later yield readable mobile details; no new phone captures are required for the initial static-guides pass. Use a consistent demo customer/project and hide real account/financial identifiers before capture. Capture current actual UI only. For documentation-only features, verify availability and labels first; if absent, correct the future instruction rather than fabricate a screen. No purchase, account change or destructive action is authorized by this capture plan.

| ID / priority / session | Target instruction | Exact screen/state and elements to retain | Proposed filename and destination | Device / condition |
|---|---|---|---|---|
| C01 / **P1** / S1 setup | `firma-og-fakturadetaljer`, settings overview; Faktura step1 | Innstillinger → actual Firma og faktura content; company name/address/org-MVA/bank fields, real save controls and navigation group. Include giro only if actually supported. Existing PDFs are output, not this screen. | `public/images/product/settings/source/company_billing_settings.png` | Desktop; anonymized complete example. No new invoice editor screenshot. |
| C02 / P2 / S1 | `opprett-en-kunde` | Actual Ny kunde form opened from Kunder; title, name/address/postcode/place, email/MVA if present, required indicators and create action. Existing saved customer card is already available. | `public/images/product/kunder/source/new_client_form.png` | Desktop; verify actual required/optional fields. |
| C03 / P2 / S1 | `opprett-et-prosjekt` | Actual new-project form; name, supported address/time/description/deadline/hour-limit controls and create action. Existing project card supplies after-state/context. | `public/images/product/prosjekter/source/new_project_form.png` | Desktop; verify “only name required” before explaining. |
| C04 / **P1** / S2 document actions | Contract branch of `lag-faktura-fra-dokument` | Dokumenter with Contract 11 selected; visible contract identity, source/linked offer where present, Rediger/Opprett faktura/Generer PDF action bar. Existing `invoice_from_contract.png` already supplies destination. | `public/images/product/kontrakt/source/contract_document_actions.png` | Desktop; no duplicate target-form capture. |
| C05 / P2 / S2 | `gjenta-et-dokument` | Result after Opprett kopi from an existing shown timelist/offer; new document identifier, copied fields and save controls. Existing document preview shows starting action. | `public/images/product/documents/source/copied_document_form.png` | Desktop; confirm number assignment; retain source identity/context in caption, do not imply scheduling. |
| C06 / P2 / S2 | `rette-en-faktura` | Correction result for a deliberate demo case, showing the new invoice identity and corrected line/totals after the real credit-note workflow. Keep source references where actually supported. | `public/images/product/invoice/source/corrected_invoice_result.png` | Desktop; verify allowed correction process first. Do not pass off Invoice 110's unchanged PDF as corrected output. |
| C07 / P3 optional / S2 | `opprett-kreditnota` PDF enhancement | Generated credit-note output for the already available source-invoice example; complete document, source reference and totals. | `public/images/product/kreditnota/source/exported_credit_note_preview.png` | Full document capture. Existing form is sufficient to start the instruction pass; this is optional output reinforcement. |
| C08 / P2 / S3 reports | `maanedlig-salg`, report overview | Actual monthly-sales view: month/year, invoice count, net/VAT/gross totals and invoice-list route/action. | `public/images/product/reports/source/monthly_sales_report.png` | Desktop, **only after confirming this report exists**. |
| C09 / P2 / S3 | `maanedlige-arbeidstimer`, report overview | Actual monthly-hours view: period, ordinary/Extra/KM totals where present, worker/project grouping. Project-detail screenshot is not this report. | `public/images/product/reports/source/monthly_work_hours_report.png` | Desktop; worker names, not account permissions. |
| C10 / P3 / S3 | Report overview, yearly-sales step | Actual yearly-sales view with year/month comparisons and totals. | `public/images/product/reports/source/yearly_sales_report.png` | Desktop, conditional verification. |
| C11 / P3 / S3 | Report overview, yearly-hours step | Actual yearly-work-hours view with supported categories and period. | `public/images/product/reports/source/yearly_work_hours_report.png` | Desktop, conditional verification. |
| C12 / P3 / S3 | Report overview, Project Performance | Actual performance report's selectors/metrics, distinguished from the existing project-detail card. | `public/images/product/reports/source/project_performance_report.png` | Desktop, conditional verification. |
| C13 / P3 / S3 | Report overview, Offers | Actual offers report with real metrics/filters. Offer document preview already exists and is not this screen. | `public/images/product/reports/source/offers_report.png` | Desktop, conditional verification; no invented acceptance/automation metrics. |
| C14 / P2 / S4 defaults/profile | `standardverdier-for-dokumenter` — invoice | Actual Standard for faktura fields: number/VAT/payment-days/rates only where supported and per-field save controls. | `public/images/product/settings/source/invoice_defaults.png` | Desktop; actual default prices are examples, not service pricing. |
| C15 / P2 / S4 | Same — offer | Actual Standard for tilbud fields, numbering/validity and save controls. | `public/images/product/settings/source/offer_defaults.png` | Desktop; verify supported controls first. |
| C16 / P2 / S4 | Same — contract | Actual Standard for kontrakt fields and saves. | `public/images/product/settings/source/contract_defaults.png` | Desktop; **no new Timelist Defaults capture**, already present. |
| C17 / P2 / S4 | `profil-og-grensesnitt` | Actual profile/interface screen, supported name/language/business-type controls; account-change entry point if present, with secrets excluded. | `public/images/product/settings/source/profile_interface_settings.png` | Desktop; do not expose passwords or perform account changes. Document Arbeider screenshot already exists. |
| C18 / P2 / S5 branding | `premium-og-branding`, `last-opp-logo` | Actual Premium og profilering screen, status and logo file chooser/replace/remove or clean-output controls **as actually implemented**. Preserve labels and enabled state. If status and upload are distant, capture a second focused viewport, not duplicate PDF outputs. | `public/images/product/settings/source/premium_branding_controls.png`; if needed `premium_status.png` in same directory | Desktop; three existing PDF variants already cover output. Expiry/usage must be confirmed, not assumed. |
| C19 / P3 / S5 | `kjop-premium` | Actual ordering options, supported periods/discount field and order action, before submission; exclude payment details. | `public/images/product/settings/source/premium_order_options.png` | Desktop; verify periods/discount first; no invented prices or new order required. |
| C20 / P3 / S5 | Premium order/status completion | Existing demo order/invoice ready state and the real open-invoice action. | `public/images/product/settings/source/premium_invoice_result.png` | Desktop; use an existing safe demo record; do not initiate a purchase merely for a screenshot. |

**Session order minimizes setup:** S1 company→customer→project; S2 one consistent demo document lineage; S3 confirmed report views for the same period; S4 defaults/profile; S5 existing Premium account/settings. C01/C04 are the smallest high-priority request. C08–C13/C17–C20 must wait for product confirmation if those screens are not available. Existing-source reuse is sufficient for Phase 5.2A and should proceed before a comprehensive S1–S5 capture programme.

## 9. Optional video opportunities

No videos were found in the inspected public media set, and the hub's two named examples are comments, not available recordings. Do not record simple field filling, PDF appearance, direct offer→invoice or four-category totals solely because video is possible; existing screenshots already explain them.

| ID / classification | Workflow / starting screen | Actions | Ending screen / duration | Existing screenshot alternative and boundary |
|---|---|---|---|---|
| V01 / **VIDEO RECOMMENDED**, optional, confirmation-gated | Registration import/save lifecycle; Registreringer with two rows selected | Click Importer til timeliste, identify imported-count badge, enter worker/project, inspect rows, save/generate. Show return to registrations only after verifying the actual lifecycle. | Saved timelist/document preview; roughly 25–40 s. | Marked registrations, imported form and PDF already exist. Static guide can ship now. Motion is useful specifically for the unresolved timing of retention/consumption, not as evidence of unverified deletion or an extra required capture. |
| V02 / **VIDEO RECOMMENDED**, optional | Independent contract editing; existing offer selected in Dokumenter | Open Opprett kontrakt, show source reference, edit contract terms, save, return to original offer and show its unchanged content **if this actual behavior is confirmed in the current app**. | Edited contract and original-offer comparison; roughly 25–40 s. | `offer_document_preview_in_documents_menu.png`, `tilbud_to_contract.png`, `contract_from_offer_edited.png` cover states. User confirms independence; video adds continuity, not an invoice automation/signature claim. |

Timeliste→Faktura has complete four-line form and PDF screenshots; Tilbud→Faktura has a clear source/target pair; Kontrakt→Faktura has its destination and needs C04's starting panel. **Do not request videos for these adequate static explanations.** If videos are later approved, retain readable static alternatives, user controls, captions/transcripts and reduced-motion behavior. No video is required before initial implementation.

## 10. Prioritized implementation roadmap

### A. Improvements possible immediately with existing material

**Recommended Phase 5.2A:** update the existing hub after approval, keeping URL/canonical and eight section fragments. Correct observed labels; give cards stable item targets; reuse shared media/link/registration-guidance patterns. Prioritize the four creation instructions, document overview, the three registration instructions, and both offer/timelist conversion narratives. Show the contract invoice target accurately while its missing starting-panel capture is planned separately. Keep scopes explicit instead of inventing an image for an unavailable action.

Use the existing source pairs and derivatives in section3. Preserve original PNGs, complete PDFs, all four categories and correct document IDs. Put media beside short step groups, add appropriate alt text/full-size link names, and preserve logical reading order. Clarify Free functionality, manual PDF distribution/signing and the distinction between optional settings and required steps. No backend, login, pricing, analytics or unrelated route change is needed.

Fourteen instructions can receive their principal illustration pass without additional captures; all 27 with usable context can benefit from some immediate reuse. Exact practical grouping follows. This is a planning assessment distinct from the stricter per-step coverage counts.

| Practical group | Instructions / rationale |
|---|---|
| **A — 14 principal illustration passes possible with current material** | `appens-hovedvisning`, `hovedmenyoversikt`, `opprett-faktura`, `opprett-timeliste`, `opprett-tilbud`, `opprett-kontrakt`, `opprett-kreditnota`, `dokumentoversikt`, `lag-kontrakt-fra-tilbud`, `hvordan-arbeidsokter-fungerer`, `legg-til-en-arbeidsokt`, `importer-arbeidsokter-til-timeliste`, `hvordan-prosjekter-fungerer`, `hvordan-kunder-fungerer`. Terminology/required-field/credit-note-output limitations remain explicit; optional additional evidence is not a reason to withhold existing relevant media. |
| **B — 15 need additional screen states for complete walkthroughs** | `gjenta-et-dokument`, `lag-faktura-fra-dokument`, `rette-en-faktura`, `opprett-et-prosjekt`, `opprett-en-kunde`, `hvordan-rapporter-fungerer`, `maanedlig-salg`, `maanedlige-arbeidstimer`, `hvordan-innstillinger-fungerer`, `firma-og-fakturadetaljer`, `standardverdier-for-dokumenter`, `profil-og-grensesnitt`, `premium-og-branding`, `last-opp-logo`, `kjop-premium`. Existing contextual or partial content may still be improved now. Capture plan covers these with shared sessions, not fifteen separate full recaptures. |
| **Overlap metric — 27 can benefit now** | Every instruction except `hvordan-rapporter-fungerer` and `maanedlig-salg` has at least one existing relevant visual. Nine of the27 have PARTIAL-only context. This broader count must not be described as 27 fully screenshot-ready tutorials. |

An implementation should test 375/768/1280/1440, light/dark/reduced-motion, keyboard focus/anchor positioning, alt/link names, no overflow and correct source-image selection. Because the shared product pages are already published, preserve them; separately approve any correction to their existing micro-tutorial crop mismatch.

### B. Improvements requiring additional screenshots or verification

**Phase 5.2B:** fill the minimal missing setup/document-action screens C01–C06, then strengthen customer/project creation, copy/correction and contract→invoice entry steps. Use existing after-state cards and target forms so capture requests remain small. C07 is optional, not a blocker for the basic credit-note form guide.

**Phase 5.3:** verify and illustrate missing settings, reports and Premium controls in sessions S3–S5. Confirm feature names, input validation, report availability, purchase periods and lifecycle behavior before rewriting. If current app evidence contradicts a legacy claim, update the instruction rather than manufacturing supporting media.

**Education follow-up:** fix the proven broken blog link, address the legacy SEO contrast defect within its own approved scope, and expand text-only/example and abbreviated workflow articles with existing authentic figures. Keep educational search intent and URLs; link to detailed instructions rather than clone product-page conversion copy across all routes. Preserve downloads, metadata/canonicals and appropriate FAQ/Article schemas; maintain visible/schema consistency when editing answers later.

### C. Video valuable but optional

Only consider V01/V02 after the static guide and confirmation of the relevant behavior. Do not block media reuse or ask for recordings of every workflow. No synthetic app UI, invented conversion, electronic-signature claim or automatic payment-schedule invoice generation belongs in these phases.

### Scope verification and handoff

Only `docs/phase-5.1-instructions-media-audit.md` is created by this resumed completion. All 213 pre-existing working files matched their saved hashes; HEAD remains `b508d0e80b1ddf0d525e76e8c0e1869cfaa55752` and the index remains empty. Existing untracked screenshots and reports are preserved. Investigation scripts remain external artifacts, not application source.

No page/content/image/navigation/metadata change, optimization, dependency install, commit, push or deployment. TypeScript/ESLint/build were not rerun for this read-only/documentation audit; no new application validation or release approval is claimed. **Stop here and await approval for implementation.**
