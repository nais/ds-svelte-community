<!--
@component
Select gives the user the ability to choose from predefined answer options.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/select).
-->

<script lang="ts">
	import ChevronDownIcon from "$lib/icons/ChevronDownIcon.svelte";
	import { omit } from "../helpers";
	import BodyLong from "../typography/BodyLong/BodyLong.svelte";
	import Detail from "../typography/Detail/Detail.svelte";
	import ErrorMessage from "../typography/ErrorMessage/ErrorMessage.svelte";
	import Label from "../typography/Label/Label.svelte";
	import type { SelectProps } from "./type";

	let {
		label = "",
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
	const id = "select-" + baseID;
	const errorID = "select-error-" + baseID;

	let hasError = $derived(!!error);
</script>

<div
	class={[
		restProps.class,
		"aksel-form-field",
		`aksel-form-field--${size}`,
		{
			"aksel-form-field--disabled": disabled,
			"aksel-select--error": hasError,
		},
	]}
>
	<Label for={id} {size} class={["aksel-form-field__label", { "aksel-sr-only": hideLabel }]}>
		{label}
	</Label>

	{#if description}
		{#if size === "medium"}
			<BodyLong
				class={["aksel-form-field__description", { "aksel-sr-only": hideLabel }]}
				size="small"
				as="div"
			>
				{@render description()}
			</BodyLong>
		{:else}
			<Detail class={["aksel-form-field__description", { "aksel-sr-only": hideLabel }]} as="div">
				{@render description()}
			</Detail>
		{/if}
	{/if}

	<div class="aksel-select__container" {style}>
		<select
			{...omit(restProps, "class")}
			bind:value
			class={[
				restProps.class,
				"aksel-select__input",
				"aksel-body-short",
				`aksel-body-short--${size ?? "medium"}`,
			]}
			{id}
			{disabled}
			aria-invalid={hasError ? true : undefined}
			aria-describedby={hasError ? errorID : undefined}
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
			<ErrorMessage {size}>{error}</ErrorMessage>
		{/if}
	</div>
</div>
