<!--
	@component
	Checkbox displays a list of options where multiple can be selected at once. When a choice is made, the user can click again to deselect it.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/checkbox).
-->

<script lang="ts">
	import { omit } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import { GetCheckboxGroupContext } from "./CheckboxGroup.svelte";
	import type { CheckboxProps } from "./type";

	const uid = $props.id();

	let {
		error = false,
		hideLabel = false,
		value,
		indeterminate = false,
		description = "",
		size,
		disabled = false,
		id = "cb-" + uid,
		checked = $bindable(undefined),
		children,
		onchange,
		...restProps
	}: CheckboxProps = $props();

	const ctx = GetCheckboxGroupContext();

	const lblID = "cblbl-" + uid;

	if (ctx && ctx.groupControlled) {
		if (checked !== undefined) {
			console.error(
				"Checkbox is part of a controlled CheckboxGroup, and should not have a checked prop.",
			);
		} else {
			checked = ctx.values.includes(value);
		}
	}

	let checkedValue = $derived.by(() => {
		if (ctx && ctx.groupControlled) {
			return ctx.values.includes(value);
		}
		return checked;
	});

	const hasErrorStore = ctx ? ctx.hasError : null;
	let hasError = $derived(hasErrorStore ? hasErrorStore : error);

	size = size ? size : ctx ? ctx.size : "medium";
</script>

<div
	class={[
		restProps.class,
		"aksel-checkbox",
		`aksel-checkbox--${size}`,
		{
			"aksel-checkbox--error": hasError,
			"aksel-checkbox--disabled": disabled,
		},
	]}
>
	<input
		{...omit(restProps, "class")}
		{id}
		type="checkbox"
		class="aksel-checkbox__input"
		aria-checked={indeterminate ? "mixed" : undefined}
		aria-invalid={hasError ? "true" : undefined}
		aria-labelledby={lblID}
		bind:indeterminate
		checked={checkedValue}
		{value}
		onchange={(e) => {
			checked = e.currentTarget.checked;

			if (ctx) {
				ctx.onchange(value);
			}
			/**
			 * Trigger when the checkbox changes. Will pass the event object as argument.
			 */
			if (onchange) {
				onchange(e);
			}
		}}
	/>
	<label for={id} class="aksel-checkbox__label" id={lblID}>
		<span class="aksel-checkbox__icon">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="0.8125rem"
				height="0.625rem"
				viewBox="0 0 13 10"
				fill="none"
				focusable="false"
				role="img"
				aria-hidden="true"
			>
				<path
					d="M4.03524 6.41478L10.4752 0.404669C11.0792 -0.160351 12.029 -0.130672 12.5955 0.47478C13.162 1.08027 13.1296 2.03007 12.5245 2.59621L5.02111 9.59934C4.74099 9.85904 4.37559 10 4.00025 10C3.60651 10 3.22717 9.84621 2.93914 9.56111L0.439143 7.06111C-0.146381 6.47558 -0.146381 5.52542 0.439143 4.93989C1.02467 4.35437 1.97483 4.35437 2.56036 4.93989L4.03524 6.41478Z"
					fill="currentColor"
				/>
			</svg>
		</span>
		<span class="aksel-checkbox__icon-indeterminate"></span>
		{#if children}
			<span class={["aksel-checkbox__content", { "aksel-sr-only": hideLabel }]}>
				<BodyShort as="span" {size} class="aksel-checkbox__label-text" aria-hidden>
					{@render children()}
				</BodyShort>
				{#if description}
					<BodyShort
						as="span"
						class="aksel-form-field__subdescription aksel-checkbox__description"
						{size}
						aria-hidden
					>
						{description}
					</BodyShort>
				{/if}
			</span>
		{/if}
	</label>
</div>
