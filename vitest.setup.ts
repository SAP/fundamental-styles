/* eslint-disable @typescript-eslint/no-empty-interface,@typescript-eslint/no-empty-object-type,@typescript-eslint/no-explicit-any,@typescript-eslint/no-unused-vars, @typescript-eslint/no-namespace */
import * as matchers from 'vitest-axe/matchers';
import { expect } from 'vitest';
import { resolve } from 'path';
import type { AxeMatchers } from 'vitest-axe';

expect.extend(matchers);

// MCP catalog and schema files are release-generated and intentionally ignored.
// Point tests at a committed, minimal fixture so `yarn test` remains hermetic.
process.env.FUNDAMENTAL_STYLES_MCP_DATA_DIR = resolve(process.cwd(), 'packages/mcp/tests/fixtures/data');

declare global {
    namespace Vi {
        interface Assertion<T = any> extends AxeMatchers {}

        interface AsymmetricMatchersContaining extends AxeMatchers {}
    }
}
