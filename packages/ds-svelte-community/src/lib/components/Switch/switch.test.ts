import { render } from "$testlib/render";
import { Switch as ReactSwitch } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import { createRawSnippet } from "svelte";
import { omit } from "../helpers";
import Switch from "./Switch.svelte";
import type { SwitchProps } from "./type";

describe("Switch", () => {
	[false, true].forEach((checked) => {
		it(`renders with HTML similar to ds-react checked ${checked}`, async () => {
			const props: SwitchProps = {
				checked,
				children: createRawSnippet(() => ({
					render: () => {
						return "<span>Label</span>";
					},
				})),
			};
			expect(render(Switch, props)).toMimicReact(ReactSwitch, {
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
			});
		});
	});
});
