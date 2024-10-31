
import userMenuExampleHtml from "./user-menu.example.html?raw";
import userMenuTabletExampleHtml from "./user-menu-tablet.example.html?raw";
import userMenuPhoneExampleHtml from "./user-menu-phone.example.html?raw";

import '../../../src/avatar.scss';
import '../../../src/btp/avatar.scss';
import '../../../src/icon.scss';
import '../../../src/popover.scss';
import '../../../src/button.scss';
import '../../../src/navigation.scss';
import '../../../src/user-menu.scss';
import '../../../src/bar.scss';

export default {
  title: 'BTP/User Menu',
  parameters: {
    description: `The User Menu offers a range of options that are specific to the user and is accessible on all BTP tool screens. Users can access it by clicking on the avatar on the end side of the Tool Header. Apart from always available options, the User Menu can also contain tool-specific actions.

The BTP implementation extends the Visual Core implementation by adding the <code>.fd-user-menu--tool-header</code> modifier class to the <code>.fd-user-menu</code> base class.
`,
    tags: ['btp']
  }
};
export const UserMenuExample = () => userMenuExampleHtml;
UserMenuExample.storyName = 'Desktop';
UserMenuExample.parameters = {
  docs: {
    story: {
    },
    description: {
      story: ``
    }
  }
};

export const UserMenuTabletExample = () => userMenuTabletExampleHtml;
UserMenuTabletExample.storyName = 'Tablet';
UserMenuTabletExample.parameters = {
  docs: {
    story: {
    },
    description: {
      story: `The interaction behavior for desktop and tablet is identical. The only difference is in the sizes of the components used. `
    }
  }
};

export const UserMenuPhoneExample = () => userMenuPhoneExampleHtml;
UserMenuPhoneExample.storyName = 'Phone';
UserMenuPhoneExample.parameters = {
  docs: {
    story: {
    },
    description: {
      story: `For mobile phones, in addition to tablet deltas, the cascading of menus happens in place. In the sub-menus, a title with a back button appears. `
    }
  }
};
