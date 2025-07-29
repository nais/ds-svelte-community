import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
	const paths: Record<string, [string, boolean][]> = {
		pages: [["", false]],
	};

	// _page.svelte.js, _page.svx.js is when building for production
	const pagesGlob = new Bun.Glob("*/{+page.svx,+page.svelte,_page.svelte.js,_page.svx.js}");
	const pagesList = pagesGlob.scan(import.meta.dirname);

	for await (const path of pagesList) {
		const [file] = path.split("/");

		if (file.startsWith("[")) {
			continue;
		}

		paths["pages"].push([file, false]);
	}

	// Check for +page in dev, and _page.svelte.js when building for production
	const glob = new Bun.Glob("*/*/{+page.svelte,_page.svelte.js}");
	const list = glob.scan(import.meta.dirname);

	for await (const path of list) {
		const [key, file] = path.split("/");

		if (file.startsWith("[")) {
			continue;
		}

		if (!Object.keys(paths).includes(key)) {
			paths[key] = [];
		}

		const source = await Bun.file(import.meta.dirname + "/" + path).text();
		const experimental = source.includes("const experimental = true;");

		paths[key].push([file, experimental]);
	}

	for (const key in paths) {
		paths[key].sort();
	}

	return {
		paths,
	};
};

export const prerender = true;
export const trailingSlash = "always";
