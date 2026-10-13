/* Public map controls; reapplied after every qgis2web export. */
(function () {
  var target = document.getElementById('map');
  if (!target || typeof map === 'undefined' || typeof ol === 'undefined') return;
  target.setAttribute('aria-label', 'Interactive Sandia Heights neighborhood map');
  var overlays = layersList.slice();
  var extent = ol.extent.createEmpty();
  var areaLayers = overlays.filter(function (layer) {
    var source = layer.getSource();
    var feature = source && source.getFeatures && source.getFeatures()[0];
    return feature && /Polygon/.test(feature.getGeometry().getType());
  });
  overlays.forEach(function (layer) {
    var source = layer.getSource();
    if (layer.getVisible() && source && typeof source.getExtent === 'function') ol.extent.extend(extent, source.getExtent());
    if (source && source.setAttributions) source.setAttributions('<a href="https://sandiahomeowners.org" target="_blank" rel="noopener">SHHA neighborhood layers</a>');
  });
  if (ol.extent.isEmpty(extent)) areaLayers.forEach(function (layer) { ol.extent.extend(extent, layer.getSource().getExtent()); });
  var streetSource = new ol.source.OSM({
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png', maxZoom: 19, crossOrigin: 'anonymous',
    attributions: '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap contributors</a>'
  });
  var streetLayer = new ol.layer.Tile({ source: streetSource, preload: 0, visible: true, displayInLayerSwitcher: false });
  streetLayer.set('shhaBasemap', true);
  map.getLayers().insertAt(0, streetLayer);
  var toolbar = document.createElement('header');
  toolbar.className = 'map-toolbar';
  toolbar.innerHTML = '<div class="map-brand"><img src="shha-map.svg" alt="" width="30" height="30">' +
    '<div><h1>Sandia Heights</h1><p>Neighborhood map</p></div></div>' +
    '<div class="map-actions">' +
    '<button type="button" id="map-layers" aria-expanded="false" aria-controls="map-layer-panel">Layers</button>' +
    '<button type="button" id="map-fit">Fit neighborhood</button>' +
    '<label class="background-control">Background <select id="map-background"><option value="streets">OpenStreetMap</option><option value="plain">Plain</option></select></label>' +
    '<label class="opacity-control" for="map-opacity">Area opacity <input id="map-opacity" type="range" min="0" max="100" value="55"><output id="map-opacity-value" for="map-opacity">55%</output></label>' +
    '</div>';
  target.parentNode.insertBefore(toolbar, target);
  document.body.classList.add('has-map-toolbar');
  var panel = document.createElement('aside');
  panel.id = 'map-layer-panel'; panel.className = 'map-layer-panel'; panel.setAttribute('aria-label', 'Neighborhood layers'); panel.hidden = true;
  panel.innerHTML = '<div class="layer-panel-heading"><h2>Neighborhood layers</h2><button type="button" aria-label="Close layers">×</button></div>' +
    '<p class="layer-panel-help">Choose what to show. Open a legend to see the colors.</p>';
  target.parentNode.appendChild(panel);
  var layerButton = document.getElementById('map-layers');
  function setPanelOpen(open) { panel.hidden = !open; layerButton.setAttribute('aria-expanded', String(open)); }
  layerButton.addEventListener('click', function () { setPanelOpen(panel.hidden); });
  panel.querySelector('button').addEventListener('click', function () { setPanelOpen(false); layerButton.focus(); });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !panel.hidden) { setPanelOpen(false); layerButton.focus(); }
  });
  if (typeof layerSwitcher !== 'undefined') map.removeControl(layerSwitcher);
  var labels = {
    'Sandia Heights Parcels — Development Units Parcels': 'Development units',
    'Sandia Heights Parcels — County Zoning': 'County zoning',
    'Sandia Heights Parcels — Solar Panels': 'Solar panels',
    'Sandia Heights Parcels — Property Maintenance': 'Property maintenance',
    'Sandia Heights Parcels — Undeveloped Parcels': 'Undeveloped parcels',
    'SH Unmaintained Areas': 'Unmaintained areas',
    'Sandia Heights Development Units Boundaries': 'Development unit boundaries',
    'Roads and Streets - Speed Limits': 'Speed limits', 'Roads and Streets': 'Roads and streets',
    'BookExchanges': 'Book exchanges', 'Trees': 'Trees'
  };
  var ordered = overlays.slice().sort(function (a, b) { return Number(b.getVisible()) - Number(a.getVisible()); });
  ordered.forEach(function (layer, index) {
    var row = document.createElement('div'); row.className = 'map-layer-row';
    var label = document.createElement('label');
    var checkbox = document.createElement('input'); checkbox.type = 'checkbox'; checkbox.id = 'map-layer-' + index; checkbox.checked = layer.getVisible();
    var name = layer.get('popuplayertitle') || 'Map layer';
    label.appendChild(checkbox); label.appendChild(document.createTextNode(labels[name] || name));
    checkbox.addEventListener('change', function () { layer.setVisible(checkbox.checked); });
    layer.on('change:visible', function () { checkbox.checked = layer.getVisible(); });
    row.appendChild(label);
    var title = layer.get('title') || ''; var legendStart = title.search(/<br\s*\/?\s*>/i);
    if (legendStart !== -1) {
      var details = document.createElement('details'); var summary = document.createElement('summary'); summary.textContent = 'Legend'; details.appendChild(summary);
      var legend = document.createElement('div'); legend.className = 'map-legend';
      // Preserve the same generated legend HTML previously shown by qgis2web.
      legend.innerHTML = title.slice(legendStart).replace(/^<br\s*\/?\s*>/i, ''); details.appendChild(legend); row.appendChild(details);
    }
    panel.appendChild(row);
  });
  var opacity = document.getElementById('map-opacity');
  function applyOpacity() {
    areaLayers.forEach(function (layer) { layer.setOpacity(Number(opacity.value) / 100); });
    document.getElementById('map-opacity-value').textContent = opacity.value + '%';
  }
  opacity.addEventListener('input', applyOpacity); applyOpacity();
  document.getElementById('map-background').addEventListener('change', function (event) { streetLayer.setVisible(event.target.value === 'streets'); });
  var status = document.createElement('div'); status.className = 'map-background-status'; status.setAttribute('role', 'status'); status.hidden = true;
  status.textContent = 'Street background is unavailable. Try again later or choose Plain.'; target.parentNode.appendChild(status);
  streetSource.on('tileloaderror', function () { status.hidden = !streetLayer.getVisible(); });
  streetSource.on('tileloadend', function () { status.hidden = true; });
  streetLayer.on('change:visible', function () { if (!streetLayer.getVisible()) status.hidden = true; });
  function updateSize() {
    document.documentElement.style.setProperty('--map-toolbar-height', toolbar.getBoundingClientRect().height + 'px'); map.updateSize();
  }
  function fitNeighborhood(animate) {
    updateSize(); if (!ol.extent.isEmpty(extent)) map.getView().fit(extent, { padding: [30, 34, 42, 34], duration: animate ? 200 : 0 });
  }
  document.getElementById('map-fit').addEventListener('click', function () { fitNeighborhood(true); }); window.addEventListener('resize', updateSize);
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(updateSize).observe(toolbar);
  updateSize(); fitNeighborhood(false);
})();
