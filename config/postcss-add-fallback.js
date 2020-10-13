
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

const applyFallback = (root, parameterMap) => {
    root.walkDecls(decl => {
        // extract var name
        let matches = decl.value.match(/var\(([^,()]+)\)/g);
        matches = arrayUniq(matches);
        if (matches) {
            matches.forEach(varMatch => {
                const varNameMatch = varMatch.match(/var\((.*)\)/);
                const varName = varNameMatch[1];
                if (parameterMap.has(varName)) {
                    decl.value = decl.value.replace(new RegExp(varName, 'g'), `${varName}, ${parameterMap.get(varName)}`);
                }
            });
        }
        parameterMap.set(decl.prop, decl.value);
    });
};

module.exports = postcss.plugin('add fallback plugin', function() {
    let params = new Map();
    let deltaParams = new Map();
    return function(root) {
        // remove file extension (.css)
        let fileName = root.source.input.file.replace(/\.[^/.]+$/, '');
        // turn file name into array
        fileName = fileName.split('-');

        // set default to sap_fiori_3
        let sourceParams = fs.readFileSync('node_modules/@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3/css_variables.css').toString();
        let sourceDeltaParams = fs.readFileSync('dist/theming/sap_fiori_3.css').toString();

        if (supportedThemes.indexOf(fileName[fileName.length - 1]) > -1) {
            sourceParams = fs.readFileSync(`node_modules/@sap-theming/theming-base-content/content/Base/baseLib/${fileName[fileName.length - 1]}/css_variables.css`).toString();
            sourceDeltaParams = fs.readFileSync(`dist/theming/${fileName[fileName.length - 1]}.css`).toString();
        }

        params = findCSSVars(sourceParams);
        deltaParams = findCSSVars(sourceDeltaParams);

        // these cannot be combined as part of the same map due to delta variables referencing sap-variables
        applyFallback(root, deltaParams);
        applyFallback(root, params);
    };
});
