<script lang="ts">
	import { onDestroy } from "svelte";
	import { omit } from "../helpers";
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
	class={[
		"aksel-stepper__item",
		{
			"aksel-stepper__item--behind": index < ctx.activeStep,
			"aksel-stepper__item--non-interactive": !isInteractive,
			"aksel-stepper__item--completed": completed,
		},
	]}
>
	<span class={["aksel-stepper__line", "aksel-stepper__line--1"]}></span>
	<svelte:element
		this={as}
		{...omit(restProps, "class")}
		class={[
			"aksel-stepper__step",
			{
				"aksel-stepper__step--active": index == ctx.activeStep,
				"aksel-stepper__step--behind": index < ctx.activeStep,
				"aksel-stepper__step--non-interactive": !isInteractive,
				"aksel-stepper__step--completed": completed,
				unstyled: as == "a",
			},
		]}
		aria-current={index == ctx.activeStep ? "step" : undefined}
		onclick={isInteractive ? handleClick : null}
		role={isInteractive ? "button" : undefined}
		tabindex={isInteractive ? 0 : undefined}
		data-active={index == ctx.activeStep}
		data-completed={completed}
		data-interactive={isInteractive}
	>
		{#if completed}
			<span class={["aksel-stepper__circle", "aksel-stepper__circle--success"]}>
				<CompletedIcon />
			</span>
		{:else}
			<Label class="aksel-stepper__circle" as="span" aria-hidden="true">
				{index}
			</Label>
		{/if}
		<Label as="span" class="aksel-stepper__content">
			{@render children()}
		</Label>
	</svelte:element>
	<span class="aksel-stepper__line aksel-stepper__line--2"></span>
</li>
