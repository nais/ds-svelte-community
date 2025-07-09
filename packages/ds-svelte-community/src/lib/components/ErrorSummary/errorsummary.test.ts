import { render } from "$testlib/render";
import { ErrorSummary as ReactErrorSummary } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import ErrorSummary from "./ErrorSummary.test.svelte";

describe("ErrorSummary", () => {
	it("renders with HTML similar to ds-react", async () => {
		expect(render(ErrorSummary)).toMimicReact(ReactErrorSummary, {
			props: {
				heading: "Some errors occurred",
			},
			children: [
				React.createElement(ReactErrorSummary.Item, {
					href: "#1",
					children: ["Checkbox needs to be checked"],
				} as never),
				React.createElement(ReactErrorSummary.Item, {
					href: "#2",
					children: ["Textfield requires valid email"],
				} as never),
			],
			opts: {},
		});
	});
});
