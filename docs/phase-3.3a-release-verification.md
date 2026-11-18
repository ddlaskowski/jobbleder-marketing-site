# Phase 3.3A — accessibility fix and release verification

Date: 18 November 2026, Europe/Berlin.

**Assessment: READY TO DEPLOY, pending user approval. No commit, push or deployment performed.**

## Exact files

Modified existing file:

- `components/site/Primitives.tsx`, the `ProductMedia` figcaption link at line 40.

Created:

- `docs/phase-3.3a-release-verification.md`, this report.

No other existing project file is changed by this phase. Pre-existing uncommitted work from previous phases is retained. The generated `next-env.d.ts` change from running the build is restored to its exact pre-phase bytes. No CSS, image, manifest, metadata, dependency or invoice-page file was edited.

## Inspection of all six affected links

The Phase 3.3 report's F1 finding was read before editing. Each homepage call site and its destination/description was inspected separately. All six independently resolve to the same rendering line in `ProductMedia`; the dedicated Faktura landing page uses a separate `ProductMediaFrame` and is not affected.

All six had visible text **Åpne hele bildet**. Their old accessible names were **Åpne hele originalbildet: [description]**. The full visible phrase was not contained in the accessible name, causing `label-content-name-mismatch`.

The table supplies each exact description. Combining the old prefix above with the description gives its old accessible name; combining **Åpne hele bildet: ** with the description gives its corrected native name.

| Link and call site in `components/home/Homepage.tsx` | Preserved description | Unchanged destination |
|---|---|---|
| Hero, line 35 | Hurtigvalg for arbeidsregistrering og faktura i Jobbleder | `/app-preview.png` |
| Faktura, line 49 | Faktura fra Jobbleder med kundedetaljer, MVA, totalsum og egen firmalogo | `/images/product/invoice/source/fv_premium_logo.png` |
| Timeliste, line 56 | Arbeidsdager i en timeliste med markert ekstraarbeid | `/images/product/timeliste/source/documents_menu_preview_timelist_document.png` |
| Tilbud, line 64 | Tilbud med kundeopplysninger, gyldighetsdato, parkettlegging, MVA og totalsum | `/images/product/tilbud/source/exported_tilbud_A5.png` |
| Kontrakt, line 72 | Kontrakt fra Jobbleder med avtalepartene, arbeid, pris, vilkår og felt for manuelle signaturer | `/images/product/kontrakt/source/exported_contract_preview.png` |
| Document workflow, line 84 | Fire dokumentflyter fra registreringer, timelister og tilbud til faktura | `/images/product/docflow/source/jobbleder_docflow.png` |

The common fix was selected only after confirming that all six shared this specific cause. Their distinct image descriptions and destinations remain intact.

## Smallest semantic correction

The link now takes its accessible name from native text content. The existing visually hidden text utility preserves the distinct description in the same link:

```tsx
<a href={fullImage}>
  Åpne hele bildet<span className={styles.srOnly}>: {alt}</span>
</a>
```

The overriding `aria-label` was removed. No replacement ARIA attributes were added. The visible label remains exactly the same. The existing `srOnly` class is reused without changes; it keeps the description available to assistive technology, outside visual layout. There is no `aria-hidden`, duplicate label reference, extra tab stop, or separate repeated accessible description. Existing image alt text and captions are preserved.

## Accessibility results

- Full Lighthouse **accessibility category**, version 13.6.0, against the built production homepage at 375×900 / DPR 1: **100/100**.
- The decisive individual audit, `label-content-name-mismatch`: **pass**, score 1, **zero failing elements**. Previously this diagnostic identified six failures despite the aggregate score being 100.
- `link-name`: **pass**, score 1, zero failing elements.
- Full accessibility run: **no failing audits and no run warnings**. This verifies the reported automated issue; it is not a claim of exhaustive screen-reader or WCAG conformance testing.
- Browser accessibility tree lists all six corrected names beginning with the complete visible phrase, followed by their respective descriptions.
- Native DOM inspection confirms no `aria-label` remains on any of the six links; each retains its description as accessible text.
- Real sequential Tab navigation reached **all six links**, each with a **solid 3 px focus outline**.
- Enter on the workflow image link navigated to the unchanged original PNG, displayed as `jobbleder_docflow.png (1536×1024)`. Back navigation returned to the homepage.
- All six original-image destinations returned HTTP 200 in the release server checks.

**All six reported P1 instances are resolved.**

## Release results

| Check | Result |
|---|---|
| `npx.cmd tsc --noEmit --incremental false` | Passed. |
| Full `npm.cmd run lint` | Passed. |
| `npm.cmd run build` | Passed; compilation, TypeScript and 55 generated static pages completed. |
| Homepage at 375, 768, 1280 and 1440 px | Checked in browser; no horizontal overflow; six corrected names and four product sections retained. |
| Homepage generated `<main>` comparison | Identical to pre-fix output except the six intended link substitutions, ignoring React's nonvisual text-separator comments. |
| Dedicated Faktura landing page generated `<main>` | Byte-identical before/after. HTTP 200. |
| Homepage and Faktura title/meta/canonical/link metadata | Identical before/after. Homepage canonical remains `https://www.jobbleder.no/`. |
| Sitemap and robots generated bodies | Byte-identical before/after; both HTTP 200. |
| Product imagery and document flow | Six images, all four products and all four workflow rows remain. Sources, alt text, captions, natural dimensions and responsive branches are unchanged. |
| Layout and visual appearance | Existing styles and visible text unchanged. Hidden context is positioned outside normal layout. No unexpected layout change observed. |
| Scope integrity | Only the intended existing source file differs from the pre-phase file snapshot; this report is the only new project file. |

Verification used a local production server at `http://127.0.0.1:3018/`. The audit was limited to the requested accessibility maintenance; performance benchmarking and authentication/analytics implementation were not reopened. The build emitted the existing Node `module.register()` deprecation warning without failing.

## Remaining known P2/P3 observations

The Phase 3.3 report remains the historical audit and is not rewritten. Its nonblocking observations remain unchanged:

- English login-first registration adds friction to the Norwegian free-start journey.
- Phone image fine print remains small; full-image links and the HTML workflow alternative remain available.
- The lossless workflow infographic is comparatively heavy after scrolling; right-sized alternatives need a separate fidelity review.
- Local analytics certificate trust, masked upstream errors and unacknowledged footprint delivery remain separate operational concerns. The previous audit found production handshake HTTP 200; this phase does not claim to fix or retest production analytics.
- CTA-to-registration conversion tracking is not evidenced by this marketing implementation.
- The declared blog SearchAction still lacks an implemented query-driven search.
- Free scope/reuse benefits could be clearer near the hero CTA.
- Credit-note mention, copy repetition and framework/runtime polish remain optional improvements.

None of these was changed or promoted into a new feature during this phase.

## Final assessment

**READY TO DEPLOY — awaiting approval.** The sole P1 finding is closed across all six instances. Required release checks pass, and no new blocking finding was identified. No commit, push or deployment has been performed. Publication remains a separate, explicitly approved action.
