<!--
	@component
	GlobalAlertContent is the content section of a GlobalAlert, containing the main message text.
-->

<script lang="ts">
	import BaseAlertContent from "../BaseAlert/BaseAlertContent.svelte";
	import type { GlobalAlertContentProps } from "./type";

	let { children, ...restProps }: GlobalAlertContentProps = $props();
</script>

<BaseAlertContent {...restProps}>
	{@render children()}
</BaseAlertContent>
