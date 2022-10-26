import '../../../src/icon.scss';
import '../../../src/button.scss';
import '../../../src/time.scss';
export default {
    title: 'Components/Time',
    parameters: {
        description: `The time component is used to select a time value. It can be used to choose hours, minutes, seconds and/or a given period of the day. This component is rarely used alone and will likely be paired with the **Time Picker** pattern.
<br>
<br>
The time component consists of three main styles to indicate a specific state:


| Style&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Modifier class | Description |
| -------------| :------------- | :-------------- |
| <li class='fd-time__item'><span class='fd-time__unit'>01</span></li> | <code>.fd-time__item</code> | Class used to style inactive time slider items. |
| <li class='fd-time__item fd-time__item--collapsed'><span class='fd-time__unit'>01</span></li> | <code>.fd-time__item--collapsed</code> | Class used to style collapsed time slider items. <br>When this item is displayed, all inactive items below/above it are collapsed (out of sight). |
| <li class='fd-time__item fd-time__item--current'><span class='fd-time__unit'>01</span></li> | <code>.fd-time__item--current</code> | Class used to style current (active) time slider items. |


##Usage
**Use the time component in Time Picker if:**

- You want the user to select a time.
- You want the user to select a time range. In this case, one time picker can be used to set the starting time and a second one to set the end time.
- You want the user to select a detailed duration, such as 1 minute and 30 seconds.

**Do not use the time component in Time Picker if:**

- You want the user to select a duration such as 15 minutes, 30 minutes, 1 hour, or 2 hours. In this case, use the **Select** component instead.
- You want the user to select a date and time. In this case, use the **Date Picker**.
<br>
`,

        tags: ['f3', 'a11y', 'theme']
    }
};

export const DefaultCozyMode = () => `<div style="display: flex; justify-content: space-around; margin-bottom: 1rem; flex-wrap: wrap;">
    <div class='fd-time'>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Hrs</label>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Increase hours'>
                <i class="sap-icon--navigation-up-arrow"></i>
            </button>
            <div class='fd-time__wrapper fd-time__wrapper--active'>
                <ul class='fd-time__list'>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>01</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>02</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>03</span>
                    </li>
                    <li class='fd-time__item'>
                        <div class='fd-time__current-indicator'></div>
                        <span class='fd-time__unit'>
                            04
                        </span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>05</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>06</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>07</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>08</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>09</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>10</span>
                    </li>
                </ul>
            </div>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Increase hours'>
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Min</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>25</span>
            </div>
        </div>
    </div>

    <div class='fd-time'>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Hrs</label>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Increase hours'>
                <i class="sap-icon--navigation-up-arrow"></i>
            </button>
            <div class='fd-time__wrapper fd-time__wrapper--active'>
               <ul class='fd-time__list'>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>01</span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>02</span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>03</span>
                   </li>
                   <li class='fd-time__item'>
                       <div class='fd-time__current-indicator'></div>
                       <span class='fd-time__unit'>
                           04
                       </span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>05</span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>06</span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>07</span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>08</span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>09</span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>10</span>
                   </li>
               </ul>
            </div>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Decrease hours'>
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Min</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>25</span>
            </div>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Sec</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>10</span>
            </div>
        </div>
    </div>

    <div class='fd-time'>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Hrs</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>04</span>
            </div>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Min</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>25</span>
            </div>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Sec</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>10</span>
            </div>
        </div>
        <div class='fd-time__col fd-time__col--period'>
            <label class='fd-time__slider-label'>AM/PM</label>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Change Meridian'>
                <i class="sap-icon--navigation-up-arrow"></i>
            </button>
            <div class='fd-time__wrapper fd-time__wrapper--active fd-time__wrapper--meridian'>
                <ul class='fd-time__list'>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>
                            AM
                        </span>
                        <div class='fd-time__current-indicator'></div>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>
                            PM
                        </span>
                    </li>
                </ul>
            </div>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Change Meridian'>
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
    </div>
</div>
`;

