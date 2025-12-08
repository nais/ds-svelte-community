<script lang="ts">
	import { dev } from "$app/environment";
	import ChevronDownIcon from "$lib/icons/ChevronDownIcon.svelte";
	import { omit } from "../helpers";
	import BodyLong from "../typography/BodyLong/BodyLong.svelte";
	import Heading from "../typography/Heading/Heading.svelte";
	import type { HeadingProps } from "../typography/Heading/type";
	import { GetAccordionContext } from "./Accordion.svelte";
	import type { AccordionItemProps } from "./type";

	let { open = false, heading, children, ...restProps }: AccordionItemProps = $props();

	let shouldAnimate = $derived(!open);

	const ctx = GetAccordionContext();

	const handleClick = () => {
		open = !open;
		shouldAnimate = true;
	};

	$effect(() => {
		if (dev && !heading) {
			console.error("<AccordionItem> was used without a 'heading' snippet or `heading` prop");
		}
		if (dev && !ctx) {
			console.error("<AccordionItem> was used outside of an <Accordion> component");
		}
	});

	let headingSize: HeadingProps["size"] = $derived.by(() => {
		/* Fallback to "medium" Accordion-size if any other sizes are used */
		return ctx?.size === "large" ? "small" : "xsmall";
	});
</script>

<div
	{...omit(restProps, "class")}
	class={[
		restProps,
		"aksel-accordion__item",
		{
			"aksel-accordion__item--open": open,
			"aksel-accordion__item--no-animation": !shouldAnimate,
		},
	]}
	data-expanded={open}
>
	<button class="aksel-accordion__header" aria-expanded={open} type="button" onclick={handleClick}>
		<span class="aksel-accordion__icon-wrapper">
			<ChevronDownIcon class="aksel-accordion__header-chevron" aria-hidden="true" />
		</span>
		<Heading size={headingSize} as="span" class="aksel-accordion__header-content">
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
		class={["aksel-accordion__content", { "aksel-accordion__content--closed": !open }]}
	>
		<div class="aksel-accordion__content-inner">
			{@render children()}
		</div>
	</BodyLong>
	<!-- </div> -->
</div>
