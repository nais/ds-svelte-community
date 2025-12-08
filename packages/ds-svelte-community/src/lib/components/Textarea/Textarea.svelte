<!--
@component
Textarea lets users enter multi-line text.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/textarea).
-->

<script lang="ts">
	import { BodyShort, ErrorMessage, Label } from "$lib";
	import PadlockLockedFillIcon from "$lib/icons/PadlockLockedFillIcon.svelte";
	import { omit } from "../helpers";
	import type { TextareaProps } from "./type";

	const uid = $props.id();

	let {
		value = $bindable(""),
		id = "ta-" + uid,
		hideLabel = false,
		error = "",
		errorId = "ta-err-" + uid,
		size = "medium",
		disabled = false,
		maxRows,
		minRows,
		resize,
		maxlength,
		i18n,
		label,
		description,
		...restProps
	}: TextareaProps = $props();

	const inputDescriptionId = $derived(`ta-desc-${id}`);
	const maxLengthId = $derived(`ta-maxlen-${id}`);

	const defaultMinRows = $derived(size === "small" ? 2 : 3);
	const actualMinRows = $derived(minRows ?? defaultMinRows);

	const hasMaxLength = $derived(maxlength !== undefined && maxlength !== null && maxlength > 0);
	const currentLength = $derived(value?.length ?? 0);
	const difference = $derived(hasMaxLength ? maxlength! - currentLength : 0);

	const counterLeftText = $derived(i18n?.counterLeft ?? "characters left");
	const counterTooMuchText = $derived(i18n?.counterTooMuch ?? "characters too many");

	function getCounterText(diff: number): string {
		if (diff < 0) {
			return `${Math.abs(diff)} ${counterTooMuchText}`;
		}
		return `${diff} ${counterLeftText}`;
	}

	const resizeClass = $derived(
		resize ? `aksel-textarea--resize-${resize === true ? "both" : resize}` : undefined,
	);

	let textareaElement: HTMLTextAreaElement;
	let shadowElement: HTMLTextAreaElement;
	let heightStyle = $state<string>("auto");

	function syncHeight() {
		if (!textareaElement || !shadowElement) {
			return;
		}

		const computedStyle = window.getComputedStyle(textareaElement);
		if (computedStyle.width === "0px") {
			return;
		}

		shadowElement.style.width = computedStyle.width;
		shadowElement.value = textareaElement.value || restProps.placeholder || "x";

		// Handle trailing newline
		if (shadowElement.value.slice(-1) === "\n") {
			shadowElement.value += " ";
		}

		const padding =
			parseInt(computedStyle.paddingTop, 10) + parseInt(computedStyle.paddingBottom, 10);
		const border =
			parseInt(computedStyle.borderTopWidth, 10) + parseInt(computedStyle.borderBottomWidth, 10);

		const innerHeight = shadowElement.scrollHeight - padding;

		// Single row height
		shadowElement.value = "x";
		const singleRowHeight = shadowElement.scrollHeight - padding;

		let outerHeight = innerHeight;

		if (actualMinRows) {
			outerHeight = Math.max(actualMinRows * singleRowHeight, outerHeight);
		}
		if (maxRows) {
			outerHeight = Math.min(maxRows * singleRowHeight, outerHeight);
		}
		outerHeight = Math.max(outerHeight, singleRowHeight);

		const boxSizing = computedStyle.boxSizing;
		const finalHeight = outerHeight + (boxSizing === "border-box" ? padding + border : 0);

		heightStyle = `${finalHeight}px`;
	}

	$effect(() => {
		// Re-run when value changes
		if (value !== undefined) {
			syncHeight();
		}
	});

	function handleInput(e: Event) {
		const target = e.target as HTMLTextAreaElement;
		value = target.value;
		syncHeight();
	}

	const describedBy = $derived(
		[inputDescriptionId, hasMaxLength ? maxLengthId : null].filter(Boolean).join(" "),
	);
</script>

<div
	class={[
		restProps.class,
		"aksel-form-field",
		`aksel-form-field--${size}`,
		resizeClass,
		{
			"aksel-textarea--error": !!error,
			"aksel-form-field--disabled": disabled,
			"aksel-form-field--readonly": restProps.readonly,
			"aksel-textarea--readonly": restProps.readonly,
		},
	]}
>
	<Label for={id} {size} class={["aksel-form-field__label", { "aksel-sr-only": hideLabel }]}>
		{#if restProps.readonly}
			<PadlockLockedFillIcon aria-hidden class="aksel-form-field__readonly-icon" />
		{/if}
		{#if typeof label === "string"}
			{label}
		{:else}
			{@render label()}
		{/if}
	</Label>

	{#if description}
		<BodyShort
			class={["aksel-form-field__description", { "aksel-sr-only": hideLabel }]}
			id={inputDescriptionId}
			{size}
			as="div"
		>
			{#if typeof description === "string"}
				{description}
			{:else}
				{@render description()}
			{/if}
		</BodyShort>
	{/if}

	<textarea
		{id}
		{disabled}
		{...omit(restProps, "id", "class", "aria-invalid", "size", "readonly")}
		readonly={restProps.readonly}
		aria-invalid={error ? "true" : undefined}
		aria-describedby={describedBy}
		class={["aksel-textarea__input", "aksel-body-short", `aksel-body-short--${size}`]}
		rows={actualMinRows}
		style:--__ac-textarea-height={heightStyle}
		oninput={handleInput}
		bind:this={textareaElement}
		bind:value
	></textarea>

	<!-- Shadow textarea for height calculation -->
	<textarea
		aria-hidden="true"
		readonly
		tabindex={-1}
		class={["aksel-textarea__input", "aksel-body-short", `aksel-body-short--${size}`]}
		style:visibility="hidden"
		style:position="absolute"
		style:overflow="hidden"
		style:height="0"
		style:top="0"
		style:left="0"
		style:transform="translateZ(0)"
		bind:this={shadowElement}
	></textarea>

	{#if hasMaxLength && !restProps.readonly && !disabled}
		<span id={maxLengthId} class="aksel-sr-only">
			Text area with a {maxlength} character limit.
		</span>

		<BodyShort
			class={["aksel-textarea__counter", { "aksel-textarea__counter--error": difference < 0 }]}
			{size}
		>
			{getCounterText(difference)}
		</BodyShort>
	{/if}

	<div
		class="aksel-form-field__error"
		id={errorId}
		aria-relevant="additions removals"
		aria-live="polite"
	>
		{#if error}
			<ErrorMessage {size} showIcon>
				{error}
			</ErrorMessage>
		{/if}
	</div>
</div>
