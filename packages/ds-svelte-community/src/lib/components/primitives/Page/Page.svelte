<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import { GetTheme } from "$lib/components/Theme/Theme.svelte";
	import type { PageProps } from "./type";

	let {
		as = "div",
		background = undefined,
		footerPosition = undefined,
		contentBlockPadding = "end",
		children,
		footer,
		...restProps
	}: PageProps = $props();

	const theme = GetTheme();
	if (!theme && !background) {
		background = "bg-default";
	}

	if (process.env.NODE_ENV !== "production" && theme && background) {
		console.warn(`<Page>: Prop "background" is deprecated and cannot be used with theme-support. `);
	}

	let belowFold = $derived(footerPosition === "belowFold");
</script>

<svelte:element
	this={as}
	{...omit(restProps, "class", "style")}
	class={classes([restProps.class, "navds-page"])}
	style={`--__ac-page-background: var(--a-${background}) ${restProps.style || ""}`}
>
	<div
		class={classes({
			"navds-page__content--fullheight": belowFold,
			"navds-page__content--grow": !belowFold,
			"navds-page__content--padding": contentBlockPadding === "end",
		})}
	>
		{@render children()}
	</div>

	{#if footer}
		{@render footer()}
	{/if}
</svelte:element>
