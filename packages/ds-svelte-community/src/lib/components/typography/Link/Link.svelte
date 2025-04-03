<script lang="ts">
	import { classes, omit } from "../../helpers";
	import type { LinkProps } from "./type";

	let {
		href,
		variant = "action",
		underline = true,
		inlineText = false,
		as = "a",
		children,
		...restProps
	}: LinkProps = $props();
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
	>
		{@render children()}
	</svelte:element>
{/if}
