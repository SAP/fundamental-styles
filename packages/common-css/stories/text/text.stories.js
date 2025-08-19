import hyphenationExampleHtml from "./hyphenation.example.html?raw";
import maxLinesExampleHtml from "./max-lines.example.html?raw";
import whitespaceExampleHtml from "./whitespace.example.html?raw";
import defaultExampleExampleHtml from "./default-example.example.html?raw";
import '../../src/sap-text.scss';

export default {
  title: 'Text',
  parameters: {
    description: `The text component displays text inside a form, table, or any other content area. It is generally used throughout the entire application and is responsive to all screen sizes.
<br>

<b>CSS Classes: </b>
<ul>
    <li><code>.sap-text</code></li>
    <li><code>.sap-text-max-lines</code></li>
    <li><code>.sap-text-pre-wrap</code></li>
    <li><code>.sap-text-hyphenation</code></li>
</ul>
<br>
<b>SCSS Mixin: </b>
<code>@include sap-text(<i style="color: red;">$modifier</i>)</code><br>
where <i style="color: red;">$modifier</i> is optional and can be:
<ul>
    <li><code>max-lines</code>: to display text with a maximum line count</li>
    <li><code>pre-wrap</code>: to display indents and/or whitespace</li>
    <li><code>hyphenation</code>: to display hyphens</li>
</ul>`
  }
};
export const DefaultExample = () => defaultExampleExampleHtml;
DefaultExample.storyName = 'Default';
DefaultExample.parameters = {
  docs: {
    description: {
      story: `The default text component can display lines of text that wrap to the next line once they reach the end of the content container width.`
    }
  }
};
export const Whitespace = () => whitespaceExampleHtml;
Whitespace.parameters = {
  docs: {
    description: {
      story: `The text component has a property that allows browsers to render specified indents and whitespace. To display indents and/or whitespace, use the \`.fd-text-pre-wrap\` class or \`data-wrap\` attribute to \`.fd-text\` class.`
    }
  }
};
export const MaxLines = () => maxLinesExampleHtml;
MaxLines.storyName = 'Max lines';
MaxLines.parameters = {
  docs: {
    description: {
      story: `The text component can be displayed with a maximum number of lines.
When the maximum is reached, the text truncates and displays an ellipsis. To display text with a maximum line count,
use the \`.fd-text-max-lines\` class and an inline style rule with the number of
lines to the main element. For example, add \`style="-webkit-line-clamp: 3;"\` to display
three lines of text.

You can also add the \`data-lines\` attribute to \`.fd-text\` class and specify the number of lines. 

**Note**: The property \`-webkit-line-clamp\` doesn't work in IE11 and should be changed
to \`height\`. For example, \`style="height: 200px;"\`.
`
    }
  }
};
export const Hyphenation = () => hyphenationExampleHtml;
Hyphenation.parameters = {
  docs: {
    description: {
      story: `The text component can display words that are broken at appropriate hyphenation
points in a text block. To display hyphens, use the \`.fd-text-hyphenation\` class or or \`data-hyphens\` attribute to \`.fd-text\` class.

**It is also possible to suggest line break opportunities with two Unicode characters that manually specify
potential line breakpoints:**

- Hyphen: The "hard" hyphen character indicates a visible line break opportunity.
Even if the line is not actually broken at that point, the hyphen is still displayed.

- Shy: An invisible, "soft" hyphen. Although this character is not visible, it marks a place
where the browser should break the word if hyphenation is necessary.

In HTML, add the \`&shy;\` Unicode to insert a soft hyphen.`
    }
  }
};