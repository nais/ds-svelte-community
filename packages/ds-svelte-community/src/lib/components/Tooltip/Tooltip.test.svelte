<script lang="ts" module>
	export interface TooltipTestProps {
		content: string;
		open?: boolean;
		keys?: string[] | [string[], string[]];
		arrow?: boolean;
		placement?: "top" | "right" | "bottom" | "left";
		describesChild?: boolean;
		shortcutSeparator?: string;
	}
</script>

<script lang="ts">
	import { Tooltip } from "./";

	let {
		content,
		open,
		keys,
		arrow,
		placement,
		describesChild,
		shortcutSeparator,
	}: TooltipTestProps = $props();
</script>

<Tooltip {content} {open} {keys} {arrow} {placement} {describesChild} {shortcutSeparator}>
	<button>Anchor</button>
</Tooltip>
