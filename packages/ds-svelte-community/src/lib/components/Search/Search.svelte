<!--
	@component
	Search lets users explore a website or application by typing keywords or phrases that find the most relevant content for them.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/search).
-->

<script lang="ts" module>
	/* TODO: Add error handling */

	export type SearchClearEvent =
		| { trigger: "Click"; event: MouseEvent }
		| { trigger: "Escape"; event: KeyboardEvent };
</script>

<script lang="ts">
	import { Loader } from "$lib";
	import MagnifyingGlassIcon from "$lib/icons/MagnifyingGlassIcon.svelte";
	import XMarkIcon from "$lib/icons/XMarkIcon.svelte";
	import Button from "../Button/Button.svelte";
	import { classes, omit } from "../helpers";
	import { GetTheme } from "../Theme/Theme.svelte";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import Label from "../typography/Label/Label.svelte";
	import SearchButton from "./SearchButton.svelte";
	import type { SearchProps } from "./type";

	let {
		label,
		hideLabel = true,
		clearButtonLabel = "Clear",
		clearButton = true,
		variant = "primary",
		description = "",
		size = "medium",
		value = $bindable(""),
		disabled = false,
		loading = false,
		searchIconText = "Search",
		button,
		onclear,
		...restProps
	}: SearchProps = $props();

	const theme = GetTheme();

	let hasError = false;

	const uid = $props.id();
	const baseID = "search-" + uid;

	let srOnlyClass = $derived(hideLabel ? "navds-sr-only" : "");

	let input: HTMLInputElement | undefined;

	function handleClearClick(event: MouseEvent) {
		// Called when clear is triggered
		if (onclear) {
			onclear({ event, trigger: "Click" });
		}
		value = "";
		input?.focus();
	}

	function handleInputKeypress(event: KeyboardEvent) {
		if (event.key === "Escape" && value != "") {
			// Called when clear is triggered
			if (onclear) {
				onclear({ event, trigger: "Escape" });
			}
			value = "";
			input?.focus();
			event.preventDefault();
		}
	}

	let showClearButton = $derived(clearButton && !disabled && value);
</script>

<div
	class={classes([
		restProps.class,
		"navds-form-field",
		`navds-form-field--${size}`,
		"navds-search",
		{
			"navds-search--error": hasError,
			"navds-search--disabled": disabled,
		},
	])}
>
	<Label for={baseID} {size} class={classes(["navds-form-field__label", srOnlyClass])}>
		{label}
	</Label>
	{#if description}
		<BodyShort
			as="div"
			class={classes("navds-form-field__description {srOnlyClass}")}
			id={baseID}
			{size}
		>
			{description}
		</BodyShort>
	{/if}
	<div class={classes("navds-search__wrapper")}>
		<div class={classes("navds-search__wrapper-inner")}>
			{#if variant == "simple"}
				{#if loading}
					<span class={classes("navds-search__search-icon")} style="height:50%;">
						<Loader />
					</span>
				{:else}
					<MagnifyingGlassIcon
						title={searchIconText}
						aria-hidden
						class={classes("navds-search__search-icon")}
					/>
				{/if}
			{/if}
			<input
				{...omit(restProps, "class", "value", "type", "role")}
				bind:this={input}
				bind:value
				id={baseID}
				type="search"
				class={classes([
					"navds-search__input",
					`navds-search__input--${variant}`,
					"navds-text-field__input",
					"navds-body-short",
					`navds-body-short--${size}`,
				])}
				onkeypress={handleInputKeypress}
			/>
			{#if value && clearButton}
				{#if theme}
					<Button
						class={classes("navds-search__button-clear")}
						variant="tertiary-neutral"
						size={size === "medium" ? "small" : "xsmall"}
						title={clearButtonLabel}
						hidden={!showClearButton}
						onclick={handleClearClick}
						type="button"
					>
						{#snippet icon()}
							<XMarkIcon aria-hidden />
						{/snippet}
					</Button>
				{:else}
					<button
						type="button"
						class={classes("navds-search__button-clear")}
						onclick={handleClearClick}
					>
						<span class={classes("navds-sr-only")}>
							{clearButtonLabel ? clearButtonLabel : "Empty"}
						</span>
						<XMarkIcon aria-hidden />
					</button>
				{/if}
			{/if}
		</div>

		{#if button}
			{@render button()}
		{:else if variant != "simple"}
			<SearchButton
				onclick={restProps?.onclick}
				{disabled}
				{variant}
				{size}
				{loading}
				{searchIconText}
			/>
		{/if}
	</div>
	<div
		class={classes("navds-form-field__error")}
		aria-relevant="additions removals"
		aria-live="polite"
	>
		<!-- {showErrorMsg && (
            <ErrorMessage size={size}>{props.error}</ErrorMessage>
          )} -->
	</div>
</div>
