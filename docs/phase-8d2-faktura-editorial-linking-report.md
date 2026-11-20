# Phase 8D.2 — Faktura editorial accuracy & internal linking

Date: 2026-11-20. Local editorial implementation only. No staging, commit, push or deployment.

## 1. Executive summary

Corrected both F10 completion-only statements in `/blogg/forskjell-faktura-tilbud-timeliste`. Qualified the related timing article, clarified manual PDF delivery in the older free-invoice guide, and replaced an unlinked reading recommendation with actual contextual destinations in the free-tool article.

Scope: **four article records in `content/blogPosts.ts`, five contextual links, no component/design changes**. The approved Phase 8B/8C/8D.1 pages already satisfy their intended journeys and remain unchanged. No useful existing article link was removed.

TypeScript, full ESLint, production build and whitespace checks passed. Browser verification covered the four affected articles and three approved pages at 375/1440, plus seven representative journey/content routes at desktop width. No full-site regression or production verification is claimed.

## 2. F10 original and revised wording

URL: `/blogg/forskjell-faktura-tilbud-timeliste`. Purpose remains a beginner's comparison of offer, timesheet and invoice. Original publication date remains `2025-04-21`.

Under **Hva er en faktura?**, before:

> En faktura sendes etter at jobben er utført, når du skal kreve betaling. Den oppsummerer hva kunden skal betale for og bør være tydelig satt opp.

After:

> En faktura dokumenterer det kunden skal betale for varer eller tjenester. Når du fakturerer, må du følge avtalen og reglene som gjelder for leveransen. Ved lengre oppdrag kan det være aktuelt å fakturere underveis, i samsvar med fremdriften. Fakturering på forskudd har egne vilkår og er ikke alltid tillatt.

Under **Hvordan henger de sammen?**, before:

> Faktura – når jobben er ferdig og du skal ha betalt

After:

> Faktura – når det er grunnlag for å fakturere leveransen eller den utførte delen av arbeidet

Why: the original paragraph and summary list could both be read as a universal completion-only rule. The replacement preserves the document comparison while acknowledging conditional timing and preventing an inference that advance invoicing is freely permitted. It introduces no deadline, automatic action or product claim.

## 3. Authoritative sources and verification limitations

Sources reopened during this phase:

