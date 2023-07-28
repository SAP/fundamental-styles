import hyphenationExampleHtml from "./hyphenation.example.html?raw";
import expandExampleHtml from "./expand.example.html?raw";
import maxLinesExampleHtml from "./max-lines.example.html?raw";
import whitespaceExampleHtml from "./whitespace.example.html?raw";
import defaultExampleExampleHtml from "./default-example.example.html?raw";
import '../../../src/text.scss';
import '../../../src/link.scss';
export default {
  title: 'Components/Text',
  parameters: {
    description: `The text component displays text inside a form, table, or any other content area.
        It is generally used throughout the entire application and is responsive to all screen sizes.`,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const DefaultExample = () => defaultExampleExampleHtml;
DefaultExample.storyName = 'Default';
DefaultExample.parameters = {
  docs: {
    description: {
      story: `The default text component can display lines of text that wrap to the next line
        once they reach the end of the content container width.`
    }
  }
};
export const Whitespace = () => whitespaceExampleHtml;
Whitespace.parameters = {
  docs: {
    description: {
      story: `The text component has a property that allows browsers to render specified indents and
        whitespace. To display indents and/or whitespace, add a
        \`fd-text--pre-wrap\` modifier class to the main element.`
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
add the \`fd-text--max-lines\` modifier class and an inline style rule with the number of
lines to the main element. For example, add \`style="-webkit-line-clamp: 3;"\` to display
three lines of text.

**Note**: The property \`-webkit-line-clamp\` doesn't work in IE11 and should be changed
to \`height\`. For example, \`style="height: 200px;"\`.
`
    }
  }
};
export const Expand = () => expandExampleHtml;
Expand.parameters = {
  docs: {
    description: {
      story: `Along with max lines, text component can display "MORE" and "LESS" links that can show
more or less of the text.`
    }
  }
};
export const Hyphenation = () => hyphenationExampleHtml;
Hyphenation.parameters = {
  docs: {
    description: {
      story: `The text component can display words that are broken at appropriate hyphenation
points in a text block. To display hyphens, add the \`fd-text--hyphenation\` to the main element.

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