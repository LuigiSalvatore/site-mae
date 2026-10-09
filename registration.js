/* Browser-only test: prepare a file; delivery happens in the user's email client. */
(() => {
  const form = document.getElementById('registration-form');
  if (!form) return;
  const review = document.getElementById('application-review');
  const content = document.getElementById('review-content');
  let application = '';
  form.querySelector('button[type="submit"]').disabled = false;
  const escapeHtml = value => value.replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const lines = [
      'APLICAÇÃO DE TESTE — NÃO CONFIRMA INSCRIÇÃO OFICIAL',
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
        if (input.type === 'date' && value) value = value.split('-').reverse().join('/');
        lines.push(title + ': ' + (value || '—'));
      });
      lines.push('');
    });
    lines.push(document.getElementById('declaration-text').textContent,
      '', 'Porto Alegre', '', 'Assinatura: _____________________________________________');
    application = lines.join('\n');
    // Use textContent for personal input; downloaded markup is escaped separately.
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
    const documentHtml = '<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8">' +
      '<meta name="viewport" content="width=device-width, initial-scale=1">' +
      '<title>Aplicação preenchida — teste</title>' +
      '<style>body{max-width:800px;margin:32px auto;padding:0 20px;font-family:Arial,sans-serif}' +
      'pre{white-space:pre-wrap;overflow-wrap:anywhere;font:14px/1.6 Arial,sans-serif}' +
      '@media print{body{margin:0;max-width:none}}</style></head><body><pre>' +
      escapeHtml(application) + '</pre></body></html>';
    const url = URL.createObjectURL(new Blob([documentHtml], {type: 'text/html;charset=utf-8'}));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'aplicacao-preenchida-teste.html';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
})();
