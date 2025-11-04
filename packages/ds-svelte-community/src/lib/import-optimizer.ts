import fs from "fs";
import path from "path";
import type { Plugin } from "vite";

interface BarrelExport {
	name: string;
	path: string;
}

/**
 * Vite plugin that transforms barrel file imports into direct imports
 * to avoid the performance issue where Vite loads the barrel file hundreds of times.
 *
 * Supports:
 * - Icons: import { IconA, IconB } from "@nais/ds-svelte-community/icons"
 * - Components: import { Button, Alert } from "@nais/ds-svelte-community"
 *
 * Transforms into direct imports:
 *   import IconA from "@nais/ds-svelte-community/icons/IconA.svelte";
 *   import Button from "@nais/ds-svelte-community/components/Button/Button.svelte";
 */
export function importOptimizer(options?: { rootDir?: string }): Plugin {
	const rootDir = options?.rootDir || process.cwd();
	let iconLookup: Map<string, string> | null = null;
	let componentLookup: Map<string, string> | null = null;
	let isProduction = false;

	// Parse a barrel file and extract exports
	function parseBarrelFile(filePath: string, srcDir: string): BarrelExport[] {
		const content = fs.readFileSync(filePath, "utf-8");
		const exports: BarrelExport[] = [];

		// Match: export { default as Name } from "./path/to/Name.svelte";
		const defaultExportRegex =
			/export\s+\{\s*default\s+as\s+(\w+)\s*\}\s+from\s+['"](\.\/[^'"]+)['"]/g;
		let match;
		while ((match = defaultExportRegex.exec(content)) !== null) {
			const [, name, relativePath] = match;
			// Resolve the full path from the barrel file location
			const baseDir = path.dirname(filePath);
			const fullPath = path.resolve(baseDir, relativePath);
			// Convert back to relative from srcDir
			const relativeFromSrc = "./" + path.relative(srcDir, fullPath);
			exports.push({ name, path: relativeFromSrc });
		}

		// Match: export * from "./path";
		const starExportRegex = /export\s+\*\s+from\s+['"](\.\/[^'"]+)['"]/g;
		while ((match = starExportRegex.exec(content)) !== null) {
			const [, relativePath] = match;
			const baseDir = path.dirname(filePath);
			const resolvedPath = path.resolve(baseDir, relativePath);

			// Try to find the actual file
			let subBarrelFile: string | null = null;

			// Check if it's a direct file
			if (fs.existsSync(resolvedPath) && fs.statSync(resolvedPath).isFile()) {
				subBarrelFile = resolvedPath;
			}
			// Try with .ts extension
			else if (fs.existsSync(resolvedPath + ".ts") && fs.statSync(resolvedPath + ".ts").isFile()) {
				subBarrelFile = resolvedPath + ".ts";
			}
			// Try as directory with index.ts
			else if (fs.existsSync(path.join(resolvedPath, "index.ts"))) {
				const indexPath = path.join(resolvedPath, "index.ts");
				if (fs.statSync(indexPath).isFile()) {
					subBarrelFile = indexPath;
				}
			}

			if (subBarrelFile) {
				exports.push(...parseBarrelFile(subBarrelFile, srcDir));
			}
		}

		return exports;
	}

	// Build lookup tables for icons and components
	function buildLookupTables() {
		const srcDir = path.resolve(rootDir, "src/lib");

		// Build icon lookup
		const iconsBarrel = path.resolve(srcDir, "icons/index.ts");
		if (fs.existsSync(iconsBarrel)) {
			const iconExports = parseBarrelFile(iconsBarrel, srcDir);
			iconLookup = new Map(iconExports.map((e) => [e.name, e.path]));
		}

		// Build component lookup
		const componentsBarrel = path.resolve(srcDir, "index.ts");
		if (fs.existsSync(componentsBarrel)) {
			const componentExports = parseBarrelFile(componentsBarrel, srcDir);
			componentLookup = new Map(componentExports.map((e) => [e.name, e.path]));
		}
	}

	return {
		name: "import-optimizer",
		enforce: "pre",

		configResolved(config) {
			isProduction = config.command === "build";
		},

		buildStart() {
			// Build lookup tables once at start (production) or on-demand (dev)
			if (isProduction) {
				buildLookupTables();
			}
		},

		transform(code, id) {
			// Only process .svelte and .ts files
			if (!id.endsWith(".svelte") && !id.endsWith(".ts") && !id.endsWith(".tsx")) {
				return null;
			}

			// Skip barrel files themselves
			if (id.endsWith("/icons/index.ts") || id.endsWith("/lib/index.ts")) {
				return null;
			}

			// Build lookup tables on-demand in dev mode
			if (!isProduction && (!iconLookup || !componentLookup)) {
				buildLookupTables();
			}

			let transformed = code;
			let hasChanges = false;

			// Match imports from package or $lib aliases (but skip type-only imports)
			const importRegex =
				/import\s+(type\s+)?\{\s*([^}]+)\s*\}\s+from\s+['"]((@nais\/ds-svelte-community)(\/icons)?|\$lib(\/icons)?)['"]/g;

			transformed = transformed.replace(importRegex, (match, typeOnly, imports, fromPath) => {
				// Skip type-only imports
				if (typeOnly) {
					return match;
				}

				const isIconImport = fromPath.includes("/icons");
				const isPackageImport = fromPath.startsWith("@nais/ds-svelte-community");
				const lookup = isIconImport ? iconLookup : componentLookup;

				if (!lookup) {
					return match;
				}

				hasChanges = true;

				// Parse the imported names
				const importNames = imports
					.split(",")
					.map((name: string) => name.trim())
					.filter(Boolean);

				// Separate type imports from value imports
				const typeImports: string[] = [];
				const valueImports: Array<{ spec: string; name: string; alias: string }> = [];

				importNames.forEach((importSpec: string) => {
					// Check if this is a type import
					if (importSpec.startsWith("type ")) {
						// Remove the "type " prefix since we'll use "import type { ... }"
						typeImports.push(importSpec.replace(/^type\s+/, ""));
						return;
					}

					// Handle "Name as Alias" syntax
					let name: string, alias: string;
					if (importSpec.includes(" as ")) {
						[name, alias] = importSpec.split(" as ").map((s) => s.trim());
					} else {
						name = alias = importSpec;
					}

					// Look up the actual file path
					const relativePath = lookup.get(name);
					if (!relativePath) {
						// If not found in lookup, it might be a type - treat as type import
						typeImports.push(importSpec);
						return;
					}

					valueImports.push({ spec: importSpec, name, alias });
				});

				// If there are no value imports, keep the original import
				if (valueImports.length === 0) {
					return match;
				}

				// Generate direct imports for value imports
				const directImports = valueImports
					.map(({ name, alias }) => {
						const relativePath = lookup.get(name)!;

						// Convert relative path to proper import path
						let importPath: string;
						if (isPackageImport) {
							// For package imports, use the published structure
							const fileName = path.basename(relativePath);
							if (isIconImport) {
								importPath = `@nais/ds-svelte-community/icons/${fileName}`;
							} else {
								importPath = `@nais/ds-svelte-community/${fileName}`;
							}
						} else {
							// For $lib imports, convert to direct $lib path
							if (isIconImport) {
								importPath = `$lib/icons/${path.basename(relativePath)}`;
							} else {
								// For components, need to resolve the full path
								const resolvedPath = relativePath.replace(/^\.\//, "$lib/");
								importPath = resolvedPath;
							}
						}

						if (name === alias) {
							return `import ${name} from "${importPath}";`;
						} else {
							return `import ${alias} from "${importPath}";`;
						}
					})
					.join("\n");

				// If there were type imports, keep them in the original barrel import
				if (typeImports.length > 0) {
					const typeImportStatement = `import type { ${typeImports.join(", ")} } from "${fromPath}";`;
					return `${directImports}\n${typeImportStatement}`;
				}

				return directImports;
			});

			if (hasChanges) {
				return {
					code: transformed,
					map: null,
				};
			}

			return null;
		},
	};
}
