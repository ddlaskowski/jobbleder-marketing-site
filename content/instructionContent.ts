export type InstructionAction = {
  label: string
  href: string
}

export type InstructionItem = {
  slug: string
  title: string
  video?: string
  summary?: string
  steps?: string[]
  description?: string[]
  tip?: string
  warning?: string
  actions?: InstructionAction[]
}

export type InstructionSection = {
  id: string
  title: string
  intro?: string
  items: InstructionItem[]
}

export const instructionSections: InstructionSection[] = [
  {
    id: "oversikt",
    title: "Oversikt og navigasjon",
    intro:
      "Her får brukeren en enkel innføring i hvordan Jobbleder er bygget opp, og hvor de viktigste arbeidsflytene starter.",
    items: [
      {
        slug: "appens-hovedvisning",
        title: "Appens hovedvisning",
        //video: "oversikt-og-navigasjon.mp4",
        summary:
          "Dashboardet er hovedarbeidsplassen i Jobbleder og stedet der de fleste handlinger starter.",
        description: [
          "I Jobbleder er appen bygget rundt raske arbeidsflyter. Menyen ligger til venstre, mens innholdet du jobber med vises i hovedområdet.",
          "Fra dashboardet kan du gå videre til dokumenter, arbeidsøkter, prosjekter, kunder, rapporter, innstillinger og hjelpesystemet.",
        ],
        steps: [
          "Åpne dashboardet når du logger inn.",
          "Bruk hurtigvalg for å starte vanlige oppgaver.",
          "Bruk søk for å finne dokumenter, prosjekter og kunder raskt.",
          "Klikk deg videre til riktig arbeidsområde fra menyen.",
        ],
        tip: "Dashboardet er laget for at du skal komme raskt i gang uten å lete gjennom menyer.",
        actions: [
          { label: "Åpne appen", href: "https://app.jobbleder.no" },
          { label: "Logg inn", href: "https://app.jobbleder.no" },
        ],
      },
      {
        slug: "hovedmenyoversikt",
        title: "Hovedmenyoversikt",
        //video: "hovedmenyoversikt.mp4",
        summary:
          "Hovedmenyen gir deg tilgang til alle arbeidsområdene i Jobbleder.",
        steps: [
          "Bruk Opprett når du vil starte et nytt dokument.",
          "Bruk Dokumenter for å åpne, gjenta og generere PDF fra eksisterende dokumenter.",
          "Bruk Arbeidsøkter for å lagre dagsregistreringer og importere dem til timeliste.",
          "Bruk Prosjekter og Kunder for å organisere dokumenter og arbeid.",
          "Bruk Rapporter for å se salgs- og timeoversikter.",
          "Bruk Innstillinger for firmadata, standardverdier og Premium.",
        ],
        tip: "Når strukturen først er satt opp, blir resten av arbeidsflyten mye raskere.",
      },
    ],
  },
  {
    id: "opprett",
    title: "Opprett dokumenter",
    intro:
      "Opprett-seksjonen er kjernen i Jobbleder. Her lager du nye dokumenter manuelt, med riktig standardoppsett og klare arbeidsflyter.",
    items: [
      {
        slug: "opprett-faktura",
        title: "Opprett en faktura",
        summary:
          "Opprett en faktura manuelt ved å legge til kunde, detaljer og linjer.",
        steps: [
          'Velg "Faktura".',
          "Velg kunde (påkrevd).",
          "Velg prosjekt hvis du ønsker å knytte fakturaen til et prosjekt.",
          "Sett dato og forfallsdato.",
          "Legg til minst én linje med beskrivelse, pris, antall og MVA.",
          "Kontroller sammendraget til høyre.",
          "Klikk Lagre for å lagre dokumentet, eller Generer for å lagre og lage PDF med én gang.",
        ],
        tip: "Bruk standard MVA og betalingsdager fra Innstillinger for å spare tid.",
        actions: [
          { label: "Opprett faktura", href: "https://app.jobbleder.no" },
        ],
      },
      {
        slug: "opprett-timeliste",
        title: "Opprett en timeliste",
        summary:
          "Registrer arbeidsdager og timer for et prosjekt, og bygg opp timelisten rad for rad.",
        steps: [
          'Velg "Timeliste".',
          "Velg prosjekt (påkrevd).",
          "Skriv inn navn på arbeider.",
          "Legg eventuelt til kunde for bedre orden i dokumentasjonen.",
          "Legg til rader med dato, beskrivelse, inn, ut og pause.",
          "Marker betalt pause eller ekstraarbeid ved behov.",
          "Importer arbeidsøkter hvis du allerede har lagret dagene på forhånd.",
          "Kontroller sammendraget til høyre og lagre eller generer PDF.",
        ],
        tip: "Timeliste går raskest når prosjekt og standardtider allerede er satt opp på forhånd.",
        actions: [
          { label: "Opprett timeliste", href: "https://app.jobbleder.no" },
        ],
      },
      {
        slug: "opprett-tilbud",
        title: "Opprett et tilbud",
        summary:
          "Lag et tilbud før arbeidet starter og send et tydelig prisgrunnlag til kunden.",
        steps: [
          'Velg "Tilbud".',
          "Velg kunde.",
          "Velg eventuelt prosjekt.",
          "Sett dato og gyldighetstid.",
          "Legg inn linjer med beskrivelse, pris, antall og MVA.",
          "Kontroller sammendraget.",
          "Lagre dokumentet eller generer PDF.",
        ],
        tip: "Tilbud fungerer veldig likt faktura, men brukes før arbeidet er utført.",
        actions: [
          { label: "Opprett tilbud", href: "https://app.jobbleder.no" },
        ],
      },
      {
        slug: "opprett-kontrakt",
        title: "Opprett en kontrakt",
        summary:
          "Definer arbeid, pris og vilkår i en kontrakt før prosjektet starter.",
        steps: [
          'Velg "Kontrakt".',
          "Velg kunde (påkrevd).",
          "Fyll inn datoer for opprettelse, start og slutt.",
          "Legg til arbeidsbeskrivelse i egne rader.",
          "Velg prismodell: fastpris, timepris eller tilbud.",
          "Velg betalingsmåte og antall betalingsdager.",
          "Velg hvem som leverer materialer.",
          "Juster kontraktstekster hvis du vil endre standardklausulene.",
          "Lagre eller generer PDF.",
        ],
        tip: "Kontrakter blir mest ryddige når de er koblet til kunde og eventuelt prosjekt fra starten av.",
        actions: [
          { label: "Opprett kontrakt", href: "https://app.jobbleder.no" },
        ],
      },
      {
        slug: "opprett-kreditnota",
        title: "Opprett en kreditnota",
        summary:
          "Rett en faktura ved å opprette en kreditnota knyttet til originalfakturaen.",
        steps: [
          'Velg "Kreditnota".',
          "Velg kildefaktura.",
          "Sett dato.",
          "Kontroller innholdet.",
          "Lagre eller generer PDF.",
        ],
        warning:
          "Fakturaer kan ikke redigeres direkte. Bruk kreditnota når en faktura må korrigeres.",
        actions: [
          { label: "Opprett kreditnota", href: "https://app.jobbleder.no" },
        ],
      },
    ],
  },
  {
    id: "dokumenter",
    title: "Dokumenter og videre arbeid",
    intro:
      "Dokumentlisten er stedet der du jobber videre med dokumentene du allerede har opprettet.",
    items: [
      {
        slug: "dokumentoversikt",
        title: "Dokumentoversikt",
        summary:
          "Her kan du bla gjennom, filtrere og åpne alle dokumentene dine.",
        steps: [
          "Bruk søkefeltet for å finne dokumenter raskt.",
          "Filtrer etter type: faktura, timeliste, tilbud, kontrakt eller kreditnota.",
          "Klikk et dokument i listen for å se detaljer til høyre.",
          "Bruk forhåndsvisningen for å kontrollere innhold, sammendrag og relaterte dokumenter.",
        ],
        actions: [
          { label: "Åpne dokumenter", href: "https://app.jobbleder.no" },
        ],
      },
      {
        slug: "gjenta-et-dokument",
        title: "Gjenta et dokument",
        summary:
          "Opprett et nytt dokument basert på et eksisterende dokument, med nytt nummer automatisk.",
        steps: [
          "Åpne dokumentet du vil bruke på nytt.",
          'Klikk "Gjenta dokument".',
          "Kontroller innholdet i den nye kopien.",
          "Gjør endringer ved behov.",
          "Lagre eller generer PDF.",
        ],
        tip: "Dette er spesielt nyttig ved lignende oppdrag, faste kunder og gjentatte timelister.",
      },
      {
        slug: "lag-faktura-fra-dokument",
        title: "Opprett faktura fra dokument",
        summary:
          "Lag en faktura direkte fra timeliste, tilbud eller kontrakt når grunnlaget allerede finnes.",
        steps: [
          "Åpne timeliste, tilbud eller kontrakt.",
          'Klikk "Opprett faktura".',
          "Kontroller dataene som blir kopiert inn.",
          "Lagre eller generer PDF.",
        ],
        tip: "Dette sparer tid og gjør arbeidsflyten mer sammenhengende.",
      },
      {
        slug: "lag-kontrakt-fra-tilbud",
        title: "Opprett kontrakt fra tilbud",
        summary:
          "Bygg videre på et godkjent tilbud ved å lage kontrakt direkte fra tilbudet.",
        steps: [
          "Åpne tilbudet.",
          'Klikk "Opprett kontrakt".',
          "Kontroller vilkår, pris og arbeidsbeskrivelse.",
          "Lagre eller generer PDF.",
        ],
      },
      {
        slug: "rette-en-faktura",
        title: "Rette en faktura",
        summary:
          "Bruk riktig arbeidsflyt når en faktura må korrigeres.",
        steps: [
          "Opprett kreditnota for den opprinnelige fakturaen.",
          "Lag en ny korrigert faktura ved å opprette den på nytt.",
          "Kontroller innhold og tall.",
          "Generer ny PDF.",
        ],
        warning:
          "Fakturaer skal ikke redigeres direkte etter opprettelse. Bruk kreditnota og ny faktura.",
      },
    ],
  },
  {
    id: "arbeidsokter",
    title: "Arbeidsøkter",
    intro:
      "Arbeidsøkter gjør det enkelt å lagre daglig arbeid fortløpende og importere det til timeliste senere.",
    items: [
      {
        slug: "hvordan-arbeidsokter-fungerer",
        title: "Hvordan Arbeidsøkter fungerer",
        summary:
          "Lagre enkeltøkter og importer dem senere til en timeliste.",
        description: [
          "Arbeidsøkter er laget for situasjoner der du vil registrere arbeidsdagen raskt uten å lage en full timeliste med én gang.",
          "Hver arbeidsøkt fungerer som én fremtidig rad i en timeliste.",
        ],
        steps: [
          "Bruk Arbeidsøkter når du vil lagre dagens arbeid raskt.",
          "Bygg opp flere dager over tid.",
          "Velg én eller flere oppføringer senere.",
          "Importer dem til timeliste når du er klar.",
        ],
        tip: "Den beste vanen er å registrere arbeid daglig og importere til timeliste senere.",
        actions: [
          { label: "Åpne Arbeidsøkter", href: "https://app.jobbleder.no" },
        ],
      },
      {
        slug: "legg-til-en-arbeidsokt",
        title: "Legg til en arbeidsøkt",
        summary:
          "Registrer en dags arbeid som senere kan brukes i timeliste.",
        steps: [
          "Åpne Arbeidsøkter.",
          'Klikk "Legg til oppføring".',
          "Fyll inn dato, beskrivelse, inn, ut og pause.",
          "Marker betalt pause eller ekstraarbeid ved behov.",
          "Legg til KM hvis funksjonen er aktivert.",
          'Klikk "Lagre".',
        ],
        tip: "Arbeidsøkter er raskest når du bare vil få dagen registrert og ta resten senere.",
      },
      {
        slug: "importer-arbeidsokter-til-timeliste",
        title: "Importer arbeidsøkter til timeliste",
        summary:
          "Velg en eller flere arbeidsøkter og send dem direkte til timelisteoppretting.",
        steps: [
          "Åpne Arbeidsøkter.",
          "Velg én eller flere oppføringer.",
          'Klikk "Importer til timeliste".',
          "Kontroller de importerte radene i timelisten.",
          "Lagre eller generer PDF.",
        ],
        actions: [
          { label: "Åpne Arbeidsøkter", href: "https://app.jobbleder.no" },
          { label: "Opprett timeliste", href: "https://app.jobbleder.no" },
        ],
      },
    ],
  },
  {
    id: "prosjekter-kunder",
    title: "Prosjekter og kunder",
    intro:
      "Prosjekter og kunder gir struktur i Jobbleder og gjør det enklere å holde dokumenter, arbeidstid og historikk samlet.",
    items: [
      {
        slug: "hvordan-prosjekter-fungerer",
        title: "Hvordan Prosjekter fungerer",
        summary:
          "Prosjekter hjelper deg å organisere dokumenter, tid og arbeid for ett oppdrag.",
        steps: [
          "Bruk ett prosjekt per oppdrag eller jobb.",
          "Knytt timelister, tilbud, kontrakter og fakturaer til prosjektet.",
          "Sett standard arbeidstider hvis du vil forenkle timelisteoppretting.",
          "Bruk limit hours og deadline for å følge fremdriften.",
          "Se dokumentstatistikk og arbeidstimer samlet på prosjektnivå.",
        ],
        tip: "Et tydelig prosjektoppsett gjør resten av dokumentflyten mer ryddig.",
      },
      {
        slug: "opprett-et-prosjekt",
        title: "Opprett et prosjekt",
        summary:
          "Lag et nytt prosjekt for å samle dokumenter og arbeid i én struktur.",
        steps: [
          "Åpne Prosjekter.",
          'Klikk "Nytt prosjekt".',
          "Skriv inn prosjektnavn.",
          "Legg til adresse, arbeidstider, beskrivelse, deadline og timegrense ved behov.",
          'Klikk "Opprett prosjekt".',
        ],
        tip: "Bare prosjektnavn er påkrevd. Resten kan legges til senere.",
      },
      {
        slug: "hvordan-kunder-fungerer",
        title: "Hvordan Kunder fungerer",
        summary:
          "Kunder lagrer kundeopplysninger som kan brukes igjen i dokumentene dine.",
        steps: [
          "Opprett kunden én gang.",
          "Bruk kunden i faktura, tilbud og kontrakt.",
          "Se antall tilknyttede dokumenter direkte i kundekortet.",
          "Se relaterte prosjekter og siste dokumenter.",
        ],
        tip: "En ryddig kundeliste gjør oppretting av dokumenter mye raskere.",
      },
      {
        slug: "opprett-en-kunde",
        title: "Opprett en kunde",
        summary:
          "Legg inn kundeopplysninger for å bruke dem i senere dokumenter.",
        steps: [
          "Åpne Kunder.",
          'Klikk "Ny kunde".',
          "Fyll inn navn, adresse, postnummer og sted.",
          "Legg til e-post og MVA-nummer ved behov.",
          'Klikk "Opprett kunde".',
        ],
      },
    ],
  },
  {
    id: "rapporter",
    title: "Rapporter",
    intro:
      "Rapporter gir deg oversikt over salg, arbeidstimer, tilbud og prosjektutvikling basert på dokumentene i systemet.",
    items: [
      {
        slug: "hvordan-rapporter-fungerer",
        title: "Hvordan Rapporter fungerer",
        summary:
          "Rapporter hjelper deg å analysere salg, timer, tilbud og prosjektresultater.",
        steps: [
          "Bruk Monthly Sales for å se fakturaresultater for en valgt måned.",
          "Bruk Yearly Sales for å sammenligne måneder og totaler for et helt år.",
          "Bruk Monthly Work Hours og Yearly Work Hours for å analysere timer, ekstraarbeid og KM.",
          "Bruk Project Performance for å sammenligne prosjektverdi og tidsbruk.",
          "Bruk Offers for å følge tilbud og konvertering.",
        ],
        actions: [
          { label: "Åpne Rapporter", href: "https://app.jobbleder.no" },
        ],
      },
      {
        slug: "maanedlig-salg",
        title: "Månedlig salg",
        summary:
          "Se fakturatotaler og fakturaliste for valgt måned.",
        steps: [
          "Velg måned og år.",
          "Se antall fakturaer.",
          "Kontroller netto, MVA og brutto total.",
          "Gå videre til fakturalisten og åpne dokumenter ved behov.",
        ],
      },
      {
        slug: "maanedlige-arbeidstimer",
        title: "Månedlige arbeidstimer",
        summary:
          "Se timelistesummer for en valgt måned med oppdeling per arbeider og prosjekt.",
        steps: [
          "Velg riktig periode.",
          "Kontroller totalt antall timer.",
          "Sammenlign vanlige timer og ekstraarbeid.",
          "Se summer per arbeider og prosjekt.",
        ],
      },
    ],
  },
  {
    id: "innstillinger",
    title: "Innstillinger",
    intro:
      "I Innstillinger setter du opp firmaopplysninger, standardverdier og personlige preferanser slik at Jobbleder passer arbeidsmåten din.",
    items: [
      {
        slug: "hvordan-innstillinger-fungerer",
        title: "Hvordan Innstillinger fungerer",
        summary:
          "Innstillinger styrer firmadata, dokumentstandarder, språk, profil og premiumvalg.",
        steps: [
          "Fyll inn firmaopplysninger i Company & Billing.",
          "Sett standardverdier for faktura, tilbud, kontrakt og timeliste.",
          "Oppdater visningsnavn og språk i Profile & Interface.",
          "Bruk Premium & Branding for logo og premiumvalg.",
        ],
      },
      {
        slug: "firma-og-fakturadetaljer",
        title: "Firma og fakturadetaljer",
        summary:
          "Legg inn firmadata som brukes i fakturaer, tilbud, kontrakter og premiumbestilling.",
        steps: [
          "Fyll inn firmanavn, adresse, postnummer og poststed.",
          "Legg til kontonummer og MVA-nummer.",
          "Velg giro-innstilling hvis du bruker det.",
          "Lagre hvert felt med Lagre-knappen.",
        ],
        warning:
          "Hvis firmadata ikke er komplette, kan dokumentene mangle viktig fakturainformasjon.",
      },
      {
        slug: "standardverdier-for-dokumenter",
        title: "Standardverdier for dokumenter",
        summary:
          "Sett standardnummer og standardinnstillinger for nye dokumenter.",
        steps: [
          "Bruk Invoice Defaults for fakturanummer, MVA, betalingsdager, timepris og KM-pris.",
          "Bruk Offer Defaults for tilbudsnummer og gyldighet.",
          "Bruk Contract Defaults for kontraktsnummer, betalingsdager og materialvalg.",
          "Bruk Timelist Defaults for standard inn/ut, pause, betalt pause og KM.",
        ],
        tip: "Gode standardverdier gjør oppretting av dokumenter mye raskere i hverdagen.",
      },
      {
        slug: "profil-og-grensesnitt",
        title: "Profil og grensesnitt",
        summary:
          "Velg bransje, navn, språk og oppdater kontoinformasjon.",
        steps: [
          "Velg business type som passer virksomheten din.",
          "Sett worker/display name som skal brukes i timelister.",
          "Velg språk for grensesnittet: EN, NO eller PL.",
          "Oppdater e-post eller passord ved behov.",
        ],
      },
    ],
  },
  {
    id: "premium",
    title: "Premium og logo",
    intro:
      "Premium gir deg renere dokumenter og mulighet til å bruke egen logo i stedet for standardmerking.",
    items: [
      {
        slug: "premium-og-branding",
        title: "Premium og branding",
        summary:
          "Administrer premiumstatus, dokumentbruk, logo og bestilling av premium.",
        steps: [
          "Se premiumstatus og hvor lenge abonnementet varer.",
          "Kontroller dokumentbruk og dagens oppsett.",
          "Velg plan og bestill premiumfaktura ved behov.",
          "Åpne premiumfaktura når den er opprettet.",
        ],
      },
      {
        slug: "last-opp-logo",
        title: "Last opp eller bytt logo",
        summary:
          "Bruk din egen logo på dokumentene når Premium er aktivt.",
        steps: [
          "Åpne Premium & Branding i Innstillinger.",
          "Velg fil i logo-seksjonen.",
          'Klikk "Replace logo".',
          'Bruk "Remove logo" hvis du vil fjerne den.',
        ],
        warning: "Egen logo er bare tilgjengelig når Premium er aktivt.",
      },
      {
        slug: "kjop-premium",
        title: "Velg og bestill Premium",
        summary:
          "Velg plan, legg inn rabattkode og bestill premiumfaktura.",
        steps: [
          "Gå til Premium & Branding.",
          "Velg 1 måned, 6 måneder eller 12 måneder.",
          "Legg inn rabattkode hvis du har en.",
          "Klikk Order invoice.",
          "Åpne premiumfaktura når den er klar.",
        ],
        tip: "Sørg for at firma- og fakturadetaljer er fylt ut før du bestiller.",
        actions: [
          { label: "Prøv Jobbleder", href: "https://app.jobbleder.no" },
          { label: "Logg inn", href: "https://app.jobbleder.no" },
        ],
      },
    ],
  },
]