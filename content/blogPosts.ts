export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "cta"; text: string }
  | { type: "link"; href: string; label: string }
  | { type: "note"; text: string }

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
  relatedTopic?: "timeliste" | "faktura" | "tilbud" | "oversikt"
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
            type: "heading",
            text: "Hva inneholder en god timeliste?",
            },
            {
            type: "paragraph",
            text: "En god timeliste bør gjøre det enkelt å dokumentere arbeidstid tydelig. Den bør minst inneholde dato, arbeidstid, pauser, arbeidsbeskrivelse og total antall timer.",
            },
            {
            type: "list",
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
            type: "heading",
            text: "PDF eller digital timeliste?",
            },
            {
            type: "paragraph",
            text: "En PDF-mal er nyttig når du vil skrive ut eller fylle ut manuelt. Men hvis du fører timer ofte, er en digital timeliste vanligvis mer praktisk. Da kan du oppdatere fortløpende, lagre alt automatisk og laste ned PDF når du trenger det.",
            },
            {
            type: "note",
            text: "Vil du ha mer fleksibilitet? Da kan du bruke digital timeliste i nettleseren og velge selv hvor mange dager timelisten skal dekke.",
            },
            {
            type: "link",
            href: "/timeliste-mal",
            label: "Se vår guide til timeliste mal",
            },
            {
            type: "cta",
            text: "Vil du ha mer kontroll? Prøv digital timeliste i Jobbleder.",
            },
            {
            type: "link",
            href: "https://app.jobbleder.no",
            label: "Opprett digital timeliste gratis",
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
        summary:
            "Lær hva en faktura bør inneholde, og hvordan du lager et ryddig dokument som er lett for kunden å forstå.",
        category: "Faktura",
        tags: ["faktura", "MVA", "skatt", "betaling", "krav"],
        createdAt: "2025-04-23",
        seoTitle: "Hva skal en faktura inneholde? En enkel oversikt",
        seoDescription:
            "Se hva en faktura bør inneholde, og hvordan du lager en tydelig og profesjonell faktura for kunder i Norge.",
        relatedTopic: "faktura",
        blocks: [
            {
            type: "paragraph",
            text: "Når du lager en faktura, er det viktig at dokumentet er tydelig og inneholder den informasjonen kunden trenger for å forstå hva som er levert og hva som skal betales. En ryddig faktura gjør hverdagen enklere både for deg og kunden.",
            },
            {
            type: "heading",
            text: "Dette bør en faktura inneholde",
            },
            {
            type: "list",
            items: [
                "Dato for utsendelse",
                "Fakturanummer",
                "Navn og adresse på deg og kunden",
                "Organisasjonsnummer og eventuell MVA-merking",
                "Beskrivelse av arbeid eller varer",
                "Pris og totalbeløp",
                "Betalingsfrist og kontonummer",
            ],
            },
            {
            type: "heading",
            text: "Hvorfor er dette viktig?",
            },
            {
            type: "paragraph",
            text: "Når fakturaen er tydelig bygget opp, blir det enklere å unngå spørsmål, feil og forsinkelser. Kunden forstår raskere hva som er gjort, og du fremstår mer profesjonell.",
            },
            {
            type: "heading",
            text: "Slik gjør du fakturaen mer profesjonell",
            },
            {
            type: "list",
            items: [
                "Bruk klare beskrivelser av arbeidet",
                "Sørg for at pris og beløp er enkle å lese",
                "Ta med kontaktinformasjon",
                "Bruk samme struktur på alle fakturaer",
            ],
            },
            {
            type: "paragraph",
            text: "For mange små bedrifter er det lett å gjøre dette digitalt i stedet for å bygge opp dokumentet manuelt hver gang.",
            },
            {
            type: "link",
            href: "/faktura-krav",
            label: "Les mer om faktura krav",
            },
            {
            type: "note",
            text: "En ryddig faktura er ikke bare bedre for kunden – den sparer deg også for tid når du skal følge opp betaling senere.",
            },
            {
            type: "cta",
            text: "Vil du lage tydelige fakturaer raskere? Prøv Jobbleder gratis i nettleseren.",
            },
            {
            type: "link",
            href: "https://app.jobbleder.no",
            label: "Opprett faktura gratis",
            },
        ],
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
            type: "paragraph",
            text: "Hvis du jobber som håndverker, frilanser eller selvstendig næringsdrivende, er god timeføring viktig. Timelister gir deg bedre oversikt over hva du har gjort, og gjør det enklere å dokumentere arbeidstid overfor kunder.",
            },
            {
            type: "heading",
            text: "Hva bør en god timeliste inneholde?",
            },
            {
            type: "paragraph",
            text: "En timeliste bør gjøre det enkelt å se hva som ble gjort, når det ble gjort og hvor mange timer som ble brukt.",
            },
            {
            type: "list",
            items: [
                "Dato",
                "Antall timer",
                "Hva som ble gjort",
                "Prosjekt eller kunde",
                "Eventuelle kommentarer",
            ],
            },
            {
            type: "heading",
            text: "Vanlige feil ved timeføring",
            },
            {
            type: "list",
            items: [
                "Du glemmer å føre timer daglig",
                "Beskrivelsene blir for uklare",
                "Datoene mangler eller blir utydelige",
                "Du har ikke et system for å lagre alt samlet",
            ],
            },
            {
            type: "heading",
            text: "Hvorfor er digital timeføring enklere?",
            },
            {
            type: "paragraph",
            text: "Når du fører timelister digitalt, blir det enklere å oppdatere fortløpende og holde oversikt over flere dager, kunder og prosjekter. Du kan også laste ned PDF når du trenger det.",
            },
            {
            type: "link",
            href: "/timeliste-uke",
            label: "Les mer om ukentlig timeliste",
            },
            {
            type: "note",
            text: "Den største feilen mange gjør er å stole på hukommelsen. Før timer fortløpende, så blir både dokumentasjonen og oversikten mye bedre.",
            },
            {
            type: "cta",
            text: "Vil du føre timelister raskere og mer oversiktlig? Prøv Jobbleder gratis.",
            },
            {
            type: "link",
            href: "https://app.jobbleder.no",
            label: "Opprett timeliste gratis",
            },
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
            type: "paragraph",
            text: "For håndverkere er det ofte mange små detaljer i løpet av en arbeidsdag. Uten gode rutiner for timelister kan det bli vanskelig å huske hva som ble gjort, hvor mye tid som gikk med, og hvordan arbeidet skal dokumenteres senere.",
            },
            {
            type: "heading",
            text: "Hvorfor timelister er nyttige i praksis",
            },
            {
            type: "paragraph",
            text: "En god timeliste gjør det enklere å holde oversikt over arbeidstid, oppdrag og prosjekter. Den gir også et tydelig grunnlag når du skal forklare jobben for kunden eller bruke timene videre i dokumentarbeid.",
            },
            {
            type: "list",
            items: [
                "Bedre oversikt over arbeidstid",
                "Mindre risiko for å glemme timer",
                "Tydeligere dokumentasjon overfor kunde",
                "Mer struktur i hverdagen",
            ],
            },
            {
            type: "heading",
            text: "Den vanligste feilen",
            },
            {
            type: "paragraph",
            text: "Den største feilen mange gjør er å føre timer for sent. Når du stoler på hukommelsen, blir både beskrivelsene og tidsbruken ofte mindre presise.",
            },
            {
            type: "link",
            href: "/timeliste-ansatt",
            label: "Les mer om timeliste for ansatte",
            },
            {
            type: "cta",
            text: "Vil du føre timelister enklere? Bruk Jobbleder direkte i nettleseren.",
            },
            {
            type: "link",
            href: "https://app.jobbleder.no",
            label: "Opprett timeliste gratis",
            },
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
            type: "paragraph",
            text: "Timeliste og faktura er to forskjellige dokumenter, men de henger tett sammen. Når timene er godt dokumentert, blir det lettere å bygge videre på arbeidet og holde oversikt over hva kunden faktisk skal betale for.",
            },
            {
            type: "heading",
            text: "Hvorfor god timeføring hjelper senere",
            },
            {
            type: "paragraph",
            text: "Når du fører timer tydelig med dato, beskrivelse og antall timer, har du bedre oversikt over hva som er gjort. Det gjør også hele prosessen mer ryddig senere.",
            },
            {
            type: "heading",
            text: "Hva bør stå i timelisten?",
            },
            {
            type: "list",
            items: [
                "Dato",
                "Arbeidsbeskrivelse",
                "Timer brukt",
                "Prosjekt eller kunde",
                "Eventuelle tillegg eller kommentarer",
            ],
            },
            {
            type: "note",
            text: "Jo tydeligere timelisten er, desto enklere blir det å forstå arbeidet i etterkant.",
            },
            {
            type: "link",
            href: "/timeliste-prosjekt",
            label: "Les mer om timeliste per prosjekt",
            },
            {
            type: "cta",
            text: "Vil du samle timeliste og dokumentarbeid i ett system? Prøv Jobbleder gratis.",
            },
            {
            type: "link",
            href: "https://app.jobbleder.no",
            label: "Kom i gang gratis",
            },
        ],
    },
    {
        id: 13,
        title: "Faktura eksempel for små bedrifter – hva bør det vise?",
        slug: "faktura-eksempel-sma-bedrifter",
        summary:
            "Et godt faktura eksempel gjør det enklere å forstå hvordan et ryddig dokument bør se ut for små bedrifter.",
        category: "Faktura",
        tags: ["faktura", "faktura eksempel", "små bedrifter", "betaling", "oppsett"],
        createdAt: "2026-02-25",
        seoTitle: "Faktura eksempel for små bedrifter",
        seoDescription:
            "Se hva et godt faktura eksempel bør vise, og hvordan små bedrifter kan lage tydelige fakturaer.",
        relatedTopic: "faktura",
        blocks: [
            {
            type: "paragraph",
            text: "Mange som skal lage faktura for første gang, leter etter et faktura eksempel for å forstå hvordan dokumentet bør bygges opp. Et godt eksempel gjør det lettere å se hva som er viktig og hvordan informasjonen bør presenteres.",
            },
            {
            type: "heading",
            text: "Hva bør et faktura eksempel vise?",
            },
            {
            type: "list",
            items: [
                "Tydelig kundeinformasjon",
                "Beskrivelse av arbeid eller varer",
                "Dato og fakturanummer",
                "Pris og totalbeløp",
                "Betalingsinformasjon",
            ],
            },
            {
            type: "heading",
            text: "Hvorfor oppsettet betyr noe",
            },
            {
            type: "paragraph",
            text: "Selv når alle opplysningene er med, betyr layout og struktur mye. Et ryddig dokument er enklere å lese og gir et mer profesjonelt inntrykk.",
            },
            {
            type: "link",
            href: "/faktura-eksempel",
            label: "Se vår guide til faktura eksempel",
            },
            {
            type: "cta",
            text: "Vil du lage tydelige fakturaer uten å starte fra bunnen hver gang? Prøv Jobbleder gratis.",
            },
            {
            type: "link",
            href: "https://app.jobbleder.no",
            label: "Opprett faktura gratis",
            },
        ],
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
        }
]


export const blogCategories = ["Timeliste", "Faktura", "Tilbud", "Oversikt"] as const

export function getPostsByCategory(category: string) {
  return blogPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
}