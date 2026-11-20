# Phase 7D — Tilbud editorial refinement

20. november 2026. Lokal implementering. **READY FOR OWNER REVIEW**. Ingen commit, push eller deploy.

## 1. Executive summary

De fem avtalte Tilbud-artiklene er oppdatert innenfor eksisterende bloggdesign. Formålene er nå prisforståelse, bransjeforberedelse, dokumentstruktur, feilretting og manuell oppfølging. Det er ikke opprettet nye artikler eller lagt inn en identisk sjekkliste eller salgsseksjon i alle fem.

Kun content/blogPosts.ts og denne rapporten er endret/opprettet av Phase 7D. Alle URL-er, identitetsfelt, titler, beskrivelser, H1, publiseringsdatoer, kanoniske adresser og Article-data er bevart. Tidligere Phase 7B og 7C er bevart, inkludert den korrigerte lenken og de autentiske dokument-/skjemavisningene.

Bekreftede fakta i rapporten er kilde-/objektsammenligninger, faktiske HTTP-/browserresultater, de autentiske demonstrasjonsopplysningene og eierbekreftede produktfunksjoner. Vurderingen av tydeligere redaksjonelle oppgaver er en redaksjonell vurdering, ikke et målt løfte om bedre rangering, trafikk eller konvertering. Det er ikke innhentet nye GSC-data.

## 2. Redaksjonell ansvarsmatrise

Matrisen ble opprettet og lagret før innholdsredigeringen i den eksterne undersøkelsesmappen som matrix.json. Den styrte omfanget:

| Artikkel | Primær intensjon | Leserens spørsmål | Unik praktisk verdi | Legges til andre sider | Mest nyttige kontekstlenke |
| --- | --- | --- | --- | --- | --- |
| /blogg/tilbud-eller-pristilbud | Prisgrunnlag | Hva innebærer fastpris, prisoverslag og timepris? | Tre korte byggeeksempler og synlige prisforutsetninger | Appsteg til /lage-tilbud; avtaleinngåelse til Phase 7B-artikkelen | /blogg/tilbud-vs-kontrakt |
| /blogg/lage-tilbud-byggebransjen | Oppdragsavklaring i byggebransjen | Hva må vi avklare om dette gulvoppdraget? | Mengder, materialvalg, klargjøring, avfall, tilgang og endringsspor | Skjemainstruksjoner til /lage-tilbud; dokumentfelt til dokumentartikkelen | /tilbud-eksempel |
| /blogg/lage-tilbudsdokument | Dokumentstruktur | Hvordan finner kunden informasjonen i tilbudet? | Leserekkefølge fra partene til arbeid/pris/datoer/vilkår og sluttkontroll | Befaringsdetaljer til byggeartikkelen; åtte appsteg til /lage-tilbud | /tilbud-eksempel |
| /blogg/feil-med-tilbud | Feilsøking før deling | Hva kan kunden misforstå, og hva endrer jeg? | Fem konkrete feil med konsekvens og rettelse | Full malforklaring til eksempelsiden; meldingsforslag til oppfølgingsartikkelen | /blogg/folle-opp-tilbud |
| /blogg/folle-opp-tilbud | Manuell kundedialog | Hvordan følger jeg opp uten å presse kunden? | Praktisk rutine og to høflige meldinger for mottak/avklaring | Prisforklaringer til prisartikkelen; detaljert konvertering til eksisterende workflow-artikkel | /hvordan-folge-opp-tilbud |

Prisartikkelen er ikke en ny opprettingsguide; byggeartikkelen beskriver ikke appknappene steg for steg; dokumentartikkelen handler om leserekkefølge; feilartikkelen beholder de fem hovedpunktene tittelen lover; oppfølgingsartikkelen handler om kontakten etter deling. Nødvendige felles fakta om Tilbud 29 er brukt i riktig sammenheng, uten å kopiere hele den eksisterende workflow-artikkelen.

## 3. Eksakte filer endret

| Fil | Status / endring |
| --- | --- |
| content/blogPosts.ts | Bare blocks for de fem avtalte artiklene er endret. Alle andre felt og alle andre artikler er bevart. |
| docs/phase-7d-tilbud-editorial-refinement-report.md | Ny implementerings- og valideringsrapport. |

Ved start var content/blogPosts.ts, content/seoPages.ts og app/(seo)/[slug]/page.tsx allerede lokalt endret fra Phase 7B/7C. De to OfferFigure-filene og Phase 7A/7B/7C-rapportene var utrackede. En fersk baseline av alle 311 sporede filer og de fem eksisterende utrackede filene ble registrert før redigering. Relativt til denne baseline er bare content/blogPosts.ts endret blant sporede filer. De fem opprinnelige utrackede filene er SHA-256-identiske.

