<!--
	@component
	A component that presents a Process as a vertical line of events.
	Each event can contain information, actions, links or status indicators.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/process).

	All extra props are passed to the root element.
 -->

<script lang="ts">
	import { setContext } from "svelte";
	import { omit } from "../helpers";
	import type { ProcessProps } from "./type";

	let {
		hideStatusText = false,
		isTruncated,
		children,
		id,
		ref = $bindable(),
		...restProps
	}: ProcessProps = $props();

	const baseID = $props.id();
	const rootId = id || `process-${baseID}`;

	// Create a context to share with ProcessEvent components
	const processContext = {
		hideStatusText,
		rootId,
		get activeChildId() {
			if (!ref) {
				return undefined;
			}

			const activeChildren = ref.querySelectorAll('[data-process-event][aria-current="true"]');

			if (activeChildren.length > 1) {
				console.warn(
					"Aksel: Found multiple `ProcessEvent` elements with `status='active'`. Only one event should be active at a time.",
					ref,
				);
				return undefined;
			}

			if (activeChildren.length === 1) {
				return activeChildren[0].id;
			}

			return undefined;
		},
	};

	setContext("process", processContext);

	$effect(() => {
		processContext.hideStatusText = hideStatusText;
	});
</script>

<!-- biome-ignore lint/a11y/noRedundantRoles: ol elements with list-style: none; tends to be ignored by voiceover on Safari -->
<ol
	bind:this={ref}
	data-color="info"
	data-truncated={isTruncated}
	role="list"
	{...omit(restProps, "class")}
	class="aksel-process {restProps.class || ''}"
	id={rootId}
	aria-controls={processContext.activeChildId}
>
	{@render children()}
</ol>
