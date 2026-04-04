# kehillot

Database and map application of the Jewish settlement of the Bohemian lands.

Currently hosted at https://map.kehillot.eu.

---

## Project overview

The application presents data on Jewish settlement in selected towns in the Bohemian lands between 1857 and 1930. It consists of two main views:

- **`index.html`** – landing page with a list of available localities
- **`locmap.html`** – detail page for each locality with an interactive map and census data

> **Local development note:** The application fetches JSON data files via AJAX, which requires an HTTP server. Opening the HTML files directly via `file://` will fail with a CORS error. Run a local server first, e.g.:
> ```
> python -m http.server 8080
> ```
> Then open `http://localhost:8080`.

### Tech stack

| Component | Technology |
|---|---|
| UI / DOM | jQuery 3.4.1 |
| Map rendering | Leaflet 1.7.1 |
| Map data | OpenHistoricalMap (OSM tiles) / GeoJSON via Overpass |
| Person data | Wikidata SPARQL endpoint |
| Localisation | Custom JSON-based system (`trans_texts.json`, `trans_links.json`, `trans_locs.json`) |
| Fonts / assets | Custom `vendor/` directory |

### Supported languages

Czech (`cs`), English (`en`), German (`de`) – switchable via flag icons.

### Data files

- **`locs/*.json`** – locality datasets (GeoJSON features + census records)
- **`trans_texts.json`** – UI string translations
- **`trans_links.json`** – translated hyperlinks
- **`trans_locs.json`** – locality name translations and URL slugs

---

