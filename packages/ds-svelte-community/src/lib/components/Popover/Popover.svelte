<!--
	@component
	Popover is a hidden panel connected to an element. The popover will be placed on top of all other elements in the interface. You control when and how it should be displayed and hidden.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/popover).
-->

<script lang="ts" module>
	import { flip as flipMW, offset as offsetMW, shift as shiftMW } from "svelte-floating-ui/dom";

	const oppositeSideMap: Record<string, string> = {
		top: "bottom",
		bottom: "top",
		left: "right",
		right: "left",
	};

	/**
	 * Match React's flip fallback logic:
	 * - left/right placements fallback to bottom/top
	 * - top/bottom placements fallback to the opposite side, preserving alignment
	 */
	function getOppositePlacement(p: string): string[] {
		if (p.startsWith("left") || p.startsWith("right")) {
			return ["bottom", "top"];
		}
		const [side, alignment] = p.split("-");
		const oppSide = oppositeSideMap[side] ?? "bottom";
		return [alignment ? `${oppSide}-${alignment}` : oppSide];
	}
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
		onClose,
		contentClass,
		children,
		...restProps
	}: PopoverProps = $props();

	const [floatingRef, floatingContent, update] = createFloatingActions({
		autoUpdate: true,
	});
	let popover: HTMLDivElement;

	$effect(() => {
		update({
			placement,
			strategy,
			middleware: [
				offsetMW(offset ?? 8),
				flip
					? flipMW({ padding: 5, fallbackPlacements: getOppositePlacement(placement) as never })
					: null,
				shiftMW({ padding: 12 }),
			],
		});
	});

	$effect(() => {
		if (anchorEl && popover) {
			const el = anchorEl as HTMLElement;
			floatingRef(el);
			const handleFocusOut = (e: FocusEvent) => {
				const relatedTarget = e.relatedTarget as Node | null;
				if (relatedTarget && popover.contains(relatedTarget)) {
					return;
				}
				open = false;
				onClose?.();
			};
			el.addEventListener("focusout", handleFocusOut);
			return () => {
				el.removeEventListener("focusout", handleFocusOut);
			};
		}
	});
</script>

<div
	use:floatingContent
	bind:this={popover}
	{...omit(restProps, "class")}
	class={[
		restProps.class,
		"aksel-popover",
		{
			"aksel-popover--hidden": !open || !anchorEl,
		},
	]}
	data-placement={placement}
	aria-hidden={!open || !anchorEl}
>
	<div class={["aksel-popover__content", contentClass]}>
		{@render children()}
	</div>
</div>
