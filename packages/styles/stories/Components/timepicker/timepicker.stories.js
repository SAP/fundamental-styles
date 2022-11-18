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
        - .fd-time-picker\\_\\_clock-container **Modifier classes:**fd-time-picker\\_\\_clock-container--compact
            - .fd-time-picker__clock
                - .fd-time-picker__label
                - .fd-time-picker\\_\\_item **Modifier classes:** .fd-time-picker\\_\\_item--deg6, .fd-time-picker\\_\\_item--deg12, ... , .fd-time-picker\\_\\_item--deg360
                    - .fd-time-picker\\_\\_tick **Modifier classes:**  .fd-time-picker\\_\\_tick--minute, .fd-time-picker\\_\\_tick--hour, .fd-time-picker\\_\\_tick--selected
                    - .fd-time-picker\\_\\_number **Modifier classes:** .fd-time-picker\\_\\_number--hover, .fd-time-picker\\_\\_number--invisible, .fd-time-picker\\_\\_number--selected
`
    },
    tags: ['f3', 'theme']
};

export const Hours24Cozy = () => `<div style="min-height: 500px;">
    <div class="fd-popover fd-popover--no-arrow fd-time-picker">
        <div class="fd-popover__control fd-time-picker__control is-expanded">
            <div class="fd-input-group">
                <input type="text" class="fd-input fd-input-group__input fd-time-picker__input" value="19:00">
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent fd-popover__control" aria-label="show/hide time picker" aria-expanded="true" aria-haspopup="true">
                        <i class="sap-icon--time-entry-request"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
            <div class="fd-time-picker__dropdown">
                <div class="fd-time-picker__header">
                    <div class="fd-time-picker__output">
                        <button class="fd-button fd-button--toggled">
                            19
                        </button>
                        <span class="fd-time-picker__colon">:</span>
                        <button class="fd-button" aria-pressed="true">
                            00
                        </button>
                    </div>
                </div>
                <div role="img" aria-label="Clock Dial" class="fd-time-picker__clock-container">
                    <div aria-hidden="true" class="fd-time-picker__clock fd-time-picker__clock--inner">
                        <div data-label="Hours" class="fd-time-picker__label"></div>
                        <div>
                            <div class="fd-time-picker__item fd-time-picker__item--deg6">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg12">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg18">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg24">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg30">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">1</span>
                                <span class="fd-time-picker__number">13</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg36">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg42">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg48">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg54">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg60">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">2</span>
                                <span class="fd-time-picker__number">14</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg66">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg72">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg78">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg84">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg90">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">3</span>
                                <span class="fd-time-picker__number">15</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg96">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg102">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg108">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg114">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg120">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number fd-time-picker__number--hover">4</span>
                                <span class="fd-time-picker__number">16</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg126">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg132">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg138">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg144">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg150">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">5</span>
                                <span class="fd-time-picker__number">17</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg156">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg162">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg168">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg174">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg180">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">6</span>
                                <span class="fd-time-picker__number">18</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg186">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg192">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg198">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg204">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg210">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">7</span>
                                <span class="fd-time-picker__number">19</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg216">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg222">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg228">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg234">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg240">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">8</span>
                                <span class="fd-time-picker__number">20</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg246">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg252">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg258">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg264">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg270">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">9</span>
                                <span class="fd-time-picker__number">21</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg276">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg282">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg288">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg294">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg300">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">10</span>
                                <span class="fd-time-picker__number">22</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg306">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg312">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg318">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg324">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg330">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">11</span>
                                <span class="fd-time-picker__number">23</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg336">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg342">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg348">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg354">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg360">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">12</span>
                                <span class="fd-time-picker__number">00</span>
                            </div>
                        </div>

                        <div class="fd-time-picker__item fd-time-picker__item--deg210">
                            <div class="fd-time-picker__tick fd-time-picker__tick--selected"></div>
                            <div class="fd-time-picker__number fd-time-picker__number--invisible"></div>
                            <div class="fd-time-picker__number fd-time-picker__number--selected">19</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--footer fd-bar--cozy">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--emphasized">OK</button>
                        </div>
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

