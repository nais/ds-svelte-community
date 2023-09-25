import type { ReactNode } from "react";
import type { DiffOptions, ReactComponent } from "./htmldiff";

interface CustomMatchers<R = unknown> {
	/**
	 * toMimicReact matches a Svelte component to a React component.
	 * It ignores comments and empty (after trimming) text nodes.
	 */
	toMimicReact(
		comp: ReactComponent,
		opts?: {
			opts?: DiffOptions;
			props?: object;
			children?: ReactNode[];
		},
	): R;
}
