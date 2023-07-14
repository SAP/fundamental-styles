import textAndIconPhoneExampleHtml from "./text-and-icon-phone.example.html?raw";
import textAndIconExampleHtml from "./text-and-icon.example.html?raw";
import textOnlyPhoneExampleHtml from "./text-only-phone.example.html?raw";
import textOnlyExampleHtml from "./text-only.example.html?raw";
import '../../../src/tool-header.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/list.scss';
import '../../../src/popover.scss';
import '../../../src/icon-tab-bar.scss';
import '../../../src/avatar.scss';
import '../../../src/form-label.scss';
import '../../../src/input-group.scss';
import '../../../src/text.scss';
import '../../../src/title.scss';
import '../../../src/horizontal-navigation.scss';
export default {
  title: 'Patterns/Horizontal Navigation',
  parameters: {
    description: `
The Horizontal Navigation is an optional layout to the Vertical Navigation. One application should use the Horizontal Tabs Navigation alternatively to the Side Navigation, depending on its requirements, mainly related to the complexity of navigable items.
Preferably the Horizontal Navigation is suitable for a maximum of seven to nine primary items.

It displays the navigation items respectively in horizontal mode. The Tabs are displayed underneath the Tool Header, enabling the navigation into another page and context within the same Application while the Tool Header and the Tabs remain static.

The Horizontal Navigation Tabs are built with the IconTabBar component with two additional modifier classes \`.fd-icon-tab-bar--navigation\` and \`.fd-icon-tab-bar--navigation-horizontal\`.

The Horizontal Navigation is always integrated with the Tool Header. It should not be displayed standalone.

Both components, Tool Header and IconTabBar, are wrapped in an element with \`.fd-horizontal-navigation \` class.

Differently than the Side Navigation, the Horizontal Navigation does not embed a separate Utility Section (bottom aligned in the Side Navigation). Those items, mainly legal information and useful links, are recommended to be placed in the User Menu within the Tool Header.

Another aspect differentiating the Horizontal Navigation layout is that it has only one display mode. It has no condensed or off-canvas mode, which remain specific states of the Side Navigation.

        `,
    tags: ['btp', 'theme', 'development']
  }
};
export const TextOnly = () => textOnlyExampleHtml;
TextOnly.storyName = 'Horizontal Navigation Text Only';
export const TextOnlyPhone = () => textOnlyPhoneExampleHtml;
TextOnlyPhone.storyName = 'Horizontal Navigation Text Only Phone View';
export const TextAndIcon = () => textAndIconExampleHtml;
TextAndIcon.storyName = 'Horizontal Navigation Text And Icon';
TextAndIcon.parameters = {
  docs: {
    description: {
      story: 'Icon Tab Bars with Single Click Areas'
    }
  }
};
export const TextAndIconPhone = () => textAndIconPhoneExampleHtml;
TextAndIconPhone.storyName = 'Horizontal Navigation Text And Icon Phone View';
TextAndIconPhone.parameters = {
  docs: {
    description: {
      story: 'Icon Tab Bars with Two Click Areas'
    }
  }
};
