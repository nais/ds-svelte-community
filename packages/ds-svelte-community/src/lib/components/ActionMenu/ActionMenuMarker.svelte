<script lang="ts">
	import type { Snippet } from "svelte";
	import type { ClassValue } from "svelte/elements";
	import { classes } from "../helpers";

	type MarkerProps = {
		/**
		 * The class of the marker.
		 */
		class: ClassValue;
		/**
		 * The placement of the marker.
		 */
		placement: "left" | "right";
		/**
		 * The content of the marker.
		 */
		children: Snippet;
	};

	let { children, placement, ...restProps }: MarkerProps = $props();
</script>

<div
	aria-hidden="true"
	class={classes([
		restProps.class,
		"navds-action-menu__marker",
		`navds-action-menu__marker--${placement}`,
	])}
>
	{@render children()}
</div>
