import { bunmatch } from "$testlib/bunmatch";
import { ToggleGroup as ReactToggleGroup } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import React from "react";
import { omit } from "../helpers";
import ToggleGroup, { type ToggleGroupTestProps } from "./ToggleGroup.test.svelte";

describe("ToggleGroup", () => {
	it("renders with HTML similar to ds-react (tabindex exception)", async () => {
		const props: ToggleGroupTestProps = {
			value: "val2",
			items: ["val1", "val2", "val3"],
		};
		expect(
			await bunmatch(render(ToggleGroup, props), ReactToggleGroup, {
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
			}),
		).toBeTrue();
	});

	afterEach(cleanup);
});
