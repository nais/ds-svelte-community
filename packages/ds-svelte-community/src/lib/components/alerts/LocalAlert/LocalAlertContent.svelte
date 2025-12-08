<!--
	@component
	LocalAlertContent is the content section of a LocalAlert, containing the main message text.
-->

<script lang="ts">
	import BaseAlertContent from "../BaseAlert/BaseAlertContent.svelte";
	import type { LocalAlertContentProps } from "./type";

	let { children, ...restProps }: LocalAlertContentProps = $props();
</script>

<BaseAlertContent {...restProps}>
	{@render children()}
</BaseAlertContent>
