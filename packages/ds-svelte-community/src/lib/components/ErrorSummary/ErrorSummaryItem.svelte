<script lang="ts">
	import { omit } from "../helpers";
	import type { ErrorSummaryItemProps } from "./type";

	let { href, children, ...restProps }: ErrorSummaryItemProps = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<li>
	<a
		{...omit(restProps, "class")}
		class={[restProps.class, "aksel-error-summary__item", "aksel-link", "unstyled"]}
		{href}
	>
		{@render children()}
	</a>
</li>
