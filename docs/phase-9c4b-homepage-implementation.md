# Phase 9C.4B — Homepage redesign implementation

Dato: 22. november 2026. Implementert og testet lokalt; ikke publisert.

**PHASE 9C.4B COMPLETE — READY FOR OWNER VISUAL REVIEW**

Hjemmesiden presenterer nå Jobbleder som én løsning for kunder, prosjekter og dokumentarbeid. Godkjent hero A er implementert, fire lange produktintroduksjoner er erstattet med likeverdige kort, og dokumentflytene er lesbar HTML. Eksisterende visuell identitet, felles navigasjon, SEO og tidligere kontraktarbeid er bevart.

## 1. Initial repository status

Verifisert repository: `C:/Users/ddlas/Code/jobbleder-site`. Pakken er `jobbleder-site`, med Next.js 16.1.6, React 19.2.3, TypeScript og Tailwind CSS 4/CSS Modules. Branch var `main`, HEAD `ec472f5f24ca2627c0c38a5b6e4efe5b9d378aae`.

Arbeidstreet inneholdt 11 endrede sporede filer og eksisterende usporede komponenter, bilder, rapporter og diagnostikk fra tidligere faser. Disse er beholdt. Ingen reset, clean, stash, staging, commit, push eller deploy er utført. Ingen applikasjonsrepository er åpnet eller endret.

Før implementering ble 470 eksisterende kilde-, medie-, konfigurasjons- og dokumentasjonsfiler kontrollsummert. Gamle hjemmesidefiler og renderte metadata/innhold/bildereferanser for fem regresjonsruter ble registrert separat. Sluttkontrollen tillater bare de to hjemmesidefilene og denne nye rapporten som faseendringer.

Godkjent forslag lest: `docs/phase-9c4a-homepage-redesign-proposal.md`. Nåværende hjemmeside, mediemanifester og felleskomponenter er gjennomgått. Ingen avhengighet er lagt til.

## 2. Exact files modified

| Fil | Endring |
| --- | --- |
| `components/home/Homepage.tsx` | Ny godkjent seksjonsstruktur, hero, fire modulkort, HTML-flyter, kunder/prosjekter, plansammenligning, kort onboarding, FAQ og kompakte guidegrupper. |
| `components/home/home.module.css` | Hjemmesidelokal layout, kort, mediecontainere, responsive flytforbindelser, plansammenligning og disclosures. |
| `docs/phase-9c4b-homepage-implementation.md` | Ny implementerings- og verifikasjonsrapport. |

Ingen delte komponenter, bilder, mediemanifester, produkt-/blogg-/instruksjonssider, metadatafiler, autentisering eller API-er er endret i denne fasen. Eksisterende kontraktinnhold og godkjente skjermbilder er uendret. Ingen grafikk er regenerert.

## 3. Implemented section structure

1. Hero med godkjent H1, CTA-er, registreringsveiledning og orientering til fire moduler.
2. Fire dokumentmoduler: Timeliste, Tilbud, Kontrakt og Faktura.
3. Sammenhengende dokumentflyter, inkludert de to direkte alternativene.
4. Kunder og prosjekter, forklart med tekst og instruksjonslenker.
5. Én Free/Premium-sammenligning.
6. Fire korte, reelle onboardinghandlinger.
7. FAQ og kompakte, grupperte fagressurser.
8. Kort avsluttende CTA i eksisterende mørke formspråk.

SiteHeader og SiteFooter gjenbrukes uendret. SectionContainer, ApplicationCTA, ResourceLink og ProductMedia gjenbrukes. Hjemmesiden er fortsatt en serverkomponent; det er ikke lagt til en ny klientkomponent, karusell eller accordion-avhengighet.

## 4. Hero implementation

H1 er nøyaktig:

> Kunder, arbeid og dokumenter. Samlet i Jobbleder.

Beskrivelsen følger det godkjente forslaget: «Samle kunder, prosjekter, timelister, tilbud, kontrakter og fakturaer på ett sted. Jobbleder gjør det enklere å holde oversikt over arbeidet og dokumentene.»

«Start gratis» går fortsatt til `https://app.jobbleder.no/`. «Se hvordan det fungerer» går til eksisterende `#workflow-title`. Registreringsveiledningen om innlogging og «Create account» er bevart. Ingen direkte registreringsrute er oppfunnet.

Ved 1024 px og større vises det eksisterende oversiktsbildet ved siden av teksten. Under 1024 px utelates bildet visuelt; lesbar tekst, CTA-er og de fire dokumentnavnene prioriteres. De fire navnene lenker til sine eksisterende ankre. Bildet er et autentisk eksempel, ikke en rekonstruert appvisning.

