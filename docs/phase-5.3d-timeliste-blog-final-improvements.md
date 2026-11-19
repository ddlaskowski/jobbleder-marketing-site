# Phase 5.3D — Final Timeliste blog improvements

19. november 2026. Lokal implementering. Ingen commit, push eller deploy.

## 1. Repository og godkjent omfang

Før implementering ble `git status`, arbeidsdiff, staged diff og HEAD kontrollert. Eneste eksisterende lokale endring var den utrackede `docs/phase-5.3c-timeliste-ecosystem-final-audit.md`. Ingen produksjonskode var endret under auditten. HEAD var og er `069de6ad0df5929acf381a03d3532feab1c69106`.

Hele Phase 5.3C-rapporten ble lest. De tre uttrykkelig anbefalte artiklene i F1–F3 er:

1. `/blogg/timeliste-og-faktura`
2. `/blogg/effektiv-timeliste`
3. `/blogg/timeliste-for-handverkere`

Kun disse tre artikkelkroppene er endret. Ingen F4-/kategori-/relaterte-kort-endringer er tatt med. Auditrapporten er bevart byte-identisk, med SHA-256 `9c10c6cc015adc69d39be800effc88327bafac456be2e9b1f7565e912e7bf00b`.

En fersk nettleserbaseline ble lagret for alle 18 blogginnlegg, de fem Timeliste-landingssidene og hjemmesiden før implementeringen: 24 ruter. Filbaseline omfatter 300 sporede filer.

## 2. Før / etter per artikkel

| Artikkel | Før | Etter |
| --- | --- | --- |
| `effektiv-timeliste` | Generelle råd om daglig føring og hukommelse, uten en konkret arbeidsdag; generisk kampanjeboks/app-knapp | Tydelige felt og et HTML-eksempel: 08:00–16:00 minus 30 minutter ubetalt pause = 7 timer 30 minutter. Tre praktiske steg for registrering, utvalg/import og dokumentkontroll, samt relevante videreveier. Ingen ekstra skjermbilde nødvendig. |
| `timeliste-for-handverkere` | Generelle fordeler, liknende hukommelsesråd og ansattlenke | Oppgavebeskrivelser fra et oppdrag, ekte ekstra/KM-registrering, tydelig skille mellom registrering og ferdig dokument, og gjennomgang av prosjekt/arbeidernavn før PDF/faktura. Eksisterende ansattlenke er beholdt i riktig sammenheng. |
| `timeliste-og-faktura` | Kort generell feltliste/prosjektlenke; ingen beskrivelse av konverteringen | Fem tydelig adskilte brukerhandlinger, autentisk forhåndsvisning av fire fakturakategorier, mengder fra akkurat det eksemplet, kontroll av kunde/satser/MVA og manuell sending. Prosjektlenken beholdes og instruksjons-/produktlenker tilføyes. |

Søkeintensjonene er fortsatt henholdsvis daglige rutiner, dokumentasjon av håndverkeroppdrag og praktisk sammenheng mellom timeliste/faktura. Publiseringsdatoer er ikke endret. Ingen ny salgsside, popup eller kampanjeboks.

De gamle generiske reklameboksene og app-knappene i artikkelkroppene er erstattet med kontekstuelle, understrekede tekstlenker. Direkte app-innlogging finnes fortsatt i den uendrede toppmenyen. Ingen fungerende lokal guide-/produktlenke fra de tre gamle artikkelkroppene er fjernet.

## 3. Produktflyt og faktakontroll

Konverteringsartikkelen forklarer hele kjeden:

1. **Registrer arbeidet:** dato, klokkeslett, pause og beskrivelse; eventuell KM/ekstra; brukeren kontrollerer og velger Lagre registrering.
2. **Velg og importer:** lagrede oppføringer markeres og importeres; prosjekt, arbeidernavn og eventuell kunde kontrolleres. Manuell timelisteoppretting er også mulig.
3. **Kontroller og lagre timelisten:** se gjennom dager/rader/summer. PDF-eksport er et eget valg, ikke et krav om at PDF først må brukes som importfil.
4. **Opprett faktura:** åpne den lagrede timelisten i Dokumenter og velg Opprett faktura.
5. **Kontroller fakturaen:** kunde, prosjekt, datoer, antall, enhetspriser, MVA og summer; generer PDF når dokumentet er klart, og send den selv.

