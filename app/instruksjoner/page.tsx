import type { Metadata, ResolvingMetadata } from "next"
import { socialMetadata } from "@/lib/socialMetadata"
import { siteUrl } from "@/lib/siteUrl"
import InstructionsHub from "@/components/instructions/InstructionsHub"

const pageMetadata = {
  title: "Instruksjoner for Jobbleder",
  description:
    "Lær hvordan du bruker Jobbleder til å opprette faktura, tilbud, timelister og kontrakter, registrere arbeidsøkter og holde oversikt over prosjekter, kunder og rapporter.",
  alternates: {
    canonical: siteUrl("/instruksjoner"),
  },
} satisfies Metadata

export async function generateMetadata(_props: unknown, parent: ResolvingMetadata): Promise<Metadata> {
  return { ...pageMetadata, ...await socialMetadata(pageMetadata.title, pageMetadata.description, "/instruksjoner", parent) }
}

export default function InstruksjonerPage() {
  return <InstructionsHub />
}
