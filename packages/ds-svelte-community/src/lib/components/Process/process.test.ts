import { render } from "$testlib/render";
import { Process as ReactProcess } from "@navikt/ds-react";
import { describe, expect, it } from "bun:test";
import React from "react";
import Process from "./Process.test.svelte";

describe("Process", () => {
	it("renders with HTML similar to ds-react", async () => {
		const events = [
			{
				title: "Start søknad",
				timestamp: "21. august 2025",
				status: "completed" as const,
			},
			{
				title: "Saksopplysninger",
				timestamp: "22. august 2025",
				status: "active" as const,
				content: "Saksopplysninger er sendt inn",
			},
			{
				title: "Vedlegg",
				timestamp: "25. august 2025",
				status: "uncompleted" as const,
				content:
					"Dokumentasjon av saksopplysninger er lastet opp og tilgjengelig for saksbehandler.",
			},
		];

		const props = {
			events,
			"aria-labelledby": "process-heading",
		};

		expect(render(Process, props)).toMimicReact(ReactProcess, {
			props: {
				"aria-labelledby": "process-heading",
			},
			children: [
				React.createElement(ReactProcess.Event, {
					title: "Start søknad",
					timestamp: "21. august 2025",
					status: "completed",
				}),
				React.createElement(
					ReactProcess.Event,
					{
						title: "Saksopplysninger",
						timestamp: "22. august 2025",
						status: "active",
					},
					"Saksopplysninger er sendt inn",
				),
				React.createElement(
					ReactProcess.Event,
					{
						title: "Vedlegg",
						timestamp: "25. august 2025",
						status: "uncompleted",
					},
					"Dokumentasjon av saksopplysninger er lastet opp og tilgjengelig for saksbehandler.",
				),
			],
			opts: {
				compareAttrs(node, attr) {
					// Remove attrs known to be unique or dynamic
					if (["id", "aria-controls", "aria-labelledby"].includes(attr)) {
						return false;
					}
					return true;
				},
			},
		});
	});
});
