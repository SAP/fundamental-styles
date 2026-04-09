/* eslint-disable @typescript-eslint/no-empty-interface,@typescript-eslint/no-explicit-any,@typescript-eslint/no-unused-vars, @typescript-eslint/no-namespace */
import * as matchers from "vitest-axe/matchers";
import {expect} from "vitest";

expect.extend(matchers);

declare module "vitest" {
    interface Assertion<T = any> {
        toHaveNoViolations(): void;
    }

    interface AsymmetricMatchersContaining {
        toHaveNoViolations(): void;
    }
}
