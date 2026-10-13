import { readdir, readFile, appendFile } from 'node:fs/promises';
import { join } from 'node:path';

export function categoryMetadata(style) {
  const values = [...style.matchAll(/case\s+'((?:[^'\\]|\\.)*)'\s*:/g)]
    .map(match => match[1].replace(/\\'/g, "'").replace(/\\\\/g, '\\'));
  const field = style.match(/var\s+value\s*=\s*feature\.get\("([^"]+)"\)/)?.[1];
  if (values.length && field) return { kind: 'field', field, values };
  const rules = [...style.matchAll(/if\s*\(\s*(exp_\w+)\(context\)\s*\)/g)].map(match => match[1]);
  return rules.length ? { kind: 'rules', rules } : null;
}

export async function attachCategories(site) {
  const lines = ['\n// Legend filter metadata derived from this export, not hand-maintained category lists.'];
  for (const name of await readdir(join(site, 'styles'))) {
    if (!name.endsWith('_style.js')) continue;
    const metadata = categoryMetadata(await readFile(join(site, 'styles', name), 'utf8'));
    const identifier = name.replace(/_style\.js$/, '');
    if (metadata && /^\w+$/.test(identifier)) {
      lines.push(`lyr_${identifier}.set('shhaCategories', ${JSON.stringify(metadata)});`);
    }
  }
  await appendFile(join(site, 'layers/layers.js'), lines.join('\n') + '\n');
}
