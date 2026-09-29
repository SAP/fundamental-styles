import baseConfig from '../../eslint.config.mjs';
import nx from '@nx/eslint-plugin';

export default [
    ...baseConfig,
    ...nx.configs['flat/react'],
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
        rules: {}
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {}
    },
    {
        files: ['**/*.js', '**/*.jsx'],
        rules: {}
    }
];
