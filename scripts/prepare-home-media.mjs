/* Authentic crops only. Reuses the invoice pipeline; never writes to originals. */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { optimize } from './optimize-invoice-media.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const inputs = {
  overview: 'public/app-preview.png',
  timelist: 'public/images/product/timeliste/source/documents_menu_preview_timelist_document.png',
  offer: 'public/images/product/tilbud/source/exported_tilbud_A5.png',
  contractDocument: 'public/images/product/kontrakt/source/exported_contract_preview.png',
  documentFlow: 'public/images/product/docflow/source/jobbleder_docflow.png',
  documentFlowCompact: 'public/images/product/docflow/source/docflow_cropped.png',
};
const selections = [
  ['overview', 'overview', 'overview', null],
  ['overviewMobile', 'overview', 'overview', { left: 320, top: 330, width: 392, height: 216 }],
  ['timelist', 'timeliste', 'timelist', { left: 660, top: 48, width: 608, height: 512 }],
  ['timelistMobile', 'timeliste', 'timelist', { left: 770, top: 281, width: 300, height: 104 }],
  ['offer', 'tilbud', 'offer', null],
  ['contractDocument', 'kontrakt', 'contractDocument', null],
  ['documentFlow', 'docflow', 'documentFlow', null],
  ['documentFlowCompact', 'docflow', 'documentFlowCompact', null],
  // Remove only the repeated right-hand explanations, retaining all four complete paths.
  ['documentFlowMobile', 'docflow', 'documentFlowCompact', { left: 0, top: 0, width: 1000, height: 597 }],
];

const assets = {};
for (const [key, product, input, crop, width] of selections) {
  const asset = await optimize(path.join(root, inputs[input]), `jobbleder-home-${key.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)}`, crop, {
    outputDirectory: path.join(root, 'public/images/product', product, 'optimized'),
    lossless: true,
    width,
  });
  assets[key] = { ...asset, crop, format: 'webp' };
  console.log(`${key}: ${asset.width}x${asset.height}, ${asset.bytes} bytes`);
}
await fs.writeFile(path.join(root, 'content/homeProductMedia.json'), JSON.stringify({ assets }, null, 2) + '\n');
