<!--
	@component
	Tabs are used to switch between panels on a page. This helps users navigate between related content without changing context. The component consists of a row of tab buttons. A tab button is always selected, because a panel is always displayed.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/tabs).

	_Note: This component does not yet follow all best practices regarding accessibility._
-->
<script lang="ts">
	import { setContext } from "svelte";
	import { omit } from "../helpers";
	import { TabContext, contextKey, type TabsProps } from "./type.svelte";

	let {
		size = "medium",
		value = $bindable(),
		selectionFollowsFocus = false,
		loop = false,
		iconPosition = "left",
		children,
		...restProps
	}: TabsProps = $props();

	const id = $props.id();
	const ctx = new TabContext(value, id);
	ctx.value = value;
	ctx.loop = loop;
	ctx.iconPosition = iconPosition;
	ctx.size = size;
	ctx.selectionFollowsFocus = selectionFollowsFocus;
	$effect(() => {
		ctx.value = value;
		ctx.loop = loop;
		ctx.iconPosition = iconPosition;
		ctx.size = size;
		ctx.selectionFollowsFocus = selectionFollowsFocus;
	});
	setContext(contextKey, ctx);
</script>

<div
	{...omit(restProps, "class", "dir")}
	class={[restProps.class, "aksel-tabs", `aksel-tabs--${size}`]}
	data-orientation="horizontal"
>
	{@render children()}
</div>
