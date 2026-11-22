# Phase 9C.4C — Homepage restoration

Dato: 22. november 2026. Lokal implementering og verifikasjon.

**PHASE 9C.4C COMPLETE — READY FOR OWNER VISUAL REVIEW**

De fire store redaksjonelle produktseksjonene og den opprinnelige dokumentflytinfografikken er gjenopprettet. Heroen viser igjen et stort, autentisk oversiktsbilde under teksten. Produktposisjoneringen og støtteseksjonene fra 9C.4B er beholdt. Teknisk bestått er ikke behandlet som visuell godkjenning; den nye visningen avventer eierens vurdering.

## 1. Initial repository status

Verifisert repository: `C:/Users/ddlas/Code/jobbleder-site`. Pakken er `jobbleder-site`, med Next.js 16.1.6, React 19.2.3 og TypeScript/Tailwind/CSS Modules. Branch: `main`. HEAD ved fasestart: `ec472f5f24ca2627c0c38a5b6e4efe5b9d378aae`.

Arbeidstreet inneholdt 13 endrede sporede filer samt eksisterende usporede komponenter, bilder, rapporter og diagnostikk fra tidligere faser. Ingen av disse er ryddet, stashet, tilbakestilt eller staged. Ingen commit, push eller deploy er utført. Ingen applikasjonsrepository er åpnet eller endret.

Følgende grunnlag er gjennomgått:

- `docs/phase-9c4a-homepage-redesign-proposal.md`.
- `docs/phase-9c4b-homepage-implementation.md`.
- Nåværende Homepage/CSS og den bevarte opprinnelige hjemmesideimplementeringen fra før 9C.4B.
- Faktiske originale og avviste skjermbilder fra 9C.4A/9C.4B.
- Felles FeatureIntroduction, ProductMedia, navigasjon og stilregler.

En ny fasestartkopi kontrollsummerte 471 eksisterende kilde-, medie-, konfigurasjons- og dokumentasjonsfiler. De to hjemmesidefilene ble også kopiert separat. Sluttkontrollen bekrefter at bare de to hjemmesidefilene er endret og at denne rapporten er eneste nye fasefil. Tidligere rapporter og bilder er uendret.

## 2. Exact files modified

| Fil | Faseendring |
| --- | --- |
| `components/home/Homepage.tsx` | Gjenopprettet fullbreddeprodukter i opprinnelig rekkefølge, produktankernavigasjon, stor sentrert hero og original infografikk med tekstalternativ. |
| `components/home/home.module.css` | Fjernet kort-/HTML-flytlayout og gjenopprettet redaksjonelle mediestørrelser, seksjonsbakgrunner og hero-komposisjon; beholdt støtteinnholdets mønstre. |
| `docs/phase-9c4c-homepage-restoration.md` | Ny implementerings-, sammenlignings- og testrapport. |

Ingen delte komponenter, mediemanifester, bilder, produktsider, blogg, instruksjoner, autentisering eller API-er er endret. Ingen nye avhengigheter er lagt til.

## 3. Original homepage elements restored

Følgende struktur er implementert:

1. Hero med stort produktbilde.
2. Separat produktankernavigasjon.
3. Faktura — egen fullbredde redaksjonell seksjon.
4. Timeliste — egen fullbredde redaksjonell seksjon.
5. Tilbud — egen fullbredde redaksjonell seksjon.
6. Kontrakt — egen fullbredde redaksjonell seksjon.
7. Original dokumentflytinfografikk.
8. Kunder og prosjekter.
9. Free og Premium.
10. Kom i gang.
11. FAQ og kompakte fagressurser.
12. Avsluttende CTA.
13. Felles footer.

FeatureIntroduction gjenbrukes, med tydelige H2-overskrifter, praktiske beskrivelser, relevante detaljlister og produktlenker. Produktseksjonene har samme redaksjonelle status og nummerering, ikke tvungent identiske bildebokser. Vekslende hvit/lys grå bakgrunn er tilbake. Kortlayouten med 2 × 2 produkter og makshøyde på 190–210 px er fjernet.

## 4. Phase 9C.4B improvements preserved

Fra «Kunder og prosjekter på ett sted.» til og med avslutning/footer er JSX og innhold beholdt, kontrollert mot fasestart med normaliserte linjeskift. FAQ-spørsmålene og de 17 ressursdestinasjonene/etikettene er også uendret.

Dette bevarer:

