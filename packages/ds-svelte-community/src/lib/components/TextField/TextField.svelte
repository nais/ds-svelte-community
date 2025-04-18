<!--
@component
TextField is a classic input element that gives users the ability to write short texts or numbers.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/textfield).
-->

<script lang="ts">
	import { BodyShort, Detail, ErrorMessage, Label } from "$lib";
	import { classes, omit } from "../helpers";
	import type { TextFieldProps } from "./type";

	const uid = $props.id();

	let {
		value = $bindable(""),
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

	let srOnlyClass = $derived(hideLabel ? " navds-sr-only" : "");
	let inputProps = $derived({
		id,
		"aria-invalid": (error ? "true" : undefined) as "true" | undefined,
		"aria-describedby": inputDescriptionId,
		class: classes(["navds-text-field__input", "navds-body-short navds-body-short--" + size]),
		size: htmlSize,
		...omit(restProps, "id", "class", "aria-invalid", "size"),
	});
</script>

<div
	class={classes([
		restProps.class,
		"navds-form-field",
		`navds-form-field--${size}`,
		{
			"navds-text-field--error": !!error,
			"navds-text-field--disabled": disabled,
			"navds-form-field--disabled": disabled,
		},
	])}
>
	<Label for={id} {size} class={classes("navds-form-field__label" + srOnlyClass)}>
		{#if typeof label === "string"}
			{label}
		{:else}
			{@render label()}
		{/if}
	</Label>

	{#if description}
		{#if size == "medium"}
			<BodyShort
				class={classes("navds-form-field__description" + srOnlyClass)}
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
				class={classes("navds-form-field__description" + srOnlyClass)}
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

	<input {type} {...inputProps} bind:value />
	<div
		class={classes("navds-form-field__error")}
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
