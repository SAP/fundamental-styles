import alignmentExampleHtml from "./alignment.example.html?raw";
import separatorExampleHtml from "./separator.example.html?raw";
import typesExampleHtml from "./types.example.html?raw";
import overflowExampleHtml from "./overflow.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import '../../../src/toolbar.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/popover.scss';
export default {
  title: 'Components/Toolbar',
  parameters: {
    description: `The toolbar enables the user to change the UI or trigger an action. For example, the user can change views, manipulate data or objects, navigate to another page, perform generic actions, and so on. This component is usually paired with buttons, which are always right-aligned.

##Usage
**Toolbar actions can be as follows:**

- They can be independent of the current selection and not related to a specific item or object.
- They can be specific to the current object (user selects one item).
- They can apply to a set of items (user selects two or more items).
- They can control the settings for parts of the UI content. For example, an action can affect all items in a **Table**.

##Sizes
There are two sizes of the toolbar that should be chosen based on the type of device and its screen width.

Size&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Modifier class&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Screen width&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Device
:---- | :-------- | :--------- | :-------
Cozy | \`is-cozy\` | < 599 px | Mobile and small tablets
Compact | Default | 600 px and above | Desktop
<br>

        `,
    tags: ['f3', 'a11y', 'theme', 'design']
  }
};
export const Primary = () => primaryExampleHtml;
Primary.parameters = {
  docs: {
    description: {
      story: `
The primary toolbar displays several actions separated by icon buttons. It is displayed in cozy mode, which is ideal for mobile and small tablet screens.
`
    }
  }
};
export const Overflow = () => overflowExampleHtml;
Overflow.parameters = {
  docs: {
    description: {
      story: `The overflow toolbar can display additional elements when space is limited. This can be achieved with a **Button** and/or **Popover** component.

To display an overflow in a button, pass the \`sap-icon--overflow\` in the \`fd-button\` class. Additionally, you can add a popover by passing \`fd-popover\` in the \`fd-toolbar__overflow\` element.
 Add any element inside overflow body with \`fd-toolbar__overflow-button\` , \`fd-toolbar__overflow-button--menu\` \`fd-toolbar__overflow-label \` modifier ,        `
    }
  }
};
export const Types = () => typesExampleHtml;
export const Separator = () => separatorExampleHtml;
Separator.storyName = 'Separators';
Separator.parameters = {
  docs: {
    description: {
      story: `Separators should be used to visually separate items from each other. To display separators in toolbars, add the \`fd-toolbar__separator\` class after the component you are separating.
`
    }
  }
};
Types.parameters = {
  docs: {
    description: {
      story: `Toolbar can be styled in various ways depending on the use case.

Types | Modifier class | Description
:-------- | :------------- | :---------------
Solid | \`fd-toolbar--solid\` | Displays a solid background color.
Transparent | \`fd-toolbar--transparent\` | Displays a transparent background.
Auto | \` fd-toolbar--auto\` | Can inherit the design from the parent component it’s being used with.
Info | \` fd-toolbar--info\` | Commonly used to display information (text or icons) and is slightly smaller than the regular toolbar.
Title | \` fd-toolbar--title\` | Should be used whenever a title is required.
No border-bottom | \`fd-toolbar—clear\` | This is not a type, but it removes the bottom border of each toolbar type.
Active | \` fd-toolbar--active\` | This is also not a type, but it enables active and hover states in each type.

`
    }
  }
};
export const Alignment = () => alignmentExampleHtml;
Alignment.parameters = {
  docs: {
    description: {
      story: `Toolbars are typically used for left/right alignment; however, they can be displayed in any way with the \`fd-toolbar__spacer\` class.

**Note:** Spacers share the horizontal space equally; therefore, the content is not centered as precisely as it is in the **Bar** component.
`
    }
  }
};