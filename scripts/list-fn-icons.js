const fs = require('fs');
const { resolve } = require('path');
const snakeCase = require('lodash/snakeCase');

const iconNameMatcher = /fiori-(.*)\.svg$/;

const iconNamesMap = fs
    .readdirSync(resolve(__dirname, '../src/icons/fiori'))
    .map((fileName) => {
        return fileName.match(iconNameMatcher);
    })
    .filter((match) => !!match)
    .map((match) => {
        const key = snakeCase(match[1].trim().toLowerCase()).replace(/_/g, '-');
        return [key, match[0]];
    });

const iconNames = iconNamesMap
    .map(([key, svgPath]) => {
        return `${key}: "${svgPath}",
    `;
    })
    .join('');

fs.writeFile(
    resolve(__dirname, '../src/icons/_icon-names.scss'),
    `$iconNames: (
${iconNames}
);`,
    (error) => {
        if (error) {
            throw error;
        }
    }
);

fs.writeFile(resolve(__dirname, '../src/icons/icons.json'), JSON.stringify({ iconNamesMap }), (error) => {
    if (error) {
        throw error;
    }
});

module.exports = null;
