<script lang="ts">
	import { getContext } from "svelte";
	import { omit } from "../helpers.js";
	import Heading from "../typography/Heading/Heading.svelte";
	import type { LinkCardTitleProps } from "./type.js";

	let { as = "span", children, ...restProps }: LinkCardTitleProps = $props();

	const getSize = getContext<() => "small" | "medium">("linkcard-size");
	let headingSize: "small" | "xsmall" = $derived(getSize() === "medium" ? "small" : "xsmall");
</script>

<Heading
	{as}
	{...omit(restProps, "class", "ref")}
	size={headingSize}
	class={["aksel-link-card__title", restProps.class]}
>
	{@render children()}
</Heading>
