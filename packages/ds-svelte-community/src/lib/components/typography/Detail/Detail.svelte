<!--
@component

Part of a set of components for displaying text with consistent typography.
-->

<script lang="ts">
	import { classes } from "../../helpers";
	import { typoClasses, withoutTypoData } from "../typo_shared";
	import type { DetailProps } from "./type";

	let { as = "p", children, ...restProps }: DetailProps = $props();
</script>

<svelte:element
	this={as}
	{...withoutTypoData(restProps)}
	class={classes([restProps.class, "navds-detail", typoClasses(restProps)])}
>
	{@render children()}
</svelte:element>
