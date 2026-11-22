# Phase 9D — Final website QA, SEO audit and release readiness

Date: 22 November 2026 (Europe/Berlin). Audit of the existing, uncommitted local release candidate. Owner visual approvals are accepted; this audit makes no design changes.

## 1. Executive summary

**NOT READY FOR PUBLICATION.** The build and route/link checks pass, but a material contrast defect remains on ten existing guides. Separately, the mandatory application financial acceptance gate remains **PENDING — APPLICATION FINANCIAL VERIFICATION**. Neither passing website tests nor approved screenshots satisfy that gate.

- 45/45 public content routes returned HTTP 200, with 45 corresponding sitemap entries, unique titles/descriptions/canonicals and exactly one H1 each.
- 101/101 unique local linked destinations and 99/99 distinct image/social-image resources returned HTTP 200. No missing checked fragment targets or orphan content routes were found.
- 150 representative width/theme cases passed the horizontal-overflow check. Twenty additional dark-preference contrast cases confirmed the affected scope. This is not an assertion that every page/state is visually flawless.
- 95 axe WCAG 2 A/AA and WCAG 2.1 A/AA runs were executed: 45 initial route checks, 30 representative dark checks, and 20 targeted dark checks. All reported violations were color-contrast failures. No complete WCAG compliance claim is made.
- TypeScript, full ESLint, production build and the existing contract image/content verifier passed. No JavaScript runtime or hydration exception was observed. The known local analytics handshake returned HTTP 400.
- Ten fresh Lighthouse runs: performance 88–100 on mobile and 99–100 on desktop; accessibility and SEO 100 on the five sampled routes; CLS 0 in all ten runs. These samples exclude the contrast-failing guides and do not clear their failures.
- No source, CSS, content, metadata, images or repository configuration was edited. Only this report and external audit diagnostics were created. No staging, commit, push, deploy or application-repository access occurred.

## 2. Repository verification

- Authorized root: `C:/Users/ddlas/Code/jobbleder-site`.
- Package: jobbleder-site 0.1.0; Next.js 16.1.6; React/React DOM 19.2.3; TypeScript; ESLint 9; Tailwind 4/CSS Modules.
- Branch: `main`.
- HEAD: `ec472f5f24ca2627c0c38a5b6e4efe5b9d378aae`.
- 481 existing tracked/untracked files were hashed before inspection. Final preservation verification is recorded in external `preservation.json`. Ignored build output and caches are not application-source edits.
- A pre-existing tracked root artifact has an unusual non-ASCII filename beginning “te pages and add mobile registration showcase” and containing pasted git-commit text. Git's quoted filename output excluded it from the initial filesystem hash list. A final NUL-delimited Git inventory identified it correctly and confirmed its bytes equal HEAD. It is unchanged, is not a new Phase 9D file, and was not removed or executed. Do not treat it as release source; consider a separately authorized housekeeping review.
- Reviewed Phase 9A, 9B, 9C.2, 9C.2A, 9C.3, 9C.4A/B/C and 9C.5 reports, including the separate invoice-copy publication gate. Older measurements are context only; the numbers below are fresh Phase 9D measurements.
- Current approved homepage, contract landing page, contract SEO guides, screenshots and instructions remain intact. No reset, clean, stash, revert or overwrite of earlier work.

## 3. Initial Git status

The full initial status is preserved below. Existing reports, duplicate/unused derivatives, original source images and previous diagnostic directories were retained; this is an audit, not a staging or cleanup phase.

```text
 M app/(seo)/[slug]/opengraph-image.tsx
 M app/(seo)/[slug]/page.tsx
 M app/blogg/[slug]/page.tsx
 M components/home/Homepage.tsx
 M components/home/home.module.css
 M components/instructions/InstructionsHub.tsx
 M components/product/contract/ContractProductPage.tsx
 M content/blogPosts.ts
 M content/contractProduct.ts
 M content/contractProductMedia.json
 M content/instructionGuides.ts
 M content/seoPages.ts
 M scripts/prepare-contract-media.mjs
?? components/product/contract/ContractEditorialMedia.tsx
?? components/product/contract/ContractGuidePage.tsx
?? components/product/contract/ContractMedia.tsx
?? components/product/contract/contractGuide.module.css
?? components/product/contract/contractMedia.module.css
?? content/contractProductVisuals.ts
?? docs/phase-7e-diagnostics/
?? docs/phase-7h-tilbud-production-verification.md
?? docs/phase-8a-diagnostics/
?? docs/phase-8f-faktura-production-verification.md
?? docs/phase-9a-kontrakt-ecosystem-audit.md
?? docs/phase-9b-kontrakt-content-upgrade.md
?? docs/phase-9c2-contract-visual-integration.md
?? docs/phase-9c2-review/
?? docs/phase-9c2a-invoice-copy-release-gate.md
?? docs/phase-9c2a-visual-quality-correction.md
?? docs/phase-9c3-contract-instructions.md
?? docs/phase-9c4a-homepage-redesign-proposal.md
?? docs/phase-9c4b-homepage-implementation.md
?? docs/phase-9c4c-homepage-restoration.md
?? docs/phase-9c5-contract-seo-visual-alignment.md
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-b2b-9a2b3b4668e7.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-b2b-c732250ada84.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-hero-cbbb9ad4befa.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-hero-faee5c2ab7ef.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-326624105cfc.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-mobile-5d4b1a2ab159.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-invoice-mobile-a038f2aeef10.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-materials-9ff1040c096a.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-materials-ac7fc43e9269.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-action-45c573d688c0.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-action-e5744404ead6.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-c9b47a50e629.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-ca69d638cd2f.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-offer-overview-e2387e1b3c82.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-payments-632b3a9f8bfa.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-payments-d3df25846030.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-pricing-0017bd7a2216.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-pricing-c40023acaa65.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-saved-b2-b-df3ee5ae9f1d.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-saved-b2-c-b8ceec4e775e.webp
?? public/images/product/kontrakt/optimized/jobbleder-contract-2-work-02fb97838ded.webp
?? public/images/product/kontrakt/source/contract-2-b2b-form.png
?? public/images/product/kontrakt/source/contract-2-b2b-form_mobile.png
?? public/images/product/kontrakt/source/contract-2-b2b-in-documents.png
?? public/images/product/kontrakt/source/contract-2-b2b-in-documents_mobile.png
?? public/images/product/kontrakt/source/contract-2-b2c-form.png
?? public/images/product/kontrakt/source/contract-2-b2c-form_mobile.png
?? public/images/product/kontrakt/source/contract-2-b2c-in-documents.png
?? public/images/product/kontrakt/source/contract-2-b2c-in-documents_mobile.png
?? public/images/product/kontrakt/source/contract-2-from-offer-mobile.png
?? public/images/product/kontrakt/source/contract-2-from-offer.png
?? public/images/product/kontrakt/source/contract-2-invoice-conversion-mobile.png
?? public/images/product/kontrakt/source/contract-2-invoice-conversion.png
?? public/images/product/kontrakt/source/offer-to-contract.png
?? scripts/review-contract-pages.mjs
?? scripts/verify-contract-visuals.mjs
```

