/* eslint-disable @typescript-eslint/no-empty-interface,@typescript-eslint/no-explicit-any,@typescript-eslint/no-unused-vars */
import * as matchers from "vitest-axe/matchers";
import {expect} from "vitest";
import type {AxeMatchers} from "vitest-axe/matchers";

expect.extend(matchers);

declare module "vitest" {
    interface Assertion<T = any> extends AxeMatchers {
    }

    interface AsymmetricMatchersContaining extends AxeMatchers {
    }
}
