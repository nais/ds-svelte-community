<!--
@component

Part of a set of components for displaying text with consistent typography.
-->

<script lang="ts">
	import { typoClasses, withoutTypoData } from "../typo_shared";
	import type { BodyShortProps } from "./type";

	let { size = "medium", as = "p", children, ...restProps }: BodyShortProps = $props();
</script>

<svelte:element
	this={as}
	{...withoutTypoData(restProps)}
	class={[restProps.class, "aksel-body-short", `aksel-body-short--${size}`, typoClasses(restProps)]}
>
	{@render children()}
</svelte:element>
