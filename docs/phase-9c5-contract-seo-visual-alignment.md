# Phase 9C.5 — Contract SEO visual alignment

Dato: 22. november 2026. Lokal implementering, ikke publisert.

**PHASE 9C.5 COMPLETE — READY FOR OWNER VISUAL REVIEW**

De tre kontraktguidene har fått større redaksjonell typografi, marineblå flater, tydelig seksjonsinndeling og mer relevant støtteinnhold. Opprinnelige H1-er, fagtekst, juridiske forbehold, metadata, FAQ-data og bildemateriale er bevart. Relaterte kontraktsider er samlet nederst i stedet for å avbryte introduksjonen.

## 1. Initial repository status

Verifisert repository: `C:/Users/ddlas/Code/jobbleder-site`. `package.json` identifiserer `jobbleder-site`, Next.js 16.1.6, React 19.2.3, TypeScript og Tailwind/CSS Modules. Branch: `main`. HEAD: `ec472f5f24ca2627c0c38a5b6e4efe5b9d378aae`.

Arbeidstreet hadde 13 endrede sporede filer og eksisterende usporede komponenter, bilder, rapporter og diagnostikk fra tidligere faser. Dette arbeidet er bevart. Ingen reset, clean, stash, revert, staging, commit, push eller deploy er utført. Ingen applikasjonsrepository er åpnet eller endret.

Før endring ble 472 eksisterende kilde-, medie-, konfigurasjons- og dokumentasjonsfiler kontrollsummert. Nettleserreferanser registrerte de tre gamle kontraktsidene og syv regresjonsruter. Eksisterende skjermbilder er ikke overskrevet.

## 2. Exact files modified

| Fil | Endring |
| --- | --- |
| `app/(seo)/[slug]/page.tsx` | Én import og én avgrenset dispatch for nøyaktig de tre kontraktrutene. Metadatafunksjonen og øvrige rutebetingelser er uendret. |
| `components/product/contract/ContractGuidePage.tsx` | Ny serverrendret guidevisning med tre redaksjonelle varianter, eksisterende innhold, bilder, FAQ og bevarte lenker. |
| `components/product/contract/contractGuide.module.css` | Ny, avgrenset stilfil for kontraktguidenes støttepaneler, lesebredde, dokumentgjennomgang, sjekkliste og relaterte lenker. |
| `docs/phase-9c5-contract-seo-visual-alignment.md` | Denne nye rapporten. |

Kun rutefilen er endret blant filene som eksisterte ved fasestart. En kontroll fjernet de to nye dispatch-linjene i minnet og bekreftet at resten av rutefilen har samme kontrollsum som fasestart. Ingen endringer i `content/seoPages.ts`, eksisterende CSS, bilder eller mediemanifester. Hjemmesiden, `/kontrakt-mal`, blogg og instruksjoner er uendret.

## 3. Components inspected and reused

### Årsak og avgrensning

De tre rutene ble tidligere rendret av den generelle delen av `app/(seo)/[slug]/page.tsx`, med Navbar, Breadcrumbs, ClusterNavigation, FAQAccordion og RelatedSeoPages. Den brukte globale tema-/Tailwind-klasser, relativt små overskrifter, samme checkmark-introduksjon og en fremtredende klyngenavigasjon rett etter CTA.

Rutemodulen håndterer også de fem Timeliste-rutene, fire Faktura-rutene, fire Tilbud-rutene og `/kontrakt-mal`, alle gjennom eksisterende dedikerte visninger. Disse dispatchene er bevart. Etter den nye avgrensningen har ingen av de nåværende SEO-dataoppføringene behov for den generelle fallbacken; selve fallbackkoden og komponentene er likevel beholdt uendret.

### Faktura-referanse og gjenbruk

`InvoiceGuidePage.tsx` og `invoiceGuide.module.css` for `/lage-faktura` er inspisert. Kontraktguiden gjenbruker direkte de eksisterende klassene for hero, brødsmuler, større overskrifter, seksjoner, mørke flater, CTA, innholdslenker, FAQ og ressursområde. Ingen Faktura-tekst, tall eller bilder kopieres.

