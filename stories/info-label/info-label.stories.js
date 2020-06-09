import '../../dist/info-label.css';

export default {
    title: 'Components/Info Label',
    parameters: {
        description: `
Info Label is a small non-interactive numeric or text-based label.
Its primary use is to add user-defined characteristic to an object. 
Use the Info Label base class with following modifiers:

- \`fd-info-label\`
    - \`fd-info-label--icon\`
    - \`fd-info-label--numeric\`
    - \`fd-info-label--accent-color-*\`
      `
    }
};


/**
 * Info Label with color accents currently supports 10 semantic colors, starting from `fd-info-label--accent-color-1` to `fd-info-label--accent-color-10`.
 * */

export const colors = () => `
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
`;

colors.storyName = 'Info Label colors';

/**
 * Use `fd-info-label--icon` and icon class to create Info Label with an icon.
 * */

export const icons = () => `
<span class="fd-info-label fd-info-label--accent-color-1 fd-info-label--icon sap-icon--future">Info Label</span>
<br><br>
<span class="fd-info-label fd-info-label--accent-color-2 fd-info-label--only-icon sap-icon--upload-to-cloud"></span>
`;

icons.storyName = 'Info Label icons';


/**
 * Use `fd-info-label--numeric` modifier to create Info Label with numeric content.
 * */

export const numeric = () => `
<span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-1">6</span>
<br><br>
<span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-2">6.2</span>
<br><br>
<span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-3">42k</span>
`;

numeric.storyName = 'Info Label numeric';

/**
 * Info Label in RTL mode.
 * */

export const rtl = () => `
<div dir="rtl">
    <span class="fd-info-label fd-info-label--accent-color-1">Info Label</span>
    <span class="fd-info-label fd-info-label--numeric fd-info-label--accent-color-1">6</span>
    <span class="fd-info-label fd-info-label--accent-color-1 fd-info-label--icon sap-icon--future">Info Label</span>
    <span class="fd-info-label fd-info-label--accent-color-2 fd-info-label--only-icon sap-icon--upload-to-cloud"></span>
</div>
`;

rtl.storyName = 'Info Label RTL';
