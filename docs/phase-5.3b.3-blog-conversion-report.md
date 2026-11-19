# Phase 5.3B.3 — Editorial & product enhancement

Dato: 19. november 2026. Oppdatert etter eierens redaksjonelle tilbakemelding. Denne rapporten beskriver den endelige lokale versjonen og erstatter rapporten fra første tekstbaserte iterasjon. Ingen commit, push eller deploy.

## 1. Artikkel og førmåling

`/blogg/gratis-timeliste-mal` er fortsatt en gratis PDF-guide: innledning, to direkte nedlastinger, feltoversikt og manuell bruksveiledning kommer før produktalternativet. Innholdet i nedlastingene, feltoversikten og den manuelle veiledningen er bevart. Det siste dokumenttillegget grupperer feltoversikten i en ny layout; se seksjon 12. H1, sammendrag, metadata, publiseringsdato og strukturert data er bevart.

Eieroppgitt GSC-historikk for tre måneder: **342 klikk, 4 851 visninger, 7,05 % CTR, gjennomsnittlig posisjon 7,95**. Tallene er ikke hentet gjennom en integrasjon og lover ingen fremtidig effekt.

Gjennomgått: hele artikkelen, BlogBlock-modellen og bloggrendereren, PDF-/internlenker, relaterte guider, Phase 5.3A og den eksisterende mobilseksjonen på Timeliste-produktsiden. Førmåling omfatter alle 18 blogginnlegg og produktsiden; filbaseline omfatter 289 sporede filer på HEAD `76eac3b03b1f1bedf6de55cf8e9cc5fa067e7a07`.

## 2. Før / etter

| Område | Før: første lokale iterasjon | Etter: endelig redaksjonell versjon |
| --- | --- | --- |
| Sammenligning | Kort generelt PDF/digital-avsnitt | Konkret forklaring av manuell utfylling versus registrering og videre bruk |
| Produktfortelling | To overlappende overskrifter og to kampanjepregede bokser | Én samlet seksjon under eksisterende «PDF eller digital timeliste?» |
| Arbeidsflyt | To løpende avsnitt | Tre korte, nummererte, brukerutførte steg |
| Visuelt bevis | Ingen skjermbilder | Ett autentisk mobilbilde, tekst ved siden av på større skjermer |
| Konvertering | Generell produktknapp, ny ankerknapp og app-knapp | Én tydelig redaksjonell produktlenke, pluss separat fullbildelenke |
| Nedlastinger | To direkte PDF-knapper | Samme knapper, plassering, etiketter og URL-er |

Den gamle fleksibilitetsnoten og den avsluttende «Vil du ha mer kontroll?»-boksen er fjernet som selvstendige callouts. Den nyttige opplysningen om å velge dager er flyttet inn i den nye forklaringen. Den generelle produktknappen er samlet i den mer presise ankerlenken. App-knappen var en konkurrerende neste handling i en nedlastingsguide; toppmenyens eksisterende Login-lenke er fortsatt tilgjengelig. Den generelle `/timeliste-mal`-lenken finnes fortsatt i «Relaterte guider». Lenkenes formål ble kontrollert før konsolideringen.

## 3. Endelig innhold

### PDF eller digital timeliste?

> En PDF-mal passer når du vil skrive ut et skjema eller føre noen få arbeidsdager. Du fyller inn opplysningene og summerer timene selv. Last ned en av malene ovenfor hvis det er alt du trenger.

> Fører du timer jevnlig, kan du registrere arbeidsdagene i Jobbleder og bruke opplysningene videre. Du velger selv hvilke dager timelisten skal dekke.

Arbeidsflyt: **Registreringer → Timeliste → Faktura**.

1. **Registrer arbeidsdagen.** Legg inn timer, pauser og arbeidsbeskrivelse i nettleseren på mobilen. Ta med kilometer når KM er aktivert, og marker ekstraarbeid ved behov.
2. **Velg og importer.** Marker de lagrede registreringene du vil bruke, og velg «Importer til timeliste».
3. **Kontroller timelisten.** Lag en PDF, eller konverter timelisten til en faktura. Kontroller også fakturaen før du sender den til kunden.

> Oppretting av dokumenter og konvertering er tilgjengelig i Free.

