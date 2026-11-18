/* Faithful contract-image derivatives. Never modifies source screenshots. */
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { optimize } from './optimize-invoice-media.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = path.join(root, 'public/images/product/kontrakt/optimized');
const home = JSON.parse(await fs.readFile(path.join(root, 'content/homeProductMedia.json'), 'utf8')).assets;
const offer = JSON.parse(await fs.readFile(path.join(root, 'content/offerProductMedia.json'), 'utf8')).assets;
const assets = {
  pdf: { ...home.contractDocument, reused: true },
  offer: { ...offer.contract, reused: true },
  offerMobile: { ...offer.contractMobile, reused: true },
  invoice: { ...offer.contractInvoice, reused: true },
  invoiceMobile: { ...offer.contractInvoiceMobile, reused: true },
};
const source = 'public/images/product/kontrakt/source/';
// Existing inspected pricing dropdowns are reused, including their original provenance.
for (const [key, name, crop] of [
  ['pricing', 'jobbleder-home-contract-192687f50086.webp', null],
  ['pricingMobile', 'jobbleder-home-contract-mobile-6413439017d3.webp', { left: 0, top: 0, width: 340, height: 141 }],
]) {
  const input = await fs.readFile(path.join(root, source, 'payment_base.png'));
  const original = await sharp(input).metadata();
  const file = await fs.readFile(path.join(outputDirectory, name));
  const image = await sharp(file).metadata();
  assets[key] = { src: `/images/product/kontrakt/optimized/${name}`, width: image.width, height: image.height, bytes: file.length,
    original: { file: `${source}payment_base.png`, width: original.width, height: original.height, bytes: input.length, sha256: crypto.createHash('sha256').update(input).digest('hex') },
    crop, format: 'webp', reused: true };
}
const selections = [
  ['hero', `${source}new_contract_form_time.png`, { left: 0, top: 84, width: 668, height: 422 }],
  ['heroMobile', `${source}new_contract_form_time.png`, { left: 334, top: 396, width: 332, height: 74 }],
  ['payments', `${source}payment_methods.png`, null],
  ['paymentsMobile', `${source}payment_methods.png`, { left: 0, top: 0, width: 340, height: 154 }],
  ['advance', `${source}new_contract_form_with_advance_percentage.png`, { left: 0, top: 350, width: 538, height: 58 }],
  ['progress', 'public/images/product/tilbud/source/contract_from_offer_edited.png', { left: 0, top: 386, width: 560, height: 120 }],
  ['clauses', `${source}new_contract_form_with_advance_percentage.png`, { left: 0, top: 438, width: 538, height: 278 }],
  ['materials', `${source}material_costs.png`, { left: 0, top: 0, width: 340, height: 142 }],
];
for (const [key, file, crop] of selections) {
  assets[key] = { ...await optimize(path.join(root, file), `jobbleder-contract-${key.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`)}`, crop, { outputDirectory, lossless: true }), crop, format: 'webp', reused: false };
}
await fs.writeFile(path.join(root, 'content/contractProductMedia.json'), JSON.stringify({ assets }, null, 2) + '\n');
for (const [key, asset] of Object.entries(assets)) console.log(`${key}: ${asset.width}x${asset.height}, ${asset.bytes} bytes${asset.reused ? ' (reused)' : ''}`);
