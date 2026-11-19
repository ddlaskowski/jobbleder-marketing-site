# Phase 5.3A — Timeliste content ecosystem audit

19 November 2026, Europe/Berlin. **READ-ONLY AUDIT — AWAITING OWNER APPROVAL.** Only this report is created; no content, metadata, canonical, link, image, redirect or application change.

Repository root for paths below: `C:/Users/ddlas/Code/jobbleder-site/`. Public canonical origin: `https://www.jobbleder.no`.

## 1. Executive summary and evidence boundaries

The strongest existing product story is already on `/timeliste-mal`: **record work → import Registreringer into Timeliste → review/export PDF → create Faktura with four separate work categories**. The ten modernized instructions provide the practical detail and authentic phone evidence. Four specialized SEO pages and four Timeliste-category articles largely retain older, generic explanations and do not yet deliver the same story at the appropriate level of detail.

Recommended direction: retain the main page as the product overview, give each specialist page a precise task, and enrich the existing articles with genuinely useful examples. Do not turn every route into a copy of the main product page, distribute every screenshot everywhere, or create a new set of thin articles. **No URL consolidation, canonical change, redirect or ranking claim is supported by the available evidence.**

Key findings:

- **P1 accuracy:** the PDF blog promises “lagre alt automatisk” without verified autosave evidence. `/timeliste-ansatt` ambiguously describes employees registering hours without explaining the documented entered-worker-name model; employee accounts/permissions are not established.
- **High-impact P2 accessibility:** all four specialized pages use the legacy SEO renderer. In light preference, H1/H2 text is white on white and paragraphs are very low contrast. The problem is visible, not merely a theoretical design inconsistency. Legacy FAQ expansion lacks programmatically exposed state; duplicate unnamed navigation landmarks and dark-footer contrast also need attention.
- **P2 content:** weekly/project/employee tasks are weakly explained; the invoice-workflow article does not actually demonstrate the confirmed conversion. The Timeliste category contains four articles but no contextual product link.
- **SEO overlap hypothesis:** the main page, PDF specialist and free-PDF blog all mention free templates/PDF and share downloads. This is plausible intent overlap, **not verified cannibalization**. Query/page GSC data is required before assigning winners or removing pages.
- **Data gap:** no identifiable verified Google Search Console export was found in the repository. Owner exports are explicitly requested in §9.

### Method and scope

Screened the complete generated marketing inventory: **45 HTML routes** (17 SEO/product routes, 18 blog posts, five categories, five static pages). Reviewed source bodies for all Timeliste pages and all six articles with substantive Timeliste/time-registration content: four category articles and two cross-topic articles. Boilerplate Timeliste links alone do not make every page a Timeliste competitor.

Detailed rendered inventory covers **16 relevant routes**: five landing pages, six articles, three relevant/adjacent categories, blog index and instructions hub. At 1440px/light all 45 routes were inspected. Those 16 received five additional cases: 375/768/1280px light and 375/1440px dark. Thus there are **125 recorded local route/viewport observations**, of which 96 are the six-case matrix for the 16 relevant routes. axe ran on the 375/light and 1440/dark cases for those routes: **32 scoped automated runs**.

Seven public production routes were directly checked for HTTP status, title, H1, canonical and structured data. Both public template downloads returned HTTP 200 with `application/pdf` and a valid `%PDF-` signature. Browser/source observations establish implementation and content, not Google indexing, rankings, search demand or authenticated-app backend behavior.

Reused Phase 4A and Phase 5.1/5.2 findings and the approved mobile-image inventory rather than repeating their image audits. At audit start the approved instruction hub/mobile integration was local and uncommitted. During the audit, HEAD advanced through an external commit containing the same file bytes (see §12). This audit did not verify the hub's deployment, so new task-fragment links still require direct production verification before use. Existing `#arbeidsokter` remains the compatible historical section anchor.

## 2. Complete route inventory and current implementation

### 2.1 Detailed ecosystem routes

| Route | Current purpose / content quality | FAQ / schema | CTA and media | Implementation |
|---|---|---|---|---|
| `/timeliste-mal` | Product-led pillar; ten sections covering registrations, four categories, PDF, invoice, plans, education and FAQ. Strong and substantially more complete than the satellites. | Eight FAQ items from `timelistFaqs`, rendered and serialized from the same array; global Organization/WebSite. | App CTA, two real template downloads, six authentic desktop/PDF figures with responsive crops. No authentic phone viewport on this page yet. | `app/(seo)/[slug]/page.tsx` selects `components/product/timelist/TimelistProductPage.tsx`; content/media in `content/timelistProduct.ts` and `timelistProductMedia.json`. |
| `/timeliste-mal-pdf` | Download/resource intent, but much copy remains generic digital-timelist selling. Useful two-download module; weak guidance on choosing/filling/printing. | Three FAQ items, same `page.faqs` array for visible accordion and FAQPage schema. | App CTA appears before downloads; two download links; no product/PDF preview image. | Generic SEO renderer, `content/seoPages.ts`; Navbar, Breadcrumbs, DownloadResources, ClusterNavigation, FAQAccordion, RelatedSeoPages, Footer. |
| `/timeliste-uke` | Weekly task page; three short educational sections. No concrete weekly review/import example or direct template download. | Three FAQs / FAQPage. | App CTA; cluster/resource links; no images. | Same generic SEO renderer. |
| `/timeliste-ansatt` | Worker/employee-name intent. Generic benefit paragraphs; documented worker-name model and limits are absent. | Three FAQs / FAQPage. | App CTA; no name-field example or images. | Same generic SEO renderer. |
| `/timeliste-prosjekt` | Project/customer context and invoice basis. Accurate direction, but no practical project selection/review sequence. | Three FAQs / FAQPage. | App CTA; no project/document screenshot or direct instruction link. | Same generic SEO renderer. |
| `/blogg/gratis-timeliste-mal` | Free download without login plus PDF-versus-digital guidance. Useful links/checklist, but autosave claim is unverified and intent overlaps PDF specialist. | Article; no dedicated FAQ. | Two PDF links, body link to pillar, app link. No images. | `content/blogPosts.ts`, shared blog detail route. |
| `/blogg/effektiv-timeliste` | General efficient daily recording habits. Sensible checklist, little actual application method. | Article; no dedicated FAQ. | Body link to weekly page and app; no images. | Same blog renderer. |
| `/blogg/timeliste-for-handverkere` | Field-work routines. Mostly repeats “record promptly” without a tradesperson scenario. | Article; no dedicated FAQ. | Body link to employee page and app; no images. | Same blog renderer. |
| `/blogg/timeliste-og-faktura` | Informational bridge from work records to invoice. Currently only explains benefits and suggested fields, not the actual conversion. | Article; no dedicated FAQ. | Body link to project page and app; no direct editorial conversion/Faktura link; no images. | Same blog renderer. |
| `/blogg/forskjell-faktura-tilbud-timeliste` | Cross-document orientation, not another template page. Useful distinct concept; timing of invoicing is simplified. | Article. | Body link to instructions and app; generated pillar links; no images. | Same blog renderer, relatedTopic `oversikt`. |
| `/blogg/gratis-fakturaprogram-handverkere` | Invoice acquisition article with substantive mention of using offers/timelists in one browser-based tool. Remains primarily invoice intent. | Article. | Body link to Faktura product and app; generated Timeliste-pillar link; no images. | Same blog renderer, relatedTopic `faktura`. |
| `/blogg/kategori/timeliste` | Four-article discovery hub, sorted by publication date. Short intro, category chips and article cards; no contextual product CTA. | Global schema only; no category-specific FAQ/Article claim. | Article cards; no screenshots. | `app/blogg/kategori/[category]/page.tsx`, BlogCategoryNav/BlogCard, legacy Navbar/Footer. |
| `/blogg/kategori/oversikt` | Adjacent cross-document category; includes comparison article and an abbreviated offer/contract workflow article. Not a Timeliste-template destination. | Global schema only. | Article discovery; no screenshots. | Same category renderer. |
| `/blogg/kategori/faktura` | Adjacent invoice discovery category; relevant through invoice article/conversion journey. Not a direct Timeliste competitor. | Global schema only. | Article discovery; no screenshots. | Same category renderer. |
| `/blogg` | Whole-blog discovery, all 18 posts/five categories. No implemented query search despite shared SearchAction metadata. Duplicate Jobbleder suffix in rendered title. | Global schema only. | Article/category links; no product screenshots. | `app/blogg/page.tsx`, BlogCategoryNav/BlogCard. |
| `/instruksjoner` | Task/help hub. Relevant registration/import/timelist/conversion cards are the authoritative operational companion, not 29 independent indexable pages. | Existing global schema; no invented FAQ/HowTo. | Authentic desktop/PDF and phone examples with original links; app CTA. | Local `InstructionsHub`, `InstructionAnchors`, guide/media manifests; modern SiteChrome/ProductMedia. |

Detailed exact title, description, canonical and rendered H1–H3 for each of these routes are in §13. Main `/timeliste-mal` is a dedicated product branch: its actual H1 and eight FAQs must not be confused with the old base `seoPages.h1` and three base FAQs.

### 2.2 Full-site discovery register

This is the complete 45-route HTML inventory screened for additional Timeliste relevance. A reachable, indexable-looking route is not proof that Google has indexed it. The five categories are real routes; tag badges are spans, not additional tag landing pages.

