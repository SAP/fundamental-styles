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
        tags: ['btp', 'a11y', 'theme'],
        components: ['info-label', 'icon']
    }
};

/** Use the `fd-info-label--accent-color-*` modifier class to apply semantic color to Info Label.
 * Options include numbers from 1 to 10.
 */

export const Colors = () => `<div class="fd-info-label fd-info-label--accent-color-1">
    <span class="fd-info-label__text">color 1</span>
</div>
<div class="fd-info-label fd-info-label--accent-color-2">
    <span class="fd-info-label__text">color 2</span>
</div>
<div class="fd-info-label fd-info-label--accent-color-3">
    <span class="fd-info-label__text">color 3</span>
</div>
<div class="fd-info-label fd-info-label--accent-color-4">
    <span class="fd-info-label__text">color 4</span>
</div>
<div class="fd-info-label fd-info-label--accent-color-5">
    <span class="fd-info-label__text">color 5</span>
</div>
<div class="fd-info-label fd-info-label--accent-color-6">
    <span class="fd-info-label__text">color 6</span>
</div>
<div class="fd-info-label fd-info-label--accent-color-7">
    <span class="fd-info-label__text">color 7</span>
</div>
<div class="fd-info-label fd-info-label--accent-color-8">
    <span class="fd-info-label__text">color 8</span>
</div>
<div class="fd-info-label fd-info-label--accent-color-9">
    <span class="fd-info-label__text">color 9</span>
</div>
<div class="fd-info-label fd-info-label--accent-color-10">
    <span class="fd-info-label__text">color 10</span>
</div>
`;
Colors.storyName = 'Color Flavors';

/** Use the `fd-info-label--icon` modifier class and icon type to create Info Label with Icon. */

export const Icons = () => `<div class="fd-info-label fd-info-label--accent-color-1 fd-info-label--icon">
    <i role="presentation" class="fd-info-label__icon sap-icon--future"></i>
    <span class="fd-info-label__text">Info Label</span>
</div>
<div class="fd-info-label fd-info-label--accent-color-2 fd-info-label--icon">
    <i role="presentation" class="fd-info-label__icon sap-icon--upload-to-cloud"></i>
</div>
`;
Icons.storyName = 'Info Label with Icon';

/** For Numeric Info Label use the `fd-info-label--numeric` modifier class. */

export const Numeric = () => `<div class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-1">
    <span class="fd-info-label__text">6</span>
</div>
<div class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-2">
    <span class="fd-info-label__text">6.2</span>
</div>
<div class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-3">
    <span class="fd-info-label__text">42k</span>
</div>
`;
Numeric.storyName = 'Numeric Info Label';

/** For Display Only Info Label use the `fd-info-label--display` modifier class */

export const DisplayOnlyInfoLabel = () => `<div class="fd-info-label fd-info-label--display">
    <span class="fd-info-label__text">system state</span>
</div>
<div class="fd-info-label fd-info-label--display fd-info-label--numeric">
    <span class="fd-info-label__text">42</span>
</div>
<div class="fd-info-label fd-info-label--accent-color-2 fd-info-label--icon fd-info-label--display ">
    <i role="presentation" class="fd-info-label__icon sap-icon--upload-to-cloud"></i>
</div>
<div class="fd-info-label fd-info-label--accent-color-1 fd-info-label--icon fd-info-label--display">
    <i role="presentation" class="fd-info-label__icon sap-icon--future"></i>
    <span class="fd-info-label__text">Info Label</span>
</div>
`;