- Nøktern kunde-/prosjektforklaring og de eksisterende instruksjonsankrene.
- Én samlet, semantisk Free/Premium-sammenligning uten nye priser eller begrensninger.
- Kort onboarding med den faktiske «Create account»-flyten.
- Native FAQ og kompakte guidegrupper med tastaturbetjening.
- Avsluttende CTA, appdestinasjonen og felles SiteHeader/SiteFooter.

Det godkjente hovedbudskapet er beholdt. Ingen generell endring i designsystemet er gjort.

## 5. Hero implementation

H1 er fortsatt nøyaktig:

> Kunder, arbeid og dokumenter. Samlet i Jobbleder.

Den sentrerte komposisjonen fra originalen er gjenopprettet: overskrift, kort forklaring, tydelig «Start gratis», sekundærlenke og stort autentisk oversiktsbilde under. Bildet har opptil 1040 px ytre bredde, ikke en smal sidekolonne. Ved 1440 px er selve bildet ca. 1038 × 583 px, mot ca. 568 × 319 px i 9C.4B.

Originalens mobilutsnitt er tilbake ved smale bredder. Det viser reelle hurtigvalg for registrering og faktura; caption beskriver nettopp dette. På mobil er det ikke en nedskalert full desktopoversikt. Fullstørrelseslenken åpner originalen.

Heroen er ca. 1100 px høy ved 1440 px, mot ca. 1257 px i originalen, og ca. 835 px ved 390 px, mot ca. 908 px i originalen. Den er bevisst større enn den avviste sidekolonneversjonen for å gi produktet synlighet, men har mindre overflødig padding enn originalen.

CTA går uendret til `https://app.jobbleder.no/`. Sekundær CTA går til `#workflow-title`. Innloggings-/registreringsveiledningen er bevart. Ingen ny registreringsrute eller autentiseringsendring er innført.

## 6. Product section implementation and visual comparison

Originalens presentasjonsmønster og rekkefølge er brukt som faktisk referanse, ikke bare som inspirasjon. Desktop viser tekst/detaljer og en stor produktvisning. Mobil viser tekst og bilde etter hverandre. Ved 768–1023 px stables også produktkolonnene, slik at tabletvisningen ikke presser produktbildene inn i smale kolonner.

- **Faktura:** Praktisk forklaring av kunde, arbeid, pris, antall og MVA; nyttige kontrollpunkter og opprinnelige produkt-/eksempellenker. Det autentiske Free-eksemplet fra 9C.4B beholdes, men vises nå opptil 400 px bredt med naturlige proporsjoner. Free/Premium-forklaringen gjentas ikke her.
- **Timeliste:** Arbeidsdager, import eller direkte registrering, PDF-mulighet og originale detalj-/produktlenker. Hele eksisterende hjemmeutsnittet brukes også på mobil, fremfor den gamle smale radbeskjæringen.
- **Tilbud:** Originalens overskrift, praktiske forklaringer og detaljer om arbeid, pris og gyldighet er tilbake, med det samme autentiske tilbudsbildet og lenkene.
- **Kontrakt:** Originalens store dokumenteksempel, forklaring av arbeid/pris/vilkår, prisstruktur og manuell signering er tilbake. Bildet behandles som et selvstendig eksempel, ikke eksportbevis for en annen vist kontraktkonfigurasjon.

### Målt visuell sammenligning ved 1440 px

Tallene er faktisk rendret bildebredde, avrundet til hele piksler. De måler layout, ikke et løfte om lesbarhet på alle enheter.

| Produktvisning | Original før 9C.4B | Avvist 9C.4B | Gjenopprettet 9C.4C |
| --- | ---: | ---: | ---: |
| Herooversikt | 1150 px | 568 px | 1038 px |
| Faktura | 318 px | 161 px | 398 px |
| Timeliste | 515 px | 249 px | 515 px |
| Tilbud | 504 px | 295 px | 504 px |
| Kontrakt | 506 px | 148 px | 506 px |
| Infografikk | 1150 px | Ikke brukt | 1150 px |

Originalens faktura var et Premium-eksempel; 9C.4B/9C.4C bruker det eksisterende Free-eksemplet. Tabellen sammenligner størrelse/presentasjon, ikke identisk bildeinnhold for den raden.