| Route | Rendered title | Timeliste role |
|---|---|---|
| `/` | Jobbleder – Faktura, kontrakt, timeliste og tilbud på minutter | Homepage product/workflow bridge |
| `/instruksjoner` | Instruksjoner for Jobbleder \| Jobbleder | Operational hub; detailed scope |
| `/blogg` | Blogg om faktura, tilbud, timelister og kontrakter \| Jobbleder \| Jobbleder | Whole-blog discovery; detailed scope |
| `/om-oss` | Om Jobbleder \| Jobbleder | Supporting company/contact route |
| `/kontakt` | Kontakt \| Jobbleder | Supporting company/contact route |
| `/timeliste-mal` | Timeliste mal – gratis og enkel timeliste (PDF / nett) \| Jobbleder | Primary Timeliste SEO/product cluster |
| `/timeliste-mal-pdf` | Timeliste mal PDF – gratis timeliste for håndverkere \| Jobbleder | Primary Timeliste SEO/product cluster |
| `/timeliste-uke` | Timeliste uke – få oversikt over arbeidstid per uke \| Jobbleder | Primary Timeliste SEO/product cluster |
| `/timeliste-ansatt` | Timeliste ansatt – enkel registrering av arbeidstid \| Jobbleder | Primary Timeliste SEO/product cluster |
| `/timeliste-prosjekt` | Timeliste prosjekt – før timer per prosjekt og kunde \| Jobbleder | Primary Timeliste SEO/product cluster |
| `/tilbud-mal` | Tilbud mal – skriv et profesjonelt tilbud (gratis) \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/lage-tilbud` | Lage tilbud – hvordan skrive et godt tilbud \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/tilbud-eksempel` | Tilbud eksempel – se hvordan et godt tilbud kan se ut \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/fakturaprogram-gratis` | Fakturaprogram gratis – lag faktura enkelt i Norge \| Jobbleder | Invoice-product workflow bridge |
| `/hvordan-folge-opp-tilbud` | Hvordan følge opp tilbud – få flere svar fra kunder \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/lage-faktura` | Lage faktura – hvordan skrive en faktura enkelt \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/faktura-eksempel` | Faktura eksempel – se hvordan en faktura kan se ut \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/faktura-krav` | Faktura krav – hva må en faktura inneholde? \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/kontrakt-mal` | Kontrakt mal – enkel kontrakt for håndverkere (gratis) \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/kontrakt-handverker` | Kontrakt håndverker – trygg avtale med kunde \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/kontrakt-eksempel` | Kontrakt eksempel – slik kan en avtale se ut \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/hva-skal-en-kontrakt-inneholde` | Hva skal en kontrakt inneholde? \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/blogg/gratis-timeliste-mal` | Gratis timeliste mal (PDF) – last ned uten innlogging \| Jobbleder | Core Timeliste article |
| `/blogg/gratis-fakturaprogram-handverkere` | Gratis fakturaprogram for håndverkere – enkelt og nettbasert \| Jobbleder | Substantive cross-topic article |
| `/blogg/lage-tilbud-byggebransjen` | Hvordan lage et profesjonelt tilbud i byggebransjen \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/blogg/innhold-i-faktura` | Hva skal en faktura inneholde? En enkel oversikt \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/blogg/feil-med-tilbud` | Topp 5 feil å unngå når du sender tilbud \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/blogg/effektiv-timeliste` | Hvordan føre timelister effektivt \| Jobbleder | Core Timeliste article |
| `/blogg/hvordan-lage-gratis-faktura` | Hvordan lage en faktura gratis på nett \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/blogg/lage-tilbudsdokument` | Hva er et tilbudsdokument og hvordan lager du ett? \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/blogg/forskjell-faktura-tilbud-timeliste` | Forskjellen på faktura, tilbud og timeliste \| Jobbleder | Substantive cross-topic article |
| `/blogg/folle-opp-tilbud` | Hvordan følge opp et sendt tilbud og lande flere jobber \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/blogg/timeliste-for-handverkere` | Timeliste for håndverkere – hvorfor gode rutiner er viktige \| Jobbleder | Core Timeliste article |
| `/blogg/timeliste-og-faktura` | Timeliste og faktura – slik henger de sammen \| Jobbleder | Core Timeliste article |
| `/blogg/faktura-eksempel-sma-bedrifter` | Faktura eksempel for små bedrifter \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/blogg/nar-sende-faktura` | Når bør du sende faktura for raskere betaling? \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/blogg/tilbud-eller-pristilbud` | Tilbud eller pristilbud – hva forventer kunden? \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/blogg/tilbud-vs-kontrakt` | Tilbud vs kontrakt – hva er forskjellen? \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/blogg/nar-trenger-du-kontrakt` | Når trenger du kontrakt som håndverker? \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/blogg/fra-tilbud-til-kontrakt-og-faktura` | Fra tilbud til kontrakt og faktura – slik fungerer det \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/blogg/kategori/timeliste` | Timeliste \| Blogg \| Jobbleder | Core category |
| `/blogg/kategori/faktura` | Faktura \| Blogg \| Jobbleder | Adjacent category; detailed scope |
| `/blogg/kategori/tilbud` | Tilbud \| Blogg \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/blogg/kategori/kontrakt` | Kontrakt \| Blogg \| Jobbleder | Screened adjacent/other topic; not a distinct Timeliste target |
| `/blogg/kategori/oversikt` | Oversikt \| Blogg \| Jobbleder | Adjacent category; detailed scope |

### 2.3 Supporting public documents and anchors

- `/downloads/timeliste-mal-jobbleder.pdf`: public blank template, not another HTML landing page; production HTTP 200, application/pdf, **339,211 bytes**, valid PDF signature. It may be an independently discoverable document; actual Google indexing/query exposure is unknown. PDF-specific indexing headers/content metadata were not audited, and no new canonical/noindex recommendation is made.
- `https://laskowskicreative.no/api/jobbleder/user/documents/oneweek-timelist`: external generated template linked as the last seven days; production HTTP 200, application/pdf, **334,286 bytes**, valid signature in this audit. It is outside the Jobbleder WWW canonical origin. Do not label it a Jobbleder HTML route or assume it appears in the Jobbleder GSC property. Calendar/date behavior was not authenticated or inspected inside the PDF; retain the existing “siste 7 dager” wording rather than inventing a calendar-week selector.
- Relevant task anchors: `/instruksjoner#hvordan-arbeidsokter-fungerer`, `#legg-til-en-arbeidsokt`, `#importer-arbeidsokter-til-timeliste`, `#opprett-timeliste`, `#timeliste-til-faktura`; historical category `#arbeidsokter`. Customer/project cards are supporting context, not proof of employee accounts or permissions. Fragment links share the hub's canonical and are not separate SEO pages.

## 3. SEO intent map and overlap assessment

All keyword clusters below are qualitative intent hypotheses derived from current content. **No volume, impressions, CTR, position, ranking or traffic movement was available or inferred.** Preserve all existing URLs and WWW self-canonicals.

| Route | Primary intent / likely cluster | Secondary intent | Competing internal content / differentiation |
|---|---|---|---|
| `/timeliste-mal` | Product/template discovery: timeliste mal, gratis timeliste, digital timeliste | Registreringer, PDF output, mobile work-to-invoice | Overlaps PDF page/blog on downloads; own the product journey and full Free functionality, retaining quick access to templates. |
| `/timeliste-mal-pdf` | Obtain/choose a PDF: timeliste mal PDF, laste ned timeliste, tom timeliste | Print/manual use; blank versus last-seven-days version | Strongest overlap with free-PDF blog and pillar. Provisional role is an efficient download resource; confirm query ownership before reassigning titles or deleting anything. |
| `/timeliste-uke` | Weekly task: timeliste uke, ukentlig timeliste, ukemal | Choosing dates, daily review, weekly PDF/invoice basis | Shares template terms but can answer a distinct weekly workflow. Distinguish a chosen calendar week from a rolling last-seven-days download; do not promise automatic weekly reports. |
| `/timeliste-ansatt` | Record hours under a worker name: timeliste ansatt, timer per arbeider | PDF documentation and project association | May attract team/HR/payroll intent the product evidence does not support. Preserve keyword intent while explicitly explaining the entered-name model. |
| `/timeliste-prosjekt` | Project hours: timeliste prosjekt, timer per prosjekt, timeliste kunde | Document organization and invoice basis | Different from employee/week intent. Explain choosing project, optional customer and reviewing named-worker records, not full project accounting/profitability. |
| `/blogg/gratis-timeliste-mal` | Informational download choice: gratis timeliste mal uten innlogging | How to fill/use the manual template, PDF versus digital | High topical overlap with PDF page. Add genuine filling/choice guidance; preserve working download entry until GSC shows actual query/page behavior. |
| `/blogg/effektiv-timeliste` | Method: føre timeliste effektivt, timeføring rutiner | Date/description/pause, avoiding forgotten work | Overlaps craft-routines article. Own the general daily recording method and common input mistakes rather than repeating a sector-specific sales pitch. |
| `/blogg/timeliste-for-handverkere` | Sector scenario: timeliste håndverker, dokumentere arbeid | Several small tasks, extra work, KM, customer handover | Distinguish with a real field-work scenario; do not retarget the generic “timeliste mal” headline. |
| `/blogg/timeliste-og-faktura` | Explain transformation: timeliste til faktura, fakturere timer og kilometer | Four categories, quantity/rate review, manual PDF distribution | Shares a feature with the pillar/Faktura page, but can explain the method. Keep invoice-software acquisition on Faktura; detailed click steps in instructions. |
| `/blogg/forskjell-faktura-tilbud-timeliste` | Compare document purposes | Recognize which document comes next | Orientation intent is distinct; link the appropriate product/workflow instead of making another free-template page. |
| `/blogg/gratis-fakturaprogram-handverkere` | Invoice-software choice for tradespeople | Connected Timeliste workflow | Keep primary invoice intent; one relevant contextual Timeliste link suffices. No reason to consolidate with Timeliste pages. |
| `/blogg/kategori/timeliste` | Browse Timeliste educational resources | Find practical task or product page | Discovery hub; concise curated intro and links, not a second pillar with repeated features/FAQ. |
| `/blogg/kategori/oversikt` | Browse document-system orientation | Cross-document comparison | Adjacent discovery; do not retarget template keywords. |
| `/blogg/kategori/faktura` | Browse invoicing guidance | Find timelist-to-invoice explanation | Adjacent discovery; retain invoice category purpose. |
| `/blogg` | Browse all educational topics | Category selection | No need to compete for template terms or create query/tag SEO pages. |
| `/instruksjoner` and fragments | Existing-user task completion: registrere arbeid, importere registreringer, lage timeliste, opprett faktura | Help after product discovery | Operational depth is complementary, not a competing template-sales page. Keep canonical at hub; use task links rather than duplicating full tutorials everywhere. |

