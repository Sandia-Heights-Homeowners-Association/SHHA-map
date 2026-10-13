/* Hosting adjustments kept separate from Larry's generated map. */
(function () {
  var target = document.getElementById('map');
  if (!target || typeof map === 'undefined') return;
  target.setAttribute('aria-label', 'Interactive Sandia Heights neighborhood map');
  var updateSize = function () { map.updateSize(); };
  window.addEventListener('resize', updateSize);
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(updateSize).observe(target);
  updateSize();
  // The exported desktop extent is very wide. Fit the initial visible map on phones.
  if (window.innerWidth < 650 && typeof ol !== 'undefined' && typeof layersList !== 'undefined') {
    var extent = ol.extent.createEmpty();
    layersList.forEach(function (layer) {
      var source = layer.getSource();
      if (layer.getVisible() && source && typeof source.getExtent === 'function') {
        ol.extent.extend(extent, source.getExtent());
      }
    });
    if (!ol.extent.isEmpty(extent)) map.getView().fit(extent, { padding: [64, 48, 48, 48] });
  }
})();
