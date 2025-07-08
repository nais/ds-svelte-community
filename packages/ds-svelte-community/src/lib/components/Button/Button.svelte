<!--
	@component
	Button lets the user perform an action.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/button).

	All extra props are passed to the root element.
 -->

<script lang="ts">
	import Loader from "../Loader/Loader.svelte";
	import type { AkselColor } from "../Theme/Theme.svelte";
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
		"data-color": color,
		...restProps
	}: ButtonProps = $props();

	function variantToColor(variant: ButtonProps["variant"]): AkselColor | undefined {
		switch (variant) {
			case "primary-neutral":
			case "secondary-neutral":
			case "tertiary-neutral":
				return "neutral";
			case "danger":
				return "danger";
			default:
				return undefined;
		}
	}

	function variantToSimplifiedVariant(
		variant: ButtonProps["variant"],
	): "primary" | "secondary" | "tertiary" {
		switch (variant) {
			case "primary":
			case "primary-neutral":
			case "danger":
				return "primary";
			case "secondary":
			case "secondary-neutral":
				return "secondary";
			case "tertiary":
			case "tertiary-neutral":
				return "tertiary";
			default:
				return "primary";
		}
	}

	let overrideWidth = $derived(ref && loading ? ref.getBoundingClientRect().width : 0);

	let style = $derived(typeof restProps.style == "string" ? restProps.style : null);
</script>

<svelte:element
	this={as}
	{...omit(disabled ? omit(restProps, "href", "class") : restProps, "class")}
	data-color={color ?? variantToColor(variant)}
	data-variant={variantToSimplifiedVariant(variant)}
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
