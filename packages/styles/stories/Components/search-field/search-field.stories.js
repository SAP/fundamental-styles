import defaultExampleHtml from "./default.example.html?raw";
import '../../../src/icon.scss';
import '../../../src/popover.scss';
import '../../../src/list.scss';
import '../../../src/form-label.scss';
import '../../../src/form-message.scss';
import '../../../src/select.scss';
import '../../../src/dialog.scss';
import '../../../src/toolbar.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/layout-grid.scss';
import '../../../src/form-item.scss';
import '../../../src/search-field.scss';

export default {
  title: 'Components/Search Field',
  parameters: {
    description: ``,
    tags: ['btp']
  }
};
export const Default = () => defaultExampleHtml;
Default.parameters = {
  docs: {
    description: {
      story: `
        `
    }
  }
};