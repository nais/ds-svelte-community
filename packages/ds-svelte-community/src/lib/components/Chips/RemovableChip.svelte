<!--
	@component
	Toggle chip is used for filtering content and data.
 -->

<script lang="ts">
	import XMarkIcon from "$lib/icons/XMarkIcon.svelte";
	import { omit } from "../helpers";
	import { type AkselColor } from "../Theme/Theme.svelte";
	import type { RemovableChipProps } from "./type";

	let {
		variant,
		removeLabel = "delete",
		children,
		value,
		ondelete,
		"data-color": color,
		...restProps
	}: RemovableChipProps = $props();

	function variantToColor(variant?: RemovableChipProps["variant"]): AkselColor | undefined {
		switch (variant) {
			case "action":
				return "accent";
			case "neutral":
				return "neutral";
			default:
				return undefined;
		}
	}
</script>

<button
	type="button"
	{...omit(restProps, "class")}
	class={[
		restProps.class,
		"aksel-chips__chip",
		"aksel-chips__removable",
		"aksel-chips--icon-right",
		{
			[`navds-chips__removable--${variant}`]: variant,
		},
	]}
	aria-label={`${value} ${removeLabel}`}
	data-color={color ?? variantToColor(variant)}
	onclick={(e) => {
		e.preventDefault();
		if (ondelete) {
			ondelete();
		}
		if (restProps && "onclick" in restProps && typeof restProps.onclick === "function") {
			restProps.onclick(e);
		}
	}}
>
	<span class="aksel-chips__chip-text">
		{#if children}
			{@render children()}
		{:else}
			{value}
		{/if}
	</span>
	<span class="aksel-chips__removable-icon">
		<XMarkIcon aria-hidden />
	</span>
</button>
