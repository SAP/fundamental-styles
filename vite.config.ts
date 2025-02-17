import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

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
        find: /^theming-base-content/,
        replacement: resolve(__dirname, 'node_modules/@sap-theming/theming-base-content')
    }
];

export default defineConfig({
    plugins: [tsconfigPaths({
        root: __dirname,
    }), react()],
    resolve: {
        alias: [
            ...packagesAliases
        ]
    },
    css: {},
    build: {
        target: 'es2020',
        minify: 'terser',
        reportCompressedSize: true,
        sourcemap: false
    },
    assetsInclude: [
        '**/*.md'
    ],
    test: {
        environment: 'jsdom',
        setupFiles: [resolve(join(__dirname, 'vitest.setup.ts'))]
    },
});
