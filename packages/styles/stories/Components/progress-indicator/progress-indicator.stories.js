import truncationExampleHtml from "./truncation.example.html?raw";
import valueStatesExampleHtml from "./value-states.example.html?raw";
import layoutExampleHtml from "./layout.example.html?raw";
import '../../../src/progress-indicator.scss';
import '../../../src/menu.scss';
import '../../../src/popover.scss';
import '../../../src/icon.scss';
export default {
  title: 'Components/Progress Indicator',
  parameters: {
    description: `The progress indicator visualizes the current advancement of a process or a degree of accomplishment. The inside of the progress indicator is filled with color to indicate the state of progress. The advancement depends on the specific process. The progress is shown either using absolute numbers or the current percentage of completion together with a progress bar.

##Usage
**Use the progress indicator if:**

- You need to visually show a current status.
- You need to visually strengthen a current status.
- You need to make different states comparable to each other at a higher level.
- You want to show custom values as well as percentages.

**Do not use the progress indicator if:**

- Visual feedback is needed for an ongoing operation. Use a busy indicator instead.
- The progress is indeterminate. Use a busy indicator instead.
- You want to display a single value in the form of a fillable shape or a group of shapes that describe their context. Use the status indicator instead.

##Modifier classes
State | Modifier class
:------------- | :-----------------
Mobile | \`fd-progress-indicator--mobile\`
Display | \`fd-progress-indicator--display\`
Informative &nbsp;&nbsp;&nbsp;&nbsp; | \`fd-progress-indicator--informative\`
Positive | \`fd-progress-indicator--positive\`
Critical | \`fd-progress-indicator--critical\`
Negative | \`fd-progress-indicator--negative\`
        `,
    components: ['progress-indicator', 'menu', 'popover', 'icon'],
    tags: ['f3', 'a11y', 'theme', 'development']
  }
};
export const Layout = () => layoutExampleHtml;
Layout.parameters = {
  docs: {
    description: {
      story: `
Show the current progress as a percentage value between 0% and 100%.
Alternatively, you can show the current progress as text in addition to the bar.
In this case, the text is shown on the right of the bar if the progress is 50% or less. In all other cases, the progress is shown right-aligned on the bar itself
You also have the option of showing any application-specific text instead of a percentage.
        `
    }
  }
};
export const ValueStates = () => valueStatesExampleHtml;
ValueStates.storyName = 'States';
ValueStates.parameters = {
  docs: {
    description: {
      story: 'The progress indicator can visualize different value states that are represented by various theme-dependent semantic colors. The states are: normal, success, warning, error, and information.'
    }
  }
};
export const Truncation = () => truncationExampleHtml;
Truncation.storyName = 'Truncation Behaviour';
Truncation.parameters = {
  docs: {
    description: {
      story: 'If the length of the text exceeds the available space in the progress indicator, the text truncates. In this case, clicking the progress indicator displays an information popover with the full text.'
    }
  }
};