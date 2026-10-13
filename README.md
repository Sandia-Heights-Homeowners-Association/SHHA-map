# Sandia Heights neighborhood map

SHHA's public interactive neighborhood map, maintained in QGIS and published as a
static OpenLayers website. Visitors can explore neighborhood layers, inspect
public attributes, filter categories and switch between street, aerial and plain
backgrounds.

**Live map:** [GitHub Pages](https://sandia-heights-homeowners-association.github.io/SHHA-map/).

## Architecture and hosting

| Component | Responsibility |
| --- | --- |
| Master QGIS project and source GIS files | Maintained separately in SHHA's backed-up GIS storage. |
| qgis2web OpenLayers export | Produces the public geometry, styles and browser assets. |
| This public repository | Validated export in `site/`, import/check scripts and the approved `public-fields.json` field list. |
| GitHub Pages | Serves `site/` after checks pass on pushes to `main`. |
| Browser | Runs map controls, attribute search/paging, category filters and record location. |
| External map services | OpenStreetMap streets/address search and historical USGS aerial tiles, with attribution. |

**Azure does not host this map.** There is no application server, homeowner
database connection, login, Microsoft integration or GIS backend. GitHub write
access controls publication; visitors have read-only access to the entire export.

The default GitHub Pages address is the current public address.
`map.sandiahomeowners.org` is a possible future custom domain; its setup is
deferred. No custom-domain cutover is needed to maintain the existing site.

## Update and publish

Use **Node.js 24 LTS**, Git (or GitHub Desktop), QGIS and qgis2web. No npm
dependencies or GIS server are needed.

1. Pull the latest repository before editing.
2. Edit/save the master QGIS project. Export using qgis2web's **OpenLayers**
   option into a separate folder outside this repository.
3. Import the export:

   ```sh
   npm run import -- "/full/path/to/new/qgis2web-export"
   npm run check
   npm test
   ```

4. Preview locally:

   ```sh
   python3 -m http.server 3140 --bind 127.0.0.1 --directory site
   ```

   Open `http://localhost:3140/`. On Windows, use `python` or `py` as appropriate.
   Check desktop/phone layout, zoom, layer/category controls, popups and tables.
5. Review the diff, commit and push to `main`. Verify the exact commit's
   **Check and publish map** deployment in GitHub Actions, then inspect the live map.

The importer validates before replacing `site/`, removes obsolete assets,
scrubs source-editor usernames/local paths/unused description fields, and reapplies
the website controls and presentation. The master project/export stays unchanged.
Read [maintenance](docs/maintenance.md) for import behavior and external-service
details.

## Public-data boundary and recovery

Everything in `site/` and Git history is public, including attributes that are
not currently visible in a popup, category or table. Hiding a layer or column
does not protect data. Keep homeowner names, contacts, private records and
credentials out of exports and commits.

New layers/fields require explicit review of `public-fields.json`. Unexpected
fields and contact-like values stop import/check without printing feature values.
Automated checks do not replace reviewing arbitrary free text.

Back up the master QGIS project and source GIS files separately. A web export is
not a complete project backup. To restore a published version, revert the
appropriate Git commit, pass checks and verify its new Pages deployment.

[Maintenance guide](docs/maintenance.md) covers controls, imagery, service
constraints and optional domain setup.
