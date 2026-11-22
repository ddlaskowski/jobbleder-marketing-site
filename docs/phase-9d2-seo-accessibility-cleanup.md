# Phase 9D.2 — SEO, accessibility and content consistency cleanup

Date: 22 November 2026 (Europe/Berlin). Local implementation and verification only.

**W02, W03, W04, W05, W09 and W10: RESOLVED in the tested local production build.** W01 remains effective. No approved page was redesigned, no original media was changed, and no commit, staging, push or deployment was performed.

## 1. Initial repository state

Authorized root: `C:/Users/ddlas/Code/jobbleder-site`. Package jobbleder-site; Next.js 16.1.6 / React 19.2.3 / TypeScript / ESLint / Tailwind. Branch `main`; HEAD `ec472f5f24ca2627c0c38a5b6e4efe5b9d378aae`.

The existing tracked and untracked Phase 9 work was preserved. A NUL-delimited Git inventory and SHA-256 baseline recorded **484 pre-existing files**, including approved W01 CSS and earlier untracked reports/components/assets. Complete initial status and hashes are in the external initial.json. No reset, clean, stash, revert, dependency installation or other-repository access occurred. Phase 9D's full audit and Phase 9D.1's remediation report were reviewed; neither historical report was rewritten.

Initial tracked modifications, all predating this phase:

```text
 M app/(seo)/[slug]/opengraph-image.tsx
 M app/(seo)/[slug]/page.tsx
 M app/blogg/[slug]/page.tsx
 M components/home/Homepage.tsx
 M components/home/home.module.css
 M components/instructions/InstructionsHub.tsx
 M components/product/contract/ContractProductPage.tsx
 M components/product/invoice/invoiceExample.module.css
 M components/product/invoice/invoiceGuide.module.css
 M components/product/invoice/invoiceRequirements.module.css
 M components/product/offer/offerExample.module.css
 M components/product/timelist/specializedTimelist.module.css
 M content/blogPosts.ts
 M content/contractProduct.ts
 M content/contractProductMedia.json
 M content/instructionGuides.ts
 M content/seoPages.ts
 M scripts/prepare-contract-media.mjs
```

All previous untracked files remain. The final source guard allows only the eleven modified source files and three new files listed in section 8. Existing homepage/product components, W01 styles, content data, media, sitemap, robots, API handlers, configuration and dependency files retain their phase-entry hashes.

## 2. W02 — Unsupported SearchAction

**RESOLVED.** Removed only WebSite.potentialAction containing SearchAction from app/layout.tsx. No search interface or new route was introduced.

All 45 rendered documents were compared against their baseline JSON-LD after removing that one expected property from the baseline. WebSite and Organization remain present, and all other schema properties/blocks match. Existing Article and FAQPage data remain unchanged. No SearchAction remains in rendered JSON-LD.

## 3. W03 — Route-specific Open Graph and Twitter

**RESOLVED.** The small server-side lib/socialMetadata.ts helper supplies the existing page title/description, its WWW URL, siteName, locale and website type. Existing canonical construction is retained separately. Static metadata exports become generateMetadata functions where parent image metadata must be retained.

Image handling is deliberate: static routes retain the resolved parent image descriptors; SEO/blog article routes leave the OG images key absent so Next's existing route image file retains priority. Existing Twitter image descriptors and summary_large_image cards are preserved. The four existing Contract-specific OG/Twitter overrides remain unchanged. Homepage social text now uses the existing homepage SEO title and description, without modifying visible homepage content or its title tag.

Final evidence on **45/45** routes:

- One expected canonical, one og:url, one og:title/description and one Twitter title/description per page.
- Social text uses the existing page metadata before the global browser-title suffix; no SEO title/description was rewritten except the authorized W09 suffix correction.
- og:url resolves to the canonical URL. Next serializes the homepage OG origin without a final slash, while its canonical includes /; URL-normalized values are identical. Existing canonical serialization was preserved.
- All existing OG/Twitter image URL, alt, type, width/height and card metadata match the baseline. All **37** distinct emitted social-image URLs returned HTTP 200 from the local build.
- All four Contract routes retain exactly their previous OG and Twitter arrays, including images. No duplicate/conflicting primary metadata tag was found.

## 4. W04 — Legacy skip links

**RESOLVED.** Added shared components/SkipLink.tsx as the first focusable element returned by legacy Navbar. It says **Hopp til innhold**, targets #legacy-innhold and is offscreen until focused. The five actual legacy route templates (blog listing/category/article, about, contact) now give their single main that ID and tabIndex=-1. The unused generic SEO fallback, also a Navbar consumer, receives the same valid target for consistency.

