import '../../dist/info-label.css';

export default {
    title: 'Components/Info Label',
    parameters: {
        description: `
Info Label is a small non-interactive numeric or text-based label.
Its primary use is to add user-defined characteristic to an object. 
Use the Info Label base class with following modifiers:

- \`fd-info-label\`
    - \`fd-info-label--accent-color-*\`
    - \`fd-info-label--icon\`
    - \`fd-info-label--numeric\`
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
colors.storyName = 'Color Flavors';

/** Use the `fd-info-label--icon` modifier class and icon type to create Info Label with Icon. */

export const icons = () => `
<div class="fddocs-container">
    <span class="fd-info-label fd-info-label--accent-color-1 fd-info-label--icon sap-icon--future">Info Label</span>
    <br><br>
    <span class="fd-info-label fd-info-label--accent-color-2 fd-info-label--icon sap-icon--upload-to-cloud"></span>
</div>
`;
icons.storyName = 'Info Label with Icon';

/** For Numeric Info Label use the `fd-info-label--numeric` modifier class. */

export const numeric = () => `
<div class="fddocs-container">
    <span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-1">6</span>
    <br><br>
    <span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-2">6.2</span>
    <br><br>
    <span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-3">42k</span>
</div>
`;
numeric.storyName = 'Numeric Info Label';

/** Info Label in RTL mode. */

export const rtl = () => `
<div class="fddocs-container" dir="rtl">
    <span class="fd-info-label fd-info-label--accent-color-1">Info Label</span>
    <span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-1">6</span>
    <span class="fd-info-label fd-info-label--accent-color-1 fd-info-label--icon sap-icon--future">Info Label</span>
    <span class="fd-info-label fd-info-label--accent-color-2 fd-info-label--icon sap-icon--upload-to-cloud"></span>
</div>
`;
rtl.storyName = 'Info Label RTL';
