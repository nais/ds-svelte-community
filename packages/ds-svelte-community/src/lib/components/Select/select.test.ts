import { render } from "$testlib/render";
import { Select as ReactSelect } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import Select from "./Select.test.svelte";

const defaultChildren = [
	React.createElement("option", { value: "" }, "Choose country"),
	React.createElement("option", { value: "norway" }, "Norway"),
	React.createElement("option", { value: "sweden" }, "Sweden"),
	React.createElement("option", { value: "denmark" }, "Denmark"),
];

const defaultOpts = {
	compareAttrs(node: Element, attr: string) {
		if (node.tagName.toLowerCase() == "path" && attr == "d") {
			return false;
		}
		// Remove attrs known to be unique. Selected is added by Svelte SSR
		if (["id", "for", "selected", "aria-describedby", "aria-labelledby"].includes(attr)) {
			return false;
		}
		return true;
	},
};

describe("Select", () => {
	it("renders with HTML similar to ds-react", async () => {
		expect(render(Select, { label: "Select country" })).toMimicReact(ReactSelect, {
			props: { label: "Select country" },
			children: defaultChildren,
			opts: defaultOpts,
		});
	});

	it("renders with error", async () => {
		expect(
			render(Select, { label: "Select country", error: "Please select a country" }),
		).toMimicReact(ReactSelect, {
			props: { label: "Select country", error: "Please select a country" },
			children: defaultChildren,
			opts: defaultOpts,
		});
	});

	it("renders with small size", async () => {
		expect(render(Select, { label: "Select country", size: "small" })).toMimicReact(ReactSelect, {
			props: { label: "Select country", size: "small" },
			children: defaultChildren,
			opts: defaultOpts,
		});
	});

	it("renders disabled", async () => {
		expect(render(Select, { label: "Select country", disabled: true })).toMimicReact(ReactSelect, {
			props: { label: "Select country", disabled: true },
			children: defaultChildren,
			opts: defaultOpts,
		});
	});

	it("renders readonly", async () => {
		expect(render(Select, { label: "Select country", readonly: true })).toMimicReact(ReactSelect, {
			props: {
				label: "Select country",
				readOnly: true,
			},
			children: defaultChildren,
			opts: defaultOpts,
		});
	});

	it("renders with hideLabel", async () => {
		expect(render(Select, { label: "Select country", hideLabel: true })).toMimicReact(ReactSelect, {
			props: { label: "Select country", hideLabel: true },
			children: defaultChildren,
			opts: defaultOpts,
		});
	});

	it("renders with description", async () => {
		expect(render(Select, { label: "Select country", description: true })).toMimicReact(
			ReactSelect,
			{
				props: {
					label: "Select country",
					description: "Choose your country of residence",
				},
				children: defaultChildren,
				opts: defaultOpts,
			},
		);
	});
});
