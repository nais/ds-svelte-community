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
		variant,
		headingSize = "small",
		size = "medium",
		indent = true,
		children,
		...restProps
	}: AccordionProps = $props();

	class Context {
		variant: AccordionProps["variant"] = $derived(variant);
		headingSize: AccordionProps["headingSize"] = $derived(headingSize);
		size: AccordionProps["size"] = $derived(size);
	}

	const ctx = new Context();
	setContext<AccordionContext>(contextKey, ctx);
</script>

<div
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
</div>
