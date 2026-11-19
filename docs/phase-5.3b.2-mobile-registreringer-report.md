# Phase 5.3B.2 — Mobile registreringer marketing section

Dato: 19. november 2026. Kun lokal implementering og verifikasjon. Ingen commit, push eller publisering.

## 1. Eksisterende side og plassering

Den komplette `/timeliste-mal`-implementeringen, `content/timelistProduct.ts`, begge mediemanifestene, delte produktkomponenter, instruksjonshuben og relevante funn i Phase 5.3A ble gjennomgått før endringen. Siden hadde ti seksjoner og seks produkt-/PDF-bilder. Heroen forklarer allerede registreringer → timeliste → faktura. De eksisterende seksjonene demonstrerer valg/import av registreringer, timelisteoppretting, fire arbeidskategorier og fakturakonvertering.

Den nye seksjonen ligger etter `#pdf-maler`, rett før `#registreringer`, med ID `#registrer-pa-mobil`. Den flytter fortellingen fra nedlastbare maler til praktisk registrering i mobilnettleseren. Den eksisterende neste seksjonen beholder den detaljerte importforklaringen. Ingen ny, gjentatt steg-for-steg-konvertering er lagt til.

En autentisk portrettvisning er brukt sammen med tekst: stablet på telefon, to kolonner fra 768 px. En rolig blå bakgrunn, eksisterende typografi og delte komponenter følger produktsidens visuelle språk. Produktsidens eksisterende lyse overflate beholdes også ved mørk OS-preferanse. Ingen ny animasjon, enhetsramme eller simulert grensesnitt.

## 2. Implementert norsk tekst

- Overtekst: **REGISTRERINGER · PÅ MOBIL**
- H2: **Registrer arbeidstimer direkte fra mobilen.**

> Ferdig med arbeidsdagen? Registrer timer, pauser og arbeidsbeskrivelse i nettleseren på mobilen. Ta med kilometer når KM er aktivert, og marker ekstraarbeid ved behov.

> Samle registreringene i en timeliste når du trenger det. Kontroller innholdet før du lager PDF eller bruker timelisten som fakturagrunnlag. Oppretting og konvertering er med i Free.

Hjelpelenke: **Se hvordan du registrerer en arbeidsdag**, til `/instruksjoner#legg-til-en-arbeidsokt`. Det historiske ankeret finnes og åpner den moderniserte veiledningen «Legg til en registrering»; dette ble også testet ved faktisk navigasjon.

Bildetekst: **Registrering i mobilnettleseren: vanlig arbeid, 30 minutters pause og knappen Lagre registrering.**

Alt-tekst: **En arbeidsregistrering i Jobbleder på mobil med beskrivelse, tidsfelt, pause og knappen Lagre registrering**.

Teksten lover ikke native app, offlinefunksjon, autosave, bakgrunnssynkronisering, ansattkontoer, lønn eller automatisk fakturasending. Skjermbildet presenteres ikke som datagrunnlaget til de eksisterende, separate Timeliste-/Faktura-eksemplene.

## 3. Skjermbildevalg og optimalisering

| Rolle | Eksakt fil | Dimensjoner | Filstørrelse |
| --- | --- | --- | ---: |
| Uendret original / fullbildelenke | `public/images/product/mobile/source/registration_form_mobile.png` | 332 × 720 | 67 231 byte |
| Gjenbrukt godkjent WebP | `public/images/product/mobile/optimized/registration_form_mobile-35f62cf2d7be.webp` | 332 × 720 | 44 472 byte |

Originalens SHA-256: `8605949792a0ce489755275df25a12cfe1d7308a4a7c9d5d8f29625172b2941d`.

Bildet ble visuelt inspisert. Det viser registreringsskjemaet med beskrivelse, klokkeslett, 30 minutters pause, kilometerfelt, ekstra-valg og «Lagre registrering», inkludert nedre navigasjon. Hele bildet beholdes uten klipping. Dekodede RGBA-piksler i original og eksisterende lossless WebP ble sammenlignet og er identiske. WebP sparer 22 759 byte, omtrent 34 %, uten nye avledede filer.

