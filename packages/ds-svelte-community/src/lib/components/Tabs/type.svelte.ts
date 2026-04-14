import { getContext, type Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export const sizes = ["small", "medium"] as const;
export const iconPositions = ["left", "top"] as const;

export interface TabContext {
	value: string;
	readonly loop: boolean;
	readonly iconPosition: (typeof iconPositions)[number];
	readonly size: (typeof sizes)[number];
	readonly selectionFollowsFocus: boolean;
	readonly fill: boolean;
	readonly tabs: HTMLElement[];
	readonly tabIndex: Record<string, HTMLElement>;
	activeTab?: HTMLElement;
	readonly baseID: string;
	activate(value: string): void;
	register(el: HTMLElement, value: string): void;
	focusOn(el: HTMLElement): void;
	blur(el: HTMLElement): void;
	idFor(typ: "panel" | "tab", val: string): string;
}

export const contextKey = Symbol("tab-context");

export function getTabsContext(): TabContext {
	const context = getContext<TabContext>(contextKey);
	if (!context) {
		throw new Error("No context found");
	}
	return context;
}

export interface TabProps extends HTMLAttributes<HTMLElement> {
	/**
	 * Value of the tab.
	 */
	value: string;
	/**
	 * Label of the tab.
	 */
	label?: string;
	/**
	 * Label of the tab as a snippet.
	 */
	children?: Snippet;
	/**
	 * Icon to display in the tab.
	 */
	icon?: Snippet;
	/**
	 * Element to render as.
	 */
	as?: "button" | "a";

	/**
	 * URL to navigate to if `as` is set to "a".
	 */
	href?: string;
}

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Tab list items.
	 */
	children: Snippet;
}

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Value of the tab.
	 */
	value: string;
	/**
	 * Content of the tab panel.
	 */
	children: Snippet;
	/**
	 * If true, will only render children when selected.
	 * @default true
	 */
	lazy?: boolean;
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Changes padding and font-size.
	 */
	size?: (typeof sizes)[number];
	/**
	 * Controlled selected value.
	 */
	value?: string;
	/**
	 * If not controlled, a default-value needs to be set.
	 */
	defaultValue?: string;
	/**
	 * Loops back to start when navigating past last item.
	 */
	loop?: boolean;
	/**
	 * Icon position in Tab.
	 */
	iconPosition?: (typeof iconPositions)[number];
	/**
	 * Automatically activates tab on focus/navigation.
	 */
	selectionFollowsFocus?: boolean;
	/**
	 * onChange callback for selected Tab.
	 */
	onChange?: (value: string) => void;
	/**
	 * Stretches each tab to fill available space in container.
	 * @default false
	 */
	fill?: boolean;
	/**
	 * `TabList` and `TabPanel` components.
	 */
	children: Snippet;
}
