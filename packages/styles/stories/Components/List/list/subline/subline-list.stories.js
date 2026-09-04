import standardExampleHtml from "./standard.example.html?raw";
import longTextExampleHtml from "./long-text.example.html?raw";

import '../../../../../src/avatar.scss';
import '../../../../../src/list.scss';
import '../../../../../src/icon.scss';
import '../../../../../src/checkbox.scss';
import '../../../../../src/link.scss';
import '../../../../../src/button.scss';
import '../../../../../src/info-label.scss';

export default {
  title: 'Components/List/Subline'
};
export const Standard = () => standardExampleHtml;
Standard.storyName = 'Custom List Item with Subline';
Standard.parameters = {
  docs: {
    description: {
      story: `This list item structure is used to display accounts in the User Menu. By default, long title and subline text is truncated with an ellipsis. To allow the text to wrap across multiple lines, add the \`fd-list__title--wrap\` and \`fd-list__subline--wrap\` modifier classes respectively.
    `
    }
  }
}

export const LongText = () => longTextExampleHtml;
LongText.storyName = 'Subline List with Wrapping Text';
LongText.parameters = {
  docs: {
    description: {
      story: `By default, long title and subline text is truncated with an ellipsis. Wrapping can be enabled at three levels:

**List level** — add \`fd-list--wrap\` to the root element to wrap all items:
\`\`\`html
<ul class="fd-list fd-list--subline fd-list--wrap">
\`\`\`

**Item level** — add \`fd-list__item--wrap\` to a single list item:
\`\`\`html
<li class="fd-list__item fd-list__item--wrap">
\`\`\`

**Element level** — add modifier classes to individual elements:
- \`fd-list__title--wrap\`
- \`fd-list__subline--wrap\``
    }
  }
}