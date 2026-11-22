import type { InstructionItem } from "./instructionContent"
import type { ContractVisual } from "./contractProductVisuals"
import media from "./instructionMedia.json"
import mobileMedia from "./instructionMobileMedia.json"

export type InstructionMedia = { asset: keyof typeof media.assets | keyof typeof mobileMedia.assets; mobile?: keyof typeof media.assets; alt: string; caption: string; document?: boolean }
export type MobileExample = { title: string; description: string; images: InstructionMedia[] }
export type GuideStep = { title: string; text: string; optional?: boolean; media?: InstructionMedia; mobileExample?: MobileExample; contractVisual?: ContractVisual }
export type GuidePart = { id?: string; title?: string; intro?: string; steps: GuideStep[]; note?: string }
export type InstructionGuide = { title?: string; summary: string; before?: string; parts: GuidePart[]; note?: string; links?: { href: string; label: string }[] }

// These ten existing cards are the scoped Phase 5.2A content refresh.
export const instructionGuides: Partial<Record<string, InstructionGuide>> = {
  "opprett-faktura": {
    summary: "Velg kunde, beskriv arbeidet og lag en faktura du kan laste ned som PDF.",
    before: "Ha kundeopplysninger og bedriftens fakturainformasjon klare. Åpne Opprett i appen og velg Faktura.",
    parts: [{ steps: [
      { title: "Velg kunde og datoer.", text: "Velg kunden fakturaen gjelder, og sett utstedt dato og forfallsdato. Velg prosjekt hvis du vil knytte fakturaen til et oppdrag.", media: { asset: "invoiceForm", mobile: "invoiceCustomer", alt: "Kundevalg og utstedt dato i fakturaopprettingen i Jobbleder", caption: "Faktura 110 under oppretting. Mobilutsnittet viser kunde og dato; hele bildet viser også prosjekt, fakturalinje, oppsummering og Lagre/Generer." }, mobileExample: {"title":"kunde og fakturalinje","description":"Et eget mobileksempel i fakturaskjemaet. Skrivebordsbildet og PDF-en nedenfor viser fortsatt Faktura 110.","images":[{"asset":"mobileInvoiceCreate","alt":"Fakturaskjema på mobil med kunde, prosjekt, datoer, Lagre, Generer og en linje for parkettarbeid","caption":"Mobil: Faktura 113 i skjemaet med kunde og fakturalinje. Bildet viser ikke hele linjen eller oppsummeringen. Dette er ikke PDF-eksemplet for Faktura 110."}]} },
      { title: "Legg inn fakturalinjene.", text: "Bruk Legg til rad ved behov. Beskriv arbeidet, og fyll inn enhetspris, antall og MVA-sats for hver linje. Kontroller datoer, linjer og summer i Oppsummering." },
      { title: "Lagre eller generer PDF.", text: "Velg Lagre for å lagre dokumentet, eller Generer når du vil lage PDF. Last ned filen og send den selv til kunden på den måten dere foretrekker.", media: { asset: "invoicePdf", alt: "Faktura 110 som PDF med Jobbleder-merking, en arbeidslinje og total 15 000 kroner", caption: "Ferdig faktura fra samme eksempel. Free gir ubegrenset fakturering med Jobbleder-merking på PDF-en.", document: true } },
    ] }],
    note: "Jobbleder sender ikke fakturaen for deg. Premium gir andre valg for PDF-profilen: egen firmalogo eller en ren PDF uten Jobbleder-merking.",
    links: [{ href: "/fakturaprogram-gratis", label: "Les om gratis fakturering" }, { href: "#lag-faktura-fra-dokument", label: "Bruk et eksisterende dokument som fakturagrunnlag" }],
  },
  "opprett-timeliste": {
    summary: "Opprett timelisten selv, eller bruk registreringer du allerede har lagret. Timer og kilometer følger arbeidernavnet du skriver inn.",
    before: "Åpne Opprett og velg Timeliste. Du trenger prosjektet og navnet som timene skal føres på.",
    parts: [{ steps: [
      { title: "Velg prosjekt og skriv inn arbeider.", text: "Velg prosjekt og fyll inn Arbeider. Navnet brukes i dokumentet og fakturagrunnlaget; du oppretter ingen egen ansattkonto.", media: { asset: "timelistSetup", alt: "Timeliste 260 med prosjekt, Arbeider Demo, en arbeidsrad og oppsummering", caption: "En manuelt opprettet timeliste. Lagre og Generer ligger over feltene; Importer registreringer og Legg til rad finnes ved radene." } },
      { title: "Knytt til kunde ved behov.", optional: true, text: "Slå på Knytt kunde hvis timelisten skal ha en kunde, og velg kunden. Dette er et valgfritt tillegg.", media: { asset: "timelistCustomer", alt: "Knytt kunde er aktivert og Eksempel Eiendom er valgt på timelisten", caption: "Det samme oppsettet med valgfri kundetilknytning aktivert." } },
      { title: "Legg inn arbeidsdagene.", text: "Fyll inn dato, beskrivelse, Inn, Ut og Pause. Bruk Legg til rad for flere dager. Marker betalt pause eller Ekstraarbeid når det gjelder raden. Har du lagrede registreringer, kan du bruke Importer registreringer i stedet for å skrive inn alt på nytt." },
      { title: "Ta med kilometer når du trenger det.", optional: true, text: "Aktiver KM under Innstillinger → Standard for timeliste og lagre innstillingen. Før deretter kilometer på aktuelle rader. Vanlige timer, ekstra timer, vanlige kilometer og ekstra kilometer behandles hver for seg.", media: { asset: "timelistSettings", alt: "Standard for timeliste med Aktiver KM avkrysset og egen Lagre-knapp", caption: "KM er et valgfritt felt som aktiveres i innstillingene. Det krever ikke Premium." }, mobileExample: {"title":"importerte registreringer","description":"Et separat eksempel viser tre importerte registreringer i Timeliste 265. Den manuelle Timeliste 260 og PDF-eksemplet for 264 er andre dokumenter.","images":[{"asset":"mobileTimelistImport","alt":"Timeliste 265 på mobil med Registreringer: 3 rader, Arbeider Demo og tilknyttet kunde","caption":"Mobil: tre registreringer er importert til Timeliste 265. Prosjekt, Arbeider og valgfri kunde vises."},{"asset":"mobileTimelistRows","alt":"Arbeidsrader i timelisteopprettingen på mobil med tider, pause, KM og Ekstraarbeid","caption":"Mobil: lenger ned i skjemaet for Timeliste 265. Dette bildet viser deler av radene, ikke hele timelisten."}]} },
      { title: "Kontroller og lagre timelisten.", text: "Se gjennom navn, prosjekt, arbeidsrader og summer. Velg Lagre, eller Generer for å lage PDF. Du kan senere opprette faktura fra timelisten.", media: { asset: "timelistPdf", alt: "Timeliste 264 som PDF med vanlige timer, ekstra timer, kilometer og ekstra kilometer", caption: "Et eget PDF-eksempel med fire arbeidsrader og Jobbleder-merking. Det er ikke eksporten av Timeliste 260 som er vist øverst.", document: true } },
    ] }],
    links: [{ href: "#importer-arbeidsokter-til-timeliste", label: "Importer registreringer til timeliste" }, { href: "#timeliste-til-faktura", label: "Gjør timelisten om til faktura" }, { href: "/timeliste-mal", label: "Se timeliste- og PDF-eksempler" }],
  },
  "opprett-tilbud": {
    summary: "Lag et tydelig prisforslag med kunde, arbeidsbeskrivelse, pris og gyldighet. Last ned PDF og del den med kunden.",
    before: "Åpne Opprett og velg Tilbud. Ha kundeopplysningene og prisgrunnlaget klare.",
    parts: [{ steps: [
      { title: "Velg kunde og gyldighet.", text: "Velg kunden, sett Utstedt og Gyldig til, og knytt til prosjekt hvis det er relevant." },
      { title: "Beskriv og pris arbeidet.", text: "Legg inn beskrivelse, enhetspris, antall og MVA på tilbudslinjene. Bruk Legg til rad ved behov, og kontroller summene i Oppsummering.", media: { asset: "offerForm", mobile: "offerEditorMobile", alt: "Tilbudslinje med beskrivelse, enhetspris, antall og MVA i Jobbleder", caption: "Tilbud 29. Mobilutsnittet viser tilbudslinjen; hele bildet viser kunde, prosjekt, datoer, summer og Lagre/Generer." }, mobileExample: {"title":"tilbudsskjemaet","description":"Tilbud 29 vises i det responsive skjemaet. Kontroller kunde, datoer og linjer før du genererer dokumentet.","images":[{"asset":"mobileOfferForm","alt":"Tilbud 29 på mobil med kunde, prosjekt, gyldighet og parkettlinje med pris, antall og MVA","caption":"Mobil: Tilbud 29 med enhetspris 12 000, antall 1 og MVA 25 %. Oppsummering og lagreknapper ligger utenfor dette bildet."}]} },
      { title: "Lagre og lag PDF.", text: "Velg Lagre eller Generer. Last ned PDF-en og distribuer den selv. Når du skal bygge videre på tilbudet, kan du opprette faktura eller kontrakt fra Dokumenter.", media: { asset: "offerPdf", alt: "Tilbud 29 som PDF med Jobbleder-merking og total 15 000 kroner inkludert MVA", caption: "Autentisk Free-PDF fra tilbudseksemplet. Beløpene er demonstrasjonsverdier.", document: true } },
    ] }],
    links: [{ href: "#tilbud-til-faktura", label: "Opprett faktura fra tilbudet" }, { href: "#lag-kontrakt-fra-tilbud", label: "Opprett kontrakt fra tilbudet" }, { href: "/tilbud-mal", label: "Utforsk tilbudsverktøyet" }],
  },
  "opprett-kontrakt": {
    summary: "Velg kontraktstype, beskriv oppdraget og avtal pris og vilkår før du lager PDF.",
    before: "Åpne Opprett i appen og velg Kontrakt. Ha kundeopplysninger og avtalen om arbeidet klare.",
    parts: [{ steps: [
      { title: "Velg kontraktstype og kunde.", text: "Velg kontraktstype for privatkunde (B2C) eller bedrift (B2B). Kontroller forslaget og velg typen som passer avtalen. Velg kunde og eventuelt prosjekt, og fyll inn oppdragsnavn og relevante datoer.", contractVisual: "creation" },
      { title: "Beskriv arbeidet.", text: "Fyll inn arbeidsbeskrivelsen i radene. Bruk Legg til rad når oppdraget består av flere arbeidsoppgaver. Utfyllende arbeidsbeskrivelse er valgfri og kan brukes til materialer, metode og avgrensninger.", contractVisual: "work" },
      { title: "Velg prisgrunnlag og MVA.", text: "Velg Fast, Time eller Tilbud under Prisstruktur. Fyll inn fastpris eller timepris, eller velg tilbudet som skal være prisgrunnlag. Angi om prisen er inkludert MVA der dette er aktuelt, og kontroller at grunnlaget stemmer med avtalen.", contractVisual: "pricing" },
      { title: "Angi betalingsvilkår.", text: "Velg betalingsmåte og betalingsfrist. Fyll inn forskudd eller en betalingsplan med beskrivelser og prosenter når det er relevant for avtalen. Planen beskriver betalingsvilkårene; du oppretter fakturaene selv." },
      { title: "Avklar materialansvaret.", text: "Velg Entreprenør, Kunde eller Begge under Materialer, i tråd med hvem som skal levere materialene." },
      { title: "Tilpass kontraktstekstene ved behov.", optional: true, text: "Se gjennom kontraktens tekstseksjoner og rediger dem ved behov, slik at de beskriver det dere har avtalt." },
      { title: "Kontroller og generer PDF.", text: "Kontroller partene, datoene, arbeidsbeskrivelsen, prisgrunnlaget og vilkårene. Velg Lagre eller Generer når innholdet er klart. Last ned PDF-en og avtal manuell signering med partene. Elektronisk signering er ikke tilgjengelig." },
    ] }],
    note: "Betalingsplanen beskriver vilkårene du angir. Den er ikke en automatisk fakturaplan. Når du oppretter faktura, kontrollerer du linjer og beløp selv.",
    links: [{ href: "#lag-kontrakt-fra-tilbud", label: "Bruk tilbud som utgangspunkt" }, { href: "#kontrakt-til-faktura", label: "Opprett faktura fra kontrakten" }, { href: "/kontrakt-mal", label: "Se flere kontraktseksempler" }],
  },
  dokumentoversikt: {
    summary: "Finn lagrede dokumenter, åpne forhåndsvisningen og velg neste handling.",
    parts: [{ steps: [
      { title: "Åpne Dokumenter.", text: "Bruk søkefeltet eller filtrer på dokumenttype for å finne dokumentet." },
      { title: "Velg dokumentet i listen.", text: "Kontroller innhold og Oppsummering i forhåndsvisningen. Hvilke handlinger som vises, avhenger av dokumenttypen.", media: { asset: "offerDocuments", alt: "Dokumentlisten med Tilbud 29 valgt og handlingsknapper under forhåndsvisningen", caption: "Tilbudsvisningen viser Rediger, Opprett kopi, Opprett kontrakt, Opprett faktura og Generer PDF. Åpne originalen for hele listen og knappene." }, mobileExample: {"title":"dokument og handlinger","description":"På mobil viser dette eksemplet et valgt tilbud med forhåndsvisning og handlinger.","images":[{"asset":"mobileOfferDocument","alt":"Tilbud 29 i Dokumenter på mobil med Opprett kontrakt, Opprett faktura og Generer PDF","caption":"Mobil: Tilbud 29 med egne handlinger for å opprette kontrakt eller faktura."}]} },
      { title: "Velg neste handling.", text: "Bruk Generer PDF for dokumentet, Opprett kopi for en ny kopi, eller en av konverteringene når du vil bruke opplysningene videre. Se den aktuelle veiledningen nedenfor før du oppretter et nytt dokument." },
    ] }],
    links: [{ href: "#lag-faktura-fra-dokument", label: "Opprett faktura fra et dokument" }, { href: "#lag-kontrakt-fra-tilbud", label: "Opprett kontrakt fra tilbud" }, { href: "#gjenta-et-dokument", label: "Kopier et dokument" }],
  },
  "lag-faktura-fra-dokument": {
    summary: "Bruk en timeliste, et tilbud eller en kontrakt som grunnlag. Kontroller den nye fakturaen før du genererer PDF.",
    before: "Åpne Dokumenter og velg dokumentet du vil bruke. Alle tre konverteringene er tilgjengelige i Free.",
    parts: [
      { id: "timeliste-til-faktura", title: "Timeliste → Faktura", intro: "Start med den lagrede timelisten. Fakturalinjene knyttes til arbeidernavnet fra dokumentet.", steps: [
        { title: "Velg timelisten og Opprett faktura.", text: "Kontroller timelisten i Dokumenter, og velg Opprett faktura under forhåndsvisningen.", media: { asset: "timelistDocuments", alt: "Timeliste 264 i dokumentoversikten med arbeidsrader, summer og Opprett faktura", caption: "Startpunktet for timelistens fakturagrunnlag. Hele originalen viser både dokumentlisten og handlingsknappene." }, mobileExample: {"title":"åpne handlingene for timelisten","description":"Mobilsekvensen bruker Timeliste 265 og Faktura 112. Skrivebordssekvensen nedenfor bruker Timeliste 264 og Faktura 111.","images":[{"asset":"mobileTimelistDocument","alt":"Timeliste 265 i Dokumenter på mobil med Opprett faktura og Generer PDF","caption":"Mobil: den lagrede Timeliste 265 med handlingsknappene nederst."}]} },
        { title: "Kontroller fire separate kategorier.", text: "Se gjennom vanlige timer, ekstra timer, vanlige kilometer og ekstra kilometer. Kontroller antall, enhetspriser og MVA på hver fakturalinje, og juster datoer eller andre opplysninger ved behov.", media: { asset: "timelistInvoice", mobile: "timelistInvoiceMobile", alt: "Fire fakturalinjer for vanlige timer, kilometer, ekstra timer og ekstra kilometer fra Timeliste 264", caption: "Faktura 111 med Arbeider Demo i linjebeskrivelsene. Mobilutsnittet beholder alle fire linjer; originalen viser også kilde og oppsummering. Prisene er eksempelverdier." }, mobileExample: {"title":"kontroller de fire kategoriene","description":"Tre mobilbilder viser ulike deler av samme eksempel fra Timeliste 265: kilde og vanlige timer, midtre linjer og til slutt alle fire kategorier i forhåndsvisningen. Kontroller alle linjer før du lager PDF.","images":[{"asset":"mobileTimelistInvoice","alt":"Faktura 112 på mobil med Kilde: Timeliste 265 og linje for Demo med 9 timer 30 minutter","caption":"Mobil: Faktura 112 fra Timeliste 265. Første linje viser vanlige timer; satsen som vises er 900."},{"asset":"mobileTimelistInvoiceExtra","alt":"Mobilutkast fra Timeliste 265 med vanlig KM-linje på 45 og ekstra timer på 2","caption":"Mobil: midtre del av fakturaskjemaet med 45 KM til sats 12 og 2 ekstra timer til sats 1 350. Dette bildet viser ikke ekstra KM-linjen."},{"asset":"mobileInvoiceSummary","alt":"Fakturaforhåndsvisning på mobil med fire linjer fra Timeliste 265: timer, kilometer, ekstra timer og ekstra kilometer","caption":"Mobil: alle fire kategorier er synlige samlet: 9,5 timer, 45 KM, 2 ekstra timer og 50 ekstra KM. Dette er en dokumentforhåndsvisning, ikke en PDF."}]} },
        { title: "Lagre eller generer fakturaen.", text: "Når grunnlaget stemmer, velger du Lagre eller Generer. Last ned PDF-en og distribuer den selv.", media: { asset: "timelistInvoicePdf", alt: "Faktura 111 fra Timeliste 264 med fire kategorier og total 28 368,75 kroner", caption: "PDF fra det samme firekategori-eksemplet. Dokumentet er ikke sendt automatisk.", document: true } },
      ] },
      { id: "tilbud-til-faktura", title: "Tilbud → Faktura", steps: [
        { title: "Åpne tilbudet i Dokumenter.", text: "Velg tilbudet og kontroller at det er riktig grunnlag for fakturaen. Klikk Opprett faktura under forhåndsvisningen.", mobileExample: {"title":"handlingene for tilbudet","description":"Åpne det aktuelle tilbudet i Dokumenter og velg Opprett faktura.","images":[{"asset":"mobileOfferDocument","alt":"Tilbud 29 i Dokumenter på mobil med Opprett kontrakt, Opprett faktura og Generer PDF","caption":"Mobil: Tilbud 29 med egne handlinger for å opprette kontrakt eller faktura."}]} },
        { title: "Se gjennom det som følger med.", text: "Kontroller kunde, prosjekt, datoer, fakturalinjer, priser og summer i den nye fakturaen. Kildereferansen viser hvilket tilbud som er brukt.", media: { asset: "offerInvoice", mobile: "offerInvoiceMobile", alt: "Faktura 111 under oppretting med Tilbud 29 som kilde og en linje for parkettarbeid", caption: "Direkte fra Tilbud 29 til faktura. Åpne hele bildet for oppsummeringen og den øvrige konteksten." }, mobileExample: {"title":"linjen fra tilbudet","description":"Et eget mobilbilde viser linjen og oppsummeringen. Kontroller også kunde, datoer og kilde i skjemaet før generering.","images":[{"asset":"mobileOfferInvoice","alt":"Fakturalinje på mobil med parkettarbeid, enhetspris 12 000, antall 1, MVA 25 prosent og oppsummering","caption":"Mobil: linje og oppsummering fra tilbudskonverteringen. Netto er 12 000 og total 15 000. Dokumentnummer og kildemerke vises ikke i dette utsnittet."}]} },
        { title: "Generer og last ned PDF.", text: "Velg Lagre eller Generer når innholdet er kontrollert. Du laster ned og deler fakturaen selv." },
      ] },
      { id: "kontrakt-til-faktura", title: "Kontrakt → Faktura", steps: [
        { title: "Åpne den lagrede kontrakten.", text: "Finn kontrakten i Dokumenter og kontroller at du har valgt riktig avtale." },
        { title: "Velg Opprett faktura.", text: "Bruk Opprett faktura under kontraktens forhåndsvisning. Kontrakten brukes som grunnlag for en ny faktura." },
        { title: "Kontroller den nye fakturaen.", text: "Se gjennom kunde, prosjekt, datoer og kildereferanse. Kontroller beskrivelser, antall, enhetspriser og MVA på fakturalinjene.", contractVisual: "invoice" },
        { title: "Tilpass og kontroller beløpene.", text: "Juster fakturalinjene og andre fakturafelt ved behov. Kontroller netto, MVA og totalbeløp i Oppsummering før du går videre." },
        { title: "Lagre eller generer fakturaen.", text: "Velg Lagre eller Generer når grunnlaget stemmer. Last ned PDF-en og del den med kunden selv." },
      ], note: "En betalingsplan i kontrakten oppretter ikke fakturaer automatisk. Du velger selv når du oppretter faktura og kontrollerer beløpene." },
    ],
    links: [{ href: "/fakturaprogram-gratis", label: "Les om fakturering i Free" }],
  },
  "lag-kontrakt-fra-tilbud": {
    summary: "Bruk et eksisterende tilbud som grunnlag for en kontrakt du kan tilpasse selvstendig.",
    parts: [{ steps: [
      { title: "Åpne tilbudet og velg Opprett kontrakt.", text: "Finn riktig tilbud i Dokumenter. Kontroller innholdet og velg Opprett kontrakt under forhåndsvisningen.", contractVisual: "offerAction" },
      { title: "Kontroller kunde og prosjekt.", text: "Se gjennom kunde- og prosjektopplysningene som er tatt med til kontraktskjemaet. Kontroller også kontraktstype, oppdragsnavn og datoer." },
      { title: "Kontroller tilbudsreferansen og prisen.", text: "Kontrakten viser til det valgte tilbudet. Kontroller hvilket tilbud som er valgt som prisgrunnlag, og at beløpet og arbeidsbeskrivelsen stemmer med avtalen.", contractVisual: "offer" },
      { title: "Fyll ut kontraktens vilkår.", text: "Angi betalingsvilkår, materialansvar og andre kontraktsspesifikke opplysninger. Rediger innholdet ved behov. Kontrakten kan redigeres selvstendig; senere endringer i tilbudet synkroniseres ikke automatisk til kontrakten." },
      { title: "Kontroller og generer kontrakten.", text: "Se gjennom hele kontrakten før du velger Lagre eller Generer. Last ned PDF-en og avtal manuell signering. Elektronisk signering er ikke tilgjengelig." },
    ] }],
    links: [{ href: "#opprett-kontrakt", label: "Se pris- og kontraktsvalgene" }, { href: "#kontrakt-til-faktura", label: "Bruk kontrakten som fakturagrunnlag" }],
  },
  "hvordan-arbeidsokter-fungerer": {
    title: "Slik fungerer Registreringer",
    summary: "Lagre arbeidsdagene fortløpende, og bruk dem som utgangspunkt for timeliste når du er klar.",
    parts: [{ steps: [
      { title: "Åpne Registreringer.", text: "Velg Registreringer i appmenyen. Her finner du arbeidsregistreringene som kan brukes i en timeliste." },
      { title: "Bygg opp registreringene dag for dag.", text: "Bruk Legg til registrering for nye arbeidsdager. Registreringene kan ha ordinært arbeid, ekstraarbeid og kilometer når KM er aktivert.", media: { asset: "registrationsSaved", alt: "To lagrede registreringer, én merket Ekstra, med ingen oppføringer valgt", caption: "To lagrede dager. Importknappen er deaktivert fordi ingen registreringer er valgt." }, mobileExample: {"title":"lagrede arbeidsdager","description":"Det egne mobileksemplet har tre registreringer. Skrivebordsbildet har to.","images":[{"asset":"mobileRegistrationsSaved","alt":"Tre lagrede registreringer på mobil, én merket Ekstra, med Valgt: 0","caption":"Mobil: tre lagrede registreringer. Ingen er valgt, og Importer til timeliste er deaktivert."}]} },
      { title: "Velg det du vil bruke.", text: "Marker aktuelle registreringer og velg Importer til timeliste. Kontroller innholdet i timelisteopprettingen før du lagrer eller genererer dokumentet." },
    ] }],
    links: [{ href: "#legg-til-en-arbeidsokt", label: "Legg til en registrering" }, { href: "#importer-arbeidsokter-til-timeliste", label: "Følg importen steg for steg" }],
  },
  "legg-til-en-arbeidsokt": {
    title: "Legg til en registrering",
    summary: "Registrer dato, arbeidsbeskrivelse, tider og pause. Marker ekstraarbeid og ta med kilometer ved behov.",
    parts: [{ steps: [
      { title: "Åpne registreringsskjemaet.", text: "Gå til Registreringer og velg Legg til registrering." },
      { title: "Fyll inn arbeidsdagen.", text: "Legg inn dato, beskrivelse, Inn, Ut og Pause. Velg Betalt pause hvis det gjelder denne registreringen.", media: { asset: "registrationForm", alt: "Registreringsskjema med dato, arbeidsbeskrivelse, Inn, Ut, Pause og valg for ekstraarbeid", caption: "Dato- og tidsfeltene, pausevalget og Lagre registrering fra en autentisk arbeidsregistrering." }, mobileExample: {"title":"fyll inn arbeidsdagen","description":"Dato, beskrivelse, tider og pause er samlet i dette mobilbildet. Ekstraarbeid vises i et eget eksempel i neste steg.","images":[{"asset":"mobileRegistrationForm","alt":"Registreringsskjema på mobil med dato 19. november, gipsplater på vegg, 08 til 16 og 30 minutters pause","caption":"Mobil: en vanlig registrering med tomt KM-felt og Ekstra avslått. Lagre registrering er synlig."}]} },
      { title: "Marker ekstraarbeid eller legg til KM.", optional: true, text: "Bruk Marker som ekstra når registreringen gjelder ekstraarbeid. KM-feltet er tilgjengelig når Aktiver KM er slått på under Innstillinger → Standard for timeliste. Fyll inn kilometer når det er relevant.", mobileExample: {"title":"ekstraarbeid og kilometer","description":"Dette er en annen registrering enn arbeidsdagen ovenfor; den gjelder bortkjøring av avfall.","images":[{"asset":"mobileRegistrationExtra","alt":"Registrering på mobil med 08 til 10, pause 0, KM 50, Ekstra avkrysset og Lagre registrering","caption":"Mobil: registreringen for 20. november har 50 KM og Marker som ekstra valgt."}]} },
      { title: "Velg Lagre registrering.", text: "Kontroller feltene før du lagrer. Du kan deretter velge registreringen sammen med andre dager når du skal opprette timeliste.", media: { asset: "registrationExtra", alt: "Marker som ekstra er avkrysset og knappen Lagre registrering er synlig", caption: "Et nærmere utsnitt av Ekstra-valget og den faktiske lagreknappen." } },
    ] }],
    links: [{ href: "#importer-arbeidsokter-til-timeliste", label: "Bruk registreringene i en timeliste" }],
  },
  "importer-arbeidsokter-til-timeliste": {
    title: "Importer registreringer til timeliste",
    summary: "Velg lagrede registreringer og gå videre til timelisteopprettingen. Kontroller radene og arbeidernavnet før du lagrer.",
    parts: [{ steps: [
      { title: "Marker registreringene.", text: "Åpne Registreringer og marker én eller flere oppføringer. Valgt viser hvor mange du har valgt. Klikk Importer til timeliste.", media: { asset: "registrations", mobile: "registrationsMobile", alt: "To arbeidsregistreringer valgt for import til timeliste", caption: "To registreringer er markert. Mobilutsnittet viser utvalget; originalen viser også Valgt: 2 og den aktive knappen Importer til timeliste." }, mobileExample: {"title":"velg og importer registreringene","description":"Mobilbildet viser tre valgte registreringer. Skrivebordseksemplet nedenfor har to.","images":[{"asset":"mobileRegistrationsSelected","alt":"Tre markerte registreringer på mobil og aktiv Importer til timeliste","caption":"Mobil: Valgt: 3. Alle tre registreringene er markert og klare for import."}]} },
      { title: "Kontroller de importerte radene.", text: "Se gjennom datoer, beskrivelser, tider, pause og eventuell Ekstra-merking. Velg prosjekt og skriv inn Arbeider. Knytt til kunde hvis du ønsker det.", media: { asset: "timelistImport", alt: "Timeliste 261 med to importerte registreringer og tre arbeidsrader totalt", caption: "Registreringer: 2 rader vises øverst. Timelisten har tre rader totalt; bildet er ikke et eksempel på tre importerte registreringer." }, mobileExample: {"title":"se resultatet av importen","description":"På mobil er tre registreringer importert til Timeliste 265. Skrivebordsbildet viser det tidligere eksemplet med to importerte registreringer og tre rader totalt.","images":[{"asset":"mobileTimelistImport","alt":"Timeliste 265 på mobil med Registreringer: 3 rader, Arbeider Demo og tilknyttet kunde","caption":"Mobil: tre registreringer er importert til Timeliste 265. Prosjekt, Arbeider og valgfri kunde vises."},{"asset":"mobileTimelistRows","alt":"Arbeidsrader i timelisteopprettingen på mobil med tider, pause, KM og Ekstraarbeid","caption":"Mobil: lenger ned i skjemaet for Timeliste 265. Dette bildet viser deler av radene, ikke hele timelisten."}]} },
      { title: "Lagre eller generer timelisten.", text: "Kontroller Oppsummering og velg Lagre eller Generer. Åpne den lagrede timelisten i Dokumenter når du vil kontrollere den eller opprette faktura.", mobileExample: {"title":"kontroller den lagrede timelisten","description":"Etter lagring kan du åpne timelisten i Dokumenter, kontrollere oppsummeringen og velge Generer PDF eller Opprett faktura.","images":[{"asset":"mobileTimelistSummary","alt":"Timeliste 265 på mobil med tre rader, 11 timer 30 minutter totalt og 95 kilometer","caption":"Mobil: Oppsummering viser 11 t 30 min totalt, hvorav 2 t ekstra, og 95 KM totalt, hvorav 50 ekstra. Opprett faktura og Generer PDF er synlige."}]} },
    ] }],
    links: [{ href: "#opprett-timeliste", label: "Se valgene i timelisteopprettingen" }, { href: "#timeliste-til-faktura", label: "Fortsett fra timeliste til faktura" }],
  },
}

