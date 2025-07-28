import { render } from "$testlib/render";
import { HGrid as ReactHGrid } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import HGrid from "./HGrid.test.svelte";
import type { HGridProps } from "./type";

describe("HGrid", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: Omit<HGridProps, "children"> = {
			columns: { sm: 1, md: 1, lg: "1fr auto", xl: "1fr auto" },
			gap: { sm: "2", md: "2", lg: "6", xl: "6" },
			align: "end",
		};

		expect(render(HGrid, props)).toMimicReact(ReactHGrid, {
			props,
			children: [
				React.createElement("div", { key: "1" }),
				React.createElement("div", { key: "2" }),
			],
		});
	});
});
