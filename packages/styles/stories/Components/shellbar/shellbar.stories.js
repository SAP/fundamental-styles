import withoutCenterExampleHtml from "./without-center.example.html?raw";
import responsivePaddingsExampleHtml from "./responsive-paddings.example.html?raw";
import productSwitchExampleHtml from "./product-switch.example.html?raw";
import linksWithCollapsibleMenuSSizeExampleHtml from "./links-with-collapsible-menu-ssize.example.html?raw";
import linksWithCollapsibleMenuMSizeExampleHtml from "./links-with-collapsible-menu-msize.example.html?raw";
import linksWithCollapsibleMenuXlSizeExampleHtml from "./links-with-collapsible-menu-xl-size.example.html?raw";
import productMenuAndSearchExampleHtml from "./product-menu-and-search.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import '../../../src/button.scss';
import '../../../src/input-group.scss';
import '../../../src/icon.scss';
import '../../../src/menu.scss';
import '../../../src/avatar.scss';
import '../../../src/input-group.scss';
import '../../../src/popover.scss';
import '../../../src/product-switch.scss';
import '../../../src/shellbar.scss';
import '../../../src/select.scss';
export default {
  title: 'Components/Shellbar',
  parameters: {
    tags: ['f3', 'a11y', 'theme'],
    description: `
The shellbar offers consistent, responsive navigation across all products and applications. It also includes support for branding, product navigation, search, notifications, and user settings. This is a composite component comprised of mandatory and optional elements. Shellbar should always be placed inside the shell layout container. As mentioned earlier, it is completely responsive by default with margins and padding already built in.

**Shellbar has two primary container groups:**

-	Product: for branding and product elements.
-	Actions: for search, product links, and user settings.

##Elements
The shellbar supports layout functionality and has some built-in elements, but relies on standalone components for most of its content.

Elements | Class | Description
:------------ | :------- | :------------
Logo (mandatory) | \`fd-shellbar__logo\` | For company branding, add the \`--image-replaced\` modifier class when using CSS to display the logo. The logo can become a link by replacing the "span" tag with an "a" tag.
Title (mandatory) | \`fd-shellbar__title\` | Displays the current application.
Subtitle | \`fd-shellbar__subtitle\` | Displays an application context. Subtitles should seldom be used.
Action button (mandatory) | \`fd-shellbar__action\` | A container for each product action and link.
Mobile action button (optional) | \`fd-shellbar__action--mobile\` | For product actions only, visible on small shellbar (--s).
Desktop action button (optional) | \`fd-shellbar__action--desktop\` | For product actions only, visible on desktop screens (--m/l/xl).
Avatar (mandatory) | \`fd-avatar\` | For user settings and application meta links such as _Sign Out_. Accent colors between 11-15 can be randomly assigned to the background.
Product Switch (optional) | \`fd-product-switch\` | For navigating between products.
Notifications (optional) | \`fd-button__badge\` | To display notifications, add this class to the button. See **Button** to find documentation on Badge button.
<br>
`
  }
};
export const Primary = () => primaryExampleHtml;
Primary.parameters = {
  docs: {
    description: {
      story: `
The primary shellbar displays a logo, title, and an avatar where the user settings are found. If the avatar does not contain a thumbnail, then the initials of the user will be displayed.
    `
    }
  }
};
export const ProductMenuAndSearch = () => productMenuAndSearchExampleHtml;
ProductMenuAndSearch.storyName = 'Product menu and search Size XL';
ProductMenuAndSearch.parameters = {
  docs: {
    description: {
      story: `
Shellbar can be displayed with a product menu and search box. The product menu is used for navigating to other applications within the product. To display a product menu, add the \`fd-popover\` class after the \`fd-shellbar__logo\` class. The logo can become a link by replacing the "span" tag with an "a" tag.
    `
    }
  }
};
export const LinksWithCollapsibleMenuXlSize = () => linksWithCollapsibleMenuXlSizeExampleHtml;
LinksWithCollapsibleMenuXlSize.storyName = 'Extra large';
LinksWithCollapsibleMenuXlSize.parameters = {
  docs: {
    description: {
      story: `
The shellbar can be optimized for extra-large screens. To achieve this style, add the \`fd-shellbar--xl\` modifier class to the main element, which increases the container padding to 3rem.
        `
    }
  }
};
export const LinksWithCollapsibleMenuMSize = () => linksWithCollapsibleMenuMSizeExampleHtml;
LinksWithCollapsibleMenuMSize.storyName = 'Medium-large';
LinksWithCollapsibleMenuMSize.parameters = {
  docs: {
    description: {
      story: `
The shellbar can be optimized for medium-large screens. To achieve this style, add the \`fd-shellbar--m\` or \`fd-shellbar--l\`modifier class to the main element, which increases the container padding to 2rem.
        `
    }
  }
};
export const LinksWithCollapsibleMenuSSize = () => linksWithCollapsibleMenuSSizeExampleHtml;
LinksWithCollapsibleMenuSSize.storyName = 'Small';
LinksWithCollapsibleMenuSSize.parameters = {
  docs: {
    description: {
      story: `
The shellbar can be optimized for mobile and small tablet screens. To achieve this style, add the \`fd-shellbar--s\` modifier class to the main element. All actions except the user menu should be collapsed, displaying an overflow button.
        `
    }
  }
};
export const ProductSwitch = () => productSwitchExampleHtml;
ProductSwitch.storyName = 'Product switch';
ProductSwitch.parameters = {
  docs: {
    description: {
      story: `
Shellbar can be displayed with a product switch component, indicating to the user that they can navigate to other products. See [Product Switch](product-switch.html) for more details. <br>
The CoPilot is a standard button with <code>.sap-icon--co</code> icon.

    `
    }
  }
};
export const ResponsivePaddings = () => responsivePaddingsExampleHtml;
ResponsivePaddings.parameters = {
  docs: {
    description: {
      story: `
The Shellbar paddings can be made responsive. Meaning that based on the current size of the shellbar paddings will be different.
        `
    }
  }
};
export const WithoutCenter = () => withoutCenterExampleHtml;
WithoutCenter.storyName = 'Shellbar without center group';
WithoutCenter.parameters = {
  docs: {
    description: {
      story: `
The shellbar is optimized to be used with central group for the search. This creates a necessity of centering the groups by giving them equal width.
If the design suggests that each group can have own width, developers can use \`fd-shellbar__group--shrink\` and \`fd-shellbar__group--basis-auto\` modifiers to allow each group to shrink and grow independently.
        `
    }
  }
};