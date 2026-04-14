---
"@nais/ds-svelte-community": minor
---

Fieldset: React parity fixes

**Breaking changes:**

- Replaced `aksel-sr-only` class with `visuallyHidden` prop on Label and BodyShort (now uses `aksel-typo--visually-hidden`, matching React). Code targeting the old `aksel-sr-only` class on hidden legends/descriptions will need updating.
- Error state (`hasError`, `showErrorMsg`) is now suppressed when `readOnly` is true, matching React's `useFormField` behavior. Fieldsets that previously showed errors alongside `readOnly` will no longer do so.

**New features:**

- Added `readOnly` prop with `aksel-fieldset--readonly` class.
- Added PadlockLockedFillIcon (with `aria-hidden`) in legend when `readOnly` is true, matching React's `ReadOnlyIcon` variant used by Fieldset.
- Added `visuallyHidden` support to the Label component (was missing, needed by Fieldset and others).