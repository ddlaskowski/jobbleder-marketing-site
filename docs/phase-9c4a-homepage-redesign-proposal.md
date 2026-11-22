# Phase 9C.4A — Homepage audit & redesign proposal

Dato: 22. november 2026. Analyse og forslag, uten implementering.

**Anbefaling:** Behold Jobbleders eksisterende profil, autentiske produktbilder og felles navigasjon. Gjør førstesiden tydeligere som én løsning for kunder, oppdrag og dokumenter. Erstatt de fire lange produktintroduksjonene med fire likeverdige, kortere moduler. Vis dokumentflytene med lesbar HTML fremfor en stor rasterillustrasjon som hovedforklaring. Samle Free/Premium-budskapet i én egen del.

Anbefalt hero er **konsept A: «Kunder, arbeid og dokumenter. Samlet i Jobbleder.»** Konsept B viser en alternativ, mer arbeidsflytorientert retning. Begge er beslutningsforslag, ikke ferdige design eller publisert innhold.

Det er ikke grunnlag for en full utskifting av designsystemet. De viktigste forbedringene gjelder prioritering, lesbarhet og forklaring av produktets sammenheng. Ingen endring i søkearkitektur eller dedikerte produktsider anbefales.

## 1. Repository og undersøkelsesgrunnlag

- Verifisert repository: `C:/Users/ddlas/Code/jobbleder-site`.
- `package.json`: `jobbleder-site`, Next.js 16.1.6, React 19.2.3, TypeScript, Tailwind CSS 4 og CSS Modules.
- Branch: `main`. HEAD: `ec472f5f24ca2627c0c38a5b6e4efe5b9d378aae`.
- Arbeidstreet hadde allerede 11 endrede sporede filer og eksisterende usporede komponenter, bilder, rapporter og diagnostikk fra tidligere faser. Disse er ikke tilbakestilt, ryddet, staged eller skrevet over.
- Ingen applikasjonsrepository er åpnet eller endret. Ingen commit, push eller deploy er utført.
- **Eneste nye/endrede repositoryfil i denne fasen er dette dokumentet:** `docs/phase-9c4a-homepage-redesign-proposal.md`. Sluttkontrollen sammenlignet 469 eksisterende filer med starttilstanden: ingen av dem var endret, og rapporten var eneste nye fil i de undersøkte kilde-, bilde- og dokumentasjonsmappene.

Hjemmesidens implementasjon og direkte avhengigheter er lest:

| Fil | Rolle |
| --- | --- |
| `app/page.tsx` | Ruten `/`, selvrefererende canonical og rendering av Homepage. |
| `components/home/Homepage.tsx` | Innhold, seksjonsrekkefølge, produktlenker og mediebruk. |
| `components/home/home.module.css` | Hero, produktnavigasjon, seksjoner, ressursoversikt og responsive regler. |
| `components/site/SiteChrome.tsx` | Felles header, Produkter-meny, mobilmeny og footer. |
| `components/site/Primitives.tsx` | CTA, medielenker, ProductMedia, seksjonscontainer og produktintroduksjoner. |
| `components/site/site.module.css` | Farger, typografi, layout, fokusmarkeringer og redusert bevegelse. |
| `content/homeProductMedia.json` | Hjemmesidens bildevarianter og kildeinformasjon. |
| `content/invoiceProductMedia.json` | Premium-fakturaen som vises på hjemmesiden. |
| `app/layout.tsx`, `app/globals.css` | Arvet metadata, strukturert data, Tracker og globale tema-/bevegelsesregler. |
| `lib/siteUrl.ts`, `app/sitemap.ts`, `app/robots.ts` | WWW-origin, sitemap og robots. |

Produkt- og instruksjonssider er brukt som lokale referanser: Faktura, Timeliste, Tilbud, Kontrakt, oppdaterte kontraktinstruksjoner, mediemanifester og eksisterende FAQ-/plansammenligninger. Produktfunksjoner støttes her av eierens bekreftelser, nettstedets dokumentasjon og autentiske bilder; dette er ikke en ny kodeverifikasjon av applikasjonen.

### Lokal nettleserundersøkelse

Den eksisterende lokale produksjonsvisningen på `http://127.0.0.1:3095/` ble undersøkt i headless Chrome. Ingen ny build ble kjørt i denne analysefasen.

| Bredde | Lys preferanse | Mørk preferanse | Horisontal overflow | Meny med tastatur | Axe WCAG A/AA |
| ---: | --- | --- | --- | --- | --- |
| 390 px | Kontrollert | Kontrollert | Ingen registrert | Åpner, synlig fokus | 0 rapporterte brudd |
| 768 px | Kontrollert | Kontrollert | Ingen registrert | Åpner, synlig fokus | 0 rapporterte brudd |
| 1024 px | Kontrollert | Kontrollert | Ingen registrert | Åpner, synlig fokus | 0 rapporterte brudd |
| 1440 px | Kontrollert | Kontrollert | Ingen registrert | Åpner, synlig fokus | 0 rapporterte brudd |

Alle åtte kombinasjoner ble undersøkt med redusert bevegelse. Hjemmesiden beholder den tilsiktede lyse produktflaten også ved mørk OS-preferanse. Første sideinnlasting svarte HTTP 200; senere cached navigasjoner svarte 304. Alle 29 undersøkte lokale rute-/bildelenker svarte HTTP 200. Ingen manglende bildeinnlastinger eller JavaScript-sideunntak ble registrert. Det kjente lokale `/api/handshake`-svaret på HTTP 400 forekom fortsatt; analytics ble ikke endret eller vurdert som en påvist produksjonsfeil.

Fullsidesbilder, hero-/flytutsnitt og JSON-resultater ligger utenfor repositoryet:

`C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9c4a/`

Eksempler: `hero-390.png`, `hero-1440.png`, `workflow-390.png`, `workflow-768.png`, `homepage-1440-light.png` og `results.json`. Hero og dokumentflyt ble visuelt inspisert på mobil og desktop; øvrige seksjoner er gjennomgått i kildekode, bildemateriale og registrert layoutgeometri. Bildene ble eksplisitt lastet inn for visuell inspeksjon. Dette er ikke en måling av ordinær lazy-loading-trafikk eller Lighthouse/CLS.