`;

Hours24Cozy.storyName = 'Time Picker with 24-hour Clock Face';
Hours24Cozy.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `The 24-hour clock face shows an additional inner circle for the times from 13:00 to 24:00 hours.
` }
    }
};

export const Hours12Cozy = () => `<div style="min-height: 500px;">
    <div class="fd-popover fd-popover--no-arrow fd-time-picker">
        <div class="fd-popover__control fd-time-picker__control is-expanded">
            <div class="fd-input-group">
                <input type="text" class="fd-input fd-input-group__input fd-time-picker__input" placeholder="Enter meeting time">
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent fd-popover__control" aria-label="show/hide time picker" aria-expanded="true" aria-haspopup="true">
                        <i class="sap-icon--time-entry-request"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
            <div class="fd-time-picker__dropdown">
                <div class="fd-time-picker__header">
                    <div class="fd-time-picker__output">
                        <button class="fd-button fd-button--toggled">
                            07
                        </button>
                        <span class="fd-time-picker__colon">:</span>
                        <button class="fd-button" aria-pressed="true">
                            00
                        </button>
                    </div>
                    <div class="fd-segmented-button" role="group" aria-label="Group label">
                        <button aria-label="AM" class="fd-button">
                            AM
                        </button>
                        <button aria-label="PM" class="fd-button fd-button--toggled" aria-pressed="true">
                            PM
                        </button>
                    </div>
                    <button class="fd-button fd-button--transparent" aria-label="Time Now">
                        <i class="sap-icon--present"></i>
                    </button>
                </div>
                <div role="img" aria-label="Clock Dial" class="fd-time-picker__clock-container">
                    <div aria-hidden="true" class="fd-time-picker__clock fd-time-picker__clock--inner">
                        <div data-label="Hours" class="fd-time-picker__label"></div>
                        <div>
                            <div class="fd-time-picker__item fd-time-picker__item--deg6">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg12">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg18">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg24">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg30">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number fd-time-picker__number--hover">1</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg36">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg42">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg48">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg54">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg60">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">2</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg66">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg72">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg78">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg84">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg90">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">3</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg96">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg102">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg108">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg114">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg120">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">4</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg126">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg132">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg138">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg144">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg150">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">5</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg156">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg162">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg168">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg174">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg180">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">6</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg186">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg192">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg198">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg204">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg210">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">7</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg216">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg222">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg228">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg234">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg240">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">8</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg246">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg252">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg258">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg264">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg270">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">9</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg276">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg282">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg288">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg294">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg300">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">10</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg306">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg312">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg318">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg324">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg330">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">11</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg336">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg342">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg348">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg354">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg360">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">12</span>
                            </div>
                        </div>

                        <div class="fd-time-picker__item fd-time-picker__item--deg210">
                            <div class="fd-time-picker__tick fd-time-picker__tick--selected"></div>
                            <div class="fd-time-picker__number fd-time-picker__number--selected">7</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--footer fd-bar--cozy">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--emphasized">OK</button>
                        </div>
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

Hours12Cozy.storyName = 'Time Picker with 12-hour Clock Face';
Hours12Cozy.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `The 12-hour clock face shows only one circle and an AM/PM switch is displayed.
` }
    }
};

