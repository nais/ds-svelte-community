<!--
	@component
	HelpText gives users an explanation of unknown terms or concepts, which is displayed when they need it.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/helptext).
-->

<script lang="ts">
	import Popover from "../Popover/Popover.svelte";
	import { GetTheme } from "../Theme/Theme.svelte";
	import { omit } from "../helpers";
	import HelpTextIcon from "./HelpTextIcon.svelte";
	import type { HelpTextProps } from "./type";

	let {
		title,
		wrapperClass = "",
		placement = "top",
		strategy = "absolute",
		children,
		...restProps
	}: HelpTextProps = $props();

	const theme = GetTheme();

	let btnEl: HTMLButtonElement | undefined = $state(undefined);
	let open = $state(false);
</script>

<div class={["aksel-help-text", wrapperClass]}>
	<button
		bind:this={btnEl}
		{...omit(restProps, "class")}
		onclick={() => (open = !open)}
		class={[restProps.class, "aksel-help-text__button"]}
		type="button"
		aria-expanded={open}
	>
		<HelpTextIcon {title} />
		<HelpTextIcon filled {title} />
	</button>
	<!-- onClose={() => setOpen(false)} -->
	<Popover
		class="aksel-help-text__popover"
		contentClass="aksel-body-short"
		bind:open
		anchorEl={btnEl}
		{placement}
		{strategy}
		offset={theme ? 8 : 12}
		arrow={!theme}
	>
		{@render children()}
	</Popover>
</div>
