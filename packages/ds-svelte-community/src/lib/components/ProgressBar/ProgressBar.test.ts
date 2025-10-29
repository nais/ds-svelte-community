import type { ProgressBarProps } from "$lib/components/ProgressBar/type";
import { render } from "$testlib/render";
import { ProgressBar as ReactProgressBar } from "@navikt/ds-react";
import { describe, expect, test } from "bun:test";
import ProgressBar from "./ProgressBar.svelte";

describe("ProgressBar", () => {
	test("renders with basic value", () => {
		const props: ProgressBarProps = { value: 50, "aria-label": "Progress" };
		expect(render(ProgressBar, props)).toMimicReact(ReactProgressBar, { props });
	});

	test("renders with custom valueMax", () => {
		const props: ProgressBarProps = { value: 3, valueMax: 10, "aria-label": "Step 3 of 10" };
		expect(render(ProgressBar, props)).toMimicReact(ReactProgressBar, { props });
	});

	test("renders with size large", () => {
		const props: ProgressBarProps = { value: 50, size: "large", "aria-label": "Progress" };
		expect(render(ProgressBar, props)).toMimicReact(ReactProgressBar, { props });
	});

	test("renders with size small", () => {
		const props: ProgressBarProps = { value: 50, size: "small", "aria-label": "Progress" };
		expect(render(ProgressBar, props)).toMimicReact(ReactProgressBar, { props });
	});

	test("renders with aria-labelledby", () => {
		const props: ProgressBarProps = { value: 25, "aria-labelledby": "label-id" };
		expect(render(ProgressBar, props)).toMimicReact(ReactProgressBar, { props });
	});

	test("renders with simulated loading", () => {
		const onTimeout = () => {};
		const props: ProgressBarProps = {
			simulated: { seconds: 30, onTimeout },
			"aria-label": "Loading",
		};
		expect(render(ProgressBar, props)).toMimicReact(ReactProgressBar, { props });
	});

	test("renders hidden progressbar", () => {
		const props: ProgressBarProps = { value: 50, "aria-hidden": true };
		expect(render(ProgressBar, props)).toMimicReact(ReactProgressBar, { props });
	});

	test("renders with custom className", () => {
		const svelteProps = {
			value: 75,
			"aria-label": "Progress",
			class: "custom-class",
		};
		const reactProps = {
			value: 75,
			"aria-label": "Progress",
			className: "custom-class",
		};
		expect(render(ProgressBar, svelteProps)).toMimicReact(ReactProgressBar, { props: reactProps });
	});
});
