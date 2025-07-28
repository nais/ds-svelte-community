import { render } from "$testlib/render";
import { ReadMore as ReactReadMore } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import { createRawSnippet } from "svelte";
import ReadMore from "./ReadMore.svelte";
import type { ReadMoreProps } from "./type";

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
				expect(render(ReadMore, props)).toMimicReact(ReactReadMore, {
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
						visual: {
							strict: false,
						},
					},
				});
			});
		}
	}
});
