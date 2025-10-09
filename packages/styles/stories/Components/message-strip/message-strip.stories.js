import messageStripWithAccentColorsExampleHtml from "./message-strip-with-accent-colors.example.html?raw";
import messageStripWithCustomIconExampleHtml from "./message-strip-with-custom-icon.example.html?raw";
import messageStripWithLinkExampleHtml from "./message-strip-with-link.example.html?raw";
import noIconsNotDismissibleExampleHtml from "./no-icons-not-dismissible.example.html?raw";
import noIconsExampleHtml from "./no-icons.example.html?raw";
import errorExampleHtml from "./error.example.html?raw";
import warningExampleHtml from "./warning.example.html?raw";
import successExampleHtml from "./success.example.html?raw";
import informationExampleHtml from "./information.example.html?raw";
import defaultStripExampleHtml from "./default-strip.example.html?raw";
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

        `
  }
};

export const DefaultStrip = () => defaultStripExampleHtml;
DefaultStrip.storyName = 'Default';
DefaultStrip.parameters = {
  docs: {
    description: {
      story: `The default message strip can be used for general messages that don’t fit into any of the semantic type use cases.`
    }
  }
};
export const Information = () => informationExampleHtml;
Information.parameters = {
  docs: {
    description: {
      story: 'To display an information message strip, add the `fd-message-strip--information` modifier class to the main element.'
    }
  }
};
export const Success = () => successExampleHtml;
Success.parameters = {
  docs: {
    description: {
      story: 'To display a success message strip, add the `fd-message-strip--success` modifier class to the main element.'
    }
  }
};
export const Warning = () => warningExampleHtml;
Warning.parameters = {
  docs: {
    description: {
      story: `To display a warning message strip, add the \`fd-message-strip--warning\` modifier class to the main element.`
    }
  }
};
export const Error = () => errorExampleHtml;
Error.parameters = {
  docs: {
    description: {
      story: `To display the error message strip, add the \`fd-message-strip--error\` modifier class to the main element.
`
    }
  }
};
export const NoIcons = () => noIconsExampleHtml;
NoIcons.storyName = 'No icon';
NoIcons.parameters = {
  docs: {
    description: {
      story: 'To display message strip without an icon, add the `fd-message-strip--no-icon` modifier class to the main element. Add the `fd-message-strip--dismissible` modifier class if the element is dismissible.'
    }
  }
};
export const NoIconsNotDismissible = () => noIconsNotDismissibleExampleHtml;
NoIconsNotDismissible.storyName = 'No icon and no dismiss button';
NoIconsNotDismissible.parameters = {
  docs: {
    description: {
      story: 'To display message strip without an icon, add the `fd-message-strip--no-icon` modifier class to the main element.'
    }
  }
};
export const MessageStripWithLink = () => messageStripWithLinkExampleHtml;
MessageStripWithLink.storyName = 'Text with link';
MessageStripWithLink.parameters = {
  docs: {
    description: {
      story: `The Link inside Message Strip has additional styling. Add the <code>fd-message-strip--link</code> modifier class if the message contains a link element. <br>
The MessageStrip can include multiple links—not just one. This allows applications to provide additional context or actions related to the message, such as links to:
<ul>
  <li>Other apps where the issue originated</li>
  <li>Apps where the issue can be resolved</li>
  <li>Related objects or specific sections</li>
  <li>Help documentation</li>
</ul>`
    }
  }
};
export const MessageStripWithCustomIcon = () => messageStripWithCustomIconExampleHtml;
MessageStripWithCustomIcon.storyName = 'Custom icon';
MessageStripWithCustomIcon.parameters = {
  docs: {
    description: {
      story: 'The message strip can be customized by changing the status icon. Check <a href="https://sap.github.io/fundamental-styles/?path=/docs/components-icons-sap-icons--sizes" target="_blank" rel="noopener noreferrer" title="click to open Avatar component. Opens in a new window.">Icons</a> control for more icon types.'
    }
  }
};
export const MessageStripWithAccentColors = () => messageStripWithAccentColorsExampleHtml;
MessageStripWithAccentColors.storyName = 'Custom Message Strip';
MessageStripWithAccentColors.parameters = {
  docs: {
    description: {
      story: `If the application needs a custom Message Strip, other than the semantic variations, then the colours from Inverted Object Status/Tag control should be used. Use the modifier classes \`.fd-message-strip--indication-color-*\`, where \`*\` is a number from 1 to 10 for the first set, and 1b to 10b for the second set. <br /><b>Disclaimer:</b> <br />Please note that accessibility features, including contrast ratios, are verified only for centrally defined standard values in Light, Dark, HCB, and HCW themes. Customization of components – whether internal or external – may impact compliance, and accessibility cannot be guaranteed.`
    }
  }
};