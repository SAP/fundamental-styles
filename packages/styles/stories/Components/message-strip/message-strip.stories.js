import '../../../src/button.scss';
import '../../../src/message-strip.scss';
import '../../../src/icon.scss';
import '../../../src/link.scss';

export default {
    title: 'Components/Message Strip',
    parameters: {
        description: `Message Strip is a component that enables the embedding of application-related messages in the application. They are useed to draw the user’s attention to information that is important in the context of the page content. This could be a warning or a change of state, that would be easy to miss it.

##Usage
**Use the message strip if:**

- You want to provide information within the detail area of an object.
- You want to inform your user about a status of an object.
- You want to warn your user about an issue.

**Do not use the message strip if:**

- You want to display information within the object page header, a control, in the master list, or above the page header.

##Anatomy
- <b>Container </b>- holds the icon, text and Close button.
- <b>Icon (optional) </b>- graphic element within the component. Use the modifier class \`.fd-message-strip--no-icon\` if you want to omit the icon.
- <b>Text </b>- it is strongly recommended that you use only text in order to preserve the intended design.
      - <b>Text with Link </b>- add the \`.fd-message-strip--link\` modifier class if the text message contains a link element.
- <b>Close button (optional) </b>- each message can have a Close button so it can be removed from the UI, if needed. Add the \`.fd-message-strip--dismissible\` modifier class for a dismissible message strip.

        `,
        tags: ['f3', 'theme']
    }
};

const messageStripHeight = 64;

export const DefaultStrip = () => `<div class="fd-message-strip fd-message-strip--no-icon" role="note" aria-live="assertive" id="message-strip-1" aria-labelledby="message-strip-1">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
</div>
`;

DefaultStrip.storyName = 'Default';

DefaultStrip.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        description: {
            story: `The default message strip can be used for general messages that don’t fit into any of the semantic type use cases.`
        }
    }
};

export const Information = () => `<div class="fd-message-strip fd-message-strip--information fd-message-strip--dismissible" role="note" aria-live="assertive" id="message-strip-2" aria-labelledby="message-strip-2">
  <div class="fd-message-strip__icon-container" aria-hidden="true">
    <span class="sap-icon sap-icon--message-information" focusable="false" role="presentation" aria-hidden="true"></span>
  </div>
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="message-strip-2" aria-label="Close" title="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>
`;

Information.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        description: {
            story: 'To display an information message strip, add the `fd-message-strip--information` modifier class to the main element.'
        }
    }
};

export const Success = () => `<div class="fd-message-strip fd-message-strip--success fd-message-strip--dismissible" role="note" aria-live="assertive" id="message-strip-3" aria-labelledby="message-strip-3">
  <div class="fd-message-strip__icon-container" aria-hidden="true">
    <span class="sap-icon sap-icon--message-success" focusable="false" role="presentation" aria-hidden="true"></span>
  </div>
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="message-strip-3" aria-label="Close" title="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>
`;

Success.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        description: {
            story: 'To display a success message strip, add the `fd-message-strip--success` modifier class to the main element.'
        }
    }
};

export const Warning = () => `<div class="fd-message-strip fd-message-strip--warning fd-message-strip--dismissible" role="note" aria-live="assertive" id="message-strip-4" aria-labelledby="message-strip-4">
  <div class="fd-message-strip__icon-container" aria-hidden="true">
    <span class="sap-icon sap-icon--message-warning" focusable="false" role="presentation" aria-hidden="true"></span>
  </div>
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="message-strip-4" aria-label="Close" title="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>
`;

Warning.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        description: {
            story: `To display a warning message strip, add the \`fd-message-strip--warning\` modifier class to the main element.`
        }
    }
};

export const Error = () => `<div class="fd-message-strip fd-message-strip--error fd-message-strip--dismissible" role="note" aria-live="assertive" id="message-strip-5" aria-labelledby="message-strip-5">
  <div class="fd-message-strip__icon-container" aria-hidden="true">
    <span class="sap-icon sap-icon--message-error" focusable="false" role="presentation" aria-hidden="true"></span>
  </div>
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="message-strip-5" aria-label="Close" title="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>
`;

Error.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        description: {
            story: `To display the error message strip, add the \`fd-message-strip--error\` modifier class to the main element.
`
        }
    }
};

export const NoIcons = () => `<div class="fd-message-strip fd-message-strip--information fd-message-strip--no-icon fd-message-strip--dismissible"
     role="note" aria-live="assertive" id="message-strip-6" aria-labelledby="message-strip-6">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="message-strip-6" aria-label="Close" title="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>

<br />

<div class="fd-message-strip fd-message-strip--success fd-message-strip--no-icon fd-message-strip--dismissible"
     role="note" aria-live="assertive" id="message-strip-7" aria-labelledby="message-strip-7">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="message-strip-7" aria-label="Close" title="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>

<br />

<div class="fd-message-strip fd-message-strip--warning fd-message-strip--no-icon fd-message-strip--dismissible"
     role="note" aria-live="assertive" id="message-strip-8" aria-labelledby="message-strip-8">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="message-strip-8" aria-label="Close" title="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>

<br />

<div class="fd-message-strip fd-message-strip--error fd-message-strip--no-icon fd-message-strip--dismissible"
     role="note" aria-live="assertive" id="message-strip-9" aria-labelledby="message-strip-9">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="message-strip-9" aria-label="Close" title="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>
`;

