import type { Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";

export interface ReadMoreProps extends Omit<HTMLButtonAttributes, "ontoggle"> {
	header: string | Snippet;

	/**
	 * Initial open state for uncontrolled usage.
	 * Ignored when `open` is explicitly passed.
	 */
	defaultOpen?: boolean;

	open?: boolean;

	/** Custom data-color attribute. */
	"data-color"?: string;

	size?: "large" | "medium" | "small";

	variant?: "moderate" | "ghost";

	children: Snippet;

	onopenchange?: (open: boolean) => void;
}