Initial diff summary:

```text
 app/(seo)/[slug]/opengraph-image.tsx               |   4 +-
 app/(seo)/[slug]/page.tsx                          |   8 +
 app/blogg/[slug]/page.tsx                          |   4 +
 components/home/Homepage.tsx                       | 180 ++++----
 components/home/home.module.css                    | 113 +++--
 components/instructions/InstructionsHub.tsx        |   2 +
 .../product/contract/ContractProductPage.tsx       |  64 ++-
 content/blogPosts.ts                               |  63 ++-
 content/contractProduct.ts                         |  16 +-
 content/contractProductMedia.json                  | 383 ++++++++--------
 content/instructionGuides.ts                       |  38 +-
 content/seoPages.ts                                | 502 +++++++++++++++------
 scripts/prepare-contract-media.mjs                 |  76 ++--
 13 files changed, 872 insertions(+), 581 deletions(-)
```

## 4. Complete public route inventory

The actual Next app-router implementations are `app/page.tsx`, `app/(seo)/[slug]/page.tsx`, `app/instruksjoner/page.tsx`, `app/blogg/page.tsx`, `app/blogg/[slug]/page.tsx`, `app/blogg/kategori/[category]/page.tsx`, `app/om-oss/page.tsx` and `app/kontakt/page.tsx`. The parameter values come from all 17 seoPages, all 18 blogPosts and all five blogCategories, not a handpicked URL list.

All 45 rows below: HTTP 200, present in sitemap, self-referencing WWW canonical, one H1, no noindex or blocking X-Robots-Tag observed. Root canonical includes its normal trailing slash. All are reachable by an incoming link from another audited route.

