import test from "ava";

import { one, two } from "./07";
import { testMacro } from "./testMacro";

test("one", testMacro, "07.txt", one, 336721);
test("two", testMacro, "07.txt", two, 91638945);
