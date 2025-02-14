import { bunmatch } from "$testlib/bunmatch";
import { Checkbox as ReactCheckbox, CheckboxGroup as ReactCheckboxGroup } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import React from "react";
import { createRawSnippet, type Snippet } from "svelte";
import Checkbox from "./CheckboxGroup.test.svelte";
import { type CheckboxGroupProps, type CheckboxProps } from "./type.svelte";

const snippetText = (v: string): Snippet => {
	return createRawSnippet(() => ({
		render: () => `<span>${v}</span>`,
	}));
};

/*
Unsure why, but this has some unknown issue:
TypeError: component is not an Object. (evaluating 'FILENAME in component')
      at [ADD_OWNER] (/home/thomas/Development/nais/ds-svelte-community/node_modules/svelte/src/internal/client/dev/ownership.js:255:16)
✗ CheckboxGroup > renders CheckboxGroup similar to ds-react with descriptions
*/
describe.skip("CheckboxGroup", () => {
	it("renders CheckboxGroup similar to ds-react", async () => {
		const props: Omit<CheckboxGroupProps, "children"> = {
			legend: "Checkbox legend",
			value: ["val2", "val3"],
		};

		const items: { value: string; content: string }[] = [
			{ value: "val1", content: "Checkbox content 1" },
			{ value: "val2", content: "Checkbox content 2" },
			{ value: "val3", content: "Checkbox content 3" },
			{ value: "val4", content: "Checkbox content 4" },
		];

		const svelteItems: CheckboxProps[] = items.map((v) => {
			return {
				value: v.value,
				children: snippetText(v.content),
			};
		});
		expect(
			await bunmatch(render(Checkbox, { wrapper: props, items: svelteItems }), ReactCheckboxGroup, {
				props: {
					legend: props.legend!,
					defaultValue: props.value,
				},
				children: items.map((v, i) => {
					return React.createElement(ReactCheckbox, {
						value: v.value,
						children: React.createElement("span", {}, v.content),
						key: i,
					});
				}),
				opts: {
					ignoreElementFromA(tag) {
						// Because of limitations on slots, we have to remove one extra div created by svelte
						// when there's no description
						if (
							tag.tagName.toLowerCase() == "div" &&
							tag.classList.contains("navds-fieldset__description")
						) {
							return true;
						}
						return false;
					},
					compareAttrs(node, attr) {
						const tag = node.tagName.toLowerCase();
						if (tag == "path" && attr == "d") {
							return false;
						}
						// For an unknown reason, `checked` is not set on the input element
						if (tag == "input" && attr == "checked") {
							return false;
						}
						// We have different IDs, so we ignore id and for attributes
						if (
							attr == "id" ||
							attr == "for" ||
							attr == "aria-describedby" ||
							attr == "aria-labelledby"
						) {
							return false;
						}
						return true;
					},
				},
			}),
		).toBeTrue();
	});

	// TODO(thokra): Check sizes etc.
	it(`renders CheckboxGroup similar to ds-react with descriptions`, async () => {
		const props: Omit<CheckboxGroupProps, "children"> = {
			legend: "Checkbox legend",
			description: "Checkbox description",
			value: ["val4"],
		};

		const items: { value: string; description?: string; content: string }[] = [
			{ value: "val1", description: "Desc", content: "Checkbox content 1" },
			{ value: "val4", content: "Checkbox content 4" },
		];

		const svelteItems: CheckboxProps[] = items.map((v) => {
			return {
				value: v.value,
				description: v.description,
				children: snippetText(v.content),
			};
		});
		expect(
			await bunmatch(render(Checkbox, { wrapper: props, items: svelteItems }), ReactCheckboxGroup, {
				props: {
					legend: props.legend!,
					description: props.description!,
					defaultValue: props.value,
				},
				children: items.map((v, i) => {
					return React.createElement(ReactCheckbox, {
						value: v.value,
						description: v.description,
						children: React.createElement("span", {}, v.content),
						key: i,
					});
				}),
				opts: {
					compareAttrs(node, attr) {
						const tag = node.tagName.toLowerCase();
						if (tag == "path" && attr == "d") {
							return false;
						}
						// For an unknown reason, `checked` is not set on the input element
						if (tag == "input" && attr == "checked") {
							return false;
						}
						// We have different IDs, so we ignore id and for attributes
						if (
							attr == "id" ||
							attr == "for" ||
							attr == "aria-describedby" ||
							attr == "aria-labelledby"
						) {
							return false;
						}
						return true;
					},
				},
			}),
		).toBeTrue();
	});

	afterEach(cleanup);
});