| Route | Rendered title | Rendered H1 | Meta description |
| --- | --- | --- | --- |
| / | Jobbleder – Faktura, kontrakt, timeliste og tilbud på minutter | Kunder, arbeid og dokumenter. Samlet i Jobbleder. | Lag faktura, kontrakt, timeliste og tilbud enkelt i nettleseren. Jobbleder er laget for håndverkere og små bedrifter. |
| /instruksjoner | Instruksjoner for Jobbleder \| Jobbleder | Instruksjonerfor Jobbleder. | Lær hvordan du bruker Jobbleder til å opprette faktura, tilbud, timelister og kontrakter, registrere arbeidsøkter og holde oversikt over prosjekter, kunder og rapporter. |
| /blogg | Blogg om faktura, tilbud, timelister og kontrakter \| Jobbleder \| Jobbleder | Blogg | Artikler og guider om faktura, tilbud, timelister og kontrakter for håndverkere og små bedrifter i Norge. |
| /om-oss | Om Jobbleder \| Jobbleder | Om Jobbleder | Les mer om Jobbleder og hvorfor løsningen er laget for håndverkere og små bedrifter i Norge. |
| /kontakt | Kontakt \| Jobbleder | Kontakt | Kontakt oss hvis du har spørsmål om Jobbleder, faktura, kontrakt, timelister eller tilbud. |
| /timeliste-mal | Timeliste mal – gratis og enkel timeliste (PDF / nett) \| Jobbleder | Timeliste mal (gratis).Fra arbeidstimer til ferdig faktura. | Gratis timeliste mal for håndverkere og små bedrifter. Lag timeliste raskt, last ned som PDF og få full oversikt. |
| /timeliste-mal-pdf | Timeliste mal PDF – gratis timeliste for håndverkere \| Jobbleder | Timeliste mal PDF | Gratis timeliste mal PDF for håndverkere og små bedrifter. Før timer enkelt og last ned timelisten som PDF. |
| /timeliste-uke | Timeliste uke – få oversikt over arbeidstid per uke \| Jobbleder | Timeliste uke | Lag ukentlig timeliste for ansatte, prosjekter eller egne oppdrag. Enkel oversikt og PDF-nedlasting. |
| /timeliste-ansatt | Timeliste ansatt – enkel registrering av arbeidstid \| Jobbleder | Timeliste ansatt | Før timeliste for ansatte på en enkel måte. Perfekt for små bedrifter og håndverkere som trenger oversikt over arbeidstid. |
| /timeliste-prosjekt | Timeliste prosjekt – før timer per prosjekt og kunde \| Jobbleder | Timeliste prosjekt | Lag timeliste per prosjekt og få bedre oversikt over arbeidstid, kunder og oppdrag. Last ned som PDF. |
| /tilbud-mal | Tilbud mal – skriv et profesjonelt tilbud (gratis) \| Jobbleder | Lag tilbud som blir til mer. | Tilbud mal for små bedrifter og håndverkere. Lag tilbud raskt og konverter til faktura når kunden sier ja. |
| /lage-tilbud | Lage tilbud – hvordan skrive et godt tilbud \| Jobbleder | Lage tilbud | Lær hvordan du lager et ryddig og profesjonelt tilbud. Enkelt for håndverkere og små bedrifter i Norge. |
| /tilbud-eksempel | Tilbud eksempel – se hvordan et godt tilbud kan se ut \| Jobbleder | Tilbud eksempel | Se et tilbud eksempel og lær hvordan et ryddig og profesjonelt tilbud kan bygges opp for små bedrifter og håndverkere. |
| /fakturaprogram-gratis | Fakturaprogram gratis – lag faktura enkelt i Norge \| Jobbleder | Gratis fakturaprogram.Ubegrenset fakturering. | Fakturaprogram gratis for håndverkere og små bedrifter. Lag faktura raskt i nettleseren og last ned som PDF. |
| /hvordan-folge-opp-tilbud | Hvordan følge opp tilbud – få flere svar fra kunder \| Jobbleder | Hvordan følge opp tilbud | Lær hvordan du følger opp et sendt tilbud på en profesjonell måte og øker sjansen for å få svar fra kunden. |
| /lage-faktura | Lage faktura – hvordan skrive en faktura enkelt \| Jobbleder | Lage faktura | Lær hvordan du lager en faktura enkelt og riktig. Jobbleder gjør det raskt å opprette faktura i nettleseren. |
| /faktura-eksempel | Faktura eksempel – se hvordan en faktura kan se ut \| Jobbleder | Faktura eksempel | Se et enkelt faktura eksempel og lær hvordan en profesjonell faktura bør bygges opp for små bedrifter og håndverkere. |
| /faktura-krav | Faktura krav – hva må en faktura inneholde? \| Jobbleder | Faktura krav | Lær hvilke opplysninger en faktura bør inneholde og hvordan du lager en ryddig faktura for kunder i Norge. |
| /kontrakt-mal | Kontrakt mal – lag kontrakt gratis med Jobbleder \| Jobbleder | Lag kontrakter som passer jobben. | Lag kontrakt for privatkunder og bedrifter gratis med Jobbleder. Beskriv arbeidet, avtal pris, sett opp betalingsplan og last ned kontrakten som PDF. |
| /kontrakt-handverker | Kontrakt for håndverkere – omfang, pris og vilkår \| Jobbleder | Kontrakt for håndverkere | Forbered kontrakt for maler-, snekker-, gulv- og oppussingsarbeid. Avklar omfang, materialer, pris og tidsplan for privatkunder eller bedrifter. |
| /kontrakt-eksempel | Kontrakt eksempel – se hvordan en kontrakt bygges opp \| Jobbleder | Kontrakt eksempel | Se hvordan et kontraktsdokument kan bygges opp med parter, arbeid, pris, tidsplan og vilkår. En pedagogisk gjennomgang, ikke en juridisk godkjent mal. |
| /hva-skal-en-kontrakt-inneholde | Hva skal en kontrakt inneholde? Praktisk sjekkliste \| Jobbleder | Hva skal en kontrakt inneholde? | En praktisk gjennomgang av parter, arbeid, pris, betaling, tidsplan og endringer i en tjenestekontrakt. Skill anbefalinger fra lovkrav. |
| /blogg/kategori/timeliste | Timeliste \| Blogg \| Jobbleder | Timeliste | Artikler og guider om timeliste for brukere av Jobbleder. |
| /blogg/kategori/faktura | Faktura \| Blogg \| Jobbleder | Faktura | Artikler og guider om faktura for brukere av Jobbleder. |
| /blogg/kategori/tilbud | Tilbud \| Blogg \| Jobbleder | Tilbud | Artikler og guider om tilbud for brukere av Jobbleder. |
| /blogg/kategori/kontrakt | Kontrakt \| Blogg \| Jobbleder | Kontrakt | Artikler og guider om kontrakt for brukere av Jobbleder. |
| /blogg/kategori/oversikt | Oversikt \| Blogg \| Jobbleder | Oversikt | Artikler og guider om oversikt for brukere av Jobbleder. |
| /blogg/gratis-timeliste-mal | Gratis timeliste mal (PDF) – last ned uten innlogging \| Jobbleder | Timeliste mal (PDF) – gratis nedlasting uten innlogging | Last ned gratis timeliste mal PDF uten innlogging. Velg mellom tom timeliste og ferdig datert timeliste for siste uke. |
| /blogg/gratis-fakturaprogram-handverkere | Gratis fakturaprogram for håndverkere – enkelt og nettbasert \| Jobbleder | Gratis fakturaprogram for håndverkere – her er et enkelt alternativ | Opprett faktura raskt med et gratis fakturaprogram for håndverkere. Enkel løsning direkte i nettleseren. |
| /blogg/lage-tilbud-byggebransjen | Hvordan lage et profesjonelt tilbud i byggebransjen \| Jobbleder | Hvordan lage et profesjonelt tilbud i byggebransjen | Slik lager du et tydelig og profesjonelt tilbud i byggebransjen. Lær hva som bør være med og hvordan du gjør det enklere digitalt. |
| /blogg/innhold-i-faktura | Hva skal en faktura inneholde? En enkel oversikt \| Jobbleder | Hva skal en faktura inneholde? | Se hva en faktura bør inneholde, og hvordan du lager en tydelig og profesjonell faktura for kunder i Norge. |
| /blogg/feil-med-tilbud | Topp 5 feil å unngå når du sender tilbud \| Jobbleder | Topp 5 feil å unngå når du sender tilbud | Her er de vanligste feilene i tilbudsdokumenter – og hva du kan gjøre for å sende tydeligere og mer profesjonelle tilbud. |
| /blogg/effektiv-timeliste | Hvordan føre timelister effektivt \| Jobbleder | Hvordan føre timelister effektivt – spesielt for selvstendig næringsdrivende | Lær hvordan du fører timelister effektivt og hva en god timeliste bør inneholde for bedre oversikt og dokumentasjon. |
| /blogg/hvordan-lage-gratis-faktura | Hvordan lage en faktura gratis på nett \| Jobbleder | Hvordan lage en faktura gratis på nett? | Slik lager du en profesjonell faktura gratis på nett. Enkel oversikt over hva en faktura bør inneholde og hvordan du kommer i gang. |
| /blogg/lage-tilbudsdokument | Hva er et tilbudsdokument og hvordan lager du ett? \| Jobbleder | Hva er et tilbudsdokument og hvordan lager du ett? | Lær hva et tilbudsdokument er, hva som bør være med, og hvordan du lager et profesjonelt tilbud på en enkel måte. |
| /blogg/forskjell-faktura-tilbud-timeliste | Forskjellen på faktura, tilbud og timeliste \| Jobbleder | Faktura, timeliste og tilbud – hva er forskjellen og når bruker du dem? | Her er en enkel forklaring på forskjellen mellom faktura, tilbud og timeliste – og når du bør bruke dem. |
| /blogg/folle-opp-tilbud | Hvordan følge opp et sendt tilbud og lande flere jobber \| Jobbleder | Hvordan følge opp et sendt tilbud og lande flere jobber | Slik følger du opp et sendt tilbud på en profesjonell måte og øker sjansen for å få respons fra kunden. |
| /blogg/timeliste-for-handverkere | Timeliste for håndverkere – hvorfor gode rutiner er viktige \| Jobbleder | Timeliste for håndverkere – hvorfor gode rutiner sparer deg for tid | Slik bruker håndverkere timelister for bedre oversikt, dokumentasjon og enklere arbeidshverdag. |
| /blogg/timeliste-og-faktura | Timeliste og faktura – slik henger de sammen \| Jobbleder | Timeliste og faktura – hvordan henger de sammen? | Slik bruker du timeliste som grunnlag for tydeligere og enklere fakturaarbeid. |
| /blogg/faktura-eksempel-sma-bedrifter | Faktura eksempel for små bedrifter \| Jobbleder | Faktura eksempel for små bedrifter – hva bør det vise? | Se hva et godt faktura eksempel bør vise, og hvordan små bedrifter kan lage tydelige fakturaer. |
| /blogg/nar-sende-faktura | Når bør du sende faktura for raskere betaling? \| Jobbleder | Når bør du sende faktura for å få raskere betaling? | Lær hvorfor timing er viktig når du sender faktura, og hvordan gode rutiner kan gi raskere betaling. |
| /blogg/tilbud-eller-pristilbud | Tilbud eller pristilbud – hva forventer kunden? \| Jobbleder | Tilbud eller pristilbud – hva forventer kunden egentlig? | Slik lager du et tydelig tilbud eller pristilbud som er lett for kunden å forstå og ta stilling til. |
| /blogg/tilbud-vs-kontrakt | Tilbud vs kontrakt – hva er forskjellen? \| Jobbleder | Tilbud vs kontrakt – hva er forskjellen? | Lær forskjellen mellom tilbud og kontrakt og når du bør bruke hvert dokument. |
| /blogg/nar-trenger-du-kontrakt | Når trenger du kontrakt som håndverker? \| Jobbleder | Når trenger du kontrakt som håndverker? | Se når et eget kontraktsdokument er nyttig, hva du bør avklare med kunden og forskjellen på privatkunde og bedrift. |
| /blogg/fra-tilbud-til-kontrakt-og-faktura | Fra tilbud til kontrakt og faktura – slik fungerer det \| Jobbleder | Fra tilbud til kontrakt og faktura – slik fungerer det | Se hvordan du bruker et tilbud som grunnlag for kontrakt og faktura, og hva du må kontrollere før dokumentene deles. |

