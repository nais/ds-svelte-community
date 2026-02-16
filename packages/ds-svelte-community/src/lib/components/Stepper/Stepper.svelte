<!--
@component
Stepper can be used to indicate where the user is in a process. Can be used for navigation patterns between steps, or for a visual guide on progression. The component itself should be a supplement to other patterns or indicators, and should not be the only way to navigate a solution.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/stepper).
-->

<script lang="ts">
	import { setContext } from "svelte";
	import { omit } from "../helpers";
	import { contextKey, type StepperContext, type StepperProps } from "./type.svelte";

	let {
		orientation = "vertical",
		activeStep = 1,
		interactive = true,
		onchange,
		children,
		...restProps
	}: StepperProps = $props();

	let steps = $state<string[]>([]);

	const context: StepperContext = {
		get activeStep() {
			return activeStep;
		},
		get orientation() {
			return orientation;
		},
		get interactive() {
			return interactive;
		},
		get onchange() {
			return onchange;
		},
		get steps() {
			return steps;
		},
		register(el: string) {
			steps.push(el);
			return steps.length;
		},
		unregister(el: string) {
			const index = steps.indexOf(el);
			if (index > -1) {
				steps.splice(index, 1);
			}
		},
		setStep(step: number, event: MouseEvent) {
			if (onchange) {
				onchange(step, event);
			}
		},
	};

	setContext<StepperContext>(contextKey, context);
</script>

<ol
	{...omit(restProps, "class")}
	class={[
		restProps.class,
		"aksel-stepper",
		{
			"aksel-stepper--horizontal": orientation === "horizontal",
		},
	]}
	data-orientation={orientation}
>
	{@render children()}
</ol>
