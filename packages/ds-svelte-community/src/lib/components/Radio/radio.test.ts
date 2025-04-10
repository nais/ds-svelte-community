import { bunmatch } from "$testlib/bunmatch";
import { RadioGroup as ReactRadioGroup, Radio as ReactRadio } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import RadioGroup from "./RadioGroup.test.svelte";
import React from "react";
import type { ComponentProps } from "svelte";

describe("RadioGroup", () => {
	for (const size of ["small", "medium"] as const) {
		for (const initOpen of [false, true] as const) {
			it(`renders with HTML similar to ds-react, size: ${size}, open: ${initOpen}`, async () => {
				const props: ComponentProps<RadioGroup> = {
					legend: "Legend text",
					description: "Description text",
					size,
					value: "10",
				};
				expect(
					await bunmatch(render(RadioGroup, props), ReactRadioGroup, {
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
					}),
				).toBeTrue();
			});
		}
	}

	afterEach(cleanup);
});
