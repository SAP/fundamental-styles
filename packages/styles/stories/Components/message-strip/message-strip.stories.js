import '../../../src/button.scss';
import '../../../src/message-strip.scss';
import '../../../src/icon.scss';
export default {
    title: 'Components/Message Strip',
    parameters: {
        description: `The message strip displays information bars with semantic colors and icons, indicating different levels of urgency and/or action required by the user. The message strip is fully responsive, with an icon and close button on opposite sides of the message text. Text and links behave differently, and wrap if space is limited.

**The following semantic types are available:**

 - Information
 - Warning
 - Error
 - Success

##Usage
**Use the message strip if:**

- You want to provide information within the detail area of an object.
- You want to inform your user about a status of an object.
- You want to warn your user about an issue.

**Do not use the message strip if:**

- You want to display information within the object page header, a control, in the master list, or above the page header.

        `,
        tags: ['f3', 'a11y', 'theme']
    }
};

const messageStripHeight = 64;

export const DefaultStrip = () => `<div class="fd-message-strip fd-message-strip--dismissible" role="alert"  id="ZvPBg609" >
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="ZvPBg609" aria-label="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>
`;

DefaultStrip.storyName = 'Default';

DefaultStrip.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        description: {
            story: `
The default message strip can be used for general messages that don’t fit into any of the semantic type use cases. The user should be able to dismiss the message strip (in most cases), so be sure to include the close button and add the \`fd-message-strip--dismissible\` modifier class to the main element.
        `
        }
    }
};

export const Information = () => `<div class="fd-message-strip fd-message-strip--information fd-message-strip--dismissible" role="alert"  id="JwPcf464" >
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="JwPcf464" aria-label="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>
`;

Information.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        description: {
            story: 'The information message strip simply relays useful information to the users. To display an information message strip, add the `fd-message-strip--information` modifier class to the main element.'
        }
    }
};

export const Success = () => `<div class="fd-message-strip fd-message-strip--success fd-message-strip--dismissible" role="alert" id="ulr5z216">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="ulr5z216" aria-label="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>
`;

Success.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        description: {
            story: 'The success message strip communicates to the user that an action they’ve completed was successful. To display a success message strip, add the `fd-message-strip--success` modifier class to the main element.'
        }
    }
};

export const Warning = () => `<div class="fd-message-strip fd-message-strip--warning fd-message-strip--dismissible" role="alert" id="fwYq4606">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="fwYq4606" aria-label="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>
`;

Warning.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        description: {
            story: `
The warning message strip warns the user of potential issues; however, the user can still dismiss the message and continue. To display a warning message strip, add the \`fd-message-strip--warning\` modifier class to the main element.
`
        }
    }
};

export const Error = () => `<div class="fd-message-strip fd-message-strip--error fd-message-strip--dismissible" role="alert" id="SsoiW591">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW591" aria-label="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>
`;

Error.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        description: {
            story: `
The error message strip is triggered after the user enters data incorrectly or when a system error occurs. It should interrupt the user, blocking them from performing any final actions (such as _Submit_) until the error has been rectified. To display the error message strip, add the \`fd-message-strip--error\` modifier class to the main element.
`
        }
    }
};

export const NoIcons = () => `<div class="fd-message-strip fd-message-strip--information fd-message-strip--no-icon fd-message-strip--dismissible"
     role="alert" id="SsoiW592">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW592" aria-label="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>

<br />

<div class="fd-message-strip fd-message-strip--success fd-message-strip--no-icon fd-message-strip--dismissible"
     role="alert" id="SsoiW593">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW593" aria-label="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>

<br />

<div class="fd-message-strip fd-message-strip--warning fd-message-strip--no-icon fd-message-strip--dismissible"
     role="alert" id="SsoiW594">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW594" aria-label="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>

<br />

<div class="fd-message-strip fd-message-strip--error fd-message-strip--no-icon fd-message-strip--dismissible"
     role="alert" id="SsoiW595">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW595" aria-label="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>
`;

NoIcons.storyName = 'No icon';

NoIcons.parameters = {
    docs: {
        iframeHeight: messageStripHeight * 4,
        description: {
            story: 'To display message strip without an icon, add the `fd-message-strip--no-icon` modifier class to the main element.'
        }
    }
};
