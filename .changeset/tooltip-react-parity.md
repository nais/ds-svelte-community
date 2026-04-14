---
"@nais/ds-svelte-community": minor
---

Tooltip: React parity fixes

**Breaking changes:**

- `offset` default changed from `10` to `8` (with arrow) / `4` (without arrow), matching React's defaults. Tooltip positioning will shift slightly closer to the anchor element.
- Removed `role="tooltip"` from the wrapper `<div>`. The role is now correctly placed only on the tooltip content `<div>`. Code that queries the wrapper by `role="tooltip"` will need to be updated.
- Keyboard shortcut separator changed from Norwegian `" eller "` to English `"or"` (matching React's i18n default). Use the new `shortcutSeparator` prop to customize.
- Arrow now always renders when `arrow={true}` (the default). Previously it was hidden when a theme context existed; this no longer affects arrow rendering.
- Tooltip positioning replaced from manual CSS calculation to `svelte-floating-ui` with `offset`, `shift`, `flip`, and `arrow` middleware, matching React's `@floating-ui/react` setup. Positioning behavior is improved but may differ from the previous implementation.

**New features:**

- Added `defaultOpen` prop to start the tooltip in an open state.
- Added `onOpenChange` callback, invoked when the tooltip open state changes.
- Added `describesChild` prop: when `false` (default), applies `aria-label` to the wrapper; when `true`, applies `aria-describedby` (open) or `title` (closed).
- Added `id` prop to override the auto-generated tooltip id.
- Added `shortcutSeparator` prop (default `"or"`) for i18n customization of keyboard shortcut group separators.
- Added `aria-keyshortcuts` attribute on wrapper element when `keys` are provided.
- Added `aria-hidden="true"` on keyboard shortcuts `<span>` (matching React).
- Added `onfocus`/`onblur` handlers and `Escape` key dismissal for keyboard accessibility.

**Bug fixes:**

- Tooltip id is now uniquely generated via `$props.id()` instead of being hardcoded as `"r7"`.