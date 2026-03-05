export type FAQItem = { q: string; a: string }

export type SEOPage = {
  slug: string
  title: string
  description: string
  h1: string
  intro: string
  bullets: string[]
  faqs: FAQItem[]
  ctaLabel?: string
}

export const seoPages: SEOPage[] = [
  {
    slug: "timeliste-mal",
    title: "Timeliste mal – gratis og enkel timeliste (PDF / nett)",
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
  },

  {
    slug: "tilbud-mal",
    title: "Tilbud mal – skriv et profesjonelt tilbud (gratis)",
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
  },

  {
    slug: "fakturaprogram-gratis",
    title: "Fakturaprogram gratis – lag faktura enkelt i Norge",
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
    }
]