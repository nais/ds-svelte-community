<script lang="ts">
	import type { AkselColor } from "$lib/components/Theme/Theme.svelte";
	import { omit } from "../../helpers";
	import type { LinkProps } from "./type";

	let {
		href,
		variant,
		underline = true,
		inlineText = false,
		as = "a",
		"data-color": color,
		children,
		...restProps
	}: LinkProps = $props();

	function variantToColor(variant?: LinkProps["variant"]): AkselColor | undefined {
		switch (variant) {
			case "action":
				return "accent";
			case "neutral":
				return "neutral";
			case "subtle":
				return "neutral";
			default:
				return undefined;
		}
	}
</script>

{#if as == "a"}
	<!-- eslint-disable svelte/no-navigation-without-resolve -->
	<a
		{...omit(restProps, "class", "href")}
		data-color={color ?? variantToColor(variant)}
		data-variant={variant}
		{href}
		class={[
			restProps.class,
			"aksel-link",
			"unstyled",
			"aksel-link--" + variant,
			{
				"aksel-link--inline-text": inlineText,
				"aksel-link--remove-underline": !underline,
			},
		]}
	>
		{@render children()}
	</a>
{:else}
	<svelte:element
		this={as}
		data-color={color ?? variantToColor(variant)}
		data-variant={variant}
		{...omit({ ...restProps, href }, "class")}
		class={[
			restProps.class,
			"aksel-link",
			"unstyled",
			"aksel-link--" + variant,
			{
				"aksel-link--inline-text": inlineText,
				"aksel-link--remove-underline": !underline,
			},
		]}
	>
		{@render children()}
	</svelte:element>
{/if}
