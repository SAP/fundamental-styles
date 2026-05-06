import commonCasesExampleHtml from "./common-cases.example.html?raw";
import lineHeightExampleHtml from "./line-height.example.html?raw";
import fontSizeExampleHtml from "./font-size.example.html?raw";
import fontFamilyExampleHtml from "./font-family.example.html?raw";
import '../../src/sap-typography.scss';

const typographyCardStyles = `
<style>
.typography-card {
    background: #f7f8fa;
    border: 0.0625rem solid #eaecee;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-block-end: 1rem;
}
.typography-card div {
    margin: 0 0 0.75rem 0;
    color: #0a6ed1;
    font-size: 1rem;
    font-weight: 600;
}
.typography-card dl {
    margin: 0;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem 1rem;
    font-size: 0.875rem;
    align-items: baseline;
}
.typography-card dt {
    font-weight: 600;
    color: #32363a;
}
.typography-card dd {
    margin: 0;
    color: #6a6d70;
}
.typography-card code {
    background: #fff;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.8125rem;
    border: 0.0625rem solid #e4e4e4;
    display: inline-block;
    margin: 0.125rem 0;
}
</style>
`;

export default {
  title: 'Typography',
  parameters: {
    description: `
      `
  }
};

export const FontFamily = () => fontFamilyExampleHtml;
FontFamily.parameters = {
  docs: {
    description: {
      story: `${typographyCardStyles}
<p>To set the <b>font-family</b> of an element use the <code>.sap-font-family-<i style="color: red;">type</i></code> class or the <code>@include sap-font-family(<i style="color: red;">type</i>)</code> mixin.</p>

<div class="typography-card">
    <div>Regular</div>
    <dl>
        <dt>Variable:</dt>
        <dd><code>var(--sapFontFamily)</code></dd>
        <dt>Style:</dt>
        <dd><code>"72", "72full", Arial, Helvetica, sans-serif</code></dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-family-regular</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font-family(regular)</code></dd>
    </dl>
</div>

<div class="typography-card">
    <div>Light</div>
    <dl>
        <dt>Variable:</dt>
        <dd><code>var(--sapFontLightFamily)</code></dd>
        <dt>Style:</dt>
        <dd><code>"72-Light", "72-Lightfull", "72", "72full", Arial, Helvetica, sans-serif</code></dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-family-light</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font-family(light)</code></dd>
    </dl>
</div>

<div class="typography-card">
    <div>Bold</div>
    <dl>
        <dt>Variable:</dt>
        <dd><code>var(--sapFontBoldFamily)</code></dd>
        <dt>Style:</dt>
        <dd><code>"72-Bold", "72-Boldfull", "72", "72full", Arial, Helvetica, sans-serif</code></dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-family-bold</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font-family(bold)</code></dd>
    </dl>
</div>

<div class="typography-card">
    <div>Semibold</div>
    <dl>
        <dt>Variable:</dt>
        <dd><code>var(--sapFontSemiboldFamily)</code></dd>
        <dt>Style:</dt>
        <dd><code>"72-Semibold", "72-Semiboldfull", "72", "72full", Arial, Helvetica, sans-serif</code></dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-family-semibold</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font-family(semibold)</code></dd>
    </dl>
</div>

<div class="typography-card">
    <div>Semibold Duplex</div>
    <dl>
        <dt>Variable:</dt>
        <dd><code>var(--sapFontSemiboldDuplexFamily)</code></dd>
        <dt>Style:</dt>
        <dd><code>"72-SemiboldDuplex", "72-SemiboldDuplexfull", "72", "72full", Arial, Helvetica, sans-serif</code></dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-family-semibold-duplex</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font-family(semibold-duplex)</code></dd>
    </dl>
</div>

<div class="typography-card">
    <div>Monospaced Regular</div>
    <dl>
        <dt>Variable:</dt>
        <dd><code>var(--sapContent_MonospaceFontFamily)</code></dd>
        <dt>Style:</dt>
        <dd><code>"72Mono", "72Monofull", Lucida Console, monospace</code></dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-family-monospaced-regular</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font-family(monospaced-regular)</code></dd>
    </dl>
</div>

<div class="typography-card">
    <div>Monospaced Bold</div>
    <dl>
        <dt>Variable:</dt>
        <dd><code>var(--sapContent_MonospaceBoldFontFamily)</code></dd>
        <dt>Style:</dt>
        <dd><code>"72Mono-Bold", "72Mono-Boldfull", Lucida Console, monospace</code></dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-family-monospaced-bold</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font-family(monospaced-bold)</code></dd>
    </dl>
</div>

<div class="typography-card">
    <div>Black</div>
    <dl>
        <dt>Variable:</dt>
        <dd><code>var(--sapFontBlackFamily)</code></dd>
        <dt>Style:</dt>
        <dd><code>"72Black", "72", "72full", Arial, Helvetica, sans-serif</code></dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-family-black</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font-family(black)</code></dd>
    </dl>
</div>

<div class="typography-card">
    <div>Header</div>
    <dl>
        <dt>Variable:</dt>
        <dd><code>var(--sapFontHeaderFamily)</code></dd>
        <dt>Style:</dt>
        <dd><code>"72", "72full", Arial, Helvetica, sans-serif</code></dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-family-header</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font-family(header)</code></dd>
    </dl>
</div>`
    }
  }
};

