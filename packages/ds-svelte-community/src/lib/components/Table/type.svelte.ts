import { getContext, type Snippet } from "svelte";
import type {
	HTMLAttributes,
	HTMLTableAttributes,
	HTMLTdAttributes,
	HTMLThAttributes,
} from "svelte/elements";

export const tableSizes = ["medium", "small"] as const;
export const directions = ["ascending", "descending"] as const;
export const aligns = ["left", "center", "right"] as const;
export const contextKey = Symbol("TableContext");

export const getTableContext = () => {
	const context = getContext<TableContext>(contextKey);
	if (!context) {
		throw new Error("Element must be child of Table");
	}
	return context;
};

export class TableContext {
	size?: (typeof tableSizes)[number] = $state();
	zebraStripes?: boolean = $state();
	sort?: TableSortState = $state();
	changeSort?: (sortKey: string) => void;
}

export interface TableProps extends HTMLTableAttributes {
	/**
	 * Changes padding.
	 */
	size?: (typeof tableSizes)[number];
	/**
	 * Zebra striped table.
	 */
	zebraStripes?: boolean;
	/**
	 * Sort state.
	 */
	sort?: TableSortState;
	/**
	 * Table contents.
	 */
	children: Snippet;

	/**
	 * Callback for sort change.
	 */
	onsortchange?: (sortKey: string) => void;
}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
	/**
	 * Highlight row as selected.
	 */
	selected?: boolean;
	/**
	 * Shade row on hover.
	 */
	shadeOnHover?: boolean;
	/**
	 * Row contents.
	 */
	children: Snippet;
}

export interface TableHeaderCellProps extends HTMLThAttributes {
	/**
	 * Cell alignment.
	 */
	align?: (typeof aligns)[number];
	/**
	 * Key for sorting.
	 */
	sortKey?: string;
	/**
	 * Whether cell is sortable.
	 */
	sortable?: boolean;
	/**
	 * Cell contents.
	 */
	children?: Snippet;
}

export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
	/**
	 * Table header contents.
	 */
	children: Snippet;
}

export interface TableDataCellProps extends HTMLTdAttributes {
	/**
	 * Cell alignment.
	 */
	align?: (typeof aligns)[number];

	/**
	 * Data cell contents.
	 */
	children?: Snippet;
}

export interface BodyProps extends HTMLAttributes<HTMLTableSectionElement> {
	/**
	 * Table body contents.
	 */
	children: Snippet;
}

export interface TableSortState {
	orderBy: string;
	direction: (typeof directions)[number];
}
