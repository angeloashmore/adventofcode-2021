import { ExecutionContext } from "ava";
import * as fs from "fs";
import * as path from "path";

export const testMacro = <T, F extends (input: string) => T>(
	t: ExecutionContext,
	filename: string,
	fn: F,
	expected: T,
) => {
	const input = fs.readFileSync(path.resolve(__dirname, filename), "utf8");

	t.is(fn(input), expected);
};
