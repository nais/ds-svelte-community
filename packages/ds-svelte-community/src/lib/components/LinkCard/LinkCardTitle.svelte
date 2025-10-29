<script lang="ts">
	import { getContext } from "svelte";
	import { omit } from "../helpers.js";
	import Heading from "../typography/Heading/Heading.svelte";
	import type { LinkCardTitleProps } from "./type.js";

	let { as = "span", children, ref = $bindable(), ...restProps }: LinkCardTitleProps = $props();

	const size = getContext<"small" | "medium">("linkcard-size");
	const headingSize = size === "medium" ? "small" : "xsmall";
</script>

<Heading
	{as}
	{...omit(restProps, "class")}
	size={headingSize}
	class={["aksel-link-card__title", restProps.class]}
>
	{@render children()}
</Heading>
