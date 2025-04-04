<script lang="ts" module>
	export const experimental = true;
</script>

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { classes, omit } from "../helpers";
	import { Detail } from "../typography";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";

	interface Props extends HTMLAttributes<HTMLDivElement> {
		name: string;
		description?: string;
	}

	let { name, description, ...restProps }: Props = $props();
</script>

<div {...omit(restProps, "class")} class={classes([restProps.class, "navds-internalheader__user"])}>
	<span>
		<BodyShort size="small" as="div">
			{name}
		</BodyShort>
		{#if description}
			<Detail as="div">{description}</Detail>
		{/if}
	</span>
</div>
