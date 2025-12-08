<!--
	@component
	InfoCardContent is the content section of an InfoCard, containing the main message text.
-->

<script lang="ts">
	import BaseAlertContent from "../BaseAlert/BaseAlertContent.svelte";
	import type { InfoCardContentProps } from "./type";

	let { children, ...restProps }: InfoCardContentProps = $props();
</script>

<BaseAlertContent {...restProps}>
	{@render children()}
</BaseAlertContent>
