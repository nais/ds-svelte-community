import { bunmatch } from "$testlib/bunmatch";
import { Bleed as ReactBleed } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
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

		expect(
			await bunmatch(render(Bleed, props), ReactBleed, {
				props,
				children: [React.createElement("span", {}, "Bleed body")],
			}),
		).toBeTrue();
	});

	afterEach(cleanup);
});