// Small, confirmed label corrections; these cards are not otherwise rewritten.
export function instructionLabels(item: InstructionItem): InstructionItem {
  if (item.slug === "hovedmenyoversikt") return { ...item, steps: item.steps?.map(step => step.replace("gjenta", "kopiere").replace("Arbeidsøkter", "Registreringer")) }
  if (item.slug === "appens-hovedvisning") return { ...item, description: item.description?.map(text => text.replace("arbeidsøkter", "registreringer")) }
  if (item.slug === "gjenta-et-dokument") return { ...item, title: "Kopier et dokument", summary: "Bruk et eksisterende dokument som utgangspunkt for en ny kopi.", steps: item.steps?.map(step => step.replace("Gjenta dokument", "Opprett kopi")) }
  return item
}

export const instructionSectionLabels: Record<string, { title?: string; intro?: string }> = {
  arbeidsokter: { title: "Registreringer", intro: "Lagre arbeidsdagene, og bruk registreringene videre i en timeliste." },
}

export const workflowLinks = [
  { label: "Registreringer → Timeliste", href: "#importer-arbeidsokter-til-timeliste", description: "Velg lagrede arbeidsdager og kontroller timelisten." },
  { label: "Timeliste → Faktura", href: "#timeliste-til-faktura", description: "Ta timer og kilometer videre som egne fakturalinjer." },
  { label: "Tilbud → Faktura", href: "#tilbud-til-faktura", description: "Bruk tilbudet som fakturagrunnlag." },
  { label: "Tilbud → Kontrakt", href: "#lag-kontrakt-fra-tilbud", description: "Opprett en kontrakt du kan redigere videre." },
  { label: "Kontrakt → Faktura", href: "#kontrakt-til-faktura", description: "Kontroller fakturaen med avtalen som grunnlag." },
]
