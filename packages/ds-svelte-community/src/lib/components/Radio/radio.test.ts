import { render } from "$testlib/render";
import { Radio as ReactRadio, RadioGroup as ReactRadioGroup } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import RadioGroup from "./RadioGroup.test.svelte";

describe("RadioGroup", () => {
	for (const size of ["small", "medium"] as const) {
		for (const initOpen of [false, true] as const) {
			it(`renders with HTML similar to ds-react, size: ${size}, open: ${initOpen}`, async () => {
				const props = {
					legend: "Legend text",
					description: "Description text",
					size,
					value: "10",
				};
				expect(render(RadioGroup, props)).toMimicReact(ReactRadioGroup, {
					props: {
						legend: "Legend text",
						description: "Description text",
						size,
						defaultValue: "10",
					},
					children: [
						React.createElement(ReactRadio, {
							value: "0",
							children: "0-10 years",
						}),
						React.createElement(ReactRadio, {
							value: "10",
							children: "10-20 years",
						}),
					],
					opts: {
						compareAttrs(node, attr) {
							// Remove attrs known to be unique
							if (
								["id", "aria-labelledby", "name", "for", "checked", "aria-describedby"].includes(
									attr,
								)
							) {
								return false;
							}
							return true;
						},
					},
				});
			});
		}
	}
});
