#!/usr/bin/env bun
/**
 * Sync peerDependencies versions from devDependencies
 *
 * This script ensures that peerDependencies stay in sync with devDependencies
 * for packages that appear in both.
 *
 * Usage:
 *   bun run scripts/sync-peer-deps.ts        # Fix mode: updates package.json
 *   bun run scripts/sync-peer-deps.ts --check # Check mode: exits with error if out of sync
 */

const packagesToSync = ["@navikt/ds-css", "@navikt/ds-tokens"];

const checkMode = process.argv.includes("--check");

const packageJsonPath = new URL("../package.json", import.meta.url).pathname;
const pkg = await Bun.file(packageJsonPath).json();

const mismatches: Array<{ name: string; peer: string; dev: string }> = [];

for (const name of packagesToSync) {
	const devVersion = pkg.devDependencies[name]?.replace(/^\^/, "");
	const peerVersion = pkg.peerDependencies[name];

	if (!devVersion) {
		console.warn(`⚠ ${name} not found in devDependencies`);
		continue;
	}

	if (!peerVersion) {
		console.warn(`⚠ ${name} not found in peerDependencies`);
		continue;
	}

	if (peerVersion !== devVersion) {
		mismatches.push({ name, peer: peerVersion, dev: devVersion });
	}
}

if (mismatches.length === 0) {
	console.log("✓ peerDependencies are in sync with devDependencies");
	process.exit(0);
}

if (checkMode) {
	console.error("✗ peerDependencies are out of sync with devDependencies:\n");
	for (const { name, peer, dev } of mismatches) {
		console.error(`  ${name}:`);
		console.error(`    peerDependencies: ${peer}`);
		console.error(`    devDependencies:  ${dev}`);
		console.error();
	}
	console.error('Run "bun run sync-peer-deps" to fix this.');
	process.exit(1);
}

// Fix mode: update package.json
for (const { name, dev } of mismatches) {
	pkg.peerDependencies[name] = dev;
	console.log(`  Updated ${name}: ${pkg.peerDependencies[name]} → ${dev}`);
}

await Bun.write(packageJsonPath, JSON.stringify(pkg, null, "\t") + "\n");
console.log("\n✓ Synced peerDependencies from devDependencies");