Primær kontekstlenke: **Se hvordan du registrerer timer på mobilen** → `/timeliste-mal#registrer-pa-mobil`.

Bildetekst: **En arbeidsdag i mobilnettleseren. Du lagrer registreringen selv.**

Ingen løfter om native app, offlinebruk, autosave, bakgrunnssynkronisering, ansattkontoer eller automatisk fakturasending. Import, kontroll og konvertering er uttrykkelig handlinger brukeren utfører.

## 4. Skjermbilde og redaksjonell layout

| Rolle | Eksakt fil | Dimensjoner | Størrelse |
| --- | --- | --- | ---: |
| Gjenbrukt, eksisterende lossless WebP | `public/images/product/mobile/optimized/registration_form_mobile-35f62cf2d7be.webp` | 332 × 720 | 44 472 B |
| Uendret original / fullbildelenke | `public/images/product/mobile/source/registration_form_mobile.png` | 332 × 720 | 67 231 B |

Originalens SHA-256 er fortsatt `8605949792a0ce489755275df25a12cfe1d7308a4a7c9d5d8f29625172b2941d`. Begge filer ble hentet med HTTP 200 og kontrollert mot lokale SHA-256-verdier. Ingen nye bildefiler eller endrede originaler.

Bildet viser faktisk arbeidsbeskrivelse, inn-/uttid, pause, KM, ekstra-valg og «Lagre registrering», inklusive nedre navigasjon. Det er ikke fremstilt som en ferdig timeliste, PDF eller et automatisk registrert resultat.

Alt-tekst: **Registrering i Jobbleder på mobil med arbeidsbeskrivelse, inn- og uttid, pause og knappen Lagre registrering**.

Implementert med **Next.js Image**, eksplisitt `width={332}`, `height={720}`, `loading="lazy"` og størrelsesangivelse som følger layouten: 248 px fra 768 px; ellers inntil 292 px med tilpasning til smale skjermer. `unoptimized` gjenbruker den allerede optimaliserte lossless WebP-en, uten ny lossy behandling eller unødvendige bildekopier. CSS viser naturlig forhold med `height: auto`; hele bildet er med. PNG lastes ved åpning av fullbildelenken.

På desktop/nettbrett ligger forklaring og steg til venstre, bilde til høyre. På mobil kommer teksten først og bildet under. Ett bilde, ingen stor kampanjebanner, fiktiv enhetsramme eller ny animasjon. Seksjonen følger artikkelens eksisterende lesebredde og produktfargene. Bloggens lyse overflate beholdes ved både lys og mørk OS-preferanse.

## 5. SEO og innholdsbevaring

Verifisert i alle åtte responsive tilfeller:

- Uendret URL og canonical: `https://www.jobbleder.no/blogg/gratis-timeliste-mal`.
- Uendret title: `Gratis timeliste mal (PDF) – last ned uten innlogging | Jobbleder`.
- Uendret description: `Last ned gratis timeliste mal PDF uten innlogging. Velg mellom tom timeliste og ferdig datert timeliste for siste uke.`
- Nøyaktig én uendret H1: `Timeliste mal (PDF) – gratis nedlasting uten innlogging`.
- Article-, Organization- og WebSite-JSON-LD er identiske med førmålingen, inklusive sammendrag og publiseringsdato.
- Innledning, nedlastinger, feltoversikt og manuell veiledning har uendret ordlyd. Etter det siste dokumenttillegget grupperes feltoversiktens tre blokker i én seksjon; normalisert DOM-sammenligning er dokumentert i seksjon 12.
- Hele `main` uten selve `article` er DOM-identisk: relaterte guider/artikler og øvrig sideinnhold er bevart.

Det tidligere generelle digitalavsnittet er utvidet og samlet som godkjent; det hevdes derfor ikke at hele artikkelteksten er uendret. Ingen metadata-, robots-, sitemap-, redirect- eller URL-konfigurasjon er endret. Ingen registrering kreves for de offentlige PDF-malene. Ingen ny FAQ eller nye SEO-ruter.

## 6. Funksjon, lenker og PDF-er

Begge eksisterende PDF-URL-er og knappetekster er bevart og kontrollert på nytt:

