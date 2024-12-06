import { CircleIcon } from "$lib/icons";
import { bunmatch } from "$testlib/bunmatch";
import { CircleIcon as ReactCircleIcon } from "@navikt/aksel-icons";
import { List as ReactList } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import React from "react";
import List from "./List.test.svelte";
import type { ListItemProps, ListProps } from "./types";

describe("List", () => {
	it("renders with HTML similar to ds-react", async () => {
		expect(
			await bunmatch(render(List, {}), ReactList, {
				children: [
					React.createElement(ReactList.Item, { children: "Item 1" }),
					React.createElement(ReactList.Item, { children: "Item 2" }),
					React.createElement(ReactList.Item, { children: "Item 3" }),
				],
				opts: {
					ignoreElementFromA(tag) {
						return tag.tagName.toLowerCase() == "title";
					},
					compareAttrs(node, attr) {
						const tagName = node.tagName.toLowerCase();
						if (tagName == "svg" && ["aria-labelledby", "aria-label"].includes(attr)) {
							return false;
						}
						// Known unique attributes
						if (["id"].includes(attr)) {
							return false;
						}
						return true;
					},
				},
			}),
		).toBeTrue();
	});

	it("renders with HTML similar to ds-react (ol)", async () => {
		expect(
			await bunmatch(render(List, { list: { as: "ol" } }), ReactList, {
				props: {
					as: "ol",
				},
				children: [
					React.createElement(ReactList.Item, { children: "Item 1" }),
					React.createElement(ReactList.Item, { children: "Item 2" }),
					React.createElement(ReactList.Item, { children: "Item 3" }),
				],
				opts: {
					ignoreElementFromA(tag) {
						return tag.tagName.toLowerCase() == "title";
					},
					compareAttrs(node, attr) {
						const tagName = node.tagName.toLowerCase();
						if (tagName == "svg" && ["aria-labelledby", "aria-label"].includes(attr)) {
							return false;
						}
						// Known unique attributes
						if (["id"].includes(attr)) {
							return false;
						}
						return true;
					},
				},
			}),
		).toBeTrue();
	});

	it("renders with HTML similar to ds-react full", async () => {
		const props: {
			list?: Omit<ListProps, "children">;
			items?: Omit<ListItemProps, "children">;
		} = {
			list: {
				as: "ul",
				size: "medium",
				title: "list title",
			},
			items: {
				title: "Item title",
				icon: CircleIcon,
			},
		};
		expect(
			await bunmatch(render(List, props), ReactList, {
				props: {
					...props.list,
				},
				children: [
					React.createElement(ReactList.Item, {
						...props.items,
						children: "Item 1",
						icon: React.createElement(ReactCircleIcon, { "aria-hidden": "true" }),
					}),
					React.createElement(ReactList.Item, {
						...props.items,
						children: "Item 2",
						icon: React.createElement(ReactCircleIcon, { "aria-hidden": "true" }),
					}),
					React.createElement(ReactList.Item, {
						...props.items,
						children: "Item 3",
						icon: React.createElement(ReactCircleIcon, { "aria-hidden": "true" }),
					}),
				],
				opts: {
					// ignoreElementFromA(tag) {
					// 	return tag.tagName.toLowerCase() == "title";
					// },
					// compareAttrs(node, attr) {
					// 	const tagName = node.tagName.toLowerCase();
					// 	if (tagName == "svg" && ["aria-labelledby", "aria-label"].includes(attr)) {
					// 		return false;
					// 	}
					// 	// Known unique attributes
					// 	if (["id"].includes(attr)) {
					// 		return false;
					// 	}
					// 	return true;
					// },
				},
			}),
		).toBeTrue();
	});

	afterEach(cleanup);
});
