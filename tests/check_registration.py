"""Static integration checks; browser behavior must be verified separately."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote, parse_qs
import unittest
import zipfile
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
PAGES = ['inscricao.html', 'inscricao-online.html', 'inscricao-instrucoes.html']

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.tags = []
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))

class RegistrationChecks(unittest.TestCase):
    def test_all_local_navigation_and_assets_exist(self):
        for name in PAGES:
            for tag, attrs in Page(ROOT / name).tags:
                for key in ('href', 'src'):
                    value = attrs.get(key, '')
                    url = urlsplit(value)
                    if value and not url.scheme and url.path:
                        self.assertTrue((ROOT / unquote(url.path)).is_file(), (name, value))

    def test_both_paths_and_homepage_entry(self):
        links = [a.get('href') for tag, a in Page(ROOT / PAGES[0]).tags if tag == 'a']
        self.assertIn('inscricao-online.html', links)
        self.assertIn('inscricao-instrucoes.html', links)
        homepage = (ROOT / 'index.html').read_text()
        self.assertIn('href="inscricao.html" class="btn btn-sm">Inscreva-se', homepage)
        self.assertIn('href="inscricao.html">Quero me inscrever', homepage)

    def test_download_is_original_document(self):
        downloaded = ROOT / 'assets/registration/formulario-inscricao.docx'
        self.assertTrue(zipfile.is_zipfile(downloaded))
        source = ROOT / 'new-documents/Formulário de inscrição.docx'
        if source.exists():
            self.assertEqual(source.read_bytes(), downloaded.read_bytes())

    def test_source_categories_and_declaration_are_preserved(self):
        with zipfile.ZipFile(ROOT / 'assets/registration/formulario-inscricao.docx') as archive:
            root = ET.fromstring(archive.read('word/document.xml'))
        w = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
        paragraphs = [''.join(t.text or '' for t in p.iter(w + 't')) for p in root.iter(w + 'p')]
        html = (ROOT / 'inscricao-online.html').read_text()
        declaration = next(p for p in paragraphs if p.startswith('Declaro,'))
        self.assertIn(declaration, html)
        inputs = [a for tag, a in Page(ROOT / 'inscricao-online.html').tags if tag == 'input']
        self.assertEqual(len([a for a in inputs if a.get('name') == 'segmento']), 9)
        names = {a['name'] for a in inputs}
        self.assertTrue({'nome', 'nascimento', 'estado_civil', 'rg', 'cpf', 'filiacao',
                         'naturalidade', 'nacionalidade', 'identidade_exterior', 'passaporte',
                         'registro_profissional', 'email', 'celular', 'telefone', 'graduacao',
                         'mestrado', 'doutorado', 'trabalho', 'cartao', 'lotacao', 'data_declaracao'} <= names)
        self.assertEqual(len(inputs), 47)

    def test_email_links_do_not_include_applicant_data(self):
        for name in PAGES:
            html = (ROOT / name).read_text()
            self.assertNotIn('teste', html.lower())
            self.assertIn('assine o documento antes de enviar', html.lower())
            for tag, attrs in Page(ROOT / name).tags:
                url = urlsplit(attrs.get('href', ''))
                if url.scheme == 'mailto':
                    self.assertEqual(url.path, 'especializacaorha@ufrgs.br')
                    self.assertTrue(set(parse_qs(url.query)) <= {'subject'})

    def test_no_javascript_cannot_submit_personal_data_in_url(self):
        tags = Page(ROOT / 'inscricao-online.html').tags
        form = next(a for tag, a in tags if tag == 'form')
        self.assertEqual(form.get('method'), 'post')
        submit = next(a for tag, a in tags if tag == 'button' and a.get('type') == 'submit')
        self.assertIn('disabled', submit)

if __name__ == '__main__':
    unittest.main()
