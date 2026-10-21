# UFRGS WordPress migration plan

> Atualização em 19/10/2026: com o acesso SFTP informado, o plano principal é publicar o site estático existente. Consulte [o plano de hospedagem HTML](../docs/plano-migracao-ufrgs.md). Este documento fica como alternativa para uma futura exigência de WordPress.

Prepared: 9 October 2026
Reviewed against the current implementation: 13 October 2026

## Recommendation

Rebuild the current static landing page as an editable WordPress page, preserving its branding and section structure. Use expandable discipline details as the default. Preserving the exact interactive design depends on the permissions and customization options available in UFRGS's WordPress environment.

This is a planning document. No migration has been implemented.

## What was reviewed

- `../index.html`: page structure, content, navigation, pricing, and contact links.
- `../style.css`: visual design, global styles, and responsive layouts.
- `../app.js`: discipline cards and filters, faculty and objective rendering, mobile menu, and registration status.
- `../docs/`: existing project background and plans.
- `../new-documents/Informações sobre as disciplinas.docx`: supplied discipline information.
- `../new-documents/Formulário de inscrição.docx`: supplied registration form.

The current website is a static HTML/CSS/JavaScript landing page. It has no application backend or database. Registration buttons lead to `inscricao.html`, which offers a downloadable DOCX/instructions path and a browser-only form path that prepares a printable application. Both require users to sign the document and email it manually to `especializacaorha@ufrgs.br`. Neither submits applications to a backend. See `../registration-page-plan/README.md`.

## 1. Confirm the target WordPress environment

Before choosing an implementation, establish:

- The target site URL, WordPress version, active theme, and editor.
- The account's editing and administration permissions.
- Whether custom CSS and JavaScript are permitted, and how they must be added.
- Whether approved plugins, custom plugins, child themes, or page templates are available.
- Whether institutional headers, footers, fonts, or layout rules must be retained.
- Whether a draft or staging environment is available.

Current UFRGS customization restrictions could not be verified from authoritative public guidance during this review. Treat these as open questions, not established restrictions.

