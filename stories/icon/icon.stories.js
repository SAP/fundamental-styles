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
        See [Getting Started](../getting-started.html#project-configuration) for instructions for making the SAP icon font available on your page.`,
        tags: ['development']
    }
};

export const sizes = () => `

    <span class="sap-icon sap-icon--cart"></span>
    <br />
    <span class="sap-icon sap-icon--cart" style="font-size:5rem"></span>
    <br />
    <span class="sap-icon sap-icon--cart" style="font-size:10rem"></span>
`;

sizes.parameters = {
    docs: {
        iframeHeight: 250,
        storyDescription: 'Icons do not have predefined size options. They take the font size value for it. This give unlimited options for sizes.'
    }
};

export const availableIcons = () => {
    const div = document.createElement('div');
    div.className = 'fddocs-container';
    div.innerHTML = data.icons.map((icon) => {
        return (
            '<div class="fddocs-container--icon">' +
                `<span class="sap-icon sap-icon--${icon}" style="font-size:3rem"></span>` +
                `<div>.sap-icon--${icon}</div>` +
            '</div><br />'
        );
    }).join('');
    return div.outerHTML;
};

availableIcons.parameters = {
    docs: {
        iframeHeight: 200
    }
};
