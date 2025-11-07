import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import fs from "fs";
import path from "path";
import { importOptimizer } from "../lib/import-optimizer";

// Create a temporary test directory structure
const testDir = path.join(import.meta.dir, ".test-barrel-optimizer");
const srcDir = path.join(testDir, "src/lib");

function setupTestDir() {
	// Clean up if exists
	if (fs.existsSync(testDir)) {
		fs.rmSync(testDir, { recursive: true });
	}

	// Create directory structure
	fs.mkdirSync(path.join(srcDir, "icons"), { recursive: true });
	fs.mkdirSync(path.join(srcDir, "components/Button"), { recursive: true });
	fs.mkdirSync(path.join(srcDir, "components/Alert"), { recursive: true });
	fs.mkdirSync(path.join(srcDir, "components/primitives/Box"), { recursive: true });
	fs.mkdirSync(path.join(srcDir, "components/primitives/Page"), { recursive: true });

	// Create icon barrel file
	fs.writeFileSync(
		path.join(srcDir, "icons/index.ts"),
		`export { default as ChevronDownIcon } from "./ChevronDownIcon.svelte";
export { default as CloseIcon } from "./CloseIcon.svelte";`,
	);

	// Create icon files (empty)
	fs.writeFileSync(path.join(srcDir, "icons/ChevronDownIcon.svelte"), "");
	fs.writeFileSync(path.join(srcDir, "icons/CloseIcon.svelte"), "");

	// Create component barrel files
	fs.writeFileSync(
		path.join(srcDir, "components/primitives/index.ts"),
		`export { default as Box } from "./Box/Box.svelte";
export { default as Page } from "./Page/Page.svelte";`,
	);

	fs.writeFileSync(
		path.join(srcDir, "index.ts"),
		`export { default as Button } from "./components/Button/Button.svelte";
export { default as Alert } from "./components/Alert/Alert.svelte";
export * from "./components/primitives";`,
	);

	// Create component files (empty)
	fs.writeFileSync(path.join(srcDir, "components/Button/Button.svelte"), "");
	fs.writeFileSync(path.join(srcDir, "components/Alert/Alert.svelte"), "");
	fs.writeFileSync(path.join(srcDir, "components/primitives/Box/Box.svelte"), "");
	fs.writeFileSync(path.join(srcDir, "components/primitives/Page/Page.svelte"), "");
}

function cleanupTestDir() {
	if (fs.existsSync(testDir)) {
		fs.rmSync(testDir, { recursive: true });
	}
}

