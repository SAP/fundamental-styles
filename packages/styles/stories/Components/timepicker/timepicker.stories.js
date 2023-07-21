import mobileExampleHtml from "./mobile.example.html?raw";
import secondsCozyExampleHtml from "./seconds-cozy.example.html?raw";
import minutesCozyExampleHtml from "./minutes-cozy.example.html?raw";
import hours12CozyExampleHtml from "./hours12-cozy.example.html?raw";
import hours24CozyExampleHtml from "./hours24-cozy.example.html?raw";
import '../../../src/bar.scss';
import '../../../src/button.scss';
import '../../../src/input.scss';
import '../../../src/input-group.scss';
import '../../../src/popover.scss';
import '../../../src/segmented-button.scss';
import '../../../src/timepicker.scss';
export default {
  title: 'Components/Time Picker',
  parameters: {
    description: `The time picker allows the user to select a localized time, based on the 12-hour syste or the 24-hour system. It can be used with touch, mouse, or keyboard input. <br> For more information visit <a href="https://experience.sap.com/fiori-design-web//time-picker/" target="_blank">Fiori Design Guidelines</a>

##Usage
**Use the time picker if:**
- Users need to select a time.
- Users need to select a time range. In this case, one time picker can be used to set the starting time and a second one to set the end time.
- Users need to select a specific duration, such as 1 minute and 30 seconds.

**Do not use the time picker if:**
- Users need to select a standard duration such as 15 minutes, 30 minutes, 1 hour, or 2 hours. In this case, use the select control instead.

##Building blocks
- **Time Input Fiel**- users can enter a time directly or use the time picker button to select a time using the time picker popover.
On phones, selecting the time input field opens a time input popover for entering the time with the touch keyboard.

- **Time Picker Popover**- users can select a time by using the clock face to set hours, minutes, and seconds.
        - Hours clock face - depending on the time format, the hours clock face shows 12 hours or 24 hours
        - Minutes clock face
        - Seconds clock face (optional) - can be omitted if not relevant for the use case
        - Hours, minutes and seconds output - standard toggle buttons
        - AM/PM switch - uses segmented button
        - Now button (optional) - transparent icon only button
        - Footer - standard page footer using Bar component and decisive buttons

##Responsiveness
The time picker comes with a cozy mode and a compact mode. In the compact mode, the time input field and the button are smaller than in the cozy mode.
For mobile (size S) devices, the time picker popover does not open below the time input field, but in a subview.

##Behavior and Interaction
Users can enter the time in two ways:

- Enter a time directly in the input field
- Select a time using the time picker popover


##CSS Classes
- .fd-time-picker
    - .fd-time-picker__control
        - .fd-time-picker__input
    - .fd-time-picker__dropdown
        - .fd-time-picker__header
            - .fd-time-picker__output
                - .fd-time-picker__colon
        - .fd-time-picker\\_\\_clock-container
            - .fd-time-picker__clock
                - .fd-time-picker__label
                - .fd-time-picker\\_\\_item **Modifier classes:** .fd-time-picker\\_\\_item--deg6, .fd-time-picker\\_\\_item--deg12, ... , .fd-time-picker\\_\\_item--deg360
                    - .fd-time-picker\\_\\_tick **Modifier classes:**  .fd-time-picker\\_\\_tick--minute, .fd-time-picker\\_\\_tick--hour, .fd-time-picker\\_\\_tick--selected
                    - .fd-time-picker\\_\\_number **Modifier classes:** .fd-time-picker\\_\\_number--hover, .fd-time-picker\\_\\_number--invisible, .fd-time-picker\\_\\_number--selected
`
  },
  tags: ['f3', 'theme']
};
export const Hours24Cozy = () => hours24CozyExampleHtml;
Hours24Cozy.storyName = 'Time Picker with 24-hour Clock Face';
Hours24Cozy.parameters = {
  docs: {
    description: {
      story: `The 24-hour clock face shows an additional inner circle for the times from 13:00 to 24:00 hours.
`
    }
  }
};
export const Hours12Cozy = () => hours12CozyExampleHtml;
Hours12Cozy.storyName = 'Time Picker with 12-hour Clock Face';
Hours12Cozy.parameters = {
  docs: {
    description: {
      story: `The 12-hour clock face shows only one circle and an AM/PM switch is displayed.
`
    }
  }
};
export const MinutesCozy = () => minutesCozyExampleHtml;
MinutesCozy.storyName = 'Minutes Face';
MinutesCozy.parameters = {
  docs: {
    description: {
      story: `When the minutes value is selected in the time display, the minutes clock face is shown.`
    }
  }
};
export const SecondsCozy = () => secondsCozyExampleHtml;
SecondsCozy.storyName = 'Seconds Face';
SecondsCozy.parameters = {
  docs: {
    description: {
      story: `When the seconds value is selected in the time display, the seconds clock face is shown.`
    }
  }
};
export const Mobile = () => mobileExampleHtml;
Mobile.parameters = {
  docs: {
    description: {
      story: `On phones, focusing on the time input field opens a time input popover. The user can then use the mobile keyboard to enter the time. For the 12-hour time format, the popover also offers an AM/PM switch.
`
    }
  }
};