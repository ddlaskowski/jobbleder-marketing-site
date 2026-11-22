import { seoPages } from "./seoPages"

export const contractSeoPage = seoPages.find(page => page.slug === "kontrakt-mal")!
export const contractFaqs = [
  ...contractSeoPage.faqs,
  { q: "Kan jeg bruke fastpris eller timepris?", a: "Ja. Velg Fast for en avtalt fastpris, Time for timepris eller Tilbud for pris med utgangspunkt i et eksisterende tilbud. Du legger inn og kontrollerer prisgrunnlaget selv." },
  { q: "Kan jeg opprette kontrakt fra et tilbud?", a: "Ja. Bruk tilbudet som grunnlag for en kontrakt, og rediger kontrakten videre som et selvstendig dokument. Du kan også opprette en kontrakt uten å starte med et tilbud." },
  { q: "Kan jeg endre kontraktsvilkårene?", a: "Ja. Tilpass arbeidsbeskrivelsen, materialansvaret, betalingsvilkårene og datoene. Skill mellom estimert ferdigstillelse og en avtalt bindende frist. Du kan redigere kontrakten og generere PDF-en på nytt. Avklar endrede vilkår med kunden; redigering er ikke kundens godkjenning." },
  { q: "Kan jeg laste ned og signere kontrakten?", a: "Du kan laste ned PDF-en, men innholdet må gjennomgås før eventuell signering. Standardvilkårene er foreløpig ikke uavhengig juridisk gjennomgått. Du ordner signering utenfor Jobbleder; elektronisk signering er ikke støttet." },
  { q: "Kan jeg opprette faktura fra kontrakten?", a: "Ja. Opprett faktura med kontrakten som grunnlag, og kontroller linjer, datoer og beløp før du genererer dokumentet. Konverteringen er tilgjengelig i Free." },
  { q: "Hvordan fungerer betalingsplanen?", a: "Du kan beskrive betaling etter fremdrift og angi prosentbaserte delbetalinger og betalingsfrist. Planen er en del av kontraktsgrunnlaget, ikke automatisk oppretting eller utsending av fakturaer. Kontroller avtalen og reglene for når leveransen kan faktureres." },
  { q: "Kan jeg velge privatkunde eller bedriftskunde?", a: "Ja. Jobbleder foreslår kontraktstype, og du kan velge den manuelt. Det finnes separate standardvilkår for privatkunder (B2C) og avtaler mellom virksomheter (B2B). Kontroller at typen og vilkårene passer oppdraget. Forslaget er ikke juridisk rådgivning eller automatisk kontroll av lovkrav." },
  { q: "Er standardvilkårene juridisk godkjent?", a: "Nei. De avventer uavhengig juridisk gjennomgang. Jobbleder hjelper deg å forberede et strukturert kontraktsdokument, men gir ikke juridisk rådgivning eller garanti for gyldighet eller etterlevelse. Løsningen er ikke en egen kontraktsløsning for oppføring av ny bolig." },
  { q: "Har kontrakten en revisjonshistorikk?", a: "Nei. Standardklausulene lagres med en bestemt klausulversjon i kontrakten, men dette er ikke en historikk over dine endringer. Kontrakten kan redigeres og PDF-en genereres på nytt; den er ikke et uforanderlig utstedt dokument." },
  { q: "Hvilket språk får kontrakten?", a: "Kontraktsdokumentet er på norsk. Selve grensesnittet i Jobbleder kan brukes på norsk, polsk eller engelsk. Valg av grensesnittspråk betyr ikke at kontrakten blir oversatt til dette språket." },
  { q: "Hva skiller Free fra Premium?", a: "Oppretting, redigering, pris- og betalingsvalg, PDF-eksport og dokumentkonvertering er med i Free. Free-PDF-er har Jobbleder-merking. Premium gir samme dokumentfunksjoner, men lar deg fjerne merkingen og bruke egen firmalogo." },
]

export const contractPricing = [
  { name: "Fast", title: "En avtalt fastpris", text: "Legg inn beløpet dere har avtalt for arbeidet." },
  { name: "Time", title: "Pris per time", text: "Oppgi timeprisen som skal stå i kontrakten." },
  { name: "Tilbud", title: "Tilbudet som prisgrunnlag", text: "Velg et eksisterende tilbud og bruk det som grunnlag for kontraktens pris." },
]
export const contractPayments = [
  { title: "Avklar betalingsfristen", text: "Beskriv når betaling skal skje, og angi betalingsfristen som hører til avtalen." },
  { title: "Fordel betalingen", text: "Angi prosentbaserte delbetalinger og hva hver del gjelder. Knytt dem til tydelige punkter i arbeidet." },
  { title: "Betaling etter fremdrift", text: "Sett opp en betalingsplan som beskriver den avtalte fremdriften. Du må selv kontrollere fakturagrunnlaget senere." },
]
