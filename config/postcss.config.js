'use strict'
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssClean = require('postcss-clean');
const postcssBanner = require('postcss-banner');
const postcssGenerateClasses = require('./postcss-generate-classes/index.js');
const postcssImport = require('postcss-import');
const packageVersion = require('../package.json').version;
const year = new Date().getFullYear();

module.exports = {
    inline: false,
    annotation: true,
    sourcesContent: true,
    plugins: [
        postcssImport(),
        postcssGenerateClasses(),
        autoprefixer({
            cascade: true
        }),
        postcssClean({
            format: 'beautify',
            level: 1
        }),
        // cssnano({
		// 	preset: [
		// 		'default', {
		// 			mergeLonghand: false, // https://github.com/cssnano/cssnano/issues/675
		// 			mergeRules: false, // https://github.com/cssnano/cssnano/issues/730
		// 		},
		// 	]
		// }),
        postcssBanner({
            banner: `Fundamental Styles v${packageVersion}
Copyright (c) ${year} SAP SE or an SAP affiliate company.
Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/master/LICENSE)`,
            important: true
        })
    ]
}