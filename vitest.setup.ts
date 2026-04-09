/* eslint-disable @typescript-eslint/no-empty-interface,@typescript-eslint/no-explicit-any,@typescript-eslint/no-unused-vars, @typescript-eslint/no-namespace */
import * as matchers from "vitest-axe/matchers";
import {expect} from "vitest";
import {A as AxeMatchers} from "vitest-axe/dist/to-have-no-violations-e1679411";

expect.extend(matchers);

declare global {
    namespace Vi {
        interface Assertion<T = any> extends AxeMatchers {
        }

        interface AsymmetricMatchersContaining extends AxeMatchers {
        }
    }
}
