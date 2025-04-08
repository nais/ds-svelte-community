<script lang="ts">
	import { classes, omit } from "../helpers";
	import type { ExpansionCardTitleProps } from "./type";

	let { as = "h3", size = "medium", children, ...restProps }: ExpansionCardTitleProps = $props();
</script>

<svelte:element
	this={as}
	{...omit(restProps, "class")}
	class={classes([
		restProps.class,
		"navds-expansioncard__title",
		`navds-expansioncard__title--${size}`,
		"navds-heading",
		`navds-heading--${size}`,
	])}
>
	{@render children()}
</svelte:element>