Ingen produksjonsaudit eller måling av faktisk konvertering er utført. Forslaget bygger ikke på antatte konverteringsrater.

## 2. Eksisterende hjemmeside

### Rekkefølge og budskap

1. Hero med målgruppeetikett, H1 «Jobben din. Dokumentene på plass.», kort produktforklaring, «Start gratis», «Utforsk produktene», registreringsveiledning og oversiktsbilde.
2. Ankernavigasjon til Faktura, Timeliste, Tilbud og Kontrakt.
3. Fire selvstendige produktseksjoner i denne rekkefølgen, med autentiske bilder, beskrivelser, lenker og til dels ekstra definisjonslister.
4. Dokumentflyt med fire støttede løp, tekstalternativ i details og lenke til instruksjonene.
5. Fire onboardingsteg: åpne appen, registrer/logg inn, firmaopplysninger, første dokument.
6. Ressurser fordelt på fire emner, med 17 SEO-lenker samt blogg og instruksjoner.
7. Felles avsluttende CTA og footer.

Heroen identifiserer målgruppen og nettleserproduktet. H1 er gjenkjennelig, men forteller alene lite om kundene, prosjektene eller de sammenhengende arbeidsflytene. Forklaringen under H1 må gjøre mye av arbeidet. Den fulle oversikten gir god produktforankring på desktop, men tar stor høyde. Mobilutsnittet viser bare «Legg til registrering» og «Ny faktura» og synliggjør derfor ikke hele produktbredden.

### Visuelt system

Nettstedet har allerede et sammenhengende formspråk: Arial/Helvetica, mørk blågrå tekst, klar blå aksent, hvitt og lysegrå seksjoner, avrundede medieflater og diskrete linjer. Maksimal containerbredde er 1200 px inklusive 24 px innvendig padding på hver side. Hovedknapper er minst 50 px høye; kontekstlenker er gjennomgående minst 44 px høye. Fokusmarkeringer er tydelige.

Produktseksjonene bruker samme kolonneprinsipp og veksler bakgrunn. Bildeformatene er imidlertid ulike: Faktura vises som et smalt dokument, Timeliste som et apputsnitt, Tilbud som et liggende dokumentutsnitt og Kontrakt som en hel stående side. De virker derfor ikke helt likeverdige selv om alle fire har samme overordnede komponent.

### Dokumentert plassbruk

Lokale mål er observasjoner, ikke i seg selv bevis på dårlig UX:

| Observasjon | Målt eksempel | Betydning for forslaget |
| --- | --- | --- |
| Lang mobilside | Omtrent 9916 px total høyde ved 390 px bredde. | Prioriter sammenheng og mindre gjentakelse før nye seksjoner legges til. |
| Ujevn produktvekt | Kontrakt ca. 1355 px mot Timeliste ca. 897 px ved 390 px. Ved 768 px er Kontrakt ca. 1461 px mot Faktura ca. 598 px. | Normaliser seksjonsomfang og bildehøyder, uten å kutte selve dokumentbildet. |
| Stor desktop-hero | Ca. 1257 px inkludert hele oversiktsbildet ved 1440 px. | La hovedbudskap, CTA og en produktorientering komme raskere frem. |
| Omfattende flytseksjon | Ca. 1409 px ved 1440 px, hvor selve illustrasjonen er ca. 767 px høy. | Forklar flytene mer direkte med responsiv tekst og enkle forbindelser. |
| Stor ressursoversikt på mobil | Ca. 1523 px ved 390 px. | Behold destinasjonene, men gjør gruppene mer kompakte. |

### Navigasjon og footer

Behold felles SiteHeader og SiteFooter. Produkter-menyen og mobilmenyen har de fire riktige produktsidene; merkede navigasjonslandemerker og native details er allerede på plass. Eksisterende logginn- og opprettingslenker går til `https://app.jobbleder.no/`. Nettstedet må fortsatt forklare at appen åpner med innlogging og at «Create account» brukes for registrering. Det er ikke verifisert en egen direkte registreringsrute som bør erstatte denne.

## 3. Styrker, svakheter og hva som bør beholdes

| Beslutning | Konkret anbefaling | Begrunnelse |
| --- | --- | --- |
| Behold | Merkenavn, blå aksent, lyse flater, lesbar typografi og mørk avslutning. | Et etablert visuelt språk finnes allerede. |
| Behold | Felles header/footer, skipplenke, CTA-destinasjon og registreringsveiledning. | Gjenkjennelighet og tilgjengelighet uten navigasjonsrefaktorering. |
| Behold | Alle fire moduler, ekte bilder og lenker til dedikerte sider. | Hjemmesiden skal introdusere produktet og la detaljene ligge på produktsidene. |
| Behold | Alle fire dokumentflyter og brukerens kontroll før PDF/deling. | Viser sammenhengen uten å love automatisering. |
| Forbedre | Heroens forklaring av én samlet løsning og en tydelig firemodulsoversikt tidlig. | Kunder/prosjekter er i dag nesten usynlige i redaksjonell tekst. |
| Forbedre | Lik redaksjonell vekt og visuell ramme for hver modul. | Kontrakt skal ikke dominere fordi bildet er høyest eller funksjonen er sist oppdatert. |
| Forbedre | Lesbar HTML-forklaring av dokumentflytene. | Dagens 1000 px brede mobilbilde vises omtrent 340 px bredt; etikettene blir svært små. |
| Samle | Free/Premium i én modulovergripende seksjon. | I dag forklares forskjellen hovedsakelig under Faktura og kan oppfattes som et fakturatilbud. |
| Reduser | Gjentatte detaljlister og lang onboarding med separate «åpne» og «logg inn»-steg. | Gir rom for kunder/prosjekter uten bare å gjøre siden lengre. |
| Erstatt i hovedpresentasjonen | Den store rasterinfografikken som eneste umiddelbart lesbare forklaring. | Behold originalen, men bruk responsiv HTML som primær forklaring hvis eieren godkjenner dette. |
| Ikke legg til | Ubekreftede kundetall, anmeldelser, tidsbesparelser eller garantier. | Det finnes ikke dokumentert grunnlag for slike troverdighetsmarkører. |

