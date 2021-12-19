import test from "ava";

import { one, two } from "./06";
import { testMacro } from "./testMacro";

test("one", testMacro, "06.txt", one, 363101);
test("two", testMacro, "06.txt", two, 1644286074024);
