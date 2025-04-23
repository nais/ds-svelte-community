import { bunmatch } from "$testlib/bunmatch";
import { Box as ReactBox } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import React from "react";
import { createRawSnippet } from "svelte";
import Box from "./Box.svelte";
import type { BoxProps } from "./type";

describe("Box", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: BoxProps = {
			padding: "6",
			paddingInline: "4",
			paddingBlock: "0 6",
			borderRadius: "large",
			borderWidth: "4",
			children: createRawSnippet(() => ({
				render() {
					return "<span>Box body</span>";
				},
			})),
		};

		expect(
			await bunmatch(render(Box, props), ReactBox, {
				props,
				children: [React.createElement("span", {}, "Box body")],
				opts: {
					alterAttrValue(name, value) {
						// TODO: This is to support darkside styles
						if (name === "style") {
							const reg = /--__ax[^;]+;/g;
							return value.replaceAll(reg, "");
						}
						return value;
					},
				},
			}),
		).toBeTrue();
	});

	afterEach(cleanup);
});
