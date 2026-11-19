export type BlogProductExampleBlock = {
  type: "productExample"
  asset: "mobileRegistrationExtra" | "mobileInvoiceSummary"
  paragraphs: string[]
  alt: string
  caption: string
}

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "cta"; text: string }
  | { type: "link"; href: string; label: string }
  | { type: "note"; text: string }
  | { type: "timelistComparison" }
  | { type: "timelistContents"; heading: string; text: string; items: string[] }
  | { type: "textLink"; href: string; label: string }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "invoiceFigure"; variant: "document" | "line" }
  | BlogProductExampleBlock

export type BlogPost = {
  id: number
  title: string
  slug: string
  summary: string
  category: string
  tags: string[]
  createdAt: string
  seoTitle?: string
  seoDescription?: string
  relatedTopic?: "timeliste" | "faktura" | "tilbud" | "kontrakt" | "oversikt"
  blocks: BlogBlock[]
}

export const blogPosts: BlogPost[] = [
    {
        id: 9,
        title: "Timeliste mal (PDF) – gratis nedlasting uten innlogging",
        slug: "gratis-timeliste-mal",
        summary:
            "Last ned gratis timeliste mal PDF uten innlogging. Velg mellom tom mal eller siste uke – og oppdag når digital timeliste kan være et bedre valg.",
        category: "Timeliste",
        tags: ["timeliste mal", "timeliste mal pdf", "gratis", "timeregistrering", "håndverker"],
        createdAt: "2025-07-23",
        seoTitle: "Gratis timeliste mal (PDF) – last ned uten innlogging",
        seoDescription:
            "Last ned gratis timeliste mal PDF uten innlogging. Velg mellom tom timeliste og ferdig datert timeliste for siste uke.",
        relatedTopic: "timeliste",
        blocks: [
            {
            type: "paragraph",
            text: "Trenger du en enkel timeliste mal du kan bruke med én gang? Her kan du laste ned en gratis timeliste mal som PDF – helt uten innlogging. Dette passer godt for håndverkere, selvstendig næringsdrivende, frilansere og små bedrifter som vil føre timer raskt og enkelt.",
            },
            {
            type: "heading",
            text: "Last ned timeliste mal PDF gratis",
            },
            {
            type: "paragraph",
            text: "Du kan velge mellom to praktiske varianter:",
            },
            {
            type: "list",
            items: [
                "Tom timeliste-mal (PDF) – blank mal for manuell utfylling",
                "Timeliste for siste uke (PDF) – datoene er ferdig fylt inn",
            ],
            },
            {
            type: "link",
            href: "/downloads/timeliste-mal-jobbleder.pdf",
            label: "Last ned tom timeliste-mal (PDF)",
            },
            {
            type: "link",
            href: "https://laskowskicreative.no/api/jobbleder/user/documents/oneweek-timelist",
            label: "Last ned timeliste for siste uke (PDF)",
            },
            {
            type: "timelistContents",
            heading: "Hva inneholder en god timeliste?",
            text: "En god timeliste bør gjøre det enkelt å dokumentere arbeidstid tydelig. Den bør minst inneholde dato, arbeidstid, pauser, arbeidsbeskrivelse og total antall timer.",
            items: [
                "Navn, prosjekt, uke og år",
                "Dato",
                "Inn og ut",
                "Pause",
                "Timer",
                "Arbeidsbeskrivelse",
                "Totalt antall timer",
            ],
            },
            {
            type: "heading",
            text: "Slik bruker du timeliste-malen",
            },
            {
            type: "list",
            items: [
                "Last ned PDF-en",
                "Fyll inn timer og arbeidsbeskrivelse hver dag",
                "Summer total tid",
                "Send til kunde eller bruk som dokumentasjon ved fakturering",
            ],
            },
            {
            type: "timelistComparison",
            },
        ],
    },
    {
        id: 3,
        title: "Gratis fakturaprogram for håndverkere – her er et enkelt alternativ",
        slug: "gratis-fakturaprogram-handverkere",
        summary:
            "Ser du etter et gratis fakturaprogram for håndverkere? Her er et enkelt alternativ for deg som vil lage faktura raskt uten kompliserte systemer.",
        category: "Faktura",
        tags: ["gratis", "faktura", "håndverker", "webapp", "logo"],
        createdAt: "2025-04-22",
        seoTitle: "Gratis fakturaprogram for håndverkere – enkelt og nettbasert",
        seoDescription:
            "Opprett faktura raskt med et gratis fakturaprogram for håndverkere. Enkel løsning direkte i nettleseren.",
        relatedTopic: "faktura",
        blocks: [
            {
            type: "paragraph",
            text: "Som håndverker er tiden din verdifull. Du bruker den best på å gjøre jobben – ikke på tungvint papirarbeid. Derfor er det viktig med et fakturaprogram som gjør fakturering rask og oversiktlig, uten at det trenger å koste mye eller kreve komplisert oppsett.",
            },
            {
            type: "heading",
            text: "Hva betyr egentlig gratis fakturaprogram?",
            },
            {
            type: "paragraph",
            text: "Mange løsninger markedsføres som gratis, men har ofte begrensninger som gjør dem lite praktiske i hverdagen.",
            },
            {
            type: "list",
            items: [
                "Begrenset antall fakturaer per måned",
                "Mangler lagring eller historikk",
                "Krever oppgradering for viktige funksjoner",
            ],
            },
            {
            type: "heading",
            text: "Et enklere alternativ for håndverkere",
            },
            {
            type: "paragraph",
            text: "Med Jobbleder kan du lage faktura direkte i nettleseren. Løsningen er laget for små bedrifter og håndverkere som trenger et enkelt system for faktura, tilbud og timelister samlet på ett sted.",
            },
            {
            type: "list",
            items: [
                "Lag faktura raskt",
                "Hold orden på kunder og prosjekter",
                "Last ned PDF når dokumentet er klart",
                "Bruk samme system for tilbud og timeliste",
            ],
            },
            {
            type: "heading",
            text: "Hvorfor velge en nettbasert løsning?",
            },
            {
            type: "paragraph",
            text: "Når fakturaprogrammet fungerer i nettleseren, slipper du installasjon og kan jobbe både fra PC og mobil. Det gjør det enklere å holde oversikt også når du er ute på oppdrag.",
            },
            {
            type: "link",
            href: "/fakturaprogram-gratis",
            label: 'Les mer om vårt gratis fakturaprogram',
            },
            {
            type: "note",
            text: "Hvis du også vil forstå hva en faktura bør inneholde, kan du lese videre om fakturaeksempler og fakturakrav på bloggen vår.",
            },
            {
            type: "cta",
            text: "Vil du komme i gang raskt? Opprett faktura gratis i Jobbleder.",
            },
            {
            type: "link",
            href: "https://app.jobbleder.no",
            label: "Start gratis",
            },
        ],
    },
    {
        id: 1,
        title: "Hvordan lage et profesjonelt tilbud i byggebransjen",
        slug: "lage-tilbud-byggebransjen",
        summary:
            "Lær hvordan du lager et profesjonelt tilbud i byggebransjen og hva som bør være med for å gi kunden et godt førsteinntrykk.",
        category: "Tilbud",
        tags: ["tilbud", "byggebransjen", "kunde", "pristilbud", "PDF"],
        createdAt: "2025-04-20",
        seoTitle: "Hvordan lage et profesjonelt tilbud i byggebransjen",
        seoDescription:
            "Slik lager du et tydelig og profesjonelt tilbud i byggebransjen. Lær hva som bør være med og hvordan du gjør det enklere digitalt.",
        relatedTopic: "tilbud",
        blocks: [
            {
            type: "paragraph",
            text: "Et godt tilbudsdokument kan være forskjellen mellom å vinne og miste en kunde. For håndverkere og små bedrifter i byggebransjen er det viktig å sende tilbud som er tydelige, profesjonelle og lette å forstå.",
            },
            {
            type: "heading",
            text: "Hva er et godt tilbud?",
            },
            {
            type: "paragraph",
            text: "Et tilbud er dokumentet du sender til kunden før jobben starter. Det forklarer hva du skal gjøre, hva det vil koste og hvilke vilkår som gjelder. Et godt tilbud gir kunden trygghet og viser at du jobber strukturert.",
            },
            {
            type: "heading",
            text: "Dette bør et tilbud inneholde",
            },
            {
            type: "list",
            items: [
                "Din kontaktinformasjon",
                "Kundens informasjon",
                "Beskrivelse av arbeidet",
                "Pris og eventuelt tidsbruk",
                "MVA og vilkår",
            ],
            },
            {
            type: "heading",
            text: "Hvorfor er tydelighet viktig?",
            },
            {
            type: "paragraph",
            text: "Jo tydeligere tilbudet er, desto enklere blir det for kunden å forstå hva som faktisk inngår. Det reduserer risikoen for misforståelser og gjør det lettere å sammenligne tilbudet med andre alternativer.",
            },
            {
            type: "heading",
            text: "Digitalt tilbud gjør arbeidet enklere",
            },
            {
            type: "paragraph",
            text: "Når du lager tilbud digitalt, slipper du å starte fra bunnen hver gang. Du får en fastere struktur, kan laste ned dokumentet som PDF og jobber mer effektivt i hverdagen.",
            },
            {
            type: "link",
            href: "/tilbud-mal",
            label: "Se guide til tilbud mal",
            },
            {
            type: "note",
            text: "Et profesjonelt tilbud er ofte førsteinntrykket kunden får av bedriften din. Derfor er struktur og klarhet viktig.",
            },
            {
            type: "cta",
            text: "Lag profesjonelle tilbud raskt i Jobbleder – og konverter dem til faktura senere.",
            },
            {
            type: "link",
            href: "https://app.jobbleder.no",
            label: "Start gratis",
            },
        ],
    },
    {
      id: 5,
      title: "Hva skal en faktura inneholde?",
      slug: "innhold-i-faktura",
      summary: "Lær hva en faktura bør inneholde, og hvordan du lager et ryddig dokument som er lett for kunden å forstå.",
      category: "Faktura",
      tags: [
        "faktura",
        "MVA",
        "skatt",
        "betaling",
        "krav"
      ],
      createdAt: "2025-04-23",
      seoTitle: "Hva skal en faktura inneholde? En enkel oversikt",
      seoDescription: "Se hva en faktura bør inneholde, og hvordan du lager en tydelig og profesjonell faktura for kunder i Norge.",
      relatedTopic: "faktura",
      blocks: [
        {
          type: "paragraph",
          text: "En faktura skal gjøre det mulig å forstå hva som er levert og hva kunden skal betale. Det hjelper å lese feltene som svar på tre spørsmål: Hvem gjelder salget, hva er levert, og hvordan er beløpet satt sammen?"
        },
        {
          type: "heading",
          text: "Dette bør en faktura inneholde"
        },
        {
          type: "paragraph",
          text: "Start med partene og selve leveransen. Bruk riktige kundeopplysninger, selgers navn og organisasjonsnummer, en beskrivelse av arbeidet og hvilket omfang prisen gjelder. Oppgi også leveringsopplysningene. MVA-merking og andre betingede opplysninger avhenger av virksomheten og salget."
        },
        {
          type: "textLink",
          href: "/faktura-krav",
          label: "Se oversikten over lovpålagte og praktiske fakturaopplysninger"
        },
        {
          type: "heading",
          text: "Tre datoer med ulike oppgaver"
        },
        {
          type: "list",
          items: [
            "Fakturadato (dokumentasjonsdato) er datoen på fakturaen. Det er et annet felt enn datoen for leveransen.",
            "Leveringsdato forteller når varen eller tjenesten ble levert. Ved arbeid over en periode må beskrivelsen av leveransen være tydelig.",
            "Betalingsforfall forteller når kunden skal betale. Ikke velg en frist bare fordi den står i et annet eksempel; bruk vilkårene som gjelder for salget."
          ]
        },
        {
          type: "heading",
          text: "Slik leser du pris og MVA"
        },
        {
          type: "paragraph",
          text: "I Jobbleders Faktura 110 gjelder én linje legging av parkett. Antall 1 til enhetspris 12 000 kroner gir 12 000 kroner før MVA. Eksemplets MVA-sats er 25 prosent: 3 000 kroner i avgift og 15 000 kroner totalt. Satsen må passe det faktiske salget; eksemplet betyr ikke at alle tjenester skal faktureres med 25 prosent."
        },
        {
          type: "textLink",
          href: "/faktura-eksempel",
          label: "Åpne fakturaeksemplet og se feltene i sammenheng"
        },
        {
          type: "heading",
          text: "Hvorfor er dette viktig?"
        },
        {
          type: "paragraph",
          text: "Når arbeidsbeskrivelse, omfang og beløp henger sammen, kan kunden kontrollere fakturaen mot det dere har avtalt. En generell tekst som bare sier «arbeid» gir mindre hjelp enn en beskrivelse av oppgaven prisen dekker."
        },
        {
          type: "heading",
          text: "Slik gjør du fakturaen mer profesjonell"
        },
        {
          type: "list",
          items: [
            "Bruk en konkret beskrivelse av arbeidet og en tydelig oppstilling av prisene.",
            "Skill betalingsforfall fra praktiske betalingsopplysninger som bankkonto og betalingsreferanse.",
            "Oppgi en kontaktmåte kunden kan bruke ved spørsmål.",
            "Kontroller navn, datoer og summer før du genererer dokumentet."
          ]
        },
        {
          type: "textLink",
          href: "https://www.skatteetaten.no/rettskilder/type/handboker/merverdiavgiftshandboken/gjeldende/M-15/M-15-10/M-15-10.2/",
          label: "Skatteetaten: krav til innhold og angivelse av partene"
        },
        {
          type: "paragraph",
          text: "Jobbleder lar deg opprette faktura og eksportere PDF i Free. PDF-en har Jobbleder-vannmerke; Premium gir andre valg for firmalogo og PDF-profil. Du kontrollerer og laster ned fakturaen, og sender den selv til kunden."
        },
        {
          type: "link",
          href: "https://app.jobbleder.no",
          label: "Opprett faktura gratis"
        }
      ]
    },
    {
        id: 6,
        title: "Topp 5 feil å unngå når du sender tilbud",
        slug: "feil-med-tilbud",
        summary:
            "Små feil i tilbudet kan koste deg jobben. Her er fem vanlige feil – og hvordan du kan unngå dem.",
        category: "Tilbud",
        tags: ["feil", "tilbud", "kunde", "forbedring", "oppsett"],
        createdAt: "2025-04-24",
        seoTitle: "Topp 5 feil å unngå når du sender tilbud",
        seoDescription:
            "Her er de vanligste feilene i tilbudsdokumenter – og hva du kan gjøre for å sende tydeligere og mer profesjonelle tilbud.",
        relatedTopic: "tilbud",
        blocks: [
            {
            type: "paragraph",
            text: "Å sende et tilbud virker enkelt, men små feil kan gjøre at kunden mister tillit eller velger noen andre. Et tydelig og profesjonelt tilbud gir et mye bedre førsteinntrykk og øker sjansen for å få jobben.",
            },
            {
            type: "heading",
            text: "1. For lite informasjon",
            },
            {
            type: "paragraph",
            text: "Hvis tilbudet er for kort eller uklart, blir det vanskelig for kunden å forstå hva som faktisk inngår. Beskriv arbeidet tydelig og konkret.",
            },
            {
            type: "heading",
            text: "2. Manglende gyldighetsdato",
            },
            {
            type: "paragraph",
            text: "Et tilbud bør ha en tydelig gyldighetsperiode. Det skaper forutsigbarhet og gjør det lettere å følge opp senere.",
            },
            {
            type: "heading",
            text: "3. Utydelig pris eller MVA",
            },
            {
            type: "paragraph",
            text: "Kunden bør raskt kunne se hva tilbudet koster, om MVA er inkludert, og hva totalprisen blir. Utydelige tall skaper usikkerhet.",
            },
            {
            type: "heading",
            text: "4. Uprofesjonell presentasjon",
            },
            {
            type: "paragraph",
            text: "Selv et godt tilbud kan se svakt ut hvis dokumentet er rotete eller vanskelig å lese. Struktur og layout betyr mer enn mange tror.",
            },
            {
            type: "heading",
            text: "5. Du følger ikke opp tilbudet",
            },
            {
            type: "paragraph",
            text: "Mange kunder svarer ikke med én gang. En enkel og høflig oppfølging etter noen dager kan være nok til å få dialogen i gang igjen.",
            },
            {
            type: "link",
            href: "/folle-opp-tilbud",
            label: "Les hvordan du følger opp tilbud på en god måte",
            },
            {
            type: "note",
            text: "Ofte er det ikke prisen alene som avgjør. Et ryddig og tydelig tilbud kan være det som gjør at kunden velger deg.",
            },
            {
            type: "cta",
            text: "Vil du sende mer profesjonelle tilbud? Lag dem enkelt i Jobbleder.",
            },
            {
            type: "link",
            href: "https://app.jobbleder.no",
            label: "Opprett tilbud gratis",
            },
        ],
    },
    {
        id: 7,
        title: "Hvordan føre timelister effektivt – spesielt for selvstendig næringsdrivende",
        slug: "effektiv-timeliste",
        summary:
            "Slik fører du timelister mer effektivt og får bedre oversikt over arbeidstid, prosjekter og dokumentasjon.",
        category: "Timeliste",
        tags: ["timeliste", "timeføring", "dokumentasjon", "selvstendig", "bygg"],
        createdAt: "2025-04-24",
        seoTitle: "Hvordan føre timelister effektivt",
        seoDescription:
            "Lær hvordan du fører timelister effektivt og hva en god timeliste bør inneholde for bedre oversikt og dokumentasjon.",
        relatedTopic: "timeliste",
        blocks: [
            {
                "type": "paragraph",
                "text": "God timeføring handler om å kunne forstå arbeidsdagen i etterkant. Før dato, tidsrom, pause og en konkret arbeidsbeskrivelse mens du fortsatt husker oppgaven. Da har du et bedre grunnlag når du skal samle dagene eller forklare arbeidet for kunden."
            },
            {
                "type": "heading",
                "text": "Før det du trenger senere"
            },
            {
                "type": "list",
                "items": [
                    "Dato og prosjekt eller oppdrag.",
                    "Inn- og uttid, og hvor lang pausen var.",
                    "Om pausen var betalt eller ubetalt.",
                    "En beskrivelse som sier hva du gjorde, for eksempel «Montering av gipsplater på vegg».",
                    "Arbeidernavnet når du oppretter timelisten."
                ]
            },
            {
                "type": "heading",
                "text": "Eksempel: 08:00–16:00 med pause"
            },
            {
                "type": "paragraph",
                "text": "Du arbeider fra 08:00 til 16:00 og har 30 minutter ubetalt pause. Tidsrommet er åtte timer; etter pausen blir arbeidstiden sju timer og tretti minutter. Før pausen som et eget felt, slik at det er tydelig hvordan timene henger sammen."
            },
            {
                "type": "paragraph",
                "text": "Beskriv oppgaven i stedet for å skrive bare «arbeid». Kontroller dato og prosjekt før du bruker dagen i et dokument. Når du samler flere dager, bør du også se etter manglende eller dobbeltførte oppføringer."
            },
            {
                "type": "textLink",
                "href": "/timeliste-uke",
                "label": "Slik samler og kontrollerer du en ukentlig timeliste"
            },
            {
                "type": "heading",
                "text": "Fra daglig registrering til kontrollert timeliste"
            },
            {
                "type": "steps",
                "items": [
                    {
                        "title": "Registrer og lagre arbeidsdagen.",
                        "text": "I Jobbleder kan du føre timer, pause og beskrivelse i nettleseren på mobilen. Kontroller feltene og velg Lagre registrering."
                    },
                    {
                        "title": "Velg dagene du vil bruke.",
                        "text": "Marker lagrede registreringer og velg Importer til timeliste. Ta med de oppføringene som hører til dokumentet du skal lage."
                    },
                    {
                        "title": "Se over dokumentet.",
                        "text": "Kontroller radene, prosjektet og arbeidernavnet før du lagrer timelisten eller genererer PDF. Du kan også opprette timelisten direkte og fylle inn arbeidsdagene selv."
                    }
                ]
            },
            {
                "type": "textLink",
                "href": "/timeliste-mal#registrer-pa-mobil",
                "label": "Se registrering av arbeidstimer i mobilnettleseren"
            },
            {
                "type": "textLink",
                "href": "/instruksjoner#importer-arbeidsokter-til-timeliste",
                "label": "Følg veiledningen for å importere registreringer"
            },
            {
                "type": "heading",
                "text": "Når timene skal brukes videre"
            },
            {
                "type": "paragraph",
                "text": "En kontrollert timeliste kan eksporteres som PDF eller brukes til å opprette en faktura. Gå også gjennom fakturaens kunde, antall og satser før du lager PDF og sender den selv. Dokumentoppretting og konvertering er tilgjengelig i Jobbleder Free."
            },
            {
                "type": "textLink",
                "href": "/blogg/timeliste-og-faktura",
                "label": "Fra timeliste til faktura: hva du bør kontrollere"
            },
            {
                "type": "paragraph",
                "text": "Har arbeidsdagen flere ulike oppgaver, er det nyttig å skille beskrivelsene og markere ekstraarbeid når det gjelder registreringen. Ikke legg inn samme tidsrom flere ganger for den samme oppgaven."
            },
            {
                "type": "textLink",
                "href": "/blogg/timeliste-for-handverkere",
                "label": "Se et eksempel med ekstraarbeid og kilometer på oppdrag"
            }
        ],
    },
    {
        id: 8,
        title: "Hvordan lage en faktura gratis på nett?",
        slug: "hvordan-lage-gratis-faktura",
        summary:
            "Lær hvordan du kan lage en profesjonell faktura gratis på nett, uten nedlasting og uten kompliserte systemer.",
        category: "Faktura",
        tags: [
            "faktura",
            "gratis fakturaprogram",
            "faktura på nett",
            "småbedrift",
            "håndverker",
        ],
        createdAt: "2025-07-23",
        seoTitle: "Hvordan lage en faktura gratis på nett",
        seoDescription:
            "Slik lager du en profesjonell faktura gratis på nett. Enkel oversikt over hva en faktura bør inneholde og hvordan du kommer i gang.",
        relatedTopic: "faktura",
        blocks: [
            {
            type: "paragraph",
            text: "Å lage en faktura skal ikke være komplisert eller koste deg mer tid enn nødvendig. Enten du er håndverker, driver enkeltpersonforetak eller tar små oppdrag ved siden av, trenger du en enkel måte å fakturere på uten tunge systemer og unødvendige kostnader.",
            },
            {
            type: "heading",
            text: "Hva må en faktura inneholde?",
            },
            {
            type: "paragraph",
            text: "En tydelig faktura bør inneholde den viktigste informasjonen kunden trenger for å forstå hva som er levert og hva som skal betales.",
            },
            {
            type: "list",
            items: [
                "Firmanavn og organisasjonsnummer",
                "Kundeinformasjon",
                "Fakturanummer og dato",
                "Forfallsdato",
                "Beskrivelse av tjeneste eller produkt",
                "Totalsum og eventuell MVA",
            ],
            },
            {
            type: "heading",
            text: "Hvorfor velge et gratis fakturaprogram?",
            },
            {
            type: "list",
            items: [
                "Du slipper dyre lisenskostnader",
                "Du kan jobbe direkte i nettleseren",
                "Du genererer PDF raskt",
                "Du samler dokumentene på ett sted",
            ],
            },
            {
            type: "heading",
            text: "Slik lager du en faktura enkelt",
            },
            {
            type: "list",
            items: [
                "Opprett en ny faktura",
                "Fyll inn kundeinformasjon",
                "Beskriv arbeidet eller varen",
                "Legg inn pris og betalingsinformasjon",
                "Last ned eller send fakturaen videre",
            ],
            },
            {
            type: "link",
            href: "/lage-faktura",
            label: "Les mer om hvordan du lager faktura",
            },
            {
            type: "note",
            text: "Jo enklere systemet er å bruke, desto større er sjansen for at du faktisk får sendt fakturaen med én gang jobben er ferdig.",
            },
            {
            type: "cta",
            text: "Vil du lage faktura gratis på nett? Prøv Jobbleder direkte i nettleseren.",
            },
            {
            type: "link",
            href: "https://app.jobbleder.no",
            label: "Start gratis",
            },
        ],
    },
    {
        id: 10,
        title: "Hva er et tilbudsdokument og hvordan lager du ett?",
        slug: "lage-tilbudsdokument",
        summary:
            "Lær hva et tilbudsdokument er, hva det bør inneholde, og hvordan du lager et tydelig og profesjonelt tilbud.",
        category: "Tilbud",
        tags: [
            "tilbud",
            "tilbudsdokument",
            "hvordan skrive tilbud",
            "gratis tilbud",
            "småbedrift",
        ],
        createdAt: "2025-07-23",
        seoTitle: "Hva er et tilbudsdokument og hvordan lager du ett?",
        seoDescription:
            "Lær hva et tilbudsdokument er, hva som bør være med, og hvordan du lager et profesjonelt tilbud på en enkel måte.",
        relatedTopic: "tilbud",
        blocks: [
            {
            type: "paragraph",
            text: "Når en kunde spør om pris, er tilbudet ofte det første profesjonelle dokumentet du sender. Et godt tilbudsdokument forklarer hva du skal gjøre, hva det vil koste og hvilke vilkår som gjelder.",
            },
            {
            type: "heading",
            text: "Hva er et tilbudsdokument?",
            },
            {
            type: "paragraph",
            text: "Et tilbudsdokument beskriver arbeidet eller tjenesten du tilbyr kunden. Det gir en oversikt over pris, innhold og eventuelle betingelser, og hjelper kunden med å ta stilling til om de vil gå videre.",
            },
            {
            type: "heading",
            text: "Dette bør et tilbud inneholde",
            },
            {
            type: "list",
            items: [
                "Firmanavn og kontaktinformasjon",
                "Kundens navn og informasjon",
                "Beskrivelse av prosjektet",
                "Pris og eventuelle tillegg",
                "Gyldighetsperiode",
            ],
            },
            {
            type: "heading",
            text: "Hvorfor er et godt tilbud viktig?",
            },
            {
            type: "paragraph",
            text: "Et ryddig tilbud gir et bedre førsteinntrykk og gjør det enklere for kunden å forstå hva du faktisk tilbyr. Det kan også gjøre det lettere å unngå misforståelser senere i prosessen.",
            },
            {
            type: "heading",
            text: "Digitalt tilbud sparer tid",
            },
            {
            type: "paragraph",
            text: "Når du lager tilbud digitalt, kan du jobbe raskere og bruke en fast struktur hver gang. Det gir mer konsistente dokumenter og mindre manuelt arbeid.",
            },
            {
            type: "link",
            href: "/lage-tilbud",
            label: "Les mer om hvordan du lager tilbud",
            },
            {
            type: "note",
            text: "Et tydelig tilbud handler ikke bare om pris. Det handler også om tillit, struktur og å gjøre beslutningen enklere for kunden.",
            },
            {
            type: "cta",
            text: "Vil du lage profesjonelle tilbud raskt? Prøv Jobbleder gratis.",
            },
            {
            type: "link",
            href: "https://app.jobbleder.no",
            label: "Opprett tilbud gratis",
            },
        ],
    },
    {
        id: 2,
        title: "Faktura, timeliste og tilbud – hva er forskjellen og når bruker du dem?",
        slug: "forskjell-faktura-tilbud-timeliste",
        summary:
            "Usikker på forskjellen mellom faktura, timeliste og tilbud? Her får du en enkel oversikt over når du bruker hvert dokument.",
        category: "Oversikt",
        tags: ["faktura", "tilbud", "timeliste", "forskjell", "dokument"],
        createdAt: "2025-04-21",
        seoTitle: "Forskjellen på faktura, tilbud og timeliste",
        seoDescription:
            "Her er en enkel forklaring på forskjellen mellom faktura, tilbud og timeliste – og når du bør bruke dem.",
        relatedTopic: "oversikt",
        blocks: [
            {
            type: "paragraph",
            text: "Hvis du er ny som selvstendig næringsdrivende, eller bare vil få bedre kontroll på dokumentene dine, kan det være vanskelig å vite når du skal sende faktura, når du bør lage tilbud, og når timeliste er nyttig.",
            },
            {
            type: "paragraph",
            text: "Her får du en enkel oversikt over hva som skiller disse dokumentene – og når de vanligvis brukes.",
            },
            {
            type: "heading",
            text: "Hva er et tilbud?",
            },
            {
            type: "paragraph",
            text: "Et tilbud sendes vanligvis før jobben starter. Det beskriver hva du kan gjøre for kunden, hva det vil koste og hvilke vilkår som gjelder.",
            },
            {
            type: "heading",
            text: "Hva er en timeliste?",
            },
            {
            type: "paragraph",
            text: "En timeliste er en oversikt over hvor mange timer som er brukt, og ofte også hva som ble gjort. Den er nyttig både som egen dokumentasjon og som grunnlag for videre arbeid.",
            },
            {
            type: "heading",
            text: "Hva er en faktura?",
            },
            {
            type: "paragraph",
            text: "En faktura sendes etter at jobben er utført, når du skal kreve betaling. Den oppsummerer hva kunden skal betale for og bør være tydelig satt opp.",
            },
            {
            type: "heading",
            text: "Hvordan henger de sammen?",
            },
            {
            type: "list",
            items: [
                "Tilbud – før du starter jobben",
                "Timeliste – underveis, når du vil dokumentere timer",
                "Faktura – når jobben er ferdig og du skal ha betalt",
            ],
            },
            {
            type: "paragraph",
            text: "For mange små bedrifter og håndverkere er det nyttig å ha alle disse dokumenttypene samlet i ett system. Da blir det enklere å holde oversikt og jobbe mer strukturert.",
            },
            {
            type: "link",
            href: "/instruksjoner",
            label: "Se instruksjoner for hvordan Jobbleder fungerer",
            },
            {
            type: "note",
            text: "Når du forstår forskjellen på disse dokumentene, blir det mye enklere å bygge gode rutiner rundt både salg, dokumentasjon og fakturering.",
            },
            {
            type: "cta",
            text: "Vil du lage faktura, timeliste og tilbud i ett system? Prøv Jobbleder gratis.",
            },
            {
            type: "link",
            href: "https://app.jobbleder.no",
            label: "Kom i gang gratis",
            },
        ],
    },
    {
        id: 4,
        title: "Hvordan følge opp et sendt tilbud og lande flere jobber",
        slug: "folle-opp-tilbud",
        summary:
            "Lær hvordan du følger opp et sendt tilbud på en profesjonell måte og øker sjansen for å få svar fra kunden.",
        category: "Tilbud",
        tags: ["oppfølging", "kundekontakt", "tilbud", "salg"],
        createdAt: "2025-04-23",
        seoTitle: "Hvordan følge opp et sendt tilbud og lande flere jobber",
        seoDescription:
            "Slik følger du opp et sendt tilbud på en profesjonell måte og øker sjansen for å få respons fra kunden.",
        relatedTopic: "tilbud",
        blocks: [
            {
            type: "paragraph",
            text: "Du har brukt tid på å lage et godt tilbud, men det er ikke alltid nok å bare sende det og vente. Mange kunder trenger litt tid, og ofte også en høflig oppfølging før de tar en beslutning.",
            },
            {
            type: "heading",
            text: "Hvorfor oppfølging er viktig",
            },
            {
            type: "paragraph",
            text: "Når du følger opp et tilbud på en rolig og profesjonell måte, viser du at du er tilgjengelig, strukturert og interessert i oppdraget. Det kan være akkurat det som skal til for å få svar.",
            },
            {
            type: "heading",
            text: "Når bør du følge opp?",
            },
            {
            type: "paragraph",
            text: "En god tommelfingerregel er å vente et par dager etter at tilbudet er sendt. I mange tilfeller passer det fint å følge opp etter 2 til 4 dager, avhengig av type jobb og hvor omfattende tilbudet er.",
            },
            {
            type: "heading",
            text: "Hvordan følge opp på en god måte",
            },
            {
            type: "paragraph",
            text: "Hold meldingen kort, tydelig og vennlig. Målet er ikke å presse kunden, men å minne på tilbudet og åpne for spørsmål.",
            },
            {
            type: "note",
            text: "Et enkelt spørsmål som «Har du fått sett på tilbudet?» er ofte mer enn nok for å starte dialogen igjen.",
            },
            {
            type: "heading",
            text: "Hvis kunden ikke svarer",
            },
            {
            type: "paragraph",
            text: "Hvis du ikke får svar første gang, kan du sende én siste høflig påminnelse etter omtrent en uke. Deretter er det ofte best å la saken ligge, slik at oppfølgingen fortsatt oppleves profesjonell.",
            },
            {
            type: "paragraph",
            text: "En god oppfølging handler om timing, tydelighet og tone. Det viktigste er at kunden føler at det er enkelt å svare deg.",
            },
            {
            type: "link",
            href: "/hvordan-folge-opp-tilbud",
            label: "Les mer om oppfølging av tilbud",
            },
            {
            type: "cta",
            text: "Vil du lage og følge opp tilbud enklere? Bruk Jobbleder til å holde orden på tilbudene dine.",
            },
            {
            type: "link",
            href: "https://app.jobbleder.no",
            label: "Opprett tilbud gratis",
            },
        ],
    },
    {
        id: 11,
        title: "Timeliste for håndverkere – hvorfor gode rutiner sparer deg for tid",
        slug: "timeliste-for-handverkere",
        summary:
            "Gode rutiner for timelister gjør det enklere å dokumentere arbeidstid, holde oversikt og bruke timer som grunnlag for videre arbeid.",
        category: "Timeliste",
        tags: ["timeliste", "håndverker", "arbeidstid", "timeføring", "prosjekt"],
        createdAt: "2026-02-10",
        seoTitle: "Timeliste for håndverkere – hvorfor gode rutiner er viktige",
        seoDescription:
            "Slik bruker håndverkere timelister for bedre oversikt, dokumentasjon og enklere arbeidshverdag.",
        relatedTopic: "timeliste",
        blocks: [
            {
                "type": "paragraph",
                "text": "På et oppdrag kan parkettlegging, montering og bortkjøring av avfall være ulike arbeidsoppgaver. Tydelige beskrivelser gjør det enklere å se hva timene gjelder når du skal dokumentere jobben for kunden. Før oppgavene mens du husker dem, med dato, tidsrom og pause."
            },
            {
                "type": "heading",
                "text": "Beskriv oppgaven, ikke bare arbeidsdagen"
            },
            {
                "type": "list",
                "items": [
                    "«Legging av parkett» forklarer mer enn «arbeid».",
                    "«Bortkjøring av avfall» skiller transportoppgaven fra arbeidet på byggeplassen.",
                    "Bruk riktig dato og unngå å føre samme arbeidstid både som vanlig arbeid og ekstraarbeid."
                ]
            },
            {
                "type": "heading",
                "text": "Et eget eksempel med ekstraarbeid og kilometer"
            },
            {
                "type": "productExample",
                "asset": "mobileRegistrationExtra",
                "paragraphs": [
                    "Skjermbildet viser en registrering for bortkjøring av avfall: 08:00–10:00, uten pause, med 50 KM og Marker som ekstra valgt. Det er ett eksempel på en oppgave, ikke hele arbeidsdagen eller et ferdig dokument.",
                    "Du velger selv om registreringen skal markeres som ekstraarbeid. Markeringen er ikke automatisk beregning av overtid. KM-feltet er tilgjengelig når Aktiver KM er slått på under Innstillinger → Standard for timeliste.",
                    "Kontroller beskrivelsen, tidene, eventuell pause, KM og ekstra-markeringen før du velger Lagre registrering."
                ],
                "alt": "Mobilregistrering for bortkjøring av avfall med 50 KM, Marker som ekstra valgt og knappen Lagre registrering",
                "caption": "Et eget mobileksempel før lagring. Ekstra er valgt, og kilometerfeltet er fylt inn."
            },
            {
                "type": "textLink",
                "href": "/instruksjoner#legg-til-en-arbeidsokt",
                "label": "Se hvordan du legger til en arbeidsregistrering"
            },
            {
                "type": "heading",
                "text": "Samle de riktige oppgavene under prosjektet"
            },
            {
                "type": "steps",
                "items": [
                    {
                        "title": "Velg det som hører til oppdraget.",
                        "text": "Marker de lagrede registreringene du vil bruke, og velg Importer til timeliste. Kontroller at du har valgt riktige dager og oppgaver."
                    },
                    {
                        "title": "Identifiser timelisten.",
                        "text": "Velg prosjekt og skriv arbeidernavnet når du oppretter dokumentet. Navnet forteller hvem timene gjelder; du oppretter ikke en ansattkonto."
                    },
                    {
                        "title": "Kontroller før du lager PDF.",
                        "text": "Se gjennom datoer, pauser, beskrivelser, timer og eventuelle kilometer. Sjekk at ekstraarbeid er markert på de riktige radene før du lagrer eller genererer dokumentet."
                    }
                ]
            },
            {
                "type": "textLink",
                "href": "/timeliste-prosjekt",
                "label": "Dokumenter timer og oppgaver på et bestemt prosjekt"
            },
            {
                "type": "paragraph",
                "text": "Når flere personers arbeid skal dokumenteres, er det viktig at det enkelte dokumentet har riktig arbeidernavn og forståelige arbeidsrader. Jobbleder knytter timene til navnet du skriver inn i timelisten."
            },
            {
                "type": "textLink",
                "href": "/timeliste-ansatt",
                "label": "Slik bruker du arbeidernavn i timelisten"
            },
            {
                "type": "heading",
                "text": "Bruk den gjennomgåtte timelisten videre"
            },
            {
                "type": "paragraph",
                "text": "Du kan dele PDF-en som dokumentasjon eller bruke timelisten som grunnlag for en faktura. Før fakturaen sendes, må du selv kontrollere kunde, linjer, antall og satser. Lag faktura-PDF-en og send den til kunden selv."
            },
            {
                "type": "textLink",
                "href": "/blogg/timeliste-og-faktura",
                "label": "Se hvordan timelisten brukes som fakturagrunnlag"
            },
            {
                "type": "textLink",
                "href": "/timeliste-mal#registrer-pa-mobil",
                "label": "Se Jobbleders registreringer i mobilnettleseren"
            }
        ],
    },
    {
        id: 12,
        title: "Timeliste og faktura – hvordan henger de sammen?",
        slug: "timeliste-og-faktura",
        summary:
            "Lær hvordan timelister og faktura henger sammen, og hvorfor god timeføring gjør videre dokumentarbeid enklere.",
        category: "Timeliste",
        tags: ["timeliste", "faktura", "timeføring", "dokumentasjon", "arbeidstid"],
        createdAt: "2026-02-15",
        seoTitle: "Timeliste og faktura – slik henger de sammen",
        seoDescription:
            "Slik bruker du timeliste som grunnlag for tydeligere og enklere fakturaarbeid.",
        relatedTopic: "timeliste",
        blocks: [
            {
                "type": "paragraph",
                "text": "Timelisten dokumenterer når og hva du har arbeidet med. Fakturaen bruker det kontrollerte grunnlaget sammen med kundeopplysninger, antall og priser. I Jobbleder kan du opprette faktura fra en lagret timeliste, men du må fortsatt gjennomgå innholdet før du sender noe til kunden."
            },
            {
                "type": "heading",
                "text": "Fra arbeidsregistrering til faktura, steg for steg"
            },
            {
                "type": "steps",
                "items": [
                    {
                        "title": "Registrer arbeidet.",
                        "text": "Før dato, inn- og uttid, pause og arbeidsbeskrivelse i mobilnettleseren. Ta med kilometer når KM er aktivert, og marker ekstraarbeid ved behov. Kontroller feltene og velg Lagre registrering."
                    },
                    {
                        "title": "Velg og importer registreringene.",
                        "text": "Marker de lagrede oppføringene du vil bruke, og velg Importer til timeliste. Velg prosjekt, skriv arbeidernavnet og knytt til kunde ved behov. Du kan også opprette timelisten direkte uten import."
                    },
                    {
                        "title": "Kontroller og lagre timelisten.",
                        "text": "Gå gjennom dager, beskrivelser, pauser og summer. Lagre dokumentet når innholdet er riktig. Du kan generere en timeliste-PDF som dokumentasjon; PDF-eksport er et eget valg."
                    },
                    {
                        "title": "Opprett faktura fra dokumentet.",
                        "text": "Åpne den lagrede timelisten i Dokumenter, og velg Opprett faktura under forhåndsvisningen. Bruk timelistens opplysninger som grunnlag i den nye fakturaen."
                    },
                    {
                        "title": "Kontroller fakturaen før du sender den.",
                        "text": "Sjekk kunde, prosjekt, datoer, antall, enhetspriser, MVA og summer. Når fakturaen er klar, kan du generere PDF og sende den til kunden selv."
                    }
                ]
            },
            {
                "type": "textLink",
                "href": "/instruksjoner#timeliste-til-faktura",
                "label": "Følg knappene i veiledningen Timeliste → Faktura"
            },
            {
                "type": "heading",
                "text": "Fire kategorier holdes hver for seg"
            },
            {
                "type": "paragraph",
                "text": "Konverteringen skiller vanlige timer, ekstra timer, vanlige kilometer og ekstra kilometer. I mobileksemplet nedenfor er grunnlaget Timeliste 265, med disse mengdene:"
            },
            {
                "type": "list",
                "items": [
                    "Vanlige timer: 9 timer og 30 minutter.",
                    "Ekstra timer: 2 timer.",
                    "Vanlige kilometer: 45 km.",
                    "Ekstra kilometer: 50 km."
                ]
            },
            {
                "type": "productExample",
                "asset": "mobileInvoiceSummary",
                "paragraphs": [
                    "Linjetekstene viser Timeliste 265 og arbeidernavnet Demo. Vanlige timer og ekstra timer ligger på ulike linjer, og det samme gjelder kilometer. Tallene tilhører dette mobileksemplet.",
                    "Kontroller mengder og enhetspriser mot avtalen for oppdraget. Ekstra-markeringen skiller radene fra vanlig arbeid; den beregner ikke overtid eller lønn."
                ],
                "alt": "Mobilforhåndsvisning av fakturalinjer fra Timeliste 265 med vanlige timer, ekstra timer, vanlige kilometer og ekstra kilometer",
                "caption": "Et eget dokumenteksempel med Timeliste 265 som kilde. Bildet viser fakturalinjer i Jobbleder, ikke et eksportert PDF-dokument."
            },
            {
                "type": "heading",
                "text": "Et tydelig prosjekt gjør grunnlaget enklere å forstå"
            },
            {
                "type": "paragraph",
                "text": "Arbeidsbeskrivelsen bør vise hva kunden faktisk får dokumentert. Kontroller at timene hører til riktig oppdrag, og at kunde og prosjekt stemmer i både timelisten og fakturaen. En ryddig timeliste erstatter ikke denne gjennomgangen."
            },
            {
                "type": "textLink",
                "href": "/timeliste-prosjekt",
                "label": "Se hvordan du dokumenterer timer per prosjekt"
            },
            {
                "type": "paragraph",
                "text": "Arbeidsregistreringer, timelister, PDF-eksport og konvertering til faktura er med i Free. Free-PDF-er har Jobbleder-vannmerke. Med Premium kan du fjerne merkingen og bruke egen firmalogo."
            },
            {
                "type": "textLink",
                "href": "/timeliste-mal",
                "label": "Se Timeliste-verktøyet og dokumenteksemplene"
            },
            {
                "type": "textLink",
                "href": "/fakturaprogram-gratis",
                "label": "Les om faktura i Jobbleder"
            }
        ],
    },
    {
      id: 13,
      title: "Faktura eksempel for små bedrifter – hva bør det vise?",
      slug: "faktura-eksempel-sma-bedrifter",
      summary: "Et godt faktura eksempel gjør det enklere å forstå hvordan et ryddig dokument bør se ut for små bedrifter.",
      category: "Faktura",
      tags: [
        "faktura",
        "faktura eksempel",
        "små bedrifter",
        "betaling",
        "oppsett"
      ],
      createdAt: "2026-02-25",
      seoTitle: "Faktura eksempel for små bedrifter",
      seoDescription: "Se hva et godt faktura eksempel bør vise, og hvordan små bedrifter kan lage tydelige fakturaer.",
      relatedTopic: "faktura",
      blocks: [
        {
          type: "paragraph",
          text: "Tenk deg at en liten håndverksbedrift har utført parkettarbeid til avtalt pris. Kunden skal kunne kontrollere hva prisen gjelder uten å måtte be om en forklaring på hvert beløp. Jobbleders Faktura 110 viser et slikt eksempel med demonstrasjonsdata."
        },
        {
          type: "heading",
          text: "Hva bør et faktura eksempel vise?"
        },
        {
          type: "list",
          items: [
            "Hvem selgeren og kunden er.",
            "Hva som er levert, og hvilket arbeid eller omfang prisen gjelder.",
            "Fakturanummer, fakturadato og betalingsforfall.",
            "Pris før MVA, eventuell MVA og totalbeløpet.",
            "Tydelige opplysninger om hvordan kunden skal betale."
          ]
        },
        {
          type: "heading",
          text: "Parkettarbeid til avtalt pris"
        },
        {
          type: "paragraph",
          text: "Eksemplets linje «Legging av parkett» har antall 1 og enhetspris 12 000 kroner før MVA. Her er prisen for arbeidet samlet på én linje. Antall 1 er ikke en opplysning om én arbeidstime eller én kvadratmeter; det er enheten som brukes i dette priseksemplet."
        },
        {
          type: "invoiceFigure",
          variant: "line"
        },
        {
          type: "heading",
          text: "Fra nettopris til beløpet kunden betaler"
        },
        {
          type: "steps",
          items: [
            {
              title: "Beregn nettobeløpet.",
              text: "1 × 12 000 kroner = 12 000 kroner før MVA."
            },
            {
              title: "Legg til MVA for dette eksemplet.",
              text: "25 prosent av 12 000 kroner er 3 000 kroner."
            },
            {
              title: "Kontroller totalen.",
              text: "12 000 + 3 000 = 15 000 kroner å betale."
            }
          ]
        },
        {
          type: "paragraph",
          text: "Dette er regnestykket i dokumentet, ikke en anbefaling om pris eller MVA-behandling for alle oppdrag. Bruk satsen og opplysningene som gjelder for ditt salg."
        },
        {
          type: "heading",
          text: "Hvorfor oppsettet betyr noe"
        },
        {
          type: "paragraph",
          text: "Kunden bør kunne sammenholde arbeidsbeskrivelsen med avtalen og se hvordan nettopris, avgift og total henger sammen. For ditt eget oppdrag bør beskrivelsen gjøre det klart hvilket arbeid avtalt pris dekker, med relevante leveringsopplysninger. Bankkonto og betalingsreferanse hjelper kunden å gjennomføre betalingen."
        },
        {
          type: "textLink",
          href: "/faktura-eksempel",
          label: "Se hele Faktura 110 og forklaringen av dokumentfeltene"
        },
        {
          type: "textLink",
          href: "/faktura-krav",
          label: "Les hva som er krav og hva som er praktiske tillegg"
        },
        {
          type: "paragraph",
          text: "I Jobbleder kan du legge inn fakturalinjene, kontrollere summene og generere PDF i Free. Free-PDF-en har Jobbleder-vannmerke. Last ned filen og send den selv til kunden."
        },
        {
          type: "link",
          href: "https://app.jobbleder.no",
          label: "Opprett faktura gratis"
        }
      ]
    },
    {
        id: 14,
        title: "Når bør du sende faktura for å få raskere betaling?",
        slug: "nar-sende-faktura",
        summary:
            "Timing betyr mye. Her ser du når det er smartest å sende faktura, og hvorfor raske rutiner gir bedre flyt.",
        category: "Faktura",
        tags: ["faktura", "betaling", "forfallsdato", "småbedrift", "rutiner"],
        createdAt: "2026-02-28",
        seoTitle: "Når bør du sende faktura for raskere betaling?",
        seoDescription:
            "Lær hvorfor timing er viktig når du sender faktura, og hvordan gode rutiner kan gi raskere betaling.",
        relatedTopic: "faktura",
        blocks: [
            {
            type: "paragraph",
            text: "Mange tenker mest på hvordan fakturaen ser ut, men tidspunktet du sender den på betyr også mye. Jo tidligere du får sendt fakturaen etter at arbeidet er gjort, desto enklere blir det å holde god flyt i oppfølging og betaling.",
            },
            {
            type: "heading",
            text: "Hvorfor timing er viktig",
            },
            {
            type: "paragraph",
            text: "Når fakturaen sendes raskt, er arbeidet fortsatt ferskt i minnet hos kunden. Det gjør dokumentet lettere å forstå og minsker risikoen for forsinkelser.",
            },
            {
            type: "heading",
            text: "Gode rutiner gjør hverdagen enklere",
            },
            {
            type: "list",
            items: [
                "Lag faktura så snart jobben er ferdig",
                "Ha tydelig betalingsfrist",
                "Bruk faste rutiner for oppfølging",
                "Sørg for at dokumentet er ryddig og lett å lese",
            ],
            },
            {
            type: "note",
            text: "Det er ofte ikke kompliserte systemer som mangler, men gode vaner rundt når dokumentene faktisk blir sendt.",
            },
            {
            type: "link",
            href: "/lage-faktura",
            label: "Les mer om å lage faktura",
            },
            {
            type: "cta",
            text: "Vil du sende faktura raskere og mer oversiktlig? Prøv Jobbleder gratis.",
            },
            {
            type: "link",
            href: "https://app.jobbleder.no",
            label: "Start gratis",
            },
        ],
    },
    {
        id: 15,
        title: "Tilbud eller pristilbud – hva forventer kunden egentlig?",
        slug: "tilbud-eller-pristilbud",
        summary:
            "Lær hva kunden forventer av et tilbud eller pristilbud, og hvordan du gjør dokumentet tydeligere og mer profesjonelt.",
        category: "Tilbud",
        tags: ["tilbud", "pristilbud", "kunde", "pris", "oppsett"],
        createdAt: "2026-03-05",
        seoTitle: "Tilbud eller pristilbud – hva forventer kunden?",
        seoDescription:
            "Slik lager du et tydelig tilbud eller pristilbud som er lett for kunden å forstå og ta stilling til.",
        relatedTopic: "tilbud",
        blocks: [
            {
            type: "paragraph",
            text: "Når en kunde ber om pris, forventer de ofte et dokument som er lett å lese og enkelt å forstå. Enten du kaller det tilbud eller pristilbud, er målet det samme: å gjøre beslutningen enklere for kunden.",
            },
            {
            type: "heading",
            text: "Hva kunden ser etter",
            },
            {
            type: "list",
            items: [
                "Hva som faktisk inngår",
                "Hva det vil koste",
                "Om det finnes tillegg eller forbehold",
                "Hvor lenge tilbudet gjelder",
            ],
            },
            {
            type: "heading",
            text: "Hvorfor tydelighet vinner",
            },
            {
            type: "paragraph",
            text: "Et utydelig tilbud skaper spørsmål. Et tydelig tilbud gjør det lettere for kunden å si ja, fordi de raskt forstår hva de får og hva de skal forholde seg til.",
            },
            {
            type: "note",
            text: "Mange gode tilbud taper ikke på pris, men på at de er for uklare eller for svake i presentasjonen.",
            },
            {
            type: "link",
            href: "/tilbud-eksempel",
            label: "Se vår guide til tilbud eksempel",
            },
            {
            type: "cta",
            text: "Vil du lage tydelige og profesjonelle tilbud raskt? Prøv Jobbleder gratis.",
            },
            {
            type: "link",
            href: "https://app.jobbleder.no",
            label: "Opprett tilbud gratis",
            },
        ],
    },
    {
        id: 16,
        title: "Tilbud vs kontrakt – hva er forskjellen?",
        slug: "tilbud-vs-kontrakt",
        summary: "Lær forskjellen mellom tilbud og kontrakt og når du bør bruke hvert dokument.",
        category: "Kontrakt",
        tags: ["tilbud", "kontrakt", "forskjell"],
        createdAt: "2026-04-07",
        relatedTopic: "kontrakt",
        blocks: [
            { type: "paragraph", text: "Mange blander tilbud og kontrakt..." },
            { type: "heading", text: "Hva er et tilbud?" },
            { type: "paragraph", text: "Tilbud sendes før arbeid starter..." },
            { type: "heading", text: "Hva er en kontrakt?" },
            { type: "paragraph", text: "Kontrakten er en bindende avtale..." },
            { type: "heading", text: "Når bruker du hva?" },
            {
            type: "list",
            items: [
                "Tilbud – før avtale",
                "Kontrakt – når avtalen er bekreftet",
            ],
            },
            { type: "cta", text: "Vil du gjøre tilbud om til kontrakt? Prøv Jobbleder." },
        ],
    },
    {
        id: 17,
        title: "Når trenger du kontrakt som håndverker?",
        slug: "nar-trenger-du-kontrakt",
        summary: "Se når du bør bruke kontrakt og hvorfor det er viktig i byggebransjen.",
        category: "Kontrakt",
        tags: ["kontrakt", "håndverker"],
        createdAt: "2026-04-07",
        relatedTopic: "kontrakt",
        blocks: [
            { type: "paragraph", text: "Mange jobber uten kontrakt..." },
            { type: "heading", text: "Når bør du bruke kontrakt?" },
            {
            type: "list",
            items: [
                "Større jobber",
                "Langvarige prosjekter",
                "Når pris må dokumenteres",
            ],
            },
            { type: "note", text: "Kontrakt gir trygghet for begge parter." },
            { type: "cta", text: "Opprett kontrakt enkelt i Jobbleder." },
        ],
    },
    {
        id: 18,
        title: "Fra tilbud til kontrakt og faktura – slik fungerer det",
        slug: "fra-tilbud-til-kontrakt-og-faktura",
        summary: "Se hvordan hele prosessen fungerer fra første tilbud til betaling.",
        category: "Oversikt",
        tags: ["workflow", "tilbud", "kontrakt", "faktura"],
        createdAt: "2026-04-07",
        relatedTopic: "oversikt",
        blocks: [
            { type: "paragraph", text: "En god arbeidsflyt gjør alt enklere..." },
            { type: "heading", text: "1. Lag tilbud" },
            { type: "heading", text: "2. Opprett kontrakt" },
            { type: "heading", text: "3. Utfør arbeid" },
            { type: "heading", text: "4. Send faktura" },
            { type: "cta", text: "Vil du ha alt i ett system? Prøv Jobbleder." },
        ],
    },
]


export const blogCategories = ["Timeliste", "Faktura", "Tilbud", "Kontrakt", "Oversikt"] as const

export function getPostsByCategory(category: string) {
  return blogPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
}
