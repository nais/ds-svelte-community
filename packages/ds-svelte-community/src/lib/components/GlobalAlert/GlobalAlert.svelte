<!--
	@component
	GlobalAlert is a component for displaying prominent alerts about your app, such as system status or important announcements.
	It spans the full width and centers content, typically placed at the top of a page.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/globalalert).
-->

<script lang="ts" module>
	import { getContext, setContext } from "svelte";
	import type { AkselColor } from "../Theme/Theme.svelte";
	import type { GlobalAlertContext, GlobalAlertStatus } from "./type";

	const contextKey = Symbol("GlobalAlertContext");

	export function GetGlobalAlertContext(): GlobalAlertContext | undefined {
		return getContext<GlobalAlertContext>(contextKey);
	}

	export function statusToDataColor(status: GlobalAlertStatus): AkselColor {
		switch (status) {
			case "announcement":
				return "neutral";
			case "success":
				return "success";
			case "warning":
				return "warning";
			case "error":
				return "danger";
			default:
				return "neutral";
		}
	}
</script>

<script lang="ts">
	import { omit } from "../helpers";
	import type { GlobalAlertProps } from "./type";

	const uid = $props.id();

	let {
		status,
		size = "medium",
		as = "section",
		children,
		...restProps
	}: GlobalAlertProps = $props();

	const color = $derived(statusToDataColor(status));
	const statusId = `global-alert-status-${uid}`;

	class Context implements GlobalAlertContext {
		size: GlobalAlertContext["size"] = $derived(size);
		status: GlobalAlertContext["status"] = $derived(status);
		color: GlobalAlertContext["color"] = $derived(color);
		statusId: string = statusId;
	}

	const ctx = new Context();
	setContext<GlobalAlertContext>(contextKey, ctx);

	const statusLabels: Record<GlobalAlertStatus, string> = {
		announcement: "Announcement",
		success: "Success",
		warning: "Warning",
		error: "Error",
	};
</script>

<svelte:element
	this={as}
	{...omit(restProps, "class")}
	aria-label={restProps["aria-label"] ?? (as === "section" ? statusLabels[status] : undefined)}
	class={[restProps.class, "aksel-base-alert"]}
	data-size={size}
	data-color={color}
	data-variant="strong"
	data-global={true}
>
	<div role="alert">
		{@render children()}
	</div>
</svelte:element>
