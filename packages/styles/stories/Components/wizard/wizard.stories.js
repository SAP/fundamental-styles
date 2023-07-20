import mobileExampleHtml from "./mobile.example.html?raw";
import revertedStepsExampleHtml from "./reverted-steps.example.html?raw";
import responsiveExampleHtml from "./responsive.example.html?raw";
import customizedExampleHtml from "./customized.example.html?raw";
import defaultExampleExampleHtml from "./default-example.example.html?raw";
import description from "./wizard.md?raw";
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/bar.scss';
import '../../../src/popover.scss';
import '../../../src/action-sheet.scss';
import '../../../src/wizard.scss';
export default {
  title: 'Components/Wizard',
  parameters: {
    description,
    tags: ['f3', 'theme', 'development']
  }
};
export const DefaultExample = () => defaultExampleExampleHtml;
DefaultExample.storyName = 'Default';
DefaultExample.parameters = {
  docs: {
    description: {
      story: `The default wizard displays a walkthrough screen with forms split into sections. Once the user fills all of the necessary input fields, a button is displayed to go to the next section. A *Cancel* button is displayed in the footer, so the user can exit the wizard at any point during the process. However, if a user exits the wizard after adding their input, they will receive a warning that their information will be lost.
`
    }
  }
};
export const Customized = () => customizedExampleHtml;
Customized.parameters = {
  docs: {
    description: {
      story: `The wizard component can be customized with modifier classes. For instance, the example below has several modified elements:

| **Element** | <div style="margin-left: 2rem;"> **Modifier class** </div> | <div style="margin-left: 2rem;"> **Modification** </div> |
| :---- | :---- | :-------------- |
| \`fd-wizard__progress-bar\` | \`fd-wizard__progress-bar--md\` | <span style="margin-left: 2rem;"> Added responsive padding </span> |
| \`fd-wizard__content\` | \`fd-wizard__content--md\` | <span style="margin-left: 2rem;"> Added responsive padding </span> |
| \`fd-wizard__step-content-container\` | \`fd-wizard__step-content-container--md\` | <span style="margin-left: 2rem;"> Added responsive padding </span> |
| \`fd-bar--page\` | \`fd-bar--page-m_l\` | <span style="margin-left: 2rem;"> Added responsive padding </span> |
| \`fd-wizard__content\` | \`fd-wizard__content--list\` | <span style="margin-left: 2rem;"> The background of the wizard content is set to list </span> |
| \`fd-wizard__connector\` | \`fd-wizard__connector--branching\` | <span style="margin-left: 2rem;"> Adds a branching step connector </span> |
`
    }
  }
};
export const Responsive = () => responsiveExampleHtml;
Responsive.parameters = {
  docs: {
    description: {
      story: `If there is sufficient horizontal space, all labels are shown.
However, when the width decreases, the step labels disappear. To hide the labels, add the \`fd-wizard__step--no-label\` modifier class to the step.
The unselected steps should stack on top of each other when there is limited screen space. To stack them, add the \`fd-wizard__step--stacked\` modifier class. The last completed step should display on top, and requires a \`fd-wizard__step--stacked-top\` modifier class. Although they are stacked, upcoming steps do not require the stacked-top modifier class.
`
    }
  }
};
export const RevertedSteps = () => revertedStepsExampleHtml;
RevertedSteps.parameters = {
  docs: {
    description: {
      story: 'To indicate reverted steps, use combination of `fd-wizard__step--completed` and `fd-wizard__step--upcoming` classes.'
    }
  }
};
export const Mobile = () => mobileExampleHtml;
Mobile.parameters = {
  docs: {
    description: {
      story: `For mobile devices, add the \`fd-bar--floating-footer\` modifier class to achieve a floating footer. modifier class to display a floating footer. The *Next Step* button is placed after the content whenever possible. However, it can be placed above the floating footer by adding the \`fd-wizard__next-step--floating\` modifier class.
`
    }
  }
};