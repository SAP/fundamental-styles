const fs = require('fs');
const snakeCase = require('lodash/snakeCase');

const iconNameMatcher = /fiori-(.*)\.svg$/;

const iconNames = fs
    .readdirSync('./fiori')
    .map((fileName) => {
        return fileName.match(iconNameMatcher);
    })
    .filter((match) => !!match)
    .map((match) => {
        const key = snakeCase(match[1].trim()).replace(/_/g, '-');
        return `${key}: "${match[0]}",
        `;
    })
    .join('');

fs.writeFile(
    './_icon-names.scss',
    `$iconNames: (
${iconNames}
);`,
    (...args) => {
        // eslint-disable-next-line no-console
        console.log(args);
    }
);

module.exports = null;
