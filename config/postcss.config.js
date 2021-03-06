
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssClean = require('postcss-clean');
const postcssBanner = require('postcss-banner');
const postcssNormalizeCharset = require('postcss-normalize-charset');
const postcssAddFallback = require('./postcss-add-fallback.js');
const postcssCustomProperties = require('postcss-custom-properties'); //ie11 fallbacks
const postcssImport = require('postcss-import');
const postcssRemoveFonts = require('./postcss-remove-fonts.js');
const packageVersion = require('../package.json').version;
const year = new Date().getFullYear();

const minify = process.env.NODE_ENV === 'production' ? cssnano({
    preset: [
        'default', {
            mergeLonghand: false, // https://github.com/cssnano/cssnano/issues/675
            mergeRules: false // https://github.com/cssnano/cssnano/issues/730
        }
    ]
}) : null;

module.exports = {
    inline: false,
    annotation: true,
    sourcesContent: true,
    plugins: [
        postcssImport(),
        postcssAddFallback(),
        autoprefixer({
            cascade: true
        }),
        postcssCustomProperties({
            preserve: true
        }),
        postcssRemoveFonts(), // remove fonts from @sap-theming/theming-base-content
        postcssBanner({
            banner: `Fundamental Library Styles v${packageVersion}
Copyright (c) ${year} SAP SE or an SAP affiliate company.
Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/main/LICENSE)`,
            important: true }),
        postcssNormalizeCharset(),
        postcssClean({
            format: 'beautify',
            level: 1
        }),
        minify

    ]
};
