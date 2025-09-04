<script lang="ts" generics="T = unknown">
	import { classes, omit } from "../helpers";
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
	class={classes([
		restProps.class,
		"navds-radio",
		`navds-radio--${ctx.size}`,
		{
			// "navds-radio--error": hasError,
			// "navds-radio--disabled": ctx.disabled,
			// "navds-radio--readonly": ctx.readOnly,
		},
	])}
>
	<!-- {...omit(inputProps, "aria-invalid")} -->
	<input
		{...omit(restProps, "children", "size", "description", "readOnly")}
		name={ctx.name}
		id={radioID}
		type="radio"
		{value}
		checked={ctx.value == value}
		class={classes("navds-radio__input")}
		onchange={() => {
			ctx.onchange(value as never);
		}}
	/>
	<label for={radioID} class={classes("navds-radio__label")}>
		<span class={classes("navds-radio__content")}>
			<BodyShort as="span" size={ctx.size}>
				{@render children()}
			</BodyShort>
			{#if description}
				<BodyShort
					as="span"
					size={ctx.size}
					class={classes("navds-form-field__subdescription navds-radio__description")}
				>
					{description}
				</BodyShort>
			{/if}
		</span>
	</label>
</div>
