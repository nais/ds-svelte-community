---
"@nais/ds-svelte-community": minor
---

Modal: React parity fixes

**New features:**

- Added `header` prop as object (`ModalHeaderProps`: `heading`, `label?`, `icon?`, `size?`, `closeButton?`) for rendering a structured header with optional label, icon, and close button — matching React's compound header API.
- Added `closeOnBackdropClick` prop (default `true`) to control whether clicking the backdrop closes the modal.
- Added `placement` prop (`"top" | "center"`) with `aksel-modal--top` class for top-aligned modals.
- Added `onBeforeClose` callback that can prevent close by returning `false`.
- Auto-set `aria-labelledby` on `<dialog>` when header object is used.

**Bug fixes:**

- Close button now goes through `tryClose()` which respects `onBeforeClose`.
- Added `oncancel` handler on dialog for Escape key interception via `onBeforeClose`.
- Added `onkeydown` on close button to prevent repeated Enter/Space from closing.
- Added `onkeydown` on dialog to stop Escape propagation (matching React).