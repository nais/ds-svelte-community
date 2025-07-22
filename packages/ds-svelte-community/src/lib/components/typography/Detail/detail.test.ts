import { render } from "$testlib/render";
import { Detail as ReactDetail } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import { createRawSnippet } from "svelte";
import Detail from "./Detail.svelte";
import type { DetailProps } from "./type";

describe("Detail", () => {
	[undefined, "span"].forEach((as) => {
		[undefined, true].forEach((uppercase) => {
			[undefined, true].forEach((spacing) => {
				it(`renders with HTML similar to ds-react (as: ${as} uppercase: ${uppercase} spacing: ${spacing})`, async () => {
					const props: DetailProps = {
						as,
						uppercase,
						spacing,
						children: createRawSnippet(() => ({
							render() {
								return "<span>Detail content</span>";
							},
						})),
					};
					expect(render(Detail, props)).toMimicReact(ReactDetail, {
						props,
						children: [React.createElement("span", {}, "Detail content")],
					});
				});
			});
		});
	});
});
