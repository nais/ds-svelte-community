import { render } from "$testlib/render";
import { Heading as ReactHeading } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import { createRawSnippet } from "svelte";
import Heading from "./Heading.svelte";
import type { HeadingProps } from "./type";

describe("Heading", () => {
	[undefined, "h1", "h2", "h3", "h4", "h5", "h6"].forEach((as) => {
		["xlarge", "large", "medium", "small", "xsmall"].forEach((size) => {
			[undefined, true].forEach((spacing) => {
				it(`renders with HTML similar to ds-react (as: ${as} size: ${size} spacing: ${spacing})`, async () => {
					const props: HeadingProps = {
						as: as as never,
						size: size as never,
						spacing,
						children: createRawSnippet(() => ({
							render() {
								return "<span>Heading content</span>";
							},
						})),
					};
					expect(render(Heading, props)).toMimicReact(ReactHeading, {
						props,
						children: [React.createElement("span", {}, "Heading content")],
					});
				});
			});
		});
	});
});