`registrations_selected_import_mobile.png` finnes, men er ikke lagt til: import demonstreres allerede i neste seksjon. Det foreslåtte filnavnet `timelist_document_actions_mobile.png` finnes ikke. Det faktiske `timelist_invoice_regular_mobile_01.png` viser timelistedokumentets handlinger, men er heller ikke brukt fordi det ville gjenta konverteringsdelen.

Eksisterende `ProductMedia`, `SectionContainer` og `ResourceLink` gjenbrukes. Medieobjektet hentes fra `content/instructionMobileMedia.json`; ingen duplisert manifestoppføring. Bredde/høyde er angitt, proporsjoner reserveres, og bildet har `loading="lazy"` og normal henteprioritet. Nettleseren lastet det likevel innen den første observasjonen i alle åtte tilfeller; lazy loading garanterer ikke utsatt nedlasting. Fullbildet åpnes bare ved lenken. Ingen ekstra oppløsningsvariant er nødvendig for en original på 332 px som vises maksimalt i samme størrelse.

## 4. Eksakte filer endret i denne fasen

1. `components/product/timelist/TimelistProductPage.tsx` — manifestimport og én ny seksjon med bilde, tekst og kontekstlenke.
2. `components/product/timelist/timelistProduct.module.css` — avgrenset bakgrunn, grid, avstander, bildebegrensning og minst 44 px høy fullbildelenke.
3. `docs/phase-5.3b.2-mobile-registreringer-report.md` — denne rapporten.

Ingen bilder eller andre applikasjonsfiler er endret i denne fasen. SHA-256-sammenligning mot 287 registrerte filer ved oppstart, inkludert 160 bildefiler, fant bare de to ovennevnte kildekodeendringene og ingen manglende filer. Forhåndseksisterende Phase 5.3B.1-endringer i ti andre filer og de to tidligere auditrapportene er bevart. HEAD og stagingområdet er uendret. Testskript, skjermbilder og måleresultater ligger utenfor applikasjonsrepoet.

## 5. Responsive tester og stabilitet

Testet mot lokal produksjonsbuild på `http://127.0.0.1:3030`, med installert Chrome styrt av Puppeteer. Resultatfil: `phase53b2/browser.json` i artefaktmappen nedenfor.

| Bredde | Lys | Mørk OS-preferanse | Synlig bildebredde | Målt CLS | Overflow |
| --- | --- | --- | --- | --- | --- |
| 375 px | Bestått | Bestått | 325 px | 0 i begge | Ingen |
| 768 px | Bestått | Bestått | 330 px | 0 i begge | Ingen |
| 1280 px | Bestått | Bestått | 330 px | 0 i begge | Ingen |
| 1440 px | Bestått | Bestått | 330 px | 0 i begge | Ingen |

Alle sju produktbilder ble rullet frem og dekodet i hvert tilfelle. Mobilbildets naturlige forhold 332:720 er bevart; ingen beskjæring eller deformering. Seksjonen har lesbar portrettvisning og balansert plassering. Skjermbildets eksisterende grensesnitttekst er naturlig liten, men originalen kan åpnes for inspeksjon og nettleserzoom. Teksten utenfor bildet forklarer den viktige handlingen.

Åtte seksjonsskjermbilder og åtte detaljer av mobilbildet ble lagret, samt fire fullsideskjermbilder i lys preferanse. Representative telefon- og nettbrett-/skrivebordsbilder ble visuelt inspisert. Seksjonsopptakene inkluderer deler av foregående seksjon på grunn av eksisterende scroll-margin; dette er opptaksposisjon, ikke klipping av innholdet. Detaljopptakene viser hele mobilbildet.

Artefaktmappe: `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase53b2/`.

Eksempler: `mobile-section-375-light.png`, `phone-detail-375-light.png`, `mobile-section-768-light.png`, `mobile-section-1440-dark.png` og `page-1440.png`. Dette er lokale testartefakter, ikke nye nettstedbilder.

## 6. Tilgjengelighet

