import { cp, mkdir, mkdtemp, readFile, rename, rm, writeFile, access } from 'node:fs/promises';
import { basename, dirname, extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { filesUnder, loadPolicy, omittedFields, parseLayer, validateProperties } from './map-files.mjs';
import { checkMap } from './check-map.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const input = process.argv[2];
if (!input) throw new Error('Usage: npm run import -- "/path/to/qgis2web-export"');
const source = resolve(input);
const site = join(root, 'site');
if (source === site || source.startsWith(site + sep)) {
  throw new Error('Export outside site/ so the last published version is preserved until validation passes.');
}
const policy = await loadPolicy(root);
const staging = await mkdtemp(join(root, '.import-'));
let count = 0;
try {
  // Copy only web assets. Original GIS files and unrelated files never enter Git.
  await mkdir(join(staging, 'site'));
  const candidate = join(staging, 'site');
  await cp(join(source, 'index.html'), join(candidate, 'index.html'));
  const folders = ['resources', 'layers', 'styles'];
  try { await access(join(source, 'webfonts')); folders.push('webfonts'); } catch {}
  for (const folder of folders) {
    const assets = await filesUnder(join(source, folder));
    const extensions = new Set(['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.woff', '.woff2', '.ttf', '.eot']);
    for (const path of assets) {
      if (basename(path) === '.DS_Store') continue;
      if (!extensions.has(extname(path).toLowerCase()) && !path.endsWith('.js.map')) {
        throw new Error('Unexpected non-web file in export; import stopped.');
      }
    }
    await cp(join(source, folder), join(candidate, folder), {
      recursive: true, filter: path => basename(path) !== '.DS_Store'
    });
  }
  for (const path of await filesUnder(join(candidate, 'layers'))) {
    if (!path.endsWith('.js')) continue;
    const layer = parseLayer(await readFile(path, 'utf8'), basename(path));
    if (!layer) {
      if (basename(path) !== 'layers.js') throw new Error(`Unrecognized layer data format in ${basename(path)}.`);
      continue;
    }
    for (const feature of layer.data.features) {
      for (const field of omittedFields) delete feature.properties[field];
    }
    validateProperties(layer, policy, basename(path));
    await writeFile(path, `var ${layer.variable} = ${JSON.stringify(layer.data)};\n`);
    count++;
  }
  let html = await readFile(join(candidate, 'index.html'), 'utf8');
  html = html.replace(/<title>[\s\S]*?<\/title>/i, '<title>Sandia Heights Neighborhood Map | SHHA</title>');
  html = html.replace(/<meta\s+name="viewport"[^>]*>/i,
    '<meta name="viewport" content="width=device-width, initial-scale=1">');
  html = html.replace(/<\/head>/i, '    <link rel="stylesheet" href="shha-map.css">\n    </head>');
  html = html.replace(/<\/body>/i, '        <script src="shha-map.js"></script>\n    </body>');
  await writeFile(join(candidate, 'index.html'), html);
  await cp(join(root, 'assets/shha-map.css'), join(candidate, 'shha-map.css'));
  await cp(join(root, 'assets/shha-map.js'), join(candidate, 'shha-map.js'));
  await writeFile(join(candidate, '.nojekyll'), '');
  await checkMap(candidate, policy);
  // Replace the whole export, so deleted features/assets cannot linger.
  const previous = join(staging, 'previous');
  await rename(site, previous);
  try { await rename(candidate, site); }
  catch (error) { await rename(previous, site); throw error; }
  console.log(`Imported ${count} public layers. Original export unchanged. Review Git changes before pushing.`);
} finally {
  await rm(staging, { recursive: true, force: true });
}
