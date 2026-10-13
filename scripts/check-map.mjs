import { readFile } from 'node:fs/promises';
import { basename, dirname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Script } from 'node:vm';
import { ensureRegularFile, filesUnder, loadPolicy, parseLayer, validateProperties } from './map-files.mjs';

export async function checkMap(site, policy) {
  const files = await filesUnder(site);
  let layers = 0;
  let features = 0;
  for (const path of files) {
    if (path.endsWith('.js')) {
      const source = await readFile(path, 'utf8');
      new Script(source, { filename: basename(path) });
      if (dirname(path) === join(site, 'layers')) {
        const layer = parseLayer(source, basename(path));
        if (layer) {
          validateProperties(layer, policy, basename(path));
          layers++;
          features += layer.data.features.length;
        } else if (basename(path) !== 'layers.js') throw new Error('Unrecognized layer data format.');
      }
    }
    if (path.endsWith('.html') || path.endsWith('.css') || path === join(site, 'layers/layers.js')) {
      const source = await readFile(path, 'utf8');
      const references = path.endsWith('.css')
        ? [...source.matchAll(/url\(\s*['"]?([^)'"\s]+)['"]?\s*\)/g)].map(x => x[1])
        : [...source.matchAll(/(?:src|href)="([^"<>]+)"/g)].map(x => x[1]);
      for (const reference of references) {
        if (/^(?:https?:|data:|#|mailto:)/i.test(reference)) continue;
        // Font Awesome lists optional formats/families absent from qgis2web exports.
        // The browser selects the included solid WOFF2 font; check that separately.
        if (path.endsWith('.css') && reference.startsWith('../webfonts/')) continue;
        // HTML inside layers.js is inserted into the page; its URLs use the page's base.
        const base = path.endsWith('.js') ? site : dirname(path);
        const target = resolve(base, decodeURIComponent(reference.split(/[?#]/)[0]));
        if (!target.startsWith(site + sep)) throw new Error('Asset reference escapes the published folder.');
        await ensureRegularFile(target);
      }
    }
  }
  if (!layers) throw new Error('No exported layers found.');
  await ensureRegularFile(join(site, 'webfonts/fa-solid-900.woff2'));
  console.log(`Map check passed: ${layers} layers, ${features} exported features; JavaScript and required page assets valid.`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
  await checkMap(join(root, 'site'), await loadPolicy(root));
}
