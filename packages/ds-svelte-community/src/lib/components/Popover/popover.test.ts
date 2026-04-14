import { render, someRandomTextSnippet } from "$testlib/render";
import { Popover as ReactPopover } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import Popover from "./Popover.svelte";
import type { PopoverProps } from "./type";

function ignoreKnownUnique(_node: HTMLElement, attr: string) {
	// Floating-ui adds inline styles for positioning that differ between implementations
	if (attr === "style") {
		return false;
	}
	// Ignore generated ids
	if (attr === "id") {
		return false;
	}
	return true;
}

describe("Popover", () => {
	it("renders hidden popover similar to ds-react", async () => {
		const props: PopoverProps = {
			open: false,
			anchorEl: undefined,
			children: someRandomTextSnippet,
		};
		expect(render(Popover, props)).toMimicReact(ReactPopover, {
			props: {
				open: false,
				anchorEl: null,
				onClose: () => {},
			},
			children: [
				React.createElement(ReactPopover.Content, {
					children: "SomeRandomText",
				}),
			],
			opts: {
				compareAttrs: ignoreKnownUnique,
				visual: { skip: true },
			},
		});
	});

	it("renders open popover (no anchor) similar to ds-react", async () => {
		const props: PopoverProps = {
			open: true,
			anchorEl: undefined,
			children: someRandomTextSnippet,
		};
		expect(render(Popover, props)).toMimicReact(ReactPopover, {
			props: {
				open: true,
				anchorEl: null,
				onClose: () => {},
			},
			children: [
				React.createElement(ReactPopover.Content, {
					children: "SomeRandomText",
				}),
			],
			opts: {
				compareAttrs: ignoreKnownUnique,
				visual: { skip: true },
			},
		});
	});
});
