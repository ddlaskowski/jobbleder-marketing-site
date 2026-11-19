import type { Metadata } from "next"
import { siteUrl } from "@/lib/siteUrl"
import InstructionsHub from "@/components/instructions/InstructionsHub"

export const metadata: Metadata = {
  title: "Instruksjoner for Jobbleder",
  description:
    "Lær hvordan du bruker Jobbleder til å opprette faktura, tilbud, timelister og kontrakter, registrere arbeidsøkter og holde oversikt over prosjekter, kunder og rapporter.",
  alternates: {
    canonical: siteUrl("/instruksjoner"),
  },
}


export default function InstruksjonerPage() {
  return <InstructionsHub />
}