No header links, menu destinations, menu controls or navigation structure were replaced. The shared component uses the existing legacy Tailwind convention and adds no stylesheet import, avoiding a change in the approved CSS cascade. Modern pages retain their own existing skip links.

Every one of the 45 routes has exactly one skip link and no duplicate IDs. First Tab reaches it, Enter focuses the corresponding main, and the focused indicator fits within the viewport. Ten additional legacy mobile/theme cases confirmed that the next Tab proceeds inside main, the skip link has no axe violation when visible, and the existing hamburger opens with Enter and closes with Space without overflow. All 26 formerly missing legacy cases are covered by the route-template change and per-route keyboard check.

## 5. W05 — Contact form validation

**RESOLVED.** Existing custom validation messages, validation conditions, JSON payload, endpoint and visual classes are retained. Each field-specific error now identifies its control through aria-invalid and aria-describedby=contact-error; a single requestAnimationFrame moves focus after those attributes render. No focus effect loop was added.

Announcement channels avoid duplication:

- Field errors use focus plus the associated visible description. They do not simultaneously emit the same error as a live alert.
- Request-level errors, which have no invalid field, use the existing visible box with role=alert.
- The unchanged success message uses role=status.

The name/message/contact/acceptance messages remain exactly “Skriv inn navn.”, “Skriv inn melding.”, “Legg inn e-post eller telefonnummer.” and “Du må godta behandlingen av personopplysninger.” Missing contact marks both email and phone but focuses email first. Corrected fields lose stale invalid/described-by attributes. Clearing an invalid optional email also clears its native-email error; a valid phone can still satisfy the original alternative-contact rule.

The existing type=email browser constraint remains in force. Its localized native validationMessage is displayed in the same existing error box and associated with email, while the default tooltip is prevented to avoid a second presentation. No new email regex, required field, API rule or business restriction was added. An invalid nonempty email still blocks submission even if phone is supplied, as the original HTML constraint did.

Final tests: **4** width/theme cases (375 and 1440, light/dark), **48** validation/result states. These include empty/repeated submission, each missing field group, native invalid email, correction, optional-email clearing with phone, invalid email with phone, checkbox Space operation, phone-only success, request error, network failure and corrected-email success. Submission was activated with Enter. All **16** valid outgoing attempts were intercepted and simulated before network delivery; no real contact message was sent.

DOM assertions verify focus, exact messages, unique error association, aria-invalid cleanup, one request alert and one success status. Error-state and success-state axe checks pass. Normal contact main pixels at 375/1440 are identical to baseline. The only additional visible validation presentation is the native email message inside the already-existing error box; no form redesign occurred.

## 6. W09 — Blog title suffix

**RESOLVED.** Removed the literal suffix from the blog page metadata value, retaining the global title template. The final browser title is exactly:

> Blogg om faktura, tilbud, timelister og kontrakter | Jobbleder

Every other browser title, all descriptions/canonicals and all H1s match baseline. Social titles/descriptions use the corrected page value consistently. The global title template is unchanged.

## 7. W10 — Product references

**RESOLVED.** Minimal wording changes only:

| Location | Before | After |
| --- | --- | --- |
| About: product introduction | faktura, timeliste og tilbud | faktura, timeliste, tilbud og kontrakt |
| About: intended users | tilbud, timelister og fakturaer | tilbud, timelister, fakturaer og kontrakter |
| About: closing paragraph | Opprett faktura, timeliste og tilbud | Opprett faktura, timeliste, tilbud og kontrakt |
| Legacy footer | Faktura, timelister og tilbud. | Faktura, timelister, tilbud og kontrakt. |

All other about text, links and CTA destinations remain unchanged. Rendered main-content comparison permits exactly these about substitutions and nothing else. Footer comparison permits exactly the added document type on all 26 legacy consumers; modern SiteFooter is unchanged. No links, feature claims or promotional sections were added.

## 8. Exact files modified and created

