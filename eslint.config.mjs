import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import js from '@eslint/js';
import globals from 'globals';
import nx from '@nx/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsoncEslintParser from 'jsonc-eslint-parser';

const compat = new FlatCompat({
    baseDirectory: dirname(fileURLToPath(import.meta.url)),
    recommendedConfig: js.configs.recommended
});

export default [
    {
        ignores: [
            '.nx/**',
            '.storybook/static/**',
            'dist/**',
            'storybook-chromatic/**',
            'storybook-static/**',
            'stories/Visuals/**'
        ]
    },
    js.configs.recommended,
    ...compat.extends('plugin:storybook/recommended'),
    {
        languageOptions: {
            globals: { ...globals.node, ...globals.browser, ...globals.es2015, ...globals.jest }
        }
    },
    ...nx.configs['flat/typescript'],
    {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            'no-extra-semi': 'error'
        }
    },
    ...nx.configs['flat/javascript'],
    {
        files: ['**/*.js', '**/*.jsx'],
        rules: {
            'no-extra-semi': 'error'
        }
    },
    {
        files: ['**/*.json'],
        // Override or add rules here
        rules: {},
        languageOptions: {
            parser: jsoncEslintParser
        }
    },
    eslintConfigPrettier
];
