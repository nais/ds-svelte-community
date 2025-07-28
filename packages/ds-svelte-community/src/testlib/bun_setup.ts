import { plugin, type OnLoadCallback } from "bun";
import "global-jsdom/register";
import rop from "resize-observer-polyfill";
import { transformWithEsbuild } from "vite";

// Add polyfill for ResizeObserver
global.ResizeObserver = rop;

await plugin({
	name: "svelte loader",
	async setup(builder) {
		const { compile, compileModule } = await import("svelte/compiler");
		const { readFileSync } = await import("fs");

		const renderSvelte: OnLoadCallback = async ({ path }) => {
			const before = readFileSync(path, "utf8");
			try {
				return {
					// Use the preprocessor of your choice.
					contents: compile(before, {
						generate: "server",
						filename: path,
						runes: true,
						warningFilter: () => {
							return true;
						},
					}).js.code,
					loader: "js",
				};
			} catch (e) {
				console.log("Error in svelte loader", path);
				throw e;
			}
		};

		const renderSvelteTS: OnLoadCallback = async ({ path }) => {
			let contents: string;
			// We need to strip out typescript types from .svelte.ts files
			const { code } = await transformWithEsbuild(readFileSync(path, "utf8"), path, {
				loader: "ts",
				target: "esnext",
				tsconfigRaw: {
					compilerOptions: {
						// svelte typescript needs this flag to work with type imports
						importsNotUsedAsValues: "preserve",
						preserveValueImports: true,
					},
				},
			});

			const content = code;
			try {
				contents = compileModule(content, {
					filename: path,
					generate: "server",
				}).js.code;
			} catch (e) {
				console.log("Error in svelte ts loader", path);
				// console.log(content);
				throw e;
			}
			return {
				contents,
				loader: "js",
			};
		};

		builder.onLoad({ filter: /\.svelte$/ }, renderSvelte);
		builder.onLoad({ filter: /\.svelte.js$/ }, renderSvelteTS);
		builder.onLoad({ filter: /\.svelte.ts$/ }, renderSvelteTS);
	},
});
