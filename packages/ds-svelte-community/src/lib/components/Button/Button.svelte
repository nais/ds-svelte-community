<!--
	@component
	Button lets the user perform an action.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/button).

	All extra props are passed to the root element.
 -->

<script lang="ts">
	import Loader from "../Loader/Loader.svelte";
	import type { AkselColor } from "../Theme/Theme.svelte";
	import { classes, isSnippet, omit } from "../helpers";
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

	let internalRef: HTMLElement | undefined = $state(undefined);

	$effect(() => {
		ref = internalRef;
	});

	let overrideWidth = $derived.by(() => {
		return internalRef && loading ? internalRef.getBoundingClientRect().width : 0;
	});

	let style = $derived(typeof restProps.style == "string" ? restProps.style : null);

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
</script>

<svelte:element
	this={as}
	{...omit(disabled ? omit(restProps, "href", "class") : restProps, "class")}
	style={overrideWidth
		? `width: ${overrideWidth}px;${style ? " " + style : ""}`
		: style || undefined}
	class={classes([
		restProps.class,
		"navds-button",
		`navds-button--${variant}`,
		`navds-button--${size}`,
		{
			"navds-button--loading": loading,
			"navds-button--disabled": disabled || overrideWidth > 0,
			"navds-button--icon-only": !!icon && !children,
			unstyled: as === "a",
		},
	])}
	bind:this={internalRef}
	role={as != "button" ? "button" : undefined}
	disabled={disabled || overrideWidth > 0 ? true : undefined}
	data-color={color ?? variantToColor(variant)}
	data-variant={variantToSimplifiedVariant(variant)}
>
	{#if overrideWidth}
		<Loader {size} />
	{:else}
		{#if icon && iconPosition == "left"}
			<span class={classes("navds-button__icon")}>
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
			<span class={classes("navds-button__icon")}>
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
