<!--
@component
ToggleGroup lets the user make choices that affect the content of the page. The component consists of a group of buttons that are connected and only one button can be selected at a time.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/toggle-group).
-->

<script lang="ts">
	import { Label } from "$lib";
	import { setContext } from "svelte";
	import { omit } from "../helpers";
	import { contextKey, ToggleGroupContext, type ToggleGroupProps } from "./type.svelte";

	let {
		size = "medium",
		value = $bindable(),
		label = "",
		variant = "action",
		children,
		onchange,
		...restProps
	}: ToggleGroupProps = $props();

	const ctx = new ToggleGroupContext();
	ctx.size = size;
	ctx.value = value;
	ctx.setValue = (v: string) => {
		value = v;
		ctx.value = v;
	};

	setContext<ToggleGroupContext>(contextKey, ctx);

	let preValue = $state.snapshot(value);
	$effect(() => {
		if (preValue !== value) {
			preValue = $state.snapshot(value);
			onchange?.(value);
		}
	});

	$effect(() => {
		ctx.value = value;
	});
</script>

<div {...omit(restProps, "class")} class={[restProps.class, "aksel-toggle-group__wrapper"]}>
	{#if label}
		<Label {size} class="aksel-toggle-group__label">{label}</Label>
	{/if}

	<div
		role="radiogroup"
		class={["aksel-toggle-group", `aksel-toggle-group--${size}`, `aksel-toggle-group--${variant}`]}
		tabindex="0"
	>
		{@render children()}
	</div>
</div>
