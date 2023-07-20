import withSubmenuExampleHtml from "./with-submenu.example.html?raw";
import menuIconExampleHtml from "./menu-icon.example.html?raw";
import differentStatesExampleHtml from "./different-states.example.html?raw";
import seperatedItemsExampleHtml from "./seperated-items.example.html?raw";
import mobileModeExampleHtml from "./mobile-mode.example.html?raw";
import overflowExampleHtml from "./overflow.example.html?raw";
import defaultExampleHtml from "./default.example.html?raw";
import segmentedButtonExampleHtml from "./segmented-button.example.html?raw";
import toggleButtonExampleHtml from "./toggle-button.example.html?raw";
import inputExampleHtml from "./input.example.html?raw";
import buttonsExampleHtml from "./buttons.example.html?raw";
import '../../../src/bar.scss';
import '../../../src/button.scss';
import '../../../src/dialog.scss';
import '../../../src/icon.scss';
import '../../../src/menu.scss';
import '../../../src/title.scss';
import '../../../src/input.scss';
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
export const Default = () => defaultExampleHtml;
Default.parameters = {
  docs: {
    description: {
      story: `The basic structure of a menu. Place the menu item title in a \`<span>\` tag using class \`fd-menu__title\` and wrap it in the \`fd-menu__link\` and \`fd-menu__item\` classes as shown.
               <br><b>Note:</b>Use compact menus for the Desktop and use cozy for the Tablet mode.`
    }
  }
};
export const Overflow = () => overflowExampleHtml;
Overflow.storyName = 'Vertical overflow';
Overflow.parameters = {
  docs: {
    description: {
      story: 'The `fd-menu--overflow` modifier class will clip the content and add a vertical scroll to the element. You need to manually set the max-height of the element on the `fd-menu` level. For example: `style="max-height: 120px;"`. <br><b>Important: </b>this modifier class cannot be used in cases where the menu has a submenu.'
    }
  }
};
export const MobileMode = () => mobileModeExampleHtml;
MobileMode.parameters = {
  docs: {
    description: {
      story: 'The basic structure of a menu in mobile where it opens as a dialog. Use class `fd-menu--mobile` on menu container level. Example shows the parent menu\'s item in active state to simulate a pressed/touched event. Submenu appears in its own fullscreen dialog in mobile devices. The device\'s back button takes one back to the parent menu fullscreen dialog.'
    }
  }
};
export const SeperatedItems = () => seperatedItemsExampleHtml;
SeperatedItems.storyName = 'List with separated items';
SeperatedItems.parameters = {
  docs: {
    description: {
      story: `Separators can be added between Menu Items by adding the \`has-separator\` class to the element with class \`fd-menu__item\`. The separator will appear under this item.`
    }
  }
};
export const DifferentStates = () => differentStatesExampleHtml;
DifferentStates.storyName = 'List different states';
DifferentStates.parameters = {
  docs: {
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
export const SegmentedButton = () => segmentedButtonExampleHtml;
SegmentedButton.storyName = 'Extended Menu List Items (Segmented Button)';
SegmentedButton.parameters = {
  docs: {
    description: {
      story: `Each view of the segmented button gets its own menu item. The selected Button in the Segmented Button gets the Active Dot in front of the Menu List Item and is always separated with a separator.
      The ‘segmented button menu items’ cannot have an icon in front. Instead, the place is reserved for the Active Dot.
`
    }
  }
};

export const ToggleButton = () => toggleButtonExampleHtml;
ToggleButton.storyName = 'Extended Menu List Items (Toggle Button)';
ToggleButton.parameters = {
  docs: {
    description: {
      story: `The toggle button gets “transformed” into a menu item which can be toggled and untoggled. If the toggle button is toggled, then a checkmark appears in front of the text (on position of an icon).
      If it’s not toggled, then the space is empty.
      It is not possible to show an icon for the toggle button in the menu. This spot is reserved for the checkmark.
`
    }
  }
};

export const Input = () => inputExampleHtml;
Input.storyName = 'Extended Menu List Items (Input)';
Input.parameters = {
  docs: {
    description: {
      story: `An Input field can be placed in a menu item.
      When an input is placed in a menu item, the text serves as a label. 
      When there is enough space on desktop-based devices, then the input field is positioned next to the text. If there’s not enough space, it moves to the next line. 
      The input field is always positioned below the label on mobile devices.
`
    }
  }
};

export const Buttons = () => buttonsExampleHtml;
Buttons.storyName = 'Extended Menu List Items (Buttons as Menu Items)';
Buttons.parameters = {
  docs: {
    description: {
      story: `The buttons are “transformed” into menu items. It is optional to add an icon and those could be replaced by product teams.
`
    }
  }
};