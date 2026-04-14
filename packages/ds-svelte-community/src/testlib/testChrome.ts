import svelteCSS from "$lib/css/index.css";
import reactCSS from "@navikt/ds-css";
import tailwindcss from "@tailwindcss/vite";
import looksSame from "looks-same";
import { mkdir, mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { build } from "vite";
import type { RenderOutput, RenderTheme } from "./render";

export const testPages = await mkdtemp(join(tmpdir(), "ds-svelte-test-"));
let testCase = 0;

let view: InstanceType<typeof Bun.WebView> | undefined = undefined;

export async function testInChrome(
	svelteComponent: RenderOutput,
	reactComponent: string,
	theme: RenderTheme,
	opts: looksSame.LooksSameOptions = {},
) {
	if (!view) {
		view = new Bun.WebView({
			headless: true,
			backend: "chrome",
			width: 800,
			height: 600,
		});
	}

	testCase++;
	const testDir = (await mkdir(join(testPages, (testCase++).toString()), {
		recursive: true,
	})) as string;

	const css = await cssMap();

	await Bun.file(join(testDir, "svelte.html")).write(htmlBody(css.svelte, svelteComponent, theme));
	await Bun.file(join(testDir, "react.html")).write(htmlBody(css.react, reactComponent, theme));

	await view.navigate(`file://${join(testDir, "svelte.html")}`);
	const svelteBlob = await view.screenshot({ format: "png" });
	const svelteBuffer = Buffer.from(await svelteBlob.arrayBuffer());

	await view.navigate(`file://${join(testDir, "react.html")}`);
	const reactBlob = await view.screenshot({ format: "png" });
	const reactBuffer = Buffer.from(await reactBlob.arrayBuffer());

	opts.createDiffImage = true;
	opts.strict = opts.strict ?? true;

	const { equal, diffImage } = await looksSame(
		svelteBuffer,
		reactBuffer,
		opts as looksSame.LooksSameOptions & { createDiffImage: true },
	);
	if (equal) {
		return true;
	}

	await diffImage.save(join(testDir, "diff.png"));

	return join(testDir, "diff.png");
}

let cache: { react: string; svelte: string } | undefined = undefined;
async function cssMap() {
	if (cache) {
		return cache;
	}

	const react = await compileCSS(reactCSS as string);
	const svelte = await compileCSS(svelteCSS as string);
	cache = { react, svelte };
	return cache;
}

async function compileCSS(file: string) {
	const out = await mkdtemp(join(tmpdir(), "ds-svelte-test-"));

	await build({
		configFile: false,
		build: {
			outDir: out,
			emptyOutDir: false,
			rollupOptions: {
				input: file,
				output: {
					entryFileNames: "[name].js",
					assetFileNames: "[name][extname]",
				},
			},
		},
		plugins: [tailwindcss() as never],
		publicDir: false,
	});

	return await Bun.file(join(out, "index.css")).text();
}

function htmlBody(css: string, content: string | RenderOutput, theme: RenderTheme) {
	if (typeof content === "object") {
		content = content.body;
	}

	return `<!DOCTYPE html>
<html lang="en">
<head>
		<meta charset="UTF-8">
		<title>Test</title>
		<style>${css}</style>
	</head>
	<body>
		<div class="aksel-theme ${theme}" data-background="true" data-color="accent" style="height: 100vh;">${content}</div>
	</body>
</html>`;
}

export async function closeDriver() {
	if (view) {
		console.log("Closing Bun WebView...");
		await view[Symbol.asyncDispose]();
		view = undefined;
	}
}
