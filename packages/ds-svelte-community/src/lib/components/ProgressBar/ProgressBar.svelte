<!--
	@component
	ProgressBar shows the completion of a task.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/progressbar).

	All extra props are passed to the root element.
 -->

<script lang="ts">
	import { untrack } from "svelte";
	import { omit } from "../helpers.js";
	import type { ProgressBarProps } from "./type.js";

	let {
		size = "medium",
		value = 0,
		valueMax = 100,
		"aria-labelledby": ariaLabelledBy,
		"aria-label": ariaLabel,
		"aria-hidden": ariaHidden,
		simulated,
		ref = $bindable(),
		...restProps
	}: ProgressBarProps = $props();

	const translateX = $derived(100 - (Math.round(value) / valueMax) * 100);

	// Track the onTimeout callback as a derived value
	let onTimeoutCallback = $derived(simulated?.onTimeout);
	let timeoutId = $state<ReturnType<typeof setTimeout> | null>(null);

	// Handle timeout effect
	$effect(() => {
		const seconds = simulated?.seconds;

		if (seconds !== undefined && onTimeoutCallback) {
			// Clear any existing timeout
			if (timeoutId !== null) {
				clearTimeout(timeoutId);
			}

			// Set new timeout
			timeoutId = setTimeout(() => {
				// Use untrack to avoid creating dependencies when calling the callback
				untrack(() => {
					onTimeoutCallback?.();
				});
			}, seconds * 1000);

			return () => {
				if (timeoutId !== null) {
					clearTimeout(timeoutId);
				}
			};
		}
	});

	// i18n strings - matching ds-react
	const progressText = $derived(
		simulated?.seconds
			? `Progress is unknown, estimated time is ${Math.round(simulated.seconds)} seconds.`
			: `${Math.round(value)} of ${Math.round(valueMax)}`,
	);
</script>

<div
	bind:this={ref}
	{...omit(restProps, "class")}
	class={["aksel-progress-bar", `aksel-progress-bar--${size}`, restProps.class]}
	aria-valuemax={simulated?.seconds ? 0 : Math.round(valueMax)}
	aria-valuenow={simulated?.seconds ? 0 : Math.round(value)}
	aria-valuetext={progressText}
	aria-hidden={ariaHidden}
	aria-labelledby={ariaLabelledBy}
	aria-label={ariaLabel}
	role="progressbar"
>
	<div
		class={[
			"aksel-progress-bar__foreground",
			{
				"aksel-progress-bar__foreground--indeterminate": simulated?.seconds !== undefined,
			},
		]}
		style:--__ac-progress-bar-simulated={simulated?.seconds !== undefined
			? `${simulated.seconds}s`
			: undefined}
		style:--__ac-progress-bar-translate={`-${translateX}%`}
	></div>
</div>
