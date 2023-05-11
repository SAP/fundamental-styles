import displayOnlyInfoLabelExampleHtml from "./display-only-info-label.example.html?raw";
import numericInfoLabelExampleHtml from "./numeric-info-label.example.html?raw";
import infoLabelWithIconExampleHtml from "./info-label-with-icon.example.html?raw";
import colorFlavorsExampleHtml from "./color-flavors.example.html?raw";
import '../../../src/info-label.scss';
import '../../../src/icon.scss';
export default {
  title: 'Components/Info Label',
  parameters: {
    description: `
Info Label is a small non-interactive numeric or text-based label.
Its primary use is to add user-defined characteristic to an object.
Use the Info Label base class with following modifiers:

- \`fd-info-label\`
    - \`fd-info-label--accent-color-*\`
    - \`fd-info-label--icon\`
    - \`fd-info-label--numeric\`
      `,
    tags: ['btp', 'a11y', 'theme']
  }
};
export const ColorFlavors = () => colorFlavorsExampleHtml;
ColorFlavors.parameters = {
  docs: {
    description: {
      story: `Use the \`fd-info-label--accent-color-*\` modifier class to apply semantic color to Info Label.
            Options include numbers from 1 to 10.`
    }
  }
};
export const InfoLabelWithIcon = () => infoLabelWithIconExampleHtml;
InfoLabelWithIcon.parameters = {
  docs: {
    description: {
      story: `Use the \`fd-info-label--icon\` modifier class and icon type to create Info Label with Icon.`
    }
  }
};
export const NumericInfoLabel = () => numericInfoLabelExampleHtml;
NumericInfoLabel.parameters = {
  docs: {
    description: {
      story: `For Numeric Info Label use the \`fd-info-label--numeric\` modifier class.`
    }
  }
};
export const DisplayOnlyInfoLabel = () => displayOnlyInfoLabelExampleHtml;
DisplayOnlyInfoLabel.parameters = {
  docs: {
    description: {
      story: `For Display Only Info Label use the \`fd-info-label--display\` modifier class.`
    }
  }
};