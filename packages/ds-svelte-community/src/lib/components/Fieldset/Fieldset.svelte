<script lang="ts">
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
		id = "fs-" + uid,
		legend,
		children,
		description,
		...restProps
	}: FieldsetProps = $props();

	const inputDescriptionId = `fs-desc-${id}`;

	const showErrorMsg = $derived(!disabled && !!error);
</script>

<fieldset
	{...omit(restProps, "class", "aria-invalid", "aria-describedby")}
	class={[
		restProps.class,
		"aksel-fieldset",
		`aksel-fieldset--${size}`,
		{
			"aksel-fieldset--error": !!error,
		},
	]}
	aria-describedby={description ? inputDescriptionId : undefined}
>
	<Label {size} as="legend" class={["aksel-fieldset__legend", { "aksel-sr-only": hideLegend }]}>
		{#if typeof legend === "string"}
			{legend}
		{:else}
			{@render legend()}
		{/if}
	</Label>

	{#if description}
		<BodyShort
			class={["aksel-fieldset__description", { "aksel-sr-only": hideLegend }]}
			{size}
			id={inputDescriptionId}
			as="div"
		>
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
