import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export interface ExpansionCardProps extends Omit<HTMLAttributes<HTMLElement>, "ontoggle"> {
	header: string | Snippet;

	open?: boolean;

	size?: "small" | "medium";

	showMoreTitle?: string;

	children: Snippet;

	description?: string | Snippet;

	ontoggle?: (open: boolean) => void;
}
export interface ExpansionCardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

	size?: "small" | "medium" | "large";

	children: Snippet;
}
