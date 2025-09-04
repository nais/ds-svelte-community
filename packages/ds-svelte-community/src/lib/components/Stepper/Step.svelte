<script lang="ts">
	import { onDestroy } from "svelte";
	import { classes, omit } from "../helpers";
	import Label from "../typography/Label/Label.svelte";
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
	data-color={isInteractive ? undefined : "neutral"}
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
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					fill="none"
					viewBox="0 0 24 24"
					focusable="false"
					role="img"
					aria-hidden="true"
				>
					<path
						d="M10.0352 13.4148L16.4752 7.40467C17.0792 6.83965 18.029 6.86933 18.5955 7.47478C19.162 8.08027 19.1296 9.03007 18.5245 9.59621L11.0211 16.5993C10.741 16.859 10.3756 17 10.0002 17C9.60651 17 9.22717 16.8462 8.93914 16.5611L6.43914 14.0611C5.85362 13.4756 5.85362 12.5254 6.43914 11.9399C7.02467 11.3544 7.97483 11.3544 8.56036 11.9399L10.0352 13.4148Z"
						fill="currentColor"
					/>
				</svg>
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
