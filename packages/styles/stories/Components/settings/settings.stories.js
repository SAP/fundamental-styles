import userAccountExampleHtml from "./xl-user-account.example.html?raw";
import appearanceExampleHtml from "./xl-appearance.example.html?raw";
import notificationsExampleHtml from "./xl-notifications.example.html?raw";
import notificationsDetailsExampleHtml from "./xl-notifications-details.example.html?raw";
import xlExampleHtml from "./xl.example.html?raw";
import mdExampleHtml from "./md.example.html?raw";
import smExampleHtml from "./sm.example.html?raw";

import '../../../src/avatar.scss';
import '../../../src/icon.scss';
import '../../../src/input.scss';
import '../../../src/title.scss';
import '../../../src/bar.scss';
import '../../../src/list.scss';
import '../../../src/dialog.scss';
import '../../../src/toolbar.scss';
import '../../../src/icon-tab-bar.scss';
import '../../../src/button.scss';
import '../../../src/message-strip.scss';
import '../../../src/settings.scss';
import '../../../src/switch.scss';
import '../../../src/popover.scss';
import '../../../src/select.scss';


export default {
  title: 'Components/Settings',
  parameters: {
    description: `The Settings Dialog allows users to personalize their Fiori experience by adjusting various settings.<br><br> <h3>Layout and Structure</h3>
    The Settings Dialog follows a standard dialog format with a split layout inside the content area. On the left, a list of option groups is displayed. Selecting a group reveals its corresponding settings in the detail area on the right.<br><br> 
    <ul>
      <li><b>List Area - </b>The area which contains the list of settings.</li>
      <li><b>Detail Area - </b>This area contains:.
        <ul>
          <li><b>Header - </b>The area which contains the title and the header of the selected group is settings. Varies based on selection. It's built using Toolbar, IconTabBar and Bar components.</li>
          <li><b>Content - </b>Some detail pages may contain forms to lay out various controls depending on the type of settings. Content Area can be scrollable.</li>
        </ul>
      </li>
      <li><b>Footer - </b>Follows a standard Page Footer layout</li>
    </ul>
- <code>.fd-settings</code> applied on an element with class <code>.fd-dialog</code>
  - <code>.fd-settings\\_\\_dialog-content</code> applied on an element with class <code>.fd-dialog\\_\\_content</code>
    - <code>.fd-settings\\_\\_dialog-body</code> applied on an element with class <code>.fd-dialog\\_\\_body</code>
      - <code>.fd-settings\\_\\_list-area</code>
        - <code>.fd-settings\\_\\_list-container</code>
          - <code>.fd-settings\\_\\_list</code> with modifier <code>.fd-settings\\_\\_list--footer</code> applied on an element with class <code>.fd-list</code>
      - <code>.fd-settings\\_\\_detail-area</code>
          - <code>.fd-settings\\_\\_header</code>  applied on an element with class <code>.fd-bar fd-bar--header</code>
          - <code>.fd-settings\\_\\_tab-bar</code>  applied on an element with class <code>.fd-icon-tab-bar</code>
          - <code>.fd-settings\\_\\_content</code> with modifiers <code>.fd-settings\\_\\_content--no-background</code> and <code>.fd-settings\\_\\_content--no-padding</code> used individually or applied on an element with class <code>.fd-icon-tab-bar\\_\\_panel</code>
    `,
    tags: ['uxc']
  }
};

export const UserAccount = () => userAccountExampleHtml;
UserAccount.storyName = 'User Account (L-XL-XXL)';
UserAccount.parameters = {
  docs: {
    description: {
      story: ''
    }
  }
};

export const Appearance = () => appearanceExampleHtml;
Appearance.storyName = 'Appearance (L-XL-XXL)';
Appearance.parameters = {
  docs: {
    description: {
      story: ''
    }
  }
};

export const Notifications = () => notificationsExampleHtml;
Notifications.storyName = 'Notifications (L-XL-XXL)';
Notifications.parameters = {
  docs: {
    description: {
      story: ''
    }
  }
};

export const NotificationsDetails = () => notificationsDetailsExampleHtml;
NotificationsDetails.storyName = 'Notifications Details (L-XL-XXL)';
NotificationsDetails.parameters = {
  docs: {
    description: {
      story: ''
    }
  }
};

export const Xl = () => xlExampleHtml;
Xl.storyName = 'L-XL-XXL (with Tabs and overflowing content)';
Xl.parameters = {
  docs: {
    description: {
      story: ''
    }
  }
};

export const Md = () =>mdExampleHtml;
Md.storyName = 'MD';
Md.parameters = {
  docs: {
    description: {
      story: ''
    }
  }
};

export const Sm = () =>smExampleHtml;
Sm.storyName = 'SM';
Sm.parameters = {
  docs: {
    description: {
      story: ''
    }
  }
};