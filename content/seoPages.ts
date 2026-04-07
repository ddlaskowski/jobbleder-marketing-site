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
      "Trenger du en enkel løsning for å føre timeliste for ansatte? Jobbleder gjør det lett å registrere arbeidstid og holde oversikt.",
    bullets: [
      "Enkel timeregistrering for ansatte",
      "Oversikt over arbeidstid og oppdrag",
      "Passer for små bedrifter",
      "Last ned som PDF ved behov",
    ],
    faqs: [
      {
        q: "Kan jeg bruke Jobbleder for ansatte?",
        a: "Ja, Jobbleder passer godt for små bedrifter som vil føre timer for ansatte.",
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
          "Når ansatte registrerer arbeidstid systematisk blir det enklere å holde oversikt over timer, oppdrag og ressursbruk.",
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
        heading: "Hvorfor er det viktig å lage et tydelig tilbud?",
        paragraphs: [
          "Et tydelig tilbud gjør det enklere for kunden å forstå hva som inngår i arbeidet og hva det vil koste.",
          "Det skaper også et mer profesjonelt inntrykk og reduserer risikoen for misforståelser senere.",
        ],
      },
      {
        heading: "Hvordan lage tilbud på en enkel måte",
        paragraphs: [
          "Den enkleste måten å lage tilbud på er å bruke en fast struktur med de viktigste feltene på plass.",
          "Da sparer du tid og sørger for at dokumentene dine ser ryddige og profesjonelle ut hver gang.",
        ],
      },
      {
        heading: "Fordeler med digital tilbudsløsning",
        paragraphs: [
          "En digital løsning gjør det lettere å opprette, lagre og laste ned tilbud når du trenger det.",
          "For små bedrifter betyr dette mindre manuelt arbeid og bedre oversikt i hverdagen.",
        ],
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
        heading: "Hvorfor bruke et tilbud eksempel?",
        paragraphs: [
          "Et eksempel gjør det lettere å forstå hvordan et godt tilbud bør bygges opp og hvilke opplysninger som er viktige.",
          "Dette er spesielt nyttig når du vil lage et ryddig dokument uten å starte helt fra bunnen.",
        ],
      },
      {
        heading: "Hva bør et godt tilbud eksempel vise?",
        paragraphs: [
          "Et godt tilbud eksempel bør vise tydelig beskrivelse av arbeid, pris, dato og eventuelle vilkår.",
          "Når strukturen er ryddig blir det enklere for kunden å forstå innholdet og ta en beslutning.",
        ],
      },
      {
        heading: "Fra eksempel til eget tilbud",
        paragraphs: [
          "Når du har sett et godt eksempel blir det lettere å bygge opp egne tilbud raskt og profesjonelt.",
          "Med Jobbleder kan du lage slike dokumenter direkte i nettleseren og laste dem ned som PDF.",
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
    description:
      "Se et enkelt faktura eksempel og lær hvordan en profesjonell faktura bør bygges opp for små bedrifter og håndverkere.",
    h1: "Faktura eksempel",
    intro:
      "Et faktura eksempel gjør det lettere å forstå hvordan en faktura bør se ut og hvilke opplysninger som bør være med.",
    bullets: [
      "Se hvordan en ryddig faktura kan bygges opp",
      "Perfekt for små bedrifter og håndverkere",
      "Bruk eksempelet som utgangspunkt for egne fakturaer",
      "Lag faktura digitalt og last ned som PDF",
    ],
    faqs: [
      {
        q: "Hva viser et faktura eksempel?",
        a: "Et faktura eksempel viser hvordan informasjon, priser og beskrivelser kan settes opp i en tydelig faktura.",
      },
      {
        q: "Kan jeg bruke eksempelet som mal?",
        a: "Ja, et eksempel kan være et nyttig utgangspunkt når du skal lage egne fakturaer.",
      },
      {
        q: "Kan jeg lage slike fakturaer i Jobbleder?",
        a: "Ja, Jobbleder gjør det enkelt å lage profesjonelle fakturaer i samme stil.",
      },
    ],
    sections: [
      {
        heading: "Hvorfor se på et faktura eksempel?",
        paragraphs: [
          "Et eksempel gjør det lettere å forstå hvordan en faktura bør bygges opp. Det er nyttig når du vil være sikker på at dokumentet ser profesjonelt ut.",
          "For mange små bedrifter er dette en enkel måte å komme i gang med bedre fakturarutiner.",
        ],
      },
      {
        heading: "Hva bør et godt faktura eksempel vise?",
        paragraphs: [
          "Et godt faktura eksempel bør vise tydelig struktur, kundeinformasjon, beskrivelse av arbeid eller varer, pris og totalbeløp.",
          "Jo ryddigere oppsettet er, desto enklere blir det for mottakeren å forstå hva fakturaen gjelder.",
        ],
      },
      {
        heading: "Fra eksempel til ferdig faktura",
        paragraphs: [
          "Når du har sett et godt eksempel blir det mye enklere å lage egne fakturaer. Med et fakturaprogram slipper du å bygge opp alt manuelt hver gang.",
          "Jobbleder lar deg opprette faktura raskt og få et profesjonelt resultat med en gang.",
        ],
      },
    ],
    topic: "faktura",
  },
  {
    slug: "faktura-krav",
    title: "Faktura krav – hva må en faktura inneholde?",
    description:
      "Lær hvilke opplysninger en faktura bør inneholde og hvordan du lager en ryddig faktura for kunder i Norge.",
    h1: "Faktura krav",
    intro:
      "Når du lager faktura er det viktig at dokumentet er tydelig og inneholder de nødvendige opplysningene. Da blir det enklere å holde orden og unngå misforståelser.",
    bullets: [
      "Få oversikt over hva en faktura bør inneholde",
      "Lag ryddige og profesjonelle fakturaer",
      "Passer for små bedrifter og håndverkere",
      "Bruk Jobbleder for å lage faktura enkelt",
    ],
    faqs: [
      {
        q: "Hva må en faktura inneholde?",
        a: "En faktura bør inneholde avsender, kundeinformasjon, beskrivelse av arbeid eller varer, dato og totalbeløp.",
      },
      {
        q: "Hvorfor er tydelige fakturakrav viktige?",
        a: "Tydelige opplysninger gjør det enklere å forstå fakturaen og reduserer risikoen for feil og spørsmål fra kunden.",
      },
      {
        q: "Kan Jobbleder hjelpe meg å lage ryddige fakturaer?",
        a: "Ja, Jobbleder gjør det enklere å sette opp faktura med en ryddig struktur.",
      },
    ],
    sections: [
      {
        heading: "Hvorfor er det viktig å kjenne til faktura krav?",
        paragraphs: [
          "Når du vet hvilke opplysninger som bør være med i fakturaen, blir dokumentet tydeligere og mer profesjonelt.",
          "Det gjør også hverdagen enklere når du sender fakturaer til kunder og vil unngå unødvendige spørsmål.",
        ],
      },
      {
        heading: "Vanlige opplysninger i en faktura",
        paragraphs: [
          "En faktura inneholder vanligvis informasjon om avsender, kunde, dato, beskrivelse av arbeid eller varer, pris og totalbeløp.",
          "Jo bedre struktur du har på dette, desto enklere blir både administrasjon og oppfølging.",
        ],
      },
      {
        heading: "Slik gjør et fakturaprogram jobben enklere",
        paragraphs: [
          "Når du bruker en digital løsning slipper du å huske hele oppsettet manuelt hver gang.",
          "Jobbleder hjelper deg å lage ryddige fakturaer raskt og effektivt i nettleseren.",
        ],
      },
    ],
    topic: "faktura",
  },
  {
    slug: "kontrakt-mal",
    title: "Kontrakt mal – enkel kontrakt for håndverkere (gratis)",
    topic: "kontrakt",
    isPillar: true,
    description:
      "Gratis kontrakt mal for håndverkere og små bedrifter. Lag kontrakt raskt og sikre avtalen med kunden.",
    h1: "Kontrakt mal (gratis)",
    intro:
      "Trenger du en enkel kontrakt mal? Med Jobbleder kan du opprette kontrakt raskt og bruke den som grunnlag for arbeid og faktura.",
    bullets: [
      "Gratis kontrakt mal for håndverkere",
      "Lag kontrakt på minutter",
      "Bruk tilbud som grunnlag",
      "Konverter kontrakt til faktura",
    ],
    faqs: [
      {
        q: "Hva er en kontrakt?",
        a: "En kontrakt er en avtale mellom deg og kunden som beskriver arbeid, pris og vilkår.",
      },
      {
        q: "Må jeg ha kontrakt som håndverker?",
        a: "Det anbefales sterkt for å unngå misforståelser og sikre tydelige avtaler.",
      },
      {
        q: "Kan jeg lage kontrakt gratis?",
        a: "Ja, du kan opprette kontrakt gratis i Jobbleder.",
      },
    ],
    ctaLabel: "Opprett kontrakt",
    sections: [
      {
        heading: "Hva er en kontrakt?",
        paragraphs: [
          "En kontrakt er en skriftlig avtale mellom deg og kunden som beskriver hva som skal leveres, til hvilken pris og på hvilke vilkår.",
          "For håndverkere er kontrakten et viktig dokument som skaper tydelighet før arbeidet starter.",
        ],
      },
      {
        heading: "Hvorfor bruke kontrakt?",
        paragraphs: [
          "En kontrakt reduserer risiko for misforståelser og gir begge parter trygghet.",
          "Den gjør det også enklere å følge opp arbeid, betaling og eventuelle endringer.",
        ],
      },
      {
        heading: "Hva bør en kontrakt inneholde?",
        paragraphs: [
          "En god kontrakt bør inneholde beskrivelse av arbeid, pris, tidsramme og vilkår.",
          "Jo tydeligere kontrakten er, desto enklere blir samarbeidet med kunden.",
        ],
      },
      {
        heading: "Fra tilbud til kontrakt",
        paragraphs: [
          "Når kunden godkjenner tilbudet, kan det gjøres om til en kontrakt.",
          "Dette sikrer at avtalen er tydelig før arbeidet starter.",
        ],
      },
    ],
  },
  {
    slug: "kontrakt-handverker",
    title: "Kontrakt håndverker – trygg avtale med kunde",
    topic: "kontrakt",
    description:
      "Lag kontrakt som håndverker og sikre tydelige avtaler med kunden. Enkel løsning for små bedrifter i Norge.",
    h1: "Kontrakt håndverker",
    intro:
      "Som håndverker er det viktig å ha en tydelig kontrakt med kunden. Det skaper trygghet og reduserer risiko for misforståelser.",
    bullets: [
      "Tydelig avtale med kunden",
      "Beskriv arbeid og pris",
      "Unngå misforståelser",
      "Bruk kontrakt som grunnlag for faktura",
    ],
    faqs: [
      {
        q: "Trenger håndverkere kontrakt?",
        a: "Ja, det anbefales for å sikre tydelige avtaler og unngå konflikter.",
      },
      {
        q: "Hva bør en kontrakt inneholde?",
        a: "Beskrivelse av arbeid, pris, tidsramme og vilkår.",
      },
      {
        q: "Kan jeg lage kontrakt digitalt?",
        a: "Ja, med Jobbleder kan du lage kontrakt raskt i nettleseren.",
      },
    ],
    ctaLabel: "Opprett kontrakt",
    sections: [
      {
        heading: "Hvorfor kontrakt er viktig for håndverkere",
        paragraphs: [
          "En kontrakt gjør det klart hva som er avtalt mellom deg og kunden før arbeidet starter.",
          "Dette reduserer risiko for uenigheter og gir et mer profesjonelt samarbeid.",
        ],
      },
      {
        heading: "Hva bør en håndverkerkontrakt inneholde?",
        paragraphs: [
          "Kontrakten bør beskrive arbeid, pris, fremdrift og eventuelle vilkår.",
          "Jo tydeligere avtalen er, desto enklere blir gjennomføringen av prosjektet.",
        ],
      },
      {
        heading: "Fra kontrakt til faktura",
        paragraphs: [
          "Når arbeidet er utført kan kontrakten brukes som grunnlag for faktura.",
          "Dette gjør prosessen mer strukturert og oversiktlig.",
        ],
      },
    ],
  },
  {
    slug: "kontrakt-eksempel",
    title: "Kontrakt eksempel – slik kan en avtale se ut",
    topic: "kontrakt",
    description:
      "Se kontrakt eksempel og lær hvordan en tydelig avtale kan bygges opp for håndverkere og små bedrifter.",
    h1: "Kontrakt eksempel",
    intro:
      "Et kontrakt eksempel gjør det enklere å forstå hvordan en avtale bør settes opp og hvilke opplysninger som er viktige.",
    bullets: [
      "Se struktur på en kontrakt",
      "Lær hva som bør være med",
      "Bruk som inspirasjon",
      "Lag kontrakt digitalt",
    ],
    faqs: [
      {
        q: "Hva viser et kontrakt eksempel?",
        a: "Det viser hvordan arbeid, pris og vilkår kan settes opp i et dokument.",
      },
      {
        q: "Kan jeg bruke et eksempel som mal?",
        a: "Ja, det er et godt utgangspunkt.",
      },
      {
        q: "Kan jeg lage kontrakt i Jobbleder?",
        a: "Ja, enkelt direkte i nettleseren.",
      },
    ],
    ctaLabel: "Lag kontrakt",
    sections: [
      {
        heading: "Hvordan ser en god kontrakt ut?",
        paragraphs: [
          "En god kontrakt er tydelig strukturert og lett å forstå.",
          "Den bør gi en klar oversikt over hva som er avtalt.",
        ],
      },
      {
        heading: "Hva kan du lære av et eksempel?",
        paragraphs: [
          "Et eksempel gjør det enklere å lage egne kontrakter raskt.",
          "Du slipper å starte fra blankt ark.",
        ],
      },
    ],
  },
  {
    slug: "hva-skal-en-kontrakt-inneholde",
    title: "Hva skal en kontrakt inneholde?",
    topic: "kontrakt",
    description:
      "Se hva en kontrakt bør inneholde og hvordan du lager en tydelig avtale med kunden.",
    h1: "Hva skal en kontrakt inneholde?",
    intro:
      "En god kontrakt gjør det enkelt å forstå hva som er avtalt mellom deg og kunden.",
    bullets: [
      "Beskrivelse av arbeid",
      "Pris og betaling",
      "Tidsramme",
      "Vilkår",
    ],
    faqs: [
      {
        q: "Hva er viktig i en kontrakt?",
        a: "Tydelig beskrivelse av arbeid, pris og vilkår.",
      },
      {
        q: "Hvorfor er kontrakt viktig?",
        a: "For å unngå misforståelser.",
      },
    ],
    ctaLabel: "Opprett kontrakt",
    sections: [
      {
        heading: "De viktigste elementene",
        paragraphs: [
          "En kontrakt bør inneholde arbeid, pris og vilkår.",
          "Dette gir en tydelig avtale.",
        ],
      },
      {
        heading: "Hvorfor tydelig struktur er viktig",
        paragraphs: [
          "Jo tydeligere kontrakten er, desto enklere blir samarbeidet.",
          "Det gir trygghet for begge parter.",
        ],
      },
    ],
  }
]