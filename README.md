# ds-svelte-community

A Svelte component library for [Aksel](https://aksel.nav.no).

## Usage

`ds-svelte-community` is hosted on Google Artifact Registry.

Check out the [Documentation](https://nais.io/ds-svelte-community) for examples of how to install the library and how to use the components.

---

## Development

> [!WARNING]
> Dependabot PR-s are enabled for visibility, but merging them will cause errors with tests etc. This is because we're using Bun, and
> Dependabot doesn't know how to handle it. To update dependencies, you need to do it manually.

We use [Bun](https://bun.sh) and [asdf](https://asdf-vm.com) to manage dependencies and run scripts.

Run `asdf install` to install the correct version of `bun`. (You might need to run `asdf plugin add bun` first.)

We have configured `bun` to also create a `yarn.lock` file, which is only used by Dependabot, as it doesn't support `bun` yet.

### Packages

The library is split into multiple packages in the `packages` directory. Each package has its own `README.md` with more information.

| Package                                 | Description                                                             |
| --------------------------------------- | ----------------------------------------------------------------------- |
| `ds-svelte-community`                   | The actual component library, including icons.                          |
| `ds-svelte-community-preprocess-svelte` | A preprocessing step that optimizes usage of the component library.     |
| `vite-plugin-svelte-docs`               | A Vite plugin that generates documentation JSON from Svelte components. |

## GitHub copilot in use

Some of the code in this repository is generated by GitHub Copilot.

## Changesets

We use [Changesets](https://github.com/changesets/changesets) to manage versioning and changelogs.
To create a new version, run `bun x changeset` and follow the instructions.

All changes should happen through a pull request.
