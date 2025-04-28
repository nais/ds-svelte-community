<script lang="ts">
	import { omit } from "../../helpers";
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
		class={[
			restProps.class,
			"aksel-link",
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
		{...omit({ ...restProps, href }, "class")}
		class={[
			restProps.class,
			"aksel-link",
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
