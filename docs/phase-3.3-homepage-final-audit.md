# Phase 3.3 — Jobbleder homepage final audit

Date: 18 November 2026, Europe/Berlin. Scope: approved Phase 3.1/3.2B/3.2C homepage, local production build, dedicated invoice landing page relationship, and the live login/registration entry point.

**READ-ONLY AUDIT. The report is the only new project file. No application code, CSS, images, metadata or configuration was changed. No commit, push or deployment was performed.**

## A. Executive summary

**Deployment recommendation: READY AFTER MINOR FIXES.**

The homepage successfully introduces a coherent document tool for Norwegian tradespeople and small businesses. It names all four main document types, shows authentic output, explains reuse between documents and has a prominent first-screen free CTA. It preserves the dedicated invoice page's search intent rather than competing with it through repetitive “gratis fakturaprogram” copy.

There are no identified P0 deployment blockers. One P1 accessibility issue should be corrected before publishing: all six full-image links have accessible names that do not contain their complete visible label. This is a small shared-component correction, not a redesign.

Other findings are improvements: English authentication adds a step to the Norwegian free-start journey; the large infographic is costly after scrolling; fine print is small on phones; the advertised structured-data search is not implemented; and analytics currently cannot establish CTA-to-registration conversion. The local handshake failure has an evidenced TLS cause, while the existing production handshake returned 200 during this audit.

| First-time visitor question | Assessment | Evidence and qualification |
|---|---|---|
| What is Jobbleder? | Answered | The hero identifies a browser-based tool that gathers document work for tradespeople and small businesses. The brand-led H1 is supported immediately by concrete explanatory copy. |
| What can I do with it? | Answered well | Faktura, Timeliste, Tilbud and Kontrakt have individual introductions, examples and onward links. Supported document flows are shown and available as HTML text. |
| Why should I use it? | Answered, but late | Reusing existing information and keeping related documents together is a credible reason. The clearest reuse explanation is well below the first mobile screen. |
| How can I start for free? | Answered, with friction | “Start gratis” is visible in the first screen. The helper text accurately explains the login page's English “Create account” button, but users must still take that extra step. |

### Product accuracy

No unsupported conversion, electronic signature or built-in invoice-delivery claim was found in homepage HTML. The contract section explicitly says to download/print and sign manually. Invoice copy says to download a PDF. Premium examples are clearly labelled and branding benefits are distinguished from the free workflows.

The infographic and optional text list contain exactly these four paths:

1. Registreringer → Timeliste → Faktura.
2. Timeliste → Faktura.
3. Tilbud → Kontrakt → Faktura.
4. Tilbud → Faktura.

The infographic's “per ansatt” wording can accurately describe grouping by names in one account; it does not explicitly promise separate employee accounts. The HTML says to enter a name. Avoid expanding that wording into employee logins, payroll or team access. “Med ett klikk” describes conversion rather than sending; the page does not promise automatic customer delivery. Kreditnota is supported but not introduced on the homepage; that is an omission, not a false claim.

## B. Findings

Severity definitions: **P0** deployment blocker; **P1** important issue; **P2** improvement; **P3** optional enhancement. There are no P0 findings. The recommendation treats F1 as the required minor correction; the remaining items do not establish a broken marketing page or broken account-creation flow.

### F1 — P1: Six image links have a visible-label/accessibility-name mismatch

- **Description:** Every media link visibly says “Åpne hele bildet”, while its `aria-label` starts “Åpne hele originalbildet”. The word “bildet” in the visible label is replaced by “originalbildet”, so the complete visible phrase is absent from the accessible name.
- **Evidence:** Lighthouse 13.6.0's `label-content-name-mismatch` audit identified six affected links: hero, invoice, timesheet, offer, contract and workflow. Source inspection confirms the common cause at `components/site/Primitives.tsx:40`. The aggregate accessibility score was 100, despite this separately reported failing diagnostic; the score must not be treated as a conformance statement.
- **Affected file/route:** `components/site/Primitives.tsx:40`; `/`.
- **User/business impact:** People using speech activation may speak the visible label and fail to target the control reliably. This affects the very enlargement links intended to help read small images.
- **Recommended action:** Keep the exact visible phrase at the start of the accessible name, for example `Åpne hele bildet: …`, followed by the distinguishing image description. Alternatively align both visible and accessible wording. Recheck all six links. No image or layout change is necessary.