Gjenbrukte komponenter: SiteHeader, SiteFooter, SectionContainer, ApplicationCTA, ContractEditorialMedia og dermed ContractMedia/ProductMedia. FAQ bruker native details/summary i samme mønster som Faktura-guiden. Ingen ny klientkomponent eller accordion-avhengighet er lagt til.

En CSS-kollisjon mellom `site.surface` og guideklassens mørke variabler ble fanget i nettlesertesten. De mørke fargene er derfor eksplisitt avgrenset med `.page[data-contract-guide]`, kun på disse tre sidene. Dette gjør presentasjonen stabil uten å endre delte stilfiler eller andre ruter.

## 4. Changes to each Contract page

### `/kontrakt-eksempel`

- Beholder H1 **«Kontrakt eksempel»** og hele den godkjente introduksjonen, inkludert skillet mellom pedagogisk eksempel og ferdig signeringsdokument.
- Eyebrow: **KONTRAKT · PRAKTISK EKSEMPEL**.
- Sidepanelet «Dette lærer du av eksemplet» omorganiserer de fire eksisterende punktene uten generiske checkmarks.
- Kompakt seksjonsnavigasjon leder til oppbygning, pris/betaling og FAQ.
- De elleve eksisterende delene vises som en dokumentgjennomgang: overskrift og forklaring i to kolonner på stor desktop, én kolonne på mindre bredder.
- Eksisterende appforhåndsvisninger og relevante skjermutsnitt beholdes ved de samme faglige temaene. Ingen tilbakeholdt B2C-/B2B-PDF gjøres tilgjengelig.

Den foreslåtte nye markedsoverskriften erstatter ikke etablert H1. Søkeintensjon og eksemplets begrensninger veier tyngre enn et visuelt formuleringseksperiment.

### `/kontrakt-handverker`

- Beholder H1 **«Kontrakt for håndverkere»** og den konkrete introduksjonen om maler-, gulv-, flis-, snekker- og oppussingsarbeid.
- Eyebrow: **KONTRAKT · FOR HÅNDVERKERE**.
- Et strukturert avklaringspanel bruker de eksisterende punktene under Omfang, Materialer, Pris og plan, og Kundetype.
- Seks eksisterende deler får egne, tydelig adskilte flater og lesebredder. Bilder for arbeid/materialer, betalingsvilkår og tilbudsgrunnlag står fortsatt i relevant kontekst.
- Praktisk omfangseksempel, avgrensninger, frister og juridiske kvalifikasjoner er bevart. Ingen ny bygge-/CRM-/etterlevelsesfunksjon hevdes.

### `/hva-skal-en-kontrakt-inneholde`

- Beholder spørsmålet **«Hva skal en kontrakt inneholde?»** som H1 og hele introduksjonens forbehold om anbefalinger kontra lovkrav.
- Eyebrow: **KONTRAKT · PRAKTISK SJEKKLISTE**.
- Heroens støtteområde er en innholdsoversikt med lenker til de syv eksisterende temaene, fremfor samme punktpanel som de andre sidene.
- De fire opprinnelige innledningspunktene står i en kort sjekkliste under heroen. Ingen fagtekst er fjernet eller erstattet med markedsføring.
- Lengre forklaringer vises med konsistent lesebredde og tydelig bakgrunnsskifte mellom emnene. Eksisterende klausul-/materialbilder beholdes der de allerede forklarte innholdet.

På alle tre sider er primær CTA-label og appdestinasjon bevart. En ny sekundær internlenke hjelper leseren videre til faktisk guideinnhold. Registreringsveiledningen følger eksisterende nettstedskomponenter.

## 5. Content preservation verification

`content/seoPages.ts` er uendret i kontrollsummen. Nettlesertesten kontrollerte dessuten at alle tre introduksjonene, **24 fagoverskrifter, 49 fagavsnitt, 12 opprinnelige introduksjonspunkter og 12 FAQ-svar/spørsmål** finnes uendret i riktig rendret innhold.

Juridiske merknader om blant annet uavhengig gjennomgang, B2C/B2B, lovgrunnlag, reklamasjon, avtaleendringer og signering er bevart. Ingen nye lovkrav, garantier, priser eller produktfunksjoner er innført. Dette er ingen ny juridisk vurdering.

