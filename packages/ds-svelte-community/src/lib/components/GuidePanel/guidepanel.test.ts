import { render } from "$testlib/render";
import { GuidePanel as ReactGuidePanel } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import { createRawSnippet } from "svelte";
import GuidePanel from "./GuidePanel.svelte";
import type { GuidePanelProps } from "./type";

describe("GuidePanel", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: GuidePanelProps = {
			children: createRawSnippet(() => ({
				render() {
					return "<span>Guide Panel Content</span>";
				},
			})),
		};
		expect(render(GuidePanel, props)).toMimicReact(ReactGuidePanel, {
			props,
			children: [React.createElement("span", {}, "Guide Panel Content")],
			opts: {
				compareAttrs(node, attr) {
					const tagName = node.tagName.toLowerCase();
					if (tagName == "svg" && ["aria-labelledby", "aria-label"].includes(attr)) {
						return false;
					}
					// Known unique attributes
					if (["id"].includes(attr)) {
						return false;
					}
					return true;
				},
			},
		});
	});
});
