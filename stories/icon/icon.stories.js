import '../../dist/button.css';
import '../../dist/button-split.css';
import '../../dist/icon.css';
import '../../dist/menu.css';
import '../../dist/popover.css';
import '../../dist/segmented-button.css';
import data from './data.json';

export default {
    title: 'Components/Icon',
    parameters: {
        description: `Icons are used throughout the UI to save space, allow for visual clarity and focus, and for fun.
        Icons can be used adaptively if desired, but at this point they are used more as visual elements within other components.
        See [Getting Started](../getting-started.html#project-configuration) for instructions for making the SAP icon font available on your page.`
    }
};

export const sizes = () => `
    <span class="sap-icon--cart sap-icon--s"></span>
    <span class="sap-icon--cart"></span>
    <span class="sap-icon--cart sap-icon--m"></span>
    <span class="sap-icon--cart sap-icon--l"></span>
    <span class="sap-icon--cart sap-icon--xl"></span>
`;

export const animations = () => `
    <span class="sap-icon--synchronize sap-icon--xl sap-icon--animate-spin"></span>
    <span class="sap-icon--synchronize sap-icon--xl sap-icon--animate-pulse"></span>
`;

export const availableIcons = () => {
    const div = document.createElement('div');
    div.className = 'fddocs-container';
    div.innerHTML = data.icons.map((icon) => {
        return (
            '<div class="fddocs-container--icon">' +
                `<span class="sap-icon--${icon} sap-icon--xl"></span>` +
                `<div>.sap-icon--${icon}</div>` +
            '</div>'
        );
    }).join('');
    return div;
};

availableIcons.parameters = {
    docs: {
        iframeHeight: 500
    }
};
