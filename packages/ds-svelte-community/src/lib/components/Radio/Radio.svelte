<script lang="ts" generics="T = unknown">
	import { omit } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import { GetRadioGroupContext } from "./RadioGroup.svelte";
	import type { RadioProps } from "./type";

	let { children, description, value, ...restProps }: RadioProps = $props();

	const ctx = GetRadioGroupContext<T>();
	if (!ctx) {
		throw new Error("Radio must be used within a RadioGroup");
	}

	const id = $props.id();
	let radioID = $derived(`radio-${id}`);
</script>

<div
	class={[
		restProps.class,
		"aksel-radio",
		`aksel-radio--${ctx.size}`,
		{
			// "aksel-radio--error": hasError,
			// "aksel-radio--disabled": ctx.disabled,
			// "aksel-radio--readonly": ctx.readOnly,
		},
	]}
>
	<!-- {...omit(inputProps, "aria-invalid")} -->
	<input
		{...omit(restProps, "children", "size", "description", "readOnly")}
		name={ctx.name}
		id={radioID}
		type="radio"
		{value}
		checked={ctx.value == value}
		class="aksel-radio__input"
		onchange={() => {
			ctx.onchange(value as never);
		}}
	/>
	<label for={radioID} class="aksel-radio__label">
		<span class="aksel-radio__content">
			<BodyShort as="span" size={ctx.size} aria-hidden>
				{@render children()}
			</BodyShort>
			{#if description}
				<BodyShort
					as="span"
					size={ctx.size}
					class="aksel-form-field__subdescription aksel-radio__description"
					aria-hidden
				>
					{description}
				</BodyShort>
			{/if}
		</span>
	</label>
</div>
