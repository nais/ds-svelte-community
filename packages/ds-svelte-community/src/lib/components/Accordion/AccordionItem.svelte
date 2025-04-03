<script lang="ts">
	import ChevronDownIcon from "$lib/icons/ChevronDownIcon.svelte";
	import { classes, omit } from "../helpers";
	import { GetTheme } from "../Theme/Theme.svelte";
	import BodyLong from "../typography/BodyLong/BodyLong.svelte";
	import Heading from "../typography/Heading/Heading.svelte";
	import { GetAccordionContext } from "./Accordion.svelte";
	import type { AccordionItemProps } from "./type";

	let { open = false, heading, children, ...restProps }: AccordionItemProps = $props();

	const ctx = GetAccordionContext();
	const theme = GetTheme();

	const handleClick = () => {
		open = !open;
	};

	if (!heading) {
		console.error("<AccordionItem> was used without a 'heading' snippet or `heading` prop");
	}

	if (!ctx) {
		console.error("<AccordionItem> was used outside of an <Accordion> component");
	}

	let headingSize = $derived.by(() => {
		/* Fallback to "medium" Accordion-size if any other sizes are used */
		if (theme) {
			return ctx?.size === "small" ? "xsmall" : "small";
		}
		return ctx?.headingSize ?? "small";
	});
</script>

<div
	{...omit(restProps, "class")}
	class={classes([
		restProps,
		"navds-accordion__item",
		{
			"navds-accordion__item--open": open,
			"navds-accordion__item--neutral": ctx?.variant === "neutral",
		},
	])}
	data-expanded={open}
>
	<button
		class={classes("navds-accordion__header")}
		aria-expanded={open}
		type="button"
		onclick={handleClick}
	>
		<span class={classes("navds-accordion__icon-wrapper")}>
			<ChevronDownIcon class={classes("navds-accordion__header-chevron")} aria-hidden="true" />
		</span>
		<Heading size={headingSize} as="span" class={classes("navds-accordion__header-content")}>
			{#if typeof heading === "string"}
				{heading}
			{:else if heading}
				{@render heading()}
			{/if}
		</Heading>
	</button>

	<!-- <div transition:slide={{ duration: 300 }}> -->
	<BodyLong
		as="div"
		aria-hidden={open ? undefined : true}
		class={classes(["navds-accordion__content", { "navds-accordion__content--closed": !open }])}
	>
		{#if theme}
			<div class={classes("navds-accordion__content-inner")}>{@render children()}</div>
		{:else}
			{@render children()}
		{/if}
	</BodyLong>
	<!-- </div> -->
</div>
