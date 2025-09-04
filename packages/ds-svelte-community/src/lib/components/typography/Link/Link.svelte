<script lang="ts">
	import type { AkselColor } from "$lib/components/Theme/Theme.svelte";
	import { classes, omit } from "../../helpers";
	import type { LinkProps } from "./type";

	let {
		href,
		variant = "action",
		underline = true,
		inlineText = false,
		as = "a",
		children,
		"data-color": color,
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
	<a
		{...omit(restProps, "class", "href")}
		{href}
		class={classes([
			restProps.class,
			"navds-link",
			"navds-link--" + variant,
			{
				"navds-link--inline-text": inlineText,
				"navds-link--remove-underline": !underline,
			},
		])}
		data-color={color ?? variantToColor(variant)}
		data-variant={variant}
	>
		{@render children()}
	</a>
{:else}
	<svelte:element
		this={as}
		{...omit({ ...restProps, href }, "class")}
		class={classes([
			restProps.class,
			"navds-link",
			"navds-link--" + variant,
			{
				"navds-link--inline-text": inlineText,
				"navds-link--remove-underline": !underline,
			},
		])}
		data-color={color ?? variantToColor(variant)}
		data-variant={variant}
	>
		{@render children()}
	</svelte:element>
{/if}
