import { bunmatch } from "$testlib/bunmatch";
import { ConfirmationPanel as ReactConfirmationPanel } from "@navikt/ds-react";
import { cleanup, render } from "@testing-library/svelte";
import { afterEach, describe, expect, it } from "bun:test";
import ConfirmationPanel from "./ConfirmationPanel.test.svelte";
import type { ConfirmationPanelProps } from "./type";

describe("ConfirmationPanel", () => {
	it("renders with HTML similar to ds-react", async () => {
		const props: ConfirmationPanelProps = {
			value: "val3",
			label: "Label",
		};
		expect(
			await bunmatch(render(ConfirmationPanel, props), ReactConfirmationPanel, {
				props: {
					...props,
					label: "Label fragment",
				},
				children: ["Confirmation body"],
				opts: {
					compareAttrs(node, attr) {
						// Remove attrs known to be unique
						if (["id", "aria-describedby", "for", "aria-labelledby"].includes(attr)) {
							return false;
						}
						return true;
					},
				},
			}),
		).toBeTrue();
	});

	afterEach(cleanup);
});
