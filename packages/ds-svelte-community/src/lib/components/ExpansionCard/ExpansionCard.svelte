<!--
	@component
	ExpansionCard collects information or actions in a box that expands and collapses based on user interaction.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/expansioncard).
-->

<script lang="ts">
	import ChevronDownIcon from "$lib/icons/ChevronDownIcon.svelte";
	import { classes } from "../helpers";
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
	class={classes([
		restProps.class,
		"navds-expansioncard",
		`navds-expansioncard--${size}`,
		{
			"navds-expansioncard--open": open,
			"navds-expansioncard--no-animation": startedOpened,
		},
	])}
>
	<div class={classes("navds-expansioncard__header")} data-open={open}>
		<div class={classes("navds-expansioncard__header-content")}>
			{#if typeof header === "string"}
				<ExpansionCardTitle>{header}</ExpansionCardTitle>
			{:else}
				{@render header()}
			{/if}

			{#if description}
				<BodyLong as="p" class={classes("navds-link-panel__description")} {size}>
					{#if typeof description === "string"}
						{description}
					{:else}
						{@render description()}
					{/if}
				</BodyLong>
			{/if}
		</div>

		<button
			class={classes("navds-expansioncard__header-button")}
			onclick={toggleOpen}
			type="button"
			aria-expanded={open}
		>
			<ChevronDownIcon
				class={classes("navds-expansioncard__header-chevron")}
				title={showMoreTitle}
			/>
		</button>
	</div>

	<BodyLong
		as="div"
		class={classes([
			"navds-expansioncard__content",
			{
				"navds-expansioncard__content--closed": !open,
			},
		])}
		aria-hidden={!open}
		{size}
		data-open={open}
	>
		<div class={classes("navds-expansioncard__content-inner")}>
			{@render children()}
		</div>
	</BodyLong>
</section>
