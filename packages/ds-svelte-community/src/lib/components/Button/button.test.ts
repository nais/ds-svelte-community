import type { ButtonProps } from "$lib/components/Button/type";
import { render, someRandomText, someRandomTextSnippet } from "$testlib/render";
import { IgnoreKnownUnique } from "$testlib/stdopts";
import { Button as ReactButton } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import Button from "./Button.svelte";

describe("Button", () => {
	it("renders with HTML similar to ds-react", async () => {
		expect(
			render(Button, {
				children: someRandomTextSnippet,
			}),
		).toMimicReact(ReactButton, { children: [someRandomText] });
	});

	it("renders with HTML similar to ds-react with props", async () => {
		const props: ButtonProps = {
			as: "a",
			href: "/",
			variant: "secondary",
			size: "small",
			children: someRandomTextSnippet,
		};
		expect(render(Button, props)).toMimicReact(ReactButton, {
			props,
			children: [someRandomText],
		});
	});

	it("renders with HTML similar to ds-react with loading", async () => {
		const props: ButtonProps = {
			loading: true,
			children: someRandomTextSnippet,
		};
		expect(render(Button, props)).toMimicReact(ReactButton, {
			props,
			children: [someRandomText],
			opts: {
				...IgnoreKnownUnique,
				// Because the loading spinner animates, this is hard to match exactly
				visual: { skip: true },
			},
		});
	});

	it("renders with HTML similar to ds-react with disabled", async () => {
		const props: ButtonProps = {
			disabled: true,
			children: someRandomTextSnippet,
		};
		expect(render(Button, props)).toMimicReact(ReactButton, { props, children: [someRandomText] });
	});

	it("renders with HTML similar to ds-react with disabled with as", async () => {
		const props: ButtonProps = {
			as: "a",
			href: "/",
			disabled: true,
			children: someRandomTextSnippet,
		};
		expect(render(Button, props)).toMimicReact(ReactButton, {
			props,
			children: [someRandomText],
			opts: {
				alterAttrValue: (name, value) => {
					if (name == "disabled" && value == "true") {
						return "";
					}
					return value;
				},
			},
		});
	});
});
