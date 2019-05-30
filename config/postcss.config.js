'use strict'

const packageVersion = require('../package.json').version;
const year = new Date().getFullYear();

module.exports = {
    inline: false,
    annotation: true,
    sourcesContent: true,
    plugins: {
        autoprefixer: {
            cascade: true,
            browsers: ["last 2 versions"]
        },
        'postcss-clean': {
            format: 'beautify',
            level: 1
        },
        'postcss-banner': {
            banner: `Fundamental Styles v${packageVersion}
Copyright (c) ${year} SAP SE or an SAP affiliate company.
Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/master/LICENSE)`,
            important: true
        }
  }
}