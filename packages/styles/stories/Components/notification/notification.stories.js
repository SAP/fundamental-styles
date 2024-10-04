import notificationGroupExampleHtml from "./notification-group.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import bannerExampleHtml from "./banner.example.html?raw";

import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/notification.scss';
import '../../../src/toolbar.scss';
import '../../../src/avatar.scss';
import '../../../src/popover.scss';
import '../../../src/menu.scss';
import '../../../src/message-strip.scss';
import '../../../src/bar.scss';
import '../../../src/title.scss';
import '../../../src/link.scss';
import '../../../src/object-status.scss';
import '../../../src/btp/avatar.scss';
export default {
  title: 'Components/Notifications',
  parameters: {
    tags: ['development'],
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
Primary.storyName = 'Notification Item';
Primary.parameters = {
  docs: {
    description: {
      story: `Notification items display a container with:
      <ul>
        <li><b>Avatar</b> (optional): uses Avatar component, size XS</li>
        <li><b>Title</b> (required): the title wraps up to two lines and then truncates. For unread title (renders with bold font-weight) use <code>fd-notification__title--unread</code> modifier class.</li>
        <li><b>Description</b> (optional): the description wraps up to two lines and then truncates.</li>
        <li><b>Meta</b> (optional): items separated by a span element with class <code>fd-notification__separator</code>. Items truncate if there's not enough space. In case Title or Description truncates in an ellipsis, the meta is followed by the text <b>Expansion Trigger</b> ("More" / "Less"). </li>
        <li><b>Priority Indicator</b> (optional): the priority is displayed using Message and Status Icons.  </li>
        <li><b>Object Status</b> (optional): uses Inverted ObjectStatus / Tag (Horizon) - Inverted Object Status with icon, indication color: Second Color Set - Indication 2 - Red</li>
        <li><b>Actions</b> (optional): include a "Close" and "Overflow" button (Transparent Button) actions.</li>
      </ul>
`
    }
  }
};

export const NotificationGroup = () => notificationGroupExampleHtml;
NotificationGroup.parameters = {
  docs: {
    description: {
      story: `You can display a group of notifications in a list format, and the user can sort them from the header. A Message Strip can be places after the group header. To load more notifications, the list can have a Growing Item placed at the bottom of the group. 
    `
    }
  }
};

export const NotificationBanner = () => bannerExampleHtml;
NotificationBanner.parameters = {
  docs: {
    description: {
      story: `Notifications can be displayed as banners in the top right corner. Apply the modifier class \`fd-notification--banner\` for this option.`
    }
  }
};
