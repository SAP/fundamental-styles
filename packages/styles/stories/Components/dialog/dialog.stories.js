import verticalFormInDialogExampleHtml from "./vertical-form-in-dialog.example.html?raw";
import horizontalFormInDialogExampleHtml from "./horizontal-form-in-dialog.example.html?raw";
import loadingExampleHtml from "./loading.example.html?raw";
import selectableExampleHtml from "./selectable.example.html?raw";
import draggableExampleHtml from "./draggable.example.html?raw";
import resizableExampleHtml from "./resizable.example.html?raw";
import sizesExampleHtml from "./sizes.example.html?raw";
import defaultDialogExampleHtml from "./default-dialog.example.html?raw";
import deviceSpecificationsExampleHtml from "./device-specifications.example.html?raw";
import '../../../src/dialog.scss';
import '../../../src/input-group.scss';
import '../../../src/icon.scss';
import '../../../src/bar.scss';
import '../../../src/button.scss';
import '../../../src/title.scss';
import '../../../src/icon.scss';
import '../../../src/list.scss';
import '../../../src/checkbox.scss';
import '../../../src/busy-indicator.scss';
import '../../../src/form-label.scss';
import '../../../src/form-layout-grid.scss';
import '../../../src/layout-grid.scss';
import '../../../src/input.scss';
import '../../../src/popover.scss';
import '../../../src/select.scss';
import '../../../src/textarea.scss';
export default {
  title: 'Components/Dialog',
  parameters: {
    description: `The dialog component is a container that appears in response to an action made by the user. It interrupts the app’s current process to prompt the user for either information or a confirmation, which requires them to make a decision before the process can continue. Dialog displays in a fixed position and is activated by adding the \`fd-dialog--active\` class.

##Usage
**Use the dialog if:**

- You want to display complex content, but don’t want the user to navigate away from the current page.
- You want to display an additional step or process that needs to be confirmed by a user action.
- You want to enable the user to create an object with a small number of fields (up to 8 fields).

**Do not use the dialog if:**

- You want to display a simple message. Use the **Message Box** component instead.
- You just want to confirm a successful action.
- You do not want to interrupt the user.
- You want to enable users to create an object with more than 8 fields. Use an **Object Page** instead.


## Structure

**Dialog consists of the following elements:**

- \`fd-dialog\` Main element
  - \`fd-dialog__content\` Dialog window
    - \`fd-dialog__header\` Dialog header
      - \`fd-dialog__title\` Dialog title
    - \`fd-dialog__subheader\` Dialog subheader
    - \`fd-dialog__body\` Dialog content
    - \`fd-dialog__loader\` Dialog loader
    - \`fd-dialog__footer\` Dialog footer
      - \`fd-dialog__decisive-button\` Dialog footer's _Begin/End_ button
    - \`fd-dialog__resize-handle\` Handle for resizing modal

**Additional classes (applied to main \`.fd-dialog\` element):**

- \`fd-dialog--no-backdrop\` needed, if dialog is used without overlay. Centers the dialog vertically and horizontally
- \`fd-dialog--targeted\` to be used, if dialog is attached to the specific element, not body

Note: Dialog's header, subheader and footer are elements from the **Bar** component. This means that dialog headers and footers can be customized using bar component features. To style the elements according to dialog’s needs, CSS classes are used to slightly override bar’s original behaviour.
`,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const DefaultDialog = () => defaultDialogExampleHtml;
DefaultDialog.storyName = 'Default';
DefaultDialog.parameters = {
  docs: {
   description: {
      story: 'The default dialog component displays a container comprising a header, title, and subheader; followed by a body (content area), loader, footer and action buttons. The container also features a resize handle in the bottom-right corner of the footer, see resizable dialog below for more information.'
    }
  }
};
export const Sizes = () => sizesExampleHtml;
Sizes.parameters = {
  docs: {
   description: {
      story: `
By default, dialog’s body has no horizontal paddings. If horizontal paddings are added, they should behave responsively based on dialog's window width.

####Horizontal padding

These modifier classes are used to display horizontal padding for dialog's header, subheader, body and footer in various sizes.

| rem | min-width | max width | modifier class |
| ---- | ---------- | ---------- | ----------- |
| 0 | _n/a_ | _n/a_ | \`fd-dialog__body--no-horizontal-padding\` |
| 1rem | _n/a_ | 599px | \`fd-dialog__content--s\` |
| 2rem | 600px | 1023px | \`fd-dialog__content--m\` |
| 2rem | 1024px | 1439px | \`fd-dialog__content--l\` |
| 3rem | 1440px | _n/a_ | \`fd-dialog__content--xl\` |

####Vertical padding

The default dialog’s body has vertical padding, however, it can be removed if it's suitable for the use case.

| Modifier class | Modification |
| ----------------: | :------------ |
| \`fd-dialog__body--no-vertical-padding\` | padding-top: 0, padding-bottom: 0 |

####Mobile
It is recommended that the default dialog takes the full width and height of the mobile screen. If necessary, this behaviour can be changed using the second modifier class below.

| Modifier class | Modification |
| ----------------: | :------------ |
|\`fd-dialog__content--mobile\` | full width and height of mobile screen |
| \`fd-dialog__content--no-mobile-stretch\` | adds additional spacing around the container (margin 6% & 10%) |

Note: On mobile devices, the bar component should be used with the \`fd-bar--cozy\` class.
`
    }
  }
};
export const Resizable = () => resizableExampleHtml;
Resizable.parameters = {
  docs: {
   description: {
      story: `
Dialog can also be displayed with a resize handle by adding a span element with a \`fd-dialog__resize-handle\` class inside the \`fd-dialog__content\` container.

Note: This feature should be enabled for desktop screens only.`
    }
  }
};
export const Draggable = () => draggableExampleHtml;
Draggable.parameters = {
  docs: {
   description: {
      story: `
Dialog can be draggable, enabling the user to drag the container around with their cursor on a desktop screen.

| Modifier class | Modification |
| ----------------: | :------------ |
| \`fd-dialog__content--draggable-grab\` | Modifies the element to be draggable |
| \`fd-dialog__content--draggable-grabbing\` | Visualizes the grabbing cursor |
`
    }
  }
};
export const Selectable = () => selectableExampleHtml;
Selectable.parameters = {
  docs: {
   description: {
      story: `The selectable dialog displays list items in the content area that can be selected. Users can search items from the list, select one or more items, and finalize their choice by selecting the _Select_ button. To display the selectable dialog, include the \`fd-list is-compact\` class to the body's container element.
        `
    }
  }
};
export const Loading = () => loadingExampleHtml;
Loading.parameters = {
  docs: {
   description: {
      story: 'Dialog can display a busy indicator that signals to the user that data is loading. To display a busy indicator in the content area, add the `fd-busy-indicator--l` to the `fd-dialog__loader` container element. Although the busy indicator is large in this example, you can choose a smaller size. See **Busy Indicator** for more sizes.'
    }
  }
};
export const HorizontalForm = () => horizontalFormInDialogExampleHtml;
HorizontalForm.parameters = {
  docs: {
    description: {
      story: 'Horizontal Form displays all the components aligned horizontally. It is created by positioning the `fd-form-label` class and the `fd-input` class in the same row.'
    }
  }
};
export const VerticalForm = () => verticalFormInDialogExampleHtml;
VerticalForm.parameters = {
  docs: {
    description: {
      story: 'Verical Form displays all the components aligned vertically. It is created by positioning the `fd-form-label` class above the `fd-input` class in seperate rows.'
    }
  }
};

export const TabletAndHybridDeviceSpecification = () => deviceSpecificationsExampleHtml;
TabletAndHybridDeviceSpecification.parameters = {
  docs: {
    description: {
      story: 'To properly support resizing for all input methods, the optional resize handle is context-dependent. Depending on the device, a full screen button is also shown for touch interaction.'
    }
  }
};