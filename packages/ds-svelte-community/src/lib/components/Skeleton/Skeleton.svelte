<!--
@component
Skeleton is used to give the user a temporary visual feedback while the content is loading or being processed. It is a simple and minimalistic version of the actual content to be displayed.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/skeleton).
-->

<script lang="ts">
	import { omit } from "../helpers";
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
	class={[
		restProps.class,
		"aksel-skeleton",
		`aksel-skeleton--${variant}`,
		{
			"aksel-skeleton--has-children": !!children,
			"aksel-skeleton--no-height": !height,
			"aksel-skeleton--no-width": !width,
		},
	]}
	style={style(restProps, width, height)}
	aria-hidden="true"
>
	{#if children}
		{@render children()}
	{/if}
</div>
