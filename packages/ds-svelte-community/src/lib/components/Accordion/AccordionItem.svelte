<script lang="ts">
	import ChevronDownIcon from "$lib/icons/ChevronDownIcon.svelte";
	import { omit } from "../helpers";
	import { GetTheme } from "../Theme/Theme.svelte";
	import BodyLong from "../typography/BodyLong/BodyLong.svelte";
	import Heading from "../typography/Heading/Heading.svelte";
	import type { HeadingProps } from "../typography/Heading/type";
	import { GetAccordionContext } from "./Accordion.svelte";
	import type { AccordionItemProps } from "./type";

	let {
		open = undefined,
		defaultOpen = false,
		onOpenChange,
		heading,
		children,
		...restProps
	}: AccordionItemProps = $props();

	const accordionContext = GetAccordionContext();
	const themeContext = GetTheme();

	if (!accordionContext?.mounted) {
		console.error("<Accordion.Item> has to be used within an <Accordion>");
	}

	let isControlled = $derived(open !== undefined);
	let uncontrolledOpen = $derived(isControlled ? false : defaultOpen);
	const currentOpen = $derived(isControlled ? open! : uncontrolledOpen);

	function toggleOpen() {
		const next = !currentOpen;

		if (!isControlled) {
			uncontrolledOpen = next;
		}

		onOpenChange?.(next);
	}

	let headingSize: HeadingProps["size"] = $derived.by(() => {
		return accordionContext?.size === "large" ? "small" : "xsmall";
	});
</script>

<div
	{...omit(restProps, "class", "onclick")}
	class={[
		"aksel-accordion__item",
		restProps.class,
		{
			"aksel-accordion__item--open": currentOpen,
		},
	]}
	data-expanded={currentOpen}
>
	{#if heading}
		<button
			class="aksel-accordion__header"
			data-color={accordionContext?.color}
			aria-expanded={currentOpen}
			type="button"
			onclick={toggleOpen}
		>
			<span class="aksel-accordion__icon-wrapper">
				<ChevronDownIcon class="aksel-accordion__header-chevron" aria-hidden="true" />
			</span>
			<Heading size={headingSize} as="span">
				{#if typeof heading === "string"}
					{heading}
				{:else}
					{@render heading()}
				{/if}
			</Heading>
		</button>

		<BodyLong
			as="div"
			class={["aksel-accordion__content", { "aksel-accordion__content--closed": !currentOpen }]}
		>
			<div class="aksel-accordion__content-inner" data-color={themeContext?.color}>
				{@render children()}
			</div>
		</BodyLong>
	{:else}
		{@render children()}
	{/if}
</div>
