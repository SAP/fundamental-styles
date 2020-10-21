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
        tags: ['f3', 'a11y', 'theme'],
        components: ['button', 'message-strip', 'icon']
    }
};

const messageStripHeight = 64;

export const defaultStrip = () => `<div class="fd-message-strip fd-message-strip--dismissible" role="alert"  id="ZvPBg609" >
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="ZvPBg609" aria-label="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>
`;

defaultStrip.storyName = 'Default';

defaultStrip.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        storyDescription: `
The default message strip can be used for general messages that don’t fit into any of the semantic type use cases. The user should be able to dismiss the message strip (in most cases), so be sure to include the close button and add the <code>fd-message-strip--dismissible</code> modifier class to the main element.
        `
    }
};

export const information = () => `<div class="fd-message-strip fd-message-strip--information fd-message-strip--dismissible" role="alert"  id="JwPcf464" >
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="JwPcf464" aria-label="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>
`;

information.storyName = 'Information';

information.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        storyDescription: 'The information message strip simply relays useful information to the users. To display an information message strip, add the <code>fd-message-strip--information</code> modifier class to the main element.'
    }
};

export const success = () => `<div class="fd-message-strip fd-message-strip--success fd-message-strip--dismissible" role="alert" id="ulr5z216">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="ulr5z216" aria-label="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>
`;

success.storyName = 'Success';

success.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        storyDescription: 'The success message strip communicates to the user that an action they’ve completed was successful. To display a success message strip, add the <code>fd-message-strip--success</code> modifier class to the main element.'
    }
};

export const warning = () => `<div class="fd-message-strip fd-message-strip--warning fd-message-strip--dismissible" role="alert" id="fwYq4606">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="fwYq4606" aria-label="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>
`;

warning.storyName = 'Warning';

warning.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        storyDescription: `
The warning message strip warns the user of potential issues; however, the user can still dismiss the message and continue. To display a warning message strip, add the <code>fd-message-strip--warning</code> modifier class to the main element.
`
    }
};

export const error = () => `<div class="fd-message-strip fd-message-strip--error fd-message-strip--dismissible" role="alert" id="SsoiW591">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW591" aria-label="Close">
    <i class="sap-icon--decline"></i>
  </button>
</div>
`;

error.storyName = 'Error';

error.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        storyDescription: `
The error message strip is triggered after the user enters data incorrectly or when a system error occurs. It should interrupt the user, blocking them from performing any final actions (such as _Submit_) until the error has been rectified. To display the error message strip, add the <code>fd-message-strip--error</code> modifier class to the main element.
`
    }
};

export const noIcons = () => `<div class="fd-message-strip fd-message-strip--information fd-message-strip--no-icon fd-message-strip--dismissible" 
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

noIcons.storyName = 'No icon';

noIcons.parameters = {
    docs: {
        iframeHeight: messageStripHeight * 4,
        storyDescription: 'To display message strip without an icon, add the <code>fd-message-strip--no-icon</code> modifier class to the main element.'
    }
};
