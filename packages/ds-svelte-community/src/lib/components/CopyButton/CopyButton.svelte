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
		icon: nestedIcon,
		...restProps
	}: CopyButtonProps = $props();

	let active = $state(false);
	let timeout: ReturnType<typeof setTimeout> | null = null;

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
			<CheckmarkIcon
				aria-hidden={!!text}
				class="aksel-copybutton__icon"
				title={text ? undefined : activeTitle}
			/>
		{:else}
			<FilesIcon
				aria-hidden={!!text}
				class="aksel-copybutton__icon"
				title={text ? undefined : title}
			/>
		{/if}
	{/snippet}
</Button>
