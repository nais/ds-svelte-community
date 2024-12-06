import { getContext, setContext } from "svelte";
import type { ListProps } from "./types";

const contextKey = Symbol("ListContext");

export type ListContext = {
	type: ListProps["as"];
	size: ListProps["size"];
};

export function GetListContext(): ListContext | undefined {
	return getContext<ListContext>(contextKey);
}

export function SetListContext(ctx: ListContext) {
	return setContext<ListContext>(contextKey, ctx);
}
