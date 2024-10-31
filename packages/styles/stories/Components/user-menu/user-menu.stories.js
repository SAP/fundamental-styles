import defaultExampleHtml from "./default.example.html?raw";
import mobileExampleHtml from "./mobile.example.html?raw";

import '../../../src/user-menu.scss';
import '../../../src/shellbar.scss';
import '../../../src/popover.scss';
import '../../../src/notification.scss';
import '../../../src/tabs.scss';
import '../../../src/avatar.scss';
import '../../../src/list.scss';
import '../../../src/input.scss';
import '../../../src/bar.scss';
import '../../../src/title.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/title.scss';
import '../../../src/badge.scss';
import '../../../src/navigation-list.scss';
import '../../../src/input-group.scss';

export default {
  title: 'Components/User Menu',
  parameters: {
    description: `The User Profile Menu is closely connected to the ShellBar (Horizon). 
        `,
    tags: ['uxc']
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

export const Mobile = () =>mobileExampleHtml;
Mobile.parameters = {
  docs: {
    description: {
      story: ''
    }
  }
};