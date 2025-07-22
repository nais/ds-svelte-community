import { render } from "$testlib/render";
import { Label as ReactLabel } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import { createRawSnippet } from "svelte";
import Label from "./Label.svelte";
import type { LabelProps } from "./type";

describe("Label", () => {
	[undefined, "legend", "span"].forEach((as) => {
		[undefined, "small", "medium"].forEach((size) => {
			[undefined, true].forEach((spacing) => {
				it(`renders with HTML similar to ds-react (as: ${as} size: ${size} spacing: ${spacing})`, async () => {
					const props: LabelProps = {
						as: as as never,
						size: size as never,
						spacing,
						children: createRawSnippet(() => ({
							render() {
								return "<span>Label content</span>";
							},
						})),
					};
					expect(render(Label, props)).toMimicReact(ReactLabel, {
						props,
						children: [React.createElement("span", {}, "Label content")],
					});
				});
			});
		});
	});
});
