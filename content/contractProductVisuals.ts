import manifest from "./contractProductMedia.json"

type Asset = keyof typeof manifest.assets
type Visual = { asset: Asset; mobile?: Asset; alt: string; caption: string }

export const contractVisuals = {
  creation: {
    asset: "hero",
    alt: "Kontrakt for privatkunde i Jobbleder med kundetype, kunde, prosjekt og oppdragsnavn",
    caption: "B2C-kontrakt i Jobbleder med kunde, prosjekt, datoer og oppdragsnavn. Utsnitt fra desktopskjemaet.",
  },
  business: {
    asset: "b2b",
    alt: "B2B – Bedriftskunde valgt i Jobbleder med kunde og prosjekt",
    caption: "Velg kontraktstype for bedrift eller privatkunde og kontroller kundens opplysninger. Utsnitt fra desktopskjemaet.",
  },
  work: {
    asset: "work",
    alt: "Arbeidsrader for sparkling, sliping og maling, etterfulgt av utfyllende arbeidsbeskrivelse",
    caption: "Flere arbeidsrader og en valgfri utfyllende beskrivelse gir plass til materialer, metode og avgrensninger. Utsnitt fra desktopskjemaet.",
  },
  pricing: {
    asset: "pricing",
    alt: "Fastpris og MVA-valg med betalingsfrist og materialansvar i kontraktsskjemaet",
    caption: "Prisgrunnlag, betaling og materialansvar samlet i kontraktsskjemaet. Desktoputsnitt.",
  },
  payments: {
    asset: "payments",
    alt: "Fakturering etter fremdrift med betalingsfrist og tre betalingsrader på 33, 33 og 34 prosent",
    caption: "B2B-eksempel med 33 %, 33 % og 34 % knyttet til beskrevne arbeidstrinn. Betalingsplanen oppretter eller sender ikke fakturaer automatisk. Utsnitt fra desktopskjemaet.",
  },
  materials: {
    asset: "materials",
    alt: "Materialansvar med Entreprenør valgt, betalingsfrist og kontraktens tekstseksjoner",
    caption: "Materialansvar og vilkår i kontraktsskjemaet. Her er Entreprenør valgt. Desktoputsnitt.",
  },
  savedPrivate: {
    asset: "savedB2C",
    alt: "Lagret Kontrakt 15 med privatkunde, prosjekt, B2C-kontraktstype og arbeidsbeskrivelse",
    caption: "Kontrakt 15 i Dokumenter på desktop. Dette er en forhåndsvisning i appen, ikke en publisert kontrakts-PDF.",
  },
  savedBusiness: {
    asset: "savedB2B",
    alt: "Lagret Kontrakt 16 med bedriftskunde, prosjekt, B2B-kontraktstype og arbeidsrader",
    caption: "Kontrakt 16 i Dokumenter. Desktoputsnittet viser bedriftskunden og oppdragets innhold. Dette er en forhåndsvisning i appen.",
  },
  offerAction: {
    asset: "offerAction",
    alt: "Tilbud 30 i Dokumenter med kunde, arbeidsrader, summer og handlingen Opprett kontrakt",
    caption: "1. Åpne Tilbud 30 i Dokumenter og velg Opprett kontrakt. Utsnitt fra desktopvisningen.",
  },
  offerOverview: {
    asset: "offerAction",
    alt: "Tilbud 30 med arbeidsrader, summer og handlingen Opprett kontrakt under forhåndsvisningen",
    caption: "Tilbud 30 i Dokumenter, med arbeidsrader, summer og Opprett kontrakt. Utsnitt fra desktopvisningen.",
  },
  offer: {
    asset: "offer",
    alt: "Kontrakt 17 med kunde, arbeidsbeskrivelse og prisgrunnlag fra Tilbud 30 på 38 800 kroner",
    caption: "2. Kontroller kunde, arbeid og prisgrunnlag i kontrakten fra Tilbud 30. Utsnitt fra desktopskjemaet.",
  },
  invoice: {
    asset: "invoice", mobile: "invoiceMobile",
    alt: "Redigerbar faktura fra Kontrakt 16 med netto 96 000 kroner, 25 prosent MVA, MVA 24 000 kroner og totalt 120 000 kroner",
    caption: "Faktura fra Kontrakt 16. Linjer, beløp og MVA kan redigeres før dokumentet genereres.",
  },
} satisfies Record<string, Visual>

export type ContractVisual = keyof typeof contractVisuals

// Visuals support each route's existing editorial intent; approved copy stays intact.
export const contractEditorialVisuals: Record<string, Record<string, ContractVisual>> = {
  "kontrakt-eksempel": {
    "1. Partene i avtalen": "savedPrivate",
    "2. Arbeidsbeskrivelse": "work",
    "4. Pris og betaling": "payments",
  },
  "kontrakt-handverker": {
    "Fordel materialer, metoder og forberedelser": "work",
    "Avklar pris og betaling før oppstart": "payments",
    "Lag dokumentet og kontroller resultatet": "offer",
  },
  "hva-skal-en-kontrakt-inneholde": {
    "Hvem inngår avtalen, og hva skal leveres?": "creation",
    "Hvordan fordeles ansvar og materialer?": "materials",
  },
}