Ingen downloadResources finnes på de tre dataoppføringene, og ingen PDF-nedlasting er lagt til. Skjermbilder av appen er fortsatt tydelig adskilt fra publiserte PDF-eksempler. Ingen kilde-PNG eller godkjent WebP er endret, generert eller beskjært.

## 6. Related-links preservation

Den tidligere klyngenavigasjonen rett etter CTA og den delvis dupliserende lenkelisten nederst er erstattet av ett samlet område etter FAQ:

- Alle fire kontraktsidene er tilgjengelige, inkludert aktiv side.
- Aktiv side har `aria-current="page"` og synlig «Du er her», ikke bare en annen farge.
- Eksisterende destinasjoner til de øvrige dokumentemnene er bevart i et kompakt, tastaturbetjent ressursområde.
- Kontekstlenker i fagdelene beholdes med eksisterende etiketter og URL-er.
- Brødsmuler beholder Hjem og gjeldende side; Kontrakt er nå en reell lenke til eksisterende `/kontrakt-mal`.

En destinasjonskontroll sammenlignet alle opprinnelige lenkemål per side mot sluttvisningen, med vanlig URL-normalisering av trailing slash. Ingen tidligere destinasjon mangler. Alle 25 unike lokale lenker fra de tre sidene svarte HTTP 200; brukte instruksjonsankre finnes i måldokumentene. Eksterne fagkilder er bevart som URL-er, men ikke gjenstand for en ny ekstern kilde-/lovkontroll i denne visuelle fasen.

## 7. SEO metadata comparison

Før/etter-sammenligning i nettleser bekrefter identiske title, description, canonical, Open Graph, robots-meta-tilstand og JSON-LD på alle tre ruter. FAQPage-data inneholder de samme spørsmålene/svarene som den synlige FAQ-en. Organization/WebSite fra root layout er uendret. Ingen ny schema-type er innført.

| Rute | Beholdt H1 | Beholdt metadata-tittel |
| --- | --- | --- |
| `/kontrakt-eksempel` | Kontrakt eksempel | Kontrakt eksempel – se hvordan en kontrakt bygges opp |
| `/kontrakt-handverker` | Kontrakt for håndverkere | Kontrakt for håndverkere – omfang, pris og vilkår |
| `/hva-skal-en-kontrakt-inneholde` | Hva skal en kontrakt inneholde? | Hva skal en kontrakt inneholde? Praktisk sjekkliste |

Canonical beholder `https://www.jobbleder.no` med den eksisterende rutestien. Alle tre har nøyaktig ett H1 og logisk H2/H3-hierarki. Ingen noindex, redirect, URL-, sitemap- eller robotsendring. Åpne-/lukkeelementene endrer ikke de tilgjengelige dokumentdestinasjonene.

## 8. Responsive results and visual comparison

Testet lokal produksjonsbuild i Chrome. Alle tre sider ble testet ved fem bredder, med begge OS-fargepreferanser og redusert bevegelse: **30 kombinasjoner**.

| Bredde | Begge fargepreferanser | Overflow | Komposisjon og interaksjon |
| ---: | --- | --- | --- |
| 375 px | Bestått | Ingen | Stablede kolonner, lesbar tekst, native meny/FAQ |
| 390 px | Bestått | Ingen | Stablede kolonner, lesbar tekst, native meny/FAQ |
| 768 px | Bestått | Ingen | Lesbar mellomvisning; panel under heroens hovedtekst |
| 1024 px | Bestått | Ingen | Tokolonnehero; separate fagseksjoner |
| 1440 px | Bestått | Ingen | Tokolonnehero og sidetilpasset redaksjonell presentasjon |

Den marineblå flaten er tilsiktet og den samme under lys/mørk OS-preferanse. Beregnet grunnflate er `#101827`, med støtteflate `#172337`, lyse tekstvariabler og blå aksent. H1 er ca. 44,8 px på mobil og 72 px ved 1440 px, mot den gamle `text-4xl`-presentasjonen. Heroene bruker innholdets høyde, ikke en tom viewport-høyde.