Other product pages and `/lage-faktura` are adjacency points, not additional primary Timeliste targets. Shared words in navigation, related cards and connected-document sections do not establish cannibalization.

### Decision gate before any structural SEO action

The PDF triad shares two download targets and closely related titles; efficient-routines articles also repeat benefit language. This supports investigation, not a redirect. Require query→page observations over the requested period, stable filters, actual changes of ranking URL, intent review and outcome/context before proposing consolidation. Multiple pages showing for a query can be useful or harmful; it is not inherently harmful. No canonical change, noindex, slug change or redirect is recommended now. Preserve functioning category canonicals too.

## 4. Content accuracy and product-story coverage

### Evidence hierarchy

**OWNER-CONFIRMED:** responsive browser application, mobile/tablet/desktop, registrations with hours/breaks/descriptions/Extra/optional KM, import into Timeliste, conversion into four invoice categories, Free availability, Premium branding/logo differences. Prior documented worker-name entry is corroborated by both desktop and phone forms. **SCREENSHOT-OBSERVED:** exact controls, sample IDs/counts/fields and outputs. **CODE-VERIFIED:** marketing rendering, links, metadata, schema and data arrays. None is mislabelled an authenticated backend test.

| Finding | Exact evidence / location | Status | Recommendation |
|---|---|---|---|
| Automatic saving | `content/blogPosts.ts`, `gratis-timeliste-mal`, PDF-or-digital paragraph: “lagre alt automatisk” | **Unverified product promise**, not proven backend behavior. Screens show explicit Lagre/Generer and retained imported records until save/generate. | P1: replace only the unsupported autosave claim with accurate manual review/save guidance after approval. Do not claim automatic synchronization. |
| Employee self-service ambiguity | `content/seoPages.ts`, `timeliste-ansatt`: “Når ansatte registrerer arbeidstid systematisk”; generic employee FAQ | Wording can imply organization employee accounts/permissions; these are **not verified**. Entered worker name is verified. | P1 clarification: explain whose name is entered and how hours are associated. Preserve employee search intent; do not claim a staff portal, roles, approval flow or payroll. |
| Automatic template wording | `components/DownloadResources.tsx`: “lage timelister automatisk”; PDF-page “digital og automatisert løsning” | Vague automation phrasing, not proof of a specific unsupported feature. | Make the supported mechanism concrete: enter/import records, review, save/generate. Do not equate all automation with a demonstrated false claim. |
| Weekly convenience | Weekly page's “full oversikt uke for uke”; download labels alternate siste uke/siste 7 dager | Manual dated timelists/documented last-seven-days download are available; automatic calendar-week grouping/reporting is not shown. | Clarify chosen work dates versus rolling template; flag stronger weekly automation claims if proposed. Do not invent a weekly view or scheduler. |
| Extra versus overtime | Main product FAQ explicitly says not automatic overtime calculation; satellites only generic hours | Manual Extra classification is confirmed; statutory overtime/payroll processing is not. | Preserve that distinction in worked examples, rates and FAQs. No legal rate/compliance or payroll claim without separate authoritative verification. |
| Invoice conversion | Product and instructions demonstrate separate regular/extra hours/KM; blog `timeliste-og-faktura` only says “grunnlag” | **Confirmed functionality under-explained**, not incorrect product capability. | Explain real conversion and review of quantities/rates, then manual PDF download/distribution. |
| Free/Premium | Main FAQ/table says all workflow functionality Free and branding differences Premium; other pages say generic free | Correct where stated, incomplete elsewhere. | Add a short relevant clarification, not artificial Premium gates or invented pricing/quotas. |
| Invoice timing | Cross-document comparison says an invoice is sent after work is performed | Simplified educational sequence; not a complete statement of agreed invoicing arrangements. | Present it as a typical example, avoiding an absolute “only after completion” restriction. Do not add legal advice or automatic billing promises. |
| “Arbeidsøkter” label | Product link says “Se instruksjoner for arbeidsøkter”, href `#arbeidsokter` | Historical anchor is correct; visible app label is Registreringer. | Safe visible-label correction while preserving href; newer task fragments depend on hub rollout. |
| SearchAction accuracy | `app/layout.tsx` advertises `/blogg?q={search_term_string}`; `app/blogg/page.tsx` never reads search params and renders all posts | **Code-verified mismatch** between shared search schema and available blog filtering, not a Timeliste app feature. | P2: verify/remove or correct unsupported action under separately approved shared-SEO scope; do not build an unsolicited search feature merely to justify the schema. |

No explicit native-app, offline, employee-role, automatic payroll, accounting-integration or automatic invoice-delivery promise was found in the six inspected editorial bodies. Absence of a mobile screenshot does not mean the application lacks mobile support. Main page terminology around four categories, manual review and Free functionality is materially stronger than the satellites.

### Eight-part product-story coverage

| Story element | Existing strong evidence | Ecosystem gap / best destination |
|---|---|---|
| Mobile registration after work | Approved phone forms/list; local instructions | Main page's registration section can show one authentic phone example; craft/daily-method articles need context-specific use. |
| Pauses and descriptions | Main step list, registration form and instructions | Efficiency article should show a concrete workday; PDF guide should explain manual fields without duplicating a full app tutorial. |
| Ordinary and extra work | Main four-category section and phone examples | Weekly/craft pages need explicit manual Extra distinction, not payroll/overtime claims. |
| Kilometer entry | Main FAQ/categories; phone KM 50 and selected/saved records | Explain optional enabled KM where relevant, without inventing report/mileage-policy behavior. |
| Import into Timeliste | Main and instruction workflow; three-row phone import | Weekly/project pages need a short method plus direct help link, not repeated long walkthroughs. |
| Professional PDF | Authentic completed PDF and two manual templates | PDF specialist needs visible, useful choice/filling guidance and clarity between a blank template and generated document. |
| Timeliste → Faktura | Main example, instructions and four-category phone invoice preview | Workflow article should actually explain the supported conversion and review, then link to Faktura/product/help. |
| Free versus Premium | Main table/FAQ and explicit local instruction copy | Satellites/articles need a concise accurate statement where the user is making a tool choice. No full duplicated comparison table on every route. |

## 5. Blog audit

Approximate word counts below include editorial block text, headings, lists and link/CTA labels, excluding header/footer/related-card boilerplate. They describe the material, **not a ranking threshold or reason alone to delete content**.

| Article | Published / approximate words | Accuracy, freshness and usefulness | Linking / relationship / recommendation |
|---|---|---|---|
| `gratis-timeliste-mal` | 2025-07-23 / 247 | Most actionable existing download article: two files and field checklist. Autosave wording unverified. Age alone does not make it stale. | Direct pillar/app links and PDF downloads. Preserve working entry; emphasize how to choose/fill a template and limitations of manual use. Differentiate from PDF resource before considering consolidation. |
| `effektiv-timeliste` | 2025-04-24 / 177 | Good general habit list; no concrete dates/pause example or actual app method. | Links to weekly page/app and generated first-three guides. Add ordinary-day example, clear descriptions/break entry and instruction link; retain general-method intent. |
| `timeliste-for-handverkere` | 2026-02-10 / 143 | Newer date but still brief and repetitive. “Do not rely on memory” overlaps efficiency article. | Links to employee page/app; use trade-specific multi-task/extra/KM/customer-documentation scenario. Do not suggest employee accounts. |
| `timeliste-og-faktura` | 2026-02-15 / 119 | Relevant title and distinct question, but body never demonstrates the real conversion or four categories. | Body links to project page and app, not direct conversion instructions or Faktura product. Highest practical article-expansion opportunity. |
| `forskjell-faktura-tilbud-timeliste` | 2025-04-21 / 251 | Useful introductory comparison. Keep example timing nonabsolute and distinguish documentation from payment request. | Body links to instructions/app; generated pillars help. Add short contextual Timeliste/Faktura references, not another product landing or a repeated tutorial. |
| `gratis-fakturaprogram-handverkere` | 2025-04-22 / 212 | Invoice-focused; correctly mentions browser use on PC/mobile and a shared document tool. Competitor limitation language is generic and not evidence about named competing products. | Body links to Faktura; Timeliste appears in generated related guides. At most one relevant contextual Timeliste link; no need to retarget or duplicate it. |

