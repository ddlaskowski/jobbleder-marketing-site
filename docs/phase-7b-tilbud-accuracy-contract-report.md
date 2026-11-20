# Phase 7B — Tilbud accuracy & contract editorial

20. november 2026. Lokal implementering. **READY FOR OWNER REVIEW**. Ingen commit, push eller deploy.

## 1. Sammendrag og omfang

F01 og F03 fra den godkjente Phase 7A-auditten er håndtert:

- Den eksisterende kontekstlenken i /blogg/feil-med-tilbud går nå til /blogg/folle-opp-tilbud.
- /blogg/tilbud-vs-kontrakt er fullført som en praktisk Bokmål-artikkel. Den skiller tilbudsdokument, kundens aksept, avtalen og et separat kontraktsdokument, og bruker et avgrenset parkettoppdrag som eksempel.

Eksisterende bloggkomponenter, typografi, spacing, navigasjon og footer er beholdt. Ingen nye komponenter, bildevarianter, avhengigheter eller ruter er opprettet. /tilbud-mal er ikke redesignet. F02 og /tilbud-eksempel er urørt og fortsatt reservert for Phase 7C. Phase 7D er ikke startet.

Arbeidsflaten ved start hadde bare den utrackede docs/phase-7a-tilbud-ecosystem-audit.md. HEAD er fortsatt 0c7b0785bcd638c9d1d87475f47bedb445e4b5b6. Hele auditinnholdet og nåværende implementasjon ble gjennomgått. En fersk kilde-/filbaseline og lokal nettleserbaseline for ti ruter ble lagret før endringene.

## 2. Eksakte filer endret eller opprettet

| Fil | Status | Endring |
| --- | --- | --- |
| content/blogPosts.ts | Endret | Én href i feil-med-tilbud; kun blocks-innholdet i tilbud-vs-kontrakt fullført. Alle innholdsidentiteter er bevart. |
| docs/phase-7b-tilbud-accuracy-contract-report.md | Opprettet | Denne implementerings- og valideringsrapporten. |

Den tidligere utrackede Phase 7A-rapporten er bevart, ikke opprettet eller endret av Phase 7B. SHA-256: 8ee397459140a17a95e7856c82f22bb0dd8c5d1a1ab2a9ac8ec9b78b028b17cc. Av de 311 sporede baselinefilene er bare content/blogPosts.ts endret; de øvrige 310 er byte-identiske. Ingen filer i Jobbleder-applikasjonsrepositoryet er endret. Ingen kilde- eller optimaliserte bilder er endret.

## 3. F01 — verifikasjon av lenkerettelsen

Før: href /folle-opp-tilbud. Etter: href /blogg/folle-opp-tilbud. Lenketeksten «Les hvordan du følger opp tilbud på en god måte» og hele resten av artikkelinnholdet er uendret. Verifisert ved objekt-sammenligning mot baseline: den korrigerte artikkelen er eksakt lik den gamle etter kun denne ene href-erstatningen.

Den eksisterende målartikkelens slug folle-opp-tilbud er bevart, inkludert den historiske skrivemåten. Ingen redirect eller ny side er opprettet.

| Kontroll | Resultat |
| --- | --- |
| Lokal mål-URL | HTTP 200; riktig artikkel åpnes via tastatur fra den korrigerte lenken. |
| Produksjon /blogg/folle-opp-tilbud | HTTP 200; den eksisterende artikkelen er tilgjengelig. |
| Produksjon /folle-opp-tilbud | HTTP 404; historisk feiladresse, ikke en rute som skal opprettes. |
| Referanser i aktiv kilde | Ingen href med det eksakte feilaktige målet igjen i bloggartiklene. Søk i app, components, content og lib fant bare den riktige /blogg/-adressen (og den uendrede riktige lenken i BlogPreview). |
| Historisk dokumentasjon | Phase 7A omtaler fortsatt den gamle feilen som auditbevis. Dette er ikke en aktiv navigasjonslenke og er bevisst bevart. |

