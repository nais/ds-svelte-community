import { render } from "$testlib/render";
import { ExpansionCard as ReactExpansionCard } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import { createRawSnippet } from "svelte";
import ExpansionCard from "./ExpansionCard.svelte";
import type { ExpansionCardProps } from "./type";

describe("ExpansionCard", () => {
	for (const size of ["small", "medium"] as const) {
		for (const initOpen of [false, true] as const) {
			it(`renders with HTML similar to ds-react, size: ${size}, open: ${initOpen}`, async () => {
				const props: ExpansionCardProps = {
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
				expect(render(ExpansionCard, props)).toMimicReact(ReactExpansionCard, {
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
						visual: {
							strict: false,
						},
					},
				});
			});
		}
	}
});
