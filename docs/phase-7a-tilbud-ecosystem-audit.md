# Phase 7A — Tilbud ecosystem audit

20. november 2026, Europe/Berlin. **READ-ONLY AUDIT.** Kun denne rapporten er opprettet i repositoryet. Ingen implementering, endring av innhold/metadata/bilder, commit, push eller deploy.

## 1. Executive summary

**Bevar den publiserte hovedsiden /tilbud-mal.** Den har allerede en tydelig produktfortelling, autentiske dokumenter, begge konverteringsløp, korrekt Free/Premium-sammenligning og tilgjengelige bildeforstørrelser. En ny produktredesign er ikke begrunnet.

Ingen P0 er identifisert. Tre P1 bør håndteres før økosystemet regnes som ferdigstilt:

1. En kontekstlenke fra /blogg/feil-med-tilbud går til en bekreftet 404.
2. /tilbud-eksempel lover et eksempel, men viser verken utfylt dokument, konkret tilbudstekst eller gjennomregnet eksempel.
3. /blogg/tilbud-vs-kontrakt er fortsatt et publisert utkast med ellipser og en utilstrekkelig forklaring av avtaleinngåelse.

De øvrige behovene er avgrensede P2/P3-forbedringer i praktisk veiledning, presisering av prisgrunnlag, oppfølging og lenker. Det ferdigstilte /blogg/fra-tilbud-til-kontrakt-og-faktura skal gjenbrukes som arbeidsflytressurs, ikke omskrives eller dupliseres. Det finnes ikke grunnlag for nye ruter, sammenslåinger eller redirects.

### Arbeidsgrunnlag og faktiske kontroller

- Ren arbeidsflate ved start, HEAD 0c7b0785bcd638c9d1d87475f47bedb445e4b5b6; SHA-256-baseline for 311 sporede filer.
- Tidligere standarder lest i Phase 4B.1/4B.2, Phase 5.3D, Phase 6A/6B.1 og Phase 6C. Historiske funn er kontrollert mot nåværende kilde og produksjon, ikke overført automatisk.
- 84 ferske brede nettleserobservasjoner: 21 faktiske ruter × lokal/produksjon × 375/light og 1440/dark. Samme metadata, H1/H2/H3, schema, hovedtekst og bildebeskrivelser i de 21 lokale/produksjonsparene ved 375 px.
- 48 detaljerte lokale tilfeller: seks representative sider × fire bredder × to preferanser; axe, FAQ-tastatur, dimensjoner, observerte layoutskift og originale bildelenker.
- Fire ekstra produksjonsruter kontrollert; hovedsidens meny, FAQ og tre konverteringsseksjoner kontrollert i produksjon ved alle fire bredder.
- 110 unike miljø/destinasjon-kombinasjoner kontrollert med HTTP: 55 lokale og 55 produksjonslenker. 54 av 55 ulike destinasjoner svarer 200 i hvert miljø; samme feiladresse svarer 404 i begge.
- 14 unike vellykkede ankerobservasjoner: syv eksisterende instruksjonsankre i hvert miljø. 184 observerte synlige bilder dekodet uten feil; 33 unike produksjonsbilder kontrollert byte-identiske med lokale originaler/derivater.
- TypeScript, full ESLint og produksjonsbygg bestått. Fire ferske Lighthouse-laboratoriemålinger mot produksjons-URL-er.

Midlertidige bevis ligger utenfor prosjektet i C:\Users\ddlas\.codex\visualizations\2026\11\18\01a1eebb-5858-7be1-82b1-491fd2f27970/phase7a/. Den første brede kjøringen møtte en avslått lokal forbindelse fordi previewserveren ikke kjørte. Lokale tilfeller ble kjørt på nytt etter oppstart; feilede forsøk er ikke telt som bestått. To tidlige forsøk på detaljskriptet feilet i testkoden, ble rettet og erstattet av den komplette 48-tilfellers kjøringen. Tidlige seksjonsbilder uten venting på lazy loading ble tatt på nytt etter dekoding.

Ingen autentisert apphandling, faktisk kundesending, signering, backend-transaksjon, Google-indeksstatus eller konverteringsrate er verifisert. Representative tester er ikke full WCAG-sertifisering eller fysisk enhetstest.

## 2. Complete Tilbud route inventory

### Avgrensning og implementasjon

Kjernen er fire tilbudslandingssider og fem artikler i Tilbud-kategorien. Tre andre artikler forklarer dokumentrelasjoner og inngår redaksjonelt. En Faktura-artikkel nevner tilbud som støttefunksjon. Tilgrensende kontraktsider, produktreferanser og huber er registrert som kontekst, ikke foreslått som automatisk implementeringsomfang. Tabellen nedenfor dekker de 25 direkte undersøkte URL-ene; alle returnerte 200. /folle-opp-tilbud er en feilaktig lenkedestinasjon, ikke en ekstra innholdsrute.

Ruting: app/(seo)/[slug]/page.tsx og content/seoPages.ts. /tilbud-mal har en egen gren til components/product/offer/OfferProductPage.tsx; de tre andre bruker den delte SEO-rendereren. Bloggruter og Article-data kommer fra app/blogg/[slug]/page.tsx og content/blogPosts.ts. Ingen selvstendige «pristilbud-mal»- eller «tilbud-håndverker»-ruter ble funnet.

| URL | Type / tema | Søke- eller brukerintensjon |
| --- | --- | --- |
| /tilbud-mal | Produkt / tilbud | Gratis digital tilbudsmal og dokumentflyt |
| /lage-tilbud | SEO / tilbud | Skrive et tilbud steg for steg |
| /tilbud-eksempel | SEO / tilbud | Se et konkret utfylt tilbud |
| /hvordan-folge-opp-tilbud | SEO / tilbud | Praktisk oppfølging av sendt tilbud |
| /blogg/gratis-fakturaprogram-handverkere | Blogg / faktura, sidehenvisning | Fakturaverktøy; tilbud nevnes som tilleggsfunksjon |
| /blogg/lage-tilbud-byggebransjen | Blogg / tilbud | Tilbudsinnhold for byggeoppdrag |
| /blogg/feil-med-tilbud | Blogg / tilbud | Unngå feil ved utsending |
| /blogg/lage-tilbudsdokument | Blogg / tilbud | Forstå og utforme tilbudsdokument |
| /blogg/forskjell-faktura-tilbud-timeliste | Blogg / oversikt, støtte | Når ulike dokumenter brukes |
| /blogg/folle-opp-tilbud | Blogg / tilbud | Høflig kundekontakt etter utsending |
| /blogg/tilbud-eller-pristilbud | Blogg / tilbud | Prisforventninger og tydelig avgrensing |
| /blogg/tilbud-vs-kontrakt | Blogg / kontrakt, relevant bro | Skille dokument fra bindende avtale |
| /blogg/fra-tilbud-til-kontrakt-og-faktura | Blogg / oversikt, ferdigstilt | Begge dokumentkonverteringene med ekte eksempler |
| /timeliste-mal | Produkt / timeliste, sammenligning | Registrering til timeliste og faktura |
| /kontrakt-mal | Produkt / kontrakt, sammenligning | Selvstendig kontrakt og dokumentflyt |
| /timeliste-prosjekt | SEO / timeliste, sidehenvisning | Prosjektets timegrunnlag |
| /blogg/kategori/tilbud | Kategori / tilbud | Finne de fem Tilbud-artiklene |
| /blogg/kategori/oversikt | Kategori / oversikt | Finne dokumentoversikter og ferdig arbeidsflyt |
| /blogg | Blogg-hub | Oppdage artikler og kategorier |
| /instruksjoner | Instruksjonshub | Utføre konkrete handlinger i nettappen |
| / | Hjemmeside | Produktoppdagelse og inngang til tilbud |
| /fakturaprogram-gratis | Produkt / faktura, sammenligning | Opprette og kontrollere faktura |
| /blogg/nar-trenger-du-kontrakt | Blogg / kontrakt, tilgrensende | Når skriftlig avtaledokument er nyttig |
| /kontrakt-handverker | SEO / kontrakt, tilgrensende | Avklare håndverkeroppdrag |
| /blogg/kategori/kontrakt | Kategori / kontrakt | Finne kontraktsforklaringer |

### Metadata-, schema- og lenkeregister per URL

Titler nedenfor inkluderer faktisk rendret rot-template. «Indekserbar» betyr teknisk tillatt, ikke bekreftet indeksert. Fravær av en eksplisitt robots-meta er normal tillatelse, ikke en SEO-feil. «Viktige lenker» er et utvalg, ikke en påstand om at alle kort er redaksjonelt innvevd.

### /tilbud-mal

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | Produkt / tilbud — Gratis digital tilbudsmal og dokumentflyt |
| HTTP / tittel | 200 / Tilbud mal – skriv et profesjonelt tilbud (gratis) \| Jobbleder |
| Meta description | Tilbud mal for små bedrifter og håndverkere. Lag tilbud raskt og konverter til faktura når kunden sier ja. |
| H1 | Lag tilbud som blir til mer. |
| Canonical | https://www.jobbleder.no/tilbud-mal |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite, FAQPage |
| Viktige lenker | #tilbudseksempel; /instruksjoner#opprett; /fakturaprogram-gratis; /kontrakt-mal; /instruksjoner#dokumenter |
| CTA-destinasjon | https://app.jobbleder.no/ |

### /lage-tilbud

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | SEO / tilbud — Skrive et tilbud steg for steg |
| HTTP / tittel | 200 / Lage tilbud – hvordan skrive et godt tilbud \| Jobbleder |
| Meta description | Lær hvordan du lager et ryddig og profesjonelt tilbud. Enkelt for håndverkere og små bedrifter i Norge. |
| H1 | Lage tilbud |
| Canonical | https://www.jobbleder.no/lage-tilbud |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite, FAQPage |
| Viktige lenker | /tilbud-mal; /tilbud-eksempel; /hvordan-folge-opp-tilbud |
| CTA-destinasjon | https://app.jobbleder.no/ |

