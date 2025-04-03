<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import { GetTheme } from "$lib/components/Theme/Theme.svelte";
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

	const theme = GetTheme();
	const prefix = theme ? "ax" : "a";
</script>

<svelte:element
	this={as}
	{...omit(restProps, "class", "style")}
	class={classes([
		restProps.class,
		{
			"navds-r-p": !!padding,
			"navds-r-pi": !!paddingInline,
			"navds-r-pb": !!paddingBlock,
			"navds-r-m": !!margin,
			"navds-r-mi": !!marginInline,
			"navds-r-mb": !!marginBlock,
			"navds-r-w": !!width,
			"navds-r-minw": !!minWidth,
			"navds-r-maxw": !!maxWidth,
			"navds-r-h": !!height,
			"navds-r-minh": !!minHeight,
			"navds-r-maxh": !!maxHeight,
			"navds-r-position": !!position,
			"navds-r-inset": !!inset,
			"navds-r-top": !!top,
			"navds-r-right": !!right,
			"navds-r-bottom": !!bottom,
			"navds-r-left": !!left,
			"navds-r-overflow": !!overflow,
			"navds-r-overflowx": !!overflowX,
			"navds-r-overflowy": !!overflowY,
			"navds-r-flex-basis": !!flexBasis,
			"navds-r-flex-grow": !!flexGrow,
			"navds-r-flex-shrink": !!flexShrink,
		},
	])}
	style={combineStyles(
		restProps,
		/* Padding */
		getResponsiveProps(prefix, "r", "p", "spacing", padding),
		getResponsiveProps(prefix, "r", "pi", "spacing", paddingInline),
		getResponsiveProps(prefix, "r", "pb", "spacing", paddingBlock),
		/* Margin */
		getResponsiveProps(prefix, "r", "m", "spacing", margin),
		getResponsiveProps(prefix, "r", "mi", "spacing", marginInline),
		getResponsiveProps(prefix, "r", "mb", "spacing", marginBlock),
		/* Width & height */
		getResponsiveValue(prefix, "r", "w", width),
		getResponsiveValue(prefix, "r", "minw", minWidth),
		getResponsiveValue(prefix, "r", "maxw", maxWidth),
		getResponsiveValue(prefix, "r", "h", height),
		getResponsiveValue(prefix, "r", "minh", minHeight),
		getResponsiveValue(prefix, "r", "maxh", maxHeight),
		/* Positon & inset */
		getResponsiveValue(prefix, "r", "position", position),
		getResponsiveProps(prefix, "r", "inset", "spacing", inset),
		getResponsiveProps(prefix, "r", "top", "spacing", top),
		getResponsiveProps(prefix, "r", "right", "spacing", right),
		getResponsiveProps(prefix, "r", "bottom", "spacing", bottom),
		getResponsiveProps(prefix, "r", "left", "spacing", left),
		/* Overflow */
		getResponsiveValue(prefix, "r", "overflow", overflow),
		getResponsiveValue(prefix, "r", "overflowx", overflowX),
		getResponsiveValue(prefix, "r", "overflowy", overflowY),
		/* Flex */
		getResponsiveValue(prefix, "r", "flex-basis", flexBasis),
		getResponsiveValue(prefix, "r", "flex-grow", flexGrow),
		getResponsiveValue(prefix, "r", "flex-shrink", flexShrink),
	)}>{@render children?.()}</svelte:element
>
