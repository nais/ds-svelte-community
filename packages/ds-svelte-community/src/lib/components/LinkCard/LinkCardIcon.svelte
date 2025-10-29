<script lang="ts">
	import { omit } from "../helpers.js";
	import type { LinkCardIconProps } from "./type.js";

	let { children, ref = $bindable(), ...restProps }: LinkCardIconProps = $props();
</script>

<div
	bind:this={ref}
	{...omit(restProps, "class")}
	aria-hidden="true"
	class={["aksel-link-card__icon", restProps.class]}
>
	{@render children()}
</div>
