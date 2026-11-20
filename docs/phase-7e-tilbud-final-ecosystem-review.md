# Phase 7E — Final Tilbud ecosystem review

20. november 2026. Read-only release audit. Ingen rettelser, kildeendringer, commit, push eller deploy.

## 1. Executive summary

Den lokale releasekandidaten har ingen identifiserte uløste P0/P1-funn. F01–F07 fra Phase 7A er løst i den undersøkte arbeidsflaten. F08 er delvis løst; F09–F12 er fortsatt avgrenset backlog. En mindre dokumentbeskrivelsesfeil på den uendrede produktsiden er funnet ved ny bildeverifikasjon.

Gjenstående registrerte forhold: **P0: 0, P1: 0, P2: 4, P3: 3**. Tallene gjelder releasekandidaten, ikke den eldre publiserte versjonen. Produksjonen har fortsatt den historiske feil-lenken fra F01; den lokale rettelsen er ikke publisert av denne auditten.

Ferske kontroller omfatter 25 ruter i både lokal preview og produksjon, 61 lokale responsive/axe-tilfeller, 207 HTTP-destinasjonskontroller, åtte korrekte instruksjonsankerobservasjoner, tastaturkontroller og autentiske bilder. TypeScript, full ESLint og produksjonsbygg består. Ingen eksisterende fil er endret under auditten.

Juridisk omtale er kvalifisert og skiller praktiske råd fra rettslige regler. Offentlig veiledning støtter de publiserte hovedpoengene. Direkte Lovdata-tilgang er blokkert; full gjeldende lovtekst og særtilfeller er ikke fremstilt som verifisert. Dette er ingen juridisk etterlevelsesgaranti.

## 2. Final deployment verdict

**READY FOR DEPLOYMENT**

Dette er vurderingen av den undersøkte lokale arbeidsflaten. Ingen påvist teknisk, redaksjonell, produktfaglig eller tilgjengelighetsmessig P0/P1 hindrer utrulling. De dokumenterte P2/P3-forholdene krever ikke en ny redesign eller obligatoriske rettelser før release. Eier kan legge dem i backlog.

Vurderingen er ikke en publiseringshandling. En senere godkjent release må stage riktig utvalg, verifisere Vercel og kontrollere den nye produksjonen. At de gamle produksjonssidene fortsatt mangler lokale forbedringer, er forventet før utrulling.

## 3. Scope and methodology

Gjennomgått tilgjengelige Phase 7A/7B/7C/7D/7F/7G-rapporter og nåværende kilde. Tidligere testpåstander er ikke brukt som erstatning for nye kontroller.

Primær kilde: `content/seoPages.ts`, `content/blogPosts.ts`, `content/offerProduct.ts`, `components/product/offer/`, `components/editorial/OfferFigure.tsx`, instruksjonsinnhold/-guider, de faktiske route-rendererne, delte nav-/footer-/FAQ-/mediekomponenter, sitemap/robots og tracking-API. Appkilde i `C:/Users/ddlas/Code/jobbleder_app/src/` er undersøkt lesende.

Miljøer: lokal Next-produksjonsbygning på `http://127.0.0.1:3041` og direkte `https://www.jobbleder.no`. Chrome headless, faktiske HTTP-responser, axe-core med WCAG 2 A/AA, 2.1 AA, 2.2 AA og best practices. OS-preferanser er emulert; dette er ikke fysisk enhetstest.

Baseline: HEAD `0c7b0785bcd638c9d1d87475f47bedb445e4b5b6`, med tidligere ucommittet Phase 7-arbeid. SHA-256 registrert for **323 eksisterende filer** før kontrollene. Alle er identiske ved etterkontrollen.

Nye dokumentasjonsfiler fra denne auditten:

- `docs/phase-7e-tilbud-final-ecosystem-review.md`
- `docs/phase-7e-diagnostics/route-link-seo.json`
- `docs/phase-7e-diagnostics/browser-accessibility.json`
- `docs/phase-7e-diagnostics/verification.json`

JSON-filene inneholder faktiske ruter, metadata, lenker, testtilfeller, incomplete-elementer/beregnede stiler, ankeretterkontroll og HTTP-resultater. Ingen secrets eller konfigurasjonsverdier er eksportert. Rå undersøkelsesfiler og større skjermbilder ligger utenfor appkilden i `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase7e/`.

## 4. Complete route inventory

Repositoryets faktiske Tilbud-topic har fire SEO-ruter; Tilbud-kategorien har fem artikler. To sentrale artikler ligger i andre kategorier. Ingen ny «pristilbud-mal»-rute er funnet. Historisk `/blogg/folle-opp-tilbud` beholdes.

| Kjernens URL | Oppgave / implementasjon |
| --- | --- |
| `/tilbud-mal` | Produktpresentasjon; `OfferProductPage.tsx`, `offerProduct.ts`. |
| `/tilbud-eksempel` | Autentisk utfylt tilbud; `OfferExamplePage.tsx`, SEO-record fra linje 493. |
| `/lage-tilbud` | Åtte praktiske opprettingssteg; `OfferGuidePage.tsx`, SEO-record fra linje 393. |
| `/hvordan-folge-opp-tilbud` | Kort oppfølgingsrutine; samme lokale guidekomponent, SEO-record fra linje 640. |
| `/blogg/tilbud-eller-pristilbud` | Prisgrunnlag; `blogPosts.ts` fra linje 1350. |
| `/blogg/lage-tilbud-byggebransjen` | Oppdragsavklaring; fra linje 195. |
| `/blogg/lage-tilbudsdokument` | Dokumentets leserekkefølge; fra linje 684. |
| `/blogg/feil-med-tilbud` | Fem konkrete feil/rettelser; fra linje 387. |
| `/blogg/folle-opp-tilbud` | Kundedialog og to meldinger; fra linje 864. |
| `/blogg/tilbud-vs-kontrakt` | Tilbud, aksept og avtaledokument; fra linje 1441. |
| `/blogg/fra-tilbud-til-kontrakt-og-faktura` | Begge dokumentveier; fra linje 1516. |