export const MinutesCozy = () => `<div style="min-height: 500px;">
    <div class="fd-popover fd-popover--no-arrow fd-time-picker">
        <div class="fd-popover__control fd-time-picker__control is-expanded">
            <div class="fd-input-group">
                <input type="text" class="fd-input fd-input-group__input fd-time-picker__input" placeholder="--:--">
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent fd-popover__control" aria-label="show/hide time picker" aria-expanded="true" aria-haspopup="true">
                        <i class="sap-icon--time-entry-request"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
            <div class="fd-time-picker__dropdown">
                <div class="fd-time-picker__header">
                    <div class="fd-time-picker__output">
                        <button class="fd-button">
                            07
                        </button>
                        <span class="fd-time-picker__colon">:</span>
                        <button class="fd-button fd-button--toggled" aria-pressed="true">
                            18
                        </button>
                    </div>
                    <div class="fd-segmented-button" role="group" aria-label="Group label">
                        <button aria-label="AM" class="fd-button">
                            AM
                        </button>
                        <button aria-label="PM" class="fd-button fd-button--toggled" aria-pressed="true">
                            PM
                        </button>
                    </div>
                    <button class="fd-button fd-button--transparent" aria-label="Time Now">
                        <i class="sap-icon--present"></i>
                    </button>
                </div>
                <div role="img" aria-label="Clock Dial" class="fd-time-picker__clock-container">
                    <div class="fd-time-picker__clock fd-time-picker__clock--inner fd-time-picker__clock--active">
                        <div data-label="Minutes" class="fd-time-picker__label"></div>
                        <div>
                            <div class="fd-time-picker__item fd-time-picker__item--deg6">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg12">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg18">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg24">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg30">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">5</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg36">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg42">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg48">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg54">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg60">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">10</span>
                            </div>
                        
                            <div class="fd-time-picker__item fd-time-picker__item--deg66">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg72">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg78">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg84">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg90">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">15</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg96">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg102">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg108">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg114">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg120">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">20</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg126">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg132">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg138">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg144">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg150">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">25</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg156">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg162">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg168">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg174">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg180">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number fd-time-picker__number--hover">30</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg186">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg192">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg198">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg204">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg210">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">35</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg216">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg222">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg228">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg234">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg240">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">40</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg246">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg252">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg258">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg264">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg270">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">45</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg276">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg282">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg288">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg294">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg300">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">50</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg306">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg312">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg318">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg324">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg330">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">55</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg336">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg342">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg348">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg354">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg360">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">0</span>
                            </div>
                        </div>

                        <div class="fd-time-picker__item fd-time-picker__item--deg108">
                            <div class="fd-time-picker__tick fd-time-picker__tick--selected"></div>
                            <div class="fd-time-picker__number fd-time-picker__number--selected">18</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--footer fd-bar--cozy">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--emphasized">OK</button>
                        </div>
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
MinutesCozy.storyName = 'Minutes Face';
MinutesCozy.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `When the minutes value is selected in the time display, the minutes clock face is shown.` }
    }
};

export const SecondsCozy = () => `<div style="min-height: 500px;">
    <div class="fd-popover fd-popover--no-arrow fd-time-picker">
        <div class="fd-popover__control fd-time-picker__control is-expanded">
            <div class="fd-input-group">
                <input type="text" class="fd-input fd-input-group__input fd-time-picker__input" placeholder="Enter time">
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent fd-popover__control" aria-label="show/hide time picker" aria-expanded="true" aria-haspopup="true">
                        <i class="sap-icon--time-entry-request"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
            <div class="fd-time-picker__dropdown">
                <div class="fd-time-picker__header">
                    <div class="fd-time-picker__output">
                        <button class="fd-button">
                            07
                        </button>
                        <span class="fd-time-picker__colon">:</span>
                        <button class="fd-button" aria-pressed="true">
                            18
                        </button>
                        <span class="fd-time-picker__colon">:</span>
                        <button class="fd-button fd-button--toggled" aria-pressed="true">
                            13
                        </button>
                    </div>
                    <div class="fd-segmented-button" role="group" aria-label="Group label">
                        <button aria-label="AM" class="fd-button">
                            AM
                        </button>
                        <button aria-label="PM" class="fd-button fd-button--toggled" aria-pressed="true">
                            PM
                        </button>
                    </div>
                </div>
                <div role="img" aria-label="Clock Dial" class="fd-time-picker__clock-container">
                    <div class="fd-time-picker__clock fd-time-picker__clock--inner fd-time-picker__clock--active">
                        <div data-label="Seconds" class="fd-time-picker__label"></div>
                        <div>
                            <div class="fd-time-picker__item fd-time-picker__item--deg6">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg12">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg18">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg24">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg30">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">5</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg36">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg42">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg48">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg54">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg60">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">10</span>
                            </div>
                        
                            <div class="fd-time-picker__item fd-time-picker__item--deg66">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg72">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg78">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg84">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg90">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">15</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg96">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg102">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg108">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg114">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg120">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">20</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg126">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg132">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg138">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg144">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg150">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">25</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg156">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg162">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg168">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg174">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg180">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number fd-time-picker__number--hover">30</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg186">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg192">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg198">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg204">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg210">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">35</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg216">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg222">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg228">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg234">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg240">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">40</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg246">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg252">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg258">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg264">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg270">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">45</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg276">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg282">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg288">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg294">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg300">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">50</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg306">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg312">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg318">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg324">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg330">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">55</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg336">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg342">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg348">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg354">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg360">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">0</span>
                            </div>
                        </div>

                        <div class="fd-time-picker__item fd-time-picker__item--deg78">
                            <div class="fd-time-picker__tick fd-time-picker__tick--selected"></div>
                            <div class="fd-time-picker__number fd-time-picker__number--selected">13</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--footer fd-bar--cozy">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--emphasized">OK</button>
                        </div>
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
SecondsCozy.storyName = 'Seconds Face';
SecondsCozy.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `When the seconds value is selected in the time display, the seconds clock face is shown.` }
    }
};