Målt hero ved 1440 px: ca. 643 px, mot ca. 1257 px i auditen. Ved 390 px: ca. 685 px, mot ca. 908 px. Målene gjelder seksjonen, ikke nettleserens høyde eller en garantert plassering på alle enheter.

## 5. Product module implementation

Desktop/tablet fra 768 px bruker et 2 × 2-rutenett; mindre bredder bruker én kolonne. Alle fire kort har samme struktur, typografi, bildeareal og redaksjonelle omfang. Ved 1440 px målte alle kort ca. 589 px i høyde. På mobil får teksten naturlig høyde uten å tvinge identiske tekstblokker.

Bevarte produktdestinasjoner:

- Timeliste → `/timeliste-mal`.
- Tilbud → `/tilbud-mal`.
- Kontrakt → `/kontrakt-mal`.
- Faktura → `/fakturaprogram-gratis`.

Eksisterende bilder gjenbrukes med hele den valgte filens proporsjoner. Medieflater har fast høyde, og bildene tilpasses med contain og makshøyde; de beskjæres eller oppskaleres ikke. Fullstørrelseslenkene åpner de eksisterende kildefilene. Det liggende tilbudsbildet er presist merket som et utsnitt. Kontrakten er et separat generert eksempel og fremstilles ikke som eksporten fra en annen vist kontraktkonfigurasjon.

| Bilde under `public/` | Dimensjoner | Bytes |
| --- | --- | ---: |
| `images/product/overview/optimized/jobbleder-home-overview-e9a124620412.webp` | 1918 × 1077 | 77 266 |
| `images/product/timeliste/optimized/jobbleder-home-timelist-1ed52e78b8c6.webp` | 608 × 512 | 49 762 |
| `images/product/tilbud/optimized/jobbleder-home-offer-59f2cd7e7af2.webp` | 506 × 360 | 19 060 |
| `images/product/kontrakt/optimized/jobbleder-home-contract-document-249c17de7105.webp` | 508 × 720 | 37 384 |
| `images/product/invoice/optimized/jobbleder-invoice-free-8239cf43dbea.webp` | 959 × 1251 | 52 268 |

Faktura viser nå et autentisk Free-eksempel fremfor Premium som eneste hovedeksempel. Ingen ny bildevariant er opprettet. Fire produktbilder er lazy-lastet. Små dokumenttekster er ikke ment som selve veiledningen; beskrivelsen og fullstørrelseslenken gir kontekst og inspeksjon.

## 6. Workflow implementation

To semantiske ordnede lister forklarer:

- Tilbud → Kontrakt → Faktura.
- Registreringer → Timeliste → Faktura, presentert som veien fra arbeidstimer til fakturagrunnlag.

Fra 1024 px står hovedløpene ved siden av hverandre. Stegene ligger horisontalt fra 768 px når plassen tillater det, og vertikalt på mobil. Nummererte trinn og enkle CSS-linjer støtter rekkefølgen; all meningsbærende tekst er HTML. Ingen rastertekst, skjult konverteringsvei eller horisontal scrolling brukes.

Tilbud → Faktura og Timeliste → Faktura er eksplisitte, kompakte alternativer. Kontrakt er dermed ikke fremstilt som obligatorisk mellom tilbud og faktura. Instruksjonslenker dekker tilbud til kontrakt, import til timeliste, kontrakt til faktura og de to direkte løpene. Eksisterende `/instruksjoner#dokumenter` beholdes.

Brukerens initiativ og gjennomgang er tydelig: «Du starter konverteringen og kontrollerer det nye dokumentet selv. Last ned PDF-en og del den med kunden.» Ingen automatisk fakturautsending, elektronisk signering eller feilfri verifisering loves.

De gamle infografikkfilene er bevart på disk, men lastes ikke lenger av hjemmesiden.

## 7. Customers/projects section

«Kunder og prosjekter på ett sted.» er tekstbasert og forklarer kundedata, prosjekttilknytning og lagrede dokumenter. Det er ikke lagt til nye bilder eller påstander om CRM-automatisering, kalender, lønn eller avansert prosjektstyring.

Kontekstuelle lenker bruker eksisterende ankere:

- `/instruksjoner#hvordan-kunder-fungerer`.
- `/instruksjoner#hvordan-prosjekter-fungerer`.

## 8. Free/Premium comparison

