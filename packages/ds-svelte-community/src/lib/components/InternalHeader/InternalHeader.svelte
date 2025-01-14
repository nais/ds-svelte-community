<script lang="ts" module>
	export const experimental = true;
</script>

<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { classes, omit } from "../helpers";

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children: Snippet;
	}

	let { children, ...restProps }: Props = $props();
</script>

<header
	{...omit(restProps, "class")}
	data-theme="dark"
	class={classes(restProps, "navds-internalheader")}
>
	{@render children()}
</header>