| Ressurs | Resultat | Filstørrelse |
| --- | --- | ---: |
| `/downloads/timeliste-mal-jobbleder.pdf` | HTTP 200, `application/pdf`, `%PDF-` | 339 211 B |
| `https://laskowskicreative.no/api/jobbleder/user/documents/oneweek-timelist` | HTTP 200, `application/pdf`, `%PDF-` | 334 286 B |

Dette verifiserer transport/signatur, ikke PDF-tagging eller ny visuell dokumentgjennomgang. Det eksterne endepunktet ble testet direkte med systemets CA-støtte.

Den nye produktlenken ble aktivert med Enter i alle åtte tilfeller: riktig URL/hash, eksisterende seksjon og synlig H2 på produktsiden; mobilbildet der kunne dekodes. Fullbildelenken ble også aktivert med Enter i alle åtte tilfeller og åpnet riktig original PNG på 332 × 720.

Alle 15 tidligere registrerte lokale lenkedestinasjoner, inklusive den nye produktlenken, returnerte HTTP 200. Den konsoliderte generelle produktlenken finnes fortsatt gjennom relatert-guide-modulen. Ingen innlogging, registrering eller autentisert dokumenthandling ble utført.

## 7. Responsivitet og tilgjengelighet

Chrome/Puppeteer mot endelig lokal produksjonsbuild på port 3040:

| Bredde | Lys / mørk | Bildebredde | Overflow | CLS | Produktlenkens treffhøyde |
| --- | --- | ---: | --- | ---: | ---: |
| 375 px | Begge bestått | 292 px | Ingen | 0 | 77,6 px |
| 768 px | Begge bestått | 248 px | Ingen | 0 | 48,8 px |
| 1280 px | Begge bestått | 248 px | Ingen | 0 | 48,8 px |
| 1440 px | Begge bestått | 248 px | Ingen | 0 | 48,8 px |

Alle bilder dekodet med naturlige dimensjoner 332 × 720. Ingen beskjæring, deformering eller uventede layoutskift ved rulling. Åtte seksjonsopptak og fire fullsidesopptak er lagret. Representative mobil- og desktopopptak ble visuelt inspisert. Fullsideskjermbilder tatt fra en rullet posisjon kan plassere den eksisterende sticky-menyen midt i opptaket; dette er opptaksoppførsel, ikke en ny del av artikkeloppsettet.

- axe-core, hele siden, WCAG A/AA til og med 2.2 samt best practice: **0 registrerte brudd i alle åtte tilfeller**.
- Én H1 og eksisterende H2 for sammenligningen. Tilgjengelighetstreet bekrefter H2-nivå og den beskrivende produktlenken. Arbeidssteg er en semantisk nummerert liste; bildet har `figure`, `figcaption` og beskrivende alternativtekst.
- Produkt- og fullbildelenkene har synlig **3 px** fokus. Fullbildelenken har minst 44 px treffhøyde. Enter virker på begge.
- Redusert bevegelse: `scroll-behavior: auto` ved reduce, eksisterende `smooth` ved vanlig preferanse. Ingen ny animasjon.
- Ny tekst/lenker på hvit bakgrunn: brødtekst `#334155` **10,35:1**, bildetekst `#475569` **7,58:1**, produktlenke `#1d4ed8` **6,70:1**, arbeidsflyttekst `#1e40af` **8,72:1**.

Automatiske «incomplete»-punkter er ikke rapportert som beståtte: de dekorative, `aria-hidden` pilene i arbeidsflyten; eksisterende brødsmulelenker ved 768 px; og enkelte eksisterende toppmenylenker når den halvtransparente sticky-menyen ligger over bildet under den rullede testen. Nye teksters kontrast er kontrollert separat som ovenfor. Pilene er dekorative, og skjermleserteksten bruker «til». Menyens 95 % hvite bakgrunn gir høy kontrast med den eksisterende mørke teksten selv over mørkt bildeinnhold. Ingen ny navigasjonsendring er gjort.

Testingen bruker tilgjengelighetstre og nettlesertastatur, ikke fysisk skjermleser eller fysisk telefon. Det er ikke en full tilgjengelighetssertifisering.

## 8. Lighthouse og ytelse

