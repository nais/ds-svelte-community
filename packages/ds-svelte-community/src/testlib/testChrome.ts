import svelteCSS from "$lib/css/index.css";
import reactCSS from "@navikt/ds-css/darkside";
import tailwindcss from "@tailwindcss/vite";
import looksSame from "looks-same";
import { mkdir, mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { Browser, Builder, type WebDriver } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome";
import { build } from "vite";
import type { RenderOutput, RenderTheme } from "./render";

export const testPages = await mkdtemp(join(tmpdir(), "ds-svelte-test-"));
let testCase = 0;

let driver: WebDriver | undefined = undefined;

export async function testInChrome(
	svelteComponent: RenderOutput,
	reactComponent: string,
	theme: RenderTheme,
	opts: looksSame.LooksSameOptions = {},
) {
	if (!driver) {
		const builder = new Builder();
		const chromeOptions = new Options();
		chromeOptions.addArguments("--headless");
		builder.setChromeOptions(chromeOptions);
		driver = await builder.forBrowser(Browser.CHROME).build();
	}

	testCase++;
	const testDir = (await mkdir(join(testPages, (testCase++).toString()), {
		recursive: true,
	})) as string;

	const css = await cssMap();

	await Bun.file(join(testDir, "svelte.html")).write(htmlBody(css.svelte, svelteComponent, theme));
	await Bun.file(join(testDir, "react.html")).write(htmlBody(css.react, reactComponent, theme));

	await driver.get(`file://${join(testDir, "svelte.html")}`);
	const svelteScreenshot = await driver.takeScreenshot();

	await driver.get(`file://${join(testDir, "react.html")}`);
	const reactScreenshot = await driver.takeScreenshot();

	const svelteBuffer = Buffer.from(svelteScreenshot, "base64");
	const reactBuffer = Buffer.from(reactScreenshot, "base64");

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
			emptyOutDir: false, // We only want to clear the out directory on the first build event
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
	<body style="background: var(--ax-bg-default)">
		<div id="testWrapper" class="aksel-theme ${theme}" data-background="true">${content}</div>
	</body>
</html>`;
}

export async function closeDriver() {
	if (driver) {
		console.log("Closing Selenium WebDriver...");
		await driver.quit();
		driver = undefined;
	}
}