Manglende elementer er en kort forklaring av kunde-/prosjektsammenheng, en samlet planforklaring og et lite sett praktiske spørsmål. Manglene forsvarer en bedre informasjonsarkitektur, ikke flere separate salgseksjoner for hver ekstra funksjon.

## 4. Anbefalt produktposisjonering

**Redaksjonell kjerne:** Jobbleder samler kunder, prosjekter og dokumentarbeid for små norske virksomheter. Fire likeverdige dokumentmoduler kan brukes selvstendig og som grunnlag for videre dokumenter.

Foreslått kort produktforklaring:

> Jobbleder er en nettbasert løsning for håndverkere og små bedrifter. Samle kunder og prosjekter, registrer arbeid og opprett timelister, tilbud, kontrakter og fakturaer.

Vis **Timeliste · Tilbud · Kontrakt · Faktura** sammen tidlig. Rekkefølgen er en redaksjonell orientering, ikke et krav om at alle oppdrag følger samme løp. Navigasjonens eksisterende rekkefølge trenger ikke endres globalt.

| Modul | Foreslått verdibudskap | Kort forklaring | Eksisterende destinasjon |
| --- | --- | --- | --- |
| Timeliste | «Samle arbeidsdagene.» | «Registrer timer, pauser og arbeidsbeskrivelser. Velg registreringene du vil bruke i en timeliste, eller opprett timelisten direkte.» | `/timeliste-mal` |
| Tilbud | «Gjør oppdraget tydelig før dere starter.» | «Samle arbeid, antall, priser og MVA i et tilbud du kan laste ned som PDF.» | `/tilbud-mal` |
| Kontrakt | «Samle det dere har avtalt.» | «Opprett kontrakten selv eller fra et tilbud. Tilpass arbeid, pris og vilkår før du lager PDF.» | `/kontrakt-mal` |
| Faktura | «Lag en faktura fra riktig grunnlag.» | «Opprett fakturaen selv eller bruk et eksisterende dokument. Kontroller linjer og beløp før du genererer PDF.» | `/fakturaprogram-gratis` |

Kunde- og prosjektarbeid, lagrede dokumenter og rapporter støtter dette hovedbudskapet. Rapporter bør nevnes nøkternt, med lenke til veiledningen fremfor en egen stor funksjonspåstand. Ikke kall produktet et fullstendig regnskaps-, CRM-, personal- eller prosjektstyringssystem uten særskilt grunnlag.

## 5. To hero-konsepter

### Konsept A — Samlet oversikt, anbefalt

**Målgruppeetikett:** «FOR HÅNDVERKERE OG SMÅ BEDRIFTER»

**H1:**

> Kunder, arbeid og dokumenter.
> Samlet i Jobbleder.

**Beskrivelse:**

> Hold oversikt over kunder og prosjekter, registrer arbeid og lag timelister, tilbud, kontrakter og fakturaer i nettleseren.

**Primær CTA:** «Start gratis i Jobbleder» → eksisterende `https://app.jobbleder.no/`.

**Sekundær CTA:** «Utforsk dokumentene» → eksisterende `#produkter`.

**Underordnet hjelpetekst:** Behold den korrekte veiledningen om innlogging og «Create account». Ingen «uten registrering» eller ny innloggingsflyt antydes.

**Visuelt konsept:** Ett ekte oversiktsbilde, ikke en collage av oppdiktede vinduer. La de fire dokumentnavnene være vanlig HTML nær forklaringen, slik at produktbredden ikke avhenger av at man kan lese små felt i bildet. Bilde-/tallinnhold merkes som eksempelvisning; tallene er ikke kundetall eller produktstatistikk for alle brukere.

**Desktop:** Ved tilstrekkelig bredde tekst til venstre og oversiktsbilde til høyre, med moderat asymmetri. Ved mellomstore bredder legges bildet under teksten hvis to kolonner gjør bildet meningsløst lite. Den ekte oversikten viser struktur, ikke en felt-for-felt-veiledning, og skal kunne åpnes større. Unngå å gjenta hele dashboardet som en ny seksjon senere.

**Mobil:** Tekst og CTA først, dokumentnavnene alltid lesbare. Ikke gjenbruk det svært smale hurtigvalgutsnittet som om det viser alle fire modulene. Utelat hovedbildet på de minste skjermene hvis den eksisterende kilden ikke kan presenteres meningsfullt; de fire modulene med relevante bilder følger rett etterpå. Ingen horisontal karusell eller miniatyrkollasj.

**Hvorfor:** Svarer umiddelbart på hva produktet er, hvem det er for og hvorfor informasjonen samles. Beholder eksisterende produktforankring og unngår å la én dokumenttype eie heroen.

### Konsept B — To praktiske veier gjennom oppdraget

**Målgruppeetikett:** «DOKUMENTARBEID FOR SMÅ BEDRIFTER»

**H1:**

> Fra tilbud eller arbeidstimer
> til dokumentene du trenger.

**Beskrivelse:**

> Lag tilbud og kontrakter, eller samle arbeidstimer i en timeliste. Bruk dokumentene som grunnlag for faktura, og kontroller innholdet før du lager PDF. Alt i Jobbleder, rett i nettleseren.

**Primær CTA:** «Kom i gang gratis» → eksisterende appadresse.

**Sekundær CTA:** «Se dokumentflytene» → eksisterende `#workflow-title`.

**Visuelt konsept:** To rolige, tekstbaserte arbeidsflytbaner i heroen: Tilbud → Kontrakt → Faktura og Registreringer → Timeliste → Faktura. Dette er en forklaring laget med HTML, ikke en etterligning av appens grensesnitt. Autentiske bilder kommer i moduloversikten under. Ingen animerte dokumentoverføringer som kan gi inntrykk av automatisk behandling.

**Desktop:** Sentrert tekst og CTA med to sideordnede, kompakte flyter under. Gi alle fire dokumenttypene tilsvarende typografisk vekt. De to snarveiene forklares i den fulle flytseksjonen.

