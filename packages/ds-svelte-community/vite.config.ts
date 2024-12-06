import docProcess from "@nais/vite-plugin-svelte-docs";
import { sveltekit } from "@sveltejs/kit/vite";
import path from "path";
import { defineConfig } from "vite";
import storyProcess from "./src/doclib/preprocessor";

export default defineConfig({
	plugins: [
		storyProcess(),
		sveltekit() as never, // Unsure why this is necessary
		docProcess(path.resolve("..", "..", "node_modules", "svelte2tsx", "index.js")) as never,
	],
	define: {
		__version__: JSON.stringify(process.env.npm_package_version),
	},
});
