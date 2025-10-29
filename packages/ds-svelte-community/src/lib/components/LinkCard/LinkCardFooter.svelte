<script lang="ts">
	import { omit } from "../helpers.js";
	import type { LinkCardFooterProps } from "./type.js";

	let { children, ref = $bindable(), ...restProps }: LinkCardFooterProps = $props();
</script>

<div
	bind:this={ref}
	{...omit(restProps, "class")}
	class={["aksel-link-card__footer", restProps.class]}
>
	{@render children()}
</div>
