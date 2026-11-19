# Phase 5.3B.1 — Timeliste product accuracy & accessibility

19 November 2026, Europe/Berlin. **READY FOR OWNER REVIEW.** Implemented and tested locally. No commit, push, deployment or Phase 5.3B.2 work.

## 1. Scope and outcome

Read the Phase 5.3A findings, accuracy evidence, accessibility results, implementation references and safeguards. Inspected the current renderer, shared components and content before editing; saved rendered baselines for all 45 HTML routes and copies of both content data files.

The corrective changes remove the PDF blog's autosave promise, explain worker-name attribution on `/timeliste-ansatt`, repair legacy theme contrast and add the missing navigation/FAQ semantics. Existing routes, page layouts, heading text, metadata, download destinations and link arrays are preserved. No new marketing sections, product features, images, dependencies or redirects.

The final production-build browser run completed **156 cases across 45 routes**, with **zero detected axe violations**, no horizontal overflow and no page exceptions. The four primary routes each passed all four requested widths in light/dark preferences. Shared fixes were tested beyond those routes because the same components also serve other legacy SEO pages, blogs and the Faktura footer.

## 2. Root causes and corrections

| Root cause | Correction | Scope / safeguard |
|---|---|---|
| Generic SEO H1/H2 used `text-white` and paragraphs `text-gray-300` on a body that is white in light preference | Headings now use the existing `text-foreground` theme token; paragraphs use gray-600 in light and retain gray-300 in dark | Applies only to the generic renderer's 13 legacy SEO routes. The four dedicated product branches return before this markup and are unchanged. No font-size, spacing or section-order change. |
| Breadcrumb text/current page inherited the same inappropriate light palette | Theme-aware text, named Brødsmuler navigation, current-page semantics | Same structure, labels and hrefs; no new breadcrumb destination. |
| Cluster card's 60% dark background became too light over white for its light link text | Increase the existing background opacity to 80% | Same card, pills, layout and links. Fixes the measured 3.77:1 inactive-link contrast without a redesign. |
| Legacy footer gray-500 was insufficient on the dark body | Add root muted-foreground tokens and let the footer prefer an existing surface-specific `--site-muted`, falling back to the root token | Correctly supports both legacy dark bodies and Faktura's always-light wrapper. No product-page source modification. |
| FAQ exposed visible plus/minus but no expanded state or controlled answer relationship | Stable React useId panel IDs, aria-expanded, aria-controls, hidden panels and a decorative aria-hidden glyph; explicit keyboard focus outline | Retains the original button interaction and one-open-at-a-time behavior. Each button controls an existing panel, including while collapsed. No extra ARIA region or new accordion dependency. |
| Legacy main navigation and breadcrumbs were unnamed | Hovedmeny label on shared Navbar; Brødsmuler labels on shared SEO breadcrumbs and blog breadcrumb renderer | Resolves duplicate/unnamed landmarks with semantic labels. Unrelated blog text is unchanged. |
| Legacy menu transforms and global smooth scroll ignored reduced-motion preference | Disable menu-icon transitions under reduced motion; global HTML scroll becomes auto for that preference | Normal smooth scrolling/menu behavior remains. Modern surfaces already used auto under reduced motion, so their behavior is retained. |

### Footer regression caught and resolved

The first OS-dark footer color assumption failed on Faktura, whose wrapper remains white even under dark OS preference. The final shared footer uses `var(--site-muted,var(--muted-foreground))`: Faktura supplies its existing surface token; legacy pages use the root light/dark fallback. This avoids a product-page override or a change to the successful Timeliste page. The complete browser matrix was restarted after this implementation correction; final results below do not reuse the failed footer attempt.

## 3. Exact product wording changes

Only one phrase changes in the owner-designated PDF article. On the employee page, only the intro, first FAQ answer and first explanatory paragraph change. Original titles, descriptions, H1, FAQ questions, publication date, summaries, downloads, links and content hierarchy remain.

