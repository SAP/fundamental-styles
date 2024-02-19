import '../../src/sap-colors.scss';
import textColorExampleHtml from './text-color.example.html?raw';
import backgroundColorExampleHtml from './background-color.example.html?raw';

export default {
    title: 'Colors',
    parameters: {
        description: ''
    }
};
const localStyles = `
<style>
    div.demo {
        display: flex;
        height: 4rem;
        width: 8rem;
    }
</style>
`;
export const TextColor = () => `
${localStyles}
${textColorExampleHtml}
`;
TextColor.parameters = {
    docs: {
        description: {
            story: `To set the text color of an element use the class <code>.sap-color-<i style="color: red;">colorName</i></code>, where <i style="color: red;">colorName</i> is the base of the css variable from the SAP-theming package that represent the desired color. <br><br>
            <b>SCSS Mixin:</b> 
            <code>@include  sap-color(colorName)</code>
            `
        }
    }
};
export const BackgroundColor = () => `
${localStyles}
${backgroundColorExampleHtml}
`;
BackgroundColor.parameters = {
    docs: {
        description: {
            story: `To set the background color of an element use the class <code>.sap-bg-color-<i style="color: red;">colorName</i></code>, where <i style="color: red;">colorName</i> is the base of the css variable from the SAP-theming package that represent the desired color. <br><br>
            <b>SCSS Mixin:</b> 
            <code>@include  sap-bg-color(colorName)</code>
            `
        }
    }
};
