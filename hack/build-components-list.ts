import fs from "fs";
import path from "path";
import { parse, walk } from "svelte/compiler";
import { totalist } from "totalist";

type ExportName = string;

interface BuildComponentsApi {
	path: string;
}
export interface BuildComponents {
	components: Record<ExportName, BuildComponentsApi>;
	icons: Record<ExportName, BuildComponentsApi>;
}

function parseNested(filepath: string): Set<string> {
	const indexJs = fs.readFileSync(path.join(filepath, "index.ts"), "utf-8");
	const ast = parse(`<script>${indexJs}</script>`);
	const exports = new Set<string>();

	walk(ast as never, {
		enter(node: { type?: string; name?: string; source?: { value?: string } }) {
			if (node.type === "Identifier" && node.name) {
				exports.add(node.name);
			} else if (node.type === "ExportAllDeclaration" && node.source?.value) {
				parseNested(path.join(filepath, node.source.value)).forEach((exportName) => {
					exports.add(exportName);
				});
			}
		},
	});

	return exports;
}

async function componentsFor(start: string): Promise<Record<ExportName, BuildComponentsApi>> {
	const exports = new Set();

	parseNested(start).forEach((exportName) => {
		exports.add(exportName);
	});

	const moduleNames = new Map<ExportName, BuildComponentsApi>();

	await totalist(start, (file) => {
		const moduleName = path.parse(file).name;

		if (exports.has(moduleName)) {
			const path = file;
			moduleNames.set(moduleName, { path });
		}
	});

	return new Object(
		[...moduleNames.entries()].sort().map(([moduleName, value]) => {
			[moduleName, value];
		}),
	);
}

(async () => {
	const components: BuildComponents = {
		components: await componentsFor("./src/lib"),
		icons: await componentsFor("./src/lib/icons"),
	};

	console.log(components);

	// await writeFile(
	// 	API_COMPONENTS,
	// 	`export const components = ${JSON.stringify(components, null, 2)}`,
	// );
})();
