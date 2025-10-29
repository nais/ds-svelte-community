<script lang="ts">
	import { omit } from "../helpers.js";
	import type { LinkCardAnchorProps } from "./type.js";

	let { children, ref = $bindable(), ...restProps }: LinkCardAnchorProps = $props();
</script>

<a
	bind:this={ref}
	{...omit(restProps, "class")}
	class={["aksel-link-anchor", "unstyled", restProps.class]}
>
	{@render children()}
</a>
