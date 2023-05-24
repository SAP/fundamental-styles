import thirdPartyContentExampleHtml from "./third-party-content.example.html?raw";
import navigationExampleHtml from "./navigation.example.html?raw";
import shellbarExampleHtml from "./shellbar.example.html?raw";
import defaultExampleHtml from "./default.example.html?raw";
import '../../../src/user-menu.scss';
import '../../../src/shellbar.scss';
import '../../../src/popover.scss';
import '../../../src/notification.scss';
import '../../../src/tabs.scss';
import '../../../src/avatar.scss';
import '../../../src/list.scss';
import '../../../src/input.scss';
import '../../../src/bar.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/title.scss';
import '../../../src/badge.scss';
import '../../../src/input-group.scss';
export default {
  title: 'Components/User Menu',
  parameters: {
    description: `The user menu can be used as a standalone component, linked to another component, or closely connected to the ShellBar.<br>
It displays an avatar button that triggers a Popover. The user menu can have multi-level navigation.
        `,
    tags: ['f3', 'theme']
  }
};
export const Default = () => defaultExampleHtml;
Default.parameters = {
  docs: {
    description: {
      story: ''
    }
  }
};
export const Shellbar = () => shellbarExampleHtml;
Shellbar.parameters = {
  docs: {
    description: {
      story: 'The user menu button is typically displayed within a Shellbar on the far-right side.'
    }
  }
};
export const Navigation = () => navigationExampleHtml;
Navigation.storyName = 'In-Place Navigation';
Navigation.parameters = {
  docs: {
    description: {
      story: `The User menu can be used for items that can be further grouped under a level but not always visible to the user.<br>
        Follow the same template for the sub-navigation as you would for a normal menu. The same Popover body and footer work for the sub-navigation items too.
`
    }
  }
};
export const ThirdPartyContent = () => thirdPartyContentExampleHtml;
ThirdPartyContent.storyName = '3rd Party Content';
ThirdPartyContent.parameters = {
  docs: {
    description: {
      story: 'User menu displays a sub-navigation component which is populated with data through a 3rd party. '
    }
  }
};