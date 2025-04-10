import type { Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";

export interface ReadMoreProps extends Omit<HTMLButtonAttributes, "ontoggle"> {
	header: string | Snippet;

	open?: boolean;

	size?: "large" | "medium" | "small";

	children: Snippet;

	onopenchange?: (open: boolean) => void;
}
