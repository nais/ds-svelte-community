<script lang="ts">
	import { classes, omit } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import Detail from "../typography/Detail/Detail.svelte";
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

	const srOnlyClass = hideLegend ? " navds-sr-only" : "";
	const inputDescriptionId = `fs-desc-${id}`;

	const showErrorMsg = $derived(!disabled && !!error);
</script>

<fieldset
	{...omit(restProps, "class", "aria-invalid", "aria-describedby")}
	class={classes(restProps, "navds-fieldset", `navds-fieldset--${size}`)}
	class:navds-fieldset--error={!!error}
	aria-describedby={description ? inputDescriptionId : undefined}
>
	<Label {size} as="legend" class={"navds-fieldset__legend" + srOnlyClass}>
		{#if typeof legend === "string"}
			{legend}
		{:else}
			{@render legend()}
		{/if}
	</Label>

	{#if description}
		{#if size == "medium"}
			<BodyShort
				class={"navds-fieldset__description" + srOnlyClass}
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
		{:else}
			<Detail class={"navds-fieldset__description" + srOnlyClass} id={inputDescriptionId} as="div">
				{#if typeof description === "string"}
					{description}
				{:else}
					{@render description()}
				{/if}
			</Detail>
		{/if}
	{/if}

	{@render children()}

	<div
		id={errorId}
		aria-relevant="additions removals"
		aria-live="polite"
		class="navds-fieldset__error"
	>
		{#if showErrorMsg}
			<ErrorMessage {size} showIcon>{error}</ErrorMessage>
		{/if}
	</div>
</fieldset>
