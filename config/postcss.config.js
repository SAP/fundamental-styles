'use strict'
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssClean = require('postcss-clean');
const postcssBanner = require('postcss-banner');
const postcssGenerateClasses = require('./postcss-generate-classes/index.js');
const postcssAddFallback = require('./postcss-add-fallback/index.js'); //publish in ui5-webcomponents package
const postcssCustomProperties = require('postcss-custom-properties'); //ie11 fallbacks
const postcssImport = require('postcss-import');
const packageVersion = require('../package.json').version;
const year = new Date().getFullYear();

const minify = process.env.MODE === 'production' ? cssnano({
    preset: [
        'default', {
            mergeLonghand: false, // https://github.com/cssnano/cssnano/issues/675
            mergeRules: false, // https://github.com/cssnano/cssnano/issues/730
        },
    ]
}) : null;

module.exports = {
    inline: false,
    annotation: true,
    sourcesContent: true,
    plugins: [
        postcssImport(),
        postcssGenerateClasses({fileName: 'jenna.txt'}),
        postcssAddFallback({importFrom: 'web-components/sap_fiori_3/parameters-bundle.css'}),  //publish in ui5-webcomponents package
        autoprefixer({
            cascade: true
        }),
        postcssClean({
            format: 'beautify',
            level: 1
        }),
        postcssCustomProperties({
            preserve: true,
            importFrom: 'web-components/sap_fiori_3/parameters-bundle.css'
          }),
        minify
    ]
}