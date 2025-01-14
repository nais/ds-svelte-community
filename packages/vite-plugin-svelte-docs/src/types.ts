export type DocUnknown = {
	type: "unknown";
};

export type DocSimpleType = {
	type: "string" | "number" | "boolean" | "undefined" | "null";
};

export type DocUnion = {
	type: "union";
	values: DocType[];
};

export type DocArray = {
	type: "array";
	of: DocType;
};

export type DocLiteral = {
	type: "literal";
	value: string;
};

export type DocPObject = {
	type: "object";
	properties: DocProp[];
};

export type DocPFunction = {
	type: "function";
	signature: string;
};

export type DocPComponent = {
	type: "component";
};

export type DocSnippet = {
	type: "snippet";
	lets: DocSlotLet[];
};

export type DocInterface = {
	type: "interface";
	name: string;
	members?: DocProp[];
	inherits?: DocType;
	external?: boolean;
	typeArguments?: DocTypeParameter[];
};

export type DocTypeParameter = {
	type: "typeParameter";
	name: string;
	constraint?: DocType;
};

export type DocType =
	| DocUnion
	| DocUnknown
	| DocType[]
	| DocLiteral
	| DocPObject
	| DocPFunction
	| DocSnippet
	| DocSimpleType
	| DocInterface
	| DocTypeParameter
	| DocArray
	| DocPComponent;

export type DocSlotLet = {
	name: string;
	type: DocType;
};

export type DocSlots = {
	name: string;
	description?: string;
	lets: DocSlotLet[];
	snippet?: boolean;
	optional: boolean;
};

export type DocProp = {
	name: string;
	description?: string;
	type: DocType;
	optional: boolean;
	default?: string;
	bindable?: boolean;
	inherited?: boolean;
};

export type DocSvelteEvent = {
	name: string;
	description?: string;
	type?: DocType;
	optional: boolean;
};

export type Doc = {
	name: string;
	description: string;
	events: DocSvelteEvent[];
	slots: DocSlots[];
	props: DocProp[];
	externalExtends: string[];
	experimental?: boolean;
};
