import test from "ava";

import { one, two } from "./08";
import { testMacro } from "./testMacro";

test("one", testMacro, "08.txt", one, 349);
test("two", testMacro, "08.txt", two, -Infinity);

