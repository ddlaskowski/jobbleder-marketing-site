# Phase 7C — Authentic Tilbud example & practical guide

20. november 2026. Lokal implementering. **READY FOR OWNER REVIEW**. Ingen commit, push eller deploy.

## 1. Sammendrag

/tilbud-eksempel viser nå hele det autentiske A4-dokumentet fra Tilbud 29 og forklarer de faktiske opplysningene. /lage-tilbud beskriver åtte konkrete steg fra kundevalg til manuelt delt PDF, med ett relevant skjermbilde og et eksisterende portrettopptak for små skjermer.

Sidene har forskjellige oppgaver: den første forklarer resultatet, den andre prosessen. Pris, MVA og datoer følger samme demonstrasjon: netto 12 000 kroner, eksempel-MVA 25 % / 3 000 kroner, total 15 000 kroner, utstedt 18.11.2026 og gyldig til 02.12.2026. Ingen antatte arealer, timer eller materialvilkår er lagt til som om de stod i dokumentet.

Den godkjente mørke/navy SEO-utformingen, eksisterende preferansestøtte, hero/H1, navigasjon, footer og FAQ er beholdt. Hovedproduktet /tilbud-mal er ikke endret. Phase 7B er bevart, og Phase 7D er ikke startet.

## 2. Eksakte filer i Phase 7C

| Fil | Status | Endring |
| --- | --- | --- |
| content/seoPages.ts | Endret | Nytt valgfritt offerExample-felt i SEOSection og nytt sections-innhold bare for lage-tilbud og tilbud-eksempel. Metadata, intro, bullets og faqs er uendret. |
| app/(seo)/[slug]/page.tsx | Endret | Importerer OfferFigure og rendrer den når den aktuelle seksjonen har offerExample. To tilleggslinjer; metadatagenerering og andre grener er uendret. |
| components/editorial/OfferFigure.tsx | Opprettet | Avgrenset serverkomponent for autentisk dokument/skjema; eksisterende manifester og Next.js Image, picture og originale PNG-lenker. |
| components/editorial/offerFigure.module.css | Opprettet | Scoped figur-/bildetekst-/fokusregler etter eksisterende InvoiceFigure-mønster. Ingen global stil- eller temakonvertering. |
| docs/phase-7c-tilbud-example-practical-guide-report.md | Opprettet | Denne rapporten. |

Ved start var content/blogPosts.ts allerede endret av Phase 7B, og Phase 7A-/7B-rapportene var utrackede. De er bevart. Alle bloggartikler er byte-/objektidentiske med Phase 7C-baseline; bare route-rendereren og seoPages.ts er endret blant de 311 sporede baselinefilene. HEAD er fortsatt 0c7b0785bcd638c9d1d87475f47bedb445e4b5b6. Ingen eksisterende figur-, produkt-, FAQ-, nav-, footer-, robots- eller sitemapfil er endret. Ingen endring i Jobbleder-apprepositoryet, dependency eller bilde.

## 3. Begge oppdaterte sider

### /tilbud-eksempel — resultat og dokumentforståelse

Åtte innholdsseksjoner etter den eksisterende introduksjonen/klyngenavigasjonen:

1. Tilbud 29 som ferdig dokument, med hele A4-bildet og en tydelig avgrensing mot blank nedlastingsmal.
2. Kunde og prosjekt: Demo Company og Eksempel Eiendom står i PDF-en; Renovering av leilighet vises i skjemaet, ikke som eget PDF-felt.
3. Arbeidsbeskrivelse: Legging av parkett; ingen oppdiktede rom, arealer eller materialklausuler.
4. Antall 1 × enhetspris 12 000 = 12 000 netto; antallet omtales ikke som kvadratmeter eller timer.
5. Eksempelsats 25 % gir 3 000 MVA og 15 000 totalt; satsen er ikke universell.
6. Tilbudsdato 18.11.2026 og gyldighet 02.12.2026; ikke oppstart-/ferdigstillelsesdatoer.
7. Praktiske avklaringer om materialer, forberedelser og ekstraarbeid, eksplisitt skilt fra det som faktisk står i bildet.
8. Kundens svar og neste dokument: kvalifisert avtaleomtale, manuell dialog, brukerstyrte konverteringer og lenke til den fullførte workflow-artikkelen.