| Location | Before | After |
|---|---|---|
| `/blogg/gratis-timeliste-mal`, PDF-or-digital paragraph | En PDF-mal er nyttig når du vil skrive ut eller fylle ut manuelt. Men hvis du fører timer ofte, er en digital timeliste vanligvis mer praktisk. Da kan du oppdatere fortløpende, lagre alt automatisk og laste ned PDF når du trenger det. | En PDF-mal er nyttig når du vil skrive ut eller fylle ut manuelt. Men hvis du fører timer ofte, er en digital timeliste vanligvis mer praktisk. Da kan du oppdatere fortløpende, lagre timelisten og laste ned PDF når du trenger det. |
| `/timeliste-ansatt`, intro | Trenger du en enkel løsning for å føre timeliste for ansatte? Jobbleder gjør det lett å registrere arbeidstid og holde oversikt. | Trenger du en enkel løsning for å føre timeliste for ansatte? I Jobbleder skriver du inn arbeiderens navn i timelisten og fører timene på dette navnet. |
| First FAQ answer, unchanged question “Kan jeg bruke Jobbleder for ansatte?” | Ja, Jobbleder passer godt for små bedrifter som vil føre timer for ansatte. | Ja. Du skriver inn arbeiderens navn når du oppretter timelisten og fører timene på dette navnet. Dette er navngivning i dokumentet, ikke oppretting av ansattkontoer eller tilgangsstyring. |
| First paragraph under unchanged “Hvorfor føre timeliste for ansatte?” | Når ansatte registrerer arbeidstid systematisk blir det enklere å holde oversikt over timer, oppdrag og ressursbruk. | Når du oppretter en timeliste, skriver du inn navnet på arbeideren som timene gjelder. Navnet knytter timene til personen i dokumentet; det oppretter ikke en egen ansattkonto. |

The documented feature is name attribution in the document. No employee-login, permission, self-service, payroll or HR-management capability is introduced or implied by the replacement text. The blog no longer promises autosave, background sync or offline persistence. No dates were bumped to simulate freshness.

### Other claims reviewed, not silently rewritten

The PDF page's “digital og automatisert løsning”, the shared download module's “lage timelister automatisk”, “Last ned som PDF på sekunder” and weekly “full oversikt uke for uke” are broad/uncertain descriptions, not evidence of specific autosave, scheduled reports or offline behavior. No further confirmed feature inaccuracy was established from those phrases. They remain recorded for clarification rather than being replaced with invented functionality. Project/weekly generic benefit wording and the main product page's legacy help-link wording are unchanged; no editorial expansion or Phase 5.3B.2 work was started.

## 4. Measured contrast and semantic accessibility

Representative measurements at 375px, with actual computed foreground/background colors and alpha-composited backgrounds:

| Element | Before | Final light preference | Final dark preference |
|---|---:|---:|---:|
| Legacy H1 | 1:1 on white | **17.93:1** | **16.91:1** |
| Intro / explanatory body text | 1.47:1 on white | **7.56:1** | **13.45:1** |
| Breadcrumb navigation text | Home 2.60:1; topic 1.47:1 on white | **7.56:1** | **13.45:1** |
| Inactive cluster links | 3.77:1 on the light-composited card | **7.64:1** | **14.74:1** |
| Legacy footer small text | 4.09:1 on the dark body | **7.56:1** | **7.61:1** |
| Faktura footer on its fixed light surface | Existing gray text; final OS-only approach was rejected | **7.58:1** | **7.58:1**, still a light surface |

All sampled visible primary-page heading, paragraph, cluster-link, breadcrumb and footer text exceeded 4.5:1 in all 32 primary cases. The smallest paragraph value was **4.84:1** for an unchanged small download-module paragraph on its white card. FAQ answer/question colors retain their existing accessible white-card presentation. Focus is an explicit 2px blue outline on FAQ buttons; other native focus behavior is preserved and menu-link focus was checked.

The five visible “incomplete” contrast nodes in each narrow primary case are four checkmarks and the decorative FAQ minus. Manual follow-up verified unobscured glyphs and contrast of 16.91–17.93:1 for the checkmarks and 4.84:1 for the minus. The minus is hidden from assistive naming; questions retain their exact text names.

axe also requested manual `link-in-text-block` review of breadcrumb links. These belong to named breadcrumb navigation, separated by slash/current-page context, rather than an inline paragraph whose link is conveyed only through color. Manual review found unobscured links and text contrast 7.56/13.45:1 on the primary pages; the blog breadcrumb links measured 4.63:1 in both preferences. No new body-text link styling was introduced. These incomplete entries are distinguished from automated violations, not silently called automated passes.

## 5. Final responsive, keyboard and automated test results

Local production build: `http://127.0.0.1:3030`. Headless Chrome with OS color/motion preference emulation; no authenticated application operation or external CTA account submission.

| Primary route | 375 light/dark | 768 light/dark | 1280 light/dark | 1440 light/dark |
|---|---|---|---|---|
| `/timeliste-mal-pdf` | PASS / PASS | PASS / PASS | PASS / PASS | PASS / PASS |
| `/timeliste-uke` | PASS / PASS | PASS / PASS | PASS / PASS | PASS / PASS |
| `/timeliste-ansatt` | PASS / PASS | PASS / PASS | PASS / PASS | PASS / PASS |
| `/timeliste-prosjekt` | PASS / PASS | PASS / PASS | PASS / PASS | PASS / PASS |

In every primary case:

