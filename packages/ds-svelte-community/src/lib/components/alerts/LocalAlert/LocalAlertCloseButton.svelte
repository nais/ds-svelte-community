<!--
	@component
	LocalAlertCloseButton is a close button for dismissing a LocalAlert.
-->

<script lang="ts">
	import BaseAlertCloseButton from "../BaseAlert/BaseAlertCloseButton.svelte";
	import type { LocalAlertCloseButtonProps } from "./type";

	let { ...restProps }: LocalAlertCloseButtonProps = $props();
</script>

<BaseAlertCloseButton {...restProps} />