Dokumentet vises med originalt forhold 506:720 og maks 506 CSS-piksler. Ingen beskjæring, rammeeffekter eller kunstig oppskalering. Den blanke nedre delen av den autentiske A4-siden er beholdt. Fullstørrelseslenken åpner den eksisterende originale PNG-en.

### /lage-tilbud — forberedelse og handling

Åtte nummererte H2-steg: velg kunde/prosjekt; beskriv arbeid; angi antall/enhetspris; avklar materialer/avgrensinger; kontroller MVA; sett datoer/gyldighet; gjennomgå dokumentet; generer PDF og del manuelt. Et avsluttende kort avsnitt skiller aksept/avtale fra dokumentarbeidet og viser videre til Phase 7B-artikkelen.

Skjemaet står ved arbeidsbeskrivelsen, der feltene er relevante. På desktop vises eksisterende 1084 × 342-utklipp med kunde, prosjekt, datoer, linje og summer. Under 640 px velges det eksisterende autentiske mobilnettleserbildet på 332 × 720; dette gir vesentlig større felter enn å presse det brede bildet inn i mobilkolonnen. Bildeteksten opplyser at MVA-verdien, oppsummeringen og lagreknappene ikke er synlige i portrettutsnittet.

Ingen ny pris, annen mengde eller motstridende dato er introdusert. Material-/underlagsråd beskrives som avklaringer for eget oppdrag, ikke som allerede avtalte vilkår i Tilbud 29. Appen beskrives som nettleserbasert, ikke en native mobilapp.

### Kontekstlenker

| Fra | Kontekstuelle mål |
| --- | --- |
| /tilbud-eksempel | /lage-tilbud for eget tilbud; /blogg/fra-tilbud-til-kontrakt-og-faktura for neste dokument; Forbrukerrådets eksisterende kontraktsråd. |
| /lage-tilbud | /tilbud-eksempel ved gjennomgang; /instruksjoner#opprett-tilbud og /tilbud-mal ved PDF/oppretting; /blogg/tilbud-vs-kontrakt ved aksept. |

De eksisterende gyldige nav-/cluster-/related-lenkene og appknappen er bevart. Det er ikke lagt en ny app-CTA i hver seksjon eller plassert alle kontekstlenker på begge sider. Den ferdige workflow-artikkelen gjenbrukes uten omskriving.

## 4. Autentiske bilder og håndtering

Følgende faktiske filer er inspisert visuelt og/eller med bildemetadata. Alle eksisterte før fasen; ingen nye eller endrede bildefiler:

| Eksakt filsti | Piksler | Byte | Bruk |
| --- | --- | --- | --- |
| public/images/product/tilbud/source/exported_tilbud_A4.png | 506 × 720 | 39992 | Original dokumentvisning i full størrelse |
| public/images/product/tilbud/optimized/jobbleder-offer-pdf-085c0b3a1244.webp | 506 × 720 | 20340 | Hel dokumentfigur |
| public/images/product/tilbud/source/new_offer_form.png | 1280 × 720 | 112403 | Original desktopskjerm i full størrelse |
| public/images/product/tilbud/optimized/jobbleder-offer-editor-efed9bd605e5.webp | 1084 × 342 | 32496 | Desktopfigur, eksisterende utsnitt |
| public/images/product/mobile/source/new_offer_document_edit_mobile.png | 332 × 720 | 61585 | Originalt mobilnettleseropptak i full størrelse |
| public/images/product/mobile/optimized/new_offer_document_edit_mobile-3e7a019b8d5e.webp | 332 × 720 | 42388 | Mobilfigur, eksisterende portrett-WebP |

