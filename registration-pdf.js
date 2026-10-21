/* Rasterize text locally to preserve accents and arbitrary applicant names without external fonts. */
const RegistrationPDF = (() => {
  const filename = name => (name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'candidato') + '_formulario-inscricao.pdf';

  function create(text) {
    const canvas = document.createElement('canvas');
    canvas.width = 1240;
    canvas.height = 1754;
    const context = canvas.getContext('2d');
    context.font = '22px Arial, sans-serif';
    const lines = [];
    for (const paragraph of text.split('\n')) {
      let line = '';
      // Measure every character, including long addresses and unbroken input.
      for (const character of paragraph) {
        if (context.measureText(line + character).width > 1040) {
          lines.push(line);
          line = '';
        }
        line += character;
      }
      lines.push(line);
    }
    const objects = [];
    const add = value => { objects.push(value); return objects.length; };
    add('<< /Type /Catalog /Pages 2 0 R >>');
    add('');
    const pages = [];
    for (let offset = 0; offset < lines.length; offset += 46) {
      context.fillStyle = '#fff';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = '#000';
      lines.slice(offset, offset + 46).forEach((line, index) => context.fillText(line, 100, 120 + index * 32));
      const jpeg = atob(canvas.toDataURL('image/jpeg', 0.92).split(',')[1]);
      const image = add(`<< /Type /XObject /Subtype /Image /Width 1240 /Height 1754 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpeg.length} >>\nstream\n${jpeg}\nendstream`);
      const commands = 'q 595.28 0 0 841.89 0 0 cm /Image Do Q';
      const stream = add(`<< /Length ${commands.length} >>\nstream\n${commands}\nendstream`);
      pages.push(add(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Image ${image} 0 R >> >> /Contents ${stream} 0 R >>`));
    }
    objects[1] = `<< /Type /Pages /Kids [${pages.map(id => `${id} 0 R`).join(' ')}] /Count ${pages.length} >>`;
    let pdf = '%PDF-1.4\n';
    const offsets = [0];
    objects.forEach((object, index) => {
      offsets.push(pdf.length);
      pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
    });
    const xref = pdf.length;
    pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
    pdf += offsets.slice(1).map(offset => `${String(offset).padStart(10, '0')} 00000 n \n`).join('');
    pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
    return Uint8Array.from(pdf, character => character.charCodeAt(0));
  }
  return {create, filename};
})();
