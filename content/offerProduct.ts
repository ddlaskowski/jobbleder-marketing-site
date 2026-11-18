import { seoPages } from "./seoPages"

export const offerSeoPage = seoPages.find(page => page.slug === "tilbud-mal")!
export const offerFaqs = [
  ...offerSeoPage.faqs.filter(faq => faq.q !== "Kan jeg lage faktura fra tilbudet?"),
  { q: "Kan jeg lage faktura fra tilbudet?", a: "Ja. Opprett en faktura direkte fra tilbudet og bruk opplysningene videre uten å legge dem inn på nytt. Kontroller fakturaen før du genererer og laster ned dokumentet." },
  { q: "Kan jeg laste ned tilbudet som PDF?", a: "Ja. Lag tilbudet i Jobbleder og last det ned som PDF. Du sørger selv for å dele dokumentet med kunden. Eksemplet på denne siden er et utfylt tilbud, ikke en tom PDF-mal." },
  { q: "Kan jeg lage en kontrakt fra tilbudet?", a: "Ja. Opprett en kontrakt fra tilbudet og rediger kontrakten videre som et selvstendig dokument. Kontrakten kan lastes ned og signeres manuelt. Jobbleder støtter ikke elektronisk signering." },
  { q: "Kan jeg lage faktura fra kontrakten?", a: "Ja. Du kan opprette faktura direkte fra en kontrakt. Du kan også gå rett fra tilbud til faktura uten å opprette kontrakt først. Begge arbeidsflytene er tilgjengelige i Free." },
  { q: "Hva er forskjellen på Free og Premium?", a: "Free inkluderer tilbud, PDF-eksport, kunder, prosjekter og dokumentkonvertering. Dokumentene har Jobbleder-merking. Premium har samme dokumentfunksjoner, men lar deg fjerne Jobbleder-merkingen og bruke egen firmalogo i PDF-ene." },
]
