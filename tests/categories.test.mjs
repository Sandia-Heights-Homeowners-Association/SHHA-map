import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import { categoryMetadata } from '../scripts/category-metadata.mjs';

const sandbox = { window: {} };
runInNewContext(await readFile(new URL('../assets/shha-layer-tools.js', import.meta.url), 'utf8'), sandbox);
const key = sandbox.window.ShhaLayerTools.categoryKey;
const feature = properties => ({ get: field => properties[field] });

// Representative qgis2web syntax, independent of Larry's changing records/file order.
test('extract categorized renderer values and preserve new/null values as unclassified', () => {
  const config = categoryMetadata(`
    switch(valueStr) { case 'North 1': return []; case 'South 2': return []; default: return []; }
    var value = feature.get("Development_Unit");
  `);
  assert.equal(config.field, 'Development_Unit');
  assert.deepEqual(config.values, ['North 1', 'South 2']);
  assert.equal(key(feature({ Development_Unit: 'North 1' }), config), 'value:North 1');
  assert.equal(key(feature({ Development_Unit: null }), config), 'other');
  assert.equal(key(feature({ Development_Unit: 'A newly added unit' }), config), 'other');
});

test('boolean categories follow QGIS string conversion and preserve default handling', () => {
  const config = { kind: 'field', field: 'undeveloped_parcels', values: ['true', 'false'] };
  assert.equal(key(feature({ undeveloped_parcels: true }), config), 'value:true');
  assert.equal(key(feature({ undeveloped_parcels: false }), config), 'value:false');
  assert.equal(key(feature({ undeveloped_parcels: null }), config), 'other');
});

test('ordered expression rules choose only the first matching rule and preserve no-match', () => {
  const config = categoryMetadata(`if (exp_first(context)) { return []; } else if (exp_second(context)) { return []; }`);
  assert.deepEqual(config.rules, ['exp_first', 'exp_second']);
  const calls = [];
  const matches = (name, item) => { calls.push(name); return name === 'exp_first' ? item.get('first') : item.get('second'); };
  assert.equal(key(feature({ first: true, second: true }), config, matches), 'rule:0');
  assert.deepEqual(calls, ['exp_first']);
  assert.equal(key(feature({ first: false, second: true }), config, matches), 'rule:1');
  assert.equal(key(feature({ first: false, second: false }), config, matches), 'none');
});