Ytterligere 14 undersøkte kontekst-/regresjonsruter: `/`, `/instruksjoner`, `/blogg`, `/blogg/kategori/tilbud`, `/blogg/kategori/oversikt`, `/blogg/kategori/kontrakt`, `/blogg/gratis-fakturaprogram-handverkere`, `/blogg/forskjell-faktura-tilbud-timeliste`, `/blogg/nar-trenger-du-kontrakt`, `/kontrakt-handverker`, `/kontrakt-mal`, `/timeliste-mal`, `/timeliste-mal-pdf`, `/fakturaprogram-gratis`.

Alle 25 returnerte HTTP 200 i begge miljøer. Komplett metadata-/overskrifts-/utgående og inngående lenkeregister per rute finnes i `route-link-seo.json`.

Instruksjonsankre undersøkt i begge miljøer: `#opprett-tilbud`, `#lag-kontrakt-fra-tilbud`, `#tilbud-til-faktura`, `#kontrakt-til-faktura` på `/instruksjoner`. De to første peker på details; de to siste peker på underseksjoner i en details. Alle åtte etterkontroller åpnet overordnet instruksjon og fokuserte riktig SUMMARY eller H4.

## 5. Phase 7A–7G history

| Fase | Faktisk nåværende resultat |
| --- | --- |
| 7A | Opprinnelig audit med F01–F12; brukt som sporbar baseline. |
| 7B | Rett lenkemål i feilartikkelen; ferdig tilbud/kontrakt-forklaring. |
| 7C | Hel Tilbud 29, feltforklaring og åtte opprettingssteg med responsive autentiske bilder. |
| 7D | Fem artikler har særskilte oppgaver, konkrete eksempler og kontekstlenker. |
| 7F | Eksempelsiden har egen navy redaksjonell komposisjon. |
| 7G | Opprettings-/oppfølgingsguidene bruker samme visuelle prinsipper med forskjellige strukturer. |
| 7E | Denne avsluttende, lesende kontrollen. Ingen ny implementering. |

## 6. Phase 7A finding closure matrix

Statusene gjelder den lokale kandidaten. Produksjonsavvik før release er beskrevet separat.

| ID / opprinnelig nivå | Opprinnelig problem | Håndtert i | Nåværende bevis | Status |
| --- | --- | --- | --- | --- |
| F01 / P1 | Feilartikkel lenker til 404 `/folle-opp-tilbud`. | 7B, bevart 7D | Nåværende href er `/blogg/folle-opp-tilbud`; lokal målrespons 200. Produksjonens gamle feiladresse er fortsatt 404. | RESOLVED |
| F02 / P1 | Eksempelsiden viser ikke et eksempel. | 7C/7F | Faktisk Tilbud 29 lastes, forklares og åpnes med tastatur i originalstørrelse. | RESOLVED |
| F03 / P1 | Uferdig tilbud/kontrakt-artikkel og utilstrekkelig avtaleomtale. | 7B | Ingen gamle ellipsetekster; kvalifisert avtale-/akseptskille, konkret illustrasjon og workflow-lenke. §9 kildevurderer ordlyden. | RESOLVED |
| F04 / P2 | Opprettingsguiden mangler fremgangsmåte. | 7C/7G | Alle åtte nummererte steg, opprinnelig rekkefølge, editor, PDF og instruksjonslenke. | RESOLVED |
| F05 / P2 | Prisgrunnlag er utilstrekkelig forklart. | 7D | Fastpris, overslag og timepris med merkede illustrasjoner, forbruker/B2B-scope og offentlig veiledning. Ingen generell 15 %-regel publisert. | RESOLVED |
| F06 / P2 | Tre generiske artikler med lite praktisk nytte. | 7D | Bransjeavklaringer, dokumentstruktur og fem feil har forskjellige eksempler/oppgaver. | RESOLVED |
| F07 / P2 | Oppfølging overlapper og kan forstås som appautomatikk. | 7D/7G | Kort rutine versus bloggens to manuelle meldinger; eksplisitt ingen automatiske påminnelser/aksept. | RESOLVED |
| F08 / P2 | For generelle hjelpelenker og svak workflow-oppdagelse. | 7C/7D/7F/7G | Guider/blogger har konkrete ankre/workflow-lenker. Hovedproduktet bruker fortsatt gyldig `#opprett`/`#dokumenter`, uten like presis vei. | PARTIALLY RESOLVED |
| F09 / P2 | Produktets mobile editorutsnitt er svært lavt. | Ikke endret | Ved 375 er det brede produktutsnittet fortsatt lite; originalen fungerer. Opprettingsguidens nye portrett løser ikke produktets egen figur. | DEFERRED |
| F10 / P2 | Tilgrensende oversiktsartikkel gjør fakturering etter ferdig jobb kategorisk. | Ikke endret | Både avsnitt og liste i `forskjell-faktura-tilbud-timeliste` har fortsatt dette for snevre tidspunktet. | DEFERRED |
| F11 / P3 | Hubtittel/kortrekkefølge/eldre footerfinish. | Ikke endret | Dobbel «Jobbleder» i hubtittel reprodusert. Kildeorden og eldre footer beholdt; ingen vesentlig clipping funnet. | DEFERRED |
| F12 / P3 | Manglende Tilbud-query/side-/konverteringsdata. | Ikke tilgjengelig | Ingen GSC-eksport i prosjektet; ingen ny måleperiode eller data levert. | OPEN |

Ingen ny P0/P1 tilskrives 7B–7G. Nyregistrert N01 i §18 er en eldre produkttekstfeil som ikke ble fanget i 7A; produktfilen er uendret. N02 dokumenterer lokal analytics/TLS, ikke en ny funksjonsregresjon.

