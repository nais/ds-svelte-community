<!--
	@component
	Button lets the user perform an action.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/button).

	All extra props are passed to the root element.
 -->

<script lang="ts">
	import Loader from "../Loader/Loader.svelte";
	import { isSnippet, omit } from "../helpers";
	import Label from "../typography/Label/Label.svelte";
	import type { ButtonProps } from "./type";

	let {
		variant = "primary",
		size = "medium",
		disabled = false,
		loading = false,
		as = "button",
		children,
		icon,
		ref = $bindable(),
		iconPosition = "left",
		...restProps
	}: ButtonProps = $props();

	let overrideWidth = $derived(ref && loading ? ref.getBoundingClientRect().width : 0);

	let style = $derived(typeof restProps.style == "string" ? restProps.style : null);
</script>

<svelte:element
	this={as}
	{...omit(disabled ? omit(restProps, "href", "class") : restProps, "class")}
	style={overrideWidth
		? `width: ${overrideWidth}px;${style ? " " + style : ""}`
		: style || undefined}
	class={[
		restProps.class,
		"aksel-button",
		`aksel-button--${variant}`,
		`aksel-button--${size}`,
		{
			"aksel-button--loading": loading,
			"aksel-button--disabled": disabled || overrideWidth > 0 || loading,
			"aksel-button--icon-only": !!icon && !children,
			unstyled: as === "a",
		},
	]}
	bind:this={ref}
	role={as != "button" ? "button" : undefined}
	disabled={disabled || overrideWidth > 0 || loading ? true : undefined}
>
	{#if overrideWidth || loading}
		<Loader {size} />

		{#if children}
			<Label as="span" size={size === "medium" ? "medium" : "small"} {children} />
		{/if}
	{:else}
		{#if icon && iconPosition == "left"}
			<span class="aksel-button__icon">
				{#if isSnippet(icon)}
					{@render icon()}
				{:else}
					{@const Icon = icon}
					<Icon />
				{/if}
			</span>
		{/if}
		{#if children}
			<Label as="span" size={size === "medium" ? "medium" : "small"} {children} />
		{/if}

		{#if icon && iconPosition == "right"}
			<span class="aksel-button__icon">
				{#if isSnippet(icon)}
					{@render icon()}
				{:else}
					{@const Icon = icon}
					<Icon />
				{/if}
			</span>
		{/if}
	{/if}
</svelte:element>
