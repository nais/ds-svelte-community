import { render } from "$testlib/render";
import { Textarea as ReactTextarea } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import Textarea from "./Textarea.svelte";
import type { TextareaProps } from "./type";

describe("Textarea", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: Omit<TextareaProps, "label" | "description"> = {};
		expect(
			render(Textarea, { ...props, label: "Some label", description: "Some description" }),
		).toMimicReact(ReactTextarea, {
			props: {
				label: "Some label",
				description: "Some description",
			},
			opts: {
				compareAttrs(node, attr) {
					// Remove attrs known to be unique
					if (["id", "for", "aria-describedby", "style"].includes(attr)) {
						return false;
					}
					return true;
				},
			},
		});
	});

	it("renders with maxLength counter", async () => {
		expect(
			render(Textarea, { label: "With counter", maxlength: 100, value: "Hello" }),
		).toMimicReact(ReactTextarea, {
			props: {
				label: "With counter",
				maxLength: 100,
				value: "Hello",
			},
			opts: {
				compareAttrs(node, attr) {
					if (["id", "for", "aria-describedby", "style"].includes(attr)) {
						return false;
					}
					return true;
				},
			},
		});
	});

	it("renders with error", async () => {
		expect(render(Textarea, { label: "With error", error: "Error message" })).toMimicReact(
			ReactTextarea,
			{
				props: {
					label: "With error",
					error: "Error message",
				},
				opts: {
					compareAttrs(node, attr) {
						if (["id", "for", "aria-describedby", "style"].includes(attr)) {
							return false;
						}
						return true;
					},
				},
			},
		);
	});
});
