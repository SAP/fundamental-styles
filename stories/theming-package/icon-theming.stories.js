import businessSuite from '../icon/BusinessSuiteInAppSymbols/dataBusinessSuite.json';
import sapIcons from '../icon/SAPIcons/data.json';
import tntIcons from '../icon/TNTIcons/dataTNT.json';

export default {
    title: 'Theming/Icon',
    parameters: {
        components: ['button', 'button-split', 'icon', 'menu', 'popover', 'segmented-button']
    }
};

export const primary = () => `
    <h3>BusinessSuiteInAppSymbol Icons</h3>
    ${businessSuiteInAppSymbol()}
    <br><br>

    <h3>SAP Icons</h3>
    ${sapIcon()}
    <br><br>

    <h3>TNT Icons</h3>
    ${tntIcon()}
`;

function businessSuiteInAppSymbol() {
    const div = document.createElement('div');
    div.className = 'fddocs-container';
    div.innerHTML = businessSuite.businessSuiteIcons.map((icon) => {
        return (
            '<div class="fddocs-container--icon">' +
                `<span class="sap-icon-businessSuiteInAppSymbols sap-icon-businessSuiteInAppSymbols--${icon}" style="font-size:3rem"></span>` +
                `<div>.sap-icon-businessSuiteInAppSymbols--${icon}</div>` +
            '</div><br />'
        );
    }).join('');
    return div.outerHTML;
}

function sapIcon() {
    const div = document.createElement('div');
    div.className = 'fddocs-container';
    div.innerHTML = sapIcons.icons.map((icon) => {
        return (
            '<div class="fddocs-container--icon">' +
                `<span class="sap-icon sap-icon--${icon}" style="font-size:3rem"></span>` +
                `<div>.sap-icon--${icon}</div>` +
            '</div><br />'
        );
    }).join('');
    return div.outerHTML;
}

function tntIcon() {
    const div = document.createElement('div');
    div.className = 'fddocs-container';
    div.innerHTML = tntIcons.tntIcons.map((icon) => {
        return (
            '<div class="fddocs-container--icon">' +
                `<span class="sap-icon-TNT sap-icon-TNT--${icon}" style="font-size:3rem"></span>` +
                `<div>.sap-icon-TNT--${icon}</div>` +
            '</div><br />'
        );
    }).join('');
    return div.outerHTML;
}