| Source | Verification and limits |
|---|---|
| [Skatteetaten: Utstedelse av salgsdokument i bygge- og anleggsvirksomheten — Avregning av forskudd](https://www.skatteetaten.no/rettskilder/type/uttalelser/prinsipputtalelser/utstedelse-av-salgsdokument-i-bygge--og-anleggsvirksomheten--avregning-av-forskudd/) | Supports the distinction between progress-based invoicing, relevant part-payments and financial advances. It does not establish a universal right to invoice future taxable work. |
| [Skatteetaten: Tidspunktet for fakturering av entreprisearbeider — Prosjektmodellen](https://www.skatteetaten.no/en/rettskilder/type/uttalelser/bfu/tidspunktet-for-fakturering-av-entreprisearbeider---prosjektmodellen----merverdiavgiftsloven--15-10-tredje-ledd-jf.-bokforingsforskriften--8-1-2a/) | Recent published BFU reiterates general versus construction-specific timing and the distinction between progress payments and pure advances. Its particular project conclusion is not generalized to every customer. |
| [Skatteetaten: Utstedelse av salgsdokument ved tømming av slam, del II](https://www.skatteetaten.no/rettskilder/type/uttalelser/prinsipputtalelser/utstedelse-av-salgsdokument-ved-tomming-av-slam-del-ii/) (2 April 2024) | Demonstrates that advance-invoicing exceptions exist for specified types of supplies under conditions. This example is verification evidence, not new municipal-services content added to the articles. |
| [Altinn: Faktura — salgsdokumentasjon](https://info.altinn.no/starte-og-drive/regnskap-og-revisjon/regnskap/faktura-salgsdokumentasjon/) (updated 18 March 2026) | Cross-check of invoice content, tax presentation and referencing credit-note guidance. The requirements reference remains the contextual destination for these distinctions. |
| [Lovdata: bokføringsforskriften § 5-2-6](https://lovdata.no/forskrift/2004-12-01-1558/%C2%A75-2-6) | Full direct request returned HTTP 405. Search snippets were available but are not treated as complete consolidated-law verification. |

Also inspected [Skatteetaten's 2007 financial-advance statement](https://www.skatteetaten.no/rettskilder/type/uttalelser/prinsipputtalelser/finansielle-forskudd-eller-forskuddsfakturering/). It is historical context with older section references, not the sole basis for present wording.

Editorial conclusion: invoice timing depends on the applicable transaction rules; construction progress and pure financial advances must not be conflated. The article deliberately avoids an exhaustive legal explanation, named exception list, new deadline or universal prohibition/permission. Direct consolidated-law access remains a limitation.

## 4. Product-accuracy findings

Reviewed the seven primary/contextual invoice blogs identified in Phase 8A: free tool for tradespeople, free creation guide, invoice contents, small-business example, timing, F10 comparison and offer/contract/invoice workflow. Also reviewed the timesheet-to-invoice article, relevant SEO/product records, instruction guides/media manifests and the dedicated supporting pages.

Evidence includes existing authentic media, `content/instructionGuides.ts`, `content/instructionContent.ts`, product-content records, and read-only application source at `C:/Users/ddlas/Code/jobbleder_app/src/`:

- `ui/documents/CreateDocument2026.jsx:1710` onward: invoice-row validation, generation and line controls.
- `ServerRoutes/serverRoute.js:104–118`: generated PDF response opens through the browser; it is not an email-delivery operation.
- Document-preview actions and existing conversion instruction evidence support user-triggered offer/contract/timesheet-to-invoice paths. The instructions explicitly require reviewing the resulting document.
- Timesheet instructions retain four distinct categories: regular hours, extra hours, regular kilometers, extra kilometers. No payroll/overtime computation or automatic invoicing is inferred.
- Existing correction guidance links to original-invoice credit-note instructions; no finalized-invoice Edit promise was found that needed changing in the scoped articles.

Confirmed defect: F10's categorical timing language. Related timing prose warranted qualification for consistency; it was not treated as an additional P1 legal defect. The free creation guide's “download or send” wording was ambiguous rather than proof of an unsupported implementation; it now explicitly distinguishes download and manual delivery.

No new claim concerning automatic delivery, reminders, bank/payment reconciliation, EHF, accounting integration, bookkeeping, VAT reporting, guaranteed compliance or backend numbering. No new product restriction, pricing claim or Free/Premium promise. Existing verified product explanations and authentic media are preserved.

## 5. Internal-linking journey review

| Journey | Existing actual navigation / decision |
|---|---|
| A — Invoice example | `/faktura-eksempel` already links contextually to `/lage-faktura`, `/faktura-krav`, `/fakturaprogram-gratis` and creation instructions. No duplicate added. |
| B — Creation | `/lage-faktura` already offers completed invoice, requirements, company setup, all three exact conversion anchors and correction instructions. No change. |
| C — Requirements | `/faktura-krav` already offers example, creation guide, product and both correction/credit-note instruction links. No change. |
| D — Offer → invoice | `/tilbud-mal` provides creation guidance and document help; the workflow blog provides `/instruksjoner#tilbud-til-faktura`. Existing route to `/lage-faktura` also present. Supported manual conversion already explained. No change. |
| E — Contract → invoice | `/kontrakt-mal` provides document help and `/lage-faktura`; workflow blog provides `/instruksjoner#kontrakt-til-faktura`. No change to contract/legal copy. |
| F — Timesheet → invoice | Product page demonstrates four categories; `/blogg/timeliste-og-faktura` gives the exact conversion anchor and review/manual-delivery explanation. Preserved. |
| G — Invoice → credit note | Approved requirements and creation pages already link to `#rette-en-faktura`; requirements also links to `#opprett-kreditnota`. No standalone route invented. |

Five new contextual links, with purpose:

| Article | Destination / exact new label | Reader benefit |
|---|---|---|
| F10 comparison | `/faktura-krav` — “Se fakturaopplysningene og betingelsene du bør kontrollere” | Gives the short comparison a relevant path to invoice detail without turning it into a legal guide. |
| Free creation guide | `/faktura-krav` — “Se den mer detaljerte oversikten over fakturakrav og betingede opplysninger” | Makes clear where the short introductory list can be supplemented. |
| Free tool for tradespeople | `/faktura-eksempel` — “Se et utfylt fakturaeksempel og forklaringen av feltene” | Replaces a vague, unlinked reading recommendation with an authentic document destination. |
| Free tool for tradespeople | `/faktura-krav` — “Skill mellom fakturakrav, betingede opplysninger og praktiske tillegg” | Supplies the other destination promised by the removed note, accurately describing the reference page. |
| Timing article | `/faktura-krav` — “Kontroller fakturaopplysninger og betingelsene som gjelder salget” | Offers document preparation support after qualified timing guidance; not labeled as an exhaustive issuance-deadline guide. |

No matching contextual links were already present nearby. Generic related-guide cards farther down some articles already include the example; they serve discovery rather than the former note's immediate reference. These shared cards were not redesigned or stripped of useful destinations. No circular instruction sequence was added, and no link-count/keyword-density objective was used.

## 6. Exact editorial changes

In addition to the two F10 before/after passages in section 2:

### `/blogg/gratis-fakturaprogram-handverkere`

Before, an unlinked note:

> Hvis du også vil forstå hva en faktura bør inneholde, kan du lese videre om fakturaeksempler og fakturakrav på bloggen vår.

After: the two contextual text links listed in section 5. The destinations are the actual supporting pages, not unspecified blog content. Existing product link, app action, informational sections and article purpose remain.

### `/blogg/hvordan-lage-gratis-faktura`

Creation-list item, before:

> Last ned eller send fakturaen videre

After:

> Generer og last ned PDF-en. Send den selv til kunden.

Note, before:

> Jo enklere systemet er å bruke, desto større er sjansen for at du faktisk får sendt fakturaen med én gang jobben er ferdig.

After:

> Kontroller kunde, datoer, fakturalinjer, MVA og betalingsinformasjon før du genererer PDF-en. Nedlasting og sending til kunden er separate handlinger; du sender filen selv utenfor Jobbleder.

Also added the requirements link after the short field list. No other creation steps, headings or promotions rewritten.

### `/blogg/nar-sende-faktura`

Opening paragraph, before:

> Mange tenker mest på hvordan fakturaen ser ut, men tidspunktet du sender den på betyr også mye. Jo tidligere du får sendt fakturaen etter at arbeidet er gjort, desto enklere blir det å holde god flyt i oppfølging og betaling.

After:

> Mange tenker mest på hvordan fakturaen ser ut, men tidspunktet du sender den på betyr også mye. Ha en rutine for å fakturere når det er grunnlag for det etter avtalen og reglene for leveransen. Ved lengre oppdrag kan fakturering underveis være aktuelt; ikke legg til grunn at du alltid skal vente til hele jobben er ferdig, eller at forskuddsfakturering alltid er tillatt.

Routine-list item, before:

> Lag faktura så snart jobben er ferdig

After:

> Lag faktura når det er grunnlag for det, i tråd med avtalen og gjeldende regler

Added the contextual requirements link immediately after the opening. Preserved the article's practical payment-routine intent, existing creation link, date, title and remaining content. This is a qualification of routine advice, not a claim that every earlier sentence was legally false.

## 7. Exact files modified

New Phase 8D.2 work:

1. `content/blogPosts.ts` — four records; 29 added / eight removed lines in the final content diff.
2. `docs/phase-8d2-faktura-editorial-linking-report.md` — this new report.

Entry inventory hashed 340 existing tracked/untracked files. Only `content/blogPosts.ts` changed; the other 339 remain unchanged. All 59 previously inventoried media hashes are unchanged. Existing dispatcher/shared figure changes, six untracked Phase 8 page/style files, Phase 8 reports and earlier diagnostics remain intact. No staging or removal of existing local work.

All investigation scripts, snapshots, screenshots and baseline copies are outside the repository in the Codex visualizations directory.

## 8. SEO preservation

Source-level comparison of all 18 blog records confirmed every non-block field unchanged: slug, title, SEO title/description, summary, category, tags, createdAt, ID and related topic. Only the four specified records' blocks differ. No existing block-link destination was lost.

Rendered before/after comparisons at matching widths confirmed identical title, description, canonical, robots-meta state, H1, H2/H3 hierarchy and parsed JSON-LD for all seven primary tested routes. Article schema retains headline, description and original datePublished. No dateModified or duplicate schema was introduced.

Routes, metadata generators, canonical infrastructure, sitemap, robots configuration and redirects were not changed. Existing downloads/media and search intent remain. No current Google Search Console dataset was available; no ranking, traffic or SEO improvement is claimed from the link additions.

## 9. Browser verification

Executed on the local final production build using Chrome/Puppeteer. Representative mobile/desktop widths: **375 and 1440 px**. Dark OS preference and reduced-motion preference; existing blogs retain their intentional light article surface. This phase does not claim a new four-width/two-theme matrix.

- Four changed articles × two widths: **eight cases**, final HTTP 200, no horizontal overflow, runtime errors or console errors.
- axe-core WCAG 2 A/AA, 2.1 A/AA and 2.2 AA checks on those eight cases: zero confirmed violations; no incomplete results in the executed tagged scope. Not full accessibility certification or a screen-reader study.
- All five new contextual links keyboard-activated at both widths: **10 checks**, correct destinations, visible 3 px blue focus outlines.
- Five exact instruction hashes checked: offer, contract and timesheet conversion; correction; credit-note creation. Each destination disclosure opened and landed approximately 100 px below the viewport top. These IDs already existed; no new anchor implementation.
- All **16 unique internal route destinations** collected from affected articles returned HTTP 200.
- Approved example, creation and requirements pages × two widths: **six regression cases**, matching main text, metadata/schema and headings, no root overflow. Their source/style hashes also match the baseline.
- Seven desktop journey checks: offer, contract and timesheet products; document-workflow blog; timesheet/invoice blog; invoice-contents blog; small-business example blog. All returned 200 and retained baseline main text. This is selected regression coverage, not full-site testing.

Before captures included normal browser cache revalidation (304 on repeat desktop requests); rendered baseline content was available. Final run disabled cache and returned 200 for every captured route.

Representative final screenshots were visually inspected for readable passages, link wrapping and preserved article structure. No missing/duplicated content section or unexpected component/layout change was found. Text-length changes naturally move later content; no CLS or Lighthouse measurement is claimed.

Absolute evidence directory:

`C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase8d2/`

Screenshots use `before-` / `after-` prefixes and `-375.png` / `-1440.png` suffixes for each of:

- `blogg_forskjell-faktura-tilbud-timeliste`
- `blogg_hvordan-lage-gratis-faktura`
- `blogg_gratis-fakturaprogram-handverkere`
- `blogg_nar-sende-faktura`

For example: `after-blogg_forskjell-faktura-tilbud-timeliste-375.png` and `after-blogg_hvordan-lage-gratis-faktura-1440.png`. JSON evidence: `before.json`, `after.json`, `posts-before.json`, `hashes.json`, `verification.json` in the same directory.

## 10. Technical validation

| Check | Result |
|---|---|
| `npx.cmd tsc --noEmit --incremental false` | Pass, exit 0 |
| `npm.cmd run lint` — full ESLint | Pass, exit 0; no warning |
| `npm.cmd run build` | Pass, exit 0; Next.js 16.1.6, 55 generated pages |
| `git diff --check` | Pass, exit 0 |
| Existing-file/media baseline comparisons | Expected content file only; media and approved Phase 8 components unchanged |
| Source metadata / old-link comparisons | All preserved |

Existing Node 26 DEP0205 `module.register` notices appeared during the build; no new build failure. No broken import or missing asset was introduced. No new component, stylesheet, image or dependency.

## 11. Deferred recommendations

- Broad competitor assertions in the older free-tool article are generic marketing language, not newly verified comparisons. A future approved editorial review could replace them with product-specific facts; this phase did not expand into a full article rewrite or vendor comparison.
- Repeated promotional callouts/related cards remain a potential editorial simplification. Changing shared rendering or approved layouts was unnecessary for the verified defects and links.
- Backend numbering guarantees, detailed partial-credit behavior and any delivery/payment automation require independent product evidence before future claims.
- Further detailed timing/transaction guidance needs a dedicated legal review; the short comparison article should remain concise.

These are optional follow-ups or verification boundaries, not newly demonstrated release blockers.

## 12. Known limitations

No production deployment/verification, authenticated app transaction, real email delivery, bank/payment integration or backend numbering audit. Local source/media/instruction evidence supports the scoped workflow wording. Owner-confirmed plan features were preserved, not newly inferred.

Lovdata direct full-text access was blocked; current opened official guidance supports the narrowly qualified timing correction. Historical legal references were not silently presented as a complete current-law review.

Browser regression scope is explicitly listed above. No full-site cross-browser certification, new Lighthouse scores, CLS measurements, analytics success claim or current GSC analysis. Analytics calls were intercepted with synthetic responses in browser checks to avoid unnecessary tracking events; analytics implementation is unchanged.

## 13. Owner review checklist

1. Review the F10 paragraph/list correction and ensure the simple document comparison remains useful.
2. Review timing qualifications without reading them as permission for all advance invoicing.
3. Confirm the free creation guide clearly separates PDF download and manual sending.
4. Open the five contextual links and the conversion/correction instructions.
5. Confirm the four articles retain their original editorial purpose and the three approved Phase 8 supporting pages remain intact.
6. Approve this local editorial refinement before any separate release action.

Local previews:

- <http://127.0.0.1:3041/blogg/forskjell-faktura-tilbud-timeliste>
- <http://127.0.0.1:3041/blogg/hvordan-lage-gratis-faktura>
- <http://127.0.0.1:3041/blogg/gratis-fakturaprogram-handverkere>
- <http://127.0.0.1:3041/blogg/nar-sende-faktura>

**READY FOR OWNER REVIEW**
