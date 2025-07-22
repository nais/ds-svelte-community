<!--
	@component
	Checkbox displays a list of options where multiple can be selected at once. When a choice is made, the user can click again to deselect it.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/checkbox).
-->

<script lang="ts" module>
	import Fieldset from "$lib/components/Fieldset/Fieldset.svelte";
	import { getContext } from "svelte";
	import { sizes, type CheckboxGroupProps } from "./type";

	export class CheckboxGroupContext {
		values: unknown[] = $state([]);
		groupControlled: boolean | undefined = $state(undefined);
		hasError = $state(false);
		size: (typeof sizes)[number] = $state("medium");
		// change: (value: unknown) => void;
		// groupControlled: boolean;
		// values: Readable<unknown[]>;
		// hasError: Readable<boolean>;
		// size: (typeof sizes)[number];

		onchange(value: unknown) {
			if (!this.groupControlled) {
				return;
			}

			if (this.values.includes(value)) {
				this.values.splice(this.values.indexOf(value), 1);
			} else {
				this.values.push(value);
			}
		}
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

	const ctx = new CheckboxGroupContext();
	ctx.values = value;
	ctx.groupControlled = value !== undefined;
	ctx.hasError = !!error;

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
