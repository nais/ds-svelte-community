<!--
@component
Select gives the user the ability to choose from predefined answer options.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/select).
-->

<script lang="ts">
	import ChevronDownIcon from "$lib/icons/ChevronDownIcon.svelte";
	import PadlockLockedFillIcon from "$lib/icons/PadlockLockedFillIcon.svelte";
	import { omit } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import ErrorMessage from "../typography/ErrorMessage/ErrorMessage.svelte";
	import Label from "../typography/Label/Label.svelte";
	import type { SelectProps } from "./type";

	let {
		label,
		hideLabel = false,
		style,
		size = "medium",
		disabled = false,
		error = "",
		value = $bindable(""),
		children,
		description,
		...restProps
	}: SelectProps = $props();

	const baseID = $props.id();
	const id = $derived("select-" + baseID);
	const errorID = $derived("select-error-" + baseID);
	const descriptionID = $derived("select-desc-" + baseID);

	const hasError = $derived(!!error);
	const readOnly = $derived(!!restProps.readonly);

	const describedBy = $derived(
		[description ? descriptionID : null, hasError ? errorID : null].filter(Boolean).join(" ") ||
			undefined,
	);

	function handleMouseDown(evt: MouseEvent) {
		if (readOnly) {
			evt.preventDefault();
			(evt.target as HTMLSelectElement)?.focus();
		}
	}

	function handleKeyDown(evt: KeyboardEvent) {
		if (readOnly && ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", " "].includes(evt.key)) {
			evt.preventDefault();
		}
	}
</script>

<div
	class={[
		restProps.class,
		"aksel-form-field",
		`aksel-form-field--${size}`,
		{
			"aksel-form-field--disabled": disabled,
			"aksel-form-field--readonly": readOnly,
			"aksel-select--error": hasError,
			"aksel-select--readonly": readOnly,
		},
	]}
>
	<Label for={id} {size} class={["aksel-form-field__label", { "aksel-sr-only": hideLabel }]}>
		{#if readOnly}
			<PadlockLockedFillIcon title="Read-only" class="aksel-form-field__readonly-icon" />
		{/if}
		{#if typeof label === "string"}
			{label}
		{:else if label}
			{@render label()}
		{/if}
	</Label>

	{#if description}
		<BodyShort
			class={["aksel-form-field__description", { "aksel-sr-only": hideLabel }]}
			id={descriptionID}
			{size}
			as="div"
		>
			{@render description()}
		</BodyShort>
	{/if}

	<div class="aksel-select__container" {style}>
		<select
			{...omit(restProps, "class", "readonly")}
			bind:value
			class={["aksel-select__input", "aksel-body-short", `aksel-body-short--${size}`]}
			{id}
			{disabled}
			aria-invalid={hasError ? true : undefined}
			aria-describedby={describedBy}
			onmousedown={handleMouseDown}
			onkeydown={handleKeyDown}
		>
			{@render children()}
		</select>
		<ChevronDownIcon class="aksel-select__chevron" aria-hidden />
	</div>

	<div
		class="aksel-form-field__error"
		id={errorID}
		aria-relevant="additions removals"
		aria-live="polite"
	>
		{#if hasError}
			<ErrorMessage {size} showIcon>{error}</ErrorMessage>
		{/if}
	</div>
</div>
