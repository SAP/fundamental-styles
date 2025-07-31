import '../../../src/sap-main-colors.scss';
import mainTextColorExampleHtml from './main-text-color.example.html?raw';
import mainBackgroundColorExampleHtml from './main-background-color.example.html?raw';

export default {
    title: 'Colors/Main Colors',
    parameters: {
        description: ''
    }
};
const localStyles = `
<style>
    .demo div {
        display: flex;
        height: 4rem;
        width: 8rem;
    }
</style>
`;
export const MainTextColor = () => `
${localStyles}
${mainTextColorExampleHtml}
`;
MainTextColor.parameters = {
    docs: {
        description: {
            story: `To set the text color of an element use the class <code>.sap-color-<i style="color: red;">colorName</i></code>, where <i style="color: red;">colorName</i> is the base of the css variable from the SAP-theming package that represent the desired color. <br><br><b>SCSS Mixin:</b> <code>@include  sap-color(colorName)</code>
            `
        }
    }
};
export const MainBackgroundColor = () => `
${localStyles}
${mainBackgroundColorExampleHtml}
`;
MainBackgroundColor.parameters = {
    docs: {
        description: {
            story: `To set the background color of an element use the class <code>.sap-bg-color-<i style="color: red;">colorName</i></code>, where <i style="color: red;">colorName</i> is the base of the css variable from the SAP-theming package that represent the desired color. <br><br><b>SCSS Mixin:</b><code>@include  sap-bg-color(colorName)</code>
            `
        }
    }
};