export const Hours24Compact = () => `<div style="min-height: 450px;">
    <div class="fd-popover fd-popover--no-arrow fd-time-picker">
        <div class="fd-popover__control fd-time-picker__control is-expanded">
            <div class="fd-input-group">
                <input type="text" class="fd-input fd-input-group__input fd-input--compact  fd-time-picker__input" value="19:00">
                <span class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--compact fd-button--transparent fd-popover__control" aria-label="show/hide time picker" aria-expanded="true" aria-haspopup="true">
                        <i class="sap-icon--time-entry-request"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
            <div class="fd-time-picker__dropdown">
                <div class="fd-time-picker__header">
                    <div class="fd-time-picker__output">
                        <button class="fd-button fd-button--compact fd-button--toggled">
                            19
                        </button>
                        <span class="fd-time-picker__colon">:</span>
                        <button class="fd-button fd-button--compact" aria-pressed="true">
                            00
                        </button>
                    </div>
                </div>
                <div role="img" aria-label="Clock Dial" class="fd-time-picker__clock-container fd-time-picker__clock-container--compact">
                    <div aria-hidden="true" class="fd-time-picker__clock fd-time-picker__clock--inner">
                        <div data-label="Hours" class="fd-time-picker__label"></div>
                        
                        <div>
                            <div class="fd-time-picker__item fd-time-picker__item--deg6">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg12">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg18">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg24">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg30">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">1</span>
                                <span class="fd-time-picker__number">13</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg36">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg42">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg48">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg54">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg60">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">2</span>
                                <span class="fd-time-picker__number">14</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg66">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg72">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg78">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg84">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg90">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">3</span>
                                <span class="fd-time-picker__number">15</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg96">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg102">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg108">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg114">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg120">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number fd-time-picker__number--hover">4</span>
                                <span class="fd-time-picker__number">16</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg126">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg132">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg138">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg144">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg150">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">5</span>
                                <span class="fd-time-picker__number">17</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg156">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg162">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg168">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg174">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg180">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">6</span>
                                <span class="fd-time-picker__number">18</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg186">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg192">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg198">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg204">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg210">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">7</span>
                                <span class="fd-time-picker__number">19</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg216">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg222">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg228">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg234">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg240">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">8</span>
                                <span class="fd-time-picker__number">20</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg246">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg252">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg258">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg264">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg270">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">9</span>
                                <span class="fd-time-picker__number">21</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg276">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg282">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg288">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg294">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg300">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">10</span>
                                <span class="fd-time-picker__number">22</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg306">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg312">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg318">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg324">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg330">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">11</span>
                                <span class="fd-time-picker__number">23</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg336">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg342">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg348">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg354">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg360">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">12</span>
                                <span class="fd-time-picker__number">00</span>
                            </div>
                        </div>

                        <div class="fd-time-picker__item fd-time-picker__item--deg210">
                            <div class="fd-time-picker__tick fd-time-picker__tick--selected"></div>
                            <div class="fd-time-picker__number fd-time-picker__number--invisible"></div>
                            <div class="fd-time-picker__number fd-time-picker__number--selected">19</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--compact fd-button--emphasized">OK</button>
                        </div>
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--compact fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
Hours24Compact.storyName = 'Time Picker with 24-hour Clock Face in Compact Mode';
Hours24Compact.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `All controls used as building blocks should be in their compact mode. For example:
            <code>fd-input fd-input--compact</code>, <code>fd-button fd-button--compact</code>, <code>fd-time-picker\\_\\_clock-container fd-time-picker\\_\\_clock-container--compact</code>
           ` }
    }
};

export const Hours12Compact = () => `<div style="min-height: 450px;">
    <div class="fd-popover fd-popover--no-arrow fd-time-picker">
        <div class="fd-popover__control fd-time-picker__control is-expanded">
            <div class="fd-input-group">
                <input type="text" class="fd-input fd-input--compact fd-input-group__input fd-time-picker__input" value="07:00 PM">
                <span class="fd-input-group__addon fd-input-group__addon--compact fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--compact fd-button--transparent fd-popover__control" aria-label="show/hide time picker" aria-expanded="true" aria-haspopup="true">
                        <i class="sap-icon--time-entry-request"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
            <div class="fd-time-picker__dropdown">
                <div class="fd-time-picker__header">
                    <div class="fd-time-picker__output">
                        <button class="fd-button fd-button--compact fd-button--toggled">
                            07
                        </button>
                        <span class="fd-time-picker__colon">:</span>
                        <button class="fd-button fd-button--compact" aria-pressed="true">
                            00
                        </button>
                    </div>
                    <div class="fd-segmented-button" role="group" aria-label="Group label">
                        <button aria-label="AM" class="fd-button fd-button--compact">
                            AM
                        </button>
                        <button aria-label="PM" class="fd-button fd-button--compact fd-button--toggled" aria-pressed="true">
                            PM
                        </button>
                    </div>
                    <button class="fd-button fd-button--compact fd-button--transparent" aria-label="Time Now">
                        <i class="sap-icon--present"></i>
                    </button>
                </div>

                <div role="img" aria-label="Clock Dial" class="fd-time-picker__clock-container fd-time-picker__clock-container--compact">
                    <div aria-hidden="true" class="fd-time-picker__clock fd-time-picker__clock--inner">
                        <div data-label="Hours" class="fd-time-picker__label"></div>
                        
                        <div>
                            <div class="fd-time-picker__item fd-time-picker__item--deg6">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg12">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg18">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg24">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg30">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">1</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg36">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg42">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg48">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg54">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg60">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">2</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg66">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg72">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg78">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg84">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg90">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">3</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg96">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg102">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg108">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg114">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg120">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">4</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg126">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg132">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg138">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg144">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg150">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">5</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg156">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg162">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg168">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg174">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg180">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">6</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg186">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg192">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg198">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg204">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg210">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">7</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg216">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg222">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg228">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg234">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg240">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">8</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg246">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg252">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg258">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg264">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg270">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">9</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg276">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg282">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg288">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg294">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg300">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">10</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg306">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg312">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg318">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg324">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg330">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">11</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg336">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg342">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg348">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg354">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg360">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">12</span>
                            </div>
                        </div>

                        <div class="fd-time-picker__item fd-time-picker__item--deg210">
                            <div class="fd-time-picker__tick fd-time-picker__tick--selected"></div>
                            <div class="fd-time-picker__number fd-time-picker__number--selected">7</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--compact fd-button--emphasized">OK</button>
                        </div>
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--compact fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

