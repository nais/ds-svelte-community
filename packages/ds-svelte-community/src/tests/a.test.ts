import { render } from "$testlib/render";
import { Link as ReactLink } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import SvelteAnchor from "./a.test.svelte";

/**
 * Visual regression tests for anchor styling.
 * These tests compare plain <a> tags (styled via CSS) with React's Link component.
 * We only care about visual appearance, not HTML structure.
 */
describe("Anchor (a) styling", () => {
	it("default anchor looks like React Link", () => {
		expect(render(SvelteAnchor, { href: "#" })).toMimicReact(ReactLink, {
			props: {
				href: "#",
				children: "Link text",
			},
			opts: {
				// Ignore all HTML/attribute differences - we only care about visual appearance
				compareAttrs: () => false,
			},
		});
	});

	it("inline anchor looks like React Link with inlineText", () => {
		expect(
			render(SvelteAnchor, {
				href: "#",
				inlineText: true,
			}),
		).toMimicReact("p", {
			props: {},
			children: [
				"Some text before ",
				React.createElement(ReactLink as never, {
					href: "#",
					inlineText: true,
					children: "Link text",
				}),
				" some text after.",
			],
			opts: {
				compareAttrs: () => false,
			},
		});
	});

	it("action variant anchor looks like React Link action", () => {
		expect(
			render(SvelteAnchor, {
				href: "#",
			}),
		).toMimicReact(ReactLink, {
			props: {
				href: "#",
				variant: "action",
				children: "Link text",
			},
			opts: {
				compareAttrs: () => false,
			},
		});
	});
});