NoIcons.storyName = 'No icon';

NoIcons.parameters = {
    docs: {
        iframeHeight: messageStripHeight * 4,
        description: {
            story: 'To display message strip without an icon, add the `fd-message-strip--no-icon` modifier class to the main element. Add the `fd-message-strip--dismissible` modifier class if the element is dismissible.'
        }
    }
};

export const NoIconsNotDismissible = () => `<div class="fd-message-strip fd-message-strip--information fd-message-strip--no-icon"
     role="note" aria-live="assertive" id="message-strip-10" aria-labelledby="message-strip-10">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
</div>

<br />

<div class="fd-message-strip fd-message-strip--success fd-message-strip--no-icon"
     role="note" aria-live="assertive" id="message-strip-11" aria-labelledby="message-strip-11">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
</div>

<br />

<div class="fd-message-strip fd-message-strip--warning fd-message-strip--no-icon"
     role="note" aria-live="assertive" id="message-strip-12" aria-labelledby="message-strip-12">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
</div>

<br />

<div class="fd-message-strip fd-message-strip--error fd-message-strip--no-icon"
     role="note" aria-live="assertive" id="message-strip-13" aria-labelledby="message-strip-13">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
</div>
`;

NoIconsNotDismissible.storyName = 'No icon and no dismiss button';

NoIconsNotDismissible.parameters = {
    docs: {
        iframeHeight: messageStripHeight * 4,
        description: {
            story: 'To display message strip without an icon, add the `fd-message-strip--no-icon` modifier class to the main element.'
        }
    }
};

export const MessageStripWithLink = () => `<div class="fd-message-strip fd-message-strip--error fd-message-strip--dismissible fd-message-strip--link" role="note" aria-live="assertive" id="message-strip-14" aria-labelledby="message-strip-14">
  <div class="fd-message-strip__icon-container" aria-hidden="true">
    <span class="sap-icon sap-icon--message-error" focusable="false" role="presentation" aria-hidden="true"></span>
  </div>
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et. 
    <a href="#" class="fd-link" tabindex="0"><span class="fd-link__content">Default link</span></a>
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="message-strip-14" aria-label="Close" title="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>
`;

MessageStripWithLink.storyName = 'Text with link';
MessageStripWithLink.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        description: {
            story: 'The Link inside Message Strip has additional styling. Add the `fd-message-strip--link` modifier class if the message contains a link element.'
        }
    }
};

export const MessageStripWithCustomIcon = () => `<div class="fd-message-strip fd-message-strip--dismissible" role="note" aria-live="assertive" id="message-strip-15" aria-labelledby="message-strip-15">
  <div class="fd-message-strip__icon-container" aria-hidden="true">
    <span class="sap-icon sap-icon--master-task-triangle-2" focusable="false" role="presentation" aria-hidden="true"></span>
  </div>
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna. 
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="message-strip-15" aria-label="Close" title="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>
<br>
<div class="fd-message-strip fd-message-strip--dismissible fd-message-strip--error" role="note" aria-live="assertive" id="message-strip-16" aria-labelledby="message-strip-16">
  <div class="fd-message-strip__icon-container" aria-hidden="true">
    <span class="sap-icon sap-icon--not-editable" focusable="false" role="presentation" aria-hidden="true"></span>
  </div>
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna. 
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="message-strip-16" aria-label="Close" title="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>
`;

MessageStripWithCustomIcon.storyName = 'Custom icon';
MessageStripWithCustomIcon.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        description: {
            story: 'The message strip can be customized by changing the status icon. Check <a href="https://sap.github.io/fundamental-styles/?path=/docs/components-icons-sap-icons--sizes" target="_blank" rel="noopener noreferrer" title="click to open Avatar component. Opens in a new window.">Icons</a> control for more icon types.'
        }
    }
};

