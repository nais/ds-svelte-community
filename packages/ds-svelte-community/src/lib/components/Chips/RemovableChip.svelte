<!--
	@component
	Toggle chip is used for filtering content and data.
 -->

<script lang="ts">
	import XMarkIcon from "$lib/icons/XMarkIcon.svelte";
	import { omit } from "../helpers";
	import type { RemovableChipProps } from "./type";

	let {
		variant = "action",
		removeLabel = "remove",
		children,
		value,
		ondelete,
		...restProps
	}: RemovableChipProps = $props();
</script>

<button
	type="button"
	{...omit(restProps, "class")}
	class={[
		restProps.class,
		"aksel-chips__chip",
		"aksel-chips__removable",
		`aksel-chips__removable--${variant}`,
		"aksel-chips--icon-right",
	]}
	aria-label={`${value} ${removeLabel}`}
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
