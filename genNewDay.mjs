import * as fs from "node:fs";

const args = process.argv.slice(2);
const day = args[0];

if (typeof day !== "string") {
	console.error("Error: provide a day");

	process.exit();
}

fs.writeFileSync(
	`./src/${day}.ts`,
	`
export function one(input: string): number {
        return Infinity
}

export function two(input: string): number {
        return Infinity
}
`.trim(),
);

fs.writeFileSync(
	`./src/${day}.test.ts`,
	`
import test from "ava";

import { one, two } from "./${day}";
import { testMacro } from "./testMacro";

test("one", testMacro, "${day}.txt", one, -Infinity);
test("two", testMacro, "${day}.txt", two, -Infinity);
`.trim(),
);

fs.writeFileSync(`./src/${day}.txt`, "");

console.log(`TODO: Add the day's input to ./src/${day}.txt`);
