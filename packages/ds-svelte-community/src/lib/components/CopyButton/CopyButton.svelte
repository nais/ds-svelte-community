<!--
	@component

	Allow users to copy text to clipboard.

	**Note:**
	This differs from the `@navikt/ds-react` implementation in that it uses the `navigator.clipboard` API instead of the `document.execCommand("copy")` API.
	This is to simplify code and support up-to-date browsers only. If you support IE or older browsers, reach out.
 -->

<script lang="ts">
	import CheckmarkIcon from "$lib/icons/CheckmarkIcon.svelte";
	import FilesIcon from "$lib/icons/FilesIcon.svelte";
	import { onDestroy } from "svelte";
	import Button from "../Button/Button.svelte";
	import { omit } from "../helpers";
	import { GetTheme } from "../Theme/Theme.svelte";
	import { Label } from "../typography";
	import type { CopyButtonProps } from "./type";

	let {
		size = "medium",
		variant = "neutral",
		copyText,
		text = "",
		activeText = "",
		activeDuration = 2000,
		title = "Copy",
		activeTitle = "Copied",
		iconPosition = "left",
		activechanged,
		icon,
		...restProps
	}: CopyButtonProps = $props();

	let active = $state(false);
	let timeout: ReturnType<typeof setTimeout> | null = null;
	const theme = GetTheme();

	onDestroy(() => {
		if (timeout) {
			clearTimeout(timeout);
		}
	});

	const handleClick = () => {
		if (timeout) {
			clearTimeout(timeout);
		}
		navigator.clipboard.writeText(copyText);
		active = true;

		if (activechanged) {
			activechanged(active);
		}

		timeout = setTimeout(() => {
			active = false;
			if (activechanged) {
				activechanged(active);
			}

			timeout = null;
		}, activeDuration);
	};
</script>

{#if theme}
	{@const nestedIcon = icon}
	{#snippet children()}
		{#if active}
			{activeText}
		{:else}
			{text}
		{/if}
	{/snippet}

	<Button
		type="button"
		{...restProps}
		class={[restProps.class, "aksel-copybutton"]}
		variant={variant === "action" ? "tertiary" : "tertiary-neutral"}
		onclick={handleClick}
		{iconPosition}
		data-active={active}
		{size}
		children={text ? children : undefined}
	>
		{#snippet icon()}
			{#if nestedIcon}
				{@render nestedIcon(active)}
			{:else if active}
				<CheckmarkIcon aria-hidden={!!text} title={text ? undefined : activeTitle} />
			{:else}
				<FilesIcon aria-hidden={!!text} title={text ? undefined : title} />
			{/if}
		{/snippet}
	</Button>
{:else}
	<button
		{...omit(restProps, "class")}
		type="button"
		class={[
			restProps.class,
			"aksel-copybutton",
			`aksel-copybutton--${size}`,
			`aksel-copybutton--${variant}`,
			{
				"aksel-copybutton--icon-only": !text,
				"aksel-copybutton--active": active,
			},
		]}
		onclick={handleClick}
	>
		<span class="aksel-copybutton__content">
			<span class="aksel-copybutton__icon">
				{#if icon}
					{@render icon(active)}
				{:else if active}
					<CheckmarkIcon aria-hidden={!!text} title={text ? undefined : activeTitle} />
				{:else}
					<FilesIcon aria-hidden={!!text} title={text ? undefined : title} />
				{/if}
			</span>

			{#if text}
				{#if active}
					<Label as="span" size={size === "medium" ? "medium" : "small"}>
						{activeText}
					</Label>
				{:else}
					<Label as="span" size={size === "medium" ? "medium" : "small"}>
						{text}
					</Label>
				{/if}
			{/if}
		</span>
	</button>
{/if}