## 7. Product functionality verification

**CODE** betyr lest lokal appkilde, ikke bekreftet deployet appversjon eller ende-til-ende-transaksjon. **MEDIA** betyr faktisk bildebevis. **OWNER** betyr etablert eierbekreftelse.

| Påstand | Bevis og status |
| --- | --- |
| Kunde/prosjekt, beskrivelser, antall, enhetspris, MVA, datoer/gyldighet | CODE + MEDIA: `jobbleder_app/src/ui/documents/CreateDocument2026.jsx`, tilbuds-/fakturaeditor rundt linje 2260; faktisk editor viser feltene. |
| Tilbud → Faktura | CODE + MEDIA: `viewmodels/documentPreview.viewmodel.js:443` ff. eksponerer handling; `Main.js:1863` ff. håndterer brukervalget; `domain/documents/helpers/buildInvoiceFromOffer.js` kopierer innhold/kildereferanse. |
| Tilbud → Kontrakt | CODE + MEDIA: `Main.js:1855` ff. åpner kontraktsoppretting; `CreateDocument2026.jsx:1312` ff. fyller selvstendig kontraktsform fra tilbudet. |
| Selvstendig kontraktsredigering | CODE + MEDIA: edit-document-handling og eget kontraktsskjema; revidert Kontrakt 11 vises i eksisterende workflow. Ingen løfte om at den opprinnelige PDF-en er eksporten av den senere konfigurasjonen. |
| Kontrakt → Faktura | CODE + MEDIA: create-invoice for kontrakt, egen kilde og seed; feltoverføring i `CreateDocument2026.jsx` før tilbud-til-kontrakt-grenen. |
| Brukerinitiert konvertering/PDF | CODE: eksplisitte action handlers, videre editor og generate-pdf; ingen automatisk kundesending i de inspiserte handlingene. |
| Free-oppretting, PDF og konvertering | OWNER + UI-CODE + MEDIA. `Main.js:1965` ff. har «download free»-vei til regenerering; konverteringshandlingene er ikke Premium-låst der. Virkelig backend-entitlement/PDF-kjøring er ikke testet. |
| Free-merking; Premium uten merking/egen logo | OWNER + MEDIA + UI-CODE. Free-merket dokument; branding-/logo-innstillinger i `viewmodels/settings.viewmodel.js:266` ff. Ingen ny pris påstått. Serverens merke-/rettighetshåndheving er ikke ende-til-ende-verifisert. |

Gjennomgått gjeldende brukerrettet tekst for automatisk e-post, påminnelser, lesesporing, akseptportal, e-signatur, bankintegrasjon og native mobilapp. Ingen positiv, udokumentert funksjonspåstand funnet i kjernen. Negative presiseringer skal ikke telles som produktløfter. Mobil omtales som nettleser. Eventuell annen mobilkode i apprepositoryet er ikke bevis for en publisert native app.

## 8. Authentic Tilbud 29 verification

Bildet `public/images/product/tilbud/optimized/jobbleder-offer-pdf-085c0b3a1244.webp` er åpnet og lest på nytt: **506 × 720, 20 340 byte**. Original `source/exported_tilbud_A4.png`: **506 × 720, 39 992 byte**. Ingen bildeendring.

| Felt | Faktisk synlig verdi |
| --- | --- |
| Nummer / avsender | Tilbud 29 / Demo Company. |
| Kunde | Eksempel Eiendom, med demonstrasjonsadresse og organisasjonsopplysning. «AS» står ikke i kundenavnet. |
| Prosjekt | Ikke eget synlig PDF-felt. «Renovering av leilighet» finnes i editoren. |
| Arbeid / mengde | Legging av parkett / 1. Ingen oppgitt m² eller timeantall. |
| Enhetspris / netto | 12 000 / 12 000 kroner. |
| MVA / total | Eksemplets 25 %, 3 000 kroner / 15 000 kroner. |
| Datoer | Tilbudsdato 18.11.2026; gyldig gjennom 02.12.2026. Ikke arbeidets start/slutt. |
| Profil | Jobbleder-gratismerking. Hel side, inkludert blank nedre del. |

De nye guidene/bloggene skiller disse dokumentdataene fra råd om materialer, avgrensing, ekstraarbeid og tidsplan. Illustrasjonen med 20 m² i kontraktsartikkelen er uttrykkelig et annet tenkt eksempel.

Eksempelsiden presenterer et utfylt dokument, ikke en gratis blank PDF-nedlasting. 375 px viser ca. 327 px bredde; desktop er maksimalt naturlige 506 px. Proporsjoner er bevart. Fin tekst i selve mobilbildet er liten, men sentrale fakta står i HTML og originalen kan åpnes. Ingen kunstig oppskalering eller skjult beskjæring.

Editorbildet er også åpnet på nytt: desktop 1084 × 342, kunde/prosjekt, utstedt/gyldig, parkettlinje, 12 000 × 1, 25 % og totalsummer. Mobilvarianten 332 × 720 viser et eget autentisk nettleseropptak; caption opplyser korrekt at MVA-verdien, summer og lagreknapper er utenfor utsnittet. Ingen falsk appmodell.

Originalvisning ble aktivert med Enter på dokument og editor ved 375 og 1440 px: fire korrekte navigasjoner, riktig bilde og naturlige dimensjoner. Preview-lenker og synlige bilder er dessuten gjennomgått i hele matrisen. Tolv bildeobservasjoner fra produksjonens produkt/workflow ble dekodet uten feil.

**Avvik N01:** `OfferProductPage.tsx:42–43` omtaler prosjekt som del av dokumentet og «Eksempel Eiendom AS». Det er en liten, bekreftet motstrid med bildet og de nyere guidene; se §18.

## 9. Norwegian legal accuracy matrix