Én kort semantisk tabell sammenligner dokumenter/PDF, dokumentflyt og PDF-profil. Dokumentfunksjoner og støttede konverteringer er inkludert i begge planer. Free har Jobbleder-vannmerke; Premium fjerner vannmerket og gir valgfri firmalogo. Ingen priser, nye begrensninger eller funksjonssperrer er innført.

Tabellen har caption, kolonneoverskrifter og radoverskrifter. Den fungerer uten horisontal scrolling ved 375/390 px. Etter visuell inspeksjon ble den lange mobilradetiketten forkortet til «Dokumentflyt» for å unngå et uheldig ordbrudd.

## 9. Onboarding and FAQ

Fire handlinger er bevart i en kortere, skannbar forklaring: åpne Jobbleder, logg inn/velg «Create account», legg inn firmaopplysninger, opprett og kontroller dokumentet. Ingen ny app- eller innloggingsflyt er introdusert.

FAQ har fire praktiske spørsmål: hva Jobbleder er, gratis oppstart, dokumenttypene og bruk uten installasjon. Native details/summary gir tastaturstyrt åpning/lukking. Det er ikke lagt til FAQ-schema; eksisterende Organization/WebSite-data er bevart.

De 17 faglenkene er gruppert i fire native disclosures, med antall guider og en dekorativ åpne/lukke-markør. Alle lenkene finnes i HTML; ingen ekstra klientkode kreves. Blogg og Instruksjoner er fortsatt egne synlige videreføringer.

## 10. Preserved SEO and internal links

Før/etter-sammenligning i nettleser bekrefter uendrede homepage metadata: title, description, canonical, Open Graph, robots-meta-tilstand og eksisterende JSON-LD. Kildekontrollen bekrefter at `app/page.tsx`, root layout, URL-hjelper, sitemap og robots er uendret.

- Canonical: `https://www.jobbleder.no/`.
- Tittel: «Jobbleder – Faktura, kontrakt, timeliste og tilbud på minutter».
- Beskrivelse: «Lag faktura, kontrakt, timeliste og tilbud enkelt i nettleseren. Jobbleder er laget for håndverkere og små bedrifter.»
- Ett H1 og logisk H2/H3-hierarki.
- Organization og WebSite er uendret; ingen ny FAQPage-data.
- Ingen URL-endringer, redirects eller noindex.
- Eksisterende ID-er `hovedinnhold`, `home-title`, `produkter`, de fire produktankrene, `workflow-title`, `getting-started-title`, `resources-title` og `start-title` er bevart.

Den opprinnelige resourceGroups-konfigurasjonen er sammenlignet direkte med startversjonen og er identisk: alle 17 destinasjoner og etiketter er bevart. Alle samme-side-lenker har et eksisterende mål; ingen duplikate ID-er ble funnet. Alle 35 distinkte lokale lenker fra hjemmesiden svarte HTTP 200, og instruksjonsfragmentene finnes i måldokumentene.

CTA-ene bruker den eksisterende appadressen. Selve registreringen i appen er ikke gjennomført; denne verifikasjonen gjelder destinasjonen og den bekreftede veiledningen, ikke en ny ende-til-ende-test av autentisering.

## 11. Responsive verification

Testet den endelige lokale produksjonsbygde versjonen i Chrome, med begge OS-fargepreferanser og redusert bevegelse. Hjemmesiden beholder den tilsiktede lyse overflaten under begge preferanser.

| Bredde | Lys/mørk preferanse | Overflow | Bilder og kort | Native meny/FAQ | Hero ca. |
| ---: | --- | --- | --- | --- | ---: |
| 375 px | Begge testet | Ingen | Proporsjoner bevart, én kolonne | Bestått | 685 px |
| 390 px | Begge testet | Ingen | Proporsjoner bevart, én kolonne | Bestått | 685 px |
| 768 px | Begge testet | Ingen | Proporsjoner bevart, 2 × 2 | Bestått | 493 px |
| 1024 px | Begge testet | Ingen | Proporsjoner bevart, 2 × 2 | Bestått | 570 px |
| 1440 px | Begge testet | Ingen | Proporsjoner bevart, 2 × 2 | Bestått | 643 px |

Alle FAQ-/guidegrupper ble også utvidet for overflow- og axe-kontroll. Ingen forvrengte/oppskalerte bilder, klipte kontroller eller overlappende tekst ble registrert. Hero-ankerets overskrift endte ca. 100 px fra toppen ved både 390/1440 px, under headerens ca. 73 px.