Lighthouse 13.6.0 ble kjørt sekvensielt på mobil og desktop uten samtidig QA. Mobilprofil: RTT 150 ms, 1 638,4 Kbps, CPU 4×. Desktop: RTT 40 ms, 10 240 Kbps, CPU 1×. Førverdier gjelder den første tekstbaserte lokale iterasjonen, målt tidligere samme dag på samme port/profiler; etterverdier gjelder den endelige bildeversjonen.

| Måling | Mobil før | Mobil etter | Desktop før | Desktop etter |
| --- | ---: | ---: | ---: | ---: |
| Performance | 100 | 99 | 100 | 100 |
| Accessibility | 100 | 100 | 100 | 100 |
| Best Practices | 96 | 96 | 96 | 96 |
| SEO | 100 | 100 | 100 | 100 |
| LCP | 0,787 s | 0,922 s | 0,229 s | 0,262 s |
| CLS | 0 | 0 | 0 | 0 |
| TBT | 61,5 ms | 117,9 ms | 0 ms | 0 ms |
| Total overføring | 187 695 B | 243 570 B | 575 884 B | 631 754 B |
| Bildeoverføring | 0 B | 44 754 B | 0 B | 44 754 B |
| JavaScript-overføring | 145 957 B | 155 441 B | 160 844 B | 170 328 B |

WebP-innholdet er 44 472 B; Lighthouse-tallet inkluderer overføringskostnad. Tillegget øker totaloverføring med omtrent 56 KB: hovedsakelig ett bilde, ca. 9,5 KB JavaScript knyttet til Next Image og ca. 1 KB CSS, pluss dokumentforskjeller. Ingen ny npm-avhengighet. Bildet er lazy, men nettleserens terskel gjør at det likevel kan hentes før det kommer inn i synsfeltet.

Desktop-totalen inkluderer som før en Next.js-forhåndshenting av den eksisterende PDF-filen på omtrent 339,5 KB. PDF-lenken og dens renderer er ikke endret. Dette er ikke et nytt bildepayloadproblem. Ingen CLS-regresjon; mobilscore er ett poeng lavere, og LCP er fortsatt under ett sekund i denne lokale målingen. Dette er enkeltmålinger med naturlig variasjon, ikke en garanti om feltresultater eller en statistisk ytelsessammenligning.

Best Practices 96 skyldes fortsatt kjent lokal `/api/handshake` HTTP 400. Ingen nye JavaScript-unntak eller andre feilresponser i de åtte artikkeltestene. Ingen Lighthouse-kjøringsvarsler. Ingen produksjonsmåling eller analytics-endring.

## 9. Teknisk validering og regresjon

- `npx.cmd tsc --noEmit`: bestått, exit 0.
- Full `npm.cmd run lint`: bestått, exit 0.
- `npm.cmd run build`: bestått, exit 0; 55 statiske sider. Miljøets eksisterende Node `DEP0205`-varsler om `module.register` er fortsatt til stede.
- `git diff --check`: bestått.
- 25 regresjonstilfeller: de 17 andre blogginnleggene ved 1440 px/lys, pluss Timeliste-produktsiden ved fire bredder × lys/mørk. HTTP 200, ingen overflow, identiske `main`, metadata, canonical, H1, strukturert data og lenker mot førmålingen.
- Blant de 289 opprinnelig sporede filene er bare bloggrendereren og `content/blogPosts.ts` endret. HEAD og stagingområdet er uendret. Originalbildene er verifisert separat med hash.

Den delte rendereren får kun en opt-in-gren for den nye blokktypen. Den brukes bare i målartikkelen. Andre blogginnleggs innhold og eksisterende rendergrener er uendret; det hevdes ikke at felles CSS-/ruteoverføringskostnad er identisk etter build.

## 10. Eksakte filer endret / opprettet

1. `content/blogPosts.ts` — ny opt-in-blokktype; konsolidert sammenligning bare i målartikkelen.
2. `app/blogg/[slug]/page.tsx` — import og rendering av denne blokktypen; metadata/schema urørt.
3. `components/blog/TimelistComparison.tsx` — ny redaksjonell seksjon med Next Image, tre steg og én produktlenke.
4. `components/blog/timelistComparison.module.css` — ny avgrenset layout og fokus-/bildestiler.
5. `components/blog/TimelistContents.tsx` — dokumenteksempel sammen med eksisterende overskrift, forklaring og liste.
6. `components/blog/timelistContents.module.css` — avgrenset layout, bildestørrelse og fokus.
7. `public/images/product/timeliste/optimized/jobbleder-blog-timelist-example-dd471883399a.webp` — ny tapsfri avledning av eierens bilde.
8. `docs/phase-5.3b.3-blog-conversion-report.md` — oppdatert rapport.

