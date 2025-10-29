<script lang="ts">
	import { omit } from "$lib/components/helpers.js";
	import type { LinkCardImageProps } from "./type.js";

	let { aspectRatio, children, ref = $bindable(), ...restProps }: LinkCardImageProps = $props();
</script>

<div
	bind:this={ref}
	{...omit(restProps, "class")}
	class={["aksel-link-card__image-container", restProps.class]}
	style:aspect-ratio={aspectRatio}
>
	{@render children()}
</div>
