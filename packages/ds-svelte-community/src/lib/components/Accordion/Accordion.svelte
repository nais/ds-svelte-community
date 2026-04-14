<!--
	@component
	Accordion is related sections with interactive headers that allow users to open or close the view of
	the content below.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/accordion).
 -->

<script lang="ts" module>
	import { getContext } from "svelte";
	import type { AccordionContext, AccordionProps } from "./type";

	const contextKey = Symbol("AccordionContext");

	export function GetAccordionContext(): AccordionContext | undefined {
		return getContext<AccordionContext>(contextKey);
	}
</script>

<script lang="ts">
	import { setContext } from "svelte";
	import { omit } from "../helpers";

	let {
		size = "medium",
		indent = true,
		as = "div",
		children,
		"data-color": dataColor,
		...restProps
	}: AccordionProps = $props();

	const ctx: AccordionContext = {
		get size() {
			return size;
		},
		get color() {
			return dataColor;
		},
		mounted: true,
	};

	setContext<AccordionContext>(contextKey, ctx);
</script>

<svelte:element
	this={as}
	{...omit(restProps, "class")}
	class={[
		restProps.class,
		"aksel-accordion",
		`aksel-accordion--${size}`,
		{
			"aksel-accordion--indent": indent,
		},
	]}
>
	{@render children()}
</svelte:element>
