import { render } from "$testlib/render";
import { Select as ReactSelect } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import Select from "./Select.test.svelte";
import type { SelectProps } from "./type";

describe("Select", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: Omit<SelectProps, "children"> = {
			label: "Select country",
		};
		expect(render(Select, props)).toMimicReact(ReactSelect, {
			props,
			children: [
				React.createElement("option", { value: "" }, "Choose country"),
				React.createElement("option", { value: "norway" }, "Norway"),
				React.createElement("option", { value: "sweden" }, "Sweden"),
				React.createElement("option", { value: "denmark" }, "Denmark"),
			],
			opts: {
				compareAttrs(node, attr) {
					if (node.tagName.toLowerCase() == "path" && attr == "d") {
						return false;
					}

					// Remove attrs known to be unique. Selected is added by Svelte SSR
					if (["id", "for", "selected"].includes(attr)) {
						return false;
					}
					return true;
				},
				visual: {
					strict: false,
				},
			},
		});
	});
});
