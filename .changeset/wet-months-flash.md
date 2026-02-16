---
"@nais/ds-svelte-community": minor
---

Update components to match Aksel React v8:

- **ToggleGroup**: Add `fill` and `data-color` props, `aria-labelledby` on radiogroup, `Label as="div"` with id, remove variant-specific class in favor of `data-color`
- **Tooltip**: Update `keys` prop type to support multiple shortcut groups (`string[] | [string[], string[]]`)
- **InternalHeader.User**: Support `Snippet` for `name` and `description` props, change inner wrapper from `<span>` to `<div>` to match React
- **ActionMenu.Item**: Add `iconPosition` prop for right-aligned icons, use `data-marker` attribute instead of `--has-icon` class
- **ActionMenu.CheckboxItem / RadioItem**: Replace `--has-icon` class with `data-marker="left"` attribute