import defaultExampleHtml from "./default.example.html?raw";

import '../../../../src/side-nav.scss';
import '../../../../src/navigation-list.scss';
import '../../../../src/button.scss';
import '../../../../src/icon.scss';
import '../../../../src/popover.scss';

export default {
  title: 'Components/Side Navigation',
  parameters: {
    description: `

        `,
    tags: ['uxc', 'development']
  }
};
export const Default = () => defaultExampleHtml;
Default.storyName = 'Default';
Default.parameters = {
  docs: {
    description: {
      story: `
        `
    }
  }
};
