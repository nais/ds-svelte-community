<script lang="ts" generics="T = unknown">
	import { omit } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import { GetRadioGroupContext } from "./RadioGroup.svelte";
	import type { RadioProps } from "./type";

	let {
		children,
		size: localSize,
		description,
		value,
		"data-color": color,
		readonly,
		...restProps
	}: RadioProps = $props();

	const ctx = GetRadioGroupContext<T>();
	if (!ctx) {
		throw new Error("Radio must be used within a RadioGroup");
	}

	const id = $props.id();
	let radioID = $derived(`radio-${id}`);
	let descriptionID = $derived(`radiodesc-${id}`);

	const size = $derived(localSize ?? ctx.size ?? "medium");
</script>

<div
	class={[
		restProps.class,
		"aksel-radio",
		`aksel-radio--${ctx.size}`,
		{
			// "aksel-radio--error": hasError,
			// "aksel-radio--disabled": ctx.disabled,
			"aksel-radio--readonly": readonly, // || ctx.readOnly,
		},
	]}
	data-color={color}
>
	<input
		{...omit(restProps, "aria-invalid", "aria-describedby")}
		aria-describedby={restProps["aria-describedby"]
			? restProps["aria-describedby"]
			: description
				? descriptionID
				: undefined}
		type="radio"
		{value}
		id={radioID}
		class="aksel-radio__input"
		name={ctx.name}
		onchange={() => {
			ctx.onchange(value as never);
		}}
		checked={ctx.value == value}
	/>
	<BodyShort as="label" for={radioID} class="aksel-radio__label" {size} {children} />
	{#if description}
		<BodyShort
			id={descriptionID}
			{size}
			class="navds-form-field__subdescription navds-radio__description"
		>
			{#if typeof description === "string"}
				{description}
			{:else}
				{@render description()}
			{/if}
		</BodyShort>
	{/if}
</div>
