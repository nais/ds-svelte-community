import { render } from "$testlib/render";
import { LocalAlert as ReactLocalAlert } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import LocalAlertTestWrapper from "./LocalAlert.test.svelte";
import type { LocalAlertStatus } from "./type";

describe("LocalAlert", () => {
	const statuses: LocalAlertStatus[] = ["announcement", "success", "warning", "error"];
	const sizes = ["medium", "small"] as const;

	for (const status of statuses) {
		for (const size of sizes) {
			it(`renders with HTML similar to ds-react, status: ${status}, size: ${size}`, async () => {
				expect(
					render(LocalAlertTestWrapper, {
						status,
						size,
						titleText: "Test Title",
						contentText: "Test Content",
					}),
				).toMimicReact(ReactLocalAlert, {
					props: {
						status,
						size,
					},
					children: [
						React.createElement(ReactLocalAlert.Header, {
							children: [
								React.createElement(ReactLocalAlert.Title, {
									children: ["Test Title"],
								}),
							],
						}),
						React.createElement(ReactLocalAlert.Content, {
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
				render(LocalAlertTestWrapper, {
					status,
					size: "medium",
					titleText: "Test Title",
					contentText: "Test Content",
					showCloseButton: true,
				}),
			).toMimicReact(ReactLocalAlert, {
				props: {
					status,
					size: "medium",
				},
				children: [
					React.createElement(ReactLocalAlert.Header, {
						children: [
							React.createElement(ReactLocalAlert.Title, {
								children: ["Test Title"],
							}),
							React.createElement(ReactLocalAlert.CloseButton, {}),
						],
					}),
					React.createElement(ReactLocalAlert.Content, {
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
			render(LocalAlertTestWrapper, {
				status: "announcement",
				size: "medium",
				as: "div",
				titleText: "Test Title",
				contentText: "Test Content",
			}),
		).toMimicReact(ReactLocalAlert, {
			props: {
				status: "announcement",
				size: "medium",
				as: "div",
			},
			children: [
				React.createElement(ReactLocalAlert.Header, {
					children: [
						React.createElement(ReactLocalAlert.Title, {
							children: ["Test Title"],
						}),
					],
				}),
				React.createElement(ReactLocalAlert.Content, {
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
			render(LocalAlertTestWrapper, {
				status: "success",
				size: "medium",
				class: "my-custom-class",
				titleText: "Test Title",
				contentText: "Test Content",
			}),
		).toMimicReact(ReactLocalAlert, {
			props: {
				status: "success",
				size: "medium",
				className: "my-custom-class",
			},
			children: [
				React.createElement(ReactLocalAlert.Header, {
					children: [
						React.createElement(ReactLocalAlert.Title, {
							children: ["Test Title"],
						}),
					],
				}),
				React.createElement(ReactLocalAlert.Content, {
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
