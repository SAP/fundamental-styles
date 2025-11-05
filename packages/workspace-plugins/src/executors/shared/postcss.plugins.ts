import postcssCleaner from './postcss-cleaner';
import postcssRemoveFonts from './postcss-remove-fonts';
import path from 'path';
import { workspaceRoot } from '@nx/devkit';

const autoprefixer = require('autoprefixer');
const postcssBanner = require('postcss-banner');
const postcssNormalizeCharset = require('postcss-normalize-charset');
const postcssImport = require('postcss-import');
const packageVersion = require(path.resolve(workspaceRoot, 'lerna.json')).version;
const year = new Date().getFullYear();
const cssnano = require('cssnano');

export default (minify?: boolean) => [
    postcssImport(),
    autoprefixer({
        cascade: true
    }),
    postcssRemoveFonts(), // remove fonts from @sap-theming/theming-base-content
    postcssBanner({
        banner: `Fundamental Library Styles v${packageVersion}
Copyright (c) ${year} SAP SE or an SAP affiliate company.
Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/main/LICENSE)`,
        important: true
    }),
    postcssNormalizeCharset(),
    postcssCleaner({
        format: 'beautify',
        level: 2
    }),
    minify
        ? cssnano({
            preset: [
                'default',
                {
                    mergeLonghand: true, // https://github.com/cssnano/cssnano/issues/675
                    mergeRules: true, // https://github.com/cssnano/cssnano/issues/730
                    convertValues: true,
                    discardOverridden: true,
                    minifyGradients: true,
                    orderedValues: true,
                    cssDeclarationSorter: true,
                    discardEmpty: true
                }
            ]
        })
        : null
].filter(Boolean);
