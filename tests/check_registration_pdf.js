// Run with gjs; canvas is mocked to verify PDF packaging independently of a browser.
const GLib = imports.gi.GLib;
const ByteArray = imports.byteArray;
const assert = (condition, message) => { if (!condition) throw new Error(message); };
let rendered = [];
globalThis.document = {createElement: () => ({
  getContext: () => ({
    measureText: value => ({width: Array.from(value).length * 12}),
    fillRect: () => {},
    fillText: value => rendered.push(value)
  }),
  toDataURL: () => 'data:image/jpeg;base64,/9j/2Q=='
})};
globalThis.atob = value => Array.from(GLib.base64_decode(value), byte => String.fromCharCode(byte)).join('');
const [, source] = GLib.file_get_contents('registration-pdf.js');
const pdf = eval(ByteArray.toString(source) + '\nRegistrationPDF;');
assert(pdf.filename('  Ana Júlia da Silva ') === 'ana-julia-da-silva_formulario-inscricao.pdf', 'Normalize full name');
assert(pdf.filename('../') === 'candidato_formulario-inscricao.pdf', 'Safe fallback');
const input = 'Nome: João (Silva) \\ <script>\n' + 'x'.repeat(250) + '\n' + 'Campo\n'.repeat(100) + 'Assinatura: ______';
const bytes = pdf.create(input);
const output = Array.from(bytes, byte => String.fromCharCode(byte)).join('');
assert(output.startsWith('%PDF-1.4'), 'PDF header');
assert(output.includes('/Count 3'), 'Multiple pages');
assert(rendered.join('').includes('Nome: João (Silva) \\ <script>'), 'Input remains literal');
assert(rendered.includes('Assinatura: ______'), 'Signature preserved');
assert(rendered.every(line => line.length <= 87), 'Long input wraps');
const xref = Number(output.match(/startxref\n(\d+)/)[1]);
assert(output.slice(xref, xref + 4) === 'xref', 'Cross-reference byte offset');
const entries = output.slice(xref).split('\n').slice(3, 3 + Number(output.match(/\/Size (\d+)/)[1]) - 1);
entries.forEach((entry, index) => assert(output.slice(Number(entry.slice(0, 10))).startsWith(`${index + 1} 0 obj`), 'Object offset'));
print('PDF filename, pagination, literal input, signature, wrapping and byte offsets: passed');