Kilder kontrollert 20.11.2026:

- **L1:** [Lovdata — Avtaleloven](https://lovdata.no/lov/1918-05-31-4): direkte tilgang HTTP 405. Ikke fulltekstverifisert.
- **L2:** [Lovdata — Håndverkertjenesteloven](https://lovdata.no/lov/1989-06-16-63): direkte tilgang og alternativ kapitteladresse HTTP 405. Et søkeresultat er ikke brukt som bekreftet gjeldende lovtekst.
- **L3:** [Justisdepartementets tolkningsuttalelse om avtaleform](https://www.regjeringen.no/no/dokumenter/avtaleloven-generelt/id443443/): tilgjengelig. Offisiell, men historisk uttalelse fra 1999; støtter det generelle formfrihetsutgangspunktet, ikke full aktuell særregelkontroll.
- **L4:** [Forbrukerrådet — Bruk av håndverker](https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/): tilgjengelig. Dokumentasjonsråd.
- **L5:** [Forbrukerrådet — Sjekkliste](https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/sjekkliste-handverker/): tilgjengelig. Forbrukerkontekst, omfang/pris/endringer og dokumentasjon.
- **L6:** [Skatteetaten — Merverdiavgiftssatser](https://www.skatteetaten.no/satser/merverdiavgift/): tilgjengelig. Alminnelig sats 25 % og ulike reduserte satser.
- **L7:** [Regjeringen — Telefonsalg](https://www.regjeringen.no/no/tema/forbruker/telefonsalg/id750957/): tilgjengelig, oppdatert 01.10.2026. Viser hvorfor særlige formkrav ikke kan utelukkes generelt.

Forsøk på en nyere FKU-PDF ga timeout; den brukes ikke som verifisert autoritet. Ingen nye lovsitater eller detaljerte rettsvirkninger er utledet fra utilgjengelig materiale.

«Støttet» nedenfor betyr støttet av tilgjengelig offentlig veiledning i oppgitt kontekst, ikke at L1/L2 er lest i full gjeldende versjon.

| Eksakt side / kildepunkt | Påstand | Kontekst / autoritet | Status / ordlyd / eventuell handling |
| --- | --- | --- | --- |
| `/blogg/tilbud-vs-kontrakt`, `blogPosts.ts:1458` | Akseptert tilbud kan binde før separat kontrakt signeres. | Alminnelig avtaleform; L3, med særtilfeller illustrert av L7. | Generelt støttet, forsvarlig kvalifisert. Ingen rettelse nødvendig. Direkte L1 fortsatt utilgjengelig. |
| `/tilbud-eksempel`, `seoPages.ts:574` | Virkning avhenger av innhold, aksept og omstendigheter. | Avtaleinngåelse; L3/L7. | Ikke en universell automatikkregel. Eksakt konkret rettsvirkning ikke vurdert. |
| `/lage-tilbud`, `seoPages.ts:484` | Ikke anta at signert separat kontrakt alltid er nødvendig. | Samme generelle prinsipp; L3/L7. | Kvalifisert, ingen fullstendig formkravsgaranti. |
| `/hvordan-folge-opp-tilbud`, `OfferGuidePage.tsx`, Aksept | Ta vare på svaret; avtale kan oppstå. | Praktisk dokumentasjon og avtaleform; L3/L4. | Støttet på generelt nivå. Ingen rettelse. |
| `/blogg/folle-opp-tilbud`, `blogPosts.ts:933` | Aksept kan binde uten separat signatur; B2B og forbruker er ulike kontekster. | L3/L5/L7; L1/L2 utilgjengelige. | Ansvarlig avgrensning. Ikke verifisert som uttømmende regel for alle situasjoner. |
| `/blogg/tilbud-vs-kontrakt`, dokument-/endringsavsnitt | Å opprette eller endre dokumentet er ikke i seg selv kundens godkjenning. | Skille dokumentasjon fra avtale; L3/L4 og apphandlingene. | Støttet som konservativ presisering. |
| `/blogg/tilbud-vs-kontrakt`, `blogPosts.ts:1464`; `/tilbud-eksempel`, siste avsnitt | Forbrukerrådet anbefaler skriftlig kontrakt for dokumentasjon. | Håndverker/privatkunde; L4. | Direkte veiledningsstøtte. Ikke fremstilt som universell signaturplikt. |
| `/blogg/tilbud-eller-pristilbud`, fastpris | Bestemt sum gjelder beskrevet, avgrenset arbeid. | Praktisk prisforklaring, L5 for forbruker. | Rimelig/støttet forklaring, ikke et unntaksfritt prisrettslig sammendrag. |
| Samme side, prisoverslag | Anslag er ikke fri adgang til prisøkning. | Forbrukerprisveiledning L5. | Støttet. Ingen generell 15 %-rett eller universell B2B-grense påstått. L2-unntak er ikke nyverifisert. |
| Samme side, timepris | Skill sats, tidsbruk og avtalte tillegg. | Praktisk regneeksempel, ikke en rettslig garanti; L5 som kontekst. | Regnestykkene stemmer. Ingen lovplikt utledet av den illustrative satsen. |
| `/blogg/lage-tilbud-byggebransjen`, omfang/endringer | Avklar arbeid, materialer, tillegg og konsekvenser skriftlig. | Praktisk håndverkerråd; L5. | Støttet som råd; ingen automatisk rett til tillegg. |
| `/blogg/feil-med-tilbud`, fem feil | Manglende detalj gjør ikke automatisk ugyldig; revidert fil er ikke aksept. | Konservativ avgrensning, L3/L5. | Ingen materiell feil funnet; ikke en komplett gyldighetsanalyse. |
| `/lage-tilbud`, steg 4/6 og etter utsending | Material-/tidsavklaringer er råd, ikke universelle lovkrav. | L5; forskjell tilbuds-/arbeidsdato. | Ansvarlig og faktisk riktig om bildet. |
| `/blogg/lage-tilbudsdokument`, MVA; `/tilbud-eksempel`, pris; `/lage-tilbud`, steg 5 | 25 % er eksempelsats, ikke sats for alle salg. | L6. | Direkte støtte for satsvariasjon; korrekt avgrensning. Ingen kontroll av en virkelig kundes avgiftsplikt. |
| `/tilbud-mal`, råd/FAQ; workflow-artikkelen | Kontrakt kan lastes ned og signeres manuelt; konvertering gir ikke aksept/automatisk fakturering. | Produktflyt, ikke juridisk gyldighetsløfte. | CODE/MEDIA/OWNER støtter produktomtalen. Ingen e-signatur- eller legalitetsgaranti. |
| `/blogg/forskjell-faktura-tilbud-timeliste` | Faktura sendes kategorisk etter ferdig jobb. | Tidspunkt er avhengig av avtale og relevante regler; L5 viser betalingsordninger underveis. | For snever pedagogisk formulering, kjent F10/P2. Ikke vurdert som en full ulovlig-faktureringsinstruks. |

Ingen materiell ny juridisk feil er påvist. Fravær av lovteksttilgang er en reell begrensning. Ved senere detaljer om akseptfrister, særskilte formkrav, prisøkning eller lovpålagte klausuler må direkte juridisk verifikasjon fullføres først.

## 10. Editorial differentiation review

| Side | Tydelig ansvar / vurdering |
| --- | --- |
| `/tilbud-mal` | Produkt, PDF og konverteringer; ikke en detaljert opprettingsartikkel. |
| `/tilbud-eksempel` | Resultatet og faktiske felt. Praktiske råd er skilt fra PDF-innhold. |
| `/lage-tilbud` | De åtte handlingene i korrekt rekkefølge. |
| `/hvordan-folge-opp-tilbud` | Skannbar rutine og svarutfall. Ingen kopierte meldinger. |
| `/blogg/folle-opp-tilbud` | To komplette, manuelle meldinger og situasjonsavklaringer. |
| `/blogg/tilbud-eller-pristilbud` | Tre prisgrunnlag og merkede, hypotetiske beløp. |
| `/blogg/lage-tilbud-byggebransjen` | Rom, mengder, materialer, underlag, avfall, adgang og endringer. |
| `/blogg/lage-tilbudsdokument` | Partene, leserekkefølge, linjer, summer, datoer og sluttkontroll. |
| `/blogg/feil-med-tilbud` | Fem konkrete misforståelser med konsekvens og forbedring. |
| `/blogg/tilbud-vs-kontrakt` | Begreper og avtaleinngåelse, ikke en kopi av skjemaveiledningen. |
| Workflow-artikkelen | Begge konverteringer med dokument-/appbevis og manuell gjennomgang. |

Nødvendig felles kontekst om Tilbud 29, Free og manuell deling er gjentatt, men ingen betydelig duplisert artikkel er funnet. Oppfølgingssidene linker mellom kort rutine og detaljerte meldinger. Språket er praktisk Bokmål. Ingen ekstra ord, bilder eller CTA-er anbefales bare for mengdens skyld. N01 er den konkrete interne motsigelsen om eksempeldokumentet.

## 11. Visual consistency review

Tre godkjente SEO-sider bruker samme navy-variabler, overlinjer, responsiv typografi, kontrollerte tekstbredder, seksjonsflater, CTA-komponent, FAQ og ressursnav. Eksempelsiden prioriterer dokument/fakta; oppretting bruker 3 + 3 + 2 steg; oppfølging bruker rutine/kundesvar. De er ikke identiske maler.

Den faktiske Timeliste PDF-referansen er kontrollert i kode og i ny 8-tilfellers matrise. Den har samme brede redaksjonelle prinsipper, men egen preferansebasert palett og innholdsoppgave. De tre Tilbud-guidene er tilsiktet navy i begge preferanser. Det er ikke et krav om at referansens lysmodus skal innføres her.

Nye fullsidebilder ved 375/1440 er tatt etter bildeinnlasting. Visuelt gjennomgått dokument-, guide- og oppfølgingskomposisjoner, overskriftsbrudd, mobilstabling og fokus. Ingen ny materiell lesbarhets-/konsistensfeil funnet. Produktets eksisterende lave mobilutsnitt forblir F09; ingen subjektiv redesign foreslås.

Utvalgte ferske bevis:

- [Eksempelsiden desktop](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase7e/tilbud-eksempel-1440.png)
- [Opprettingsguiden mobil](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase7e/lage-tilbud-375.png)
- [Oppfølgingsguiden desktop](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase7e/hvordan-folge-opp-tilbud-1440.png)
- [Brødsmuler 768 px](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase7e/breadcrumb-lage-tilbudsdokument-light.png)

## 12. SEO audit

Alle 25 kontrollerte ruter har unik tittel i utvalget, ikke-tom beskrivelse, én H1 og forventet WWW-canonical. Ingen utilsiktet noindex eller X-Robots-blokkering funnet. Alle relevante ruter er inkludert i sitemap; fragmentankre skal ikke ha egne sitemapposter. Begge miljøers sitemap/robots svarer 200 og har samme innhold med WWW-host/sitemap og API/private-sperring.

Alle 17 SEO-records er eksakt like Phase 7A med unntak av `sections`. Alle 18 bloggrecords er eksakt like med unntak av `blocks`: metadata/H1-grunnlag/datoer er bevart. For de 20 rutene med bred 7A-baseline er faktisk rendret title, description, canonical, H1 og schema sammenlignet og like. De fem øvrige har fersk kilde-/produksjonskontroll; de er ikke kalt 7A-sammenligninger.

FAQPage-data finnes som de forventede spørsmål/svar i DOM, kommer fra samme kilde og lar seg åpne i testene. Article-datoer for de fem Tilbud-artiklene er fortsatt 2025-04-20, 2025-04-24, 2025-07-23, 2025-04-23 og 2026-03-05; kontrakts-/workflow-artiklene er fortsatt 2026-04-07. JSON-LD kan parses og har ingen ny udokumentert datatype/påstand. Dette er ikke en Google rich-result-validering eller garanti om FAQ-visning.

Søkeintensjonene er differensiert i §10. Tematisk overlapp alene er ikke dokumentert kannibalisering. Ingen GSC-eksport eller effektmåling foreligger. Ingen anbefaling om nye ruter, slugendring, sammenslåing eller redirects. Hubens doble merkenavn er F11/P3.

## 13. Internal linking matrix

| Fra | Relevante faktiske videreveier |
| --- | --- |
| `/tilbud-mal` | Alle fire Tilbud-ruter; `#opprett`, `#dokumenter`; Faktura/Kontrakt. De generelle ankrene virker. |
| `/tilbud-eksempel` | `/lage-tilbud`, `/tilbud-mal`, eksisterende workflow-artikkel og relaterte guider. |
| `/lage-tilbud` | Eksempel, `#opprett-tilbud`, produkt, oppfølgingsguide, tilbud/kontrakt-artikkel. |
| `/hvordan-folge-opp-tilbud` | Oppfølgingsblogg, tilbud/kontrakt, workflow, øvrige Tilbud-guider. |
| Prisartikkel | Eksempel og tilbud/kontrakt, med relevant ekstern prisveiledning. |
| Byggebransjeartikkel | Eksempel, oppretting og produkt. |
| Dokumentartikkel | Eksempel og oppretting. |
| Feilartikkel | Prisgrunnlag, eksempel og **riktig `/blogg/folle-opp-tilbud`**. |
| Oppfølgingsblogg | Kort guide, tilbud/kontrakt, opprettingsanker og workflow. |
| Tilbud/kontrakt | Tilbud/Kontrakt-produkter og workflow. |
| Workflow | Tilbud/Kontrakt/Faktura, de tre konverteringsankrene og fakturakrav. |

Komplett per-rute-liste og inngående referanser ligger i `route-link-seo.json`. Ingen av de 25 rutene mangler inngående lenke fra andre undersøkte sider. Det er ikke bare et sitemap som gjør kjernen oppdagbar; produktets guide-liste, blogg/kategorier og kontekstlenker er reelle innganger.

103 ulike lokale HTTP-destinasjoner fra lenkegrafen svarte alle 200. Produksjonens 104 destinasjoner ga 103 × 200 og én kjent 404: gamle `/folle-opp-tilbud`. Forskjellen skyldes F01 i eldre publisert innhold. Den faktiske bloggmål-URL-en fungerer i begge miljøer. Alle fire prioriterte instruksjonsankre er verifisert med riktig åpning/fokus i begge miljøer.

## 14. Accessibility findings

61 primærtilfeller med alle påkrevde axe-tagger: **0 bekreftede violations**. 54 tilfeller har minst ett incomplete-resultat; disse er undersøkt separat, ikke omklassifisert automatisk til pass.

`browser-accessibility.json` registrerer eksakt rute, bredde/preferanse, selektor, regel, beregnede farger, bakgrunnskjede og axe-begrunnelse for hvert unikt incomplete-element, med alle berørte tilstander. Manuell sluttvurdering:

| Element / berørte sider og bredder | Regel / reproduksjon | Beregnede forhold og manuell vurdering | Sluttstatus |
| --- | --- | --- | --- |
| Meny-chevron på tre navy-guider, 375/768/1280/1440, begge preferanser | `color-contrast`, bare symboltegn; reprodusert. | Dekorativt, `aria-hidden`, navngitt summary ved siden av. Lys tekst `#d5dfec` på `#101827`, ca. 13,19:1. Synlig og tastaturbetjent. | Manuelt verifisert pass for dette kontrollpunktet. |
| Nedpil ved «Se hele dokumentet» på `/tilbud-eksempel`, alle fire bredder/begge preferanser | `color-contrast`, symbol; reprodusert fra 7F. | Skjult dekorasjon; beskrivende understreket lenke. `#93c5fd` på `#172337`, ca. 8,74:1. | Manuelt verifisert pass. |
| Meny-chevron på produkt/reference, alle fire bredder/begge preferanser | `color-contrast`, symbol. | Produktets `#334155` på hvitt ca. 10,35:1. Referansen vurdert i sine respektive flater; tilhørende navnetekst/fokus synlig. | Manuelt verifisert pass i undersøkte tilstander. |
| Produktets hero/brødsmule/intro/caption, alle fire bredder/begge preferanser | `color-contrast`, gradient hindrer automatisk bakgrunnsvalg. | Eksisterende gradient `#eff6ff` → hvitt. Konservativ kontroll mot mørkeste endepunkt: muted `#475569` ca. 6,96:1; blå `#1d4ed8` ca. 6,16:1. Overskrift/brødtekst er mørkere. | Manuelt verifisert kontrastpass; ikke automatisk pass. |
| Hjem/Blogg-brødsmuler på bygge-, dokument-, oppfølgings- og prisartiklene ved 768 | `link-in-text-block`, reproduksjon i begge preferanser. Feilartikkelen reproduserer ikke funnet. Workflow har tilsvarende treff i primærmatrisen. | Synlig etterkontroll: sRGB omtrent `#6a7282` på `#f9fafb`, ca. 4,63:1. Begge lenker har treffbart sentrum og 1 px native fokus. De står i navngitt brødsmulenavigasjon med skilletegn, ikke innbakt i løpende prosa. Ingen skjult/overlappet lenke ved normal visning. | Manuelt pass for kontrast, fokus, treffområde og navigasjonskontekst. Axe forblir incomplete; ikke en automatisk sertifisering. |
| Eldre desktopnav på bloggartikler ved 768/1440 i primærmatrisen | `color-contrast`, delvis tildekket etter gjennomrulling med sticky-nav. | Ny kontroll øverst fjernet nav-kontrast-incomplete på de fem 7D-artiklene. Synlige navlenker har mørk tekst mot lys flate. Brødsmule-incomplete består separat. | Tildekkingsmistanken ikke reprodusert som brukerfeil; manuelt pass for normal synlig tilstand. |

Åtte kjente 7D-incomplete-tilfeller er dermed målrettet kontrollert på nytt gjennom fem artikler × 768 × begge preferanser, ikke bare arvet fra rapporten. Ingen ny bekreftet kontrast-/lenkefeil avledes av axe-usikkerheten alene.

Tastatur: 152 FAQ-sekvenser med Enter-åpning/Space-lukking bestått. Navn/state kommer fra native details; overskriftshierarki H1 → H2 → H3 er gjennomgått. Synlig fokus på moderne menyer/CTA-er/preview, skip-lenker og FAQ. Åtte nye skip-tester flytter fokus til riktig main. Eldre mobilmeny har navngitt knapp, korrekt true/false-state og synlig native fokus. Ingen full skjermlesersesjon eller WCAG-sertifisering er utført.

## 15. Responsive and browser testing

| Omfang | Bredder / preferanser | Antall |
| --- | --- | ---: |
| Tre redesigned SEO-guider | 375, 768, 1280, 1440 × light/dark; reduced motion | 24 |
| Produkt og Timeliste PDF-reference | Samme komplette matrise | 16 |
| Fem Tilbud-artikler + tilbud/kontrakt + workflow | 375/light, 768/light, 1440/dark; reduced motion | 21 |
| **Primærmatrise** | | **61** |
| Incomplete-etterkontroll, fem 7D-artikler | 768 × light/dark | 10 ekstra |

Alle 61 primærtilfeller: HTTP 200, ingen horisontal overflow, alle undersøkte bilder dekodet, CLS 0 observert og ingen JavaScript-pageerrors. Ingen aktive CSS-animasjoner med redusert bevegelse. Konkrete bilde-/renderdimensjoner, menystatus, FAQ og nettverksresponser er bevart i diagnostikken.

Stabling, overskriftsbrudd, CTA-er, ressurslenker og footer er gjennomgått. Ingen viktig innhold skjules på mobil. Fin tekst i dokumentbilder har kildeoppløsningens begrensning; nærliggende HTML og originalvisning er tilgjengelig. Observasjonene er lokale laboratoriekontroller, ikke felt-CWV eller normal-motion-sertifisering. Ingen ny Lighthouse-score er målt eller påstått.

## 16. Technical validation

| Kontroll | Resultat |
| --- | --- |
| `npx.cmd tsc --noEmit --incremental false` | Exit 0. |
| `npm.cmd run lint` | Full ESLint, exit 0, ingen lintadvarsler. |
| `npm.cmd run build` | Exit 0, 55 statiske sider. Kjent DEP0205 om `module.register()`. |
| HTTP / bilder | 25 × to miljøer tilgjengelige; lokale mål 103/103 × 200; kjent produksjons-F01 skilt ut. Ingen ødelagt bilde i dekodingen. |
| Runtime | Ingen pageerrors/hydration-feil i primærmatrisen. Ekstra console-kontroll viser bare kjent lokal HTTP 400-ressursfeil. |
| Kildebevaring | Ingen av de 323 eksisterende filene endret. |

### Analytics og TLS

I alle 25 brede lokale sidevisninger er `/api/handshake` 400 og `/api/footprint` 200. I alle 25 produksjonsvisninger er begge endepunkter 200. API-/Tracker-/tracking-filer er uendrede fra Phase 7A-baseline.

`app/api/handshake/route.ts` returnerer 400 fra en bred catch og betegner unntaket som «Invalid request», selv om route ikke parser noen request-body. Den meldingen alene dokumenterer derfor ikke feil brukerrequest. Manglende konfigurasjon ville gitt 500, ikke den observerte 400.

Lesende HEAD-diagnostikk mot den allerede konfigurerte verten, uten UID/payload eller eksport av endpointverdi: standard Node ga `UNABLE_TO_VERIFY_LEAF_SIGNATURE`; samme forespørsel med systemets CA-lager nådde HTTP 404. HEAD-404 er bare bevis på fullført TLS/HTTP, ikke en test av analytics-POST. Dette gir konkret støtte for et lokalt sertifikattillitsproblem, konsistent med catch-responsen; selve Next-unntaket logges ikke, så den eksakte serverårsaken er en underbygget slutning.

Ingen evidens for at Phase 7 introduserte feilen, og ingen samme handshake-feil observert i produksjon. Det betyr ikke at all analytics er bekreftet lagret: footprint-route svarer før upstream-resultatet og ignorerer feil. Persistens/dashboarddata er ikke verifisert. N02 er en ikke-blokkerende lokal observasjon; ingen TLS-/analytics-konfigurasjon er endret.

### Testharness-forbehold

Første ankerprobe ventet feilaktig på `.open` direkte på de to underseksjonene; fire slike forsøk timet ut. Kildeinspeksjon og korrekt etterkontroll av nærmeste details/fokustarget ga åtte av åtte pass i begge miljøer. Begge resultatsett er bevart. En feil i diagnostikkeksportens parentes/heading-feltnavn ble rettet før de endelige JSON-filene ble skrevet. Ingen applikasjonsrettelse var nødvendig. Uutførte/feilede forsøk er ikke telt som pass.

## 17. Regression review

Gjeldende `/tilbud-mal`, hjemmeside, Timeliste-produkt/reference, Faktura-produkt, Kontrakt-produkt/-guide, instruksjoner, eldre tilgrensende artikler og huber er undersøkt. Seksten av 25 ruter har identisk hovedtekst mellom lokal og publisert versjon; ni har de forventede Phase 7-innholdsendringene. Metadata/schema er like mellom miljøene på alle 25.

Phase 7A-filbaseline og aktuell Git-diff viser bare de forventede tre sporede kode-/innholdsfilene endret fra tidligere faser: SEO-route, SEO-innhold og blogginnhold. Nye lokale figur-/sidekomponenter er eksplisitt avgrenset. Produkt-, Faktura-, Timeliste-, Kontrakt-, nav-, footer-, blogg-renderer-, FAQ-, robots-/sitemap- og eksisterende mediefiler har ikke fått skjulte Phase 7-endringer. Ny 7E-baseline viser null ytterligere endringer.

Dette er målrettet kilde-/rute-/metadata-/innholds-/interaksjonsregresjon, ikke en ny full funksjonstest av hele nettstedet eller appen.

## 18. Remaining P0/P1/P2/P3 findings

**Releasekandidat: P0 0, P1 0, P2 4, P3 3.** Originale funn telles én gang selv om de omfatter flere elementer. Løste F01–F07 telles ikke på nytt som åpne funn.

| ID / nivå | Bevis / påvirkning | Anbefalt senere handling | Risiko / kompleksitet |
| --- | --- | --- | --- |
| F08 / P2 | Produktet har fortsatt generelle, men fungerende instruksjonslenker; konkrete guider er bedre koblet. Ekstra steg til relevant hjelp. | Vurder presist opprettingsanker/workflow-lenke i separat avgrenset vedlikehold. | Lav / lav. |
| F09 / P2 | Lave desktoputsnitt på produktmobil gjør detaljene små; HTML/original gir vei videre. | Eventuelt gjenbruk eksisterende portrett der felter forklares, uten redesign. | Lav–middels / lav–middels. |
| F10 / P2 | Tilgrensende oversiktsartikkel er for kategorisk om faktura etter ferdig jobb; kan gi for snever forståelse. | Koordinert liten presisering av relevant avtalt fakturagrunnlag/tidspunkt. | Middels, avgiftsnyanser / lav. |
| N01 / P2 | Produktets `OfferProductPage.tsx:42–43` sier prosjekt i dokumentet og «Eksempel Eiendom AS», mot bildet/nyere forklaringer. Begrenset eksempelunøyaktighet, ikke nytt funksjonsløfte. | Senere minimal ordlydskorreksjon som skiller app/PDF og bruker nøyaktig demonstrasjonsnavn. | Lav / svært lav. |
| F11 / P3 | Dobbel merkevare i blogg-hubtittel og eksisterende global presentasjonsfinish. Ingen blokkert reise. | Egen liten vedlikeholdsoppgave; ikke global refaktor her. | Middels ved delte endringer / lav–middels. |
| F12 / P3 | Ingen faktiske Tilbud-query/side-/konverteringsdata. Effekten av forbedringene kan ikke måles ennå. | Innhent eksplisitt daterte data før nye SEO-strukturgrep. | Ingen kode / lav analyse. |
| N02 / P3 | Lokal analytics-handshake/TLS feiler; lokale hendelser kan mangle. Produksjonens endepunkter svarer 200. | Avgrenset miljø-/observabilitetsoppgave; kontroller faktisk analytics-persistens separat. | Lav–middels / lav–middels. |

Ingen obligatorisk ny rettelse eller subjektiv designendring anbefales før deploy. Den gamle produksjonslenkens 404 er en fortsatt publisert F01, som den godkjente kandidaten løser; den er ikke et nytt uløst kandidat-P1.

## 19. Known limitations

Ingen autentisert dokumentoppretting, virkelig kundesending, Premium-backendtest, juridisk gjennomgang av en konkret avtale, full skjermlesersesjon, fysisk enhetstest, GSC-/konverteringsmåling eller post-deploy-verifikasjon. Lovdata-fulltekst utilgjengelig. Offentlig veiledning, UI-kode og bildebevis har forskjellige bevisnivåer; de er ikke slått sammen til en ende-til-ende-bekreftelse.

Axe-incomplete er manuelt behandlet i de undersøkte tilstandene, ikke en garanti for alle hover-/zoom-/hjelpemiddeltilstander. Bilder med begrenset kildeoppløsning får ikke flere detaljer ved originalvisning. Produksjonsbesøk viser eldre innhold på de ni endrede rutene; ingen av de lokale forbedringene er påstått publisert.

## 20. Owner action items

Gjennomgå denne auditten og de sju ikke-blokkerende backlogpostene. Dersom release godkjennes separat, bevar alle tidligere lokale endringer og stage kun de godkjente Phase 7-filene. N01 kan rettes senere med et uttrykkelig lite oppdrag; denne auditten har ikke gjort det. Det er ikke behov for en ny redesign eller nye bilder for å lukke de opprinnelige P1-funnene.

## 21. Final deployment checklist

- [x] Originale F01–F03 kontrollert løst i lokal kandidat.
- [x] Alle F01–F12 har eksplisitt status og bevis.
- [x] Produkt-, dokument- og juridiske forbehold gjennomgått.
- [x] Metadata/H1/schema, interne mål og prioriterte instruksjonsankre verifisert.
- [x] Påkrevd responsive matrise og relevante incomplete-etterkontroller utført.
- [x] TypeScript, full ESLint og produksjonsbygg bestått.
- [x] Ingen eksisterende kildefil endret av auditten; bare rapport/diagnostikk opprettet.
- [ ] Separat eiergodkjenning av release, nøyaktig staging og commit/push.
- [ ] Vercel-deploy og ny produksjonskontroll, inkludert publisert F01-rettelse og analytics-respons.

Auditen stopper her. Ingen deploy er utført.

**READY FOR OWNER REVIEW**
