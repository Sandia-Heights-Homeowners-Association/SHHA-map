import { readdir, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

export const omittedFields = new Set(['created_us', 'last_edite', 'path', 'description', 'snippet']);
export const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
export const phonePattern = /(?:\+?1[ .-]?)?\(?\d{3}\)?[ .-]\d{3}[ .-]\d{4}\b/;

export async function filesUnder(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isSymbolicLink()) throw new Error('Export must not contain symbolic links.');
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await filesUnder(path));
    else if (entry.isFile()) files.push(path);
  }
  return files;
}

export function parseLayer(source, filename) {
  const match = source.match(/^\s*(?:var|let|const)\s+(json_\w+)\s*=\s*(\{[\s\S]*\})\s*;?\s*$/);
  if (!match) return null;
  let data;
  try { data = JSON.parse(match[2]); }
  catch { throw new Error(`Invalid GeoJSON in ${filename}; values are not logged.`); }
  if (data.type !== 'FeatureCollection' || !Array.isArray(data.features)) {
    throw new Error(`Expected a GeoJSON FeatureCollection in ${filename}.`);
  }
  return { variable: match[1], data, layer: filename.replace(/_\d+\.js$/, '') };
}

export function validateProperties(layer, policy, filename) {
  const allowed = policy[layer.layer];
  if (!allowed) throw new Error(`Review the fields for the new layer ${filename} before publishing.`);
  for (const feature of layer.data.features) {
    if (feature.type !== 'Feature' || !feature.properties || !feature.geometry) {
      throw new Error(`Invalid feature in ${filename}; values are not logged.`);
    }
    for (const [field, value] of Object.entries(feature.properties)) {
      if (!allowed.includes(field)) throw new Error(`Review unexpected field ${field} in ${filename}.`);
      if (emailPattern.test(String(value ?? '')) || phonePattern.test(String(value ?? ''))) {
        throw new Error(`Contact-like value in ${filename}, field ${field}; values are not logged.`);
      }
    }
  }
}

export async function loadPolicy(root) {
  return JSON.parse(await readFile(join(root, 'public-fields.json'), 'utf8'));
}

export async function ensureRegularFile(path) {
  if (!(await stat(path)).isFile()) throw new Error('Expected an export file.');
}
