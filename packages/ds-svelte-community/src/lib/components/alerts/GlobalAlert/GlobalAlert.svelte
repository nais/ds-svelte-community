<!--
	@component
	GlobalAlert is a component for displaying prominent alerts about your app, such as system status or important announcements.
	It spans the full width and centers content, typically placed at the top of a page.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/globalalert).
-->

<script lang="ts" module>
	export { GetBaseAlertContext as GetGlobalAlertContext } from "../BaseAlert/BaseAlert.svelte";
</script>

<script lang="ts">
	import BaseAlert from "../BaseAlert/BaseAlert.svelte";
	import type { GlobalAlertProps } from "./type";

	let { children, ...restProps }: GlobalAlertProps = $props();
</script>

<BaseAlert {...restProps} global={true} type="strong" role="alert">
	{@render children()}
</BaseAlert>