- No horizontal overflow, detected accessibility violation, page exception or unexpected failing browser response.
- H1/heading order/text, links, title, description and WWW canonical match the pre-change baseline.
- All three FAQ buttons open with Enter, close with Space and expose correct DOM expanded/hidden state and controlled panel IDs. Opening a second question closes the first.
- Answers match the source data. Chrome's accessibility tree contains the exact question names, excludes the decorative glyph and exposes expanded-state properties.
- Keyboard focus remains visible. At 375px, the legacy mobile menu opens/closes with Enter/Space and permits Tab to its links. Desktop navigation remains at the existing breakpoint.
- Reduced motion uses auto scrolling and no menu-icon transition properties; normal preference retains smooth scrolling. A declared 300ms duration has no animation when transition-property is none; the final test checks actual applicability, not duration alone.

### Wider shared-component verification

The final matrix has **156 cases across 45 routes**, including all 13 generic SEO routes, all 18 articles, five categories and static pages. Primary routes, the target blog and six protected surfaces received all four widths and both preferences; other shared callers were checked at 375/light and 1440/dark. **All 156 axe runs detected zero violations** under WCAG A/AA, 2.1/2.2 AA and best-practice tags.

There are **148 individual FAQ question checks** across the tested legacy pages, including all 96 primary-page question cases. This is rule/interaction coverage, not a blanket WCAG certification or a new screen-reader session.

Manual follow-up covered the primary incomplete-node pattern in light/dark and the target blog's 768px breadcrumb cases. Existing glyph/image contrast incomplete entries on unchanged modern product/instruction surfaces remain distinguished from violations; their prior visual/contrast evidence is not claimed newly rerun in full.

Captured full-page primary screenshots at 375/1440 in both preferences, plus eight footer-context viewport captures. Visually reviewed representative light/dark PDF and employee headers and the fixed-light Faktura footer: headings/body copy are visible, the layout remains the legacy layout, and no obvious overlap or clipping was found. Screenshots may show a keyboard focus ring or expanded FAQ intentionally.

## 6. Technical validation

| Final check | Result |
|---|---|
| `npx.cmd tsc --noEmit` | PASS, exit 0 |
| Full `npm.cmd run lint` | PASS, exit 0; no ESLint warnings/errors |
| `npm.cmd run build` | PASS, exit 0; all 55 static pages generated |
| `git diff --check` | PASS; only the existing Windows LF→CRLF notice for globals.css |
| Browser page exceptions | None in the final 156 cases |
| Automated accessibility | Zero detected violations in all final cases |
| Internal/asset href probe | 103 destinations checked: 102 returned 200; one pre-existing unrelated 404 noted below |
| Blank template | HTTP 200, application/pdf, valid PDF signature; bytes match unchanged local file |
| Last-seven-days template | HTTP 200, application/pdf, valid PDF signature |

Build retains environment/tooling Node **DEP0205** warnings about module.register(). No dependency/tooling change was made to suppress them. No Lighthouse or search-performance score was requested/measured for this corrective phase.

Initial test helpers were corrected for cached HTTP 304 and reduced-motion transition-property semantics. A product-footer expectation was narrowed to allow only the approved color-class change. The actual fixed-light footer regression was then corrected in implementation, rebuilt and followed by the fresh complete final run. Earlier interrupted/failed attempts are not included as passing final cases; their evidence is retained separately.

## 7. SEO and functionality regression results

### Preserved SEO inputs

All **45 rendered routes** retain their exact title, description, canonical, robots meta state, heading text/hierarchy and complete link destination/text arrays relative to the saved baseline. Metadata helpers, redirects/configuration, sitemap/robots and the WWW origin are unchanged. No route merge, noindex or new redirect.

All JSON-LD blocks match the baseline except the **intended first FAQ answer on the employee page**. That answer is corrected in the same source array used by the visible FAQ and its schema; FAQPage type, three questions, question text and structured-data intent remain. No other schema, article publication data or summary changes.

Parsed source-data comparison confirms:

- Sixteen of seventeen SEO records are identical. In the employee record only the three documented text fields differ; its title, description, H1, bullets, CTA and other content are identical.
- Seventeen of eighteen blog records are identical. The target article differs only by replacing “lagre alt automatisk” with “lagre timelisten” in one paragraph; title/H1, metadata, date, purpose, links, downloads and all other blocks remain.

These are technical/content-preservation checks, not a measurement or guarantee of rankings, traffic, CTR or SEO performance. No GSC data was provided or invented.

### Requested page regressions

| Route | Result |
|---|---|
| `/timeliste-mal` | Main, header and footer DOM exactly match baseline at all four widths/both preferences; page source untouched. |
| `/blogg/gratis-timeliste-mal` | All eight width/theme cases pass; main DOM differs only by the approved phrase and breadcrumb aria-label. Shared header/footer semantics/colors are the documented accessibility corrections. |
| `/instruksjoner` | Main/header/footer DOM identical in all eight cases; no instruction/image/anchor changes. This is a hub regression, not a repeated expanded instruction-release audit. |
| `/fakturaprogram-gratis` | Main/header DOM identical in all eight cases; footer differs only by the approved shared text-color class. Fixed-light surface passes in both OS preferences. No product source or SEO content change. |
| `/tilbud-mal` | Main/header/footer DOM identical in all eight cases. |
| `/kontrakt-mal` | Main/header/footer DOM identical in all eight cases. |
| Homepage (additional safeguard) | Main/header/footer DOM identical in all eight cases. |

