import { contractEditorialVisuals } from "@/content/contractProductVisuals"
import ContractMedia from "./ContractMedia"

export default function ContractEditorialMedia({ slug, heading }: { slug: string; heading: string }) {
  const variant = contractEditorialVisuals[slug]?.[heading]
  if (!variant) return null
  return <>
    {slug === "kontrakt-handverker" && variant === "work" && <ContractMedia variant="materials" appearance="page" />}
    {variant === "offer" && <ContractMedia variant="offerAction" appearance="page" />}
    <ContractMedia variant={variant} appearance="page" />
    {slug === "kontrakt-eksempel" && variant === "savedPrivate" && <ContractMedia variant="savedBusiness" appearance="page" />}
  </>
}