Rettelsen er bare lokal. Den publiserte avsenderartikkelen er ikke endret eller påstått rettet i produksjon av denne fasen.

## 4. F03 — redaksjonell før/etter og presentasjon

Før inneholdt artikkelen tre uferdige ellipsetekster («Mange blander tilbud og kontrakt...», «Tilbud sendes før arbeid starter...», «Kontrakten er en bindende avtale...»), en kort to-punktsliste og en kampanjeboks. Nå er plassholderne fjernet og teksten fullført uten endring av metadata eller H1.

| Ny seksjon | Praktisk innhold |
| --- | --- |
| Hva er et tilbud? | Beskriver innhold, pris, forutsetninger og gyldighet. Illustrativ legging av 20 m² parkett til 15 000 kr inkludert MVA, med kundeleverte materialer, klart underlag og uttrykkelig avgrensing mot riving. Oppstart, ferdigstillelse og svarfrist er relevante punkter å avklare. |
| Hva er en kontrakt? | Skiller avtalen fra dokumentet som beskriver den; et dokument i et program er ikke i seg selv kundens aksept. |
| Hva skjer når kunden aksepterer tilbudet? | Konservativt hovedpoeng: et akseptert tilbud kan danne bindende avtale avhengig av omstendigheter og gjeldende regler. Ta vare på tilbud/svar og avklar endringer. Skiller privatkunde fra B2B. |
| Når er en separat skriftlig kontrakt nyttig? | Forklarer nytten av å samle ansvar, datoer og betaling også etter at enighet kan være oppnådd. Nye vilkår må avklares med kunden. Forbrukerrådets dokumentasjonsråd er lenket. |
| Hva bør du avklare før arbeidet starter? | Praktisk liste om omfang, materialer, pris/MVA, tidspunkt, ekstraarbeid og betaling; tydelig at dette ikke er en uttømmende liste over lovkrav. |
| Hvordan støtter Jobbleder dokumentarbeidet? | Kort forklaring av oppretting/PDF, selvstendig kontrakt og begge fakturaveier. Lenker til den eksisterende fullstendige veiledningen i stedet for å kopiere skjermbildeinstruksjonene. |

Artikkelblokkene utgjør omtrent 815 ord inkludert overskrifter, liste og lenketekster. Parketteksemplet er uttrykkelig illustrativt og presenteres ikke som det eksakte eksportgrunnlaget for Tilbud 29/Kontrakt 11 eller som juridisk universell mal.

Tre naturlige interne tekstlenker er lagt til: /tilbud-mal, /kontrakt-mal og /blogg/fra-tilbud-til-kontrakt-og-faktura. Én kildehenvisning til Forbrukerrådet er lagt til. Den gamle isolerte kampanjeboksen er erstattet av kontekstlenkene; ingen ekstra appknapper eller konkurrerende salgsbokser er lagt til. Eksisterende globale navigasjons-/relaterte lenker er bevart.

### Valgfritt kontraktsbilde vurdert

Det foreslåtte eksisterende bildet public/images/product/kontrakt/optimized/jobbleder-home-contract-document-249c17de7105.webp er inspisert: 508 × 720 px, 37 384 byte, Kontrakt 11 med referanse til Tilbud 29, prisgrunnlag, datoer og manuelle signaturfelt. Det viser en bestemt demonstrasjonsavtale og ikke generelle regler om avtaleinngåelse. Den ferdige workflow-artikkelen viser allerede dette dokumentet og de tilhørende handlingene.

Ingen ekstra bilde lagt til. Den nye artikkelens formål er begrepsavklaring og en praktisk tekstforklaring; et dokumentbilde ville gjenta den eksisterende videreveien og kunne blandes sammen med det selvstendige illustrative parketteksemplet. Derfor ingen nye bildeforespørsler, payload, alt-tekster eller originalbildelenker å validere i denne fasen. Alle eksisterende bildekomponenter og originaler er urørt.