export const FontSize = () => fontSizeExampleHtml;
FontSize.parameters = {
  docs: {
    description: {
      story: `${typographyCardStyles}
<p>To set the <b>font-size</b> of an element use the <code>.sap-font-size-<i style="color: red;">value</i></code> class or the <code>@include sap-font-size(<i style="color: red;">value</i>)</code> mixin.</p>

<div class="typography-card">
    <div>Header 6</div>
    <dl>
        <dt>Variable:</dt>
        <dd><code>var(--sapFontHeader6Size)</code></dd>
        <dt>Size:</dt>
        <dd><code>0.875rem</code> (14px)</dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-size-header-6</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font-size(header-6)</code></dd>
    </dl>
</div>

<div class="typography-card">
    <div>Header 5</div>
    <dl>
        <dt>Variable:</dt>
        <dd><code>var(--sapFontHeader5Size)</code></dd>
        <dt>Size:</dt>
        <dd><code>1rem</code> (16px)</dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-size-header-5</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font-size(header-5)</code></dd>
    </dl>
</div>

<div class="typography-card">
    <div>Header 4</div>
    <dl>
        <dt>Variable:</dt>
        <dd><code>var(--sapFontHeader4Size)</code></dd>
        <dt>Size:</dt>
        <dd><code>1.125rem</code> (18px)</dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-size-header-4</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font-size(header-4)</code></dd>
    </dl>
</div>

<div class="typography-card">
    <div>Header 3</div>
    <dl>
        <dt>Variable:</dt>
        <dd><code>var(--sapFontHeader3Size)</code></dd>
        <dt>Size:</dt>
        <dd><code>1.25rem</code> (20px)</dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-size-header-3</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font-size(header-3)</code></dd>
    </dl>
</div>

<div class="typography-card">
    <div>Header 2</div>
    <dl>
        <dt>Variable:</dt>
        <dd><code>var(--sapFontHeader2Size)</code></dd>
        <dt>Size:</dt>
        <dd><code>1.5rem</code> (24px)</dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-size-header-2</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font-size(header-2)</code></dd>
    </dl>
</div>

<div class="typography-card">
    <div>Header 1</div>
    <dl>
        <dt>Variable:</dt>
        <dd><code>var(--sapFontHeader1Size)</code></dd>
        <dt>Size:</dt>
        <dd><code>2.25rem</code> (36px)</dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-size-header-1</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font-size(header-1)</code></dd>
    </dl>
</div>

<div class="typography-card">
    <div>Small</div>
    <dl>
        <dt>Variable:</dt>
        <dd><code>var(--sapFontSmallSize)</code></dd>
        <dt>Size:</dt>
        <dd><code>0.75rem</code> (12px)</dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-size-small</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font-size(small)</code></dd>
    </dl>
</div>

<div class="typography-card">
    <div>Medium</div>
    <dl>
        <dt>Variable:</dt>
        <dd><code>var(--sapFontSize)</code></dd>
        <dt>Size:</dt>
        <dd><code>0.875rem</code> (14px)</dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-size-medium</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font-size(medium)</code></dd>
    </dl>
</div>

<div class="typography-card">
    <div>Large</div>
    <dl>
        <dt>Variable:</dt>
        <dd><code>var(--sapFontLargeSize)</code></dd>
        <dt>Size:</dt>
        <dd><code>1rem</code> (16px)</dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-size-large</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font-size(large)</code></dd>
    </dl>
</div>`
    }
  }
};