**Mobil:** To vertikale lister i leseretning, med tekstlige forbindelser og tydelige navn. Registreringer er inngangen til arbeidstimer, ikke en femte likeverdig dokumentmodul. Ingen krymping av en desktopgrafikk.

**Hvorfor:** Forklarer gjenbruk og videre arbeid raskt. Ulempen er større konseptuell kompleksitet for en førstegangsbesøkende og mindre umiddelbar UI-forankring. Velges dette konseptet, må flytseksjonen lenger ned være kortere for å unngå gjentakelse. Ikke kombiner begge heroene til en stor hybrid.

## 6. Foreslått seksjonsrekkefølge

Åtte innholdsdeler, etterfulgt av eksisterende footer:

1. Hero og kort produktorientering.
2. Fire likeverdige dokumentmoduler.
3. Sammenhengende arbeidsflyter.
4. Kunder og prosjekter som felles grunnlag.
5. Free og Premium.
6. Kom i gang i tre praktiske steg.
7. Praktiske spørsmål og en kompakt, gruppert guideoversikt.
8. Avsluttende CTA.

Fordeler og praktiske bilder integreres i disse delene. Ikke legg til egne, repeterende seksjoner for «fordeler», «skjermbilder», «alt samlet» og «slik fungerer det» i tillegg.

## 7. Detaljer per seksjon

### 7.1 Hero

Bruk valgt konsept fra del 5. Én primærhandling og én intern orienteringslenke. La app-/målgruppeforklaringen være synlig tekst, ikke gjemt i et bilde. Behold ett H1. Ingen påståtte tidsbesparelser eller forhåndsgodkjente dokumenter.

### 7.2 Fire moduler

**Seksjonsoverskrift:** «Fire dokumenttyper. Ett sted å jobbe.»

Vis fire kort i et 2 × 2-oppsett på desktop og én kolonne på mobil. Hvert kort har modulnavn, én verdioverskrift, kort forklaring, ett meningsfullt bilde og én tydelig produktlenke. Bruk teksten i del 4 som utgangspunkt. Behold ID-ene `produkter`, `timeliste`, `tilbud`, `kontrakt` og `faktura`.

Lik innholdsvekt betyr tilsvarende tekstmengde og bildeareal, ikke tvungen cropping eller nøyaktig lik totalhøyde på alle skjermbredder. Bruk hele dokumentets proporsjoner med contain der det er et dokument. Et høyere dokument kan vises mindre i en rolig ramme med fullstørrelseslenke. Ikke klipp signaturfelt eller beløp for å få fire like miniatyrer. Bruk heller de godkjente UI-utsnittene der de forklarer modulens oppgave bedre.

Detaljer om fire time-/kilometerkategorier, kontraktens betalingsplaner eller juridiske vilkår hører på sine produktsider. Hjemmesiden skal hjelpe besøkende å velge videre.

### 7.3 Dokumentflyt

**Overskrift:** «Bruk opplysningene videre.»

**Innledning:** «Velg dokumentet som passer oppdraget. Når du skal videre, bruker du det som grunnlag og kontrollerer det nye dokumentet.»

To hovedløp vises som HTML-lister med enkle forbindelser:

- **Tilbud → Kontrakt → Faktura**. «Ta tilbudet videre til en kontrakt du kan tilpasse, og bruk kontrakten som fakturagrunnlag.»
- **Registreringer → Timeliste → Faktura**. «Velg lagrede registreringer, importer dem til timelisten og kontroller grunnlaget før du oppretter faktura.»

Vis også de to kortere støttede løpene eksplisitt: **Timeliste → Faktura** og **Tilbud → Faktura**. Eksempel: «Du kan også starte med en timeliste eller opprette faktura direkte fra et tilbud.» Unngå at Kontrakt fremstår som obligatorisk mellom Tilbud og Faktura.

På mobil legges hvert løp vertikalt. Behold tydelig rekkefølge og eventuelle lenker til de presise instruksjonsankrene. Pilene er dekorative; teksten må være forståelig uten dem. Bruk ikke sveip, hover eller animasjon for å gjøre et støttet løp synlig.

**Kort presisering:** «Du starter konverteringen og kontrollerer dokumentet selv. PDF-en laster du ned og deler med kunden.»

Den eksisterende infografikken kan beholdes tilgjengelig som et sekundært eksempel, men bør ikke lastes som en ekstra stor illustrasjon ved siden av en komplett HTML-forklaring uten klar nytte. Ingen originalfiler fjernes eller redigeres i denne planfasen.

### 7.4 Kunder og prosjekter

**Overskrift:** «Hold kunden og oppdraget samlet.»

**Beskrivelse:** «Knytt dokumentene til riktig kunde og prosjekt. Finn igjen lagrede dokumenter og følg opp arbeidstimene som hører til oppdraget.»

To korte punkter om kundeopplysninger og prosjekttilknytning er tilstrekkelig. Dokumentoversikt og rapporter kan nevnes i én støttelinje: «Bruk Dokumenter og Rapporter når du vil se videre på arbeidet.» Lenke til relevante eksisterende instruksjoner fremfor å love mer detaljert rapportering enn det som er dokumentert.

Eksisterende kunde- og prosjektbilder finnes, men er ikke automatisk et godt hovedbilde: prosjektkortet inneholder tomme felt og et varsel, kundekortet inneholder blandet norsk/engelsk. Vis eventuelt ett av dem nøkternt i en dokumenterende rolle etter innholdsvalg. Hvis materialet ikke fungerer visuelt, bruk ren tekst i første versjon. Ingen generert CRM-visning eller krav om en ny bildeserie før en enkel implementering kan starte.

### 7.5 Free/Premium

**Overskrift:** «Arbeidsflyten er med i Free.»

**Innledning:** «Opprett dokumenter, last ned PDF og bruk dokumentene som grunnlag for nye. Premium endrer hvordan PDF-ene profileres.»

Kort semantisk sammenligning:

| Dette får du | Free | Premium |
| --- | --- | --- |
| Opprett dokumenter og generer PDF | Inkludert | Inkludert |
| Støttede dokumentkonverteringer | Inkludert | Inkludert |
| PDF-profil | Jobbleder-vannmerke | Fjern vannmerket og bruk egen firmalogo |