De to øvrige artiklene forklarer sine relevante registrerings-/dokumentsteg og lenker til den detaljerte konverteringsforklaringen. Ingen automatisk import, automatisk dokumentoppretting eller automatisk sending loves. Arbeidernavnet er dokumentdata, ikke en ansattkonto. Ekstra-markering presenteres ikke som overtids-/lønnsberegning.

Konverteringseksemplet viser **Timeliste 265 / Demo**, med 9 timer 30 minutter vanlige timer, 2 ekstra timer, 45 vanlige KM og 50 ekstra KM. Verdiene er kontrollert mot det faktiske bildet. Det er ikke hovedsidens andre dokumenteksempel og fremstilles ikke som resultatet av håndverkerartikkelens separate enkeltregistrering.

Dokumentoppretting og konvertering beskrives som Free-funksjoner. Fakturaartikkelen presiserer Jobbleder-vannmerke i Free-PDF og muligheten for å fjerne merkingen/bruke firmalogo i Premium. Ingen nye priser, integrasjoner, offlinefunksjoner, native app, autosave eller ansatt-/lønnssystem er introdusert.

Kontrollen bygger på etablerte eierbekreftelser, de synlige grensesnittene og gjeldende instruksjoner. Det er ikke kjørt autentiserte backend-/fakturasendingshandlinger.

## 4. Autentiske bilder og presentasjon

Begge originalene ble visuelt inspisert før bruk. Ingen kildebilder er endret, og ingen nye derivater eller avhengigheter er laget.

| Artikkel | Eksakt gjenbrukt WebP | Original PNG | Dimensjoner | WebP / PNG |
| --- | --- | --- | --- | ---: |
| Håndverkere | `public/images/product/mobile/optimized/registration_extra_km_save_mobile-4a67065d08f6.webp` | `public/images/product/mobile/source/registration_extra_km_save_mobile.png` | 332 × 720 | 44 152 / 66 153 B |
| Timeliste/faktura | `public/images/product/mobile/optimized/timelist_invoice_summary_mobile-f4b16dce374e.webp` | `public/images/product/mobile/source/timelist_invoice_summary_mobile.png` | 332 × 720 | 40 904 / 69 797 B |

Håndverkerbildet viser Bortkjøring av avfall, 08:00–10:00, pause 0, KM 50 og Ekstra valgt før lagring. Fakturabildet viser linjeforhåndsvisningen i dokumentgrensesnittet og betegnes uttrykkelig som dette, ikke som en eksportert PDF.

Ny opt-in `BlogProductExample` gjenbruker `instructionMobileMedia.json`. Next.js Image har ekte dimensjoner, passende sizes, lazy loading og norsk alternativtekst. Eksisterende WebP serveres direkte (`unoptimized`), uten dobbel lossy komprimering. Ingen nye bildeforespørsler i effektivitetsartikkelen.

Tekst og bilde står ved siden av hverandre fra 768 px, med bilde på 248 px. På mobil står teksten over bildet, som vises inntil 292 px bredt. Hele skjermbildet beholdes; originalen kan åpnes via en beskrivende lenke. Detaljer som er viktige for forståelsen står også i HTML-teksten.

Begge derivater og begge originaler ble hentet med HTTP 200 og SHA-256 sammenlignet med lokale filer. Nye bildebytes ved full gjennomgang er 44 152 B / 40 904 B pluss HTTP-overføringskostnad. Det er ingen ny bildevariant eller bildeduplisering i repoet.

## 5. Kontekstuelle internlenker

| Fra | Destinasjoner i artikkelkroppen |
| --- | --- |
| Effektiv timeliste | `/timeliste-uke` (beholdt); `/timeliste-mal#registrer-pa-mobil`; `/instruksjoner#importer-arbeidsokter-til-timeliste`; `/blogg/timeliste-og-faktura`; `/blogg/timeliste-for-handverkere` |
| Håndverkere | `/instruksjoner#legg-til-en-arbeidsokt`; `/timeliste-prosjekt`; `/timeliste-ansatt` (beholdt); `/blogg/timeliste-og-faktura`; `/timeliste-mal#registrer-pa-mobil` |
| Timeliste/faktura | `/instruksjoner#timeliste-til-faktura`; `/timeliste-prosjekt` (beholdt); `/timeliste-mal`; `/fakturaprogram-gratis` |

