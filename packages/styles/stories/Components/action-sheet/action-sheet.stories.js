import actionSheetMobileExampleHtml from "./action-sheet-mobile.example.html?raw";
import defaultExampleHtml from "./default.example.html?raw";
import '../../../src/avatar.scss';
import '../../../src/icon.scss';
import '../../../src/action-sheet.scss';
import '../../../src/popover.scss';
import '../../../src/button.scss';
import '../../../src/bar.scss';
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

**Note:** The action sheet should be used in compact mode if targeting desktop users.

        `,
    tags: ['a11y', 'f3', 'theme', 'responsive']
  }
};
export const Default = () => defaultExampleHtml;
Default.parameters = {
  docs: {
    story: {
    }
  }
};
export const ActionSheetMobile = () => actionSheetMobileExampleHtml;
ActionSheetMobile.parameters = {
  docs: {
    story: {
    },
    description: {
      story: `To display the action sheet on mobile screens,
        the container requires a \`fd-action-sheet--mobile\` modifier class and is additionally wrapped by \`fd-action-sheet__wrapper\`.`
    }
  }
};
ActionSheetMobile.storyName = 'Mobile';