Ingen priser, nye begrensninger eller betalingsfordeler foreslås. Vurder de eksisterende Free-/Premium-PDF-ene som et lite, valgfritt eksempel fremfor enda en stor bildegalleri-seksjon. Samme dokumentfunksjoner i begge skal være tydeligere enn oppgraderingen.

### 7.6 Kom i gang

**Overskrift:** «Start med dokumentet du trenger.»

1. **«Åpne Jobbleder.»** «Logg inn, eller velg «Create account» for å registrere deg.»
2. **«Legg inn firmaopplysningene.»** «Kontroller opplysningene som skal stå i dokumentene.»
3. **«Opprett og kontroller.»** «Velg dokumenttype, fyll inn grunnlaget og se gjennom innholdet før du lager PDF.»

Dette slår sammen de to første nåværende stegene, men endrer ikke appens faktiske innlogging. Kort lenke til `/instruksjoner`; ingen ny stor CTA nødvendig midt i denne forklaringen.

### 7.7 FAQ og guider

Fire til seks spørsmål med native details/summary. Forslag til norsk publikumstekst:

- **«Hva kan jeg gjøre gratis?»** «Du kan opprette dokumenter, generere PDF og bruke de støttede dokumentkonverteringene i Free. PDF-ene har Jobbleder-vannmerke. Premium fjerner vannmerket og gir mulighet for egen firmalogo.»
- **«Kan jeg bruke Jobbleder på mobilen?»** «Ja. Jobbleder brukes i nettleseren på mobil og datamaskin. Du trenger ikke en egen mobilapp.»
- **«Må jeg begynne med et tilbud?»** «Nei. Du kan opprette dokumentene selvstendig. Når det passer oppdraget, kan du bruke et tilbud, en kontrakt eller en timeliste som grunnlag for faktura.»
- **«Sender Jobbleder dokumentene til kunden?»** «Du genererer og laster ned PDF-en og deler den med kunden selv.»
- **«Hvordan signeres kontrakten?»** «Last ned kontrakten og avtal manuell signering. Elektronisk signering er ikke tilgjengelig i Jobbleder.»

Dette er brede produktspørsmål. Ikke gjenta hele de juridiske eller dokumentfaglige FAQ-ene fra produktsidene. Eventuell FAQPage-data må følge de endelig godkjente, synlige svarene; ingen løfter om utvidede søkeresultater.

Guideoversikten beholder alle 17 eksisterende SEO-destinasjoner, gruppert i de fire dokumentemnene. Gjør radavstand og innledende tekst mer kompakt uten å redusere lesbarhet eller treffflater. Lenker til Blogg og Instruksjoner beholdes. Ikke flytt all faglig videreføring til bare en generisk footerlenke.

### 7.8 Avslutning

**Overskrift:** «Samle dokumentarbeidet for neste oppdrag.»

**Beskrivelse:** «Start med timeliste, tilbud, kontrakt eller faktura. Bruk opplysningene videre når oppdraget går fremover.»

**CTA:** «Start gratis i Jobbleder» → eksisterende appadresse. Behold registreringsveiledningen. Gjenbruk den mørke avslutningen, med en hjemmesidespesifikk tekst dersom godkjent, uten å endre den felles FinalCTA-teksten på alle forbrukersider.

## 8. Visuell retning

- Behold hvitt, `#f8fafc`, mørk tekst rundt `#0f172a`/`#334155` og primærblå `#2563eb`. Ikke innfør en ny palett eller mange modulspesifikke farger.
- Behold skrifttypen og typografisk skala som utgangspunkt. Premiumfølelsen bør komme fra tydelig prioritering, bildestørrelser og bedre rytme, ikke nye fonter eller store tekstmengder.
- Bruk én hero-komposisjon, en tydelig moduloversikt og korte støtteavsnitt. Unngå fem nesten like «venstre tekst / høyre bilde»-seksjoner etter hverandre.
- Normaliser avstand mellom seksjoner etter innhold; ikke kombiner svært stor illustrasjon med maksimal padding overalt. Nåværende 56–96 px seksjonspadding er en egnet start, ikke en regel som må økes.
- Bruk autentiske bilder uten falske nettleservinduer, flytende «godkjent»-merker, simulerte varsler eller pynt som kan forveksles med appfunksjoner.
- Ikke tilføy kundelogoer, anmeldelser eller «juridisk godkjent»-merker uten dokumentasjon.
- Behold enkle rammer, moderate hjørner og beskjedne skygger. Ingen gradientbakgrunn eller illustrert håndverker er nødvendig for å forklare produktet.

## 9. Mobil og responsive hensyn

1. Hero: tekst, hovedhandling og produktnavn først. Fullbreddeknapp på små skjermer; sekundærlenken er tydelig underordnet.
2. Moduler: én kolonne; ingen obligatorisk horisontal sveiping. Ikke gjør bildene til uleste miniatyrer bare for å få lik korthøyde.
3. Flyter: HTML-tekst i normal skriftstørrelse med vertikal rekkefølge. Alle fire støttede løp skal være tilgjengelige uten å åpne en originalfil.
4. Kontraktbilder: følg Phase 9C.2A/9C.3-prinsippet om ingen oppskalering. Utelat for små utsnitt på mobil fremfor å forstørre dem. Tekstforklaringen skal være komplett uten bildet.
5. Tabeller og guider: bryt tekst naturlig, behold rad-/kolonneoverskrifter og unngå at den eneste tilgjengelige løsningen er horisontal scrolling.
6. Mobilmeny og sticky header beholdes. Ankerposisjoner må ha plass under headeren.
7. Behold eksplisitte bildedimensjoner, korrekte proporsjoner og lazy loading under hero. Bare valgt hero-medie prioriteres.
8. Valider 375 og 390 px samt 768, 1024 og 1440 px i implementeringsfasen. Denne auditen målte 390/768/1024/1440, ikke 375 px.
9. Behold dagens tilsiktede lyse hjemmesidetema under begge OS-preferanser med mindre eieren bestiller en separat temaendring. Redusert bevegelse gjelder fortsatt.