Pasting the complete existing HTML document into a page is not a dependable migration approach. WordPress can sanitize page content and remove scripts according to account capabilities. See [Custom HTML documentation](https://wordpress.org/documentation/article/custom-html/).

Deliverable: a short record of the available permissions and the selected implementation approach.

## 2. Convert content into editable WordPress sections

Recreate these sections using native editor blocks where available:

1. Introduction and calls to action.
2. Course facts.
3. General and specific objectives.
4. Disciplines and syllabuses.
5. Practical immersion.
6. Coordinators and faculty.
7. Investment and payment information.
8. Schedule and course format.
9. Registration instructions and contact details.

Specific objectives, faculty lists, and all 13 disciplines currently depend on JavaScript to appear. Store these as page content or render them on the server so that essential information is visible without JavaScript and staff can edit it without changing source code.

Deliverable: a complete editable draft with all essential content visible without scripts.

## 3. Adapt the design and assets

- Scope custom CSS to a course-page wrapper. The current stylesheet resets all elements and styles global headings, links, images, and layout, which may conflict with the institutional theme.
- Adapt page width, section spacing, typography, and responsive columns to the active theme.
- Use the theme's header and mobile navigation where suitable, and avoid duplicate institutional branding.
- Retain section anchors and adjust their scroll offsets for the actual sticky header and WordPress administration bar.
- Upload logos, faculty photos from `assets/profiles/`, and downloadable documents to the Media Library; replace relative `assets/…` paths with appropriate WordPress asset URLs.
- Set the page title, description, and site icon through available WordPress/theme settings rather than copying the original document's `<head>` into page content.
- Use theme fonts, or locally hosted fonts if permitted, in place of the current external Google Fonts dependency.

Deliverable: a responsive page that fits the institutional theme and does not alter unrelated pages.

## 4. Adapt interactive features

| Existing feature | Default migration approach | Option if custom code is permitted |
| --- | --- | --- |
| Rotating discipline cards | Expandable details containing syllabus, hours, and teachers | Preserve cards after checking touch and keyboard behavior |
| Discipline filters | Group disciplines by format and keep all content accessible | Add filtering as an enhancement to already visible content |
| Custom mobile menu | Use theme navigation | Retain a scoped course menu if needed |
| Registration countdown/status | Editable registration notice with explicit dates | Approved date logic using the São Paulo timezone and accounting for caching |
| JavaScript-generated objectives and faculty | Editable lists and layout blocks | Server-rendered content if a custom component is justified |

The native [WordPress Details block](https://wordpress.org/documentation/article/details-block/) can provide expandable discipline information where supported by the installed version and editor.

If the existing cards and filters must be retained, load CSS and JavaScript through an approved theme or plugin rather than relying on script tags in page content. Follow [WordPress asset-loading documentation](https://developer.wordpress.org/themes/core-concepts/including-assets/).

Deliverable: an agreed feature set that works within the target environment's permissions.

## 5. Reconcile content before migration

All 13 discipline cards were reconciled with the supplied discipline document on 9 October 2026. They total 390 hours: eight theoretical, four theoretical/practical, and one practical discipline. Preserve this corrected inventory; the earlier 35-hour Embriologia and 20-hour Administração values are obsolete.

Remaining content decisions:

- Confirm the LGBTQIAPN+ discipline's súmula, which describes imaging exams while its program discusses inclusive reproduction. The site preserves the source wording.
- Confirm the homepage's 309h theoretical / 81h practical split; the discipline document does not allocate mixed-discipline hours.
- Confirm faculty qualifications and affiliations independently of discipline responsibilities. Profile filenames are sanitized ASCII slugs; keep the identity mapping and photographs consistent in cards, faculty lists, and coordinator/contact displays.
- Preserve the updated secretary telephone `(51) 98618-7964` and `tel:+5551986187964`.

Clarify payment terms: the page advertises 15 installments while the credit-card badge says “até 12x.” Confirm the advertised PIX discount and payment methods against the approved terms.

Deliverable: one approved content inventory used consistently throughout the WordPress page.

## 6. Complete the registration journey

Choose the approved application process:

- Publish the supplied registration document as a download, with clear instructions on where and how to submit it; or
- Link to the university's approved application system.

The current registration buttons already lead to the registration chooser, with PDF generation online and manual email submission. Keep general contact information available separately.

Building an online application form is additional functionality. It would require an approved mechanism for handling applicant data, supporting documents, access permissions, and submission confirmations. The existing online form prepares a PDF and does not provide backend submission. Applicants must sign and email it to the confirmed recipient `especializacaorha@ufrgs.br`.

Deliverable: an unambiguous route from “Inscreva-se” to the approved application process.

## 7. Validate before launch

- Test the page in the actual UFRGS theme and under the intended URL.
- Check phone, tablet, and desktop layouts.
- Check keyboard navigation, focus visibility, and access to full discipline details.
- Confirm all essential content remains visible without JavaScript.
- Verify logos, document downloads, section anchors, email links, telephone links, and application links.
- Verify registration dates and status, including behavior when caching is enabled.
- Check heading hierarchy, image alternative text, and readable color contrast.
- Confirm staff can update dates, prices, faculty, and discipline content through the editor.

Deliverable: a reviewed draft ready for publication through the university's normal process.

## First milestone

Create one draft page in UFRGS's actual theme containing the introduction and one complete discipline. Use it to verify editor support, styling permissions, page width, branding, and the expandable-details approach before converting the entire website.

## Suggested order

1. Confirm environment and permissions.
2. Reconcile course and payment content.
3. Build and review the small draft prototype.
4. Convert the remaining sections and upload assets.
5. Complete registration instructions and links.
6. Validate the complete draft and prepare it for publication.
