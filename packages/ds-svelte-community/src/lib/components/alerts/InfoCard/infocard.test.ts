import { render } from "$testlib/render";
import { InformationSquareIcon as ReactInformationSquareIcon } from "@navikt/aksel-icons";
import { InfoCard as ReactInfoCard } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import InfoCardTestWrapper from "./InfoCard.test.svelte";

describe("InfoCard", () => {
	const sizes = ["medium", "small"] as const;

	for (const size of sizes) {
		it(`renders with HTML similar to ds-react, size: ${size}`, async () => {
			expect(
				render(InfoCardTestWrapper, {
					size,
					titleText: "Test Title",
					contentText: "Test Content",
				}),
			).toMimicReact(ReactInfoCard, {
				props: {
					size,
				},
				children: [
					React.createElement(ReactInfoCard.Header, {
						icon: React.createElement(ReactInformationSquareIcon, { "aria-hidden": true }),
						children: [
							React.createElement(ReactInfoCard.Title, {
								children: ["Test Title"],
							}),
						],
					}),
					React.createElement(ReactInfoCard.Content, {
						children: ["Test Content"],
					}),
				],
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

	it("renders with as='section'", async () => {
		expect(
			render(InfoCardTestWrapper, {
				size: "medium",
				as: "section",
				"aria-label": "Information",
				titleText: "Test Title",
				contentText: "Test Content",
			}),
		).toMimicReact(ReactInfoCard, {
			props: {
				size: "medium",
				as: "section",
				"aria-label": "Information",
			},
			children: [
				React.createElement(ReactInfoCard.Header, {
					icon: React.createElement(ReactInformationSquareIcon, { "aria-hidden": true }),
					children: [
						React.createElement(ReactInfoCard.Title, {
							children: ["Test Title"],
						}),
					],
				}),
				React.createElement(ReactInfoCard.Content, {
					children: ["Test Content"],
				}),
			],
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

	it("passes custom class to root element", async () => {
		expect(
			render(InfoCardTestWrapper, {
				size: "medium",
				class: "my-custom-class",
				titleText: "Test Title",
				contentText: "Test Content",
			}),
		).toMimicReact(ReactInfoCard, {
			props: {
				size: "medium",
				className: "my-custom-class",
			},
			children: [
				React.createElement(ReactInfoCard.Header, {
					icon: React.createElement(ReactInformationSquareIcon, { "aria-hidden": true }),
					children: [
						React.createElement(ReactInfoCard.Title, {
							children: ["Test Title"],
						}),
					],
				}),
				React.createElement(ReactInfoCard.Content, {
					children: ["Test Content"],
				}),
			],
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
