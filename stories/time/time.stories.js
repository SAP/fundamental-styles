import '../../dist/icon.css';
import '../../dist/time.css';

export default {
    title: 'Components/Time',
    parameters: {
        description: `The time component is used to select a time value.
Multiple instances can be used in the <code class="docs-code">date-picker</code> to choose hours, minutes, seconds and period of the day. It will be rare to see this component used alone.

> Looking for Date Picker? From a style perspective, a date-picker is simply a composition of our existing calendar, input group and popover, but contains no new styles of its own. Therefore, we consider it a pattern. [See the date picker pattern here](patterns/date-picker).

||||
| -------------:| ------------- | -------------- |
| <span style="margin: 0 1rem;"><code class="docs-code">.fd-time\\_\\_item</code></span> | <span style="margin: 0 1rem;">Class used to style default time slider item</span> | <span style="margin: 0 1rem;"><li class='fd-time__item'><span class='fd-time__unit'>01</span></li></span>
| <span style="margin: 0 1rem;"><code class="docs-code">.fd-time\\_\\_item--collapsed</code></span> | <span style="margin: 0 1rem;">Class used to style collapsed time slider item</span> | <span style="margin: 0 1rem;"><li class='fd-time__item fd-time__item--collapsed'><span class='fd-time__unit'>01</span></li></span>
| <span style="margin: 0 1rem;"><code class="docs-code">.fd-time\\_\\_item--current</code></span> | <span style="margin: 0 1rem;">Class used to style current time slider item</span> | <span style="margin: 0 1rem;"><li class='fd-time__item fd-time__item--current'><span class='fd-time__unit'>01</span></li></span>

`,

        tags: ['f3', 'a11y', 'theme']
    }
};

export const defaultCozyMode = () => `
<div style="display: flex; justify-content: space-around; margin-bottom: 1rem; flex-wrap: wrap;">
    <div class='fd-time'>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Hrs</label>
            <button class='fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow' aria-label='Increase hours'></button>
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
            <button class='fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow' aria-label='Decrease hours'></button>
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
            <button class='fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow' aria-label='Increase hours'></button>
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
            <button class='fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow' aria-label='Decrease hours'></button>
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
            <button class='fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow' aria-label='Change Meridian'></button>
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
            <button class='fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow' aria-label='Change Meridian'></button>
            </div>
        </div>
</div>
`;

defaultCozyMode.parameters = {
    docs: {
        iframeHeight: 550,
        storyDescription:
            'Default cozy mode implemented mostly to be used mobile devices. There should be at most 1 active wrapper, marked with <code class="docs-code">fd-time__wrapper--active</code> modifier. In those examples it\'s hour or meridian. The rest of items should be marked as collapsed <code class="docs-code">fd-time__item--collapsed</code>. Also meridian (AM/PM) wrapper has to contain <code class="docs-code">fd-time__wrapper--meridian</code> modifier.'
    }
};

export const tabletMode = () =>
    `
<div style="display: flex; justify-content: space-around; margin-bottom: 1rem; flex-wrap: wrap;">
     <div class='fd-time fd-time--tablet'>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Hrs</label>
            <button class='fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow' aria-label='Increase hours'></button>
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
            <button class='fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow' aria-label='Decrease hours'></button>
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
            <button class='fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow' aria-label='Increase hours'></button>
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
            <button class='fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow' aria-label='Decrease hours'></button>
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
            <button class='fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow' aria-label='Change Meridian'></button>
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
                <button class='fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow' aria-label='Change Meridian'></button>
            </div>
        </div>
    </div>
</div>`;

tabletMode.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription:
            'Tablet Mode can be added by using <code class="docs-code">fd-time--tablet</code> modifier. IT provides lower padding on sides.'
    }
};

export const compactMode = () =>
    `
<div style="display: flex; justify-content: space-around; margin-bottom: 1rem; flex-wrap: wrap;">
    <div class='fd-time fd-time--compact'>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Hrs</label>
            <button class='fd-button fd-button--compact fd-button--transparent sap-icon--navigation-up-arrow' aria-label='Increase hours'></button>
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
            <button class='fd-button fd-button--compact fd-button--transparent sap-icon--navigation-down-arrow' aria-label='Decrease hours'></button>
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
            <button class='fd-button fd-button--compact fd-button--transparent sap-icon--navigation-up-arrow' aria-label='Increase hours'></button>
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
            <button class='fd-button fd-button--compact fd-button--transparent sap-icon--navigation-down-arrow' aria-label='Decrease hours'></button>
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
            <button class='fd-button fd-button--compact fd-button--transparent sap-icon--navigation-up-arrow' aria-label='Change Meridian'></button>
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
                <button class='fd-button fd-button--compact fd-button--transparent sap-icon--navigation-down-arrow' aria-label='Change Meridian'></button>
            </div>
        </div>
    </div>
</div>
`;

compactMode.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription:
            'Compact Mode can be added, by using <code class="docs-code">fd-time--compact</code> modifier. It\'s mostly implemented, to be used on desktop devices.'
    }
};

export const scrollableMode = () => `
<div style="display: flex; justify-content: space-around; margin-bottom: 1rem; flex-wrap: wrap;">
    <div class='fd-time fd-time--scrollable'>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Hrs</label>
            <button class='fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow' aria-label='Increase hours'></button>
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
            <button class='fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow' aria-label='Decrease hours'></button>
        </div>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Min</label>
            <div class='fd-time__wrapper'>
                <span class='fd-time__item fd-time__item--collapsed'>25</span>
            </div>
        </div>
    </div>

    <div class='fd-time fd-time--scrollable'>
        <div class='fd-time__col'>
            <label class='fd-time__slider-label'>Hrs</label>
            <button class='fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow' aria-label='Increase hours'></button>
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
            <button class='fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow' aria-label='Decrease hours'></button>
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

    <div class='fd-time fd-time--scrollable'>
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
            <button class='fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow' aria-label='Change Meridian'></button>
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
                <button class='fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow' aria-label='Change Meridian'></button>
            </div>
        </div>
    </div>
</div>
`;
scrollableMode.parameters = {
    docs: {
        iframeHeight: 550,
        storyDescription:
            'Scrollable Mode can be added by using <code class="docs-code">fd-time--scrollable</code> modifier. It provides possibility to scroll up and down on active columns. So the unit can be chosen by mouse scroll or mobile tap and release. Current indicator element is vertically centered, but functionality to fit it inside indicator frames should be implemented no application level.'
    }
};
