---
"@nais/ds-svelte-community": minor
---

Upgrade to Aksel v8 (`@navikt/ds-css`, `@navikt/ds-tokens`, `@navikt/ds-react`, `@navikt/aksel-icons` 8.4.1)

- Updated spacing token mapping from `--ax-space-X` to `--ax-X` format and changed `tokenSubgroup` from `"spacing"` to `"space"` across all primitives
- Removed legacy spacing token lookup in `css.ts`
- Removed legacy token type imports (`AkselLegacySpacingToken`, `AkselLegacyBackgroundColorToken`, etc.)
- Accordion: removed `aria-hidden` from content, removed redundant `aksel-accordion__header-content` and `--no-animation` classes, added `data-color` to content-inner
- Button: removed variant-specific class (now uses only `data-variant` and `data-color`)
- Tag: removed variant-specific class
- Link: removed variant class and `data-variant` attribute
- Chips: updated toggle icon fill to `var(--ax-text-default)`
- ExpansionCard: removed `--open` and `--no-animation` classes
- GuidePanel: removed poster CSS classes in favor of `data-poster` attribute, added `data-color` to content-inner
- Pagination: removed `aksel-pagination__prev-next` classes, added `data-color="neutral"` to nav
- ProgressBar: fixed CSS variable prefix from `--__ac-` to `--__axc-`
- Stepper: removed conditional classes from `<li>`, added `data-interactive` attribute
- ReadMore: removed `tabIndex` from content
- GlobalAlert: added `centered` prop support
- Regenerated icons from `@navikt/aksel-icons` v8