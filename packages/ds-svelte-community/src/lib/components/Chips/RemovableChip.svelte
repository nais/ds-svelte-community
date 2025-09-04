<!--
	@component
	Toggle chip is used for filtering content and data.
 -->

<script lang="ts">
	import XMarkIcon from "$lib/icons/XMarkIcon.svelte";
	import { classes, omit } from "../helpers";
	import type { AkselColor } from "../Theme/Theme.svelte";
	import type { RemovableChipProps } from "./type";

	let {
		variant = "action",
		removeLabel = "remove",
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
	class={classes([
		restProps.class,
		"navds-chips__chip",
		"navds-chips__removable",
		`navds-chips__removable--${variant}`,
		"navds-chips--icon-right",
	])}
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
	<span class={classes("navds-chips__chip-text")}>
		{#if children}
			{@render children()}
		{:else}
			{value}
		{/if}
	</span>
	<span class={classes("navds-chips__removable-icon")}>
		<XMarkIcon aria-hidden />
	</span>
</button>
