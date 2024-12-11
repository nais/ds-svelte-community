<script lang="ts">
	import type { Snippet } from "svelte";
	import newUniqueId from "../local-unique-id";

	interface Props {
		align?: "start" | "end";
		trigger: Snippet<
			[
				{
					popovertarget: string;
					style: string;
				},
			]
		>;
		children: Snippet;
	}
	let { align = "start", trigger, children }: Props = $props();

	const id = "ds-am-" + newUniqueId();
</script>

{@render trigger({ popovertarget: id, style: `anchor-name: --${id};` })}

<!-- <Button popovertarget="pow" style="anchor-name: --pow;" variant="secondary-neutral">
	{#snippet iconRight()}
		<ChevronDownIcon aria-hidden="true" />
	{/snippet}
	Click me
</Button> -->

<div
	data-side="bottom"
	data-align={align}
	role="menu"
	popover="auto"
	aria-orientation="vertical"
	dir="ltr"
	{id}
	class="navds-action-menu__content"
	style="position-anchor: --{id}; --__ac-action-menu-content-transform-origin: var(--ac-floating-transform-origin); --__ac-action-menu-content-available-height: var(--ac-floating-available-height); pointer-events: auto;"
	style:position-area={align === "start" ? "bottom span-right" : "bottom span-left"}
	data-aksel-portal=""
	tabindex="0"
	data-index="0"
>
	<div class="navds-action-menu__content-inner">
		{@render children()}
	</div>
	<!-- style="outline: none; --__ac-action-menu-content-transform-origin: var(--ac-floating-transform-origin); --__ac-action-menu-content-available-height: var(--ac-floating-available-height); pointer-events: auto;" -->
	<!-- <div class="wrapper" style="position-anchor: --pow;" popover="auto" id="pow"> -->
</div>

<style>
	.navds-action-menu__content {
		margin: 0;
		border: 0;
		outline: none;
		pointer-events: auto;
		position-area: bottom left;
		position: absolute;
		position-try-fallbacks:
			bottom span-right,
			bottom span-left,
			top span-right,
			top span-left;
	}
</style>
