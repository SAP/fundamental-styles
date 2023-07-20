import notificationItemExampleHtml from "./notification-item.example.html?raw";
import notificationGroupItemExampleHtml from "./notification-group-item.example.html?raw";
import notificationPopoverExampleHtml from "./notification-popover.example.html?raw";
import '../../../src/btp/avatar.scss';
import '../../../src/btp/notification.scss';
import '../../../src/btp/popover.scss';
import '../../../src/icon.scss';
import '../../../src/avatar.scss';
import '../../../src/button.scss';
import '../../../src/bar.scss';


export default {
  title: 'BTP/Notification',
  parameters: {
    description: `
`,
    tags: ['btp']
  }
};
export const NotificationItem = () => notificationItemExampleHtml;
NotificationItem.parameters = {
  docs: {
    story: {
      iframeHeight: 200
    },
    description: {
      story: `
      `
    }
  }
};
export const NotificationGroupItem = () => notificationGroupItemExampleHtml;
NotificationGroupItem.parameters = {
  docs: {
    story: {
      iframeHeight: 200
    },
    description: {
      story: `For collapsed Notification Group Item use one of the following modifier classes <code>.fdb-notification__group-item--collapsed</code>, <code>.is-collapsed</code> or <code>.collapsed</code> together with <code>.fdb-notification__group-item</code> base class. <br>
      The parent element with class <code>.fdb-notification__group</code> should also have a modifier class <code>.fdb-notification__group--collapsed</code>. The <code>.is-collapsed</code> or <code>.collapsed</code> modifiers can also be used.
      `
    }
  }
};
export const NotificationPopover = () => notificationPopoverExampleHtml;
NotificationPopover.parameters = {
  docs: {
    story: {
      iframeHeight: 200
    },
    description: {
      story: `
      `
    }
  }
};