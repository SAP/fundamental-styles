import noHeaderExampleHtml from "./no-header.example.html?raw";
import dialogExampleHtml from "./dialog.example.html?raw";
import popoverExampleHtml from "./popover.example.html?raw";
import '../../../src/quick-view.scss';
import '../../../src/bar.scss';
import '../../../src/button.scss';
import '../../../src/popover.scss';
import '../../../src/dialog.scss';
import '../../../src/avatar.scss';
import '../../../src/icon.scss';
import '../../../src/title.scss';
import '../../../src/link.scss';
import '../../../src/form-layout-grid.scss';
import '../../../src/form-group.scss';
import '../../../src/form-item.scss';
import '../../../src/form-label.scss';
import '../../../src/input.scss';
import '../../../src/text.scss';
export default {
  title: 'Components/Quick View',
  parameters: {
    description: `The quick view is similar to a popover but has a predefined structure, a fixed set of UI
        elements, and automatic UI rendering. Should be used in combination with the popover or dialog components`,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const Popover = () => popoverExampleHtml;
Popover.parameters = {
  docs: {
    description: {
      story: 'QuickView component as popover'
    }
  }
};
export const Dialog = () => dialogExampleHtml;
Dialog.parameters = {
  docs: {
    description: {
      story: `QuickView component as dialog. Because of the dialog structure quick view title should be
        set within the dialog header but not in the quick view header`
    }
  }
};
export const NoHeader = () => noHeaderExampleHtml;
NoHeader.storyName = 'Without the header';
NoHeader.parameters = {
  docs: {
    description: {
      story: 'QuickView without the header'
    }
  }
};