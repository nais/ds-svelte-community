<script lang="ts">
	import { classes, omit } from "../helpers";
	import type { ErrorSummaryItemProps } from "./type";

	let { href, children, ...restProps }: ErrorSummaryItemProps = $props();
</script>

<li>
	<a {...omit(restProps, "class")} class={classes("navds-error-summary__item navds-link")} {href}>
		{@render children()}
	</a>
</li>
