import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// Keep approved expectations versioned and generated results out of historical evidence.
// The fixture retains the approved 9D.2 content and 93 source hashes; unrelated
// historical file snapshots remain in the original QA evidence, not this check.
const directory = path.resolve(root, process.env.CONTRACT_REVIEW_DIRECTORY || '.next/contract-visual-review');
const baselineFile = process.env.CONTRACT_REVIEW_DIRECTORY
  ? path.join(directory, 'baseline.json')
  : path.join(root, 'scripts/fixtures/contract-visual-baseline.json');
const hash = data => crypto.createHash('sha256').update(data).digest('hex');
async function content(name) {
  const compiled = { exports: {} };
  const source = await fs.readFile(path.join(root, `content/${name}.ts`), 'utf8');
  new Function('module', 'exports', ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText)(compiled, compiled.exports);
  return compiled.exports[name];
}
async function files(directory) {
  const result = [];
  for (const entry of await fs.readdir(path.join(root, directory), { withFileTypes: true })) {
    const file = `${directory}/${entry.name}`;
    if (entry.isDirectory()) result.push(...await files(file));
    else result.push(file);
  }
  return result;
}
if (process.argv.includes('--record-baseline')) {
  const tracked = (await Promise.all(['app', 'components', 'content', 'lib', 'public', 'scripts'].map(files))).flat();
  const hashes = Object.fromEntries(await Promise.all(tracked.map(async file => [file, hash(await fs.readFile(path.join(root, file)))])));
  const baseline = { hashes, seoPages: await content('seoPages'), blogPosts: await content('blogPosts') };
  await fs.mkdir(directory, { recursive: true });
  await fs.writeFile(path.join(directory, 'baseline.json'), JSON.stringify(baseline, null, 2));
  console.log(`Recorded ${tracked.length} baseline file hashes and approved content records.`);
} else {
  const baseline = JSON.parse(await fs.readFile(baselineFile, 'utf8'));
  const manifest = JSON.parse(await fs.readFile(path.join(root, 'content/contractProductMedia.json'), 'utf8'));
  const pages = await content('seoPages'), posts = await content('blogPosts');
  const contractSlugs = ['kontrakt-mal', 'kontrakt-eksempel', 'kontrakt-handverker', 'hva-skal-en-kontrakt-inneholde'];
  const articleSlugs = ['tilbud-vs-kontrakt', 'nar-trenger-du-kontrakt', 'fra-tilbud-til-kontrakt-og-faktura'];
  for (const original of baseline.seoPages) {
    const current = pages.find(page => page.slug === original.slug);
    if (!contractSlugs.includes(original.slug)) assert.deepEqual(current, original, `Unrelated SEO content: ${original.slug}`);
    else {
      assert.deepEqual(current.sections, original.sections, `Approved section copy: ${original.slug}`);
      assert.deepEqual(current.faqs, original.faqs, `Legal/FAQ copy: ${original.slug}`);
      if (!['kontrakt-mal', 'kontrakt-eksempel'].includes(original.slug)) assert.equal(current.title, original.title);
      if (original.slug !== 'kontrakt-mal') assert.equal(current.description, original.description);
    }
  }
  for (const original of baseline.blogPosts) {
    const current = posts.find(post => post.slug === original.slug);
    if (!articleSlugs.includes(original.slug)) assert.deepEqual(current, original, `Unrelated article: ${original.slug}`);
    else {
      const notices = post => post.blocks.filter(block => block.type === 'note');
      assert.deepEqual(notices(current), notices(original), `Legal notices: ${original.slug}`);
    }
  }
  const expectedTitles = {
    'kontrakt-mal': 'Kontrakt mal – lag kontrakt gratis med Jobbleder',
    'kontrakt-eksempel': 'Kontrakt eksempel – se hvordan en kontrakt bygges opp',
  };
  for (const [slug, title] of Object.entries(expectedTitles)) assert.equal(pages.find(page => page.slug === slug).title, title);
  const assets = Object.values(manifest.assets);
  const optimization = [];
  for (const image of assets) {
    assert(image.original.file.includes('/kontrakt/source/'), image.src);
    assert(/contract-2-|offer-to-contract/.test(image.original.file), image.src);
    assert.equal(hash(await fs.readFile(path.join(root, image.original.file))), image.original.sha256, image.src);
    const buffer = await fs.readFile(path.join(root, 'public', image.src));
    const metadata = await sharp(buffer).metadata();
    assert.equal(metadata.width, image.width); assert.equal(metadata.height, image.height);
    assert.equal(buffer.length, image.bytes); assert.equal(metadata.format, 'webp');
    const source = sharp(path.join(root, image.original.file));
    if (image.crop) source.extract(image.crop);
    const originalPixels = await source.ensureAlpha().raw().toBuffer();
    const outputPixels = await sharp(buffer).ensureAlpha().raw().toBuffer();
    assert(originalPixels.equals(outputPixels), `Lossless crop fidelity: ${image.src}`);
    optimization.push({ src: image.src, webpBytes: buffer.length, equivalentPngBytes: (await source.clone().png().toBuffer()).length });
  }
  const sourceFiles = Object.entries(baseline.hashes).filter(([file]) => file.includes('/source/'));
  for (const [file, originalHash] of sourceFiles) assert.equal(hash(await fs.readFile(path.join(root, file))), originalHash, `Source changed: ${file}`);
  const changed = [];
  for (const [file, originalHash] of Object.entries(baseline.hashes)) if (hash(await fs.readFile(path.join(root, file))) !== originalHash) changed.push(file);
  const results = { passed: true, derivatives: assets.length, originalSourceFilesUnchanged: sourceFiles.length, changedBaselineFiles: changed };
  await fs.mkdir(directory, { recursive: true });
  await fs.writeFile(path.join(directory, 'verification.json'), JSON.stringify(results, null, 2));
  await fs.writeFile(path.join(directory, 'optimization-results.json'), JSON.stringify(optimization, null, 2));
  if (process.argv.includes('--clean-trials')) {
    const selected = new Set(assets.map(image => image.src));
    const removed = [];
    const folder = 'public/images/product/kontrakt/optimized';
    for (const filename of await fs.readdir(path.join(root, folder))) {
      const file = `${folder}/${filename}`;
      if (!filename.startsWith('jobbleder-contract-2-') || !filename.endsWith('.webp') || baseline.hashes[file] || selected.has(file.replace(/^public/, ''))) continue;
      await fs.unlink(path.join(root, file));
      removed.push(file);
    }
    await fs.writeFile(path.join(directory, 'removed-trial-derivatives.json'), JSON.stringify(removed, null, 2));
  }
  console.log(JSON.stringify(results, null, 2));
}
