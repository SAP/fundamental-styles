import segmentedButtonExampleHtml from "./segmented-button.example.html?raw";
import segmentedButtonVerticalExampleHtml from "./segmented-button-vertical.example.html?raw";
import '../../../src/segmented-button.scss';
import '../../../src/icon.scss';
import '../../../src/button.scss';
import '../../../src/message-strip.scss';
export default {
  title: 'Components/Buttons/Segmented Button',
  parameters: {
    description: `The segmented button displays a group of options. Only one option can be active at a time, while the others remain or become inactive when the initial option is selected.
This button type was previously known as "button group" and is comparable to a radio button group.
It can be displayed by using the container with \`fd-segmented-button\` class with \`role="group"\` and the \`aria-label="Group label"\` attribute.
Active button should have \`aria-pressed="true"\` and \`fd-button--toggled\` class and inactive buttons should have \`aria-pressed="false"\` \n\n**New Feature:** Multiple items can be selected at a time.
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

export const Vertical = () => segmentedButtonVerticalExampleHtml;
Vertical.storyName = 'Vertical alignment';
Vertical.parameters = {
  docs: {
    description: {
      story: `Segmented button can also be rendered vertically if \`.fd-segmented-button--vertical\` class modifier is added.
      <div class="fd-message-strip fd-message-strip--no-icon fd-message-strip--information" role="note" aria-live="assertive" id="message-strip-1" aria-labelledby="message-strip-1">
        <b class="fd-message-strip__text">
          Vertical segmented button should only be used with icon-only buttons.
        </b>
      </div>
      `
    }
  }
};
