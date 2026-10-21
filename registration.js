/* Prepare a PDF locally; delivery happens in the user's email client. */
(() => {
  const form = document.getElementById('registration-form');
  if (!form) return;
  const review = document.getElementById('application-review');
  const content = document.getElementById('review-content');
  let application = '';
  form.querySelector('button[type="submit"]').disabled = false;

  // Text inputs keep the displayed format independent of browser locale.
  const dateInputs = form.querySelectorAll('[data-date]');
  const validateDate = input => {
    const value = input.value.trim();
    const parts = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
    let valid = !value;
    if (parts) {
      const [, day, month, year] = parts.map(Number);
      const date = new Date(0);
      date.setUTCFullYear(year, month - 1, day);
      valid = year > 0 && date.getUTCFullYear() === year &&
        date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
    }
    input.setCustomValidity(valid ? '' : 'Informe uma data válida no formato dd/mm/yyyy.');
  };
  dateInputs.forEach(input => {
    input.addEventListener('input', () => validateDate(input));
    validateDate(input);
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    dateInputs.forEach(validateDate);
    if (!form.reportValidity()) return;
    const lines = [
      'Especialização em Tecnologias da Reprodução Assistida e Embriologia Humanas',
      'FORMULÁRIO DE INSCRIÇÃO', ''
    ];
    form.querySelectorAll('fieldset').forEach(section => {
      lines.push(section.querySelector('legend').textContent, '');
      section.querySelectorAll('input').forEach(input => {
        if (input.type === 'checkbox') {
          if (input.checked) lines.push('Segmento: ' + input.value);
          return;
        }
        const label = form.querySelector(`label[for="${input.id}"]`);
        const title = label.textContent.replace(/\s*\*\s*$/, '').trim();
        let value = input.value.trim();
        lines.push(title + ': ' + (value || '—'));
      });
      lines.push('');
    });
    lines.push(document.getElementById('declaration-text').textContent,
      '', 'Porto Alegre', '', 'Assinatura: _____________________________________________');
    application = lines.join('\n');
    // Keep personal input as plain text in the review.
    content.textContent = application;
    form.hidden = true;
    review.hidden = false;
    review.focus();
  });

  document.getElementById('edit-application').addEventListener('click', () => {
    review.hidden = true;
    form.hidden = false;
    document.getElementById('nome').focus();
  });

  document.getElementById('download-application').addEventListener('click', () => {
    if (!application) return;
    const url = URL.createObjectURL(new Blob([RegistrationPDF.create(application)], {type: 'application/pdf'}));
    const link = document.createElement('a');
    link.href = url;
    link.download = RegistrationPDF.filename(document.getElementById('nome').value);
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
})();