- axe-core på hele Timeliste-siden i alle åtte bredde-/temakombinasjoner: **0 brudd** for WCAG A/AA til og med 2.2 og best practice.
- Chrome sitt tilgjengelighetstre bekrefter navngitt region, H2 på nivå 2, bildealternativ og fullbildelenkens tilgjengelige navn. Det synlige «Åpne hele bildet» inngår i lenkenavnet sammen med bildebeskrivelsen.
- Begge nye lenker har synlig 3 px tastaturfokus og minst 44 px høy trefflate. Fullbildelenken ble aktivert med Enter i alle åtte tilfeller og åpnet riktig original PNG.
- Hjelpelenken ble klikket i alle åtte tilfeller: riktig guide åpnes, og fokus flyttes til dens `summary`.
- Alle åtte eksisterende FAQ-punkter ble åpnet med Enter og lukket med Space i hvert tilfelle.
- Redusert bevegelse ble testet i alle åtte tilfeller: `scroll-behavior: auto`; vanlig preferanse beholder eksisterende `smooth`. Seksjonen innfører ingen animasjoner.
- Beregnet kontrast på den nye bakgrunnen `#eff6ff`: H2 `#0f172a` **16,40:1**, brødtekst `#334155` **9,51:1**, bildetekst/fullbildelenke `#475569` **6,96:1**, blå lenke/overtekst `#1d4ed8` **6,16:1**.

axe markerte fire eksisterende dekorative symboler for manuell kontrastvurdering: mobilmenyens pil og tre PDF-anker-piler. Alle er `aria-hidden` og står ved beskrivende tekst; ingen gjelder den nye seksjonen. Dette er «incomplete», ikke registrerte kontrastbrudd. Ny tekst og lenker er kontrollert separat som ovenfor. Ingen fysisk skjermleser eller fysisk mobiltelefon ble brukt; semantikk ble verifisert i tilgjengelighetstreet og tastaturhandlinger i nettleseren.

## 7. Ytelse

Lighthouse 13.6.0 kjørt sekvensielt, mobil og skrivebord, før og etter endringen mot lokal produksjonsserver. Samme profiler: mobil RTT 150 ms / 1 638,4 Kbps / CPU 4×; skrivebord RTT 40 ms / 10 240 Kbps / CPU 1×. Ingen andre QA-kjøringer ble kjørt samtidig med målingene. Dette er enkeltstående laboratoriemålinger, ikke produksjonsmålinger eller feltdata.

| Måling | Mobil før | Mobil etter | Skrivebord før | Skrivebord etter |
| --- | ---: | ---: | ---: | ---: |
| Performance | 92 | 96 | 100 | 100 |
| Accessibility | 100 | 100 | 100 | 100 |
| Best Practices | 96 | 96 | 96 | 96 |
| SEO | 100 | 100 | 100 | 100 |
| LCP | 2,774 s | 2,517 s | 0,654 s | 0,637 s |
| CLS | 0 | 0 | 0 | 0 |
| TBT | 214 ms | 147 ms | 0 ms | 0 ms |
| Samlet overføring i Lighthouse | 254 620 B | 266 998 B | 406 649 B | 429 999 B |
| Bildeoverføring i Lighthouse | 60 514 B | 71 810 B | 152 540 B | 174 858 B |
| JavaScript-overføring i Lighthouse | 150 937 B | 150 937 B | 170 581 B | 170 581 B |

Ingen Lighthouse-kjøringsvarsler. Ingen målt ytelsesregresjon mot den ferske førmålingen; forskjeller i timing må ikke tolkes som en garantert forbedring. Ingen nye avhengigheter eller klientkomponenter.

Historisk Phase 4A.3-baseline: Performance 99/100, Accessibility 100/100, Best Practices 96/96, SEO 100/100, LCP 1,945/0,678 s og CLS 0/0. Den historiske mobilmålingen er bedre enn dagens både før og etter; den er fra en annen build/kjøring og er ikke en kontrollert førmåling for denne endringen. Den nye lokale før-/etter-sammenligningen viser ingen ny betydelig regresjon.

Fullt innlastet produktbildepayload er **186 328 byte ved 375 px** og **279 034 byte ved 768/1280/1440 px**, nøyaktig 44 472 byte mer enn de seks eksisterende bildene (141 856 / 234 562 byte). Lighthouse sitt initiale overføringsvindu er ikke samme måling som hele sidens full-scroll-payload. Original-PNG regnes ikke med før brukeren åpner den.

Den kjente lokale `/api/handshake` svarer fortsatt HTTP 400 og gir Best Practices 96. Dette forekom både før og etter. Ingen nye JavaScript-unntak eller uventede ressursfeil ble funnet i målsidens nettlesertester. Ingen produksjonstest eller analyseendring er utført i denne fasen.

