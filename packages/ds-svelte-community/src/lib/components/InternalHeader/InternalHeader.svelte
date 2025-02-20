<script lang="ts" module>
	export const experimental = true;
</script>

<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { classes, omit } from "../helpers";
	import Theme, { GetTheme } from "../Theme/Theme.svelte";

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children: Snippet;
	}

	let { children, ...restProps }: Props = $props();

	const theme = GetTheme();
</script>

<!-- This component is always in dark mode, so we wrap it with a custom Theme component if a theme is set. -->
{#if theme}
	<Theme
		theme={"dark"}
		{children}
		class={classes(restProps, "navds-internalheader")}
		{...omit(restProps, "class")}
	/>
{:else}
	<header data-theme="dark" class={classes(restProps, "navds-internalheader")}>
		{@render children()}
	</header>
{/if}
