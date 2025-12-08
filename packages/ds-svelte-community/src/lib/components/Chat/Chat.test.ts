import { render } from "$testlib/render";
import { Chat as ReactChat } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import ChatTestWrapper from "./Chat.test.svelte";
import { chatPositions, chatSizes, chatVariants } from "./type";

describe("Chat", () => {
	const defaultCompareAttrs = (node: Element, attr: string) => {
		// Remove attrs known to be unique
		if (["id", "aria-labelledby"].includes(attr)) {
			return false;
		}
		return true;
	};

	describe("variants, sizes, and positions", () => {
		for (const variant of chatVariants) {
			for (const size of chatSizes) {
				for (const position of chatPositions) {
					it(`renders with variant: ${variant}, size: ${size}, position: ${position}`, async () => {
						expect(
							render(ChatTestWrapper, {
								variant,
								size,
								position,
								avatar: "AB",
								name: "Alice",
								timestamp: "01.01.21 14:00",
								bubbles: ["Hello!", "How can I help you?"],
							}),
						).toMimicReact(ReactChat, {
							props: {
								variant,
								size,
								position,
								avatar: "AB",
								name: "Alice",
								timestamp: "01.01.21 14:00",
							},
							children: [
								React.createElement(ReactChat.Bubble, null, "Hello!"),
								React.createElement(ReactChat.Bubble, null, "How can I help you?"),
							],
							opts: {
								compareAttrs: defaultCompareAttrs,
							},
						});
					});
				}
			}
		}
	});

	it("renders without avatar", async () => {
		expect(
			render(ChatTestWrapper, {
				name: "Alice",
				timestamp: "01.01.21 14:00",
				bubbles: ["Hello!"],
			}),
		).toMimicReact(ReactChat, {
			props: {
				name: "Alice",
				timestamp: "01.01.21 14:00",
			},
			children: [React.createElement(ReactChat.Bubble, null, "Hello!")],
			opts: {
				compareAttrs: defaultCompareAttrs,
			},
		});
	});

	it("renders with toptextPosition", async () => {
		expect(
			render(ChatTestWrapper, {
				avatar: "AB",
				name: "Alice",
				timestamp: "01.01.21 14:00",
				position: "left",
				toptextPosition: "right",
				bubbles: ["Hello!"],
			}),
		).toMimicReact(ReactChat, {
			props: {
				avatar: "AB",
				name: "Alice",
				timestamp: "01.01.21 14:00",
				position: "left",
				toptextPosition: "right",
			},
			children: [React.createElement(ReactChat.Bubble, null, "Hello!")],
			opts: {
				compareAttrs: defaultCompareAttrs,
			},
		});
	});

	it("renders with custom class", async () => {
		expect(
			render(ChatTestWrapper, {
				avatar: "AB",
				class: "my-custom-class",
				bubbles: ["Hello!"],
			}),
		).toMimicReact(ReactChat, {
			props: {
				avatar: "AB",
				className: "my-custom-class",
			},
			children: [React.createElement(ReactChat.Bubble, null, "Hello!")],
			opts: {
				compareAttrs: defaultCompareAttrs,
			},
		});
	});

	it("renders multiple bubbles with name/timestamp only on first", async () => {
		expect(
			render(ChatTestWrapper, {
				avatar: "AB",
				name: "Alice",
				timestamp: "01.01.21 14:00",
				bubbles: ["First message", "Second message", "Third message"],
			}),
		).toMimicReact(ReactChat, {
			props: {
				avatar: "AB",
				name: "Alice",
				timestamp: "01.01.21 14:00",
			},
			children: [
				React.createElement(ReactChat.Bubble, null, "First message"),
				React.createElement(ReactChat.Bubble, null, "Second message"),
				React.createElement(ReactChat.Bubble, null, "Third message"),
			],
			opts: {
				compareAttrs: defaultCompareAttrs,
			},
		});
	});

	it("renders with toptextHeadingLevel", async () => {
		expect(
			render(ChatTestWrapper, {
				avatar: "AB",
				name: "Alice",
				timestamp: "01.01.21 14:00",
				toptextHeadingLevel: "4",
				bubbles: ["Hello!"],
			}),
		).toMimicReact(ReactChat, {
			props: {
				avatar: "AB",
				name: "Alice",
				timestamp: "01.01.21 14:00",
				toptextHeadingLevel: "4",
			},
			children: [React.createElement(ReactChat.Bubble, null, "Hello!")],
			opts: {
				compareAttrs: defaultCompareAttrs,
			},
		});
	});
});
