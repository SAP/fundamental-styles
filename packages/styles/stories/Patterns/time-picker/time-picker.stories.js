import '../../../src/popover.scss';
import '../../../src/input.scss';
import '../../../src/input-group.scss';
import '../../../src/time.scss';
import '../../../src/button.scss';
import '../../../src/icon.scss';
import '../../../src/bar.scss';
import '../../../src/layout-grid.scss';
export default {
    title: 'Patterns/Time Picker',
    parameters: {
        description: `The time picker allows the user to select a localized time. It is smaller in compact mode and provides a touch-friendly size in cozy mode. 


##Usage

**Use the time picker if:**

- Users need to select a time.
- Users need to select a time range. In this case, one time picker can be used to set the starting time and a second one to set the end time.
- Users need to select a specific duration, such as 1 minute and 30 seconds.


`,
        tags: ['f3', 'a11y', 'theme']
    }
};

export const CozyAndCompactMode = () => `<div class="fd-container" style="height:550px">
    <div class="fd-row">
        <div class="fd-col fd-col--6">
            <label for="cozyTimepicker">Cozy Timepicker</label><br />
            <div class="fd-popover fd-popover--no-arrow">
                <div class="fd-popover__control is-expanded">
                    <div class="fd-input-group">
                        <input
                            onfocus="
              setElAttr('rKLOR811', 'aria-hidden', 'false');
              setElAttr('sajdisa8fisfj', 'aria-expanded', 'true');
            "
                            type="text" class="fd-input fd-input-group__input" id="cozyTimepicker" value="4:25:10 PM"
                            placeholder="hh:mm:ss am/pm">
                        <span class="fd-input-group__addon fd-input-group__addon--button">
                      <button
                          id="sajdisa8fisfj"
                          onclick="
                            toggleElAttrs('rKLOR811', ['aria-hidden']);
                            toggleElAttrs('sajdisa8fisfj', ['aria-expanded']);
                        "
                          class="fd-input-group__button fd-button fd-button--transparent fd-popover__control"
                          aria-label="show/hide time picker" aria-controls="rKLOR811" aria-expanded="true"
                          aria-haspopup="true">
                          <i class="sap-icon--time-entry-request"></i>
                      </button>
                  </span>
                    </div>
                </div>
                <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false" id="rKLOR811">
                    <div class="fd-time fd-time--scrollable">
                        <div class="fd-time__col">
                            <label class="fd-time__slider-label fd-form-label">Hrs</label>
                            <button class="fd-button fd-button fd-button--transparent" aria-label="Increase hours">
                                <i class="sap-icon--navigation-up-arrow"></i>
                            </button>
                            <div class="fd-time__wrapper fd-time__wrapper--active">
                                <ul class="fd-time__list">
                                    <li class="fd-time__item">
                                        <span class="fd-time__unit">01</span>
                                    </li>
                                    <li class="fd-time__item">
                                        <span class="fd-time__unit">02</span>
                                    </li>
                                    <li class="fd-time__item">
                                        <span class="fd-time__unit">03</span>
                                    </li>
                                    <li class="fd-time__item">
                                        <div class="fd-time__current-indicator"></div>
                                        <span class="fd-time__unit">
                                  04
                              </span>
                                    </li>
                                    <li class="fd-time__item">
                                        <span class="fd-time__unit">05</span>
                                    </li>
                                    <li class="fd-time__item">
                                        <span class="fd-time__unit">06</span>
                                    </li>
                                    <li class="fd-time__item">
                                        <span class="fd-time__unit">07</span>
                                    </li>
                                    <li class="fd-time__item">
                                        <span class="fd-time__unit">08</span>
                                    </li>
                                    <li class="fd-time__item">
                                        <span class="fd-time__unit">09</span>
                                    </li>
                                    <li class="fd-time__item">
                                        <span class="fd-time__unit">10</span>
                                    </li>
                                </ul>
                            </div>
                            <button class="fd-button fd-button fd-button--transparent" aria-label="Decrease hours">
                                <i class="sap-icon--navigation-down-arrow"></i>
                            </button>
                        </div>
                        <div class="fd-time__col">
                            <label class="fd-time__slider-label fd-form-label">Min</label>
                            <div class="fd-time__wrapper">
                                <span class="fd-time__item fd-time__item--collapsed">25</span>
                            </div>
                        </div>
                        <div class="fd-time__col">
                            <label class="fd-time__slider-label fd-form-label">Sec</label>
                            <div class="fd-time__wrapper">
                                <span class="fd-time__item fd-time__item--collapsed">10</span>
                            </div>
                        </div>
                    </div>
                    <div class="fd-popover__body-footer">
                        <div class="fd-bar fd-bar--cozy fd-bar--footer">
                            <div class="fd-bar__right">
                                <div class="fd-bar__element">
                                    <button class="fd-button fd-button--emphasized">OK</button>
                                </div>
                                <div class="fd-bar__element">
                                    <button class="fd-button fd-button--transparent">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-col fd-col--6">
            <label class="fd-form-label" for="compactTimepicker">Compact Timepicker</label><br />
            <div class="fd-popover fd-popover--no-arrow">
                <div class="fd-popover__control is-expanded">
                    <div class="fd-input-group">
                        <input
                            onfocus="
              setElAttr('rKGNR811', 'aria-hidden', 'false');
              setElAttr('maskdjasd98a', 'aria-expanded', 'true');
            "
                            type="text" class="fd-input fd-input-group__input fd-input--compact" id="compactTimepicker"
                            value="4:25:10 PM" placeholder="hh:mm:ss am/pm">
                        <span
                            class="fd-input-group__addon fd-input-group__addon--button fd-input-group__addon--compact">
                    <button
                        id="maskdjasd98a"
                        onclick="
                          toggleElAttrs('rKGNR811', ['aria-hidden']);
                          toggleElAttrs('maskdjasd98a', ['aria-expanded']);
                      "
                        class="fd-input-group__button fd-button fd-button--compact fd-button--transparent fd-popover__control"
                        aria-label="show/hide time picker" aria-controls="rKGNR811" aria-expanded="true"
                        aria-haspopup="true">
                        <i class="sap-icon--time-entry-request"></i>
                    </button>
                </span>
                    </div>
                </div>
                <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false" id="rKGNR811">
                    <div class="fd-time fd-time--scrollable fd-time--compact">
                        <div class="fd-time__col">
                            <label class="fd-time__slider-label fd-form-label">Hrs</label>
                            <button class="fd-button fd-button--compact fd-button--transparent"
                                    aria-label="Increase hours">
                                <i class="sap-icon--navigation-up-arrow"></i>
                            </button>
                            <div class="fd-time__wrapper fd-time__wrapper--active">
                                <ul class="fd-time__list">
                                    <li class="fd-time__item">
                                        <span class="fd-time__unit">01</span>
                                    </li>
                                    <li class="fd-time__item">
                                        <span class="fd-time__unit">02</span>
                                    </li>
                                    <li class="fd-time__item">
                                        <span class="fd-time__unit">03</span>
                                    </li>
                                    <li class="fd-time__item">
                                        <div class="fd-time__current-indicator"></div>
                                        <span class="fd-time__unit">
                                04
                            </span>
                                    </li>
                                    <li class="fd-time__item">
                                        <span class="fd-time__unit">05</span>
                                    </li>
                                    <li class="fd-time__item">
                                        <span class="fd-time__unit">06</span>
                                    </li>
                                    <li class="fd-time__item">
                                        <span class="fd-time__unit">07</span>
                                    </li>
                                    <li class="fd-time__item">
                                        <span class="fd-time__unit">08</span>
                                    </li>
                                    <li class="fd-time__item">
                                        <span class="fd-time__unit">09</span>
                                    </li>
                                    <li class="fd-time__item">
                                        <span class="fd-time__unit">10</span>
                                    </li>
                                </ul>
                            </div>
                            <button class="fd-button fd-button--compact fd-button--transparent"
                                    aria-label="Decrease hours">
                                <i class="sap-icon--navigation-down-arrow"></i>
                            </button>
                        </div>
                        <div class="fd-time__col">
                            <label class="fd-time__slider-label fd-form-label">Min</label>
                            <div class="fd-time__wrapper">
                                <span class="fd-time__item fd-time__item--collapsed">25</span>
                            </div>
                        </div>
                        <div class="fd-time__col">
                            <label class="fd-time__slider-label fd-form-label">Sec</label>
                            <div class="fd-time__wrapper">
                                <span class="fd-time__item fd-time__item--collapsed">10</span>
                            </div>
                        </div>
                        <div class="fd-time__col">
                            <label class="fd-time__slider-label fd-form-label">AM/PM</label>
                            <div class="fd-time__wrapper fd-time__wrapper--meridian">
                                <span class="fd-time__item fd-time__item--collapsed">AM</span>
                            </div>
                        </div>
                    </div>
                    <div class="fd-popover__body-footer">
                        <div class="fd-bar fd-bar--cozy fd-bar--footer">
                            <div class="fd-bar__right">
                                <div class="fd-bar__element">
                                    <button class="fd-button fd-button--compact fd-button--emphasized">OK</button>
                                </div>
                                <div class="fd-bar__element">
                                    <button class="fd-button fd-button--compact fd-button--transparent">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

CozyAndCompactMode.parameters = {
    docs: {
        iframeHeight: 580,
        description: {
            story: `The time picker is  a composition of \`input-group\`, \`popover\`, and \`time\` components to create a time selection interaction. 
It can be displayed in compact mode by adding the \`fd-input--compact\`, \`fd-button--compact\` and \`fd-time--compact\` modifier classes to the building blocks of the component. AM and PM locale-dependent can be set with the property \`localeId\`.`
        }
    }
};

