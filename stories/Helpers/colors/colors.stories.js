export default {
    title: 'Helpers/Colors',
    parameters: {
        description: '',
        docs: { iframeHeight: 500 },
        components: ['sap-colors']
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
export const TextColor = () => `${localStyles}
<h3>sapBrandColor</h3>
<div class="sap-color-sapBrandColor">TEXT</div>
<br>
<h3>sapPositiveTextColor</h3>
<div class="sap-color-sapPositiveTextColor">TEXT</div>
<br>
<h3>sapCriticalTextColor</h3>
<div class="sap-color-sapCriticalTextColor">TEXT</div>
<br>
<h3>sapNegativeTextColor</h3>
<div class="sap-color-sapNegativeTextColor">TEXT</div>
<br>
<h3>sapInformativeTextColor</h3>
<div class="sap-color-sapInformativeTextColor">TEXT</div>
<br>
<h3>sapNeutralTextColor</h3>
<div class="sap-color-sapNeutralTextColor">TEXT</div>
`;
TextColor.storyName = 'Text Color';
TextColor.parameters = {
    docs: {
        iframeHeight: 150,
        description: {
            story: `To set the text color of an element use the class <code>.sap-color-<i style="color: red;">colorName</i></code>, where <i style="color: red;">colorName</i> is the name of the css variable from the SAP-theming package that represent the desired color. <br><br>
            <b>SCSS Mixin:</b> 
            <code>@include  sap-color(colorName)</code>
            `
        }
    }
};

export const BackgroundColor = () => `${localStyles}
<h3>sapBrandColor</h3>
<div class="demo sap-background-color-sapBrandColor"></div>
<br>
<h3>sapErrorBackground</h3>
<div class="demo sap-background-color-sapErrorBackground"></div>
<br>
<h3>sapWarningBackground</h3>
<div class="demo sap-background-color-sapWarningBackground"></div>
<br>
<h3>sapSuccessBackground</h3>
<div class="demo sap-background-color-sapSuccessBackground"></div>
<br>
<h3>sapInformationBackground</h3>
<div class="demo sap-background-color-sapInformationBackground"></div>
<br>
<h3>sapNeutralBackground</h3>
<div class="demo sap-background-color-sapNeutralBackground"></div>
`;
BackgroundColor.storyName = 'Background Color';
BackgroundColor.parameters = {
    docs: {
        iframeHeight: 150,
        description: {
            story: `To set the background color of an element use the class <code>.sap-background-color-<i style="color: red;">colorName</i></code>, where <i style="color: red;">colorName</i> is the name of the css variable from the SAP-theming package that represent the desired color. <br><br>
            <b>SCSS Mixin:</b> 
            <code>@include  sap-color(colorName, true)</code>
            `
        }
    }
};
