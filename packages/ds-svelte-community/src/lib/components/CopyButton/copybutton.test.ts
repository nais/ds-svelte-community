import { render } from "$testlib/render";
import { CopyButton as ReactCopyButton } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import CopyButton from "./CopyButton.test.svelte";
import type { CopyButtonProps } from "./type";

describe("CopyButton", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: CopyButtonProps = {
			text: "Copy",
			copyText: "Copy text",
		};
		expect(render(CopyButton, props)).toMimicReact(ReactCopyButton, {
			props,
			opts: {
				compareAttrs(node, attr) {
					// Title ids are unique
					if (node.tagName.toLowerCase() == "title" && attr == "id") {
						return false;
					}

					if (node.tagName.toLowerCase() == "svg") {
						if (["aria-labelledby"].includes(attr)) {
							return false;
						}
					}

					return true;
				},
			},
		});
	});

	it("renders with HTML similar to ds-react with text", async () => {
		const props: CopyButtonProps = {
			copyText: "Copy text",
			text: "Custom text",
		};
		expect(render(CopyButton, props)).toMimicReact(ReactCopyButton, {
			props,
			opts: {
				compareAttrs(node, attr) {
					// Title ids are unique
					if (node.tagName.toLowerCase() == "title" && attr == "id") {
						return false;
					}

					if (node.tagName.toLowerCase() == "svg") {
						if (["aria-labelledby"].includes(attr)) {
							return false;
						}
					}

					return true;
				},
			},
		});
	});
});
