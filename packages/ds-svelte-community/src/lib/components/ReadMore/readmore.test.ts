import { bunmatch } from "$testlib/bunmatch";
import { ReadMore as ReactReadMore } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import ReadMore from "./ReadMore.svelte";
import type { ReadMoreProps } from "./type";
import { createRawSnippet } from "svelte";
import React from "react";

describe("ReadMore", () => {
	for (const size of ["small", "medium"] as const) {
		for (const initOpen of [false, true] as const) {
			it(`renders with HTML similar to ds-react, size: ${size}, open: ${initOpen}`, async () => {
				const props: ReadMoreProps = {
					header: "Header text",
					open: initOpen,
					size,
					children: createRawSnippet(() => {
						return {
							render() {
								return "<span>This is my content</span>";
							},
						};
					}),
				};
				expect(
					await bunmatch(render(ReadMore, props), ReactReadMore, {
						props: {
							defaultOpen: initOpen,
							header: "Header text",
							size,
						},
						children: [
							React.createElement("span", {
								children: ["This is my content"],
							}),
						],
						opts: {
							compareAttrs(node, attr) {
								// Remove attrs known to be unique
								if (["id", "aria-labelledby"].includes(attr)) {
									return false;
								}
								return true;
							},
						},
					}),
				).toBeTrue();
			});
		}
	}

	afterEach(cleanup);
});