De tre PNG-kildenes SHA-256 samsvarer med de eksisterende manifestene. WebP-derivatene er gjenbrukt uendret. A5-alternativet er ikke brukt; hele A4-siden gir den etterspurte dokumentvisningen uten å duplisere bilder.

Next.js Image bruker eksplisitte dimensjoner, loading=lazy og height:auto. Eksisterende optimaliserte WebP-er leveres direkte med unoptimized, uten ny konverteringsrunde. Dokumentet har sizes; skjemaet bruker picture/source med egne dimensjoner for det eksisterende mobilopptaket. Ingen nytt klient-JavaScript eller lightbox-avhengighet er innført. Bildeforstørrelsen er vanlig semantisk lenke til riktig original, med synlig beskrivende tekst og 3 px focus-visible. Mobil-/desktop-lenken til skjemaet følger valgt variant; skjult alternativ er display:none.

## 5. Produktnøyaktighet

Grunnlag: eierbekreftet funksjonalitet i oppdraget, Phase 7A/7B, faktiske dokument-/skjemabilder, eksisterende offerProductMedia/instructionMobileMedia og gjeldende #opprett-tilbud-instruksjon. Ingen autentisert apptransaksjon er utført.

- Kunde, prosjekt, Utstedt/Gyldig til, beskrivelser, antall, enhetspris, MVA og oppsummering følger de eksisterende opptakene. Ikke alle felter følger med som synlige PDF-felter; dette er forklart.
- Offer creation/PDF skjer i appen. Siden tilbyr et bilde av et utfylt dokument, ikke blank Tilbud-PDF eller Word-mal.
- Lagre/Generer følger eksisterende instruksjon. Kunden får dokumentet ved manuell deling; ingen automatisk sending eller akseptsporing loves.
- Tilbud → Faktura og Tilbud → Kontrakt → Faktura er alternativer brukeren initierer. Kontrakten kan redigeres selvstendig, og hvert nytt dokument må kontrolleres.
- Free inkluderer oppretting og PDF; Free-merking og Premiums logo-/merkingsforskjell er korrekt omtalt. Ingen ny pris eller funksjonsbegrensning.
- Ingen elektronisk signering, automatisk påminnelse, portal, betalings-/regnskapsintegrasjon eller garanti om lovmessighet er introdusert.

## 6. Juridisk og redaksjonell verifikasjon

Forbrukerrådets [Bruk av håndverker](https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/) ble åpnet og lest på nytt 20.11.2026. Kilden støtter anbefalingen om skriftlig kontrakt for å dokumentere enigheten. Den er lenket der rådet omtales. Dette rådets betydning er skilt fra om en bindende avtale allerede kan være inngått.

Ingen nye detaljerte juridiske regler er lagt inn. Phase 7B dokumenterte HTTP 405 ved direkte oppslag i Avtaleloven/Håndverkertjenesteloven; denne fasen fremstiller ikke full lovtekst som nyverifisert. Akseptomtalen følger den uttrykkelige, kvalifiserte oppdragsføringen: virkning avhenger av innhold, aksept, omstendigheter og gjeldende regler. Ingen universell signaturplikt eller påstand om at alle tilbud alltid binder. Forbruker og B2B er skilt. Praktiske avklaringer om materialer, ekstraarbeid, datoer og pris er ikke kalt universelle lovkrav.

Det er viktig å skille disse tre lagene: faktiske data i PDF-en, faktiske felter i skjermbildene og råd til brukerens eget tilbud. Begge sidene markerer dette løpende. Ingen 20 m²-verdi fra Phase 7B-artikkelens selvstendige illustrasjon er flyttet inn i Tilbud 29, som ikke oppgir areal.

## 7. SEO og bevaring av tidligere arbeid

