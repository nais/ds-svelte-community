import { render } from "$testlib/render";
import { Tabs as ReactTabs } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import Tabs, { type TabsTestProps } from "./Tabs.test.svelte";

describe("Tabs", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: TabsTestProps = {
			value: "val2",
			data: [
				{ value: "val1", tab: "tab1", content: "content1" },
				{ value: "val2", tab: "tab2", content: "content2" },
				{ value: "val3", tab: "tab3", content: "content3" },
			],
		};
		expect(render(Tabs, props)).toMimicReact(ReactTabs, {
			props: {
				defaultValue: props.value,
			},
			children: [
				React.createElement(ReactTabs.List, {} as never, [
					props.data.map((tab) => {
						return React.createElement(ReactTabs.Tab, {
							value: tab.value,
							label: tab.tab,
						} as never);
					}),
				]),

				...props.data.map((tab) => {
					return React.createElement(ReactTabs.Panel, { value: tab.value } as never, tab.content);
				}),
			],
			opts: {
				alterAttrValue(name, value) {
					if (name == "class") {
						value = value.replaceAll(/(^|\s)s(velte)?-\w+/g, "");
					}

					return value;
				},
				compareAttrs(node, attr) {
					// Remove radix attributes
					if (["data-radix-collection-item"].includes(attr)) {
						return false;
					}
					// Remove known unique attributes
					if (["aria-controls", "aria-labelledby", "id"].includes(attr)) {
						return false;
					}
					return true;
				},
			},
		});
	});

	it("renders with fill prop similar to ds-react", async () => {
		const props: TabsTestProps = {
			value: "val1",
			fill: true,
			data: [
				{ value: "val1", tab: "tab1", content: "content1" },
				{ value: "val2", tab: "tab2", content: "content2" },
			],
		};
		expect(render(Tabs, props)).toMimicReact(ReactTabs, {
			props: {
				defaultValue: props.value,
				fill: true,
			},
			children: [
				React.createElement(ReactTabs.List, {} as never, [
					props.data.map((tab) => {
						return React.createElement(ReactTabs.Tab, {
							value: tab.value,
							label: tab.tab,
						} as never);
					}),
				]),

				...props.data.map((tab) => {
					return React.createElement(ReactTabs.Panel, { value: tab.value } as never, tab.content);
				}),
			],
			opts: {
				alterAttrValue(name, value) {
					if (name == "class") {
						value = value.replaceAll(/(^|\s)s(velte)?-\w+/g, "");
					}

					return value;
				},
				compareAttrs(node, attr) {
					if (["data-radix-collection-item"].includes(attr)) {
						return false;
					}
					if (["aria-controls", "aria-labelledby", "id"].includes(attr)) {
						return false;
					}
					return true;
				},
			},
		});
	});
});
