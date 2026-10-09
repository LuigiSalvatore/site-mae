# Repository notes

- Buildless HTML/CSS/JavaScript site. `index.html`, `style.css`, and `app.js` implement the course landing page. No package manager, build step, server application, or automated email service is configured.
- Registration entry: `inscricao.html`; separate paths: `inscricao-online.html` and `inscricao-instrucoes.html`. Registration styles and behavior are isolated in `registration.css` and `registration.js`.
- Registration is a browser-only test. Online form review prepares a downloadable HTML file; email links open an email client with a subject only. Users attach files and send manually. Never report an application as sent from this workflow.
- Test recipient is `ludpher.s@gmail.com`, present in the registration HTML pages. Replace all occurrences and remove test labels only when a production workflow is approved. Applicant data is not persisted or placed in mailto URLs.
- Public blank form: `assets/registration/formulario-inscricao.docx`, copied byte-for-byte from the supplied registration DOCX. Keep this public copy synchronized with approved source changes.
- Preview using `python3 -m http.server 8000` from the repository root, then open `/inscricao.html`. Focused static checks: `python3 tests/check_registration.py`; also run `git diff --check`. Browser verification is separate from these checks.
- Commit completed changes; do not push unless explicitly requested. Stage only task changes: pre-existing edits may share `index.html`, `app.js`, and `style.css`.
