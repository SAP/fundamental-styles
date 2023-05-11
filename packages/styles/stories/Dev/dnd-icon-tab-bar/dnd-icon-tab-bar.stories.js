import separatorHoveredTabExampleHtml from "./separator-hovered-tab.example.html?raw";
import hoveredTabExampleHtml from "./hovered-tab.example.html?raw";
import '../../../src/icon.scss';
import '../../../src/icon-tab-bar.scss';
import '../../../src/popover.scss';
import '../../../src/menu.scss';
import '../../../src/button.scss';
import '../../../src/list.scss';
export default {
  title: 'Dev/Drag and Drop Icon Tab Bar',
  parameters: {
    description: `
The Drag and Drop Icon Tab Bar can be used for styling state for drag and drop actions.


<br><br><br>
      `,
    tags: ['f3', 'theme', 'development']
  }
};
export const HoveredTab = () => hoveredTabExampleHtml;
HoveredTab.storyName = 'Hovered tab state';
HoveredTab.parameters = {
  docs: {
    description: {
      story: ''
    }
  }
};
export const SeparatorHoveredTab = () => separatorHoveredTabExampleHtml;
SeparatorHoveredTab.storyName = 'Separator hovered tab state';
SeparatorHoveredTab.parameters = {
  docs: {
    description: {
      story: ''
    }
  }
};