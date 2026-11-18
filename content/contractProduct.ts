import { seoPages } from "./seoPages"

export const contractSeoPage = seoPages.find(page => page.slug === "kontrakt-mal")!
export const contractFaqs = [
  ...contractSeoPage.faqs,
  { q: "Kan jeg bruke fastpris eller timepris?", a: "Ja. Velg Fast for en avtalt fastpris, Time for timepris eller Tilbud for pris med utgangspunkt i et eksisterende tilbud. Du legger inn og kontrollerer prisgrunnlaget selv." },
  { q: "Kan jeg opprette kontrakt fra et tilbud?", a: "Ja. Bruk tilbudet som grunnlag for en kontrakt, og rediger kontrakten videre som et selvstendig dokument. Du kan også opprette en kontrakt uten å starte med et tilbud." },
  { q: "Kan jeg endre kontraktsvilkårene?", a: "Ja. Tilpass arbeidsbeskrivelse, start- og sluttdato, materialansvar og betalingsfrist. Du kan bruke standardtekstene eller redigere de enkelte kontraktsseksjonene, inkludert tilleggsvilkår." },
  { q: "Kan jeg laste ned og signere kontrakten?", a: "Ja, du kan generere og laste ned kontrakten som PDF. Avtal manuell signering med kunden. Jobbleder støtter ikke elektronisk signering." },
  { q: "Kan jeg opprette faktura fra kontrakten?", a: "Ja. Opprett faktura med kontrakten som grunnlag, og kontroller linjer, datoer og beløp før du genererer dokumentet. Konverteringen er tilgjengelig i Free." },
  { q: "Hvilke betalingsvilkår kan jeg velge?", a: "Du kan velge faktura etter ferdigstillelse, forskuddsfaktura eller fakturering etter fremdrift. Du kan angi forskuddsprosent og legge inn prosenter og beskrivelser i en betalingsplan. Dette er vilkår du konfigurerer i kontrakten; du kontrollerer fakturagrunnlaget når du oppretter faktura." },
  { q: "Hva skiller Free fra Premium?", a: "Oppretting, redigering, pris- og betalingsvalg, PDF-eksport og dokumentkonvertering er med i Free. Free-PDF-er har Jobbleder-merking. Premium gir samme dokumentfunksjoner, men lar deg fjerne merkingen og bruke egen firmalogo." },
]

export const contractPricing = [
  { name: "Fast", title: "En avtalt fastpris", text: "Legg inn beløpet dere har avtalt for arbeidet." },
  { name: "Time", title: "Pris per time", text: "Oppgi timeprisen som skal stå i kontrakten." },
  { name: "Tilbud", title: "Tilbudet som prisgrunnlag", text: "Velg et eksisterende tilbud og bruk det som grunnlag for kontraktens pris." },
]
export const contractPayments = [
  { title: "Faktura etter ferdigstillelse", text: "Avtal at arbeidet faktureres når det er ferdig." },
  { title: "Forskuddsfaktura", text: "Velg forskudd som betalingsmåte og angi en forskuddsprosent." },
  { title: "Fakturering etter fremdrift", text: "Beskriv den avtalte betalingsordningen med prosenter og beskrivelser i en betalingsplan." },
]