Visuell gjennomgang omfattet alle tre nye desktopheroer, eksempelsidens og sjekklistens mobilhero, full håndverkerguide på desktop og full sjekkliste på mobil. Disse er sammenlignet med de gamle kontraktopptakene og den faktiske Lage faktura-referansen. Forbedringene er større overskrifter, tydelig lesehierarki, roligere flater, egne seksjoner, sidetilpassede støttepaneler og relaterte sider nederst. Det er ikke kopiert en Faktura-artikkel eller tvunget identisk støtteinnhold inn på alle sidene.

Ingen klipte kontroller, unødvendig tomme heroarealer eller overlappende tekst ble registrert. Bildene holder native størrelsestak og naturlige proporsjoner. Det eksisterende prinsippet om å utelate uleselige små kontraktbilder under 640 px er bevart; hele fagteksten er tilgjengelig uten disse bildene.

## 9. Accessibility results

30 axe-kjøringer med WCAG 2 A/AA og WCAG 2.1 A/AA, med åpne FAQ-/ressursdisclosures: **0 rapporterte brudd**. Incomplete kontrastobservasjoner gjelder dekorative, `aria-hidden` pil-/chevrontegn som verktøyet ikke klassifiserer som tekst. Rastertekst er ikke fullstendig verifisert av axe.

Kontrollert med tastatur:

- Skipplenke som første tabmål, med fokusflytting til `main`.
- Native mobil-/produktmeny med synlig fokus.
- FAQ åpner med Enter og lukker med Space.
- Nye internankre leder til riktig innhold under sticky header.
- Bildeåpningslenker har synlig fokus og tilgjengelige navn som inkluderer «Åpne hele bildet».
- Aktiv kontraktside er identifiserbar med tekst og `aria-current`.
- Ingen duplikate ID-er eller interne fragmentlenker uten mål.
- Redusert bevegelse gir `scroll-behavior: auto`; ingen animasjon eller autoplay er introdusert.

Ingen skjermleserøkt eller applikasjonsinteraksjon er utført. Tilgjengelighetsresultatene gjelder den testede lokale nettleservisningen.

## 10. Build and regression test results

| Kontroll | Resultat |
| --- | --- |
| `npx.cmd tsc --noEmit --incremental false` | Bestått på sluttkoden |
| `npm.cmd run lint` | Bestått uten ESLint-feil/advarsler |
| `npm.cmd run build` | Bestått, 55 sider generert |
| `git diff --check` | Bestått; tidligere fasearbeid gir enkelte LF/CRLF-konverteringsmeldinger |
| Eksisterende `scripts/verify-contract-visuals.mjs` | Bestått: 13 lossless-derivater og 93 originale kildefiler |
| Fasestart-/filkontroll | Kun den avgrensede rutedispatchen og de nye fasefilene avviker |
| Innholds-, metadata-, schema- og destinasjonskontroll | Bestått på alle tre sider |
| 30 responsive/tema-/axe-kombinasjoner | Bestått |
| Syv regresjonsruter | Lastet, med identiske metadata, main-innhold og bildeattributter |
| Faktura-referansens hero | Dekodede bildepiksler identiske før/etter ved 1440 px |

Regresjonsruter: `/`, `/kontrakt-mal`, `/instruksjoner`, `/lage-faktura`, `/timeliste-mal`, `/tilbud-mal` og `/hvordan-folge-opp-tilbud`. Kildene til disse sidene, delte komponenter og eksisterende stilfiler er uendret. Den godkjente hjemmesiden er ikke modifisert.

Ingen JavaScript-sideunntak ble registrert. Det kjente lokale `/api/handshake`-svaret på HTTP 400 forekom og gir nettverksmeldinger i konsollen; ingen andre HTTP-feil ble registrert på de tre testede sidene. Analytics er ikke endret. Bygget gir de eksisterende Node DEP0205-meldingene om `module.register()`.

Lighthouse og produksjonsverifikasjon er ikke utført i denne fasen. Dette er implementeringsverifikasjon, ikke oppstart av en separat endelig releaseaudit.

## 11. Screenshot paths

Alle bevis ligger utenfor repositoryet. De tolv påkrevde sluttbildene:

