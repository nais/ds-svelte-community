import { render } from "$testlib/render";
import { Box as ReactBox } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import { createRawSnippet } from "svelte";
import Box from "./Box.svelte";
import type { BoxProps } from "./type";

describe("Box", () => {
	it("renders with HTML similar to ds-react with default values", async () => {
		const props: BoxProps = {
			children: createRawSnippet(() => ({
				render() {
					return "<span>Box body</span>";
				},
			})),
		};

		expect(render(Box, props)).toMimicReact(ReactBox.New, {
			props,
			children: [React.createElement("span", {}, "Box body")],
		});
	});

	it("renders with HTML similar to ds-react", async () => {
		const props: BoxProps = {
			padding: "space-24",
			paddingInline: "space-16",
			paddingBlock: "space-0 space-24",
			borderRadius: "8",
			borderWidth: "4",
			background: "accent-moderate",
			borderColor: "accent",
			as: "div",
			children: createRawSnippet(() => ({
				render() {
					return "<span>Box body</span>";
				},
			})),
		};

		expect(render(Box, props)).toMimicReact(ReactBox.New, {
			props,
			children: [React.createElement("span", {}, "Box body")],
		});
	});
});
