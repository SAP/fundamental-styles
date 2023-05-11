import actionSheetMobileExampleHtml from "./action-sheet-mobile.example.html?raw";
import actionSheetTabletExampleHtml from "./action-sheet-tablet.example.html?raw";
import actionSheetDesktopExampleHtml from "./action-sheet-desktop.example.html?raw";
import '../../../src/avatar.scss';
import '../../../src/icon.scss';
import '../../../src/action-sheet.scss';
import '../../../src/popover.scss';
import '../../../src/button.scss';
export default {
  title: 'Components/Action Sheet',
  parameters: {
    description: `
An action sheet consists of a list of options a user can select from to complete an action. Actions can be
clustered if there is not enough space on the screen.

## Usage

**Use the action sheet if:**

- You need an option that provides more than one action.
- It is really important that the user stays in context on a phone.
- You only have a small number of actions.

**Do not use the action sheet if:**

- The menu provides only one option. In this case, consider using a **Button** instead.
- You need to show a hierarchical menu. In this case, use the menu button instead.
- Your users would benefit more from a split button, which offers an easily-accessible default action, with the option to include additional actions.
        `,
    tags: ['a11y', 'f3', 'theme', 'responsive']
  }
};
export const ActionSheetDesktop = () => actionSheetDesktopExampleHtml;
ActionSheetDesktop.parameters = {
  docs: {
    story: {
      iframeHeight: 300
    },
    description: {
      story: 'The action sheet is displayed in desktop mode by adding the `fd-action-sheet--compact` modifier class to the container, and `fd-button--compact` to each button.'
    }
  }
};
ActionSheetDesktop.storyName = 'Desktop';
export const ActionSheetTablet = () => actionSheetTabletExampleHtml;
ActionSheetTablet.parameters = {
  docs: {
    story: {
      iframeHeight: 300
    },
    description: {
      story: 'Although the tablet mode is visually similar to desktop, it doesn\'t require any modifier classes. Therefore, the container and buttons appear slightly larger for better visibility.'
    }
  }
};
ActionSheetTablet.storyName = 'Tablet';
export const ActionSheetMobile = () => actionSheetMobileExampleHtml;
ActionSheetMobile.parameters = {
  docs: {
    story: {
      iframeHeight: 800
    },
    description: {
      story: `To display the action sheet on mobile screens,
        the container requires a \`fd-action-sheet--mobile\` modifier class and is additionally wrapped by \`fd-action-sheet__wrapper\`.`
    }
  }
};
ActionSheetMobile.storyName = 'Mobile';