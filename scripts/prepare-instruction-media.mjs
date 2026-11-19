/* Instructional details from authentic sources. Existing product assets are reused. */
import fs from "node:fs/promises"
import path from "node:path"
import crypto from "node:crypto"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const read = async name => (JSON.parse(await fs.readFile(path.join(root, `content/${name}ProductMedia.json`), "utf8"))).assets
const [invoice, timelist, offer, contract] = await Promise.all(["invoice", "timelist", "offer", "contract"].map(read))
const assets = Object.fromEntries(Object.entries({
  invoiceForm: invoice.editor, invoiceCustomer: invoice.heroMobile, invoicePdf: invoice.free,
  registrations: timelist.registrations, registrationsMobile: timelist.registrationsMobile,
  timelistPdf: timelist.timelistPdf,
  timelistDocuments: timelist.hero, timelistInvoice: timelist.invoiceForm, timelistInvoiceMobile: timelist.invoiceFormMobile, timelistInvoicePdf: timelist.invoicePdf,
  offerEditorMobile: offer.editorMobile, offerDocuments: offer.hero, offerInvoice: offer.invoice, offerInvoiceMobile: offer.invoiceMobile,
  offerPdf: offer.pdf, offerContract: offer.contract, offerContractMobile: offer.contractMobile, editedContract: offer.editedContract,
  contractInvoice: offer.contractInvoice, contractInvoiceMobile: offer.contractInvoiceMobile, contractPdf: contract.pdf,
  contractPricing: contract.pricing, contractPricingMobile: contract.pricingMobile, contractClauses: contract.clauses,
}).map(([key, asset]) => [key, { ...asset, reused: true }]))
const selections = [
  ["registrationForm", "timeliste/source/work_entries_add_new_position_mark_as_extra.png", { left: 200, top: 176, width: 1070, height: 306 }],
  ["registrationExtra", "timeliste/source/work_entries_add_new_position_mark_as_extra.png", { left: 738, top: 352, width: 520, height: 124 }],
  ["registrationsSaved", "timeliste/source/work_entries_panel_with_2_entries.png", { left: 200, top: 64, width: 1070, height: 366 }],
  ["timelistSetup", "timeliste/source/new_timelist_wizard.png", { left: 200, top: 76, width: 1070, height: 529 }],
  ["timelistCustomer", "timeliste/source/new_timelist_wizard_add_client.png", { left: 210, top: 202, width: 812, height: 130 }],
  ["timelistImport", "timeliste/source/new_timelist_wizard_with_3_entries_imported_from_work_entires_panel.png", null],
  ["timelistSettings", "timeliste/source/timelist_settings_add_km_row.png", { left: 410, top: 192, width: 850, height: 377 }],
  ["offerForm", "tilbud/source/new_offer_form.png", { left: 184, top: 56, width: 1084, height: 450 }],
  ["contractForm", "kontrakt/source/new_contract_form_time.png", null],
]
const directory = path.join(root, "public/images/product/instructions/optimized")
await fs.mkdir(directory, { recursive: true })
for (const [key, input, crop] of selections) {
  const originalFile = `public/images/product/${input}`
  const original = await fs.readFile(path.join(root, originalFile))
  const metadata = await sharp(original).metadata()
  let pipeline = sharp(original)
  if (crop) pipeline = pipeline.extract(crop)
  const { data, info } = await pipeline.webp({ lossless: true, effort: 6 }).toBuffer({ resolveWithObject: true })
  const sha256 = buffer => crypto.createHash("sha256").update(buffer).digest("hex")
  const filename = `jobbleder-instructions-${key.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`)}-${sha256(data).slice(0, 12)}.webp`
  await fs.writeFile(path.join(directory, filename), data)
  assets[key] = { src: `/images/product/instructions/optimized/${filename}`, width: info.width, height: info.height, bytes: data.length,
    original: { file: originalFile, width: metadata.width, height: metadata.height, bytes: original.length, sha256: sha256(original) }, crop, reused: false }
}
await fs.writeFile(path.join(root, "content/instructionMedia.json"), JSON.stringify({ assets }, null, 2) + "\n")
console.log(JSON.stringify({ reused: Object.values(assets).filter(a => a.reused).length, generated: selections.length, generatedBytes: Object.values(assets).filter(a => !a.reused).reduce((sum, a) => sum + a.bytes, 0) }))
