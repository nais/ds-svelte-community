---
"@nais/ds-svelte-community": minor
---

Tabs: React parity fixes

**Breaking changes:**

- `loop` default changed from `false` to `true` (matching React). If you relied on the default non-looping behavior, explicitly pass `loop={false}`.
- Removed `data-orientation="horizontal"` from root `<div>` and `TabList` inner `<div>` (React does not render these).

**New features:**

- Added `defaultValue` prop for uncontrolled initial tab selection.
- Added `onChange` callback, invoked when the active tab changes.
- Added `fill` prop to stretch tabs to fill available container space (adds `aksel-tabs__tab--fill` class).
- Added `label` string prop to `Tab` as an alternative to children snippets.
- Added `lazy` prop to `TabPanel` (default `true`); set to `false` to always render panel content regardless of selection state.
- `TabPanel` now renders `data-state="active"|"inactive"` (matching React).
- `Tab` `value` prop is now optional (supports either `value` or `defaultValue`).

**Bug fixes:**

- Selected tab now correctly gets `tabindex="0"` in SSR (previously all tabs got `-1` because `bind:this` is undefined server-side).