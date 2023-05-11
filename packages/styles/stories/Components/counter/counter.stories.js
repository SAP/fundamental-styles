import notifierExampleHtml from "./notifier.example.html?raw";
import tabsExampleHtml from "./tabs.example.html?raw";
import paragraphExampleHtml from "./paragraph.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import '../../../src/counter.scss';
import '../../../src/tabs.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
export default {
  title: 'Components/Counter',
  parameters: {
    description: 'Counter can be used as a standalone component or linked to another component. The counter of an item quickly shows how many detail elements are related, without having to navigate to the detail page.',
    tags: ['f3', 'a11y', 'development']
  }
};
export const Primary = () => primaryExampleHtml;
Primary.storyName = 'Standalone';
Primary.parameters = {
  docs: {
    description: {
      story: 'A counter with a red badge displayed as a standalone component. '
    }
  }
};
export const Paragraph = () => paragraphExampleHtml;
Paragraph.storyName = 'Text';
Paragraph.parameters = {
  docs: {
    description: {
      story: 'A counter with a red badge can be inserted in the paragraph.'
    }
  }
};
export const Tabs = () => tabsExampleHtml;
Tabs.parameters = {
  docs: {
    description: {
      story: 'A counter and red badge appears in right-hand of the tab item every time a new item is added to the list. The value of the number change as new items are added.'
    }
  }
};
export const Notifier = () => notifierExampleHtml;
Notifier.storyName = 'Notification';
Notifier.parameters = {
  docs: {
    description: {
      story: 'A counter and red badge appears over the upper right-hand corner of the notification icon every time a new notification is added to the list. It displays the number of new notifications.'
    }
  }
};