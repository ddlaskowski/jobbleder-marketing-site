/* Authentic Timeliste crops. Reuses the established lossless WebP pipeline. */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { optimize } from './optimize-invoice-media.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'public/images/product/timeliste/source');
const outputDirectory = path.join(root, 'public/images/product/timeliste/optimized');
// Coordinates chosen after inspecting the originals. Never combine or redraw UI.
const selections = [
  ['hero', 'timelist_4_different_entries_in_documents_menu.png', { left: 646, top: 54, width: 624, height: 646 }],
  ['heroMobile', 'new_timelist_form_4_different_entries.png', { left: 0, top: 96, width: 520, height: 222 }],
  ['registrations', 'work_entries_panel_with_2_entries_marked.png', { left: 200, top: 64, width: 1070, height: 370 }],
  ['registrationsMobile', 'work_entries_panel_with_2_entries_marked.png', { left: 204, top: 214, width: 590, height: 166 }],
  ['form', 'new_timelist_form_4_different_entries.png', null],
  ['formMobile', 'new_timelist_form_4_different_entries.png', { left: 0, top: 172, width: 520, height: 548 }],
  ['timelistPdf', 'exported_timelist_4_different_entries.png', null],
  ['invoiceForm', 'new_invoice_form_4_different_entries.png', null],
  ['invoiceFormMobile', 'new_invoice_form_4_different_entries.png', { left: 0, top: 240, width: 668, height: 480 }],
  ['invoicePdf', 'exported_invoice_4_different_entries.png', null],
];
const assets = {};
for (const [key, filename, crop] of selections) {
  assets[key] = { ...await optimize(path.join(source, filename), `jobbleder-timelist-${key.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`)}`, crop, { outputDirectory, lossless: true }), crop, format: 'webp' };
  console.log(`${key}: ${assets[key].width}x${assets[key].height}, ${assets[key].bytes} bytes`);
}
await fs.writeFile(path.join(root, 'content/timelistProductMedia.json'), JSON.stringify({ assets }, null, 2) + '\n');