All six use the shared blog renderer: plain textual content, Article JSON-LD with real `createdAt`/datePublished and no dateModified or embedded image support in BlogBlock. CTA blocks themselves are styled paragraphs, but each inspected article also has a real app link, so they are not falsely reported as missing all CTAs. Existing Article descriptions use the summary; SEO descriptions may differ but remain aligned.

Do not change publication dates just to look fresh. If a meaningful future revision adds an “updated” date/dateModified, it should reflect the actual revision. None of these articles has dedicated FAQ markup; that is not a defect requiring a copied FAQ on every article.

### Genuine informational gaps: enrich first

Add practical content inside the existing articles: one ordinary workday with pause/description, one tradesperson extra/KM scenario, one four-category conversion explanation and one manual-PDF filling/choice example. These answer distinct real questions. Only propose a new URL after confirming an unmet need, differentiated scope and available evidence; do not produce a series of thin “timeliste for X” variants or an unsupported overtime/Excel/native-app tool page.

## 6. Internal linking assessment

The rendered site graph confirms strong navigational linking among the five SEO pages, but weaker contextual product↔article↔task links.

- Main product has a five-page Timeliste cluster, related document pages, a Faktura link and instructions link; it does not contextually link a specific Timeliste article.
- Four satellites include all five cluster pills before the educational sections. RelatedSeoPages also adds up to three same-topic and six other-topic cards. This is not a broken link network, but a large navigation block can precede the page's own answer, especially on mobile.
- Every Timeliste-category article receives the **first three** Timeliste SEO entries in `RelatedGuides`: main, PDF and weekly. Array-order slicing omits employee/project pages from this generated module; two body links partially compensate. Do not confuse this with an orphaned page.
- Category `/blogg/kategori/timeliste` links to all four articles but no product page in its main content. Category chips provide discovery across all five categories.
- The workflow article's editorial link goes to `/timeliste-prosjekt`, while the most relevant next actions are the actual conversion instructions and Faktura product page. Keep a project link only where it explains that topic.

| Route | Current editorial or task link(s) | Generated/discovery behavior |
|---|---|---|
| `/blogg/gratis-timeliste-mal` | `/downloads/timeliste-mal-jobbleder.pdf` — Last ned tom timeliste-mal (PDF)<br>`https://laskowskicreative.no/api/jobbleder/user/documents/oneweek-timelist` — Last ned timeliste for siste uke (PDF)<br>`/timeliste-mal` — Se vår guide til timeliste mal<br>`https://app.jobbleder.no` — Opprett digital timeliste gratis | Main/PDF/week via RelatedGuides; three other Timeliste articles |
| `/blogg/gratis-fakturaprogram-handverkere` | `/fakturaprogram-gratis` — Les mer om vårt gratis fakturaprogram<br>`https://app.jobbleder.no` — Start gratis | Invoice guides plus Timeliste pillar and other pillars |
| `/blogg/effektiv-timeliste` | `/timeliste-uke` — Les mer om ukentlig timeliste<br>`https://app.jobbleder.no` — Opprett timeliste gratis | Main/PDF/week via RelatedGuides; three other Timeliste articles |
| `/blogg/forskjell-faktura-tilbud-timeliste` | `/instruksjoner` — Se instruksjoner for hvordan Jobbleder fungerer<br>`https://app.jobbleder.no` — Kom i gang gratis | Pillar links and same-topic/fallback article cards |
| `/blogg/timeliste-for-handverkere` | `/timeliste-ansatt` — Les mer om timeliste for ansatte<br>`https://app.jobbleder.no` — Opprett timeliste gratis | Main/PDF/week via RelatedGuides; three other Timeliste articles |
| `/blogg/timeliste-og-faktura` | `/timeliste-prosjekt` — Les mer om timeliste per prosjekt<br>`https://app.jobbleder.no` — Kom i gang gratis | Main/PDF/week via RelatedGuides; three other Timeliste articles |


Across the 45-route graph, distinct **other routes with a main-content link** to the five targets are: main **36**, PDF **22**, weekly **10**, employee **7**, project **7**. These are local graph counts excluding the target's own route and header/footer links, but including generated related modules. They are **not PageRank, backlinks from other domains, clicks or SEO authority measurements**. The employee/project pages are less systematically promoted, not unreachable.

### Proposed contextual journeys

| Starting intent | Helpful next step | Safeguard |
|---|---|---|
| Wants a blank PDF | Download first → filling guidance → optional digital product | Never force app signup to access the existing public PDF. |
| Wants weekly organization | Weekly method → record/import help → PDF choice | Distinguish chosen calendar dates from last-seven-days template. |
| Wants hours under a worker's name | Employee page → name/project example → manual/import instruction | No team-account/approval/payroll implication. |
| Wants project documentation | Project page → project/customer step → conversion guide | No automatic project profitability/reporting claim. |
| Wants to invoice recorded work | Workflow article → four-category example → conversion instruction / Faktura | Review rates and output; no automatic sending. |
| Browses education | Category → appropriate article → relevant product/task | Category remains a navigation resource rather than a competing pillar. |

Use descriptive labels such as “Importer registreringer til timeliste” and “Lag faktura fra timelisten”. Do not rewrite every navigation label to repeat an identical exact-match keyword. Preserve existing working URLs. New individual instruction fragments must not be published before the approved local hub is deployed and verified.

## 7. Authentic mobile marketing opportunities

Exact canonical source prefix: `public/images/product/mobile/source/`. Existing optimized derivatives are mapped in `content/instructionMobileMedia.json`. Reuse those derivatives/components in a later approved phase; do not move/rename originals or create synthetic interfaces. The sources depict an established responsive web application, not a newly launched mobile feature.

| Location | Suggested authentic source / role | Why distinct / limits |
|---|---|---|
| Main `/timeliste-mal#registreringer` | `registrations_selected_import_mobile.png` — show selection and actual Importer action | One focused mobile proof point, not phone images in every section. This is three selected rows, unlike the current two-row desktop example; keep examples/captions distinct. |
| `/timeliste-mal-pdf` | No phone interface required by default; use existing real PDF preview/link | Download task is better served by the actual document and clear HTML instructions. No supplied mobile PDF-viewer capture should be invented. |
| `/timeliste-uke` | `registrations_saved_mobile.png` — optional three-day example | Explain reviewing work dates; image has three days, not seven or an automatic calendar-week report. |
| `/timeliste-ansatt` | `timelist_import_result_mobile_01.png` — focus on Arbeider Demo and project | Explains entered worker name; no employee-login/permissions inference. The source also includes three imported records; label as an import example. |
| `/timeliste-prosjekt` | `timelist_invoice_regular_mobile_01.png` — saved Timeliste 265 identity/project/customer | Despite its filename, it is a Timeliste preview, not an invoice. An existing desktop project card at `public/images/product/timeliste/source/project_card_timelist_count_by_name.png` is another option; choose the more useful one, not both by default. |
| Efficiency article | `registration_form_mobile.png` — ordinary day, description, time and pause | Distinct from extra-work scenario; 19 November example, 08–16, pause 30. |
| Tradesperson article | `registration_extra_km_save_mobile.png` — extra task and KM | Different record: waste removal, 08–10, KM 50, Extra marked. Do not imply automatic overtime rates. |
| Timeliste/invoice article | `timelist_invoice_summary_mobile.png` — all four invoice categories | One complete category preview plus HTML explanation and link to detailed instructions. It is a document preview, not an exported PDF. |
| PDF blog, comparison/invoice bridge, categories | Usually no additional phone screenshot | Keep task/decision clarity; link to existing evidence rather than repeating galleries. |
| Instructions | Existing 20 integrated phone sources | Retain detailed help there; no need to duplicate that entire walkthrough in product/blog pages. |

Match state, IDs and caption claims before using picture-based substitutions. Phone Timeliste 265/Faktura 112 must not silently inherit the desktop 264/111 quantities/totals. Preserve the main page's existing complete PDF and four-category evidence. Full-size links must open the displayed original; use the shared opt-in original-link behavior or separate examples where compositions differ. Native dimensions, natural ratios, lazy loading and sensible gallery lengths remain preferable to fake device frames or shrinking a long portrait until text is unreadable.

## 8. UX, responsive layout, accessibility and shared design

### Executed findings

All 45 inventory responses were HTTP 200 locally, with one H1, self-referencing WWW canonical and no noindex meta. No horizontal overflow was observed across the **125 recorded cases**. This is not a blanket accessibility pass: the legacy templates have concrete contrast/semantic failures.

| Detailed route | 375px light: axe violations | 1440px dark: axe violations | Six-case horizontal overflow |
|---|---|---|---|
| `/timeliste-mal` | None detected | None detected | None |
| `/timeliste-mal-pdf` | color-contrast (13 nodes); landmark-unique (1 nodes) | color-contrast (1 nodes); landmark-unique (1 nodes) | None |
| `/timeliste-uke` | color-contrast (13 nodes); landmark-unique (1 nodes) | color-contrast (1 nodes); landmark-unique (1 nodes) | None |
| `/timeliste-ansatt` | color-contrast (13 nodes); landmark-unique (1 nodes) | color-contrast (1 nodes); landmark-unique (1 nodes) | None |
| `/timeliste-prosjekt` | color-contrast (13 nodes); landmark-unique (1 nodes) | color-contrast (1 nodes); landmark-unique (1 nodes) | None |
| `/blogg/gratis-timeliste-mal` | landmark-unique (1 nodes) | color-contrast (1 nodes); landmark-unique (1 nodes) | None |
| `/blogg/gratis-fakturaprogram-handverkere` | landmark-unique (1 nodes) | color-contrast (1 nodes); landmark-unique (1 nodes) | None |
| `/blogg/effektiv-timeliste` | landmark-unique (1 nodes) | color-contrast (1 nodes); landmark-unique (1 nodes) | None |
| `/blogg/forskjell-faktura-tilbud-timeliste` | landmark-unique (1 nodes) | color-contrast (1 nodes); landmark-unique (1 nodes) | None |
| `/blogg/timeliste-for-handverkere` | landmark-unique (1 nodes) | color-contrast (1 nodes); landmark-unique (1 nodes) | None |
| `/blogg/timeliste-og-faktura` | landmark-unique (1 nodes) | color-contrast (1 nodes); landmark-unique (1 nodes) | None |
| `/blogg/kategori/timeliste` | None detected | color-contrast (1 nodes) | None |
| `/blogg/kategori/oversikt` | None detected | color-contrast (1 nodes) | None |
| `/blogg/kategori/faktura` | None detected | color-contrast (1 nodes) | None |
| `/blogg` | None detected | color-contrast (1 nodes) | None |
| `/instruksjoner` | None detected | None detected | None |


