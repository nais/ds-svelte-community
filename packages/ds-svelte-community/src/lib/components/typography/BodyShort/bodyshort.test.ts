import { render } from "$testlib/render";
import { BodyShort as ReactBodyShort } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import { createRawSnippet } from "svelte";
import BodyShort from "./BodyShort.svelte";
import type { BodyShortProps } from "./type";

describe("BodyShort", () => {
	[undefined, "span" as const].forEach((as) => {
		[undefined, "small", "medium"].forEach((size) => {
			[undefined, true].forEach((spacing) => {
				it(`renders with HTML similar to ds-react (as: ${as} size: ${size} spacing: ${spacing})`, async () => {
					const props: BodyShortProps = {
						as,
						size: size as never,
						spacing,
						children: createRawSnippet(() => ({
							render() {
								return "<span>Body short content</span>";
							},
						})),
					};
					expect(render(BodyShort, props)).toMimicReact(ReactBodyShort, {
						props,
						children: [React.createElement("span", {}, "Body short content")],
					});
				});
			});
		});
	});
});
