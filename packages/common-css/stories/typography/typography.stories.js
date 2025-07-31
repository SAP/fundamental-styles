import commonCasesExampleHtml from "./common-cases.example.html?raw";
import lineHeightExampleHtml from "./line-height.example.html?raw";
import fontSizeExampleHtml from "./font-size.example.html?raw";
import fontFamilyExampleHtml from "./font-family.example.html?raw";
import '../../src/sap-typography.scss';
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
      story: `To set the <b>font-family</b> of an element use the <code>.sap-font-family-<i style="color: red;">type</i></code>class or the <code>@include sap-font-family(<i style="color: red;">type</i>)</code> mixin with <i style="color: red;">type</i> being one of the following:<br> regular | light | bold | semibold | semibold-duplex | monospaced-regular | monospaced-bold | black | header 

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Type</th>
        <th style="padding: 0.25rem;">Resultant Style</th>
        <th style="padding: 0.25rem;">Class</th>
        <th style="padding: 0.25rem;">Mixin</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Regular</td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;</td>
        <td style="padding: 0.25rem;">.sap-font-family-regular</td>
        <td style="padding: 0.25rem;">@include sap-font-family(regular)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Light</td>
        <td style="padding: 0.25rem;">font-family: "72-Light" , "72-Lightfull" , "72" , "72full" , Arial, Helvetica, sans-serif;</td>
        <td style="padding: 0.25rem;">.sap-font-family-light</td>
        <td style="padding: 0.25rem;">@include sap-font-family(light)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Bold</td>
        <td style="padding: 0.25rem;">font-family: "72-Bold" , "72-Boldfull" , "72" , "72full" , Arial, Helvetica, sans-serif;</td>
        <td style="padding: 0.25rem;">.sap-font-family-bold</td>
        <td style="padding: 0.25rem;">@include sap-font-family(bold)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Semibold</td>
        <td style="padding: 0.25rem;">font-family: "72-Semibold", "72-Semiboldfull", "72", "72full", Arial, Helvetica, sans-serif;</td>
        <td style="padding: 0.25rem;">.sap-font-family-semibold</td>
        <td style="padding: 0.25rem;">@include sap-font-family(semibold)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Semibold Duplex</td>
        <td style="padding: 0.25rem;">font-family: "72-SemiboldDuplex", "72-SemiboldDuplexfull", "72", "72full", Arial, Helvetica, sans-serif</td>
        <td style="padding: 0.25rem;">.sap-font-family-semibold-duplex</td>
        <td style="padding: 0.25rem;">@include sap-font-family(semibold-duplex)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Monospaced Regular</td>
        <td style="padding: 0.25rem;">font-family: "72Mono", "72Monofull", Lucida Console, monospace;</td>
        <td style="padding: 0.25rem;">.sap-font-family-monospaced-regular</td>
        <td style="padding: 0.25rem;">@include sap-font-family(monospaced-regular)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Monospaced Bold</td>
        <td style="padding: 0.25rem;">font-family: "72Mono-Bold", "72Mono-Boldfull", Lucida Console, monospace;</td>
        <td style="padding: 0.25rem;">.sap-font-family-monospaced-bold</td>
        <td style="padding: 0.25rem;">@include sap-font-family(monospaced-bold)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Black</td>
        <td style="padding: 0.25rem;">font-family: "72Black", "72", "72full", Arial, Helvetica, sans-serif</td>
        <td style="padding: 0.25rem;">.sap-font-family-black</td>
        <td style="padding: 0.25rem;">@include sap-font-family(black)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header</td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;</td>
        <td style="padding: 0.25rem;">.sap-font-family-header</td>
        <td style="padding: 0.25rem;">@include sap-font-family(header)</td>
    </tr>
</table>`
    }
  }
};
export const FontSize = () => fontSizeExampleHtml;
FontSize.parameters = {
  docs: {
    description: {
      story: `To set the <b>font-size</b> of an element use the <code>.sap-font-size-<i style="color: red;">value</i></code>class or the <code>@include sap-font-size(<i style="color: red;">value</i>)</code> mixin with <i style="color: red;">value</i> being one of the following:<br> header-6 | header-5 | header-4 | header-3 | header-2 | header-1 | small | medium | large 

<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Type</th>
        <th style="padding: 0.25rem;">Resultant Style</th>
        <th style="padding: 0.25rem;">Class</th>
        <th style="padding: 0.25rem;">Mixin</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header 6</td>
        <td style="padding: 0.25rem;">font-size: 0.875rem; (14px)</td>
        <td style="padding: 0.25rem;">.sap-font-size-header-6</td>
        <td style="padding: 0.25rem;">@include sap-font-size(header-6)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header 5</td>
        <td style="padding: 0.25rem;">font-size: 1rem; (16px)</td>
        <td style="padding: 0.25rem;">.sap-font-size-header-5</td>
        <td style="padding: 0.25rem;">@include sap-font-size(header-5)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header 4</td>
        <td style="padding: 0.25rem;">font-size: 1.125rem; (18px)</td>
        <td style="padding: 0.25rem;">.sap-font-size-header-4</td>
        <td style="padding: 0.25rem;">@include sap-font-size(header-4)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header 3</td>
        <td style="padding: 0.25rem;">font-size: 1.25rem; (20px)</td>
        <td style="padding: 0.25rem;">.sap-font-size-header-3</td>
        <td style="padding: 0.25rem;">@include sap-font-size(header-3)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header 2</td>
        <td style="padding: 0.25rem;">font-size: 1.5rem; (24px)</td>
        <td style="padding: 0.25rem;">.sap-font-size-header-2</td>
        <td style="padding: 0.25rem;">@include sap-font-size(header-2)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header 1</td>
        <td style="padding: 0.25rem;">font-size: 2.25rem; (36px)</td>
        <td style="padding: 0.25rem;">.sap-font-size-header-1</td>
        <td style="padding: 0.25rem;">@include sap-font-size(header-1)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Small</td>
        <td style="padding: 0.25rem;">font-size: 0.75rem; (12px)</td>
        <td style="padding: 0.25rem;">.sap-font-size-small</td>
        <td style="padding: 0.25rem;">@include sap-font-size(small)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Medium</td>
        <td style="padding: 0.25rem;">font-size: 0.875rem; (14px)</td>
        <td style="padding: 0.25rem;">.sap-font-size-medium</td>
        <td style="padding: 0.25rem;">@include sap-font-size(medium)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Large</td>
        <td style="padding: 0.25rem;">font-size: 1rem; (16px)</td>
        <td style="padding: 0.25rem;">.sap-font-size-large</td>
        <td style="padding: 0.25rem;">@include sap-font-size(large)</td>
    </tr>
</table>`
    }
  }
};
export const LineHeight = () => lineHeightExampleHtml;
LineHeight.parameters = {
  docs: {
    description: {
      story: `In general, there is no line height applied to text, as the line height e.g. affects the padding.
If a more generous line height is required for long continuous text, a consistent line height of 1.4 is recommended.

Use the <code>.sap-font-line-height</code> class to apply <b>normal</b> line-height to the elements and <code>.sap-font-line-height-long</code> class for <b>1.4</b> line-height. 
<br><br>
<b>SCSS Mixin: </b> <code>@include sap-font-line-height(<i style="color:red;">$value</i>)</code>. Omit the value for <b>normal</b> line-height: <code>@include sap-font-line-height()</code>.
`
    }
  }
};
export const CommonCases = () => commonCasesExampleHtml;
CommonCases.parameters = {
  docs: {
    description: {
      story: `<table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <tr>
        <th style="padding: 0.25rem;">Description</th>
        <th style="padding: 0.25rem;">Resultant Style (Quartz Light)</th>
        <th style="padding: 0.25rem;">Usage Examples</th>
        <th style="padding: 0.25rem;">Class</th>
        <th style="padding: 0.25rem;">Mixin</th>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Header Text in Size 3</td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;
         font-size: 20px; color: #32363a;</td>
        <td style="padding: 0.25rem;">Dynamic page header, object page header</td>
        <td style="padding: 0.25rem;">.sap-font-header-3</td>
        <td style="padding: 0.25rem;">@include sap-font(header-3)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Standard Text</td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;
         font-size: 14px; color: #32363a;</td>
        <td style="padding: 0.25rem;">Text control</td>
        <td style="padding: 0.25rem;">.sap-font-standard-text</td>
        <td style="padding: 0.25rem;">@include sap-font(standard-text)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Small Detail Text</td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;
         font-size: 12px; color: #6a6d70;</td>
        <td style="padding: 0.25rem;">Time stamps, small bylines</td>
        <td style="padding: 0.25rem;">.sap-font-small-detail-text</td>
        <td style="padding: 0.25rem;">@include sap-font(small-detail-text)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Standard Field Text</td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;
         font-size: 14px; color: #32363a;</td>
        <td style="padding: 0.25rem;">Input field, feed input, text area</td>
        <td style="padding: 0.25rem;">.sap-font-standard-field-text</td>
        <td style="padding: 0.25rem;">@include sap-font(standard-field-text)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Labels</td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;
         font-size: 14px; color: #6a6d70;</td>
        <td style="padding: 0.25rem;">Labels</td>
        <td style="padding: 0.25rem;">.sap-font-label</td>
        <td style="padding: 0.25rem;">@include sap-font(label)</td>
    </tr>
    <tr>
        <td style="padding: 0.25rem;">Descriptions</td>
        <td style="padding: 0.25rem;">font-family: "72", "72full", Arial, Helvetica, sans-serif;
         font-size: 14px; color: #6a6d70;</td>
        <td style="padding: 0.25rem;">Object attribute</td>
        <td style="padding: 0.25rem;">.sap-font-description</td>
        <td style="padding: 0.25rem;">@include sap-font(description)</td>
    </tr>
</table>`
    }
  }
};