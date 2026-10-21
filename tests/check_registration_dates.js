// Run with gjs: exercise form date validation and review without browser dependencies.
const GLib = imports.gi.GLib;
const ByteArray = imports.byteArray;
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const input = {value: '', id: 'nascimento', type: 'text',
  setCustomValidity(message) { this.error = message; },
  addEventListener(name, callback) { this[name] = callback; }};
const content = {};
let submit;
const form = {
  querySelector: selector => selector.startsWith('label') ? {textContent: 'Data de nascimento'} : {},
  querySelectorAll: selector => selector === '[data-date]' ? [input] : [{
    querySelector: () => ({textContent: 'Identificação'}), querySelectorAll: () => [input]
  }],
  addEventListener: (name, callback) => { submit = callback; },
  reportValidity: () => !input.error
};
globalThis.document = {getElementById: id => id === 'registration-form' ? form :
  id === 'review-content' ? content : {addEventListener() {}, focus() {}, textContent: 'Declaração'}};
const [, source] = GLib.file_get_contents('registration.js');
eval(ByteArray.toString(source));
for (const value of ['', '31/12/2026', '29/02/2024', '01/01/0001']) {
  input.value = value; input.input(); assert(!input.error, `Accept ${value}`);
}
for (const value of ['12/31/2026', '2026-12-31', '31/04/2026', '29/02/2025', '1/1/2026', '00/01/2026', '01/01/0000']) {
  input.value = value; input.input(); assert(input.error, `Reject ${value}`);
}
input.value = '31/12/2026';
submit({preventDefault() {}});
assert(content.textContent.includes('Data de nascimento: 31/12/2026'), 'Review/PDF source uses day-first format');
print('Date format, calendar validation, leap years, optional dates and review: passed');
