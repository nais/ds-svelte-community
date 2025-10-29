<script lang="ts">
	import { omit } from "../helpers.js";
	import type { LinkCardDescriptionProps } from "./type.js";

	let { children, ref = $bindable(), ...restProps }: LinkCardDescriptionProps = $props();
</script>

<div
	bind:this={ref}
	{...omit(restProps, "class")}
	class={["aksel-link-card__description", restProps.class]}
>
	{@render children()}
</div>