Etikettene forklarer oppgaven, for eksempel «Følg veiledningen for å importere registreringer» og «Følg knappene i veiledningen Timeliste → Faktura». Tekstlenkene er en del av leserens forklaring, ikke flere konkurrerende kampanjeknapper. Alle 11 unike lokale mål returnerte HTTP 200. Fragment-ID-er finnes i målsidenes HTML.

## 6. SEO og beskyttet innhold

For alle tre artikler er URL, title, meta description, H1, canonical, sammendrag, tagger, kategori, dato og øvrige metadata beholdt. Article-, Organization- og WebSite-JSON-LD er identiske med førmålingen i alle 24 responsive tilfeller. Ingen ny FAQ-markup, redirects, noindex, ruter eller sitemap-endringer.

| URL | Bevart metadata title, før globalt Jobbleder-suffiks |
| --- | --- |
| `/blogg/effektiv-timeliste` | Hvordan føre timelister effektivt |
| `/blogg/timeliste-for-handverkere` | Timeliste for håndverkere – hvorfor gode rutiner er viktige |
| `/blogg/timeliste-og-faktura` | Timeliste og faktura – slik henger de sammen |

Fakturaartikkelen forblir en veiledning om dokumentflyten og blir ikke en konkurrerende Faktura-landingsside. Genererte relaterte moduler, navigasjon og gratis-PDF-artikkelen er ikke redigert.

Spesifikke bevaringskontroller:

- Alle 18 metadataobjekter er uendret ved semantisk kildekodesammenligning.
- Bare de tre tillatte `blocks`-arrayene er endret. De øvrige 15 artiklene er uendret som innholdsobjekter.
- Hele kildeobjektet for `gratis-timeliste-mal` er i tillegg byte-identisk som rå kildekodetekst.
- Gratis-PDF-artikkelens komplette `main`, metadata, H1, schema, lenker og artikkelblokker er identiske med nettleserbaselinen etter build. Eksisterende nedlastings-URL-er og lokal PDF-fil er dermed bevart; eksternt PDF-endepunkt er ikke lastet ned på nytt i denne fasen.
- Begge tidligere PDF-bloggkomponenter og deres CSS er urørt. Auditrapporten fra 5.3C er uendret med kontrollert hash.

## 7. Testing

Lokal Next.js-produksjonsbuild på `http://127.0.0.1:3040`, installert Chrome via Puppeteer. Fire bredder × lys/mørk OS-preferanse × tre artikler = **24 tilfeller**. Den eksisterende lyse bloggoverflaten beholdes også i mørk OS-preferanse; ingen ny temautforming er introdusert.

| Artikkel | 375 px | 768 px | 1280 px | 1440 px |
| --- | --- | --- | --- | --- |
| Effektiv timeliste | Begge preferanser bestått | Begge bestått | Begge bestått | Begge bestått |
| Håndverkere | Begge preferanser bestått | Begge bestått | Begge bestått | Begge bestått |
| Timeliste/faktura | Begge preferanser bestått | Begge bestått | Begge bestått | Begge bestått |

Alle 24 tilfeller: HTTP 200, ingen horisontal overflow, målt CLS 0 under innlasting/rulling og korrekt H1→H2→H3-hierarki. Begge skjermbilder dekodes med naturlige dimensjoner og uten forvrengning. Lazy-attributt og bildeproporsjoner er kontrollert.

axe-core på hele siden, WCAG A/AA til og med 2.2 og best practice: **0 registrerte brudd i alle 24 tilfeller**. Nye artikkellenker og fullbildelenker har synlig 3 px tastaturfokus. Fullbildelenken er aktivert med Enter i alle 16 tilfeller med bilde, og åpner riktig original PNG.