HEAD er fortsatt 0c7b0785bcd638c9d1d87475f47bedb445e4b5b6. Ingen fjerning/overskriving av annet lokalt arbeid. Ingen endringer i SEO-renderer, CSS, figurer, originale bilder, optimerte bilder, appkode, backend, nav/footer eller globale komponenter. Ingen avhengighet eller ny rute er innført.

## 4. Artikkelvise endringer

| URL | Før | Etter | Omtrentlige ord, inkl. lenketekst |
| --- | --- | --- | --- |
| /blogg/tilbud-eller-pristilbud | Generell tekst om navn, klarhet og kundens beslutning, uten prisgrunnlag. | Tre tydelige prisformer med separate byggeeksempler: fast sum for avgrenset parkettlegging, prisoverslag for undergulv og timebasert listarbeid. Usikkerhet, forbehold, materialer/mengder og B2B/forbruker er skilt. Beløpene er illustrative, ikke bransje-/produktpriser. | 495 |
| /blogg/lage-tilbud-byggebransjen | Kort fellesliste over kontakt, arbeid og pris, fulgt av generiske effektivitets-/tillitsavsnitt. | Befaringsgrunnlag, mål/enheter, produktvalg, materialansvar, klargjøring, avfall, adkomst/arbeidstid, tidsplan og spor av kundens endringer. Tilbud 29 brukes som faktisk referanse med uttrykkelig skille mot detaljer som ikke står i PDF-en. | 507 |
| /blogg/lage-tilbudsdokument | Definisjon og generell feltliste uten leserekkefølge eller konkret gjennomgang. | Oppsett fra parter og prosjekt til arbeidslinjer, priser, MVA, datoer og avklaringer. Skiller appens prosjektfelt fra PDF-en. Kort gjennomlesing fra kundens perspektiv; appens åtte steg dupliseres ikke. | 451 |
| /blogg/feil-med-tilbud | Fem generelle feil om informasjon, gyldighet, MVA, presentasjon og oppfølging. | Fortsatt fem hovedfeil, nå med konkret konsekvens og forbedring: vagt omfang, uklare mengder/prisgrunnlag, materialansvar/utelatelser, blandede datoer og udokumenterte endringer. Beholder den korrigerte oppfølgingslenken. | 460 |
| /blogg/folle-opp-tilbud | Generelle timingråd, ett spørsmål og en kampanjeformulering som kunne antyde oppfølging i appen. | Manuell rutine fra kontroll av mottak til rimelig gjennomgangstid, spørsmål, endringer og versjons-/svarbevaring. To komplette, korte meldinger: første kontakt og svar på spørsmål om undergulv. Ingen automatisk dagregel, e-post, påminnelse, åpningssporing eller akseptportal loves. | 539 |

### Praktiske eksempler og presentasjon

- Prisartikkelen bruker tre uttrykkelig tenkte eksempler. Fastpris 15 000 kroner for et avgrenset arbeid er ikke gjengitt som alle vilkårene i Tilbud 29. Overslaget på 8 000 og timesatsen på 900 kroner er pedagogiske eksempler, ikke anbefalt markedspris, Jobbleder-pris eller et prisendringsløfte. Fire/seks timer gir henholdsvis 3 600/5 400 kroner før eventuelle særskilt avtalte materialer.
- Byggeartikkelen forklarer hva kunden og håndverkeren bør avklare på stedet, og sier hvilke detaljer Tilbud 29 ikke viser. Det er ikke funnet opp felt eller klausuler i dokumentet.
- Dokumentartikkelen gir et sammenhengende lesemønster og én kort avsluttende gjennomgang. Den erstatter ikke /lage-tilbud eller kopierer dens åtte steg.
- Feilartikkelen har to korte forklaringer per hovedfeil: mulig misforståelse og konkret rettelse. Brødteksten er uten fryktbaserte salgsløfter eller påstand om automatisk ugyldighet. Den eksisterende metadata-/schema-identiteten, inkludert gammel ingress, er bevart som instruert.
- Oppfølgingen viser to manuelle meldinger i vanlig redaksjonell tekst. Den første spør om tilbudet kom frem og inviterer til spørsmål; den andre besvarer underlagsspørsmålet og foreslår avklaring før en eventuell revidert versjon.

