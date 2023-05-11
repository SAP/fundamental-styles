import tabletModeExampleHtml from "./tablet-mode.example.html?raw";
import cozyAndCompactModeExampleHtml from "./cozy-and-compact-mode.example.html?raw";
import '../../../../src/popover.scss';
import '../../../../src/input.scss';
import '../../../../src/input-group.scss';
import '../../../../src/time.scss';
import '../../../../src/button.scss';
import '../../../../src/icon.scss';
import '../../../../src/bar.scss';
import '../../../../src/layout-grid.scss';
export default {
  title: 'Deprecated/Components/Time Picker',
  parameters: {
    description: `## DEPRECATED
        The time picker allows the user to select a localized time. It is smaller in compact mode and provides a touch-friendly size in cozy mode.


##Usage

**Use the time picker if:**

- Users need to select a time.
- Users need to select a time range. In this case, one time picker can be used to set the starting time and a second one to set the end time.
- Users need to select a specific duration, such as 1 minute and 30 seconds.


`,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const CozyAndCompactMode = () => cozyAndCompactModeExampleHtml;
CozyAndCompactMode.parameters = {
  docs: {
    story: {
      iframeHeight: 580
    },
    description: {
      story: `The time picker is  a composition of \`input-group\`, \`popover\`, and \`time\` components to create a time selection interaction.
It can be displayed in compact mode by adding the \`fd-input--compact\`, \`fd-button--compact\` and \`fd-time--compact\` modifier classes to the building blocks of the component. AM and PM locale-dependent can be set with the property \`localeId\`.`
    }
  }
};
export const TabletMode = () => tabletModeExampleHtml;
TabletMode.parameters = {
  docs: {
    story: {
      iframeHeight: 550
    },
    description: {
      story: 'The time picker can be displayed in tablet mode by adding the `.fd-time--tablet` modifier class to the `.fd-time` base class.'
    }
  }
};