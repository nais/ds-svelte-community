import { browser } from "$app/environment";
import type Theme from "$lib/components/Theme/Theme.svelte";
import type { ComponentProps } from "svelte";

type Themes = NonNullable<ComponentProps<typeof Theme>["theme"]>;

class ThemeStorer {
	#current: Themes = $state("dark");

	constructor() {
		if (!browser) {
			return;
		}

		const storedTheme = localStorage.getItem("theme");
		if (storedTheme) {
			this.#current = storedTheme as Themes;
		}
	}

	get current() {
		return this.#current;
	}

	set current(theme: Themes) {
		this.#current = theme;
		if (!browser) {
			return;
		}
		localStorage.setItem("theme", theme as string);
	}
}

export const ThemeStore = new ThemeStorer();
