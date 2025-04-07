<script lang="ts">
	import { onDestroy } from "svelte";
	import { classes, omit } from "../helpers";
	import Label from "../typography/Label/Label.svelte";
	import CompletedIcon from "./CompletedIcon.svelte";
	import { getStepperContext, type StepProps } from "./type.svelte";

	let { completed = false, interactive, children, ...restProps }: StepProps = $props();

	const id = $props.id();
	const ctx = getStepperContext();

	let isInteractive = $derived.by(() => {
		if (interactive === undefined) {
			return ctx.interactive;
		}
		return interactive;
	});

	let as = $derived(isInteractive ? "a" : "div");

	ctx.register(id);
	let index = $derived(ctx.steps.indexOf(id) + 1);

	onDestroy(() => {
		ctx.unregister(id);
	});

	const handleClick = (e: MouseEvent) => {
		ctx.setStep(index, e);
	};
</script>

<li
	class={classes([
		"navds-stepper__item",
		{
			"navds-stepper__item--behind": index < ctx.activeStep,
			"navds-stepper__item--non-interactive": !isInteractive,
			"navds-stepper__item--completed": completed,
		},
	])}
>
	<span class={classes(["navds-stepper__line", "navds-stepper__line--1"])}></span>
	<svelte:element
		this={as}
		{...omit(restProps, "class")}
		class={classes([
			"navds-stepper__step",
			{
				"navds-stepper__step--active": index == ctx.activeStep,
				"navds-stepper__step--behind": index < ctx.activeStep,
				"navds-stepper__step--non-interactive": !isInteractive,
				"navds-stepper__step--completed": completed,
				unstyled: as == "a",
			},
		])}
		aria-current={index == ctx.activeStep ? "step" : undefined}
		onclick={isInteractive ? handleClick : null}
		role={isInteractive ? "button" : undefined}
		tabindex={isInteractive ? 0 : undefined}
		data-active={index == ctx.activeStep}
		data-completed={completed}
		data-interactive={isInteractive}
	>
		{#if completed}
			<span class={classes(["navds-stepper__circle", "navds-stepper__circle--success"])}>
				<CompletedIcon />
			</span>
		{:else}
			<Label class={classes("navds-stepper__circle")} as="span" aria-hidden="true">
				{index}
			</Label>
		{/if}
		<Label as="span" class={classes("navds-stepper__content")}>
			{@render children()}
		</Label>
	</svelte:element>
	<span class={classes(["navds-stepper__line", "navds-stepper__line--2"])}></span>
</li>