DefaultCozyMode.storyName = 'Default';
DefaultCozyMode.parameters = {
    docs: {
        iframeHeight: 550,
        description: {
            story: `The default time component is displayed in cozy mode, which is ideal for mobile screens.

Only one item and wrapper should be active at a time with the \`fd-time__wrapper--active\` modifier class. The rest of the items must be collapsed with the \`fd-timeitem--collapsed\` modifier class, displaying only the collapsed slider item (blue) next to the active item.

**Note:** The meridian (AM/PM) wrapper must contain the \`fd-time__wrapper--meridian\` modifier class.
        `
        }
    }
};

export const TabletMode = () => `<div style="display: flex; justify-content: space-around; margin-bottom: 1rem; flex-wrap: wrap;">
     <div class='fd-time fd-time--tablet'>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Hrs</label>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Increase hours'>
                <i class="sap-icon--navigation-up-arrow"></i>
            </button>
            <div class='fd-time__wrapper fd-time__wrapper--active'>
                <ul class='fd-time__list'>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>01</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>02</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>03</span>
                    </li>
                    <li class='fd-time__item'>
                        <div class='fd-time__current-indicator'></div>
                        <span class='fd-time__unit'>
                            04
                        </span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>05</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>06</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>07</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>08</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>09</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>10</span>
                    </li>
                </ul>
            </div>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Decrease hours'>
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Min</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>25</span>
            </div>
        </div>
    </div>

    <div class='fd-time fd-time--tablet'>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Hrs</label>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Increase hours'>
                <i class="sap-icon--navigation-up-arrow"></i>
            </button>
            <div class='fd-time__wrapper fd-time__wrapper--active'>
               <ul class='fd-time__list'>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>01</span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>02</span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>03</span>
                   </li>
                   <li class='fd-time__item'>
                       <div class='fd-time__current-indicator'></div>
                       <span class='fd-time__unit'>
                           04
                       </span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>05</span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>06</span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>07</span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>08</span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>09</span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>10</span>
                   </li>
               </ul>
            </div>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Decrease hours'>
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Min</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>25</span>
            </div>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Sec</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>10</span>
            </div>
        </div>
    </div>

    <div class='fd-time fd-time--tablet'>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Hrs</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>04</span>
            </div>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Min</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>25</span>
            </div>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Sec</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>10</span>
            </div>
        </div>
        <div class='fd-time__col fd-time__col--period'>
            <label class='fd-time__slider-label'>AM/PM</label>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Change Meridian'>
                <i class="sap-icon--navigation-up-arrow"></i>
            </button>
            <div class='fd-time__wrapper fd-time__wrapper--active fd-time__wrapper--meridian'>
                <ul class='fd-time__list'>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>
                            AM
                        </span>
                        <div class='fd-time__current-indicator'></div>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>
                            PM
                        </span>
                    </li>
                </ul>
            </div>
            <button class='fd-button fd-button fd-button--transparent' aria-label='Change Meridian'>
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
    </div>
</div>`;

TabletMode.storyName = 'Tablet';
TabletMode.parameters = {
    docs: {
        iframeHeight: 550,
        description: {
            story: `Time can be optimized for tablet screens, which adds padding on each side of the component. To display the time component for tablet, add the \`fd-time--tablet\` modifier class to the main element.
        `
        }
    }
};

