<script lang="ts" module>
	import type { AkselColorRole } from "@navikt/ds-tokens/types";
	import { getContext, setContext, untrack, type Snippet } from "svelte";
	import type { HTMLElements } from "../utils/elements";

	const DEFAULT_COLOR: AkselColor = "accent";

	/* eslint-disable @typescript-eslint/no-empty-object-type */
	export interface CustomAkselColor {}

	export type AkselColor = AkselColorRole | keyof CustomAkselColor;

	export const themeContextKey = Symbol("theme_context");

	export class ThemeContext {
		#value?: "dark" | "light" = $state();
		#color: AkselColor = $state(DEFAULT_COLOR);

		constructor(value: "dark" | "light") {
			this.#value = value;
		}

		get theme(): "dark" | "light" | undefined {
			return this.#value;
		}

		set theme(value: "dark" | "light") {
			this.#value = value;
		}

		get color(): AkselColor {
			return this.#color;
		}
	}

	export function newContext(value: "dark" | "light") {
		const ctx = new ThemeContext(value);
		return setContext(themeContextKey, ctx);
	}

	export function GetTheme(): ThemeContext | undefined {
		return getContext(themeContextKey);
	}
</script>

<script lang="ts">
	type Props = {
		/**
		 * The theme to apply.
		 */
		theme?: "light" | "dark";

		hasBackground?: boolean;

		children: Snippet;

		as?: HTMLElements;

		"data-color"?: AkselColor;

		[key: string]: unknown;
	};

	let {
		theme,
		hasBackground = true,
		as = "div",
		children,
		"data-color": color,
		...restProps
	}: Props = $props();

	const parent = GetTheme();

	// svelte-ignore state_referenced_locally
	const ctx = newContext(theme ?? parent?.theme ?? "light");

	$effect(() => {
		// Hack to make this only run when the `theme` variable changes
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		theme;
		untrack(() => {
			ctx.theme = theme ?? parent?.theme ?? "light";
		});
	});

	let isRoot = $derived(ctx == undefined);

	let containsBackground = $derived(hasBackground ?? (isRoot && theme !== undefined));
</script>

<svelte:element
	this={as}
	class={["aksel-theme", restProps?.class, ctx.theme]}
	data-background={containsBackground}
	data-color={color ?? ctx.color ?? ""}
>
	{@render children()}
</svelte:element>
