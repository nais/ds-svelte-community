import docProcess from "@nais/vite-plugin-svelte-docs";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { defineConfig } from "vite";
import storyProcess from "./src/doclib/preprocessor";
import { importOptimizer } from "./src/lib/import-optimizer";

export default defineConfig({
	plugins: [
		importOptimizer({ rootDir: __dirname }),
		tailwindcss(),
		storyProcess(),
		sveltekit(),
		docProcess(path.resolve("..", "..", "node_modules", "svelte2tsx", "index.js")) as never,
	],
	define: {
		__version__: JSON.stringify(process.env.npm_package_version),
	},
});