### /tilbud-eksempel

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | SEO / tilbud — Se et konkret utfylt tilbud |
| HTTP / tittel | 200 / Tilbud eksempel – se hvordan et godt tilbud kan se ut \| Jobbleder |
| Meta description | Se et tilbud eksempel og lær hvordan et ryddig og profesjonelt tilbud kan bygges opp for små bedrifter og håndverkere. |
| H1 | Tilbud eksempel |
| Canonical | https://www.jobbleder.no/tilbud-eksempel |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite, FAQPage |
| Viktige lenker | /tilbud-mal; /lage-tilbud; /hvordan-folge-opp-tilbud |
| CTA-destinasjon | https://app.jobbleder.no/ |

### /hvordan-folge-opp-tilbud

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | SEO / tilbud — Praktisk oppfølging av sendt tilbud |
| HTTP / tittel | 200 / Hvordan følge opp tilbud – få flere svar fra kunder \| Jobbleder |
| Meta description | Lær hvordan du følger opp et sendt tilbud på en profesjonell måte og øker sjansen for å få svar fra kunden. |
| H1 | Hvordan følge opp tilbud |
| Canonical | https://www.jobbleder.no/hvordan-folge-opp-tilbud |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite, FAQPage |
| Viktige lenker | /tilbud-mal; /lage-tilbud; /tilbud-eksempel |
| CTA-destinasjon | https://app.jobbleder.no/ |

### /blogg/gratis-fakturaprogram-handverkere

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | Blogg / faktura, sidehenvisning — Fakturaverktøy; tilbud nevnes som tilleggsfunksjon |
| HTTP / tittel | 200 / Gratis fakturaprogram for håndverkere – enkelt og nettbasert \| Jobbleder |
| Meta description | Opprett faktura raskt med et gratis fakturaprogram for håndverkere. Enkel løsning direkte i nettleseren. |
| H1 | Gratis fakturaprogram for håndverkere – her er et enkelt alternativ |
| Canonical | https://www.jobbleder.no/blogg/gratis-fakturaprogram-handverkere |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite, Article |
| Viktige lenker | /fakturaprogram-gratis |
| CTA-destinasjon | https://app.jobbleder.no/ |

### /blogg/lage-tilbud-byggebransjen

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | Blogg / tilbud — Tilbudsinnhold for byggeoppdrag |
| HTTP / tittel | 200 / Hvordan lage et profesjonelt tilbud i byggebransjen \| Jobbleder |
| Meta description | Slik lager du et tydelig og profesjonelt tilbud i byggebransjen. Lær hva som bør være med og hvordan du gjør det enklere digitalt. |
| H1 | Hvordan lage et profesjonelt tilbud i byggebransjen |
| Canonical | https://www.jobbleder.no/blogg/lage-tilbud-byggebransjen |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite, Article |
| Viktige lenker | /tilbud-mal |
| CTA-destinasjon | https://app.jobbleder.no/ |

### /blogg/feil-med-tilbud

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | Blogg / tilbud — Unngå feil ved utsending |
| HTTP / tittel | 200 / Topp 5 feil å unngå når du sender tilbud \| Jobbleder |
| Meta description | Her er de vanligste feilene i tilbudsdokumenter – og hva du kan gjøre for å sende tydeligere og mer profesjonelle tilbud. |
| H1 | Topp 5 feil å unngå når du sender tilbud |
| Canonical | https://www.jobbleder.no/blogg/feil-med-tilbud |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite, Article |
| Viktige lenker | /folle-opp-tilbud (404) |
| CTA-destinasjon | https://app.jobbleder.no/ |

### /blogg/lage-tilbudsdokument

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | Blogg / tilbud — Forstå og utforme tilbudsdokument |
| HTTP / tittel | 200 / Hva er et tilbudsdokument og hvordan lager du ett? \| Jobbleder |
| Meta description | Lær hva et tilbudsdokument er, hva som bør være med, og hvordan du lager et profesjonelt tilbud på en enkel måte. |
| H1 | Hva er et tilbudsdokument og hvordan lager du ett? |
| Canonical | https://www.jobbleder.no/blogg/lage-tilbudsdokument |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite, Article |
| Viktige lenker | /lage-tilbud |
| CTA-destinasjon | https://app.jobbleder.no/ |

### /blogg/forskjell-faktura-tilbud-timeliste

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | Blogg / oversikt, støtte — Når ulike dokumenter brukes |
| HTTP / tittel | 200 / Forskjellen på faktura, tilbud og timeliste \| Jobbleder |
| Meta description | Her er en enkel forklaring på forskjellen mellom faktura, tilbud og timeliste – og når du bør bruke dem. |
| H1 | Faktura, timeliste og tilbud – hva er forskjellen og når bruker du dem? |
| Canonical | https://www.jobbleder.no/blogg/forskjell-faktura-tilbud-timeliste |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite, Article |
| Viktige lenker | /instruksjoner |
| CTA-destinasjon | https://app.jobbleder.no/ |

### /blogg/folle-opp-tilbud

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | Blogg / tilbud — Høflig kundekontakt etter utsending |
| HTTP / tittel | 200 / Hvordan følge opp et sendt tilbud og lande flere jobber \| Jobbleder |
| Meta description | Slik følger du opp et sendt tilbud på en profesjonell måte og øker sjansen for å få respons fra kunden. |
| H1 | Hvordan følge opp et sendt tilbud og lande flere jobber |
| Canonical | https://www.jobbleder.no/blogg/folle-opp-tilbud |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite, Article |
| Viktige lenker | /hvordan-folge-opp-tilbud |
| CTA-destinasjon | https://app.jobbleder.no/ |

### /blogg/tilbud-eller-pristilbud

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | Blogg / tilbud — Prisforventninger og tydelig avgrensing |
| HTTP / tittel | 200 / Tilbud eller pristilbud – hva forventer kunden? \| Jobbleder |
| Meta description | Slik lager du et tydelig tilbud eller pristilbud som er lett for kunden å forstå og ta stilling til. |
| H1 | Tilbud eller pristilbud – hva forventer kunden egentlig? |
| Canonical | https://www.jobbleder.no/blogg/tilbud-eller-pristilbud |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite, Article |
| Viktige lenker | /tilbud-eksempel |
| CTA-destinasjon | https://app.jobbleder.no/ |

### /blogg/tilbud-vs-kontrakt

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | Blogg / kontrakt, relevant bro — Skille dokument fra bindende avtale |
| HTTP / tittel | 200 / Tilbud vs kontrakt – hva er forskjellen? \| Jobbleder |
| Meta description | Lær forskjellen mellom tilbud og kontrakt og når du bør bruke hvert dokument. |
| H1 | Tilbud vs kontrakt – hva er forskjellen? |
| Canonical | https://www.jobbleder.no/blogg/tilbud-vs-kontrakt |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite, Article |
| Viktige lenker | /kontrakt-mal (relatert guide); /tilbud-mal (relatert guide) |
| CTA-destinasjon | Ingen klikkbar CTA i selve kampanjeboksen; app via Login |

### /blogg/fra-tilbud-til-kontrakt-og-faktura

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | Blogg / oversikt, ferdigstilt — Begge dokumentkonverteringene med ekte eksempler |
| HTTP / tittel | 200 / Fra tilbud til kontrakt og faktura – slik fungerer det \| Jobbleder |
| Meta description | Se hvordan hele prosessen fungerer fra første tilbud til betaling. |
| H1 | Fra tilbud til kontrakt og faktura – slik fungerer det |
| Canonical | https://www.jobbleder.no/blogg/fra-tilbud-til-kontrakt-og-faktura |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite, Article |
| Viktige lenker | /tilbud-mal; /kontrakt-mal; /instruksjoner#lag-kontrakt-fra-tilbud; /instruksjoner#kontrakt-til-faktura; /instruksjoner#tilbud-til-faktura; /faktura-krav; /fakturaprogram-gratis |
| CTA-destinasjon | /fakturaprogram-gratis |

### /timeliste-mal

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | Produkt / timeliste, sammenligning — Registrering til timeliste og faktura |
| HTTP / tittel | 200 / Timeliste mal – gratis og enkel timeliste (PDF / nett) \| Jobbleder |
| Meta description | Gratis timeliste mal for håndverkere og små bedrifter. Lag timeliste raskt, last ned som PDF og få full oversikt. |
| H1 | Timeliste mal (gratis).Fra arbeidstimer til ferdig faktura. |
| Canonical | https://www.jobbleder.no/timeliste-mal |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite, FAQPage |
| Viktige lenker | /; /fakturaprogram-gratis; /timeliste-mal; /tilbud-mal; /kontrakt-mal; /instruksjoner |
| CTA-destinasjon | https://app.jobbleder.no/ |

### /kontrakt-mal

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | Produkt / kontrakt, sammenligning — Selvstendig kontrakt og dokumentflyt |
| HTTP / tittel | 200 / Kontrakt mal – enkel kontrakt for håndverkere (gratis) \| Jobbleder |
| Meta description | Gratis kontrakt mal for håndverkere og små bedrifter. Lag kontrakt raskt og sikre avtalen med kunden. |
| H1 | Lag kontrakter som passer jobben. |
| Canonical | https://www.jobbleder.no/kontrakt-mal |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite, FAQPage |
| Viktige lenker | /; /fakturaprogram-gratis; /timeliste-mal; /tilbud-mal; /kontrakt-mal; /instruksjoner |
| CTA-destinasjon | https://app.jobbleder.no/ |

### /timeliste-prosjekt

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | SEO / timeliste, sidehenvisning — Prosjektets timegrunnlag |
| HTTP / tittel | 200 / Timeliste prosjekt – før timer per prosjekt og kunde \| Jobbleder |
| Meta description | Lag timeliste per prosjekt og få bedre oversikt over arbeidstid, kunder og oppdrag. Last ned som PDF. |
| H1 | Timeliste prosjekt |
| Canonical | https://www.jobbleder.no/timeliste-prosjekt |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite, FAQPage |
| Viktige lenker | /; /fakturaprogram-gratis; /timeliste-mal; /tilbud-mal; /kontrakt-mal; /instruksjoner |
| CTA-destinasjon | https://app.jobbleder.no/ |