export const TabletMode = () => `<div style="min-height: 580px;">
    <label for="tabletTimepicker">Cozy Timepicker</label><br />
    <div class="fd-popover fd-popover--no-arrow">
        <div class="fd-popover__control is-expanded">
            <div class="fd-input-group">
                <input
                  onfocus="
                    setElAttr('rKLHJ5311', 'aria-hidden', 'false');
                    setElAttr('a09dahsdkln', 'aria-expanded', 'true');
                  "
                  type="text" class="fd-input fd-input-group__input" id="tabletTimepicker" value="4:25:10 PM" placeholder="hh:mm:ss am/pm">
                <span class="fd-input-group__addon fd-input-group__addon--button">
                    <button
                      id="a09dahsdkln"
                      onclick="
                          toggleElAttrs('rKLHJ5311', ['aria-hidden']);
                          toggleElAttrs('a09dahsdkln', ['aria-expanded']);
                      "
                      class="fd-input-group__button fd-button fd-button--transparent fd-popover__control"
                        aria-label="show/hide time picker" aria-controls="rKLHJ5311" aria-expanded="true" aria-haspopup="true">
                        <i class="sap-icon--time-entry-request"></i>
                    </button>
                </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="false" id="rKLHJ5311">
            <div class="fd-time fd-time--scrollable fd-time--tablet">
                <div class="fd-time__col">
                    <label class="fd-time__slider-label fd-form-label">Hrs</label>
                    <button class="fd-button fd-button--transparent" aria-label="Increase hours">
                        <i class="sap-icon--navigation-up-arrow"></i>
                    </button>
                    <div class="fd-time__wrapper fd-time__wrapper--active">
                    <ul class="fd-time__list">
                        <li class="fd-time__item">
                            <span class="fd-time__unit">01</span>
                        </li>
                        <li class="fd-time__item">
                            <span class="fd-time__unit">02</span>
                        </li>
                        <li class="fd-time__item">
                            <span class="fd-time__unit">03</span>
                        </li>
                        <li class="fd-time__item">
                            <div class="fd-time__current-indicator"></div>
                            <span class="fd-time__unit">
                                04
                            </span>
                        </li>
                        <li class="fd-time__item">
                            <span class="fd-time__unit">05</span>
                        </li>
                        <li class="fd-time__item">
                            <span class="fd-time__unit">06</span>
                        </li>
                        <li class="fd-time__item">
                            <span class="fd-time__unit">07</span>
                        </li>
                        <li class="fd-time__item">
                            <span class="fd-time__unit">08</span>
                        </li>
                        <li class="fd-time__item">
                            <span class="fd-time__unit">09</span>
                        </li>
                        <li class="fd-time__item">
                            <span class="fd-time__unit">10</span>
                        </li>
                    </ul>
                    </div>
                    <button class="fd-button fd-button fd-button--transparent" aria-label="Decrease hours">
                        <i class="sap-icon--navigation-down-arrow"></i>
                    </button>
                </div>
                <div class="fd-time__col">
                    <label class="fd-time__slider-label fd-form-label">Min</label>
                    <div class="fd-time__wrapper">
                        <span class="fd-time__item fd-time__item--collapsed">25</span>
                    </div>
                </div>
                <div class="fd-time__col">
                    <label class="fd-time__slider-label fd-form-label">Sec</label>
                    <div class="fd-time__wrapper">
                        <span class="fd-time__item fd-time__item--collapsed">10</span>
                    </div>
                </div>
                <div class="fd-time__col">
                    <label class="fd-time__slider-label fd-form-label">AM/PM</label>
                    <div class="fd-time__wrapper fd-time__wrapper--meridian">
                        <span class="fd-time__item fd-time__item--collapsed">AM</span>
                    </div>
                </div>
            </div>
        <div class="fd-popover__body-footer">
                <div class="fd-bar fd-bar--cozy fd-bar--footer">
                    <div class="fd-bar__right">
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--emphasized">OK</button>
                        </div>
                        <div class="fd-bar__element">
                            <button class="fd-button fd-button--transparent">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

TabletMode.parameters = {
    docs: {
        iframeHeight: 550,
        description: {
            story: 'The time picker can be displayed in tablet mode by adding the `.fd-time--tablet` modifier class to the `.fd-time` base class.'
        }
    }
};