H1 strings above use DOM textContent; line breaks/inline spans can join adjacent words in this diagnostic extraction. This is not evidence of visually missing spaces. No skipped heading levels or duplicate element IDs were found in the 45 expanded documents.

Additional public infrastructure: `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, `/twitter-image`, `/[slug]/opengraph-image-ys41am`, `/blogg/[slug]/opengraph-image`, favicon/icon assets, static product images and `/downloads/timeliste-mal-jobbleder.pdf`. These are not additional indexable editorial routes. Site-level POST endpoints are `/api/contact`, `/api/handshake` and `/api/footprint`; robots disallows /api/ and /private/. Next's not-found/error surfaces are infrastructure, not sitemap destinations.

The fresh build generated 55 entries including metadata/error infrastructure. The intentionally nonexistent audit URL returns HTTP 404; the local trailing-slash request resolves to /kontrakt-mal. No incorrect editorial redirects were found. Production apex-to-WWW edge redirects and deployment identity were not tested in this local audit.

## 5. Technical test results

| Command / check | Result |
| --- | --- |
| npx.cmd tsc --noEmit --incremental false | PASS, exit 0 |
| npm.cmd run lint | PASS, full ESLint, exit 0; no lint warnings |
| npm.cmd run build | PASS, exit 0, 55 generated entries |
| node scripts/verify-contract-visuals.mjs | PASS: 13 lossless derivatives, 93 unchanged original source files; external CONTRACT_REVIEW_DIRECTORY |
| git diff --check | PASS; existing LF/CRLF notices are not whitespace failures |
| Fresh Chrome crawl and representative interaction tests | No JS pageerror/hydration exceptions; local handshake 400 documented separately |
| Source-preservation check | 481 pre-existing file hashes compared; only new repository audit report permitted |

The existing visual verifier used an external copy of the prior expected-content baseline under phase9d/contract-check. It reports older approved baseline differences; these are not changes made by Phase 9D. No media-preparation script was run. package.json defines no unit-test runner/test script; the relevant existing contract verifier was executed, without inventing a test-suite result.

Build notices: Node DEP0205 for module.register() deprecation. Git emits existing LF-to-CRLF conversion notices. Neither is a TypeScript/ESLint/build failure.

The console also records the deliberate 404 probe for /missing-phase9d-page. Its diagnostic page-context label remained /kontakt after the preceding test; the actual failed URL is the intentional probe, not /kontakt, which returned 200. This expected 404 and the local handshake 400 are network/resource messages, not JavaScript runtime exceptions.

First browser attempt to a sandbox-hosted preview on port 3099 timed out. A fresh production build was then served outside the sandbox at **http://127.0.0.1:3100** and all reported successful browser/HTTP/Lighthouse tests used that server. A failed environment connection is not counted as a passing test or a website defect. Tests did not use local results as proof of a production deployment.

## 6. SEO findings

Confirmed across every indexable route:

- Unique nonempty title, description and canonical; expected self URL on https://www.jobbleder.no. No accidental local-origin canonicals, duplicate canonical URLs, missing H1, extra H1 or noindex.
- Sitemap has exactly the 45 expected content URLs, no missing or extra content route and no API/source-image URLs. robots allows public content and points to the WWW sitemap and host.
- HTML lang is no; Open Graph locale is no_NO. This is a valid Norwegian language declaration. A change to more specific nb is optional, not an indexing defect.
- All JSON-LD blocks parse. Organization and WebSite appear globally; Article appears on all 18 article routes. All 17 SEO routes contain FAQPage, with **79** question/answer pairs found in expanded visible content. No FAQ mismatch found. JSON parsing/content comparison does not replace a rich-results or legal validation service.
- Breadcrumb links resolve. Contract guides and product pages keep their own search intent; blog and template pages remain distinct. Topical overlap alone is not proof of harmful cannibalization. No new Search Console/ranking data was available, so no traffic/cannibalization guarantee is offered.

Nonblocking SEO issues:

1. **W03:** 40 non-home routes inherit root og:url=https://www.jobbleder.no and generic Jobbleder social title/description, even where an actual per-route OG image exists. The four contract routes have route-specific OG values. Canonical tags are correct; this is social metadata inconsistency, not 40 wrong canonicals. Twitter descriptions are also commonly inherited. Route-specific refinements need a separate metadata change.
2. **W02:** global WebSite SearchAction points to /blogg?q={search_term_string}, but the blog implementation has no query filtering/search input. A fresh unmatched-query browser request still returns the ordinary listing. Remove the unsupported action in a later scoped change unless real search exists; do not build a new search feature merely for schema.
3. **W09:** /blogg title is “Blogg om faktura, tilbud, timelister og kontrakter | Jobbleder | Jobbleder”: the page includes the suffix and root template adds it again. Other natural references to Jobbleder within titles are not automatically defects.

No metadata or structured-data edits were made.

## 7. Internal-link results

101 unique local URL destinations were extracted from all rendered anchors, including full-size original images and the downloadable local PDF. Each was fetched: **101 HTTP 200**, no failures. All 162 source/fragment references resolve to an ID in the appropriate rendered target document; zero missing and zero unchecked targets. Instruction/homepage anchors and contextual product/blog links are included.

No orphan editorial page was found. Related-page links retain their destinations. The existing /blogg/feil-med-tilbud follow-up link points to /blogg/folle-opp-tilbud and that route returns 200. No broken-link table rows exist to correct.

Primary app CTAs and login destinations resolve syntactically to https://app.jobbleder.no/ (with normal trailing-slash normalization); existing Create account guidance is retained. No login or application workflow was exercised. Email/telephone URLs on /kontakt are syntactically appropriate and were not used to send a message or place a call.

PDF checks:

| URL | HTTP | Content-Type | Bytes | Signature |
| --- | --- | --- | --- | --- |
| http://127.0.0.1:3100/downloads/timeliste-mal-jobbleder.pdf | 200 | application/pdf | 339211 | %PDF- confirmed |
| https://laskowskicreative.no/api/jobbleder/user/documents/oneweek-timelist | 200 | application/pdf | 334283 | %PDF- confirmed |

The weekly endpoint was checked once directly with system CA support and returned a real PDF, not an HTML login page. This is verification of a public download; no authenticated application/backend was inspected. Other external legal-resource links were inventoried but not re-fetched or legally re-verified; this phase's link-pass count is explicitly local.

## 8. Image/media findings

- All 99 distinct checked runtime/social-image resources return HTTP 200. Separate favicon, Apple icon and Organization logo checks also return 200. All visible content images in the crawl have alt text, load successfully and declare width/height.
- Inventory: 201 PNG/WebP raster files under public; source dimensions and bytes are in external http.json. PNG sources and WebP files were not regenerated or modified. All manifest-referenced, rendered images and original-image anchors from the crawl resolve.
- Homepage selects the existing overview/mobile crop and full/compact/mobile document-flow variants. All four supported flows remain represented in its readable HTML text alternative. No workflow was cropped out of that explanation.
- Contract media preserves lossless derivatives, native-size caps, genuine values, captions distinguishing app previews from PDF output, and the approved below-640 omission of unreadably small interface crops. Text guidance remains available. Accepted source-resolution limits are not reclassified as new release blockers.
- Full-size screenshot links were HTTP-tested and representative links were keyboard-focused; visible names contain the full-size action or meaningful image description. No new screenshot/link naming failure was reported by axe.
- Fixed-ratio invoice frames use object-fit: contain. Different element-box and source ratios are **letterboxing, not distortion**. Only a small legacy invoice-totals crop was found actually enlarged: 320 source pixels to about 347 CSS pixels (1.085×) on desktop /fakturaprogram-gratis. W08 recommends capping it in a later media-only change; no source alteration is needed.
- Largest delivered editorial resource is the accepted desktop docflow WebP: 1536×1024, 1,005,366 bytes. Compact: 1442×597, 610,516 bytes; mobile: 1000×597, 408,308 bytes. It is lazy-loaded, so its full cost is absent from initial-viewport Lighthouse totals. W07 records the payload tradeoff without altering approved graphics.

Full-expanded desktop unique content-image bytes (on-disk compressed assets, not initial transfer or wire-compressed HTML): homepage 1,241,106; contract product 195,998; contract example 52,448; expanded instructions 1,517,124; timelist product 279,034. Instructions initially load no screenshot images while collapsed. Browser audit temporarily forced visible images eager to verify them; original loading attributes were captured first and application behavior was not changed.

## 9. Responsive findings

Main matrix: 15 representative routes × five widths × both light/dark OS preferences, all with reduced motion = **150 cases**. Main disclosures and nested instruction examples were expanded during geometry/media checks. Twenty additional dark checks cover all ten failing guides at 375/1440 px.

| Representative route | 375 | 390 | 768 | 1024 | 1440 | Readability result |
| --- | --- | --- | --- | --- | --- | --- |
| / | L/D tested | L/D tested | L/D tested | L/D tested | L/D tested | No material text/layout failure in sampled states |
| /fakturaprogram-gratis | L/D tested | L/D tested | L/D tested | L/D tested | L/D tested | No material text/layout failure in sampled states |
| /timeliste-mal | L/D tested | L/D tested | L/D tested | L/D tested | L/D tested | No material text/layout failure in sampled states |
| /tilbud-mal | L/D tested | L/D tested | L/D tested | L/D tested | L/D tested | No material text/layout failure in sampled states |
| /kontrakt-mal | L/D tested | L/D tested | L/D tested | L/D tested | L/D tested | No material text/layout failure in sampled states |
| /kontrakt-eksempel | L/D tested | L/D tested | L/D tested | L/D tested | L/D tested | No material text/layout failure in sampled states |
| /kontrakt-handverker | L/D tested | L/D tested | L/D tested | L/D tested | L/D tested | No material text/layout failure in sampled states |
| /hva-skal-en-kontrakt-inneholde | L/D tested | L/D tested | L/D tested | L/D tested | L/D tested | No material text/layout failure in sampled states |
| /instruksjoner | L/D tested | L/D tested | L/D tested | L/D tested | L/D tested | No material text/layout failure in sampled states |
| /blogg/gratis-timeliste-mal | L/D tested | L/D tested | L/D tested | L/D tested | L/D tested | No material text/layout failure in sampled states |
| /blogg/fra-tilbud-til-kontrakt-og-faktura | L/D tested | L/D tested | L/D tested | L/D tested | L/D tested | No material text/layout failure in sampled states |
| /lage-faktura | L/D tested | L/D tested | L/D tested | L/D tested | L/D tested | Contrast failure in both preferences |
| /faktura-krav | L/D tested | L/D tested | L/D tested | L/D tested | L/D tested | Contrast failure in both preferences |
| /timeliste-mal-pdf | L/D tested | L/D tested | L/D tested | L/D tested | L/D tested | Contrast failure under dark preference |
| /kontakt | L/D tested | L/D tested | L/D tested | L/D tested | L/D tested | No material text/layout failure in sampled states |

No horizontal overflow in the 150 main or 20 additional cases. No broken image, clipped main control or overlapping content was established in the inspected representative captures. Natural image proportions/contain treatment are preserved. Reduced motion gives scroll-behavior:auto and no running animation in all 150 main cases.

Thirty full-page captures (15 routes ×390/1440) and twenty targeted contrast viewports are external evidence. Visual inspection included homepage mobile; contract product desktop; contract-example mobile; Lage faktura desktop; Tilbud example desktop and PDF-template dark mobile. The report does not imply manual visual inspection of every captured pixel/state. Previous owner visual approval of other layouts stands.

Native modern mobile menus and legacy hamburger menus were opened with Enter and closed with Space at 375 px; menu expansion caused no overflow. Desktop modern product dropdowns behaved similarly at 1440. Legacy desktop navigation is a plain link list, so the automated “no dropdown control” result there is expected, not a failed dropdown. Actual link destinations were tested separately.

## 10. Accessibility findings

Automated scope: axe-core WCAG2A/AA + WCAG2.1A/AA, **95 runs**. Expanded content was included; offscreen collapsed navigation descendants are not treated as visible touch targets. Automated checks do not fully assess raster screenshot text, screen-reader usability or every interaction.

**W01 — P1: contrast failures, ten routes.** Six guides fail in the initial 1440/light crawl and in targeted 375/1440 dark checks:

| Route | 1440/light failing nodes (color-contrast) |
| --- | --- |
| /lage-tilbud | 54 |
| /tilbud-eksempel | 62 |
| /hvordan-folge-opp-tilbud | 59 |
| /lage-faktura | 58 |
| /faktura-eksempel | 49 |
| /faktura-krav | 49 |

Four specialized Timeliste pages pass the light initial check but fail with dark OS preference:

| Route | 375/dark failing nodes | 1440/dark failing nodes |
| --- | --- | --- |
| /timeliste-mal-pdf | 38 | 42 |
| /timeliste-uke | 33 | 37 |
| /timeliste-ansatt | 33 | 37 |
| /timeliste-prosjekt | 34 | 38 |

Evidence: dark H1 #0f172a against hero #172337 has **1.13:1** contrast (large text needs 3:1); header body #334155 against #101827 has **1.71:1** (normal text needs 4.5:1). Heading, paragraph, header and footer readability are materially affected. For specialized pages with transparent hero sections the effective backdrop comes from the surrounding surface; this does not clear the reported dark-state failures.

Root cause: site.surface defines light --site-ink/--site-body variables at components/site/site.module.css:1–15. Equal-specificity page token declarations in invoiceExample.module.css, invoiceGuide.module.css, invoiceRequirements.module.css and offerExample.module.css can lose to the shared stylesheet in the bundled cascade. OfferGuidePage also reuses the offer example theme. specializedTimelist.module.css:69–73 introduces dark backgrounds while its token overrides similarly fail against the shared light surface. The new contract guide uses the more specific .page[data-contract-guide] scope and does not exhibit this failure. Class order in JSX is not a cascade-order fix.

Recommended later fix: make each intended theme's token scope deterministic against the shared surface while preserving approved designs and rerun all consumers in both preferences. Do not globally invert the site or apply new layouts. This is a functional readability correction, not reopening visual design preferences. No fix was applied during this audit.

Other findings and passes:

- All four product pages, homepage, instructions and three contract guides report no axe violations in the executed samples. The contrast defect predates this audit; no source regression was introduced here.
- Focus outlines exist on tested menu/FAQ/preview links; contrast of those outlines still inherits W01 on failing pages. Native FAQ toggles and representative instruction disclosures operate with Enter/Space. The homepage document-flow disclosure is intentionally initially open; its inverse first-toggle result is expected. A subsequent explicit FAQ test confirmed open/close behavior.
- Modern skip links are first tab targets and transfer focus to main. **26 legacy routes** (blog listing/categories/articles, about and contact) lack a skip link (W04). Navigation/main landmarks offer some structure, so no blanket complete-compliance failure is inferred from this alone.
- Form labels associate with all contact inputs, textarea and acceptance checkbox. Empty-submit validation displays “Skriv inn navn.” without sending a message. The dynamic error has no alert/live region and does not focus/associate the invalid control (W05); announce/associate validation in a scoped follow-up. Valid submission was not attempted, avoiding unsolicited contact messages.
- Modern product navigation labels and legacy “Hjem”/“Login” differ (W06). Mobile controls remain functional. Open-menu link rows were at least 28px high in the tested legacy menu; primary CTA rows meet the established larger sizing. The smaller top brand/login rows are not reported as WCAG 2.1 failures just because they are below the optional 44px target.
- Some axe incomplete contrast entries concern decorative aria-hidden chevrons/arrows; these are not counted as confirmed violations. No screen-reader session or accessibility certification was performed.

## 11. Performance measurements

Lighthouse **13.6.0**, local production server, one run per route/profile. Mobile uses Lighthouse simulated mobile throttling; desktop uses its desktop config. These are laboratory measurements, not Vercel production or CrUX field data. Analytics requests were intentionally blocked in Lighthouse to avoid repeated tracking; the unblocked analytics observation is separate. No other browser audit was running during these measurements.

| Route | Profile | Perf | A11y | Best practices | SEO | LCP ms | CLS | TBT ms | Initial image bytes | Script bytes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| / | mobile | 92 | 100 | 96 | 100 | 2743 | 0 | 210 | 108563 | 141200 |
| / | desktop | 100 | 100 | 100 | 100 | 661 | 0 | 0 | 237151 | 160844 |
| /kontrakt-mal | mobile | 100 | 100 | 100 | 100 | 1220 | 0 | 55 | 19366 | 150937 |
| /kontrakt-mal | desktop | 99 | 100 | 100 | 100 | 834 | 0 | 0 | 88456 | 170581 |
| /kontrakt-eksempel | mobile | 100 | 100 | 100 | 100 | 1220 | 0 | 39 | 0 | 150937 |
| /kontrakt-eksempel | desktop | 100 | 100 | 100 | 100 | 302 | 0 | 0 | 53576 | 170581 |
| /instruksjoner | mobile | 88 | 100 | 100 | 100 | 1090 | 0 | 470 | 0 | 150307 |
| /instruksjoner | desktop | 100 | 100 | 100 | 100 | 304 | 0 | 0 | 0 | 160844 |
| /timeliste-mal | mobile | 97 | 100 | 100 | 100 | 2566 | 0 | 46 | 71810 | 150937 |
| /timeliste-mal | desktop | 100 | 100 | 100 | 100 | 689 | 0 | 0 | 174858 | 170581 |

All ten runs completed without Lighthouse runtime errors or runWarnings. INP field data is unavailable; TBT above is a laboratory responsiveness proxy and **is not INP**. CLS 0 applies to these measured initial journeys, not every possible disclosure/interaction on every route.

W07: mobile homepage LCP 2.743s and timelist 2.566s exceed the 2.5s “good” threshold in these single samples; instructions mobile TBT is 470ms and performance 88 despite LCP 1.090s. Suggested follow-up is a scoped profiling/measurement pass, not immediate unapproved design or asset changes. Lighthouse suggests roughly 27–28KiB unused JS and ~11–12KiB unused CSS on samples. Framework/shared JS is the dominant script footprint (~141–171KB transferred); no new third-party marketing service was identified.

Homepage mobile Best Practices 96 reflects its low-resolution image audit, not a JS runtime error: an accepted 392px mobile source at simulated high DPR does not provide retina detail. Contract source-resolution constraints were already acknowledged. Desktop docflow's 1MB payload is below fold and is not represented by initial image bytes. A 100 accessibility sample score does not overrule failed axe checks on other routes.

## 12. Content consistency findings

Public rendered content and app/components/content source were searched for Contract 2.0, Kontrakt 2.0, internal phases, financial-audit/manual-screenshot-correction language. No matching public-facing internal-history statement was found. Internal asset filenames such as contract-2 are implementation paths, not visible version branding, and were not changed.

The inspected document workflows distinguish user-initiated creation/conversion, review and manual PDF sharing. No automatic invoice delivery, electronic signing, automatic payment-schedule invoicing, payroll, employee-account or offline claim was established in the inspected public copy. The worker-name attribution and Free conversion explanations remain explicit. This confirms wording consistency with existing owner evidence, **not** live application calculation correctness.

Free/Premium comparisons consistently retain document creation/PDF/conversion in Free and branding/logo differences in Premium. Mentions of limits in /blogg/gratis-fakturaprogram-handverkere are framed as generic competing-software limitations, not Jobbleder limits. No invented product restriction is reported from those lines.

Minor consistency items: legacy Navbar uses English Login and Hjem rather than the modern product menu (W06); /om-oss and the legacy Footer describe only faktura/timeliste/tilbud even though contract is now a core product (W10). Existing English application control names within instructions are not necessarily errors: they describe actual evidenced UI labels and were not translated speculatively.

The contract-to-invoice marketing claim at ContractProductPage's conversion section remains subject to F01. Screenshots with genuine example values are not evidence that all calculation defects have been fixed. Existing legal disclaimers remain meaningful and must not be removed as marketing “noise.”

## 13. Premium pricing review

Owner-provided reference, not newly published website copy:

| Duration | Owner-provided amount | MVA treatment |
| --- | ---: | --- |
| 1 month | 100 NOK | Not confirmed |
| 6 months | 350 NOK | Not confirmed |
| 12 months | 600 NOK | Not confirmed |

No public Premium monetary price statement or monthly-equivalent calculation was found in the rendered 45 routes/source search. Current pages describe branding benefits without a price; instructions list the supported 1/6/12-month choices and ordering a Premium invoice. Therefore no outdated or mathematically contradictory published amount is established. Numerical invoice/offer demonstration amounts are not Premium prices.

O01: owner must confirm whether these amounts include MVA before any pricing publication. Omitting a full three-price table is not automatically a blocker; the owner has not required all durations to be marketed. No price label was added, changed or inferred.

## 14. Financial release gate

**PENDING — APPLICATION FINANCIAL VERIFICATION**

F01 is a mandatory **product/application acceptance requirement**, separate from W01 and other website defects. Source: docs/phase-9c2a-invoice-copy-release-gate.md. Relevant contract-to-invoice conversion/calculation corrections and regression evidence have not been supplied or established in the website repository.

Before publishing dependent marketing claims, obtain the tested application commit/version, defect-reproduction cases and passing regression evidence covering applicable fixed/hourly/offer inputs, line transfer/editing, VAT, net/gross, rounding, matching generated PDF and payment-plan boundaries. Record owner acceptance. No application frontend/backend repository or authenticated workflow was accessed here. Successful TypeScript/build, screenshot values or visually approved layouts do not close F01.

## 15. Legal release gate

L01 — **PENDING independent legal review / explicit owner approval for withheld B2C/B2B PDFs**. This is a legal-content release requirement, not a new claim that the website implementation exposes an unlawful document.

- The only PDF file in public is the existing timelist template. No new B2C/B2B contract PDF exists in public, the sitemap or the crawled download destinations.
- Contract pages retain the independent-review qualification and avoid legally approved/signing-ready guarantees. The current document image is labelled an application preview, not a published contract PDF, and older document imagery elsewhere is not represented as proof of today's B2C/B2B terms.
- Images/captions and contract examples remain educational evidence, not universal legal templates. Manual signature handling remains explicit.
- Withheld materials must stay withheld until explicit owner approval and the required legal review. No file was published, removed or automatically altered. Any future claim of legal completeness requires fresh evidence. This audit is not a legal opinion or a fresh review of external legislation.

## 16. Analytics review

Installed: root layout mounts components/Tracker.tsx, using lib/tracking.ts and the site's /api/handshake and /api/footprint routes. Site API handlers depend on server-only CONTACT_UID, CONTACT_CLIENT_KEY, CONTACT_ENDPOINT, FOOTPRINT_ENDPOINT and HANDSHAKE_ENDPOINT. Required key names are present in local .env.local; values are not reproduced.

One unblocked homepage load observed **/api/footprint HTTP 200** and **/api/handshake HTTP 400**. The handshake handler converts caught failures to “Invalid request”; that status alone cannot distinguish TLS/network/upstream problems. Footprint returns 200 after starting an unawaited upstream fetch and swallowing failures, so HTTP 200 is **not evidence of successful analytics ingestion**.

Subsequent automated browser requests were fulfilled synthetically with 204 and Lighthouse blocked them, solely in the test harness to avoid unnecessary tracking. Those are not real service results. No tracking implementation was edited. Production analytics and upstream delivery were not tested; no production-impacting regression is asserted from a local 400. A01 requests production-safe confirmation before relying on analytics reporting, without adding services or automatically blocking publication solely for analytics setup.

## 17. Security/configuration findings

- Only website source/configuration and public assets were inspected. No intrusive scan, authentication probe, contact delivery, application access or backend-repository inspection.
- .env.local is ignored by .gitignore; git ls-files did not list .env, PEM/key files. Source uses the listed secrets only in server route handlers. No NEXT_PUBLIC_ reference was found in app/components/lib. No secret values were copied into diagnostics/report.
- Public inventory contains image/icon files and the one known timelist PDF, with no unexpected executable, environment, key or private document file extension. This filename/source review is not an OCR privacy certification of every demonstration screenshot.
- next.config.ts has no custom header/redirect configuration. Local HTML serves normal Next RSC Vary/cache headers and x-powered-by:Next.js. CSP, frame restrictions, Referrer-Policy and explicit security headers are absent locally (W11); production hosting may add them and was not verified. Recommend a separate production-header review rather than asserting an observed production vulnerability or changing deployment config now.
- Fingerprinted derivatives/JS have distinct names. Static HTML caching belongs to the current build/deployment; no authenticated pages or personalized private content are generated by these public routes. Production CDN invalidation is not tested by this local build.
- Contact API has basic input/environment checks, but no local rate-limit/CAPTCHA mechanism is evident. Upstream/edge protections are unknown. Treat anti-abuse and user-safe error handling as follow-up hardening, not a demonstrated exploit. Upstream error snippets should be reviewed before relying on them as user messages.
- The existing oddly named tracked root artifact described in section 2 is outside public and has no demonstrated public exposure. It is a repository housekeeping observation, not a new application feature or an audited secret leak.
- Dependencies are the existing Next/React stack, with no new tracking/runtime service or dependency added. No vulnerability audit/database lookup was run, so absence of a known-vulnerability finding is not a package-security guarantee.

## 18. Prioritized issue register

### Website implementation defects and improvements

| ID | Severity | Affected route/file and evidence | User impact | Recommended fix | Owner input |
| --- | --- | --- | --- | --- | --- |
| W01 | **P1 — release blocker** | Six Faktura/Tilbud guides in section 10; four specialized Timeliste pages in dark preference. Token conflict with site.module.css; H1 1.13:1, header 1.71:1. browser.json/extra.json and contrast captures. | Core headings/body/navigation/footer difficult to read. | Deterministic scoped theme tokens, preserve approved design, rerun all ten routes and shared consumers. | Approve narrowly scoped fix; do not deploy current candidate. |
| W02 | P2 | app/layout.tsx:58–60 advertises SearchAction; /blogg ignores q and has no search UI. | Search metadata describes unsupported navigation. | Remove unsupported SearchAction in scoped SEO correction; do not add new functionality without scope. | Approval for metadata change. |
| W03 | P2 | 40 non-home routes inherit root og:url and generic social title/description; metadata appendix/http.json. | Shares can present generic destination/preview text. | Add route-specific social metadata consistent with correct existing canonicals. | Approve SEO refinement; safe to defer. |
| W04 | P2 | 26 legacy routes using Navbar lack skip link; representative first keyboard target is home logo. | Keyboard users repeat navigation before content. | Shared legacy skip-to-main treatment with unique main target; preserve layout. | Approve scoped accessibility change. |
| W05 | P2 | components/ContactForm.tsx:37,159; empty submit gives visible error but no live region/invalid-control association or focus handoff. | Assistive-tech users may not discover validation feedback. | Announce error and associate/focus invalid field; retain current form content. | Scoped fix approval; no test message delivery needed. |
| W06 | P2 | components/Navbar.tsx versus SiteChrome: Hjem/Login and no products menu on legacy routes. Menus themselves work. | Inconsistent product discovery and Norwegian labels. | Plan a deliberate shared-chrome alignment rather than duplicating dropdowns. | Navigation/content approval; can defer. |
| W07 | P2 | Homepage mobile LCP 2.743s, timelist 2.566s; instruction TBT 470ms; desktop docflow 1,005,366 bytes. | Slower sampled low-end mobile experience; below-fold image cost. | Profile hydration/loading and payload in separate scope while retaining authentic images/readability. | Approve performance scope; not a new P1 from one lab sample. |
| W08 | P3 | /fakturaprogram-gratis invoice totals crop 320px enlarged ~1.085×; invoiceProduct.module.css image frame. object-fit contains other ratios. | Slight softness in a small existing screenshot. | Cap actual content width at native or request a higher-resolution genuine source later. | Optional; source stays unchanged. |
| W09 | P3 | /blogg title repeats “| Jobbleder”; app/blogg/page.tsx:12 plus root title template. | Unpolished search/browser title. | Remove one suffix in a later metadata-only correction. | Approval for metadata edit. |
| W10 | P3 | /om-oss and components/Footer.tsx name three products and omit Kontrakt. | Older supporting copy understates current product scope. | Small naming update when legacy supporting content is approved. | Editorial approval. |
| W11 | P3 | No explicit local security-header policy; no website-level contact anti-abuse controls evident; production edge unknown. | Defense-in-depth/abuse uncertainty, not a demonstrated exploit. | Review production headers and existing upstream protections; scope changes separately. | Hosting/security owner input. |
| W12 | P3 | Build Node DEP0205; existing Git line-ending notices. | Maintenance noise; no failed technical check. | Address tooling/normalization only in a future maintenance task. | No immediate release change needed. |

### Product/application acceptance requirement

| ID | Priority / state | Evidence / impact | Required action | Owner input |
| --- | --- | --- | --- | --- |
| F01 | **P1 release gate — PENDING — APPLICATION FINANCIAL VERIFICATION** | Existing invoice-copy release gate; no accepted application regression evidence. Website tests cannot substantiate financial correctness. | Supply separately authorized application corrections/tests/version and acceptance before publishing dependent claims. | Mandatory application acceptance evidence; no application work authorized here. |

### Legal-review requirement

| ID | State | Evidence / impact | Required action | Owner input |
| --- | --- | --- | --- | --- |
| L01 | P1 conditional gate — pending for withheld/legal-approved examples; no confirmed current asset exposure | No B2C/B2B contract PDF in public; disclaimers retained; independent review pending. | Keep withheld PDFs unpublished. Obtain legal review and explicit approval before changing this state or making signing-ready claims. | Mandatory legal review/approval for affected materials. |

### Owner decisions and operational verification

| ID | Priority / state | Evidence / impact | Recommended action | Owner input |
| --- | --- | --- | --- | --- |
| O01 | P2 decision; not an existing pricing defect | 100/350/600 NOK reference supplied; MVA treatment unknown; no contradictory public price found. | Confirm VAT inclusion before any published price/label. Decide whether pricing belongs on website. | Required before adding pricing. |
| A01 | P2 operational observation | Local footprint 200 (does not prove ingestion), handshake 400; subsequent tracking suppressed. | Production-safe tracking/ingestion confirmation; distinguish TLS/local issues; do not modify blindly. | Operational owner evidence; not automatically a blocker. |

No new P0 website issue was demonstrated. P1 W01 is a confirmed website defect. F01 remains a separate mandatory publication hold, not an inferred defect caused by the website implementation. Legal, pricing and analytics states must not be merged into one unexplained “failed build” verdict.

## 19. Recommended remediation order

1. Authorize and fix **W01** with a narrow cascade/token correction; preserve owner-approved layouts, copy and assets. Test six older guides in both preferences and four specialized pages in dark/light, plus shared consumers, before accepting the website release candidate.
2. Obtain **F01** evidence in the separately authorized application workstream. Do not claim this read-only website audit has closed it.
3. Keep **L01** withheld PDFs/claims blocked pending independent review/approval. Retain current disclaimers. Confirm **O01** only if pricing is to be published.
4. Consider scoped W02/W04/W05 corrections, then W03/W06/W07 improvements. They do not authorize any implementation now or redesign of approved pages.
5. After mandatory holds are cleared and the owner approves release: perform an explicit staging review, build validation and production verification in a separately requested release phase. Confirm production analytics and edge behavior then. P3 items can remain tracked without bundling unrelated changes.

## 20. Release readiness assessment

**NOT READY FOR PUBLICATION.** Technical validation passes, route/asset/link integrity is sound and the newly approved contract pages are preserved. Material readability failures on ten existing routes prevent a whole-site release approval. Independently, the required financial acceptance evidence is outstanding. The site must not be declared ready merely because Lighthouse samples score 100 or the build succeeds.

No deploy, commit, staging plan execution or application correction was attempted. This phase ends at findings and owner review; it does not automatically start a remediation phase.

## 21. Exact files created

Only repository file created: `docs/phase-9d-final-website-qa.md`. All existing repository files are preserved by final SHA-256 comparison. No existing source file was modified.

External evidence directory: `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d`.

External scripts: setup.cjs, browser.cjs, http.cjs, analyze.cjs, extra.cjs, lighthouse.mjs and report.cjs. Raw evidence: initial.json, browser.json, http.json, summary.json, extra.json, lighthouse-summary.json and preservation.json. contract-check/baseline.json is a copied existing fixture, with the fresh verification.json result. Lighthouse creates lh-{home,kontrakt-mal,kontrakt-eksempel,instruksjoner,timeliste-mal}-{mobile,desktop}.json and .html (all explicit entries are in external files.json).

Thirty full-page screenshots use each representative route's slash-to-hyphen name, or home, with -390.png/-1440.png. Twenty focused contrast captures use contrast-{route}-375.png/-1440.png for the ten affected routes. These are browser evidence, not regenerated product graphics. Key evidence:

- [Lage faktura contrast, desktop](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d/lage-faktura-1440.png)
- [Specialized Timeliste dark contrast, mobile](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d/contrast-timeliste-mal-pdf-375.png)
- [Tilbud example contrast, desktop](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d/contrast-tilbud-eksempel-1440.png)
- [Approved contract example, mobile](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d/kontrakt-eksempel-390.png)
- [Homepage, mobile](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d/home-390.png)
- [Contract product, desktop](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d/kontrakt-mal-1440.png)

The temporary external scripts/JSON/screenshots are diagnostics, not production/staging assets. Local preview remains at http://127.0.0.1:3100. No report claim substitutes it for production behavior.

## 22. Remaining owner decisions

- Approve the narrow W01 theme/contrast correction while keeping approved appearance/content.
- Supply accepted application financial regression/version evidence for F01 before publication of dependent marketing claims.
- Obtain independent legal review and explicit permission before publishing withheld contract PDF examples or claiming legal approval.
- Confirm whether Premium prices include MVA, and whether any pricing is to be added at all.
- Decide which nonblocking P2/P3 improvements to include in separate scopes and how production analytics/edge checks will be accepted.
- Approve a later release only after mandatory requirements are met. No automatic follow-on work is started.

**PHASE 9D COMPLETE — AWAITING OWNER REVIEW**
