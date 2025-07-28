<!--
@component
TextField is a classic input element that gives users the ability to write short texts or numbers.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/textfield).
-->

<script lang="ts">
	import { BodyShort, Detail, ErrorMessage, Label } from "$lib";
	import { omit } from "../helpers";
	import type { TextFieldProps } from "./type";

	const uid = $props.id();

	let {
		value = $bindable(),
		id = "tf-" + uid,
		hideLabel = false,
		type = "text",
		error = "",
		errorId = "tf-" + uid,
		size = "medium",
		disabled = false,
		htmlSize,
		label,
		description,
		...restProps
	}: TextFieldProps = $props();

	const inputDescriptionId = `tf-desc-${id}`;
</script>

<div
	class={[
		restProps.class,
		"aksel-form-field",
		`aksel-form-field--${size}`,
		{
			"aksel-text-field--error": !!error,
			"aksel-text-field--disabled": disabled,
			"aksel-form-field--disabled": disabled,
		},
	]}
>
	<Label for={id} {size} class={["aksel-form-field__label", { "aksel-sr-only": hideLabel }]}>
		{#if typeof label === "string"}
			{label}
		{:else}
			{@render label()}
		{/if}
	</Label>

	{#if description}
		{#if size == "medium"}
			<BodyShort
				class={["aksel-form-field__description", { "aksel-sr-only": hideLabel }]}
				id={inputDescriptionId}
				as="div"
			>
				{#if typeof description === "string"}
					{description}
				{:else}
					{@render description()}
				{/if}
			</BodyShort>
		{:else}
			<Detail
				class={["aksel-form-field__description", { "aksel-sr-only": hideLabel }]}
				id={inputDescriptionId}
				as="div"
			>
				{#if typeof description === "string"}
					{description}
				{:else}
					{@render description()}
				{/if}
			</Detail>
		{/if}
	{/if}

	<input
		{type}
		{id}
		{...omit(restProps, "id", "class", "aria-invalid", "size")}
		aria-invalid={error ? "true" : undefined}
		aria-describedby={inputDescriptionId}
		class={["aksel-text-field__input", "aksel-body-short", "aksel-body-short--" + size]}
		size={htmlSize}
		bind:value
	/>
	<div
		class="aksel-form-field__error"
		id={errorId}
		aria-relevant="additions removals"
		aria-live="polite"
	>
		{#if error}
			<ErrorMessage {size}>
				{error}
			</ErrorMessage>
		{/if}
	</div>
</div>