The four satellites' H1/H2 are styled `text-white` on the light body background; computed H1 foreground/background are both rgb(255,255,255): **1:1 contrast**. Intro/body `text-gray-300` gives approximately **1.47:1** on white. Screenshot inspection of the 375px PDF page confirms the missing-looking headings and faint paragraphs. Similar source/template behavior applies to all four and was measured in every tested light width. In dark preference, body copy improves, but shared footer text is approximately **4.09:1**, below the 4.5:1 target for its small normal text.

Legacy Navbar and Breadcrumbs/blog breadcrumb navigation are unnamed, producing axe `landmark-unique` failures on the four satellites and six articles. The category/index pages do not have that second breadcrumb nav, so they do not show the same duplicate-landmark failure. Main product and modern instruction surfaces did not produce automated violations in the scoped cases. The instruction check here was a hub/template check; its expanded matrix and original-image tests remain documented in Phase 5.2B.3 and are not falsely claimed rerun for all panels in this audit.

Legacy FAQ buttons open with Enter and close with Space; native keyboard focus was visible (`outline: auto`, 1px). However, they expose neither `aria-expanded` nor `aria-controls`, and plus/minus text is included in the button name. The expanded-state defect is a manual source/browser finding, even though axe did not flag a separate accordion rule. Reuse native details/summary as on product pages or correctly implement the existing accordion semantics after approval. FAQ answers and FAQPage JSON-LD come from the same array, avoiding separate-copy drift; no promise of Google rich-result appearance follows from that.

No new full keyboard, screen-reader, reduced-motion or Lighthouse release audit is claimed for every ecosystem page. The browser preference was reduced during these inspections; motion behavior was not comprehensively asserted. Legacy Navbar has its own menu animation, so a shared-header update should explicitly retest that behavior. The main product and local instruction release checks already have more detailed accessibility evidence.

### Recommended shared patterns without identical layouts

| Page family | Reuse | Preserve its distinct job |
|---|---|---|
| Main product | SiteChrome, typography/spacing tokens, ProductMedia, accurate comparison and native FAQ | Product narrative with real interface/PDF evidence; do not replace its ten-section story with a generic article. |
| PDF specialist | Same type/color/focus system; concise download module and real document access | Download/choice first; explanatory content second. No giant product hero or repeated full feature comparison. |
| Weekly/employee/project | Consistent section/container/CTA styles and one appropriate worked example | Each solves its own task, with brief app method and links to detailed help. |
| Blogs | Editorial reading width, heading rhythm, accessible links, contextual media and relevant end CTA | Practical educational article, not a second product landing. |
| Categories/index | Accessible cards/category navigation and a short useful intro | Resource discovery, not a repeated sales pitch. |
| Instructions | Existing native expandable steps, task anchors and authentic examples | Operational reference; preserve detail rather than copying it into every route. |

The contrast defect belongs to the generic renderer/legacy styles, not just one sentence. A shared fix may affect **13 legacy SEO routes** (17 SEO records minus four dedicated product pages), and shared Navbar/Footer changes affect blogs/categories too. Either scope an opt-in Timeliste treatment or explicitly authorize and regression-test the wider component impact; do not silently redesign unrelated pages.

BlogBlock currently has no image/media variant. Adding the recommended authentic article media therefore needs an explicitly approved, typed renderer/data extension, reusing ProductMedia rather than pasting a synthetic interface or arbitrary HTML. Regression-test existing articles when adding that capability; the audit does not assume screenshots can already be inserted through current blog data.

## 9. Google Search Console data requirements — owner action

**No identifiable verified GSC performance export was found.** Checked repository filenames including hidden/nonignored and ignored candidate export formats while excluding `.git`, dependency/build trees and image assets; no CSV/TSV/XLSX/ZIP or identifiable GSC/Search Console export was located. Existing audit reports/analytics code are not Search Console performance data. No authenticated GSC property was accessed.

**Owner: please provide a Search Console Performance / Search results export for the last three available months**, with exact date range, property and filters recorded. A ZIP of the CSV exports is suitable. Do not send passwords, cookies or API credentials.

Prioritize:

1. **Page-level:** URL, clicks, impressions, CTR and average position for all five Timeliste landing pages, four Timeliste articles, category and relevant instruction/PDF rows where present.
2. **Query-level:** query, clicks, impressions, CTR and average position for the same property/period. Include queries containing timeliste/timeføring/timeregistrering and related observed variants, not only an assumed keyword list.
3. **Actual query→page relationships:** page-filtered Queries exports for each of the five landing pages and four core articles, or a verified equivalent dataset with page and query on each row. Separate overall Pages and Queries tables cannot establish which URL ranks for which query.
4. **Device/country/date context:** mobile versus desktop, Norway versus other markets where available, and daily/weekly dates sufficient to identify persistent URL changes rather than one snapshot. Start with one consistent Web-search view; document any search-type/country/device filters.
5. **Comparison if available:** preceding three months and/or the equivalent prior-year period; record deployments or material content changes. Do not treat seasonal differences as proof of cannibalization.
6. **Indexing/canonical evidence if available:** URL Inspection or Page indexing exports for the suspected overlapping routes and the static PDF, including Google-selected versus declared canonical. This is optional supporting evidence, not permission to change canonicals.

Preserve export filters/row limits and distinguish missing/withheld query rows from zero demand. Do not sum CTR/average-position percentages across rows or fabricate page/query pairs from separate totals. The external generated PDF belongs to another host; request its data only if the owner has that property's verified access. Jobbleder property data alone cannot establish its search performance.

Use the exports to test PDF-triad query ownership, overlap between habit articles, employee-query intent mismatch, device-specific opportunity and actual changes of landing URL. Until then, title-target reassignment, consolidation, canonical/noindex/redirect changes and numerical traffic forecasts remain **GSC-dependent and not approved**.

## 10. Prioritized recommendation matrix

Priority follows the requested taxonomy: **P1 incorrect/misleading content; P2 significant UX/content gaps; P3 optional marketing polish.** Accessibility items can be urgent within P2 and should be addressed alongside the first accuracy fixes. Effort is relative implementation effort, not a time quote.

| Route / scope | Current issue | Evidence | Proposed improvement | User benefit | SEO risk | Priority | Effort |
|---|---|---|---|---|---|---|---|
| PDF blog | Unverified autosave promise | Exact “lagre alt automatisk” block | Correct that claim and describe actual save/review action | Accurate expectation, less lost-work risk | Low; keep URL/title/downloads | P1 | Small |
| Employee page | Can imply staff self-service | Employee-registering paragraph versus entered Arbeider evidence | Clarify operator-entered worker name; no account/role/payroll promise | Right users understand the product | Low if employee intent/metadata retained | P1 | Small |
| Four specialized pages | White-on-white headings / faint text | Computed 1:1 and 1.47:1; screenshots/axe | Scoped light/dark text tokens and visible hierarchy | Page becomes usable/readable | Low for styling; shared-component blast radius needs tests | P2, first UX fix | Small–medium |
| Legacy FAQ/breadcrumb/header/footer | Missing state and landmark names; dark contrast | Keyboard/source and axe | Native or semantic accordion, descriptive nav names, contrasting footer | Accessible controls/orientation | Low; regression-test all affected templates | P2 | Medium |
| `/timeliste-mal-pdf` | Resource promise diluted by generic selling | Same downloads as pillar/blog; no filling/choice walkthrough | Download-first choice, manual use guidance and optional digital route | Quickly obtains correct template | Low for body/CTA changes; title ownership needs GSC | P2 | Medium |
| `/timeliste-uke` | No actual weekly method/download choice | Three generic sections, no download module | Explain recording dates/selecting days/review; link existing templates accurately | Completes weekly task without invented weekly UI | Low if URL/metadata preserved | P2 | Medium |
| `/timeliste-prosjekt` | Generic benefits only | No project selection or conversion instruction link | Project/customer/name example and relevant task link | Clear project-specific next action | Low | P2 | Medium |
| Timeliste/invoice article | Does not answer practical conversion question | Four-category feature absent from body; only project link | Explain real conversion, review and four categories; contextual Faktura/help links | Understands supported work-to-payment workflow | Low; keep informational focus | P2 | Medium |
| Efficiency + craft articles | Repeated habits, few usable examples | 177/143 editorial words and benefit lists | General method versus craft scenario, one distinct example each | Useful advice without duplication | Low for differentiated body enrichment; structural merge requires GSC | P2 | Medium |
| Timeliste category | Only cards, no product bridge | Four article links, no main-product link | Short curated task introduction and one product/help link | Finds the appropriate next step | Low | P2 | Small |
| Related modules / cluster | Array-order links and excessive early navigation | first-three slicing; cluster precedes content | Topic/task-specific contextual linking and concise module placement | Relevance and easier scanning | Low–medium because shared modules affect other topics | P2 | Medium |
| Main product | Old visible “arbeidsøkter” help label | Current link text and preserved `#arbeidsokter` | Change label to Registreringer only, retain working href | Matches real app label | Very low | P2 | Small |
| Shared WebSite schema | SearchAction not backed by blog query filtering | layout action + index ignoring params | Verify/correct unsupported action with explicit shared-SEO approval | Truthful structured data | Low–medium; do not introduce a new search feature | P2 | Small after approval |
| Main product + selected editorial contexts | Authentic mobile proof is underused outside help | Desktop crops versus approved phone captures | Limited, state-accurate media allocation in §7 | Demonstrates current mobile use | Low if captions/IDs remain accurate | P3 | Medium |
| Blog index | Duplicate brand suffix | Rendered title ends `Jobbleder \| Jobbleder` | Targeted title-template cleanup if metadata scope approved | Cleaner search/browser presentation | Low; no intent/URL change | P3 | Small |
| Main/PDF/blog PDF triad | Potential intent overlap | Shared download paths, related titles/content | Collect paired GSC data, differentiate first; decide structural action only from evidence | Preserves useful entry points and avoids blind SEO disruption | High if consolidated without evidence | P2 investigation | Medium; data-dependent |

