import defaultExampleExampleHtml from "./default-example.example.html?raw";
import '../../../src/sap-label.scss';
export default {
  title: 'Patterns/Label',
  parameters: {
    description: `The following classes and mixin provide a way to style your labels per SAP design. 
<br><br>
<b>CSS Classes: </b><br><br>
<code>.sap-label</code><br>
<code>.sap-label-required</code><br>
<code>.sap-label-colon</code><br>
<code>.sap-label-colon-required</code><br><br><br>
<b>SCSS Mixin: </b>
<code>@include sap-label(<i style="color: red;">$required, $colon</i>)</code><br>
where <i style="color: red;">$required</i> and <i style="color: red;">$colon</i> are optional and can be set individually. <br>
- <code>@include sap-label($required: true)</code>: to display a label with asterisk<br>
- <code>@include sap-label($colon: true)</code>: to display a label with colon<br>
- <code>@include sap-label($required: true, $colon: true)</code>: to display a label with asterisk and colon<br>`
  }
};
export const DefaultExample = () => defaultExampleExampleHtml;
DefaultExample.storyName = 'Examples';
