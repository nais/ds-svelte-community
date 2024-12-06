<!--
	@component
	Button lets the user perform an action.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/button).

	All extra props are passed to the root element.
 -->

<script lang="ts">
	import Loader from "../Loader/Loader.svelte";
	import { classes, isSnippet, omit } from "../helpers";
	import Label from "../typography/Label/Label.svelte";
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

	let internalRef: HTMLElement | undefined = $state(undefined);

	$effect(() => {
		ref = internalRef;
	});

	let overrideWidth = $derived.by(() => {
		return internalRef && loading ? internalRef.getBoundingClientRect().width : 0;
	});
</script>

<svelte:element
	this={as}
	{...omit(disabled ? omit(restProps, "href", "class") : restProps, "class")}
	style={overrideWidth ? `width: ${overrideWidth}px` : undefined}
	class={classes(restProps, "navds-button", `navds-button--${variant}`, `navds-button--${size}`)}
	class:navds-button--loading={loading}
	class:navds-button--disabled={disabled || overrideWidth > 0}
	class:navds-button--icon-only={(!!iconLeft || !!iconRight) && !children}
	class:unstyled={as === "a"}
	bind:this={internalRef}
	role={as != "button" ? "button" : undefined}
	disabled={disabled || overrideWidth > 0 ? true : undefined}
>
	{#if overrideWidth}
		<Loader {size} />
	{:else}
		{#if iconLeft}
			<span class="navds-button__icon">
				{#if isSnippet(iconLeft)}
					{@render iconLeft()}
				{:else}
					{@const Icon = iconLeft}
					<Icon />
				{/if}
			</span>
		{/if}
		{#if children}
			<Label as="span" size={size === "medium" ? "medium" : "small"} {children} />
		{/if}

		{#if iconRight}
			<span class="navds-button__icon">
				{#if isSnippet(iconRight)}
					{@render iconRight()}
				{:else}
					{@const Icon = iconRight}
					<Icon />
				{/if}
			</span>
		{/if}
	{/if}
</svelte:element>
