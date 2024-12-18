<script lang="ts">
	import CopyButton from "./CopyButton.svelte";
	import type { CopyButtonProps } from "./type";

	let props: CopyButtonProps = $props();
</script>

<CopyButton {...props} />