This matches the principle in [W3C's explanation of WCAG 2.5.3, Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html): accessible names should contain the visible label, supporting speech-based activation.

### F2 — P2: Norwegian free-start messaging opens an English login before registration

- **Description:** The free CTA is accurate but does not enter registration directly. It opens “Sign in to continue”; a new visitor must find “Create account” to reach “Create your account”.
- **Evidence:** The actual homepage “Start gratis” link was clicked. Its destination and the final visible URL were `https://app.jobbleder.no/`. The initial screen had Email, Password, Keep logged in, Forgot password?, Log in and Create account. Clicking Create account changed the form on the same URL, adding Repeat password and the user-agreement checkbox/link. The form remained English. The marketing helper text accurately anticipates this.
- **Affected file/route:** `components/site/Primitives.tsx:6–14`, `REGISTRATION_GUIDANCE`; live `https://app.jobbleder.no/` authentication UI, outside this repository's homepage implementation.
- **User/business impact:** An unfamiliar login screen and a language switch can make a first-time Norwegian visitor question whether they reached the promised free signup. The helper text mitigates the problem but does not remove the step.
- **Recommended action:** Prefer consistent Norwegian authentication copy and a prominent new-account entry. If the app later supports a real registration deep link, use it for new-user CTAs while retaining a separate login link. Do not invent a registration URL or change authentication during this audit.

### F3 — P2: Phone screenshots communicate structure better than readable detail

- **Description:** The mobile workflow retains all four paths and the contract retains the whole page, but descriptive text and contract clauses become very small when scaled down.
- **Evidence:** At 375 px, the browser's scrollbar leaves an approximately 310 px image area in the inspected environment. The 1000 px workflow derivative renders at roughly 31% scale, and the 508 px contract at roughly 61%. All paths and signature lines remain present, with no overlapping icons or clipped conversions. Original-image links work, and the native workflow-text disclosure gives all four paths in readable HTML.
- **Affected file/route:** `components/home/Homepage.tsx`, `components/home/home.module.css`, `content/homeProductMedia.json`; contract/workflow sections on `/`.
- **User/business impact:** A phone visitor cannot comfortably read all fine print in place. The artwork should support comprehension, not become the only explanation of a feature.
- **Recommended action:** Retain the HTML workflow alternative and enlargement access. Consider making the text alternative more prominent on phones, and judge the document primarily as an authentic example. Future image changes should preserve every path and avoid merely compressing small text harder. No new unsupported UI or conversion is needed.

### F4 — P2: The lossless infographic dominates full-page image payload

- **Description:** Lazy loading protects the first screen, but the workflow asset is large when the visitor reaches it.
- **Evidence:** The selected workflow bodies are 408,308 bytes on phones, 610,516 bytes at 768 px and 1,005,366 bytes on desktop. The desktop workflow alone represents about 81% of the six homepage image bodies. It was not requested during either initial Lighthouse navigation, so the high navigation score does not measure the later infographic download.
- **Affected file/route:** `public/images/product/docflow/optimized/`, `scripts/prepare-home-media.mjs`, `content/homeProductMedia.json`, media rendering in `components/site/Primitives.tsx`.
- **User/business impact:** Scrolling users on constrained connections pay substantially more than the first-screen performance result suggests. Phone artwork also becomes small despite that payload.
- **Recommended action:** Benchmark appropriately sized, text-preserving derivatives at relevant DPRs, or an owner-approved vector/semantic representation of the same four paths. Compare legibility before accepting savings. Keep originals immutable and retain lazy loading. The original request's fidelity requirement does not justify aggressive lossy compression.

Related, lower-priority opportunity: desktop serves a 1918 px hero into an approximately 1150 px area and a 947 px invoice into approximately 318 px. Lighthouse estimated approximately 107 KiB of desktop image-delivery savings and 45 KiB on mobile, principally from these size differences. Those are modelled savings, not verified replacement-asset sizes, and do not account for every high-DPR use case.

### F5 — P2: Local analytics failures are masked; a successful footprint response does not prove delivery

- **Description:** The handshake's catch-all turns a server-side connection failure into HTTP 400 “Invalid request”. The footprint route launches an upstream fetch without awaiting it, suppresses rejection and returns `ok: true` immediately.
- **Evidence:** The local production handshake returned HTTP 400 with `{ok:false,error:"Invalid request"}`. A separate diagnostic using the configured endpoints, without sending user payloads, failed in the default unsandboxed Node process with `UNABLE_TO_VERIFY_LEAF_SIGNATURE`. Using the operating system's trusted CA support, with certificate verification still enabled, reached both HTTPS endpoints; their HEAD responses were 404. The existing live marketing handshake returned HTTP 200 with `ok:true`. See the detailed investigation in section E.
- **Affected file/route:** `components/Tracker.tsx:9–24`, `app/api/handshake/route.ts:15–36`, `app/api/footprint/route.ts:23–30`, `lib/tracking.ts:7–19`.
- **User/business impact:** Local analytics delivery is unreliable even though footprint returns 200. Silent failures can distort page-view and conversion analysis. The HTTP 400 incorrectly suggests bad client input and makes diagnosis harder.
- **Recommended action:** Preserve useful server-side failure diagnostics, distinguish upstream/server failures from client input errors, and verify acknowledged analytics delivery. Confirm the deployment runtime's certificate trust separately. Do not disable TLS verification. The live 200 response is reassuring evidence, not proof of future deployment behavior or every analytics event.

### F6 — P2: Free-start clicks and registration completion are not evidenced by this analytics implementation

- **Description:** The repository defines `CLICK_START_GRATIS` but the homepage CTA does not call it. The inspected tracker records pathname visits, not a complete signup funnel.
- **Evidence:** `lib/tracking.ts:3` defines the event constant; repository search found no usage that sends it. `ApplicationCTA` is a normal anchor. `Tracker` calls `sendFootprint(pathname)` on pathname changes. No registration-completion integration is present in this marketing repository.
- **Affected file/route:** `components/site/Primitives.tsx:13–14`, `components/Tracker.tsx`, `lib/tracking.ts`; cross-domain journey to `app.jobbleder.no`.
- **User/business impact:** The business cannot reliably distinguish a homepage visitor from a free-start click or completed account using this code alone. App-side analytics may exist, but was not established by this audit.
- **Recommended action:** Define and verify the intended CTA-click and completed-registration measurements across the two sites. Do not infer conversion from a page-view response or the presence of an unused constant.

### F7 — P2: Structured data advertises a blog search that is not implemented

- **Description:** `WebSite.potentialAction` declares a `SearchAction` targeting `/blogg?q={search_term_string}`, but the blog page does not read the query or filter posts.
- **Evidence:** `app/layout.tsx:57–60` declares the action. `app/blogg/page.tsx` sorts the full `blogPosts` array and renders `sortedPosts.map`; it accepts no `searchParams` and exposes no matching search control. The JSON-LD was also observed in the rendered homepage.
- **Affected file/route:** `app/layout.tsx`; `/` structured data and `/blogg`.
- **User/business impact:** The structured description of the site does not match its search behavior. This is a pre-existing SEO-quality issue, not a canonical or indexability failure.
- **Recommended action:** Remove the unsupported action in a separately approved fix, or implement a genuine query-driven search before advertising it. Retain the valid Organization and WebSite descriptions.

### F8 — P2: The strongest benefit and free scope could be clearer near the first CTA

- **Description:** The first screen names the four products, but the practical benefit of reusing information is explained much later. Explicit “all four workflows are free” wording appears in the workflow section rather than beside the initial CTA.
- **Evidence:** The hero says that Jobbleder gathers document work into one browser tool. The workflow section supplies the concrete reuse explanation and free-workflow statement. In the inspected 375 px layout the complete page is approximately 10,197 px tall. The initial CTA is visible, but the next inline app CTA is in onboarding after the products and workflow.
- **Affected file/route:** `components/home/Homepage.tsx`, hero/workflow/onboarding; `components/site/Primitives.tsx`.
- **User/business impact:** Visitors can understand what the product does before fully understanding why to switch or whether their intended document type is free. The Premium invoice example is clearly labelled, but may still attract disproportionate attention before the broader free scope is explicit.
- **Recommended action:** Consider a short, factual hero-adjacent reassurance that all four document types are available free and that existing information can be reused. Preserve the current brand-led H1 and invoice landing page positioning. Do not add “gratis fakturaprogram” repetition or unsupported automatic-processing promises.

### F9 — P3: Optional copy and framework refinements

- **Description:** Kreditnota is absent from the overview, some detail text repeats the main paragraphs, and navigation loads framework JavaScript that Lighthouse identifies as partly unused.
- **Evidence:** The four primary products are covered, while no credit-note sentence appears in homepage copy. Product detail lists repeat several nearby benefits. Lighthouse reported about 27 KiB potentially unused JavaScript and about 14 KiB legacy/polyfill opportunity; desktop also reported an unattributed forced-reflow diagnostic of approximately 101 ms.
- **Affected file/route:** `components/home/Homepage.tsx`, shared Next.js runtime chunks.
- **User/business impact:** These are opportunities for completeness and polish, not demonstrated blockers. The mobile page's length warrants restraint before adding more sections.
- **Recommended action:** If useful, add a brief credit-note mention in the invoice context rather than a fifth large product section. Review repetition after observing real usage. Investigate framework/runtime opportunities only with profiling evidence; do not rewrite working rendering logic for a score alone.

## C. Performance measurements

### Conditions and limitations

- Fresh successful `npm.cmd run build`: Next.js 16.1.6; compilation, TypeScript and 55 generated static pages completed.
- Local production server: `http://127.0.0.1:3017/`, Windows host, Node.js 26.13.1.
- Lighthouse 13.6.0, Headless Chrome 157.0.0.0; one isolated navigation per configuration, not a median or percentile.
- Mobile run: 18 November, approximately **16:49 CET**, viewport 375×900, DPR 1, mobile user-agent emulation. Lighthouse simulated throttling: 150 ms RTT, 1638.4 Kbit/s throughput and 4× CPU slowdown.
- Desktop run: approximately **16:50 CET**, viewport 1440×900, DPR 1, desktop preset, simulated 40 ms RTT, 10240 Kbit/s throughput and 1× CPU.
- Actual browser is Chrome 157; Lighthouse's configured emulated user agents identify Chrome 136. These are emulation strings, not a different installed browser.
- HTTP caching/storage reset was enabled for the audit navigations. No production CDN, geographic latency or real-user population was measured.
- Lighthouse was run from npm's tool cache; no project dependency, config or Lighthouse report file was added. Measurements were retained in tool output and transcribed here.

The CLI behavior and simulation distinction follow the [official Lighthouse documentation](https://github.com/GoogleChrome/lighthouse/blob/main/readme.md). **These are local laboratory observations and modelled results, not real-user Core Web Vitals.**

| Metric | Mobile 375 px | Desktop 1440 px | Interpretation |
|---|---:|---:|---|
| Performance score | 96/100 | 100/100 | One lab navigation each. |
| LCP, Lighthouse simulated result | 2,034 ms | 569 ms | Modelled using the configured network/CPU conditions. |
| LCP, directly observed local trace | 385 ms | 285 ms | Actual trace on this local host before simulated throttling. |
| FCP, simulated | 956 ms | 269 ms | Local/modelled paint behavior, not a field percentile. |
| CLS | 0 | 0 | No layout shift recorded in either navigation. |
| Total Blocking Time | 206 ms | 0 ms | Lab main-thread blocking; **not INP**. |
| Speed Index, simulated | 956 ms | 311 ms | Lab visual progression. |
| INP | Not measured | Not measured | No representative field interaction population; do not substitute TBT or max-potential-FID for INP. |

### Measured navigation transfers

These values are Lighthouse network-record transfer sizes, including reported request overhead. The capture does not represent a complete scroll through every lazy image.

| Resource category | Mobile requests / bytes | Desktop requests / bytes |
|---|---:|---:|
| Total | 23 / 259,146 | 42 / 448,222 |
| Images | 4 / 84,642 | 5 / 236,417 |
| JavaScript | 9 / 141,202 | 11 / 151,690 |
| Stylesheets | 2 / 9,160 | 2 / 9,160 |
| Font requests | 0 / 0 | 0 / 0 |

Mobile image transfers were the hero (5,969 bytes), invoice (51,816), timesheet crop (7,515) and offer (19,342). Desktop transferred hero (77,549), invoice (51,816), timesheet (50,044), offer (19,342) and contract (37,666). The infographic was absent from both initial-navigation request sets: it remains lazy and far below the initial viewport.

No desktop hero was downloaded in the mobile run. The correct mobile/tablet/desktop picture sources were observed in the responsive checks. Original-image anchors do not automatically download the original PNG merely by being present.

### Complete selected-image payload, separately derived

The following totals are **deterministic sums of the selected derivative file bodies**, confirmed against rendered source selection. They are not claimed as Lighthouse's measured initial navigation transfer and exclude HTTP headers, other resources and interaction-triggered prefetching.

| Width | Six selected image bodies | Workflow image body | Selection |
|---|---:|---:|---|
| 375 px | 529,208 bytes (516.8 KiB) | 408,308 bytes | Mobile hero, timesheet detail and diagram-only workflow. |
| 768 px | 802,994 bytes (784.2 KiB) | 610,516 bytes | Full hero, timesheet detail and supplied compact infographic. |
| 1280 px | 1,240,372 bytes (1,211.3 KiB) | 1,005,366 bytes | Desktop variants. |
| 1440 px | 1,240,372 bytes (1,211.3 KiB) | 1,005,366 bytes | Same capped-width desktop variants. |

### Loading, JavaScript, render blocking and fonts

- The hero was the LCP image in both Lighthouse runs. It was discoverable in the original document, eager loaded and requested with high priority. Lighthouse passed all three LCP-discovery checks. There is no reason to preload the below-fold infographic.
- Other homepage images are lazy loaded, with intrinsic dimensions and the appropriate `<source>` dimensions. Natural aspect ratios are preserved; CLS was 0. The existing invoice has intentional paper framing.
- The static HTML references ten JavaScript chunks totalling 577,423 uncompressed bytes. A local gzip calculation gives 177,051 bytes; this is a compression estimate, **not** the same as the measured JS transfer totals above. Framework prefetching changes which chunks are fetched during a given capture.
- Two stylesheets contain 37,450 uncompressed bytes and transferred 9,160 bytes in each run. Lighthouse estimated 300 ms mobile / 30 ms desktop render-blocking savings. Those are potential modelled savings, not a measured benefit from an implemented CSS change.
- No webfonts were fetched. The homepage uses Arial/Helvetica/system fallbacks; there is no observed external-font request chain or font-loading layout shift. The unused Geist CSS variable declarations do not load a font by themselves.
- There were no Lighthouse run warnings. Mobile's automated accessibility and SEO scores were both 100, but neither establishes full correctness: F1 and the unsupported SearchAction remain concrete findings.

### Responsive and keyboard inspection

The homepage was freshly inspected at 375, 768, 1280 and 1440 px in the in-app browser. Its OS preference was dark (`body` background `rgb(10,10,10)`), while the homepage intentionally retained the approved white `.surface`. There was no page-level horizontal overflow at any width. First-screen screenshots showed the hero CTA, appropriate heading wrapping and correct header breakpoint.

The previous Phase 3.2C evidence was also reviewed: 24 production-browser cases covering both `/` and `/fakturaprogram-gratis`, four widths and light/dark/reduced-motion settings. Those are **prior-phase results, not 24 newly run Phase 3.3 cases**. Their source behavior was cross-checked against the current unchanged implementation. Fresh Lighthouse used its normal lab browser configuration; no claim is made that this audit programmatically reran every color/motion combination.

| Width | Fresh visual/DOM result |
|---|---|
| 375 px | Mobile menu; headline wraps over three lines; first CTA visible. All six images ultimately load when scrolling. Document and infographic fine print is small, but no path is removed. |
| 768 px | Mobile-style navigation remains usable; hero uses its broad overview; contract stacks below the copy at approximately native document width; workflow uses the complete supplied cropped variant. |
| 1280 px | Desktop product dropdown; two-column product sections; full contract and full infographic. No clipped controls or overlapping labels. |
| 1440 px | Same capped desktop composition and complete paths; no oversized content spilling outside the container. |

Keyboard testing freshly verified Tab to “Hopp til innhold”, visible focus, Enter moving focus to `#hovedinnhold`, and Enter opening/closing the native mobile menu. Mobile navigation links had 44 px heights. Footer resource links were accessible and approximately 40 px high. The workflow uses native details/summary rather than an inaccessible carousel. Reduced-motion CSS still sets scrolling to `auto` and suppresses animations; prior controlled reduced-motion cases passed. Focus appearance is preserved in the current styles.

## D. SEO assessment

### Positioning and metadata

- Homepage title: **Jobbleder – Faktura, kontrakt, timeliste og tilbud på minutter**.
- Meta description: **Lag faktura, kontrakt, timeliste og tilbud enkelt i nettleseren. Jobbleder er laget for håndverkere og små bedrifter.**
- Canonical: **https://www.jobbleder.no/**.
- H1: **Jobben din. Dokumentene på plass.** The line break does not create a second H1.
- Headings: one H1, ten H2s including two footer navigation headings, eleven H3s, and no H4–H6. Product details, onboarding steps and resource groups follow a coherent hierarchy.

The homepage is correctly positioned as the broad product introduction. `/fakturaprogram-gratis` remains the dedicated invoice search-intent page, with its own title, canonical, specialised content and existing layout. Header, product introduction, resource group and footer all link to it. The homepage should not be rewritten around repeated “gratis fakturaprogram” headings.

Timeliste, Tilbud and Kontrakt currently link to the established SEO entry routes `/timeliste-mal`, `/tilbud-mal` and `/kontrakt-mal`; there are no separate dedicated product component pages for those three in this repository. Their existing route architecture is not a reason to invent new URLs during this audit.

### Structure, linking and image context

The page has a single main landmark, a working skip link, labelled navigation, product sections with heading relationships, figures/captions, definition lists, onboarding steps, and semantic footer navigation. All six media images have meaningful Norwegian alt text. The shared art-direction description remains accurate for the variants, although the desktop hero's alt is less detailed than the full dashboard. F1 concerns the image **links**, not missing image alt attributes.

Twenty-three distinct internal href targets, representing 22 route paths plus the document-section anchor variant, were checked by GET. All returned HTTP 200. Product/SEO links, blog, instructions, about and contact are present. The instruction target `#dokumenter` exists in the instruction content. External app links consistently use HTTPS.

No indexability or canonical-host problem was found. `robots.txt` returns 200, allows `/`, disallows `/api/` and `/private/`, and references the canonical-host sitemap. `sitemap.xml` returns 200 and contains 45 URLs, all on `https://www.jobbleder.no`, including the homepage and the dedicated invoice route.

Organization and WebSite JSON-LD parse correctly and use the correct brand/origin. F7 is the specific unsupported SearchAction; a generic SEO score does not validate whether a declared search actually works. Do not add fabricated reviews, ratings, signup counts or unsupported Product/SoftwareApplication offers to fill schema fields.

## E. Conversion and tracking assessment

### Actual first-time journey

1. Visit homepage. “Start gratis” appears in the first viewport; the audience and four primary document types are stated above it.
2. Click “Start gratis”. A normal same-tab anchor navigates to `https://app.jobbleder.no/`. The final visible URL stayed on that origin/path; no broken intermediary was observed.
3. Read the English login form. The Norwegian marketing helper accurately says to choose “Create account”.
4. Click “Create account”. The form changes on the same URL, showing Email, Password, Repeat password, user-agreement acceptance, an agreement link, Create account and Cancel.
5. Account submission was **not performed**. No personal details, password or agreement acceptance were entered. Email verification, backend account creation, first-login setup and completion analytics are therefore unverified rather than reported as successful.

The app's cookie message is Norwegian while the form is English. At 375×900 the form and buttons fit. An additional 375×667 check found the Create account button ending at approximately y=566 and the fixed 100 px cookie notice starting at y=567; no actual overlap was established at that tested size. Virtual-keyboard behavior was not tested, and an overlap blocker is not asserted from a screenshot alone.

The basic funnel is navigable and the CTA destination is truthful. The main improvement is reducing login-first friction and language inconsistency, not changing the approved homepage architecture. The free scope should remain clearer than Premium branding. Do not promise email delivery, online signing or independent employee access as conversion incentives.

### Handshake investigation

| Question | Evidence-based answer |
|---|---|
| What triggers it? | `Tracker` mounts in `app/layout.tsx`; its first effect POSTs `/api/handshake`. A separate pathname effect calls `/api/footprint`. |
| Why HTTP 400 locally? | The route's catch-all maps exceptions to 400. Default unsandboxed Node HTTPS probes to the configured upstreams failed with `UNABLE_TO_VERIFY_LEAF_SIGNATURE`. This is a certificate-chain/trust failure, not evidence of a malformed browser request. |
| Was it just a sandbox DNS failure? | No. The first sandbox probe had DNS restrictions, but the escalated probe established the separate TLS error. The two failure modes were not conflated. |
| Does secure system trust change the result? | A diagnostic process using `--use-system-ca` reached both HTTPS upstreams with verification still enabled. HEAD returned 404, which proves that TLS connectivity progressed, not that a POST analytics operation succeeded. No application/runtime config was changed. |
| What happened in production? | A POST to the existing `https://www.jobbleder.no/api/handshake` returned 200 with `ok:true`. The observed failure is local to this tested Node/trust environment; future deployment behavior still needs its normal smoke test. |
| Does it repeat continuously? | No loop/retry was found. Each Lighthouse navigation recorded exactly one handshake and one footprint request. `handshakeDone` guards a mounted instance; reloads/new documents remount it. Footprints follow pathname changes. |
| Does it block UX? | The client does not await a handshake before rendering or navigating, and normal marketing controls worked despite the local 400. No dependency on its result gates the CTA. This does not prove all separate application features or analytics are unaffected. |
| Can footprint 200 be trusted as delivery confirmation? | No. The route returns before upstream completion and swallows rejection. Both upstreams encountered the same local TLS problem in diagnostic probes. |

No UID, private endpoint path or response data was included in this report. The production request was limited to the existing handshake route; no signup or authentication submission occurred.

## F. Deployment recommendation

### READY AFTER MINOR FIXES

The approved visual direction is coherent, product claims are materially accurate, canonical/indexability checks pass, internal links resolve, the dedicated invoice page remains distinct, and both local Lighthouse runs have good initial-load results. There is no evidenced P0 blocker.

Before publishing, correct F1's six shared label/name mismatches and recheck that visible labels are included in accessible names. This is the small concrete change behind the conditional recommendation. It has **not** been implemented in this read-only phase.

At the normal production smoke test, verify homepage assets, the app login/registration entry, and analytics acknowledgement using the deployment runtime. The current production handshake's success means the local TLS issue should not automatically be labelled a production outage. Conversely, a 200 footprint response must not be accepted as delivery evidence.

Schedule the P2 items deliberately, especially registration language, image payload and genuine funnel measurement. Preserve the current route structure and brand-led homepage rather than reopening a broad redesign. No new production action is authorised or taken by this report.

### Audit integrity

Only `docs/phase-3.3-homepage-final-audit.md` was added. Build outputs and tool caches were used for the explicitly requested production measurements; generated `next-env.d.ts` was returned to its pre-audit content. Existing source files, image assets, metadata, configuration and dependency manifests were checked for changes before handoff. No fixes, commits, pushes or deployments were performed.