export const LineHeight = () => lineHeightExampleHtml;
LineHeight.parameters = {
  docs: {
    description: {
      story: `${typographyCardStyles}
<p>In general, there is no line height applied to text, as the line height e.g. affects the padding.
If a more generous line height is required for long continuous text, a consistent line height of 1.5 is recommended.</p>

<div class="typography-card">
    <div>Normal Line Height</div>
    <dl>
        <dt>Class:</dt>
        <dd><code>.sap-font-line-height</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font-line-height()</code></dd>
        <dt>Value:</dt>
        <dd>normal</dd>
    </dl>
</div>

<div class="typography-card">
    <div>Long Text Line Height</div>
    <dl>
        <dt>Class:</dt>
        <dd><code>.sap-font-line-height-long</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font-line-height(1.5)</code></dd>
        <dt>Value:</dt>
        <dd>1.5</dd>
    </dl>
</div>`
    }
  }
};

export const CommonCases = () => commonCasesExampleHtml;
CommonCases.parameters = {
  docs: {
    description: {
      story: `${typographyCardStyles}
<p>Common typography use cases with combined font settings.</p>

<div class="typography-card">
    <div>Header Text in Size 3</div>
    <dl>
        <dt>Style:</dt>
        <dd><code>"72" font, 20px, #32363a</code></dd>
        <dt>Usage:</dt>
        <dd>Dynamic page header, object page header</dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-header-3</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font(header-3)</code></dd>
    </dl>
</div>

<div class="typography-card">
    <div>Standard Text</div>
    <dl>
        <dt>Style:</dt>
        <dd><code>"72" font, 14px, #32363a</code></dd>
        <dt>Usage:</dt>
        <dd>Text control</dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-standard-text</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font(standard-text)</code></dd>
    </dl>
</div>

<div class="typography-card">
    <div>Small Detail Text</div>
    <dl>
        <dt>Style:</dt>
        <dd><code>"72" font, 12px, #6a6d70</code></dd>
        <dt>Usage:</dt>
        <dd>Time stamps, small bylines</dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-small-detail-text</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font(small-detail-text)</code></dd>
    </dl>
</div>

<div class="typography-card">
    <div>Standard Field Text</div>
    <dl>
        <dt>Style:</dt>
        <dd><code>"72" font, 14px, #32363a</code></dd>
        <dt>Usage:</dt>
        <dd>Input field, feed input, text area</dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-standard-field-text</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font(standard-field-text)</code></dd>
    </dl>
</div>

<div class="typography-card">
    <div>Labels</div>
    <dl>
        <dt>Style:</dt>
        <dd><code>"72" font, 14px, #6a6d70</code></dd>
        <dt>Usage:</dt>
        <dd>Labels</dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-label</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font(label)</code></dd>
    </dl>
</div>

<div class="typography-card">
    <div>Descriptions</div>
    <dl>
        <dt>Style:</dt>
        <dd><code>"72" font, 14px, #6a6d70</code></dd>
        <dt>Usage:</dt>
        <dd>Object attribute</dd>
        <dt>Class:</dt>
        <dd><code>.sap-font-description</code></dd>
        <dt>Mixin:</dt>
        <dd><code>@include sap-font(description)</code></dd>
    </dl>
</div>`
    }
  }
};
