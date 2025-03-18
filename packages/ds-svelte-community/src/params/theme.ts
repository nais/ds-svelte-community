import type { ParamMatcher } from "@sveltejs/kit";

export const match = ((param?: string): param is "dark" | "light" | undefined => {
	return param === undefined || param === "dark" || param === "light";
}) satisfies ParamMatcher;
