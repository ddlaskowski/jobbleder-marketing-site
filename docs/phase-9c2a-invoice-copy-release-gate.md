# Contract-to-invoice — final marketing copy and publication gate

22 November 2026. Local marketing copy preparation only.

**NOT READY FOR PUBLICATION — mandatory financial acceptance evidence outstanding.**

This supplements the Phase 9C.2A visual-quality report. “Ready for owner review” in that report does not approve publication of the new calculation claim. This explicit publication gate takes precedence for the contract-to-invoice copy.

## Prepared public copy

Heading: “Fra kontrakt til faktura.”

Description: “Bruk kontrakten som grunnlag for en ny faktura. Kontroller og tilpass fakturalinjene før du genererer PDF.”

Supporting text: “Jobbleder beregner netto, MVA og totalbeløp ut fra fakturalinjene.”

Manual sharing remains clear: “Du deler PDF-en med kunden selv.” The shared image caption already describes editable invoice fields neutrally. Internal correction/audit/preparation history belongs in investigation documentation, not public marketing copy. Existing independent legal-review notices are preserved; they are a separate contractual-content constraint.

The authentic screenshots, their source files, optimized derivatives and displayed values (net 96,000 NOK, VAT 24,000 NOK, gross 120,000 NOK) are unchanged. These images are not evidence that conversion/calculation defects have been fixed or that all conversions are verified.

## Mandatory release acceptance criterion

Do not publish this copy until the relevant contract-to-invoice conversion and calculation defects have been corrected in separately authorized application work and regression-tested successfully. No application repository was inspected or modified in this copy phase. No successful application-level financial regression evidence was supplied or established here.

Required acceptance evidence, to be recorded before release:

1. Identify the relevant defects, their corrective changes and the application version/commit tested. Establish the affected conversion/pricing/VAT cases rather than assuming the screenshots cover them.
2. Run regression tests reproducing those defects. Include applicable fixed-price, hourly and offer-based conversions, VAT-inclusive/exclusive inputs and relevant customer/line configurations. Record expected and actual transferred lines, quantities, unit prices, VAT treatment, net, VAT and gross; test editing/recalculation as well as initial conversion.
3. Verify that displayed totals follow the invoice lines using the application's defined rounding rules and that generated PDF amounts agree with the reviewed invoice. The supplied 96,000 + 24,000 = 120,000 example should be checked from real invoice data, not accepted because screenshot text matches.
4. Confirm payment-plan percentages do not cause unintended installment calculations, duplicate amounts or automatic sending. Preserve the user-initiated conversion/review workflow.
5. Record the passing results and obtain release acceptance for the tested version. Neither website TypeScript/ESLint/build checks nor visual screenshot review satisfies this financial gate.

This is a release requirement, not a claim that every listed case is currently defective or already verified. Until the evidence exists, publication remains blocked. No code-only disclaimer or assertion of universal error-free conversion substitutes for the tests.

## Scope and validation

Website component changed: `components/product/contract/ContractProductPage.tsx` only. This new document records the gate. Layout, media mappings, image values, links, metadata, FAQ and all other public copy are preserved.

Website validation after this copy update: TypeScript, full ESLint, production build and git diff --check passed. The existing Node DEP0205 build notices remain. No matching public correction/audit/preparation-history wording was found in the searched app/components/content source. These results validate the marketing-site change only; the required application financial regressions remain unexecuted in this phase.

No commit, push or deployment is authorized by this copy update.
