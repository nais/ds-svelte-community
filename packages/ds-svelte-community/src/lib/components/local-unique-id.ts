// Copied from https://github.com/rozek/locally-unique-id-generator (MIT License)

let IdCounter = 0; // hidden in the closure of "nextId"

function nextId(): number {
	// a really unique incrementor function
	return ++IdCounter;
}

/**** make global.nextId a real singleton ****/
// eslint-disable-next-line no-var
var global = /*#__PURE__*/ Function("return this")();
// see https://stackoverflow.com/questions/3277182/how-to-get-the-global-object-in-javascript

if (typeof global.__nextId !== "function") {
	global.__nextId = nextId;
}

/**** newUniqueId - the actually exported function ****/

function newUniqueId(): string {
	return "uid-" + global.__nextId();
}

export default newUniqueId;
