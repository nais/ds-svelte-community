import { render } from "$testlib/render";
import { ToggleGroup as ReactToggleGroup } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import { omit } from "../helpers";
import ToggleGroup, { type ToggleGroupTestProps } from "./ToggleGroup.test.svelte";

describe("ToggleGroup", () => {
	it("renders with HTML similar to ds-react (tabindex exception)", async () => {
		const props: ToggleGroupTestProps = {
			value: "val2",
			items: ["val1", "val2", "val3"],
		};
		expect(render(ToggleGroup, props)).toMimicReact(ReactToggleGroup, {
			props: omit(props, "items"),
			children: props.items.map((i, key) => {
				return React.createElement(ReactToggleGroup.Item, { key, value: i } as never, i);
			}),
			opts: {
				compareAttrs(node, attr) {
					// Because ds-react has wrong tabindex when rendered server side, we ignore it.
					// Comment to test and manually verify.
					if (attr === "tabindex") {
						return false;
					}

					// Remove radix attr
					if (["data-radix-collection", "data-radix-collection-item"].includes(attr)) {
						return false;
					}

					return true;
				},
			},
		});
	});
});
