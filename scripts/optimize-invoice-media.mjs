/* Uses the sharp installation already bundled with Next.js. Never edits sources. */
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'public/images/product/invoice/source');
const output = path.join(root, 'public/images/product/invoice/optimized');
const files = {
  editor: ['jobbleder-invoice-editor.png', 'screenshot_fv_edit.png'],
  free: ['jobbleder-invoice-free.png', 'fv_free_watermark.png'],
  premiumClear: ['jobbleder-invoice-premium-clear.png', 'fv_premium_clear.png'],
  premiumLogo: ['jobbleder-invoice-premium-logo.png', 'fv_premium_logo.png'],
};

async function exists(file) { try { await fs.access(file); return true; } catch { return false; } }
async function optimize(file, name, crop) {
  const input = await fs.readFile(file);
  const original = await sharp(input).metadata();
  let pipeline = sharp(input);
  if (crop) pipeline = pipeline.extract(crop);
  const { data, info } = await pipeline.webp({ quality: 94, effort: 6 }).toBuffer({ resolveWithObject: true });
  const hash = crypto.createHash('sha256').update(data).digest('hex').slice(0, 12);
  const filename = `${name}-${hash}.webp`;
  await fs.writeFile(path.join(output, filename), data);
  return {
    src: `/images/product/invoice/optimized/${filename}`,
    width: info.width, height: info.height, bytes: data.length,
    original: { file: path.relative(root, file).replaceAll('\\', '/'), width: original.width, height: original.height, bytes: input.length, sha256: crypto.createHash('sha256').update(input).digest('hex') },
    ...(crop ? { crop } : {}),
  };
}

async function main() {
  await fs.mkdir(output, { recursive: true });
  const manifestFile = path.join(root, 'content/invoiceProductMedia.json');
  const previous = await exists(manifestFile) ? JSON.parse(await fs.readFile(manifestFile, 'utf8')) : { assets: {} };
  const assets = {};
  const inputs = {};
  const missing = [];
  for (const [key, candidates] of Object.entries(files)) {
    for (const name of candidates) if (await exists(path.join(source, name))) { inputs[key] = path.join(source, name); break; }
    assets[key] = inputs[key] ? await optimize(inputs[key], path.parse(candidates[0]).name) : null;
    if (!assets[key]) missing.push(candidates[0]);
  }
  assets.hero = assets.editor;
  assets.heroMobile = null;
  let heroKind = assets.editor ? 'editor' : null;
  const inspectedEditor = assets.editor?.original.sha256 === 'b7399cdfdebc5aa009b80bcaf0af598cad1bf65971984370f2af30e0ae5d54cd';
  if (inspectedEditor) assets.heroMobile = await optimize(inputs.editor, 'jobbleder-invoice-editor-mobile-customer', { left: 320, top: 367, width: 400, height: 145 });
  if (!assets.editor && await exists(path.join(root, 'public/app-preview.png'))) {
    assets.hero = await optimize(path.join(root, 'public/app-preview.png'), 'jobbleder-application-overview');
    // Inspected authentic overview: only its existing "Ny faktura" quick action.
    assets.heroMobile = await optimize(path.join(root, 'public/app-preview.png'), 'jobbleder-overview-new-invoice-detail', { left: 306, top: 446, width: 410, height: 112 });
    heroKind = 'overview';
  }
  // Editor crop coordinates must be chosen after inspecting the actual editor.
  const cropFile = path.join(source, 'process-crops.json');
  const inspectedCrops = inspectedEditor ? {
    processCustomer: { left: 320, top: 367, width: 400, height: 75 },
    processLines: { left: 332, top: 662, width: 400, height: 136 },
    processTotals: { left: 1566, top: 439, width: 320, height: 145 },
  } : {};
  const crops = assets.editor && await exists(cropFile) ? JSON.parse(await fs.readFile(cropFile, 'utf8')) : inspectedCrops;
  for (const key of ['processCustomer', 'processLines', 'processTotals']) {
    assets[key] = crops[key] ? await optimize(inputs.editor, `jobbleder-invoice-${key.replace('process', '').toLowerCase()}`, crops[key]) : null;
  }
  const manifest = { heroKind, missing, assets };
  await fs.writeFile(manifestFile, JSON.stringify(manifest, null, 2) + '\n');
  const current = new Set(Object.values(assets).filter(Boolean).map((asset) => asset.src));
  for (const asset of Object.values(previous.assets).filter(Boolean)) {
    if (current.has(asset.src)) continue;
    const relative = asset.src.split('?')[0];
    const oldFile = path.resolve(root, 'public', relative.replace(/^\//, ''));
    if (path.dirname(oldFile) === output && oldFile.endsWith('.webp') && await exists(oldFile)) await fs.unlink(oldFile);
  }
  console.log(JSON.stringify(manifest, null, 2));
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
