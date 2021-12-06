import test from "ava";

import { one, two } from "./05";
import { testMacro } from "./testMacro";

test("one", testMacro, "05.txt", one, 5690);
test("two", testMacro, "05.txt", two, 17741);
