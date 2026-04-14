import { render } from "$testlib/render";
import { Fieldset as ReactFieldset } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import Fieldset from "./Fieldset.test.svelte";
import type { FieldsetProps } from "./type";

function ignoreKnownUnique(node: HTMLElement, attr: string) {
	// Remove attrs known to be unique
	if (["id", "aria-describedby", "aria-labelledby"].includes(attr)) {
		return false;
	}
	return true;
}

describe("Fieldset", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: Omit<Omit<FieldsetProps, "children">, "legend"> = {
			error: "error",
		};
		expect(render(Fieldset, props)).toMimicReact(ReactFieldset, {
			props: {
				...props,
				legend: "Legend",
				description: "Description",
			},
			children: ["Fieldset body"],
			opts: {
				compareAttrs: ignoreKnownUnique,
			},
		});
	});

	it("renders with hideLegend similar to ds-react", async () => {
		const props: Omit<Omit<FieldsetProps, "children">, "legend"> = {
			hideLegend: true,
			error: "error",
		};
		expect(render(Fieldset, props)).toMimicReact(ReactFieldset, {
			props: {
				...props,
				legend: "Legend",
				description: "Description",
			},
			children: ["Fieldset body"],
			opts: {
				compareAttrs: ignoreKnownUnique,
			},
		});
	});

	it("renders with readOnly similar to ds-react", async () => {
		const props: Omit<Omit<FieldsetProps, "children">, "legend"> = {
			readonly: true,
		};
		expect(render(Fieldset, props)).toMimicReact(ReactFieldset, {
			props: {
				readOnly: true,
				legend: "Legend",
				description: "Description",
			},
			children: ["Fieldset body"],
			opts: {
				compareAttrs: ignoreKnownUnique,
			},
		});
	});

	it("renders readOnly with error suppressed similar to ds-react", async () => {
		const props: Omit<Omit<FieldsetProps, "children">, "legend"> = {
			readonly: true,
			error: "This should not show",
		};
		expect(render(Fieldset, props)).toMimicReact(ReactFieldset, {
			props: {
				readOnly: true,
				error: "This should not show",
				legend: "Legend",
				description: "Description",
			},
			children: ["Fieldset body"],
			opts: {
				compareAttrs: ignoreKnownUnique,
			},
		});
	});
});
