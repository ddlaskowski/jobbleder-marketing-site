# Phase 5.3C — Timeliste ecosystem final audit

19. november 2026. **READ-ONLY AUDIT — TIL EIERGJENNOMGANG.** Bare denne rapporten er opprettet i repoet. Ingen implementering, commit, push eller deploy.

## 1. Sammendrag og anbefaling

Den moderniserte produkt-/PDF-kjernen er publisert og fungerer. De fem Timeliste-sidene har ulike oppgaver, og den viktige gratis-PDF-artikkelen tilbyr fortsatt nedlasting uten innlogging før produktintroduksjonen. Arbeidernavn er tydelig skilt fra ansattkontoer. Registrering/import/kontroll/konvertering beskrives som brukerhandlinger.

**Ingen nye bekreftede P0- eller P1-feil ble funnet i kontrollert omfang.** De viktigste gjenværende mulighetene er redaksjonelle P2-forbedringer: tre eldre Timeliste-artikler gir lite praktisk hjelp, særlig artikkelen om timeliste og faktura. Kategori- og relasjonslenker kan gjøres mer oppgaveorienterte. En sammenligningsartikkel omtaler faktura etter avsluttet arbeid for absolutt.

**Anbefaling: Ikke merk hele innholdsøkosystemet som redaksjonelt ferdig ennå.** Den publiserte produkt-/PDF-moderniseringen kan regnes som fullført. Gjør én avgrenset forbedringsrunde i de tre eldre artiklene før økosystemet avsluttes som innholdsprosjekt. Dette er videreutvikling, ikke en ny publiseringsblokker for det som allerede er levert. Ingen ny redesign av produktsidene eller omfattende omskriving av gratis-PDF-artikkelen anbefales.

## 2. Metode, avgrensning og evidens

Gjennomgått Phase 5.3A, 5.3B.3 og 5.3B.4, inklusive siste dokumentbilde- og CTA-tillegg; gjeldende kildekode, alle 18 blogginnleggs innholdsdata, de fem landingssidene, instruksjonsveiledninger, hovednavigasjon, relaterte moduler og sitemap/robots-kode. Seks av de 18 innleggene har faktisk Timeliste-innhold; øvrige regnes ikke som Timeliste-artikler bare fordi de kan få et generert relatert kort.

Ferske kontroller:

- **14 ruter × to visninger × to miljøer = 56 nettleserobservasjoner.** Visningene er 375 px/lys og 1440 px/mørk OS-preferanse. Miljøene er lokal produksjonsbuild på port 3040 og direkte `https://www.jobbleder.no`.
- **44 unike lokale lenkedestinasjoner per miljø**, totalt 88 HTTP-prober. Alle endelige svar var 200; fragmenter ble kontrollert der de inngikk i de undersøkte hovedinnholdslenkene.
- Seks sentrale fragmenter åpnet i nettleser per miljø, 12 kontroller. Relevante instruksjoner ble åpnet, ikke bare hubens startvisning.
- Bilder med faktisk synlig presentasjon i hovedinnholdet ble dekodet. For instruksjonene ble 13 bilder i relevante åpne veiledninger undersøkt; hele mediebiblioteket er ikke auditert om igjen.
- Sitemap, robots og begge offentlige PDF-er kontrollert direkte. Publisert metadata, overskrifter, strukturert data, tekst og bildeelementer samsvarer med lokal versjon for alle 14 ruter ved begge bredder.
- Representative produksjonsopptak ble visuelt inspisert. Tidligere komplette 375/768/1280/1440-matriser og Lighthouse fra Phase 5.3B er historisk QA-evidens, ikke nye produksjonsmålinger i denne auditten.

Dette er ikke GSC-/indekseringsverifikasjon, full fysisk-enhet-/skjermlesertesting, ny Lighthouse-runde eller en autentisert app/backendtest. Ingen TypeScript-/lint-/buildkjøring var nødvendig for den lesende auditten; tidligere beståtte kontroller er dokumentert i implementeringsrapportene.

Nettverktøyet returnerte først eldre bufrede sider, blant annet en tidligere versjon av PDF-artikkelen med autosave-påstanden. **Dette er ikke dagens direkte verifiserte produksjonsinnhold.** Direkte Chrome/HTTP-kontroller har forrang. Bufret utdrag er heller ikke dokumentasjon på Googles aktuelle indekseringsstatus eller en ny produksjonsregresjon.

Innledende testskript måtte avgrenses til åpne instruksjonsbilder etter en protokoll-timeout. En separat HTTP-probe ble også korrigert fra Puppeteer-responsmetode til Fetch-statusfelt. Disse var testverktøyfeil; fullførte sluttobservasjoner og HTTP-prober er lagret separat. Ingen nettstedkode ble endret for testene.

## 3. Sideinventar og søkeintensjon

