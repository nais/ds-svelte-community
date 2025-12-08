import { render } from "$testlib/render";
import { InlineMessage as ReactInlineMessage } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import InlineMessageTestWrapper from "./InlineMessage.test.svelte";
import type { InlineMessageStatus } from "./type";

describe("InlineMessage", () => {
	const statuses: InlineMessageStatus[] = ["info", "success", "warning", "error"];
	const sizes = ["medium", "small"] as const;

	for (const status of statuses) {
		for (const size of sizes) {
			it(`renders with HTML similar to ds-react, status: ${status}, size: ${size}`, async () => {
				expect(
					render(InlineMessageTestWrapper, {
						status,
						size,
						text: "Test message",
					}),
				).toMimicReact(ReactInlineMessage, {
					props: {
						status,
						size,
						children: "Test message",
					},
					opts: {
						compareAttrs(node, attr) {
							// Remove attrs known to be unique
							if (["id", "aria-labelledby"].includes(attr)) {
								return false;
							}
							// Ignore path differences in icons
							if (node.tagName.toLowerCase() === "path" && attr === "d") {
								return false;
							}
							return true;
						},
					},
				});
			});
		}
	}

	it("passes custom class to root element", async () => {
		expect(
			render(InlineMessageTestWrapper, {
				status: "info",
				size: "medium",
				class: "my-custom-class",
				text: "Test message",
			}),
		).toMimicReact(ReactInlineMessage, {
			props: {
				status: "info",
				size: "medium",
				className: "my-custom-class",
				children: "Test message",
			},
			opts: {
				compareAttrs(node, attr) {
					// Remove attrs known to be unique
					if (["id", "aria-labelledby"].includes(attr)) {
						return false;
					}
					// Ignore path differences in icons
					if (node.tagName.toLowerCase() === "path" && attr === "d") {
						return false;
					}
					return true;
				},
			},
		});
	});
});