The six protected modern surfaces above excluding the separately handled blog produce **48 exact main/header comparisons**; 40 footer comparisons are byte-identical and eight Faktura cases differ only by the reviewed shared color class. Existing CTA destinations and internal link arrays remain unchanged across all 45 routes. No login, sending, payment or PDF-generation backend operation was initiated.

Both primary template destinations are unchanged and returned HTTP 200 during the supplement:

- `/downloads/timeliste-mal-jobbleder.pdf`: **339,211 bytes**, application/pdf, valid signature, SHA-256 equal to the unchanged local asset.
- `https://laskowskicreative.no/api/jobbleder/user/documents/oneweek-timelist`: **334,286 bytes**, application/pdf, valid signature. This is a public template retrieval, not an application document operation.

## 8. Exact files changed

| File | Change |
|---|---|
| `app/(seo)/[slug]/page.tsx` | Theme-aware generic headings and body text; dedicated product branches unchanged. |
| `app/blogg/[slug]/page.tsx` | Accessible breadcrumb navigation name only; shared renderer, not unrelated article rewrites. |
| `app/globals.css` | Muted foreground fallback tokens and reduced-motion scroll rule. |
| `components/Breadcrumbs.tsx` | Theme-aware colors, nav label and current-page semantics. |
| `components/ClusterNavigation.tsx` | Existing dark card opacity 60% → 80% for link contrast. |
| `components/FAQAccordion.tsx` | Expanded/control state, stable IDs/hidden panels, decorative glyph and visible focus. |
| `components/Footer.tsx` | Context-aware muted text color, honoring actual product-surface token. |
| `components/Navbar.tsx` | Main navigation label and reduced-motion icon transitions. |
| `content/blogPosts.ts` | Single autosave phrase replacement in the specified article. |
| `content/seoPages.ts` | Three worker-name clarification fields in the specified employee record. |
| `docs/phase-5.3b.1-accuracy-accessibility-report.md` | This new report. |

No image, download, product component/data, instruction component/data, authentication/backend, dependency, canonical or deployment-setting file is changed. Existing untracked Phase 5.3A report is preserved. Of **286 pre-existing tracked/untracked nonignored files**, SHA-256 comparison found exactly the ten scoped source files above changed and the other **276 byte-identical**. This report is the only new repository file. HEAD and staging-difference state remain unchanged; no Git write operation was performed. Ignored build caches are normal validation output, not release files.

## 9. Remaining risks and observations

- **No known new P0/P1 issue remains in the executed checks.** Owner visual review is still required; this phase is not a production release.
- Broad automation/week/speed wording listed in §3 remains uncertain and is explicitly not certified as specific functionality. No additional marketing rewrite was made.
- Known local `/api/handshake` HTTP 400/resource console errors persist in the matrix. The test permits only that known failing response; there are no page exceptions or other failing browser responses. Analytics implementation is unchanged, and no new production analytics check or production deployment is claimed.
- The 103-destination probe found the already-documented `/folle-opp-tilbud` 404 from the unrelated `/blogg/feil-med-tilbud` article. That article/link is source-identical to the baseline and outside this corrective scope; it was not silently fixed. No new broken href was introduced.
- Broader GSC-dependent intent/consolidation decisions, global SearchAction mismatch, blog-title duplication, media additions and editorial expansion stay in the audit backlog. No Phase 5.3B.2 work was started.
- Browser checks are local production-build emulation, not physical-device or assistive-technology certification. PDF checks verify transport/signature/file preservation, not PDF tagging or form-field accessibility.

## 10. Preview and evidence

- [PDF page](http://127.0.0.1:3030/timeliste-mal-pdf)
- [Weekly page](http://127.0.0.1:3030/timeliste-uke)
- [Employee-name clarification](http://127.0.0.1:3030/timeliste-ansatt)
- [Project page](http://127.0.0.1:3030/timeliste-prosjekt)
- [Corrected PDF article](http://127.0.0.1:3030/blogg/gratis-timeliste-mal)

QA artifacts are outside the application repository under `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase53b1/`: `before.json`, before-source copies, `wording-changes.json`, final `browser.json`, `supplement.json`, `manual.json`, primary/full-page screenshots and footer viewport captures. `before-footer-token-fix.json` retains the rejected intermediate attempt; it is not the final result.

**READY FOR OWNER REVIEW**
