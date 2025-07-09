import { Checkbox as ReactCheckbox, CheckboxGroup as ReactCheckboxGroup } from "@navikt/ds-react";

import { render, someRandomText, someRandomTextSnippet } from "$testlib/render";
import { describe, expect, it } from "bun:test";
import React from "react";
import Checkbox from "./CheckboxGroup.test.svelte";
import { type CheckboxGroupProps, type CheckboxProps } from "./type";

describe("CheckboxGroup", () => {
	it("renders CheckboxGroup similar to ds-react", async () => {
		const props: Omit<CheckboxGroupProps, "children"> = {
			legend: "Checkbox legend",
			value: ["val2", "val3"],
		};

		const items: { value: string; content: string }[] = [
			{ value: "val1", content: someRandomText },
			{ value: "val2", content: someRandomText },
			{ value: "val3", content: someRandomText },
			{ value: "val4", content: someRandomText },
		];

		const svelteItems: CheckboxProps[] = items.map((v) => {
			return {
				value: v.value,
				children: someRandomTextSnippet,
			};
		});
		expect(render(Checkbox, { wrapper: props, items: svelteItems })).toMimicReact(
			ReactCheckboxGroup,
			{
				props: {
					legend: props.legend!,
					defaultValue: props.value,
				},
				children: items.map((v, i) => {
					return React.createElement(ReactCheckbox, {
						value: v.value,
						children: v.content,
						key: i,
					});
				}),
				opts: {
					compareAttrs: ignoreKnownUnique,
				},
			},
		);
	});

	// TODO(thokra): Check sizes etc.
	it(`renders CheckboxGroup similar to ds-react with descriptions`, async () => {
		const props: Omit<CheckboxGroupProps, "children"> = {
			legend: "Checkbox legend",
			description: "Checkbox description",
			value: ["val4"],
		};

		const items: { value: string; description?: string; content: string }[] = [
			{ value: "val1", description: "Desc", content: someRandomText },
			{ value: "val4", content: someRandomText },
		];

		const svelteItems: CheckboxProps[] = items.map((v) => {
			return {
				value: v.value,
				description: v.description,
				children: someRandomTextSnippet,
			};
		});
		expect(render(Checkbox, { wrapper: props, items: svelteItems })).toMimicReact(
			ReactCheckboxGroup,
			{
				props: {
					legend: props.legend!,
					description: props.description!,
					defaultValue: props.value,
				},
				children: items.map((v, i) => {
					return React.createElement(ReactCheckbox, {
						value: v.value,
						description: v.description,
						children: v.content,
						key: i,
					});
				}),
				opts: {
					compareAttrs: ignoreKnownUnique,
				},
			},
		);
	});
});

function ignoreKnownUnique(node: HTMLElement, attr: string) {
	const tag = node.tagName.toLowerCase();
	if (tag == "input" && ["aria-labelledby", "id"].includes(attr)) {
		return false;
	}
	if (tag == "label" && ["for", "id"].includes(attr)) {
		return false;
	}
	if (tag == "span" && attr == "id") {
		return false;
	}
	if (tag == "div" && attr == "id") {
		return false;
	}
	if (tag == "input" && attr == "checked") {
		return false;
	}
	return true;
}