| Element | /tilbud-eksempel | /lage-tilbud |
| --- | --- | --- |
| Tittel før og etter | Tilbud eksempel – se hvordan et godt tilbud kan se ut \| Jobbleder | Lage tilbud – hvordan skrive et godt tilbud \| Jobbleder |
| Meta description før og etter | Se et tilbud eksempel og lær hvordan et ryddig og profesjonelt tilbud kan bygges opp for små bedrifter og håndverkere. | Lær hvordan du lager et ryddig og profesjonelt tilbud. Enkelt for håndverkere og små bedrifter i Norge. |
| H1 før og etter | Tilbud eksempel | Lage tilbud |
| Canonical før og etter | https://www.jobbleder.no/tilbud-eksempel | https://www.jobbleder.no/lage-tilbud |
| FAQPage / synlige FAQ | Tre eksisterende spørsmål/svar bevart eksakt | Tre eksisterende spørsmål/svar bevart eksakt |
| Indeksering | Uendret; ingen noindex eller redirect innført | Uendret; ingen noindex eller redirect innført |

Alle SEOPage-felt utenom sections er eksakt like i alle 17 innholdsobjekter. Bare lage-tilbud og tilbud-eksempel har endret sections. Metadata-, H1-, robots- og hele JSON-LD-listen er sammenlignet før/etter i alle 16 detaljtilfeller: identiske. Headings følger H1 → H2 og H3 i de eksisterende relaterte kortene; én H1 per side. FAQ-arrayene er uendrede, og både synlig FAQ og schema rendres fra samme kilde.

Alle 18 bloggartikler, inkludert Phase 7B, er eksakt like Phase 7C-baseline. /tilbud-mal-record, produktkomponenter, media-manifester og alle øvrige SEO-records er uendret. De historiske Phase 7A-/7B-rapportene er bevart.

Fersk lokal før/etter-kontroll omfatter elleve ruter. Ni er ikke mål for denne fasen og har identisk hovedtekst, lenkeliste, H1, metadata og schema:

| Uendret rute | Resultat |
| --- | --- |
| / | 200; identisk innhold, lenker og SEO/schema |
| /tilbud-mal | 200; identisk innhold, lenker og SEO/schema |
| /timeliste-mal | 200; identisk innhold, lenker og SEO/schema |
| /fakturaprogram-gratis | 200; identisk innhold, lenker og SEO/schema |
| /kontrakt-mal | 200; identisk innhold, lenker og SEO/schema |
| /blogg/feil-med-tilbud | 200; identisk innhold, lenker og SEO/schema |
| /blogg/tilbud-vs-kontrakt | 304, normal gjenvalidering av cache; identisk innhold, lenker og SEO/schema |
| /blogg/folle-opp-tilbud | 200; identisk innhold, lenker og SEO/schema |
| /blogg/fra-tilbud-til-kontrakt-og-faktura | 304, normal gjenvalidering av cache; identisk innhold, lenker og SEO/schema |

De to målsidene har forventede innholds-/bildelenkeendringer og bevart SEO/schema. De 16 cache-deaktiverte detaljtilfellene svarte 200; enkelte etterfølgende regresjonsnavigasjoner brukte normal 304-gjenvalidering. Ingen eksisterende download-URL, canonical-/robots-/sitemapinfrastruktur eller gyldig internlenke er fjernet.

## 8. Responsivitet og tilgjengelighet

Chrome headless mot fersk lokal produksjonsbygning på http://127.0.0.1:3041. Fire bredder × light/dark × to sider = 16 tilfeller, med prefers-reduced-motion:reduce.

| Side | 375 px | 768 px | 1280 px | 1440 px |
| --- | --- | --- | --- | --- |
| /tilbud-eksempel | Light + dark: kontrollert | Light + dark: kontrollert | Light + dark: kontrollert | Light + dark: kontrollert |
| /lage-tilbud | Light + dark: kontrollert | Light + dark: kontrollert | Light + dark: kontrollert | Light + dark: kontrollert |