## 5. Juridiske kilder og uavklarte kontrollpunkter

Kildekontroll utført 20. november 2026:

| Kilde | Faktisk tilgang | Hvordan den er brukt |
| --- | --- | --- |
| [Avtaleloven](https://lovdata.no/lov/1918-05-31-4) | Direkte oppslag ga HTTP 405. | Ingen detaljerte fristregler, paragrafhenvisninger eller uttømmende regel om avtaleinngåelse fremstilles som nyverifisert i artikkelen. |
| [Håndverkertjenesteloven](https://lovdata.no/lov/1989-06-16-63) | Direkte oppslag ga HTTP 405. | Ingen prosentsats for overslag, pristillegg eller andre detaljerte forbrukerregler er tatt inn. Forbruker/B2B er uttrykkelig skilt. |
| [Forbrukerrådet: Bruk av håndverker](https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/) | Tilgjengelig, lest direkte. | Dokumenterer rådet om skriftlig kontrakt for å klargjøre og dokumentere enigheten. Lenket i artikkelen som kilde til dette rådet. |
| [Forbrukerrådets sjekkliste](https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/sjekkliste-handverker/) | Tilgjengelig, lest direkte. | Kontrollert praktisk råd om arbeidsbeskrivelse, tid, ansvar, betaling og særskilt dokumentasjon av tilleggsarbeid. Ingen universell lovpålagt klausulliste er utledet. |
| Forbrukertilsynet / FKU, sak 131268 | Søkeindeksert utdrag funnet; direkte PDF-oppslag ga 404. | Ikke brukt som dokumentert juridisk autoritet eller lenket i artikkelen. |

Ordlyden er bevisst kvalifisert: «Et tilbud som kunden aksepterer, kan danne en bindende avtale, avhengig av omstendighetene og reglene som gjelder for oppdraget.» Dette følger også den eksplisitte redaksjonelle føringen i det godkjente oppdraget. Artikkelen hevder ikke at separat signatur alltid kreves, eller at enhver melding automatisk er en gyldig aksept. Endrede materialer/omfang beskrives som noe partene må avklare, uten en påstått juridisk klassifisering av alle slike svar.

Gjenstående begrensning: full oppdatert lovtekst, eventuelle formkrav i særlige avtalesituasjoner og konkrete rettsvirkninger er ikke verifisert gjennom de utilgjengelige Lovdata-oppslagene. Detaljert juridisk utvidelse må kildekontrolleres særskilt før publisering. Den foreliggende lokale teksten bruker oppdragets tillatte konservative formulering og gir ingen garanti om juridisk gyldighet eller etterlevelse.

## 6. Jobbleder-funksjonalitet kontrollert

Produktgrunnlaget er de eksplisitt eierbekreftede funksjonene i Phase 7B, etterprøvd mot Phase 7A-rapportens kilder, gjeldende instruksjoner og den ferdige arbeidsflytartikkelen. Det er ikke utført innlogget app-/backendtest.

- Brukeren oppretter tilbud og genererer PDF.
- Brukeren oppretter kontrakt fra tilbud; kontrakten er et selvstendig, redigerbart dokument.
- Begge veier er beskrevet: Tilbud → Faktura og Tilbud → Kontrakt → Faktura.
- Brukeren initierer konvertering, kontrollerer den nye fakturaen og sender PDF manuelt.
- Kundedialog, aksept og signering foregår utenfor den dokumenterte appflyten. Ingen elektronisk signering, automatisk aksept, tilbudslevering, påminnelser, kundeportal eller automatisk fakturasending er lovet.
- Free omfatter oppretting/PDF/konvertering med Jobbleder-merking; Premium gir annen PDF-profil og egen firmalogo. Ingen pris eller ny funksjonsbegrensning er innført.

Ingen appkode er endret. En generert kontrakt eller et redigert dokument omtales ikke som automatisk kundegodkjenning.

## 7. SEO-bevaring og avgrenset regresjon

Maskinell sammenligning av alle 18 bloggartikler viser at alle felt utenom blocks er identiske med baseline: slug, title, summary, seoTitle/seoDescription der satt, createdAt, kategori, tagger og relatedTopic. Bare de to avtalte postenes blocks er endret. Alle 17 SEO-sideobjekter er eksakt uendret.

For begge målartikler er tittel, beskrivelse, canonical, robots-meta, H1 og hele den parsede JSON-LD-listen identiske før/etter i alle 16 nettlesertilfeller. Publiseringsdatoen for tilbud-vs-kontrakt er fortsatt 2026-04-07. Det er én H1 og seks H2 i den fullførte artikkelen; Article- og globale schemaobjekter er uendret.

Ti lokale ruter er sammenlignet før/etter. Alle har HTTP 200 og uendret SEO/schema-identitet. De åtte ikke-målrettede rutene har dessuten identisk hovedtekst og lenkeliste:

| Uendret rute | Resultat |
| --- | --- |
| / | 200; metadata/H1/schema, hovedtekst og lenker identiske |
| /tilbud-mal | 200; metadata/H1/schema, hovedtekst og lenker identiske |
| /tilbud-eksempel | 200; metadata/H1/schema, hovedtekst og lenker identiske |
| /timeliste-mal | 200; metadata/H1/schema, hovedtekst og lenker identiske |
| /fakturaprogram-gratis | 200; metadata/H1/schema, hovedtekst og lenker identiske |
| /kontrakt-mal | 200; metadata/H1/schema, hovedtekst og lenker identiske |
| /blogg/folle-opp-tilbud | 200; metadata/H1/schema, hovedtekst og lenker identiske |
| /blogg/fra-tilbud-til-kontrakt-og-faktura | 200; metadata/H1/schema, hovedtekst og lenker identiske |

/blogg/feil-med-tilbud har identisk hovedtekst og kun det avtalte nye lenkemålet. /blogg/tilbud-vs-kontrakt har forventet nytt hovedinnhold og de fire nye kontekst-/kildelenkene. Sitemap-, robots-, canonical-, route- og rendererfiler er byte-identiske. Ingen eksisterende download-URL eller nedlastingskomponent er endret. Søkeresultater, Google-indeksstatus eller fremtidig rangering er ikke målt eller garantert.

## 8. Responsive, tastatur og tilgjengelighet

Testet i Chrome headless mot fersk lokal produksjonsbygning på http://127.0.0.1:3041. Begge OS-fargepreferanser er emulert, sammen med reduced-motion. Bloggflaten er fortsatt tilsiktet lys i begge preferanser; ingen ny temalogikk er innført.

| Side | 375 px | 768 px | 1280 px | 1440 px |
| --- | --- | --- | --- | --- |
| /blogg/feil-med-tilbud | Light + dark: bestått | Light + dark: bestått | Light + dark: bestått | Light + dark: bestått |
| /blogg/tilbud-vs-kontrakt | Light + dark: bestått | Light + dark: bestått | Light + dark: bestått | Light + dark: bestått |

16 av 16 tilfeller: HTTP 200, ingen horisontal overflow, uendret metadata/schema, ingen registrerte pageerror/HTTP-feil under testinteraksjonene og observerte layoutskift CLS 0. Ingen nye artikkelbilder eller deformerte bildeelementer. Hele siden ble rullet gjennom før fullsidebilder ble lagret. Representativ visuell kontroll av artikkelens mobil-/desktopbilder viste lesbar tekst, ryddige overskriftsbrudd, fungerende liste/lenker og beholdt spacing.

Tastatur: 192 Tab-steg registrert på tvers av tilfellene. Nav-, brødsmule-, artikkel- og relaterte lenker var fokuserbare med synlig native outline. De tre nye interne artikkellenkene og den korrigerte oppfølgingslenken ble aktivert med Enter i hvert relevant tilfelle: 32 av 32 navigasjoner traff riktig lokal URL. Mobilmenyen ble åpnet med Enter og lukket med Space i alle 4 tilfeller der mobilknappen er synlig, med korrekt aria-expanded true → false og navn «Åpne meny» ved lukket tilstand. Desktopnavigasjonen forble tilgjengelig.

Axe-core med WCAG 2 A/AA, 2.1 AA, 2.2 AA og best-practice-tagger: **0 bekreftede violations i alle 16 tilfeller**. Ingen incomplete-resultater i denne kjøringen. Dette er målrettet automatisert testing, Tab/Enter/Space og visuell kontroll; ikke full skjermleser-/fysisk-enhetsertifisering. Det er ingen FAQ i disse artikkeltekstene; ingen ny FAQ eller ny FAQ-state er introdusert.

17 unike interne lenkemål fra de to renderte sidene ble kontrollert med HTTP; alle svarte 200 lokalt. Forbrukerrådets eksterne kildeside ble kontrollert direkte gjennom kildeverifikasjonen, ikke som en innlogget apphandling. Ingen nye bilder gjør bildeinnlasting/fullstørrelseslenker ikke relevant som ny funksjon her; eksisterende workflow-bilder er bevart i den uendrede videreveien.

Bevis og screenshots ligger utenfor repositoryet i C:\Users\ddlas\.codex\visualizations\2026\11\18\01a1eebb-5858-7be1-82b1-491fd2f27970/phase7b/: before.json, browser.json, source-verification.json og de 16 fullsidebildene. De er undersøkelsesfiler, ikke nye applikasjonsressurser. Ingen ny Lighthouse-måling var krevd eller kjørt i denne fasen; Phase 7A-scorer brukes ikke som målinger av den endrede artikkelen.

## 9. TypeScript, ESLint og produksjonsbygg

| Kommando | Resultat |
| --- | --- |
| npx.cmd tsc --noEmit --incremental false | Bestått, exit 0 |
| npm.cmd run lint | Full ESLint bestått, exit 0, ingen lintadvarsler i output |
| npm.cmd run build | Bestått, exit 0; alle 55 statiske sider generert |
| git diff --check | Bestått; ingen whitespace-feil |

Bygget skrev den eksisterende Node DEP0205-advarselen om module.register(); dette stoppet ikke bygget. Ingen TypeScript-, ESLint- eller buildfeil. Ingen nye dependencies, klientkomponenter eller JavaScript-funksjoner er lagt til. git varslet om LF/CRLF-konvertering ved senere Git-operasjoner; diffen er avgrenset til de avtalte linjene, ikke en helfilformatering.

## 10. Gjenstående risiko og eiergjennomgang

- Full lovtekstverifikasjon for eventuelle detaljerte juridiske regler er fortsatt begrenset som beskrevet i §5. Konservative formuleringer er brukt i stedet; ingen detaljert rettsregel er presentert som verifisert.
- F02 på /tilbud-eksempel gjenstår med hensikt til Phase 7C. Phase 7B innebærer ikke at hele Tilbud-økosystemets backlog er lukket.
- Autentisert appflyt og backend er ikke testet. Produktpåstandene holder seg til de avtalte funksjonene.
- Eier bør vurdere den fullførte artikkelens språk, omfang og plassering lokalt. Ingen annen beslutning eller nytt bilde er nødvendig for denne leveransen.

Lokale forhåndsvisninger:

- [Tilbud vs kontrakt](http://127.0.0.1:3041/blogg/tilbud-vs-kontrakt)
- [Topp 5 feil – korrigert lenke](http://127.0.0.1:3041/blogg/feil-med-tilbud)

Ingen commit, push eller deploy. Avventer eierens godkjenning.

**READY FOR OWNER REVIEW**