### Safe quick wins versus data-dependent work

**Safe after implementation approval:** correct unsupported autosave wording; clarify worker-name semantics; repair route-scoped contrast; expose FAQ state; label nav landmarks; update visible Registreringer link text without changing href; add small truthful guidance around actual save/import/Free behavior. Preserve URLs, metadata, downloads and accurate FAQs. These do not require inventing search demand.

**Needs GSC evidence and/or separate shared scope:** retire/merge pages; redirect or canonical/noindex changes; assign a different page as the primary owner of download queries; retarget titles/descriptions; create new keyword routes; change shared global schema or broad related-link algorithms. A duplicate-brand bug is a targeted metadata defect, not justification to rewrite all titles.

## 11. Proposed implementation phases

1. **Correctness and readable foundations.** Fix the two P1 content issues and high-impact P2 contrast/FAQ/navigation defects in a narrowly approved scope. Preserve existing metadata, WWW canonicals, URLs and download destinations. If using shared renderer/header/footer, enumerate and test all affected routes first.
2. **Differentiate four specialist pages.** PDF = obtain/choose/use template; weekly = review chosen work dates; employee = entered worker name; project = organized project/customer documentation. Reuse design tokens/components, not identical page architectures. Add only useful evidence and contextual links; keep the main product narrative intact.
3. **Refresh existing educational articles.** Start with `timeliste-og-faktura`, then PDF-blog accuracy/utility and differentiated daily-method/craft scenarios. Use the existing phone allocation; no mass content production. Keep publication history truthful.
4. **Connect discovery and task completion.** Improve category introduction and selective contextual links. Publish new instruction-fragment links only after Phase 5.2 hub deployment is verified; retain the historical anchor meanwhile. Coordinate any shared module changes with invoice/offer/contract regression coverage.
5. **GSC-led SEO decisions.** Review exported query/page/device/date evidence and outcome of earlier low-risk fixes. Only then propose metadata retargeting, consolidation, redirects/canonicals or a genuinely missing new article, with a separate concrete approval request.

No implementation phase starts from this audit. Recommended first approval: the focused correctness/readability scope, plus provision of the GSC export in parallel.

## 12. Risks, safeguards, validation and audit-only scope

- Preserve the distinct download, product, weekly, worker-name, project, educational and help intents. Keyword overlap is not ranking-loss evidence.
- Preserve `https://www.jobbleder.no` canonicals and existing sitemap behavior. All 45 rendered inventory routes currently have matching self-canonicals, one H1 and no noindex meta. Seven sampled production routes corroborate their expected status/title/H1/canonical/schema; no full production responsive/a11y matrix is claimed.
- Do not silently change direct PDF downloads, remove no-login access or depend on new app signup routes. Both downloads are currently working; a previous timeout is not carried forward as a current failure. This audit verified transport/type/signature, not PDF form fields, accessibility or exact date calculation.
- Do not claim backend functionality from a screenshot filename. No employee roles, automatic payroll, accounting integration, native app, offline sync, auto-sending or automatic legal overtime calculation has been established.
- Reuse actual phone source paths and keep originals unchanged. Distinguish ordinary/extra classifications, imported counts and example IDs. A selected-list capture is not a generated PDF or a different conversion state.
- Shared components create a wider regression surface. A targeted Timeliste improvement must not unexpectedly restyle unrelated SEO/blog pages or change the deployed product pages.
- No production Search Console, ranking, traffic or conversion dataset was available; no forecast was fabricated. Personal mobile usage is not platform-wide usage data.
- No TypeScript/ESLint/build or Lighthouse rerun was necessary for this report-only content audit, and none is claimed. It used the already-validated unchanged local production build. Browser tests are the scope described above, not authenticated workflow tests or a release certification.

Only repository file created by this audit: `docs/phase-5.3a-timeliste-content-ecosystem-audit.md`. SHA-256 comparison confirmed **all 285 pre-existing repository files remained byte-identical**; only this report was added. No application content, metadata, links, screenshots or existing report was changed by the audit. `git diff --check` passed.

**Concurrent Git activity:** HEAD changed from `b508d0e80b1ddf0d525e76e8c0e1869cfaa55752` to `fc9621b9cd54fb5bb68169f3d0ac5c8f7df30c8d` while the audit ran. The observed commit is `feat: modernize instructions with authentic mobile screenshots`, timestamp 2026-11-19T13:15:39+01:00. No Git-writing command was issued by this audit; the commit originated outside its actions. It tracks previously existing work without changing the file bytes audited here. There were no staged differences at either snapshot, but tracking status changed with that external commit; an unchanged staging-diff list is not an unchanged index file. At final status, only this new audit report was untracked. Push/deployment status of the external commit was not investigated or assumed. This audit itself did not stage, commit, push or deploy.

Investigation artifacts are outside the application repository at `C:/Users/ddlas/.codex/visualizations/2026/11/18/01a1eebb-5858-7be1-82b1-491fd2f27970/phase53a/`: parsed source inventory, rendered `browser.json` and selected light/dark screenshots. The browser run preserved completed cases when its background-network wait was shortened and resumed missing cases; no earlier completed observations were discarded or falsely called new passes.

## 13. Exact metadata and rendered heading appendix

These are actual local rendered values for the 16 detailed routes, including generated related-card headings, not assumptions based only on the base SEO data. Each has one H1, no noindex meta and a WWW self-canonical. All carry global Organization/WebSite JSON-LD; route-specific types/counts are listed. The WebSite SearchAction accuracy concern is in §4.

### `/timeliste-mal`

- **Title:** Timeliste mal – gratis og enkel timeliste (PDF / nett) | Jobbleder
- **Meta description:** Gratis timeliste mal for håndverkere og små bedrifter. Lag timeliste raskt, last ned som PDF og få full oversikt.
- **Canonical:** `https://www.jobbleder.no/timeliste-mal`
- **Specific schema / FAQ:** FAQPage (8 questions)
- **Main-content images:** 6 figure images.

**Rendered H1–H3 (including resource/card headings):**

- H1: Timeliste mal (gratis).Fra arbeidstimer til ferdig faktura.
- H2: Vil du føre timene manuelt?
- H2: Fra registrert arbeid til en samlet timeliste.
- H2: Timer og kilometer. Hver for seg.
- H2: En ferdig timeliste som PDF.
- H2: Gjør timelisten om til faktura.
- H2: Gratis timelister. Mer kontroll med Premium.
- H2: Velg timelisten som passer arbeidet.
- H3: Hva er en timeliste?
- H3: Når bør du bruke en timeliste?
- H3: Fordeler med digital timeliste
- H3: PDF eller nettbasert timeliste?
- H3: Mer om timelister
- H2: Spørsmål om timelister?
- H3: Flere maler og dokumenter
- H2: Samle arbeidet i en timeliste.

**Current FAQ questions:**

- Er timeliste-malen gratis? — Ja, du kan bruke Jobbleder gratis.
- Kan jeg laste ned timelisten som PDF? — Ja, du kan laste ned og dele PDF.
- Passer dette for håndverkere? — Ja, Jobbleder er laget for håndverkere i Norge.
- Kan jeg lage faktura fra en timeliste? — Ja. Du kan bruke timelisten som grunnlag for en faktura. Vanlige timer, ekstra timer, vanlige kilometer og ekstra kilometer overføres til separate fakturalinjer. Kontroller opplysningene før du oppretter fakturaen.
- Kan jeg føre vanlige timer og ekstra timer hver for seg? — Ja. Du kan markere ekstraarbeid i registreringene og i timelisten. Vanlige timer og ekstra timer holdes adskilt. Dette er ikke automatisk beregning av overtid.
- Kan jeg ta med kilometer? — Ja. Du kan registrere vanlige kilometer og ekstra kilometer. Kategoriene holdes adskilt når du lager faktura fra timelisten.
- Kan jeg lage timeliste uten å importere registreringer? — Ja. Du kan opprette en timeliste direkte og legge inn arbeidsdagene selv. Velg prosjekt, knytt til kunde ved behov og skriv inn navnet på arbeideren.
- Hvilke timelistefunksjoner er med i Free? — Arbeidsregistreringer, manuell oppretting, import til timeliste, timer og kilometer, PDF-eksport og konvertering til faktura er tilgjengelig i Free. Free-dokumenter har Jobbleder-merking. Med Premium kan du fjerne Jobbleder-merkingen og bruke egen firmalogo.

