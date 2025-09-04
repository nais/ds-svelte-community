<!--
	@component

	Used to give active consent either at the beginning or end of a flow.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/confirmationpanel).
 -->

<script lang="ts">
	import { Checkbox } from "../Checkbox";
	import { classes, omit } from "../helpers";
	import BodyLong from "../typography/BodyLong/BodyLong.svelte";
	import ErrorMessage from "../typography/ErrorMessage/ErrorMessage.svelte";
	import type { ConfirmationPanelProps } from "./type";

	let {
		error = "",
		errorId = "",
		size = "medium",
		value = "",
		id = "",
		checked = false,
		children,
		label,
		...restProps
	}: ConfirmationPanelProps = $props();

	const cuid = $props.id();

	let uid = $derived(id || "confirmation-panel-" + cuid);

	const color = $derived(error ? "danger" : checked ? "success" : "warning");
</script>

<div
	{...omit(restProps, "class")}
	class={classes([
		restProps.class,
		"navds-confirmation-panel",
		"navds-form-field",
		{
			"navds-confirmation-panel--small": size === "small",
			"navds-confirmation-panel--error": error != "",
			"navds-confirmation-panel--checked": !!checked,
		},
	])}
	data-color={color}
>
	<div class={classes("navds-confirmation-panel__inner")}>
		{#if children}
			<BodyLong {size} class={classes("navds-confirmation-panel__content")} id={uid} as="div">
				<!-- Description -->
				{@render children()}
			</BodyLong>
		{/if}
		<Checkbox bind:checked {value} error={!!error} {size} aria-describedby={uid}>
			{#if typeof label === "string"}
				{label}
			{:else}
				{@render label()}
			{/if}
		</Checkbox>
	</div>
	<div class={classes("navds-form-field__error")} id={errorId} role="alert">
		{#if !!error}
			<ErrorMessage {size}>{error}</ErrorMessage>
		{/if}
	</div>
</div>
