# Invoice product media

Run from the repository root:

```sh
node scripts/optimize-invoice-media.mjs
```

Uses the existing `sharp` installation; do not install new dependencies. Sources are never overwritten.

## Corrected invoice examples

Place the approved images at `public/images/product/invoice/source/`:

- `jobbleder-invoice-editor.png`
- `jobbleder-invoice-free.png`
- `jobbleder-invoice-premium-clear.png`
- `jobbleder-invoice-premium-logo.png`

The currently supplied names are also accepted, without renaming or modifying originals: `screenshot_fv_edit.png`, `fv_free_watermark.png`, `fv_premium_clear.png`, `fv_premium_logo.png`. If both naming conventions exist, the descriptive `jobbleder-*` filename takes precedence.

Keep the invoice images as full A4 pages. Use sanitized, approved examples. Replace these source files with corrected versions under the same names, then rerun the command. It regenerates the WebP files and `content/invoiceProductMedia.json`, including dimensions and content-versioned URLs. No component edits are required for replacing invoice images. Review the result, run validation, and deploy separately when authorized.

The same Premium Logo WebP is reused in the hero, showcase, and comparison; it is not duplicated. Optimized filenames contain a content hash, so corrected images receive new cache keys without changing Next.js configuration. The command removes only superseded WebPs listed in its previous manifest, within its own optimized output directory. Premium Clear is an alternative appearance under the same Premium comparison group, not a separate plan. Missing images retain labeled placeholders. Invoice screenshots are contained inside A4 frames without stretching or cropping their contents.

## Process crops

Inspect the actual editor before choosing crop rectangles. Add an optional `source/process-crops.json` using integer source-pixel coordinates:

```json
{
  "processCustomer": { "left": 0, "top": 0, "width": 100, "height": 100 },
  "processLines": { "left": 0, "top": 0, "width": 100, "height": 100 },
  "processTotals": { "left": 0, "top": 0, "width": 100, "height": 100 }
}
```

These numbers demonstrate the JSON format only; they are not approved crop coordinates. Choose rectangles showing customer/project selection, invoice lines/MVA, and totals/generation controls respectively, then rerun the optimizer. Sharp rejects out-of-bounds rectangles. Built-in crops apply only to the exact inspected editor image (SHA-256 checked); replacing that screenshot requires reviewing the crops. Without inspected crop coordinates, process placeholders remain.

## Current integration

All four source images are integrated using the supplied filenames above. The full editor is shown on desktop; mobile uses an authentic customer/date crop. Process crops focus on customer selection, unit price/MVA, and totals to keep labels readable; project selection, description, quantity, and generation controls remain available in the full editor image. No UI content has been added or altered.

The owner supplied corrected invoice sources, visually verified on 18 November 2026. All three payment boxes contain invoice 110, account 1234.12.12345, NOK 15 000,00, invoice date 18/11/2026, and due date 02/12/2026. The duplicated due-date wording and clipped payment instructions have been corrected in the sources. Screenshots retain their original proportions inside A4 frames. Replace them under the same source filenames and rerun the command for future corrections.

If the editor source is missing, the existing overview screenshot can be used as a clearly identified fallback. An unfamiliar replacement editor defaults to its complete image; inspect and approve new mobile/process crop coordinates before release. `ProductMediaFrame` supports a separate `mobileImage` for art direction.
