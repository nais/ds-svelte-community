<script lang="ts">
	import { BodyShort } from "$lib";
	import { omit } from "../helpers";
	import { getToggleGroupContext, type ToggleGroupItemProps } from "./type.svelte";

	let { value, children, ...restProps }: ToggleGroupItemProps = $props();

	const ctx = getToggleGroupContext();

	let state = $derived(ctx.value === value ? "on" : "off");

	function handleClick() {
		if (state === "off") {
			ctx.setValue(value);
		}
	}

	// This feels hacky
	function keydown(e: KeyboardEvent) {
		const btn = e.target as HTMLElement;
		if (!btn) {
			return;
		}

		if (e.key == "ArrowLeft" || e.key == "ArrowUp") {
			if (!btn.previousElementSibling) {
				if (btn.parentElement && btn.parentElement.lastElementChild) {
					(btn.parentElement.lastElementChild as HTMLElement).focus();
				}
				return;
			}

			const pes = btn.previousElementSibling as HTMLElement;
			if (!pes) {
				return;
			}
			pes.focus();
		}

		if (e.key == "ArrowRight" || e.key == "ArrowDown") {
			if (!btn.nextElementSibling) {
				if (btn.parentElement && btn.parentElement.firstElementChild) {
					(btn.parentElement.firstElementChild as HTMLElement).focus();
				}
				return;
			}

			const nes = btn.nextElementSibling as HTMLElement;
			if (!nes) {
				return;
			}
			nes.focus();
		}
	}
</script>

<button
	{...omit(restProps, "class", "data-state", "role", "aria-checked", "tabindex")}
	class={[restProps.class, "aksel-toggle-group__button"]}
	role="radio"
	aria-checked={state === "on"}
	tabindex={state == "on" ? 0 : -1}
	type="button"
	onclick={handleClick}
	onkeydown={keydown}
	data-selected={state === "on"}
>
	<BodyShort as="span" class="aksel-toggle-group__button-inner" size={ctx.size}>
		{@render children()}
	</BodyShort>
</button>