Originalbilder, produktsider, andre bloggtekster, backend- og SEO-konfigurasjoner er uendret. Én ny WebP er opprettet, som angitt ovenfor.

Artefakter utenfor repoet: `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase53b3/editorial/`, med `browser.json`, `extra.json`, åtte `editorial-<bredde>-<preferanse>.png`, fire `page-<bredde>.png`, Lighthouse JSON/HTML for begge profiler og `after-summary.json`. Den første iterasjonens målinger finnes i overordnet mappe og er ikke forvekslet med sluttresultatene.

## 11. Gjenstående forhold og forhåndsvisning

Ingen nye blokkerende feil funnet. Kjente ikke-blokkerende forhold: lokal handshake HTTP 400, eksisterende PDF-forhåndshenting og nevnte automatiske navigasjonskontrollpunkter. Fysisk enhet, fysisk skjermleser og produksjon er ikke testet. Effekt på SEO og konvertering kan først måles etter en separat godkjent publisering.

Lokal forhåndsvisning: `http://127.0.0.1:3040/blogg/gratis-timeliste-mal`.

Ingen commit, push eller deploy. Avventer eierens visuelle og redaksjonelle godkjenning.


## 12. Siste godkjenningsrunde — autentisk Timeliste-dokument

Dette tillegget beskriver den endelige implementeringen etter eierens siste forespørsel. Lighthouse-tabellen i seksjon 8 gjelder den foregående, godkjente mobilbildeversjonen; ingen ny Lighthouse-score er målt etter dokumenttillegget. Den nye bildemengden og sluttkontrollene er oppgitt separat nedenfor.

### Bilde og behandling

Det nøyaktig forespurte bildet finnes: `public/images/product/timeliste/source/exported_timelist_with_1_entry.png`. Det ble visuelt inspisert før implementering: en utfylt Timeliste for Demo, prosjekt Renovering av leilighet, uke 47/2026, én arbeidsdag 18/11, 07:00–16:00, pause 1:00 og totalt 8:00. Dokumentet er et eksempel; ingen detaljer er endret eller rekonstruert.

| Fil | Dimensjoner | Filstørrelse |
| --- | --- | ---: |
| `public/images/product/timeliste/source/exported_timelist_with_1_entry.png` — uendret original | 926 × 583 | 49 042 B |
| `public/images/product/timeliste/optimized/jobbleder-blog-timelist-example-dd471883399a.webp` — ny lossless WebP | 926 × 583 | 22 962 B |

Originalens SHA-256: `e32ccf009e138484050d0d412c925d423d78372f14ddfa7966aa0a7b6aa237e8`. Avledningen er laget med eksisterende Sharp (`lossless: true`, effort 6), uten beskjæring, skalering eller ny avhengighet. Dekodede RGBA-piksler ble sammenlignet og er identiske. Besparelse: 26 080 B, omtrent 53 %. Hele dokumentet, inklusive Jobbleder-merket, er bevart.

### Layout, innhold og inspeksjon

Den eksisterende overskriften «Hva inneholder en god timeliste?», hele forklaringen og alle sju punkter er bevart ordrett i innholdsdataene. En opt-in `timelistContents`-blokk grupperer dem uten å påvirke andre blogginnlegg.

