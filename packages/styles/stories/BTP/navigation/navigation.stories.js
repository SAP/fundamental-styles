import navigationExampleHtml from "./navigation.example.html?raw";
import navigationSnappedExampleHtml from "./navigation-snapped.example.html?raw";

import '../../../src/navigation.scss';
import '../../../src/icon.scss';
import '../../../src/popover.scss';
import '../../../src/menu.scss';

export default {
  title: 'BTP/Navigation',
  parameters: {
    description: ``,
    tags: ['btp', 'development']
  }
};
export const Navigation = () => navigationExampleHtml;
Navigation.storyName = 'Navigation Default';
Navigation.parameters = {
  docs: {
    description: {
      story: `Bla bla
      `
    }
  }
};

export const NavigationSnapped = () => navigationSnappedExampleHtml;
NavigationSnapped.storyName = 'Navigation Snapped Default';
NavigationSnapped.parameters = {
  docs: {
    description: {
      story: `Bla bla
      `
    }
  }
};