Hours12Compact.storyName = 'Time Picker with 12-hour Clock Face in Compact Mode';

export const MinutesCompact = () => `<div style="min-height: 450px;">
    <div class="fd-popover fd-popover--no-arrow fd-time-picker">
        <div class="fd-popover__control fd-time-picker__control is-expanded">
            <div class="fd-input-group">
                <input type="text" class="fd-input fd-input--compact fd-input-group__input fd-time-picker__input" value="07:18 PM">
                <span class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
                    <button class="fd-input-group__button fd-button fd-button--compact fd-button--transparent fd-popover__control" aria-label="show/hide time picker" aria-expanded="true" aria-haspopup="true">
                        <i class="sap-icon--time-entry-request"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
            <div class="fd-time-picker__dropdown">
                <div class="fd-time-picker__header">
                    <div class="fd-time-picker__output">
                        <button class="fd-button fd-button--compact">
                            07
                        </button>
                        <span class="fd-time-picker__colon">:</span>
                        <button class="fd-button fd-button--toggled fd-button--compact" aria-pressed="true">
                            18
                        </button>
                    </div>
                    <div class="fd-segmented-button" role="group" aria-label="Group label">
                        <button aria-label="AM" class="fd-button fd-button--compact">
                            AM
                        </button>
                        <button aria-label="PM" class="fd-button fd-button--toggled fd-button--compact" aria-pressed="true">
                            PM
                        </button>
                    </div>
                    <button class="fd-button fd-button--transparent fd-button--compact" aria-label="Time Now">
                        <i class="sap-icon--present"></i>
                    </button>
                </div>

                <div role="img" aria-label="Clock Dial" class="fd-time-picker__clock-container fd-time-picker__clock-container--compact">
                    <div class="fd-time-picker__clock fd-time-picker__clock--inner fd-time-picker__clock--active">
                        <div data-label="Minutes" class="fd-time-picker__label"></div>
                        <div>
                            <div class="fd-time-picker__item fd-time-picker__item--deg6">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg12">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg18">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg24">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg30">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">5</span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg36">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg42">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg48">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg54">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg60">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">10</span>
                            </div>
                        
                            <div class="fd-time-picker__item fd-time-picker__item--deg66">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg72">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg78">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg84">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg90">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">15</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg96">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg102">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg108">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg114">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg120">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">20</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg126">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg132">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg138">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg144">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg150">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">25</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg156">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg162">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg168">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg174">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg180">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">30</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg186">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg192">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg198">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg204">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg210">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">35</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg216">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg222">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg228">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg234">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg240">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">40</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg246">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg252">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg258">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg264">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg270">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">45</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg276">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg282">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg288">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg294">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg300">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">50</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg306">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg312">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg318">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg324">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg330">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">55</span>
                            </div>
                            
                            <div class="fd-time-picker__item fd-time-picker__item--deg336">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg342">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg348">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg354">
                                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
                            </div>

                            <div class="fd-time-picker__item fd-time-picker__item--deg360">
                                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                                <span class="fd-time-picker__number">0</span>
                            </div>

                        </div>
                        
                        <div class="fd-time-picker__item fd-time-picker__item--deg108">
                            <div class="fd-time-picker__tick fd-time-picker__tick--selected"></div>
                            <div class="fd-time-picker__number fd-time-picker__number--selected">18</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--decisive fd-button--compact fd-button--emphasized">OK</button>
                        </div>
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--decisive fd-button--compact fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
MinutesCompact.storyName = 'Minutes Face in Compact Mode';


export const Mobile = () => `<div style="min-height: 250px;">
    <div class="fd-popover fd-popover--no-arrow fd-time-picker">
        <div class="fd-popover__control fd-time-picker__control is-expanded">
            <div class="fd-input-group">
                <input type="text" class="fd-input fd-input-group__input fd-time-picker__input" value="07:00:00 AM">
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button class="fd-input-group__button fd-button fd-button--transparent fd-popover__control" aria-label="show/hide time picker" aria-expanded="true" aria-haspopup="true">
                        <i class="sap-icon--time-entry-request"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false">
            <div class="fd-time-picker__dropdown">
                <div class="fd-time-picker__header">
                    <div class="fd-time-picker__output">
                        <input class="fd-input" type="text" value="07">
                        <span class="fd-time-picker__colon">:</span>
                        <input class="fd-input" type="text" value="00">
                        <span class="fd-time-picker__colon">:</span>
                        <input class="fd-input" type="text" value="00">
                    </div>
                    <div class="fd-segmented-button" role="group" aria-label="Group label">
                        <button aria-label="AM" class="fd-button fd-button--toggled">
                            AM
                        </button>
                        <button aria-label="PM" class="fd-button" aria-pressed="true">
                            PM
                        </button>
                    </div>
                </div>
            </div>
            <div class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--footer fd-bar--cozy">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--emphasized">OK</button>
                        </div>
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--decisive fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

`;

Mobile.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `On phones, focusing on the time input field opens a time input popover. The user can then use the mobile keyboard to enter the time. For the 12-hour time format, the popover also offers an AM/PM switch.
` }
    }
};