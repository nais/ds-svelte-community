<script lang="ts">
	import { omit } from "../helpers";
	import type { ExpansionCardTitleProps } from "./type";

	let { as = "h3", size = "medium", children, ...restProps }: ExpansionCardTitleProps = $props();
</script>

<svelte:element
	this={as}
	{...omit(restProps, "class")}
	class={[
		restProps.class,
		"aksel-expansioncard__title",
		`aksel-expansioncard__title--${size}`,
		"aksel-heading",
		`aksel-heading--${size}`,
	]}
>
	{@render children()}
</svelte:element>
