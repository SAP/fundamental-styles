import truncateExampleExampleHtml from "./truncate-example.example.html?raw";
import invertedIndicationExampleHtml from "./inverted-indication.example.html?raw";
import invertedIndicationSecondaryExampleHtml from "./inverted-indication-secondary.example.html?raw";
import invertedExampleHtml from "./inverted.example.html?raw";
import invertedStatesExampleHtml from "./inverted-states.example.html?raw";
import largeObjectStatusExampleHtml from "./large-object-status.example.html?raw";
import clickableObjectStatusExampleHtml from "./clickable-object-status.example.html?raw";
import genericIndicationColorsExampleHtml from "./generic-indication-colors.example.html?raw";
import iconAndTextExampleHtml from "./icon-and-text.example.html?raw";
import textExampleHtml from "./text.example.html?raw";
import iconExampleHtml from "./icon.example.html?raw";
import primaryExampleHtml from "./primary.example.html?raw";
import '../../../src/object-status.scss';
import '../../../src/icon.scss';
export default {
  title: 'Components/Object Status',
  parameters: {
    description: `Object Status is a short text that represents the semantic status of an object. It has a semantic
color and an optional icon. Typically, the object status is used in the dynamic page header and as a status
attribute of a line item in a table. `,
  }
};
export const Primary = () => primaryExampleHtml;
Primary.parameters = {
  docs: {
    description: {
      story: `
  Object Status can display the semantic status of an object: negative (class: \`fd-object-status--negative\`), critical
  (class: \`fd-object-status--critical\`), positive (class: \`fd-object-status--positive\`),
  informative (class: \`fd-object-status--informative\`), or none.
            `
    }
  }
};
export const Icon = () => iconExampleHtml;
Icon.parameters = {
  docs: {
    description: {
      story: 'Object status icon only'
    }
  }
};
export const Text = () => textExampleHtml;
Text.parameters = {
  docs: {
    description: {
      story: `Object status text only`
    }
  }
};
export const IconAndText = () => iconAndTextExampleHtml;
IconAndText.parameters = {
  docs: {
    description: {
      story: `Object status icon and text`
    }
  }
};
export const GenericIndicationColors = () => genericIndicationColorsExampleHtml;
GenericIndicationColors.parameters = {
  docs: {
    description: {
      story: `Object Status with Generic Indication Colors`
    }
  }
};
export const ClickableObjectStatus = () => clickableObjectStatusExampleHtml;
ClickableObjectStatus.parameters = {
  docs: {
    description: {
      story: `
 If the object status is used as a link, a hover effect is shown on non-touch devices.
 If the object status is shown using a combination of icon and text, there is no hover effect for the icon.
 If Object Status has to be clicked/tabbed by the user add the \`fd-object-status--link\` modifier class.
 `
    }
  }
};
export const LargeObjectStatus = () => largeObjectStatusExampleHtml;
export const Inverted = () => invertedExampleHtml;
Inverted.parameters = {
  docs: {
    description: {
      story: `
 Inverted Object Status(optional inverted visualization) determines whether the background color reflects the set state
 instead of the control's text. Use the inverted object status if the information is crucial for the user’s actions and needs to stand out visually.
 Inverted Object Status is achieved by adding the \`fd-object-status--inverted\` modifier class.
            `
    }
  }
};
export const InvertedStates = () => invertedStatesExampleHtml;
InvertedStates.parameters = {
  docs: {
    description: {
      story: `
 
            `
    }
  }
};
export const InvertedIndication = () => invertedIndicationExampleHtml;
InvertedIndication.parameters = {
  docs: {
    description: {
      story: `Inverted indication colors`
    }
  }
};
export const InvertedIndicationSecondary = () => invertedIndicationSecondaryExampleHtml;
InvertedIndicationSecondary.parameters = {
  docs: {
    description: {
      story: `Secondary Set of Inverted indication colors`
    }
  }
};
export const TruncateExample = () => truncateExampleExampleHtml;
TruncateExample.storyName = 'Object Status with single line text with ellipsis';
TruncateExample.parameters = {
  docs: {
    description: {
      story: `
  By default, Object Status text goes on multiple lines based on the max width that is set for the element. For a single line text with ellipsis add the <code>fd-object-status--truncate</code> modifier class to the <code>fd-object-status</code> base class.
            `
    }
  }
};