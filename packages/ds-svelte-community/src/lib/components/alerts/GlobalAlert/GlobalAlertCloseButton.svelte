<!--
	@component
	GlobalAlertCloseButton is a close button for dismissing a GlobalAlert.
-->

<script lang="ts">
	import BaseAlertCloseButton from "../BaseAlert/BaseAlertCloseButton.svelte";
	import type { GlobalAlertCloseButtonProps } from "./type";

	let { ...restProps }: GlobalAlertCloseButtonProps = $props();
</script>

<BaseAlertCloseButton {...restProps} />