Alle rutene nedenfor ble åpnet direkte i produksjon og lokalt. Alle har HTTP 200, én H1, selvhenvisende WWW-canonical og sitemap-oppføring.

| URL | Avgrenset oppgave / vurdering | Nåværende bildebruk |
| --- | --- | --- |
| [Timeliste mal](https://www.jobbleder.no/timeliste-mal) | Produktoversikt: registrering → import → timeliste/PDF → faktura; Free/Premium og malvalg | 7 autentiske bilder, inklusive mobilregistrering og dokumenter |
| [Timeliste mal PDF](https://www.jobbleder.no/timeliste-mal-pdf) | Hent/velg/fyll ut en gratis mal; digitalt alternativ er underordnet | 1 utfylt dokument, uttrykkelig skilt fra tom mal |
| [Timeliste uke](https://www.jobbleder.no/timeliste-uke) | Dokumenter en valgt uke; datoer, pause, summer og kontroll | 1 autentisk tredagerseksempel, ikke fremstilt som hel femdagersuke |
| [Timeliste ansatt](https://www.jobbleder.no/timeliste-ansatt) | Timer under et oppgitt arbeidernavn; intern gjennomgang | 1 mobilskjerm med Arbeider Demo og tre importerte registreringer |
| [Timeliste prosjekt](https://www.jobbleder.no/timeliste-prosjekt) | Prosjektidentitet, arbeidsbeskrivelse og kontrollert fakturagrunnlag | 1 utfylt dokument med prosjektfelt |
| [Gratis timeliste-mal](https://www.jobbleder.no/blogg/gratis-timeliste-mal) | Redaksjonell nedlastings-/bruksveiledning først; valgfri digital arbeidsflyt | 2 bilder: ferdig dokument og mobilregistrering |
| [Effektiv timeliste](https://www.jobbleder.no/blogg/effektiv-timeliste) | Rutiner og daglig føring; mangler konkret gjennomarbeidet arbeidsdag | Ingen; et HTML-eksempel er viktigere enn en ekstra illustrasjon |
| [Timeliste for håndverkere](https://www.jobbleder.no/blogg/timeliste-for-handverkere) | Oppgaver ute på oppdrag; foreløpig mye generell rutinetekst | Ingen; ekstraarbeid/KM kan gi et relevant autentisk eksempel |
| [Timeliste og faktura](https://www.jobbleder.no/blogg/timeliste-og-faktura) | Forholdet mellom dokumentene; demonstrerer foreløpig ikke den faktiske konverteringen | Ingen; firekategori-eksempel kan tilføre nyttig bevis |
| [Forskjell på dokumenttypene](https://www.jobbleder.no/blogg/forskjell-faktura-tilbud-timeliste) | Nybegynnerforklaring av tilbud, timeliste og faktura | Ingen nødvendig bildegalleri; én tidsformulering bør nyanseres |
| [Gratis fakturaprogram for håndverkere](https://www.jobbleder.no/blogg/gratis-fakturaprogram-handverkere) | Fakturaintensjon, med en relevant Timeliste-omtale; skal ikke ommålrettes | Ingen ekstra Timeliste-skjermbilde nødvendig |
| [Timeliste-kategorien](https://www.jobbleder.no/blogg/kategori/timeliste) | Oppdag de fire Timeliste-artiklene | Artikkelkort; ingen direkte produktlenke i hovedinnholdet |
| [Instruksjoner](https://www.jobbleder.no/instruksjoner) | Detaljerte oppgaver og faktiske knappetrykk | Moderne veiledninger med ekte desktop-/mobilmedier |
| [Hjemmesiden](https://www.jobbleder.no/) | Produktoppdagelse og innganger til både digitalt verktøy og særskilte maloppgaver | Produktbilder og dokumentflyt; ikke en erstatning for instruksjoner |

### Beskytt den godt presterende artikkelen

Eieroppgitt historikk for tre måneder: 342 klikk, 4 851 visninger, 7,05 % CTR og gjennomsnittlig posisjon 7,95. Dette er ikke en ny GSC-måling og gir ingen resultatgaranti. Det finnes ikke query/page-eksport i auditgrunnlaget som kan dokumentere hvilke sider som konkurrerer om samme søk eller hvordan endringene har påvirket resultatene.

Behold artikkelens URL, title, description, H1, nedlastinger uten innlogging og primære veiledningsoppgave. Ingen konsolidering med PDF-siden, redirect, noindex eller ny produktbasert salgstekst anbefales. Gjenstående små ordvalg bør vurderes særskilt, ikke brukes som begrunnelse for en full omskriving.

## 4. SEO-funn

### Verifisert teknisk grunnlag

- Alle 14 kontrollerte ruter har unike title- og description-felt, én H1 og korrekt selvhenvisende `https://www.jobbleder.no`-canonical. Eksakte verdier står i metadata-appendikset.
- Ingen noindex-meta eller X-Robots-Tag som blokkerer de kontrollerte HTML-sidene. Fravær av noindex betyr at sidene er teknisk indexable, ikke at Google nødvendigvis har indeksert dem.
- Publisert robots tillater `/`, sperrer `/api/` og `/private/`, og peker på WWW-sitemap. Sitemap svarer 200, inneholder 45 URL-er og inkluderer alle 14 audit-rutene.
- JSON-LD kunne parses på alle sider. Fem landingssider har FAQPage, de seks artiklene Article; globale Organization/WebSite er til stede. Kategori/hjem/instruksjoner har ikke påtvunget FAQ-markup.
- 80 semantiske FAQ-spørsmål/svar i de undersøkte miljø-/visningskombinasjonene samsvarer med FAQPage. Det dekorative, aria-hidden plusstegnet på hovedsidens spørsmål er utelatt fra tekstsammenligningen; det er ikke en schema-konflikt.
- Ingen ny tittel-/canonical-/schema-forskjell mellom publisert og lokal versjon. Ingen Google Rich Results- eller Search Console-validering er påstått.

### Mulig overlapp, uten dokumentert skadelig kannibalisering

`/timeliste-mal`, `/timeliste-mal-pdf` og gratis-PDF-artikkelen deler begreper og nedlastinger. Nå er rollene tydeligere: produktoversikt, PDF-ressurs og redaksjonell bruksveiledning. Det er fortsatt naturlig overlapp, men ingen data i denne auditten viser skadelig kannibalisering. Undersøk query × side over sammenlignbare perioder før eventuelle strukturelle SEO-avgjørelser.

Uke, ansatt og prosjekt retter seg mot ulike dokumentasjonsbehov. De skal ikke alle utvides med hovedsidens komplette fakturaprogram-/Premium-argumentasjon. Dokumenttype-artikkelen forklarer «hva er forskjellen», mens konverteringsartikkelen bør forklare «hvordan bruker jeg timelisten videre».

## 5. Redaksjonelle funn i de seks artiklene

| Artikkel | Funn og faktisk nytte av en senere endring |
| --- | --- |
| `gratis-timeliste-mal` | Hovedoppgaven er godt ivaretatt: to direkte filer, feltoversikt, manuell metode, tydelig generert dokument og valgfri mobilflyt. Autosave-påstanden er borte. «Siste uke» kan være mindre presist enn PDF-sidens «siste sju dager»; avklar faktisk datoperiode før eventuell liten etikettpresisering. Ikke endre metadata av den grunn. |
| `effektiv-timeliste` | Gir gode generelle råd, men ingen konkret dag med start/slutt, pause og arbeidsbeskrivelse. «Stole på hukommelsen»-poenget overlapper håndverkerartikkelen. Legg til ett nyttig, kontrollert eksempel og en direkte oppgavelenke; behold den eksisterende ukelenken. |
| `timeliste-for-handverkere` | Fire generelle fordeler og råd om å føre timer i tide gir liten særskilt håndverkernytte. Bruk et oppdrag med vanlig arbeid, ekstraarbeid og eventuelt KM. Det nåværende brødtekstvalget peker til ansattsiden; en prosjekt-/oppdragslenke kan passe bedre i en ny konkret forklaring. Ingen ansattkontoer må antydes. |
| `timeliste-og-faktura` | Title/innledning lover sammenheng, men kroppen stopper ved dato/beskrivelse/timer og en prosjektlenke. Ingen faktisk Opprett faktura-handling, ingen fire kategorier, ingen kontroll av satser/kunde og ingen direkte konverteringsguide. Dette er den høyest prioriterte redaksjonelle muligheten. |
| `forskjell-faktura-tilbud-timeliste` | Nyttig enkel forklaring. «En faktura sendes etter at jobben er utført» og sluttført-jobb-listen er for absolutte i lys av bekreftede forskudds-/betalingsvilkår i produktmodellen. Nyanser til vanlig praksis/avtalte vilkår, uten å gi juridiske garantier eller kopiere en fakturaguide. |
| `gratis-fakturaprogram-handverkere` | Fakturafokus er riktig; nettleserbruk på PC/mobil omtales korrekt. Én naturlig Timeliste-lenke kan knyttes til omtalen av samlet dokumentarbeid. Generelle påstander om andre gratisløsningers begrensninger er ikke dokumentasjon på en bestemt konkurrents produkt; eventuell presisering er valgfri og utenfor hovedprioriteringen. |

Publiseringsdatoene er ikke i seg selv bevis på utdatert innhold. Ikke endre datoer bare for å se ferskere ut. «Oppdatere fortløpende» eller «lagre alt samlet» i rutineartiklene er heller ikke automatisk en autosave-påstand. De leses i sin faktiske sammenheng.

### Autentiske medier som kan gi ny innsikt

Ingen nye skjermbilder kreves for første anbefalte innholdsrunde. Gjenbruk bare når bildet forklarer noe teksten alene ikke viser:

| Oppgave | Eksakt eksisterende WebP | Opprinnelig kilde / grense |
| --- | --- | --- |
| Daglig registrering | `public/images/product/mobile/optimized/registration_form_mobile-35f62cf2d7be.webp` | `public/images/product/mobile/source/registration_form_mobile.png`; allerede brukt i hovedside/PDF-blogg. Et rent HTML-eksempel kan være nok i effektivitetsartikkelen. |
| Ekstraarbeid og KM ute på oppdrag | `public/images/product/mobile/optimized/registration_extra_km_save_mobile-4a67065d08f6.webp` | `public/images/product/mobile/source/registration_extra_km_save_mobile.png`; dette er et annet eksempel enn den vanlige arbeidsdagen. Ikke presenter markering som automatisk overtid. |
| Fire fakturakategorier | `public/images/product/mobile/optimized/timelist_invoice_summary_mobile-f4b16dce374e.webp` | `public/images/product/mobile/source/timelist_invoice_summary_mobile.png`; dokumentforhåndsvisning, ikke et eksportert PDF-bilde. Ikke bland dokumentnumre/tall med hovedsidens andre eksempel. |

Ingen grunn til å legge nye telefongallerier på kategorien, dokumenttype-artikkelen eller fakturaartikkelen bare for å øke bildeantallet. Et dokumentbilde og registreringsbildet på gratis-PDF-artikkelen dekker allerede dens formål.

## 6. Konvertering og internlenker

### Fungerende brukerreiser

- **Gratis PDF:** artikkel eller PDF-side → åpen nedlasting → manuell veiledning → valgfri lenke til `/timeliste-mal#registrer-pa-mobil`. Ingen registreringsmur. Generert eksempel omtales ikke som den blanke filen.
- **Uke:** konkret tredagersbilde → kontroll av uke/år/datoer/pauser → importveiledning → «Opprett ukentlig timeliste». Knappen åpner eksisterende app-innlogging; ingen ny dyp dokumentrute er oppfunnet.
- **Ansatt:** arbeidernavn forklares → bilde av faktisk felt → dokumentkontroll → «Opprett timeliste». Ingen employee-login-/lønnsløfter.
- **Prosjekt:** prosjekt og oppgave identifiseres → brukerens utvalg/import/kontroll → fakturaguide og kontekstlenke til Faktura → «Opprett prosjektets timeliste».
- **Instruksjoner:** konkrete felt/knapper og autentiske medier → videre oppgave eller produkt. Moderne fragmenter åpner riktig veiledning og flytter fokus til summary eller relevant overskrift.
- **Hjemmeside/navigasjon:** Produkter-menyen har Timeliste; hovedinnholdet har «Utforsk timelister», «Timeliste som PDF» og egne lenker til alle fem Timeliste-landingssider. Hjemmesiden gir allerede gode innganger og trenger ikke flere Timeliste-CTA-er i denne runden.

Avsluttende CTA-er på de fire spesialiserte sidene er nå sidespesifikke. App-knapper går til `https://app.jobbleder.no/`; de lover ikke automatisk oppretting uten innlogging. Den tidligere verifiserte Create account-veiledningen er synlig. Ingen påtrengende popup eller ny kampanje ble observert.

### Gjenværende koblingsmuligheter

De tre eldre rutine-/konverteringsartiklene går raskt fra generell forklaring til en generell app-knapp. Sett en relevant oppgave-/produktlenke ved en faktisk forklaring fremfor å legge til flere kampanjebokser. Den nåværende prosjekt-/uke-/ansatt-lenken trenger ikke fjernes hvis den fortsatt gir leseren et relevant valg.

Timeliste-kategorien har fire artikkelkort, men ingen direkte hovedinnholdslenke til digital Timeliste. En kort, valgfri tekstlenke er tilstrekkelig. `components/RelatedGuides.tsx` velger de tre første Timeliste-elementene i kildearrayet: hovedside, PDF og uke. Ansatt/prosjekt får ikke slike genererte kort her, men er ikke foreldreløse: de har andre direkte lenker, blant annet fra hjemmesiden og spesialistsidene. Vurder senere oppgavespesifikk kuratering, ikke en global sorteringsendring i SEO-arrayet.

## 7. Produktnøyaktighet

| Bekreftet funksjon | Vurdering av gjeldende innhold |
| --- | --- |
| Responsiv webapp / mobilnettleser | Omtales som nettleser, ikke native mobilapp. Mobilbildene er autentiske webgrensesnitt. |
| Timer, pauser, beskrivelser, valgfri KM/ekstra | Beskrives med brukerens utfylling og markering. Ingen automatisk overtids-/lønnsberegning introdusert. |
| Velge/importere lagrede registreringer | Hovedside, spesialsider og relevante veiledninger viser manuelle valg og faktisk importknapp. |
| Timeliste → PDF / Faktura | Forklares med kontroll før eksport/konvertering; den eldre konverteringsartikkelen er ufullstendig, ikke dokumentasjon på en annen appfunksjon. |
| Free/Premium | Dokumentoppretting og konvertering i Free; Jobbleder-merking/vannmerke i Free-PDF; Premium fjerner merkingen og støtter firmalogo. Ingen ny pris eller konverteringsbetaling funnet. |
| Arbeider-felt | Dokumentets navn, ikke oppretting av ansattkonto, invitasjon eller tilgangsstyring. Tidligere korrekturfase er bevart. |
| Autosave/offline/auto-sending/integrasjoner | Ingen nye støtteløse løfter funnet i auditens gjeldende Timeliste-innhold. Det gamle autosave-utdraget kom fra buffer, ikke live-side. |

Funksjonene er etablert av eierens bekreftelser, gjeldende instruksjoner og visuelle produktbevis. Markedsføringskoden/viste felt er CODE-VERIFIED som presentasjon; den underliggende appens backend og regnskaps-/rettslige egenskaper er ikke testet. Forskudds-/betalingsvilkår i tidligere bekreftet produktmodell er grunn til å nyansere den generelle dokumenttype-artikkelen, ikke grunn til å hevde automatisk fakturagenerering fra en betalingsplan.

## 8. Direkte produksjonsverifikasjon

Kontrollvindu: 19. november 2026, omtrent 16:08–16:14 UTC. Lokal kilde-HEAD ved auditstart: `069de6ad0df5929acf381a03d3532feab1c69106`. Publisert leveranse er vurdert fra direkte URL-er, ikke utledet fra commit eller push.

| Kontroll | Produksjon | Lokal sammenligning |
| --- | --- | --- |
| 14 sider, 375/lys og 1440/mørk | 28 observasjoner, alle HTTP 200 | 28 observasjoner, alle HTTP 200 |
| H1/title/description/canonical/schema/tekst/bildeelementer | Samsvarer med lokal versjon for alle 14 ruter ved begge visninger | Faktiske felt sammenlignet; ikke bare lik sidetittel |
| Horisontal overflow | Ingen i de 28 tilfellene | Ingen |
| Synlige/relevante bilder | Alle undersøkte bilder dekodet; ingen bilde-/ressursfeil observert | Samme resultat |
| Produksjonsmeny på hjem + fem landingssider | Åpne/lukke med Enter/Space bestått på mobil/desktop | Samme resultat |
| Seks oppgavefragmenter | Alle finnes; relevante instruksjoner åpnes | Samme resultat |
| 44 hovedinnholdslenkedestinasjoner | Alle endelige HTTP-svar 200 | Samme resultat |
| Sitemap / robots | Begge 200; 45 sitemap-URL-er; riktig WWW-host og direktiver | Samsvarende konfigurasjon |
| Lokal malfil på publisert nettsted | 200, `application/pdf`, `%PDF-`, 339 211 B | 200, samme størrelse/type/signatur |
| Ekstern siste-uke-mal | Direkte 200, `application/pdf`, `%PDF-`, 334 286 B | Felles eksternt endepunkt, ikke erstattet med lokal fil |
| JavaScript-sideunntak | Ingen registrert | Ingen registrert |
| Feilresponser i nettleservinduet | Ingen registrert | Kjent `/api/handshake` HTTP 400 |

Fragmenter: `/timeliste-mal#registrer-pa-mobil`; `/instruksjoner#arbeidsokter`, `#opprett-timeliste`, `#legg-til-en-arbeidsokt`, `#importer-arbeidsokter-til-timeliste`, `#timeliste-til-faktura`. Det historiske arbeidsokter-ankeret fungerer selv om den synlige terminologien er Registreringer.

Begrensninger: alle app-knapper/destinasjoner er kartlagt, men ingen innlogging, konto, autentisert dokumentoppretting eller fakturasending er gjennomført. PDF-testen verifiserer transport/signatur, ikke PDF-tagging eller nøyaktig datoperiode. Ingen full ende-til-ende analyseleveranse eller produksjons-Lighthouse påstås. Den lokale analytics-feilen kan ikke uten videre regnes som produksjonsfeil; den ble ikke observert i produksjonsvinduet.

## 9. Prioriterte funn og anbefalt handling

P0 = kritisk funksjons-/faktafeil; P1 = viktig SEO/UX/konverteringsfeil; P2 = verdifull redaksjonell/visuell forbedring; P3 = valgfritt tillegg. Ingen bekreftede P0/P1 i undersøkt omfang. Nedenfor er åtte konkrete forbedringsfunn; kompleksitet er relativt omfang, ikke et tidsløfte.

| ID / prioritet | Berørt URL | Evidens og brukervirkning | Anbefalt handling | Risiko ved endring | Kompleksitet |
| --- | --- | --- | --- | --- | --- |
| F1 — P2, først | `/blogg/timeliste-og-faktura` | `content/blogPosts.ts:880` og live-artikkel: generell feltliste/prosjektlenke, ingen faktisk konverteringsmetode. Leseren får ikke den lovede praktiske overgangen. | Forklar valgt/lagret timeliste → Opprett faktura → fire kategorier → kontroller satser/kunde/output. Lenke til `#timeliste-til-faktura` og relevant produkt. Ett autentisk kategori-eksempel bare hvis nyttig. | Middels: behold URL, title/H1 og dokumentasjonsintensjon; ikke bygg en ny Faktura-landingsside. | Middels, én fokusert artikkel med mulig medieeksempel. |
| F2 — P2 | `/blogg/effektiv-timeliste` | `content/blogPosts.ts:416–490`: gode, men generelle rutiner; mangler konkret pause-/arbeidsdagseksempel. Lite hjelp til å anvende rådene. | Ett gjennomgått arbeidseksempel og direkte registrerings-/importveiledning. Behold ukelenken. Bilde er valgfritt. | Lav–middels: utvid nyttig eksempel, ikke full omskriving eller datobumping. | Liten, tekst/lenker. |
| F3 — P2 | `/blogg/timeliste-for-handverkere` | `content/blogPosts.ts:821–875`: gjentar hukommelse/oversikt; eneste brødtekstguide peker til ansatt. Svak kobling til reelt oppdrag/ekstra/KM. | Særskilt håndverkerscenario og prosjekt-/arbeidsoppgavelenke; eventuelt autentisk ekstra/KM-bilde. Skill fra F2s generelle rutiner. | Lav–middels; ikke antyd kontoer, lønn eller automatisk overtid. | Middels ved mediebruk, ellers liten. |
| F4 — P2 | `/blogg/forskjell-faktura-tilbud-timeliste` | `content/blogPosts.ts:706,717`: faktura plasseres absolutt etter ferdig jobb. Kan gi en unødig snever forståelse av bekreftede betalingsmuligheter. | Nyanser til vanlig rekkefølge/avtalte betalingsvilkår. Behold den enkle dokumentforklaringen; ingen juridisk garanti. | Lav, liten faktapresisering uten SEO-endring. | Liten. |
| F5 — P2 | `/blogg/kategori/timeliste` | Fire artikkelkort, ingen direkte hovedinnholdslenke til produktet i dagens HTML. En leser som blar i guider får en ekstra omvei. | Én valgfri, beskrivende Timeliste-lenke i en kort kategoriintroduksjon. Ingen ny banner eller bilder. | Lav ved rutespesifikk endring; unngå utilsiktet endring av alle kategorier. | Liten. |
| F6 — P3 | De fire Timeliste-artiklenes relaterte guider | `components/RelatedGuides.tsx` bruker de første tre topic-elementene. Ansatt/prosjekt får ikke kort der, selv når de er relevante; de er likevel lenket andre steder. | Senere kuratering etter artikkeloppgave. Ikke sorter/restrukturer hele SEO-arrayet bare for å bytte kort. | Middels, delt komponent påvirker andre artikler; krever regresjonskontroll. | Middels. |
| F7 — P3, betinget | `/blogg/gratis-timeliste-mal` | Kropp/knapp sier «siste uke», mens den nye PDF-siden skiller sju dager fra kalenderuke. Potensiell forventningsuklarhet, ikke bevist feil datoutvalg. | Verifiser først faktisk datoperiode i filen. Bare ved behov: en liten presisering ved nedlastingen. Behold URL-er, metadata, H1 og fungerende nedlastinger. | Middels–høy oppmerksomhet fordi artikkelen presterer godt; ikke en grunn til generell rewrite. | Liten, men krever bevis/oppfølging. |
| F8 — P3 | `/blogg/gratis-fakturaprogram-handverkere` | Samlet timeliste-/tilbudsarbeid omtales uten direkte Timeliste-lenke i avsnittet; kun genererte guider hjelper videre. | Eventuelt én lenke ved eksisterende omtale. Behold fakturafokus. Generelle konkurrentbegrensninger bør ikke konkretiseres uten kilder. | Lav for en kontekstlenke; større tekstretargeting frarådes. | Liten. |

Ingen av funnene begrunner nye URL-er, redirects, noindex, sletting av sider eller flere skjermbilder på alle ruter. Tidligere alvorlige kontrast-/konto-/autosave-funn fra Phase 5.3A skal ikke rapporteres som uløste bare fordi de finnes i historiske beskrivelser eller en nettbuffer.

## 10. Foreslåtte neste faser

1. **Avgrenset redaksjonell runde:** F1 først, deretter F2/F3 som separate leseroppgaver. F4 kan være en liten, egen faktapresisering. Behold eksisterende titler/canonicals og hensikten med hver artikkel. Ingen masseproduksjon av nye artikler.
2. **Oppgavekoblinger:** F5, eventuelt F6/F8 etter behov. Bruk faktiske fungerende instruksjonsankre. Bevar god produktnavigasjon og den godkjente designen.
3. **Måling og vedlikehold:** sammenlign GSC-query × side, enheter og like lange perioder før SEO-strukturgrep. Følg gratis-PDF-artikkelens historiske inngangstrafikk og produktklikk/nedlastinger med faktisk måling, ikke en lovet effekt. F7 tas bare når filens datoperiode er verifisert.

Ingen ny implementeringsfase startes av denne auditten. Anbefalt avgrensning ved neste godkjenning er tre eksisterende artikler, ikke hovedside, fire spesialistsider eller den sterke PDF-artikkelen.

## 11. Metadata-appendiks

Eksakte publiserte felt følger nedenfor. De er like lokalversjonen i denne auditten. Hver URL har én H1, korrekt selvcanonical, ingen blokkerende indexeringsdirektiv og sitemap-oppføring. Dette sier ikke noe sikkert om Googles faktiske indeks eller rangering.


### `/timeliste-mal`

- Title: Timeliste mal – gratis og enkel timeliste (PDF / nett) \| Jobbleder
- Description: Gratis timeliste mal for håndverkere og små bedrifter. Lag timeliste raskt, last ned som PDF og få full oversikt.
- H1: Timeliste mal (gratis).Fra arbeidstimer til ferdig faktura.
- Canonical: [https://www.jobbleder.no/timeliste-mal](https://www.jobbleder.no/timeliste-mal)
- Strukturert data: Organization, WebSite, FAQPage.

### `/timeliste-mal-pdf`

- Title: Timeliste mal PDF – gratis timeliste for håndverkere \| Jobbleder
- Description: Gratis timeliste mal PDF for håndverkere og små bedrifter. Før timer enkelt og last ned timelisten som PDF.
- H1: Timeliste mal PDF
- Canonical: [https://www.jobbleder.no/timeliste-mal-pdf](https://www.jobbleder.no/timeliste-mal-pdf)
- Strukturert data: Organization, WebSite, FAQPage.

### `/timeliste-uke`

- Title: Timeliste uke – få oversikt over arbeidstid per uke \| Jobbleder
- Description: Lag ukentlig timeliste for ansatte, prosjekter eller egne oppdrag. Enkel oversikt og PDF-nedlasting.
- H1: Timeliste uke
- Canonical: [https://www.jobbleder.no/timeliste-uke](https://www.jobbleder.no/timeliste-uke)
- Strukturert data: Organization, WebSite, FAQPage.

### `/timeliste-ansatt`

- Title: Timeliste ansatt – enkel registrering av arbeidstid \| Jobbleder
- Description: Før timeliste for ansatte på en enkel måte. Perfekt for små bedrifter og håndverkere som trenger oversikt over arbeidstid.
- H1: Timeliste ansatt
- Canonical: [https://www.jobbleder.no/timeliste-ansatt](https://www.jobbleder.no/timeliste-ansatt)
- Strukturert data: Organization, WebSite, FAQPage.

### `/timeliste-prosjekt`

- Title: Timeliste prosjekt – før timer per prosjekt og kunde \| Jobbleder
- Description: Lag timeliste per prosjekt og få bedre oversikt over arbeidstid, kunder og oppdrag. Last ned som PDF.
- H1: Timeliste prosjekt
- Canonical: [https://www.jobbleder.no/timeliste-prosjekt](https://www.jobbleder.no/timeliste-prosjekt)
- Strukturert data: Organization, WebSite, FAQPage.

### `/blogg/gratis-timeliste-mal`

- Title: Gratis timeliste mal (PDF) – last ned uten innlogging \| Jobbleder
- Description: Last ned gratis timeliste mal PDF uten innlogging. Velg mellom tom timeliste og ferdig datert timeliste for siste uke.
- H1: Timeliste mal (PDF) – gratis nedlasting uten innlogging
- Canonical: [https://www.jobbleder.no/blogg/gratis-timeliste-mal](https://www.jobbleder.no/blogg/gratis-timeliste-mal)
- Strukturert data: Organization, WebSite, Article.

### `/blogg/effektiv-timeliste`

- Title: Hvordan føre timelister effektivt \| Jobbleder
- Description: Lær hvordan du fører timelister effektivt og hva en god timeliste bør inneholde for bedre oversikt og dokumentasjon.
- H1: Hvordan føre timelister effektivt – spesielt for selvstendig næringsdrivende
- Canonical: [https://www.jobbleder.no/blogg/effektiv-timeliste](https://www.jobbleder.no/blogg/effektiv-timeliste)
- Strukturert data: Organization, WebSite, Article.

### `/blogg/timeliste-for-handverkere`

- Title: Timeliste for håndverkere – hvorfor gode rutiner er viktige \| Jobbleder
- Description: Slik bruker håndverkere timelister for bedre oversikt, dokumentasjon og enklere arbeidshverdag.
- H1: Timeliste for håndverkere – hvorfor gode rutiner sparer deg for tid
- Canonical: [https://www.jobbleder.no/blogg/timeliste-for-handverkere](https://www.jobbleder.no/blogg/timeliste-for-handverkere)
- Strukturert data: Organization, WebSite, Article.

### `/blogg/timeliste-og-faktura`

- Title: Timeliste og faktura – slik henger de sammen \| Jobbleder
- Description: Slik bruker du timeliste som grunnlag for tydeligere og enklere fakturaarbeid.
- H1: Timeliste og faktura – hvordan henger de sammen?
- Canonical: [https://www.jobbleder.no/blogg/timeliste-og-faktura](https://www.jobbleder.no/blogg/timeliste-og-faktura)
- Strukturert data: Organization, WebSite, Article.

### `/blogg/forskjell-faktura-tilbud-timeliste`

- Title: Forskjellen på faktura, tilbud og timeliste \| Jobbleder
- Description: Her er en enkel forklaring på forskjellen mellom faktura, tilbud og timeliste – og når du bør bruke dem.
- H1: Faktura, timeliste og tilbud – hva er forskjellen og når bruker du dem?
- Canonical: [https://www.jobbleder.no/blogg/forskjell-faktura-tilbud-timeliste](https://www.jobbleder.no/blogg/forskjell-faktura-tilbud-timeliste)
- Strukturert data: Organization, WebSite, Article.

### `/blogg/gratis-fakturaprogram-handverkere`

- Title: Gratis fakturaprogram for håndverkere – enkelt og nettbasert \| Jobbleder
- Description: Opprett faktura raskt med et gratis fakturaprogram for håndverkere. Enkel løsning direkte i nettleseren.
- H1: Gratis fakturaprogram for håndverkere – her er et enkelt alternativ
- Canonical: [https://www.jobbleder.no/blogg/gratis-fakturaprogram-handverkere](https://www.jobbleder.no/blogg/gratis-fakturaprogram-handverkere)
- Strukturert data: Organization, WebSite, Article.

### `/blogg/kategori/timeliste`

- Title: Timeliste \| Blogg \| Jobbleder
- Description: Artikler og guider om timeliste for brukere av Jobbleder.
- H1: Timeliste
- Canonical: [https://www.jobbleder.no/blogg/kategori/timeliste](https://www.jobbleder.no/blogg/kategori/timeliste)
- Strukturert data: Organization, WebSite.

### `/instruksjoner`

- Title: Instruksjoner for Jobbleder \| Jobbleder
- Description: Lær hvordan du bruker Jobbleder til å opprette faktura, tilbud, timelister og kontrakter, registrere arbeidsøkter og holde oversikt over prosjekter, kunder og rapporter.
- H1: Instruksjonerfor Jobbleder.
- Canonical: [https://www.jobbleder.no/instruksjoner](https://www.jobbleder.no/instruksjoner)
- Strukturert data: Organization, WebSite.

### `/`

- Title: Jobbleder – Faktura, kontrakt, timeliste og tilbud på minutter
- Description: Lag faktura, kontrakt, timeliste og tilbud enkelt i nettleseren. Jobbleder er laget for håndverkere og små bedrifter.
- H1: Jobben din.Dokumentene på plass.
- Canonical: [https://www.jobbleder.no/](https://www.jobbleder.no/)
- Strukturert data: Organization, WebSite.

## 12. Leveranse og bevaring

Kun `docs/phase-5.3c-timeliste-ecosystem-final-audit.md` er opprettet i repoet. SHA-256-kontroll av alle 300 opprinnelig sporede filer fant ingen endringer. HEAD er fortsatt `069de6ad0df5929acf381a03d3532feab1c69106`; ingen Git-skriveoperasjoner er utført.

Etterprøvbare artefakter utenfor repoet: `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase53c/`, med `source-content.json`, `preservation-before.json`, `browser.json`, `analysis.json`, representative skjermbilder og separate spor av de korrigerte testverktøyforsøkene.

**Sluttanbefaling: Produkt-/PDF-kjernen er publisert og teknisk i orden i kontrollert omfang. Ikke regn hele innholdsøkosystemet som redaksjonelt ferdig før den avgrensede artikkelrunden er vurdert/gjennomført. Ingen nye P0/P1-funn eller grunnlag for URL-/SEO-omstrukturering.**

Auditten er ferdig. Avventer eiergjennomgang; ingen implementering er startet.