export const MessageStripWithAccentColors = () => `<div class="fd-message-strip fd-message-strip--dismissible fd-message-strip--accent-color-1" role="note" aria-live="assertive" id="message-strip-17" aria-labelledby="message-strip-17">
  <div class="fd-message-strip__icon-container" aria-hidden="true">
    <span class="sap-icon sap-icon--master-task-triangle-2" focusable="false" role="presentation" aria-hidden="true"></span>
  </div>
  <p class="fd-message-strip__text">
    Message Strip with accent color 1 
  </p>
</div>

<br>

<div class="fd-message-strip fd-message-strip--dismissible  fd-message-strip--accent-color-2" role="note" aria-live="assertive" id="message-strip-18" aria-labelledby="message-strip-18">
  <div class="fd-message-strip__icon-container" aria-hidden="true">
    <span class="sap-icon sap-icon--cloud" focusable="false" role="presentation" aria-hidden="true"></span>
  </div>
  <p class="fd-message-strip__text">
    Message Strip with accent color 2 
  </p>
</div>


<br>

<div class="fd-message-strip fd-message-strip--dismissible  fd-message-strip--accent-color-3" role="note" aria-live="assertive" id="message-strip-19" aria-labelledby="message-strip-19">
  <div class="fd-message-strip__icon-container" aria-hidden="true">
    <span class="sap-icon sap-icon--heart-2" focusable="false" role="presentation" aria-hidden="true"></span>
  </div>
  <p class="fd-message-strip__text">
    Message Strip with accent color 3 
  </p>
</div>


<br>

<div class="fd-message-strip fd-message-strip--dismissible  fd-message-strip--accent-color-4" role="note" aria-live="assertive" id="message-strip-20" aria-labelledby="message-strip-20">
  <div class="fd-message-strip__icon-container" aria-hidden="true">
    <span class="sap-icon sap-icon--circle-task" focusable="false" role="presentation" aria-hidden="true"></span>
  </div>
  <p class="fd-message-strip__text">
    Message Strip with accent color 4 
  </p>
</div>


<br>

<div class="fd-message-strip fd-message-strip--dismissible  fd-message-strip--accent-color-5" role="note" aria-live="assertive" id="message-strip-21" aria-labelledby="message-strip-21">
  <div class="fd-message-strip__icon-container" aria-hidden="true">
    <span class="sap-icon sap-icon--feedback" focusable="false" role="presentation" aria-hidden="true"></span>
  </div>
  <p class="fd-message-strip__text">
    Message Strip with accent color 5 
  </p>
</div>


<br>

<div class="fd-message-strip fd-message-strip--dismissible  fd-message-strip--accent-color-6" role="note" aria-live="assertive" id="message-strip-22" aria-labelledby="message-strip-22">
  <div class="fd-message-strip__icon-container" aria-hidden="true">
    <span class="sap-icon sap-icon--text-color" focusable="false" role="presentation" aria-hidden="true"></span>
  </div>
  <p class="fd-message-strip__text">
    Message Strip with accent color 6
  </p>
</div>


<br>

<div class="fd-message-strip fd-message-strip--dismissible  fd-message-strip--accent-color-7" role="note" aria-live="assertive" id="message-strip-23" aria-labelledby="message-strip-23">
  <div class="fd-message-strip__icon-container" aria-hidden="true">
    <span class="sap-icon sap-icon--away" focusable="false" role="presentation" aria-hidden="true"></span>
  </div>
  <p class="fd-message-strip__text">
    Message Strip with accent color 7 
  </p>
</div>


<br>

<div class="fd-message-strip fd-message-strip--dismissible  fd-message-strip--accent-color-8" role="note" aria-live="assertive" id="message-strip-24" aria-labelledby="message-strip-24">
  <div class="fd-message-strip__icon-container" aria-hidden="true">
    <span class="sap-icon sap-icon--cursor" focusable="false" role="presentation" aria-hidden="true"></span>
  </div>
  <p class="fd-message-strip__text">
    Message Strip with accent color 8 
  </p>
</div>


<br>

<div class="fd-message-strip fd-message-strip--dismissible  fd-message-strip--accent-color-9" role="note" aria-live="assertive" id="message-strip-25" aria-labelledby="message-strip-25">
  <div class="fd-message-strip__icon-container" aria-hidden="true">
    <span class="sap-icon sap-icon--copy" focusable="false" role="presentation" aria-hidden="true"></span>
  </div>
  <p class="fd-message-strip__text">
    Message Strip with accent color 9
  </p>
</div>


<br>

<div class="fd-message-strip fd-message-strip--dismissible  fd-message-strip--accent-color-10" role="note" aria-live="assertive" id="message-strip-26" aria-labelledby="message-strip-26">
  <div class="fd-message-strip__icon-container" aria-hidden="true">
    <span class="sap-icon sap-icon--reset" focusable="false" role="presentation" aria-hidden="true"></span>
  </div>
  <p class="fd-message-strip__text">
    Message Strip with accent color 10
  </p>
</div>
`;

MessageStripWithAccentColors.storyName = 'Accent colors';
MessageStripWithAccentColors.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        description: {
            story: `If the application needs a custom Message Strip, other than the semantic variations, then the colours from <a href="https://sap.github.io/fundamental-styles/?path=/docs/components-avatar--icon" target="_blank" rel="noopener noreferrer" title="click to open Avatar component. Opens in a new window.">Avatar (Horizon)</a> control should be used. Use the modifier classes \`.fd-message-strip--accent-color-*\`, where \`*\` is a number from 1 to 10. `
        }
    }
};