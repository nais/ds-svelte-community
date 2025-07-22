import { render } from "$testlib/render";
import { Page as ReactPage } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import Page from "./Page.test.svelte";
import type { PageProps } from "./type";

describe("Page", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: Omit<PageProps, "children"> = {};

		expect(render(Page, props)).toMimicReact(ReactPage, {
			props: {
				...props,
				footer: React.createElement(ReactPage.Block, { as: "footer" }, ["Footer"]),
			},
			children: [
				React.createElement(ReactPage.Block, { gutters: true, width: "lg", as: "div" }, ["Header"]),
				React.createElement(ReactPage.Block, { gutters: true, width: "lg", as: "div" }, [
					"Content",
				]),
			],
			opts: {
				compareAttrs(node, attr) {
					return node.tagName.toLowerCase() != "div" || attr != "style";
				},
			},
		});
	});
});
