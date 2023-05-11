import withSubmenuExampleHtml from "./with-submenu.example.html?raw";
import menuIconExampleHtml from "./menu-icon.example.html?raw";
import differentStatesExampleHtml from "./different-states.example.html?raw";
import seperatedItemsExampleHtml from "./seperated-items.example.html?raw";
import mobileCozyModeExampleHtml from "./mobile-cozy-mode.example.html?raw";
import desktopAndTabletOverflowExampleHtml from "./desktop-and-tablet-overflow.example.html?raw";
import desktopAndTabletExampleHtml from "./desktop-and-tablet.example.html?raw";
import '../../../src/bar.scss';
import '../../../src/button.scss';
import '../../../src/dialog.scss';
import '../../../src/icon.scss';
import '../../../src/menu.scss';
import '../../../src/title.scss';
export default {
  title: 'Components/Menu',
  parameters: {
    tags: ['f3', 'a11y', 'theme', 'development'],
    description: `
The menu component is the listing structure with optional headers to create menus.

Commonly used as the contents when composing "dropdowns", "contextual menus", etc, when paired with the popover component.
`
  }
};
export const DesktopAndTablet = () => desktopAndTabletExampleHtml;
DesktopAndTablet.storyName = 'Desktop and Tablet Modes';
DesktopAndTablet.parameters = {
  docs: {
    story: {
      iframeHeight: 300
    },
    description: {
      story: 'The basic stucture of a menu. Place the menu item title in a `<span>` tag using class `fd-menu__title` and wrap it in the `fd-menu__link` and `fd-menu__item` classes as shown. Default mode is the cozy tablet mode, no class has to be added for this. Use class modifier`fd-menu--compact` on menu container level for desktop mode.'
    }
  }
};
export const DesktopAndTabletOverflow = () => desktopAndTabletOverflowExampleHtml;
DesktopAndTabletOverflow.storyName = 'Desktop and Tablet Modes with vertical overflow';
DesktopAndTabletOverflow.parameters = {
  docs: {
    story: {
      iframeHeight: 300
    },
    description: {
      story: 'The `fd-menu--overflow` modifier class will clip the content and add a vertical scroll to the element. You need to manually set the max-height of the element on the `fd-menu` level. For example: `style="max-height: 120px;"`. <br><b>Important: </b>this modifier class cannot be used in cases where the menu has a submenu.'
    }
  }
};
export const MobileCozyMode = () => mobileCozyModeExampleHtml;
MobileCozyMode.parameters = {
  docs: {
    story: {
      iframeHeight: 300
    },
    description: {
      story: 'The basic stucture of a menu in mobile where it opens as a dialog. Use class `fd-menu--mobile` on menu container level. Example shows the parent menu\'s item in active state to simulate a pressed/touched event. Submenu appears in its own fullscreen dialog in mobile devices. The device\'s back button takes one back to the parent menu fullscreen dialog.'
    }
  }
};
export const SeperatedItems = () => seperatedItemsExampleHtml;
SeperatedItems.storyName = 'List with separated items';
SeperatedItems.parameters = {
  docs: {
    story: {
      iframeHeight: 300
    },
    description: {
      story: 'To add separators between the items, use the class `fd-menu__separator` in its own `<span>` after the `<li>` item where you want the separation.'
    }
  }
};
export const DifferentStates = () => differentStatesExampleHtml;
DifferentStates.storyName = 'List different states';
DifferentStates.parameters = {
  docs: {
    story: {
      iframeHeight: 300
    },
    description: {
      story: `
Simulate different states to show state behaviour between the items.

- For simulating hover state, use class \`is-hover\` on the menu item.
- For simulating active state, use class \`is-active\` on the menu item.
- For simulating selected state, use class \`is-selected\` on the menu item.
- For simulating selected-hover state, use classes \`is-selected is-hover\` on the menu item.
- For simulating disabled state, use class \`is-disabled\` on the menu item.

To remove default box shadow from menu containers use \`fd-menu__list--no-shadow\` or \`fd-menu__sublist--no-shadow\`.`
    }
  }
};
export const MenuIcon = () => menuIconExampleHtml;
MenuIcon.storyName = 'List with Icon';
MenuIcon.parameters = {
  docs: {
    story: {
      iframeHeight: 220
    },
    description: {
      story: `
To create an addon before or after \`fd-menu__title\` element, use elements with folowing classes inside \`fd-menu__link\`:
- \`fd-menu__addon-before\`   - styles addon befotre \`fd-menu__title\`
- \`fd-menu__addon-after\`    - styles addon after \`fd-menu__title\`
- \`fd-menu__shortcut\`       - styles shortcut placed after \`fd-menu__title\`
According to Fiori3 design shortcuts should be on desktop devices.`
    }
  }
};
export const WithSubmenu = () => withSubmenuExampleHtml;
WithSubmenu.parameters = {
  docs: {
    story: {
      iframeHeight: 400
    },
    description: {
      story: `
Menu with an additional submenu that can be used for items that can be further grouped under a level but not necessarily visible to user always.

For a submenu, do the following:
- Specify \`fd-menu__link\` class normally like other items. Use \`has-child\` class to apply styles for parent containing the submenu.
- Create an addon indicating submenu level using \`fd-menu__addon-after--submenu\` class and an icon.
- After the end of the \`fd-menu__link\` container, use \`fd-menu__sublist\` class in its own \`<ul>\`
- Follow the same template for submenu as you would for a normal menu. The same \`fd-menu__item\` and \`fd-menu__link\` works for the subitems too.
`
    }
  }
};