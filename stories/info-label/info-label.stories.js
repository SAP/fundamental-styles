import '../../dist/info-label.css';

export default {
    title: 'Components/Info Label',
    parameters: {
        description: `
The info label is a non-interactive, non-semantic label with text. The label is used to highlight a characteristic of an object or item such as a state, type, quantity or condition. It can be used in tables, headers and display forms.
        
##Usage

**Use the info label if:**

- You are designing an administrative or monitoring application.
- You want to highlight a characteristic of an object.


**Do not use the info label if:**

- You are designing an SAP Fiori application.
- You want to indicate the status of an object. 


      `,
        tags: ['f3', 'a11y', 'theme']
    }
};

/** Use the `fd-info-label--accent-color-*` modifier class to apply semantic color to Info Label.
 * Options include numbers from 1 to 10.
 */

export const colors = () => `
<div class="fddocs-container">
    <span class="fd-info-label fd-info-label--accent-color-1">Info Label</span>
    <br><br>
    <span class="fd-info-label fd-info-label--accent-color-2">Info Label</span>
    <br><br>
    <span class="fd-info-label fd-info-label--accent-color-3">Info Label</span>
    <br><br>
    <span class="fd-info-label fd-info-label--accent-color-4">Info Label</span>
    <br><br>
    <span class="fd-info-label fd-info-label--accent-color-5">Info Label</span>
    <br><br>
    <span class="fd-info-label fd-info-label--accent-color-6">Info Label</span>
    <br><br>
    <span class="fd-info-label fd-info-label--accent-color-7">Info Label</span>
    <br><br>
    <span class="fd-info-label fd-info-label--accent-color-8">Info Label</span>
    <br><br>
    <span class="fd-info-label fd-info-label--accent-color-9">Info Label</span>
    <br><br>
    <span class="fd-info-label fd-info-label--accent-color-10">Info Label</span>
</div>
`;
colors.storyName = 'Colors';
colors.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `Info label can be displayed in various colors, by adding the <code>fd-info-label--accent-color-*</code> modifier class to the element with the number indicating the desired color. The color options include numbers ranging from 1 to 10, for example: <code>fd-info-label--accent-color-10</code>.
`
    }
};

/** Use the `fd-info-label--icon` modifier class and icon type to create Info Label with Icon. */

export const icons = () => `
<div class="fddocs-container">
    <span class="fd-info-label fd-info-label--accent-color-1 fd-info-label--icon sap-icon--future">Info Label</span>
    <br><br>
    <span class="fd-info-label fd-info-label--accent-color-2 fd-info-label--icon sap-icon--upload-to-cloud"></span>
</div>
`;
icons.storyName = 'Icon';
icons.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `The icon info label can be displayed to convey more information to the user. To use an icon in info label, add the <code>fd-info-label--icon</code> modifier class to the element.
        
`
    }
};

export const numeric = () => `
<div class="fddocs-container">
    <span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-1">6</span>
    <br><br>
    <span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-2">6.2</span>
    <br><br>
    <span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-3">42k</span>
</div>
`;
numeric.storyName = 'Number';
numeric.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `The number info label can be displayed by adding the <code>fd-info-label--numeric</code> modifier class to the element.
`
    }
};

/** Info Label in RTL mode. */

export const rtl = () => `
<div class="fddocs-container" dir="rtl">
    <span class="fd-info-label fd-info-label--accent-color-1">Info Label</span>
    <span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-1">6</span>
    <span class="fd-info-label fd-info-label--accent-color-1 fd-info-label--icon sap-icon--future">Info Label</span>
    <span class="fd-info-label fd-info-label--accent-color-2 fd-info-label--icon sap-icon--upload-to-cloud"></span>
</div>
`;
rtl.storyName = 'RTL';
rtl.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `The info label can be displayed from right to left on the screen.
`
    }
};
