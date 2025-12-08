import { render } from "$testlib/render";
import { TextField as ReactTextField } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import TextField from "./TextField.test.svelte";
import type { TextFieldProps } from "./type";

const defaultOpts = {
	compareAttrs(node: Element, attr: string) {
		// Remove attrs known to be unique
		if (["id", "for", "aria-describedby"].includes(attr)) {
			return false;
		}
		return true;
	},
};

describe("TextField", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: Omit<Omit<Omit<TextFieldProps, "children">, "label">, "description"> = {};
		expect(render(TextField, props)).toMimicReact(ReactTextField, {
			props: {
				label: "Some label",
				description: "Some longer description",
			},
			opts: defaultOpts,
		});
	});

	it("renders with error", async () => {
		expect(render(TextField, { error: "This field has an error" })).toMimicReact(ReactTextField, {
			props: {
				label: "Some label",
				description: "Some longer description",
				error: "This field has an error",
			},
			opts: defaultOpts,
		});
	});

	it("renders with small size", async () => {
		expect(render(TextField, { size: "small" })).toMimicReact(ReactTextField, {
			props: {
				label: "Some label",
				description: "Some longer description",
				size: "small",
			},
			opts: defaultOpts,
		});
	});

	it("renders disabled", async () => {
		expect(render(TextField, { disabled: true })).toMimicReact(ReactTextField, {
			props: {
				label: "Some label",
				description: "Some longer description",
				disabled: true,
			},
			opts: defaultOpts,
		});
	});

	it("renders readonly", async () => {
		expect(render(TextField, { readonly: true })).toMimicReact(ReactTextField, {
			props: {
				label: "Some label",
				description: "Some longer description",
				readOnly: true,
			},
			opts: defaultOpts,
		});
	});

	it("renders with hideLabel", async () => {
		expect(render(TextField, { hideLabel: true })).toMimicReact(ReactTextField, {
			props: {
				label: "Some label",
				description: "Some longer description",
				hideLabel: true,
			},
			opts: defaultOpts,
		});
	});

	it("renders with type email", async () => {
		expect(render(TextField, { type: "email" })).toMimicReact(ReactTextField, {
			props: {
				label: "Some label",
				description: "Some longer description",
				type: "email",
			},
			opts: defaultOpts,
		});
	});

	it("renders with htmlSize", async () => {
		expect(render(TextField, { htmlSize: 10 })).toMimicReact(ReactTextField, {
			props: {
				label: "Some label",
				description: "Some longer description",
				htmlSize: 10,
			},
			opts: defaultOpts,
		});
	});
});