## 10. Bilder og komponenter som kan gjenbrukes

### Eksisterende hovedbilder

Alle optimaliserte stier i tabellen er relative til `public/`. Oppgitte størrelser er filstørrelser, ikke målte nettverksoverføringer.

| Bruk | Eksisterende fil | Dimensjoner | Bytes | Vurdering |
| --- | --- | --- | ---: | --- |
| Oversikt | `images/product/overview/optimized/jobbleder-home-overview-e9a124620412.webp` | 1918 × 1077 | 77 266 | Ekte helhetsbilde; egnet til struktur og større visning. |
| Oversikt mobil | `images/product/overview/optimized/jobbleder-home-overview-mobile-880aee00ae06.webp` | 392 × 216 | 5 688 | Bare registrering og faktura; ikke tilstrekkelig som eneste produktorientering. |
| Timeliste | `images/product/timeliste/optimized/jobbleder-home-timelist-1ed52e78b8c6.webp` | 608 × 512 | 49 762 | Dokument-/appoversikt. |
| Timeliste mobil | `images/product/timeliste/optimized/jobbleder-home-timelist-mobile-208a0fd31c80.webp` | 300 × 104 | 7 234 | Smalt radutsnitt; bruk bare til det utsnittet faktisk viser. |
| Tilbud | `images/product/tilbud/optimized/jobbleder-home-offer-59f2cd7e7af2.webp` | 506 × 360 | 19 060 | Autentisk liggende tilbudseksempel. |
| Kontrakt-PDF | `images/product/kontrakt/optimized/jobbleder-home-contract-document-249c17de7105.webp` | 508 × 720 | 37 384 | Eldre, ekte dokumenteksempel; ikke fremstill det som eksporten fra en annen vist kontraktkonfigurasjon. |
| Premium-faktura | `images/product/invoice/optimized/jobbleder-invoice-premium-logo-fe289b390386.webp` | 947 × 1251 | 51 534 | Har allerede presis Premium-merking. Unngå at dette er eneste bevis for det som er gratis. |
| Flyt, full | `images/product/docflow/optimized/jobbleder-home-document-flow-940f0666f4cc.webp` | 1536 × 1024 | 1 005 366 | Alle fire løp, men stort og med rastertekst. |
| Flyt, kompakt | `images/product/docflow/optimized/jobbleder-home-document-flow-compact-a1de69c9b05c.webp` | 1442 × 597 | 610 516 | Alle fire løp; eksisterende tabletvariant. |
| Flyt, mobil | `images/product/docflow/optimized/jobbleder-home-document-flow-mobile-3dbe42d3e7a8.webp` | 1000 × 597 | 408 308 | Alle løp bevart, men teksten blir liten ved ca. 340 px visning. |

Ved 1440 px velges seks bildefiler som summerer til **1 240 372 bytes**, hvor flytillustrasjonen står for omtrent 81 %. Ved 390 px summerer valgte filer til **529 208 bytes**, med flytillustrasjonen som største fil. Dette er et konkret grunnlag for å vurdere HTML-flyter, men ikke et målt Lighthouse-resultat eller et løfte om en bestemt ytelsesgevinst. JS, fonter, cache og øvrige ressurser er ikke inkludert.

### Flere relevante eksisterende alternativer

- `public/images/product/timeliste/optimized/jobbleder-timelist-form-0ef832050c88.webp` — 654 × 720, 47 768 bytes; timelisteoppretting. Mobilvariant `jobbleder-timelist-form-mobile-683400a49c39.webp`, 520 × 548.
- `public/images/product/mobile/optimized/registration_form_mobile-35f62cf2d7be.webp` — ekte mobil Registreringer; dimensjoner/alt hentes fra `content/instructionMobileMedia.json` ved eventuell bruk. Ikke presenter det som en native mobilapp.
- `public/images/product/tilbud/optimized/jobbleder-offer-editor-efed9bd605e5.webp` — 1084 × 342, 32 496 bytes; tilbudslinjer som alternativ til enda en hel PDF.
- `public/images/product/invoice/optimized/jobbleder-invoice-editor-80c02f47c4d3.webp` — 1917 × 906, 73 136 bytes; fakturaskjema. Mindre eksisterende kundelinje-/sumutsnitt finnes i samme manifest.
- `public/images/product/invoice/optimized/jobbleder-invoice-free-8239cf43dbea.webp` — 959 × 1251, 52 268 bytes; autentisk Free-dokument med merking.
- `public/images/product/kontrakt/optimized/jobbleder-contract-2-hero-cbbb9ad4befa.webp` — 534 × 260, 19 084 bytes; godkjent kontraktsoppretting. Filnavnet er internt, ikke publikumstekst.
- `public/images/product/kontrakt/optimized/jobbleder-contract-2-work-02fb97838ded.webp` — 425 × 228, 15 544 bytes; arbeidsrader. Ikke bruk alle kontraktutsnittene på hjemmesiden.
- `public/images/product/timeliste/source/project_card_timelist_count_by_name.png` — 936 × 684, 25 353 bytes; prosjektstatistikk og timelister per arbeidernavn. Viser også tomme felt, tidsgrense og varsel; ikke et rent markedsføringsbilde.
- `public/images/product/timeliste/source/client_card_add_timelist_by_client_name_.png` — 594 × 540, 75 323 bytes; kunde, tilknyttet prosjekt og dokumenter. Har blandet norsk/engelsk og er ikke en komplett demonstrasjon av kundebehandling.

De to siste filene er faktisk inspisert, ikke bare identifisert fra navnene. De gir noe visuell evidens for relasjoner, men bør ikke brukes til nye løfter om kontotilgang, lønn eller automatisert oppfølging. Det er ikke nødvendig med nye bilder for å lage en nøktern tekstseksjon om kunder og prosjekter. En mer gjennomarbeidet bildevisning av disse områdene kan være en senere, særskilt godkjent oppgave.

### Komponentvalg

