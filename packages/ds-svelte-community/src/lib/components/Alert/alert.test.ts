import { bunmatch } from "$testlib/bunmatch";
import { IgnoreKnownUnique } from "$testlib/stdopts";
import { Alert as ReactAlert } from "@navikt/ds-react";
import { render } from "@testing-library/svelte";
import { describe, expect, it } from "bun:test";
import Alert from "./Alert.test.svelte";
import { sizes, variants, type AlertProps } from "./type";

describe("Alert", () => {
	it("renders an Alert with a label", () => {
		const r = render(Alert, { iconTitleText: "Informasjon" });
		expect(r.container.innerHTML).toContain("Some alert");
	});

	const testVariants = [true, false].flatMap((close) =>
		sizes.flatMap((size) => variants.map((variant) => ({ size, variant, close }))),
	);

	testVariants.forEach(({ size, variant, close }) => {
		it(`renders similar to ds-reacth with size ${size} and variant ${variant}. close button: ${close}`, async () => {
			const props: Omit<AlertProps, "children"> = {
				size: size as never,
				variant: variant as never,
				closeButton: close,
			};

			const iconTexts: Record<(typeof variants)[number], string> = {
				error: "Feil",
				warning: "Advarsel",
				info: "Informasjon",
				success: "Suksess",
			};

			const closeMsg: Record<(typeof variants)[number], string> = {
				warning: "Lukk varsel",
				error: "Lukk varsel",
				info: "Lukk melding",
				success: "Lukk melding",
			};

			expect(
				await bunmatch(
					render(Alert, {
						...props,
						iconTitleText: iconTexts[variant as unknown as (typeof variants)[number]],
						closeButtonIconText: closeMsg[variant as unknown as (typeof variants)[number]],
					}),
					ReactAlert,
					{
						props,
						children: ["Some alert"],
						opts: {
							compareAttrs(node, attr) {
								if (node.tagName.toLowerCase() == "path" && attr == "d") {
									return false;
								}
								return IgnoreKnownUnique.compareAttrs!(node, attr);
							},
						},
					},
				),
			).toBeTrue();
		});
	});

	it("renders similar to ds-reacth with other props", async () => {
		const props: Omit<AlertProps, "children"> = {
			fullWidth: true,
			inline: true,
			variant: "info",
			// closeButton: true,
		};

		expect(
			await bunmatch(
				render(Alert, {
					...props,
					iconTitleText: "Informasjon",
				}),
				ReactAlert,
				{
					props,
					children: ["Some alert"],
					opts: IgnoreKnownUnique,
				},
			),
		).toBeTrue();
	});

	// afterEach(cleanup);
});
