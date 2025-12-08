import { render } from "$testlib/render";
import { GlobalAlert as ReactGlobalAlert } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import GlobalAlertTestWrapper from "./GlobalAlert.test.svelte";
import type { GlobalAlertStatus } from "./type";

describe("GlobalAlert", () => {
	const statuses: GlobalAlertStatus[] = ["announcement", "success", "warning", "error"];
	const sizes = ["medium", "small"] as const;

	for (const status of statuses) {
		for (const size of sizes) {
			it(`renders with HTML similar to ds-react, status: ${status}, size: ${size}`, async () => {
				expect(
					render(GlobalAlertTestWrapper, {
						status,
						size,
						titleText: "Test Title",
						contentText: "Test Content",
					}),
				).toMimicReact(ReactGlobalAlert, {
					props: {
						status,
						size,
					},
					children: [
						React.createElement(ReactGlobalAlert.Header, {
							children: [
								React.createElement(ReactGlobalAlert.Title, {
									children: ["Test Title"],
								}),
							],
						}),
						React.createElement(ReactGlobalAlert.Content, {
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
	}

	for (const status of statuses) {
		it(`renders with close button, status: ${status}`, async () => {
			expect(
				render(GlobalAlertTestWrapper, {
					status,
					size: "medium",
					titleText: "Test Title",
					contentText: "Test Content",
					showCloseButton: true,
				}),
			).toMimicReact(ReactGlobalAlert, {
				props: {
					status,
					size: "medium",
				},
				children: [
					React.createElement(ReactGlobalAlert.Header, {
						children: [
							React.createElement(ReactGlobalAlert.Title, {
								children: ["Test Title"],
							}),
							React.createElement(ReactGlobalAlert.CloseButton, {}),
						],
					}),
					React.createElement(ReactGlobalAlert.Content, {
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

	it("renders with as='div'", async () => {
		expect(
			render(GlobalAlertTestWrapper, {
				status: "announcement",
				size: "medium",
				as: "div",
				titleText: "Test Title",
				contentText: "Test Content",
			}),
		).toMimicReact(ReactGlobalAlert, {
			props: {
				status: "announcement",
				size: "medium",
				as: "div",
			},
			children: [
				React.createElement(ReactGlobalAlert.Header, {
					children: [
						React.createElement(ReactGlobalAlert.Title, {
							children: ["Test Title"],
						}),
					],
				}),
				React.createElement(ReactGlobalAlert.Content, {
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
			render(GlobalAlertTestWrapper, {
				status: "success",
				size: "medium",
				class: "my-custom-class",
				titleText: "Test Title",
				contentText: "Test Content",
			}),
		).toMimicReact(ReactGlobalAlert, {
			props: {
				status: "success",
				size: "medium",
				className: "my-custom-class",
			},
			children: [
				React.createElement(ReactGlobalAlert.Header, {
					children: [
						React.createElement(ReactGlobalAlert.Title, {
							children: ["Test Title"],
						}),
					],
				}),
				React.createElement(ReactGlobalAlert.Content, {
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
