import { render } from "$testlib/render";
import { Hide as ReactHide, Show as ReactShow } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import { createRawSnippet } from "svelte";
import Hide from "./Hide.svelte";
import Show from "./Show.svelte";
import type { BaseResponsiveProps } from "./type";

describe("Responsive", () => {
	describe("Show", () => {
		it("renders with HTML similar to ds-react", async () => {
			const props: BaseResponsiveProps = {
				above: "xl",
				below: "xl",
				children: createRawSnippet(() => ({
					render() {
						return "<span>body</span>";
					},
				})),
			};

			expect(render(Show, props)).toMimicReact(ReactShow, {
				props,
				children: [React.createElement("span", {}, "body")],
			});
		});
	});

	describe("Hide", () => {
		it("renders with HTML similar to ds-react", async () => {
			const props: BaseResponsiveProps = {
				above: "xl",
				below: "xl",
				children: createRawSnippet(() => ({
					render() {
						return "<span>body</span>";
					},
				})),
			};

			expect(render(Hide, props)).toMimicReact(ReactHide, {
				props,
				children: [React.createElement("span", {}, "body")],
			});
		});
	});
});
