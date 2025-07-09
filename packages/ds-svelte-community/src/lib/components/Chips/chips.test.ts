import { render } from "$testlib/render";
import { Chips as ReactChips } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import Chips from "./Chips.test.svelte";

describe("Chips", () => {
	it("renders Chips Removable similar to ds-react", async () => {
		const props = {
			values: ["val1", "val2", "val3"],
		};
		expect(render(Chips, props)).toMimicReact(ReactChips, {
			children: props.values.map((v) => {
				return React.createElement(ReactChips.Removable, null, v);
			}),
		});
	});

	it("renders Chips Toggle similar to ds-react", async () => {
		const props = {
			values: ["value1", "value2", "value3"],
			toggle: true,
			selected: "value2",
		};

		expect(render(Chips, props)).toMimicReact(ReactChips, {
			children: props.values.map((v) => {
				return React.createElement(
					ReactChips.Toggle,
					{ selected: v == props.selected } as never,
					v,
				);
			}),
		});
	});
});