Alle 16: ingen horisontal overflow, alle synlige bilder dekodet, korrekt variant og naturlige proporsjoner, ingen pageerror, observerte layoutskift CLS 0 og uendret SEO-identitet. Hver side har én ny figur. Originalbildene ble aktivert med Enter i 16 tilfeller; 40 kontekstlenker ble aktivert med tastatur. I første kjøring traff 55 av 56 registrerte navigasjoner riktig mål-URL. Én måling av instruksjonsankeret ved 375/light registrerte fortsatt forrige URL. Den er beholdt som et avvik i browser.json, ikke omskrevet til bestått. Tre separate etterkontroller med eksplisitt venting på mål-URL og åpen instruksjon traff alle /instruksjoner#opprett-tilbud, åpnet riktig details og flyttet fokus til SUMMARY. Ingen kodeendring var nødvendig for disse etterkontrollene; de ligger i anchor-retry.json. Alle 16 HTTP-kontrollerte lokale href-mål, inkludert originalbilder og anker-URL, svarte 200.

De tre FAQ-knappene på hver side ble åpnet med Enter og lukket med Space i hver størrelse/preferanse: 48 vellykkede sekvenser med aria-expanded og synlig 2 px fokus. Bildelenkene har 3 px fokus og beskrivende navn uten unødvendig ARIA. Alt-tekst beskriver faktisk dokument eller felter som er synlige i begge skjemavarianter. Mobilmenyen ble kontrollert med Enter/Space der den vises. Eksisterende Tab-navigasjon, nav-/footerlenker og redusert bevegelse er bevart.

### Faktisk bildevisning

| Side / bredde | Valgt kilde | Naturlig størrelse | Vist størrelse (CSS px) |
| --- | --- | --- | --- |
| /tilbud-eksempel / 375 | /images/product/tilbud/optimized/jobbleder-offer-pdf-085c0b3a1244.webp | 506 × 720 | 279 × 396.98 |
| /tilbud-eksempel / 768 | /images/product/tilbud/optimized/jobbleder-offer-pdf-085c0b3a1244.webp | 506 × 720 | 506 × 720 |
| /tilbud-eksempel / 1280 | /images/product/tilbud/optimized/jobbleder-offer-pdf-085c0b3a1244.webp | 506 × 720 | 506 × 720 |
| /tilbud-eksempel / 1440 | /images/product/tilbud/optimized/jobbleder-offer-pdf-085c0b3a1244.webp | 506 × 720 | 506 × 720 |
| /lage-tilbud / 375 | /images/product/mobile/optimized/new_offer_document_edit_mobile-3e7a019b8d5e.webp | 332 × 720 | 279 × 605.05 |
| /lage-tilbud / 768 | /images/product/tilbud/optimized/jobbleder-offer-editor-efed9bd605e5.webp | 1084 × 342 | 672 × 212 |
| /lage-tilbud / 1280 | /images/product/tilbud/optimized/jobbleder-offer-editor-efed9bd605e5.webp | 1084 × 342 | 720 × 227.16 |
| /lage-tilbud / 1440 | /images/product/tilbud/optimized/jobbleder-offer-editor-efed9bd605e5.webp | 1084 × 342 | 720 × 227.16 |

På 375 px er A4-forhåndsvisningen 279 px bred; originalen på 506 px er tilgjengelig for større visning og nettleserzoom. Teksten forklarer de sentrale feltene i HTML. Fra 768 px vises dokumentet i full naturlig bredde, ikke kunstig forstørret. Mobilskjemaet bruker portrett i stedet for et svært lavt breddeutsnitt. Bildeproposjoner er verifisert uten clipping, object-fit-beskjæring eller oppskalering av kilden.

### Automatisert og visuell kontroll