Automatiske incomplete-punkter gjelder eksisterende brødsmuler og enkelte eksisterende toppmenylenker når sticky-headeren ligger over innholdet under målingen. Disse er ikke erklært automatisk beståtte kontrastkontroller. Ingen incomplete-punkter ble registrert for nye artikkellenker eller bildepresentasjonen. Representative fullsides-/medieopptak ble visuelt inspisert.

Ingen nye JavaScript-sideunntak eller andre feilresponser. Den kjente lokale `/api/handshake` HTTP 400 finnes fortsatt og er eneste tillatte feilrespons i testene. Analytics er ikke endret, og produksjon er ikke testet i denne lokale implementeringsfasen.

### Tekniske kontroller og regresjon

- `npx.cmd tsc --noEmit`: bestått, exit 0.
- Full `npm.cmd run lint`: bestått, exit 0.
- `npm.cmd run build`: bestått, exit 0; endelig build etter ordlydskorrektur genererte 55 statiske sider og bestod TypeScript.
- Kjent Node DEP0205-varsel om `module.register`; ingen buildfeil. Git varsler om fremtidig LF→CRLF ved Git-skriving; ingen Git-skriving er utført.
- `git diff --check`: bestått.
- **21 regresjonsruter:** 15 urørte blogginnlegg, fem Timeliste-landingssider og hjemmesiden. Komplett `main`, metadata, H1, schema, lenkeliste og artikkelblokker er identiske med førmålingen.
- 11 lokale artikkel-lenkemål og fire bilde-/originalressurser: HTTP 200; bildeinnholdet hash-kontrollert.

Det er ikke kjørt Lighthouse, fysisk skjermleser eller fysisk mobiltest i denne fasen. Ingen ytelsesscore eller produksjonsmåling påstås.

## 8. Eksakte filer i denne fasen

1. `content/blogPosts.ts` — tre artikkelkropper oppdatert; nye typer for opt-in medieeksempel, nummererte steg og tekstlenker. Alle metadata/andre artikler beholdt.
2. `app/blogg/[slug]/page.tsx` — tre additive rendergrener, eksisterende rendergrener og metadatagenerator uendret.
3. `components/blog/BlogProductExample.tsx` — ny gjenbrukbar presentasjon av de to autentiske bildeeksemplene.
4. `components/blog/blogProductExample.module.css` — avgrenset layout, lenker og fokus for de nye blokkene.
5. `docs/phase-5.3d-timeliste-blog-final-improvements.md` — denne rapporten.

Den allerede utrackede Phase 5.3C-rapporten er bevart, men er ikke opprettet eller endret av denne fasen. Av de 300 tidligere sporede filene er bare blogginnhold og bloggrenderer endret. Ingen nye/endrede bildefiler, avhengigheter, SEO-konfigurasjoner eller produkt-/instruksjonssider.

Testartefakter utenfor repoet: `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase53d/`, inklusive `before.json`, `files-before.json`, `browser.json`, `preservation.json`, kildekodebackup og skjermbilder. Etter-kildekoden er autoritativ for den lille siste ordlydskorrekturen; testene er kjørt mot den endelige builden.

## 9. Gjenstående forhold og lokal visning

Ingen nye blokkerende feil funnet. Lokalt analytics-svar, verktøyets eksisterende navigasjonskontrollpunkter og begrensning til nettleseremulering er dokumentert ovenfor. Den delte ruten kan få en liten ekstra CSS-overføringskostnad selv om de øvrige artiklenes HTML og kildeinnhold er uendret; det hevdes ikke at alle andre rutepayloads er byte-identiske.

F4/F5 og øvrige valgfrie funn fra Phase 5.3C er bevisst ikke implementert: bare de tre bestilte artiklene inngår. Effekten på søk og konvertering må måles etter en separat godkjent publisering; ingen effekt garanteres.

- [Effektiv timeliste](http://127.0.0.1:3040/blogg/effektiv-timeliste)
- [Timeliste for håndverkere](http://127.0.0.1:3040/blogg/timeliste-for-handverkere)
- [Timeliste og faktura](http://127.0.0.1:3040/blogg/timeliste-og-faktura)

Ingen commit, push eller deploy. Avventer eiergjennomgang.

**READY FOR OWNER REVIEW**
