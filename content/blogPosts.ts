export type BlogProductExampleBlock = {
  type: "productExample"
  asset: "mobileRegistrationExtra" | "mobileInvoiceSummary" | "editedContract" | "mobileContractInvoice" | "mobileOfferInvoice" | "offerDocument" | "contractDocument"
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
            "type": "paragraph",
            "text": "Et tilbud på en byggejobb bør gjøre det mulig å se hva som faktisk skal leveres på arbeidsstedet. For et gulvoppdrag er «legging av parkett» et nyttig utgangspunkt, men ofte for lite til å avklare materialer, underlag, avfall og tilgang til boligen."
          },
          {
            "type": "heading",
            "text": "Beskriv rommet og mengdene du har vurdert"
          },
          {
            "type": "paragraph",
            "text": "Ta utgangspunkt i befaringen: hvilke rom gjelder arbeidet, hvilke mål har dere lagt til grunn, og skal det gjøres arbeid ved terskler, dører eller faste innredninger? Skill mellom målte størrelser og mengder som fortsatt må kontrolleres. Forklar enheten bak prisen, slik at kunden forstår om den gjelder en samlet jobb, et areal eller medgått tid."
          },
          {
            "type": "heading",
            "text": "Avklar materialvalg og klargjøring"
          },
          {
            "type": "paragraph",
            "text": "Skriv hvem som kjøper parkett, underlag og lister, og avklar aktuelle produktvalg. Hvis kunden leverer materialene, bør dere være enige om hva som skal være på plass før oppstart. Unngå en generell formulering om «materialer» når valg av type eller kvalitet kan påvirke oppdraget."
          },
          {
            "type": "paragraph",
            "text": "Skill selve leggingen fra riving, flytting av møbler, fjerning av limrester og utbedring av undergulvet. Beskriv også hvem som pakker, bærer ut og leverer avfallet. Hvis en oppgave ikke er med, bør kunden kunne finne dette uten å måtte tolke en kort samlebeskrivelse."
          },
          {
            "type": "heading",
            "text": "Tilgang og tidsplan er en del av forberedelsen"
          },
          {
            "type": "paragraph",
            "text": "Avklar parkering, adkomst, arbeidstid, tilgang til strøm og hvor materialene kan lagres. Slike forhold kan påvirke både tidsbruk og rekkefølge. Skill ønsket oppstart fra en bekreftet dato, og forklar hvilke forutsetninger tidsplanen bygger på, for eksempel at rommet er tømt og materialene levert."
          },
          {
            "type": "heading",
            "text": "Hva viser Tilbud 29, og hva må avklares i tillegg?"
          },
          {
            "type": "paragraph",
            "text": "Det autentiske Tilbud 29 viser én linje for legging av parkett, antall 1, enhetspris 12 000 kroner før MVA og total 15 000 kroner med eksemplets 25 prosent MVA. Det viser ikke areal, produktvalg, materialansvar, avfallsarbeid eller planlagt byggestart. Disse detaljene kan derfor ikke leses inn i eksemplet."
          },
          {
            "type": "paragraph",
            "text": "For ditt eget gulvoppdrag kan det være nyttig å avklare nettopp disse forholdene. Rådene her beskriver hva dere bør vurdere, ikke vilkår som allerede står i demonstrasjonsdokumentet eller en universell liste over lovkrav."
          },
          {
            "type": "textLink",
            "href": "/tilbud-eksempel",
            "label": "Se hele Tilbud 29 og hvilke opplysninger dokumentet faktisk inneholder"
          },
          {
            "type": "heading",
            "text": "Bevar kundens valg og endringer underveis"
          },
          {
            "type": "paragraph",
            "text": "Hvis kunden ønsker en annen parkett eller det avdekkes behov for mer underlagsarbeid, avklar hva endringen betyr for leveransen, prisen og tidsplanen. Ta vare på beskrivelse, dato og kundens svar sammen med den versjonen av tilbudet dere arbeider ut fra. Ikke behandle ekstraarbeid som om det var inkludert eller godkjent uten at dette er avklart."
          },
          {
            "type": "paragraph",
            "text": "Forbrukerrådet anbefaler tydelig oppdragsbeskrivelse og skriftlig dokumentasjon ved håndverkeroppdrag for privatkunder. Råd om god dokumentasjon er nyttige også ellers, men forbrukerregler og avtaler mellom virksomheter må vurderes hver for seg."
          },
          {
            "type": "heading",
            "text": "Fra avklart oppdrag til tilbud i Jobbleder"
          },
          {
            "type": "paragraph",
            "text": "Når arbeidsomfanget er avklart, kan du bruke Jobbleder til å opprette tilbudet med kunde, prosjekt og prislinjer. Gjennomgå PDF-en før du deler den manuelt med kunden. Selve avklaringene og kundens valg må du fortsatt ta vare på; det å opprette dokumentet er ikke kundens aksept."
          },
          {
            "type": "textLink",
            "href": "/lage-tilbud",
            "label": "Følg den praktiske veiledningen når du skal fylle ut tilbudet"
          },
          {
            "type": "textLink",
            "href": "/tilbud-mal",
            "label": "Se tilbudsverktøyet og mulighetene for videre dokumentarbeid"
          }
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
            "type": "paragraph",
            "text": "Bruk en kort gjennomgang før du deler tilbudet. Målet er å oppdage hva kunden kan misforstå, og rette det med en konkret opplysning eller avklaring. En manglende detalj betyr ikke automatisk at et tilbud er juridisk ugyldig."
          },
          {
            "type": "heading",
            "text": "1. Arbeidet er beskrevet for vagt"
          },
          {
            "type": "paragraph",
            "text": "«Gulvarbeid» sier lite om hvilke rom og oppgaver som inngår. Kunden kan forstå det som både riving og legging, mens du bare har priset leggingen. Uuttalte forutsetninger om et klart underlag gjør forskjellen enda større."
          },
          {
            "type": "paragraph",
            "text": "Forbedring: beskriv arbeidet og de viktige forutsetningene med konkrete ord. Avklar hvilke rom oppdraget gjelder, hva som skal være klargjort, og hvilke oppgaver som holdes utenfor."
          },
          {
            "type": "heading",
            "text": "2. Prisgrunnlaget og mengdene er uklare"
          },
          {
            "type": "paragraph",
            "text": "Et beløp uten forklaring kan oppfattes som fastpris selv om du har ment et anslag eller betaling etter tid. En linje med antall 1 sier heller ikke om prisen gjelder én jobb, én time eller én kvadratmeter. Da blir det vanskelig å forstå regnestykket."
          },
          {
            "type": "paragraph",
            "text": "Forbedring: skriv hvilket prisgrunnlag dere bruker, forklar mengdene og kontroller sammenhengen mellom antall, enhetspris, aktuell MVA og total. Ikke la kunden gjette hva tallet gjelder."
          },
          {
            "type": "textLink",
            "href": "/blogg/tilbud-eller-pristilbud",
            "label": "Les om forskjellen mellom fastpris, prisoverslag og timepris"
          },
          {
            "type": "heading",
            "text": "3. Materialansvar og utelatte oppgaver er ikke avklart"
          },
          {
            "type": "paragraph",
            "text": "Hvis det ikke står hvem som skaffer parketten eller håndterer avfallet, kan begge parter tro at den andre ordner det. Det samme gjelder flytting av møbler, lister og utbedring av undergulv."
          },
          {
            "type": "paragraph",
            "text": "Forbedring: avklar ansvar for materialvalg, levering, klargjøring og bortkjøring. Gjør det synlig hva som er inkludert og hva som eventuelt må avtales separat. Bevar kundens svar sammen med tilbudsgrunnlaget."
          },
          {
            "type": "heading",
            "text": "4. Tilbudets gyldighet kan forveksles med arbeidsdatoene"
          },
          {
            "type": "paragraph",
            "text": "En dato uten forklaring kan bli lest som oppstart, ferdigstillelse eller siste svarfrist. Ulike versjoner kan dessuten bli liggende hos kunden uten at det er tydelig hvilken som gjelder."
          },
          {
            "type": "paragraph",
            "text": "Forbedring: skill tilbudsdato og gyldighet fra tidsplanen for arbeidet. Oppgi hvilken versjon du ber kunden ta stilling til. Kontroller datoene når tilbudet endres, og avklar eventuelle nye forutsetninger før kunden svarer."
          },
          {
            "type": "heading",
            "text": "5. Endringer og ekstraarbeid blir ikke dokumentert"
          },
          {
            "type": "paragraph",
            "text": "Et muntlig ønske om andre materialer eller mer arbeid kan bli glemt når dere senere skal finne igjen hva som var avtalt. En endring du gjør i dokumentet alene viser ikke at kunden har godkjent den."
          },
          {
            "type": "paragraph",
            "text": "Forbedring: beskriv endringen, avklar betydningen for pris og fremdrift, og ta vare på kundens svar. Skill den reviderte avtalen fra det opprinnelige tilbudet. Reglene og rettsvirkningene må vurderes etter avtalen og situasjonen; dette er praktiske råd, ikke en fullstendig juridisk sjekkliste."
          },
          {
            "type": "heading",
            "text": "Følg opp spørsmål før du går videre"
          },
          {
            "type": "paragraph",
            "text": "Hvis kunden ikke svarer eller ber om en forklaring, ta en kort, manuell kontakt. I Jobbleder kan du forberede tilbudsdokumentet, men en generert PDF erstatter ikke avklaringen med kunden."
          },
          {
            "type": "textLink",
            "href": "/blogg/folle-opp-tilbud",
            "label": "Les hvordan du følger opp tilbud på en god måte"
          },
          {
            "type": "textLink",
            "href": "/tilbud-eksempel",
            "label": "Sammenlign feltene og summene med et autentisk tilbudseksempel"
          }
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
            "type": "paragraph",
            "text": "Et tilbudsdokument skal være lett å orientere seg i. Kunden bør finne hvem tilbudet gjelder, hva du leverer, hva prisen bygger på og hvilke avklaringer som gjenstår. En konsekvent rekkefølge gjør det også enklere å sammenligne en ny versjon med den forrige."
          },
          {
            "type": "heading",
            "text": "Begynn med partene og oppdraget"
          },
          {
            "type": "paragraph",
            "text": "Samle avsenderopplysninger og kundens opplysninger tydelig øverst. Kontroller navn og kontaktinformasjon, og sørg for at det går frem hvilket oppdrag dokumentet gjelder. Bruk en forståelig prosjektbeskrivelse eller henvisning dersom kunden har flere pågående oppdrag."
          },
          {
            "type": "paragraph",
            "text": "Tilbud 29 viser Demo Company som avsender og Eksempel Eiendom som kunde. Prosjektet Renovering av leilighet er valgt i appskjemaet, men prosjektnavnet står ikke som eget felt i den viste PDF-en. Kontroller derfor dokumentet kunden faktisk får, fremfor å anta at alle opplysninger i appen er skrevet ut."
          },
          {
            "type": "heading",
            "text": "La arbeidsbeskrivelse og priser kunne leses sammen"
          },
          {
            "type": "paragraph",
            "text": "Gi hver linje en konkret beskrivelse, og bruk mengder med en forståelig betydning. Plasser antall og enhetspris slik at kunden kan se sammenhengen med linjebeløpet. Del opp ulike leveranser når en samlelinje ville gjort innholdet uklart."
          },
          {
            "type": "paragraph",
            "text": "I Tilbud 29 er beskrivelsen Legging av parkett, antallet 1 og enhetsprisen 12 000 kroner før MVA. Antallet sier ikke i seg selv noe om areal eller antall arbeidstimer. Kunden trenger en forklaring som passer det virkelige oppdraget."
          },
          {
            "type": "heading",
            "text": "Skill MVA og total fra detaljene på linjene"
          },
          {
            "type": "paragraph",
            "text": "Oppsummeringen bør gjøre det enkelt å finne beløpet før MVA, aktuell MVA og det kunden totalt skal betale. Tilbud 29 viser 12 000 kroner netto, 3 000 kroner MVA og 15 000 kroner totalt. Satsen 25 prosent tilhører eksemplet; kontroller behandlingen som gjelder for salget ditt."
          },
          {
            "type": "heading",
            "text": "Gi datoer og forutsetninger en tydelig plass"
          },
          {
            "type": "paragraph",
            "text": "Skill tilbudsdato og gyldighet fra en eventuell tidsplan for arbeidet. I demonstrasjonsdokumentet er datoene 18.11.2026 og 02.12.2026 tilbudets utstedelse og gyldighet, ikke oppstart og ferdigstillelse. Et nytt tilbud trenger egne relevante datoer."
          },
          {
            "type": "paragraph",
            "text": "Samle viktige avklaringer om materialer, inkluderte oppgaver, avgrensinger og eventuelle betalingsvilkår der kunden kan finne dem. Dette er praktiske dokumentasjonsråd, ikke en påstand om et universelt lovpålagt format. Det viste Tilbud 29 har ikke detaljerte material- eller endringsvilkår; de skal ikke tilskrives eksemplet."
          },
          {
            "type": "textLink",
            "href": "/tilbud-eksempel",
            "label": "Se dokumentets oppsett og forklaringen av de faktiske feltene"
          },
          {
            "type": "heading",
            "text": "Les gjennom dokumentet som om du var kunden"
          },
          {
            "type": "list",
            "items": [
              "Er avsender, kunde og oppdrag riktig identifisert?",
              "Kan arbeidsomfanget forstås uten muntlige tilleggsforklaringer?",
              "Henger antall, enhetspriser, MVA og total sammen?",
              "Er gyldighet og eventuelle arbeidstidspunkter tydelig skilt?",
              "Er avtalt innhold og senere avklaringer gjengitt riktig i denne versjonen?"
            ]
          },
          {
            "type": "paragraph",
            "text": "Jobbleder gir deg en fast struktur for tilbudslinjer og PDF. Se likevel gjennom den genererte filen før du deler den manuelt. En ryddig struktur erstatter ikke avklaringene med kunden eller vurderingen av hvilke regler som gjelder for oppdraget."
          },
          {
            "type": "textLink",
            "href": "/lage-tilbud",
            "label": "Gå videre til stegene for å opprette og kontrollere tilbudet i Jobbleder"
          }
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
            "type": "paragraph",
            "text": "En god oppfølging hjelper kunden med å forstå tilbudet og svare når de er klare. Ta utgangspunkt i det dere har avtalt om videre kontakt. Meldingen bør avklare et behov, ikke skape press eller late som om kunden allerede har sagt ja."
          },
          {
            "type": "heading",
            "text": "Sjekk mottak og gi tid til gjennomgang"
          },
          {
            "type": "paragraph",
            "text": "Kontroller at du har sendt riktig dokument til riktig adresse. Hvis mottaket er usikkert, kan du spørre om tilbudet kom frem eller tilby å sende det på nytt. Ikke legg til grunn at en sendt fil er lest eller forstått."
          },
          {
            "type": "paragraph",
            "text": "Gi kunden rimelig tid ut fra oppdragets størrelse og eventuell avtalt svarfrist. Et kort gulvoppdrag og en større renovering trenger ikke samme rytme. Avtal gjerne når du kan ta kontakt igjen, fremfor å følge en fast automatisk tidsplan."
          },
          {
            "type": "heading",
            "text": "Første oppfølging: kort og åpen"
          },
          {
            "type": "paragraph",
            "text": "Et eksempel på en melding du selv kan sende:"
          },
          {
            "type": "paragraph",
            "text": "«Hei, Anne! Jeg følger opp tilbudet på parkettarbeidet som jeg sendte tidligere. Har det kommet frem, og er det noe du ønsker at jeg forklarer nærmere? Ta gjerne kontakt når du har fått sett på det. Hilsen Per.»"
          },
          {
            "type": "paragraph",
            "text": "Tilpass navn, jobb og formulering til den faktiske kontakten. Det er nok med én tydelig invitasjon til spørsmål; du trenger ikke gjenta hele tilbudet eller legge inn en kunstig frist."
          },
          {
            "type": "heading",
            "text": "Når kunden ber om en avklaring"
          },
          {
            "type": "paragraph",
            "text": "Svar på det konkrete spørsmålet først. Hvis kunden er usikker på underlagsarbeid, forklar hva tilbudet omfatter før du foreslår neste steg. Dersom avklaringen innebærer mer arbeid eller andre materialer, diskuter pris og tidsplan før dere går videre."
          },
          {
            "type": "paragraph",
            "text": "Et eksempel etter at kunden har spurt om undergulvet:"
          },
          {
            "type": "paragraph",
            "text": "«Hei, Anne! Takk for spørsmålet om undergulvet. Tilbudet gjelder selve parkettleggingen og forutsetter at underlaget er klargjort. Skal vi avklare hva som trengs før jeg eventuelt oppdaterer omfang, pris og tidsplan? Jeg sender deg i så fall et revidert tilbud til gjennomgang. Hilsen Per.»"
          },
          {
            "type": "heading",
            "text": "Ta vare på avklaringen og den riktige versjonen"
          },
          {
            "type": "paragraph",
            "text": "Oppsummer det dere blir enige om skriftlig, og ta vare på kundens svar sammen med tilbudet. Hvis du lager en ny versjon, gjør det klart hva som er endret og hvilken versjon kunden skal vurdere. En oppdatert fil er ikke i seg selv dokumentasjon på aksept."
          },
          {
            "type": "paragraph",
            "text": "Et akseptert tilbud kan danne en bindende avtale uten separat signert kontrakt, avhengig av innhold, aksept, omstendigheter og gjeldende regler. Ved uavklarte svar bør dere få klarhet i hva dere faktisk er enige om. Forbrukeravtaler og avtaler mellom virksomheter må ikke behandles som identiske."
          },
          {
            "type": "textLink",
            "href": "/blogg/tilbud-vs-kontrakt",
            "label": "Les om tilbud, kundens aksept og et separat kontraktsdokument"
          },
          {
            "type": "heading",
            "text": "Når kunden trenger mer tid eller ikke svarer"
          },
          {
            "type": "paragraph",
            "text": "Spør om det passer å følge opp igjen, eller avslutt dialogen høflig hvis kunden ikke ønsker å gå videre. Ved utløpt gyldighet eller endrede forutsetninger bør dere avklare grunnlaget på nytt. Ikke behandle taushet som en praktisk bekreftelse på at du kan starte jobben."
          },
          {
            "type": "textLink",
            "href": "/hvordan-folge-opp-tilbud",
            "label": "Se den korte oversikten over oppfølging av et sendt tilbud"
          },
          {
            "type": "heading",
            "text": "Dokumentet i Jobbleder, kundekontakten hos deg"
          },
          {
            "type": "paragraph",
            "text": "Jobbleder støtter oppretting av tilbud og generering av PDF. Du deler filen og følger opp kunden manuelt. Rutinen og meldingsforslagene over beskriver ikke automatiske e-poster, påminnelser, åpningssporing eller en akseptportal i appen. Kundens svar må du selv ta vare på."
          },
          {
            "type": "textLink",
            "href": "/instruksjoner#opprett-tilbud",
            "label": "Se hvordan du oppretter tilbudsdokumentet i Jobbleder"
          },
          {
            "type": "textLink",
            "href": "/blogg/fra-tilbud-til-kontrakt-og-faktura",
            "label": "Se dokumentveiene videre når oppdraget skal følges opp med kontrakt eller faktura"
          }
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
            "type": "paragraph",
            "text": "Ordet pristilbud sier ikke alene hvordan sluttprisen skal beregnes. Det viktigste er at kunden forstår om dere avtaler en fast sum, et prisoverslag eller betaling etter medgått tid. Skriv prisgrunnlaget sammen med beskrivelsen av arbeidet, slik at beløpet ikke kan leses løsrevet fra omfanget."
          },
          {
            "type": "heading",
            "text": "Fastpris: en sum for et avgrenset arbeid"
          },
          {
            "type": "paragraph",
            "text": "Ved fastpris avtaler dere en bestemt sum for arbeidet som er beskrevet. Presiser derfor både hva som er med, og hvilke forutsetninger summen bygger på. Et uklart omfang blir ikke tydeligere av at det står fastpris ved beløpet."
          },
          {
            "type": "paragraph",
            "text": "Et illustrerende gulveksempel: «Fastpris 15 000 kroner inkludert MVA for legging av parkett i stuen. Kunden leverer parketten. Underlaget skal være klargjort; riving av gammelt gulv er ikke med.» Dette er en tenkt prisbeskrivelse, ikke en fullstendig avtaletekst eller en gjengivelse av Tilbud 29."
          },
          {
            "type": "heading",
            "text": "Prisoverslag: et anslag med et tydelig grunnlag"
          },
          {
            "type": "paragraph",
            "text": "Et prisoverslag angir forventet pris for et beskrevet arbeid. Forklar hva du har vurdert, og hva som fortsatt er usikkert. Det bør ikke behandles som en uforpliktende startpris eller som fri adgang til å øke beløpet."
          },
          {
            "type": "paragraph",
            "text": "Et tenkt eksempel er et prisoverslag på 8 000 kroner inkludert MVA for klargjøring av et undergulv etter befaring, samtidig som enkelte områder ennå ikke er tilgjengelige for undersøkelse. Beskriv hvilke arbeider og mengder anslaget bygger på, og hva dere må avklare dersom tilstanden viser seg å være annerledes. Et forbehold er ikke i seg selv en avklaring av hva kunden skal betale ekstra."
          },
          {
            "type": "heading",
            "text": "Timepris: skill sats fra tidsbruk og materialer"
          },
          {
            "type": "paragraph",
            "text": "Ved arbeid etter medgått tid må kunden forstå både timesatsen og hva som kommer i tillegg. Forklar hvordan timer skal dokumenteres, hvordan materialer prises, og om reise eller andre kostnader er med. Et anslått timeantall er ikke det samme som en avtalt fast totalpris."
          },
          {
            "type": "paragraph",
            "text": "Et tenkt eksempel er tilpasning av gulvlister til 900 kroner per time inkludert MVA. Fire timer gir 3 600 kroner for arbeidet, mens seks timer gir 5 400 kroner. Materialer kommer bare i tillegg slik dere har avtalt. Beløpene illustrerer regnestykket; de er ikke Jobbleder-priser eller en anbefalt bransjesats."
          },
          {
            "type": "heading",
            "text": "Avklar usikkerheten før dere velger prisgrunnlag"
          },
          {
            "type": "paragraph",
            "text": "Materialkvalitet, mål, underlag og endret arbeidsomfang kan påvirke kostnadene. Skill mellom usikkerheten du allerede kjenner, og arbeid kunden bestiller senere. Avklar hva som inngår før dere starter, og dokumenter endringer i arbeid, pris og fremdrift sammen med kundens svar."
          },
          {
            "type": "paragraph",
            "text": "Forbrukerrådets veiledning om håndverkertjenester skiller mellom fastpris og prisoverslag i forbrukerforhold. Slike forbrukerregler skal ikke overføres ukritisk til avtaler mellom virksomheter. Vurder den konkrete avtalen og reglene som gjelder, fremfor å bruke én generell regel for alle tilbud."
          },
          {
            "type": "textLink",
            "href": "https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/sjekkliste-handverker/",
            "label": "Les Forbrukerrådets veiledning om pris og avklaringer med håndverker"
          },
          {
            "type": "textLink",
            "href": "/blogg/tilbud-vs-kontrakt",
            "label": "Se hvordan tilbud, aksept og skriftlig avtale henger sammen"
          },
          {
            "type": "heading",
            "text": "Vis prisgrunnlaget tydelig i dokumentet"
          },
          {
            "type": "paragraph",
            "text": "Jobbleder lar deg beskrive og prise tilbudslinjene med antall, enhetspris og aktuell MVA. Kunden må likevel få en forståelig forklaring på hva beløpet gjelder. Et felt eller en generert PDF avklarer ikke alene hvilke prisvilkår dere er enige om."
          },
          {
            "type": "textLink",
            "href": "/tilbud-eksempel",
            "label": "Se antall, enhetspris, MVA og total i det autentiske tilbudseksemplet"
          }
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
            { type: "paragraph", text: "Når en kunde ber om pris på en jobb, starter du gjerne med et tilbud. Senere kan det være nyttig å samle vilkårene i en egen skriftlig kontrakt. Men avtalen mellom dere kan allerede være inngått før et slikt dokument er signert. Her ser vi på forskjellen med et parkettoppdrag som eksempel." },
            { type: "heading", text: "Hva er et tilbud?" },
            { type: "paragraph", text: "Et tilbud beskriver arbeidet du foreslår å utføre, prisen og forutsetningene for oppdraget. Kunden skal kunne forstå hva som inngår, hva som eventuelt kommer i tillegg, og hvor lenge tilbudet gjelder." },
            { type: "paragraph", text: "Tenk deg at du tilbyr å legge 20 m² parkett i en stue. I dette illustrasjonseksemplet er prisen 15 000 kroner inkludert MVA for selve leggingen. Kunden skaffer parketten, og tilbudet forutsetter at rommet er tømt og underlaget klargjort. Fjerning av gammelt gulv er ikke inkludert. Tilbudet oppgir også planlagt oppstart, forventet ferdigstillelse og en dato for når kunden må svare." },
            { type: "paragraph", text: "Før kunden aksepterer, bør dere avklare om dette faktisk dekker jobben. Hvis underlaget må utbedres eller kunden ønsker nye gulvlister, må omfang, pris og tidsplan avklares før slikt arbeid settes i gang." },
            { type: "textLink", href: "/tilbud-mal", label: "Se hvordan du lager et tilbud med arbeidsbeskrivelse og pris i Jobbleder" },
            { type: "heading", text: "Hva er en kontrakt?" },
            { type: "paragraph", text: "Ordet kontrakt brukes både om en avtale og om dokumentet som beskriver den. En separat skriftlig kontrakt kan samle det dere er enige om: arbeidets omfang, pris, materialansvar, datoer og betalingsvilkår. Da blir det lettere å finne tilbake til de samme opplysningene underveis." },
            { type: "paragraph", text: "Skill derfor mellom tilbudsdokumentet, kundens aksept, avtalen som kan følge av aksepten, og et eget kontraktsdokument. Å opprette et dokument i et program er ikke i seg selv dokumentasjon på at kunden har akseptert innholdet." },
            { type: "heading", text: "Hva skjer når kunden aksepterer tilbudet?" },
            { type: "paragraph", text: "Et tilbud som kunden aksepterer, kan danne en bindende avtale, avhengig av omstendighetene og reglene som gjelder for oppdraget. Du bør derfor ikke legge til grunn at dere står uten avtale frem til en separat kontrakt er signert." },
            { type: "paragraph", text: "Ta vare på tilbudet og kundens svar. Hvis kunden sier ja, men samtidig ønsker andre materialer eller mer arbeid, bør dere avklare hva dere faktisk er enige om og dokumentere endringene. I parketteksemplet bør det være tydelig om svaret gjelder bare leggingen eller også arbeid som ikke var med i tilbudet." },
            { type: "paragraph", text: "Et oppdrag for en privatkunde og en avtale mellom to virksomheter kan være underlagt ulike regler. Forbrukerregler om håndverkertjenester skal ikke uten videre brukes på B2B-oppdrag. Ved usikkerhet om en konkret avtale bør du få relevant juridisk veiledning." },
            { type: "heading", text: "Når er en separat skriftlig kontrakt nyttig?" },
            { type: "paragraph", text: "Selv om dere allerede har kommet til enighet, kan et eget kontraktsdokument gjøre avtalen enklere å følge opp. Det er særlig nyttig når arbeidet går over tid, flere leveranser henger sammen, eller ansvar og betaling må beskrives nærmere." },
            { type: "paragraph", text: "For parkettoppdraget kan kontrakten samle tilbudet og senere avklaringer om underlag, tilgang til boligen og materiallevering. Kontroller at dokumentet gjengir det dere faktisk har avtalt. Nye eller endrede vilkår må avklares med kunden; en endring du gjør i dokumentet, er ikke i seg selv kundens godkjenning." },
            { type: "paragraph", text: "Forbrukerrådet anbefaler skriftlig kontrakt ved bruk av håndverker fordi den gjør det enklere å dokumentere enigheten. Behovet for god dokumentasjon må skilles fra spørsmålet om det allerede er inngått en bindende avtale." },
            { type: "textLink", href: "https://www.forbrukerradet.no/forside/bolig/bruk-av-handverker/", label: "Les Forbrukerrådets råd om skriftlig kontrakt med håndverker" },
            { type: "heading", text: "Hva bør du avklare før arbeidet starter?" },
            { type: "paragraph", text: "Bruk tilbudet og eventuelle senere avklaringer som utgangspunkt for en praktisk gjennomgang med kunden:" },
            {
            type: "list",
            items: [
                "Arbeid og omfang: hvilke rom, mengder og oppgaver inngår, og hva er holdt utenfor?",
                "Materialer: hvem kjøper og leverer dem, og hvem har ansvar for klargjøringen?",
                "Pris: er grunnlaget fastpris, timepris eller et overslag, og hvordan er aktuell MVA oppgitt?",
                "Tid: når skal dere starte, når forventes jobben ferdig, og hvilke forutsetninger gjelder?",
                "Endringer: hvordan skal dere avklare og dokumentere ekstraarbeid, pris og påvirkning på fremdriften?",
                "Betaling: hva er avtalt om fakturering og betalingsfrist?",
            ],
            },
            { type: "paragraph", text: "Dette er en praktisk sjekkliste, ikke en uttømmende liste over lovkrav. Tilpass avklaringene til arbeidet, kundetypen og reglene som gjelder." },
            { type: "heading", text: "Hvordan støtter Jobbleder dokumentarbeidet?" },
            { type: "paragraph", text: "I Jobbleder kan du opprette tilbudet og generere en PDF. Du kan deretter velge å opprette en kontrakt fra tilbudet og redigere kontrakten videre som et selvstendig dokument. Se gjennom innholdet og avklar det med kunden før dere ordner eventuell signering utenfor appen." },
            { type: "textLink", href: "/kontrakt-mal", label: "Se hvilke kontraktsopplysninger du kan tilpasse i Jobbleder" },
            { type: "paragraph", text: "Når du skal lage faktura, kan du bruke enten tilbudet eller kontrakten som grunnlag. Begge veiene støttes: Tilbud → Faktura og Tilbud → Kontrakt → Faktura. Du starter konverteringen selv og kontrollerer kunde, linjer, beløp, MVA, datoer og betalingsinformasjon før du genererer PDF-en og sender den manuelt." },
            { type: "paragraph", text: "Dokumentoppretting, PDF-eksport og disse konverteringene er tilgjengelige i Free. Free-PDF-er har Jobbleder-merking. Premium fjerner merkingen og lar deg bruke egen firmalogo; det er ikke nødvendig for dokumentflyten." },
            { type: "paragraph", text: "Kundedialog, aksept og signering skjer utenfor den dokumenterte appflyten. Jobbleder tilbyr ikke elektronisk signering eller automatisk aksept, utsending eller oppfølging av tilbud." },
            { type: "textLink", href: "/blogg/fra-tilbud-til-kontrakt-og-faktura", label: "Følg arbeidsflyten fra tilbud til kontrakt og faktura med ekte dokumenteksempler" },
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
            { type: "paragraph", text: "Når du tar på deg et oppdrag, trenger kunden først å forstå hva du skal gjøre og hva det vil koste. Deretter må dere avklare avtalen, og til slutt skal fakturaen stemme med det du faktisk krever betaling for. Her følger vi et parkettoppdrag og viser hvordan du kan bruke dokumentopplysningene videre i Jobbleder." },
            { type: "paragraph", text: "Du velger selv neste handling. To støttede veier er Tilbud → Kontrakt → Faktura og Tilbud → Faktura. Kontrakt er altså ikke et obligatorisk mellomsteg i appen når du vil opprette faktura fra et tilbud." },
            { type: "heading", text: "Fra forespørsel til tilbud" },
            { type: "paragraph", text: "Start med å avklare arbeidssted, hva oppdraget omfatter og hva kunden forventer. For parkettarbeid kan du for eksempel beskrive hvilke rom arbeidet gjelder, hvilke forberedelser som inngår og hvem som skaffer materialene. Skill det dere har avtalt fra arbeid som eventuelt kommer i tillegg." },
            { type: "paragraph", text: "I Jobbleder velger du kunden og oppretter tilbudet med arbeidsbeskrivelse, enhetspris, antall og aktuell MVA. Knytt tilbudet til et prosjekt hvis det er relevant. Kontroller pris, gyldighet og vilkår før du lager PDF og deler dokumentet med kunden. Avklar aksept og endringer med kunden utenfor appen." },
            { type: "productExample", asset: "offerDocument", paragraphs: [], alt: "Tilbud 29 fra Jobbleder med parkettarbeid, pris 12 000 kroner før MVA og total 15 000 kroner", caption: "Eksempel på et tilbud opprettet i Jobbleder, med arbeidsbeskrivelse, pris og MVA. Tilbud 29 hører til samme demonstrasjonsscenario som kontrakten nedenfor." },
            { type: "textLink", href: "/tilbud-mal", label: "Se hvordan du lager tilbud i Jobbleder" },
            { type: "heading", text: "Fra tilbud til kontrakt" },
            { type: "steps", items: [
                { title: "Finn riktig tilbud.", text: "Åpne Dokumenter, velg tilbudet og bruk Opprett kontrakt under forhåndsvisningen." },
                { title: "Kontroller kontraktsgrunnlaget.", text: "Se gjennom kunde, prosjekt, datoer, arbeidsbeskrivelse, prisgrunnlag og vilkår før du lagrer eller genererer dokumentet." },
                { title: "Tilpass kontrakten selvstendig.", text: "Kontrakten er et eget dokument etter konverteringen. Du kan redigere innhold og vilkår etter avtalen uten å behandle tilbudet og kontrakten som samme dokument. For en lagret kontrakt bruker du Rediger i Dokumenter." },
            ] },
            { type: "productExample", asset: "contractDocument", paragraphs: [], alt: "Kontrakt 11 fra Tilbud 29 med parkettarbeid, avtalt pris, betalingsvilkår og tomme signaturfelt", caption: "Kontrakt 11 fra Tilbud 29 med arbeidsbeskrivelse, pris, betalingsvilkår og signaturfelt. Dokumenteksemplet viser vilkårene før redigeringen nedenfor og er ikke en universell juridisk mal." },
            { type: "textLink", href: "/kontrakt-mal", label: "Les om kontraktsinnhold og valgene i Jobbleder" },
            { type: "productExample", asset: "editedContract", paragraphs: [
                "Skjermbildet viser Kontrakt 11 bearbeidet videre fra tilbudseksemplet. Beskrivelsen viser til tilbud 29, mens prisstruktur og betalingsvilkår er tilpasset i kontrakten.",
                "Gå gjennom dokumentet med kunden. Kontrakten kan lastes ned som PDF, og dere ordner signeringen manuelt. Jobbleder har ikke elektronisk signering. Betalingsvilkårene er tekst og valg du kontrollerer, ikke en automatisk fakturaplan."
            ], alt: "Kontrakt 11 redigert med referanse til tilbud 29, parkettarbeid, fastpris 12 000 og betalingsvilkår", caption: "Kontrakt 11 etter redigering. Utsnittet viser fastpris og en betalingsplan; det viser ikke automatisk beregning eller oppretting av fakturaer." },
            { type: "textLink", href: "/instruksjoner#lag-kontrakt-fra-tilbud", label: "Følg tilbud-til-kontrakt-veiledningen steg for steg" },
            { type: "heading", text: "Fra kontrakt til faktura" },
            { type: "paragraph", text: "Når du skal lage en faktura med avtalen som grunnlag, åpner du den lagrede kontrakten i Dokumenter og velger Opprett faktura. Appen tar opplysninger videre til fakturaskjemaet. Du må fortsatt kontrollere at grunnlaget passer arbeidet og beløpet som skal faktureres." },
            { type: "productExample", asset: "mobileContractInvoice", paragraphs: [
                "Kontroller kildereferansen, kunden og fakturalinjene. Se særlig gjennom arbeidsbeskrivelse, antall, enhetspriser og MVA. Sjekk også datoer og betalingsinformasjon før du velger Lagre eller Generer.",
                "Mobilbildet viser Faktura 113 med Kontrakt 11 som kilde og en linje for parkettarbeid. Enhetsprisen som vises, er 12 000 kroner. Bildet viser deler av opprettingsskjemaet, ikke en ferdig PDF eller hele oppsummeringen."
            ], alt: "Faktura 113 i mobilnettleser med Kilde Kontrakt 11, kunde, datoer og parkettlinje med enhetspris 12 000", caption: "Et mobilt eksempel på fakturaoppretting fra Kontrakt 11. Det er ikke dokumentasjon på en automatisk beregnet delbetaling eller den eksakte PDF-eksporten av kontraktsbildet ovenfor." },
            { type: "paragraph", text: "En betalingsplan i kontrakten oppretter ikke fakturaer automatisk. Du velger selv når du oppretter faktura, og kontrollerer linjer og beløp. Når innholdet stemmer, genererer og laster du ned PDF-en. Du sender fakturaen manuelt til kunden." },
            { type: "textLink", href: "/instruksjoner#kontrakt-til-faktura", label: "Se handlingene for kontrakt til faktura" },
            { type: "heading", text: "Et alternativ: Fra tilbud direkte til faktura" },
            { type: "paragraph", text: "Du kan også bruke tilbudet direkte som fakturagrunnlag. Åpne det aktuelle tilbudet i Dokumenter og velg Opprett faktura. Dette er en egen konvertering; du trenger ikke først å opprette en kontrakt i appen." },
            { type: "productExample", asset: "mobileOfferInvoice", paragraphs: [
                "Se gjennom kunden, prosjektet, datoene og opplysningene som følger med fra tilbudet. Oppdater fakturagrunnlaget hvis det dere skal fakturere, avviker fra tilbudet. Konverteringen erstatter ikke denne kontrollen.",
                "I dette separate mobileksemplet gir én parkettlinje 12 000 kroner før MVA. Med eksemplets sats på 25 prosent er MVA 3 000 kroner og totalen 15 000 kroner. Bruk MVA-behandlingen som gjelder for ditt salg."
            ], alt: "Fakturalinje og oppsummering på mobil med parkettarbeid, antall 1, netto 12 000, MVA 3 000 og total 15 000", caption: "Linje og oppsummering fra tilbud-til-faktura-eksemplet. Dokumentnummer og kildereferanse vises ikke i utsnittet; dette er et annet eksempel enn Faktura 113 ovenfor." },
            { type: "textLink", href: "/instruksjoner#tilbud-til-faktura", label: "Følg den direkte veien fra tilbud til faktura" },
            { type: "heading", text: "Før fakturaen sendes" },
            { type: "paragraph", text: "Ta en siste gjennomgang av dokumentet før du lager PDF og sender den. En praktisk sjekkliste er:" },
            { type: "list", items: [
                "Kunde: gjelder fakturaen riktig kunde, med riktige opplysninger?",
                "Arbeid: beskriver linjene det som faktisk skal faktureres, og riktig omfang?",
                "Beløp: stemmer antall, enhetspriser og total med grunnlaget?",
                "MVA: er behandlingen og satsen riktig for salget?",
                "Betaling: stemmer betalingsinformasjonen og forfallsdatoen?",
                "Datoer: er fakturadato og leveringsopplysninger kontrollert?"
            ] },
            { type: "textLink", href: "/faktura-krav", label: "Les om fakturakrav og praktiske betalingsopplysninger" },
            { type: "paragraph", text: "Oppretting av dokumenter, PDF-eksport og disse konverteringene er tilgjengelig i Free. Free-PDF-er har Jobbleder-vannmerke. Premium gir andre valg for firmalogo og PDF-profil; det er ikke nødvendig for dokumentflyten beskrevet her." },
            { type: "link", href: "/fakturaprogram-gratis", label: "Se fakturaverktøyet i Jobbleder" },
        ],
    },
]


export const blogCategories = ["Timeliste", "Faktura", "Tilbud", "Kontrakt", "Oversikt"] as const

export function getPostsByCategory(category: string) {
  return blogPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
}
