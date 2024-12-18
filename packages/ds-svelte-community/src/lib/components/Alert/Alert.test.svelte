<script lang="ts">
	import Alert from "./Alert.svelte";
	import type { AlertProps } from "./type";

	let props: Omit<AlertProps, "children"> = $props();
</script>

<Alert {...props}>Some alert</Alert>
