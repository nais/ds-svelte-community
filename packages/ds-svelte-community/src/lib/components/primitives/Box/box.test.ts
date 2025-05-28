import { bunmatch } from "$testlib/bunmatch";
import { Box as ReactBox } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
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

		expect(
			await bunmatch(render(Box, props), ReactBox.New, {
				props,
				children: [React.createElement("span", {}, "Box body")],
			}),
		).toBeTrue();
	});

	it("renders with HTML similar to ds-react", async () => {
		const props: BoxProps = {
			padding: "6",
			paddingInline: "4",
			paddingBlock: "0 6",
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

		expect(
			await bunmatch(render(Box, props), ReactBox.New, {
				props,
				children: [React.createElement("span", {}, "Box body")],
			}),
		).toBeTrue();
	});

	afterEach(cleanup);
});
