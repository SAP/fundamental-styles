import detailsViewExampleHtml from "./details-view.example.html?raw";
import cozyMessagePopoverExampleHtml from "./cozy-message-popover.example.html?raw";
import messageTriggerExampleHtml from "./message-trigger.example.html?raw";
import '../../../src/list.scss';
import '../../../src/icon.scss';
import '../../../src/button.scss';
import '../../../src/object-status.scss';
import '../../../src/popover.scss';
import '../../../src/bar.scss';
import '../../../src/segmented-button.scss';
import '../../../src/message-popover.scss';
import '../../../src/link.scss';
import '../../../src/scrollbar.scss';
export default {
  title: 'Components/Message Popover',
  parameters: {
    description: `
A Message Popover is used to display a summarized list of different types of messages (error, warning, success, and information messages).
It provides a handy and systematized way to navigate and explore details for every message. It is adaptive and responsive. It renders as a dialog with a Close button in the header on phones, and as a popover on tablets and higher resolution devices.

##Usage
**When to use:**

- When you want to make sure that all content is visible on any device.
- When you want a way to centrally manage messages and show them to the user without additional work for the developer.

`,
    tags: ['f3', 'theme']
  }
};
export const CozyMessagePopover = () => cozyMessagePopoverExampleHtml;
export const DetailsView = () => detailsViewExampleHtml;
export const MessageTrigger = () => messageTriggerExampleHtml;
