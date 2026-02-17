import { render } from "$testlib/render";
import { HGrid as ReactHGrid } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import HGrid from "./HGrid.test.svelte";
import type { HGridSpecificProps } from "./type";

describe("HGrid", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: Partial<HGridSpecificProps> = {
			columns: { sm: 1, md: 1, lg: "1fr auto", xl: "1fr auto" },
			gap: { sm: "space-8", md: "space-8", lg: "space-24", xl: "space-24" },
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
