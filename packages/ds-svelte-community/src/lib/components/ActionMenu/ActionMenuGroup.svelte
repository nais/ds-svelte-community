<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		/**
		 * Label for the group.
		 */
		label: string;
		/**
		 * Content of the group.
		 */
		children: Snippet;
	}

	let { label, children }: Props = $props();
</script>

<div role="group" class="navds-action-menu__group" aria-labelledby="r0">
	<div id="r0" aria-hidden="true" class="navds-action-menu__label">
		{label}
	</div>

	{@render children()}
</div>
