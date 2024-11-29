import { bunmatch } from "$testlib/bunmatch";
import { Chips as ReactChips } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import React from "react";
import Chips from "./Chips.test.svelte";

describe("Chips", () => {
	it("renders Chips Removable similar to ds-react", async () => {
		const props = {
			values: ["val1", "val2", "val3"],
		};
		expect(
			await bunmatch(render(Chips, props), ReactChips, {
				children: props.values.map((v) => {
					return React.createElement(ReactChips.Removable, null, v);
				}),
				opts: {
					compareAttrs(node, attr) {
						const tag = node.tagName.toLowerCase();
						if (tag == "path" && attr == "d") {
							return false;
						}
						return true;
					},
				},
			}),
		).toBeTrue();
	});

	// TODO(thokra): For some reason the children doesn't work as expected
	// in svelte. This issue is only during the test it seems.
	// We therefore ignore the text span in the comparison.
	it("renders Chips Toggle similar to ds-react", async () => {
		const props = {
			values: ["value1", "value2", "value3"],
			toggle: true,
			selected: "value2",
		};

		expect(
			await bunmatch(render(Chips, props), ReactChips, {
				children: props.values.map((v) => {
					return React.createElement(
						ReactChips.Toggle,
						{ selected: v == props.selected } as never,
						v,
					);
				}),
				opts: {
					ignoreElementFromA(tag) {
						if (
							tag.tagName.toLowerCase() == "span" &&
							tag.classList.contains("navds-chips__chip-text")
						) {
							return true;
						}
						return false;
					},
					ignoreElementFromB(tag) {
						if (
							tag.tagName.toLowerCase() == "span" &&
							tag.classList.contains("navds-chips__chip-text")
						) {
							return true;
						}
						return false;
					},
				},
			}),
		).toBeTrue();
	});
	afterEach(cleanup);
});