Ved 390 px vises de fire produktbildene ca. 340 px bredt. Kontrakten øker fra ca. 134 til 340 px, og fakturaen fra ca. 146 til 340 px sammenlignet med 9C.4B. Tilbud og kontrakt er tilbake på originalens mobilbredde. Timelisten viser mer kontekst enn originalens 300 × 104-utsnitt.

Resultatet er visuelt kontrollert mot originalens fullside/hero og den avviste versjonens hero/produktkort. Originalens større bilder, separate overskrifter og tydelige redaksjonelle pauser er gjenopprettet. Siden prioriterer nå produktforklaring fremfor en felles miniatyrvisning. Hele dokumentets detaljer kan fortsatt inspiseres gjennom fullstørrelseslenken.

## 7. Workflow infographic restoration

Den opprinnelige infografikken er igjen primær visuell forklaring, med uendrede farger, ikoner, etiketter og dokumentrelasjoner. Ingen regenerering, tegning eller ny beskjæring er gjort.

Eksisterende varianter fra `content/homeProductMedia.json` brukes:

| Under `public/images/product/docflow/optimized/` | Dimensjoner | Bytes | Bruk |
| --- | --- | ---: | --- |
| `jobbleder-home-document-flow-940f0666f4cc.webp` | 1536 × 1024 | 1 005 366 | Stor desktopvisning |
| `jobbleder-home-document-flow-compact-a1de69c9b05c.webp` | 1442 × 597 | 610 516 | Mellomstore bredder |
| `jobbleder-home-document-flow-mobile-3dbe42d3e7a8.webp` | 1000 × 597 | 408 308 | Smale bredder |

Alle fire støttede løp er bevart: Registreringer → Timeliste → Faktura; Timeliste → Faktura; Tilbud → Kontrakt → Faktura; Tilbud → Faktura.

På mobil er rasterteksten fortsatt liten. Derfor følger en kort, lesbar HTML-liste med alle fire løp og relevante instruksjonslenker. Den er **åpen som standard**, kan lukkes/åpnes med tastatur og krever ikke at brukeren åpner originalbildet for å forstå flytene. Den er et tekstalternativ, ikke en ny stor HTML-diagramseksjon.

Den synlige fullstørrelseslenken åpner originalgrafikken. Alt-teksten beskriver oversikten og peker til forklaringen under, uten å gjenta hele den samme listen. Presiseringen om brukerinitiert konvertering, kontroll og egen deling av PDF er beholdt. Kontrakt er ikke fremstilt som et obligatorisk mellomsteg.

## 8. Image quality verification

Alle bildefiler og manifester er identiske med fasestart. Eksisterende kontraktverifikasjon kontrollerte 13 lossless-derivater og 93 originale kildefiler. Den bredere kontrollsummeringen dekker også de øvrige mediefilene; ingen original PNG eller WebP er endret.

Produktbildene bruker samme eksisterende filer som før, uten nye høydebegrensede miniatyrbokser:

- Hero: eksisterende 1918 × 1077-oversikt og 392 × 216-mobilutsnitt.
- Faktura: `jobbleder-invoice-free-8239cf43dbea.webp`, 959 × 1251.
- Timeliste: `jobbleder-home-timelist-1ed52e78b8c6.webp`, 608 × 512.
- Tilbud: `jobbleder-home-offer-59f2cd7e7af2.webp`, 506 × 360.
- Kontrakt: `jobbleder-home-contract-document-249c17de7105.webp`, 508 × 720.

Eksplisitte dimensjoner og naturlig høyde er beholdt. Nettleseren kontrollerte alle seks synlige bilders proporsjoner og at ingen vises bredere enn valgt kildes native oppløsning. Alle lastet. Produkt-/flytbilder er lazy-lastet, hero er prioritert. Fullstørrelseslenker, norske bildebeskrivelser og presise captions er tilgjengelige.

Mobilbildene gjør dokumentstruktur og sentrale felt mer synlige enn kortversjonen; fin skrift i hele dokumenter krever fortsatt større visning. Det er ikke hevdet at all rastertekst kan leses i normal mobilstørrelse. Detaljer er ikke oppskalert eller rekonstruert for å omgå kildeoppløsningen.

## 9. Responsive results

Lokal produksjonsbuild testet i Chrome ved alle fem bredder, både lys og mørk OS-preferanse, med redusert bevegelse. Hjemmesiden beholder sitt tilsiktede lyse designsystem under begge preferanser.