- Desktop fra 768 px: dokument til venstre, tekst og punktliste til høyre, med 32 px mellomrom og vertikal balanse. Dokumentet vises ca. 360–386 px bredt i testene.
- Mobil: overskrift, forklaring og liste først i både DOM- og visuell rekkefølge, deretter dokumentet. Ingen skjult eller duplisert tekst.
- Next.js Image med eksplisitt 926 × 583, `height: auto`, `loading="lazy"` og sizes som reserverer oppsettet. Eksisterende tapsfri WebP serveres direkte (`unoptimized`) for å bevare dokumenttekst og unngå dobbel komprimering.
- Alt: «Timeliste opprettet i Jobbleder for Demo, med én arbeidsdag, arbeidsbeskrivelse og totalt åtte timer».
- Bildetekst: «Eksempel på en timeliste opprettet i Jobbleder. Dette er et utfylt dokument, ikke den tomme PDF-malen.»
- Separat lenke: «Åpne timelisteeksemplet i full størrelse» åpner den nøyaktige originalen. Ingen ny reklame-CTA eller ekstra kampanjeboks.

En vanlig fullbildelenke følger det allerede etablerte mønsteret og gir tilgang til nettleserzoom. I selve artikkelen er dokumentstrukturen tydelig; små dokumentdetaljer kan inspiseres i originalen. Ingen ramme, skygge eller dekorasjon er lagt på dokumentet.

### Endelig QA

TypeScript (`npx.cmd tsc --noEmit`), full ESLint (`npm.cmd run lint`) og produksjonsbuild (`npm.cmd run build`) ble kjørt på nytt og bestod med exit 0. Build: 55 statiske sider, kun eksisterende Node DEP0205-varsler. `git diff --check` bestod.

| Bredde | Lys / mørk preferanse | Rekkefølge | Overflow | CLS | axe-brudd |
| --- | --- | --- | --- | ---: | ---: |
| 375 px | Begge bestått | Tekst/liste før dokument | Ingen | 0 | 0 |
| 768 px | Begge bestått | Dokument venstre, tekst høyre | Ingen | 0 | 0 |
| 1280 px | Begge bestått | Dokument venstre, tekst høyre | Ingen | 0 | 0 |
| 1440 px | Begge bestått | Dokument venstre, tekst høyre | Ingen | 0 | 0 |

Chrome/Puppeteer mot siste lokale produksjonsbuild. Alle åtte tilfeller dekodet dokumentet i naturlig størrelse 926 × 583, bekreftet riktig forhold og lazy-attributt, og aktiverte fullbildelenken med Enter. Lenken har synlig 3 px fokus. Representative mobil-/nettbrettskjermbilder ble visuelt inspisert. axe-scope er hele siden, WCAG A/AA til og med 2.2 samt best practice. Automatiske incomplete-punkter rundt dekorative piler/eksisterende navigasjon, og avgrensning mot fysisk skjermlesertest, gjelder fortsatt som beskrevet i seksjon 7.

For hver bredde/tema-kombinasjon ble kun den nye innholdsseksjonen erstattet med dens tre opprinnelige HTML-elementer i en klonet DOM. Deretter var hele `main` identisk med den ferske førmålingen av den godkjente artikkelen. Det bekrefter at mobilseksjonen, manuell veiledning, nedlastinger og relaterte guider er uendret. Title, description, canonical, H1 og alle JSON-LD-objekter ble også sammenlignet og er identiske i alle åtte tilfeller.

Alle 17 andre blogginnlegg og Timeliste-produktsiden ble hentet på nytt med identisk `main` mot førmålingen. Begge eksisterende PDF-er ble testet direkte på nytt: HTTP 200, `%PDF-`, henholdsvis 339 211 B og 334 286 B. Ingen JavaScript-sideunntak ble registrert. Ny bildemengde ved innlasting: 22 962 B pluss HTTP-overføringskostnad; originalen på 49 042 B åpnes bare via fullbildelenken. Ingen nye ytelsesscorer påstås.

Tillegget endrer bare bloggrendereren, målartikkelens gruppering, de to nye TimelistContents-filene, den ene nye WebP-en og denne rapporten. TimelistComparison-komponenten og dens CSS er urørt i denne siste runden. Samlet filliste for hele den lokale Phase 5.3B.3 finnes i seksjon 10.

Sluttartefakter: `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase53b3/final-document/` med `before.json`, `files-before.json`, `browser.json` og åtte `contents-<bredde>-<preferanse>.png`.

Ingen nye blokkerende forhold funnet. Ingen commit, push eller deploy. Lokal URL for endelig eiergodkjenning: `http://127.0.0.1:3040/blogg/gratis-timeliste-mal`.

**READY FOR OWNER REVIEW**