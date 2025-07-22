import { render } from "$testlib/render";
import { TextField as ReactTextField } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import TextField from "./TextField.test.svelte";
import type { TextFieldProps } from "./type";

describe("TextField", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: Omit<Omit<Omit<TextFieldProps, "children">, "label">, "description"> = {};
		expect(render(TextField, props)).toMimicReact(ReactTextField, {
			props: {
				label: "Some label",
				description: "Some longer description",
			},
			opts: {
				compareAttrs(node, attr) {
					// Remove attrs known to be unique
					if (["id", "for", "aria-describedby"].includes(attr)) {
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