| File | Scope |
| --- | --- |
| app/layout.tsx | W02; homepage social text aligned to its unchanged existing SEO values for W03 |
| app/(seo)/[slug]/page.tsx | W03 metadata helper for non-Contract routes; W04 fallback main target; existing Contract metadata preserved |
| app/blogg/[slug]/page.tsx | W03 article social metadata; W04 main target |
| app/blogg/kategori/[category]/page.tsx | W03 category social metadata; W04 main target |
| app/blogg/page.tsx | W03/W09 metadata; W04 main target |
| app/instruksjoner/page.tsx | W03 social metadata only |
| app/kontakt/page.tsx | W03 social metadata; W04 main target |
| app/om-oss/page.tsx | W03 social metadata; W04 main target; three W10 product-list additions |
| components/Navbar.tsx | W04 shared skip link before existing nav |
| components/Footer.tsx | W10 one product reference |
| components/ContactForm.tsx | W05 error associations, focus and announcement semantics |
| components/SkipLink.tsx (new) | W04 shared hidden/focused link, existing Tailwind conventions |
| lib/socialMetadata.ts (new) | W03 reusable metadata helper preserving images |
| docs/phase-9d2-seo-accessibility-cleanup.md (new) | This report |

No existing CSS file, content data file, image, product page component, homepage component, navigation destination, API handler, dependency or deployment configuration was edited. The briefly introduced phase-local skip-link CSS module was removed before finalization because its import changed production CSS order. That newly created file was not pre-existing work; final source contains no new CSS import and no typography workaround in approved styles.

## 9. SEO regression results

All 45 public indexable content routes were tested in a fresh local production preview. The 45-row inventory below reports successful canonical/social/schema checks, not guessed routes. All returned HTTP 200 in the local URL fetch; browser cache revalidation can also return normal 304 on repeat matrix visits.

| Route | Canonical / OG URL | Social text / images | JSON-LD / H1 |
| --- | --- | --- | --- |
| / | PASS | PASS | PASS |
| /instruksjoner | PASS | PASS | PASS |
| /blogg | PASS | PASS | PASS |
| /om-oss | PASS | PASS | PASS |
| /kontakt | PASS | PASS | PASS |
| /timeliste-mal | PASS | PASS | PASS |
| /timeliste-mal-pdf | PASS | PASS | PASS |
| /timeliste-uke | PASS | PASS | PASS |
| /timeliste-ansatt | PASS | PASS | PASS |
| /timeliste-prosjekt | PASS | PASS | PASS |
| /tilbud-mal | PASS | PASS | PASS |
| /lage-tilbud | PASS | PASS | PASS |
| /tilbud-eksempel | PASS | PASS | PASS |
| /fakturaprogram-gratis | PASS | PASS | PASS |
| /hvordan-folge-opp-tilbud | PASS | PASS | PASS |
| /lage-faktura | PASS | PASS | PASS |
| /faktura-eksempel | PASS | PASS | PASS |
| /faktura-krav | PASS | PASS | PASS |
| /kontrakt-mal | PASS | PASS | PASS |
| /kontrakt-handverker | PASS | PASS | PASS |
| /kontrakt-eksempel | PASS | PASS | PASS |
| /hva-skal-en-kontrakt-inneholde | PASS | PASS | PASS |
| /blogg/kategori/timeliste | PASS | PASS | PASS |
| /blogg/kategori/faktura | PASS | PASS | PASS |
| /blogg/kategori/tilbud | PASS | PASS | PASS |
| /blogg/kategori/kontrakt | PASS | PASS | PASS |
| /blogg/kategori/oversikt | PASS | PASS | PASS |
| /blogg/gratis-timeliste-mal | PASS | PASS | PASS |
| /blogg/gratis-fakturaprogram-handverkere | PASS | PASS | PASS |
| /blogg/lage-tilbud-byggebransjen | PASS | PASS | PASS |
| /blogg/innhold-i-faktura | PASS | PASS | PASS |
| /blogg/feil-med-tilbud | PASS | PASS | PASS |
| /blogg/effektiv-timeliste | PASS | PASS | PASS |
| /blogg/hvordan-lage-gratis-faktura | PASS | PASS | PASS |
| /blogg/lage-tilbudsdokument | PASS | PASS | PASS |
| /blogg/forskjell-faktura-tilbud-timeliste | PASS | PASS | PASS |
| /blogg/folle-opp-tilbud | PASS | PASS | PASS |
| /blogg/timeliste-for-handverkere | PASS | PASS | PASS |
| /blogg/timeliste-og-faktura | PASS | PASS | PASS |
| /blogg/faktura-eksempel-sma-bedrifter | PASS | PASS | PASS |
| /blogg/nar-sende-faktura | PASS | PASS | PASS |
| /blogg/tilbud-eller-pristilbud | PASS | PASS | PASS |
| /blogg/tilbud-vs-kontrakt | PASS | PASS | PASS |
| /blogg/nar-trenger-du-kontrakt | PASS | PASS | PASS |
| /blogg/fra-tilbud-til-kontrakt-og-faktura | PASS | PASS | PASS |

