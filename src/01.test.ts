import test from "ava";

import { one, two } from "./01";
import { testMacro } from "./testMacro";

test("one", testMacro, "01.txt", one, 1121);
test("two", testMacro, "01.txt", two, 1065);