| Eksisterende løsning | Anbefalt bruk |
| --- | --- |
| SiteHeader / SiteFooter | Gjenbruk uendret; ikke lag en separat hjemmesidenavigasjon. |
| SectionContainer, ApplicationCTA, ResourceLink | Gjenbruk for bredder, knapper, lenker og faktiske destinasjoner. |
| ProductMedia | Gjenbruk dimensjoner, bildevarianter, captions og tilgjengelige fullstørrelseslenker. Velg alt som passer både desktop- og mobilutsnitt. |
| FeatureIntroduction | Tilgjengelig for enkel introduksjon, men ikke tving fire kompakte modulkort inn i en fullbreddekomponent som gjenskaper dagens lengde. |
| ContractMedia | Bruk bare hvis ett godkjent kontraktutsnitt trengs; native størrelsestak og mobilutelating må beholdes. |
| Timeliste/Tilbud/Kontrakt plansammenligning | Gjenbruk tabellmønsteret og den bekreftede modellen. Dette er foreløpig sidemarkup, ikke en generisk delt komponent. |
| Faktura PlanComparison / ProductFAQ | Gode semantiske/visuelle referanser, men Faktura-spesifikt innhold og stilavhengigheter gjør dem uegnet som direkte innhold på hjemmesiden. |
| Native details/summary | Gjenbruk mønsteret for en liten FAQ. Ingen ny accordion-avhengighet. |
| FinalCTA | Gjenbruk stilmønster og CTA. Unngå å endre alle andre sider hvis teksten skal være hjemmesidespesifikk. |

Ingen nye avhengigheter eller en generell ombygging av felleskomponentene er nødvendig for forslaget.

## 11. SEO og interne lenker

### Eksisterende SEO som bør beholdes

- URL `/` og canonical `https://www.jobbleder.no/`.
- Arvet tittel: **«Jobbleder – Faktura, kontrakt, timeliste og tilbud på minutter»**.
- Beskrivelse: **«Lag faktura, kontrakt, timeliste og tilbud enkelt i nettleseren. Jobbleder er laget for håndverkere og små bedrifter.»**
- Open Graph: tittel «Jobbleder», beskrivelse «Lag faktura, kontrakt, timeliste og tilbud enkelt i nettleseren.», WWW-URL, `no_NO` og website-type. Twitter bruker tilsvarende bredt budskap.
- Organization- og WebSite-data fra root layout. Hjemmesiden har i dag ingen egen FAQPage-data.
- Ingen eksplisitt noindex i observert HTML. Robots tillater `/`; sitemap inkluderer den kanoniske hjemmesiden.
- Eksisterende produktankre og SEO-destinasjoner, særlig de fire hovedproduktsidene.

Det er ikke dokumentert et metadata-problem som rettferdiggjør en endring nå. Behold metadata i første implementering og vurder eventuelle forbedringer separat med søkedata. Ikke endre root-layoutens metadata for å løse et rent hjemmesidespørsmål. Ny hero kan få et mer beskrivende H1 etter godkjenning, men skal fortsatt ha bred produktintensjon og bare ett H1.

Hjemmesiden skal svare på «hva er Jobbleder?» og «passer det for min virksomhet?». Detaljert innhold om «timeliste mal», «tilbud eksempel», fakturakrav og kontraktsklausuler beholdes på de etablerte fag-/produktsidene. Felles dokumentord er naturlig emneoverlapp; det alene dokumenterer ikke skadelig kannibalisering.

### Lenker som bør være enkle å finne

Primære modullenker: `/timeliste-mal`, `/tilbud-mal`, `/kontrakt-mal`, `/fakturaprogram-gratis`.

Kontekstuelle lenker der handlingen forklares:

- `/timeliste-mal#registrer-pa-mobil`
- `/instruksjoner#importer-arbeidsokter-til-timeliste`
- `/instruksjoner#timeliste-til-faktura`
- `/instruksjoner#lag-kontrakt-fra-tilbud`
- `/instruksjoner#kontrakt-til-faktura`
- `/instruksjoner#tilbud-til-faktura`
- `/instruksjoner#hvordan-kunder-fungerer`
- `/instruksjoner#hvordan-prosjekter-fungerer`
- `/instruksjoner#hvordan-rapporter-fungerer`

Dette er eksisterende implementerte ankere, kontrollert mot kildekoden. Eksisterende bredere lenke til `/instruksjoner#dokumenter` kan beholdes som hovedinngang; de mer presise ankerlenkene hører til relevante løp. Ikke gjenta alle disse lenkene under hver modul.

Behold dagens 17 faglige ressursdestinasjoner, også om etiketter/komposisjon gjøres mer kompakte. Ingen redirects, URL-endringer eller endringer i sitemap/robots anbefales.

## 12. Tilgjengelighet

Nåværende åtte axe-kjøringer med WCAG 2/2.1 A/AA fant ingen rapporterte brudd. Incomplete kontrastvurderinger gjelder dekorative, `aria-hidden` pil-/chevrontegn. Dette er ikke bevis på at all tilgjengelighet er ferdig verifisert. Rastertekst i produktbilder blir ikke fullstendig kontrastkontrollert av axe.

Konkrete krav til neste fase:

- Behold skipplenke, landemerker, ett H1 og en logisk H2/H3-struktur.
- Native menydisclosures og FAQ må kunne brukes med tastatur og ha tydelig synlig fokus. Ingen nye hover-avhengige handlinger.
- Behold bildelenkenes synlige «Åpne hele bildet» i det tilgjengelige navnet. Alt og caption beskriver det reelle bildet og må ikke antyde et annet dokument eller en annen tilstand.
- Forklar de fire flytene med ekte tekst, lesbar på mobil og i hjelpemidler. Ikke legg samme lange forklaring dobbelt i alt, caption og synlig liste.
- Pilretning/farge kan støtte, men ikke alene formidle, rekkefølgen. Behold semantiske listeforbindelser.
- Free/Premium-tabellen trenger caption og rad-/kolonneoverskrifter. FAQ bruker synlig spørsmålstekst med native åpne/lukke-tilstand.
- Behold god kontrast i både lyse seksjoner og mørk avslutning. Ikke la globale mørktema-variabler gjøre captions grå på hvit bakgrunn.
- Ikke innfør autoplay, karusell eller bevegelse som forklaring. Redusert bevegelse skal fortsatt slå av smooth scroll og eventuelle overganger.
- Ikke gjør hele modulkort klikkbare hvis de samtidig inneholder en egen bilde-/produktlenke. Unngå nestede lenker og uklar tabrekkefølge.

