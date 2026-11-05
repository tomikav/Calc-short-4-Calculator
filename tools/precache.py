#!/usr/bin/env python3
"""Regenera la lista de archivos que sw.js guarda para funcionar sin internet
y cambia la versión del caché (así los usuarios reciben la actualización).
Uso, desde la carpeta del proyecto:  python tools/precache.py"""
import hashlib, json, os, re
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INCLUDE = ['index.html', 'manifest.webmanifest', 'css', 'js', 'content', 'vendor', 'docs/icons']
files = []
for item in INCLUDE:
    path = os.path.join(ROOT, item)
    if os.path.isfile(path): files.append(item)
    else:
        for d, _, names in os.walk(path):
            for n in names:
                if n.startswith('.') or n.endswith(('.md', 'LICENSE')): continue
                files.append(os.path.relpath(os.path.join(d, n), ROOT).replace(os.sep, '/'))
files.sort()
h = hashlib.sha1()
for f in files:
    with open(os.path.join(ROOT, f), 'rb') as fh: h.update(fh.read())
ver = h.hexdigest()[:10]
sw = os.path.join(ROOT, 'sw.js')
src = open(sw, encoding='utf-8').read()
src = re.sub(r"const VERSION = '[^']*';", f"const VERSION = '{ver}';", src)
src = re.sub(r"const PRECACHE = \[[\s\S]*?\];", 'const PRECACHE = ' + json.dumps(['./'] + files, ensure_ascii=False, indent=1) + ';', src)
open(sw, 'w', encoding='utf-8').write(src)
print(f'sw.js: {len(files)} archivos, versión {ver}')
