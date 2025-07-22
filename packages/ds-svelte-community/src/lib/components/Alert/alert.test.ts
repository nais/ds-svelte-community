import { render, someRandomTextSnippet } from "$testlib/render";
import { IgnoreKnownUnique } from "$testlib/stdopts";
import { Alert as ReactAlert } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import Alert from "./Alert.svelte";
import { sizes, variants, type AlertProps } from "./type";

describe("Alert", () => {
	const testVariants = [true, false].flatMap((close) =>
		sizes.flatMap((size) => variants.map((variant) => ({ size, variant, close }))),
	);

	testVariants.forEach(({ size, variant, close }) => {
		it(`renders similar to ds-reacth with size ${size} and variant ${variant}. close button: ${close}`, async () => {
			const props: AlertProps = {
				size: size as never,
				variant: variant as never,
				closeButton: close,
				children: someRandomTextSnippet,
			};

			expect(
				render(Alert, {
					...props,
				}),
			).toMimicReact(ReactAlert, {
				props,
				children: ["SomeRandomText"],
				opts: {
					visual: {
						strict: false,
					},
					compareAttrs(node, attr) {
						if (node.tagName.toLowerCase() == "path" && attr == "d") {
							return false;
						}
						return IgnoreKnownUnique.compareAttrs!(node, attr);
					},
				},
			});
		});
	});

	it("renders similar to ds-reacth with other props", async () => {
		const props: AlertProps = {
			fullWidth: true,
			inline: true,
			variant: "info",
			children: someRandomTextSnippet,
		};

		expect(
			render(Alert, {
				...props,
			}),
		).toMimicReact(ReactAlert, {
			props,
			children: ["SomeRandomText"],
			opts: IgnoreKnownUnique,
		});
	});
});
