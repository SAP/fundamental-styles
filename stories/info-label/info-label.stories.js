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
    <span class="fd-info-label fd-info-label--accent-color-1">
        <span class="fd-info-label__text">Info Label</span>
    </span>
    <br><br>
    <span class="fd-info-label fd-info-label--accent-color-2">
        <span class="fd-info-label__text">Info Label</span>
    </span>
    <br><br>
    <span class="fd-info-label fd-info-label--accent-color-3">
        <span class="fd-info-label__text">Info Label</span>
    </span>
    <br><br>
    <span class="fd-info-label fd-info-label--accent-color-4">
        <span class="fd-info-label__text">Info Label</span>
    </span>
    <br><br>
    <span class="fd-info-label fd-info-label--accent-color-5">
        <span class="fd-info-label__text">Info Label</span>
    </span>
    <br><br>
    <span class="fd-info-label fd-info-label--accent-color-6">
        <span class="fd-info-label__text">Info Label</span>
    </span>
    <br><br>
    <span class="fd-info-label fd-info-label--accent-color-7">
        <span class="fd-info-label__text">Info Label</span>
    </span>
    <br><br>
    <span class="fd-info-label fd-info-label--accent-color-8">
        <span class="fd-info-label__text">Info Label</span>
    </span>
    <br><br>
    <span class="fd-info-label fd-info-label--accent-color-9">
        <span class="fd-info-label__text">Info Label</span>
    </span>
    <br><br>
    <span class="fd-info-label fd-info-label--accent-color-10">
        <span class="fd-info-label__text">Info Label</span>
    </span>
</div>
`;
colors.storyName = 'Color Flavors';

/** Use the `fd-info-label--icon` modifier class and icon type to create Info Label with Icon. */

export const icons = () => `
<div class="fddocs-container">
    <span class="fd-info-label fd-info-label--accent-color-1 fd-info-label--icon">
        <i class="fd-info-label__icon sap-icon--future" aria-hidden="true"></i>
        <span class="fd-info-label__text">Info Label</span>
    </span>
    <br><br>
    <span class="fd-info-label fd-info-label--accent-color-2 fd-info-label--icon">
        <i class="fd-info-label__icon sap-icon--upload-to-cloud" role="presentation"></i>
    </span>
</div>
`;
icons.storyName = 'Info Label with Icon';

/** For Numeric Info Label use the `fd-info-label--numeric` modifier class. */

export const numeric = () => `
<div class="fddocs-container">
    <span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-1">
        <span class="fd-info-label__text">6</span>
    </span>
    <br><br>
    <span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-2">
        <span class="fd-info-label__text">6.2</span>
    </span>
    <br><br>
    <span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-3">
        <span class="fd-info-label__text">42k</span>
    </span>
</div>
`;
numeric.storyName = 'Numeric Info Label';

/** Info Label in RTL mode. */

export const rtl = () => `
<div class="fddocs-container" dir="rtl">
    <span class="fd-info-label fd-info-label--accent-color-1">
        <span class="fd-info-label__text">Info Label</span>
    </span>
    <span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-1">
        <span class="fd-info-label__text">6</span>
    </span>
    <span class="fd-info-label fd-info-label--accent-color-1 fd-info-label--icon">
        <i class="fd-info-label__icon sap-icon--future" aria-hidden="true"></i>
        <span class="fd-info-label__text">Info Label</span>
    </span>
    <span class="fd-info-label fd-info-label--accent-color-2 fd-info-label--icon">
        <i class="fd-info-label__icon sap-icon--upload-to-cloud" role="presentation"></i>
    </span>
</div>
`;
rtl.storyName = 'Info Label RTL';
