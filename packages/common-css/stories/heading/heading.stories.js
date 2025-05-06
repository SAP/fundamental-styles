import levelsExampleHtml from "./levels.example.html?raw";
import '../../src/sap-heading.scss';
export default {
  title: 'Heading',
  parameters: {
    description: `
The following classes and mixin provide a way to style your headings per SAP design. 
<br><br>
<b>CSS Class: </b>
<code>.sap-heading-<i style="color: red;">number</i></code><br><br>
<b>SCSS Mixin: </b>
<code>@include sap-heading(<i style="color: red;">level</i>)</code><br><br>
where: <br><br>
<code style="color: red;">-number</code>: is the heading level, an integer from 1 to 6 <br>
<code style="color: red;">-level</code>: is the heading level -> h1, h2, h3, h4, h5, h6`
  }
};
export const Levels = () => levelsExampleHtml;
Levels.storyName = 'Semantic Levels';
Levels.parameters = {
  docs: {
    description: {
      story: 'There are 6 semantic levels of a heading element. There should only be one H1 on a page, and headings should only appear in ascending order without skipping a level; i.e. even if there are only 3 levels on a page, the order must be H1-H2-H3, and no other levels used.'
    }
  }
};