| Bredde | Lys/mørk | Overflow | Produktpresentasjon | Infografikk |
| ---: | --- | --- | --- | --- |
| 375 px | Begge testet | Ingen | Fire separate, stablede seksjoner | Mobilvariant + åpen tekstliste |
| 390 px | Begge testet | Ingen | Fire separate, stablede seksjoner | Mobilvariant + åpen tekstliste |
| 768 px | Begge testet | Ingen | Store bilder under seksjonsteksten | Kompakt variant + tekstliste |
| 1024 px | Begge testet | Ingen | Fullbredde seksjoner, to indre kolonner | Kompakt variant + tekstliste |
| 1440 px | Begge testet | Ingen | Fullbredde seksjoner, to indre kolonner | Full originalvariant + tekstliste |

Meny, FAQ og åpne guidegrupper er kontrollert. Ingen forvrengte bilder, klipte kontroller eller overlappende innhold ble registrert. Produktankrene er bevart og aktivert med tastatur ved 390/1440 px; alle fire målene endte ca. 100 px fra toppen, under den ca. 73 px høye headeren.

Hero, alle fire produkter og infografikk er visuelt inspisert på både desktop og mobil. Dette supplerer automatisering; tekniske beståttresultater alene brukes ikke som visuell godkjenning.

Siden er forventet lengre enn 9C.4B: ca. 8635 px ved 1440 px og 10806 px ved 390 px. Dette er resultatet av de ønskede redaksjonelle seksjonene og den gjenopprettede grafikken, ikke et mål om minimal sidehøyde.

## 10. Accessibility results

Ti axe-kjøringer med WCAG 2 A/AA og WCAG 2.1 A/AA: **0 rapporterte brudd**. FAQ-/guidegrupper var utvidet under kontrollen. Incomplete kontrastobservasjoner gjelder dekorative, `aria-hidden` chevron-/piltegn; de er ikke rapporterte kontrastfeil. Rastertekst blir ikke fullstendig kontrastverifisert av axe.

Bekreftet:

- Skipplenken er første tabmål og flytter fokus til `main`.
- Ett H1, logiske H2/H3, navngitte landemerker og fire separate produktseksjoner.
- Meny og FAQ har native tastaturbetjening og synlig fokus.
- Infografikkens tekstdisclosure kan lukkes med Enter og åpnes med Space, med synlig fokus og fire reelle tekstpunkter.
- Produktankre kan aktiveres med tastatur, uten at sticky header dekker måloverskriften.
- Fullstørrelseslenker har synlig fokus og navn som inkluderer den synlige teksten «Åpne hele bildet».
- Korrekte CTA-destinasjoner, ingen nestede interaktive produktkort og redusert bevegelse med `scroll-behavior: auto`.

Ingen skjermleserøkt eller ende-til-ende-test av applikasjonen er utført.

## 11. Build and regression test results

| Kontroll | Resultat |
| --- | --- |
| `npx.cmd tsc --noEmit --incremental false` | Bestått |
| `npm.cmd run lint` | Bestått uten ESLint-feil/advarsler |
| `npm.cmd run build` | Bestått, 55 sider generert |
| `git diff --check` | Bestått; eksisterende LF/CRLF-meldinger forekommer for tidligere fasearbeid |
| `scripts/verify-contract-visuals.mjs` med separat ekstern kontrollmappe | Bestått: 13 derivater / 93 originale kildefiler |
| Kilde-/filkontroll mot fasestart | Kun de to hjemmesidefilene endret; denne rapporten er eneste nye fasefil |
| Bevaring av støtteseksjoner og FAQ | Bestått, sammenlignet med normaliserte linjeskift |
| 17 ressursdestinasjoner/etiketter | Identiske med fasestart |
| Ti bredde-/preferansekombinasjoner | Bestått |
| Lokale lenker | 36/36 HTTP 200; instruksjonsfragmentene finnes |
| Regresjonsruter | Fem ruter lastet, med uendrede metadata, main-innhold og bildeattributter |

Regresjonsrutene er `/fakturaprogram-gratis`, `/timeliste-mal`, `/tilbud-mal`, `/kontrakt-mal` og `/instruksjoner`. De ble sammenlignet med tidligere registrert, uendret referansetilstand. Kildekontrollen bekrefter i tillegg at alle disse filene, delte komponenter og tidligere godkjent kontraktinnhold er uendret.

