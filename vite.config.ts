// @ts-check - Use tsconfig.config.json for this file
/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config';
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
    },
    {
        find: 'fundamental-styles/storybook',
        replacement: resolve(__dirname, 'packages/storybook/src/index.ts')
    },
    {
        find: 'fundamental-styles/storybook/current-package',
        replacement: resolve(__dirname, 'packages/storybook/src/lib/addons/current-package')
    },
    {
        find: 'fundamental-styles/configuration',
        replacement: resolve(__dirname, 'packages/configuration/src/index.ts')
    },
    {
        find: 'fundamental-styles/doc-ui',
        replacement: resolve(__dirname, 'packages/doc-ui/src/index.ts')
    },
    {
        find: 'fundamental-styles/utils',
        replacement: resolve(__dirname, 'packages/utils/src/index.ts')
    },
    {
        find: '@fundamental-styles/cx',
        replacement: resolve(__dirname, 'packages/cx')
    },
    {
        find: 'workspace-plugins',
        replacement: resolve(__dirname, 'packages/workspace-plugins/src/index.ts')
    }
];

export default defineConfig({
    plugins: [react()],
    resolve: {
        tsconfigPaths: true,
        alias: [
            ...packagesAliases
        ]
    },
    css: {},
    build: {
        target: 'es2022',
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
