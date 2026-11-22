/* Inspected, faithful Contract 2.0 crops. Uses the existing site optimizer. */
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { optimize } from './optimize-invoice-media.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = path.join(root, 'public/images/product/kontrakt/optimized');
const source = 'public/images/product/kontrakt/source/';
const reviewDirectory = path.resolve(root, process.env.CONTRACT_REVIEW_DIRECTORY || 'docs/phase-9c2-review');
// x/y/width/height are source pixels. No compositing, value edits or synthetic UI.
const selections = [
  ['hero', 'contract-2-b2c-form.png', [0, 0, 534, 260], 'B2C creation header, type, customer, project, dates, title and summary'],
  ['b2b', 'contract-2-b2b-form.png', [0, 0, 430, 200], 'B2B creation header, customer, project, dates, job context and summary'],
  ['work', 'contract-2-b2c-form.png', [0, 260, 425, 228], 'Structured scope rows and optional detailed work description'],
  ['pricing', 'contract-2-b2c-form.png', [0, 490, 425, 99], 'Price structure, VAT, fixed price, payment deadline and materials in context'],
  ['payments', 'contract-2-b2b-form.png', [0, 418, 341, 199], 'Price/payment fields, all three schedule rows and materials'],
  ['materials', 'contract-2-b2c-form.png', [0, 535, 425, 185], 'Payment and materials with the complete surrounding clause controls'],
  ['savedB2C', 'contract-2-b2c-in-documents.png', [0, 0, 487, 359], 'Contract 15, customer/project, B2C type and scope'],
  ['savedB2B', 'contract-2-b2b-in-documents.png', [0, 0, 358, 289], 'Contract 16, company/project, B2B type and scope'],
  ['offerAction', 'offer-to-contract.png', [0, 0, 840, 714], 'Offer 30 identity, work, totals and complete create-contract action row'],
  ['offerOverview', 'offer-to-contract.png', [0, 0, 840, 540], 'Source Offer 30, work rows and original offer totals'],
  ['offer', 'contract-2-from-offer.png', [0, 68, 434, 510], 'Contract 17 customer/work context and complete Offer 30 price reference'],
  ['invoice', 'contract-2-invoice-conversion.png', [120, 105, 725, 253], 'Editable invoice, Kontrakt 16 source and owner-corrected totals'],
  ['invoiceMobile', 'contract-2-invoice-conversion-mobile.png', [0, 301, 162, 341], 'Genuine mobile invoice: full Lines heading, editable line, VAT and summary'],
];
const assets = {};
for (const [key, filename, coordinates, functionality] of selections) {
  const [left, top, width, height] = coordinates;
  const crop = { left, top, width, height };
  assets[key] = {
    ...await optimize(path.join(root, source, filename), `jobbleder-contract-2-${key.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`)}`, crop, { outputDirectory, lossless: true }),
    crop, functionality, format: 'webp', reused: false,
  };
}
// Preserve originals and old shared derivatives. Only this manifest's consumers change.
await fs.writeFile(path.join(root, 'content/contractProductMedia.json'), JSON.stringify({ assets }, null, 2) + '\n');
const inventory = [];
for (const category of ['kontrakt', 'mobile', 'tilbud']) {
  const directory = `public/images/product/${category}/source`;
  for (const filename of (await fs.readdir(path.join(root, directory))).sort()) {
    if (!/\.(png|jpe?g|webp)$/i.test(filename)) continue;
    const file = `${directory}/${filename}`;
    const buffer = await fs.readFile(path.join(root, file)), metadata = await sharp(buffer).metadata();
    const roles = Object.entries(assets).filter(([, asset]) => asset.original.file === file).map(([role]) => role);
    inventory.push({ file, width: metadata.width, height: metadata.height, bytes: buffer.length,
      sha256: crypto.createHash('sha256').update(buffer).digest('hex'),
      classification: /mobile/i.test(file) ? 'mobile' : 'desktop', roles,
      disposition: roles.length ? 'selected focused crops' : /contract-2-.*(?:mobile|_mobile)/.test(filename) ? 'omitted: mobile form/document text is too low-resolution' : 'retained; existing shared or historical source, not selected for Contract 2.0' });
  }
}
await fs.mkdir(reviewDirectory, { recursive: true });
await fs.writeFile(path.join(reviewDirectory, 'asset-inventory.json'), JSON.stringify({ inventory, selections: assets }, null, 2) + '\n');
for (const [role, asset] of Object.entries(assets)) console.log(`${role}: ${asset.width}x${asset.height}; ${asset.bytes} bytes; ${asset.src}`);
