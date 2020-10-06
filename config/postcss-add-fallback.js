
const postcss = require('postcss');
const fs = require('fs');
const arrayUniq = require('array-uniq');
const supportedThemes = require('./constants');

const findCSSVars = styleString => {
    const vars = new Map();
    const couples = styleString.match(/--[^:)]+:\s*[^;}]+/g) || [];
    couples.forEach(couple => {
        const [varName, varValue] = couple.split(/:\s*/);
        vars.set(varName, varValue);
    });
    return vars;
};

module.exports = postcss.plugin('add fallback plugin', function() {
    let params = new Map();
    return function(root) {
        // remove file extension (.css)
        let fileName = root.source.input.file.replace(/\.[^/.]+$/, '');
        // turn file name into array
        fileName = fileName.split('-');

        if (supportedThemes.indexOf(fileName[fileName.length - 1]) > -1) {
            const sourceParams = fs.readFileSync(`node_modules/@sap-theming/theming-base-content/content/Base/baseLib/${fileName[fileName.length - 1]}/css_variables.css`).toString();
            const sourceDeltaParams = fs.readFileSync(`dist/theming/${fileName[fileName.length - 1]}.css`).toString();
            params = new Map([...findCSSVars(sourceParams), ...findCSSVars(sourceDeltaParams)]);

            root.walkDecls(decl => {
            // extract var name
                let matches = decl.value.match(/var\(([^,()]+)\)/g);
                matches = arrayUniq(matches);
                if (matches) {
                    matches.forEach(varMatch => {
                        const varNameMatch = varMatch.match(/var\((.*)\)/);
                        const varName = varNameMatch[1];
                        if (params.has(varName)) {
                            decl.value = decl.value.replace(new RegExp(varName, 'g'), `${varName}, ${params.get(varName)}`);
                        }
                    });
                }
                params.set(decl.prop, decl.value);
            });
        }
    };
});
