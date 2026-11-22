export type FAQItem = { q: string; a: string }

export type DownloadResourceItem = {
  label: string
  href: string
}

export type DownloadResources = {
  title: string
  description?: string
  items: DownloadResourceItem[]
}

export type SEOSection = {
  heading: string
  paragraphs: string[]
  checklists?: { heading: string; items: string[] }[]
  links?: { href: string; label: string }[]
  invoiceExample?: boolean
  offerExample?: "document" | "form"
}

export type SEOPage = {
  slug: string
  title: string
  topic: string
  isPillar?: boolean
  description: string
  h1: string
  intro: string
  bullets: string[]
  faqs: FAQItem[]
  ctaLabel?: string
  downloadResources?: DownloadResources
  sections?: SEOSection[]
}

export const seoPages: SEOPage[] = [
  {
    slug: "timeliste-mal",
    title: "Timeliste mal – gratis og enkel timeliste (PDF / nett)",
    topic: "timeliste",
    isPillar: true,
    description:
      "Gratis timeliste mal for håndverkere og små bedrifter. Lag timeliste raskt, last ned som PDF og få full oversikt.",
    h1: "Timeliste mal (gratis)",
    intro:
      "Trenger du en enkel timeliste mal? Jobbleder lar deg føre timer raskt og lagre timelisten som PDF.",
    bullets: [
      "Gratis å bruke (ingen installasjon)",
      "Perfekt for håndverkere og små bedrifter",
      "Last ned som PDF og send til kunde",
      "Full oversikt per uke og prosjekt",
    ],
    faqs: [
      { q: "Er timeliste-malen gratis?", a: "Ja, du kan bruke Jobbleder gratis." },
      { q: "Kan jeg laste ned timelisten som PDF?", a: "Ja, du kan laste ned og dele PDF." },
      { q: "Passer dette for håndverkere?", a: "Ja, Jobbleder er laget for håndverkere i Norge." },
    ],
    ctaLabel: "Start gratis",
    downloadResources: {
      title: "Last ned gratis timeliste",
      description:
        "Velg mellom en tom timeliste-mal for manuell utfylling eller en ferdig datert versjon for de siste 7 dagene.",
      items: [
        {
          label: "Last ned tom timeliste (PDF)",
          href: "/downloads/timeliste-mal-jobbleder.pdf",
        },
        {
          label: "Last ned timeliste siste 7 dager (PDF)",
          href: "https://laskowskicreative.no/api/jobbleder/user/documents/oneweek-timelist",
        },
      ],
    },
    sections: [
      {
        heading: "Hva er en timeliste?",
        paragraphs: [
          "En timeliste er en enkel oversikt over arbeidstid, oppdrag og datoer. Den brukes ofte av håndverkere, små bedrifter og selvstendige som trenger kontroll på timer og dokumentasjon.",
          "Når timene er registrert riktig blir det enklere å følge fremdrift, dokumentere arbeid og bruke timelisten som grunnlag for videre fakturaarbeid.",
        ],
      },
      {
        heading: "Når bør du bruke en timeliste?",
        paragraphs: [
          "En timeliste er nyttig når du jobber med prosjekter, kunder eller oppdrag der det er viktig å holde oversikt over tidsbruk. Dette gjelder spesielt i håndverksbransjen, hvor arbeidstid ofte må dokumenteres tydelig.",
          "Med en god timeliste blir det enklere å følge opp timer uke for uke og sørge for at ingenting blir glemt.",
        ],
      },
      {
        heading: "Fordeler med digital timeliste",
        paragraphs: [
          "En digital timeliste er raskere å oppdatere enn papir og gir deg bedre oversikt. Du kan registrere timer fortløpende, laste ned som PDF og bruke timelisten senere i dokumentarbeid.",
          "For små bedrifter betyr dette mindre manuelt arbeid og bedre struktur i hverdagen.",
        ],
      },
      {
        heading: "PDF eller nettbasert timeliste?",
        paragraphs: [
          "Noen foretrekker en tom timeliste i PDF-format som kan fylles ut manuelt, mens andre ønsker en nettbasert løsning som gjør registrering raskere og mer oversiktlig.",
          "Jobbleder gir deg begge deler: du kan laste ned timeliste som PDF, men også bruke løsningen digitalt i nettleseren.",
        ],
      },
    ]
  },
  {
    slug: "timeliste-mal-pdf",
    title: "Timeliste mal PDF – gratis timeliste for håndverkere",
    topic: "timeliste",
    description:
      "Gratis timeliste mal PDF for håndverkere og små bedrifter. Før timer enkelt og last ned timelisten som PDF.",
    h1: "Timeliste mal PDF",
    intro:
      "Ser du etter en enkel timeliste mal i PDF-format? Med Jobbleder kan du føre timer raskt og laste ned timelisten som PDF.",
    bullets: [
      "Gratis timeliste i nettleseren",
      "Last ned som PDF på sekunder",
      "Passer for håndverkere og små bedrifter",
      "Full oversikt per uke og prosjekt",
    ],
    faqs: [
      {
        q: "Kan jeg laste ned timelisten som PDF?",
        a: "Ja, du kan laste ned timelisten som PDF direkte i Jobbleder.",
      },
      {
        q: "Er timeliste mal PDF gratis?",
        a: "Ja, Jobbleder kan brukes gratis.",
      },
      {
        q: "Må jeg installere noe?",
        a: "Nei, alt fungerer direkte i nettleseren.",
      },
    ],
    ctaLabel: "Start gratis",
    downloadResources: {
      title: "Last ned timeliste PDF",
      description:
        "Her kan du laste ned både en tom timeliste-mal og en ferdig datert timeliste for de siste 7 dagene.",
      items: [
        {
          label: "Last ned tom timeliste (PDF)",
          href: "/downloads/timeliste-mal-jobbleder.pdf",
        },
        {
          label: "Last ned timeliste siste 7 dager (PDF)",
          href: "https://laskowskicreative.no/api/jobbleder/user/documents/oneweek-timelist",
        },
      ],
    },
    sections: [
      {
        heading: "Hva er en timeliste mal PDF?",
        paragraphs: [
          "En timeliste mal PDF er en ferdig strukturert mal som gjør det enkelt å registrere arbeidstid. Den passer godt for håndverkere og små bedrifter som ønsker en utskriftsvennlig løsning.",
          "PDF-formatet er spesielt nyttig når du vil fylle ut timelisten manuelt eller sende den videre som dokumentasjon.",
        ],
      },
      {
        heading: "Hvem passer en PDF-timeliste for?",
        paragraphs: [
          "En PDF-timeliste passer godt for deg som vil ha en enkel mal uten å bruke kompliserte systemer. Den er nyttig for både ansatte, selvstendige og små bedrifter.",
          "For mange er dette et godt første steg før man går over til en mer digital og automatisert løsning.",
        ],
      },
      {
        heading: "Fordeler med å laste ned timeliste som PDF",
        paragraphs: [
          "Når du laster ned timelisten som PDF får du et format som er lett å skrive ut, lagre og dele. Det gjør det enkelt å sende dokumentasjon til kunder eller bruke det internt i bedriften.",
          "PDF er også nyttig når du vil ha en fast mal med samme oppsett hver uke.",
        ],
      },
    ],
  },
  {
    slug: "timeliste-uke",
    title: "Timeliste uke – få oversikt over arbeidstid per uke",
    topic: "timeliste",
    description:
      "Lag ukentlig timeliste for ansatte, prosjekter eller egne oppdrag. Enkel oversikt og PDF-nedlasting.",
    h1: "Timeliste uke",
    intro:
      "En ukentlig timeliste gjør det enklere å følge arbeidstid, prosjekter og fremdrift. Jobbleder gir deg full oversikt uke for uke.",
    bullets: [
      "Registrer timer uke for uke",
      "Perfekt for små bedrifter og håndverkere",
      "Se oversikt per prosjekt og kunde",
      "Last ned ukentlig timeliste som PDF",
    ],
    faqs: [
      {
        q: "Kan jeg føre timer per uke?",
        a: "Ja, Jobbleder gjør det enkelt å registrere og samle timer uke for uke.",
      },
      {
        q: "Kan jeg bruke ukentlig timeliste for prosjekter?",
        a: "Ja, du kan bruke løsningen for både prosjekter og kunder.",
      },
      {
        q: "Kan timelisten lastes ned?",
        a: "Ja, du kan laste ned timelisten som PDF.",
      },
    ],
    ctaLabel: "Opprett timeliste",
    sections: [
      {
        heading: "Hvorfor bruke ukentlig timeliste?",
        paragraphs: [
          "En ukentlig timeliste gir bedre oversikt over arbeidstid og gjør det enklere å følge fremdrift gjennom hele uken.",
          "For små bedrifter og håndverkere er dette en enkel måte å sikre at timer blir registrert løpende og ikke glemt.",
        ],
      },
      {
        heading: "Timeliste uke for prosjekter og kunder",
        paragraphs: [
          "Når du fører timer uke for uke blir det lettere å se hvor mye tid som går til hvert prosjekt eller kunde.",
          "Dette gir bedre kontroll og kan også brukes som grunnlag for videre dokumentasjon og faktura.",
        ],
      },
      {
        heading: "Fordeler med digital ukentlig timeliste",
        paragraphs: [
          "En digital løsning gjør det enklere å oppdatere timene fortløpende og hente ut PDF når du trenger det.",
          "Det sparer tid sammenlignet med manuelle skjemaer og gir bedre struktur i arbeidshverdagen.",
        ],
      },
    ]
  },
  {
    slug: "timeliste-ansatt",
    title: "Timeliste ansatt – enkel registrering av arbeidstid",
    topic: "timeliste",
    description:
      "Før timeliste for ansatte på en enkel måte. Perfekt for små bedrifter og håndverkere som trenger oversikt over arbeidstid.",
    h1: "Timeliste ansatt",
    intro:
      "Trenger du en enkel løsning for å føre timeliste for ansatte? I Jobbleder skriver du inn arbeiderens navn i timelisten og fører timene på dette navnet.",
    bullets: [
      "Enkel timeregistrering for ansatte",
      "Oversikt over arbeidstid og oppdrag",
      "Passer for små bedrifter",
      "Last ned som PDF ved behov",
    ],
    faqs: [
      {
        q: "Kan jeg bruke Jobbleder for ansatte?",
        a: "Ja. Du skriver inn arbeiderens navn når du oppretter timelisten og fører timene på dette navnet. Dette er navngivning i dokumentet, ikke oppretting av ansattkontoer eller tilgangsstyring.",
      },
      {
        q: "Er det enkelt å holde oversikt over arbeidstid?",
        a: "Ja, løsningen er laget for å være rask og enkel i bruk.",
      },
      {
        q: "Kan ansatte sine timer lagres som PDF?",
        a: "Ja, du kan laste ned timelister som PDF.",
      },
    ],
    ctaLabel: "Start gratis",
    sections: [
      {
        heading: "Hvorfor føre timeliste for ansatte?",
        paragraphs: [
          "Når du oppretter en timeliste, skriver du inn navnet på arbeideren som timene gjelder. Navnet knytter timene til personen i dokumentet; det oppretter ikke en egen ansattkonto.",
          "Dette er spesielt nyttig i små bedrifter der man trenger en enkel, men tydelig løsning.",
        ],
      },
      {
        heading: "Bedre kontroll over arbeidstid",
        paragraphs: [
          "En god timeliste for ansatte gjør det lettere å følge med på hvor mye tid som brukes og hvilke oppgaver som er utført.",
          "Det gir også bedre dokumentasjon hvis timene senere skal brukes som grunnlag for videre administrasjon.",
        ],
      },
      {
        heading: "Digital løsning i stedet for papir",
        paragraphs: [
          "Papirskjemaer kan fort bli rotete eller forsvinne. En digital timeliste gjør registreringen enklere og mer oversiktlig.",
          "Med Jobbleder kan du også laste ned timelister som PDF når du trenger det.",
        ],
      },
    ]
  },
  {
    slug: "timeliste-prosjekt",
    title: "Timeliste prosjekt – før timer per prosjekt og kunde",
    topic: "timeliste",
    description:
      "Lag timeliste per prosjekt og få bedre oversikt over arbeidstid, kunder og oppdrag. Last ned som PDF.",
    h1: "Timeliste prosjekt",
    intro:
      "Når du fører timer per prosjekt blir det enklere å følge fremdrift, kundearbeid og fakturagrunnlag. Jobbleder gjør dette enkelt.",
    bullets: [
      "Registrer timer per prosjekt",
      "Bedre oversikt over kunder og oppdrag",
      "Bruk timelisten som grunnlag for faktura",
      "Last ned og del som PDF",
    ],
    faqs: [
      {
        q: "Kan jeg føre timer per prosjekt?",
        a: "Ja, Jobbleder gjør det enkelt å registrere arbeidstid per prosjekt.",
      },
      {
        q: "Kan prosjekt-timelister brukes til faktura?",
        a: "Ja, timelister kan brukes som grunnlag for videre dokumentarbeid.",
      },
      {
        q: "Passer dette for håndverkere?",
        a: "Ja, løsningen er laget med håndverkere og små bedrifter i tankene.",
      },
    ],
    ctaLabel: "Opprett timeliste",
    sections: [
      {
        heading: "Hvorfor føre timer per prosjekt?",
        paragraphs: [
          "Når timer registreres per prosjekt får du bedre kontroll over tidsbruk, fremdrift og hvilke oppdrag som tar mest ressurser.",
          "Dette gjør det lettere å dokumentere arbeid og skape bedre oversikt for både bedrift og kunde.",
        ],
      },
      {
        heading: "Timeliste prosjekt gir bedre fakturagrunnlag",
        paragraphs: [
          "Når timene er knyttet til konkrete prosjekter blir det enklere å bruke dem som grunnlag for videre dokumentarbeid.",
          "Det reduserer risikoen for at arbeidstid blir glemt eller feilvurdert.",
        ],
      },
      {
        heading: "Passer godt for håndverkere og små bedrifter",
        paragraphs: [
          "Håndverkere jobber ofte på flere oppdrag samtidig. Derfor er prosjektbasert timeliste en enkel måte å holde kontroll på hver jobb.",
          "Med Jobbleder kan du føre timer raskt og laste ned oversikten som PDF.",
        ],
      },
    ]
  },

  {
    slug: "tilbud-mal",
    title: "Tilbud mal – skriv et profesjonelt tilbud (gratis)",
    topic: "tilbud",
    isPillar: true,
    description:
      "Tilbud mal for små bedrifter og håndverkere. Lag tilbud raskt og konverter til faktura når kunden sier ja.",
    h1: "Tilbud mal (gratis)",
    intro:
      "Lag et profesjonelt tilbud med riktig struktur. Når tilbudet er akseptert kan du gjøre det om til faktura.",
    bullets: [
      "Ryddig mal med feltene du trenger",
      "Lag tilbud på minutter",
      "Konverter tilbud til faktura",
      "Last ned og send som PDF",
    ],
    faqs: [
      { q: "Hva bør et tilbud inneholde?", a: "Kontaktinfo, beskrivelse, pris, vilkår og dato." },
      { q: "Kan jeg lage faktura fra tilbudet?", a: "Ja, med ett klikk i Jobbleder." },
      { q: "Er det gratis?", a: "Ja, du kan opprette tilbud gratis." },
    ],
    ctaLabel: "Opprett tilbud",
    sections: [
      {
        heading: "Hva er et tilbud?",
        paragraphs: [
          "Et tilbud er et dokument som beskriver hva du skal levere, til hvilken pris og på hvilke vilkår. Det brukes ofte av håndverkere og små bedrifter før arbeidet starter.",
          "Et godt tilbud gjør det enklere for kunden å forstå hva som inngår og gir et mer profesjonelt førsteinntrykk.",
        ],
      },
      {
        heading: "Hvorfor bruke en tilbud mal?",
        paragraphs: [
          "En tilbud mal gjør det enklere å lage tilbud raskt og med en ryddig struktur. Du slipper å starte fra blankt ark hver gang.",
          "For små bedrifter betyr dette mindre administrasjon og mer konsistente dokumenter.",
        ],
      },
      {
        heading: "Hva bør et godt tilbud inneholde?",
        paragraphs: [
          "Et godt tilbud bør tydelig forklare hva som skal leveres, pris, eventuelle betingelser og hvor lenge tilbudet er gyldig.",
          "Jo tydeligere dokumentet er, desto enklere blir det for kunden å ta stilling til det.",
        ],
      },
      {
        heading: "Fra tilbud til faktura",
        paragraphs: [
          "Når kunden aksepterer tilbudet, er neste steg ofte å gjøre det om til faktura eller bruke det som grunnlag for videre dokumentarbeid.",
          "Jobbleder gjør det enklere å holde denne prosessen samlet i én løsning.",
        ],
      },
    ]
  },
  {
    slug: "lage-tilbud",
    title: "Lage tilbud – hvordan skrive et godt tilbud",
    description:
      "Lær hvordan du lager et ryddig og profesjonelt tilbud. Enkelt for håndverkere og små bedrifter i Norge.",
    h1: "Lage tilbud",
    intro:
      "Å lage tilbud trenger ikke være komplisert. Med riktig struktur blir det enklere å sende et profesjonelt tilbud som kunden forstår.",
    bullets: [
      "Lag tilbud direkte i nettleseren",
      "Bruk en tydelig og profesjonell struktur",
      "Perfekt for håndverkere og små bedrifter",
      "Last ned tilbud som PDF",
    ],
    faqs: [
      {
        q: "Hvordan lager jeg et tilbud?",
        a: "Du beskriver arbeidet, legger inn pris, eventuelle vilkår og sender tilbudet i en ryddig struktur.",
      },
      {
        q: "Hva bør et tilbud inneholde?",
        a: "Et tilbud bør inneholde beskrivelse av arbeid, pris, dato og eventuelle betingelser.",
      },
      {
        q: "Kan jeg lage tilbud gratis i Jobbleder?",
        a: "Ja, Jobbleder kan brukes gratis til å opprette tilbud.",
      },
    ],
    sections: [
      {
        heading: "1. Velg kunden og riktig prosjekt",
        paragraphs: [
          "Åpne Opprett og velg Tilbud i Jobbleder. Velg kunden som skal få tilbudet, og knytt til et prosjekt hvis det er relevant. Kontroller kundeopplysningene før du går videre.",
          "Vi bruker Tilbud 29 som eksempel: kunden er Eksempel Eiendom, og prosjektet heter Renovering av leilighet i skjemaet. Prosjektvalget vises i appen, men er ikke skrevet ut som eget felt på PDF-eksemplet.",
        ],
      },
      {
        heading: "2. Beskriv arbeidet kunden skal ta stilling til",
        paragraphs: [
          "Legg inn en tydelig arbeidsbeskrivelse på tilbudslinjen. I Tilbud 29 står det Legging av parkett. For ditt eget oppdrag bør du også avklare hvilke rom, oppgaver og forberedelser prisen omfatter.",
          "Skjermbildet viser feltene du fyller ut. Det er en visning fra Jobbleder i nettleseren, ikke en ferdig PDF eller en egen mobilapp.",
        ],
        offerExample: "form",
      },
      {
        heading: "3. Legg inn antall og enhetspris",
        paragraphs: [
          "Tilbudslinjen i eksemplet har antall 1 og enhetspris 12 000 kroner før MVA. Det gir 1 × 12 000 = 12 000 kroner netto. Legg til flere rader dersom ulike deler av arbeidet bør beskrives og prises hver for seg.",
          "Antallet gjelder linjen slik den er lagt inn. Tilbud 29 oppgir ikke et areal eller et timeantall; ikke les dette inn i eksemplet. Bruk mengder og beskrivelser som kunden forstår i ditt eget tilbud.",
        ],
      },
      {
        heading: "4. Avklar materialer og arbeid som ikke inngår",
        paragraphs: [
          "Bli enige om hvem som skaffer parketten, om underlaget må klargjøres, og om for eksempel fjerning av gammelt gulv eller montering av lister er inkludert. Ta vare på avklaringene skriftlig sammen med tilbudet.",
          "Dette er råd til ditt eget tilbud. Slike materialvilkår og avgrensinger er ikke spesifisert i det viste PDF-dokumentet fra Tilbud 29. Ikke forutsett at kunden oppfatter dem på samme måte som deg.",
        ],
      },
      {
        heading: "5. Kontroller MVA og totalbeløpet",
        paragraphs: [
          "Velg MVA-behandlingen som gjelder for salget ditt, og kontroller oppsummeringen. I Tilbud 29 er eksempelsatsen 25 prosent: 12 000 kroner netto gir 3 000 kroner i MVA og 15 000 kroner totalt. Satsen er ikke en regel for alle tilbud eller virksomheter.",
        ],
      },
      {
        heading: "6. Sett datoer og tilbudets gyldighet",
        paragraphs: [
          "Kontroller Utstedt og Gyldig til. I demonstrasjonen er datoene 18.11.2026 og 02.12.2026. For et nytt tilbud velger du datoer som passer oppdraget; ikke kopier eksempelverdiene ukritisk.",
          "Avklar også ønsket oppstart og forventet ferdigstillelse med kunden der det er relevant. Disse arbeidstidspunktene er ikke det samme som tilbudsdato og gyldighet, og de vises ikke i Tilbud 29-PDF-en.",
        ],
      },
      {
        heading: "7. Se gjennom tilbudet før du genererer dokumentet",
        paragraphs: [
          "Kontroller kunde, arbeidsbeskrivelse, mengder, priser, MVA, datoer og total. Se særlig etter om det er tydelig hva som er med i prisen. Avklar uklarheter før du deler tilbudet.",
        ],
        links: [{ href: "/tilbud-eksempel", label: "Se hele Tilbud 29 og forklaringen av dokumentet" }],
      },
      {
        heading: "8. Lag PDF og del tilbudet med kunden",
        paragraphs: [
          "Velg Lagre eller Generer i Jobbleder. Generer og last ned PDF-en når innholdet stemmer, og del den manuelt med kunden, for eksempel som vedlegg i en e-post du sender selv. Appen sender ikke tilbudet eller registrerer kundens aksept automatisk.",
          "Oppretting av tilbud og PDF-eksport er tilgjengelig i Free, med Jobbleder-merking på dokumentet. Premium fjerner merkingen og lar deg bruke egen firmalogo. PDF-en lages i appen; denne nettsiden tilbyr ikke en tom tilbudsmal for nedlasting.",
        ],
        links: [
          { href: "/instruksjoner#opprett-tilbud", label: "Følg instruksjonene for å opprette et tilbud i Jobbleder" },
          { href: "/tilbud-mal", label: "Utforsk tilbudsverktøyet og dokumentflyten" },
        ],
      },
      {
        heading: "Avklar aksept og eventuelle endringer",
        paragraphs: [
          "Et akseptert tilbud kan danne grunnlag for en bindende avtale, avhengig av innholdet, svaret, omstendighetene og reglene som gjelder. Ikke legg til grunn at en separat signert kontrakt alltid er nødvendig. Ta vare på kundens svar og avklar endringer i omfang eller pris.",
          "Dette er praktiske råd, ikke en universell liste over lovpålagte tilbudsfelt. Forbrukeravtaler og oppdrag mellom virksomheter kan være underlagt ulike regler.",
        ],
        links: [{ href: "/blogg/tilbud-vs-kontrakt", label: "Les om forskjellen på tilbud, aksept og kontrakt" }],
      },
    ],
    topic: "tilbud",
  },
  {
    slug: "tilbud-eksempel",
    title: "Tilbud eksempel – se hvordan et godt tilbud kan se ut",
    description:
      "Se et tilbud eksempel og lær hvordan et ryddig og profesjonelt tilbud kan bygges opp for små bedrifter og håndverkere.",
    h1: "Tilbud eksempel",
    intro:
      "Et godt tilbud eksempel gjør det lettere å forstå hvordan et tilbud bør se ut og hvilke opplysninger som bør være med.",
    bullets: [
      "Se hvordan et profesjonelt tilbud kan bygges opp",
      "Nyttig for håndverkere og små bedrifter",
      "Bruk eksempelet som inspirasjon til egne tilbud",
      "Lag tilbud digitalt og last ned som PDF",
    ],
    faqs: [
      {
        q: "Hva viser et tilbud eksempel?",
        a: "Et tilbud eksempel viser hvordan innhold, pris og beskrivelse kan settes opp i et ryddig dokument.",
      },
      {
        q: "Kan jeg bruke et eksempel som mal?",
        a: "Ja, et godt eksempel kan være et nyttig utgangspunkt når du lager egne tilbud.",
      },
      {
        q: "Kan jeg lage slike tilbud i Jobbleder?",
        a: "Ja, Jobbleder gjør det enkelt å lage tilbud med profesjonell struktur.",
      },
    ],
    sections: [
      {
        heading: "Tilbud 29: et ferdig dokument fra Jobbleder",
        paragraphs: [
          "Her ser du et autentisk tilbud for legging av parkett: 12 000 kroner før MVA, 3 000 kroner i MVA og 15 000 kroner totalt. Hele den eksporterte A4-siden er med, slik at du kan se dokumentets faktiske oppsett.",
          "Dette er et utfylt demonstrasjonseksempel fra Jobbleder Free, ikke en blank PDF-mal. Du oppretter ditt eget tilbud og genererer PDF-en inne i Jobbleder.",
        ],
        offerExample: "document",
      },
      {
        heading: "Kunde og prosjekt: hva dokumentet faktisk viser",
        paragraphs: [
          "Demo Company er avsender, og Eksempel Eiendom er kunde i Tilbud 29. Dokumentet viser kontakt- og organisasjonsopplysninger for begge parter. Opplysningene er demonstrasjonsdata og skal ikke brukes som dine egne.",
          "I opprettingsskjemaet er tilbudet knyttet til prosjektet Renovering av leilighet. Prosjektnavnet er ikke et eget synlig felt i denne PDF-en. Skill derfor mellom opplysninger du ser i appen og opplysninger kunden faktisk får i dokumentet.",
        ],
      },
      {
        heading: "Arbeidsbeskrivelsen: legging av parkett",
        paragraphs: [
          "Tilbudet har én linje med beskrivelsen Legging av parkett. Det viser hvilken type arbeid eksemplet gjelder, men angir ikke rom, areal, materialansvar eller arbeid som er holdt utenfor prisen.",
          "I et eget tilbud er det nyttig å avklare omfanget mer konkret. Hvilke gulv gjelder jobben, og hva skal være klargjort? Dette er anbefalinger til oppdraget ditt, ikke ekstra vilkår som finnes i dokumentbildet.",
        ],
      },
      {
        heading: "Antall og enhetspris",
        paragraphs: [
          "Linjen har antall 1 og enhetspris 12 000 kroner før MVA. Beregningen er dermed 1 × 12 000 = 12 000 kroner netto. Antall 1 er antallet på tilbudslinjen; dokumentet oppgir ikke antall kvadratmeter eller timer.",
        ],
      },
      {
        heading: "MVA og total: slik henger tallene sammen",
        paragraphs: [
          "Med eksemplets MVA-sats på 25 prosent blir MVA-beløpet 3 000 kroner. Nettobeløpet 12 000 kroner pluss MVA 3 000 kroner gir 15 000 kroner totalt. Dokumentet viser både totalbeløpet og MVA-grunnlaget.",
          "25 prosent gjelder dette demonstrasjonseksemplet. Kontroller MVA-behandlingen som gjelder for ditt eget salg; ikke bruk satsen som en universell regel.",
        ],
      },
      {
        heading: "Tilbudsdato og gyldighet",
        paragraphs: [
          "Tilbud 29 er datert 18.11.2026 og viser Gyldig gjennom: 02.12.2026. Dette er tilbudets datoer i demonstrasjonen, ikke planlagt oppstart eller ferdigstillelse av parkettarbeidet.",
          "Datoene viser hvordan gyldighet presenteres i dokumentet. Et nytt tilbud må ha datoer og vilkår som passer det aktuelle oppdraget.",
        ],
      },
      {
        heading: "Forutsetninger du bør avklare i et eget tilbud",
        paragraphs: [
          "Avklar hvem som leverer materialer, hvilke forberedelser som inngår, og hvordan eventuelt ekstraarbeid skal avklares. Et enkelt dokumenteksempel kan ikke erstatte disse avklaringene. Tilbud 29 viser ikke detaljerte material-, betalings- eller endringsvilkår.",
          "Dette er praktiske anbefalinger, ikke en uttømmende liste over obligatoriske felter eller en garanti for at dokumentet dekker alle juridiske krav.",
        ],
        links: [{ href: "/lage-tilbud", label: "Slik forbereder og kontrollerer du ditt eget tilbud, steg for steg" }],
      },
      {
        heading: "Når kunden har tatt stilling til tilbudet",
        paragraphs: [
          "Et akseptert tilbud kan danne grunnlag for en bindende avtale. Virkningen avhenger av innhold, aksept, omstendigheter og gjeldende regler; det er ikke alltid nødvendig med en separat signert kontrakt. Forbrukeravtaler og avtaler mellom virksomheter kan ha ulike regler.",
          "Avklar kundens svar og eventuelle endringer utenfor appen. I Jobbleder kan du selv opprette en kontrakt fra tilbudet og redigere den videre, eller bruke tilbudet direkte som grunnlag for faktura. Du kan også opprette faktura fra kontrakten. Kontroller hvert nytt dokument; ingen av disse handlingene sender dokumenter eller registrerer aksept automatisk.",
          "Forbrukerrådet anbefaler skriftlig kontrakt ved bruk av håndverker for å dokumentere hva partene er enige om. En anbefaling om skriftlig dokumentasjon må skilles fra spørsmålet om det allerede er inngått en avtale.",
        ],
        links: [
          { href: "/blogg/fra-tilbud-til-kontrakt-og-faktura", label: "Se begge veier videre fra tilbudet med ekte dokumenteksempler" },
          { href: "https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/", label: "Les Forbrukerrådets råd om skriftlig kontrakt" },
        ],
      },
    ],
    topic: "tilbud",
  },
  {
    slug: "fakturaprogram-gratis",
    title: "Fakturaprogram gratis – lag faktura enkelt i Norge",
    topic: "faktura",
    isPillar: true,
    description:
        "Fakturaprogram gratis for håndverkere og små bedrifter. Lag faktura raskt i nettleseren og last ned som PDF.",
    h1: "Fakturaprogram gratis",
    intro:
        "Ser du etter et gratis fakturaprogram? Med Jobbleder kan du lage profesjonelle fakturaer på minutter – direkte i nettleseren.",
    bullets: [
        "Gratis å bruke – ingen installasjon",
        "Laget for håndverkere og små bedrifter i Norge",
        "Faktura, timeliste og tilbud i samme verktøy",
        "Last ned og send som PDF",
    ],
    faqs: [
        { q: "Er Jobbleder et gratis fakturaprogram?", a: "Ja, du kan bruke Jobbleder gratis." },
        { q: "Kan jeg sende faktura som PDF?", a: "Ja, du kan laste ned faktura som PDF og sende den." },
        { q: "Må jeg installere noe?", a: "Nei, alt fungerer i nettleseren." },
    ],
    ctaLabel: "Start gratis",
    sections: [
      {
        heading: "Hva er et fakturaprogram?",
        paragraphs: [
          "Et fakturaprogram er et verktøy som gjør det enklere å opprette, organisere og sende fakturaer. I stedet for å lage alt manuelt får du en fastere struktur og en raskere arbeidsflyt.",
          "For håndverkere og små bedrifter betyr dette mindre administrasjon og bedre kontroll over dokumentene.",
        ],
      },
      {
        heading: "Fordeler med et gratis fakturaprogram",
        paragraphs: [
          "Et gratis fakturaprogram gjør det lettere å komme i gang uten store kostnader. Du kan opprette profesjonelle fakturaer og få bedre oversikt med en gang.",
          "Dette er spesielt nyttig for små bedrifter som vil jobbe enklere og mer effektivt.",
        ],
      },
      {
        heading: "Hvem passer Jobbleder for?",
        paragraphs: [
          "Jobbleder passer godt for håndverkere, små bedrifter og andre som trenger en enkel måte å lage faktura, tilbud og timelister på.",
          "Løsningen er laget for å være lett å bruke direkte i nettleseren, uten komplisert oppsett.",
        ],
      },
      {
        heading: "Hvorfor velge en nettbasert løsning?",
        paragraphs: [
          "Når fakturaprogrammet fungerer i nettleseren, slipper du installasjon og kan jobbe raskt fra hvor som helst.",
          "Det gir en enklere hverdag og gjør det lettere å holde orden på dokumentene.",
        ],
      },
    ]
  },
  {
    slug: "hvordan-folge-opp-tilbud",
    title: "Hvordan følge opp tilbud – få flere svar fra kunder",
    description:
      "Lær hvordan du følger opp et sendt tilbud på en profesjonell måte og øker sjansen for å få svar fra kunden.",
    h1: "Hvordan følge opp tilbud",
    intro:
      "Å sende tilbud er bare første steg. En god oppfølging kan gjøre stor forskjell når du vil øke sjansen for respons og aksept fra kunden.",
    bullets: [
      "Lær hvordan du følger opp tilbud profesjonelt",
      "Få bedre respons fra kunder",
      "Perfekt for små bedrifter og håndverkere",
      "Bruk enkle rutiner for oppfølging",
    ],
    faqs: [
      {
        q: "Hvorfor er det viktig å følge opp et tilbud?",
        a: "Fordi mange kunder trenger en påminnelse før de tar en beslutning eller svarer.",
      },
      {
        q: "Når bør jeg følge opp et tilbud?",
        a: "Ofte er det lurt å følge opp etter noen dager, avhengig av type jobb og situasjon.",
      },
      {
        q: "Hvordan kan jeg følge opp profesjonelt?",
        a: "Vær kort, tydelig og vennlig. Spør om kunden har spørsmål og om de har rukket å se på tilbudet.",
      },
    ],
    sections: [
      {
        heading: "Hvorfor oppfølging av tilbud er viktig",
        paragraphs: [
          "Mange tilbud blir ikke besvart med en gang. Det betyr ikke nødvendigvis at kunden ikke er interessert.",
          "En enkel og profesjonell oppfølging kan være nok til å få samtalen i gang igjen.",
        ],
      },
      {
        heading: "Når bør du følge opp tilbudet?",
        paragraphs: [
          "Tidspunktet avhenger av typen oppdrag, men ofte er det naturlig å følge opp etter noen dager.",
          "Det viktigste er å vise interesse uten å virke påtrengende.",
        ],
      },
      {
        heading: "Hvordan skrive en god oppfølging",
        paragraphs: [
          "En god oppfølging bør være kort og tydelig. Du kan for eksempel spørre om kunden har fått sett på tilbudet og om det er noe de ønsker avklart.",
          "Dette skaper en profesjonell dialog og øker sjansen for respons.",
        ],
      },
    ],
    topic: "tilbud",
  },

  {
    slug: "lage-faktura",
    title: "Lage faktura – hvordan skrive en faktura enkelt",
    description:
      "Lær hvordan du lager en faktura enkelt og riktig. Jobbleder gjør det raskt å opprette faktura i nettleseren.",
    h1: "Lage faktura",
    intro:
      "Å lage faktura trenger ikke være komplisert. Med riktig oppsett kan du skrive en profesjonell faktura raskt og enkelt.",
    bullets: [
      "Lag faktura direkte i nettleseren",
      "Enkel løsning for håndverkere og små bedrifter",
      "Ryddig oppsett med feltene du trenger",
      "Last ned og send som PDF",
    ],
    faqs: [
      {
        q: "Hvordan lager jeg en faktura?",
        a: "Du fyller inn kundeinformasjon, beskriver arbeidet, legger inn pris og genererer fakturaen.",
      },
      {
        q: "Kan jeg lage faktura gratis?",
        a: "Ja, Jobbleder kan brukes gratis til å opprette faktura.",
      },
      {
        q: "Kan jeg laste ned faktura som PDF?",
        a: "Ja, du kan laste ned faktura som PDF og sende den videre.",
      },
    ],
    sections: [
      {
        heading: "Hva trenger en faktura?",
        paragraphs: [
          "En faktura bør inneholde tydelig informasjon om hvem som sender fakturaen, hvem som er kunde, hva som er levert og hva beløpet gjelder.",
          "Når fakturaen er ryddig og korrekt blir det enklere både for deg og kunden å holde oversikt.",
        ],
      },
      {
        heading: "Hvordan lage faktura enkelt",
        paragraphs: [
          "Den enkleste måten å lage faktura på er å bruke en digital løsning med ferdig struktur. Da slipper du å bygge opp dokumentet manuelt hver gang.",
          "Jobbleder gjør det enkelt å opprette faktura direkte i nettleseren og laste den ned som PDF.",
        ],
      },
      {
        heading: "Hvorfor bruke et fakturaprogram?",
        paragraphs: [
          "Et fakturaprogram sparer tid og reduserer feil. Du får bedre kontroll over dokumentene og en mer profesjonell arbeidsflyt.",
          "For små bedrifter og håndverkere betyr dette mindre administrasjon og mer fokus på selve arbeidet.",
        ],
      },
    ],
    topic: "faktura",
  },
  {
    slug: "faktura-eksempel",
    title: "Faktura eksempel – se hvordan en faktura kan se ut",
    description: "Se et enkelt faktura eksempel og lær hvordan en profesjonell faktura bør bygges opp for små bedrifter og håndverkere.",
    h1: "Faktura eksempel",
    intro: "Et faktura eksempel gjør det lettere å forstå hvordan en faktura bør se ut og hvilke opplysninger som bør være med.",
    bullets: [
      "Se hvordan en ryddig faktura kan bygges opp",
      "Perfekt for små bedrifter og håndverkere",
      "Bruk eksempelet som utgangspunkt for egne fakturaer",
      "Lag faktura digitalt og last ned som PDF"
    ],
    faqs: [
      {
        q: "Hva viser et faktura eksempel?",
        a: "Et faktura eksempel viser hvordan informasjon, priser og beskrivelser kan settes opp i en tydelig faktura."
      },
      {
        q: "Kan jeg bruke eksempelet som mal?",
        a: "Du kan bruke eksemplet til å forstå oppsettet. Bildet er ikke en blank eller redigerbar fakturamal. Når du lager din egen faktura, må du bruke egne opplysninger, riktig nummerering og opplysninger som passer salget."
      },
      {
        q: "Kan jeg lage slike fakturaer i Jobbleder?",
        a: "Ja, Jobbleder gjør det enkelt å lage profesjonelle fakturaer i samme stil."
      }
    ],
    sections: [
      {
        heading: "Hvorfor se på et faktura eksempel?",
        paragraphs: [
          "Her ser du Faktura 110, opprettet i Jobbleder med demonstrasjonsdata. Den viser hvordan selger, kunde, arbeidsbeskrivelse og betalingsinformasjon kan samles i et dokument.",
          "Eksemplet gjelder én linje med parkettarbeid til 12 000 kroner før MVA. Med 25 prosent MVA i dette eksemplet blir avgiften 3 000 kroner og totalen 15 000 kroner."
        ],
        invoiceExample: true
      },
      {
        heading: "Hva bør et godt faktura eksempel vise?",
        paragraphs: [
          "Les dokumentet fra opplysningene om partene til arbeidslinjen og summene. Skill mellom det du ser i dette eksemplet, og opplysningene ditt eget salg krever."
        ],
        checklists: [
          {
            heading: "Slik leser du Faktura 110",
            items: [
              "Selger og kunde: Demo Company står som selger, og Eksempel Eiendom som kunde. Navn, adresser og organisasjonsopplysninger viser hvem dokumentet gjelder.",
              "Nummer og datoer: fakturanummeret er 110. Fakturadatoen er 18. november 2026 og forfallsdatoen 2. desember 2026. Datoene er eksempelverdier, ikke en fast betalingsfrist for alle fakturaer.",
              "Arbeid og pris: Legging av parkett er beskrivelsen. Antall 1 multiplisert med enhetspris 12 000 kroner gir et nettobeløp på 12 000 kroner.",
              "MVA og total: 12 000 × 25 prosent gir 3 000 kroner i MVA. Beløpet kunden skal betale i dette eksemplet, er 15 000 kroner.",
              "Betalingsinformasjon: dokumentet viser bankkonto, forfallsdato og beskjed om å merke betalingen med fakturanummeret."
            ]
          }
        ],
        links: [
          {
            href: "/faktura-krav",
            label: "Les om fakturakrav og betingede opplysninger"
          },
          {
            href: "/blogg/faktura-eksempel-sma-bedrifter",
            label: "Se regnestykket i et småbedriftseksempel"
          }
        ]
      },
      {
        heading: "Fra eksempel til ferdig faktura",
        paragraphs: [
          "Bildet illustrerer et generert dokument, ikke en blank PDF du kan fylle ut. MVA-behandling, leveringsopplysninger og øvrige krav må vurderes for ditt salg; dokumentbildet er ikke en universell fasit for lovkrav.",
          "I Jobbleder legger du inn egne kundeopplysninger og fakturalinjer, kontrollerer beløpene og genererer PDF. Du laster ned fakturaen og sender den manuelt. Oppretting og eksport er tilgjengelig i Free, med Jobbleder-vannmerke på PDF-en."
        ],
        links: [
          {
            href: "/instruksjoner#opprett-faktura",
            label: "Følg opprettingen av en faktura steg for steg"
          }
        ]
      }
    ],
    topic: "faktura"
  },
  {
    slug: "faktura-krav",
    title: "Faktura krav – hva må en faktura inneholde?",
    description: "Lær hvilke opplysninger en faktura bør inneholde og hvordan du lager en ryddig faktura for kunder i Norge.",
    h1: "Faktura krav",
    intro: "Når du lager faktura er det viktig at dokumentet er tydelig og inneholder de nødvendige opplysningene. Da blir det enklere å holde orden og unngå misforståelser.",
    bullets: [
      "Få oversikt over hva en faktura bør inneholde",
      "Lag ryddige og profesjonelle fakturaer",
      "Passer for små bedrifter og håndverkere",
      "Bruk Jobbleder for å lage faktura enkelt"
    ],
    faqs: [
      {
        q: "Hva må en faktura inneholde?",
        a: "En faktura skal blant annet ha fakturanummer, fakturadato, opplysninger om selger og kjøper, hva som er levert og i hvilket omfang, leveringsopplysninger, beløp, eventuell MVA og betalingsforfall. Enkelte opplysninger avhenger av virksomheten og salget. Bankkonto og betalingsreferanse er praktiske tillegg."
      },
      {
        q: "Hvorfor er tydelige fakturakrav viktige?",
        a: "Tydelige opplysninger gjør det enklere å forstå fakturaen og reduserer risikoen for feil og spørsmål fra kunden."
      },
      {
        q: "Kan Jobbleder hjelpe meg å lage ryddige fakturaer?",
        a: "Ja, Jobbleder gjør det enklere å sette opp faktura med en ryddig struktur."
      }
    ],
    sections: [
      {
        heading: "Hvorfor er det viktig å kjenne til faktura krav?",
        paragraphs: [
          "En faktura dokumenterer et salg. Kunden skal kunne forstå hvem som har levert, hva betalingen gjelder og når den forfaller. Opplysningene må også gi et grunnlag for å kontrollere salget.",
          "Oversikten nedenfor bygger på Altinns og Skatteetatens veiledning om vanlige fakturaer. Noen krav avhenger av selskapsform, MVA-registrering og hva du selger."
        ],
        links: [
          {
            href: "https://info.altinn.no/starte-og-drive/regnskap-og-revisjon/regnskap/faktura-salgsdokumentasjon/",
            label: "Altinn: opplysninger i en faktura"
          },
          {
            href: "https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/rutiner-regnskap-og-kassasystem/gode-rutiner-for-daglig-drift/inntekter/",
            label: "Skatteetaten: fakturering og inntekter"
          }
        ]
      },
      {
        heading: "Vanlige opplysninger i en faktura",
        paragraphs: [
          "Skill mellom opplysninger som inngår i kravene til fakturaen, og praktiske tillegg som gjør det enklere å betale eller stille spørsmål."
        ],
        checklists: [
          {
            heading: "Lovpålagte opplysninger",
            items: [
              "Fakturanummer: bruk et fakturaprogram med maskinelt tildelte nummer i en kontrollerbar nummerserie som ikke enkelt kan overstyres, eller forhåndsnummererte fakturablanketter fra trykkeri.",
              "Fakturadato (dokumentasjonsdato): datoen på fakturaen må skilles fra leveringsdato og betalingsforfall.",
              "Selger: navn og organisasjonsnummer. Organisasjonsnummeret skal etterfølges av MVA når selger er registrert i Merverdiavgiftsregisteret. Registreringen må være godkjent før du fakturerer med MVA.",
              "Kjøper: navn og adresse eller organisasjonsnummer. En privatkunde trenger ikke et organisasjonsnummer.",
              "Varer eller tjenester: beskriv hva som er levert og omfanget, for eksempel antall eller hvilke arbeider avtalt pris dekker.",
              "Levering: oppgi tidspunkt og sted for leveransen. For arbeid hos kunden kan arbeidsstedet være et annet enn fakturaadressen.",
              "Beløp og MVA: vis pris, eventuell merverdiavgift og totalbeløp. MVA-beløpet skal angis i norske kroner. Ulike satser og ulik avgiftsbehandling må skilles tydelig.",
              "Betalingsforfall: oppgi når betalingen forfaller. Det betyr ikke at alle fakturaer skal ha en betalingsfrist på 14 dager.",
              "Betingede opplysninger: AS og ASA skal også oppgi Foretaksregisteret; dette gjelder også relevante NUF registrert der. Det kan gjelde ytterligere krav avhengig av virksomheten og salget."
            ]
          },
          {
            heading: "Praktiske opplysninger",
            items: [
              "Bankkonto: gjør det tydelig hvilken konto kunden skal betale til når dere bruker bankoverføring.",
              "Betalingsreferanse: forklar gjerne at kunden skal merke betalingen med fakturanummeret. KID er ikke et universelt krav til enhver faktura.",
              "Kontaktinformasjon: en e-postadresse eller kontaktperson gjør det enklere å avklare spørsmål om fakturaen."
            ]
          }
        ],
        links: [
          {
            href: "/faktura-eksempel",
            label: "Se feltene i et fakturaeksempel"
          }
        ]
      },
      {
        heading: "Slik gjør et fakturaprogram jobben enklere",
        paragraphs: [
          "I Jobbleder kan du velge kunde og legge inn fakturalinjer med beskrivelse, enhetspris, antall og MVA. Kontroller opplysningene og summene før du lager PDF-en. Last ned filen og send den selv til kunden.",
          "Oppretting, PDF-eksport og dokumentkonvertering er tilgjengelig i Free. Free-PDF-er har Jobbleder-vannmerke. Premium gir valg for egen firmalogo eller en ren PDF uten Jobbleder-merking."
        ],
        links: [
          {
            href: "/instruksjoner#opprett-faktura",
            label: "Slik oppretter du en faktura i Jobbleder"
          }
        ]
      },
      {
        heading: "Hvis du må korrigere en sendt faktura",
        paragraphs: [
          "En kreditnota brukes til å korrigere en tidligere faktura og skal vise hvilken faktura den gjelder. Ikke behandle en allerede sendt faktura som et dokument du bare skriver om. Ved retting kan det være nødvendig med kreditnota og en ny, korrigert faktura."
        ],
        links: [
          {
            href: "/instruksjoner#rette-en-faktura",
            label: "Se veiledningen for å rette en faktura"
          },
          {
            href: "/instruksjoner#opprett-kreditnota",
            label: "Se hvordan du oppretter kreditnota"
          }
        ]
      }
    ],
    topic: "faktura"
  },
  {
    "slug": "kontrakt-mal",
    "topic": "kontrakt",
    "isPillar": true,
    "title": "Kontrakt mal – lag kontrakt gratis med Jobbleder",
    "description": "Lag kontrakt for privatkunder og bedrifter gratis med Jobbleder. Beskriv arbeidet, avtal pris, sett opp betalingsplan og last ned kontrakten som PDF.",
    "h1": "Kontrakt mal (gratis)",
    "intro": "En kontraktsmal gir deg en struktur for å beskrive oppdraget. I Jobbleder fyller du inn partene, arbeidet, prisen og vilkårene før du lager et norsk PDF-dokument som må gjennomgås.",
    "bullets": [
      "Beskriv oppdraget med egne arbeidsrader",
      "Velg kontraktstype for privatkunde eller bedrift",
      "Avklar pris, materialer, betaling og datoer",
      "Gjennomgå innhold og vilkår før eventuell signering"
    ],
    "ctaLabel": "Opprett en kontrakt",
    "faqs": [
      {
        "q": "Hva er en kontraktsmal?",
        "a": "En kontraktsmal er en struktur for opplysninger og vilkår som må tilpasses den konkrete avtalen. Den erstatter ikke avklaringer med kunden eller vurdering av hvilke regler som gjelder."
      },
      {
        "q": "Må avtalen være skriftlig?",
        "a": "En avtale kan være bindende uten et separat signert kontraktsdokument. Hva som gjelder, avhenger blant annet av avtaletypen og eventuelle formkrav eller forbehold. Skriftlig dokumentasjon gjør det enklere å vise hva dere har avtalt."
      },
      {
        "q": "Kan jeg lage kontrakt gratis?",
        "a": "Ja. Dokumentoppretting, PDF-eksport og dokumentkonvertering er tilgjengelig i Free. Free-PDF-er har Jobbleder-merking. Premium gir valg for å fjerne merkingen og bruke egen firmalogo."
      }
    ],
    "sections": [
      {
        "heading": "En mal er et utgangspunkt for avtalen",
        "paragraphs": [
          "Kontrakt kan bety både avtalen mellom dere og dokumentet som beskriver den. Et skriftlig dokument gjør det lettere å finne igjen omfang, pris og ansvar, men selve dokumentopprettingen er ikke kundens aksept.",
          "Begynn med hva dere faktisk er enige om. En mal må tilpasses arbeidet og kundetypen; mer tekst er ikke nødvendigvis bedre dokumentasjon."
        ],
        "links": [
          {
            "href": "/blogg/tilbud-vs-kontrakt",
            "label": "Les om forskjellen mellom tilbud, aksept og kontrakt"
          }
        ]
      },
      {
        "heading": "Dokumenter hva jobben omfatter",
        "paragraphs": [
          "Beskriv leveransen, arbeidsstedet, materialene og det som ikke inngår. Oppgi prisgrunnlaget og avklar hva som må skje før arbeidet kan starte.",
          "I Jobbleder kan du bruke en jobbtittel, flere arbeidsrader og en valgfri detaljbeskrivelse. Avsnitt, enkle overskrifter og lister gir plass til forklaringer i en PDF over flere sider."
        ],
        "links": [
          {
            "href": "/hva-skal-en-kontrakt-inneholde",
            "label": "Se en praktisk sjekkliste for kontraktsinnhold"
          }
        ]
      },
      {
        "heading": "Privatkunde og bedrift trenger riktig utgangspunkt",
        "paragraphs": [
          "Jobbleder foreslår kontraktstype, og du kan velge typen manuelt. Det finnes egne standardvilkår for privatkunder (B2C) og avtaler mellom virksomheter (B2B). Kontroller forslaget før du går videre.",
          "Forbrukerregler for håndverkertjenester skal ikke uten videre brukes på avtaler mellom virksomheter. Jobbleder er heller ikke en egen kontraktsløsning for oppføring av ny bolig under bustadoppføringslova."
        ],
        "links": [
          {
            "href": "https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/",
            "label": "Les Forbrukerrådets veiledning om bruk av håndverker"
          }
        ]
      },
      {
        "heading": "Gjennomgå dokumentet før du bruker det",
        "paragraphs": [
          "Standardvilkårene i Jobbleder avventer uavhengig juridisk gjennomgang. Dokumentet er et grunnlag du må vurdere for oppdraget, ikke en juridisk godkjent mal klar til signering. Få juridisk veiledning ved behov.",
          "Kontroller at tekst, beløp, datoer og vedlegg beskriver samme avtale. Kontrakten kan redigeres og PDF-en genereres på nytt, men dette er ikke en revisjonshistorikk eller kundens godkjenning av endringer."
        ],
        "links": [
          {
            "href": "/kontrakt-eksempel",
            "label": "Forstå strukturen i et kontraktsdokument"
          },
          {
            "href": "/kontrakt-handverker",
            "label": "Forbered en kontrakt for håndverksoppdraget"
          }
        ]
      }
    ]
  },
  {
    "slug": "kontrakt-handverker",
    "topic": "kontrakt",
    "title": "Kontrakt for håndverkere – omfang, pris og vilkår",
    "description": "Forbered kontrakt for maler-, snekker-, gulv- og oppussingsarbeid. Avklar omfang, materialer, pris og tidsplan for privatkunder eller bedrifter.",
    "h1": "Kontrakt for håndverkere",
    "intro": "En praktisk kontrakt begynner med en presis beskrivelse av jobben. Avklar leveransen med kunden før du fyller ut dokumentet, enten du maler, legger gulv, flislegger eller utfører snekker- og oppussingsarbeid.",
    "bullets": [
      "Beskriv både arbeidet og det som ikke er med",
      "Fordel materialansvar og forberedelser",
      "Avklar pris, betalingsvilkår og tidsplan",
      "Velg riktig utgangspunkt for privatkunde eller bedrift"
    ],
    "ctaLabel": "Opprett en kontrakt",
    "faqs": [
      {
        "q": "Når er et eget kontraktsdokument nyttig?",
        "a": "Særlig når jobben går over tid, omfatter flere leveranser eller krever tydelige avklaringer om materialer, pris og endringer. Dokumentasjon er nyttig også ved mindre oppdrag; størrelsen alene avgjør ikke hvilke regler som gjelder."
      },
      {
        "q": "Kan jeg bruke samme vilkår for privatkunder og bedrifter?",
        "a": "Ikke uten å vurdere avtaleforholdet. Jobbleder har separate B2C- og B2B-standardvilkår, men de avventer uavhengig juridisk gjennomgang. Kontroller kundetypen og få juridisk hjelp ved behov."
      },
      {
        "q": "Kan jeg bruke et eksisterende tilbud?",
        "a": "Ja. Du kan opprette kontrakt fra et tilbud i Jobbleder og redigere kontrakten selvstendig. Kontroller at tilbudet og eventuelle senere avklaringer er riktig gjengitt; konverteringen er ikke kundens aksept."
      },
      {
        "q": "Sender Jobbleder kontrakten til kunden?",
        "a": "Du genererer og laster ned PDF-en og deler den selv. Gjennomgå dokumentet før eventuell signering. Jobbleder har ikke elektronisk signering eller en digital godkjenningsflyt."
      }
    ],
    "sections": [
      {
        "heading": "Start med leveransen, ikke standardteksten",
        "paragraphs": [
          "For en malerjobb kan du beskrive hvilke rom og flater som skal behandles, nødvendig grunnarbeid og hvilken overflate dere har avtalt. For en snekkerjobb bør det være tydelig hva som skal bygges eller monteres.",
          "Et tenkt gulvoppdrag kan beskrives slik: «Legging av parkett i stuen. Kunden leverer parketten og tømmer rommet. Fjerning av gammelt gulv og utbedring av underlaget er ikke inkludert.» Dette er et eksempel på omfang, ikke en ferdig avtaletekst."
        ]
      },
      {
        "heading": "Fordel materialer, metoder og forberedelser",
        "paragraphs": [
          "Avklar hvem som bestiller og leverer materialene, hvordan arbeidsstedet skal være klargjort, og hvilke utførelsesmetoder som er avtalt. Ved flislegging kan underlag, flistype og nødvendige avklaringer før oppstart være viktige.",
          "Bruk flere arbeidsrader for adskilte oppgaver. En detaljbeskrivelse kan forklare forutsetninger og avgrensninger som ikke får plass i en kort linje. Arbeidsbeskrivelsesordboken i Jobbleder er et hjelpemiddel; kontroller at teksten passer din jobb."
        ]
      },
      {
        "heading": "Avklar pris og betaling før oppstart",
        "paragraphs": [
          "Velg fastpris, timepris eller et eksisterende tilbud som prisgrunnlag. Vær tydelig på om beløpene er inkludert eller ekskludert MVA, og hva prisen omfatter.",
          "En fremdriftsbasert betalingsplan kan beskrive prosentvise delbetalinger. Forklar hva som utløser hver betaling og hvilken betalingsfrist dere avtaler. Planen er ikke automatisk fakturering, og betalingsvalg i programmet avgjør ikke når det er lov å fakturere."
        ]
      },
      {
        "heading": "Skill et anslag fra en avtalt frist",
        "paragraphs": [
          "Oppgi planlagt oppstart og skill estimert ferdigstillelse fra en avtalt kontraktsfrist. Beskriv forutsetninger som tilgang, kundens leveranser eller avklaringer som må være på plass.",
          "Avklar hvordan dere skal håndtere tilleggsarbeid, endret pris og påvirkning på tidsplanen. Ikke la en ny arbeidsoppgave bli stående uten en avklaring fordi resten av kontrakten allerede er laget."
        ]
      },
      {
        "heading": "Privatkunde eller bedriftskunde?",
        "paragraphs": [
          "Kontroller hvem som er avtalepart og hva oppdraget gjelder. Forbrukerrådet har veiledning om håndverkertjenester for privatkunder; den skal ikke uten videre overføres til B2B-avtaler.",
          "Jobbleder foreslår kontraktstype og lar deg velge manuelt mellom B2C og B2B. Separate standardvilkår er et utgangspunkt, ikke en juridisk vurdering av oppdraget. Løsningen er ikke tilrettelagt som en egen kontrakt for oppføring av ny bolig."
        ],
        "links": [
          {
            "href": "https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/",
            "label": "Les råd for håndverksarbeid hos privatkunder"
          },
          {
            "href": "/blogg/nar-trenger-du-kontrakt",
            "label": "Les når et eget kontraktsdokument er særlig nyttig"
          }
        ]
      },
      {
        "heading": "Lag dokumentet og kontroller resultatet",
        "paragraphs": [
          "Velg kunde og eventuelt prosjekt i Jobbleder. Fyll inn jobbtittel, arbeidsrader, datoer og vilkår. Du kan starte selv eller bygge videre på et tilbud. Gjennomgå deretter PDF-en, også sidebryting og sammenhengen mellom tekst og beløp.",
          "Standardvilkårene i Jobbleder avventer uavhengig juridisk gjennomgang. Dokumentet er et grunnlag du må vurdere for oppdraget, ikke en juridisk godkjent mal klar til signering. Få juridisk veiledning ved behov.",
          "Etter gjennomgangen deler du dokumentet selv og ordner eventuell signering utenfor appen. Senere kan kontrakten brukes som fakturagrunnlag: du starter konverteringen og kontrollerer den nye fakturaen før du sender den manuelt."
        ],
        "links": [
          {
            "href": "/instruksjoner#opprett-kontrakt",
            "label": "Følg trinnene for å opprette kontrakt"
          },
          {
            "href": "/instruksjoner#lag-kontrakt-fra-tilbud",
            "label": "Bruk tilbud som kontraktsgrunnlag"
          },
          {
            "href": "/instruksjoner#kontrakt-til-faktura",
            "label": "Se hvordan kontrakten blir fakturagrunnlag"
          }
        ]
      }
    ]
  },
  {
    "slug": "kontrakt-eksempel",
    "topic": "kontrakt",
    "title": "Kontrakt eksempel – se hvordan en kontrakt bygges opp",
    "description": "Se hvordan et kontraktsdokument kan bygges opp med parter, arbeid, pris, tidsplan og vilkår. En pedagogisk gjennomgang, ikke en juridisk godkjent mal.",
    "h1": "Kontrakt eksempel",
    "intro": "Her går vi gjennom hvordan et utfylt kontraktsdokument kan bygges opp. Punktene forklarer hva du bør se etter, men er ikke en ferdig avtale som kan signeres. Oppdaterte B2C- og B2B-dokumenteksempler fra Jobbleder er foreløpig ikke publisert her.",
    "bullets": [
      "Forstå forskjellen mellom partene, leveransen og vilkårene",
      "Se hvordan beskrivelser og betaling kan gjøres tydeligere",
      "Skill pedagogiske eksempler fra juridisk gjennomgåtte maler",
      "Bruk gjennomgangen til å kontrollere ditt eget dokument"
    ],
    "ctaLabel": "Prøv Jobbleder",
    "faqs": [
      {
        "q": "Er dette en ferdig kontraktsmal til signering?",
        "a": "Nei. Dette er en pedagogisk gjennomgang av dokumentets oppbygning. Standardvilkårene i Jobbleder avventer uavhengig juridisk gjennomgang, og dokumenter må vurderes for det konkrete oppdraget."
      },
      {
        "q": "Hvor finner jeg et eksempel på en kontrakts-PDF?",
        "a": "Oppdaterte eksempler for privatkunde og bedrift er ikke publisert på denne siden ennå. Eldre produktbilder andre steder på nettstedet er ikke dokumentasjon på dagens B2C- og B2B-vilkår."
      },
      {
        "q": "Er B2C- og B2B-eksempler utbyttbare?",
        "a": "Nei. Kundetype, oppdrag og regelverk kan være forskjellige. Et eksempel kan forklare strukturen uten at vilkårene passer en annen avtale."
      },
      {
        "q": "Kan Jobbleder lage en kontrakt over flere sider?",
        "a": "Ja. Jobbleder støtter flere arbeidsrader, valgfrie detaljbeskrivelser med avsnitt og enkel formatering, og PDF-er over flere sider. Du må kontrollere det ferdige dokumentet."
      }
    ],
    "sections": [
      {
        "heading": "1. Partene i avtalen",
        "paragraphs": [
          "Dokumentet bør gjøre det klart hvem som bestiller, og hvem som utfører arbeidet. Kontroller navn og kontaktopplysninger, og relevante firmaopplysninger når en part er en virksomhet.",
          "I Jobbleder velger du kontraktstype for privatkunde eller bedrift. Et automatisk forslag må kontrolleres; det erstatter ikke vurderingen av hvem som faktisk inngår avtalen."
        ]
      },
      {
        "heading": "2. Arbeidsbeskrivelse",
        "paragraphs": [
          "En jobbtittel gir oversikt, mens arbeidsrader og en detaljert beskrivelse forklarer leveransen. I et tenkt parkettoppdrag bør det for eksempel stå hvilke rom jobben gjelder og om klargjøring eller riving inngår.",
          "I Jobbleder kan beskrivelsen ha avsnitt, enkle overskrifter og lister i PDF-en. Det gjør lange forklaringer lettere å lese, men innholdet må fortsatt være presist."
        ]
      },
      {
        "heading": "3. Tidsperiode",
        "paragraphs": [
          "Skill planlagt oppstart og estimert ferdigstillelse fra en konkret avtalt frist. Beskriv eventuelle forutsetninger, som tilgang til arbeidsstedet eller materiallevering.",
          "En forventet dato skal ikke uten videre leses som en annen type forpliktelse enn det partene har avtalt."
        ]
      },
      {
        "heading": "4. Pris og betaling",
        "paragraphs": [
          "Vis om grunnlaget er fastpris, timepris eller et bestemt tilbud, og gjør det tydelig om prisene inkluderer MVA. Kontroller referanser, beløp og betalingsfrist.",
          "En betalingsplan kan fordele betalingen på prosenter og beskrive hva hver del gjelder. Dette er avtalte vilkår, ikke en plan som automatisk oppretter eller sender fakturaer."
        ]
      },
      {
        "heading": "5. Materialer og partenes plikter",
        "paragraphs": [
          "Beskriv hvem som leverer materialer og hvem som skal gjøre nødvendige forberedelser. Avklar også praktiske forhold som tilgang, rydding og kundens egne leveranser.",
          "I eksemplet med parkett bør «kunden leverer parketten» skilles fra hvem som skal levere underlag, lister eller annet tilbehør."
        ]
      },
      {
        "heading": "6. Endringer og tilleggsarbeid",
        "paragraphs": [
          "Forklar hvordan nye ønsker skal avklares og dokumenteres, inkludert pris og virkning på fremdriften. Arbeid som ikke er med i den opprinnelige beskrivelsen, bør være lett å identifisere.",
          "At du redigerer kontrakten og lager en ny PDF, betyr ikke at kunden har akseptert de nye vilkårene."
        ]
      },
      {
        "heading": "7. Forsinkelse og ferdigstillelse",
        "paragraphs": [
          "Dokumentet bør gjøre forventninger og avtalte frister forståelige. Beskriv hvordan partene skal varsle om forhold som kan påvirke gjennomføringen.",
          "Hvilke konsekvenser en forsinkelse får, avhenger av avtalen og reglene for oppdraget. Gjennomgangen her fastsetter ikke dagbøter eller andre rettigheter."
        ]
      },
      {
        "heading": "8. Mangler og reklamasjon",
        "paragraphs": [
          "Les reklamasjonsteksten i lys av kundetypen og oppdraget. Forbrukerrådets veiledning gjelder forbrukerforhold og skal ikke brukes som en generell regel for bedriftsavtaler.",
          "En avtalt B2B-reklamasjonsperiode på 24 måneder er ikke en universell lovbestemt frist. Få den konkrete formuleringen vurdert før du bruker den."
        ],
        "links": [
          {
            "href": "https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/misfornoyd-med-handverkeren/",
            "label": "Les Forbrukerrådets informasjon om mangler ved håndverksarbeid"
          }
        ]
      },
      {
        "heading": "9. Avbestilling og opphør",
        "paragraphs": [
          "Se etter hvordan avbestilling eller avslutning av oppdraget er omtalt, og hva som er sagt om arbeid som allerede er utført.",
          "Ikke anta at avbestilling, angrerett og heving betyr det samme. Hva partene kan kreve, må vurderes for den aktuelle avtalen; eksemplet gir ingen generell rett til kostnadsfri avbestilling."
        ]
      },
      {
        "heading": "10. Lovgrunnlag og tvister",
        "paragraphs": [
          "Kontroller at lovhenvisninger og eventuelle vilkår om tvisteløsning passer avtaleforholdet. Håndverkertjenesteloven skal ikke automatisk legges til grunn for avtaler mellom virksomheter.",
          "Jobbleder foreslår kontraktstype, men gir verken juridisk rådgivning, automatisk kontroll av lovkrav eller automatisk innarbeiding av Norsk Standard. Løsningen er ikke en egen nyboligkontrakt."
        ]
      },
      {
        "heading": "11. Signaturer og siste gjennomgang",
        "paragraphs": [
          "Sammenlign dokumentet med det dere faktisk har avtalt. Kontroller alle sider og eventuelle vedlegg, og avklar uenighet før eventuell signering. Jobbleder har ikke elektronisk signering.",
          "Standardvilkårene i Jobbleder avventer uavhengig juridisk gjennomgang. Dokumentet er et grunnlag du må vurdere for oppdraget, ikke en juridisk godkjent mal klar til signering. Få juridisk veiledning ved behov."
        ],
        "links": [
          {
            "href": "/kontrakt-handverker",
            "label": "Se hvordan du forbereder et håndverksoppdrag"
          },
          {
            "href": "/kontrakt-mal",
            "label": "Utforsk kontraktsverktøyet og hva du kan fylle inn"
          }
        ]
      }
    ]
  },
  {
    "slug": "hva-skal-en-kontrakt-inneholde",
    "topic": "kontrakt",
    "title": "Hva skal en kontrakt inneholde? Praktisk sjekkliste",
    "description": "En praktisk gjennomgang av parter, arbeid, pris, betaling, tidsplan og endringer i en tjenestekontrakt. Skill anbefalinger fra lovkrav.",
    "h1": "Hva skal en kontrakt inneholde?",
    "intro": "En godt forberedt tjenestekontrakt bør gjøre leveransen og ansvaret forståelig for begge parter. Listen nedenfor er praktiske anbefalinger, ikke en uttømmende oversikt over obligatoriske lovkrav.",
    "bullets": [
      "Identifiser partene og oppdraget",
      "Beskriv leveransen og avgrensningene",
      "Avklar pris, betaling og tidsplan",
      "Vurder vilkårene ut fra kundetype og arbeid"
    ],
    "ctaLabel": "Se hvordan Jobbleder fungerer",
    "faqs": [
      {
        "q": "Er alle punktene lovpålagte?",
        "a": "Nei. Dette er en praktisk sjekkliste. Obligatoriske opplysninger og ufravikelige regler må vurderes ut fra avtaleforholdet og arbeidet. Listen er ikke en garanti for at dokumentet dekker alle krav."
      },
      {
        "q": "Må kunden signere før en avtale kan være bindende?",
        "a": "Ikke nødvendigvis. En avtale kan være inngått uten et separat signert dokument, men særregler og forbehold kan ha betydning. Skill spørsmålet om binding fra nytten av å dokumentere det dere er enige om."
      },
      {
        "q": "Gjelder håndverkertjenesteloven for alle kontrakter?",
        "a": "Nei. Forbrukerregler om håndverkertjenester skal ikke automatisk brukes på B2B-avtaler eller alle typer byggearbeid. Kontroller reglene for det konkrete oppdraget og få juridisk hjelp ved behov."
      },
      {
        "q": "Kan en mal erstatte juridisk rådgivning?",
        "a": "Nei. En mal hjelper deg å strukturere dokumentet, men avgjør ikke hvilke vilkår som passer avtalen. Jobbleders standardvilkår avventer uavhengig juridisk gjennomgang."
      }
    ],
    "sections": [
      {
        "heading": "Hvem inngår avtalen, og hva skal leveres?",
        "paragraphs": [
          "Start med partene, arbeidsstedet og en beskrivelse av oppdraget. Ta med avgrensninger: hvilke rom, flater eller leveranser gjelder arbeidet, og hva er uttrykkelig ikke inkludert?",
          "Et generelt ord som «oppussing» sier lite om hvem som skal rive, klargjøre eller rydde. En konkret beskrivelse gjør det lettere å kontrollere at begge har forstått samme leveranse."
        ]
      },
      {
        "heading": "Hvordan fordeles ansvar og materialer?",
        "paragraphs": [
          "Avklar hvem som bestiller og leverer materialer, hvilke forberedelser kunden skal gjøre, og hvilke forutsetninger utførelsen bygger på. Beskriv avtalte metoder eller kvaliteter når de er viktige for resultatet.",
          "Ved en sammensatt jobb kan flere arbeidsrader og en detaljbeskrivelse skille oppgavene. I Jobbleder kan beskrivelsen også inneholde avsnitt, overskrifter og lister i PDF-en."
        ]
      },
      {
        "heading": "Hva er avtalt om pris og betaling?",
        "paragraphs": [
          "Skill mellom fastpris, timepris og prisgrunnlag fra et tilbud. Angi hva beløpene gjelder og hvordan MVA er presentert. Ikke legg til grunn at et bestemt prosentpåslag eller en prisoverslagsregel gjelder for alle avtaler.",
          "Beskriv betalingsfrist og eventuell fremdriftsbasert plan med prosentvise delbetalinger. Avklar hva hver del gjelder. En slik plan avgjør ikke alene når det er adgang til å utstede faktura."
        ]
      },
      {
        "heading": "Når skal arbeidet utføres?",
        "paragraphs": [
          "Oppgi planlagt oppstart og skill en estimert ferdigstillelsesdato fra en avtalt frist. Forklar avhengigheter som materialleveranser, kundens avklaringer eller tilgang til arbeidsstedet.",
          "Avklar hvordan endringer og forsinkelser skal kommuniseres. Unngå at en forventet dato og en bindende kontraktsfrist brukes om hverandre."
        ]
      },
      {
        "heading": "Hvordan håndteres endringer og avslutning?",
        "paragraphs": [
          "Beskriv hvordan tilleggsarbeid, pris og endret fremdrift skal avklares. Ta vare på dokumentasjonen av det partene blir enige om. En oppdatert PDF er ikke i seg selv den andre partens godkjenning.",
          "Vilkår om mangler, reklamasjon, avbestilling, opphør og tvister må passe avtaleforholdet. Ikke kopier bestemte frister eller sanksjoner fra en annen type kontrakt uten å få dem vurdert."
        ]
      },
      {
        "heading": "Privatkunde og bedriftskunde er forskjellige utgangspunkt",
        "paragraphs": [
          "Forbrukerrådet anbefaler skriftlig kontrakt ved bruk av håndverker. Rådene om blant annet oppdrag, betaling og ansvar er nyttige ved forberedelsen, men dette er noe annet enn en fullstendig juridisk vurdering.",
          "Forbrukerregler kan ikke uten videre overføres til B2B. En avtalt reklamasjonsperiode på 24 måneder mellom virksomheter må ikke presenteres som en generell lovbestemt frist. Oppføring av ny bolig krever en egen vurdering; Jobbleder er ikke en dedikert nyboligkontraktsløsning."
        ],
        "links": [
          {
            "href": "https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/sjekkliste-handverker/",
            "label": "Les Forbrukerrådets sjekkliste for håndverksoppdrag"
          },
          {
            "href": "https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/misfornoyd-med-handverkeren/",
            "label": "Se informasjon om reklamasjon i forbrukerforhold"
          }
        ]
      },
      {
        "heading": "Kontroller hele dokumentet før bruk",
        "paragraphs": [
          "Se gjennom parter, beskrivelser, beløp, datoer, vilkår og vedlegg samlet. Dette er særlig viktig når opplysninger er hentet fra et tilbud eller kontrakten er redigert etter en tidligere PDF.",
          "Standardvilkårene i Jobbleder avventer uavhengig juridisk gjennomgang. Dokumentet er et grunnlag du må vurdere for oppdraget, ikke en juridisk godkjent mal klar til signering. Få juridisk veiledning ved behov."
        ],
        "links": [
          {
            "href": "/kontrakt-eksempel",
            "label": "Forstå oppbygningen av et kontraktsdokument"
          },
          {
            "href": "/kontrakt-handverker",
            "label": "Bruk sjekklisten i et praktisk håndverksoppdrag"
          },
          {
            "href": "/kontrakt-mal",
            "label": "Se hvordan Jobbleder strukturerer kontraktsopplysningene"
          }
        ]
      }
    ]
  }
]
