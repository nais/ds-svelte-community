<!--
	@component
	Checkbox displays a list of options where multiple can be selected at once. When a choice is made, the user can click again to deselect it.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/checkbox).
-->

<script lang="ts" module>
	import Fieldset from "$lib/components/Fieldset/Fieldset.svelte";
	import { getContext } from "svelte";
	import { sizes, type CheckboxGroupProps } from "./type";

	export interface CheckboxGroupContext {
		readonly values: unknown[];
		readonly groupControlled: boolean | undefined;
		readonly hasError: boolean;
		readonly size: (typeof sizes)[number];
		onchange(value: unknown): void;
	}

	const contextKey = Symbol("CheckboxGroupContext");

	export function GetCheckboxGroupContext(): CheckboxGroupContext | undefined {
		if (!hasContext(contextKey)) {
			return undefined;
		}
		return getContext<CheckboxGroupContext>(contextKey);
	}
</script>

<script lang="ts">
	import { hasContext, setContext } from "svelte";
	import { omit } from "../helpers";

	const uid = $props.id();

	let {
		value = $bindable([]),
		hideLegend = false,
		error = "",
		errorId = "",
		size = "medium",
		disabled = false,
		id = "cbg-" + uid,
		legend,
		description,
		children,
		...restProps
	}: CheckboxGroupProps = $props();

	const ctx: CheckboxGroupContext = {
		get values() {
			return value;
		},
		get groupControlled() {
			return value !== undefined;
		},
		get hasError() {
			return !!error;
		},
		get size() {
			return size as (typeof sizes)[number];
		},
		onchange(v: unknown) {
			if (!this.groupControlled) {
				return;
			}

			if (this.values.includes(v)) {
				value.splice(value.indexOf(v), 1);
			} else {
				value.push(v);
			}
		},
	};

	setContext(contextKey, ctx);
</script>

<Fieldset
	{...omit(restProps, "class")}
	{error}
	{errorId}
	{hideLegend}
	{id}
	{disabled}
	{size}
	{legend}
	{description}
	class={[restProps.class, "aksel-checkbox-group", `aksel-checkbox-group--${size}`]}
>
	<div class="aksel-checkboxes">
		<!-- Content of the fieldset -->
		{@render children()}
	</div>
</Fieldset>
