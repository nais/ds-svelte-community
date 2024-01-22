# ds-svelte-community

## Developing this package

Once you've created a project and installed dependencies with `bun install`, start a development server:

> [!TIP]
> You might need to build [`ds-svelte-community-preprocess-svelte`](../ds-svelte-community-preprocess-svelte/) first.
> `cd ../ds-svelte-community-preprocess-svelte && bun run build && cd ../ds-svelte-community`

```bash
bun run storbyook # or
bun test
```

Everything inside `src/lib` is part of the library, everything inside `src/routes` can be used as a showcase or preview app.

## Adding new components

In general, we try to create components that behave like the components in the [React version](https://github.com/navikt/aksel/tree/main/%40navikt/core/react), with a few exceptions:

- Default user facing texts are in English, not Norwegian.
- We try to make the components feel more like Svelte components, and less like React components.

We stribe to generate HTML equal to the HTML generated by the React version of the component library.

We ensure this by adding a test for each component, that renders the component and compares the HTML to the HTML generated by the React version.

```typescript
import { bunmatch } from "$testlib/bunmatch";
import { Loader as ReactLoader } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import Loader from "./Loader.svelte";
import type { Props } from "./type";

describe("Loader", () => {
	it("renders with HTML similar to ds-react", async () => {
		// Often we can define one structure with props, used by both components.
		// If there's differences, we should pass separate props to each component.
		const props: Props = {
			title: "Loading",
		};
		expect(
			// bunmatch is a custom matcher that returns true if they are similar.
			// bunmatch will do some alterations to the HTML, e.g. sort attributes, classes and format the html.
			// The API is a bit of a hack until Bun supports custom matchers.
			// The first argument is the Svelte component, the second is the React component.
			// The third argument is an object with props and options.
			await bunmatch(render(Loader, props), ReactLoader, {
				props: {
					// Spread the props object, so we can add more props if needed.
					...props,
				},
				opts: {
					// There's a few functions that alters the HTML. E.g. this one removes any attribute where the function returns false.
					compareAttrs(node, attr) {
						const tagName = node.tagName.toLowerCase();
						// Title ids are unique
						if (tagName == "svg" && ["aria-labelledby"].includes(attr)) {
							return false;
						}

						if (tagName == "title" && attr == "id") {
							return false;
						}
						return true;
					},
				},
			}),
		).toBeTrue(); // bunmatch returns true if the HTML is similar.
	});

	afterEach(cleanup);
});
```

## Building

To build the library:

```bash
bun run package
```

To create a production version of the showcase app:

```bash
bun run build
```

## Publishing

The package is hosted on Google Artifact Registry. To publish a new version:

Update the version in `package.json` and commit the change.

Then run:

```bash
# From root of project
bun run gar-login
# From this directory
bun run publish
```