### `/timeliste-mal-pdf`

- **Title:** Timeliste mal PDF – gratis timeliste for håndverkere | Jobbleder
- **Meta description:** Gratis timeliste mal PDF for håndverkere og små bedrifter. Før timer enkelt og last ned timelisten som PDF.
- **Canonical:** `https://www.jobbleder.no/timeliste-mal-pdf`
- **Specific schema / FAQ:** FAQPage (3 questions)
- **Main-content images:** 0 figure images.

**Rendered H1–H3 (including resource/card headings):**

- H1: Timeliste mal PDF
- H2: Last ned timeliste PDF
- H2: Relaterte sider om timeliste
- H2: Hva er en timeliste mal PDF?
- H2: Hvem passer en PDF-timeliste for?
- H2: Fordeler med å laste ned timeliste som PDF
- H2: Ofte stilte spørsmål
- H2: Relaterte sider

**Current FAQ questions:**

- Kan jeg laste ned timelisten som PDF? — Ja, du kan laste ned timelisten som PDF direkte i Jobbleder.
- Er timeliste mal PDF gratis? — Ja, Jobbleder kan brukes gratis.
- Må jeg installere noe? — Nei, alt fungerer direkte i nettleseren.

### `/timeliste-uke`

- **Title:** Timeliste uke – få oversikt over arbeidstid per uke | Jobbleder
- **Meta description:** Lag ukentlig timeliste for ansatte, prosjekter eller egne oppdrag. Enkel oversikt og PDF-nedlasting.
- **Canonical:** `https://www.jobbleder.no/timeliste-uke`
- **Specific schema / FAQ:** FAQPage (3 questions)
- **Main-content images:** 0 figure images.

**Rendered H1–H3 (including resource/card headings):**

- H1: Timeliste uke
- H2: Relaterte sider om timeliste
- H2: Hvorfor bruke ukentlig timeliste?
- H2: Timeliste uke for prosjekter og kunder
- H2: Fordeler med digital ukentlig timeliste
- H2: Ofte stilte spørsmål
- H2: Relaterte sider

**Current FAQ questions:**

- Kan jeg føre timer per uke? — Ja, Jobbleder gjør det enkelt å registrere og samle timer uke for uke.
- Kan jeg bruke ukentlig timeliste for prosjekter? — Ja, du kan bruke løsningen for både prosjekter og kunder.
- Kan timelisten lastes ned? — Ja, du kan laste ned timelisten som PDF.

### `/timeliste-ansatt`

- **Title:** Timeliste ansatt – enkel registrering av arbeidstid | Jobbleder
- **Meta description:** Før timeliste for ansatte på en enkel måte. Perfekt for små bedrifter og håndverkere som trenger oversikt over arbeidstid.
- **Canonical:** `https://www.jobbleder.no/timeliste-ansatt`
- **Specific schema / FAQ:** FAQPage (3 questions)
- **Main-content images:** 0 figure images.

**Rendered H1–H3 (including resource/card headings):**

- H1: Timeliste ansatt
- H2: Relaterte sider om timeliste
- H2: Hvorfor føre timeliste for ansatte?
- H2: Bedre kontroll over arbeidstid
- H2: Digital løsning i stedet for papir
- H2: Ofte stilte spørsmål
- H2: Relaterte sider

**Current FAQ questions:**

- Kan jeg bruke Jobbleder for ansatte? — Ja, Jobbleder passer godt for små bedrifter som vil føre timer for ansatte.
- Er det enkelt å holde oversikt over arbeidstid? — Ja, løsningen er laget for å være rask og enkel i bruk.
- Kan ansatte sine timer lagres som PDF? — Ja, du kan laste ned timelister som PDF.

### `/timeliste-prosjekt`

- **Title:** Timeliste prosjekt – før timer per prosjekt og kunde | Jobbleder
- **Meta description:** Lag timeliste per prosjekt og få bedre oversikt over arbeidstid, kunder og oppdrag. Last ned som PDF.
- **Canonical:** `https://www.jobbleder.no/timeliste-prosjekt`
- **Specific schema / FAQ:** FAQPage (3 questions)
- **Main-content images:** 0 figure images.

**Rendered H1–H3 (including resource/card headings):**

- H1: Timeliste prosjekt
- H2: Relaterte sider om timeliste
- H2: Hvorfor føre timer per prosjekt?
- H2: Timeliste prosjekt gir bedre fakturagrunnlag
- H2: Passer godt for håndverkere og små bedrifter
- H2: Ofte stilte spørsmål
- H2: Relaterte sider

**Current FAQ questions:**

- Kan jeg føre timer per prosjekt? — Ja, Jobbleder gjør det enkelt å registrere arbeidstid per prosjekt.
- Kan prosjekt-timelister brukes til faktura? — Ja, timelister kan brukes som grunnlag for videre dokumentarbeid.
- Passer dette for håndverkere? — Ja, løsningen er laget med håndverkere og små bedrifter i tankene.

### `/blogg/gratis-timeliste-mal`

- **Title:** Gratis timeliste mal (PDF) – last ned uten innlogging | Jobbleder
- **Meta description:** Last ned gratis timeliste mal PDF uten innlogging. Velg mellom tom timeliste og ferdig datert timeliste for siste uke.
- **Canonical:** `https://www.jobbleder.no/blogg/gratis-timeliste-mal`
- **Specific schema / FAQ:** Article
- **Main-content images:** 0 figure images.

**Rendered H1–H3 (including resource/card headings):**

- H1: Timeliste mal (PDF) – gratis nedlasting uten innlogging
- H2: Last ned timeliste mal PDF gratis
- H2: Hva inneholder en god timeliste?
- H2: Slik bruker du timeliste-malen
- H2: PDF eller digital timeliste?
- H2: Relaterte guider
- H3: Timeliste mal (gratis)
- H3: Timeliste mal PDF
- H3: Timeliste uke
- H3: Tilbud mal (gratis)
- H3: Fakturaprogram gratis
- H3: Kontrakt mal (gratis)
- H2: Relaterte artikler
- H3: Hvordan føre timelister effektivt – spesielt for selvstendig næringsdrivende
- H3: Timeliste for håndverkere – hvorfor gode rutiner sparer deg for tid
- H3: Timeliste og faktura – hvordan henger de sammen?

### `/blogg/gratis-fakturaprogram-handverkere`

- **Title:** Gratis fakturaprogram for håndverkere – enkelt og nettbasert | Jobbleder
- **Meta description:** Opprett faktura raskt med et gratis fakturaprogram for håndverkere. Enkel løsning direkte i nettleseren.
- **Canonical:** `https://www.jobbleder.no/blogg/gratis-fakturaprogram-handverkere`
- **Specific schema / FAQ:** Article
- **Main-content images:** 0 figure images.

**Rendered H1–H3 (including resource/card headings):**

- H1: Gratis fakturaprogram for håndverkere – her er et enkelt alternativ
- H2: Hva betyr egentlig gratis fakturaprogram?
- H2: Et enklere alternativ for håndverkere
- H2: Hvorfor velge en nettbasert løsning?
- H2: Relaterte guider
- H3: Fakturaprogram gratis
- H3: Lage faktura
- H3: Faktura eksempel
- H3: Timeliste mal (gratis)
- H3: Tilbud mal (gratis)
- H3: Kontrakt mal (gratis)
- H2: Relaterte artikler
- H3: Hva skal en faktura inneholde?
- H3: Hvordan lage en faktura gratis på nett?
- H3: Faktura eksempel for små bedrifter – hva bør det vise?

### `/blogg/effektiv-timeliste`

- **Title:** Hvordan føre timelister effektivt | Jobbleder
- **Meta description:** Lær hvordan du fører timelister effektivt og hva en god timeliste bør inneholde for bedre oversikt og dokumentasjon.
- **Canonical:** `https://www.jobbleder.no/blogg/effektiv-timeliste`
- **Specific schema / FAQ:** Article
- **Main-content images:** 0 figure images.

**Rendered H1–H3 (including resource/card headings):**

- H1: Hvordan føre timelister effektivt – spesielt for selvstendig næringsdrivende
- H2: Hva bør en god timeliste inneholde?
- H2: Vanlige feil ved timeføring
- H2: Hvorfor er digital timeføring enklere?
- H2: Relaterte guider
- H3: Timeliste mal (gratis)
- H3: Timeliste mal PDF
- H3: Timeliste uke
- H3: Tilbud mal (gratis)
- H3: Fakturaprogram gratis
- H3: Kontrakt mal (gratis)
- H2: Relaterte artikler
- H3: Timeliste mal (PDF) – gratis nedlasting uten innlogging
- H3: Timeliste for håndverkere – hvorfor gode rutiner sparer deg for tid
- H3: Timeliste og faktura – hvordan henger de sammen?

### `/blogg/forskjell-faktura-tilbud-timeliste`

- **Title:** Forskjellen på faktura, tilbud og timeliste | Jobbleder
- **Meta description:** Her er en enkel forklaring på forskjellen mellom faktura, tilbud og timeliste – og når du bør bruke dem.
- **Canonical:** `https://www.jobbleder.no/blogg/forskjell-faktura-tilbud-timeliste`
- **Specific schema / FAQ:** Article
- **Main-content images:** 0 figure images.

