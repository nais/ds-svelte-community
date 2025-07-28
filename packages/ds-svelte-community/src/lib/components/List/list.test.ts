import { CircleIcon } from "$lib/icons";
import { render } from "$testlib/render";
import { CircleIcon as ReactCircleIcon } from "@navikt/aksel-icons";
import { List as ReactList } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import List from "./List.test.svelte";
import type { ListItemProps, ListProps } from "./types";

describe("List", () => {
	it("renders with HTML similar to ds-react", async () => {
		expect(render(List, {})).toMimicReact(ReactList, {
			children: [
				React.createElement(ReactList.Item, { children: "Item 1" }),
				React.createElement(ReactList.Item, { children: "Item 2" }),
				React.createElement(ReactList.Item, { children: "Item 3" }),
			],
			opts: {
				compareAttrs(node, attr) {
					// Known unique attributes
					if (["id"].includes(attr)) {
						return false;
					}
					return true;
				},
			},
		});
	});

	it("renders with HTML similar to ds-react (ol)", async () => {
		expect(render(List, { list: { as: "ol" } })).toMimicReact(ReactList, {
			props: {
				as: "ol",
			},
			children: [
				React.createElement(ReactList.Item, { children: "Item 1" }),
				React.createElement(ReactList.Item, { children: "Item 2" }),
				React.createElement(ReactList.Item, { children: "Item 3" }),
			],
			opts: {
				compareAttrs(node, attr) {
					// Known unique attributes
					if (["id"].includes(attr)) {
						return false;
					}
					return true;
				},
			},
		});
	});

	it("renders with HTML similar to ds-react full", async () => {
		const props: {
			list?: Omit<ListProps, "children">;
			items?: Omit<ListItemProps, "children">;
		} = {
			list: {
				as: "ul",
				size: "medium",
			},
			items: {
				title: "Item title",
				icon: CircleIcon,
			},
		};
		expect(render(List, props)).toMimicReact(ReactList, {
			props: {
				...props.list,
			},
			children: [
				React.createElement(ReactList.Item, {
					...(props.items as object),
					children: "Item 1",
					icon: React.createElement(ReactCircleIcon, { "aria-hidden": "true" }),
				}),
				React.createElement(ReactList.Item, {
					...(props.items as object),
					children: "Item 2",
					icon: React.createElement(ReactCircleIcon, { "aria-hidden": "true" }),
				}),
				React.createElement(ReactList.Item, {
					...(props.items as object),
					children: "Item 3",
					icon: React.createElement(ReactCircleIcon, { "aria-hidden": "true" }),
				}),
			],
		});
	});
});
