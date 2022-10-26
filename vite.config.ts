import {UserConfig} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths'

import {resolve, join} from "path";

const packagesAliases = [
    {
        find: /^styles/,
        replacement: resolve(__dirname, 'packages/styles')
    },
    {
        find: /^common-css/,
        replacement: resolve(__dirname, 'packages/common-css')
    },
    {
        find: /^fn/,
        replacement: resolve(__dirname, 'packages/fn')
    },
    {
        find: /^icons/,
        replacement: resolve(__dirname, 'packages/icons')
    },
    {
        find: /^theming-base-content/,
        replacement: resolve(__dirname, 'node_modules/@sap-theming/theming-base-content')
    }
];

export default {
    plugins: [tsconfigPaths()],
    resolve: {
        alias: [
            ...packagesAliases
        ]
    },
    css: {},
    build: {
        target: 'es2015',
        minify: 'terser',
        reportCompressedSize: true,
        sourcemap: false
        // rollupOptions: {
        //     output: {
        //         manualChunks
        //     }
        // }
    },
    test: {
        environment: 'jsdom',
        setupFiles: [resolve(join(__dirname, 'vitest.setup.ts'))]
    },
} as UserConfig;
