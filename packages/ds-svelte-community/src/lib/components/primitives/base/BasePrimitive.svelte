<script lang="ts">
	import { omit } from "$lib/components/helpers";
	import { combineStyles, getResponsiveProps, getResponsiveValue } from "$lib/components/utils/css";
	import type { BasePrimitiveProps } from "./type";

	let {
		as = "div",
		padding,
		paddingInline,
		paddingBlock,
		margin,
		marginInline,
		marginBlock,
		width,
		minWidth,
		maxWidth,
		height,
		minHeight,
		maxHeight,
		position,
		inset,
		top,
		right,
		bottom,
		left,
		overflow,
		overflowX,
		overflowY,
		flexBasis,
		flexGrow,
		flexShrink,
		children,
		...restProps
	}: BasePrimitiveProps = $props();
</script>

<svelte:element
	this={as}
	{...omit(restProps, "class", "style")}
	class={[
		restProps.class,
		{
			"aksel-r-p": !!padding,
			"aksel-r-pi": !!paddingInline,
			"aksel-r-pb": !!paddingBlock,
			"aksel-r-m": !!margin,
			"aksel-r-mi": !!marginInline,
			"aksel-r-mb": !!marginBlock,
			"aksel-r-w": !!width,
			"aksel-r-minw": !!minWidth,
			"aksel-r-maxw": !!maxWidth,
			"aksel-r-h": !!height,
			"aksel-r-minh": !!minHeight,
			"aksel-r-maxh": !!maxHeight,
			"aksel-r-position": !!position,
			"aksel-r-inset": !!inset,
			"aksel-r-top": !!top,
			"aksel-r-right": !!right,
			"aksel-r-bottom": !!bottom,
			"aksel-r-left": !!left,
			"aksel-r-overflow": !!overflow,
			"aksel-r-overflowx": !!overflowX,
			"aksel-r-overflowy": !!overflowY,
			"aksel-r-flex-basis": !!flexBasis,
			"aksel-r-flex-grow": !!flexGrow,
			"aksel-r-flex-shrink": !!flexShrink,
		},
	]}
	style={combineStyles(
		restProps,
		/* Padding */
		getResponsiveProps("r", "p", "spacing", padding),
		getResponsiveProps("r", "pi", "spacing", paddingInline),
		getResponsiveProps("r", "pb", "spacing", paddingBlock),
		/* Margin */
		getResponsiveProps("r", "m", "spacing", margin),
		getResponsiveProps("r", "mi", "spacing", marginInline),
		getResponsiveProps("r", "mb", "spacing", marginBlock),
		/* Width & height */
		getResponsiveValue("r", "w", width),
		getResponsiveValue("r", "minw", minWidth),
		getResponsiveValue("r", "maxw", maxWidth),
		getResponsiveValue("r", "h", height),
		getResponsiveValue("r", "minh", minHeight),
		getResponsiveValue("r", "maxh", maxHeight),
		/* Positon & inset */
		getResponsiveValue("r", "position", position),
		getResponsiveProps("r", "inset", "spacing", inset),
		getResponsiveProps("r", "top", "spacing", top),
		getResponsiveProps("r", "right", "spacing", right),
		getResponsiveProps("r", "bottom", "spacing", bottom),
		getResponsiveProps("r", "left", "spacing", left),
		/* Overflow */
		getResponsiveValue("r", "overflow", overflow),
		getResponsiveValue("r", "overflowx", overflowX),
		getResponsiveValue("r", "overflowy", overflowY),
		/* Flex */
		getResponsiveValue("r", "flex-basis", flexBasis),
		getResponsiveValue("r", "flex-grow", flexGrow),
		getResponsiveValue("r", "flex-shrink", flexShrink),
	)}>{@render children?.()}</svelte:element
>
