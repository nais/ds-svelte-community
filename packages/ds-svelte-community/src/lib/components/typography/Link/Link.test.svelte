<script lang="ts">
	import type { ComponentProps } from "svelte";
	import Link from "./Link.svelte";

	type $$Props = ComponentProps<Link>;

	const tshack = (v: unknown) => v as $$Props;
</script>

<Link {...tshack($$props)}>Link content</Link>
