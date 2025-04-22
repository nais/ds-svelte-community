<script lang="ts">
	import { omit } from "$lib/components/helpers";
	import type { PageProps } from "./type";

	let {
		as = "div",
		footerPosition = undefined,
		contentBlockPadding = "end",
		children,
		footer,
		...restProps
	}: PageProps = $props();

	let belowFold = $derived(footerPosition === "belowFold");
</script>

<svelte:element this={as} {...omit(restProps, "class")} class={[restProps.class, "aksel-page"]}>
	<div
		class={{
			"aksel-page__content--fullheight": belowFold,
			"aksel-page__content--grow": !belowFold,
			"aksel-page__content--padding": contentBlockPadding === "end",
		}}
	>
		{@render children()}
	</div>

	{#if footer}
		{@render footer()}
	{/if}
</svelte:element>
