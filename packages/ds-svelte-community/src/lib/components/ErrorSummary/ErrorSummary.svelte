<!--
	@component
	ErrorSummary gives the user a summary list of validation errors they need to fix before continuing.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/errorsummary).
-->

<script lang="ts">
	import { classes, omit } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import Heading from "../typography/Heading/Heading.svelte";
	import type { ErrorSummaryProps } from "./type";

	let {
		size = "medium",
		heading,
		headingTag = "h2",
		children,
		...restProps
	}: ErrorSummaryProps = $props();
</script>

<div
	{...omit(restProps, "class")}
	class={classes([restProps.class, "navds-error-summary", `navds-error-summary--${size}`])}
	tabIndex={-1}
>
	<Heading
		class={classes("navds-error-summary__heading")}
		as={headingTag}
		size="small"
		tabindex={-1}
	>
		{heading}
	</Heading>
	<BodyShort as="ul" {size} class={classes("navds-error-summary__list")}>
		{@render children()}
	</BodyShort>
</div>
