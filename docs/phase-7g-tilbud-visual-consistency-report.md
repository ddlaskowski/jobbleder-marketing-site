# Phase 7G — Tilbud visual consistency

20. november 2026. Lokal implementering og kontroll mot produksjonsbygg. Ingen commit, push eller deploy. Phase 7E er ikke startet.

## 1. Executive summary

Kun `/lage-tilbud` og `/hvordan-folge-opp-tilbud` har fått ny presentasjon. Begge bruker den godkjente Phase 7F-paletten, typografien, seksjonsrytmen, CTA-ene og den enkle FAQ-/ressursnavigasjonen. Sidene har ulik informasjonsarkitektur:

- Opprettingsguiden beholder alle åtte steg, i samme rekkefølge, med autentisk editorbilde og egen mobilvariant.
- Oppfølgingsguiden viser en kort, manuell rutine, kontaktprinsipper, mulige kundesvar og dokumenthandlingene i Jobbleder. De detaljerte meldingsforslagene ligger fortsatt i bloggartikkelen.

Alle opprinnelige forklaringsavsnitt, introduksjoner, fire punkt per side, FAQ-spørsmål/-svar, metadata og interne destinasjoner er bevart. Ingen nye bilder eller avhengigheter. TypeScript, full ESLint og produksjonsbygg bestått. Seksten responsive/a11y-tilfeller fullført uten bekreftede axe-brudd, overflow eller observerte layoutskift. Fjorten andre sider har uendret rendret hovedinnhold, lenkelister og SEO-identitet.

Lokale forhåndsvisninger:

- [Lage tilbud](http://127.0.0.1:3041/lage-tilbud)
- [Hvordan følge opp tilbud](http://127.0.0.1:3041/hvordan-folge-opp-tilbud)

## 2. Design principles applied

Gjennomgått Phase 7A/7B/7C/7D/7F og de faktiske implementasjonene av `/timeliste-mal-pdf` og `/tilbud-eksempel`. Det finnes ingen gjennomført Phase 7E-rapport.

Gjenbruker eksisterende `offerExample.module.css` uendret: navy `#101827`, seksjonsflate `#172337`, lyse teksttoner og blå aksent `#93c5fd`; brede `SectionContainer`-flater; lesbare tekstbredder; store responsive overskrifter; små redaksjonelle overlinjer; diskrete skillelinjer; native FAQ og grupperte ressurslenker. Ingen gradienter, ikonsystem, animasjoner, fonter eller komponentbibliotek er lagt til.

Nye guide-spesifikke stiler håndterer nummererte steg, rutinen og svargrupper. Ikke en kopi av pilotsidens dokument/fakta-sekvens. Dark navy beholdes med begge OS-preferanser, som i den godkjente piloten. Ingen temabryter. Referansens egen preferanseatferd er urørt.

`SiteHeader`, `SiteFooter`, `SectionContainer`, `ApplicationCTA`, `REGISTRATION_GUIDANCE` og `OfferFigure` brukes uten endring av komponentfilene. Ingen global navigasjon eller footer er redesignet.

## 3. Exact files modified

| Fil | Phase 7G-endring |
| --- | --- |
| `app/(seo)/[slug]/page.tsx` | Én import og en eksplisitt gren for bare de to godkjente slugene. Metadatafunksjonen er urørt. |
| `components/product/offer/OfferGuidePage.tsx` | Ny, serverrendret komposisjon for de to guidene. Leser eksisterende innholdsrecord direkte. |
| `components/product/offer/offerGuide.module.css` | Nye lokale grid-/steg-/rutine-regler, i tillegg til gjenbruk av pilotens uendrede CSS. |
| `docs/phase-7g-tilbud-visual-consistency-report.md` | Denne rapporten. |

Før redigering ble en fersk SHA-256-baseline lagret for 320 eksisterende sporede/utrackede filer. Bare rutefilen er endret blant disse. De øvrige 319 er byte-identiske, inkludert Phase 7F-komponent/CSS/rapport, Phase 7B–7D-innhold, tidligere rapporter, mediefiler, navigasjon og footer. Nye filer er de to guidefilene og denne rapporten. HEAD er fortsatt `0c7b0785bcd638c9d1d87475f47bedb445e4b5b6`.

## 4. Before/after page structure

Begge brukte tidligere den generelle SEO-rendereren: smal introduksjon, punktliste, appknapp, clusternavigasjon, lang vertikal seksjonsrekke, FAQ og relaterte kort.

| `/lage-tilbud` etter | Bevaring/oppgave |
| --- | --- |
| Hero | Eksisterende H1/intro/punkter/brødsmule-destinasjoner; primær CTA og korrekt registreringsveiledning. |
| Gjør oppdraget tydelig | Steg 1–3: kunde/prosjekt, arbeid, antall/pris. Editorbildet følger forklaringene. |
| Avgrens arbeidet | Steg 4–6: materialer/utelatelser, MVA, datoer/gyldighet. |
| Les gjennom før du deler | Steg 7–8: kontroll, PDF og manuell deling; eksisterende instruksjons-/produktlenker. |
| Etter utsending | Eksisterende avsnitt om aksept/endringer og juridiske forbehold. Ny naturlig inngang til oppfølgingsguiden. |
| Eget tilbud | Praktisk CTA og korrekt Free/Premium-forklaring. |
| FAQ og ressurser | Samme FAQ-data; rolige navnelister i stedet for kortvegg. |

| `/hvordan-folge-opp-tilbud` etter | Bevaring/oppgave |
| --- | --- |
| Hero | Samme H1, intro og punkter; ingen konkurrerende hero-CTA. |
| Enkel rutine | Eksisterende forklaring av hvorfor oppfølging er nyttig, sammen med fem korte nummererte handlinger. |
| Kontakt med kunden | Eksisterende timing- og kommunikasjonsavsnitt; lenke til bloggens to meldingsforslag. Ingen kopierte meldinger. |
| Kundens svar | Kort om aksept, endringsønsker, avslag og videre avklaring; praktiske/juridiske forbehold. |
| Jobbleder | Dokumentoppretting/PDF og begge konverteringsveier; kundedialog er manuell; én samlet CTA/planseksjon. |
| FAQ og ressurser | Samme FAQ-data og bevarte navigasjonsdestinasjoner. |

## 5. Content preservation verification

Ingen endring i `content/seoPages.ts` eller `content/blogPosts.ts`. Før-/etterhashene bekrefter at hele Phase 7B–7D-innholdet er intakt.

Nettleserasserts i alle seksten tilfeller finner alle **16 eksisterende avsnitt** på `/lage-tilbud`, alle **seks eksisterende avsnitt** på oppfølgingssiden og alle fire opprinnelige punkter per side. Introduksjonene er gjengitt ordrett. FAQ vises fra samme datakilde som schema.

Alle åtte stegs overskrifter og avsnitt gjengis i opprinnelig rekkefølge: `1,2,3,4,5,6,7,8` i alle åtte opprettingstilfellene. Tre semantiske ordnede lister har `start=1`, `start=4` og `start=7`, med synlige originalnumre i overskriftene. Ingen CSS-rekkefølge som avviker fra DOM-leserekkefølgen.

Suppleringene er avgrenset til de etterspurte rutine-/svarkategoriene, kvalifisert dokumentflyt, planforklaring og nye seksjonsoverskrifter. Oppfølgingssiden gir ikke en ny omfattende meldingsartikkel. Alle tidligere hovedinnholdslenkemål finnes fortsatt, kontrollert som normaliserte URL-er. Appens eksisterende mål er bevart som `https://app.jobbleder.no/`.

## 6. SEO preservation

| Felt | `/lage-tilbud` | `/hvordan-folge-opp-tilbud` |
| --- | --- | --- |
| Tittel | Lage tilbud – hvordan skrive et godt tilbud \| Jobbleder | Hvordan følge opp tilbud – få flere svar fra kunder \| Jobbleder |
| Beskrivelse | Lær hvordan du lager et ryddig og profesjonelt tilbud. Enkelt for håndverkere og små bedrifter i Norge. | Lær hvordan du følger opp et sendt tilbud på en profesjonell måte og øker sjansen for å få svar fra kunden. |
| H1 | Lage tilbud | Hvordan følge opp tilbud |
| Canonical | https://www.jobbleder.no/lage-tilbud | https://www.jobbleder.no/hvordan-folge-opp-tilbud |
| FAQ | Tre uendrede spørsmål/svar | Tre uendrede spørsmål/svar |

Title, description, canonical, robots-meta, H1 og hele parsede JSON-LD-listen er identiske med fersk før-baseline i alle seksten tilfeller. Én H1 per side. Ingen nye redirects, URL-er, schema-typer eller indeksdirektiver. Sitemap/robots/canonical-infrastruktur er byte-identisk.

Søkeintensjonene er fortsatt henholdsvis praktisk tilbudsoppretting og kort oppfølgingsrutine. Den historiske bloggruten `/blogg/folle-opp-tilbud` er brukt med sin faktiske skrivemåte; ingen ny rute oppfunnet.

## 7. Product and legal accuracy

Grunnlag: eksisterende instruksjoner/medier, Phase 7B/7C-verifikasjon og eksplisitt eierbekreftet funksjonalitet. Ingen ny innlogget apptransaksjon eller juridisk kilderevisjon er utført.

- Opprett → Tilbud, kunde/prosjekt, beskrivelser, antall/enhetspris, MVA og datoer følger den bevarte åttestegsguiden og editoropptaket.
- Tilbud 29 er et demonstrasjonseksempel: prosjektfeltet i appen skilles fra PDF-feltene; mengde 1 er ikke påstått areal/timeantall; 25 % er eksempelsats; gyldighet er ikke arbeidets start-/sluttdato.
- Brukeren kontrollerer, genererer og deler PDF selv. Ingen automatisk sending, påminnelse, åpningssporing, kundeportal, e-signatur eller automatisk aksept er lovet.
- Begge dokumentveier beskrives som brukerinitierte: Tilbud → Faktura og Tilbud → Kontrakt → Faktura. Kontrakten kan redigeres selvstendig; hvert nytt dokument skal kontrolleres før manuell deling.
- Free inkluderer dokumentoppretting, PDF og konvertering. Free-PDF har Jobbleder-merking; Premium fjerner den og støtter egen firmalogo. Ingen ny pris eller begrensning.
- Aksept omtales kvalifisert: en bindende avtale kan oppstå avhengig av innhold, svar, omstendigheter og regler. Separat signert kontrakt er ikke alltid nødvendig. Praktiske råd skilles fra universelle lovkrav og forbruker/B2B. Ingen nye lovhenvisninger eller etterlevelsesgarantier.

## 8. Responsive results

Chrome headless mot lokalt produksjonsbygg, med `prefers-reduced-motion: reduce` og begge fargepreferanser. Navy er tilsiktet under begge preferanser.

| Side | 375 px | 768 px | 1280 px | 1440 px |
| --- | --- | --- | --- | --- |
| `/lage-tilbud` | Light/dark bestått | Light/dark bestått | Light/dark bestått | Light/dark bestått |
| `/hvordan-folge-opp-tilbud` | Light/dark bestått | Light/dark bestått | Light/dark bestått | Light/dark bestått |

Alle seksten: HTTP 200, ingen horisontal overflow, alle synlige bilder dekodet, observerte CLS 0, ingen aktive animasjoner ved redusert bevegelse. Steg/grupper stables på mobil; to kolonner ved tablet; tre stegkolonner på desktop der tre steg hører sammen. Rutinen går fra stablet til todelt innledning/liste. Ingen bildedistorsjon eller nye utsnitt.

Gjenbrukte bilder, uendrede:

| Eksakt sti | Dimensjoner | Bytes | Faktisk visning |
| --- | --- | ---: | --- |
| `public/images/product/tilbud/optimized/jobbleder-offer-editor-efed9bd605e5.webp` | 1084 × 342 | 32 496 | 720 × 227,16 ved 768; 1084 × 342 ved 1280/1440. |
| `public/images/product/mobile/optimized/new_offer_document_edit_mobile-3e7a019b8d5e.webp` | 332 × 720 | 42 388 | 327 × 709,16 ved 375. |

Eksisterende `OfferFigure` velger mobil under 640 px, beholder eksplisitte dimensjoner/lazy loading/alt/caption og viser riktig originalbildelenke. Originalene er `public/images/product/tilbud/source/new_offer_form.png` (1280 × 720) og `public/images/product/mobile/source/new_offer_document_edit_mobile.png` (332 × 720). Fullstørrelsesvisning med Enter er verifisert i alle åtte opprettingstilfellene. Mobilutsnittets begrensning om MVA/summer/lagreknapper er fortsatt forklart i bildeteksten.

Visuelt gjennomgått fullsidebilder av begge sider på mobil og desktop. Første skjermbildeforsøk etter FAQ-lukking fanget en midlertidig feil i fullsidehøyden; rene bilder er tatt på nytt etter innlasting og to animasjonsrammer, uten kodeendring. Footer avslutter den faktiske siden uten ekstra blank flate.

Fullsidebilder for alle seksten kombinasjoner finnes i den eksterne `phase7g`-bevismappen. Utvalgte:

- [Lage tilbud, desktop](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase7g/lage-tilbud-1440-dark.png)
- [Lage tilbud, mobil](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase7g/lage-tilbud-375-light.png)
- [Oppfølging, desktop](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase7g/hvordan-folge-opp-tilbud-1440-light.png)
- [Oppfølging, mobil](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase7g/hvordan-folge-opp-tilbud-375-dark.png)

## 9. Accessibility results

axe-core med WCAG 2 A/AA, 2.1 AA, 2.2 AA og best practices, med FAQ-svar åpne: **0 bekreftede violations i alle seksten tilfeller**.

Separat incomplete: kontrast for eksisterende dekorativt meny-chevron i hvert tilfelle, mobil eller desktop etter bredde. Det er ikke regnet som automatisk bestått. Tegnet er synlig ved visuell kontroll og skjult for hjelpemidler; menyens beskrivende tekst står ved siden av. Full manuell kontrastrevisjon/skjermlesersesjon er ikke utført.

Utførte tastatur-/semantikkontroller:

- Første Tab viser «Hopp til innhold» med 3 px fokus, navy tekst på lys flate. Enter flytter fokus til `main#tilbudguide-innhold`.
- Riktig synlig meny åpner med Enter og lukker med Space. Tab når Faktura-lenken med synlig fokus.
- Alle tre FAQ per side åpner med Enter og lukker med Space i alle tilfeller: 48 sekvenser. Synlig 3 px fokus. Native accessibility tree viser navngitte disclosure-kontroller med korrekt expanded-status.
- Aktiv originalbildelenke har beskrivende navn og 3 px fokus; Enter åpner riktig bilde. Bildealternativet beskriver faktisk grensesnitt, ikke en oppfunnet PDF.
- Én H1, H2 for hovedseksjoner og H3 for underemner/steg. Navngitte brødsmule-/ressurslandemerker, semantiske lenker/lister og ingen unødvendig ARIA på FAQ.
- `/instruksjoner#opprett-tilbud` ble åpnet på 375 og 1440 px: korrekt details åpner og SUMMARY får fokus.

Dette er målrettet automatisering, tastatur og visuell kontroll, ikke full tilgjengelighetssertifisering eller fysisk enhetstest.

## 10. Technical test results

| Kontroll | Resultat |
| --- | --- |
| `npx.cmd tsc --noEmit --incremental false` | Bestått, exit 0. |
| `npm.cmd run lint` | Full ESLint bestått, exit 0. |
| `npm.cmd run build` | Bestått, exit 0; 55 statiske sider. Kjent Node DEP0205-advarsel om `module.register()`. |
| `git diff --check` | Bestått; bare normale LF/CRLF-varsler om eksisterende innholdsfiler. |
| HTTP-lenker | Alle 17 lokale hovedinnholds-/originalbildedestinasjoner svarer 200 i den korrigerte etterkontrollen. |
| SEO/browser | Seksten av seksten tilfeller har bevart metadata/H1/schema. Ingen JavaScript-pageerrors eller observerte hydration-feil. |
| Kildebevaring | 319 av 320 eksisterende filer byte-identiske; bare rutefilen har forventet endring. |
| Regresjon | Seksten ruter HTTP 200. De fjorten ikke-målsidene har identisk hovedtekst, lenkeliste, metadata, H1 og schema mot før-baseline. |

Regresjon omfatter hjem, `/tilbud-mal`, `/tilbud-eksempel`, `/timeliste-mal-pdf`, `/timeliste-mal`, `/fakturaprogram-gratis`, `/kontrakt-mal` og syv bloggslugs: `tilbud-eller-pristilbud`, `lage-tilbud-byggebransjen`, `lage-tilbudsdokument`, `feil-med-tilbud`, `tilbud-vs-kontrakt`, `folle-opp-tilbud`, `fra-tilbud-til-kontrakt-og-faktura`. Full responsive matrise gjelder de to målsidene; de øvrige har innholds-/SEO-/lenkeregresjon, ikke en ny full visuell audit.

Første nettleserforsøk fikk ikke tilgang til serveren i sandkassen. Serveren ble startet med godkjent tilgang og hele matrisen kjørt på nytt. Det feilede forsøket er bevart separat og ikke telt som bestått. Første HTTP-rapport hadde en testkodefeil (`response.status()` på Fetch Response); alle 17 destinasjoner er faktisk kontrollert på nytt med korrekt `response.status` i `extra.json`. Ingen applikasjonsendring ble nødvendig.

Bevis utenfor repositoryet: `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase7g/` — `source.json`, `preservation-before.json`, `before.json`, `browser.json`, `browser-unreachable-attempt.json`, `extra.json`, `source-verification.json` og skjermbilder. Undersøkelsesskript ligger ved siden av mappen, ikke i appkilden.

## 11. Known limitations

- Kjent lokal `/api/handshake` svarer HTTP 400 i alle seksten hovedtilfeller. Ingen andre HTTP ≥400 i disse sidetestene og ingen JavaScript-pageerrors. Analytics er urørt; årsak og produksjonsrespons er ikke undersøkt på nytt. Lokal feil er ikke kalt produksjonsfeil.
- Menyglyfens axe-incomplete er et manuelt kontrollpunkt, ikke en bekreftet feil eller sertifisert pass.
- Ingen ny Lighthouse-, produksjons-, innlogget app- eller fysisk skjermlesertest. CLS er lokal observasjon, ikke feltdata.
- Appens faktiske kundedialog, PDF-generering og avtaleinngåelse er ikke utført. Produktbeskrivelsen bygger på etablert bekreftet funksjonalitet og autentiske opptak.
- Begge guider gjenbruker pilotens CSS med vilje; eventuelle fremtidige endringer i denne CSS-en må regresjonstestes på alle tre sider. Den godkjente CSS-en er ikke endret her.
- Tidligere lokalt arbeid er fortsatt ucommittet og bevart. Ingen staging, commit, push eller deploy er utført.

## 12. Recommendation for Phase 7E

Etter eierens visuelle godkjenning anbefales Phase 7E som en avgrenset sluttkontroll av hele Tilbud-økosystemet: bekreft de tre opprinnelige Phase 7A-funnene, korrekt dokumentidentitet, ulike søkeintensjoner, lenker/ankre, schema og samlet regresjon på den godkjente arbeidsflaten. Hold ikke-blokkerende forbedringer som backlog fremfor å utvide redesignomfanget. Ingen nye ruter eller automatisk utrulling av designet er nødvendig.

Phase 7E er ikke startet. Avventer eiergjennomgang av de to lokale sidene.

**READY FOR OWNER REVIEW**
