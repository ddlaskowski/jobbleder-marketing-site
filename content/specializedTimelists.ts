export const specializedTimelists = {
  "timeliste-mal-pdf": {
    kind: "pdf", eyebrow: "GRATIS MAL · UTEN INNLOGGING",
    intro: "Last ned en timeliste du kan fylle ut selv. Velg en tom PDF-mal eller en mal med datoer for de siste sju dagene. Begge kan brukes uten konto i Jobbleder.",
    storyTitle: "En tom mal og et ferdig dokument er to ulike ting.",
    story: "PDF-malene ovenfor er laget for manuell utfylling. Bildet viser derimot et dokument som allerede er fylt ut i Jobbleder, med navn, prosjekt, arbeidsdag og en oppsummering av timene.",
    guideTitle: "Velg PDF når du trenger et enkelt skjema.",
    sections: [
      { title: "Velg riktig mal", text: "Den tomme malen passer når du vil velge datoene selv. Siste-sju-dager-malen har datoer ferdig fylt inn; den er ikke nødvendigvis en bestemt kalenderuke." },
      { title: "Fyll inn og summer", text: "Skriv navn, prosjekt, uke og år. Før dato, inn- og uttid, pause og en kort arbeidsbeskrivelse. Summer timene og kontroller opplysningene før du deler dokumentet." },
      { title: "Når du fører timer ofte", text: "Du kan i stedet registrere arbeidsdagene i nettleseren og velge hvilke registreringer du vil bruke i en timeliste. Kontroller dokumentet før du lager PDF eller bruker det videre til faktura." },
    ],
    help: "/blogg/gratis-timeliste-mal", helpLabel: "Les veiledningen til gratis PDF-maler",
    nextTitle: "Fra PDF-mal til digital timeliste", nextText: "Start med en gratis PDF-mal for manuell utfylling, eller registrer arbeidet digitalt i Jobbleder når du vil samle og gjenbruke arbeidsdagene.",
    ctaLabel: "Prøv digital timeliste",
    planText: "Lag digitale timelister og konverter dem til faktura i Free. PDF-ene har Jobbleder-vannmerke. Med Premium kan du fjerne vannmerket og bruke egen firmalogo.",
    nextHref: "/timeliste-mal#registrer-pa-mobil", nextLabel: "Se digital timeregistrering",
  },
  "timeliste-uke": {
    kind: "week", eyebrow: "ARBEIDSDAGENE SAMLET",
    intro: "Samle datoer, arbeidstid og oppgaver for uken du vil dokumentere. Skriv inn uke og år, arbeidernavn og prosjekt, og kontroller dagene før du lager en PDF.",
    storyTitle: "Tre arbeidsdager i uke 47.",
    story: "Eksemplet gjelder Demo på prosjektet Renovering av leilighet, 16.–18. november 2026. Det er tre registrerte dager, ikke en komplett femdagersuke. Dokumentet viser 7:30 vanlige timer og 12:30 ekstra timer hver for seg.",
    guideTitle: "En ukentlig kontroll som er lett å følge.",
    sections: [
      { title: "Identifiser uken", text: "Oppgi ukenummer og år sammen med arbeidernavnet og prosjektet. Kontroller datoene i hver rad, særlig når uken går over et månedsskifte." },
      { title: "Før arbeidsdagene", text: "Noter start og slutt, pause og hva som ble gjort. I eksemplet er 08:00–16:00 med 30 minutters pause ført som 7:30 timer. Ekstraarbeid markeres av brukeren; dette er ikke automatisk overtidsberegning." },
      { title: "Velg, importer og kontroller", text: "Du kan velge lagrede registreringer og bruke Importer til timeliste. Sjekk datoer, pauser, beskrivelser og summer i timelisten før du lagrer eller genererer PDF. Du kan også legge inn dagene direkte." },
    ],
    help: "/instruksjoner#importer-arbeidsokter-til-timeliste", helpLabel: "Slik importerer du registreringene",
    nextTitle: "Samle ukens arbeidstimer i én timeliste", nextText: "Velg de lagrede dagsregistreringene du vil ta med, importer dem til timelisten og kontroller datoer, pauser og timer før du lager dokumentet.",
    ctaLabel: "Opprett ukentlig timeliste",
    planText: "Opprett ukens timeliste og bruk den videre til faktura i Free. Free-PDF-er inneholder Jobbleder-vannmerke; Premium fjerner det og lar deg legge til firmalogo.",
    nextHref: "/timeliste-mal", nextLabel: "Se hvordan digital timeliste fungerer",
  },
  "timeliste-ansatt": {
    kind: "worker", eyebrow: "TIMER KNYTTET TIL ET NAVN",
    intro: "Dokumenter arbeidstiden til en navngitt arbeider. I Jobbleder skriver du inn navnet når du oppretter timelisten, og fører arbeidsdagene på dette navnet.",
    storyTitle: "Arbeider-feltet forteller hvem timene gjelder.",
    story: "I dette mobileksemplet står Demo i Arbeider-feltet. Timeliste 265 har tre importerte registreringer, et valgt prosjekt og en tilknyttet kunde. Navnet er en opplysning i dokumentet, ikke en egen ansattkonto.",
    guideTitle: "Et tydelig grunnlag for intern gjennomgang.",
    sections: [
      { title: "Skriv navn og prosjekt", text: "Bruk et tydelig arbeidernavn og riktig prosjekt. Ta med uke og år i dokumentasjonen når timelisten gjelder en bestemt uke. Da blir det enklere å skille dokumentene fra hverandre." },
      { title: "Beskriv arbeidet", text: "Før dato, inn- og uttid, pause og en konkret beskrivelse av oppgaven. Se over dagene sammen med den det gjelder, og rett eventuelle feil før dokumentet brukes videre." },
      { title: "Kontroller før du deler", text: "Sjekk at timene gjelder riktig person, at pausene er ført riktig og at oppgavene er forståelige. Eksporter en PDF når dokumentet er klart. Timelisten er arbeidsdokumentasjon; den er ikke en lønnsberegning." },
    ],
    help: "/instruksjoner#opprett-timeliste", helpLabel: "Se feltene ved oppretting av timeliste",
    nextTitle: "Lag timeliste med riktig arbeidernavn", nextText: "Skriv inn arbeidernavnet når du oppretter timelisten, slik at det fremgår hvem timene i dokumentet gjelder. Kontroller navnet og arbeidsradene før du lager PDF-en.",
    ctaLabel: "Opprett timeliste",
    planText: "Timelister med arbeidernavn og konvertering til faktura er med i Free. Dokumentene får Jobbleder-vannmerke. Premium gir PDF uten vannmerket og med din firmalogo.",
    nextHref: "/timeliste-mal", nextLabel: "Se timelisteverktøyet",
  },
  "timeliste-prosjekt": {
    kind: "project", eyebrow: "FRA UTFØRT ARBEID TIL FAKTURAGRUNNLAG",
    intro: "Samle arbeidsdagene under prosjektet de gjelder. Tydelige beskrivelser og en kontrollert timeliste gjør det enklere å dokumentere oppdraget og bruke timene som fakturagrunnlag.",
    storyTitle: "Prosjektet gjør dokumentet gjenkjennelig.",
    story: "Dette eksemplet gjelder Renovering av leilighet. Demo har ført Legging av parkett den 18. november, fra 07:00 til 16:00 med én times pause. Dokumentet viser totalt åtte timer. Det er ett prosjekt og én arbeidsdag, ikke en samlet prosjektanalyse.",
    guideTitle: "Registreringer → Timeliste → Faktura",
    sections: [
      { title: "Registrer arbeidet", text: "Før timer, pause og en beskrivelse som sier hva som ble gjort. «Legging av parkett» gir mer nyttig dokumentasjon enn bare «arbeid». Ta med kilometer og marker ekstraarbeid når det gjelder registreringen." },
      { title: "Samle riktig grunnlag", text: "Velg lagrede registreringer og importer dem til timelisten. Velg riktig prosjekt, skriv arbeidernavnet og knytt til kunde ved behov. Kontroller at alle radene hører til oppdraget du skal dokumentere." },
      { title: "Kontroller før fakturering", text: "Gå gjennom timelisten før du lager PDF eller oppretter faktura fra den. Vanlige timer, ekstra timer, vanlige kilometer og ekstra kilometer holdes hver for seg. Kontroller også satser, linjer og kunde i fakturaen før du sender den selv." },
    ],
    help: "/instruksjoner#timeliste-til-faktura", helpLabel: "Slik lager du faktura fra en timeliste",
    nextTitle: "Bruk prosjektets timer som fakturagrunnlag", nextText: "Samle valgte registreringer i en timeliste for prosjektet. Gå gjennom dokumentet før du bruker det som grunnlag for en faktura.",
    ctaLabel: "Opprett prosjektets timeliste",
    planText: "Lag prosjektets timeliste og opprett faktura fra den i Free. Free-eksporten har Jobbleder-vannmerke. Med Premium kan du fjerne merkingen og bruke egen firmalogo.",
    nextHref: "/fakturaprogram-gratis", nextLabel: "Les om faktura i Jobbleder",
  },
} as const

export type SpecializedTimelistSlug = keyof typeof specializedTimelists
export function isSpecializedTimelist(slug: string): slug is SpecializedTimelistSlug {
  return Object.hasOwn(specializedTimelists, slug)
}