**Rendered H1–H3 (including resource/card headings):**

- H1: Faktura, timeliste og tilbud – hva er forskjellen og når bruker du dem?
- H2: Hva er et tilbud?
- H2: Hva er en timeliste?
- H2: Hva er en faktura?
- H2: Hvordan henger de sammen?
- H2: Relaterte guider
- H3: Timeliste mal (gratis)
- H3: Tilbud mal (gratis)
- H3: Fakturaprogram gratis
- H3: Kontrakt mal (gratis)
- H2: Relaterte artikler
- H3: Fra tilbud til kontrakt og faktura – slik fungerer det
- H3: Timeliste mal (PDF) – gratis nedlasting uten innlogging
- H3: Gratis fakturaprogram for håndverkere – her er et enkelt alternativ

### `/blogg/timeliste-for-handverkere`

- **Title:** Timeliste for håndverkere – hvorfor gode rutiner er viktige | Jobbleder
- **Meta description:** Slik bruker håndverkere timelister for bedre oversikt, dokumentasjon og enklere arbeidshverdag.
- **Canonical:** `https://www.jobbleder.no/blogg/timeliste-for-handverkere`
- **Specific schema / FAQ:** Article
- **Main-content images:** 0 figure images.

**Rendered H1–H3 (including resource/card headings):**

- H1: Timeliste for håndverkere – hvorfor gode rutiner sparer deg for tid
- H2: Hvorfor timelister er nyttige i praksis
- H2: Den vanligste feilen
- H2: Relaterte guider
- H3: Timeliste mal (gratis)
- H3: Timeliste mal PDF
- H3: Timeliste uke
- H3: Tilbud mal (gratis)
- H3: Fakturaprogram gratis
- H3: Kontrakt mal (gratis)
- H2: Relaterte artikler
- H3: Timeliste mal (PDF) – gratis nedlasting uten innlogging
- H3: Hvordan føre timelister effektivt – spesielt for selvstendig næringsdrivende
- H3: Timeliste og faktura – hvordan henger de sammen?

### `/blogg/timeliste-og-faktura`

- **Title:** Timeliste og faktura – slik henger de sammen | Jobbleder
- **Meta description:** Slik bruker du timeliste som grunnlag for tydeligere og enklere fakturaarbeid.
- **Canonical:** `https://www.jobbleder.no/blogg/timeliste-og-faktura`
- **Specific schema / FAQ:** Article
- **Main-content images:** 0 figure images.

**Rendered H1–H3 (including resource/card headings):**

- H1: Timeliste og faktura – hvordan henger de sammen?
- H2: Hvorfor god timeføring hjelper senere
- H2: Hva bør stå i timelisten?
- H2: Relaterte guider
- H3: Timeliste mal (gratis)
- H3: Timeliste mal PDF
- H3: Timeliste uke
- H3: Tilbud mal (gratis)
- H3: Fakturaprogram gratis
- H3: Kontrakt mal (gratis)
- H2: Relaterte artikler
- H3: Timeliste mal (PDF) – gratis nedlasting uten innlogging
- H3: Hvordan føre timelister effektivt – spesielt for selvstendig næringsdrivende
- H3: Timeliste for håndverkere – hvorfor gode rutiner sparer deg for tid

### `/blogg/kategori/timeliste`

- **Title:** Timeliste | Blogg | Jobbleder
- **Meta description:** Artikler og guider om timeliste for brukere av Jobbleder.
- **Canonical:** `https://www.jobbleder.no/blogg/kategori/timeliste`
- **Specific schema / FAQ:** None beyond global types
- **Main-content images:** 0 figure images.

**Rendered H1–H3 (including resource/card headings):**

- H1: Timeliste
- H2: Timeliste og faktura – hvordan henger de sammen?
- H2: Timeliste for håndverkere – hvorfor gode rutiner sparer deg for tid
- H2: Timeliste mal (PDF) – gratis nedlasting uten innlogging
- H2: Hvordan føre timelister effektivt – spesielt for selvstendig næringsdrivende

### `/blogg/kategori/oversikt`

- **Title:** Oversikt | Blogg | Jobbleder
- **Meta description:** Artikler og guider om oversikt for brukere av Jobbleder.
- **Canonical:** `https://www.jobbleder.no/blogg/kategori/oversikt`
- **Specific schema / FAQ:** None beyond global types
- **Main-content images:** 0 figure images.

**Rendered H1–H3 (including resource/card headings):**

- H1: Oversikt
- H2: Fra tilbud til kontrakt og faktura – slik fungerer det
- H2: Faktura, timeliste og tilbud – hva er forskjellen og når bruker du dem?

### `/blogg/kategori/faktura`

- **Title:** Faktura | Blogg | Jobbleder
- **Meta description:** Artikler og guider om faktura for brukere av Jobbleder.
- **Canonical:** `https://www.jobbleder.no/blogg/kategori/faktura`
- **Specific schema / FAQ:** None beyond global types
- **Main-content images:** 0 figure images.

**Rendered H1–H3 (including resource/card headings):**

- H1: Faktura
- H2: Når bør du sende faktura for å få raskere betaling?
- H2: Faktura eksempel for små bedrifter – hva bør det vise?
- H2: Hvordan lage en faktura gratis på nett?
- H2: Hva skal en faktura inneholde?
- H2: Gratis fakturaprogram for håndverkere – her er et enkelt alternativ

### `/blogg`

- **Title:** Blogg om faktura, tilbud, timelister og kontrakter | Jobbleder | Jobbleder
- **Meta description:** Artikler og guider om faktura, tilbud, timelister og kontrakter for håndverkere og små bedrifter i Norge.
- **Canonical:** `https://www.jobbleder.no/blogg`
- **Specific schema / FAQ:** None beyond global types
- **Main-content images:** 0 figure images.

**Rendered H1–H3 (including resource/card headings):**

- H1: Blogg
- H2: Tilbud vs kontrakt – hva er forskjellen?
- H2: Når trenger du kontrakt som håndverker?
- H2: Fra tilbud til kontrakt og faktura – slik fungerer det
- H2: Tilbud eller pristilbud – hva forventer kunden egentlig?
- H2: Når bør du sende faktura for å få raskere betaling?
- H2: Faktura eksempel for små bedrifter – hva bør det vise?
- H2: Timeliste og faktura – hvordan henger de sammen?
- H2: Timeliste for håndverkere – hvorfor gode rutiner sparer deg for tid
- H2: Timeliste mal (PDF) – gratis nedlasting uten innlogging
- H2: Hvordan lage en faktura gratis på nett?
- H2: Hva er et tilbudsdokument og hvordan lager du ett?
- H2: Topp 5 feil å unngå når du sender tilbud
- H2: Hvordan føre timelister effektivt – spesielt for selvstendig næringsdrivende
- H2: Hva skal en faktura inneholde?
- H2: Hvordan følge opp et sendt tilbud og lande flere jobber
- H2: Gratis fakturaprogram for håndverkere – her er et enkelt alternativ
- H2: Faktura, timeliste og tilbud – hva er forskjellen og når bruker du dem?
- H2: Hvordan lage et profesjonelt tilbud i byggebransjen

### `/instruksjoner`

- **Title:** Instruksjoner for Jobbleder | Jobbleder
- **Meta description:** Lær hvordan du bruker Jobbleder til å opprette faktura, tilbud, timelister og kontrakter, registrere arbeidsøkter og holde oversikt over prosjekter, kunder og rapporter.
- **Canonical:** `https://www.jobbleder.no/instruksjoner`
- **Specific schema / FAQ:** None beyond global types
- **Main-content images:** 49 figure images in DOM, initially collapsed.

**Rendered H1–H3 (including resource/card headings):**

- H1: Instruksjonerfor Jobbleder.
- H2: Ta opplysningene videre.
- H2: Oversikt og navigasjon
- H3: Appens hovedvisning
- H3: Hovedmenyoversikt
- H2: Opprett dokumenter
- H3: Opprett en faktura
- H3: Opprett en timeliste
- H3: Opprett et tilbud
- H3: Opprett en kontrakt
- H3: Opprett en kreditnota
- H2: Dokumenter og videre arbeid
- H3: Dokumentoversikt
- H3: Kopier et dokument
- H3: Opprett faktura fra dokument
- H3: Opprett kontrakt fra tilbud
- H3: Rette en faktura
- H2: Registreringer
- H3: Slik fungerer Registreringer
- H3: Legg til en registrering
- H3: Importer registreringer til timeliste
- H2: Prosjekter og kunder
- H3: Hvordan Prosjekter fungerer
- H3: Opprett et prosjekt
- H3: Hvordan Kunder fungerer
- H3: Opprett en kunde
- H2: Rapporter
- H3: Hvordan Rapporter fungerer
- H3: Månedlig salg
- H3: Månedlige arbeidstimer
- H2: Innstillinger
- H3: Hvordan Innstillinger fungerer
- H3: Firma og fakturadetaljer
- H3: Standardverdier for dokumenter
- H3: Profil og grensesnitt
- H2: Premium og logo
- H3: Premium og branding
- H3: Last opp eller bytt logo
- H3: Velg og bestill Premium
- H2: Vil du lese mer?
- H3: timeliste
- H3: faktura
- H3: tilbud
- H3: kontrakt
- H2: Prøv stegene i Jobbleder.



**Recommendation: approve a focused correctness/readability implementation phase and provide the last-three-months GSC exports before structural SEO decisions. No implementation is performed by this audit.**
