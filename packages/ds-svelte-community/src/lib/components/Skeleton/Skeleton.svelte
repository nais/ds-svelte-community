<!--
@component
Skeleton is used to give the user a temporary visual feedback while the content is loading or being processed. It is a simple and minimalistic version of the actual content to be displayed.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/skeleton).
-->

<script lang="ts">
	import { classes, omit } from "../helpers";
	import type { SkeletonProps } from "./type";

	let { variant, height, width, children, ...restProps }: SkeletonProps = $props();

	const style = (
		restProps: { [index: string]: unknown },
		width: SkeletonProps["width"],
		height: SkeletonProps["height"],
	): string | undefined => {
		let ret = "";
		if (restProps.style) {
			ret += restProps.style;
		}
		if (width) {
			ret += `width: ${width};`;
		}
		if (height) {
			ret += `height: ${height};`;
		}

		if (ret == "") {
			return undefined;
		}

		return ret;
	};
</script>

<div
	{...omit(restProps, "class", "style")}
	class={classes([
		restProps.class,
		"navds-skeleton",
		`navds-skeleton--${variant}`,
		{
			"navds-skeleton--has-children": !!children,
			"navds-skeleton--no-height": !height,
			"navds-skeleton--no-width": !width,
		},
	])}
	style={style(restProps, width, height)}
	aria-hidden="true"
>
	{#if children}
		{@render children()}
	{/if}
</div>
