<!--
	@component
	ExpansionCard collects information or actions in a box that expands and collapses based on user interaction.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/expansioncard).
-->

<script lang="ts">
	import ChevronDownIcon from "$lib/icons/ChevronDownIcon.svelte";
	import BodyLong from "../typography/BodyLong/BodyLong.svelte";
	import ExpansionCardTitle from "./ExpansionCardTitle.svelte";
	import type { ExpansionCardProps } from "./type";

	let {
		size = "medium",
		header,
		children,
		open = $bindable(false),
		description,
		ontoggle,
		showMoreTitle = "Show more",
		"data-color": color = "neutral",
		...restProps
	}: ExpansionCardProps = $props();

	const startedOpened = open;

	function toggleOpen() {
		open = !open;

		ontoggle?.(open);
	}
</script>

<section
	{...restProps}
	class={[
		restProps.class,
		"aksel-expansioncard",
		`aksel-expansioncard--${size}`,
		{
			"aksel-expansioncard--open": open,
			"aksel-expansioncard--no-animation": startedOpened,
		},
	]}
	data-color={color}
>
	<div class="aksel-expansioncard__header" data-open={open}>
		<div class="aksel-expansioncard__header-content">
			{#if typeof header === "string"}
				<ExpansionCardTitle>{header}</ExpansionCardTitle>
			{:else}
				{@render header()}
			{/if}

			{#if description}
				<BodyLong as="p" class="aksel-link-panel__description" {size}>
					{#if typeof description === "string"}
						{description}
					{:else}
						{@render description()}
					{/if}
				</BodyLong>
			{/if}
		</div>

		<button
			class="aksel-expansioncard__header-button"
			onclick={toggleOpen}
			type="button"
			aria-expanded={open}
		>
			<ChevronDownIcon class="aksel-expansioncard__header-chevron" title={showMoreTitle} />
		</button>
	</div>

	<BodyLong
		as="div"
		class={[
			"aksel-expansioncard__content",
			{
				"aksel-expansioncard__content--closed": !open,
			},
		]}
		aria-hidden={!open}
		{size}
		data-open={open}
	>
		<div class="aksel-expansioncard__content-inner">
			{@render children()}
		</div>
	</BodyLong>
</section>
