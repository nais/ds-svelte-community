<!--
	@component
	Popover is a hidden panel connected to an element. The popover will be placed on top of all other elements in the interface. You control when and how it should be displayed and hidden.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/popover).
-->

<script lang="ts" module>
	import { flip as flipMW, offset as offsetMW, shift as shiftMW } from "svelte-floating-ui/dom";
</script>

<script lang="ts">
	import { createFloatingActions } from "svelte-floating-ui";

	import { omit } from "../helpers";
	import type { PopoverProps } from "./type";

	let {
		open = $bindable(false),
		placement = "top",
		offset,
		strategy = "absolute",
		flip = true,
		anchorEl,
		contentClass,
		children,
		...restProps
	}: PopoverProps = $props();

	const [floatingRef, floatingContent, update] = createFloatingActions({
		placement,
		strategy,
		middleware: [
			offsetMW(offset ?? 4),
			flip ? flipMW({ padding: 5, fallbackPlacements: ["bottom", "top"] }) : null,
			shiftMW({ padding: 12 }),
		],
		autoUpdate: true,
	});
	let popover: HTMLDivElement;

	$effect(() => {
		update({
			placement,
			strategy,
			middleware: [
				offsetMW(offset ?? 4),
				flip ? flipMW({ padding: 5, fallbackPlacements: ["bottom", "top"] }) : null,
				shiftMW({ padding: 12 }),
			],
		});
	});

	$effect(() => {
		if (anchorEl && popover) {
			floatingRef(anchorEl as HTMLElement);
			anchorEl.addEventListener("focusout", () => {
				open = false;
			});
		}
	});
</script>

<div
	use:floatingContent
	bind:this={popover}
	class={[
		restProps.class,
		"aksel-popover",
		{
			"aksel-popover--hidden": !open || !anchorEl,
		},
	]}
	data-placement={placement}
	{...omit(restProps, "class")}
>
	<div class={["aksel-popover__content", contentClass]}>
		{@render children()}
	</div>
</div>
