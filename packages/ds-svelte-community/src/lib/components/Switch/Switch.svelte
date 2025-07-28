<!--
@component
Switch is used to quickly change between two states. Often to toggle preferences or settings.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/switch).
-->

<script lang="ts">
	import { omit } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import Detail from "../typography/Detail/Detail.svelte";
	import SelectedIcon from "./SelectedIcon.svelte";
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
	class={[
		restProps.class,
		"aksel-switch",
		`aksel-switch--${size}`,
		`aksel-switch--${position}`,
		{
			"aksel-switch--disabled": disabled ?? loading,
			"aksel-switch--loading": loading,
		},
	]}
>
	<input
		disabled={disabled || loading}
		bind:checked
		type="checkbox"
		class={[restProps.class, "aksel-switch__input"]}
		{id}
		{...omit(restProps, "class")}
	/>
	<span class="aksel-switch__track">
		<span class="aksel-switch__thumb">
			<SelectedIcon {loading} {size} {checked} />
		</span>
	</span>
	<label for={id} class="aksel-switch__label-wrapper">
		<div
			class={[
				"aksel-switch__content",
				{
					"aksel-sr-only": hideLabel,
					"aksel-switch--with-description": !!description && !hideLabel,
				},
			]}
		>
			<BodyShort as="div" {size} class="aksel-switch__label">
				{@render children()}
			</BodyShort>

			{#if description}
				{#if size == "medium"}
					<BodyShort as="div" size="small" class="aksel-switch__description">
						{description}
					</BodyShort>
				{:else}
					<Detail as="div" class="aksel-switch__description">
						{description}
					</Detail>
				{/if}
			{/if}
		</div>
	</label>
</div>
