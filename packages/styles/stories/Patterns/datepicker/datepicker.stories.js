import mobilePortraitExampleHtml from "./mobile-portrait.example.html?raw";
import mobileLandscapeExampleHtml from "./mobile-landscape.example.html?raw";
import todayNavigationButtonExampleHtml from "./today-navigation-button.example.html?raw";
import todaySelectionButtonExampleHtml from "./today-selection-button.example.html?raw";
import '../../../src/calendar.scss';
import '../../../src/input-group.scss';
import '../../../src/popover.scss';
import '../../../src/title.scss';
import '../../../src/button.scss';
import '../../../src/input.scss';
import '../../../src/form-label.scss';
import '../../../src/icon.scss';
import '../../../src/bar.scss';
import '../../../src/dialog.scss';
import '../../../src/segmented-button.scss';
export default {
  title: 'Patterns/Date Picker',
  parameters: {
    description: `The date picker provides responsive behavior that allows for simple operation on all devices. It is smaller in compact mode and provides a touch-friendly size in cozy mode.

The date picker lets users select a localized date using touch, mouse, or keyboard input.

It consists of two parts:

- **Input Field**: The user can enter a date directly or select it using the date picker

- **Date Picker**: The user can see a day view, month view, year view, or year ranges.


##Usage

Use the **DatePicker** if:

-    The user needs to enter a single date or a date range.
-    The user needs to navigate directly from one month or year to another.
      `,
    tags: ['f3', 'a11y', 'theme']
  }
};
export const TodaySelectionButton = () => todaySelectionButtonExampleHtml;
TodaySelectionButton.parameters = {
  docs: {
    story: {
      iframeHeight: 500
    },
    description: {
      story: `
The today selection button in the footer selects today's date in the system or user-preferred timezone and closes the DatePicker popover.
This date value then appears in the DatePicker's input field. If using a compact datepicker add the \`fd-button--compact\` class to this button.
`
    }
  }
};
export const TodayNavigationButton = () => todayNavigationButtonExampleHtml;
TodayNavigationButton.parameters = {
  docs: {
    story: {
      iframeHeight: 450
    },
    description: {
      story: `
The today navigation button in the header navigates focus to today's date in the system or user-preferred timezone, selects it but does not close the DatePicker popover.
This is useful in displaying the DatePicker on mobile where DatePicker closes when user presses the OK button.
If using a compact datepicker add the \`fd-button--compact\` class to this button.

**Note: Using both today selection and navigation buttons on the same datepicker is not recommended, as it may lead to confusion.**
`
    }
  }
};
export const MobileLandscape = () => mobileLandscapeExampleHtml;
MobileLandscape.storyName = 'Mobile landscape mode with today navigation';
MobileLandscape.parameters = {
  docs: {
    story: {
      iframeHeight: 400
    },
    description: {
      story: 'The additional `Today` button displayed in the navigation part of the calendar, sets the focus to the current date. The landscape sizing and roation of thw the date picker is done by adding the `fd-calendar--mobile-landscape` class.'
    }
  }
};
export const MobilePortrait = () => mobilePortraitExampleHtml;
MobilePortrait.storyName = 'Mobile portrait mode with today navigation';
MobilePortrait.parameters = {
  docs: {
    story: {
      iframeHeight: 500
    },
    description: {
      story: 'Similar to the mobile landscape example, mobile portrait mode has a `Today` button. To make date picker visible in portrait mode, add the`fd-calendar--mobile-portrait` class.'
    }
  }
};