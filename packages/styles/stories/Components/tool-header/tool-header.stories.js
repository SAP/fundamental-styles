import horizontalPaddingsExampleHtml from "./horizontal-paddings.example.html?raw";
import responsivePaddingsExampleHtml from "./responsive-paddings.example.html?raw";
import menuButtonsExampleHtml from "./menu-buttons.example.html?raw";
import menuExampleHtml from "./menu.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import '../../../src/avatar.scss';
import '../../../src/button.scss';
import '../../../src/form-label.scss';
import '../../../src/icon.scss';
import '../../../src/input-group.scss';
import '../../../src/object-status.scss';
import '../../../src/text.scss';
import '../../../src/title.scss';
import '../../../src/tool-header.scss';
export default {
  title: 'Components/Tool Header',
  parameters: {
    description: `The tool header is a control that is found in most SAP Cloud Platform products, most commonly as a part of the Tool Page Layout. The tool header inherits its functionality from the overflow toolbar and its visual design from the shell bar.

##Usage
**Use the tool header if:**

- The app is launched without the SAP Fiori launchpad.
- The target group of your application is somewhat or purely technical in nature, and the application’s main use cases are in development, administration, or configuration.
- The application uses other tool components, such as side navigation or one of the layouts or floorplans for tools.
- The application makes use of a global application menu.
The application uses a horizontal tab navigation as main navigation.

**Do not use the tool header if:**

- Your scenarios are not in the tooling or administration space.
- Your application target group consists of non-technical users.
- You do not have to cater for complex navigation (for example, that requires side navigation)


##Horizontal paddings
You can add horizontal paddings by applying a modifier class to the container. For responsive horizontal paddings (based on the screen size) add the \`.fd-tool-header--responsive-paddings\` modifier class. In this case the left and right spacing will change as the screen size changes.

| **Size** | **Modifier class** |
| :--------- | :---------- |
| sm (1rem) &nbsp;&nbsp; | \`fd-tool-header--sm\` |
| md (2rem) &nbsp;&nbsp; | \`fd-tool-header--md\` |
| lg (2rem) &nbsp;&nbsp; | \`fd-tool-header--lg\` |
| xl (3rem) &nbsp;&nbsp; | \`fd-tool-header--xl\` |


##Responsiveness
The tool header adjusts to different screen sizes. The tool header is a container that can hold further containers with their own overflow mechanisms.

<b>Cozy and Compact</b>
Like all SAP Fiori controls, the tool header can be shown in compact mode or in cozy mode. The height of the header control itself stays the same, only the controls within it are affected.

##Layout and Structure
The tool header is a horizontal container at the top of the tool or application. It takes up the full width of the screen, floats above the content, and does not scroll. It acts as a container for global elements, such as a global application menu, horizontal navigation, name and branding of the app, and utility functions.

- <code style="color:red;">.fd-tool-header</code>: container class <br>
- <code style="color:red;">.fd-tool-header__group</code>: groups tool header elements. The first group is positioned on the left hand side and the second group is positioned on the right hand side<br>
- <code style="color:red;">.fd-tool-header__element</code>: a wrapper for each tool header element. Provides spacing between elements<br>
- <code style="color:red;">.fd-tool-header__logo</code>: class for the tool header logo<br>

The tool header supports a larger set of over-styled controls. This is achieved with modifier classes which overwrite some of the rules of the base controls. <br>

###Text, Titles and Labels
The tool header supports only single-line text and truncation for Texts, Titles, and Labels. Consider using small and normal size texts or title headings of H4, H5, H6. Avoid using text wrapping. <br>

- <code style="color:red;">.fd-tool-header__title</code>: use this modifier class togther with base class \`.fd-title\`<br>
- <code style="color:red;">.fd-tool-header__text</code>: a modifier class applied together with \`.fd-text\`<br>
- <code style="color:red;">.fd-tool-header__label</code>: a modifier class applied together with label control<br>

###Buttons
- <code style="color:red;">.fd-tool-header__button</code>: this modifier class can be applied together with button and menu button on their transparent type.

###Icons
The tool header supports only icon color enumeration. The support extends to both icons and backgrounds. Interaction state colors are not supported.

- <code style="color:red;">.fd-tool-header__icon</code><br>

###Object Status
The tool header supports object status in its semantic form. No industry specific color support.

- <code style="color:red;">.fd-tool-header__object-status</code><br>

###Input Group
- <code style="color:red;">.fd-tool-header__input-group</code>

`,
    tags: ['btp', 'theme', 'development']
  }
};
export const Primary = () => primaryExampleHtml;
Primary.storyName = 'Tool Header with Controls';
export const Menu = () => menuExampleHtml;
Menu.storyName = 'Tool Header with Side Navigation Menu Button';
Menu.parameters = {
  docs: {
    description: {
      story: 'The side navigation menu button is used to collapse/expand the side navigation. It is not recommended to use horizontal and responsive paddings when this button is present.'
    }
  }
};
export const MenuButtons = () => menuButtonsExampleHtml;
MenuButtons.storyName = 'Tool Header with Menu Buttons';
export const ResponsivePaddings = () => responsivePaddingsExampleHtml;
ResponsivePaddings.parameters = {
  docs: {
    description: {
      story: 'Horizontal responsive paddings (based on the screen size) can be applied to the tool header by adding the `fd-tool-header--responsive-paddings` modifier class to the container class. In this case the left and right spacing will change as the screen size changes.'
    }
  }
};
export const HorizontalPaddings = () => horizontalPaddingsExampleHtml;
HorizontalPaddings.parameters = {
  docs: {
    description: {
      story: 'You can add horizontal paddings by applying a modifier class to the container. For example, `.fd-tool-header--sm` modifier class will add 1rem horizontal paddings on the tool bar container.'
    }
  }
};