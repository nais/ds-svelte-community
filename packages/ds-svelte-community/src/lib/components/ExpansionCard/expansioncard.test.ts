import { bunmatch } from "$testlib/bunmatch";
import { ExpansionCard as ReactExpansionCard } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import ExpansionCard from "./ExpansionCard.svelte";
import type { ExpansionCardProps } from "./type";
import { createRawSnippet } from "svelte";
import React from "react";

describe("ExpansionCard", () => {
	for (const size of ["small", "medium"] as const) {
		for (const initOpen of [false, true] as const) {
			it(`renders with HTML similar to ds-react, size: ${size}, open: ${initOpen}`, async () => {
				const props: ExpansionCardProps = {
					header: "Header text",
					showMoreTitle: "Vis mer",
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
					await bunmatch(render(ExpansionCard, props), ReactExpansionCard, {
						props: {
							defaultOpen: initOpen,
							size,
						},
						children: [
							React.createElement(ReactExpansionCard.Header, {
								children: [
									React.createElement(ReactExpansionCard.Title, {
										children: ["Header text"],
									} as never),
								],
							}),
							React.createElement(ReactExpansionCard.Content, {
								children: [
									React.createElement("span", {
										children: ["This is my content"],
									}),
								],
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
