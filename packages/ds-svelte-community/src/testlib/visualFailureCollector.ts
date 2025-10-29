/**
 * Visual test failure collector
 * Tracks all visual test failures during a test run
 */

export interface VisualFailure {
	testName: string;
	diffPath: string;
	theme: "light" | "dark";
	timestamp: number;
}

class VisualFailureCollector {
	private failures: VisualFailure[] = [];
	private isCI = !!process.env.CI;
	private isVisualTestsEnabled = process.env.VISUAL_TESTS === "true";

	addFailure(testName: string, diffPath: string, theme: "light" | "dark") {
		if (!this.isVisualTestsEnabled) {
			return;
		}

		this.failures.push({
			testName,
			diffPath,
			theme,
			timestamp: Date.now(),
		});
	}

	getFailures(): VisualFailure[] {
		return [...this.failures];
	}

	hasFailures(): boolean {
		return this.failures.length > 0;
	}

	async report() {
		if (!this.hasFailures()) {
			return;
		}

		console.log("\n" + "=".repeat(80));
		console.log("⚠️  VISUAL TEST FAILURES");
		console.log("=".repeat(80));
		console.log(`\nFound ${this.failures.length} visual difference(s):\n`);

		for (const failure of this.failures) {
			console.log(`❌ ${failure.testName} (${failure.theme} theme)`);
			console.log(`   Diff: ${failure.diffPath}\n`);
		}

		// In CI, also write to a JSON file for the reporter script
		if (this.isCI) {
			const jsonPath = "/tmp/visual-test-failures.json";
			try {
				await Bun.write(jsonPath, JSON.stringify(this.failures, null, 2));
				console.log(`📄 Failure details written to: ${jsonPath}\n`);
			} catch (error) {
				console.error("Failed to write JSON report:", error);
			}
		}

		console.log("=".repeat(80) + "\n");
	}

	clear() {
		this.failures = [];
	}
}

export const visualFailureCollector = new VisualFailureCollector();