### /blogg/kategori/tilbud

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | Kategori / tilbud — Finne de fem Tilbud-artiklene |
| HTTP / tittel | 200 / Tilbud \| Blogg \| Jobbleder |
| Meta description | Artikler og guider om tilbud for brukere av Jobbleder. |
| H1 | Tilbud |
| Canonical | https://www.jobbleder.no/blogg/kategori/tilbud |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite |
| Viktige lenker | /; /; /instruksjoner; /blogg; /om-oss; /kontakt |
| CTA-destinasjon | Artikkelkort; app via Login |

### /blogg/kategori/oversikt

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | Kategori / oversikt — Finne dokumentoversikter og ferdig arbeidsflyt |
| HTTP / tittel | 200 / Oversikt \| Blogg \| Jobbleder |
| Meta description | Artikler og guider om oversikt for brukere av Jobbleder. |
| H1 | Oversikt |
| Canonical | https://www.jobbleder.no/blogg/kategori/oversikt |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite |
| Viktige lenker | /; /; /instruksjoner; /blogg; /om-oss; /kontakt |
| CTA-destinasjon | Artikkelkort; app via Login |

### /blogg

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | Blogg-hub — Oppdage artikler og kategorier |
| HTTP / tittel | 200 / Blogg om faktura, tilbud, timelister og kontrakter \| Jobbleder \| Jobbleder |
| Meta description | Artikler og guider om faktura, tilbud, timelister og kontrakter for håndverkere og små bedrifter i Norge. |
| H1 | Blogg |
| Canonical | https://www.jobbleder.no/blogg |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite |
| Viktige lenker | /; /; /instruksjoner; /blogg; /om-oss; /kontakt |
| CTA-destinasjon | Artikkelkort; app via Login |

### /instruksjoner

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | Instruksjonshub — Utføre konkrete handlinger i nettappen |
| HTTP / tittel | 200 / Instruksjoner for Jobbleder \| Jobbleder |
| Meta description | Lær hvordan du bruker Jobbleder til å opprette faktura, tilbud, timelister og kontrakter, registrere arbeidsøkter og holde oversikt over prosjekter, kunder og rapporter. |
| H1 | Instruksjonerfor Jobbleder. |
| Canonical | https://www.jobbleder.no/instruksjoner |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite |
| Viktige lenker | #opprett-tilbud; #lag-kontrakt-fra-tilbud; #tilbud-til-faktura; #kontrakt-til-faktura; /tilbud-mal |
| CTA-destinasjon | https://app.jobbleder.no/ |

### /

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | Hjemmeside — Produktoppdagelse og inngang til tilbud |
| HTTP / tittel | 200 / Jobbleder – Faktura, kontrakt, timeliste og tilbud på minutter |
| Meta description | Lag faktura, kontrakt, timeliste og tilbud enkelt i nettleseren. Jobbleder er laget for håndverkere og små bedrifter. |
| H1 | Jobben din.Dokumentene på plass. |
| Canonical | https://www.jobbleder.no/ |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite |
| Viktige lenker | /tilbud-mal; /instruksjoner; /fakturaprogram-gratis; /kontrakt-mal |
| CTA-destinasjon | https://app.jobbleder.no/ |

### /fakturaprogram-gratis

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | Produkt / faktura, sammenligning — Opprette og kontrollere faktura |
| HTTP / tittel | 200 / Fakturaprogram gratis – lag faktura enkelt i Norge \| Jobbleder |
| Meta description | Fakturaprogram gratis for håndverkere og små bedrifter. Lag faktura raskt i nettleseren og last ned som PDF. |
| H1 | Gratis fakturaprogram.Ubegrenset fakturering. |
| Canonical | https://www.jobbleder.no/fakturaprogram-gratis |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite, FAQPage |
| Viktige lenker | /; /fakturaprogram-gratis; /faktura-eksempel; /faktura-krav; /tilbud-mal; /timeliste-mal |
| CTA-destinasjon | https://app.jobbleder.no/ |

### /blogg/nar-trenger-du-kontrakt

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | Blogg / kontrakt, tilgrensende — Når skriftlig avtaledokument er nyttig |
| HTTP / tittel | 200 / Når trenger du kontrakt som håndverker? \| Jobbleder |
| Meta description | Se når du bør bruke kontrakt og hvorfor det er viktig i byggebransjen. |
| H1 | Når trenger du kontrakt som håndverker? |
| Canonical | https://www.jobbleder.no/blogg/nar-trenger-du-kontrakt |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite, Article |
| Viktige lenker | /; /blogg; /kontrakt-mal; /kontrakt-handverker; /kontrakt-eksempel; /timeliste-mal |
| CTA-destinasjon | Ingen klikkbar CTA i selve kampanjeboksen; app via Login |

### /kontrakt-handverker

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | SEO / kontrakt, tilgrensende — Avklare håndverkeroppdrag |
| HTTP / tittel | 200 / Kontrakt håndverker – trygg avtale med kunde \| Jobbleder |
| Meta description | Lag kontrakt som håndverker og sikre tydelige avtaler med kunden. Enkel løsning for små bedrifter i Norge. |
| H1 | Kontrakt håndverker |
| Canonical | https://www.jobbleder.no/kontrakt-handverker |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite, FAQPage |
| Viktige lenker | /kontrakt-mal; /kontrakt-handverker; /kontrakt-eksempel; /hva-skal-en-kontrakt-inneholde; /kontrakt-mal; /kontrakt-eksempel |
| CTA-destinasjon | https://app.jobbleder.no/ |

### /blogg/kategori/kontrakt

| Felt | Verifisert verdi |
| --- | --- |
| Type / tema / intensjon | Kategori / kontrakt — Finne kontraktsforklaringer |
| HTTP / tittel | 200 / Kontrakt \| Blogg \| Jobbleder |
| Meta description | Artikler og guider om kontrakt for brukere av Jobbleder. |
| H1 | Kontrakt |
| Canonical | https://www.jobbleder.no/blogg/kategori/kontrakt |
| Indeksering | Ingen observert noindex/X-Robots-blokkering; offentlig 200. Tillatt av robots.txt. Faktisk Google-indeksstatus er ikke målt. |
| JSON-LD | Organization, WebSite |
| Viktige lenker | /blogg; /blogg/kategori/timeliste; /blogg/kategori/faktura; /blogg/kategori/tilbud; /blogg/kategori/kontrakt; /blogg/kategori/oversikt |
| CTA-destinasjon | Artikkelkort; app via Login |

### Instruksjoner, historiske ankere og nedlastinger

Alle disse er deler av /instruksjoner og deler sidens tittel, canonical og Organization/WebSite-schema; de er ikke egne kanoniske sider:

| Anker | Faktisk veiledning / bruk |
| --- | --- |
| #opprett-tilbud | Opprett → Tilbud; kunde, Utstedt/Gyldig til, valgfritt prosjekt, linjer, Lagre/Generer og egen PDF-distribusjon. |
| #dokumentoversikt | Finn tilbudet i Dokumenter og velg riktig neste handling. |
| #lag-kontrakt-fra-tilbud | Dokumenter → valgt tilbud → Opprett kontrakt; kontroller og rediger selvstendig. |
| #tilbud-til-faktura | Dokumenter → valgt tilbud → Opprett faktura; kontroller kunde/linjer/datoer/summer. |
| #kontrakt-til-faktura | Tilsvarende vei fra kontrakten; brukeren initierer og kontrollerer. |
| #opprett | Bevart historisk seksjonsanker; hovedproduktets eksisterende hjelpelink fungerer. |
| #dokumenter | Bevart historisk seksjonsanker; hovedproduktets dokumenthjelp fungerer. |

Direkte navigasjon til de syv ankrene fant elementet i lokal og produksjon; de konkrete instruksjonene åpnes/får fokus via eksisterende ankerhåndtering. #gjenta-et-dokument er historisk kopieringsveiledning, ikke dokumentert løpende/automatisk gjentakelse; bevar URL og forklar «kopier» ved senere omtale. Innstillinger/standardverdier finnes som øvrige instruksjoner; de er ikke nødvendige for å gjennomføre tilbudsfortellingen og er ikke revidert som nye produktfunksjoner her.

Ingen blank Tilbud-PDF/Word-mal finnes som offentlig nedlasting i det undersøkte prosjektet. A4/A5-bildene er utfylte demonstrasjonsdokumenter, ikke blanke malfiler eller faktiske PDF-endepunkter. Lov derfor ikke en direkte tilbudsmalnedlasting. De eksisterende Timeliste-endepunktene /downloads/timeliste-mal-jobbleder.pdf og ekstern oneweek-timelist svarte begge 200 med PDF-signatur; de skal ikke gjenbrukes som tilbudsressurser.

## 3. SEO findings

### Bevaringskrav

Bevar alle eksisterende URL-er, self-canonicals på https://www.jobbleder.no, metadata/H1, Article-datoer, relevante FAQ-emner og fungerende lenker. Hovedproduktets faktiske H1 er «Lag tilbud som blir til mer.»; det gamle h1-feltet i seoPages brukes fremdeles som korttekst, ikke som en ekstra synlig H1. Ikke rapporter denne forskjellen som to H1-er.

De 21 bredt kontrollerte sidene har én H1 hver og JSON-LD som kan parses. Hovedsidens syv FAQ-spørsmål/svar samsvarer med FAQPage-data ved alle fire produksjonsbredder. De tre SEO-guidene får både synlig FAQ og schema fra samme faqs-array. Article-data har samme eksisterende innholdsidentitet og datoer; ingen rangering/rich-result-garanti følger av valid JSON.

Produksjonens /sitemap.xml og /robots.txt svarte 200. Alle fire tilbudslandingssider og alle fem Tilbud-artikler er med; øvrige rapporterte sider er oppført gjennom de eksisterende innholdslistene. Robots tillater offentlige sider og sperrer /api/ og /private/, med WWW-host og WWW-sitemap. Ingen noindex eller X-Robots-blokkering ble observert på de 21 brede rutene; ekstra-rutene har ingen noindex i undersøkt markup/kode. Hashankere skal ikke ha egne sitemapinnslag.