| Side / opptak | Eksakt sti |
| --- | --- |
| Eksempel — desktop hero | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c5/hero-kontrakt-eksempel-1440.png` |
| Eksempel — mobil hero | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c5/hero-kontrakt-eksempel-390.png` |
| Eksempel — full desktop | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c5/after-kontrakt-eksempel-1440.png` |
| Eksempel — full mobil | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c5/after-kontrakt-eksempel-390.png` |
| Håndverker — desktop hero | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c5/hero-kontrakt-handverker-1440.png` |
| Håndverker — mobil hero | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c5/hero-kontrakt-handverker-390.png` |
| Håndverker — full desktop | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c5/after-kontrakt-handverker-1440.png` |
| Håndverker — full mobil | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c5/after-kontrakt-handverker-390.png` |
| Sjekkliste — desktop hero | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c5/hero-hva-skal-en-kontrakt-inneholde-1440.png` |
| Sjekkliste — mobil hero | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c5/hero-hva-skal-en-kontrakt-inneholde-390.png` |
| Sjekkliste — full desktop | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c5/after-hva-skal-en-kontrakt-inneholde-1440.png` |
| Sjekkliste — full mobil | `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c5/after-hva-skal-en-kontrakt-inneholde-390.png` |

Faktura-referanse:

- `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c5/reference-lage-faktura-1440.png`.
- `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c5/reference-lage-faktura-hero-1440.png`.
- Samme mappe inneholder `reference-lage-faktura-after-hero-1440.png` og `reference-comparison.json` for bevaringstesten.

De gamle tre kontraktvisningene er lagret som `before-<slug>-1440.png` og `before-<slug>-390.png` i samme mappe. Maskinlesbare resultater: `browser-results.json`, `preservation.json`, `content-reference.json` og `contract-check/verification.json`. Disse er diagnostikk, ikke produksjonsbilder eller stagingforslag.

## 12. Local preview URLs

- <http://127.0.0.1:3098/kontrakt-eksempel>
- <http://127.0.0.1:3098/kontrakt-handverker>
- <http://127.0.0.1:3098/hva-skal-en-kontrakt-inneholde>

Serveren kjører for eierens visuelle vurdering. Ingen publisering er utført.

## 13. Known limitations

- Den godkjente introduksjonen og støtteinnholdet stables på mobil. Heroene er derfor høyere der enn på desktop, men uten tomme høydefelt. Fagtekst og juridiske forbehold er prioritert fremfor å forkorte dem for utseendets skyld.
- Små kontraktkilder er fortsatt oppløsningsbegrenset. De er ikke oppskalert, og uleselige mobilutsnitt er fortsatt utelatt.
- Lage faktura-referansen har i denne lokale førtilstanden en eksisterende kontrastsvakhet: mørk H1-tekst på marineblå hero. Dette finnes allerede i førbildet; heroens piksler er uendret etter denne fasen. Den nye kontraktvisningen bruker korrekt avgrensede lyse tekstvariabler. Referansesiden er ikke rettet fordi den er utenfor de tre målrutene.
- Lokal analytics returnerer fortsatt HTTP 400. Ingen produksjonsfeil er dokumentert av denne lokale observasjonen.
- Ingen ny juridisk vurdering, skjermleserøkt, produksjonstest eller applikasjonsberegningstest er utført. Ingen nye B2C-/B2B-PDF-er er publisert.

## 14. Remaining release requirements

Eieren skal gjennomgå de tre lokale visningene før eventuell videre releasebestilling. Ingen endelig releaseaudit er startet automatisk, og ingen commit/push/deploy er utført.

Eksisterende juridiske gjennomgangsforbehold og det separate økonomiske publiseringskravet er fortsatt gjeldende. Relevante konverterings-/beregningsrettinger og faktiske applikasjonsregresjoner må være akseptert før tilhørende markedsføringsinnhold publiseres; se `docs/phase-9c2a-invoice-copy-release-gate.md`. Visuell godkjenning eller nettstedets tekniske tester erstatter ikke disse kravene.

**PHASE 9C.5 COMPLETE — READY FOR OWNER VISUAL REVIEW**
