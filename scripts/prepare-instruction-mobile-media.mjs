// Authentic phone captures only. Keep source PNGs and their native dimensions.
import fs from "node:fs/promises"
import path from "node:path"
import crypto from "node:crypto"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const sourceDirectory = "public/images/product/mobile/source"
const directory = "public/images/product/mobile/optimized"
const selections = {
  mobileRegistrationForm: "registration_form_mobile.png",
  mobileRegistrationExtra: "registration_extra_km_save_mobile.png",
  mobileRegistrationsSaved: "registrations_saved_mobile.png",
  mobileRegistrationsSelected: "registrations_selected_import_mobile.png",
  mobileTimelistImport: "timelist_import_result_mobile_01.png",
  mobileTimelistRows: "timelist_import_result_mobile_02.png",
  mobileTimelistDocument: "timelist_invoice_regular_mobile_01.png",
  mobileTimelistSummary: "timelist_invoice_regular_mobile_02.png",
  mobileTimelistInvoice: "timelist_invoice_regular_mobile.png",
  mobileTimelistInvoiceExtra: "timelist_invoice_extra_mobile.png",
  mobileInvoiceSummary: "timelist_invoice_summary_mobile.png",
  mobileOfferDocument: "offer_document_actions_mobile.png",
  mobileContractDocument: "contract_document_actions_mobile.png",
  mobileOfferInvoice: "invoice_from_offer_mobile.png",
  mobileOfferContract: "contract_from_offer_mobile.png",
  mobileContractInvoice: "invoice_from_contract_mobile.png",
  mobileInvoiceCreate: "invoice_create_mobile.png",
  mobileContractCreate: "contract_create_mobile_02.png",
  mobileContractPayment: "contract_create_mobile_01.png",
  mobileOfferForm: "new_offer_document_edit_mobile.png",
}
const sha256 = data => crypto.createHash("sha256").update(data).digest("hex")
const assets = {}
await fs.mkdir(path.join(root, directory), { recursive: true })
for (const [key, filename] of Object.entries(selections)) {
  const file = `${sourceDirectory}/${filename}`
  const original = await fs.readFile(path.join(root, file))
  const metadata = await sharp(original).metadata()
  const { data, info } = await sharp(original).webp({ lossless: true, effort: 6 }).toBuffer({ resolveWithObject: true })
  const name = `${path.parse(filename).name}-${sha256(data).slice(0, 12)}.webp`
  await fs.writeFile(path.join(root, directory, name), data)
  assets[key] = { src: `/${directory.replace(/^public\//, "")}/${name}`, width: info.width, height: info.height, bytes: data.length,
    original: { file, width: metadata.width, height: metadata.height, bytes: original.length, sha256: sha256(original) } }
}
await fs.writeFile(path.join(root, "content/instructionMobileMedia.json"), JSON.stringify({ sourceDirectory, compression: "lossless WebP; no resize or crop", assets }, null, 2) + "\n")
console.log(JSON.stringify({ generated: Object.keys(assets).length, originalBytes: Object.values(assets).reduce((n, a) => n + a.original.bytes, 0), derivativeBytes: Object.values(assets).reduce((n, a) => n + a.bytes, 0) }))