describe("importOptimizer", () => {
	beforeEach(() => {
		setupTestDir();
	});

	afterEach(() => {
		cleanupTestDir();
	});

	test("transforms $lib icon imports to direct imports", () => {
		const plugin = importOptimizer({ rootDir: testDir });
		const code = `import { ChevronDownIcon, CloseIcon } from "$lib/icons";`;

		// @ts-expect-error - transform exists on plugin
		const result = plugin.transform(code, "/test/file.svelte");

		expect(result).not.toBeNull();
		expect(result?.code).toContain(
			'import ChevronDownIcon from "$lib/icons/ChevronDownIcon.svelte";',
		);
		expect(result?.code).toContain('import CloseIcon from "$lib/icons/CloseIcon.svelte";');
		expect(result?.code).not.toContain('from "$lib/icons"');
	});

	test("transforms $lib component imports to direct imports", () => {
		const plugin = importOptimizer({ rootDir: testDir });
		const code = `import { Button, Alert } from "$lib";`;

		// @ts-expect-error - transform exists on plugin
		const result = plugin.transform(code, "/test/file.svelte");

		expect(result).not.toBeNull();
		expect(result?.code).toContain('import Button from "$lib/components/Button/Button.svelte";');
		expect(result?.code).toContain('import Alert from "$lib/components/Alert/Alert.svelte";');
		expect(result?.code).not.toContain('from "$lib"');
	});

	test("transforms re-exported components from barrel files", () => {
		const plugin = importOptimizer({ rootDir: testDir });
		const code = `import { Box, Page } from "$lib";`;

		// @ts-expect-error - transform exists on plugin
		const result = plugin.transform(code, "/test/file.svelte");

		expect(result).not.toBeNull();
		expect(result?.code).toContain('import Box from "$lib/components/primitives/Box/Box.svelte";');
		expect(result?.code).toContain(
			'import Page from "$lib/components/primitives/Page/Page.svelte";',
		);
		expect(result?.code).not.toContain('from "$lib"');
	});

	test("handles 'as' aliases in imports", () => {
		const plugin = importOptimizer({ rootDir: testDir });
		const code = `import { ChevronDownIcon as ChevronIcon } from "$lib/icons";`;

		// @ts-expect-error - transform exists on plugin
		const result = plugin.transform(code, "/test/file.svelte");

		expect(result).not.toBeNull();
		expect(result?.code).toContain('import ChevronIcon from "$lib/icons/ChevronDownIcon.svelte";');
	});

	test("skips type-only imports entirely", () => {
		const plugin = importOptimizer({ rootDir: testDir });
		const code = `import type { TableSortState, SomeType } from "$lib";`;

		// @ts-expect-error - transform exists on plugin
		const result = plugin.transform(code, "/test/file.svelte");

		// Should not transform type-only imports
		expect(result).toBeNull();
	});

	test("separates type imports from value imports in mixed imports", () => {
		const plugin = importOptimizer({ rootDir: testDir });
		const code = `import { Button, type TableSortState, Alert } from "$lib";`;

		// @ts-expect-error - transform exists on plugin
		const result = plugin.transform(code, "/test/file.svelte");

		expect(result).not.toBeNull();
		// Should have direct imports for components
		expect(result?.code).toContain('import Button from "$lib/components/Button/Button.svelte";');
		expect(result?.code).toContain('import Alert from "$lib/components/Alert/Alert.svelte";');
		// Should keep type import in barrel
		expect(result?.code).toContain('import type { TableSortState } from "$lib";');
		// Should not have duplicate "type type"
		expect(result?.code).not.toContain("type type");
	});

	test("treats unknown imports as types when not found in lookup", () => {
		const plugin = importOptimizer({ rootDir: testDir });
		const code = `import { Button, UnknownThing } from "$lib";`;

		// @ts-expect-error - transform exists on plugin
		const result = plugin.transform(code, "/test/file.svelte");

		expect(result).not.toBeNull();
		// Should transform Button
		expect(result?.code).toContain('import Button from "$lib/components/Button/Button.svelte";');
		// Should keep UnknownThing as type import
		expect(result?.code).toContain('import type { UnknownThing } from "$lib";');
	});

	test("returns original import if all imports are types", () => {
		const plugin = importOptimizer({ rootDir: testDir });
		const code = `import { type TypeA, type TypeB, UnknownType } from "$lib";`;

		// @ts-expect-error - transform exists on plugin
		const result = plugin.transform(code, "/test/file.svelte");

		// Should keep original since no value imports found (UnknownType treated as type)
		// The plugin returns non-null but with the original code unchanged
		expect(result).not.toBeNull();
		expect(result?.code).toBe(code);
	});

	test("handles package imports from @nais/ds-svelte-community", () => {
		const plugin = importOptimizer({ rootDir: testDir });
		const code = `import { Button, Alert } from "@nais/ds-svelte-community";`;

		// @ts-expect-error - transform exists on plugin
		const result = plugin.transform(code, "/test/file.svelte");

		expect(result).not.toBeNull();
		expect(result?.code).toContain('import Button from "@nais/ds-svelte-community/Button.svelte";');
		expect(result?.code).toContain('import Alert from "@nais/ds-svelte-community/Alert.svelte";');
	});

	test("handles package icon imports from @nais/ds-svelte-community/icons", () => {
		const plugin = importOptimizer({ rootDir: testDir });
		const code = `import { ChevronDownIcon } from "@nais/ds-svelte-community/icons";`;

		// @ts-expect-error - transform exists on plugin
		const result = plugin.transform(code, "/test/file.svelte");

		expect(result).not.toBeNull();
		expect(result?.code).toContain(
			'import ChevronDownIcon from "@nais/ds-svelte-community/icons/ChevronDownIcon.svelte";',
		);
	});

	test("skips barrel files themselves", () => {
		const plugin = importOptimizer({ rootDir: testDir });
		const code = `export { default as Button } from "./Button.svelte";`;

		// Test with barrel file paths
		// @ts-expect-error - transform exists on plugin
		const result1 = plugin.transform(code, path.join(srcDir, "icons/index.ts"));
		expect(result1).toBeNull();

		// @ts-expect-error - transform exists on plugin
		const result2 = plugin.transform(code, path.join(srcDir, "index.ts"));
		expect(result2).toBeNull();
	});

	test("skips non-svelte/ts files", () => {
		const plugin = importOptimizer({ rootDir: testDir });
		const code = `import { Button } from "$lib";`;

		// @ts-expect-error - transform exists on plugin
		const result1 = plugin.transform(code, "/test/file.css");
		expect(result1).toBeNull();

		// @ts-expect-error - transform exists on plugin
		const result2 = plugin.transform(code, "/test/file.json");
		expect(result2).toBeNull();
	});

	test("handles complex mixed imports with multiple types and values", () => {
		const plugin = importOptimizer({ rootDir: testDir });
		const code = `import { Button, type TypeA, Alert, type TypeB, Box } from "$lib";`;

		// @ts-expect-error - transform exists on plugin
		const result = plugin.transform(code, "/test/file.svelte");

		expect(result).not.toBeNull();
		// Should have direct imports for all components
		expect(result?.code).toContain('import Button from "$lib/components/Button/Button.svelte";');
		expect(result?.code).toContain('import Alert from "$lib/components/Alert/Alert.svelte";');
		expect(result?.code).toContain('import Box from "$lib/components/primitives/Box/Box.svelte";');
		// Should have type import for types
		expect(result?.code).toContain('import type { TypeA, TypeB } from "$lib";');
		// Should not have duplicate "type type"
		expect(result?.code).not.toContain("type type");
	});

	test("preserves original formatting when no transformation needed", () => {
		const plugin = importOptimizer({ rootDir: testDir });
		const code = `import { something } from "other-package";`;

		// @ts-expect-error - transform exists on plugin
		const result = plugin.transform(code, "/test/file.svelte");

		// Should not transform non-barrel imports
		expect(result).toBeNull();
	});
});
