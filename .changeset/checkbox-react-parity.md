---
"@nais/ds-svelte-community": minor
---

Checkbox: React parity fixes

**Breaking changes:**

- `hideLabel` now hides both the label **and** the description (previously only hid the label). This matches React's behavior where `hideLabel` applies `visuallyHidden` to both.
- Label visually-hidden class changed from `aksel-sr-only` to `aksel-typo--visually-hidden` (matching React's class).
- Removed `aria-labelledby` from the checkbox input and `id` from the label element. React uses `for`/`htmlFor` association instead, which was already in place.

**New features:**

- Added `readonly` prop with `aksel-checkbox--readonly` class, click prevention, and change blocking.
- Added `data-color` attribute support (`data-color={hasError ? "danger" : color}`).

**Bug fixes:**

- Fixed `hideLabel` JSDoc (was a copy-paste of the error prop description).