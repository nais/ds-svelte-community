<!--
	@component

	We often have needs for actions that are not "primary" or that it does not fit to use Buttons.
	Chips are small interactive components that manipulate data or display of data.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/chips).
 -->

<script lang="ts">
	import { classes, omit } from "../helpers";
	import type { ChipsProps } from "./type";

	let { size = "medium", children, ...restProps }: ChipsProps = $props();
</script>

<ul
	{...omit(restProps, "class")}
	class={classes([
		restProps.class,
		"navds-chips",
		`navds-chips--${size}`,
		{
			"navds-body-short": size === "medium",
			"navds-body-short--small": size === "medium",
			"navds-detail": size === "small",
			"navds-detail--small": size === "small",
		},
	])}
>
	{@render children()}
</ul>
