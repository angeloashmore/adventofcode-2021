import test from "ava";

import { one, two } from "./03";
import { testMacro } from "./testMacro";

test("one", testMacro, "03.txt", one, 4001724);
test("two", testMacro, "03.txt", two, 587895);