Hjemmesidens title, description, canonical, Open Graph, robots-meta-tilstand og Organization/WebSite-data er identiske med referansen. `app/page.tsx`, root layout, sitemap, robots og URL-hjelper er uendret. Ingen FAQ-schema, redirect eller noindex er lagt til. Alle samme-side-lenker har eksisterende mål; ingen dupliserte ID-er ble funnet.

Ingen JavaScript-sideunntak ble registrert. Konsollen viser fortsatt den kjente lokale HTTP 400-feilen fra `/api/handshake`, som også var til stede før endringen. Analytics er ikke endret og produksjon er ikke testet. Bygget gir de eksisterende Node DEP0205-meldingene om `module.register()`.

Lighthouse er ikke kjørt på denne restaureringen. 9C.4B-resultatene gjelder den andre bildepresentasjonen og brukes ikke som målinger av 9C.4C.

## 12. Screenshot paths and comparison references

Påkrevde opptak fra den gjenopprettede lokale produksjonsbygde siden:

| Opptak | Eksakt sti |
| --- | --- |
| Desktop hero | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c4c/hero-1440.png` |
| Mobil hero | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c4c/hero-390.png` |
| Faktura | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c4c/faktura-1440.png` |
| Timeliste | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c4c/timeliste-1440.png` |
| Tilbud | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c4c/tilbud-1440.png` |
| Kontrakt | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c4c/kontrakt-1440.png` |
| Dokumentflyt | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c4c/workflows-1440.png` |
| Full desktop | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c4c/homepage-1440.png` |
| Full mobil | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c4c/homepage-390.png` |

Samme mappe inneholder `faktura-390.png`, `timeliste-390.png`, `tilbud-390.png`, `kontrakt-390.png`, `workflows-390.png` og fullsidesbilder ved 375/768/1024 px. Disse er lokale undersøkelsesfiler utenfor repositoryet, ikke nye produktbilder.

Sammenligningsgrunnlag som er beholdt:

- Original: `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c4a/homepage-1440-light.png` og `phase9c4a/hero-1440.png` i samme overordnede evidensmappe.
- Avvist: `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c4b/homepage-1440.png`, samt `phase9c4b/products-1440.png` og `phase9c4b/hero-1440.png`.
- Målesammenligning: `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c4c/comparison.json`.
- Testbevis: `browser-results.json`, `details-results.json`, `preservation.json` og `contract-check/verification.json` i `phase9c4c`.

## 13. Local preview URL

<http://127.0.0.1:3097/>

Direkte gjennomgang: `/#faktura`, `/#timeliste`, `/#tilbud`, `/#kontrakt` og `/#workflow-title` på samme lokale origin. Serveren er startet for eierens visuelle vurdering. Ingen produksjonsdeploy er utført.

## 14. Known limitations

- Infografikkens rastertekst kan ikke bli fullt lesbar ved 325–340 px visningsbredde uten å endre grafikken. Fulloppløselig åpning og den synlige tekstlisten gir lesbar tilgang til alle fire løp.
- Den originale store infografikken er ca. 1 MB som WebP. Dette er en bevisst gjeninnføring av eierens valgte visuelle uttrykk; ingen ny komprimering eller grafikkendring er gjort. Den lastes lazy.
- Små detaljer i dokumentene kan kreve fullstørrelsesvisning, selv om bildene nå er vesentlig større enn i kortene.
- Det kjente lokale analytics-svaret er fortsatt HTTP 400. Dette er ikke behandlet som dokumentert produksjonsfeil.
- Ingen ny Lighthouse-, produksjons-, autentiserings- eller applikasjonsberegningstest er utført. Visuell godkjenning gjenstår hos eieren.

## 15. Remaining release requirements

Arbeidet stopper ved lokal implementering og verifikasjon. Eieren skal vurdere den gjenopprettede presentasjonen og skjermbildene før en eventuell separat releasebestilling. Ingen commit, push eller deploy er utført eller startet.

Økonomisk korrekthet er fortsatt et separat, obligatorisk publiseringskrav. Relevante konverterings-/beregningsfeil må være rettet og regresjonstestet med sporbar akseptanse i riktig applikasjonsarbeidsstrøm før tilhørende markedsføringsinnhold publiseres. Se `docs/phase-9c2a-invoice-copy-release-gate.md`. Nettstedets tekniske eller visuelle kontroller erstatter ikke dette kravet. Eksisterende relevante juridiske merknader er bevart.

**PHASE 9C.4C COMPLETE — READY FOR OWNER VISUAL REVIEW**
