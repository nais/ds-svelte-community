import type { Plugin as VitePlugin } from "vite";
import { StoryParser } from "./storyparser";

const libReplacemenet = "@nais/ds-svelte-community";

// storyProcess walks through Svelte files, and adds the story source code as an
// attribute to the Story component.
export default function storyProcess(): VitePlugin {
	const parser = new StoryParser(libReplacemenet);
	return {
		name: "dssc-docs",

		// Handle file changes/deletions to reset parser state
		watchChange(id) {
			if (id.includes("routes/") && id.endsWith(".svelte")) {
				// Reset project cache when route files change to prevent stale state
				parser.resetProject();
			}
		},

		transform: {
			order: "pre",
			async handler(code, id) {
				if (!id.includes("routes/") || !id.endsWith(".svelte")) {
					return;
				}

				return parser.parse(code, id);
			},
		},
	};
}
