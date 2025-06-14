import Button from "$lib/components/Button/Button.test.svelte";
import type { ButtonProps } from "$lib/components/Button/type";
import { bunmatch } from "$testlib/bunmatch";
import { IgnoreKnownUnique } from "$testlib/stdopts";
import { Button as ReactButton } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte" with { type: "browser" };
import { afterEach, describe, expect, it } from "bun:test";

describe("Button", () => {
	it("renders a button with a label", () => {
		const r = render(Button, {});
		expect(r.container.innerHTML).toContain("Click me!");
	});

	it("renders with HTML similar to ds-react", async () => {
		expect(await bunmatch(render(Button, {}), ReactButton, { children: ["Click me!"] })).toBeTrue();
	});

	it("renders with HTML similar to ds-react with props", async () => {
		cleanup();
		const props: ButtonProps = {
			as: "a",
			href: "/",
			variant: "secondary",
			size: "small",
		};
		expect(
			await bunmatch(render(Button, { props }), ReactButton, { props, children: ["Click me!"] }),
		).toBeTrue();
	});

	it("renders with HTML similar to ds-react with loading", async () => {
		cleanup();
		const props: ButtonProps = {
			loading: true,
		};
		expect(
			await bunmatch(render(Button, { props }), ReactButton, {
				props,
				children: ["Click me!"],
				opts: {
					compareAttrs(node, attr) {
						return IgnoreKnownUnique.compareAttrs!(node, attr);
					},
				},
			}),
		).toBeTrue();
	});

	it("renders with HTML similar to ds-react with disabled", async () => {
		const props: ButtonProps = {
			disabled: true,
		};
		expect(
			await bunmatch(render(Button, { props }), ReactButton, { props, children: ["Click me!"] }),
		).toBeTrue();
	});

	// Cannot test loading because of client side check required
	// it("renders with HTML similar to ds-react with loading", () => {
	// 	const props: Props = {
	// 		loading: true,
	// 	};
	// 	bunmatch(render(Button, { props }), ReactButton, { props, children: ["Click me!"] });
	// });

	it("renders with HTML similar to ds-react with disabled with as", async () => {
		const props: ButtonProps = {
			as: "a",
			href: "/",
			disabled: true,
		};
		expect(
			await bunmatch(render(Button, { props }), ReactButton, {
				props,
				children: ["Click me!"],
				opts: {
					alterAttrValue: (name, value) => {
						if (name == "disabled" && value == "true") {
							return "";
						}
						return value;
					},
					compareAttrs(node, attr) {
						return IgnoreKnownUnique.compareAttrs!(node, attr);
					},
				},
			}),
		).toBeTrue();
	});

	afterEach(cleanup);
});