Axe-core med WCAG 2 A/AA, 2.1 AA, 2.2 AA og best-practice-tagger: **0 bekreftede violations i alle 16 tilfeller**. Som i Phase 7A finnes incomplete for kontrast på de eksisterende hake-tegnene i introduksjonslisten; ved 375 px også link-in-text-block på eksisterende brødsmule. Dette er ikke en automatisk sertifisering av disse områdene. De nye figurene/lenkene ga ingen slike funn. Visuell kontroll av representative mobil-/desktopbilder og de eksisterende fargereglene viste lesbar tekst, bilde og bildetekst med synlig fokus. Full skjermleser-/fysisk-enhetstest er ikke utført.

Dark/navy-utformingen er bevart. Ingen ny lysmodus eller temabryter er introdusert; eksisterende OS-preferanseatferd videreføres. Fullsidebilder for alle 16 tilfeller og JSON-bevis er lagret utenfor repositoryet i C:\Users\ddlas\.codex\visualizations\2026\11\18\01a1eebb-5858-7be1-82b1-491fd2f27970/phase7c/. Ingen Lighthouse-score påstås for disse endringene; ny Lighthouse var ikke del av oppdragets valideringskrav.

## 9. Tekniske kontroller og observasjoner

| Kontroll | Resultat |
| --- | --- |
| npx.cmd tsc --noEmit --incremental false | Bestått, exit 0 |
| npm.cmd run lint | Full ESLint bestått, exit 0 |
| npm.cmd run build | Bestått, exit 0; 55 statiske sider generert |
| git diff --check | Bestått, ingen whitespace-feil |
| Kilde-/regresjonskontroll | Bare to SEO-innholdsrecord endret; Phase 7B og hovedprodukt bevart |
| Originalbilder | Eksisterende SHA-256 i manifest samsvarer for alle tre PNG-kildene |

Bygget viste den eksisterende Node DEP0205-advarselen om module.register(). Ingen TypeScript-, lint- eller buildfeil. Git viser normal advarsel om LF/CRLF-konvertering ved senere Git-operasjoner; ingen generell omformatering er utført.

**Lokal analytics-observasjon:** nettleserprøven registrerte 18 HTTP 400-responser fra /api/handshake under navigasjonene. Ingen andre HTTP ≥400 eller JavaScript-pageerrors ble registrert i detaljtilfellene. Dette endepunktets lokale 400 er kjent fra tidligere faser; Tracker og API-koden er identisk med baseline. Den konkrete miljø-/nettverksårsaken er ikke fastslått her. Produksjonsanalytics er ikke testet på nytt, og lokal respons er ikke fremstilt som en produksjonsfeil. Ingen analyticsendring er gjort i dette innholdsoppdraget.

## 10. Gjenstående forhold og eiergjennomgang

- Dokumentets tilgjengelige kilde er 506 × 720. Den er beholdt hel og tilgjengelig i originalvisning; ingen oppdiktet høyoppløselig variant eller bildeforbedring er introdusert.
- Lokalt analytics-endepunkt ga den kjente 400-responsen; se §9. Dette er rapportert separat fra sidens funksjon og a11y-test.
- Detaljerte juridiske regler, faktisk innlogget PDF-generering og backendtransaksjoner er ikke testet eller påstått verifisert. Teksten holder seg til de avtalte produktfunksjonene, autentiske opptak og kvalifisert juridisk omtale.
- Eier bør visuelt godkjenne dokumentplassering, mobilskjema og tekst før eventuell separat release. Ingen ny skjermdump kreves for denne leveransen.

Lokale forhåndsvisninger:

- [Tilbud eksempel](http://127.0.0.1:3041/tilbud-eksempel)
- [Lage tilbud](http://127.0.0.1:3041/lage-tilbud)

Ingen commit, push eller deploy. Avventer eierens godkjenning.

**READY FOR OWNER REVIEW**