### Ytelsesdata og overlapp

Søk etter CSV/XLSX/XLS/TSV-, GSC- og Search Console-filer i prosjektet fant ingen Tilbud-eksport. Rapportene inneholder heller ingen side/query-måling for Tilbud. **Rapporteringsperiode, klikk, visninger, CTR, posisjon og query-volum for Tilbud er derfor ikke tilgjengelig.** Eierens tidligere Timeliste-tall (342 klikk, 4 851 visninger, 7,05 %, posisjon 7,95, omtalt som tre måneder uten eksakte datoer) gjelder en annen artikkel og brukes ikke som Tilbud-dokumentasjon.

Overlapp finnes mellom /lage-tilbud, byggebransjeartikkelen og tilbudsdokumentartikkelen; mellom SEO- og bloggveiledningen om oppfølging; og mellom mal/eksempel. Dette er tematisk overlapp, ikke dokumentert skadelig kannibalisering. Gi sidene tydeligere oppgaver i eksisterende innhold. Innhent query × side × enhet for like lange, eksplisitt daterte perioder før eventuelle metadataeksperimenter. Ikke konsolider eller redirect på dette grunnlaget.

Ikke endre den fungerende, men feilstavede bloggsluggen /blogg/folle-opp-tilbud. Reparasjonen gjelder avsenderlenken til denne eksisterende ruten. Blogg-huben har dobbel «| Jobbleder» i rendret tittel; dette er en global, ikke-blokkerende P3-observasjon og er ikke grunnlag for en bred SEO-endring i Tilbud-fasen.

## 4. Search intent coverage

Følgende er redaksjonelle hypoteser, ikke målt etterspørsel, rangering eller søkevolum:

| Intensjon | Eksisterende beste inngang | Faktisk dekning / anbefalt avgrensing |
| --- | --- | --- |
| tilbud mal / tilbud mal gratis | /tilbud-mal | God digital produkt-/Free-dekning. Tydeliggjør fortsatt at eksemplet er utfylt og oppretting skjer i appen; ingen blank nedlasting. |
| pristilbud mal / pristilbud håndverker | /tilbud-mal; /blogg/tilbud-eller-pristilbud | Kan betjenes av eksisterende sider. Forklar prisgrunnlag og kundetype fremfor ny søkeordside. |
| skrive tilbud / hvordan skrive et tilbud | /lage-tilbud | Dekker emnet, men mangler konkrete handlinger og eksempeltekst. Bruk en liten fremgangsmåte og relevante instruksjoner. |
| tilbud eksempel | /tilbud-eksempel | Tittelløftet er udekket; legg et eksisterende autentisk dokument og forklaring på samme URL. |
| tilbud på håndverkertjenester | /blogg/lage-tilbud-byggebransjen | Relevant målgruppe, men generelle råd. Konkretiser arbeid, materialer, avgrensing og endringer. |
| tilbud med fastpris / timepris | /blogg/tilbud-eller-pristilbud; /lage-tilbud | Praktisk sammenligning mangler. Bruk eksisterende artikkel og kvalifiserte priseksempler; ikke fremstill kontraktens egne prisvalg som egne Tilbud-funksjoner uten bevis. |
| følge opp tilbud | /hvordan-folge-opp-tilbud; /blogg/folle-opp-tilbud | Grunnråd finnes. Skill kort rutine/sjekkliste fra konkrete meldinger; ingen automatisert oppfølging i appen er dokumentert. |
| fra tilbud til kontrakt/faktura | /blogg/fra-tilbud-til-kontrakt-og-faktura | God, fullført veiledning. Gjenbruk med kontekstlenker; ikke opprett konkurrerende workflow-artikkel. |

Det reelle innholdsgapet er nyttige eksempler og beslutningsstøtte innen eksisterende ruter, ikke fravær av en URL for hver søkefrase.

## 5. Main landing-page assessment

Hovedsiden er på kvalitetsnivå med de publiserte Faktura- og Timeliste-produktsidene: samme SiteHeader/SiteFooter, beholdere, ApplicationCTA, fokus- og reduced-motion-regler samt autentisk ProductMedia. Den har en egen relevant historie og kopierer ikke Timeliste-funksjoner.

- Hero forklarer tilbud → PDF → videre dokument; primærknappen «Lag tilbud gratis» går til appen. Sekundærlenken går til #tilbudseksempel og fungerer. Påmeldingsteksten forklarer at appen åpner innlogging og at nye brukere velger Create account.
- Hel A4-eksport, kunde/prosjekt og 12 000 + 3 000 = 15 000 presenteres både visuelt og i HTML. 25 % er eksemplets sats, ikke en regel for alle salg. Eksemplet omtales eksplisitt som utfylt demo.
- Oppretting forklarer kunde/prosjekt, linjer, antall, pris, MVA og kontroll før generering.
- Tilbud 29 → Faktura 111 og Tilbud 29 → Kontrakt 11 → Faktura 112 presenteres som to alternative brukerinitierte løp. Kontrakten kan redigeres selvstendig. Manuell signering og fravær av elektronisk signering er eksplisitt.
- Free inneholder funksjonene; Premium endrer PDF-profil/firmalogo. Ingen pris eller feilaktig funksjonslås er introdusert.
- Syv FAQ, pedagogisk tilbudstekst, internlenker, endelig CTA, tilgjengelige originaler og en tydelig visuell rytme er allerede på plass.

**Ingen P0/P1 eller redesignbehov identifisert på hovedproduktet.** Mobilens brede desktoputsnitt gjør de minste appfeltene små (editor ca. 325 × 54 CSS-piksler ved 375 px), men beskrivelsen, summene og fungerende originalvisning gir nødvendig kontekst. Autentiske portrettbilder finnes nå; eventuell målrettet utskifting av ett pedagogisk utsnitt er P2 og krever ikke en ny hero eller full redesign. En direkte lenke til #opprett-tilbud og den ferdige workflow-artikkelen er en P2-forbedring; dagens historiske seksjonslenker er gyldige.

## 6. Editorial findings

| URL | Funn i faktisk innhold | Avgrenset anbefaling / relevant medium |
| --- | --- | --- |
| /lage-tilbud | Tre generelle seksjoner sier at fast struktur sparer tid, men viser ikke hva brukeren skal skrive eller gjøre. | Kort steg-for-steg fra kunde/arbeidsomfang til linjer/gyldighet/kontroll/deling; lenk #opprett-tilbud og tilbudseksempel. Én formvisning kan forklare feltene. |
| /tilbud-eksempel | Ingen bildefigur, konkret tilbudstekst eller tallscenario, til tross for title/H1/intro og FAQ som lover eksempel. | Bruk eksisterende Tilbud 29 og forklar kunde, omfang, antall/pris/MVA/gyldighet. Skill demo fra blank mal og juridisk komplett tilbud. |
| /hvordan-folge-opp-tilbud | Gode, men generelle råd om noen dager, vennlighet og spørsmål. | Kort manuell rutine knyttet til avtalt svarfrist, endringer, avslag og aksept; lenk den konkrete meldingsartikkelen. Ingen skjermdump nødvendig. |
| /blogg/lage-tilbud-byggebransjen | Kontakt/kunde/arbeid/pris/MVA nevnes, men materialer, avgrensing, datoer, tillegg og aksept er lite praktiske. | Gi et avgrenset håndverkeroppdrag, hvem som leverer materialer og hva som ikke inngår; lenk eksempel og riktig prisforklaring. Ett relevant dokument, bare om det brukes i forklaringen. |
| /blogg/feil-med-tilbud | Fem nyttige feil; lenken til oppfølging mangler /blogg og gir 404. | Reparer bare lenkemålet først. Senere små før/etter-eksempler på arbeidsbeskrivelse, MVA og gyldighet. Ingen bilde nødvendig. |
| /blogg/lage-tilbudsdokument | Gjentar definisjon/struktur/effektivitet; har gyldighet og tillegg, men ikke konkret oppsett. | Avgrens til dokumentets felt og kontroll før PDF. Lenke til /lage-tilbud for prosess og /tilbud-eksempel for resultat. Formbilde bare som feltforklaring. |
| /blogg/folle-opp-tilbud | Har 2–4 dager som situasjonsavhengig tommelfingerregel og siste melding etter omtrent en uke; ingen eksempler utover ett spørsmål. | Bevar forbeholdet, ikke gjør tidsangivelsene til lovkrav. Legg korte, høflige meldinger for spørsmål/frist/avslutning. Presiser manuell kundekontakt. Ingen bilde nødvendig. |
| /blogg/tilbud-eller-pristilbud | Sier at navnene har samme mål, men forklarer ikke fastpris, timegrunnlag, prisoverslag og uforpliktende antydning. | Forklar hva kunden faktisk kan forstå av beløpet og omfanget, kvalifiser forbruker/B2B; ikke lær bort at ordet pristilbud alene avgjør rettsvirkningen. |
| /blogg/tilbud-vs-kontrakt | Publisert tekst inneholder «Mange blander tilbud og kontrakt...», «Tilbud sendes før arbeid starter...» og «Kontrakten er en bindende avtale...». Ingen faktisk fullført forklaring; kampanjeboksen er ikke en lenke. | Fullfør den eksisterende artikkelen om dokumenter og avtale, med juridisk kildekontroll. Ikke påstå at et akseptert tilbud aldri binder uten separat kontrakt. Lenke til ferdig workflow; en relevant kontraktvisning er valgfri. |
| /blogg/fra-tilbud-til-kontrakt-og-faktura | Fem fullstendige deler, autentisk tilbud/kontrakt, tre appbilder, brukerinitiert konvertering, kontroll og manuell sending/signering. | Bevar. Ikke dupliser bildene eller den samme femdelte veiledningen i nye artikler. |
| /blogg/forskjell-faktura-tilbud-timeliste | Nyttig dokumentoversikt, men «faktura når jobben er ferdig» blir kategorisk uten hensyn til avtalt faktureringsgrunnlag. | P2-presisering ved senere avgrenset revisjon; ikke gjør dette til en ny hovedoppgave i Tilbud-fasen. |
| /blogg/gratis-fakturaprogram-handverkere | Tilbud er en korrekt omtalt støttefunksjon; generelle konkurrentpåstander var allerede registrert i Phase 6C. | Bevar Tilbud-omtalen; ikke åpne en ny Faktura-omskriving i denne fasen. |
| /blogg/nar-trenger-du-kontrakt | Kort tilgrensende utkast om når kontrakt er nyttig; mangler tilbudsbro. | Egen kontraktsbacklog, ikke skjult utvidelse av Tilbud-implementeringen. Kan lenkes fra ferdig tilbud/kontrakt-forklaring. |

