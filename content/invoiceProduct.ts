export const invoiceProduct = {
  appUrl: "https://app.jobbleder.no/",
  eyebrow: "FAKTURAPROGRAM FOR SMÅ BEDRIFTER",
  headline: ["Gratis fakturaprogram.", "Ubegrenset fakturering."],
  intro: "Opprett fakturaer med kundedetaljer, MVA og betalingsinformasjon. Lag så mange fakturaer du trenger – helt gratis.",
  registrationHelp: "Appen åpnes med innlogging. Velg «Create account» for å registrere deg.",
  watermarkNote: "Gratis PDF-er inneholder et Jobbleder-vannmerke.",
  values: [
    { title: "Gratis", description: "Gratis fakturaprogram" },
    { title: "Ubegrenset", description: "Ubegrenset antall fakturaer" },
    { title: "PDF", description: "PDF-dokumenter" },
    { title: "NO / PL / EN", description: "Grensesnitt på norsk, polsk og engelsk" },
  ],
  steps: [
    { title: "Legg inn bedriftsinformasjon.", description: "Fyll inn opplysningene om bedriften som skal stå på fakturaen.", media: "Bedriftsinformasjon" },
    { title: "Velg kunde og legg til arbeid.", description: "Legg inn kundedetaljer og beskriv arbeidet. Fyll inn pris, antall og MVA.", media: "Kunde og fakturalinjer" },
    { title: "Opprett og last ned faktura som PDF.", description: "Kontroller opplysningene, opprett fakturaen og last ned PDF-dokumentet.", media: "Oppretting og PDF" },
  ],
  invoiceFields: ["Bedrifts- og kundedetaljer", "Arbeidsbeskrivelse, pris og antall", "MVA", "Dato, forfallsdato og betalingsinformasjon"],
  workflows: [
    { title: "Tilbud", href: "/tilbud-mal", description: "Bruk et eksisterende tilbud som grunnlag for en faktura. Se gjennom informasjonen som overføres før du oppretter fakturaen." },
    { title: "Timeliste", href: "/timeliste-mal", description: "Bruk en timeliste som grunnlag for fakturaen. Kontroller opplysningene som overføres, og gjør nødvendige tilpasninger." },
    { title: "Kontrakt", href: "/kontrakt-mal", description: "Opprett en faktura med utgangspunkt i en kontrakt. Gå gjennom grunnlaget før du oppretter fakturaen." },
  ],
  comparison: [
    { feature: "Antall fakturaer", free: "Ubegrenset", premium: "Ubegrenset" },
    { feature: "Utseende på PDF", free: "Jobbleder-vannmerke", premium: "Egen firmalogo eller uten grafisk profil" },
  ],
  faqs: [
    { q: "Er Jobbleder virkelig gratis?", a: "Ja. Du kan opprette et ubegrenset antall fakturaer gratis. PDF-er fra gratisversjonen inneholder et Jobbleder-vannmerke." },
    { q: "Hvor mange fakturaer kan jeg lage gratis?", a: "Du kan lage så mange fakturaer du trenger. Gratisversjonen har ubegrenset fakturering." },
    { q: "Har gratisversjonen vannmerke?", a: "Ja. Genererte PDF-er i gratisversjonen inneholder et Jobbleder-vannmerke." },
    { q: "Kan jeg laste ned faktura som PDF?", a: "Ja. Du kan opprette en faktura og laste den ned som PDF i Jobbleder." },
    { q: "Kan jeg legge til MVA?", a: "Ja. Du kan legge inn MVA på fakturalinjene sammen med beskrivelse, pris og antall." },
    { q: "Må jeg registrere en konto?", a: "Ja. Opprett en konto for å komme i gang. Appen åpnes med innlogging; velg «Create account» for å registrere deg." },
    { q: "Hva er forskjellen mellom Free og Premium?", a: "Begge har ubegrenset fakturering. Free gir PDF-er med Jobbleder-vannmerke. Med Premium velger du enten egen firmalogo eller PDF uten grafisk profil og vannmerke. Dette er alternative utseendevalg." },
    { q: "Kan jeg lage faktura fra et tilbud?", a: "Ja. Du kan bruke et tilbud som grunnlag for en faktura. Kontroller informasjonen som overføres før du oppretter fakturaen." },
  ],
} as const
