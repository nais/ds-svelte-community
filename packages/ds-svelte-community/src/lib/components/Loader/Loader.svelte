<!--
	@component
	Loader gives users a visual indication that something is loading or taking time.
	Even though users have little information about what is happening, they are assured that something is happening.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/loader).
-->

<script lang="ts">
	import { omit } from "../helpers";
	import type { LoaderProps } from "./type";

	let {
		size = "medium",
		title = "Waiting…",
		transparent = false,
		variant = "neutral",
		...restProps
	}: LoaderProps = $props();

	const uid = $props.id();
	const id = "ldr" + uid;
</script>

<svg
	{...omit(restProps, "class")}
	class={[
		restProps.class,
		`aksel-loader aksel-loader--${size}`,
		`aksel-loader--${variant}`,
		{
			"aksel-loader--transparent": transparent,
		},
	]}
	focusable="false"
	viewBox="0 0 50 50"
	preserveAspectRatio="xMidYMid"
	aria-labelledby={id}
>
	<title {id}>{title}</title>
	<circle
		class="aksel-loader__background"
		xmlns="http://www.w3.org/2000/svg"
		cx="25"
		cy="25"
		r="20"
		fill="none"
	/>
	<circle
		class="aksel-loader__foreground"
		cx="25"
		cy="25"
		r="20"
		fill="none"
		stroke-dasharray="50 155"
	/>
</svg>
