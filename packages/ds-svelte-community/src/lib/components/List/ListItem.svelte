<script lang="ts">
	import { classes, isSnippet, omit } from "../helpers";
	import { BodyLong } from "../typography";
	import { GetListContext } from "./context";
	import type { ListItemProps } from "./types";

	let { children, icon, title, ...restProps }: ListItemProps = $props();

	const ctx = GetListContext();
</script>

<li {...omit(restProps, "class")} class={classes(restProps, "navds-list__item")}>
	{#if ctx && ctx.type === "ul"}
		<div
			class={classes({}, "navds-list__item-marker", {
				"navds-list__item-marker--icon": !!icon,
				"navds-list__item-marker--bullet": !icon,
			})}
		>
			{#if icon}
				{#if isSnippet(icon)}
					{@render icon()}
				{:else}
					{@const Icon = icon}
					<Icon aria-hidden="true" />
				{/if}
			{:else}
				<svg
					width="0.375rem"
					height="0.375rem"
					viewBox="0 0 6 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					focusable="false"
					role="img"
				>
					<rect width="6" height="6" rx="3" fill="currentColor" />
				</svg>
			{/if}
		</div>
	{/if}

	<div>
		{#if title}
			{#if typeof title === "string"}
				<BodyLong as="p" size={ctx?.size ?? "medium"} weight="semibold">
					{title}
				</BodyLong>
			{:else}
				{@render title()}
			{/if}
		{/if}
		{@render children()}
	</div>
</li>
