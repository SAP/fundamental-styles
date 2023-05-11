import mobileExampleHtml from "./mobile.example.html?raw";
import revertedStepsExampleHtml from "./reverted-steps.example.html?raw";
import responsiveExampleHtml from "./responsive.example.html?raw";
import customizedExampleHtml from "./customized.example.html?raw";
import defaultExampleExampleHtml from "./default-example.example.html?raw";
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/bar.scss';
import '../../../src/popover.scss';
import '../../../src/action-sheet.scss';
import '../../../src/wizard.scss';
export default {
  title: 'Components/Wizard',
  parameters: {
    description: `The wizard guides a user through a long or unfamiliar task by dividing it into sections, revealing information in an easy and digestible way.
It consists of a walkthrough screen, where the user is prompted to input required information and upon completing a section, the next sections subsequently follow in a prescribed order; and the summary page, where the form is displayed in read-only mode for assessment and final submission.

## Usage

**Use the wizard if:**

- the user has to accomplish a long or unfamiliar task
- the flow consist of a minimum of 3 and a maximum of 8 steps

**Do not use the wizard if:**

- a task has only 2 steps
- a task has more than 8 steps
- the format of the task is familiar to the user

## Types

There are two types of wizard that offer different functionality: **standard** and **branching**.

**Use the standard type if:**

- The total number of steps is known in advance.
- The number of steps does not change during usage.
- There is linear progression from one step to the next.

**Use the branching type if:**

- The total number of steps is not known.
- The number of steps may change during usage.
- There is non-linear progression. In other words, the user’s choice during one step determines which step comes next.
- In both types of wizard you can let users skip steps. Label these steps as “Optional”.


## Layout

The wizard can be used both in a full-screen layout and in the flexible column layout. There is no navigation from the wizard to a next page. After completion or cancellation, the user is always navigated back to the page the wizard was triggered from.

## Responsive paddings

These modifier classes will add horizontal paddings to the content and can be applied on the \`fd-wizard__progress-bar\` level, the \`fd-wizard__content\`, and/or the \`fd-wizard__step-content-container\` level.


|  **rem** |  <div style="margin-left: 2rem;"> **Min-width** </div> |  <div style="margin-left: 2rem;">**Max-width** </div> |  <div style="margin-left: 2rem;"> **Modifier class** </div> |
| :---- | :---------- | :---------- | :---------------------------------- |
| 1rem | <span style="margin-left: 2rem;">_n/a_</span> | <span style="margin-left: 2rem;">599px</span> | <code style="margin-left: 2rem;">fd-wizard__progress-bar--sm</code> / <code>fd-wizard__content--sm</code> / <code>fd-wizard__step-content-container--sm</code> |
| 2rem | <span style="margin-left: 2rem;">600px</span> | <span style="margin-left: 2rem;">1023px</span> | <code style="margin-left: 2rem;">fd-wizard__progress-bar--md</code> / <code>fd-wizard__content--md</code> / <code>fd-wizard__step-content-container--md</code> |
| 2rem | <span style="margin-left: 2rem;">1024px</span> | <span style="margin-left: 2rem;">1439px</span> | <code style="margin-left: 2rem;">fd-wizard__progress-bar--lg</code> / <code>fd-wizard__content--lg</code> / <code>fd-wizard__step-content-container--lg</code> |
| 3rem | <span style="margin-left: 2rem;">1440px</span> | <span style="margin-left: 2rem;">_n/a_</span> | <code style="margin-left: 2rem;">fd-wizard__progress-bar--xl</code> / <code>fd-wizard__content--xl</code> / <code>fd-wizard__step-content-container--xl</code> |

## Modifiers

| **Steps** | <div style="margin-left: 2rem;"> **Modifier class** </div> |
| :---- | :-------------- |
| Completed | <code style="margin-left: 2rem;">fd-wizard__step--completed</code>    |
| Current | <code style="margin-left: 2rem;">fd-wizard__step--current</code>      |
| Upcoming | <code style="margin-left: 2rem;">fd-wizard__step--upcoming</code>     |
| No-label | <code style="margin-left: 2rem;">fd-wizard__step--no-label</code>     |
| Stacked | <code style="margin-left: 2rem;">fd-wizard__step--stacked</code>      |
| Stacked on top | <code style="margin-left: 2rem;">fd-wizard__step--stacked-top</code>  |
| Active | <code style="margin-left: 2rem;">fd-wizard__step--active</code>       |

## Connector types

There are multiple connector types that can be displayed depending on the steps involved.

| **Connector type** |<div style="margin-left: 2rem;"> **Connection** </div> | <div style="margin-left: 2rem;"> **Class/Modifier** </div> |
| :---- | :-------------- | :-------------- |
| Default | <span style="margin-left: 2rem;"> Inactive step (or Active step) to Inactive step </span> | <code style="margin-left: 2rem;">fd-wizard__connector</code>|
| Active | <span style="margin-left: 2rem;"> Active step to Active step </span> | <code style="margin-left: 2rem;">fd-wizard__connector--active</code>|
| Branching | <span style="margin-left: 2rem;"> Branching step to Inactive step or no step </span> | <code style="margin-left: 2rem;">fd-wizard__connector--branching</code>|

## Truncation rules

| **Type** |  <div style="min-width: 6rem; margin-left: 2rem;">**Max lines**</div>  | <div style="margin-left: 2rem;"> **Modifier class** </div> |
| :---- | :---------------- | :-------------------------- |
| Label | <span style="margin-left: 2rem;">2</span> |  <span style="margin-left: 2rem;"> Text truncates when it exceeds the maximum space available. When a step has optional text, the label can only accommodate 1 line. </span> |
| Label with optional text | <span style="margin-left: 2rem;">1</span> | <span style="margin-left: 2rem;">Text truncates when it exceeds the maximum space available. The \`fd-wizard__label-container--optional\` modifier class is applied together with \`fd-wizard__label-container\`.</span> |
| Optional text | <span style="margin-left: 2rem;">2</span> | <span style="margin-left: 2rem;">Text truncates when it exceeds the maximum space available.</span> |

## Content background

| **Type** | <span style="margin-left: 2rem;">**Modifier class**</span> |
| :--- | :-------------- |
| Solid |  <code style="margin-left: 2rem;"> fd-wizard__content--solid</code> |
| List | <code style="margin-left: 2rem;"> fd-wizard__content--list</code> |
| Transparent | <code style="margin-left: 2rem;"> fd-wizard__content--transparent</code> |

`,
    docs: {
      story: {
        iframeHeight: 400
      }
    },
    tags: ['f3', 'theme', 'development']
  }
};
export const DefaultExample = () => defaultExampleExampleHtml;
DefaultExample.storyName = 'Default';
DefaultExample.parameters = {
  docs: {
    story: {
      iframeHeight: 950
    },
    description: {
      story: `The default wizard displays a walkthrough screen with forms split into sections. Once the user fills all of the necessary input fields, a button is displayed to go to the next section. A *Cancel* button is displayed in the footer, so the user can exit the wizard at any point during the process. However, if a user exits the wizard after adding their input, they will receive a warning that their information will be lost.
`
    }
  }
};
export const Customized = () => customizedExampleHtml;
Customized.parameters = {
  docs: {
    story: {
      iframeHeight: 950
    },
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
    story: {
      iframeHeight: 950
    },
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
    story: {
      iframeHeight: 950
    },
    description: {
      story: 'To indicate reverted steps, use combination of `fd-wizard__step--completed` and `fd-wizard__step--upcoming` classes.'
    }
  }
};
export const Mobile = () => mobileExampleHtml;
Mobile.parameters = {
  docs: {
    story: {
      iframeHeight: 950
    },
    description: {
      story: `For mobile devices, add the \`fd-bar--floating-footer\` modifier class to achieve a floating footer. modifier class to display a floating footer. The *Next Step* button is placed after the content whenever possible. However, it can be placed above the floating footer by adding the \`fd-wizard__next-step--floating\` modifier class.
`
    }
  }
};