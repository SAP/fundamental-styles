import segmentedButtonExampleHtml from "./segmented-button.example.html?raw";
import '../../../src/segmented-button.scss';
import '../../../src/icon.scss';
import '../../../src/button.scss';
export default {
  title: 'Components/Buttons/Segmented Button',
  parameters: {
    description: `The segmented button displays a group of options. Only one option can be active at a time, while the others remain or become inactive when the initial option is selected.
This button type was previously known as "button group" and is comparable to a radio button group.
It can be displayed by using the container with \`fd-segmented-button\` class with \`role="group"\` and the \`aria-label="Group label"\` attribute.
Active button should have \`aria-pressed="true"\` and \`fd-button--toggled\` class and inactive buttons should have \`aria-pressed="false"\`.
    `,
    tags: ['f3', 'a11y', 'theme']
  }
};

export const SegmentedButton = () => segmentedButtonExampleHtml;
SegmentedButton.storyName = 'Segmented button';
SegmentedButton.parameters = {
  docs: {
    description: {
      story: ``
    }
  }
};
