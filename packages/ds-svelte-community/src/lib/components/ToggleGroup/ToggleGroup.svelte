<!--
@component
ToggleGroup lets the user make choices that affect the content of the page. The component consists of a group of buttons that are connected and only one button can be selected at a time.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/toggle-group).
-->

<script lang="ts">
	import { Label } from "$lib";
	import { setContext } from "svelte";
	import { omit } from "../helpers";
	import type { AkselColor } from "../Theme/Theme.svelte";
	import { contextKey, type ToggleGroupContext, type ToggleGroupProps } from "./type.svelte";

	let {
		size = "medium",
		value = $bindable(),
		label = "",
		variant,
		fill = false,
		children,
		onchange,
		...restProps
	}: ToggleGroupProps = $props();

	const labelId = $props.id();

	function variantToColor(v: ToggleGroupProps["variant"]): AkselColor | undefined {
		switch (v) {
			case "action":
				return "accent";
			case "neutral":
				return "neutral";
			default:
				return undefined;
		}
	}

	const dataColor = $derived(restProps["data-color"] ?? variantToColor(variant));

	const ctx: ToggleGroupContext = {
		get size() {
			return size;
		},
		get value() {
			return value;
		},
		setValue(v: string) {
			value = v;
			onchange?.(v);
		},
	};

	setContext<ToggleGroupContext>(contextKey, ctx);
</script>

<div
	{...omit(restProps, "class", "data-color")}
	class={[
		restProps.class,
		"aksel-toggle-group__wrapper",
		{ "aksel-toggle-group__wrapper--fill": fill },
	]}
	data-color={dataColor}
>
	{#if label}
		<Label as="div" {size} class="aksel-toggle-group__label" id={labelId}>{label}</Label>
	{/if}

	<div
		role="radiogroup"
		aria-labelledby={label ? labelId : undefined}
		class={["aksel-toggle-group", `aksel-toggle-group--${size}`]}
		tabindex="0"
	>
		{@render children()}
	</div>
</div>