### Innholdsdekning på tvers

Arbeidsomfang og pris nevnes nesten overalt, men uten gode eksempler. MVA er synlig i byggebransje-/feilartikkelen, produktet og ferdig workflow. Gyldighet er godt demonstrert i skjema/PDF og nevnt i feil-/dokumentartikkelen. Materialansvar, hva som er inkludert/utelatt, realistiske tidspunkt og håndtering av tilleggsarbeid mangler særlig i eldre guider. Forbehold nevnes i pristilbudartikkelen uten praktisk anvendelse. Aksept/etterarbeid forklares best i den ferdige workflow-artikkelen, som allerede sier at avklaringer skjer utenfor appen.

Disse feltene er praktiske skrive-/avklaringsråd. De skal ikke presenteres som en universell lovpålagt sjekkliste. Gamle artikler bruker generelle formuleringer om profesjonalitet, tillit og effektivitet og avslutter ofte med både note, kampanjeboks og appknapp. Bevar nyttig innhold, men prioriter en konkret forklaring og én relevant viderevei fremfor mer kampanjetekst. Bokmål kan forbedres naturlig («tilbudsmal», konkrete verb); ikke endre SEO-titler/H1 bare for språklig preferanse.

## 7. Legal-content verification status

Offisielle kilder undersøkt 20. november 2026. Dette er avgrenset kildeverifikasjon for innholdsplanlegging, ikke juridisk vurdering av kundens avtaler.

**Verifisert forbrukerveiledning:** Forbrukerrådet anbefaler tydelig oppdragsbeskrivelse, prisavklaring, tidsramme og skriftlig dokumentasjon. Fastpris og prisoverslag må holdes fra hverandre. For prisoverslag omtales en grense på vesentlig overskridelse og høyst 15 %, med forbehold om uttrykkelig avtale. Tilleggsarbeid skal avklares særskilt, med pris og skriftlig dokumentasjon. Etterfølgende tillegg av MVA/gebyr til en avtalt fastpris er ikke en trygg generell praksis. Dette er forbrukerkontekst; rådene må ikke ukritisk overføres til alle B2B-avtaler. [Forbrukerrådets sjekkliste](https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/sjekkliste-handverker/).

Forbrukerrådet anbefaler også skriftlig kontrakt for å dokumentere enigheten og stå sterkere ved konflikt. Dette anbefalingsspråket dokumenterer ikke at alle håndverkeravtaler bare er gyldige med signert papir. [Bruk av håndverker](https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/).

| Tema | Verifikasjonsstatus / redaksjonell føring |
| --- | --- |
| Avtalt fastpris, høyeste pris og prisoverslag | Forbrukerrådets veiledning tilgjengelig. Ikke skriv at alle «tilbud/pristilbud» alltid betyr fastpris eller at 15 % alltid kan legges på. |
| Lovens virkeområde og unntak | Håndverkertjenesteloven §§ 1, 9, 32–33 er relevante kontrollpunkter. Direkte Lovdata-oppslag ga HTTP 405; søkeindekserte utdrag er ikke full, oppdatert lovtekstverifikasjon. Unntak, tillegg og virkeområde må sluttkontrolleres før juridisk detaljtekst publiseres. |
| Akseptfrist og tilbud som avtalegrunnlag | Avtaleloven §§ 2–7 er relevante kontrollpunkter. Lovdata ga 405; ikke erklær hele regelfremstillingen verifisert. Fullfør kildekontrollen før artikkelen forklarer når bindende avtale oppstår, avvikende aksept eller tilbakekall. |
| B2B / forbruker / ny bolig | Ikke likestill disse. Dersom nybygg skal omtales, må bustadoppføringslova verifiseres særskilt. Det er ikke nødvendig å utvide den generelle Tilbud-guiden til nybyggrett. |
| Timepris og anslag | Forklar praktisk prisgrunnlag, antall/omfang og usikkerhet. Ikke gi en universell rett til pristillegg eller en ubetinget prisgaranti. |
| Skriftlighet og ekstraarbeid | Skill anbefalt dokumentasjon fra rettslig formkrav og avtalte vilkår. Ikke bruk genererte signaturfelt som dokumentasjon på juridisk gyldighet eller elektronisk signering. |
| Altinn | Søk ga tilgjengelig veiledning om samarbeid mellom virksomheter og dokumentmaler, men ingen relevant fullstendig tilbud/akseptregel for dette tilfellet. Ikke bruk uvedkommende Altinn-innhold som belegg for slike krav. |

