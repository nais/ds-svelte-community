import { render } from "$testlib/render";
import { ToggleGroup as ReactToggleGroup } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import { omit } from "../helpers";
import ToggleGroup, { type ToggleGroupTestProps } from "./ToggleGroup.test.svelte";

describe("ToggleGroup", () => {
	const defaultOpts = {
		compareAttrs(node: Element, attr: string) {
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
	};

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
			opts: defaultOpts,
		});
	});

	it("renders with label", async () => {
		const props: ToggleGroupTestProps = {
			value: "val1",
			items: ["val1", "val2"],
			label: "My label",
		};
		expect(render(ToggleGroup, props)).toMimicReact(ReactToggleGroup, {
			props: omit(props, "items"),
			children: props.items.map((i, key) => {
				return React.createElement(ReactToggleGroup.Item, { key, value: i } as never, i);
			}),
			opts: {
				compareAttrs(node, attr) {
					if (attr === "tabindex") {
						return false;
					}
					if (["data-radix-collection", "data-radix-collection-item"].includes(attr)) {
						return false;
					}
					// IDs are generated differently
					if (["id", "aria-labelledby"].includes(attr)) {
						return false;
					}
					return true;
				},
			},
		});
	});

	it("renders with variant neutral", async () => {
		const props: ToggleGroupTestProps = {
			value: "val1",
			items: ["val1", "val2"],
			variant: "neutral",
		};
		expect(render(ToggleGroup, props)).toMimicReact(ReactToggleGroup, {
			props: omit(props, "items"),
			children: props.items.map((i, key) => {
				return React.createElement(ReactToggleGroup.Item, { key, value: i } as never, i);
			}),
			opts: defaultOpts,
		});
	});

	it("renders with variant action", async () => {
		const props: ToggleGroupTestProps = {
			value: "val1",
			items: ["val1", "val2"],
			variant: "action",
		};
		expect(render(ToggleGroup, props)).toMimicReact(ReactToggleGroup, {
			props: omit(props, "items"),
			children: props.items.map((i, key) => {
				return React.createElement(ReactToggleGroup.Item, { key, value: i } as never, i);
			}),
			opts: defaultOpts,
		});
	});

	it("renders with fill", async () => {
		const props: ToggleGroupTestProps = {
			value: "val1",
			items: ["val1", "val2"],
			fill: true,
		};
		expect(render(ToggleGroup, props)).toMimicReact(ReactToggleGroup, {
			props: omit(props, "items"),
			children: props.items.map((i, key) => {
				return React.createElement(ReactToggleGroup.Item, { key, value: i } as never, i);
			}),
			opts: defaultOpts,
		});
	});

	it("renders with size small", async () => {
		const props: ToggleGroupTestProps = {
			value: "val1",
			items: ["val1", "val2"],
			size: "small",
		};
		expect(render(ToggleGroup, props)).toMimicReact(ReactToggleGroup, {
			props: omit(props, "items"),
			children: props.items.map((i, key) => {
				return React.createElement(ReactToggleGroup.Item, { key, value: i } as never, i);
			}),
			opts: defaultOpts,
		});
	});
});