Visuell inspeksjon ble utført på de faktiske desktop-/mobilbildene av hero, moduler og flyter, og på detaljbilder av kunder/prosjekter, planer, onboarding og hjelp. Dette kommer i tillegg til automatiserte kontroller. Dokumentbildene er kompakte forhåndsvisninger med fullstørrelseslenker; de er ikke en erstatning for lesbare instruksjoner.

Samlet sidehøyde ved 390 px ble ca. 8790 px mot ca. 9916 px i auditen, til tross for flere forklarte produktområder. Ved 1440 px ble den ca. 5789 px mot ca. 8144 px. Dette er lokale layoutmål, ikke mål på faktisk brukeradferd.

## 12. Accessibility results

Ti axe-kjøringer, én per bredde/preferanse, med WCAG 2 A/AA og WCAG 2.1 A/AA og åpne FAQ-/guidegrupper: **0 rapporterte brudd**.

Incomplete kontrastobservasjoner gjelder dekorative, `aria-hidden` pil-/chevrontegn som verktøyet ikke klassifiserer som tekst. De er ikke rapporterte kontrastbrudd. Rastertekst inne i bildene er ikke fullstendig verifisert av axe.

Testet med tastatur:

- Meny åpner/lukker med native tastaturbetjening og synlig fokus.
- FAQ åpner med Enter og lukker med Space.
- Guidegrupper åpner med tastatur; Tab går videre til første reelle guidelenke med synlig fokus.
- Skipplenken blir første tabmål og flytter fokus til `main`.
- Fullstørrelseslenker har synlig tastaturfokus og navn som inkluderer synlig «Åpne hele bildet» samt bildets beskrivelse.
- Redusert bevegelse gir `scroll-behavior: auto`; det er ikke innført animasjoner/autoplay.

Hovedknapper, intern navigasjon og disclosures har romslige treffflater. Bilde-/produktlenker er separate, ikke nestede interaktive kort. Ingen skjermleserøkt er utført; automatisering og manuell nettleserinspeksjon er ikke en garanti for alle hjelpemidler.

## 13. Performance results

Lighthouse ble kjørt separat for mobil og desktop mot `http://127.0.0.1:3096/` etter siste produksjonsbygg. Dette er **lokale laboratoriemålinger**, ikke produksjon eller feltdata.

| Måling | Mobil | Desktop |
| --- | ---: | ---: |
| Performance | 96 | 100 |
| Accessibility | 100 | 100 |
| Best Practices | 96 | 96 |
| SEO | 100 | 100 |
| LCP | 936 ms | 695 ms |
| CLS | 0 | 0 |
| Total overført ressursvekt i kjøringen | 422 580 bytes | 482 196 bytes |
| JavaScript-overføring | 141 200 bytes | 160 844 bytes |

Lighthouse registrerte fem bilder, samlet ca. 237 151 overførte bytes. De fem brukte bildefilene summerer til 235 740 bytes på disk. Den tidligere store desktop-flytfilen alene var 1 005 366 bytes. Ingen ny bildevariant eller avhengighet er lagt til. Målingene inkluderer eksisterende Next.js-/Tracker-kode og kan variere med maskin, cache, throttling og prefetch.

Best Practices-fratrekket skyldes den kjente lokale HTTP 400-feilen fra `/api/handshake`. Ingen nye JavaScript-sideunntak ble registrert. Analytics er uendret. Denne lokale feilen beviser ikke en produksjonsfeil, og produksjonsanalytics er ikke testet her.

Lighthouse peker også på mulige fremtidige besparelser i bildelevering, ubrukt CSS/JS og eldre JS. Disse er ikke behandlet gjennom en ny bilde-/rammeverksrefaktorering. Den eksisterende ProductMedia-preloaden kan hente oversiktsbildet også når det er visuelt skjult på mobil; dette er inkludert i målingen, ikke skjult fra rapporten. Ingen godkjente bilder er regenerert for å jage en høyere score.

## 14. Build and regression tests

| Kontroll | Resultat |
| --- | --- |
| `npx.cmd tsc --noEmit --incremental false` | Bestått på sluttkoden |
| `npm.cmd run lint` | Bestått, ingen ESLint-feil/advarsler |
| `npm.cmd run build` | Bestått, 55 sider generert |
| `git diff --check` | Bestått; kun Git-meldinger om LF/CRLF-konvertering |
| Eksisterende `scripts/verify-contract-visuals.mjs` | Bestått: 13 lossless-derivater og 93 originale kildefiler kontrollert |
| Kilde-/filintegritet mot fasestart | Bare de to hjemmesidefilene endret; rapporten er eneste nye fasefil |
| 17 ressursdestinasjoner og etiketter | Identiske med førtilstanden |
| Responsive nettleserkontroller | Alle ti kombinasjoner bestått |
| Lokal lenkekontroll | 35/35 HTTP 200; instruksjonsankre finnes |
| Metadata, sideinnhold og bildereferanser på fem regresjonsruter | Identiske med førtilstanden |

