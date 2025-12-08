<!--
	@component
	BaseAlertCloseButton is a close button for dismissing a BaseAlert.

	This is an internal component - use GlobalAlertCloseButton or LocalAlertCloseButton instead.
-->

<script lang="ts">
	import { XMarkIcon } from "$lib/icons";
	import Button from "../../Button/Button.svelte";
	import { omit } from "../../helpers";
	import type { BaseAlertCloseButtonProps } from "./type";

	let { onclick, ...restProps }: BaseAlertCloseButtonProps = $props();
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
