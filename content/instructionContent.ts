export type InstructionItem = {
  slug: string
  title: string
  video: string
  description: string[]
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
      "Her finner du de viktigste funksjonene i Jobbleder og hvordan du navigerer i appen.",
    items: [
      {
        slug: "appens-hovedvisning",
        title: "Appens hovedvisning",
        video: "timeline.mp4",
        description: [
          "Hovedvisningen gjør det enkelt å navigere i dokumentopprettingsprosessen. Menyen ligger til venstre, mens dokumentene vises til høyre som kalender eller liste.",
          "Du kan filtrere dokumentene etter type, for eksempel timeliste, tilbud og faktura.",
          "Når du klikker én gang på et dokument, vises det i forhåndsvisningen. Klikker du på nytt, åpnes dokumentet i full visning med flere alternativer som PDF, redigering, kopiering og andre funksjoner."
        ],
      },
      {
        slug: "hovedmenyoversikt",
        title: "Hovedmenyoversikt",
        video: "menu.mp4",
        description: [
          "Søk lar deg finne kunder, prosjekter og dokumenter raskt.",
          "Husk timer brukes til å registrere arbeidsdager som kan importeres til timelisten senere.",
          "Nytt dokument lar deg opprette timeliste, tilbud eller faktura.",
          "Prosjekter og kunder gir deg oversikt over aktive oppføringer, mens innstillinger åpner oppsettet for kontoen. Du kan også logge ut fra menyen."
        ],
      },
      {
        slug: "nytt-dokument",
        title: "Lag et nytt dokument",
        video: "new_document.mp4",
        description: [
          "For å opprette et nytt dokument velger du «Nytt dokument» i menyen. Der kan du velge mellom timeliste, tilbud og faktura.",
          "Topplinjen viser dokumenttype og nummer, og inneholder knapper for å minimere, lukke eller bytte mellom veiviser og dokumentvisning.",
          "Du kan ha opptil tre dokumenter åpne samtidig: én timeliste, ett tilbud og én faktura."
        ],
      },
    ],
  },
  {
    id: "faktura",
    title: "Faktura",
    intro:
      "Lær hvordan du oppretter faktura og hvordan du bruker eksisterende dokumenter som grunnlag for fakturering.",
    items: [
      {
        slug: "ny-faktura",
        title: "Ny faktura",
        video: "faktura.mp4",
        description: [
          "For å opprette en ny faktura velger du «Nytt dokument → Faktura» i menyen.",
          "Veiviseren leder deg gjennom fem trinn: kundedata, prosjektinformasjon, datoer, dokumentlinjer og forhåndsvisning før lagring."
        ],
      },
      {
        slug: "faktura-fra-tilbud",
        title: "Faktura fra tilbud",
        video: "tilbud_to_faktura.mp4",
        description: [
          "Du kan enkelt opprette en faktura basert på et tilbud. Åpne tilbudet og velg fakturaalternativet i dokumentmenyen.",
          "Feltene og linjene fra tilbudet blir automatisk overført til fakturaen, slik at du sparer tid og unngår dobbeltarbeid."
        ],
      },
      {
        slug: "faktura-fra-timeliste",
        title: "Faktura fra timeliste",
        video: "timelist_to_faktura.mp4",
        description: [
          "Du kan også opprette en faktura basert på en timeliste. Åpne timelisten og velg fakturaalternativet i dokumentmenyen.",
          "Systemet legger automatisk til en dokumentlinje som beregner arbeidstiden ut fra timelisten og timeprisen som er lagret i innstillingene."
        ],
      },
    ],
  },
  {
    id: "tilbud",
    title: "Tilbud",
    intro:
      "Her ser du hvordan du oppretter og bruker tilbud i Jobbleder.",
    items: [
      {
        slug: "nytt-tilbud",
        title: "Nytt tilbud",
        video: "tilbud.mp4",
        description: [
          "For å opprette et nytt tilbud velger du «Nytt dokument → Tilbud» i menyen.",
          "Veiviseren leder deg gjennom fem trinn: kundedata, prosjektinformasjon, datoer, dokumentlinjer og forhåndsvisning før lagring."
        ],
      },
    ],
  },
  {
    id: "timeliste",
    title: "Timeliste",
    intro:
      "Registrer arbeidstid, importer lagrede dager og bruk timelisten som grunnlag for videre dokumentarbeid.",
    items: [
      {
        slug: "ny-timeliste",
        title: "Ny timeliste",
        video: "timelist.mp4",
        description: [
          "For å opprette en ny timeliste velger du «Nytt dokument → Timeliste» i menyen.",
          "Veiviseren leder deg gjennom fem trinn: kundedata, prosjektinformasjon, ansattnavn, dokumentlinjer og forhåndsvisning før lagring."
        ],
      },
      {
        slug: "importer-dager-til-timeliste",
        title: "Importer dager til timeliste",
        video: "add_day_to_timelist.mp4",
        description: [
          "Hvis du tidligere har lagret arbeidsdager i «Husk timer», kan disse importeres direkte til en ny timeliste.",
          "Importvinduet vises automatisk i veiviseren. Velg dagene du vil ta med og bekreft for å legge dem til dokumentet."
        ],
      },
    ],
  },
  {
    id: "husk-timer",
    title: "Husk timer",
    intro:
      "Denne funksjonen hjelper deg med å lagre arbeidsdager fortløpende, slik at de senere kan brukes i timelisten.",
    items: [
      {
        slug: "hvordan-huske-timer",
        title: "Hvordan bruke Husk timer",
        video: "add_day.mp4",
        description: [
          "Ved systematisk bruk gjør «Husk timer» det enklere å registrere arbeidsdager fortløpende.",
          "For å lagre en dag velger du «Husk timer» i menyen og fyller inn dato, arbeidstid, pause og en kort beskrivelse av arbeidet.",
          "Når dagen er lagret, kan den senere importeres direkte til en timeliste."
        ],
      },
    ],
  },
]