Målefiler: `before-mobile.json/.html`, `before-desktop.json/.html`, `after-mobile.json/.html`, `after-desktop.json/.html` og begge `*-summary.json` i artefaktmappen.

## 8. SEO og regresjonskontroll

En fersk DOM-/metadata-baseline ble tatt før implementering. I alle åtte målsidetester ble kun den nye seksjonen fjernet fra en klonet DOM før sammenligning. Hele det gjenværende `main`-innholdet, header, footer, tidligere lenker, metadata og strukturert data er identiske med førmålingen. Siden har nå elleve seksjoner og sju bilder.

- Tittel uendret: `Timeliste mal – gratis og enkel timeliste (PDF / nett) | Jobbleder`.
- Beskrivelse uendret: `Gratis timeliste mal for håndverkere og små bedrifter. Lag timeliste raskt, last ned som PDF og få full oversikt.`
- Canonical uendret: `https://www.jobbleder.no/timeliste-mal`.
- Nøyaktig én eksisterende H1, uendret: «Timeliste mal (gratis).» og «Fra arbeidstimer til ferdig faktura.»
- Alle eksisterende FAQ-svar og JSON-LD, nedlastingslenker, interne lenker, produktbilder og CTA-destinasjoner er bevart. Det er lagt til én hjelpelenke og én fullbildelenke. Ingen nye SEO-ruter eller endret sitemap-/robots-konfigurasjon.
- Tolv unike viste bildevarianter/originaler ble hentet: alle HTTP 200 og identiske med lokale filer ved SHA-256-kontroll.
- 40 regresjonstilfeller: ti andre ruter × 375/1440 px × lys/mørk. Alle HTTP 200, ingen horisontal overflow, og uendret `main`, header, footer, metadata, canonical, H1, JSON-LD og lenkeliste mot førmålingen.

Regresjonsruter: `/`, `/fakturaprogram-gratis`, `/tilbud-mal`, `/kontrakt-mal`, `/instruksjoner`, `/blogg/gratis-timeliste-mal`, `/timeliste-mal-pdf`, `/timeliste-uke`, `/timeliste-ansatt`, `/timeliste-prosjekt`. De fire spesialiserte sidene inkluderer allerede eksisterende, lokalt ucommittet Phase 5.3B.1-arbeid; det er denne oppstartstilstanden som er bevart.

PDF-endepunktene ble ikke lastet ned på nytt; denne fasen verifiserte at de eksisterende lenkene og siden rundt dem er uendret. Dette er ikke en ny test av eksterne PDF-tjenester.

## 9. Teknisk validering

| Kontroll | Resultat |
| --- | --- |
| `npx.cmd tsc --noEmit` | Bestått, exit 0; gjentatt mot endelig kilde |
| `npm.cmd run lint` (full ESLint) | Bestått, exit 0; gjentatt mot endelig kilde |
| `npm.cmd run build` | Bestått, exit 0; 55 statiske sider generert |
| `git diff --check` | Bestått; ingen whitespace-feil |
| Kontroll av eksisterende filer / HEAD / staging | Bare de to tilsiktede kodefilene endret; øvrige oppstarts-hasher, HEAD og staging bevart |

Produksjonsbuilden ga eksisterende Node `DEP0205`-varsler om `module.register`; ingen kompilerings-, TypeScript- eller buildfeil. Git varsler om fremtidig LF→CRLF-konvertering ved Git-skriving; ingen Git-skriving er utført.

## 10. Gjenstående forhold og eiergjennomgang

Ingen nye P0/P1-feil funnet. Ikke-blokkerende: kjent lokal analytics/handshake HTTP 400, miljøets Node-varsel og enkeltmålingers ytelsesvariasjon. Fysisk enhet, fysisk skjermleser og produksjonsserver er ikke testet i denne lokale implementeringsfasen. Alle opprinnelige kildebilder er bevart.

Lokal visning: `http://127.0.0.1:3030/timeliste-mal#registrer-pa-mobil`.

Kun de to kildefilene og denne rapporten tilhører Phase 5.3B.2. Ingen bloggmodernisering, commit, push eller deploy. Avventer visuell godkjenning.

**READY FOR OWNER REVIEW**
