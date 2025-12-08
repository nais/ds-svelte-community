<!--
	@component
	GlobalAlertCloseButton is a close button for dismissing a GlobalAlert.
-->

<script lang="ts">
	import { XMarkIcon } from "$lib/icons";
	import Button from "../Button/Button.svelte";
	import { omit } from "../helpers";
	import type { GlobalAlertCloseButtonProps } from "./type";

	let { onclick, ...restProps }: GlobalAlertCloseButtonProps = $props();
</script>

<Button
	{...omit(restProps, "class")}
	type="button"
	data-color="neutral"
	variant="tertiary-neutral"
	class={[restProps.class, "aksel-base-alert__close-button"]}
	size="small"
	title="Close"
	icon={XMarkIcon}
	{onclick}
/>
