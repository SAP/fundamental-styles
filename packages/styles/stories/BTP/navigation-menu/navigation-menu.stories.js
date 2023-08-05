import navigationMenuItemExampleHtml from "./navigation-menu-item.example.html?raw";
import navigationMenuItemChildExampleHtml from "./navigation-menu-item-child.example.html?raw";
import navigationMenuItemGroupExampleHtml from "./navigation-menu-item-group.example.html?raw";

import '../../../src/navigation-menu.scss';
import '../../../src/icon.scss';

export default {
  title: 'Dev/Navigation Menu',
  parameters: {
    description: ``,
    tags: ['btp', 'development']
  }
};
export const NavigationMenuItem = () => navigationMenuItemExampleHtml;
NavigationMenuItem.storyName = 'Parent Navigation Menu Item';
NavigationMenuItem.parameters = {
  docs: {
    description: {
      story: `The Parent Navigation Menu Item has base class <code>.fd-navigation-menu__item</code>. <br>
      When the item has children use the <code>fd-navigation-menu__item--has-children</code> modifier class. <br>
      For item with external link indicator apply the <code>fd-navigation-menu__item--has-link-indicator</code> modifier class.
      `
    }
  }
};

export const NavigationMenuItemChild = () => navigationMenuItemChildExampleHtml;
NavigationMenuItemChild.storyName = 'Child Navigation Menu Item';
NavigationMenuItemChild.parameters = {
  docs: {
    description: {
      story: `For Child Navigation Menu Item apply the <code>.fd-navigation-menu__item--child</code> modifier class to the <code>.fd-navigation-menu__item</code> base class.
      `
    }
  }
};

export const NavigationMenuItemGroup = () => navigationMenuItemGroupExampleHtml;
NavigationMenuItemGroup.storyName = 'Group Navigation Menu Item';
NavigationMenuItemGroup.parameters = {
  docs: {
    description: {
      story: `For Group Navigation Menu Item apply the <code>.fd-navigation-menu__item--group</code> modifier class to the <code>.fd-navigation-menu__item</code> base class.
      `
    }
  }
};