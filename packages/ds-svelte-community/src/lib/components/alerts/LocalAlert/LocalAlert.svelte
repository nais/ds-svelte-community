<!--
	@component
	LocalAlert is a component for displaying important messages about a certain part of the page.
	It has a bordered appearance and is typically used inline within content.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/localalert).
-->

<script lang="ts" module>
	export { GetBaseAlertContext as GetLocalAlertContext } from "../BaseAlert/BaseAlert.svelte";
</script>

<script lang="ts">
	import BaseAlert from "../BaseAlert/BaseAlert.svelte";
	import type { LocalAlertProps } from "./type";

	let { children, ...restProps }: LocalAlertProps = $props();
</script>

<BaseAlert {...restProps} global={false} type="strong">
	{@render children()}
</BaseAlert>
