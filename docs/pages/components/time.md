---
title: Time
id: time
keywords: time
sidebar: left-navigation-sidebar
toc: false
permalink: components/time.html
folder: components
summary:
---

The time component is used to select a time value.
{: .docs-intro}

Multiple instances can be used in the `time-picker` to choose hours, minutes, seconds and period of the day. It will be rare to see this component used alone.

> Looking for Time Picker? From a style perspective, a time-picker is simply a composition of our existing time, input group and popover, but contains no new styles of its own. Therefore, we consider it a pattern. [See the time picker pattern here]({{site.baseurl}}/patterns/time-picker).


## Time Items
These are classes used to describe slider items. 

<div style="width: 100%;">
    <table style="width: 100%;">
        <tr>
            <td><code style="white-space: nowrap;">.fd-time__item</code></td>
            <td>Class used to style default time slider item</td>
            <td>
                <li class="fd-time__item">
                    <span class="fd-time__unit">01</span>
                </li>
            </td>
        </tr>
        <tr>
            <td><code style="white-space: nowrap;">.fd-time__item--collapsed</code></td>
            <td>Class used to style collapsed time slider item</td>
            <td>
                <li class="fd-time__item fd-time__item--collapsed">
                    <span class="fd-time__unit">01</span>
                </li>
            </td>
        </tr>
        <tr>
            <td><code style="white-space: nowrap;">.fd-time__item--current</code></td>
            <td>Class used to style current time slider item</td>
            <td>
                <li class="fd-time__item fd-time__item--current">
                    <span class="fd-time__unit">01</span>
                </li>
            </td>
        </tr>
    </table>
</div>

<br>


## Default Cozy Mode
Default cozy mode implemented mostly to be used mobile devices. There should be at most 1 active wrapper, marked with 
`fd-time__wrapper--active` modifier. In those examples it's hour or meridian. The rest of items should be marked as collapsed 
`fd-time__item--collapsed`. Also meridian (AM/PM) wrapper has to contain `fd-time__wrapper--meridian` modifier.

{% capture default-time %}
<div class="docs-time-wrapper">
    <div class="fd-time">
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Hrs</label>
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Increase hours"></button>
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
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Decrease hours"></button>
        </div>
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Min</label>
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--collapsed">25</span>
            </div>
        </div>
    </div>
    
    <div class="fd-time">
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Hrs</label>
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Increase hours"></button>
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
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Decrease hours"></button>
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
    
    <div class="fd-time">
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
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Change Meridian"></button>
            <div class="fd-time__wrapper fd-time__wrapper--active fd-time__wrapper--meridian">
                <ul class="fd-time__list">
                    <span class="fd-time__item">
                        <span class="fd-time__unit">
                            AM
                        </span>
                        <div class="fd-time__current-indicator"></div>
                    </span>
                    <span class="fd-time__item">
                        <span class="fd-time__unit">
                            PM
                        </span>
                    </span>
                </ul>
            </div>
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Change Meridian"></button>
            </div>
        </div>
    </div>

</div>
{% endcapture %}

{% include display-component.html component=default-time %}



## Tablet Mode
Tablet Mode can be added by using `fd-time--tablet` modifier. IT provides lower padding on sides.
{% capture tablet-time %}
<div class="docs-time-wrapper">
    <div class="fd-time fd-time--tablet">
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Hrs</label>
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Increase hours"></button>
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
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Decrease hours"></button>
        </div>
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Min</label>
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--collapsed">25</span>
            </div>
        </div>
    </div>
    
    <div class="fd-time fd-time--tablet">
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Hrs</label>
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Increase hours"></button>
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
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Decrease hours"></button>
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
    
    <div class="fd-time fd-time--tablet">
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
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Change Meridian"></button>
            <div class="fd-time__wrapper fd-time__wrapper--active fd-time__wrapper--meridian">
                    <ul class="fd-time__list">
                        <span class="fd-time__item">
                            <span class="fd-time__unit">
                                AM
                            </span>
                            <div class="fd-time__current-indicator"></div>
                        </span>
                        <span class="fd-time__item">
                            <span class="fd-time__unit">
                                PM
                            </span>
                        </span>
                    </ul>
                </div>
                <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Change Meridian"></button>
            </div>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=tablet-time %}

## Compact Mode
Compact Mode can be added, by using `fd-time--compact` modifier. It's mostly implemented, to be used on desktop devices.
{% capture compact-time %}
<div class="docs-time-wrapper"> 
    <div class="fd-time fd-time--compact">
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Hrs</label>
            <button class="fd-button fd-button--compact fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Increase hours"></button>
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
            <button class="fd-button fd-button--compact fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Decrease hours"></button>
        </div>
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Min</label>
            <div class="fd-time__wrapper">
                <span class="fd-time__item fd-time__item--collapsed">25</span>
            </div>
        </div>
    </div>
    
    <div class="fd-time fd-time--compact">
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Hrs</label>
            <button class="fd-button fd-button--compact fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Increase hours"></button>
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
            <button class="fd-button fd-button--compact fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Decrease hours"></button>
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
    
    <div class="fd-time fd-time--compact">
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
            <button class="fd-button fd-button--compact fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Change Meridian"></button>
            <div class="fd-time__wrapper fd-time__wrapper--active fd-time__wrapper--meridian">
                    <ul class="fd-time__list">
                        <span class="fd-time__item">
                            <span class="fd-time__unit">
                                AM
                            </span>
                            <div class="fd-time__current-indicator"></div>
                        </span>
                        <span class="fd-time__item">
                            <span class="fd-time__unit">
                                PM
                            </span>
                        </span>
                    </ul>
                </div>
                <button class="fd-button fd-button--compact fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Change Meridian"></button>
            </div>
        </div>
    </div>
</div>
{% endcapture %}

{% include display-component.html component=compact-time %}

## Scrollable Mode
Scrollable Mode can be added by using `fd-time--scrollable` modifier. It provides possibility to scroll up and down on 
active columns. So the unit can be chosen by mouse scroll or mobile tap and release. Current indicator element is vertically centered, 
but functionality to fit it inside indicator frames should be implemented no application level.
{% capture scrollable-time %}
<div class="docs-time-wrapper">
    <div class="fd-time fd-time--scrollable">
        <div class="fd-time__col">
            <label class="fd-time__slider-label">Hrs</label>
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Increase hours"></button>
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
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Decrease hours"></button>
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
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Increase hours"></button>
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
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Decrease hours"></button>
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
            <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-up-arrow" aria-label="Change Meridian"></button>
            <div class="fd-time__wrapper fd-time__wrapper--active fd-time__wrapper--meridian">
                    <ul class="fd-time__list">
                        <span class="fd-time__item">
                            <span class="fd-time__unit">
                                AM
                            </span>
                            <div class="fd-time__current-indicator"></div>
                        </span>
                        <span class="fd-time__item">
                            <span class="fd-time__unit">
                                PM
                            </span>
                        </span>
                    </ul>
                </div>
                <button class="fd-button fd-button fd-button--transparent sap-icon--navigation-down-arrow" aria-label="Change Meridian"></button>
            </div>
        </div>
    </div>

</div>
{% endcapture %}

{% include display-component.html component=scrollable-time %}
