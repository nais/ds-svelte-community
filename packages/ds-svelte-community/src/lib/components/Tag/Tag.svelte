<!--
@component
Tagging a situation with topics or statuses can improve the overview for users. It is a way to gather concise information about a situation in one place, so that users can get the information they need at a glance. Tags look like labels that people are used to from the physical world.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/tag).
-->

<script lang="ts">
	import { isSnippet, omit } from "../helpers";
	import type { AkselColor } from "../Theme/Theme.svelte";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import type { TagProps } from "./type";

	let {
		variant = "info",
		size = "medium",
		children,
		icon,
		"data-color": color,
		...restProps
	}: TagProps = $props();

	let filledVariant = $derived(variant?.endsWith("-filled") && "strong");
	let moderateVariant = $derived(variant?.endsWith("-moderate") && "moderate");

	function variantToColor(variant: TagProps["variant"]): AkselColor {
		switch (variant) {
			case "warning":
			case "warning-filled":
			case "warning-moderate":
				return "warning";
			case "error":
			case "error-filled":
			case "error-moderate":
				return "danger";
			case "info":
			case "info-filled":
			case "info-moderate":
			case "alt3":
			case "alt3-filled":
			case "alt3-moderate":
				return "info";
			case "success":
			case "success-filled":
			case "success-moderate":
				return "success";
			case "neutral":
			case "neutral-filled":
			case "neutral-moderate":
				return "neutral";
			case "alt1":
			case "alt1-filled":
			case "alt1-moderate":
				return "meta-purple";
			case "alt2":
			case "alt2-filled":
			case "alt2-moderate":
				return "meta-lime";
			default:
				return "neutral";
		}
	}
</script>

<BodyShort
	{...omit(restProps, "size", "class")}
	size={size === "medium" ? "medium" : "small"}
	as="span"
	data-color={color ?? variantToColor(variant)}
	data-variant={filledVariant || moderateVariant || "outline"}
	class={[restProps.class, "aksel-tag", `aksel-tag--${variant}`, `aksel-tag--${size}`]}
>
	{#if icon}
		<span class="aksel-tag__icon--left">
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
</BodyShort>
