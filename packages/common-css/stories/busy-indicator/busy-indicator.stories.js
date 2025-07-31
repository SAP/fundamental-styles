import desktopExampleHtml from "./desktop.example.html?raw";
import extendedBusyIndicatorInsideMessageToastExampleHtml from "./extended-busy-indicator-inside-message-toast.example.html?raw";
import extendedBusyIndicatorExampleHtml from "./extended-busy-indicator.example.html?raw";
import contrastModeExampleHtml from "./contrast-mode.example.html?raw";
import standardExampleHtml from "./standard.example.html?raw";

import '../../src/sap-busy-indicator.scss';
import '../../../styles/src/message-toast.scss';
import '../../../styles/src/dialog.scss';
import '../../../styles/src/text.scss';
import '../../../styles/src/bar.scss';
import '../../../styles/src/button.scss';
import '../../../styles/src/title.scss';
export default {
  title: 'Busy Indicator',
  parameters: {
    description: `The busy indicator component informs the user about an ongoing operation. Only one busy indicator should be shown at a time.

## Sizes

| **Size** | &nbsp;&nbsp; **rem** &nbsp;&nbsp; | **Modifier class** |
| :------- | :-------------------------------- | -----------------: |
| Default  | &nbsp;&nbsp; 0.5 rem                | none               |
| M        | &nbsp;&nbsp; 1 rem                | \`sap-busy-indicator--m\`   |
| L        | &nbsp;&nbsp; 2 rem                | \`sap-busy-indicator--l\`   |

##Usage
**Use the busy indicator if:**

The ongoing operation only covers part of a screen that has multiple controls, and:

- You need to display additional information, or
- The user needs to be able to cancel the operation.


**Do not use the busy indicator if:**

- The operation takes less than one second.
- You need to block the screen because the user is not supposed to start another operation. In this case, use the **Busy Dialog** component.
        `,
  }
};
export const Standard = () => standardExampleHtml;
Standard.parameters = {
  docs: {
    description: {
      story: 'The standard busy indicator animates a sequence of cascading dots expanding and shrinking in a loop. The component comes in three sizes detailed above. To display the busy indicator, use the `sap-busy-indicator` class. If you want to display a certain size, add the modifier class of the desired size i.e. `--m` to the element.'
    }
  }
};
export const ContrastMode = () => contrastModeExampleHtml;
ContrastMode.parameters = {
  docs: {
   description: {
      story: 'The busy indicator also comes in contrast mode and displays white dots against a dark background. To apply contrast mode, add `contrast` into the element i.e. `sap-busy-indicator--m contrast`.'
    }
  }
};
export const ExtendedBusyIndicator = () => extendedBusyIndicatorExampleHtml;
ExtendedBusyIndicator.parameters = {
  docs: {
   description: {
      story: 'If more information needs to be displayed with the loading animation, it is replaced by the Extended Busy Indicator `sap-busy-indicator-extended`. The additional information is wrapped in an element with `sap-busy-indicator-extended__label` class.'
    }
  }
};
export const ExtendedBusyIndicatorInsideMessageToast = () => extendedBusyIndicatorInsideMessageToastExampleHtml;
ExtendedBusyIndicatorInsideMessageToast.parameters = {
  docs: {
   description: {
      story: 'At the Page level the Busy Indicator should always be placed in a container. The simplest form of container will be centred on the page and inherit the color values from Message Toast.'
    }
  }
};
export const BusyDialog = () => desktopExampleHtml;
BusyDialog.parameters = {
  docs: {
   description: {
      story: 'The busy dialog informs the user about an ongoing operation. During the operation, the entire screen is blocked.'
    }
  }
};