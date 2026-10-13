"""Check the published faculty inventory resolves to valid, small profile assets."""
from pathlib import Path
import re
import struct
import unicodedata
import unittest

ROOT = Path(__file__).resolve().parents[1]

class ProfileChecks(unittest.TestCase):
    def test_every_faculty_display_has_a_photo(self):
        script = (ROOT / 'app.js').read_text()
        names = set(re.findall(r'"name": "([^"]+)"', script))
        names.update(re.findall(r'\["([^"]+)", "(?:Doutor|Mestre|Especialista)[^"]*"\]', script))
        names.update(re.findall(r'data-teacher="([^"]+)"', (ROOT / 'index.html').read_text()))
        self.assertGreaterEqual(len(names), 24)
        for name in names:
            ascii_name = unicodedata.normalize('NFD', name).encode('ascii', 'ignore').decode().lower()
            slug = re.sub('[^a-z0-9]+', '-', ascii_name).strip('-')
            with self.subTest(name=name):
                data = (ROOT / 'assets/profiles' / (slug + '.png')).read_bytes()
                self.assertEqual(data[:8], b'\x89PNG\r\n\x1a\n')
                self.assertLessEqual(max(struct.unpack('>II', data[16:24])), 168)

if __name__ == '__main__':
    unittest.main()
