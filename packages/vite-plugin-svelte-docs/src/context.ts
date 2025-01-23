/*eslint no-unused-private-class-members: "error"*/

import type * as tsm from "ts-morph";
import { ts } from "ts-morph";

type ContextNode = {
	getKind(): ts.SyntaxKind;
	getText(): string;
};

export class Context {
	parent?: Context;
	node: ContextNode;
	debug: boolean;
	numParents = 0;

	constructor(node: ContextNode, parent?: Context, debug: boolean = false) {
		this.node = node;
		this.parent = parent;
		this.debug = !!(debug || (parent && parent.debug));
		this.numParents = parent ? parent.numParents + 1 : 0;
	}

	toString(): string {
		let pre = "";
		if (this.parent) {
			pre = this.parent.toString() + "\n";
		}
		pre += "  ".repeat(this.numParents);
		return pre + this.toStringWithoutParent();
	}

	toStringWithoutParent(): string {
		switch (this.node.getKind()) {
			case ts.SyntaxKind.SourceFile:
				return "SourceFile";
		}

		return this.node.getText() + " [[" + ts.SyntaxKind[this.node.getKind()] + "]]";
	}

	log(...args: unknown[]) {
		if (!this.debug) {
			return;
		}
		console.log(this.toString(), ...args);
	}

	time(label: string) {
		if (!this.debug) {
			return;
		}

		console.time(label);
	}

	timeEnd(label: string) {
		if (!this.debug) {
			return;
		}
		console.timeEnd(label);
	}

	hasChecked(node: tsm.Node): boolean {
		if (this.node === node) {
			return true;
		}
		if (!this.parent) {
			return false;
		}
		return this.parent.hasChecked(node);
	}
}
