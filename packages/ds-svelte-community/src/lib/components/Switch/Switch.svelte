<!--
@component
Switch is used to quickly change between two states. Often to toggle preferences or settings.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/switch).
-->

<script lang="ts">
	import { classes, omit } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import Detail from "../typography/Detail/Detail.svelte";
	import SwitchIcon from "./SwitchIcon.svelte";
	import type { SwitchProps } from "./type";

	let {
		hideLabel = false,
		loading = false,
		position = "left",
		description = "",
		size = "medium",
		disabled = false,
		checked = $bindable(false),
		children,
		...restProps
	}: SwitchProps = $props();

	const uid = $props.id();
	const id = `switch-${uid}`;
</script>

<div
	class={classes([
		restProps.class,
		"navds-switch",
		`navds-switch--${size}`,
		`navds-switch--${position}`,
		{
			"navds-switch--disabled": disabled ?? loading,
			"navds-switch--loading": loading,
		},
	])}
>
	<input
		disabled={disabled || loading}
		bind:checked
		type="checkbox"
		class={classes([restProps.class, "navds-switch__input"])}
		{id}
		{...omit(restProps, "class")}
	/>
	<span class={classes("navds-switch__track")}>
		<span class={classes("navds-switch__thumb")}>
			<SwitchIcon {size} {checked} {loading} />
		</span>
	</span>
	<label for={id} class={classes("navds-switch__label-wrapper")}>
		<div
			class={classes([
				"navds-switch__content",
				{
					"navds-sr-only": hideLabel,
					"navds-switch--with-description": !!description && !hideLabel,
				},
			])}
		>
			<BodyShort as="div" {size} class={classes("navds-switch__label")}>
				{@render children()}
			</BodyShort>

			{#if description}
				{#if size == "medium"}
					<BodyShort as="div" size="small" class={classes("navds-switch__description")}>
						{description}
					</BodyShort>
				{:else}
					<Detail as="div" class={classes("navds-switch__description")}>
						{description}
					</Detail>
				{/if}
			{/if}
		</div>
	</label>
</div>
