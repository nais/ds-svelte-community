import { bunmatch } from "$testlib/bunmatch";
import { Hide as ReactHide, Show as ReactShow } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
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

			expect(
				await bunmatch(render(Show, props), ReactShow, {
					props,
					children: [React.createElement("span", {}, "body")],
				}),
			).toBeTrue();
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

			expect(
				await bunmatch(render(Hide, props), ReactHide, {
					props,
					children: [React.createElement("span", {}, "body")],
				}),
			).toBeTrue();
		});
	});

	afterEach(cleanup);
});
