<script lang="ts" module>
	export const experimental = true;
</script>

<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAnchorAttributes } from "svelte/elements";
	import { omit } from "../helpers";
	import type { HTMLElements } from "../utils/elements";

	interface Props extends HTMLAnchorAttributes {
		children: Snippet;
		as?: HTMLElements;
	}

	let { children, as = "a", ...restProps }: Props = $props();
</script>

<svelte:element
	this={as}
	{...omit(restProps, "class")}
	class={[
		restProps.class,
		"aksel-internalheader__title",
		"aksel-body-short",
		{
			unstyled: as == "a" && !!restProps.href,
		},
	]}
>
	<span>{@render children()}</span>
</svelte:element>