## 13. Gjennomføringsplan for Phase 9C.4B

### Trinn 1 — Avklar designvalgene

Godkjenn ett hero-konsept, kompaktheten til de fire modulene, HTML-flyter og om kunder/prosjekter skal vises med tekst eller et eksisterende bilde. Godkjenn kort norsk publikumstekst. Ikke begynne med nye grafikker for å avgjøre informasjonsarkitekturen.

### Trinn 2 — Avgrens lokal implementering

Forventet hovedomfang er `components/home/Homepage.tsx` og `components/home/home.module.css`, samt en ny implementeringsrapport. Gjenbruk eksisterende manifester. Eventuelle endringer i delte komponenter må begrunnes konkret og verifiseres mot forbrukersidene. Ikke gjør en generell CSS-/komponentrefaktorering.

Behold alle nåværende bildekilder. Ingen regenerering av de godkjente kontraktgrafikkene. Unngå ny mediebehandling hvis eksisterende filer fungerer. Ikke gjør endringer på produktsider, blogg, innlogging eller API-er som del av hjemmeimplementeringen.

### Trinn 3 — Bygg innholdet i riktig rekkefølge

Implementer hero og balanserte moduler først, så semantiske flyter, kunde-/prosjektforklaring og Free/Premium. Komprimer onboarding/ressurser og legg til en kort FAQ. Vurder total leselengde etter hver del, slik at nye produktområder erstatter gjentakelse fremfor å bygge en stadig lengre side.

### Trinn 4 — Verifiser

- TypeScript, full ESLint, produksjonsbygg og relevante eksisterende regresjonstester.
- Nettleser ved 375, 390, 768, 1024 og 1440 px, begge OS-preferanser og redusert bevegelse.
- Bilder: originalproporsjoner, lesbarhet, fullstørrelseslenker, riktige varianter, ingen oppskalering av små kontraktbilder, ingen feil dokumentrelasjoner.
- Navigasjon: eksisterende ankre, alle fire hovedprodukter, alle beholdte guider, instruksjonsankre og faktiske CTA-destinasjoner.
- Tilgjengelighet: axe med FAQ/meny åpnet, tastatur, fokus, kontrast og bilde-/lenkenavn.
- SEO: før/etter-sammenligning av canonical, metadata, strukturert data, H1 og indexability. FAQ-data bare hvis synlig innhold og schema samsvarer.
- Ytelse: Lighthouse mobil/desktop og målt LCP/CLS, valgt bildepayload og JS. Rapporter laboratoriemålinger som lokale, ikke produksjonsresultater.
- Regresjon: Faktura, Timeliste, Tilbud, Kontrakt og Instruksjoner skal være uendret og fungere.

Denne analysefasen har ikke kjørt nye TypeScript-, ESLint-, build- eller Lighthouse-målinger. Tidligere fases resultater brukes ikke som nye testresultater.

### Trinn 5 — Eiergjennomgang og publiseringskrav

Lever lokal preview og skjermbilder før eventuell commit/deploy. Bekreft økonomisk korrekthet i riktig applikasjonsarbeidsstrøm før publisering: relevante konverterings-/beregningsfeil skal være rettet og regresjonstestet, med sporbar akseptanse. Se `docs/phase-9c2a-invoice-copy-release-gate.md`. Verken denne designgodkjenningen eller markedsføringssidens tekniske tester erstatter det kravet.

Offentlig tekst skal beskrive tilsiktet produktflyt uten utviklingshistorikk, manuelle bildekorreksjoner, interne versjonsnavn eller påstander om feilfri verifisering. Ingen automatisk utsending, elektroniske signaturer, EHF, regnskapsintegrasjon, lønn eller automatisk betalingsoppfølging skal legges til uten ny dokumentasjon. Eksisterende relevante juridiske merknader skal fortsatt ivaretas når kontraktinnhold gjenbrukes.

## 14. Åpne beslutninger for eieren

| Beslutning | Anbefaling | Alternativ / konsekvens |
| --- | --- | --- |
| Hero | Konsept A, samlet produkt og ekte oversikt. | Konsept B hvis arbeidsflytene skal være det primære inngangspunktet; da må senere flytseksjon kortes ned. |
| Fire moduler | 2 × 2 på desktop, én kolonne på mobil; lik redaksjonell vekt. | Kortere fullbreddeseksjoner kan beholdes, men gir mindre reduksjon i totalhøyde. |
| Dokumentflyt | HTML som primær forklaring, to hovedløp og to eksplisitte snarveier. | Behold infografikk som sekundær lenke; ikke som ekstra stor standardillustrasjon i tillegg. |
| Mobilhero | Utelat for lite oversiktsbilde og behold lesbar produkttekst. | Vis eksisterende mobilutsnitt, men bare med presis caption og uten å la det stå alene som helhetsbevis. |
| Kunder/prosjekter | Kort tekstseksjon først, med eksisterende instruksjonslenker. | Ett ekte bilde etter separat vurdering; eksisterende kilder har innholdsmessige svakheter. |
| Free/Premium | En kort, samlet sammenligning uten prisopplysninger. | Lite PDF-eksempel kan legges til hvis det forklarer merkingen bedre enn tekst. |
| FAQ og guider | Kort produkt-FAQ og kompakt videreføring med eksisterende faglenker. | Unngå en lang ny fagartikkel på hjemmesiden. |
| Tema og SEO | Behold lyse flater, nåværende metadata og alle URL-er. | Separat oppdrag kreves hvis mørkt tema eller metadataendringer ønskes. |

Ingen beslutning forutsetter at det lages oppdiktede skjermbilder, endres applikasjonskode eller åpnes for publisering nå. Kun dette forslagsdokumentet er opprettet i repositoryet.

**PHASE 9C.4A COMPLETE — AWAITING OWNER DESIGN APPROVAL**
