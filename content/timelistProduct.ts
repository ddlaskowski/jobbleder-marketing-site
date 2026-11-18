import { seoPages } from "./seoPages"

// Keep the existing search content, download destinations and FAQ topics authoritative.
export const timelistSeoPage = seoPages.find(page => page.slug === "timeliste-mal")!
export const timelistFaqs = [
  ...timelistSeoPage.faqs,
  { q: "Kan jeg lage faktura fra en timeliste?", a: "Ja. Du kan bruke timelisten som grunnlag for en faktura. Vanlige timer, ekstra timer, vanlige kilometer og ekstra kilometer overføres til separate fakturalinjer. Kontroller opplysningene før du oppretter fakturaen." },
  { q: "Kan jeg føre vanlige timer og ekstra timer hver for seg?", a: "Ja. Du kan markere ekstraarbeid i registreringene og i timelisten. Vanlige timer og ekstra timer holdes adskilt. Dette er ikke automatisk beregning av overtid." },
  { q: "Kan jeg ta med kilometer?", a: "Ja. Du kan registrere vanlige kilometer og ekstra kilometer. Kategoriene holdes adskilt når du lager faktura fra timelisten." },
  { q: "Kan jeg lage timeliste uten å importere registreringer?", a: "Ja. Du kan opprette en timeliste direkte og legge inn arbeidsdagene selv. Velg prosjekt, knytt til kunde ved behov og skriv inn navnet på arbeideren." },
  { q: "Hvilke timelistefunksjoner er med i Free?", a: "Arbeidsregistreringer, manuell oppretting, import til timeliste, timer og kilometer, PDF-eksport og konvertering til faktura er tilgjengelig i Free. Free-dokumenter har Jobbleder-merking. Med Premium kan du fjerne Jobbleder-merkingen og bruke egen firmalogo." },
]

export const timelistCategories = [
  { name: "Vanlige timer", amount: "8,5 timer", detail: "Arbeidstimene på de vanlige radene i eksemplet." },
  { name: "Ekstra timer", amount: "10 timer", detail: "Timer fra rader som er markert som ekstraarbeid." },
  { name: "Vanlige kilometer", amount: "35 km", detail: "Kilometer registrert på de vanlige radene." },
  { name: "Ekstra kilometer", amount: "75 km", detail: "Kilometer fra rader som er markert som ekstraarbeid." },
]

export const timelistInvoiceExample = [
  { category: "Vanlige timer", quantity: "8,5", rate: "900,00", net: "7 650,00" },
  { category: "Vanlige kilometer", quantity: "35", rate: "12,00", net: "420,00" },
  { category: "Ekstra timer", quantity: "10", rate: "1 350,00", net: "13 500,00" },
  { category: "Ekstra kilometer", quantity: "75", rate: "15,00", net: "1 125,00" },
]
