import inDialogExampleHtml from "./in-dialog.example.html?raw";
import mobileExampleHtml from "./mobile.example.html?raw";
import notificationGroupExampleHtml from "./notification-group.example.html?raw";
import errorExampleHtml from "./error.example.html?raw";
import warningExampleHtml from "./warning.example.html?raw";
import informationExampleHtml from "./information.example.html?raw";
import noAvatarExampleHtml from "./no-avatar.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import notificationItemBtpHtml from "./notification-item-btp.example.html?raw";
import notificationGroupHeaderBtpHtml from "./notification-group-header-btp.example.html?raw";
import notificationGroupBtpHtml from "./notification-group-btp.example.html?raw";

import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/notification.scss';
import '../../../src/tabs.scss';
import '../../../src/avatar.scss';
import '../../../src/popover.scss';
import '../../../src/menu.scss';
import '../../../src/message-strip.scss';
import '../../../src/dialog.scss';
import '../../../src/bar.scss';
import '../../../src/title.scss';
import '../../../src/btp/avatar.scss';
export default {
  title: 'Components/Notifications',
  parameters: {
    tags: ['f3', 'a11y', 'theme', 'development'],
    description: `
Notifications are used to relay information to the user about a situation or task that requires their input. They can notice and access the notifications by the bell icon in the shell bar on the top-right of the screen. In the notification popover, they take immediate action, navigate to the source of a specific notification or in the case of a notification group, they can sort the list items in various ways.

##Usage
**Use notifications if:**

* You want to make users aware of situations that require attention.
* You intend to reduce the amount of information and actions to a minimum, but provide enough information to highlight the level of importance.
            `,
    components: ['button', 'icon', 'notification', 'tabs', 'avatar', 'popover', 'menu', 'message-strip', 'dialog', 'bar', 'title']
  }
};
export const Primary = () => primaryExampleHtml;
Primary.parameters = {
  docs: {
    description: {
      story: `
Primary notifications display a container with an avatar, content area with text, as well as an open and close button. To display primary notifications, use the \`fd-notification\` class.
`
    }
  }
};
export const NoAvatar = () => noAvatarExampleHtml;
NoAvatar.parameters = {
  docs: {
    description: {
      story: `
Notifications can be displayed without an avatar by adding the \`fd-notification__content--no-avatar\` modifier class together with the \`fd-notification__content\` class.
`
    }
  }
};
export const Information = () => informationExampleHtml;
Information.parameters = {
  docs: {
    description: {
      story: `
Notifications can also include alerts, and in this case it is informative. You can display information alerts by adding the \`fd-message-strip fd-message-strip--information fd-message-strip--dismissible\`. To add text to the message, add the \`fd-message-strip__text\` class before the text in paragraph tags.
`
    }
  }
};
export const Warning = () => warningExampleHtml;
Warning.parameters = {
  docs: {
    description: {
      story: `
Notifications can display warning alerts by adding the \`fd-message-strip fd-message-strip--warning fd-message-strip--dismissible\` class.
`
    }
  }
};
export const Error = () => errorExampleHtml;
Error.parameters = {
  docs: {
    description: {
      story: `
Notifications can display error alerts by adding the \`fd-message-strip fd-message-strip--error fd-message-strip--dismissible\` class.
`
    }
  }
};
export const NotificationGroup = () => notificationGroupExampleHtml;
NotificationGroup.parameters = {
  docs: {
    description: {
      story: `You can display a group of notifications in a list format, and the user can sort them from the header. To display a notification group, add the \`fd-notification fd-notification__group\` class.
    `
    }
  }
};
export const Mobile = () => mobileExampleHtml;
Error.mobile = {
  docs: {}
};
export const InDialog = () => inDialogExampleHtml;
InDialog.parameters = {
  docs: {
    description: {
      story: `If you want to show the notification in a dialog, you need to add the <code>fd-notification--in-dialog</code> class to the notification.
            Also, you need to apply \`fd-dialog__body--no-vertical-padding fd-dialog__body--no-horizontal-padding\` classes to the dialog body.`
    }
  }
};

// BTP Examples
export const NotificationItemBTP = () => notificationItemBtpHtml;
NotificationItemBTP.parameters = {
  docs: {
    description: {
      story: ``
    }
  }
};

export const NotificationGroupHeaderBTP = () => notificationGroupHeaderBtpHtml;
NotificationGroupHeaderBTP.parameters = {
  docs: {
    description: {
      story: ``
    }
  }
};

export const NotificationGroupBTP = () => notificationGroupBtpHtml;
NotificationGroupBTP.parameters = {
  docs: {
    description: {
      story: ``
    }
  }
};