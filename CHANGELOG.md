# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased]

### Changed

- No changes yet.

## [1.0.1] – 2026-04-04

### Fixed

- **`index.html`**: Corrected invalid `<!DOCTYPE html5>` to `<!DOCTYPE html>`.
- **`index.html` / `locmap.html`**: Removed invalid `alt` attribute from `<a>` elements (footer GitHub and CC links); `title` is used instead.
- **`locmap.js` / `translations.js`**: Removed invalid `alt` attribute being set on anchor elements via `links()`.
- **`locmap.js`**: Added a user-friendly error page when `locmap.html` is opened without the required `?loc=` URL parameter instead of silently failing with a `locs/null.json` fetch.
- **`locmap.js`**: `dohlR` and `dohlA` values now handle `null` (unprocessed census years) gracefully – displays `–` instead of `0 (0 %)`.
- **`translations.js`**: `urllang()` is no longer called on page init when the URL already contains the correct `lang` parameter, avoiding a redundant `history.pushState`.

### Changed

- **`index.html` / `locmap.html`**: Added `<meta name="viewport">` and `<meta name="description">` to both pages.
- **`index.html` / `locmap.html`**: All inline `style` attributes extracted to named CSS classes in `styles.css`.
- **`index.html`**: jQuery script tag now includes a Subresource Integrity (SRI) hash (`integrity` + `crossorigin`), matching the existing SRI on the Leaflet tag.
- **`locmap.html`**: jQuery script tag now includes a Subresource Integrity (SRI) hash.
- **`locmap.html`**: `locmap.js` script tag now has `defer`, consistent with best practice for scripts in `<head>`.
- **`locmap.html`**: Flag `<img>` elements used as language switchers now have `role="button"` and `tabindex="0"` for keyboard accessibility.
- **`locmap.js`**: All `var` declarations replaced with `let` / `const`.
- **`locmap.js`**: Translation JSON files (`trans_texts.json`, `trans_links.json`) are now fetched in parallel via `Promise.all()` instead of sequentially.
- **`locmap.js`**: `transSpan()` now falls back to `"cs"` and then the key name if `lang` is undefined, preventing broken HTML output.
- **`locmap.js`**: `$.grep()` replaced with native `Array.prototype.filter()`.
- **`locmap.js`**: `search_house` `cpRok` selection replaced with a lookup array + `find()` instead of a cascade of ternary operators.
- **`locmap.js`**: `dohlR` formatted with `toLocaleString()` instead of string `replace(".", ",")`, now that the value is stored as a number.
- **`locmap.js`**: Keyboard handler (Enter / Space) added for flag language-switcher buttons.
- **`translations.js`**: Fetched JSON data is now cached in memory; subsequent language switches do not re-fetch from the server.
- **`translations.js`**: `locs()` builds locality links using `$('<a>')` jQuery DOM construction instead of string concatenation, eliminating potential XSS.
- **`translations.js`**: `var` replaced with `const` / `let`; init code wrapped in `$(document).ready()`.
- **`translations.js`**: `console.log` for errors replaced with `console.error`.
- **`translations.js`**: Keyboard handler (Enter / Space) added for flag language-switcher buttons.
- **`locs/*.json`** (all 6 files): `dohlA` and `dohlR` fields converted from strings to numbers. Census years where data was not processed are now represented as `null` / `null` instead of `"0"` / `"0"`, removing the ambiguity between "zero found" and "not yet processed".
- **`styles.css`**: New utility classes added to support the inline-style extraction from HTML (`head_foot_side`, `head_foot_footer`, `footer-logo-block`, `content-wrap-index`, `locmap-sidebar`, etc.). Focus style added for `.flag` elements.
- **`README.md`**: Added project overview, tech stack table, supported languages, data file descriptions, and a local development note about the required HTTP server.

[Unreleased]: https://github.com/daelba/kehillot/compare/v1.0.1...HEAD
[1.0.1]: https://github.com/daelba/kehillot/releases/tag/v1.0.1
