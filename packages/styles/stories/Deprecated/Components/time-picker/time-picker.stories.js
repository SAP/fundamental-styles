import tabletModeExampleHtml from "./tablet-mode.example.html?raw";
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
export const TabletMode = () => tabletModeExampleHtml;
TabletMode.parameters = {
  docs: {
    description: {
      story: 'The time picker can be displayed in tablet mode by adding the `.fd-time--tablet` modifier class to the `.fd-time` base class.'
    }
  }
};