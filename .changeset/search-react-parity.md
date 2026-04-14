---
"@nais/ds-svelte-community": minor
---

Search: React parity fixes

**Breaking changes:**

- `clearButtonLabel` default changed from `"Clear"` to `"Clear field"` (matching React i18n default).
- Removed `title` from simple variant `MagnifyingGlassIcon` — icon now only has `aria-hidden` (matching React).

**New features:**

- Added `onChange` callback prop, called with the value string on input change.
- Added `onSearchClick` callback prop, called with the current value when the search button is clicked.
- Added `htmlSize` prop that sets the native `size` attribute on the input and adds `aksel-search--with-size` class.

**Bug fixes:**

- Fixed description `id` bug: description element previously shared the same id as the input, now correctly uses a `"-description"` suffix.
- Added `id` to error div for accessibility parity.