45 unique titles, 45 unique canonicals, valid unchanged descriptions, exactly one unchanged H1 each. The only browser-title difference is W09. Root Organization/WebSite remain valid JSON-LD; all other structured data matches after the single SearchAction removal. No missing/extra sitemap route: 45 expected WWW entries. Robots content/configuration remains unchanged, with no accidental noindex meta or X-Robots-Tag on fetched pages and no unexpected content redirect.

All **101** local link destinations returned 200. All **188** source/fragment references resolve to actual IDs, including new skip targets and existing instruction/homepage anchors. Original links are preserved; only the authorized skip link was added on legacy pages. The existing downloadable local PDF remains among the working local URLs. The external weekly-PDF endpoint was not re-requested in this phase because its URL/functionality was unchanged and it had already been verified in Phase 9D.

## 10. Accessibility regression results

**207 final axe-core runs**, WCAG 2 A/AA and 2.1 A/AA tags, **zero reported violations**:

- 45 complete-route checks in light preference, including expanded main disclosures.
- 110 representative width/theme checks, again with expanded FAQ/resources/instruction examples and visible images loaded.
- 10 additional dark-mobile checks covering all ten W01 guides; expected light ink/body tokens and zero violations confirmed.
- 28 field-error and 4 success-state contact checks, with simulated network delivery.
- 10 focused legacy skip-link/mobile keyboard interaction checks in both preferences.

All 45 first-Tab/Enter checks pass; modern skip links are not duplicated. Focused indicators fit at every tested width. Legacy mobile menus remain keyboard-operable. Native disclosures retain their existing semantics. Invalid-control and alert/status semantics were checked directly, not inferred from a zero axe score.

Axe incomplete contrast items for decorative aria-hidden chevrons are not confirmed failures. Raster screenshot text, actual screen-reader speech and every assistive-technology combination are not fully covered. No WCAG certification is claimed. W01 CSS files are byte-unchanged from phase entry, and their dark/light regression samples remain effective.

## 11. Responsive verification

| Representative route | 375 | 390 | 768 | 1024 | 1440 |
| --- | --- | --- | --- | --- | --- |
| / | L/D PASS | L/D PASS | L/D PASS | L/D PASS | L/D PASS |
| /kontrakt-mal | L/D PASS | L/D PASS | L/D PASS | L/D PASS | L/D PASS |
| /kontrakt-eksempel | L/D PASS | L/D PASS | L/D PASS | L/D PASS | L/D PASS |
| /lage-faktura | L/D PASS | L/D PASS | L/D PASS | L/D PASS | L/D PASS |
| /tilbud-eksempel | L/D PASS | L/D PASS | L/D PASS | L/D PASS | L/D PASS |
| /timeliste-mal-pdf | L/D PASS | L/D PASS | L/D PASS | L/D PASS | L/D PASS |
| /blogg | L/D PASS | L/D PASS | L/D PASS | L/D PASS | L/D PASS |
| /blogg/kategori/faktura | L/D PASS | L/D PASS | L/D PASS | L/D PASS | L/D PASS |
| /blogg/gratis-timeliste-mal | L/D PASS | L/D PASS | L/D PASS | L/D PASS | L/D PASS |
| /om-oss | L/D PASS | L/D PASS | L/D PASS | L/D PASS | L/D PASS |
| /kontakt | L/D PASS | L/D PASS | L/D PASS | L/D PASS | L/D PASS |

**110/110** route/width/theme combinations pass: no horizontal overflow, no unfocused visible skip link, no clipped focused skip outline, no broken image, no hidden main-content regression and no unexpected geometry change. Reduced motion remains scroll-behavior:auto with no running animation in tested states.

Contact error/result interaction testing additionally covers mobile/desktop and both preferences. Geometry changes on /om-oss at 768/1024/1440 are the expected **32px** extra text line from adding the authorized product reference, under both preferences. No CSS spacing/layout rule changed. Other measured page geometry is unchanged.

## 12. TypeScript, lint, build and existing checks

| Command / check | Final result |
| --- | --- |
| npx.cmd tsc --noEmit --incremental false | PASS, exit 0 |
| npm.cmd run lint | PASS, full ESLint, exit 0; no lint warnings/errors |
| npm.cmd run build | PASS, exit 0; 55 generated entries |
| npm.cmd run start -- --port 3105 | Final local production preview ready |
| node scripts/verify-contract-visuals.mjs | PASS: 13 lossless derivatives / 93 original source files unchanged; external CONTRACT_REVIEW_DIRECTORY |
| node <external>/browser.cjs | PASS: 45-route crawl +110 matrix cases, keyboard and axe |
| node <external>/contact.cjs | PASS: 48 states /16 intercepted mock requests; no real delivery |
| node <external>/contrast.cjs | PASS: all ten W01 dark-mobile cases |
| node <external>/interactions.cjs | PASS: focused skip, next-Tab-in-main and hamburger keyboard checks |
| node <external>/check.cjs | PASS: SEO, schemas, images, links, anchors, redirects and pixel comparisons |
| git diff --check | PASS; existing LF/CRLF conversion notices are not whitespace failures |

