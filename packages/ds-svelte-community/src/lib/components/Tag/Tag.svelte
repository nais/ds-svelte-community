<!--
@component
Tagging a situation with topics or statuses can improve the overview for users. It is a way to gather concise information about a situation in one place, so that users can get the information they need at a glance. Tags look like labels that people are used to from the physical world.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/tag).
-->

<script lang="ts">
	import { classes, isSnippet, omit } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import Detail from "../typography/Detail/Detail.svelte";
	import type { TagProps } from "./type";

	let {
		variant = "info",
		size = "medium",
		as = "span",
		children,
		icon,
		...restProps
	}: TagProps = $props();

	const Component = $derived(size == "medium" ? BodyShort : Detail);

	let filledVariant = $derived(variant?.endsWith("-filled") && "strong");
	let moderateVariant = $derived(variant?.endsWith("-moderate") && "moderate");
	let color = $derived(variant?.replace("-filled", "").replace("-moderate", ""));
</script>

<Component
	{as}
	{...omit(restProps, "size", "class")}
	size={size == "medium" ? "medium" : "small"}
	class={classes([
		restProps.class,
		"navds-tag",
		`navds-tag--${variant}`,
		`navds-tag--${size}`,
		`navds-tag--${filledVariant || moderateVariant || "outline"}`,
		`navds-tag--${color}`,
	])}
>
	{#if icon}
		<span class={classes("navds-tag__icon--left")}>
			{#if isSnippet(icon)}
				{@render icon()}
			{:else}
				{@const Icon = icon}
				<Icon />
			{/if}
		</span>
	{/if}
	{#if typeof children === "string"}
		{children}
	{:else}
		{@render children()}
	{/if}
</Component>
