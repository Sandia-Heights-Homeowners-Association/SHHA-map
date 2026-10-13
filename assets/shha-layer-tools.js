/* Legend filters and read-only attribute tables use the existing public features. */
(function () {
  'use strict';
  function categoryKey(feature, config, ruleMatches) {
    if (config.kind === 'rules') {
      for (var i = 0; i < config.rules.length; i++) if (ruleMatches(config.rules[i], feature)) return 'rule:' + i;
      return 'none';
    }
    var value = feature.get(config.field);
    var text = value === null || value === undefined ? 'default' : String(value);
    return config.values.indexOf(text) >= 0 ? 'value:' + text : 'other';
  }
  function installLegend(layer, legend) {
    var config = layer.get('shhaCategories');
    if (!config) return;
    var matchesRule = function (name, feature) { return window[name]({ feature: feature, variables: {} }); };
    var classify = function (feature) { return categoryKey(feature, config, matchesRule); };
    var counts = new Map();
    layer.getSource().getFeatures().forEach(function (feature) {
      var key = classify(feature); counts.set(key, (counts.get(key) || 0) + 1);
    });
    var entries = Array.from(legend.querySelectorAll('img')).map(function (image, index) {
      var label = ''; var node = image.nextSibling;
      while (node && node.nodeName !== 'BR' && node.nodeName !== 'IMG') { label += node.textContent; node = node.nextSibling; }
      return { image: image.cloneNode(true), label: label.trim(), index: index };
    });
    if (config.kind === 'field') {
      var unused = config.values.slice();
      entries.forEach(function (entry) {
        if (!entry.label) { entry.key = 'other'; return; }
        var index = unused.indexOf(entry.label);
        if (index >= 0) { entry.key = 'value:' + entry.label; unused.splice(index, 1); }
      });
      entries.forEach(function (entry) {
        if (!entry.key) {
          if (!unused.length) throw new Error('Legend category does not match the exported styles.');
          entry.key = 'value:' + unused.shift();
        }
      });
      if (counts.has('other') && !entries.some(function (entry) { return entry.key === 'other'; })) entries.push({ key: 'other', label: 'Other / unclassified' });
    } else entries.forEach(function (entry) { entry.key = 'rule:' + entry.index; });
    var selected = new Map(entries.map(function (entry) { return [entry.key, true]; }));
    var allows = function (feature) { return selected.get(classify(feature)) === true; };
    var style = layer.getStyleFunction();
    layer.setStyle(function (feature, resolution) { return allows(feature) ? style(feature, resolution) : []; });
    layer.set('shhaAllowsFeature', allows);
    layer.set('shhaCategoryKey', classify);
    var title = layer.get('popuplayertitle');
    legend.replaceChildren();
    var actions = document.createElement('div'); actions.className = 'legend-actions';
    ['All', 'None'].forEach(function (text) {
      var button = document.createElement('button'); button.type = 'button'; button.textContent = text;
      button.setAttribute('aria-label', text + ' categories in ' + title);
      button.addEventListener('click', function () {
        selected.forEach(function (_, key) { selected.set(key, text === 'All'); });
        legend.querySelectorAll('input').forEach(function (input) { input.checked = text === 'All'; });
        layer.changed();
      }); actions.appendChild(button);
    }); legend.appendChild(actions);
    entries.forEach(function (entry) {
      var label = document.createElement('label'); label.className = 'legend-category';
      var checkbox = document.createElement('input'); checkbox.type = 'checkbox'; checkbox.checked = true;
      checkbox.dataset.categoryKey = entry.key;
      var text = entry.label || (entry.key === 'other' ? 'Other / unclassified' : 'Unlabeled category');
      checkbox.setAttribute('aria-label', text);
      checkbox.addEventListener('change', function () { selected.set(entry.key, checkbox.checked); layer.changed(); });
      label.appendChild(checkbox); if (entry.image) label.appendChild(entry.image);
      var caption = document.createElement('span'); caption.textContent = text; label.appendChild(caption);
      var count = document.createElement('span'); count.className = 'category-count'; count.textContent = counts.get(entry.key) || 0; label.appendChild(count);
      legend.appendChild(label);
    });
  }
  function installData(overlays, names, map, closeLayers) {
    var dialog = document.createElement('dialog'); dialog.id = 'map-data-dialog'; dialog.className = 'map-data-dialog';
    dialog.setAttribute('aria-labelledby', 'map-data-title');
    dialog.innerHTML = '<div class="data-heading"><h2 id="map-data-title">Layer data</h2><button type="button" id="data-close">Close</button></div>' +
      '<div class="data-controls"><label>Layer <select id="data-layer"></select></label><label>Search <input id="data-search" type="search" placeholder="Search this layer"></label><label class="data-filter"><input id="data-match-categories" type="checkbox">Match legend filters</label></div>' +
      '<p class="data-help">All published attributes are included. Scroll sideways for more columns. Zoom locates a record on the map.</p>' +
      '<div class="data-table-wrap"><table><thead></thead><tbody></tbody></table></div>' +
      '<div class="data-paging"><span id="data-count" role="status"></span><button type="button" id="data-prev">Previous</button><button type="button" id="data-next">Next</button></div>';
    document.body.appendChild(dialog);
    var layerSelect = dialog.querySelector('#data-layer'); var search = dialog.querySelector('#data-search');
    var match = dialog.querySelector('#data-match-categories'); var page = 0; var pageSize = 30;
    overlays.forEach(function (layer, index) {
      var option = document.createElement('option'); option.value = index; option.textContent = names[layer.get('popuplayertitle')] || layer.get('popuplayertitle'); layerSelect.appendChild(option);
    });
    var highlightSource = new ol.source.Vector();
    var highlight = new ol.layer.Vector({ source: highlightSource, displayInLayerSwitcher: false, zIndex: 1000,
      style: new ol.style.Style({ stroke: new ol.style.Stroke({ color: '#00d5ff', width: 4 }), fill: new ol.style.Fill({ color: 'rgba(0,180,230,.12)' }), image: new ol.style.Circle({ radius: 9, fill: new ol.style.Fill({ color: '#00d5ff' }), stroke: new ol.style.Stroke({ color: '#14394d', width: 2 }) }) }) });
    map.addLayer(highlight);
    function cellValue(value) { return value === null || value === undefined ? '—' : String(value); }
    function properties(feature) {
      var values = Object.assign({}, feature.getProperties()); delete values[feature.getGeometryName()]; return values;
    }
    function render() {
      var layer = overlays[Number(layerSelect.value)]; var features = layer.getSource().getFeatures();
      var query = search.value.trim().toLocaleLowerCase(); var allows = layer.get('shhaAllowsFeature');
      var rows = features.filter(function (feature) {
        if (match.checked && allows && !allows(feature)) return false;
        return !query || Object.values(properties(feature)).some(function (value) { return String(value === null ? '' : value).toLocaleLowerCase().includes(query); });
      });
      var fields = Array.from(new Set(features.flatMap(function (feature) { return Object.keys(properties(feature)); })));
      var priority = ['ADDRESS', 'FullName', 'Name', 'Development_Unit', 'Property_Maintenance', 'Speed_Limit'];
      fields.sort(function (a, b) { var ai = priority.indexOf(a), bi = priority.indexOf(b); return (ai < 0 ? 999 : ai) - (bi < 0 ? 999 : bi); });
      page = Math.min(page, Math.max(0, Math.ceil(rows.length / pageSize) - 1));
      var header = document.createElement('tr'); var location = document.createElement('th'); location.textContent = 'Map'; location.scope = 'col'; header.appendChild(location);
      var aliases = layer.get('fieldAliases') || {};
      fields.forEach(function (field) { var th = document.createElement('th'); th.scope = 'col'; th.textContent = aliases[field] || field; th.title = field; header.appendChild(th); });
      dialog.querySelector('thead').replaceChildren(header);
      var body = dialog.querySelector('tbody'); body.replaceChildren();
      rows.slice(page * pageSize, (page + 1) * pageSize).forEach(function (feature) {
        var tr = document.createElement('tr'); var td = document.createElement('td'); var button = document.createElement('button'); button.type = 'button'; button.textContent = 'Zoom';
        button.addEventListener('click', function () {
          highlightSource.clear(); highlightSource.addFeature(feature.clone()); dialog.close(); closeLayers();
          map.getView().fit(feature.getGeometry().getExtent(), { padding: [70, 60, 70, 60], maxZoom: 19, duration: 200 });
        }); td.appendChild(button); tr.appendChild(td);
        var values = properties(feature);
        fields.forEach(function (field) { var cell = document.createElement('td'); cell.textContent = cellValue(values[field]); tr.appendChild(cell); }); body.appendChild(tr);
      });
      if (!rows.length) { var empty = document.createElement('tr'); var td = document.createElement('td'); td.colSpan = fields.length + 1; td.textContent = 'No records match your search or category filters.'; empty.appendChild(td); body.appendChild(empty); }
      dialog.querySelector('#data-count').textContent = rows.length ? (page * pageSize + 1) + '–' + Math.min((page + 1) * pageSize, rows.length) + ' of ' + rows.length + ' records · ' + fields.length + ' attributes' : '0 records · ' + fields.length + ' attributes';
      dialog.querySelector('#data-prev').disabled = page === 0;
      dialog.querySelector('#data-next').disabled = (page + 1) * pageSize >= rows.length;
      dialog.querySelector('.data-table-wrap').scrollTop = 0;
    }
    function reset() { page = 0; render(); }
    layerSelect.addEventListener('change', function () { search.value = ''; reset(); }); search.addEventListener('input', reset); match.addEventListener('change', reset);
    dialog.querySelector('#data-prev').addEventListener('click', function () { page--; render(); });
    dialog.querySelector('#data-next').addEventListener('click', function () { page++; render(); });
    dialog.querySelector('#data-close').addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('close', function () { document.getElementById('map-data').focus(); });
    document.getElementById('map-fit').addEventListener('click', function () { highlightSource.clear(); });
    return function (layer) {
      closeLayers(); layerSelect.value = Math.max(0, overlays.indexOf(layer)); search.value = ''; page = 0; render(); dialog.showModal();
    };
  }
  window.ShhaLayerTools = { categoryKey: categoryKey, installLegend: installLegend, installData: installData };
})();
