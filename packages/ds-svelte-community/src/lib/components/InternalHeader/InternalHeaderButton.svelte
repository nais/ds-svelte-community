<script lang="ts" module>
	export const experimental = true;
</script>

<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAnchorAttributes } from "svelte/elements";
	import { classes, omit } from "../helpers";

	interface Props extends HTMLAnchorAttributes {
		children: Snippet;
		as?: "button" | "a";
	}

	let { children, as = "button", ...restProps }: Props = $props();
</script>

<svelte:element
	this={as}
	{...omit(restProps, "class")}
	class={classes(restProps, "navds-internalheader__button", {
		unstyled: as == "a" && !!restProps.href,
	})}
>
	{@render children()}
</svelte:element>
