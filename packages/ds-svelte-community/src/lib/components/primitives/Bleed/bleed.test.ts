import { render } from "$testlib/render";
import { Bleed as ReactBleed } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import { createRawSnippet } from "svelte";
import Bleed from "./Bleed.svelte";
import type { BleedProps } from "./type";

describe("Bleed", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: BleedProps = {
			marginInline: "4",
			marginBlock: "4",
			reflectivePadding: true,
			children: createRawSnippet(() => ({
				render() {
					return "<span>Bleed body</span>";
				},
			})),
		};

		expect(render(Bleed, props)).toMimicReact(ReactBleed, {
			props,
			children: [React.createElement("span", {}, "Bleed body")],
		});
	});
});