Kilde-/kontrolladresser: [Håndverkertjenesteloven](https://lovdata.no/lov/1989-06-16-63), [Avtaleloven](https://lovdata.no/lov/1918-05-31-4), [Altinn: samarbeid mellom virksomheter](https://info.altinn.no/starte-og-drive/drive-bedrift/samarbeid-og-forhold-til-andre-virksomheter/samarbeid-mellom-virksomheter/) er ikke brukt som autoritet for tilbudsregler.

Ingen universelle obligatoriske kontraktsklausuler eller garanti om at Jobbleder-dokumentet oppfyller alle rettslige krav er funnet eller anbefalt. Hovedproduktets tekst og den ferdige workflow-artikkelen gir ikke slike garantier. P1 gjelder det uferdige forklaringsinnholdet, ikke en påvist ulovlig avtale eller feil i appens genererte kontrakt.

## 8. Verified Jobbleder capabilities

Bevisnivåer: **EIER** = eksplisitt bekreftet i tidligere oppdrag; **MEDIA/DOK** = autentiske bilder og oppdaterte instruksjoner; **LOKAL KODE** = lesbar søskenkode; **PRODUKSJON** = hva som faktisk ble utført offentlig. Markedsføring alene regnes ikke som appbevis.

| Funksjon | Bevis | Forsvarlig påstand / begrensning |
| --- | --- | --- |
| Opprette tilbud, velge kunde og prosjekt | EIER + MEDIA/DOK + LOKAL KODE | Skjemaet viser kunde, valgfritt prosjekt og tilbudsnummer. Ingen kundekonto/portal følger av kundevalget. |
| Arbeidsbeskrivelse, antall, enhetspris, MVA og summer | EIER + MEDIA/DOK + LOKAL KODE | new_offer_form og faktiske linjefelt dokumenterer dette. 25 % er demonstrasjonssats, ikke universell MVA-regel. |
| Utstedt og Gyldig til | MEDIA/DOK + LOKAL KODE | Datofelter og A4/A5/PDF-eksempler. Gyldighetsfelt er ikke automatisk akseptsporing. |
| Generere/laste ned PDF | EIER + MEDIA/DOK + LOKAL KODE | Generer/Generer PDF og autentiske eksportbilder. Bildene i markedsføringen er PNG/WebP, ikke en test av ny generering. |
| Tilbud → Faktura | EIER + MEDIA/DOK + LOKAL KODE | Brukeren velger Opprett faktura; grunnlag kopieres til ny faktura og kontrolleres. |
| Tilbud → Kontrakt | EIER + MEDIA/DOK + LOKAL KODE | Handling og kilde følger med; separat kontraktsinnhold opprettes. |
| Selvstendig kontraktsredigering | EIER + MEDIA/DOK + LOKAL KODE | Rediger-handling, selvstendig dokument og redigert Kontrakt 11. Ingen påstand om at endringer automatisk godkjennes av kunden. |
| Kontrakt → Faktura | EIER + MEDIA/DOK + LOKAL KODE | Eksplisitt handling med kilde. Betalingsplan er ikke automatisk fakturaproduksjon. |
| Free / Premium | EIER + Free-merkede PDF-eksempler og rapporter | Tilbud, PDF og konverteringer finnes i Free; Premium fjerner Jobbleder-merking og støtter firmalogo. Ikke påstå verifisert abonnementskjøp eller nåværende pris. |
| Responsiv nettapp | MEDIA/DOK + LOKAL KODE | Mobilnettleser støttes; ikke bevis på native app, offlinebruk eller bakgrunnssynk. |
| Automatisk aksept, e-signatur, automatisk e-post, portal, forhandling eller regnskapsintegrasjon | Ikke verifisert; e-signatur eksplisitt ikke støttet | Ingen slike produktløfter skal legges til. Kundens aksept, levering og signering ordnes utenfor den dokumenterte appflyten. |

Lokal appkilde undersøkt lesende: C:/Users/ddlas/Code/jobbleder_app/src/ui/documents/CreateDocument2026.jsx (datoer rundt 413/1037/2269; tilbudskilde til kontrakt 1312–1340), src/viewmodels/documentPreview.viewmodel.js (handlinger 443–473), src/domain/documents/helpers/buildInvoiceFromOffer.js (kopierer innhold og kildereferanse), src/Main.js (create-contract/create-invoice rundt 1856). Dette er ikke en bekreftelse på hvilket app-commit som kjører i produksjon. Ingen appfil er endret.

Markedsføringsproduksjonen viser de forventede funksjonsforklaringene og bildefilene. Ingen tilbud, kontrakt eller faktura er opprettet/endret i en innlogget konto under auditten. Premium-entitlement, PDF-tjenestens backend og virkelig sending er derfor ikke ende-til-ende-testet.

## 9. Authentic screenshot inventory

### Hele tilbudskatalogen

Åtte PNG-kilder og tretten WebP-filer: 21 filer, 1 147 877 byte totalt. Dimensjoner og filstørrelser er lest fra faktiske filer, ikke bare antatt fra navn. Eksisterende manifest knytter kilde og utsnitt sammen. Ingen bildebehandling er utført.

| Eksakt filsti | Piksler | Byte | Faktisk innhold / begrensning |
| --- | --- | --- | --- |
| public/images/product/tilbud/optimized/jobbleder-home-offer-59f2cd7e7af2.webp | 506 × 360 | 19060 | Optimalisert A5-eksempel av Tilbud 29. |
| public/images/product/tilbud/optimized/jobbleder-offer-contract-793f5eed04dc.webp | 834 × 720 | 56266 | Kontrakt 11 under oppretting fra Tilbud 29. |
| public/images/product/tilbud/optimized/jobbleder-offer-contract-invoice-7847d3b65141.webp | 1084 × 386 | 35312 | Faktura 112 fra Kontrakt 11; opprettingsskjema. |
| public/images/product/tilbud/optimized/jobbleder-offer-contract-invoice-mobile-64fb6553081e.webp | 862 × 386 | 25808 | Kilde og fakturalinje, ikke hele høyre oppsummering. |
| public/images/product/tilbud/optimized/jobbleder-offer-contract-mobile-66905c4b86f7.webp | 664 × 426 | 30226 | Kilde og avtalefelt; ikke alle kontraktsseksjoner. |
| public/images/product/tilbud/optimized/jobbleder-offer-edited-contract-98807c86e360.webp | 560 × 442 | 26892 | Kontrakt 11 etter selvstendig redigering, fastpris og betalingsvilkår; ingen automatisk fakturaplan. |
| public/images/product/tilbud/optimized/jobbleder-offer-editor-efed9bd605e5.webp | 1084 × 342 | 32496 | Oppretting av Tilbud 29: kunde, prosjekt, datoer, linjer og summer i originalen. |
| public/images/product/tilbud/optimized/jobbleder-offer-editor-mobile-c86e5ebb7582.webp | 842 × 140 | 10696 | Kun linjefeltene; kunde/datoer/handlinger er utenfor utsnittet. |
| public/images/product/tilbud/optimized/jobbleder-offer-hero-3c424f34ca1e.webp | 1090 × 650 | 70056 | Dokumentoversikt, Tilbud 29 valgt, kunde/prosjekt/linje/summer og dokumenthandlinger. |
| public/images/product/tilbud/optimized/jobbleder-offer-hero-mobile-7ef9a11a7c8c.webp | 600 × 168 | 11992 | Utsnitt av parkettlinje og summer; ikke en mobil appskjerm. |
| public/images/product/tilbud/optimized/jobbleder-offer-invoice-825bce28603f.webp | 1084 × 386 | 35104 | Faktura 111 med Tilbud 29 som kilde; skjema, ikke ferdig PDF. |
| public/images/product/tilbud/optimized/jobbleder-offer-invoice-mobile-dc98f21e88fc.webp | 862 × 386 | 25696 | Kilde og fakturalinje; sideoppsummering er fjernet. |
| public/images/product/tilbud/optimized/jobbleder-offer-pdf-085c0b3a1244.webp | 506 × 720 | 20340 | Hel A4-side fra Tilbud 29, 12 000 netto + 3 000 MVA = 15 000. |
| public/images/product/tilbud/source/contract_from_offer_edited.png | 706 × 720 | 78568 | Kontrakt 11 etter selvstendig redigering, fastpris og betalingsvilkår; ingen automatisk fakturaplan. |
| public/images/product/tilbud/source/exported_tilbud_A4.png | 506 × 720 | 39992 | Hel A4-side fra Tilbud 29, 12 000 netto + 3 000 MVA = 15 000. |
| public/images/product/tilbud/source/exported_tilbud_A5.png | 506 × 360 | 37358 | Tilbud 29 som komplett A5-dokument; samme parkettscenario, Free-merking. |
| public/images/product/tilbud/source/invoice_from_contract.png | 1280 × 720 | 115705 | Kilde og fakturalinje, ikke hele høyre oppsummering. |
| public/images/product/tilbud/source/new_offer_form.png | 1280 × 720 | 112403 | Kun linjefeltene; kunde/datoer/handlinger er utenfor utsnittet. |
| public/images/product/tilbud/source/offer_document_preview_in_documents_menu.png | 1280 × 720 | 153575 | Utsnitt av parkettlinje og summer; ikke en mobil appskjerm. |
| public/images/product/tilbud/source/tilbud_to_contract.png | 834 × 720 | 94495 | Kilde og avtalefelt; ikke alle kontraktsseksjoner. |
| public/images/product/tilbud/source/tilbud_to_invoice.png | 1280 × 720 | 115837 | Kilde og fakturalinje; sideoppsummering er fjernet. |

### Relevante gjenbruksressurser utenfor tilbudskatalogen

| Eksakt filsti | Piksler | Byte | Bruk / begrensning |
| --- | --- | --- | --- |
| public/images/product/kontrakt/source/exported_contract_preview.png | 508 × 720 | 73859 | Kontrakt 11 fra Tilbud 29 før senere redigering. Betaling etter ferdigstillelse og tomme signaturfelt; illustrasjon, ingen juridisk garanti. |
| public/images/product/kontrakt/optimized/jobbleder-home-contract-document-249c17de7105.webp | 508 × 720 | 37384 | Eksisterende WebP: Kontrakt 11 fra Tilbud 29 før senere redigering. Betaling etter ferdigstillelse og tomme signaturfelt; illustrasjon, ingen juridisk garanti. |
| public/images/product/mobile/source/new_offer_document_edit_mobile.png | 332 × 720 | 61585 | Portrett av Tilbud 29: kunde, prosjekt, datoer og parkettlinje; bunnen er ikke med. |
| public/images/product/mobile/optimized/new_offer_document_edit_mobile-3e7a019b8d5e.webp | 332 × 720 | 42388 | Eksisterende WebP: Portrett av Tilbud 29: kunde, prosjekt, datoer og parkettlinje; bunnen er ikke med. |
| public/images/product/mobile/source/offer_document_actions_mobile.png | 332 × 720 | 58001 | Portrett av dokumenthandlingene Opprett kontrakt, Opprett faktura, Generer PDF. |
| public/images/product/mobile/optimized/offer_document_actions_mobile-e6dc31f296e1.webp | 332 × 720 | 34196 | Eksisterende WebP: Portrett av dokumenthandlingene Opprett kontrakt, Opprett faktura, Generer PDF. |
| public/images/product/mobile/source/contract_from_offer_mobile.png | 332 × 720 | 65359 | Prisstruktur Tilbud og referanse 29 i beskrivelsen. Velg tilbud står fortsatt på plassholderen; ikke bevis på ferdig valg. |
| public/images/product/mobile/optimized/contract_from_offer_mobile-dc96091cddcc.webp | 332 × 720 | 44542 | Eksisterende WebP: Prisstruktur Tilbud og referanse 29 i beskrivelsen. Velg tilbud står fortsatt på plassholderen; ikke bevis på ferdig valg. |
| public/images/product/mobile/source/invoice_from_offer_mobile.png | 332 × 720 | 57596 | Parkettlinje og totalsum 15 000. Dokumentnummer/kildemerke er ikke synlig. |
| public/images/product/mobile/optimized/invoice_from_offer_mobile-19b76863d679.webp | 332 × 720 | 40668 | Eksisterende WebP: Parkettlinje og totalsum 15 000. Dokumentnummer/kildemerke er ikke synlig. |
| public/images/product/mobile/source/invoice_from_contract_mobile.png | 332 × 720 | 64078 | Faktura 113 med Kontrakt 11 som kilde, kunde/datoer og del av linjen; ikke samme faktura som desktop 112. |
| public/images/product/mobile/optimized/invoice_from_contract_mobile-4059b61ae977.webp | 332 × 720 | 44312 | Eksisterende WebP: Faktura 113 med Kontrakt 11 som kilde, kunde/datoer og del av linjen; ikke samme faktura som desktop 112. |

### Anvendelse og begrensninger

- Tilbud 29 er et eksisterende parkettscenario: én linje, antall 1, netto 12 000, MVA 3 000, total 15 000, gyldig til 02.12.2026 i illustrasjonen. Det demonstrerer en dokumentstruktur, ikke et juridisk komplett tilbud for ethvert oppdrag eller nye datoer for en virkelig kunde.
- A4 passer /tilbud-eksempel med fullsidevisning; A5 gir et kompakt redaksjonelt eksempel. Gjenbruk eksisterende derivat, forklar feltene og behold originaltilgang. Ikke legg begge inn bare for bildeantall.
- new_offer_form passer en felt-/opprettingsforklaring. Portrettet mobileOfferForm er mer lesbart på en smal artikkelflate enn hele 1280 px-skjermen, men viser ikke nederste oppsummering/lagreknapper.
- Dokumenthandlingene på mobil forklarer hvor konvertering starter. invoiceMobile og contractInvoiceMobile er beskårne desktopbilder, ikke autentiske mobilopptak; caption må fortsatt skille dette fra portrettbildene.
- Kontrakt 11-dokumentet viser vilkårene før senere redigering. Ikke presenter dette som eksakt eksport av den redigerte betalingsplanen. Faktura 111, 112 og mobil 113 er ulike dokumenteksempler; ikke bland numrene til én uavbrutt skjermsekvens.
- Det finnes allerede tilstrekkelig materiale til eksempelguide, feltforklaring og begge støttede dokumentløp. **Ingen ny nødvendig skjermdump identifisert for foreslått minimumsfase.** En fremtidig full mobilskjerm med ferdig valgt tilbudsgrunnlag kan erstatte plassholderbildet hvis akkurat dette steget skal dokumenteres mer presist. Aksept-/sendeskjerm skal ikke etterspørres som om funksjonen allerede finnes.
- invoice_from_contract.png finnes også i kontraktkatalogen som identisk original; eksisterende manifest/derivat bør gjenbrukes fremfor ny kopi. Ingen kildefiler skal slettes som del av audit/anbefalt minimumsarbeid.

33 unike produksjonsressurser (originaler og derivater brukt i de valgte manifestene) svarte 200 og var SHA-256-identiske med lokale filer. Syv fullstørrelseslenker på hovedsiden ble åpnet med Enter i alle åtte lokale størrelses-/preferansetilfeller (56 handlinger), med innlastet original og 3 px fokusmarkering.

## 10. Conversion and internal-linking analysis

| Reise | Nåværende støtte | Friksjon / anbefaling |
| --- | --- | --- |
| A: søk → tilbud mal → Jobbleder | Tydelig appknapp, PDF-eksempel, funksjoner, Free og registreringsforklaring. | Bevar. Ikke legg inn registreringsvegg foran en nedlasting som ikke finnes. |
| B: skrive tilbud → tilbud eksempel → produkt | ClusterNavigation/relaterte kort kobler sidene sammen. | Eksempelmålet mangler eksempel. Legg inn demonstrasjonen og gi /lage-tilbud en naturlig lenke dit i selve forklaringen. |
| C: pristilbud håndverker → produkt | Byggebransje- og pristilbudartiklene har relevante produkt-/eksempellenker. | Avklar materialer, avgrensing, prisgrunnlag og MVA; konkrete råd bør komme før kampanjeboksen. |
| D: tilbud → kontrakt → faktura | Hovedside, tre nøyaktige instruksjoner og ferdig workflow-artikkel støtter hele løpet. | Bevar at brukeren initierer, redigerer, kontrollerer og deler selv; lenk ferdig artikkel fra eldre relevante sider. |
| E: tilbud → faktura | Egen hovedseksjon, instruksjon og eget alternativ i workflow-artikkelen. | Kontrakt er ikke obligatorisk appmellomsteg. Ikke dupliser hele gjennomgangen i alle artikler. |
| Oppfølging → relevant hjelp | Feilartikkelen har en konkret oppfølgingslenke. | Den peker til 404; rett til eksisterende /blogg/folle-opp-tilbud eller den verifiserte SEO-guiden etter redaksjonelt valg. Ingen redirect nødvendig. |

Hjemmesiden har tilbudsintro med ekte dokument og inngang til /tilbud-mal; dokumentflyt-infografikken viser begge tilbudsløp. SiteHeader viser Produkter på produkt-/hjemmesidene. Eldre SEO/blogg bruker Navbar med Hjem; det er en eksisterende delt komponentforskjell, ikke en feil med Fakturas tidligere rettede produktmeny. Ingen ny navigasjonsredesign er nødvendig for å fullføre Tilbud-innholdet.

RelatedGuides velger de tre første tilbuds-SEO-sidene og tre andre pilarer. Dermed faller den fjerde tilbudsguiden, oppfølging, ut av disse bloggkortene. RelatedBlogPosts velger de første tre i samme tema og deretter kildeordensfallback; den ferdige Oversikt-workflow-artikkelen blir ikke nødvendigvis anbefalt på Tilbud-artiklene. P2/P3: velg få, oppgaverelaterte kontekstlenker først, og vurder eventuelt senere kuratering. Ikke endre globale kort for alle temaer uten eget omfang og regresjonstest.

## 11. Accessibility and performance findings

### Eksakt nettlesermatrise

| Miljø / sidegruppe | Bredder og preferanser | Utførte kontroller / resultat |
| --- | --- | --- |
| Lokal + produksjon, 21 ruter i §2 | 375/light og 1440/dark; reduced motion | 84 tilfeller: 200, én H1, metadata/schema/lenker; ingen horisontal overflow eller pageerror; 184 synlige bilder dekodet. |
| Lokal: /tilbud-mal, /lage-tilbud, /tilbud-eksempel, /hvordan-folge-opp-tilbud, /blogg/tilbud-eller-pristilbud, /blogg/tilbud-vs-kontrakt | 375, 768, 1280, 1440 × light/dark; reduced motion | 48 tilfeller: axe, bilder, dimensjoner, observerte CLS, FAQ Enter/Space og fullstørrelse der tilgjengelig. Ingen bekreftede axe-brudd; CLS 0 i alle 48. |
| Produksjon: /tilbud-mal | 375, 768, 1280, 1440; reduced motion | Meny Enter/Space åpner/lukker; Tab går til første produktlenke; synlig 3 px fokus. Syv FAQ åpner/lukker, innhold = schema; ingen overflow. Bilder av tre konverteringsseksjoner etter dekoding. |
| Produksjon: /fakturaprogram-gratis, /blogg/nar-trenger-du-kontrakt, /kontrakt-handverker, /blogg/kategori/kontrakt | Desktop standardviewport | Tilgjengelighet HTTP 200, metadata, hovedinnhold og schema registrert; ikke en full firebredders audit av disse ekstra rutene. |

De 21 rutene i første rad er alle inventar-URL-er unntatt de fire ekstra produksjonsrutene i siste rad. Detaljgruppen overlapper den brede gruppen og er ikke ytterligere 48 unike sider. Produksjon ved 768/1280 gjelder hovedproduktet, ikke alle artikler.

FAQ: hovedproduktet bruker native details/summary (3 px fokus); SEO-guidene bruker FAQAccordion med aria-expanded/aria-controls og 2 px focus-visible. Alle utførte Enter/Space-sekvenser åpnet og lukket riktig. Originalbildelenken har synlig «Åpne hele bildet» og beskrivende skjult tillegg som stemmer med bildet. Alt-tekst er meningsfull på de kontrollerte bildene. Bildene har dimensjoner, riktig proporsjon, eager/høy prioritet bare i hero og lazy loading videre. Målte bildeforhold avviker under 0,001 i ratio (avrunding), ingen observert forvrenging.

Axe-core ble kjørt med wcag2a, wcag2aa, wcag21aa, wcag22aa og best-practice-tagene på de 48 lokale tilfellene. **Null bekreftede violations**, men incomplete for gradient-/kontrastberegning, enkelte dekorative hake-tegn og link-in-text-block på footerområder må ikke rapporteres som ubetinget automatisk bestått. Visuell gjennomgang og CSS/fargekontroll viser lesbar hovedtekst og fokus. H1 #171717 på hvitt og #ededed på #0a0a0a i SEO-guidene; hovedproduktets #0f172a/#1d4ed8 på lys gradient og #475569 i bildetekst er ikke de gamle hvitt-på-hvitt-feilene. Footerens arvede foreground/muted følger tema. Ingen ny konkret P0/P1-kontrastfeil ble bekreftet. Komplett skjermleser-, alle-hovertilstander- og all tekst-i-bilde-kontrast er ikke sertifisert.

Produkt og bloggartikler har tilsiktet lys flate under begge OS-preferanser. Generiske SEO-guider følger den eksisterende lyse/mørke flaten, med mørk/navy klyngenavigasjon. Bevar den godkjente mørke designen og de fungerende preferansene; ingen anbefaling om ny lysmodus for navy-sidene. Reduced-motion er emulert i matrisen; hovedproduktet hadde ingen aktive CSS-animasjoner og scrollBehavior auto. Eksisterende motion-reduce-regler er bevart. Det er ikke påstått en full normal-motion-animasjonstest.

Visuelt: store overskrifter brytes ryddig; CTA-er forblir synlige; seksjonsrytme og to-kolonne kontraktseksempler går til stabling på mobil. Dokumenter er hele og kan åpnes. Appdetaljer i smale desktoputsnitt krever forstørrelse — P2, ikke en ødelagt flyt. Eldre footer ligger tett mot ytterkantene på mobil, men uten bekreftet clipping/overflow; eventuell finjustering er P3 og globalt omfang.

### Lighthouse — produksjons-URL-er, laboratoriemåling

Chrome headless, Lighthouse 13.6.0, én kald navigasjon per URL/profil, standard simulert mobilprofil og desktop-config. Sekvensielt etter øvrige browserjobber. Dato 20.11.2026; fetchTime 2026-11-20T06:31:09.278Z–2026-11-20T06:31:44.785Z. Ingen field-CWV eller før/etter-årsaksbevis.

| URL | Profil | Performance | Accessibility | Best Practices | SEO | LCP ms | CLS | TBT ms | Overført byte |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| /tilbud-mal | mobile | 99 | 100 | 100 | 100 | 1734 | 0 | 101.5 | 266670 |
| /tilbud-mal | desktop | 100 | 100 | 100 | 100 | 518 | 0 | 34 | 415606 |
| /tilbud-eksempel | mobile | 99 | 100 | 100 | 100 | 1439 | 0 | 85.5 | 219495 |
| /tilbud-eksempel | desktop | 100 | 100 | 100 | 100 | 333 | 0 | 0 | 279185 |

Ingen runtimeError eller runWarnings i de fire målingene. Gode tall på /tilbud-eksempel gjør ikke innholdsløftet oppfylt. Hovedproduktets større desktoprespons er forventet med større bildederivat; de 21 filenes samlede katalogstørrelse er ikke en enkelt sideoverføring. Ingen ny bildeoptimalisering eller dependency er nødvendig på disse målingene. Ingen tilskrevet regressjon eller konverteringseffekt.

### Teknisk validering og avgrenset regresjon

- npx.cmd tsc --noEmit --incremental false: exit 0.
- npm.cmd run lint: exit 0, ingen ESLint-feil/advarsler i output.
- npm.cmd run build: exit 0, alle 55 statiske sider generert. Node-advarsel DEP0205 om module.register() forekom under bygg; ingen kompilasjons-/typefeil.
- Produksjonshjemmeside, Timeliste, Kontrakt og ferdig workflow-artikkel lastet uten registrerte pageerror/HTTP-feil i den brede browserprøven; Faktura ble kontrollert 200 i ekstra produksjonsprøve. Ingen sidekode er endret.
- Alle 33 prøvede bildefiler er identiske lokalt/produksjon; alle 21 hovedsider har samme sammenlignede metadata/schema/tekst/bildedeskriptorer lokalt/produksjon.
- Ingen nye konsoll-pageerrors eller HTTP ≥400 ble observert under de 84 sidevisningene. Dette utelukker ikke feil ved uutførte interaksjoner eller autentisert appbruk. Den ødelagte interne lenken ble funnet ved egen HTTP-destinasjonskontroll.

Bevisfiler: browser.json, detail.json, extra.json, image-inventory.json, preservation-before.json og lighthouse-summary.json i den oppgitte midlertidige mappen. representative bilder: production-_tilbud-mal-375.png / -1440.png, detail-tilbud-eksempel-1440-dark.png, detail-lage-tilbud-768-light.png, detail-tilbud-vs-kontrakt-375-light.png og production-section-tilbud-til-kontrakt-375.png. Fullsidebilder finnes for alle 48 detaljtilfellene. De er undersøkelsesfiler og skal ikke committes som produktressurser.

## 12. Prioritized recommendations

Ingen P0 funnet. P1-radene er avgrensede feil i nyttig innhold og én faktisk brutt brukerreise, ikke en begrunnelse for produktredesign eller påstand om tapt rangering.

| ID / prioritet | Berørt URL | Bevis | Brukerbetydning | Anbefalt handling | Endringsrisiko | Kompleksitet |
| --- | --- | --- | --- | --- | --- | --- |
| F01 / P1 | /blogg/feil-med-tilbud | content/blogPosts.ts: kontekst-href /folle-opp-tilbud; lokal og produksjon 404. /blogg/folle-opp-tilbud = 200. | Leseren mister oppfølgingsveiledningen. | Rett kun lenkemålet til faktisk eksisterende relevant rute. Bevar slugger. | Lav | Svært lav; én href og måltest |
| F02 / P1 | /tilbud-eksempel | content/seoPages.ts, slug rundt 445; null bilder og ingen konkret gjennomgang. Produksjon bekrefter. | Besøkeren får ikke eksemplet tittelen lover. | Sett inn autentisk Tilbud 29 og kort felt-/tallforklaring; bevar metadata og eksisterende brukerreise. | Lav–middels; vern om søkeintensjon | Lav–middels; eksisterende figur kan gjenbrukes |
| F03 / P1 | /blogg/tilbud-vs-kontrakt | content/blogPosts.ts rundt 1311, tre synlige ellipsetekster og svært kort avtaleoversikt. | Uferdig forklaring av viktig beslutning kan skape feil forventning om når avtale binder. | Fullfør sammenligning, presiser at dokumentoppretting og juridisk avtale er ulike ting; kildekontroller aksept og lenk ferdig workflow. | Middels; juridiske nyanser | Middels, inkludert kilde-/eierkontroll |
| F04 / P2 | /lage-tilbud | Generell tekst om struktur uten konkret fremgangsmåte. | Leseren mangler praktisk startpunkt. | Kort felt-/handlingsguide, kobling til eksempel og #opprett-tilbud. | Lav–middels | Lav–middels |
| F05 / P2 | /blogg/tilbud-eller-pristilbud | Ingen tydelig forklaring av prisgrunnlag/overslag; bare navn og presentasjon. | Kunden/utsteder kan forstå beløpet forskjellig. | Avgrenset prisforklaring med korrekt forbruker/B2B-scope og kilde, uten ny URL. | Middels; ikke innfør juridiske absolutter | Middels |
| F06 / P2 | /blogg/lage-tilbud-byggebransjen; /blogg/lage-tilbudsdokument; /blogg/feil-med-tilbud | Generiske, repeterte fordeler; få praktiske eksempler på omfang/materialer/endringer. | Lavere nytte for den som skal skrive et tilbud. | Skill bransjeeksempel, dokumentfelt og feilretting. Fjern bare repetisjon; ett relevant bilde der det forklarer noe. | Lav–middels | Middels, tre små redaksjonelle inngrep |
| F07 / P2 | /hvordan-folge-opp-tilbud; /blogg/folle-opp-tilbud | Lignende generelle råd; blogg-CTA sier lage og følge opp enklere uten produktbevis på automatikk. | Uklart skille mellom egen rutine og appfunksjon. | Fordel rutine og meldingsmaler, tydelig manuell dialog; ikke lov påminnelsessystem. | Lav | Lav–middels |
| F08 / P2 | /tilbud-mal og relevante eldre artikler | Hjelpelinker fungerer, men ofte generelt anker/kort; ferdig workflow ligger i Oversikt. | God hjelp er vanskeligere å finne fra riktig spørsmål. | Noen få kontekstlenker til eksakte instruksjoner og eksisterende fullført artikkel. | Lav | Lav |
| F09 / P2 | /tilbud-mal | Mobile editorutsnitt er ca. 325 × 54 CSS px; eksisterende portrettbilder finnes. | Små felt krever forstørrelse. | Valgfritt, målrettet bruk av eksisterende portrett ved forklaring av feltene; behold full kontekst. Ingen hero-redesign nødvendig. | Lav–middels; unngå feil kilde/alt | Lav–middels |
| F10 / P2 | /blogg/forskjell-faktura-tilbud-timeliste | Kategorisk etter-ferdig-jobb-fakturering, også kjent fra Phase 6C. | For snever forklaring av tidspunkt. | Senere liten presisering om avtalt og aktuelt fakturagrunnlag; ikke regnskaps-/rettsgaranti. | Middels; koordinering med Faktura | Lav |
| F11 / P3 | /blogg og relaterte moduler | Dobbel merkevare i hubtittel; kort prioriteres etter kildeorden; footer har liten mobil luft. | Mindre presisjon/finish, ingen bekreftet blokkering. | Eget avgrenset vedlikehold eller utsett. Ikke global refaktor som del av minimumsfasen. | Middels hvis delt kode endres | Lav–middels |
| F12 / P3 | Hele Tilbud-klyngen | Ingen GSC-query/side-data eller konverteringsmåling tilgjengelig. | Prioritering mangler trafikkgrunnlag. | Innhent eksisterende eksport med eksplisitt periode før nye SEO-strukturgrep. | Ingen kodeendring | Lav analyseinnsats når data foreligger |

Ingen automatisk videreføring av tidligere kontrast-/navigasjonsfeil: disse ble kontrollert mot dagens implementasjon. Ikke eskaler små preferanser eller uverifisert kannibalisering til P1.

## 13. Proposed implementation roadmap

**Phase 7B — minimumskorreksjon, ingen produktredesign:** F01 lenkemål først. F03 fullfør den eksisterende tilbud/kontrakt-artikkelen etter relevant offisiell kildekontroll. Hovedsiden trenger ingen egen redesignfase; F09 er valgfri og kan utelates. Ingen nye produktfunksjoner.

**Phase 7C — konkret eksempel og praktisk guide:** F02 på /tilbud-eksempel er høyest prioritert. F04 på /lage-tilbud kan tas samtidig om eier ønsker det. Bruk eksisterende A4/A5 og eventuelt form-/portrettbilde, forklar samme scenario i HTML og behold metadata/URL/FAQ-intensjon. Følg godkjent mørk/navy utforming på relevante SEO-sider; ingen generell temakonvertering.

**Phase 7D — valgfri redaksjonell forbedring:** F05–F08 i de fem eksisterende Tilbud-artiklene og oppfølgingsguiden, helst i små grupper med tydelig formål per artikkel. Legg praktiske eksempler og få kontekstlenker; ikke kopier den allerede ferdige Faktura-workflowen. F10 koordineres separat om nødvendig. Denne fasen kan reduseres til pris-/oppfølgingspresisering dersom eier ønsker minimumsomfang.

**Phase 7E — kort sluttkontroll:** etter godkjent implementering, kontroller produksjonssamsvar etter en senere separat autorisert release, metadata, sitemap, alle faktiske lenkemål, instruksjonsankre, bildeoriginaler, fire bredder, keyboard/axe og representative Lighthouse-målinger. Bekreft at F01–F03 er lukket. F11/F12 kan beholdes som ikke-blokkerende backlog. Ingen deploy er autorisert av denne auditten.

Ingen fase for nye søkeordruter, omdirigering, nye nedlastingsmaler, syntetiske bilder eller redesign av hovedproduktet anbefales. Økosystemet er teknisk fungerende, men bør **ikke regnes redaksjonelt ferdigstilt før de tre P1-funnene er behandlet**. Gjenværende P2/P3 behøver ikke bli en endeløs redesignrunde.

## 14. Open questions for owner confirmation

1. Finnes en GSC-eksport for Tilbud-URL-ene med eksakte start-/sluttdatoer, søkefrase × side og enhet? Ingen slik dokumentasjon ble funnet; prioritering kan gjennomføres uten å finne på trafikkdata.
2. Godkjennes F01–F03 som minimumsomfang før de valgfrie bloggforbedringene? Dette er et forslag til neste fase, ikke en handling igangsatt her.
3. Ønskes tilbud/kontrakt-artikkelen eksplisitt rettet mot eksisterende forbruker-håndverksoppdrag, med en kort B2B-avgrensing? Juridisk detaljtekst om aksept/unntak må sluttverifiseres fordi Lovdata ikke kunne åpnes direkte.
4. Kan eier bekrefte at den lesbare lokale appkoden samsvarer med publisert appversjon, dersom neste fase trenger mer enn allerede eierbekreftet funksjonalitet? Ingen ny funksjon eller automatisering skal antas på dette grunnlaget.
5. Skal hovedproduktets eksisterende mobile desktoputsnitt beholdes, eller vurderes ett portrettbilde ved en senere avgrenset lesbarhetsjustering? Ikke nødvendig for minimumskorreksjonen, og ingen ny skjermdump kreves nå.

### Eksakte prosjektendringer

Kun docs/phase-7a-tilbud-ecosystem-audit.md opprettet. Alle 311 eksisterende sporede filer kontrolleres byte-identiske mot innledende SHA-256-baseline; tidligere rapporter, originalbilder og appkode bevares. Midlertidige scripts/JSON/Lighthouse/screenshotfiler ligger i separat visualizations-mappe. Ingen commit, push eller deploy.

**READY FOR OWNER REVIEW**
