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
            story: `<style>
.color-mixin-example {
    background: #f7f8fa;
    border: 0.0625rem solid #eaecee;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-block: 1rem;
}
.color-mixin-example h4 {
    margin: 0 0 0.75rem 0;
    color: #0a6ed1;
    font-size: 1rem;
    font-weight: 600;
}
.color-mixin-example p {
    font-size: 0.875rem;
    color: #6a6d70;
    margin: 0 0 0.75rem 0;
}
.color-mixin-example pre {
    background: #fff;
    border: 0.0625rem solid #e4e4e4;
    border-radius: 0.25rem;
    padding: 0.75rem 1rem;
    margin: 0.5rem 0 0 0;
    font-size: 0.875rem;
    font-family: 'Courier New', Courier, monospace;
    color: #32363a;
    overflow-x: auto;
}
.color-mixin-example code {
    background: #fff;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.8125rem;
    border: 0.0625rem solid #e4e4e4;
}
</style>

<div class="color-mixin-example">
    <h4>CSS Class</h4>
    <p>To set the text color of an element use the class <code>.sap-color-<i style="color: #d93025;">colorName</i></code></p>
    <p>Where <code><i style="color: #d93025;">colorName</i></code> is the base of the CSS variable from SAP theming (e.g., <code>brandColor</code>, <code>textColor</code>, <code>negativeColor</code>)</p>
</div>

<div class="color-mixin-example">
    <h4>SCSS Mixin</h4>
    <p>Apply text color using the mixin:</p>
    <pre>@include sap-color(<i style="color: #d93025;">colorName</i>);</pre>
    <p style="margin-top: 0.75rem;"><strong>Example:</strong></p>
    <pre>.my-element {
        @include sap-color(brandColor);
}</pre>
</div>`
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
            story: `<style>
.color-mixin-example {
    background: #f7f8fa;
    border: 0.0625rem solid #eaecee;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-block: 1rem;
}
.color-mixin-example h4 {
    margin: 0 0 0.75rem 0;
    color: #0a6ed1;
    font-size: 1rem;
    font-weight: 600;
}
.color-mixin-example p {
    font-size: 0.875rem;
    color: #6a6d70;
    margin: 0 0 0.75rem 0;
}
.color-mixin-example pre {
    background: #fff;
    border: 0.0625rem solid #e4e4e4;
    border-radius: 0.25rem;
    padding: 0.75rem 1rem;
    margin: 0.5rem 0 0 0;
    font-size: 0.875rem;
    font-family: 'Courier New', Courier, monospace;
    color: #32363a;
    overflow-x: auto;
}
.color-mixin-example code {
    background: #fff;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.8125rem;
    border: 0.0625rem solid #e4e4e4;
}
</style>

<div class="color-mixin-example">
    <h4>CSS Class</h4>
    <p>To set the background color of an element use the class <code>.sap-bg-color-<i style="color: #d93025;">colorName</i></code></p>
    <p>Where <code><i style="color: #d93025;">colorName</i></code> is the base of the CSS variable from SAP theming (e.g., <code>brandColor</code>, <code>backgroundColor</code>, <code>negativeColor</code>)</p>
</div>

<div class="color-mixin-example">
    <h4>SCSS Mixin</h4>
    <p>Apply background color using the mixin:</p>
    <pre>@include sap-bg-color(<i style="color: #d93025;">colorName</i>);</pre>
    <p style="margin-top: 0.75rem;"><strong>Example:</strong></p>
    <pre>.my-element {
        @include sap-bg-color(brandColor);
}</pre>
</div>`
        }
    }
};
