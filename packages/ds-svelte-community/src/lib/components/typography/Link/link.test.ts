import { render } from "$testlib/render";
import { Link as ReactLink } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import { createRawSnippet } from "svelte";
import Link from "./Link.svelte";
import { variants, type LinkProps } from "./type";

describe("Link", () => {
	[undefined, "span" as const].forEach((as) => {
		variants.forEach((variant) => {
			[undefined, false].forEach((underline) => {
				[undefined, true].forEach((inlineText) => {
					it(`renders with HTML similar to ds-react as:${as}, variant:${variant}, underline:${underline}, inlineText:${inlineText}`, async () => {
						const props: LinkProps = {
							as,
							variant,
							underline,
							inlineText,
							href: "https://nav.no",
							children: createRawSnippet(() => ({
								render() {
									return "<span>Link content</span>";
								},
							})),
						};
						expect(render(Link, props)).toMimicReact(ReactLink, {
							props,
							children: [React.createElement("span", {}, "Link content")],
						});
					});
				});
			});
		});
	});
});