De generiske note-/kampanjeboksene og gjentatte direkte appknappene i disse artikkelblokkene er erstattet av oppgaverelatert tekst og kontekstlenker. De tidligere produktinngangene er undersøkt: de var generelle registrerings-CTA-er, ikke nedlastinger eller nødvendige funksjonslenker. Brukeren har fortsatt den uendrede globale Login-lenken, relaterte produktguider og naturlige produkt-/instruksjonsinnganger. Ingen PDF-nedlasting er fjernet. Ingen bilder er lagt til kun for dekorasjon; autentiske eksempler finnes på den lenkede eksempelsiden og i den eksisterende workflow-artikkelen.

## 5. Juridiske kilder kontrollert

Direkte kildekontroll utført 20. november 2026:

| Offisiell kilde | Tilgang | Avgrenset bruk |
| --- | --- | --- |
| [Forbrukerrådet: Sjekkliste før du velger håndverker](https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/sjekkliste-handverker/) | Tilgjengelig; lest direkte. | Støtter forbrukerrettet veiledning om prisgrunnlag, tydelig oppdrag og særskilt avklaring/dokumentasjon av ekstraarbeid. Lenket fra prisartikkelen. |
| [Forbrukerrådet: Bruk av håndverker](https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/) | Tilgjengelig; lest direkte. | Støtter anbefalingen om skriftlig dokumentasjon. Ikke tolket som et universelt formkrav for alle avtaler. |
| [Håndverkertjenesteloven](https://lovdata.no/lov/1989-06-16-63) | Direkte oppslag ga HTTP 405. | Full oppdatert lovtekst, virkeområde og unntak er ikke fremstilt som verifisert i denne kjøringen. |
| [Avtaleloven](https://lovdata.no/lov/1918-05-31-4) | Direkte oppslag ga HTTP 405. | Ingen detaljerte frister, paragrafhenvisninger eller uttømmende regel om avtaleinngåelse er innført. |

Forbrukerrådets tekst retter seg mot håndverkeroppdrag for forbrukere. Artikkelen skiller dette fra avtaler mellom virksomheter. Kilden brukes til praktiske avklaringer og dokumentasjon, uten å gjøre rådene til en universell lovpålagt dokumentmal. Jobbleders dokumenter gis ingen garanti om at de dekker alle rettslige krav.

## 6. Påstander som er kvalifisert eller utelatt

- **15 %-regelen er ikke publisert i de nye artiklene.** Det er ikke gitt en generell rett til overskridelse, prosentvis prisøkning eller automatisk påslag på overslag. Full lovtekst-/unntaksverifikasjon var utilgjengelig. Prisoverslag forklares smalere som forventet pris for beskrevet arbeid, med behov for tydelige forutsetninger.
- **Aksept er ikke lik dokumentoppretting.** Oppfølgingsteksten sier at et akseptert tilbud kan danne bindende avtale uten separat signert kontrakt, avhengig av innhold, svar, omstendigheter og gjeldende regler. Dette følger også oppdragets uttrykkelige føring. Ingen absolutt regel om at alle tilbud binder, eller at et separat kontraktsdokument alltid kreves.
- **Endringer er ikke automatisk godkjent.** Revidert fil alene er ikke kundens svar; arbeid, pris og tidsplan skal avklares og svar bevares. Ingen universell juridisk rett til tillegg eller automatisk «godkjenning ved stillhet» er påstått.
- **Manuell kundekontakt.** Ingen automatisk sending, e-postoppfølging, påminnelse, lesesporing, akseptportal eller elektronisk signering er beskrevet som appfunksjon. Jobbleder omtales som verktøy for å opprette og generere tilbudsdokumentet.
- **Demonstrasjon skilt fra anbefaling.** Tilbud 29 har parkettlinje, antall 1, 12 000 netto, eksempel-MVA 3 000 / 25 % og total 15 000. Prosjektet er synlig i appen, ikke som eget felt i PDF-en. Areal, materialansvar, avfall, byggeplan og detaljerte vilkår er råd for brukerens eget oppdrag, ikke tillagt dokumentet.
- **Ingen markeds-/produktpriser funnet på.** Regneeksemplene er merket som tenkte; det er ikke innført SaaS-pris, bransjenorm eller ny Free/Premium-begrensning.

Uavklart er detaljert lovverifikasjon av konkrete kundesituasjoner og eventuelle særlige formkrav. Det er ikke nødvendig å publisere slike regler for å oppfylle denne avgrensede redaksjonelle oppgaven. Ved en senere juridisk utvidelse må autoritativ kildekontroll fullføres først.

## 7. Kontekstlenker og lenkekontroll

| Artikkel | Lenker i den nye artikkelkroppen |
| --- | --- |
| /blogg/tilbud-eller-pristilbud | https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/sjekkliste-handverker/ — Les Forbrukerrådets veiledning om pris og avklaringer med håndverker; /blogg/tilbud-vs-kontrakt — Se hvordan tilbud, aksept og skriftlig avtale henger sammen; /tilbud-eksempel — Se antall, enhetspris, MVA og total i det autentiske tilbudseksemplet |
| /blogg/lage-tilbud-byggebransjen | /tilbud-eksempel — Se hele Tilbud 29 og hvilke opplysninger dokumentet faktisk inneholder; /lage-tilbud — Følg den praktiske veiledningen når du skal fylle ut tilbudet; /tilbud-mal — Se tilbudsverktøyet og mulighetene for videre dokumentarbeid |
| /blogg/lage-tilbudsdokument | /tilbud-eksempel — Se dokumentets oppsett og forklaringen av de faktiske feltene; /lage-tilbud — Gå videre til stegene for å opprette og kontrollere tilbudet i Jobbleder |
| /blogg/feil-med-tilbud | /blogg/tilbud-eller-pristilbud — Les om forskjellen mellom fastpris, prisoverslag og timepris; /blogg/folle-opp-tilbud — Les hvordan du følger opp tilbud på en god måte; /tilbud-eksempel — Sammenlign feltene og summene med et autentisk tilbudseksempel |
| /blogg/folle-opp-tilbud | /blogg/tilbud-vs-kontrakt — Les om tilbud, kundens aksept og et separat kontraktsdokument; /hvordan-folge-opp-tilbud — Se den korte oversikten over oppfølging av et sendt tilbud; /instruksjoner#opprett-tilbud — Se hvordan du oppretter tilbudsdokumentet i Jobbleder; /blogg/fra-tilbud-til-kontrakt-og-faktura — Se dokumentveiene videre når oppdraget skal følges opp med kontrakt eller faktura |

Naturlig ankervariasjon er brukt etter leserens neste oppgave. Den korrigerte /blogg/folle-opp-tilbud-lenken er bevart fra feilartikkelen, med samme beskrivende tekst. Ingen aktiv href med feiladressen /folle-opp-tilbud finnes i de parsede bloggartiklene. Ingen slug er endret og ingen redirect er lagt til.

Alle interne lenker i artikkelkroppene ble åpnet med Enter ved hver testbredde/preferanse: 112 registrerte navigasjoner traff riktig mål-URL. Det ble ventet eksplisitt på målets path og hash ved ankerlenker. 17 unike interne mål fra de renderte main-områdene ble i tillegg kontrollert med HTTP og svarte alle 200. Forbrukerrådets eksterne lenke ble åpnet under kildekontrollen. Den eksisterende oppfølgingsartikkelen i produksjon svarte også 200; dette betyr ikke at de lokale redigeringene er publisert.

## 8. SEO og regresjonsbevaring

Maskinell sammenligning av alle 18 BlogPost-objekter mot før-baseline:

- Bare blocks i nøyaktig de fem avtalte artiklene er endret.
- Alle felt utenom blocks er uendret for alle 18: id, title, slug, summary, seoTitle/seoDescription der satt, createdAt, kategori, tags og relatedTopic.
- De øvrige 13 artiklene, inkludert /blogg/tilbud-vs-kontrakt og /blogg/fra-tilbud-til-kontrakt-og-faktura, er eksakt uendret.
- Alle 17 SEOPage-records og Phase 7C-renderer/figurfiler er identiske med inngående arbeidsflate.

Nettleseren bekreftet uendret rendret title, meta description, H1, WWW-canonical, robots-meta og hele parsede JSON-LD-listen i alle 40 tilfeller. Article-datoer er ikke oppdatert. Ingen FAQ eller ny strukturert datatype er lagt til. Én H1 etterfulgt av semantiske H2 og de eksisterende relaterte kortenes overskrifter.

| Artikkel | Uendret title/H1-identitet | Publisert | Canonical |
| --- | --- | --- | --- |
| tilbud-eller-pristilbud | Tilbud eller pristilbud – hva forventer kunden? / Tilbud eller pristilbud – hva forventer kunden egentlig? | 2026-03-05 | https://www.jobbleder.no/blogg/tilbud-eller-pristilbud |
| lage-tilbud-byggebransjen | Hvordan lage et profesjonelt tilbud i byggebransjen / Hvordan lage et profesjonelt tilbud i byggebransjen | 2025-04-20 | https://www.jobbleder.no/blogg/lage-tilbud-byggebransjen |
| lage-tilbudsdokument | Hva er et tilbudsdokument og hvordan lager du ett? / Hva er et tilbudsdokument og hvordan lager du ett? | 2025-07-23 | https://www.jobbleder.no/blogg/lage-tilbudsdokument |
| feil-med-tilbud | Topp 5 feil å unngå når du sender tilbud / Topp 5 feil å unngå når du sender tilbud | 2025-04-24 | https://www.jobbleder.no/blogg/feil-med-tilbud |
| folle-opp-tilbud | Hvordan følge opp et sendt tilbud og lande flere jobber / Hvordan følge opp et sendt tilbud og lande flere jobber | 2025-04-23 | https://www.jobbleder.no/blogg/folle-opp-tilbud |

Før-/etterkontroll av fjorten faktiske ruter: fem målartikler med forventet nytt hovedinnhold; ni ikke-målrettede ruter med identisk hovedtekst, lenkeliste, metadata/H1 og schema:

| Uendret rute | HTTP i regresjonskontrollen |
| --- | --- |
| / | 200 |
| /tilbud-mal | 200 |
| /tilbud-eksempel | 200 |
| /lage-tilbud | 200 |
| /timeliste-mal | 200 |
| /fakturaprogram-gratis | 200 |
| /kontrakt-mal | 200 |
| /blogg/tilbud-vs-kontrakt | 200 |
| /blogg/fra-tilbud-til-kontrakt-og-faktura | 200 |

Hovedproduktet /tilbud-mal og Phase 7B-/7C-arbeidet er dermed kontrollert både ved kildebaseline og rendret lokal side. Nav, footer, canonicals, sitemap/robots og eksisterende download-lenker er ikke endret. Ingen ny GSC-/ranking-/konverteringsmåling er påstått; bedre rollefordeling er en redaksjonell vurdering.

## 9. Responsive og tilgjengelighet

Fersk lokal produksjonsbygning på http://127.0.0.1:3041, Chrome headless. Alle fem sider ved fire bredder og to OS-fargepreferanser, med reduced motion emulert: **40 tilfeller**.

| Artikkel | 375 px | 768 px | 1280 px | 1440 px |
| --- | --- | --- | --- | --- |
| tilbud-eller-pristilbud | Light/dark kontrollert | Light/dark kontrollert | Light/dark kontrollert | Light/dark kontrollert |
| lage-tilbud-byggebransjen | Light/dark kontrollert | Light/dark kontrollert | Light/dark kontrollert | Light/dark kontrollert |
| lage-tilbudsdokument | Light/dark kontrollert | Light/dark kontrollert | Light/dark kontrollert | Light/dark kontrollert |
| feil-med-tilbud | Light/dark kontrollert | Light/dark kontrollert | Light/dark kontrollert | Light/dark kontrollert |
| folle-opp-tilbud | Light/dark kontrollert | Light/dark kontrollert | Light/dark kontrollert | Light/dark kontrollert |

Alle 40 svarte 200 med cache deaktivert. Ingen horisontal overflow, klippet tekst eller ødelagt artikkelrendering registrert. Observerte layoutskift var CLS 0. Ingen nye bilder eller JavaScript-komponenter ble lagt til. Fullsidebilder ble tatt etter gjennomrulling; representative mobil-/desktopbilder er visuelt kontrollert for lesbarhet, avsnitt, listemarger, lenker og eksisterende seksjonsrytme.

Tastatur: Tab-steg registrert i hvert tilfelle; nye tekstlenker er fokuserbare og har synlig fokus. Alle 112 artikkelnavigasjonene via Enter traff riktig mål, inkludert den bevarte oppfølgingslenken og instruksjonsankeret. Mobilmenyen ble åpnet/lukket med Enter/Space der den er synlig; eksisterende aria-expanded og lenkenavn er bevart. Ingen ny FAQ eller nye interaktive kontrolltyper er innført.

Axe-core med WCAG 2 A/AA, 2.1 AA, 2.2 AA og best-practice-tagger: **0 bekreftede violations i alle 40 tilfeller**. Det finnes 8 tilfeller med incomplete-resultater; disse er manuelle kontrollpunkter, ikke automatisk bestått. Treffene gjelder link-in-text-block på eksisterende brødsmulelenker ved 768 px, ikke de nye artikkellenkene. Brødsmulekomponenten er uendret. Detaljene ligger i browser.json. Dette er målrettet automatisering og keyboard-/visuell kontroll, ikke full skjermleser- eller fysisk-enhetsertifisering.

Bloggen beholder den tilsiktede lyse redaksjonelle flaten under begge OS-preferanser. Eksisterende mørk/navy SEO-design er urørt. Ingen ny temabryter, animasjon eller stilendring. Bildene fra Phase 7C er bevart på sine egne sider og dupliseres ikke i alle fem artikler.

## 10. TypeScript, ESLint og produksjonsbygg

| Kontroll | Resultat |
| --- | --- |
| npx.cmd tsc --noEmit --incremental false | Bestått, exit 0 |
| npm.cmd run lint | Full ESLint bestått, exit 0 |
| npm.cmd run build | Bestått, exit 0; 55 statiske sider generert |
| git diff --check | Bestått; ingen whitespace-feil |
| Bevaringskontroll | Kun content/blogPosts.ts endret blant sporede Phase 7D-baselinefiler; fem tidligere utrackede filer SHA-256-identiske |

Bygget viste den kjente Node DEP0205-advarselen om module.register(). Ingen type-, lint- eller buildfeil. Git skrev en LF/CRLF-advarsel om senere Git-operasjoner; redigeringen er begrenset til fem blocks-arrays. Ingen refaktor av bloggtypen eller renderer er utført.

## 11. Begrensninger og observasjoner

- Lovdata-oppslagene ga 405. Ingen detaljerte legalregler eller 15 %-påstand er derfor publisert som verifisert; se §5–6.
- Lokal browser registrerte 152 HTTP 400-responser fra den kjente /api/handshake-forespørselen under navigasjonene. Ingen andre HTTP ≥400 eller JavaScript-pageerrors ble registrert i testtilfellene. Tracker/API er uendret. Rotårsaken i lokalmiljøet er ikke fastslått her, og det er ikke påstått ny produksjonsfeil. Analytics er ikke endret.
- Autentisert app, virkelig PDF-generering, faktisk kundedialog/sending eller avtaleinngåelse er ikke testet. Funksjonsomtalen bygger på eierbekreftet produktgrunnlag og tidligere verifisert dokumentasjon.
- Ingen ny Lighthouse-, GSC- eller produksjonsrelease-verifikasjon er utført. Denne leveransen er lokal og redaksjonell.
- Dokumentasjonsrapportene og undersøkelsesfilene er ikke en garanti for juridisk etterlevelse eller framtidig SEO-effekt.

Undersøkelsesfiler ligger utenfor repositoryet i C:\Users\ddlas\.codex\visualizations\2026\11\18\01a1eebb-5858-7be1-82b1-491fd2f27970/phase7d/: matrix.json (før redigering), source.json, preservation-before.json, untracked-before.json, before.json, source-verification.json, browser.json og fullsidebilder. De er ikke applikasjonsressurser.

## 12. Anbefaling for Phase 7E

Etter eierens gjennomgang anbefales en avgrenset sluttkontroll av det samlede Tilbud-økosystemet: bekreft at Phase 7A-funnene er håndtert i den godkjente arbeidsflaten, kontroller metadata/schema/lenker/ankre, korrekt dokumentidentitet, bevaring av produktet og representative responsive/a11y-resultater. Vurder produksjonssamsvar først i en senere uttrykkelig godkjent release eller lesende produksjonskontroll; ikke anta at lokalt innhold allerede er publisert.

Ingen ny redesign, søkeordrute eller full omskriving anbefales ut fra dette arbeidet. Eventuelle P2/P3-observasjoner kan holdes som backlog fremfor å utvide denne fasen. Phase 7E er ikke startet.

Lokale forhåndsvisninger:

- [tilbud-eller-pristilbud](http://127.0.0.1:3041/blogg/tilbud-eller-pristilbud)
- [lage-tilbud-byggebransjen](http://127.0.0.1:3041/blogg/lage-tilbud-byggebransjen)
- [lage-tilbudsdokument](http://127.0.0.1:3041/blogg/lage-tilbudsdokument)
- [feil-med-tilbud](http://127.0.0.1:3041/blogg/feil-med-tilbud)
- [folle-opp-tilbud](http://127.0.0.1:3041/blogg/folle-opp-tilbud)

Ingen commit, push eller deploy. Avventer eierens godkjenning.

**READY FOR OWNER REVIEW**
