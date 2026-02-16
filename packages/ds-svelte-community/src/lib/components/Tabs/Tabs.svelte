<!--
	@component
	Tabs are used to switch between panels on a page. This helps users navigate between related content without changing context. The component consists of a row of tab buttons. A tab button is always selected, because a panel is always displayed.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/tabs).

	_Note: This component does not yet follow all best practices regarding accessibility._
-->
<script lang="ts">
	import { setContext } from "svelte";
	import { omit } from "../helpers";
	import { contextKey, type TabContext, type TabsProps } from "./type.svelte";

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

	let tabs = $state<HTMLElement[]>([]);
	let tabIndex = $state<Record<string, HTMLElement>>({});
	let activeTab = $state<HTMLElement | undefined>();

	const ctx: TabContext = {
		get value() {
			return value;
		},
		set value(v: string) {
			value = v;
		},
		get loop() {
			return loop;
		},
		get iconPosition() {
			return iconPosition;
		},
		get size() {
			return size;
		},
		get selectionFollowsFocus() {
			return selectionFollowsFocus;
		},
		get tabs() {
			return tabs;
		},
		get tabIndex() {
			return tabIndex;
		},
		get activeTab() {
			return activeTab;
		},
		set activeTab(el: HTMLElement | undefined) {
			activeTab = el;
		},
		baseID: id,
		activate(v: string) {
			value = v;
		},
		register(el: HTMLElement, v: string) {
			if (value === v) {
				activeTab = el;
			}
			tabs.push(el);
			tabIndex[v] = el;
		},
		focusOn(el: HTMLElement) {
			activeTab = el;
		},
		blur(el: HTMLElement) {
			if (activeTab === el) {
				activeTab = tabIndex[value];
			}
		},
		idFor(typ: "panel" | "tab", val: string) {
			return `tabs-${typ}-${id}-${val}`;
		},
	};

	setContext(contextKey, ctx);
</script>

<div
	{...omit(restProps, "class", "dir")}
	class={[restProps.class, "aksel-tabs", `aksel-tabs--${size}`]}
	data-orientation="horizontal"
>
	{@render children()}
</div>