Regresjonsrutene var `/fakturaprogram-gratis`, `/timeliste-mal`, `/tilbud-mal`, `/kontrakt-mal` og `/instruksjoner`. De lastet, og deres rendrerte metadata, main-innhold og bildeattributter ble sammenlignet mot opptak gjort før hjemmebygget. Felles header/footer og kontraktfiler er dessuten uendret i kontrollsummeringen.

Eksisterende kontraktverifikasjon ble kjørt med en separat ekstern kontrollmappe og allerede godkjente terminologiforventninger; ingen produksjonstest eller bildegenerator ble endret. Bygget gir fortsatt Node DEP0205-meldinger om `module.register()`. Dette er de samme miljømeldingene som tidligere, ikke nye kompilatorfeil.

Det eneste registrerte konsoll-/HTTP-problemet i hjemmesidematrisen er den kjente lokale analytics-feilen. Ingen produksjonsverifikasjon er utført.

## 15. Screenshot paths

Alle filer er lokale undersøkelsesartefakter utenfor repositoryet. Skjermbildene er av sluttbygget.

| Påkrevd bilde | Eksakt sti |
| --- | --- |
| Full desktop, 1440 px | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c4b/homepage-1440.png` |
| Full mobil, 390 px | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c4b/homepage-390.png` |
| Desktop hero | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c4b/hero-1440.png` |
| Mobil hero | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c4b/hero-390.png` |
| Desktop moduler | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c4b/products-1440.png` |
| Mobil moduler | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c4b/products-390.png` |
| Desktop dokumentflyt | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c4b/workflows-1440.png` |
| Mobil dokumentflyt | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c4b/workflows-390.png` |

Samme mappe inneholder fullsidesbilder ved 375/768/1024 px, detaljbilder av kunder/planer/onboarding/hjelp, `browser-results.json`, `details-results.json`, `preservation.json`, `lighthouse-mobile.json`, `lighthouse-desktop.json` og `lighthouse-summary.json`. Disse er ikke produksjonsressurser eller forslag til staging.

## 16. Local preview URL

<http://127.0.0.1:3096/>

Se også `/#produkter` og `/#workflow-title` på samme lokale origin. Produksjonsserveren er startet for eierens visuelle gjennomgang. Ingen publisering er gjennomført.

## 17. Known limitations

- Produktbilder er kompakte eksempler. Fine dokumentdetaljer må undersøkes gjennom fullstørrelseslenkene; kildene er ikke oppskalert eller endret.
- Det eksisterende skjulte mobil-oversiktsbildets preload er beskrevet i ytelsesdelen. Mer omfattende medieoptimalisering er ikke gjort i denne fasen.
- Lokal `/api/handshake` svarer fortsatt HTTP 400 og påvirker konsoll/Best Practices. Ingen analytics-endring er gjort.
- Lokale Lighthouse-resultater og syntetiske kontroller gir ikke produksjonsgarantier eller dokumentert konverteringsøkning.
- Appens autentisering, beregninger og konverteringstransaksjoner er ikke testet gjennom markedsføringsrepositoryet.

## 18. Remaining release requirements

Eieren skal først gjennomgå lokal desktop-/mobilvisning og godkjenne den visuelle implementeringen. Ingen commit/push/deploy er autorisert i denne fasen.

**Økonomisk korrekthet er fortsatt et separat, obligatorisk publiseringskrav.** Relevante konverterings- og beregningsfeil må være rettet og regresjonstestet i riktig applikasjonsarbeidsstrøm, med sporbar akseptanse, før tilhørende markedsføringsinnhold publiseres. Se `docs/phase-9c2a-invoice-copy-release-gate.md`. Hjemmesidens build, skjermbilder og Lighthouse-målinger erstatter ikke dette kravet. Eksisterende relevante juridiske merknader er heller ikke fjernet eller omtolket.

Når visuell godkjenning og øvrige akseptansekrav foreligger, kan eieren bestille en separat releaseforberedelse. Ingen ny designfase er startet.

**PHASE 9C.4B COMPLETE — READY FOR OWNER VISUAL REVIEW**
