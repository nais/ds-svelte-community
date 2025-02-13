<script lang="ts" module>
	import { getContext, setContext, untrack, type Snippet } from "svelte";
	import type { HTMLElements } from "../utils/elements";

	const contextKey = Symbol("theme_context");

	class ThemeContext {
		#value?: string = $state();

		constructor(value: string) {
			this.#value = value;
		}

		get theme(): string | undefined {
			return this.#value;
		}

		set theme(value: string) {
			this.#value = value;
		}
	}

	function newContext(value: string) {
		const ctx = new ThemeContext(value);
		setContext(contextKey, ctx);
		return ctx;
	}

	export function GetTheme(): ThemeContext | undefined {
		return getContext(contextKey);
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

		[key: string]: unknown;
	};

	let { theme, hasBackground = true, as = "div", children, ...restProps }: Props = $props();

	const parent = GetTheme();

	const ctx = newContext(theme ?? parent?.theme ?? "light");

	$effect(() => {
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
	class={["navds-theme", restProps?.class, ctx.theme]}
	data-background={containsBackground}
>
	{@render children()}
</svelte:element>
