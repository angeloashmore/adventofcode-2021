import test from "ava";

import { one, two } from "./02";
import { testMacro } from "./testMacro";

test("one", testMacro, "02.txt", one, 1694130);
test("two", testMacro, "02.txt", two, 1698850445);
