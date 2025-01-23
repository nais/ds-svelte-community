/*eslint no-unused-private-class-members: "error"*/

import path from "path";
import { Project, ts } from "ts-morph";

import { DocGenerator } from "./doc_generator.js";
import { convert } from "./svelte.js";
import type { Doc } from "./types.js";

export class Generator {
	#project?: Project;
	#svelte2tsxPath: string;

	constructor(svelte2tsxPath: string) {
		this.#svelte2tsxPath = svelte2tsxPath;
	}

	setup() {
		this.#project = new Project({
			compilerOptions: {
				lib: ["esnext"],
				noEmit: true,
				allowJs: true,
			},
		});

		const svelteTsxFiles = ["./svelte-shims-v4.d.ts", "./svelte-jsx-v4.d.ts"].map((f) =>
			ts.sys.resolvePath(path.resolve(path.dirname(this.#svelte2tsxPath), f)),
		);

		this.#project.addSourceFilesAtPaths(svelteTsxFiles);
	}

	#renameFile(filename: string) {
		// replace .svelte with .ts to allow the file to be used in the project
		return filename.replace(/\.svelte$/, ".ts");
	}

	addSvelteFile(filename: string, code: string) {
		filename = this.#renameFile(filename);

		const dts = convert(filename, code);

		// console.log("-----------------");
		// console.log(dts);
		// console.log("-----------------");

		this.#project!.createSourceFile(filename, dts, { overwrite: true });
	}

	remove(id: string) {
		const sf = this.#project?.getSourceFile(id);
		if (sf) {
			this.#project?.removeSourceFile(sf);
		}
	}
	refresh(id: string) {
		const sf = this.#project?.getSourceFile(id);
		if (sf) {
			sf.refreshFromFileSystemSync();
		}
	}

	docFor(filename: string, debug = false): { doc: Doc; files: string[] } {
		filename = this.#renameFile(filename);

		const gen = new DocGenerator(this.#project!);
		return gen.run(filename, debug);
	}
}
