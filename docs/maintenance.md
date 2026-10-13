# Map maintenance

## Import and presentation

Use qgis2web's OpenLayers export. Import from a separate folder outside this
repository with `npm run import -- "/path/to/export"`. Validation completes
before the previous `site/` is replaced. Failed imports preserve the previous
site. The importer does not change original geometry or QGIS style definitions.
It removes obsolete assets, source-editor usernames, local paths and unused KML
description/snippet fields, and versions hosting CSS/JavaScript to avoid stale
browser assets.

The importer reapplies the title, responsive toolbar, layer panel, neighborhood
reset, basemaps, area transparency, category filters and public attribute tables.
Area layers start at 55% opacity; point markers keep their opacity. Categorized
legends derive from current QGIS styles, including ordered expression rules.
Unclassified features have their own category; an empty exported rule is not
reinterpreted as confirmed classification. Single-symbol layers keep whole-layer
toggles.

Attribute tables reuse the approved export. Search and 30-row paging run in
browser memory; optional legend filtering starts off so the full layer is
available. Zoom locates/highlights a record without changing selections.
Filters only change presentation. All published features/attributes remain
publicly accessible.

## Basemaps and search

OpenStreetMap provides the default street background and external Nominatim
address search. Street tiles load directly from
`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, with contributor attribution
and normal browser caching/referrer behavior. There is no proxy, prefetch or
offline tile download. This community service has no availability guarantee;
reassess hosting if traffic grows. Follow the
[OpenStreetMap tile policy](https://operations.osmfoundation.org/policies/tiles/).

USGS aerial tiles use the documented
[USGSImageryOnly service](https://www.usgs.gov/faqs/what-are-urls-imagery-services-national-map-and-are-they-cached-or-dynamic?items_per_page=6&page=1),
with USDA/USGS attribution. This is historical photography, not live imagery.
The source caps requests at level 16, the verified available neighborhood cache
level, and upscales closer views. There is no imagery prefetch/offline download.
Plain background is available without basemap tiles. Neighborhood layers load
from this website; no API key or paid map service is configured.

## Optional custom domain

The user currently uses the default GitHub Pages address; custom-domain setup is
deferred. If authorized later, configure `map.sandiahomeowners.org` in this
repository's GitHub Pages settings and add a CNAME in the authoritative SHHA DNS
zone:

| Type | Name | Target |
| --- | --- | --- |
| CNAME | `map` | `sandia-heights-homeowners-association.github.io` |

The target is a hostname with no protocol, repository path or trailing slash.
Verify current DNS hosting instead of assuming it matches an old runbook.
Confirm the custom-domain certificate and HTTPS enforcement before declaring
the custom URL live. Keep unrelated website/mail DNS records intact.
