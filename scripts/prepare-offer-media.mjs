/* Authentic offer screenshots only. Source PNGs are never overwritten. */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { optimize } from './optimize-invoice-media.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = path.join(root, 'public/images/product/tilbud/optimized');
const inputs = {
  preview: 'public/images/product/tilbud/source/offer_document_preview_in_documents_menu.png',
  pdf: 'public/images/product/tilbud/source/exported_tilbud_A4.png',
  editor: 'public/images/product/tilbud/source/new_offer_form.png',
  invoice: 'public/images/product/tilbud/source/tilbud_to_invoice.png',
  contract: 'public/images/product/tilbud/source/tilbud_to_contract.png',
  editedContract: 'public/images/product/tilbud/source/contract_from_offer_edited.png',
  contractInvoice: 'public/images/product/tilbud/source/invoice_from_contract.png',
};
// Inspected coordinates in the supplied PNGs; crops remove only irrelevant UI/space.
const selections = [
  ['hero', 'preview', { left: 180, top: 58, width: 1090, height: 650 }],
  ['heroMobile', 'preview', { left: 660, top: 260, width: 600, height: 168 }],
  ['pdf', 'pdf', null],
  ['editor', 'editor', { left: 184, top: 164, width: 1084, height: 342 }],
  ['editorMobile', 'editor', { left: 194, top: 350, width: 842, height: 140 }],
  ['invoice', 'invoice', { left: 184, top: 146, width: 1084, height: 386 }],
  ['invoiceMobile', 'invoice', { left: 184, top: 146, width: 862, height: 386 }],
  ['contract', 'contract', null],
  ['contractMobile', 'contract', { left: 0, top: 76, width: 664, height: 426 }],
  ['editedContract', 'editedContract', { left: 0, top: 94, width: 560, height: 442 }],
  ['contractInvoice', 'contractInvoice', { left: 184, top: 146, width: 1084, height: 386 }],
  ['contractInvoiceMobile', 'contractInvoice', { left: 184, top: 146, width: 862, height: 386 }],
];
const assets = {};
for (const [key, input, crop] of selections) {
  assets[key] = { ...await optimize(path.join(root, inputs[input]), `jobbleder-offer-${key.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`)}`, crop, { outputDirectory, lossless: true }), crop, format: 'webp' };
  console.log(`${key}: ${assets[key].width}x${assets[key].height}, ${assets[key].bytes} bytes`);
}
await fs.writeFile(path.join(root, 'content/offerProductMedia.json'), JSON.stringify({ assets }, null, 2) + '\n');
