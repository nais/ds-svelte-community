<script lang="ts">
	import ProgressBar from "./ProgressBar.svelte";
	import type { ProgressBarProps } from "./type";

	let { ...props }: ProgressBarProps = $props();
</script>

<ProgressBar {...props} />
