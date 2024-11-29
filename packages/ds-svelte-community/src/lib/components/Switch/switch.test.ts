import { bunmatch } from "$testlib/bunmatch";
import { Switch as ReactSwitch } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import React from "react";
import { createRawSnippet } from "svelte";
import { omit } from "../helpers";
import Switch from "./Switch.svelte";
import type { Props } from "./type";

describe("Switch", () => {
	[false, true].forEach((checked) => {
		it(`renders with HTML similar to ds-react checked ${checked}`, async () => {
			const props: Props = {
				checked,
				children: createRawSnippet(() => ({
					render: () => {
						return "<span>Label</span>";
					},
				})),
			};
			expect(
				await bunmatch(render(Switch, props), ReactSwitch, {
					props: omit(props),
					children: [React.createElement("span", {}, "Label")],
					opts: {
						compareAttrs(node, attr) {
							// For some reason the checked attribute isn't set on the input element
							if (node.tagName.toLowerCase() == "input" && attr == "checked") {
								return false;
							}

							// Remove attrs known to be unique
							if (["id", "for"].includes(attr)) {
								return false;
							}
							return true;
						},
					},
				}),
			).toBeTrue();
		});
	});

	afterEach(cleanup);
});
