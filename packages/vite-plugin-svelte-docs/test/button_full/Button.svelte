<!--
	@component
	Button lets the user perform an action.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/button).

	All extra props are passed to the root element.
 -->

<script lang="ts">
	import { classes, omit } from "../helpers";
	import type { Props } from "./type";

	let {
		variant = "primary",
		size = "medium",
		disabled = false,
		loading = false,
		as = "button",
		children,
		iconLeft,
		iconRight,
		ref = $bindable(),
		...restProps
	}: Props = $props();

	let overrideWidth = $derived.by(() => {
		return ref && loading ? ref.getBoundingClientRect().width : 0;
	});
</script>

<svelte:element
	this={as}
	{...omit(disabled ? omit(restProps, "href", "class") : restProps, "class")}
	style={overrideWidth ? `width: ${overrideWidth}px` : undefined}
	class={classes([
		restProps.class,
		"navds-button",
		`navds-button--${variant}`,
		`navds-button--${size}`,
		{
			"navds-button--loading": loading,
			"navds-button--disabled": disabled || overrideWidth > 0,
			"navds-button--icon-only": (iconLeft || iconRight) && !children,
			unstyled: as === "a",
		},
	])}
	bind:this={ref}
	role={as != "button" ? "button" : undefined}
	disabled={disabled || overrideWidth > 0 ? true : undefined}
>
	{#if overrideWidth}
		loading
	{:else}
		{#if iconLeft}
			<span class={classes("navds-button__icon")}>{@render iconLeft()}</span>
		{/if}
		{#if children}
			<span class:medium={size == "medium"} class:small={size == "small"}>
				{@render children()}
			</span>
		{/if}

		{#if iconRight}
			<span class={classes("navds-button__icon")}>
				{@render iconRight()}
			</span>
		{/if}
	{/if}
</svelte:element>
