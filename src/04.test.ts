import test from "ava";

import { one, two } from "./04";
import { testMacro } from "./testMacro";

test("one", testMacro, "04.txt", one, 12796);
test("two", testMacro, "04.txt", two, 18063);
