import { bunmatch } from "$testlib/bunmatch";
import { Stepper as ReactStepper } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import React from "react";
import Stepper from "./Stepper.test.svelte";
import type { StepperProps } from "./type.svelte";

describe("Stepper", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: Omit<StepperProps, "children"> = {
			activeStep: 3,
		};
		expect(
			await bunmatch(render(Stepper, props), ReactStepper, {
				props,
				children: [
					React.createElement(ReactStepper.Step, {
						href: "#f1",
						completed: true,
						children: "Account information",
					} as never),
					React.createElement(ReactStepper.Step, {
						href: "#f2",
						completed: true,
						children: "About you",
					} as never),
					React.createElement(ReactStepper.Step, {
						href: "#f3",
						completed: false,
						children: "How did you hear about us",
					} as never),
					React.createElement(ReactStepper.Step, {
						href: "#f4",
						interactive: false,
						children: "Confirmation",
					} as never),
				],
				opts: {
					compareAttrs(node, attr) {
						const tagName = node.tagName.toLowerCase();
						// Svelte aria checks warn about missing role and tabindex when having an onclick handler
						if (tagName == "a" && ["role", "tabindex"].includes(attr)) {
							return false;
						}
						return true;
					},

					// Looks like navds-stepper__item--non-interactive is added when interactive and not when not interactive
					ignoreClasses: ["navds-stepper__item--non-interactive", "unstyled"],
				},
			}),
		).toBeTrue();
	});

	afterEach(cleanup);
});