export const CompactMode = () => `<div style="display: flex; justify-content: space-around; margin-bottom: 1rem; flex-wrap: wrap;">
    <div class='fd-time fd-time--compact'>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Hrs</label>
            <button class='fd-button fd-button--compact fd-button--transparent' aria-label='Increase hours'>
                <i class="sap-icon--navigation-up-arrow"></i>
            </button>
            <div class='fd-time__wrapper fd-time__wrapper--active'>
                <ul class='fd-time__list'>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>01</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>02</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>03</span>
                    </li>
                    <li class='fd-time__item'>
                        <div class='fd-time__current-indicator'></div>
                        <span class='fd-time__unit'>
                            04
                        </span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>05</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>06</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>07</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>08</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>09</span>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>10</span>
                    </li>
                </ul>
            </div>
            <button class='fd-button fd-button--compact fd-button--transparent' aria-label='Decrease hours'>
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Min</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>25</span>
            </div>
        </div>
    </div>

    <div class='fd-time fd-time--compact'>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Hrs</label>
            <button class='fd-button fd-button--compact fd-button--transparent' aria-label='Increase hours'>
                <i class="sap-icon--navigation-up-arrow"></i>
            </button>
            <div class='fd-time__wrapper fd-time__wrapper--active'>
               <ul class='fd-time__list'>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>01</span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>02</span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>03</span>
                   </li>
                   <li class='fd-time__item'>
                       <div class='fd-time__current-indicator'></div>
                       <span class='fd-time__unit'>
                           04
                       </span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>05</span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>06</span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>07</span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>08</span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>09</span>
                   </li>
                   <li class='fd-time__item'>
                       <span class='fd-time__unit'>10</span>
                   </li>
               </ul>
            </div>
            <button class='fd-button fd-button--compact fd-button--transparent' aria-label='Decrease hours'>
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Min</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>25</span>
            </div>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Sec</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>10</span>
            </div>
        </div>
    </div>

    <div class='fd-time fd-time--compact'>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Hrs</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>04</span>
            </div>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Min</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>25</span>
            </div>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Sec</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>10</span>
            </div>
        </div>
        <div class='fd-time__col fd-time__col--period'>
            <label class='fd-time__slider-label'>AM/PM</label>
            <button class='fd-button fd-button--compact fd-button--transparent' aria-label='Change Meridian'>
                <i class="sap-icon--navigation-up-arrow"></i>
            </button>
            <div class='fd-time__wrapper fd-time__wrapper--active fd-time__wrapper--meridian'>
                <ul class='fd-time__list'>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>
                            AM
                        </span>
                        <div class='fd-time__current-indicator'></div>
                    </li>
                    <li class='fd-time__item'>
                        <span class='fd-time__unit'>
                            PM
                        </span>
                    </li>
                </ul>
            </div>
            <button class='fd-button fd-button--compact fd-button--transparent' aria-label='Change Meridian'>
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
    </div>
</div>
`;

CompactMode.storyName = 'Desktop';
CompactMode.parameters = {
    docs: {
        iframeHeight: 550,
        description: {
            story: `The time component can be displayed in compact mode, which is ideal for desktop screens.  To display the time component for desktop, add the \`fd-time--compact\` modifier class to the main element.
        `
        }
    }
};

export const ScrollableMode = () => `<div style="display: flex; justify-content: space-around; margin-bottom: 1rem; flex-wrap: wrap;">
    <div class="fd-time fd-time--scrollable">
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Hrs</label>
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
            <button class="fd-button fd-button--transparent" aria-label="Change Meridian">
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Min</label>
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--collapsed">25</span>
            </div>
        </div>
    </div>

    <div class="fd-time fd-time--scrollable">
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Hrs</label>
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
            <button class="fd-button fd-button--transparent" aria-label="Decrease hours">
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Min</label>
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--collapsed">25</span>
            </div>
        </div>
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Sec</label>
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--collapsed">10</span>
            </div>
        </div>
    </div>

    <div class="fd-time fd-time--scrollable">
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Hrs</label>
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--collapsed">04</span>
            </div>
        </div>
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Min</label>
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--collapsed">25</span>
            </div>
        </div>
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Sec</label>
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--collapsed">10</span>
            </div>
        </div>
        <div class="fd-time__col fd-time__col--period">
            <label class="fd-time__slider-label">AM/PM</label>
            <button class="fd-button fd-button--transparent" aria-label="Change Meridian">
                <i class="sap-icon--navigation-up-arrow"></i>
            </button>
            <div class="fd-time__wrapper fd-time__wrapper--active fd-time__wrapper--meridian">
                <ul class="fd-time__list">
                    <li class="fd-time__item">
                            <span class="fd-time__unit">
                                AM
                            </span>
                        <div class="fd-time__current-indicator"></div>
                    </li>
                    <li class="fd-time__item">
                            <span class="fd-time__unit">
                                PM
                            </span>
                    </li>
                </ul>
            </div>
            <button class="fd-button fd-button--transparent" aria-label="Change Meridian">
                <i class="sap-icon--navigation-down-arrow"></i>
            </button>
        </div>
    </div>
</div>
`;
ScrollableMode.storyName = 'Scrollable';
ScrollableMode.parameters = {
    docs: {
        iframeHeight: 550,
        description: {
            story: `Time can be scrollable by adding the \`fd-time--scrollable\` modifier class to the main element. It provides users with the ability to scroll up and down active columns with either a mouse, or on mobile where they can tap and release.
        `
        }
    }
};
