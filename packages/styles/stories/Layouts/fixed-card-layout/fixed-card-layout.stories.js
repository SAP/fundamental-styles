import fixedCardLayoutExampleHtml from "./fixed-card-layout.example.html?raw";
import '../../../src/fixed-card-layout.scss';
import '../../../src/avatar.scss';
import '../../../src/card.scss';
import '../../../src/object-status.scss';
import '../../../src/numeric-content.scss';
import '../../../src/table.scss';
import '../../../src/checkbox.scss';
import '../../../src/list.scss';
import '../../../src/icon.scss';
export default {
  title: 'Layouts/Fixed Card Layout',
  parameters: {
    description: `The fixed card layout is a layout for the overview page. The cards have a fixed width, and the height is determined by the card type and the embedded control.
        `,
    tags: ['f3', 'a11y', 'theme', 'development'],
    components: ['fixed-card-layout', 'avatar', 'card', 'object-status', 'numeric-content', 'table', 'checkbox', 'list', 'icon']
  }
};
export const FixedCardLayout = () => fixedCardLayoutExampleHtml;
FixedCardLayout.storyName = 'Fixed card layout with 3 columns';
FixedCardLayout.parameters = {
  docs: {
    story: {
      iframeHeight: 900
    },
    description: {
      story: `Cards arrangement in a 3 column layout.
* Use \`fd-fixed-card-layout__card-layout\` class for the wrapper element, specify amount of columns with \`fd-fixed-card-layout__card-layout--columns-N\` class, where \`1 < N < 11\`.
Layout is single column by default. Also, set \`height\` or \`max-height\` for the wrapper element.
* Apply \`fd-fixed-card-layout__card\` class to the every card element.`
    }
  }
};