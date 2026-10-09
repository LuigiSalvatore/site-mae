# Proposed inscrição page

Status: plan only — awaiting approval before implementation.
Prepared: 9 October 2026.

## Purpose and scope

Add a dedicated Portuguese-language registration page for the specialization, reached from the website's signup buttons. This is registration for the complete specialization, not enrollment in individual disciplines: the supplied form describes an application to the specialization and does not offer individual-course registration.

Use `inscricao.html` in the current static website, with `/inscricao/` as the intended equivalent when migrating to WordPress. Match the existing logos, colors, typography, and responsive layout. Include a clear link back to the course website.

Source: `../new-documents/Formulário de inscrição.docx`. Use the approved course title, correcting the form heading's apparent typo “EBRIOLOGIA” to “EMBRIOLOGIA.” Do not invent eligibility rules, selection criteria, required attachments, or payment instructions.

## My recommendation

Start with a dedicated registration instructions page containing the downloadable form and the approved submission method. This is practical for the existing static website and easier to transfer to UFRGS WordPress.

If the intention is to complete and submit the application directly online, implement that as a real form with an approved backend or university application service. A browser-only form cannot reliably receive applications, securely store them, or send submission confirmations. Avoid a button that says “Inscrição enviada” when it has merely opened an email draft.

The supplied document collects identification details and selection categories. I recommend confirming which fields the university actually requires and using the university's approved submission/storage channel before building online collection. This is an implementation recommendation, not a claim about current UFRGS policy.

## Proposed page structure

1. Header: course branding and “Voltar ao curso.”
2. Page title: “Inscrição na especialização.” Explain that this starts an application to the complete course and that submitting it does not by itself confirm admission or matrícula.
3. Registration period: display the approved dates consistently with the homepage. Use a clear notice before opening and after closing; do not rely solely on the visitor's device clock to enforce online submissions.
4. “Como se inscrever”: numbered steps to download, complete, and submit the form through the confirmed channel. List attachments only after the course team confirms them.
5. “Formulário de inscrição”: download the supplied DOCX with its file type clearly labeled. Add an accessible PDF version if approved, after checking that all fields and declarations are preserved.
6. Submission action: link to the approved university application system, or provide approved email instructions. The existing secretary email is `especializacaorha@ufrgs.br`; verify that it is authorized to receive applications and supporting documents before directing submissions there.
7. Help: secretary contact details and a link back to the course information.

## If an online form is preferred

Organize the document's fields into these sections, without silently adding new requirements:

| Section | Fields present in the supplied form |
| --- | --- |
| Personal identification | Full name, birth date, marital status, RG, CPF, filiação, place of birth, nationality |
| Residential address | Address, city, state, country, CEP |
| Foreign applicants | Home-country identification document name and number, passport number, professional registration |
| Contact | Personal email, mobile/WhatsApp, alternate telephone |
| Academic background | Undergraduate course, graduation year and university; master's and doctorate details, completion year and university |
| Employment | Workplace, professional address, city, state, CEP, telephone, professional email |
| Selection category | Ampla concorrência; reserved categories listed below; UFRGS staff card and department/institute where applicable |
| Declaration | Truthfulness and agreement declaration, place/date, signature |

Preserve the form's selection categories: Pessoas Negras (Pretos e Pardos), Pessoas Indígenas, Pessoas Quilombolas, Pessoas com Deficiência, Pessoas Trans e Travestis, Pessoas Refugiadas com Visto Humanitário, Pessoas Migrantes em Condições de Vulnerabilidade Social, and Servidor UFRGS, alongside Ampla Concorrência.

Decisions needed before implementation:

- Which fields are mandatory, optional, or conditional? The source does not establish a complete online validation policy.
- Can an applicant choose one category or multiple categories? The source shows checkboxes but does not settle the submission rule.
- What supporting documents are required, and how are they submitted? No upload checklist should be invented.
- How should the paper signature be handled online? Do not replace it with a checkbox without an approved process.
- Which approved service receives and stores applications, and which staff can access them?
- What exact confirmation should applicants receive, and who provides the official application reference?
- What privacy information and data retention instructions should appear?

A direct online submission implementation would need server-side validation, appropriate conditional fields, accessible error messages, protection against duplicate submissions, an approved receipt/confirmation process, and secure handling of any required uploads. Do not put applicant information in URL query strings or browser local storage.

## Signup navigation changes after approval

- Change the main navigation's “Inscreva-se” link from `#contato` to `inscricao.html`.
- Change the hero's “Quero me inscrever” link to the same page.
- Point any future signup buttons to that page consistently.
- Keep general “Fale com a secretaria” contact links available for questions.
- Use document-relative links in the static website so it can work under a university subdirectory. Set WordPress links to the published registration page when migrated.

The discipline cards no longer contain signup buttons after their source-only content correction. If signup actions are reintroduced later, they should lead to this same page and explicitly refer to the complete specialization.

## Verification after implementation

- Every signup button opens the registration page, with a working return link.
- Page works on mobile and desktop and is navigable by keyboard.
- Download contains the complete approved form; labels accurately identify file types.
- Submission instructions describe the actual approved process.
- Dates match the course page, including before-opening and after-closing notices.
- Any online form preserves the approved source fields, validates on the server, handles failures without claiming success, and produces a verifiable receipt only after successful submission.
- Navigation and downloads work under the final UFRGS subdirectory or WordPress URL.

## Approval requested for later

Approve either the recommended instructions/download page or a directly submitted online form. For the recommended version, confirm the receiving channel, required supporting documents, and registration instructions. For an online form, resolve the decisions above before implementation.

No registration page or signup-link changes have been implemented as part of this planning step.
