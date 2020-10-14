export default {
    title: 'Components/Message Strip',
    parameters: {
        description: 'Message Strip provide inline messages within the application that are color-coded to emphasize the level of urgency.',
        tags: ['f3', 'a11y', 'theme'],
        components: ['button', 'message-strip', 'icon']
    }
};

const messageStripHeight = 64;

export const defaultStrip = () => `
<div class="fd-message-strip fd-message-strip--dismissible" role="alert"  id="ZvPBg609" >
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="ZvPBg609" aria-label="Close">
    <i class="fd-icon--decline"></i>
  </button>
</div>
`;

defaultStrip.storyName = 'Default';

defaultStrip.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        storyDescription: `
The Message Strip provides information that is useful and relevant, but not critical. It can also provide feedback that
an action has been executed. In most cases, the user should be able to dismiss the Message Strip so include the modifier
class \`fd-message-strip--dismissible\` and include the close button.
        `
    }
};

export const information = () => `
<div class="fd-message-strip fd-message-strip--information fd-message-strip--dismissible" role="alert"  id="JwPcf464" >
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="JwPcf464" aria-label="Close">
    <i class="fd-icon--decline"></i>
  </button>
</div>
`;

information.storyName = 'Information';

information.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        storyDescription: 'Add the modifier class `fd-message-strip--information` for Information Message Strip.'
    }
};

export const success = () => `
<div class="fd-message-strip fd-message-strip--success fd-message-strip--dismissible" role="alert" id="ulr5z216">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="ulr5z216" aria-label="Close">
    <i class="fd-icon--decline"></i>
  </button>
</div>
`;

success.storyName = 'Success';

success.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        storyDescription: 'Add the modifier class `fd-message-strip--success` for Information Message Strip.'
    }
};

export const warning = () => `
<div class="fd-message-strip fd-message-strip--warning fd-message-strip--dismissible" role="alert" id="fwYq4606">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="fwYq4606" aria-label="Close">
    <i class="fd-icon--decline"></i>
  </button>
</div>
`;

warning.storyName = 'Warning';

warning.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        storyDescription: `
The Message Strip warns of potential issues, but the user can still continue. The user will need to dismiss the Message Strip.
Add the modifier class \`fd-message-strip--warning\` for Warning Message Strip.
`
    }
};

export const error = () => `
<div class="fd-message-strip fd-message-strip--error fd-message-strip--dismissible" role="alert" id="SsoiW591">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW591" aria-label="Close">
    <i class="fd-icon--decline"></i>
  </button>
</div>
`;

error.storyName = 'Error';

error.parameters = {
    docs: {
        iframeHeight: messageStripHeight,
        storyDescription: `
This Message Strip is triggered after the user entered data incorrectly or a system error has occurred. It should
interrupt the user. A final action such as Submit cannot be carried out until the user has rectified the error.
The user will need to dismiss the Message Strip.Add the modifier class \`fd-message-strip--error\` for Error Message Strip.
`
    }
};

export const noIcons = () => `
<div class="fd-message-strip fd-message-strip--information fd-message-strip--no-icon fd-message-strip--dismissible" 
     role="alert" id="SsoiW592">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW592" aria-label="Close">
    <i class="fd-icon--decline"></i>
  </button>
</div>

<br />

<div class="fd-message-strip fd-message-strip--success fd-message-strip--no-icon fd-message-strip--dismissible" 
     role="alert" id="SsoiW593">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW593" aria-label="Close">
    <i class="fd-icon--decline"></i>
  </button>
</div>

<br />

<div class="fd-message-strip fd-message-strip--warning fd-message-strip--no-icon fd-message-strip--dismissible" 
     role="alert" id="SsoiW594">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW594" aria-label="Close">
    <i class="fd-icon--decline"></i>
  </button>
</div>

<br />

<div class="fd-message-strip fd-message-strip--error fd-message-strip--no-icon fd-message-strip--dismissible" 
     role="alert" id="SsoiW595">
  <p class="fd-message-strip__text">
    Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
  </p>
  <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW595" aria-label="Close">
    <i class="fd-icon--decline"></i>
  </button>
</div>
`;

noIcons.storyName = 'Without Icon';

noIcons.parameters = {
    docs: {
        iframeHeight: messageStripHeight * 4,
        storyDescription: 'Add the modifier class `fd-message-strip--no-icon` to render Message Strip without any icon.'
    }
};

export const rtl = () => `
<div dir="rtl">
    <div class="fd-message-strip fd-message-strip--dismissible" role="alert" id="ZvPBg609" >
      <p class="fd-message-strip__text">
        Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
      </p>
      <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="ZvPBg609" aria-label="Close">
        <i class="fd-icon--decline"></i>
      </button>
    </div>

     <br />

   <div class="fd-message-strip fd-message-strip--information fd-message-strip--no-icon fd-message-strip--dismissible" 
         role="alert" id="SsoiW592">
      <p class="fd-message-strip__text">
        Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
      </p>
      <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW592" aria-label="Close">
        <i class="fd-icon--decline"></i>
      </button>
   </div>
    
   <br />
    
    <div class="fd-message-strip fd-message-strip--error fd-message-strip--dismissible" 
         role="alert" id="SsoiW595">
      <p class="fd-message-strip__text">
        Vivamus sagittis diam in vehicula lobortis sapien arcu mattis erat vel aliquet sem urna et.
      </p>
      <button class="fd-button fd-button--transparent fd-button--compact fd-message-strip__close" aria-controls="SsoiW595" aria-label="Close">
        <i class="fd-icon--decline"></i>
      </button>
    </div>
</div>
`;

rtl.storyName = 'Rtl';

rtl.parameters = {
    docs: {
        iframeHeight: messageStripHeight * 4,
        storyDescription: 'Message Strip in Rtl mode'
    }
};