<external> is `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d2`. Existing cached puppeteer-core/axe and installed Chrome were reused. No dependencies were introduced. Build retains existing Node DEP0205 module.register() notices. The final ordinary-page browser checks recorded no runtime/hydration/console exception or unexpected resource failure. Deliberate mocked HTTP 500/network failures in contact tests are synthetic test states, not observed service failures.

All browser QA/measurements used local production builds, with final evidence from port 3105. Analytics requests were intercepted to avoid repetitive events; no analytics implementation or production behavior is claimed fixed. No new Lighthouse score is claimed for this phase.

## 13. Visual regression findings and evidence

- Homepage and approved Contract guide: full-page before/after images are **pixel-identical at 375 and 1440px** (four comparisons).
- Contact normal main: before/after raster crops are **pixel-identical at 375 and 1440px** (two comparisons), excluding the independently authorized footer wording change.
- No measured geometry change outside the authorized about-text wrapping. No approved font, palette, screenshot crop, product layout or spacing source was modified.
- The first skip-link implementation's extra CSS import changed guide line-height through stylesheet order. The final Tailwind-only component removed that import; complete final pixel/geometry tests confirmed preservation, rather than accepting the interim change.
- Focused skip-link and error-state captures were visually inspected. The skip link is visible only with focus. The form retains its original error-box appearance, with clear field focus and the original Norwegian message.

Evidence directory: `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d2`.

Raw evidence: initial.json; before.json; after.json; verification.json; contact.json; contrast.json; interactions.json; preservation.json; contract-check/verification.json. Pre-final/initial files are investigation snapshots, not final passing evidence. Diagnostic scripts and copied baseline source stay outside the repository.

Screenshots use before-/after- prefixes and these exact filename suffixes: home-375.png, home-1440.png, kontrakt-eksempel-375.png, kontrakt-eksempel-1440.png, blogg-gratis-timeliste-mal-375.png, blogg-gratis-timeliste-mal-1440.png, kontakt-375.png, kontakt-1440.png, om-oss-375.png and om-oss-1440.png. All those before/after captures use dark preference; both preferences were tested in the matrix.

Additional review images:

- [Focused skip link](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d2/focused-skip-blogg-375-dark.png)
- [Contact name error](C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase9d2/contact-error-name-375-dark.png)

Local review URLs: [Blog](http://127.0.0.1:3105/blogg), [Contact](http://127.0.0.1:3105/kontakt), [About](http://127.0.0.1:3105/om-oss), [Contract guide](http://127.0.0.1:3105/kontrakt-eksempel). No production preview result is substituted for a deployment verification.

## 14. Known limitations

- Verification is local Chrome/production-build QA, not a deployed-production, rich-results-service or screen-reader session. DOM error announcements are designed to use one channel per message; exact speech depends on browser/assistive technology.
- Native email error text remains localized by the browser, as before; existing custom Norwegian messages are unchanged. No real contact delivery was attempted.
- No numerical CLS/INP or new Lighthouse measurement was made. Paired geometry/pixel tests support the visual-preservation findings, with the documented authorized about-text wrap.
- W06, W07, W08, W11 and W12 were not implemented. Analytics ingestion, security hardening, performance work and original image-resolution limitations remain outside scope.
- Production edge redirects/caching/analytics and application document calculations are not validated by this website-only phase.

## 15. Remaining release requirements

All six authorized issues are **RESOLVED** in the tested local build. This is readiness for owner review, not deployment authorization.

- **F01 — APPLICATION FINANCIAL VERIFICATION: PENDING.** Relevant application conversion/calculation corrections and regression acceptance remain mandatory before publication of dependent claims. No application repository was accessed or financial logic changed.
- Withheld B2C/B2B Contract PDFs remain unpublished until required independent legal review and explicit approval. No public asset was added or changed.
- Premium prices/MVA treatment were not changed or published; owner confirmation remains required before any pricing publication.
- Prior approved work is preserved; no staging, commit, push, deploy or automatic next phase. Await owner approval.

**PHASE 9D.2 COMPLETE — READY FOR OWNER REVIEW**
