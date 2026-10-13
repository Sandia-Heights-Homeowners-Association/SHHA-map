# Sandia Heights neighborhood map

SHHA's public neighborhood map, maintained in QGIS and exported with qgis2web.
This repository contains the public web export and its publishing helpers. It is
independent of the private SHHA Toolbox and does not read the homeowner database.

GitHub Pages publishes `site/` after checks pass on every push to `main`.
GitHub accounts with repository write access control publishing; visitors do not
sign in. Browser editing and Microsoft sign-in are not part of this version.

## Update the map

One-time setup: install Node.js 24 LTS and GitHub Desktop, then clone this
repository. No npm packages or GIS server are needed.

1. Fetch/pull the latest repository in GitHub Desktop.
2. Edit and save the master project in QGIS.
3. Use qgis2web's **OpenLayers** option to export to a **separate folder outside this repository**.
4. Open a terminal in the cloned repository and run:

   ```sh
   npm run import -- "/full/path/to/new/qgis2web-export"
   ```

   On Windows, use the Windows folder path in the quotes. The import command
   replaces the previous `site/` only after validation succeeds. It removes
   obsolete assets, reapplies the street background, map controls, responsive layout
   and title, and removes source
   editor usernames, local file paths and unused KML description/snippet fields.
   It does not change the original export, geometry, QGIS style definitions or
   visible map fields. The browser applies adjustable area transparency.

5. Review the changes in GitHub Desktop, write a short summary, commit and push.
6. Wait for **Check and publish map** in GitHub Actions to succeed, then check the
   live map. A successful push alone does not prove deployment succeeded.

New layers or fields require an explicit review/update of `public-fields.json`.
Contact-like values and unexpected fields stop the import/check without printing
feature values. These are basic checks, not a guarantee about arbitrary free text.
Keep homeowner names, contacts, private records and credentials out of this
**public** repository, including Git history.

Keep the original QGIS project and source GIS files in SHHA's separately backed-up
GIS storage. The web export is not a full source-project backup. A restored web
version can be published by reverting the relevant Git commit.

## Local check and preview

```sh
npm run check
python3 -m http.server 3140 --bind 127.0.0.1 --directory site
```

Open `http://localhost:3140`. Use `python` or `py` instead of `python3` when that is
the Python command on Windows. Check zoom, layer toggles and popups on a desktop
and phone. OpenStreetMap streets provide the default background. Area layers start
at 55% opacity so roads and landmarks remain visible; the slider changes area-layer
opacity without fading point markers. The Layers panel retains all eleven layers
with expandable legends, and Fit neighborhood restores the neighborhood extent.
Plain background is also available. The importer reapplies these controls.

The address-search control uses an external OpenStreetMap Nominatim service.
Street tiles load directly from `https://tile.openstreetmap.org/{z}/{x}/{y}.png`,
with visible contributor attribution and normal browser caching/referrer behavior.
There is no tile prefetch, offline download or proxy. This community service has
no availability guarantee; reassess hosting if traffic grows. See the
[OpenStreetMap tile policy](https://operations.osmfoundation.org/policies/tiles/).
The neighborhood layers still load from this website. No API key or paid map
service is configured.

## Hosting and domain

Default URL: https://sandia-heights-homeowners-association.github.io/SHHA-map/

Intended URL: https://map.sandiahomeowners.org

After the default URL is verified, configure the custom domain in GitHub Pages
and add this record in the existing InMotion DNS zone:

| Type | Name | Target |
| --- | --- | --- |
| CNAME | `map` | `sandia-heights-homeowners-association.github.io` |

The target has no `https://` prefix, repository path or trailing slash. DNS stays
with InMotion. GitHub's custom-domain certificate must be issued and HTTPS
enforcement verified before declaring the custom URL complete.

## Deployment status

October 13, 2026: initial public export prepared from Larry's September 29 export.
All eleven layers retained; source editor usernames, local paths and unused KML
description/snippet fields removed. JavaScript/assets/field checks passed on Node 24.
Retained properties and geometry match the original. Desktop/phone rendering,
zoom, layer switching and parcel popups passed browser checks with no console
errors. Failed imports preserve the preceding site. Initial deployment
`aecf4bea98c1383e88b010c1ff3b0f91479b3b31` passed GitHub Actions and anonymous
remote rendering; the published HTML/CSS/JS matched the checked files.
The default GitHub Pages address is live. Custom-domain binding/DNS/HTTPS and
Larry's maintainer access are pending user setup. The user chose to keep the
GitHub address for now. A browser tab icon is included
to avoid requesting a nonexistent favicon at the organization site's root.

October 13, 2026: added OpenStreetMap background, adjustable area transparency,
compact layer/legend panel, toolbar and neighborhood reset. Node 24 checks and
desktop/phone browser checks passed: basemap switching, eleven layer controls,
legend images, slider extremes, unchanged point opacity, reset and attribution.
The importer preserves these additions on re-export and versions the hosting CSS
and JavaScript URLs to avoid reusing stale browser assets. Automatic publication
continues through the existing GitHub Pages workflow; verify the exact release's
deployment result in GitHub Actions. The custom domain remains deferred.
