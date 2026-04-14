<script lang="ts">
	import PadlockLockedFillIcon from "$lib/icons/PadlockLockedFillIcon.svelte";
	import { omit } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import ErrorMessage from "../typography/ErrorMessage/ErrorMessage.svelte";
	import Label from "../typography/Label/Label.svelte";
	import { type FieldsetProps } from "./type";

	const uid = $props.id();

	let {
		hideLegend = false,
		error = "",
		errorId = "fserr-" + uid,
		size = "medium",
		disabled = false,
		readonly,
		legend,
		children,
		description,
		...restProps
	}: FieldsetProps = $props();

	let readOnly = $derived(!!readonly && !disabled);
	let hasError = $derived(!disabled && !readOnly && !!error);
	const showErrorMsg = $derived(!disabled && !readOnly && !!error && typeof error !== "boolean");
</script>

<fieldset
	{...omit(restProps, "class", "aria-invalid", "aria-describedby")}
	class={[
		restProps.class,
		"aksel-fieldset",
		`aksel-fieldset--${size}`,
		{
			"aksel-fieldset--error": hasError,
			"aksel-fieldset--readonly": readOnly,
		},
	]}
>
	<Label {size} as="legend" class="aksel-fieldset__legend" visuallyHidden={hideLegend}>
		{#if readOnly}
			<PadlockLockedFillIcon aria-hidden class="aksel-form-field__readonly-icon" />
		{/if}
		{#if typeof legend === "string"}
			{legend}
		{:else}
			{@render legend()}
		{/if}
	</Label>

	{#if description}
		<BodyShort class="aksel-fieldset__description" visuallyHidden={hideLegend} {size} as="div">
			{#if typeof description === "string"}
				{description}
			{:else}
				{@render description()}
			{/if}
		</BodyShort>
	{/if}

	{@render children()}

	<div
		id={errorId}
		aria-relevant="additions removals"
		aria-live="polite"
		class="aksel-fieldset__error"
	>
		{#if showErrorMsg}
			<ErrorMessage {size} showIcon>{error}</ErrorMessage>
		{/if}
	</div>
</fieldset>
