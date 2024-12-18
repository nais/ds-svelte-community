<script lang="ts">
	import Button from "./Button.svelte";
	import type { ButtonProps } from "./type";

	let { ...restProps }: ButtonProps = $props();
</script>

<Button {...restProps}>Click me!</Button>
