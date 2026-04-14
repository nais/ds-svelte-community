---
"@nais/ds-svelte-community": minor
---

Popover: React parity fixes

**Breaking changes:**

- Default `offset` changed from `4` to `8` (matching React). Popovers will appear slightly further from their anchor element.
- Flip fallback placements now match React's logic: left/right placements fall back to bottom/top; top/bottom placements fall back to the opposite side preserving alignment. This may change where popovers reposition when near viewport edges.

**New features:**

- Added `onClose` callback prop, called when the popover is dismissed via focusout.
- Added `aria-hidden` attribute on root popover element (reflects `!open || !anchorEl`).

**Bug fixes:**

- Fixed focusout handler: now checks if focus moved into the popover before closing, preventing premature dismissal.
- Fixed focusout event listener cleanup on component destroy.
- Fixed restProps spread order (spread before class, per project convention).